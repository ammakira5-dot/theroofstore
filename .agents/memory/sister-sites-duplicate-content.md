---
name: Sister-site duplicate content cleanup
description: Tracks the separate roofing-business websites (outside this codebase) being cleaned of duplicate content/claims and phone-number mixups shared with theroofstore.net.
---

The site owner runs theroofstore.net (this codebase) plus several separate small business websites, none of which live in this repo — they're edited directly by the owner via their own hosting/CMS. My role is read-only verification via `webFetch` (live URL, not source) plus drafting replacement copy; I cannot push edits to these sites myself.

**Why this matters:** these sites had copied "years in business" claims and product-system names/descriptions from theroofstore.net (duplicate content risk for SEO), and had phone numbers cross-wired between sites (real bug — wrong click-to-call number for callers).

Sites and status as of 2026-07-06:
- **bestroofpaint.com** — GMB "Best Roof Paint and Waterproofing Service," own number 954-400-1324. Fixed: removed "30th year" shared-history claim; fixed click-to-call link (was `tel:8778245823`, wrong number).
- **ftlauderdaleroofcoating.com** — no GMB, number 754-367-3768 (was 877-824-5823, removed/reassigned). Fixed: removed "33 years in business" (homepage) and "27th year in business" (contact-us.php) claims.
- **roofrestorationsandwaterproofinginc.com** — has GMB, real number 877-824-5823. Still open: click-to-call link is wrong (`tel:954-900-1973`, needs to become `tel:8778245823`); also has "A+ BBB Rated since 1994" claim (duplicated from theroofstore.net) and copy in a Fungal Shield/Smart Shield/Roof Shield section that reuses The Roof Store's system names/descriptions verbatim — not yet rewritten. Site edited via WordPress; owner reported login/host access issues blocking edits as of 2026-07-06.
- **roofpaintmiami.com** — no GMB, number (786) 837-9064 (correct, no tel: link bug found). Fixed: removed "BBB A+ rated, established April 12 1994... 25th year in business" claim on contact-us.php. Explicitly references "the roof store distribution network" by name on its homepage — appears to be an intentional authorized-reseller storefront, not a fully independent business (unlike bestroofpaint.com/roofrestorationsandwaterproofinginc.com which don't name-drop The Roof Store).
- **windproofroofsystems.com** — no GMB. This one is different from the others: it's a confirmed, intentional authorized partner (tile roof restoration specialist), not an independent/competing business, and is already listed correctly on theroofstore.net's own Partner Network (`/partner-network`) and Distributorships (`/distributorships`) pages in this codebase (correct phone 954-743-0667, complementary description, no false claims). Still open on windproofroofsystems.com itself: "A+ BBB Rated since 1994" duplicate claim, `tel:` link mismatch (displays 954-743-0667 but links to `tel:954-900-1973`), and a Fungal/Smart/Roof Shield section copied verbatim from theroofstore.net.
- User mentioned more sister sites exist beyond these, not yet discussed in detail.

**How to apply:** When resuming this work, re-fetch each site with a cache-busting query param (see `verification-tool-url-caching.md`) before reporting status. Draft copy fixes for the owner to paste in themselves (I don't have edit access to these sites' code/hosting).
