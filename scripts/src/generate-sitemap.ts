import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const { counties } = await import(
  "../../artifacts/roof-store/src/pages/service-areas/data.js"
);

const BASE_URL = "https://www.theroofstore.net";
const OUTPUT_PATH = resolve(
  __dirname,
  "../../artifacts/roof-store/public/sitemap.xml",
);

const TODAY = new Date().toISOString().split("T")[0];

interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

const staticRoutes: UrlEntry[] = [
  { loc: "/", changefreq: "monthly", priority: "1.0", lastmod: TODAY },
  { loc: "/about", changefreq: "yearly", priority: "0.8", lastmod: TODAY },
  { loc: "/roof-systems", changefreq: "monthly", priority: "0.9", lastmod: TODAY },
  { loc: "/roof-services", changefreq: "monthly", priority: "0.9", lastmod: TODAY },
  { loc: "/service-areas", changefreq: "monthly", priority: "0.9", lastmod: TODAY },
  { loc: "/products", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { loc: "/products/fungalshield", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { loc: "/products/smartshield", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { loc: "/products/roofshield", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { loc: "/commercial-roofs", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { loc: "/reviews", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { loc: "/projects", changefreq: "monthly", priority: "0.7", lastmod: TODAY },
  { loc: "/blog", changefreq: "weekly", priority: "0.7", lastmod: TODAY },
  { loc: "/faq", changefreq: "yearly", priority: "0.7", lastmod: TODAY },
  { loc: "/questions", changefreq: "yearly", priority: "0.7", lastmod: TODAY },
  { loc: "/videos", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
  { loc: "/distributorships", changefreq: "yearly", priority: "0.6", lastmod: TODAY },
  { loc: "/factory", changefreq: "yearly", priority: "0.6", lastmod: TODAY },
  { loc: "/shop", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
  { loc: "/contact", changefreq: "yearly", priority: "0.8", lastmod: TODAY },
];

const countyRoutes: UrlEntry[] = counties.flatMap(
  (county: { slug: string; cities: { slug: string }[] }) => [
    {
      loc: `/service-areas/${county.slug}`,
      changefreq: "monthly",
      priority: "0.8",
      lastmod: TODAY,
    },
    {
      loc: `/roof-services/${county.slug}`,
      changefreq: "monthly",
      priority: "0.8",
      lastmod: TODAY,
    },
    ...county.cities.map((city: { slug: string }) => ({
      loc: `/service-areas/${county.slug}/${city.slug}`,
      changefreq: "monthly",
      priority: "0.7",
      lastmod: TODAY,
    })),
  ],
);

const allUrls: UrlEntry[] = [...staticRoutes, ...countyRoutes];

const urlEntries = allUrls
  .map(({ loc, changefreq, priority, lastmod }) => {
    const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
    return `  <url><loc>${BASE_URL}${loc}</loc>${lastmodTag}<changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(OUTPUT_PATH, xml, "utf-8");
console.log(`sitemap.xml written to ${OUTPUT_PATH} (${allUrls.length} URLs)`);
