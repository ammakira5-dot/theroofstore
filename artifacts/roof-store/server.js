import express from "express";
import sirv from "sirv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;
const staticDir = join(__dirname, "dist/public");

const app = express();

// ── Server-side 301 redirects ─────────────────────────────────────────────
// These ensure Google receives a proper "Moved Permanently" response instead
// of a 200 with a client-rendered 404 (soft 404), preserving SEO authority.

const EXACT_REDIRECTS = {
  // Root-level PHP pages
  "/residential.php": "/roof-services",
  "/projects/reviews.php": "/reviews",
  "/affiliations.php": "/partner-network",
  "/testimonials.php": "/reviews",
  "/energy-incentives.php": "/roof-systems",
  "/Roof_Painting_Service_Broward_County_for_Smart_Shield.php": "/products/smartshield",
  "/Roof_Painting_Service_Broward_County_for_Smart_Shield.pdf": "/products/smartshield",
  "/assets/files/basic-colors-smart-shield.pdf": "/products/smartshield",
  "/roof-shield-system.php": "/products/roofshield",
  "/factory.php": "/factory",
  "/products.php": "/products",
  "/reviews.php": "/reviews",
  "/references.php": "/reviews",
  "/miami-dade-references.php": "/reviews",
  "/faq.php": "/faq",
  "/questions.php": "/questions",
  "/aboutus.php": "/about",
  "/contact.php": "/contact",
  "/distributorships.php": "/distributorships",
  "/videos.php": "/videos",
  "/blog.php": "/blog",

  // /fl/ city PHP pages — specific city matches
  "/fl/index.php": "/service-areas",
  "/fl/broward-county.php": "/service-areas/broward-county",
  "/fl/Palm-Beach-County.php": "/service-areas/palm-beach-county",
  "/fl/Dade-County.php": "/service-areas/miami-dade-county",
  "/fl/serviceareas.php": "/service-areas",
  "/fl/Davie-roof-repair.php": "/service-areas/broward-county/davie",
  "/fl/Plantation-metal-roof-painting.php": "/service-areas/broward-county/plantation",
  "/fl/Pompano-Beach-roof-contractor.php": "/service-areas/broward-county/pompano-beach",
  "/fl/Pembroke-Park-roof-coating.php": "/service-areas/broward-county/pembroke-park",
  "/fl/Hollywood-metal-roof-restoration.php": "/service-areas/broward-county/hollywood",
  "/fl/Hallandale-roof-painting.php": "/service-areas/broward-county/hallandale-beach",
  "/fl/Lauderdale-Lakes-roof-coating.php": "/service-areas/broward-county/lauderdale-lakes",
  "/fl/Margate-shingle-roof-painting.php": "/service-areas/broward-county/margate",
  "/fl/North-Lauderdale-metal-roof-restoration.php": "/service-areas/broward-county/north-lauderdale",
  "/fl/Miramar-cement-tile-roof-painting.php": "/service-areas/broward-county/miramar",
  "/fl/Lighthouse-Point-roof-waterproofing.php": "/service-areas/broward-county/lighthouse-point",
  "/fl/Sunrise-Tamarac-spanish-tile-roof-painting.php": "/service-areas/broward-county/sunrise",
  "/fl/Boynton-Beach-roof-contractor.php": "/service-areas/palm-beach-county/boynton-beach",
  "/fl/Jupiter-roof-painting.php": "/service-areas/palm-beach-county/jupiter",
  "/fl/Palm-Beach-roof-painting.php": "/service-areas/palm-beach-county",
  "/fl/Boca-Raton-roof-restoration.php": "/service-areas/palm-beach-county/boca-raton",
  "/fl/Lake-Worth-roof-coating.php": "/service-areas/palm-beach-county/lake-worth-beach",
  "/fl/Lantana-roof-coating.php": "/service-areas/palm-beach-county/lantana",
  "/fl/North-Palm-Beach-roof-contractor.php": "/service-areas/palm-beach-county/north-palm-beach",
  "/fl/Atlantis-roof-waterproofing.php": "/service-areas/palm-beach-county",
  "/fl/Juno-Beach-roof-waterproofing.php": "/service-areas/palm-beach-county",
  "/fl/Surfside-roof-waterproofing.php": "/service-areas/miami-dade-county",
  "/fl/Miami-Gardens-roof-coating.php": "/service-areas/miami-dade-county",
  "/fl/Miami-Beach-roof-sealing.php": "/service-areas/miami-dade-county",
  "/fl/Homestead-roof-restoration.php": "/service-areas/miami-dade-county",
  "/fl/Deerfield-Beach-roof-sealing.php": "/service-areas/broward-county/deerfield-beach",
  "/fl/Oakland-Park-roof-sealing.php": "/service-areas/broward-county/oakland-park",
  "/fl/Southwest-Ranches-roof-coating.php": "/service-areas/broward-county/southwest-ranches",
  "/fl/Sweetwater-roof-coating.php": "/service-areas/miami-dade-county/sweetwater",
  "/fl/Sunny-Isles-Beach-roof-coating.php": "/service-areas/miami-dade-county/sunny-isles-beach",
  "/fl/Cooper-City-roof-painting.php": "/service-areas/broward-county/cooper-city",
  "/fl/Fort-Lauderdale-shingle-roof-painting.php": "/service-areas/broward-county/fort-lauderdale",
  "/fl/Pembroke-Pines-roof-painting.php": "/service-areas/broward-county/pembroke-pines",
  "/fl/Virginia-Gardens-roof-painting.php": "/service-areas/miami-dade-county/virginia-gardens",
  "/fl/Key-Biscayne-roof-painting.php": "/service-areas/miami-dade-county/key-biscayne",
  "/fl/Parkland-shingle-roof-coating.php": "/service-areas/broward-county/parkland",
  "/fl/Miami-roof-restoration.php": "/service-areas/miami-dade-county/miami",
  "/fl/North-Miami-roof-contractor.php": "/service-areas/miami-dade-county/north-miami",
  "/fl/Briny-Breezes-roof-repair.php": "/service-areas/palm-beach-county/briny-breezes",
  "/fl/Bal-Harbour-roof-painting.php": "/service-areas/miami-dade-county/bal-harbour",
  "/fl/Ocean-Ridge-roof-sealing.php": "/service-areas/palm-beach-county/ocean-ridge",
  "/fl/West-Palm-Beach-roof-sealing.php": "/service-areas/palm-beach-county/west-palm-beach",
  "/fl/Weston-shingle-roof-restoration.php": "/service-areas/broward-county/weston",
  "/fl/Pahokee-roof-coating.php": "/service-areas/palm-beach-county/pahokee",
  "/fl/North-Bay-Village-roof-painting.php": "/service-areas/miami-dade-county/north-bay-village",
  "/fl/Opa-Locka-roof-coating.php": "/service-areas/miami-dade-county/opa-locka",
  "/fl/Indian-Creek-Village-roof-sealing.php": "/service-areas/miami-dade-county/indian-creek-village",
  "/fl/Golfview-roof-painting.php": "/service-areas/palm-beach-county/golfview",
  "/fl/Lauderhill-roof-sealing.php": "/service-areas/broward-county/lauderhill",

  // /services/ PHP pages — specific matches
  "/services/commercial-metal-roof-coating.php": "/commercial-roofs",
  "/services/commercial-metal-roof-restoration.php": "/commercial-roofs",
  "/services/commercial-metal-roof-painting.php": "/commercial-roofs",
  "/services/additional-roof-life-certification.php": "/roof-life-certification",
  "/services/spanish-tile-roof-coating.php": "/roof-systems",
  "/services/residential-spanish-tile-roof-waterproofing.php": "/roof-systems",
  "/services/cement-tile-roof-restoration.php": "/roof-systems",

  // Legacy non-PHP service pages
  "/roof-painting-service-broward-county-florida": "/roof-services",
  "/roof-painting-service-broward-county": "/roof-services",
  "/roof-painting": "/roof-services",
  "/roof-painting-florida": "/roof-services",
  "/roof-coating": "/roof-services",
  "/roof-coating-broward-county": "/roof-services",
  "/roof-coating-florida": "/roof-services",
  "/elastomeric-roof-coating": "/roof-services",
  "/liquid-rubber-roof-coating": "/roof-services",
  "/roof-waterproofing": "/roof-services",
  "/roof-waterproofing-broward-county": "/roof-services",
  "/waterproofing-flat-roof-broward-county": "/roof-services",
  "/waterproofing-roof-broward-county": "/roof-services",
  "/roof-waterproofing-lauderdale-broward": "/roof-services",
  "/roof-sealing": "/roof-services",
  "/roof-sealing-broward-county": "/roof-services",
  "/roof-restoration": "/roof-services",
  "/roof-repair": "/roof-services",
  "/tile-roof-coating": "/roof-services",
  "/tile-roof-restoration": "/roof-services",
  "/cement-tile-roof-coating": "/roof-services",
  "/barrel-tile-roof-coating": "/roof-services",
  "/roof-certification": "/roof-services",
  "/additional-roof-life-certification": "/roof-services",

  // Legacy commercial
  "/commercial-roof-coating": "/commercial-roofs",
  "/commercial-roofing": "/commercial-roofs",
  "/commercial-roofing-contractor": "/commercial-roofs",
  "/commercial-roofing-contractor-broward-county": "/commercial-roofs",
  "/flat-roof-waterproofing": "/commercial-roofs",
  "/flat-roof-coating": "/commercial-roofs",
  "/foam-roof-coating": "/commercial-roofs",

  // Legacy products
  "/smartshield": "/products/smartshield",
  "/smart-shield": "/products/smartshield",
  "/fungalshield": "/products/fungalshield",
  "/fungal-shield": "/products/fungalshield",
  "/roofshield": "/products/roofshield",
  "/roof-shield": "/products/roofshield",
  "/rp1": "/products/fungalshield",
  "/rp2": "/products/smartshield",
  "/rp3": "/products/roofshield",

  // Legacy company pages
  "/about-us": "/about",
  "/our-company": "/about",
  "/contact-us": "/contact",
  "/testimonials": "/reviews",
  "/customer-reviews": "/reviews",
  "/gallery": "/projects",
  "/photo-gallery": "/projects",
  "/our-work": "/projects",
  "/before-after": "/projects",
  "/before-and-after": "/projects",
  "/project-gallery": "/projects",
  "/factory-tour": "/factory",
  "/manufacturing": "/factory",
  "/our-factory": "/factory",
  "/video": "/videos",
  "/video-gallery": "/videos",
  "/distributor": "/distributorships",
  "/distributorships/": "/distributorships",
  "/franchise": "/distributorships",
  "/questions-to-ask": "/questions",
  "/questions-to-ask-your-roofing-contractor": "/questions",

  // Legacy service area pages
  "/broward-county": "/service-areas/broward",
  "/broward": "/service-areas/broward",
  "/miami-dade": "/service-areas/miami-dade",
  "/miami-dade-county": "/service-areas/miami-dade",
  "/palm-beach": "/service-areas/palm-beach",
  "/palm-beach-county": "/service-areas/palm-beach",
  "/service-area": "/service-areas",
  "/areas-we-serve": "/service-areas",
  "/locations": "/service-areas",
};

app.use((req, res, next) => {
  const dest = EXACT_REDIRECTS[req.path];
  if (dest) return res.redirect(301, dest);

  // /fl/*.php catch-all → /service-areas
  if (req.path.startsWith("/fl/") && req.path.endsWith(".php")) {
    return res.redirect(301, "/service-areas");
  }

  // /services/*.php catch-all → /roof-services
  if (req.path.startsWith("/services/") && req.path.endsWith(".php")) {
    return res.redirect(301, "/roof-services");
  }

  // /blog/:slug → /blog
  if (req.path.startsWith("/blog/") && req.path.length > 6) {
    return res.redirect(301, "/blog");
  }

  // /projects/:slug, /project/:slug, /gallery/:slug → /projects
  if (
    (req.path.startsWith("/projects/") ||
      req.path.startsWith("/project/") ||
      req.path.startsWith("/gallery/") ||
      req.path.startsWith("/portfolio/")) &&
    req.path.length > req.path.indexOf("/", 1) + 1
  ) {
    return res.redirect(301, "/projects");
  }

  next();
});

// ── Static file serving with SPA fallback ────────────────────────────────
app.use(
  sirv(staticDir, {
    single: true,
    etag: true,
  }),
);

app.listen(port, "0.0.0.0", () => {
  console.log(`The Roof Store serving on port ${port}`);
});
