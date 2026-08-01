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
- **Crawler protection rule**: Evidence pages (TrademarkEvidenceFile, TrademarkEvidencePrint, TrademarkMonitoringLog, GoogleComplaintSteps, RedemptionEvidenceGoogle1, UdrpDraftGate) are all noindexed AND in robots.txt Disallow. Content stays intact for attorney/private access via direct URL. Never submit these to GSC.
- **Disambiguation rule**: Any schema or copy that distinguishes The Roof Store from similarly-named entities must describe us only — positively, factually, with founding/domain dates. Never name or reference theroof.store or any competitor on theroofstore.net. Legal risk + co-occurrence signal.

## User preferences

- **HARD RULE — PRODUCTION PROTOCOL (re-confirmed July 29 after a violation): Never build, edit, or create any file until the user has explicitly said "yes", "go ahead", "do it", or equivalent. This applies to EVERY request — even ones that sound like direct instructions (e.g. "add links to X"). The required flow is: (1) present the plan / flow chart of exactly what will change and where; (2) wait for explicit agreement; (3) only then build. Presenting a plan and receiving no clear approval is NOT permission to proceed. Ambiguous replies must be treated as questions, not approvals. No exceptions.**
- Always confirm the plan before making changes
- Always confirm before pushing ANY file live to any FTP server — show a preview first, wait for explicit approval
- Do NOT suggest deploying unless the user explicitly says "publish" or "deploy"
- NO interactive agent boxes/cards (question forms, task cards) — they block his view and slow production. Ask questions in plain chat text only.
- Review quotes on the site must use exact GMB review wording only — never paraphrase or use text truncated with "… More"; each profile's reviews stay with its own card
- **End-of-session routine (carry-forward fix, agreed July 28):** before the user signs off, (1) update the Pending To-Dos in this file with anything new, in-progress, or awaiting approval; (2) push the repo to the GitHub backup (github.com/ammakira5-dot/theroofstore). This file is the single source of truth for open items — the next session must read it first.

## Pending To-Dos

Finished items are archived in `docs/completed-work-log.md` — only open/actionable items live here.

---

### 🔴 A — Owner actions (you do these — no agent needed)

**⚡ NEXT PRIORITY — do these first:**
- **GA4 Install (15 min)** — analytics.google.com → create GA4 property → copy Measurement ID (G-XXXXXXXXXX) → give to agent. Every month without it = lost traffic damage evidence.
- **FILE GOOGLE COMPLAINT** — All materials ready at theroofstore.net/google-complaint-steps: (1) Google Legal Trademark Complaint → support.google.com/legal/troubleshooter/1114905; (2) Google Search Spam Report → search.google.com/search-console/report/spam; (3) Google Merchant Center reinstatement → support.google.com/merchants; (4) WIPO UDRP after attorney review → wipo.int/amc/en/domains/filing/.

**Legal / Evidence case:**
- **FILE GOOGLE COMPLAINT** — (see above ⚡)
- **Gallatin TN "The Roof Store" (goroofstoretn.com) — LOGGED July 30 (Monitoring Log entry #115)** — Third party operating as "The Roof Store" in Gallatin TN since 2019 (Jeff Christian, 660 Cole's Ferry Rd, (615) 989-7889); GMB under exact name; logo = "The Roof Store" in house graphic. Homepage screenshot: `attached_assets/screenshots/goroofstoretn_com.png`. Addendum logged as entry #117 (July 30): their video "The Roof Store - Who We Are" (youtube.com/watch?v=RT4WD8eN57E, May 2024, @GoRoofStore) contains own admission "created and began operating in 2019"; video appeared on page one of owner's brand-history search while theroofstore.net held the top spot. Still pending from owner: (1) screenshot of their Google Business Profile showing the name; (2) screenshot of that search results page (our #1 + their video below) for exhibit-grade preservation. Caveat for counsel: distant local contractor — cuts both ways in UDRP (dilution vs. genericness argument).
- **Houston "The Roof Store" = Dmitry/theroof.store — LOGGED July 30 (Monitoring Log entry #116)** — NOT a third party. Respondent operates physically in Houston as "The Roof Store": 3522 Yale St 77018 (office) + 1401 Greengrass Dr Dock 14, 77008 (warehouse), 713-480-1168. Exact-name listings: Google Business Profile, Yelp (the-roof-store-houston-2, "Hardware Stores"), Yellow Pages, IndustryNet, LinkedIn. Strengthens confusion case: active retail branding under the exact mark, not just the domain. Also logged: entry #118 (July 30) — Dmitry's July 28 marketing email received by owner in South FL (Roofing Insights $2,500 media-team offer; email preserved at attached_assets/Pasted-Hire-our-entire-media-team-for-August-2-500-Inbox-Dmitr_1785425944713.txt; entry #121 = addendum: exhibit-grade Gmail print-to-PDF w/ full headers at attached_assets/theroof.store_selling_internet_boosting_1785427371240.pdf + owner's link-building/B2B-capture strategy analysis); entry #119 (July 30) — Roofing Insights Podcast Ep #29 = Dmitry interviewing his own Houston ops manager Jairo Restrepo (linkedin.com/in/theroofstore) promoting "The Roof Store" to his 200K+ audience. Gallatin↔Dmitry partnership theory investigated: NO connection found (not on Directorii, no Roofing Insights fingerprints on their content). Entry #120 (July 30) — pattern analysis: national-expansion evidence (50-state shipping, Houston retail template, Ep #29 promotion, media machine) = urgency factor for UDRP/Google filings. Still pending from owner: screenshots of the GMB/Yelp/YP listings (URL bar visible) for exhibit-grade preservation → send to agent.
- **Exhibit T — AI Overview conflation screenshot (July 30)** — Google AI Overview merged both entities on the location query "i want to know the roof store is located" (our Davie HQ + "Alternative Locations: Houston TX supplier"); theroof.store was result #2 under our #1. Screenshot needed: full window, URL bar + clock visible, AI Overview panel showing both "locations" plus the results below. Send to agent → logs Monitoring entry #122 + adds Exhibit T.
- **Exhibit N** — Screenshot theroof.store B2B intake form with the "How Did You Hear About Us?" dropdown OPEN showing "Dmitry Lipinskiy". Full window — URL bar + clock visible, no crop. Bonus: save form page at web.archive.org/save. Send to agent → adds as Exhibit N immediately.
- **Exhibit O** — Screenshot Facebook post from theroof.store/Dmitry Lipinskiy: "Delivering within a week anywhere south (Atlanta, Florida, California)." Click the post timestamp first (opens permanent URL); capture post text, author, date, URL bar; send the permanent URL too so it can be archived before deletion. Send to agent → adds as Exhibit O. Do soon — posts can vanish.
  - *Screenshot how-to (older Dell/Windows):* Windows+PrtScn saves to Pictures → Screenshots (best — full screen w/ URL bar); or PrtScn (maybe Fn+PrtScn) then Ctrl+V into Paint → Save As JPEG; or Windows+Shift+S snip if PrtScn is dead.

**GSC / Analytics:**
- **GSC sitemap** — Submit https://www.theroofstore.net/sitemap.xml to GSC. Then individually request indexing for: `/`, `/roof-coating-florida`, `/tas-106-certified-roof-coating`, `/blog`, `/factory`, `/pricing`.
- **DO NOT submit** `/trademark-evidence`, `/trademark-evidence-print`, `/google-complaint-steps`, `/redemption-evidence-google-1` — these are now crawler-blocked (robots.txt Disallow + noindex). Submit only public pages.
- **GSC resubmit (July 22 publish)** — URL Inspection → Request Indexing: all 109 city pages, all 7 blog posts (/blog/*), /blog index. Pending legacy redirects: /residential.php, /projects/reviews.php, /fl/Miami-roof-restoration.php.
- **GSC resubmit (July 30 publish — NEW)** — Resubmit sitemap.xml (now 160 URLs), then Request Indexing for the 7 new pages: `/shingle-roof-coating`, `/metal-roof-coating`, `/spanish-tile-roof-coating`, `/spanish-tile-roof-painting`, `/spanish-tile-roof-waterproofing`, `/spanish-tile-roof-maintenance`, `/cement-tile-roof-restoration`. Also re-inspect `/products`, `/videos` (schema fixes), `/factory` (GMB entity alignment), and `/about` (new history content).
- **GSC resubmit (July 28 publish)** — Owner did sitemap.xml resubmit + Request Indexing for `/`, `/partner-network`, `/factory` on July 28 (per agent's 4-step list). Remaining lower-priority manual requests (do if quota allows, otherwise sitemap covers them): `/products`, `/questions`, `/tas-106-certified-roof-coating`, `/videos`, `/projects`, `/roof-coating-florida`, `/roof-replacement-alternative-florida`, `/diy-vs-pro-roof-coating`, `/blog`.
- **GSC network — add 2 missing properties** — Add bestroofpaint.com and roofpaintmiami.com to GSC. Submit sitemaps at /wp-sitemap.xml or /sitemap_index.xml.
- **GSC → Google Sheets export (damages evidence)** — GSC → Performance → max 16 months → filter "the roof store" → Export → Google Sheets → share with agent. Agent builds impressions/clicks erosion chart as Exhibit K-2.

**GMB / GBP:**
- **GBP optimization — theroofstore.net** — business.google.com: (1) Upload 10+ job photos; (2) Complete services list; (3) Paste GBP description (agent drafted — ask for it); (4) Seed 5–6 Q&A (agent drafted — ask for it); (5) Confirm hours; (6) Google Posts; (7) 50+ reviews in 60 days.
- **Claim Knowledge Panel** — Search "The Roof Store" while logged into the GMB account. If a Knowledge Panel appears, click "Claim this knowledge panel." This is a sanctioned Google channel for correcting entity confusion.
- **3 locked-out GMB profiles** — Use Google's "Request Access" flow to recover the profiles, including the one registered under the exact legal entity name. Recovery runs independently in the background.
- **roofpaintmiami.com — GMB setup** — No GMB exists. Create at business.google.com: name "Roof Paint Miami," category Roofing Contractor, service-area Miami-Dade, phone (786) 837-9064. Agent drafted description + Q&A — ask for it when ready.
- **flatroofsealants.com GMB stuck** — Google won't deliver postcard to 2049 SW Cranberry St, Port St. Lucie. Try video verification or Google support chat.

**Reviews:**
- **Review count** — Target 50+ reviews. Current ~10. Each verified review tied to a NAP-consistent GMB profile is a strong "established business" signal. Ask agent to set up review automation workflow — need to confirm which post-job contact channel (text, email, or both).
- **Review count in schema** — ✅ Confirmed July 28: `Home.tsx` `reviewCount: "10"` matches main Storm Shield GMB. Re-update only when count grows.
- **GMB Services rollout (July 28 — not completed, next session)** — Drafts banked in attached_assets (GMB-Services-RoofRestorationsWaterproofing + GMB-Services-Remaining-Partners). Agreed order: (1) Roof Restorations → (2) Best Roof Paint → (3) Roof Paint Miami (create profile) → (4) live-GMB pair (screenshot first). Space profile updates days apart. Ask agent for each draft when ready to paste into business.google.com.
- **RoofProtect Products reviews** — Its GMB review count/text never sent. Paste its listing panel + reviews to add count/quotes to its partner card.

---

### 🟡 B — Agent-ready (just say go ahead)

- **Option 3 link consistency (from July 31 buyer-navigation audit)** — homepage "Buy & Use Your Own Installer" links to /products, but the Products page's same Option 3 links to /products/roofshield only. Make both point to the same destination everywhere (audit recommends /shop or the full catalog).

**theroofstore.net codebase:**
*(July 30 publish went live — Exhibit S, factory GMB schema alignment, 301 CSV refinements, Exhibits G-2/G-3, Wayback + shingle/metal pages, Spanish/S-tile pages, service-card links, duplicate-URL fix all archived to docs/completed-work-log.md.)*
- **GA4 install** — still waiting on owner's GA4 Measurement ID (see owner actions ⚡).
- **Legacy content mining** — agreed follow-up: mine licensing + calcium-carbonate historical copy from old site (recovery plan at attached_assets/legacy-content-recovery-plan_1785379374030.html).
- **Factory page conversion-flow optimization — DONE July 30 (option A, approved + confirmed after a mix-up)** — "What brings you here?" fork moved directly under the hero (stats bar below it); "Need it installed?" card highlighted with accent border + "Most Popular" badge; "Get a Free Estimate" is the lead button. Owner briefly asked to revert (mistook homepage for factory page), then confirmed re-apply. July 31: hero images swapped (pail up top, truck by the fork), hero buttons swapped (Buy first), and the missing third fork card "Buying factory-direct?" restored per audit (pail thumbnail, Shop/Specs/Pickup buttons). **Needs next publish to go live.**
- **Core Web Vitals check (from Storeclaw audit #6)** — owner runs PageSpeed/GSC report; rest of that audit is done + live (see docs/completed-work-log.md).
- **Schema fix bundle — remaining piece** — /products + /videos fixes are LIVE (July 30 publish); owner should GSC re-inspect /products and /videos to confirm cleared. Still pending: `shippingDetails` + `hasMerchantReturnPolicy` on Offers — NEED owner's shipping + return policy wording; optional `certificationRating` (may not apply — pass/fail).
- **Image SEO — factory photo renames (AWAITING APPROVAL)** — Full audit at `docs/image-seo-audit.md`. 11 /factory photos have numeric filenames (1.jpg, 2.jpg…) with zero SEO value; proposed keyword-location names drafted in the doc. Renames change URLs so need explicit approval; agent will verify each photo visually, rename, and update Factory.tsx in one pass.
- **Image SEO — alt-text rewrite (AWAITING APPROVAL)** — Localized keyword pattern (substrate + system + city, only where truthful) across Projects gallery (16 images), Factory photo array, and commercial pages. Plan in `docs/image-seo-audit.md` §2. Extend same treatment to services/product page images. City page images already localized — no change.
- **sameAs array — YouTube channel** — Add the historical YouTube channel URL to the Organization schema sameAs array. Provide the YouTube channel URL.
- **City page differentiation** — 99 pages still on templated pattern (Fort Lauderdale is the only differentiated one). Decision needed: differentiate all 109 at once, or top 20 by search volume first?
- **Duplicate URL audit** — `/service-areas/[county]` vs. `/roof-services/[county]` may be cannibalizing each other. Agent can audit and report before any changes.
- **Hub-and-spoke link audit** — Confirm no spoke-to-spoke cross-links with commercial anchor text exist between network sites. Agent can check code.
- **Port St. Lucie NAP on partner-network page** — Phone shows 754-273-4744, GMB-verified is 561-328-4770. On hold per user instruction — revisit when ready.
- **Review automation workflow** — Was in progress. Restart: confirm post-job contact channel (text, email, or both) and agent sets it up.
- **Factory page — partner decision** — Decide: add roofrestorationsandwaterproofinginc.com and bestroofpaint.com to /factory page directly, or leave as /partner-network only.

**Sister sites (FTP):**
- **flatroofsealants.com SEO plugin** — mu-plugin drafted at `/tmp/frs-seo.php`. Adds Port St. Lucie / Treasure Coast title, meta description, schema, and removes BBB/1994 footer claim. Preview shown — say "push it" to upload.
- **roofpaintmiami.com — Replace Broward commercial photos** — 8 photos on commercial.php still show Broward job sites. Replace with real Miami-Dade photos (user to provide). FTP: julius@absolutecharters.com / JULIUS_FTP_PASSWORD.
- **Angle copy for 4 remaining network sites** — Directions defined for Roof Restorations, Storm Shield Coating Systems, Windproof, RoofProtect. Agent writes copy on request, then FTP push after approval.

**Photos still pending (user to send):**
- **SmartShield gallery** — 13 images live. Still to add: primer sealer, top coat, reflective color comparison, color mixing, custom color samples. Storage prefix: `smartshield/`.
- **RoofShield page** — 3 before/after pairs live. More photos expected from owner.

---

### 🔵 C — Strategy / longer-horizon

- **Off-page authority** — Claim listings on Angi, HomeAdvisor, Houzz, Thumbtack, local Broward directories.
- **Keyword rank tracking** — Options: (A) Looker Studio free (all 7 GSC properties); (B) Local Falcon ~$29–49/mo for GMB geo-grid (highest priority for local pack); (C) Custom GSC API dashboard (agent can build).
- **roofprotectproducts.com FTP** — Secret `ROOFPROTECT_FTP_PASSWORD` is incorrect. Update when convenient. FTP: ftp.absolutecharters.com:21, user muhammad@roofprotectproducts.com.
- **GSC → Google Sheets export (Exhibit K-2)** — Once GSC has 16 months of data, export "the roof store" keyword impressions/clicks → share with agent → builds erosion chart as damages evidence.

## Gotchas

- theroofstore.net DNS is at **oneworldhosting.com cPanel** — NOT Porkbun. All DNS records (MX, TXT, CNAME) go there.
- City images are NOT in the repo — served from App Storage CDN only.
- `ROOFPROTECT_FTP_PASSWORD` secret value is incorrect — actual credentials differ (see roofprotectproducts.com FTP note above).
- Evidence pages are crawler-blocked (robots.txt + noindex) — do NOT submit to GSC. Access via direct URL only for attorney/private use.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Sister-site FTP details: see `.agents/memory/sister-site-ftp-creds.md` and `.agents/memory/all-sites.md`
- USPTO trademark record: Serial 78903590, Reg 3633280 — filed Jun 8 2006, registered Jun 2 2009, cancelled Jan 11 2016 (Section 8 maintenance only — not abandonment). See Exhibit H-2 in TrademarkEvidenceFile.tsx.
