import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Droplets, Wind, Wrench, Award, ArrowRight, Factory, Hammer, ShoppingCart, UserCheck } from "lucide-react";
import { SEO } from "@/components/SEO";

const heroSlides = [
  {
    headline: (
      <>
        Don't Re-Roof.<br />
        <span className="text-accent">Weatherproof</span> at 1/2 the Cost.
      </>
    ),
    sub: "The Original Liquid Applied Rubber Roof Shield System. Works on Flat, Cement Tile, Shingle, Barrel Tile, S-Tile, Metal & Foam Roofs. Designed for Florida's Hurricane Force Winds and Water Damage.",
  },
  {
    headline: (
      <>
        Preserve Your<br />
        <span className="text-accent">Property's Value.</span>
      </>
    ),
    sub: "Our coatings protect your roofing materials and preserve the liquidity of your property investment — paying for themselves the moment they're installed.",
  },
];

const BASE = "https://www.theroofstore.net";

const BUSINESS_CORE = {
  "@type": "RoofingContractor",
  name: "The Roof Store Waterproofing Products",
  alternateName: "The Roof Store",
  url: BASE,
  telephone: "+19542109614",
  email: "theroofstore@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4411 SW 47th Ave",
    addressLocality: "Davie",
    addressRegion: "FL",
    postalCode: "33314",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.0765, longitude: -80.2521 },
  priceRange: "$$",
  image: `${BASE}/assets/images/Waterproofing-Technology.jpg`,
  logo: `${BASE}/assets/images/logo.png`,
  foundingDate: "1994",
  description: "Florida's original liquid-applied rubber roof shield system. Save up to 50% vs. full replacement. A+ BBB rated since 1994.",
  areaServed: ["Broward County, FL", "Miami-Dade County, FL", "Palm Beach County, FL"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roof Coating Systems",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "FungalShield (RP1) — Anti-Fungal Roof Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SmartShield (RP2) — Tintable Waterproof Tile Roof Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RoofShield (RP3) — Full Monolithic Hurricane Protection System" } },
    ],
  },
  sameAs: [
    "https://www.theroofstore.net",
    "https://maps.app.goo.gl/EtoKtkspkEtLBmGi9",
  ],
};

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[slideIndex];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "The Roof Store",
      url: BASE,
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/search?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    { "@context": "https://schema.org", ...BUSINESS_CORE },
  ];

  return (
    <div className="w-full">
      <SEO
        title="The Roof Store | Rubber Roof Coating Florida — FungalShield, SmartShield & RoofShield"
        description="Florida's original liquid-applied rubber roof shield system. Save up to 50% vs. replacement. A+ BBB rated since 1994. Serving Broward, Miami-Dade & Palm Beach. Free consultation."
        canonical="/"
        ogImage="https://www.theroofstore.net/images/hero-bg.png"
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL", position: "26.0765;-80.2521" }}
      />
      {/* Hero Section */}
      <section className="relative h-[85dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <img 
            src="/images/hero-bg.png" 
            alt="Florida home with liquid rubber roof coating applied by The Roof Store — weatherproof and hurricane-rated"
            title="The Roof Store — Liquid Rubber Roof Coating Florida | FungalShield, SmartShield, RoofShield"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-4 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              A+ BBB Rated Since 1994
            </div>
            <div className="relative min-h-[220px] md:min-h-[260px] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                    {slide.headline}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 font-medium">
                    {slide.sub}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-2 mb-6">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === slideIndex ? "w-8 bg-accent" : "w-4 bg-white/40"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg w-full sm:w-auto">
                <Link href="/contact">Schedule Your Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-14 px-8 text-lg w-full sm:w-auto backdrop-blur-sm">
                <Link href="/roof-systems">Explore Our Systems</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Prop Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center p-4">
              <Factory className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Manufacturer &amp; Contractor</h3>
              <p className="text-white/80 text-sm">We make our own coatings and install them ourselves. No middlemen — straight from our Davie, FL factory to your roof.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Nearly 30 Years Experience</h3>
              <p className="text-white/80 text-sm">Pioneers in high-strength weatherproof rubber roof coating systems. A+ BBB since 1994.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Wind className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">World's Only TAS-106 Rated</h3>
              <p className="text-white/80 text-sm">RoofShield is the only liquid coating on earth with Dade County TAS-106 Uplift certification — tested on Spanish tile roofs.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <ShieldCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">100% Weatherproof</h3>
              <p className="text-white/80 text-sm">Windproof, Waterproof, and Weatherproof protection. Documented 135+ MPH performance on real hurricane events.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Premium Services</h2>
            <p className="text-muted-foreground text-lg">We provide comprehensive restoration and weatherproofing systems that save you money while delivering superior protection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Roof Tile Restoration", desc: "Complete cleaning, repair, and sealing of aging terracotta and concrete tiles.", icon: <Wrench className="h-6 w-6" /> },
              { title: "Flat Deck Rubber Paint", desc: "Seamless liquid rubber membranes that eliminate leaks on flat roofs permanently.", icon: <Droplets className="h-6 w-6" /> },
              { title: "FungalShield · SmartShield · RoofShield", desc: "Our three branded coating systems tackle algae, heat, and waterproofing — choose the right shield for your roof.", icon: <ShieldCheck className="h-6 w-6" /> }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <Link href="/roof-systems" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Ways to Work With Us */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-4">Flexible — Work With Us Your Way</div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Manufacturer. Contractor. Direct Seller.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We're Florida's only roofing manufacturer-contractor combination. You can engage us in whichever way works best for you — installation, supply, or both.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                step: "Option 1",
                title: "Hire Us — Full Installation",
                desc: "The most popular choice. Our licensed crew handles everything — inspection, surface prep, application, and warranty documentation. We guarantee the result.",
                cta: "Get a Free Quote",
                href: "/contact",
                highlight: true,
              },
              {
                icon: ShoppingCart,
                step: "Option 2",
                title: "Buy Direct — DIY Application",
                desc: "Purchase RP1, RP2, or RP3 directly from our online store and apply it yourself. Our technical team is available by phone to walk you through the process.",
                cta: "Shop Products",
                href: "/shop",
                highlight: false,
              },
              {
                icon: UserCheck,
                step: "Option 3",
                title: "Buy &amp; Use Your Own Installer",
                desc: "Source our products and bring in any licensed roofing contractor of your choice to apply them. We supply the product and the technical specifications.",
                cta: "Browse Products",
                href: "/products",
                highlight: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 border-2 flex flex-col ${item.highlight ? "bg-primary text-white border-primary" : "bg-card border-border"}`}
              >
                <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 w-fit ${item.highlight ? "bg-accent text-white" : "bg-muted text-muted-foreground"}`}>
                  {item.step}
                </div>
                <item.icon className={`h-8 w-8 mb-4 ${item.highlight ? "text-accent" : "text-accent"}`} />
                <h3 className={`text-xl font-serif font-bold mb-3 ${item.highlight ? "text-white" : "text-foreground"}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${item.highlight ? "text-white/80" : "text-muted-foreground"}`}>{item.desc}</p>
                <Button asChild size="sm" className={item.highlight ? "bg-accent hover:bg-accent/90 text-white" : "bg-primary hover:bg-primary/90 text-white"}>
                  <Link href={item.href}>{item.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional Roof Life Certification ── */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-block bg-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Florida Insurance Benefit</div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
                Additional Roof Life Certification
              </h2>
              <p className="text-primary-foreground/85 text-lg mb-4 leading-relaxed">
                Florida homeowners with roofs 15–25 years old may qualify for an <strong className="text-white">Additional Roof Life Certification</strong> — a licensed inspection that can extend your roof's insurability by 5 years and help prevent policy cancellation. The Roof Store's weatherproof coating systems are specifically engineered to meet the structural standards required for this certification.
              </p>
              <p className="text-primary-foreground/70 mb-8">
                Serving Miami-Dade, Broward, and Palm Beach counties. Cement tile, flat, and shingle roofs eligible.
              </p>
              <Link
                href="/roof-life-certification"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-sm uppercase tracking-wider"
              >
                Learn About the Certification <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 text-center">
              {[
                { value: "5 Yrs", label: "Extended Insurability" },
                { value: "15–25", label: "Roof Age Eligible" },
                { value: "3", label: "Counties Served" },
                { value: "30+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl p-5 min-w-[120px]">
                  <div className="text-3xl font-serif font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/70 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ready to Protect Your Home?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Stop worrying about leaks and hurricane damage. Get a professional consultation and discover how much you can save by weatherproofing instead of replacing.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Call 954-210-9614 or Request Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
