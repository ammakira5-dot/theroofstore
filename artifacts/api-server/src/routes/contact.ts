import { Router } from "express";
import { z } from "zod";
import { sendLeadEmail } from "../lib/email";

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().optional(),
  roofType: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(["contact-form", "quote-modal"]).default("contact-form"),
});

router.post("/contact", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Invalid submission", details: parsed.error.issues });
    return;
  }

  const data = parsed.data;

  req.log.info({ name: data.name, source: data.source }, "contact form submission received");

  if (!process.env.RESEND_API_KEY) {
    req.log.warn("RESEND_API_KEY not set — logging submission only");
    req.log.info({ submission: data }, "lead (email not sent)");
    res.json({ ok: true, note: "logged" });
    return;
  }

  try {
    await sendLeadEmail({
      ...data,
      email: data.email || undefined,
    });
    req.log.info({ name: data.name }, "lead email sent");
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "failed to send lead email");
    res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

export default router;
