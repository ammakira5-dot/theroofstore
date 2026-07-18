const { counties } = await import(
  "../../artifacts/roof-store/src/pages/service-areas/data.js"
);

export interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
}

export const staticRoutes: UrlEntry[] = [
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
  { loc: "/pricing", changefreq: "monthly", priority: "0.8" },
  { loc: "/contact", changefreq: "yearly", priority: "0.8" },
  { loc: "/silicone-vs-elastomeric-roof-coating", changefreq: "monthly", priority: "0.7" },
  { loc: "/roof-painting-vs-coating", changefreq: "monthly", priority: "0.7" },
  { loc: "/roof-replacement-alternative-florida", changefreq: "monthly", priority: "0.7" },
  { loc: "/roof-life-certification", changefreq: "monthly", priority: "0.7" },
  { loc: "/silicone-roof-coating", changefreq: "monthly", priority: "0.7" },
  { loc: "/tile-roof-painting", changefreq: "monthly", priority: "0.8" },
  { loc: "/partner-network", changefreq: "monthly", priority: "0.7" },
  { loc: "/roof-pressure-cleaning", changefreq: "monthly", priority: "0.7" },
  { loc: "/the-original-roof-store-florida", changefreq: "yearly", priority: "0.6" },
  { loc: "/manufacturers-report", changefreq: "yearly", priority: "0.5" },
  { loc: "/roof-coating-florida", changefreq: "monthly", priority: "0.9" },
  { loc: "/roof-coating-lifespan-florida", changefreq: "monthly", priority: "0.8" },
  { loc: "/diy-vs-pro-roof-coating", changefreq: "monthly", priority: "0.7" },
  { loc: "/hurricane-roof-prep", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog/roof-coating-can-save-your-home-and-insurance-policy-in-florida", changefreq: "yearly", priority: "0.7" },
  { loc: "/blog/new-florida-homeowners-insurance-laws", changefreq: "yearly", priority: "0.7" },
  { loc: "/blog/citizens-insurance-for-older-tile-roofs-in-florida", changefreq: "yearly", priority: "0.7" },
  { loc: "/blog/additional-roof-life-certification-benefits-meaning", changefreq: "yearly", priority: "0.7" },
  { loc: "/blog/2026-hurricane-season-roof-prep-south-florida", changefreq: "yearly", priority: "0.7" },
  { loc: "/blog/how-long-does-roof-coating-last-florida", changefreq: "yearly", priority: "0.7" },
  { loc: "/blog/diy-vs-professional-roof-coating-florida", changefreq: "yearly", priority: "0.7" },
];

export const countyRoutes: UrlEntry[] = counties.flatMap(
  (county: { slug: string; cities: { slug: string }[] }) => [
    {
      loc: `/service-areas/${county.slug}`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: `/roof-services/${county.slug}`,
      changefreq: "monthly",
      priority: "0.8",
    },
    ...county.cities.map((city: { slug: string }) => ({
      loc: `/service-areas/${county.slug}/${city.slug}`,
      changefreq: "monthly",
      priority: "0.7",
    })),
  ],
);

export const allRoutes: UrlEntry[] = [...staticRoutes, ...countyRoutes];
