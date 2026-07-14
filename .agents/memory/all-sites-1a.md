---
name: ALL SITES 1A
description: Master reference — every site in the network, GMB status, FTP access, GSC status, SEO state.
---

# ALL SITES 1A — Network Master Reference
_Last updated: July 14, 2026_

| # | Domain | Role | GMB | GSC | FTP Access | SEO Status |
|---|--------|------|-----|-----|-----------|------------|
| 1 | theroofstore.net | Main storefront — React/Vite SPA (this codebase) | ✅ Has GMB (needs optimization) | ✅ In GSC | n/a (Replit deploy) | ✅ Audited + fixed July 2026 |
| 2 | roofprotectproducts.com | Manufacturer/product site — PHP | ❓ Unknown | ❓ Unknown | ✅ `muhammad@roofprotectproducts.com` via `ftp.absolutecharters.com` — secret: `ROOFPROTECT_FTP_PASSWORD` (note: secret value stored wrong, actual creds differ) | ✅ 10-issue audit done July 13 2026 |
| 3 | ftlauderdaleroofcoating.com | Geo satellite — Broward / Fort Lauderdale — PHP | ❓ Unknown | ✅ In GSC | ✅ `julius@absolutecharters.com` via `ftp.absolutecharters.com` — secret: `JULIUS_FTP_PASSWORD` | ✅ SEO fixed July 14 2026 |
| 4 | roofpaintmiami.com | Geo satellite — Miami-Dade — PHP | ❓ Unknown | ❌ Not yet in GSC | ✅ Same as above | ✅ SEO fixed July 14 2026 (was missing title+desc entirely) |
| 5 | bestroofpaint.com | Broad South FL satellite — HTML + PHP | ❓ Unknown | ❌ Not yet in GSC | ✅ Same as above | ✅ SEO fixed July 14 2026 |
| 6 | flatroofsealants.com | Niche satellite — flat roof sealants — PHP | ❓ Unknown | ✅ In GSC | ✅ Same julius@ account | ❓ Not yet audited |
| 7 | windproofroofsystems.com | Partner/installer site — PHP | ❓ Unknown | ✅ In GSC | ❌ Password secret exists (`WINDPROOF_FTP_PASSWORD`) but FTP host + username unknown | ⚠️ 4 fixes pending (BBB claim, wrong tel, duplicate copy, shared testimonials) |
| 8 | roofrestorationsandwaterproofinginc.com | Partner/installer site — PHP | ❓ Unknown | ✅ In GSC | ❌ Password secret exists (`RRSW_FTP_PASSWORD`) but FTP host + username unknown | ⚠️ 3 fixes pending (tel link, BBB claim, duplicate copy) |
| 9 | shopping.theroofstore.net | Abandoned legacy subdomain (old ~2020 PHP cart) | ❌ N/A | ❓ May be indexed | ✅ Same julius@ account (confirmed on FTP server) | ⚠️ Needs 301 redirect → theroofstore.net |

---

## GMB Key
- ✅ Confirmed has GMB profile
- ❌ No GMB (or N/A)
- ❓ Unknown — needs confirmation from owner

## Notes
- **All PHP sites** share the same cPanel hosting on `ftp.absolutecharters.com:21`
- **GSC 7-property network**: theroofstore.net, ftlauderdaleroofcoating.com, windproofroofsystems.com, roofrestorationsandwaterproofinginc.com, flatroofsealants.com, bestroofpaint.com (pending), roofpaintmiami.com (pending)
- **theroofstore.net GMB**: owner to verify optimization — photos, services, hours, Q&A, 50+ review target
- **Satellite site phones**: ftlauderdaleroofcoating.com → (754) 367-3768 | roofpaintmiami.com → (786) 837-9064 | bestroofpaint.com → (954) 400-1324 | theroofstore.net main → (954) 210-9614
- **Google Ads call-tracking number**: 954-900-1973 (intentionally kept on roofprotectproducts.com only)
