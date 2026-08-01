---
name: Sister-site contact forms relay through mail.theroofstore.net
description: Why sister-site contact form emails break when theroofstore.net DNS changes.
---

All sister-site contact forms (confirmed roofrestorationsandwaterproofinginc.com; windproofroofsystems.com likely same) send BOTH the admin notification and the customer auto-reply via SMTP through `mail.theroofstore.net:587` with a hardcoded login in `actions/send_email.php` on each site.

**Why:** When theroofstore.net DNS was repointed (site moved to Replit hosting / Resend email work, July 2026), `mail.theroofstore.net` resolved to the new web host (34.111.x.x, no SMTP), so every sister-site form email silently fails (redirect `?error=2`). Diagnosed Aug 1 2026.

Forms also POST a copy of each submission to `mail-managment.absolutecharters.com/save-form-data`, so leads may be recoverable there even when email fails.

**How to apply:** If sister-site form email breaks, first check what `mail.theroofstore.net` resolves to and whether port 587 answers — before touching the site's PHP. Fix options: restore a `mail.` DNS record at oneworldhosting cPanel pointing at the real mail server, or rewrite send_email.php to use a working SMTP/Resend. Never change theroofstore.net DNS without checking this dependency.

**Status Aug 1 2026:** roofrestorationsandwaterproofinginc.com rewired to Resend API (from leads@theroofstore.net, admin → roofrestor@bellsouth.net + ammakira5@gmail.com, client auto-reply = factorySheet + presentation PDF on site root) — owner-tested OK. bestroofpaint.com / ftlauderdaleroofcoating.com / roofpaintmiami.com: own SMTP still works; only added ammakira5 as second admin recipient in process.php (originals backed up as *_backup_aug1_2026.php on each server). Still pending: windproofroofsystems.com (dead SMTP, needs full Resend rewire) and flatroofsealants.com (WordPress, do last).
