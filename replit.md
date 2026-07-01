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

- **Fix pre-existing TypeScript errors in `artifacts/roof-store/src/pages/RoofSystems.tsx`** — union type property access errors (extraAfterSrc, extraBeforeLabel, etc.)
- **Set `ADMIN_PASSWORD` secret** — missing env var, needed for any admin area
- **Fix product schemas on roofprotectproducts.com** — FungalShield (RP1), SmartShield (RP2), RoofShield (RP3) Product schemas have brand = product name instead of "The Roof Store", missing `offers`, and no `image`. Google flags these as invalid Product snippets. Fix: set brand to "The Roof Store", add offers with price + availability, add image URL. This affects GSC "Product snippets: some invalid" warning on the SmartShield page.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
