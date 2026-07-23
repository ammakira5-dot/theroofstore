# The Roof Store — theroofstore.net

South Florida roof coating storefront, SEO hub, and brand-infringement evidence platform for The Roof Store / Storm Shield Paint Systems Inc. (Broward County, FL).

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/scripts run refresh-city-images` — re-download city images from Unsplash into a local temp dir
- `pnpm --filter @workspace/scripts run upload-city-images-to-storage` — upload local city images to App Storage (GCS CDN); **this is the source of truth for city images** — served exclusively from `/api/storage/public-objects/cities/`
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- DB schema: `lib/db/src/schema.ts`
- API spec: `lib/api-spec/`
- Evidence pages: `artifacts/roof-store/src/pages/TrademarkEvidenceFile.tsx`, `TrademarkEvidencePrint.tsx`
- Blog posts: `artifacts/roof-store/src/data/blogPosts.ts`
- City pages: `artifacts/roof-store/src/data/cities.ts`
- Email auto-response: `artifacts/api-server/src/lib/email.ts`

## Architecture decisions

- City images removed from repo — served from App Storage CDN (`/api/storage/public-objects/cities/`)
- theroofstore.net DNS managed by **oneworldhosting.com cPanel** (NOT Porkbun) — all DNS changes go there
- Resend live: `RESEND_FROM = The Roof Store <leads@theroofstore.net>` — factory price sheet auto-response emails active

## User preferences

- **HARD RULE — Never build, edit, or create any file until the user has explicitly said "yes", "go ahead", "do it", or equivalent. Presenting a plan and receiving no clear approval is NOT permission to proceed. Ambiguous replies must be treated as questions, not approvals.**
- Always confirm the plan before making changes
- Always confirm before pushing ANY file live to any FTP server — show a preview first, wait for explicit approval
- Do NOT suggest deploying unless the user explicitly says "publish" or "deploy"

## Pending to-dos

### 🔴 Owner actions — do these now

- **GSC URL SUBMISSIONS** — Request Indexing for new evidence pages: theroofstore.net/trademark-evidence-print, /google-complaint-steps, /redemption-evidence-google-1. Also resubmit any July 22 pages still pending.

- **FILE GOOGLE COMPLAINT** — All materials ready at theroofstore.net/google-complaint-steps: (1) Google Legal Trademark Complaint → support.google.com/legal/troubleshooter/1114905; (2) Google Search Spam Report → search.google.com/search-console/report/spam; (3) Google Merchant Center reinstatement → support.google.com/merchants; (4) WIPO UDRP after attorney review → wipo.int/amc/en/domains/filing/.

- **GSC resubmit (July 22 publish)** — Submit via URL Inspection → Request Indexing: all 109 city pages, all 7 blog posts (/blog/*), /blog index. Also still pending from earlier: /residential.php, /projects/reviews.php, /fl/Miami-roof-restoration.php (redirect errors).

- **GA4 Install (15 min)** — analytics.google.com → create GA4 property → copy Measurement ID (G-XXXXXXXXXX) → give to agent. Every month without it = lost traffic damage evidence.

- **GSC → Google Sheets export (damages evidence)** — GSC → Performance → max 16 months → filter "the roof store" → Export → Google Sheets → share with agent. Agent builds month-by-month impressions/clicks erosion chart as Exhibit K-2.

- **GBP optimization** — business.google.com: (1) Upload 10+ job photos; (2) Complete services list; (3) 750-char business description; (4) Seed 5–6 Q&A; (5) Confirm hours; (6) Google Posts with new blog articles; (7) 50+ reviews in 60 days. Agent can draft description + Q&A on request.

- **Exhibit N** — Screenshot theroof.store B2B intake form showing "Dmitry Lipinskiy" in the "How Did You Hear About Us?" dropdown. Send to agent → adds as Exhibit N immediately.

- **Exhibit O** — Screenshot Facebook post from theroof.store/Dmitry Lipinskiy: "Delivering within a week anywhere south (Atlanta, Florida, California)." Send to agent → adds as Exhibit O.

### Open to-dos (agent-actionable on request)

- **flatroofsealants.com — unique content/angle needed** — Only remaining network site with no content differentiation. Natural angle: flat roof sealant specialist for Treasure Coast / Port St. Lucie. Detailed audit pending before drafting.

- **Partner network page — update JSON-LD schema** — `PartnerNetwork.tsx` schema object still lists only the original 4 partners. Needs updating to include all 8: + Fort Lauderdale Roof Coating, Best Roof Paint, Roof Paint Miami, Roof Restorations and Waterproofing Inc.

- **Re-enable windproofroofsystems.com "owns" schema** — Add `"owns"` WebSite entry for windproofroofsystems.com back into `Home.tsx` and `index.html`. All 4 windproof fixes done July 14 2026. Just say go ahead.

- **RoofShield schema image check** — Audit item #12 claimed `smartshield-pail.png` used on RoofShield page in error. Quick grep to confirm or close. Agent can verify immediately.

- **Add BBB/Facebook/Yelp URLs to sameAs schema** — `Home.tsx` BUSINESS_CORE.sameAs currently only has 2 Google Maps links. User to provide URLs.

- **Review count in schema** — `Home.tsx` and `index.html` both show `reviewCount: "10"`. Update once owner confirms actual Google/BBB count.

- **SmartShield gallery — more photos pending** — 13 images live. Still to add: primer sealer, top coat, reflective color comparison, color mixing, custom color samples. Source: windproofroofsystems.com/smart-sheild.php. Storage prefix: `smartshield/`.

- **RoofShield page — more photos expected** — Current state: 2 prep before/after pairs + flat roof retrofit pair. User sending more photos.

- **Factory page — partner decision** — Still to decide: add roofrestorationsandwaterproofinginc.com and bestroofpaint.com to factory page directly vs. route through /partner-network.

- **roofpaintmiami.com — GMB setup** — No GMB exists. Steps: business.google.com → "Roof Paint Miami," category Roofing Contractor, service-area business covering Miami-Dade, phone (786) 837-9064. Agent can draft business description + Q&A once account created.

- **roofpaintmiami.com — Replace Broward commercial photos** — 8 commercial photos on commercial.php were renamed but still show Broward job sites. Replace with real Miami-Dade photos. FTP: `julius@absolutecharters.com`, `ftp.absolutecharters.com:21`, secret `JULIUS_FTP_PASSWORD`.

- **flatroofsealants.com GMB verification stuck** — Google won't deliver postcard to 2049 SW Cranberry St, Port St. Lucie. Try: video verification or Google support chat. Schema already has correct phone 561-328-4770.

- **GSC network — add 2 missing properties** — bestroofpaint.com and roofpaintmiami.com not yet in GSC. Submit sitemaps at /wp-sitemap.xml or /sitemap_index.xml.

- **shopping.theroofstore.net** — Old ~2020 PHP shopping cart still indexed. Fix: 301 redirect to https://www.theroofstore.net/ at the hosting/DNS level, or GSC removal request.

- **WordPress blog tagline** — blog.theroofstore.net shows "Just another WordPress site" in SERPs. Fix: WP Admin → Settings → General → Tagline → "Roof Coating Knowledge Base."

- **Off-page authority** — Claim listings on Angi, HomeAdvisor, Houzz, Thumbtack, local Broward directories.

- **Keyword rank tracking** — Options: (A) Looker Studio free — connect all 7 GSC properties; (B) Local Falcon ~$29–49/mo for GMB geo-grid rank tracking across Broward/Miami-Dade zip codes (highest priority for local pack); (C) Custom GSC API dashboard (agent can build later).

- **roofprotectproducts.com FTP note** — FTP: `ftp.absolutecharters.com:21`, user `muhammad@roofprotectproducts.com`. Secret `ROOFPROTECT_FTP_PASSWORD` stored value is wrong — actual password differs. Update secret when convenient.

## Gotchas

- theroofstore.net DNS is at **oneworldhosting.com cPanel** — NOT Porkbun. All DNS records (MX, TXT, CNAME) go there.
- City images are NOT in the repo — served from App Storage CDN only.
- `ROOFPROTECT_FTP_PASSWORD` secret value is incorrect — actual credentials differ (see roofprotectproducts.com FTP note above).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Sister-site FTP details: see `.agents/memory/sister-site-ftp-creds.md` and `.agents/memory/all-sites.md`
- USPTO trademark record: Serial 78903590, Reg 3633280 — filed Jun 8 2006, registered Jun 2 2009, cancelled Jan 11 2016 (Section 8 maintenance only — not abandonment). See Exhibit H-2 in TrademarkEvidenceFile.tsx.
