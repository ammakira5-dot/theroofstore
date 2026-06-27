import { Switch, Route, Router as WouterRouter } from "wouter";
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
import Shop from "@/pages/Shop";
import { ProductDetail } from "@/pages/products/ProductDetail";
import { productMap } from "@/pages/products/data";

import { CountyPage } from "@/pages/service-areas/CountyPage";
import { CityPage } from "@/pages/service-areas/CityPage";
import { getCityImage } from "@/pages/service-areas/data";
import { findCounty, findCity } from "@/pages/service-areas/data";

const queryClient = new QueryClient();

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
    />
  );
}

function Router() {
  return (
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

      {/* ── Legacy — blog post URLs ── */}
      <Route path="/blog/:slug" component={() => <RedirectTo to="/blog" />} />

      {/* ── Catch-all ── */}
      <Route component={NotFound} />
    </Switch>
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
