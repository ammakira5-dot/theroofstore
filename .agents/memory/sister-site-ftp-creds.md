---
name: Sister-site FTP credentials
description: FTP access status for roofprotectproducts.com, windproofroofsystems.com, and roofrestorationsandwaterproofinginc.com — what's known vs blocked.
---

## roofprotectproducts.com
- FTP connection details are in `replit.md` (host, user). Password secret: `ROOFPROTECT_FTP_PASSWORD`.
- **Status:** Secret value doesn't match actual password — use the same credentials that worked in previous sessions. Update the secret to match when convenient.
- **Pending work:** None — roller icon fixes done July 14 2026.

## windproofroofsystems.com
- Password secret: `WINDPROOF_FTP_PASSWORD` (set).
- **Status (July 14 2026):** Blocked — FTP host and username unknown. Tried domain as host, both failed 530. Need user to provide FTP host + username from their cPanel.
- **Pending work:** 4 content fixes (BBB claim, tel href, duplicate product copy, shared testimonials). Once done: re-enable partner link in `PartnerNetwork.tsx` + restore `"owns"` WebSite schema in `Home.tsx` + `index.html`.

## roofrestorationsandwaterproofinginc.com
- Password secret: `RRSW_FTP_PASSWORD` (set).
- **Status (July 14 2026):** Blocked — FTP host and username unknown. Same issue as above.
- **Pending work:** 3 fixes (tel link correction, BBB claim removal, duplicate product copy rewrite).
