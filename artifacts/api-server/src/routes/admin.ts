import { Router, type Request } from "express";
import { db, submissionsTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router = Router();

function checkAuth(req: Request): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const header = req.headers["x-admin-password"];
  return header === password;
}

router.get("/admin/submissions", async (req, res) => {
  if (!checkAuth(req)) {
    res.status(401).json({ ok: false, error: "Unauthorized" });
    return;
  }

  const rows = await db
    .select()
    .from(submissionsTable)
    .orderBy(desc(submissionsTable.createdAt))
    .limit(500);

  res.json({ ok: true, submissions: rows });
});

export default router;
