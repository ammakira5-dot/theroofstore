---
name: SEO To-Do List (theroofstore.net)
description: Master prioritized to-do list from July 9, 2026 StoreClaw audit + in-session work. Split into codebase fixes (agent can do) vs. owner-action items.
---

## Already Done (as of July 9, 2026)
- ✅ Geo meta tags on all 80+ city pages and 3 county pages (server-side injection)
- ✅ Google Maps embed on all city service area pages
- ✅ FAQPage schema on all 3 product pages (FungalShield, SmartShield, RoofShield)
- ✅ Product `offers` schema on all 3 products (price + availability)
- ✅ Homepage FAQ section (6 visible Q&As in HTML, no accordion) + FAQPage schema
- ✅ Sitemap submitted to Google Search Console

---

## Codebase Fixes — Agent Can Do (prioritized by ICE score)

### ✅ #1 — Fix duplicate `<title>`, `<meta description>`, `og:*` tags sitewide (ICE 9/10) — DONE July 9 2026
Stripped all static meta/OG/title/canonical tags from `index.html`; switched `server.js` from regex-replace to single insert-before-`</head>` block. React Helmet is now the sole client-side source; server.js is the sole server-side source. No more duplicates.

### ✅ #2 — Fix /faq page answer visibility (ICE 8.5/10) — DONE July 9 2026
Replaced JS Accordion with always-visible Q&A cards (`<h2>` + `<p>` per item). All 19 answers now in HTML DOM. FAQPage schema already present.

### ✅ #3 — H1 keyword optimization (ICE 8/10) — DONE July 9 2026
Real competitor research (Rhino Shield, Paint2Last, Big Green Men, Pearl Roof, G&J Roofing, South Star Roofing, Roofing Recovery FL) showed winning pattern: "coating" language (never "painting"), hyper-local geo, no jargon in H1. Applied sitewide:
- Homepage H1 → "Rubber Roof Coating South Florida — Tile, Flat & Metal Roofs" (kept old tagline as subtext)
- `/roof-systems` → "Roof Coating Systems in South Florida — Tile, Flat & Metal Roofs"
- `/products` → "FungalShield, SmartShield & RoofShield — Roof Coating Products for South Florida"
- City pages template → "Roof Coating Services in {City}, FL" (dropped "Rubber" prefix for consistency)
- County pages template → "Roof Coating Services in {County}"
- Miami-Dade County page given special enhanced H1 (highest-competition market): "Roof Coating Services in Miami-Dade County, FL — Tile & Flat Roofs"
- Homepage explicitly does NOT include "Davie" (business location) — geo meta tags/schema handle that; city pages own city-specific keyword targeting.

### 🟡 #4 — www vs non-www canonical consistency (ICE 7.5/10)
Blog posts link to `theroofstore.net` (no www). All internal links, og:url, canonical tags, and sitemap entries must consistently use `https://www.theroofstore.net`. Verify server.js 301-redirects non-www → www.

### 🟡 #5 — VideoObject schema on /videos page
The /videos page exists in sitemap but has no VideoObject schema. Adding it helps YouTube embeds surface in Google video results.

### 🟡 #6 — Service schema on city/county service area pages
City and county pages have geo tags and maps, but no `Service` schema. Adding it strengthens the local SEO signal for each service area.

---

## Owner Must Do (not in this codebase)

### WordPress blog
- **Fix tagline**: Log into WP → Settings → General → change "Just another WordPress site" to "The Roof Store | Roof Coating Tips & News" — takes 5 minutes.
- **Publish 2 blog posts/month** targeting: hurricane season prep, Citizens Insurance recertification, silicone vs elastomeric roof coating comparisons.
- **Add author bios** with credentials to existing 4 blog posts (E-E-A-T / GEO).

### Off-page / local authority
- **Review campaign**: Target 50+ Google reviews in 60 days. Text/email past customers a direct GBP review link after each job. This is the single highest-ROI action for Local Pack rankings.
- **Citations**: Claim/create listings on Angi, HomeAdvisor, Houzz, BBB, Thumbtack, and local Broward County business directories.
- **Google Business Profile**: Verify it's claimed and fully optimized (photos, services, hours, Q&A).

---

## Sister Sites Pending (waiting on WordPress/hosting access)

### roofrestorationsandwaterproofinginc.com (3 fixes, WordPress access needed)
1. Fix click-to-call: `tel:954-900-1973` → `tel:8778245823`
2. Remove "A+ BBB Rated since 1994" claim (duplicate of theroofstore.net)
3. Rewrite FungalShield/SmartShield/RoofShield section (currently verbatim copy from theroofstore.net)

### windproofroofsystems.com (3 fixes, replacement copy already drafted — just needs pasting)
1. Remove "A+ BBB Rated since 1994" claim
2. Fix tel link: displays 954-743-0667 but `href` is `tel:954-900-1973`
3. Replace verbatim product copy (FungalShield/SmartShield/RoofShield) with tile-restoration-specific paragraph

### theroofstore.net (in codebase, 1 item)
- Re-enable windproofroofsields.com partner link in `PartnerNetwork.tsx` once their 3 fixes above go live (`linkPaused: true` → remove flag)
