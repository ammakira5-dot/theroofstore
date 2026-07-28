# Image SEO Audit — theroofstore.net (July 28, 2026)

Prepared for morning review. **No files have been renamed** — renames need your approval because they change URLs (each rename needs a matching code update, done together in one pass).

Site total: 110 images in `public/images/`. Overall state is good — most files already have descriptive names and alt text. The gaps below are what's left.

## 1. Rename candidates (numeric filenames — zero SEO value)

All 11 are on the /factory page:

| Current | Proposed rename |
|---|---|
| factory/1.jpg | factory/roof-coating-factory-davie-fl-production-line.jpg |
| factory/2.jpg | factory/elastomeric-coating-manufacturing-davie-florida.jpg |
| factory/3.jpg | factory/roof-paint-mixing-tanks-storm-shield-factory.jpg |
| factory/4.jpg | factory/factory-direct-roof-coating-drums-davie.jpg |
| factory/5.jpg | factory/roof-shield-coating-production-broward-county.jpg |
| factory/7.jpg | factory/roof-coating-quality-control-davie-factory.jpg |
| factory/10.jpg | factory/liquid-rubber-coating-batch-mixing-florida.jpg |
| factory/12.jpg | factory/roof-paint-factory-floor-davie-fl.jpg |
| factory/13.jpg | factory/elastomeric-roof-coating-packaging-florida.jpg |
| factory/14.jpg | factory/storm-shield-paint-systems-factory-interior.jpg |
| factory/15.jpg | factory/roof-coating-manufacturer-davie-south-florida.jpg |

> Exact names should match what each photo actually shows — I'll verify each image visually before renaming so names are truthful. The pattern is: `{what it shows}-{keyword}-{location}.jpg`.

## 2. Alt-text upgrades (localized keyword pattern)

Current alt text is decent but mostly generic ("Spanish tile roof before and after comparison"). Upgrade pattern per strategy point I — every alt should carry substrate + system + city where truthful:

- **Projects gallery images** (16 images): add city + system, e.g. "Spanish tile roof after 3-coat Roof Shield elastomeric restoration — Davie, Florida" (only where the city is actually known; South Florida otherwise).
- **Factory images**: alts come from a photo array in Factory.tsx — add "Davie, FL factory" + product keywords to each.
- **Commercial images**: already localized (sunrise-florida, dania-florida in filenames) — mirror those cities into the alt text.
- **City page images**: served from App Storage CDN; alt text generated per city in code — already localized. No change needed.

## 3. Already done tonight (no action needed)

- Projects page image schema now carries `contentLocation` with geo coordinates (Davie / Broward County).
- Home + city pages now have `hasPOS` schema pointing to the Davie store.

## Approval needed

1. **Factory renames** — approve the pattern above and I'll verify each photo, rename, and update Factory.tsx in one pass.
2. **Alt-text rewrite** — approve and I'll update Projects.tsx, Factory.tsx, and commercial pages with the localized pattern.
