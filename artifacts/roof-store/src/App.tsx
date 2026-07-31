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
import { BlogPostPage } from "@/pages/BlogPost";
import Questions from "@/pages/Questions";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import RoofLifeCertification from "@/pages/RoofLifeCertification";
import ManufacturersReport from "@/pages/ManufacturersReport";
import Pricing from "@/pages/Pricing";
import RoofPaintingVsCoating from "@/pages/RoofPaintingVsCoating";
import RoofPressureCleaning from "@/pages/RoofPressureCleaning";
import SiliconeVsElastomeric from "@/pages/SiliconeVsElastomeric";
import SiliconeRoofCoating from "@/pages/SiliconeRoofCoating";
import PartnerNetwork from "@/pages/PartnerNetwork";
import RoofReplacementAlternative from "@/pages/RoofReplacementAlternative";
import TileRoofPainting from "@/pages/TileRoofPainting";
import TileServicePage from "@/pages/tile-services/TileServicePage";
import { getTileServicePage } from "@/pages/tile-services/data";
import RoofCoatingLifespan from "@/pages/RoofCoatingLifespan";
import DiyVsPro from "@/pages/DiyVsPro";
import HurricaneRoofPrep from "@/pages/HurricaneRoofPrep";
import HoaRoofCoating from "@/pages/HoaRoofCoating";
import RoofCoatingFlorida from "@/pages/RoofCoatingFlorida";
import Tas106Certification from "@/pages/Tas106Certification";
import OriginalRoofStore from "@/pages/OriginalRoofStore";
import TrademarkEvidenceFile from "@/pages/TrademarkEvidenceFile";
import TrademarkMonitoringLog from "@/pages/TrademarkMonitoringLog";
import RedemptionEvidenceGoogle1 from "@/pages/RedemptionEvidenceGoogle1";
import TrademarkEvidencePrint from "@/pages/TrademarkEvidencePrint";
import GoogleComplaintSteps from "@/pages/GoogleComplaintSteps";
import UdrpDraftGate from "@/pages/UdrpDraftGate";
import Shop from "@/pages/Shop";
import { ProductDetail } from "@/pages/products/ProductDetail";
import { productMap } from "@/pages/products/data";

import { CountyPage } from "@/pages/service-areas/CountyPage";
import { ServiceCountyPage } from "@/pages/ServiceCountyPage";
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

function ServiceCountyRoute({ params }: { params: { county: string } }) {
  const county = findCounty(params.county);
  if (!county) return <NotFound />;
  return <ServiceCountyPage county={county.name} slug={county.slug} cities={county.cities} />;
}

function CountyRoute({ params }: { params: { county: string } }) {
  const county = findCounty(params.county);
  if (!county) return <NotFound />;
  return <CountyPage county={county.name} slug={county.slug} description={county.description} image={county.image} cities={county.cities} extraSections={county.extraSections} />;
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
      jobPhotos={result.city.jobPhotos}
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
      <Route path="/roof-services/:county" component={ServiceCountyRoute} />
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
      <Route path="/roof-pressure-cleaning" component={RoofPressureCleaning} />
      <Route path="/silicone-vs-elastomeric-roof-coating" component={SiliconeVsElastomeric} />
      <Route path="/silicone-roof-coating" component={SiliconeRoofCoating} />
      <Route path="/partner-network" component={PartnerNetwork} />
      <Route path="/roof-replacement-alternative-florida" component={RoofReplacementAlternative} />
      <Route path="/tile-roof-painting" component={TileRoofPainting} />
      {["spanish-tile-roof-coating", "spanish-tile-roof-painting", "spanish-tile-roof-waterproofing", "spanish-tile-roof-maintenance", "cement-tile-roof-restoration", "shingle-roof-coating", "metal-roof-coating"].map((slug) => (
        <Route key={slug} path={`/${slug}`} component={() => {
          const page = getTileServicePage(slug);
          return page ? <TileServicePage page={page} /> : <NotFound />;
        }} />
      ))}
      <Route path="/roof-coating-lifespan-florida" component={RoofCoatingLifespan} />
      <Route path="/diy-vs-pro-roof-coating" component={DiyVsPro} />
      <Route path="/hurricane-roof-prep" component={HurricaneRoofPrep} />
      <Route path="/commercial-roof-coating-hoa" component={HoaRoofCoating} />
      <Route path="/the-original-roof-store-florida" component={OriginalRoofStore} />
      <Route path="/trademark-evidence-file" component={TrademarkEvidenceFile} />
      <Route path="/trademark-monitoring-log" component={TrademarkMonitoringLog} />
      <Route path="/redemption-evidence-google-1" component={RedemptionEvidenceGoogle1} />
      <Route path="/trademark-evidence-print" component={TrademarkEvidencePrint} />
      <Route path="/google-complaint-steps" component={GoogleComplaintSteps} />
      <Route path="/ref/8f3k-2m9x-771q" component={UdrpDraftGate} />
      <Route path="/admin" component={Admin} />

      {/* ── Legacy WordPress redirects — service pages ── */}
      <Route path="/roof-painting-service-broward-county-florida" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-painting-service-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-painting" component={() => <RedirectTo to="/tile-roof-painting" />} />
      <Route path="/roof-painting-florida" component={() => <RedirectTo to="/tile-roof-painting" />} />
      <Route path="/roof-coating" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-coating-broward-county" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/roof-coating-florida" component={RoofCoatingFlorida} />
      <Route path="/tas-106-certified-roof-coating" component={Tas106Certification} />
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
      <Route path="/tile-roof-coating" component={() => <RedirectTo to="/spanish-tile-roof-coating" />} />
      <Route path="/tile-roof-restoration" component={() => <RedirectTo to="/cement-tile-roof-restoration" />} />
      <Route path="/cement-tile-roof-coating" component={() => <RedirectTo to="/cement-tile-roof-restoration" />} />
      <Route path="/barrel-tile-roof-coating" component={() => <RedirectTo to="/spanish-tile-roof-coating" />} />
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

      {/* ── RoofProtect embed URLs — each bucket's #1 roller links to its correct product page ── */}
      <Route path="/pdf/fungalshield-info.pdf" component={() => <RedirectTo to="/products/fungalshield" />} />
      <Route path="/pdf/roofshield-info.pdf" component={() => <RedirectTo to="/products/roofshield" />} />
      <Route path="/pdf/smartshield-info.pdf" component={() => <RedirectTo to="/products/smartshield" />} />
      <Route path="/pdf/pdf-images/Brochure/Brochure_2006_Revised_2018.pdf" component={() => <RedirectTo to="/products/roofshield" />} />

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
      <Route path="/fl/Miramar-cement-tile-roof-painting.php" component={() => <RedirectTo to="/cement-tile-roof-restoration" />} />
      <Route path="/fl/Lighthouse-Point-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/broward-county/lighthouse-point" />} />
      <Route path="/fl/Sunrise-Tamarac-spanish-tile-roof-painting.php" component={() => <RedirectTo to="/spanish-tile-roof-painting" />} />
      <Route path="/fl/Jupiter-roof-painting.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/jupiter" />} />
      <Route path="/fl/Palm-Beach-roof-painting.php" component={() => <RedirectTo to="/service-areas/palm-beach-county" />} />
      <Route path="/fl/Boca-Raton-roof-restoration.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/boca-raton" />} />
      <Route path="/fl/Atlantis-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/palm-beach-county" />} />
      <Route path="/fl/Juno-Beach-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/palm-beach-county" />} />
      <Route path="/fl/Surfside-roof-waterproofing.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/Miami-Gardens-roof-coating.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/Miami-Beach-roof-sealing.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/Homestead-roof-restoration.php" component={() => <RedirectTo to="/service-areas/miami-dade-county" />} />
      <Route path="/fl/index.php" component={() => <RedirectTo to="/service-areas" />} />
      <Route path="/fl/Boynton-Beach-roof-contractor.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/boynton-beach" />} />
      <Route path="/fl/Lake-Worth-roof-coating.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/lake-worth-beach" />} />
      <Route path="/fl/Lantana-roof-coating.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/lantana" />} />
      <Route path="/fl/Deerfield-Beach-roof-sealing.php" component={() => <RedirectTo to="/service-areas/broward-county/deerfield-beach" />} />
      <Route path="/fl/Oakland-Park-roof-sealing.php" component={() => <RedirectTo to="/service-areas/broward-county/oakland-park" />} />
      <Route path="/fl/Southwest-Ranches-roof-coating.php" component={() => <RedirectTo to="/service-areas/broward-county/southwest-ranches" />} />
      <Route path="/fl/North-Palm-Beach-roof-contractor.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/north-palm-beach" />} />
      <Route path="/fl/Sweetwater-roof-coating.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/sweetwater" />} />
      <Route path="/fl/Sunny-Isles-Beach-roof-coating.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/sunny-isles-beach" />} />
      <Route path="/fl/Cooper-City-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/cooper-city" />} />
      <Route path="/fl/Fort-Lauderdale-shingle-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/fort-lauderdale" />} />
      <Route path="/fl/Pembroke-Pines-roof-painting.php" component={() => <RedirectTo to="/service-areas/broward-county/pembroke-pines" />} />
      <Route path="/fl/Virginia-Gardens-roof-painting.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/virginia-gardens" />} />
      <Route path="/fl/Key-Biscayne-roof-painting.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/key-biscayne" />} />
      <Route path="/fl/Parkland-shingle-roof-coating.php" component={() => <RedirectTo to="/service-areas/broward-county/parkland" />} />
      <Route path="/fl/Miami-roof-restoration.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/miami" />} />
      <Route path="/fl/North-Miami-roof-contractor.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/north-miami" />} />
      <Route path="/fl/Briny-Breezes-roof-repair.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/briny-breezes" />} />
      <Route path="/fl/Bal-Harbour-roof-painting.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/bal-harbour" />} />
      <Route path="/fl/Ocean-Ridge-roof-sealing.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/ocean-ridge" />} />
      <Route path="/fl/West-Palm-Beach-roof-sealing.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/west-palm-beach" />} />
      <Route path="/fl/Weston-shingle-roof-restoration.php" component={() => <RedirectTo to="/service-areas/broward-county/weston" />} />
      <Route path="/fl/Pahokee-roof-coating.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/pahokee" />} />
      <Route path="/fl/North-Bay-Village-roof-painting.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/north-bay-village" />} />
      <Route path="/fl/Opa-Locka-roof-coating.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/opa-locka" />} />
      <Route path="/fl/Indian-Creek-Village-roof-sealing.php" component={() => <RedirectTo to="/service-areas/miami-dade-county/indian-creek-village" />} />
      <Route path="/fl/Golfview-roof-painting.php" component={() => <RedirectTo to="/service-areas/palm-beach-county/golfview" />} />
      <Route path="/fl/Lauderhill-roof-sealing.php" component={() => <RedirectTo to="/service-areas/broward-county/lauderhill" />} />
      <Route path="/fl/:slug" component={() => <RedirectTo to="/service-areas" />} />

      {/* ── Legacy — /services/ PHP pages ── */}
      <Route path="/services/commercial-metal-roof-coating.php" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/services/commercial-metal-roof-restoration.php" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/services/commercial-metal-roof-painting.php" component={() => <RedirectTo to="/commercial-roofs" />} />
      <Route path="/services/additional-roof-life-certification.php" component={() => <RedirectTo to="/roof-life-certification" />} />
      <Route path="/services/spanish-tile-roof-coating.php" component={() => <RedirectTo to="/spanish-tile-roof-coating" />} />
      <Route path="/services/residential-spanish-tile-roof-waterproofing.php" component={() => <RedirectTo to="/spanish-tile-roof-waterproofing" />} />
      <Route path="/services/cement-tile-roof-restoration.php" component={() => <RedirectTo to="/cement-tile-roof-restoration" />} />
      <Route path="/services/:slug" component={() => <RedirectTo to="/roof-services" />} />

      {/* ── Legacy — root-level .php pages ── */}
      <Route path="/about-us.php" component={() => <RedirectTo to="/about" />} />
      <Route path="/contact-us.php" component={() => <RedirectTo to="/contact" />} />
      <Route path="/services.php" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/residential.php" component={() => <RedirectTo to="/roof-services" />} />
      <Route path="/projects/reviews.php" component={() => <RedirectTo to="/reviews" />} />
      <Route path="/affiliations.php" component={() => <RedirectTo to="/partner-network" />} />
      <Route path="/testimonials.php" component={() => <RedirectTo to="/reviews" />} />
      <Route path="/energy-incentives.php" component={() => <RedirectTo to="/roof-systems" />} />
      <Route path="/Roof_Painting_Service_Broward_County_for_Smart_Shield.php" component={() => <RedirectTo to="/products/smartshield" />} />
      <Route path="/Roof_Painting_Service_Broward_County_for_Smart_Shield.pdf" component={() => <RedirectTo to="/products/smartshield" />} />
      <Route path="/roof_waterproofing_Lauderdale_broward.pdf" component={() => <RedirectTo to="/products/roofshield" />} />
      <Route path="/assets/files/basic-colors-smart-shield.pdf" component={() => <RedirectTo to="/products/smartshield" />} />
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

      {/* ── Blog post pages ── */}
      <Route path="/blog/:slug" component={({ params }) => <BlogPostPage params={params as { slug: string }} />} />

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
