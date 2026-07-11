---
name: Sister-site duplicate content cleanup
description: Tracks the separate roofing-business websites (outside this codebase) being cleaned of duplicate content/claims and phone-number mixups shared with theroofstore.net.
---

The site owner runs theroofstore.net (this codebase) plus several separate small business websites, none of which live in this repo — they're edited directly by the owner via their own hosting/CMS. My role is read-only verification via `webFetch` (live URL, not source) plus drafting replacement copy; I cannot push edits to these sites myself.

**Why this matters:** these sites had copied "years in business" claims and product-system names/descriptions from theroofstore.net (duplicate content risk for SEO), and had phone numbers cross-wired between sites (real bug — wrong click-to-call number for callers).

## Current status (verified July 11 2026)

- **ftlauderdaleroofcoating.com** ✅ CLEAN — uses RP1a/RP2a/RP3a codes, no full product names, links go to roofprotectproducts.com (correct). No action needed.

- **bestroofpaint.com** ✅ CLEAN — no issues found in latest check. No action needed.

- **roofpaintmiami.com** ⚠️ ONE FIX NEEDED — FAQ page shows "Broward (754) 367-3768" which is the ftlauderdale number, not Miami's. Correct number for this site is (786) 837-9064. Owner must edit the FAQ page in their CMS to fix. No duplicate product copy found.

- **roofrestorationsandwaterproofinginc.com** ✅ FIXED (July 11 2026) — edited directly via FTP (not WordPress). Product card names changed to generic ("Clear Anti-Fungal Roof Coating", "Color Reflective Waterproof Coating", "Full Weatherproof Membrane System"), body copy genericized, "A+ BBB Rated since 1994" removed. GMB verified clean — correct phone (877) 824-5823, no BBB claim, no product names in description. One "Roof Shield" remains in a customer testimonial quote (intentionally left intact).

- **windproofroofsystems.com** ✅ FIXED (July 11 2026) — edited directly via FTP. Same fixes as roofrestorationsandwaterproofinginc.com: product card names genericized, body copy product names removed, "A+ BBB Rated since 1994" removed. One "Roof Shield" remains in customer testimonial (intentionally left). YouTube embed (RrcGPZg7s6I) still same as theroofstore.net — not urgent but worth swapping later. TODO: remove `linkPaused: true` on this site's PartnerNetwork.tsx entry now that fixes are live.

- **flatroofsealants.com** ⚠️ NEW (discovered July 11 2026) — owner's own subsidiary set up for Port St. Lucie / North Florida distributor (authorized). WordPress-based (Divi theme). Issues: (1) footer says "Storm Shield Roof Paint Systems Inc. A+ BBB Rated since 1994" — remove the BBB/1994 claim, replace with "Authorized Storm Shield distributor" or similar; (2) product page copy may overlap with theroofstore.net — needs review once WordPress access confirmed. "The Roof Store Service Areas" label on homepage is fine to keep. Owner has a distributor testimonial letter — good candidate for Distributorships page on theroofstore.net. Owner is sourcing WordPress login.

## Videos
- roofrestorationsandwaterproofinginc.com and windproofroofsystems.com both embed YouTube video RrcGPZg7s6I, same as theroofstore.net Videos page. Not a direct penalty but reinforces shared-content signals. Not urgent to fix.

## Pending (owner action, next session)
- Owner sourcing WordPress access for flatroofsealants.com, roofrestorationsandwaterproofinginc.com, windproofroofsystems.com — may pass credentials to agent to make edits directly
- Distributor letter for flatroofsealants.com distributor — add to Distributorships page on theroofstore.net once owner shares the text

## How to apply
Re-fetch each site with a cache-busting query param before reporting status. Draft copy fixes for owner to paste (or apply directly if given WP access). For windproofroofsystems.com: also remove `linkPaused` on its PartnerNetwork.tsx entry once fixes are live.
