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
- Do NOT suggest deploying unless the user explicitly says "publish" or "deploy"

## Pending to-dos

- **🔴 PRIORITY — Resend domain verification (auto-response emails not reaching clients)** — Contact form lead notifications work fine (go to ammakira5@gmail.com), but the auto-response factory price sheet is silently dropped for all client emails until the sending domain is verified. Fix: (1) log into resend.com → Domains → Add `theroofstore.net` → copy the TXT records shown; (2) add those TXT records in Porkbun DNS for theroofstore.net; (3) click Verify in Resend; (4) agent then sets `RESEND_FROM` env var to `The Roof Store <leads@theroofstore.net>`. Confirmed broken July 11 2026 — George Kano (georgekano@gmail.com) submitted contact form and never received the price sheet.

- **SmartShield product gallery — more photos pending** — Gallery now has 13 images (7 process + 2 new user photos + 4 completed projects). Still to add: primer sealer, top coat, reflective color comparison, color mixing, custom color samples. User is sending photos one by one. Source images are on windproofroofsystems.com/smart-sheild.php — downloaded inventory in `/tmp/smartshield-images/`. SmartShield images in App Storage under `smartshield/` prefix (`/api/storage/public-objects/smartshield/`).

- **RoofShield page — images done for now** — 2 prep before/after pairs added at top (from windproofroofsystems.com/roof-sheild.php main-section/1-4), flat roof retrofit before/after added at bottom. Label on first pair: "Preparation — We Retrofit a Monolithic Seamless System: Fill All Field Spaces, Ridge Caps & Open Valleys". Same flat roof images also added as last 2 in Roof Systems page gallery. Split-view comparators (clay tile, flat cement, Spanish tile) removed from Roof Systems page. More RoofShield photos expected from user.

- **roofprotectproducts.com FTP access — blocked** — Tried FTP via `ftp.absolutecharters.com` port 21 with username `Rajneet@roofprotectproducts.com` — login denied (exit code 67). Password stored in `ROOFPROTECT_FTP_PASSWORD` secret but may be wrong. Next session: user to verify credentials work in FileZilla first, then retry. Alternatively try via WordPress admin panel (`roofprotectproducts.com/wp-admin`) instead of FTP. Things to fix on that site: (1) roller icon PDF embed URLs for RP1/RP3, (2) Product schema fixes (brand, offers, image).

- **Fix #1 roller icon embeds on roofprotectproducts.com** — RP1 FungalShield and RP3 RoofShield bucket #1 roller icons need their embed URLs updated. RP1 should use `https://www.theroofstore.net/pdf/fungalshield-info.pdf`; RP3 should use `https://www.theroofstore.net/pdf/roofshield-info.pdf`. RP2 SmartShield already works correctly.
- **Fix product schemas on roofprotectproducts.com** — FungalShield (RP1), SmartShield (RP2), RoofShield (RP3) Product schemas have brand = product name instead of "The Roof Store", missing `offers`, and no `image`. Google flags these as invalid Product snippets.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
