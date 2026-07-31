import { Router } from "express";
import { z } from "zod";
import { sendLeadEmail, sendAutoResponse, buildAutoResponseHtml, sendLeadEmailViaSmtp, canSendViaSmtp } from "../lib/email";
import { db, submissionsTable } from "@workspace/db";

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length === 10, "Phone must be a 10-digit number"),
  email: z.string().email("A valid email is required"),
  address: z.string().optional(),
  roofType: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(["contact-form", "quote-modal", "city-page-form", "county-page-form", "service-area-form"]).default("contact-form"),
}).superRefine((data, ctx) => {
  // The full contact form requires every field; other lead forms (quote modal,
  // city/county/service-area forms) only collect name, phone, and email.
  if (data.source === "contact-form") {
    if (!data.address?.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["address"], message: "Address is required" });
    if (!data.roofType?.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["roofType"], message: "Roof type is required" });
    if (!data.message?.trim()) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["message"], message: "Message is required" });
  }
});

router.post("/contact", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Invalid submission", details: parsed.error.issues });
    return;
  }

  const data = parsed.data;
  req.log.info({ name: data.name, source: data.source }, "contact form submission received");

  await db.insert(submissionsTable).values({
    name: data.name,
    phone: data.phone,
    email: data.email || null,
    address: data.address || null,
    roofType: data.roofType || null,
    message: data.message || null,
    source: data.source,
  });

  const submission = { ...data, email: data.email || undefined };

  if (process.env.RESEND_API_KEY) {
    try {
      await sendLeadEmail(submission);
      req.log.info({ name: data.name }, "lead email sent via Resend");
      if (data.email) {
        req.log.info({ name: data.name, email: data.email }, "sending auto-response to client");
        sendAutoResponse(submission)
          .then(() => req.log.info({ name: data.name, email: data.email }, "auto-response sent successfully"))
          .catch((err) => req.log.error({ err }, "auto-response email failed (non-blocking)"));
      } else {
        req.log.info({ name: data.name }, "no client email provided — auto-response skipped");
      }
      res.json({ ok: true });
    } catch (err) {
      req.log.error({ err }, "failed to send lead email via Resend");
      res.status(500).json({ ok: false, error: "Failed to send email" });
    }
    return;
  }

  if (canSendViaSmtp()) {
    try {
      await sendLeadEmailViaSmtp(submission);
      req.log.info({ name: data.name }, "lead email sent via SMTP");
      res.json({ ok: true });
    } catch (err) {
      req.log.error({ err }, "failed to send lead email via SMTP");
      res.status(500).json({ ok: false, error: "Failed to send email" });
    }
    return;
  }

  req.log.warn("No email credentials set — submission saved to DB only");
  res.json({ ok: true, note: "saved" });
});

router.get("/email-preview", (req, res) => {
  const name = typeof req.query.name === "string" ? req.query.name : "John";
  const html = buildAutoResponseHtml(name);
  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

export default router;
