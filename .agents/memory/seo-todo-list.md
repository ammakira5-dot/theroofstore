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

### 🔴 PRIORITY 1 — No server-side rendering (SSR/prerendering) on city/county pages — NOT DONE, biggest open item
City/county pages (111 + 4) are 100% client-rendered — raw HTML from the server is an empty shell (`<div id="root">` empty); only `<title>`/meta/OG tags are injected server-side, not the visible body content. Googlebot must execute JS to see any content at all, which is slower/less reliable at scale across 100+ near-identical-template pages. This is the most credible root cause for the "only 5 URLs indexed despite 137 in sitemap" finding (Audit #2 Section 7). Also corrects Section 4's earlier verdict: city blurbs are unique but average only ~56 words (44-91 range), well under the audit's suggested 300-400 word threshold — "unique" was true but "sufficient depth" was not, so Section 4 was too quick to call this a pure strength.
Fix requires an architecture decision (SSR vs. static prerendering vs. other) — to be discussed with user before implementation.

### ✅ #1a — Fix duplicate `<title>`, `<meta description>`, `og:*` tags sitewide (ICE 9/10) — DONE July 9 2026
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

### ✅ #4 — www vs non-www canonical consistency (ICE 7.5/10) — DONE July 9 2026
Fixed 6 internal non-www links (4 Blog.tsx post URLs, 2 PDF links in Products.tsx/data.ts) to use `https://www.theroofstore.net`. Added server.js middleware: any request with `Host: theroofstore.net` now 301-redirects to `www.theroofstore.net` + original path. Left bare "theroofstore.net" mentions in OriginalRoofStore.tsx / TrademarkEvidenceFile.tsx untouched — those are historical/legal domain-registration documentation, not live links.

### ✅ #5 — VideoObject schema on /videos page — DONE July 9 2026
VideoObject schema already existed (ItemList of VideoObjects). Fixed the `description` field, which was using the short category tag (e.g. "Customer Testimonial") instead of the rich per-video description text — now uses full desc for better Google Video Search eligibility.

### ✅ #6 — Service schema on city/county service area pages — DONE July 9 2026
Added standalone `Service` schema (serviceType, provider, areaServed, hasOfferCatalog) to both CityPage.tsx and CountyPage.tsx, alongside the existing RoofingContractor schema. Previously services were only nested inside RoofingContractor's offer catalog with no explicit Service entity tied to areaServed — now each city/county page has its own clear Service schema for local SEO.

### ✅ #7 — CRITICAL: homepage shipped with zero title/meta/OG tags in production — DONE July 9 2026
Self-introduced regression from fix #1: `server.js` mounted `sirv` (static file server) before the meta-injection fallback. Since `dist/public/index.html` is a real file, sirv served it directly for `/` — completely bypassing meta injection, which only runs for paths sirv can't resolve. Fixed by gating sirv to only handle paths with a file extension (real assets); all extensionless page routes (including `/`) now always go through the meta-injection middleware. Verified locally: homepage has correct `<title>`, single `og:title`, and assets still 200.

### ✅ #8 — Sitemap missing 4 real pages (ICE 6/10) — DONE July 9 2026
`/silicone-vs-elastomeric-roof-coating`, `/roof-painting-vs-coating`, `/roof-replacement-alternative-florida`, `/roof-life-certification` all exist as real routes/pages but were never added to `scripts/src/generate-sitemap.ts`'s `staticRoutes` list. Added all 4; sitemap regenerated (now 137 URLs, was 133).

### ✅ #9 — reviewCount hardcoded "19", didn't match actual review count — DONE July 9 2026
Actual reviews on `/reviews` page = 10 (1 featured + 9 listed). Fixed hardcoded `"19"` → `"10"` in Home.tsx, ProductDetail.tsx, and index.html schema to match reality (Reviews.tsx already computed it dynamically via `allReviews.length`).

### ⏳ #10 — Trim `<title>` tags over ~60-65 chars sitewide (ICE 5/10) — NOT DONE
Many pages (Home, Videos, Products, Blog, RoofSystems, Faq, About, RoofReplacementAlternative, etc.) have titles >60 chars, which Google truncates in SERPs. Needs a page-by-page pass to shorten while keeping primary keyword + brand. Not done this session — lower priority, high page count, needs care to preserve keyword targeting per page.

### ⏳ #11 — Add BBB/Yelp/Houzz to `sameAs` schema array (ICE 6/10) — BLOCKED, needs owner input
`index.html` LocalBusiness schema `sameAs` only has the domain + 2 Google Maps links. Cannot add BBB/Yelp/Houzz profile URLs without the user providing the real links — fabricating them would be worse than leaving them out (broken/invalid schema).

### ⏳ #12 — RoofShield product schema image mismatch (audit claim, ICE n/a) — UNVERIFIED / likely stale
Audit claimed `smartshield-pail.png` used on RoofShield page. Checked `products/data.ts` — no such mismatch found in current source. Likely already fixed or audit was stale. Needs one more live-page check to fully close out.

### ⏳ #13 — Homepage geo-keyword H2, absolute OG image URLs on city pages, Review schema snippets — NOT YET TRIAGED
Remaining lower-priority items from audit #2 (add geo keyword to a homepage H2, confirm city-page `og:image` values are absolute URLs not relative, add explicit Review-type schema snippets). Not verified/actioned this session.

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

---

## Audit #2 Section-by-Section Review (in progress, July 9 2026)

Going through the second audit's "Key Risks" list with the user one section at a time, confirming status against the live published site before any further changes. Final consolidated list to be handed to the user for their team once all sections are reviewed.

### Section 1 — Key Risks (reviewed, confirmed against live site)
- ✅ Duplicate `<title>`/`<meta description>` — fixed, verified 1 of each on live homepage
- ✅ Duplicate `og:title`/`og:description`/`og:url` — fixed, verified 1 of each on live homepage
- ✅ Homepage H1 brand-focused not keyword-targeted — fixed in first audit round, stale claim
- ✅ FAQ page answers not indexed — fixed (accordion → always-visible text); not 100% verified via rendered-DOM/Google-side check, code-level fix confirmed only
- ⏳ **Owner action** — Blog has only 4 stale posts (Aug–Sep 2024) — needs real new content, not a code fix
- ⏳ **Owner action / expected to self-resolve** — Thin Google index footprint (site: query only 5 URLs) — should improve as Google re-crawls now that sitemap is fixed + resubmitted; nothing more to do in code
- ⏳ **Owner action** — Low off-page/editorial authority, no backlinks — outreach/PR/citations work, already tracked below
- ✅ reviewCount hardcoded "19" — fixed, now correctly shows "10" (actual review count) everywhere

### Section 2 — Funnel Coverage Gap: TOFU (Informational) (reviewed, confirmed against live site)
- ⏳ **Owner/content action** — Partially stale claim: 4 comparison/guide pages already live (silicone-vs-elastomeric, roof-painting-vs-coating, roof-replacement-alternative-florida, roof-life-certification) covering some coating-type/comparison ground.
- ⏳ **Owner/content action — confirmed real gap** — No dedicated content for "how long does roof coating last Florida" (lifespan-specific guide) or "rubber roof vs replacement" as its own comparison piece.
- ⏳ **Owner/content action — confirmed real gap** — Nothing addresses "DIY vs pro" roof coating angle at all.
- Not a code fix — needs new blog posts/landing pages with real claims/expertise from the user or their team. Agent can draft outlines on request but should not fabricate technical/warranty claims.

### Section 3 — Funnel Coverage Gap: BOFU (Transactional) (reviewed, confirmed against live site)
- ✅ "roof coating contractor Broward" / "roof coating company Davie FL" — Davie/Broward city pages exist with geo-targeted title/description + phone CTA
- ✅ "TAS-106 roof coating" — stale claim, actually one of the most heavily covered differentiators sitewide (15+ pages: RoofShield product, RoofSystems, About, FAQ, Blog, Questions, Videos, RoofReplacementAlternative, city/county pages)
- ⏳ **Owner/content action — confirmed real gap** — No pricing signals on city-specific pages. Only a generic `$$` price-range symbol in schema; no actual pricing ranges, "starting at" language, or financing/quote conversion elements in visible content. Needs real pricing input from the user before anything can be added (agent should not fabricate prices).

### Section 4 — Funnel Coverage Gap: Local/Near-me (reviewed, confirmed against live site)
- ✅ "roof coating near me" / "roof coating Fort Lauderdale" / "liquid rubber roof Boca Raton" — confirmed strong: 111 city pages + 4 county pages, all in sitemap
- ✅ Content depth verified (audit flagged as "not sampled") — every one of the 111 city pages has a genuine unique ~300-450 character local blurb (housing stock era, roof type prevalence, local climate factors) layered on the shared page template (geo schema, maps embed, Service schema, phone CTA) — this is real per-city content, not thin/duplicate boilerplate
- No action needed — this is a strength, not a gap

### Section 5 — Seasonal Opportunity (reviewed, confirmed against live site)
- ✅ TAS-106 / Citizens Insurance content well-positioned — Citizens Insurance and Senate Bill 2-D content is substantive and specific (not vague), TAS-106 is the site's strongest repeated differentiator
- ⏳ **Owner/content action — confirmed real gap** — All 4 blog posts dated August–September 2024 (~2 years stale as of July 2026). Same root cause as Section 1's "stale blog" gap — not a separate fix, folding into that item.
- ⏳ **Owner/content action — confirmed real gap** — No content built specifically around the hurricane-prep window (May–Oct) — e.g. no pre-season checklist or "before hurricane season" timed messaging. Citizens Insurance/recertification angle is covered well, but the seasonal-timing angle is not.

### Section 6 — Channel Mix Observation (reviewed, confirmed against live site)
- ⏳ **Confirmed real gap — no analytics installed** — No Google Analytics/GTM or any tracking found anywhere in the codebase. Without this, actual channel mix (direct/organic/referral/paid) can't be measured on-site at all; the audit's channel-mix claim is likely inferred from external tools (SEMrush/Ahrefs), not real analytics data. Awaiting user decision on whether to add GA4.
- ✅ "Storm Shield" Yelp listing is legitimate — "Storm Shield Paint Systems Inc." is the real licensed contracting entity (schema `legalName`, footer, trademark evidence docs) — not a mix-up or duplicate business
- ✅ Duplicate metadata (suspected CTR suppressor) — already fixed in Section 1

### Section 7 — Google Index Coverage Is Extremely Thin (reviewed, confirmed against live site)
- 🔴 **Real root cause identified, now Priority 1** — City/county pages have no SSR/prerendering: raw HTML body is empty, only meta tags are server-injected. Very plausible explanation for why only 5 of 137 sitemap URLs are indexed. See Priority 1 item above.
- ⚠️ **Correction to Section 4** — City blurbs are unique but average only ~56 words (44-91 range), below the audit's 300-400 word suggestion. Section 4's "no action needed" verdict was too quick — uniqueness ≠ sufficient depth. Folded into the Priority 1 item since both point to the same underlying page-architecture issue.
- ⏳ **Owner action, can't verify from here** — Search Console index coverage report / manual actions check requires the user's Search Console access.

(More sections pending — user is sending audit sections one at a time for review.)
