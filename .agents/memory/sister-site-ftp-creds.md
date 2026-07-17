---
name: Sister-site FTP credentials
description: Which Replit secret to use for each sister-site FTP connection — no usernames or hosts stored here.
---

# FTP Secret Lookup

All FTP hostnames, ports, and usernames are documented in `replit.md` (Pending to-dos section) — do NOT duplicate them here.

Replit secret names by site group:

| Site group | Secret name |
|------------|-------------|
| julius@ shared hosting (roofpaintmiami, ftlauderdale, bestroofpaint, flatroofsealants, theroofstore legacy PHP) | `JULIUS_FTP_PASSWORD` |
| windproofroofsystems.com | `WINDPROOF_FTP_PASSWORD` |
| roofrestorationsandwaterproofinginc.com | `RRSW_FTP_PASSWORD` |
| roofprotectproducts.com | `ROOFPROTECT_FTP_PASSWORD` (note: value may be stale — use julius@ fallback per replit.md) |

**Why:** Usernames, hostnames, and email-based login identifiers are credential-adjacent and must not be stored in memory files. Replit.md (visible to the user) is the correct place for operational FTP reference data.
