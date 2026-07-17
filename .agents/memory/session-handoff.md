---
name: Session handoff — July 17 2026
description: Where we left off and the full to-do list for the next session
---

## This session completed (July 17 2026)

### GSC schema fixes (published live)
- Factory page: `@type: "Product"` → `@type: "Service"` in makesOffer array (fixed 3 invalid GSC Product snippets)
- CommercialRoofs.tsx: removed `hasOfferCatalog` block (fixed 3 invalid GSC Product snippets)
- reviewCount updated from "10" → "9" site-wide (Home.tsx + ProductDetail.tsx)

### Routes / 404 audit (all published live)
- Discovered server uses `routes.json` manifest — any path not in it returns hard 404
- Found 10 pages 404-ing in production:
  - Content pages added to routes.ts + sitemap: /pricing, /partner-network, /roof-pressure-cleaning, /the-original-roof-store-florida, /manufacturers-report
  - Utility pages added to server.js SERVE_ONLY_ROUTES (not in sitemap): /privacy, /terms, /admin, /trademark-evidence-file, /trademark-monitoring-log
- Regenerated routes.json + sitemap.xml via `pnpm --filter @workspace/scripts run generate-sitemap` (now 144 routes)
- IMPORTANT: always add new pages to `scripts/src/routes.ts` then run generate-sitemap — never edit sitemap.xml or routes.json directly

### GSC indexing — requested indexing on these pages
- /products/fungalshield, /products/roofshield, /projects, /reviews, /faq, /pricing, /partner-network, /roof-pressure-cleaning

### Sitemap submitted to GSC
- Submitted https://www.theroofstore.net/sitemap.xml in GSC → Sitemaps section (first time ever)

## RESUME HERE — GSC live test queue

Still to run live tests on (in order):
1. https://www.theroofstore.net/the-original-roof-store-florida ← START HERE
2. https://www.theroofstore.net/manufacturers-report
3. https://www.theroofstore.net/roof-systems
4. https://www.theroofstore.net/contact
5. https://www.theroofstore.net/silicone-vs-elastomeric-roof-coating
6. https://www.theroofstore.net/roof-painting-vs-coating
7. https://www.theroofstore.net/roof-replacement-alternative-florida
8. https://www.theroofstore.net/roof-life-certification
9. https://www.theroofstore.net/tile-roof-painting
10. https://www.theroofstore.net/silicone-roof-coating
11. https://www.theroofstore.net/distributorships
12. https://www.theroofstore.net/blog
13. https://www.theroofstore.net/shop

For each: if "available to Google" → request indexing, move on.
If 404 → add to scripts/src/routes.ts, run generate-sitemap, publish.
If schema errors → fix in code, publish, request re-indexing.

## Bigger to-dos (not yet started)

### 🔴 Priority — Resend domain verification
Auto-response emails (price sheet PDF) silently failing for all clients.
- User action: add TXT records in Porkbun DNS for theroofstore.net, verify in Resend
- Agent action after: set RESEND_FROM env var to `The Roof Store <leads@theroofstore.net>`
- Then: wire roofprotect-product-presentation.pdf into contact form auto-response

### Priority — Factory page distributor review
Decide: list rrsw, bestroofpaint, flatroofsealants individually on /factory OR route through /partner-network only

### Priority — roofpaintmiami.com
- Create GMB listing (service-area business, Miami-Dade, phone 786-837-9064)
- Replace 9 Broward commercial photos with real Miami-Dade job photos (via julius@ FTP)
- Add to GSC as property, submit sitemap

### Owner-provided items still pending
- GA4 measurement ID (add tag or GTM)
- BBB/Facebook/Yelp URLs for sameAs schema in Home.tsx
