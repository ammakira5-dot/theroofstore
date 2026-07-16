---
name: Sister-site FTP credentials
description: Confirmed FTP access for all 8 sites in the network — host, username, and secret name for each.
---

# FTP Master List — All Sites Confirmed

All passwords stored as Replit secrets — never stored here. Get values from the dashboard Secrets tab.

| Site | FTP Host | Port | Username | Secret Name | Status |
|------|----------|------|----------|-------------|--------|
| roofprotectproducts.com | ftp.absolutecharters.com | 21 | julius@absolutecharters.com | JULIUS_FTP_PASSWORD | ✅ Confirmed July 16 2026 |
| roofpaintmiami.com | ftp.absolutecharters.com | 21 | julius@absolutecharters.com | JULIUS_FTP_PASSWORD | ✅ Confirmed July 14 2026 |
| ftlauderdaleroofcoating.com | ftp.absolutecharters.com | 21 | julius@absolutecharters.com | JULIUS_FTP_PASSWORD | ✅ Confirmed July 14 2026 |
| bestroofpaint.com | ftp.absolutecharters.com | 21 | julius@absolutecharters.com | JULIUS_FTP_PASSWORD | ✅ Confirmed July 14 2026 |
| theroofstore.net (old PHP) | ftp.absolutecharters.com | 21 | julius@absolutecharters.com | JULIUS_FTP_PASSWORD | ✅ Folder visible in FTP root |
| flatroofsealants.com | ftp.absolutecharters.com | 21 | julius@absolutecharters.com | JULIUS_FTP_PASSWORD | ✅ Via julius@ |
| windproofroofsystems.com | ftp.windproofroofsystems.com | 21 | Fullstack2@windproofroofsystems.com | WINDPROOF_FTP_PASSWORD | ✅ Confirmed July 14 2026 — password reset in cPanel |
| roofrestorationsandwaterproofinginc.com | ftp.roofrestorationsandwaterproofinginc.com | 21 | roofrestorationsandwaterproofinginc@roofrestorationsandwaterproofinginc.com | RRSW_FTP_PASSWORD | ✅ Confirmed July 16 2026 |

## Notes
- ROOFPROTECT_FTP_PASSWORD secret has wrong/stale value — roofprotectproducts.com is accessible via julius@ instead, so this secret is not needed for day-to-day work.
- All julius@ sites share one hosting account on absolutecharters.com — one login, many site folders in the root.
- flatroofsealants.com confirmed via julius@ root listing (not yet audited).
