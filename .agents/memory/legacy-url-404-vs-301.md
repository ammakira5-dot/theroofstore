---
name: Legacy indexed URLs must 301, never 404
description: When adding sitewide 404 handling, any URL format with real accumulated SEO/ranking history must redirect (301) to its current page, not 404 — only true garbage/random paths should 404.
---

When implementing real 404 handling for a site that has years of prior organic SEO history, distinguish two categories of "unknown" URLs before deciding a status code:

1. **True garbage** — random/typo/scraper-guessed paths with no history. Safe to 404.
2. **Legacy indexed URLs** — any URL format the old site actually published and Google indexed, even in formats not obvious from the current redirect map (e.g. bare-slug city pages like `/Lantana-roof-coating` with no folder prefix or extension, alongside the more obvious `/fl/Lantana-roof-coating.php` form). These carry real ranking value built up over years.

**Why:** A soft-404 (200 on everything) previously masked this distinction — every legacy URL "worked" by accident. Once real 404s are introduced, any legacy URL format missed by the redirect map silently loses its accumulated ranking signal instead of transferring it. The business explicitly wants prior organic success preserved through a rebuild, not reset.

**How to apply:** Before shipping a 404 fix on a site with SEO history, enumerate all historical URL *format* variants (not just the ones already in the redirect map) for the same destination and add 301s for each variant. Where variants are systematic (e.g. same slug with/without a folder prefix or extension), generate them programmatically from the canonical redirect list rather than hand-typing, to avoid drift.
