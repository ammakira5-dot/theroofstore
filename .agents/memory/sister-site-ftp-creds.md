---
name: Sister-site FTP credentials
description: FTP access status for roofprotectproducts.com, windproofroofsystems.com, and roofrestorationsandwaterproofinginc.com — what's known, what's missing.
---

## roofprotectproducts.com
- **Host:** `ftp.absolutecharters.com:21`
- **User:** `muhammad@roofprotectproducts.com`
- **Password secret:** `ROOFPROTECT_FTP_PASSWORD`
- **Status (July 14 2026):** Secret value (12 chars) doesn't match actual FTP password — login fails with 530. Need user to re-enter the correct password into the secret.
- **Pending work:** Fix roller icon embed URLs — RP1 → `https://www.theroofstore.net/pdf/fungalshield-info.pdf`; RP3 → `https://www.theroofstore.net/pdf/roofshield-info.pdf`. Fixed PHP file already prepared at `/tmp/rpp_prod_roller_fixed.php` (will need to re-download and re-patch if session is long-dead).

**Why:** roofprotectproducts.com is hosted on a cPanel server at absolutecharters.com (shared hosting), not its own domain's FTP.

## windproofroofsystems.com
- **Password secret:** `WINDPROOF_FTP_PASSWORD` (set, unknown length)
- **Host:** UNKNOWN — tried `windproofroofsystems.com` and `ftp.windproofroofsystems.com`, both 530.
- **Username:** UNKNOWN
- **Status:** Blocked — need host + username from user.
- **Pending work (4 fixes):** (1) Remove "A+ BBB Rated since 1994"; (2) Fix tel href `tel:954-900-1973` → `tel:9547430667`; (3) Replace verbatim product copy with tile-restoration paragraph; (4) Remove shared testimonials (Don Godshall, Ana Arias, Arlene Kalb).
- **After fix:** re-enable `linkPaused: true` in `PartnerNetwork.tsx` + restore `"owns"` WebSite schema entries in `Home.tsx` + `index.html`.

## roofrestorationsandwaterproofinginc.com
- **Password secret:** `RRSW_FTP_PASSWORD` (set, unknown length)
- **Host:** UNKNOWN — tried domain and ftp.domain, both 530.
- **Username:** UNKNOWN
- **Status:** Blocked — need host + username from user.
- **Pending work (3 fixes):** (1) Fix tel link `tel:954-900-1973` → `tel:8778245823`; (2) Remove "A+ BBB Rated since 1994"; (3) Rewrite FungalShield/SmartShield/RoofShield section (verbatim copy from theroofstore.net).
