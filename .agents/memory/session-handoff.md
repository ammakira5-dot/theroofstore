---
name: Session handoff — July 16 2026
description: Where we left off and the full to-do list for the next session
---

## Last session completed (July 16 2026)

- Factory page: "View Product Specs & Buckets" → now links to /roof-systems (on-site) instead of roofprotectproducts.com; manufacturer link kept as small secondary text
- Factory page: wrench emoji → SSS eagle logo (sss-logo.png) in a green rounded badge
- City pages (all 80+): product card block (RP1/RP2/RP3) added in main content + sidebar widget — done in prior session
- roofprotectproducts.com: product images reverted to DB-driven display, uploaded via FTP
- 3-click journey mapped and fixed for all 3 prospect types: GMB homeowner, GMB informed buyer, organic city page visitor

## Next session — pick up here

### 🔴 Priority 1 — Resend domain verification
Auto-response emails (price sheet PDF) silently failing for all clients.
- User action needed: add TXT records in Porkbun DNS for theroofstore.net, verify in Resend
- Agent action after: set RESEND_FROM env var to `The Roof Store <leads@theroofstore.net>`
- Then: wire roofprotect-product-presentation.pdf into contact form auto-response

### Priority 2 — Factory page distributor review
Decide: list rrsw, bestroofpaint, flatroofsealants individually on /factory OR route through /partner-network only (safer for Google compliance)

### Priority 3 — roofpaintmiami.com
- Create GMB listing (service-area business, Miami-Dade, phone 786-837-9064)
- Replace 9 Broward commercial photos with real Miami-Dade job photos (via julius@ FTP)
- Add to GSC as property, submit sitemap

### Priority 4 — theroofstore.net SEO (owner must provide)
- Review count in schema: update from "10" to real count
- GA4 measurement ID: add tag or GTM container
- BBB/Facebook/Yelp URLs for sameAs schema

### Lower priority
- Add Review-type schema to individual review entries
- WordPress blog tagline fix
- SmartShield gallery: more photos coming from user
- shopping.theroofstore.net legacy subdomain 301 redirect
