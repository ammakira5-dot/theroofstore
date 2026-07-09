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
