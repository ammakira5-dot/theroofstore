# [Project name]

_Replace the heading above with the project's name, and this line with one sentence describing what this app does for users._

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/scripts run refresh-city-images` — re-download city images from Unsplash into a local temp dir
- `pnpm --filter @workspace/scripts run upload-city-images-to-storage` — upload local city images to App Storage (GCS CDN); **this is the source of truth for city images** — local files in `artifacts/roof-store/public/images/cities/` have been removed from the repo and are served exclusively from `/api/storage/public-objects/cities/`
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

- Always confirm the plan before making changes
- Always confirm before pushing ANY file live to any FTP server — show a preview first, wait for explicit approval
- Do NOT suggest deploying unless the user explicitly says "publish" or "deploy"

## Pending to-dos

- **GSC Request Indexing — 5 pages remaining (quota hit July 17)** — Daily quota was reached mid-session. Tomorrow, go to GSC → URL Inspection → "Request Indexing" on each: /tile-roof-painting, /silicone-roof-coating, /distributorships, /blog, /shop.

- **Factory page — full distributor/partner network review** — roofpaintmiami.com added as Miami-Dade regional partner. Still to review and potentially add: roofrestorationsandwaterproofinginc.com, bestroofpaint.com, flatroofsealants.com. Decision needed: list individually on factory page vs. route all through /partner-network page (safer for Google compliance). Also review city page links and product/system cross-links from factory page.

- **Email Auto Presentation** — RoofProtect product presentation PDF saved at `artifacts/roof-store/public/docs/roofprotect-product-presentation.pdf` (5.1MB). To-do: wire into the contact form auto-response email so new leads automatically receive this PDF. Requires Resend domain verification first (see priority item below).


- **roofpaintmiami.com — Set up Google Business Profile (service-area business)** — No GMB exists for rpm. Steps: (1) Go to business.google.com, create new listing as "Roof Paint Miami", category: Roofing Contractor; (2) Set as service-area business covering Miami-Dade County; (3) Enter a real Miami-Dade address (kept private — never shown publicly); (4) Phone: (786) 837-9064; (5) Verify via video (film van/equipment/job site) or phone if eligible. Do NOT use same address as TRS. Instant verification may be available if same Google account already verified TRS in GSC.

- **roofpaintmiami.com — Prepare GBP listing content** — Agent to draft: business description (750 chars), full services list, Q&A seed questions, and photo upload checklist once GMB account is created.

- **roofpaintmiami.com — Replace Broward commercial photos with real Miami-Dade job photos** — commercial.php has 8 photos that were renamed from Broward geography to Miami-Dade names (filenames now correct) but the actual photo content still shows Broward job sites. Replace with real photos taken at Miami-Dade jobs to fully break the visual link between rpm and TRS. Also: `homeshow-small.jpg` appears on both rpm and TRS — replace rpm copy with a different photo. Files to replace on rpm FTP (`julius@absolutecharters.com`, `ftp.absolutecharters.com:21`): `commercial-flat-roof-replacement-miami-dade.jpg`, `commercial-flat-roof-reroof-miami-fl.jpg`, `industrial-roof-coating-miami-dade-big.jpg`, `commercial-roof-coating-miami-florida-big.jpg`, `metal-roof-system-miami-dade.jpg`, `commercial-flat-roof-miami-florida.jpg`, `commercial-flat-roof-waterproofing-miami.jpg`, `reroof-commercial-flat-roof-miami-dade.jpg`, `homeshow-small.jpg`.

- **🔴 PRIORITY — Resend domain verification (auto-response emails not reaching clients)** — Contact form lead notifications work fine (go to ammakira5@gmail.com), but the auto-response factory price sheet is silently dropped for all client emails until the sending domain is verified. Fix: (1) log into resend.com → Domains → Add `theroofstore.net` → copy the TXT records shown; (2) add those TXT records in Porkbun DNS for theroofstore.net; (3) click Verify in Resend; (4) agent then sets `RESEND_FROM` env var to `The Roof Store <leads@theroofstore.net>`. Confirmed broken July 11 2026 — George Kano (georgekano@gmail.com) submitted contact form and never received the price sheet.

- **SmartShield product gallery — more photos pending** — Gallery now has 13 images (7 process + 2 new user photos + 4 completed projects). Still to add: primer sealer, top coat, reflective color comparison, color mixing, custom color samples. User is sending photos one by one. Source images are on windproofroofsystems.com/smart-sheild.php — downloaded inventory in `/tmp/smartshield-images/`. SmartShield images in App Storage under `smartshield/` prefix (`/api/storage/public-objects/smartshield/`).

- **RoofShield page — images done for now** — 2 prep before/after pairs added at top (from windproofroofsystems.com/roof-sheild.php main-section/1-4), flat roof retrofit before/after added at bottom. Label on first pair: "Preparation — We Retrofit a Monolithic Seamless System: Fill All Field Spaces, Ridge Caps & Open Valleys". Same flat roof images also added as last 2 in Roof Systems page gallery. Split-view comparators (clay tile, flat cement, Spanish tile) removed from Roof Systems page. More RoofShield photos expected from user.

- **roofprotectproducts.com — SEO audit complete (July 13 2026)** — All 10 issues fixed via FTP. FTP: `ftp.absolutecharters.com:21`, user: `muhammad@roofprotectproducts.com`, password: `ROOFPROTECT_FTP_PASSWORD`. **Phone note:** `954-900-1973` is intentionally kept — it is the Google Ads call-tracking number. `954-210-9614` (The Roof Store) appears only in the new footer backlink bar.

- ✅ **Fix roller icon embeds on roofprotectproducts.com — DONE July 14 2026** — RP1 now serves `fungalshield-info.pdf`, RP3 now serves `roofshield-info.pdf`. RP2 SmartShield unchanged. Verified live. Note: `ROOFPROTECT_FTP_PASSWORD` secret has wrong value stored — actual credentials used are different. Update the secret when convenient.

- **Add BBB/Facebook/Yelp URLs to sameAs schema** — RoofingContractor schema in `Home.tsx` (BUSINESS_CORE.sameAs) currently has only 2 Google Maps links. Need to add: BBB profile URL, Facebook page URL, Yelp page URL. User to provide these URLs.

- **No analytics installed — add GA4** — Confirmed July 9 2026: no Google Analytics, GA4, or GTM anywhere in the codebase. Without it, real traffic/channel data (organic vs paid vs referral) can't be measured. User to decide: (A) add GA4 tag directly (agent can do), or (B) use GTM container. Measurement ID needed from user.

- **shopping.theroofstore.net — abandoned legacy subdomain** — A separate old (~2020) PHP shopping cart site still indexed by Google. Competes with the real site for brand searches. Fix: server-level 301 redirect `shopping.theroofstore.net` → `https://www.theroofstore.net/` (whoever controls DNS/hosting for that subdomain). If inaccessible: request removal via Google Search Console.

- ✅ **windproofroofsystems.com — all 4 fixes done July 14 2026** — FTP: `ftp.windproofroofsystems.com`, user: `Fullstack2@windproofroofsystems.com`, secret: `WINDPROOF_FTP_PASSWORD` (reset in cPanel — update secret value). Fixed: (1) BBB claim removed from smart-sheild.php + roof-sheild.php; (2) Phone corrected `954-900-1973` → `(954) 743-0667` on both product pages; (3) Shared testimonials (Ana Arias, Arlene Kalb, Don Godshall) removed from index.php; (4) Testimonials nav link removed from layout/nav.php. All verified live. Note: verbatim product copy was NOT found — descriptions are already tile-restoration-specific. Partner link in PartnerNetwork.tsx was already active (linkPaused: false). WebSite "owns" schema restore in Home.tsx + index.html still pending if desired.

- ✅ **roofrestorationsandwaterproofinginc.com — all 3 fixes done July 14 2026** — FTP: `ftp.roofrestorationsandwaterproofinginc.com`, user: `roofrestorationsandwaterproofinginc@roofrestorationsandwaterproofinginc.com`, secret: `RRSW_FTP_PASSWORD` (saved). Fixed: (1) Phone `954-900-1973` → `(877) 824-5823` on smart-sheild.php + roof-sheild.php; (2) BBB claim removed from smart-sheild.php + roof-sheild.php; (3) Product descriptions rewritten with unique copy (FungalShield/SmartShield/RoofShield) in index.php; (4) Shared testimonials (Ana Arias, Arlene Kalb, Don Godshall) removed from index.php; (5) Testimonials nav link removed from layout/nav.php + smart-sheild.php + roof-sheild.php. All verified live.

- **Lower-priority SEO items (theroofstore.net codebase)** — ✅ (A) Geo-keyword added to homepage H2: "Roof Coating Services in South Florida" (July 14 2026). ✅ (B) City-page `og:image` confirmed absolute — SEO component prepends base URL automatically. Remaining: (C) Add explicit Review-type schema snippets to individual review entries.

- **Content gaps (owner must write)** — No content for: "how long does roof coating last Florida" (lifespan guide), "DIY vs pro roof coating" angle, hurricane-prep seasonal checklist (May–Oct window). Agent can draft outlines on request.

- **Off-page / local authority (owner actions)** — Claim/create listings on Angi, HomeAdvisor, Houzz, Thumbtack, and local Broward directories. Verify Google Business Profile is fully optimized (photos, services, hours, Q&A). Target 50+ Google reviews in 60 days via text/email campaign to past customers.

- **WordPress blog tagline fix** — blog.theroofstore.net (or blog subdirectory) shows "Just another WordPress site" in Google SERPs. Fix: WP Admin → Settings → General → change Tagline to "Roof Coating Knowledge Base" (or similar). User to action directly.

- **Review count in schema** — aggregateRating in `Home.tsx` BUSINESS_CORE and `index.html` both show reviewCount: "10". Update to reflect actual Google/BBB review count once user confirms the number, then run a review collection campaign.

- **Blog content refresh** — No posts since Sept 2024. Recommended: "2026 Hurricane Season Prep for South Florida Roofs" and "What Citizens Insurance Rule Changes Mean for Tile Roof Owners in 2026". User to write/publish in WordPress.

- ✅ **SEO audit complete — ftlauderdaleroofcoating.com, roofpaintmiami.com, bestroofpaint.com — DONE July 14 2026** — All three sites fixed via FTP (`julius@absolutecharters.com`, `ftp.absolutecharters.com:21`, secret: `JULIUS_FTP_PASSWORD`). Per site: (1) **ftlauderdaleroofcoating.com**: fixed title (domain+typo removed), fixed description (Sherwin Williams removed), added canonical/OG/RoofingContractor schema, fixed footer phone "tt 754 367 3768" → "(754) 367-3768", added theroofstore.net backlink bar. (2) **roofpaintmiami.com**: added missing title + description (were completely absent — critical), added doctype/html wrapper, added canonical/OG/schema, added theroofstore.net backlink bar. (3) **bestroofpaint.com**: shortened/cleaned title, improved description, added canonical/OG/schema, added theroofstore.net backlink bar. All verified live.

- **flatroofsealants.com GMB — stuck on verification** — Storm Shield Roof Coating Systems GMB (2049 SW Cranberry St, Port St. Lucie, FL 34953, phone (754) 273-4744 dead) can't be edited because Google never delivers the postcard. Try: (1) video verification via business.google.com → Get Verified; (2) request postcard to a different address; (3) Google support chat for reinstatement. Schema on the site already has correct phone 561-328-4770.

- **GSC network — add 2 missing properties** — bestroofpaint.com and roofpaintmiami.com not yet in Google Search Console. Both sites are clean (duplicate content already fixed July 11 2026). Owner to: (1) add both as properties in GSC, (2) submit sitemaps (WordPress auto-generates at `/wp-sitemap.xml` or `/sitemap_index.xml`). Full 7-property GSC network when done: theroofstore.net, ftlauderdaleroofcoating.com, windproofroofsystems.com, roofrestorationsandwaterproofinginc.com, flatroofsealants.com, bestroofpaint.com, roofpaintmiami.com.

- **Keyword rank tracking dashboard** — 7 sites now in GSC covering same target keywords (tile roof coating, roof painting, Spanish tile, flat roof waterproofing, Broward/Miami). Options: (A) Looker Studio — free, connect all 7 GSC properties in one dashboard, 30-min setup by owner; (B) Local Falcon (~$29–49/mo) — GMB geo-grid rank tracking across Broward/Miami-Dade zip codes, best tool for local pack position monitoring; (C) Custom dashboard built into theroofstore.net admin area pulling GSC API. Recommend doing A + B first; C can be added later. Local Falcon is highest priority for GMB local pack visibility.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
