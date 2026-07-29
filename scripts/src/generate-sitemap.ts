import { execSync } from "child_process";
import { existsSync, statSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { allRoutes, staticRoutes } from "./routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://www.theroofstore.net";
const REPO_ROOT = resolve(__dirname, "../..");
const PAGES = resolve(REPO_ROOT, "artifacts/roof-store/src/pages");
const SA = resolve(PAGES, "service-areas");
const BLOG_DATA = resolve(REPO_ROOT, "artifacts/roof-store/src/data/blogPosts.ts");
const OUTPUT_PATH = resolve(
  REPO_ROOT,
  "artifacts/roof-store/public/sitemap.xml",
);
const ROUTES_MANIFEST_PATH = resolve(
  REPO_ROOT,
  "artifacts/roof-store/public/routes.json",
);

const TODAY = new Date().toISOString().split("T")[0];

function git(cmd: string): string {
  try {
    return execSync(cmd, { cwd: REPO_ROOT, encoding: "utf-8" }).trim();
  } catch {
    return "";
  }
}

const fileDateCache = new Map<string, string>();

/** Last git commit date (YYYY-MM-DD) for a file; falls back to mtime, then today. */
function fileDate(absPath: string): string {
  const cached = fileDateCache.get(absPath);
  if (cached) return cached;
  let date = git(`git log -1 --format=%cs -- "${absPath}"`);
  if (!date && existsSync(absPath)) {
    date = statSync(absPath).mtime.toISOString().split("T")[0];
  }
  if (!date) date = TODAY;
  fileDateCache.set(absPath, date);
  return date;
}

/**
 * One-pass history index: for a set of files, returns commits (newest first)
 * with their dates and the changed-line text of each commit's diff, so
 * per-entry (city, blog post) dates can be looked up without running a
 * separate git search per slug.
 */
interface HistoryEntry {
  date: string;
  changedText: string;
}

const historyCache = new Map<string, HistoryEntry[]>();

function historyFor(files: string[]): HistoryEntry[] {
  const key = files.join("|");
  const cached = historyCache.get(key);
  if (cached) return cached;

  const fileArgs = files.map((f) => `"${f}"`).join(" ");
  const raw = git(
    `git log --format=@@COMMIT@@%cs --unified=0 -p -- ${fileArgs}`,
  );
  const entries: HistoryEntry[] = [];
  for (const block of raw.split("@@COMMIT@@").slice(1)) {
    const newline = block.indexOf("\n");
    const date = block.slice(0, newline).trim();
    const changedText = block
      .slice(newline + 1)
      .split("\n")
      .filter((l) => l.startsWith("+") || l.startsWith("-"))
      .join("\n");
    entries.push({ date, changedText });
  }
  historyCache.set(key, entries);
  return entries;
}

/**
 * Last commit date where lines mentioning `needle` changed in the given
 * files — i.e. when this specific entry (city, blog post) was added or
 * edited. Falls back to the newest file date.
 */
function entryDate(needle: string, files: string[]): string {
  // Exact-token match: the slug must not be preceded/followed by slug chars,
  // so "miami" never matches "miami-beach" or "north-miami" diffs.
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const tokenRe = new RegExp(`(^|[^a-z0-9-])${escaped}([^a-z0-9-]|$)`, "m");
  for (const { date, changedText } of historyFor(files)) {
    if (tokenRe.test(changedText)) return date;
  }
  console.warn(`[sitemap] entry "${needle}" not found in history — using file dates.`);
  return files.map(fileDate).sort().reverse()[0] ?? TODAY;
}

function maxDate(...dates: string[]): string {
  return dates.sort().reverse()[0];
}

// Explicit map: static route -> the source file(s) whose edits drive lastmod.
const p = (f: string) => resolve(PAGES, f);
const STATIC_FILES: Record<string, string[]> = {
  "/": [p("Home.tsx")],
  "/about": [p("About.tsx")],
  "/roof-systems": [p("RoofSystems.tsx")],
  "/roof-services": [p("RoofServices.tsx")],
  "/service-areas": [p("ServiceAreas.tsx"), resolve(SA, "index.tsx")],
  "/products": [p("Products.tsx"), p("products/data.ts")],
  "/products/fungalshield": [p("products/data.ts"), p("products/ProductPage.tsx")],
  "/products/smartshield": [p("products/data.ts"), p("products/ProductPage.tsx")],
  "/products/roofshield": [p("products/data.ts"), p("products/ProductPage.tsx")],
  "/commercial-roofs": [p("CommercialRoofs.tsx")],
  "/reviews": [p("Reviews.tsx")],
  "/projects": [p("Projects.tsx")],
  "/blog": [p("Blog.tsx"), BLOG_DATA],
  "/faq": [p("Faq.tsx")],
  "/questions": [p("Questions.tsx")],
  "/videos": [p("Videos.tsx")],
  "/distributorships": [p("Distributorships.tsx")],
  "/factory": [p("Factory.tsx")],
  "/shop": [p("Shop.tsx")],
  "/pricing": [p("Pricing.tsx")],
  "/contact": [p("Contact.tsx")],
  "/silicone-vs-elastomeric-roof-coating": [p("SiliconeVsElastomeric.tsx")],
  "/roof-painting-vs-coating": [p("RoofPaintingVsCoating.tsx")],
  "/roof-replacement-alternative-florida": [p("RoofReplacementAlternative.tsx")],
  "/roof-life-certification": [p("RoofLifeCertification.tsx")],
  "/silicone-roof-coating": [p("SiliconeRoofCoating.tsx")],
  "/tile-roof-painting": [p("TileRoofPainting.tsx")],
  "/spanish-tile-roof-coating": [p("tile-services/data.ts"), p("tile-services/TileServicePage.tsx")],
  "/spanish-tile-roof-painting": [p("tile-services/data.ts"), p("tile-services/TileServicePage.tsx")],
  "/spanish-tile-roof-waterproofing": [p("tile-services/data.ts"), p("tile-services/TileServicePage.tsx")],
  "/spanish-tile-roof-maintenance": [p("tile-services/data.ts"), p("tile-services/TileServicePage.tsx")],
  "/cement-tile-roof-restoration": [p("tile-services/data.ts"), p("tile-services/TileServicePage.tsx")],
  "/partner-network": [p("PartnerNetwork.tsx")],
  "/roof-pressure-cleaning": [p("RoofPressureCleaning.tsx")],
  "/the-original-roof-store-florida": [p("OriginalRoofStore.tsx")],
  "/manufacturers-report": [p("ManufacturersReport.tsx")],
  "/roof-coating-florida": [p("RoofCoatingFlorida.tsx")],
  "/tas-106-certified-roof-coating": [p("Tas106Certification.tsx")],
  "/roof-coating-lifespan-florida": [p("RoofCoatingLifespan.tsx")],
  "/diy-vs-pro-roof-coating": [p("DiyVsPro.tsx")],
  "/hurricane-roof-prep": [p("HurricaneRoofPrep.tsx")],
  "/commercial-roof-coating-hoa": [p("HoaRoofCoating.tsx")],
};

// City/county entry edits live in these shared data files; per-entry dates are
// derived from when each slug's content actually changed within them.
const CITY_DATA_FILES = [
  resolve(SA, "data.ts"),
  resolve(SA, "contentVariants.ts"),
  resolve(SA, "cityFAQs.ts"),
  resolve(SA, "coords.ts"),
];
const COUNTY_TEMPLATE = resolve(SA, "CountyPage.tsx");
const CITY_TEMPLATE = resolve(SA, "CityPage.tsx");

function lastmodFor(loc: string): string {
  // Blog posts: date the post's own entry last changed in blogPosts.ts.
  const blogMatch = loc.match(/^\/blog\/(.+)$/);
  if (blogMatch) return entryDate(blogMatch[1], [BLOG_DATA]);

  // City pages: date this city's own data last changed (falls back per file).
  const cityMatch = loc.match(/^\/service-areas\/([^/]+)\/([^/]+)$/);
  if (cityMatch) {
    return maxDate(
      entryDate(cityMatch[2], CITY_DATA_FILES),
      fileDate(CITY_TEMPLATE),
    );
  }

  // County index pages.
  const countyMatch = loc.match(/^\/service-areas\/([^/]+)$/);
  if (countyMatch) {
    return maxDate(
      entryDate(countyMatch[1], CITY_DATA_FILES),
      fileDate(COUNTY_TEMPLATE),
    );
  }

  const files = STATIC_FILES[loc];
  if (files) return maxDate(...files.map(fileDate));

  console.warn(`[sitemap] No source mapping for ${loc} — using today.`);
  return TODAY;
}

const urlEntries = allRoutes
  .map(({ loc, changefreq, priority }) => {
    const lastmod = lastmodFor(loc);
    return `  <url><loc>${BASE_URL}${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(OUTPUT_PATH, xml, "utf-8");
console.log(`sitemap.xml written to ${OUTPUT_PATH} (${allRoutes.length} URLs)`);

// Sanity report: how many distinct lastmod dates ended up in the sitemap.
const distinct = new Set(
  [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]),
);
console.log(`distinct lastmod dates: ${distinct.size}`);
if (distinct.size <= 1) {
  console.warn(
    "[sitemap] WARNING: all lastmod dates identical — per-page dating regressed.",
  );
}

// Routes manifest — authoritative list of real page paths, consumed by
// server.js at runtime to distinguish real (if not-yet-prerendered) routes
// from genuinely invalid/legacy URLs, so the latter can return a real 404
// instead of a soft-404 (200 + homepage content).
const routesManifest = allRoutes.map(({ loc }) => loc);
writeFileSync(
  ROUTES_MANIFEST_PATH,
  JSON.stringify(routesManifest, null, 2),
  "utf-8",
);
console.log(`routes.json written to ${ROUTES_MANIFEST_PATH} (${routesManifest.length} routes)`);

// Keep the linter honest about the unused import shape (staticRoutes is used
// only to assert every static route has a source mapping).
const unmapped = staticRoutes.filter(
  (r) => !STATIC_FILES[r.loc] && !r.loc.startsWith("/blog/"),
);
if (unmapped.length > 0) {
  console.warn(
    `[sitemap] Static routes missing source mapping: ${unmapped.map((r) => r.loc).join(", ")}`,
  );
}
