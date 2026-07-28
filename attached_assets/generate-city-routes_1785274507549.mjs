// scripts/generate-city-routes.mjs
//
// Extends generate-sitemap.mjs: instead of manually listing 100+ city-page
// entries in ROUTES, this walks a per-city data directory and builds them
// dynamically — with each city's lastmod tied to its own data file, not the
// shared template component.
//
// Confirmed from the current sitemap: the site has 4 counties —
// broward-county, miami-dade-county, palm-beach-county, monroe-county —
// each with a county index page plus one page per city.
//
// Assumed data layout (adjust paths to match your actual repo):
//   src/data/service-areas/broward-county/index.ts        <- county index content
//   src/data/service-areas/broward-county/fort-lauderdale.ts
//   src/data/service-areas/broward-county/hollywood.ts
//   ...one file per city, one index file per county.
//
// If your city data instead lives in a single JSON/TS object rather than
// one file per city, see the "single-file variant" note at the bottom —
// the fix still works, it just needs a different lastmod source.

import { readdirSync, existsSync } from "node:fs";
import { resolve, join, basename } from "node:path";

const DATA_ROOT = resolve("src/data/service-areas");

const COUNTIES = [
  "broward-county",
  "miami-dade-county",
  "palm-beach-county",
  "monroe-county",
];

/**
 * Builds ROUTES-style entries for every county index page and every city
 * page under it, by scanning the data directory instead of hardcoding URLs.
 */
export function generateCityRoutes() {
  const routes = [];

  for (const county of COUNTIES) {
    const countyDir = join(DATA_ROOT, county);
    if (!existsSync(countyDir)) {
      console.warn(`[sitemap] No data directory for county: ${county} — skipping.`);
      continue;
    }

    // County index page, e.g. /service-areas/broward-county
    const countyIndexFile = join(countyDir, "index.ts");
    if (existsSync(countyIndexFile)) {
      routes.push({
        url: `/service-areas/${county}`,
        file: countyIndexFile,
        changefreq: "monthly",
        priority: 0.8,
      });
    }

    // One route per city file in this county's directory.
    const cityFiles = readdirSync(countyDir).filter(
      (f) => f !== "index.ts" && (f.endsWith(".ts") || f.endsWith(".json"))
    );

    for (const cityFile of cityFiles) {
      const citySlug = basename(cityFile, cityFile.endsWith(".json") ? ".json" : ".ts");
      routes.push({
        url: `/service-areas/${county}/${citySlug}`,
        file: join(countyDir, cityFile),
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}

// --- Integration with generate-sitemap.mjs ---
// In generate-sitemap.mjs, replace the manually-listed city entries with:
//
//   import { generateCityRoutes } from "./generate-city-routes.mjs";
//   const ROUTES = [
//     ...staticRoutes,          // home, roof-coating-florida, about, etc.
//     ...generateCityRoutes(),  // all county + city pages, auto-discovered
//   ];
//
// getLastmod() from generate-sitemap.mjs then runs against each returned
// `file` path exactly as before — no other change needed.

// --- Single-file variant ---
// If all city data lives in one file (e.g. src/data/serviceAreas.ts exporting
// an array/object of cities) rather than one file per city, every city will
// share that one file's git date — which recreates the uniform-lastmod
// problem at the data layer instead of the template layer. In that case,
// either split the data into one file per city (recommended), or add a
// per-city `updatedAt` field inside that single data structure and read
// `city.updatedAt` instead of a file's git date in getLastmod().