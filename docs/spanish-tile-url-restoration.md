# Spanish / Cement Tile Keyword URL Restoration — July 29, 2026

Restored the old theroofstore.net Spanish-tile and cement-tile keyword URLs as 5 new dedicated service pages, with 301 redirects from every known legacy URL format. Old page content preserved in `docs/old-site-spanish-tile/`.

## New pages (live in sitemap, priority 0.8)

| New URL | Topic |
|---|---|
| /spanish-tile-roof-coating | Spanish tile (S-tile / barrel tile) roof coating |
| /spanish-tile-roof-painting | Spanish tile roof painting (3,000+ colors) |
| /spanish-tile-roof-waterproofing | Residential Spanish tile waterproofing |
| /spanish-tile-roof-maintenance | Spanish tile repair & maintenance |
| /cement-tile-roof-restoration | Cement tile (flat & barrel) restoration |

## Old URL → New URL (301 redirects)

### Legacy /services/ URLs
| Old | New |
|---|---|
| /services/spanish-tile-roof-coating.php | /spanish-tile-roof-coating |
| /services/spanish-tile-roof-painting.php | /spanish-tile-roof-painting |
| /services/residential-spanish-tile-roof-waterproofing.php | /spanish-tile-roof-waterproofing |
| /services/spanish-tile-roof-maintenance.php | /spanish-tile-roof-maintenance |
| /services/spanish-tile-roof-repair.php | /spanish-tile-roof-maintenance |
| /services/cement-tile-roof-restoration.php | /cement-tile-roof-restoration |

### Legacy /fl/ city-keyword URLs (tile-specific)
| Old | New |
|---|---|
| /fl/Sunrise-Tamarac-spanish-tile-roof-painting.php | /spanish-tile-roof-painting |
| /fl/Wilton-Manors-spanish-tile-roof-coating.php | /spanish-tile-roof-coating |
| /fl/Miramar-cement-tile-roof-painting.php | /cement-tile-roof-restoration |

Note: the server also auto-derives bare-slug and non-.php variants for every /fl/ entry (e.g. /Wilton-Manors-spanish-tile-roof-coating → 301).

### Generic tile slugs
| Old | New |
|---|---|
| /tile-roof-coating | /spanish-tile-roof-coating |
| /barrel-tile-roof-coating | /spanish-tile-roof-coating |
| /tile-roof-restoration | /cement-tile-roof-restoration |
| /cement-tile-roof-coating | /cement-tile-roof-restoration |
| /spanish-tile-roof-repair | /spanish-tile-roof-maintenance |

### 44 additional /fl/ city URLs
Previously-unmapped legacy /fl/ city URLs (Delray Beach, Pinecrest, Key West, etc.) now 301 to their matching /service-areas/[county]/[city] pages. Full list lives in `artifacts/roof-store/server.js` (EXACT_REDIRECTS, /fl/ section). Unmapped /fl/ URLs fall back to /service-areas.

## Where things changed

- Pages: `artifacts/roof-store/src/pages/tile-services/` (data.ts + TileServicePage.tsx)
- Routes: `artifacts/roof-store/src/App.tsx`, `scripts/src/routes.ts`
- Redirects + meta: `artifacts/roof-store/server.js` (PAGE_META + EXACT_REDIRECTS)
- Internal links: `artifacts/roof-store/src/pages/RoofServices.tsx` (Reglazing / Painting / Restoration cards)
- Sitemap: 158 URLs (was 153)

## Status

Built, prerendered (158/158 routes), and verified locally with curl (all pages 200 with correct titles/canonicals; all sampled redirects 301 to correct targets). **Not yet published to production.**
