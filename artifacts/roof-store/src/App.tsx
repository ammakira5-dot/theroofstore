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
import ServiceAreas from "@/pages/ServiceAreas";
import Reviews from "@/pages/Reviews";
import Faq from "@/pages/Faq";
import Projects from "@/pages/Projects";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/roof-systems" component={RoofSystems} />
      <Route path="/roof-services" component={RoofServices} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/faq" component={Faq} />
      <Route path="/projects" component={Projects} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
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
