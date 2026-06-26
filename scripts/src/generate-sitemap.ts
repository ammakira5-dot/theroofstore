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

interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
}

const staticRoutes: UrlEntry[] = [
  { loc: "/", changefreq: "monthly", priority: "1.0" },
  { loc: "/about", changefreq: "yearly", priority: "0.8" },
  { loc: "/roof-systems", changefreq: "monthly", priority: "0.9" },
  { loc: "/roof-services", changefreq: "monthly", priority: "0.9" },
  { loc: "/service-areas", changefreq: "monthly", priority: "0.9" },
  { loc: "/products", changefreq: "monthly", priority: "0.8" },
  { loc: "/products/fungalshield", changefreq: "monthly", priority: "0.8" },
  { loc: "/products/smartshield", changefreq: "monthly", priority: "0.8" },
  { loc: "/products/roofshield", changefreq: "monthly", priority: "0.8" },
  { loc: "/commercial-roofs", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews", changefreq: "monthly", priority: "0.7" },
  { loc: "/projects", changefreq: "monthly", priority: "0.7" },
  { loc: "/blog", changefreq: "weekly", priority: "0.7" },
  { loc: "/faq", changefreq: "yearly", priority: "0.7" },
  { loc: "/questions", changefreq: "yearly", priority: "0.7" },
  { loc: "/videos", changefreq: "monthly", priority: "0.6" },
  { loc: "/distributorships", changefreq: "yearly", priority: "0.6" },
  { loc: "/factory", changefreq: "yearly", priority: "0.6" },
  { loc: "/shop", changefreq: "monthly", priority: "0.6" },
  { loc: "/contact", changefreq: "yearly", priority: "0.8" },
];

const countyRoutes: UrlEntry[] = counties.flatMap(
  (county: { slug: string; cities: { slug: string }[] }) => [
    {
      loc: `/service-areas/${county.slug}`,
      changefreq: "monthly",
      priority: "0.8",
    },
    ...county.cities.map((city: { slug: string }) => ({
      loc: `/service-areas/${county.slug}/${city.slug}`,
      changefreq: "monthly",
      priority: "0.6",
    })),
  ],
);

const allUrls: UrlEntry[] = [...staticRoutes, ...countyRoutes];

const urlEntries = allUrls
  .map(
    ({ loc, changefreq, priority }) =>
      `  <url><loc>${BASE_URL}${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(OUTPUT_PATH, xml, "utf-8");
console.log(`sitemap.xml written to ${OUTPUT_PATH} (${allUrls.length} URLs)`);
