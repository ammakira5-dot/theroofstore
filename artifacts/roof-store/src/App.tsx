import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
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
import { findCounty, findCity } from "@/pages/service-areas/data";

const queryClient = new QueryClient();

function CountyRoute({ params }: { params: { county: string } }) {
  const county = findCounty(params.county);
  if (!county) return <NotFound />;
  return <CountyPage county={county.name} slug={county.slug} description={county.description} cities={county.cities} />;
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
    />
  );
}

function Router() {
  return (
    <Switch>
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
      <Route path="/contact" component={Contact} />
      <Route path="/factory" component={Factory} />
      <Route path="/videos" component={Videos} />
      <Route path="/distributorships" component={Distributorships} />
      <Route path="/commercial-roofs" component={CommercialRoofs} />
      <Route path="/blog" component={Blog} />
      <Route path="/questions" component={Questions} />
      <Route path="/shop" component={Shop} />
      <Route path="/products/:slug" component={({ params }) => {
        const product = productMap[params.slug];
        if (!product) return <NotFound />;
        return <ProductDetail product={product} />;
      }} />
      <Route path="/admin" component={Admin} />
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
