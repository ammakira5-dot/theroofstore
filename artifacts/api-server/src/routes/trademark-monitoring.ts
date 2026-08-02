import { Router, type Request } from "express";
import { createHash } from "node:crypto";
import { createReadStream, existsSync } from "node:fs";
import { join } from "node:path";
import { CASE_FILE_HTML } from "./case-file-content";
import { z } from "zod";
import { db, trademarkMonitoringLogTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router = Router();

const CHECK_TARGET_URL = "https://theroof.store/";

type AuthRole = "admin" | "attorney" | false;

function checkAuth(req: Request): AuthRole {
  const header = req.headers["x-admin-password"];
  if (typeof header !== "string" || !header) return false;

  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminPassword && header === adminPassword) return "admin";

  const attorneyPassword = process.env.ATTORNEY_ACCESS_PASSWORD;
  if (attorneyPassword && header === attorneyPassword) return "attorney";

  return false;
}

router.get("/trademark-monitoring/entries", async (req, res) => {
  const role = checkAuth(req);
  if (!role) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }

  const rows = await db
    .select()
    .from(trademarkMonitoringLogTable)
    .orderBy(desc(trademarkMonitoringLogTable.createdAt))
    .limit(500);

  res.json({ ok: true, role, entries: rows });
});

const ManualEntrySchema = z.object({
  summary: z.string().min(1, "Summary is required"),
  details: z.string().optional(),
  sourceUrl: z.string().optional(),
  recordedBy: z.string().optional(),
});

router.post("/trademark-monitoring/entries", async (req, res) => {
  if (checkAuth(req) !== "admin") {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }

  const parsed = ManualEntrySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Invalid entry", details: parsed.error.issues });
    return;
  }

  const data = parsed.data;
  req.log.info({ summary: data.summary }, "manual trademark monitoring entry recorded");

  const [row] = await db
    .insert(trademarkMonitoringLogTable)
    .values({
      entryType: "manual",
      summary: data.summary,
      details: data.details ?? null,
      sourceUrl: data.sourceUrl ?? null,
      recordedBy: data.recordedBy ?? null,
    })
    .returning();

  res.json({ ok: true, entry: row });
});

export async function runAutomatedCheck(recordedBy = "automated-check") {
  try {
    const response = await fetch(CHECK_TARGET_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; TrademarkMonitor/1.0)" },
      signal: AbortSignal.timeout(15000),
    });
    const html = await response.text();
    const hash = createHash("sha256").update(html).digest("hex");

    const previousAutoEntries = await db
      .select()
      .from(trademarkMonitoringLogTable)
      .orderBy(desc(trademarkMonitoringLogTable.createdAt))
      .limit(50);
    const lastAuto = previousAutoEntries.find(
      (e) => e.entryType === "auto_check" && e.contentHash !== null,
    );

    const changed = !lastAuto ? null : lastAuto.contentHash !== hash;

    const summary = !lastAuto
      ? "Baseline snapshot captured (first automated check)."
      : changed
        ? "CHANGE DETECTED since last automated check — needs human review."
        : "No change detected since last automated check.";

    const snapshot = html.slice(0, 20000);

    const [row] = await db
      .insert(trademarkMonitoringLogTable)
      .values({
        entryType: "auto_check",
        summary,
        details: changed
          ? "The fetched page content hash differs from the previous automated check. Review the stored snapshot below and add a manual entry confirming what changed."
          : null,
        sourceUrl: CHECK_TARGET_URL,
        contentSnapshot: snapshot,
        contentHash: hash,
        recordedBy,
      })
      .returning();

    return { ok: true as const, entry: row, changed };
  } catch (err) {
    const [row] = await db
      .insert(trademarkMonitoringLogTable)
      .values({
        entryType: "auto_check",
        summary: "Automated check FAILED to reach target site.",
        details: err instanceof Error ? err.message : "Unknown error",
        sourceUrl: CHECK_TARGET_URL,
        recordedBy,
      })
      .returning();
    return { ok: true as const, entry: row, changed: null, warning: "Check failed — see details", err };
  }
}

router.post("/trademark-monitoring/check-now", async (req, res) => {
  if (checkAuth(req) !== "admin") {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }

  const result = await runAutomatedCheck("manual-trigger");
  if (result.err) {
    req.log.error({ err: result.err }, "automated trademark monitoring check failed");
  }
  const { err, ...response } = result;
  res.json(response);
});

router.get("/trademark-monitoring/verify", (req, res) => {
  const role = checkAuth(req);
  if (!role) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }
  res.json({ ok: true, role });
});

// CONFIDENTIAL case-file content — served only after password verification.
router.get("/trademark-monitoring/case-file", (req, res) => {
  const role = checkAuth(req);
  if (!role) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }
  res.json({ ok: true, role, html: CASE_FILE_HTML });
});

// CONFIDENTIAL brief download — served only after password verification.
router.get("/trademark-monitoring/case-file/brief", (req, res) => {
  const role = checkAuth(req);
  if (!role) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }
  const briefPath = join(process.cwd(), "private", "bcf-77419-x.docx");
  if (!existsSync(briefPath)) {
    res.status(404).json({ ok: false, error: "Brief not found" });
    return;
  }
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  res.setHeader("Content-Disposition", 'attachment; filename="Brief of Claimant - The Roof Store.docx"');
  res.setHeader("Cache-Control", "no-store");
  createReadStream(briefPath).pipe(res);
});

export default router;
