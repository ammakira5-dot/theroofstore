// scripts/generate-sitemap.mjs
//
// Drop-in replacement for a Vite/React SPA sitemap generator that currently
// stamps every URL with a single build-time date. This version derives
// <lastmod> per URL from the real last-edit date of that page's source file
// (git commit date, falling back to filesystem mtime if git isn't available)
// instead of a global timestamp.
//
// Adapt ROUTES below to your actual route map, or replace the ROUTES array
// with your existing route-generation logic (e.g. reading src/pages/**,
// or your service-area city-page generator) — the important change is only
// in getLastmod(), not in how routes are discovered.

import { execSync } from "node:child_process";
import { statSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = "https://www.theroofstore.net";
const OUTPUT_PATH = resolve("public/sitemap.xml"); // Vite copies public/ as-is into dist/

// Example route manifest — replace with your real route list / generator output.
// Each entry maps a URL to the source file whose edits should drive lastmod.
const ROUTES = [
  { url: "/", file: "src/pages/Home.tsx", changefreq: "monthly", priority: 1.0 },
  { url: "/roof-coating-florida", file: "src/pages/RoofCoatingFlorida.tsx", changefreq: "monthly", priority: 0.9 },
  { url: "/partner-network", file: "src/pages/PartnerNetwork.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "/about", file: "src/pages/About.tsx", changefreq: "yearly", priority: 0.8 },
  // ...append the rest of your existing route list here, each with its own source file.
  // For templated city pages generated from one component + a data file, point `file`
  // at the DATA file for that city (e.g. src/data/service-areas/fort-lauderdale.json),
  // not the shared template component — otherwise every city page will still share
  // one lastmod (the template's), just recreating the original problem one level down.
];

function getLastmod(filePath) {
  const absPath = resolve(filePath);
  if (!existsSync(absPath)) {
    console.warn(`[sitemap] Missing file for lastmod lookup: ${filePath} — falling back to today.`);
    return new Date().toISOString().slice(0, 10);
  }
  try {
    // Real content-edit date from git history (most reliable for a code-only SPA).
    const gitDate = execSync(`git log -1 --format=%cI -- "${absPath}"`, { encoding: "utf-8" }).trim();
    if (gitDate) return gitDate.slice(0, 10);
  } catch {
    // git not available or file not tracked — fall through to filesystem mtime.
  }
  return statSync(absPath).mtime.toISOString().slice(0, 10);
}

function buildSitemap(routes) {
  const urlEntries = routes
    .map(({ url, file, changefreq, priority }) => {
      const lastmod = getLastmod(file);
      return `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

const xml = buildSitemap(ROUTES);
writeFileSync(OUTPUT_PATH, xml, "utf-8");
console.log(`[sitemap] Wrote ${ROUTES.length} URLs to ${OUTPUT_PATH} with per-page lastmod dates.`);