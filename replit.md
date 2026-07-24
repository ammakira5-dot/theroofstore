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

## Pending To-Dos

---

### 🔴 A — Owner actions (you do these — no agent needed)

**Legal / Evidence case:**
- **FILE GOOGLE COMPLAINT** — All materials ready at theroofstore.net/google-complaint-steps: (1) Google Legal Trademark Complaint → support.google.com/legal/troubleshooter/1114905; (2) Google Search Spam Report → search.google.com/search-console/report/spam; (3) Google Merchant Center reinstatement → support.google.com/merchants; (4) WIPO UDRP after attorney review → wipo.int/amc/en/domains/filing/.
- **Exhibit N** — Screenshot theroof.store B2B intake form showing "Dmitry Lipinskiy" in the "How Did You Hear About Us?" dropdown. Send to agent → adds as Exhibit N immediately.
- **Exhibit O** — Screenshot Facebook post from theroof.store/Dmitry Lipinskiy: "Delivering within a week anywhere south (Atlanta, Florida, California)." Send to agent → adds as Exhibit O.

**GSC / Analytics:**
- **GSC URL SUBMISSIONS** — Request Indexing for: theroofstore.net/trademark-evidence-print, /google-complaint-steps, /redemption-evidence-google-1. Also resubmit July 22 pages still pending.
- **GSC resubmit (July 22 publish)** — URL Inspection → Request Indexing: all 109 city pages, all 7 blog posts (/blog/*), /blog index. Pending legacy redirects: /residential.php, /projects/reviews.php, /fl/Miami-roof-restoration.php.
- **GSC network — add 2 missing properties** — Add bestroofpaint.com and roofpaintmiami.com to GSC. Submit sitemaps at /wp-sitemap.xml or /sitemap_index.xml.
- **GA4 Install (15 min)** — analytics.google.com → create GA4 property → copy Measurement ID (G-XXXXXXXXXX) → give to agent. Every month without it = lost traffic damage evidence.
- **GSC → Google Sheets export (damages evidence)** — GSC → Performance → max 16 months → filter "the roof store" → Export → Google Sheets → share with agent. Agent builds impressions/clicks erosion chart as Exhibit K-2.

**GMB / GBP:**
- **GBP optimization** — business.google.com: (1) Upload 10+ job photos; (2) Complete services list; (3) 750-char description; (4) Seed 5–6 Q&A; (5) Confirm hours; (6) Google Posts; (7) 50+ reviews in 60 days. Agent can draft description + Q&A on request.
- **roofpaintmiami.com — GMB setup** — No GMB exists. Create at business.google.com: name "Roof Paint Miami," category Roofing Contractor, service-area Miami-Dade, phone (786) 837-9064. Agent drafts description + Q&A once account created.
- **flatroofsealants.com GMB stuck** — Google won't deliver postcard to 2049 SW Cranberry St, Port St. Lucie. Try video verification or Google support chat.

---

### 🟡 B — Agent-ready (just say go ahead)

**theroofstore.net codebase:**
- **Add BBB/Facebook/Yelp URLs to sameAs schema** — `Home.tsx` BUSINESS_CORE.sameAs has only 2 Google Maps links. Facebook ready: https://www.facebook.com/profile.php?id=100068045314754 — still need BBB + Yelp URLs, then agent adds all at once.
- **Review count in schema** — `Home.tsx` and `index.html` show `reviewCount: "10"`. Update once owner confirms actual count.
- **Factory page — partner decision** — Decide: add roofrestorationsandwaterproofinginc.com and bestroofpaint.com to /factory page directly, or leave as /partner-network only.

**Sister sites (FTP):**
- **flatroofsealants.com — unique content/angle** — Last network site with no differentiation. Angle: flat roof sealant specialist for Treasure Coast / Port St. Lucie. Awaiting detailed audit before drafting.
- **roofpaintmiami.com — Replace Broward commercial photos** — 8 photos on commercial.php still show Broward job sites. Replace with real Miami-Dade photos. FTP: julius@absolutecharters.com / JULIUS_FTP_PASSWORD.

**Photos still pending (user to send):**
- **SmartShield gallery** — 13 images live. Still to add: primer sealer, top coat, reflective color comparison, color mixing, custom color samples. Storage prefix: `smartshield/`.
- **RoofShield page** — 3 before/after pairs live. More photos expected from owner.

---

### 🔵 C — Strategy / longer-horizon

- **Off-page authority** — Claim listings on Angi, HomeAdvisor, Houzz, Thumbtack, local Broward directories.
- **Keyword rank tracking** — Options: (A) Looker Studio free (all 7 GSC properties); (B) Local Falcon ~$29–49/mo for GMB geo-grid (highest priority for local pack); (C) Custom GSC API dashboard (agent can build).
- **roofprotectproducts.com FTP** — Secret `ROOFPROTECT_FTP_PASSWORD` is incorrect. Update when convenient. FTP: ftp.absolutecharters.com:21, user muhammad@roofprotectproducts.com.

## Gotchas

- theroofstore.net DNS is at **oneworldhosting.com cPanel** — NOT Porkbun. All DNS records (MX, TXT, CNAME) go there.
- City images are NOT in the repo — served from App Storage CDN only.
- `ROOFPROTECT_FTP_PASSWORD` secret value is incorrect — actual credentials differ (see roofprotectproducts.com FTP note above).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Sister-site FTP details: see `.agents/memory/sister-site-ftp-creds.md` and `.agents/memory/all-sites.md`
- USPTO trademark record: Serial 78903590, Reg 3633280 — filed Jun 8 2006, registered Jun 2 2009, cancelled Jan 11 2016 (Section 8 maintenance only — not abandonment). See Exhibit H-2 in TrademarkEvidenceFile.tsx.
