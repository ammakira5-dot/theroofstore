import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { allRoutes } from "./routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://www.theroofstore.net";
const OUTPUT_PATH = resolve(
  __dirname,
  "../../artifacts/roof-store/public/sitemap.xml",
);
const ROUTES_MANIFEST_PATH = resolve(
  __dirname,
  "../../artifacts/roof-store/public/routes.json",
);

const TODAY = new Date().toISOString().split("T")[0];

const urlEntries = allRoutes
  .map(({ loc, changefreq, priority }) => {
    return `  <url><loc>${BASE_URL}${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(OUTPUT_PATH, xml, "utf-8");
console.log(`sitemap.xml written to ${OUTPUT_PATH} (${allRoutes.length} URLs)`);

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
