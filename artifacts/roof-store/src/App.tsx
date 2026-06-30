import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import { RedirectTo } from "@/components/RedirectTo";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import RoofSystems from "@/pages/RoofSystems";
import RoofServices from "@/pages/RoofServices";
import ServiceAreas from "@/pages/service-areas/index";
import Reviews from "@/pages/Reviews";
import Faq from "@/pages/Faq";
import Projects from "@/pages/Projects";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Factory from "@/pages/Factory";
import Videos from "@/pages/Videos";
import Distributorships from "@/pages/Distributorships";
import CommercialRoofs from "@/pages/CommercialRoofs";
import Blog from "@/pages/Blog";
import Questions from "@/pages/Questions";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import RoofLifeCertification from "@/pages/RoofLifeCertification";
import ManufacturersReport from "@/pages/ManufacturersReport";
import Pricing from "@/pages/Pricing";
import RoofPaintingVsCoating from "@/pages/RoofPaintingVsCoating";
import PartnerNetwork from "@/pages/PartnerNetwork";
import Shop from "@/pages/Shop";
import { ProductDetail } from "@/pages/products/ProductDetail";
import { productMap } from "@/pages/products/data";

import { CountyPage } from "@/pages/service-areas/CountyPage";
import { CityPage } from "@/pages/service-areas/CityPage";
import { getCityImage } from "@/pages/service-areas/data";
import { findCounty, findCity } from "@/pages/service-areas/data";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function CountyRoute({ params }: { params: { county: string } }) {
  const county = findCounty(params.county);
  if (!county) return <NotFound />;
  return <CountyPage county={county.name} slug={county.slug} description={county.description} image={county.image} cities={county.cities} />;
}

function CityRoute({ params }: { params: { county: string; city: string } }) {
  const result = findCity(params.county, params.city);
  if (!result) return <NotFound />;
  return (
    <CityPage
      city={result.city.name}
      county={result.county.name}
      countySlug={result.county.slug}
      citySlug={result.city.slug}
      image={getCityImage(result.county, result.city)}
      blurb={result.city.blurb}
    />
  );
}

function Router() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      {/* ── Core pages ── */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/roof-systems" component={RoofSystems} />
      <Route path="/roof-services" component={RoofServices} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/service-areas/:county" component={CountyRoute} />
      <Route path="/service-areas/:county/:city" component={CityRoute} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/faq" component={Faq} />
      <Route path="/projects" component={Projects} />
      <Route path="/products" component={Products} />
      <Route path="/products/:slug" component={({ params }) => {
        const product = productMap[params.slug];
        if (!product) return <NotFound />;
        return <ProductDetail product={product} />;
      }} />
      <Route path="/contact" component={Contact} />
      <Route path="/factory" component={Factory} />
      <Route path="/videos" component={Videos} />
      <Route path="/distributorships" component={Distributorships} />
      <Route path="/commercial-roofs" component={CommercialRoofs} />
      <Route path="/blog" component={Blog} />
      <Route path="/questions" component={Questions} />
      <Route path="/shop" component={Shop} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/roof-life-certification" component={RoofLifeCertification} />
      <Route path="/manufacturers-report" component={ManufacturersReport} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/roof-painting-vs-coating" component={RoofPaintingVsCoating} />
      <Route path="/partner-network" component={PartnerNetwork} />
      <Route path="/admin" component={Admin} />

      {/* ── Legacy WordPress redirects — service pages ── */}
      <Route path="/roof-painting-service-broward-county-florida" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-painting-service-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-painting" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-painting-florida" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-coating" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-coating-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-coating-florida" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/elastomeric-roof-coating" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/liquid-rubber-roof-coating" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-waterproofing" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-waterproofing-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/waterproofing-flat-roof-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/waterproofing-roof-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-waterproofing-lauderdale-broward" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-sealing" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-sealing-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-restoration" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-repair" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/tile-roof-coating" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/tile-roof-restoration" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/cement-tile-roof-coating" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/barrel-tile-roof-coating" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-certification" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/additional-roof-life-certification" component={() => <RedirectTo to="/roof-services" />} />

      {/* ── Legacy — commercial ── */}
      <Route path="/commercial-roof-coating" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/commercial-roofing" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/commercial-roofing-contractor" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/commercial-roofing-contractor-broward-county" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/flat-roof-waterproofing" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/flat-roof-coating" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/foam-roof-coating" component={() => <RedirectTo to="/commercial-roofs" />} />

      {/* ── Legacy — products ── */}
      <Route path="/smartshield" component={() => <RedirectTo to="/products/smartshield" />} />
      <Route path="/smart-shield" component={() => <RedirectTo to="/products/smartshield" />} />
      <Route path="/fungalshield" component={() => <RedirectTo to="/products/fungalshield" />} />
      <Route path="/fungal-shield" component={() => <RedirectTo to="/products/fungalshield" />} />
      <Route path="/roofshield" component={() => <RedirectTo to="/products/roofshield" />} />
      <Route path="/roof-shield" component={() => <RedirectTo to="/products/roofshield" />} />
      <Route path="/rp1" component={() => <RedirectTo to="/products/fungalshield" />} />
      <Route path="/rp2" component={() => <RedirectTo to="/products/smartshield" />} />
      <Route path="/rp3" component={() => <RedirectTo to="/products/roofshield" />} />

      {/* ── Legacy — company pages ── */}
      <Route path="/about-us" component={() => <RedirectTo to="/about" />} />
      <Route path="/our-company" component={() => <RedirectTo to="/about" />} />
      <Route path="/contact-us" component={() => <RedirectTo to="/contact" />} />
      <Route path="/testimonials" component={() => <RedirectTo to="/reviews" />} />
      <Route path="/customer-reviews" component={() => <RedirectTo to="/reviews" />} />
      <Route path="/gallery" component={() => <RedirectTo to="/projects" />} />
      <Route path="/photo-gallery" component={() => <RedirectTo to="/projects" />} />
      <Route path="/our-work" component={() => <RedirectTo to="/projects" />} />
      <Route path="/before-after" component={() => <RedirectTo to="/projects" />} />
      <Route path="/before-and-after" component={() => <RedirectTo to="/projects" />} />
      <Route path="/project-gallery" component={() => <RedirectTo to="/projects" />} />
      <Route path="/factory-tour" component={() => <RedirectTo to="/factory" />} />
      <Route path="/manufacturing" component={() => <RedirectTo to="/factory" />} />
      <Route path="/our-factory" component={() => <RedirectTo to="/factory" />} />
      <Route path="/video" component={() => <RedirectTo to="/videos" />} />
      <Route path="/video-gallery" component={() => <RedirectTo to="/videos" />} />
      <Route path="/distributor" component={() => <RedirectTo to="/distributorships" />} />
      <Route path="/distributorships/" component={() => <RedirectTo to="/distributorships" />} />
      <Route path="/franchise" component={() => <RedirectTo to="/distributorships" />} />
      <Route path="/questions-to-ask" component={() => <RedirectTo to="/questions" />} />
      <Route path="/questions-to-ask-your-roofing-contractor" component={() => <RedirectTo to="/questions" />} />

      {/* ── Legacy — service area / location pages ── */}
      <Route path="/broward-county" component={() => <RedirectTo to="/service-areas/broward" />} />
      <Route path="/broward" component={() => <RedirectTo to="/service-areas/broward" />} />
      <Route path="/miami-dade" component={() => <RedirectTo to="/service-areas/miami-dade" />} />
      <Route path="/miami-dade-county" component={() => <RedirectTo to="/service-areas/miami-dade" />} />
      <Route path="/palm-beach" component={() => <RedirectTo to="/service-areas/palm-beach" />} />
      <Route path="/palm-beach-county" component={() => <RedirectTo to="/service-areas/palm-beach" />} />
      <Route path="/service-area" component={() => <RedirectTo to="/service-areas" />} />
      <Route path="/areas-we-serve" component={() => <RedirectTo to="/service-areas" />} />
      <Route path="/locations" component={() => <RedirectTo to="/service-areas" />} />

      {/* ── Legacy — project / gallery sub-pages (old .php URLs) ── */}
      <Route path="/projects/:slug" component={() => <RedirectTo to="/projects" />} />
      <Route path="/project/:slug" component={() => <RedirectTo to="/projects" />} />
      <Route path="/gallery/:slug" component={() => <RedirectTo to="/projects" />} />
      <Route path="/portfolio/:slug" component={() => <RedirectTo to="/projects" />} />
      <Route path="/projects/residential-cement-tile-roof-waterproofing.php" component={() => <RedirectTo to="/projects" />} />

      {/* ── Legacy — /fl/ city pages (old PHP city landing pages) ── */}
      <Route path="/fl/broward-county.php" component={() => <RedirectTo to="/service-areas/broward-county" />} />
      <Route path="/fl/Palm-Beach-County.php" component={() => <RedirectTo to="/service-areas/palm-beach-county" />} />
      <Route path="/fl/Dade-County.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/serviceareas.php" component={() => <RedirectTo to="/service-areas" />} />
      <Route path="/fl/Davie-roof-repair.php" component={() => <RedirectTo to="/service-areas/broward-county/davie" />} />
      <Route path="/fl/Plantation-metal-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/plantation" />} />
      <Route path="/fl/Pompano-Beach-roof-contractor.php" component={() => <RedirectTo to="/service-areas/broward-county/pompano-beach" />} />
      <Route path="/fl/Pembroke-Park-roof-coating.php" component={() => <RedirectTo to="/service-areas/broward-county/pembroke-park" />} />
      <Route path="/fl/Hollywood-metal-roof-restoration.php" component={() => <RedirectTo to="/service-areas/broward-county/hollywood" />} />
      <Route path="/fl/Hallandale-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/hallandale-beach" />} />
      <Route path="/fl/Lauderdale-Lakes-roof-coating.php" component={() => <RedirectTo to="/service-areas/broward-county/lauderdale-lakes" />} />
      <Route path="/fl/Margate-shingle-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/margate" />} />
      <Route path="/fl/North-Lauderdale-metal-roof-restoration.php" component={() => <RedirectTo to="/service-areas/broward-county/north-lauderdale" />} />
      <Route path="/fl/Miramar-cement-tile-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/miramar" />} />
      <Route path="/fl/Lighthouse-Point-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/broward-county/lighthouse-point" />} />
      <Route path="/fl/Sunrise-Tamarac-spanish-tile-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/sunrise" />} />
      <Route path="/fl/Jupiter-roof-painting.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/jupiter" />} />
      <Route path="/fl/Palm-Beach-roof-painting.php" component={() => <RedirectTo to="/service-areas/palm-beach-county" />} />
      <Route path="/fl/Boca-Raton-roof-restoration.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/boca-raton" />} />
      <Route path="/fl/Atlantis-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/palm-beach-county" />} />
      <Route path="/fl/Juno-Beach-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/palm-beach-county" />} />
      <Route path="/fl/Surfside-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/Miami-Gardens-roof-coating.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/Miami-Beach-roof-sealing.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/Homestead-roof-restoration.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/:slug" component={() => <RedirectTo to="/service-areas" />} />

      {/* ── Legacy — /services/ PHP pages ── */}
      <Route path="/services/commercial-metal-roof-coating.php" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/services/additional-roof-life-certification.php" component={() => <RedirectTo to="/roof-life-certification" />} />
      <Route path="/services/:slug" component={() => <RedirectTo to="/roof-services" />} />

      {/* ── Legacy — root-level .php pages ── */}
      <Route path="/Roof_Painting_Service_Broward_County_for_Smart_Shield.php" component={() => <RedirectTo to="/products/smartshield" />} />
      <Route path="/roof-shield-system.php" component={() => <RedirectTo to="/products/roofshield" />} />
      <Route path="/factory.php" component={() => <RedirectTo to="/factory" />} />
      <Route path="/products.php" component={() => <RedirectTo to="/products" />} />
      <Route path="/reviews.php" component={() => <RedirectTo to="/reviews" />} />
      <Route path="/references.php" component={() => <RedirectTo to="/reviews" />} />
      <Route path="/miami-dade-references.php" component={() => <RedirectTo to="/reviews" />} />
      <Route path="/faq.php" component={() => <RedirectTo to="/faq" />} />
      <Route path="/questions.php" component={() => <RedirectTo to="/questions" />} />
      <Route path="/aboutus.php" component={() => <RedirectTo to="/about" />} />
      <Route path="/contact.php" component={() => <RedirectTo to="/contact" />} />
      <Route path="/distributorships.php" component={() => <RedirectTo to="/distributorships" />} />
      <Route path="/videos.php" component={() => <RedirectTo to="/videos" />} />
      <Route path="/blog.php" component={() => <RedirectTo to="/blog" />} />

      {/* ── Legacy — blog post URLs ── */}
      <Route path="/blog/:slug" component={() => <RedirectTo to="/blog" />} />

      {/* ── Catch-all ── */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
