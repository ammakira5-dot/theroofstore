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
        The World's Only<br />
        Miami&#8209;Dade TAS&#8209;106 Uplift-Tested<br />
        <span className="text-accent">Roof Coating</span>
      </>
    ),
    sub: "Don't Re-Roof. Weatherproof at 1/2 the Cost. Roof Shield is the world's only roof coating tested to Miami-Dade County's TAS-106 uplift standard — the global benchmark for hurricane roofing — made in our Davie, FL factory and sold direct. Flat, Cement Tile, Shingle, Barrel Tile, S-Tile, Metal & Foam Roofs.",
  },
  {
    headline: (
      <>
        Factory-Direct Pricing.<br />
        <span className="text-accent">No Middlemen.</span>
      </>
    ),
    sub: "We manufacture our elastomeric coatings in Davie, Florida and sell them straight from the factory floor — the savings distributors and retailers would take stay in your pocket, whether we install or you do.",
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

const homeFaqs = [
  {
    q: "How does roof coating compare to full roof replacement in Florida?",
    a: "Roof coating typically costs 60–70% less than a full roof replacement, can be applied directly over your existing roof without tear-off, and extends your roof's life by 10–25 years. For South Florida homeowners, a liquid elastomeric coating system also delivers hurricane wind-uplift performance that new tile roof replacements simply can not match — our Roof Shield system is 5× stronger than a new tile roof in pull-test resistance.",
  },
  {
    q: "Will an elastomeric roof coating hold up to Florida hurricanes?",
    a: "Yes — and it outperforms new tile. Our Roof Shield (RP3) system is the world's only liquid roof coating to hold Dade County TAS-106 Uplift Pull Test certification, with documented 135+ MPH performance on real hurricane events (per independent Dade County TAS-106 uplift certification testing). The multi-layer system fills every gap between tiles, making your roof monolithic — individual tiles cannot be lifted by wind because they are bonded into one continuous structure.",
  },
  {
    q: "How long does an elastomeric roof coating last in Florida's climate?",
    a: "Our premium coating systems are engineered to last 10–25 years in Florida's conditions — intense UV, heavy rainfall, high humidity, and hurricane-force winds. We provide written performance warranties on every installation: from 5-year product warranties on Fungal Shield to a maintenance-free Lifetime Warranty on our flagship Roof Shield system.",
  },
  {
    q: "What types of roofs can be coated?",
    a: "We work with all common South Florida roof types: Spanish clay tile, flat cement tile, concrete barrel tile, low-slope and flat decks, modified bitumen, metal roofing panels, and foam roofs. During your free inspection, our technician will assess your roof and confirm whether coating or restoration is the right solution — we'll tell you honestly if it's not.",
  },
  {
    q: "Can roof coating help me keep my homeowners insurance?",
    a: "Yes — by being proactive. Under Florida law, homeowners have the legal right to request an independent Useful Life Exam on their roof. It is that licensed inspector's report — not any product or contractor — that can support a determination of additional useful roof life for insurance purposes. What we do is help get your roof into its best possible condition before that exam: professionally cleaned, tiles repaired, and protected with a quality coating. When an insurance inspector comes out, a well-maintained roof in demonstrably good condition gives the insurer very little to work with beyond the age of the roof alone.",
  },
  {
    q: "How much does roof coating cost in Florida?",
    a: "Cost depends on the system (Fungal Shield, Smart Shield, or Roof Shield), roof type, square footage, and current condition. As a guide, our systems start from $190 per gallon for Fungal Shield through to $325 per gallon for Roof Shield — with most residential projects costing significantly less than a full roof replacement. We provide a free on-site inspection and written estimate at no charge. Call 954-210-9614 or use our contact form to schedule.",
  },
];

const BUSINESS_CORE = {
  "@type": "RoofingContractor",
  name: "The Roof Store Waterproofing Products",
  alternateName: "The Roof Store",
  legalName: "Storm Shield Paint Systems Inc.",
  url: BASE,
  telephone: "+19542109614",
  email: "theroofstore@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4801 S University Dr",
    addressLocality: "Davie",
    addressRegion: "FL",
    postalCode: "33328",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.0765, longitude: -80.2521 },
  priceRange: "$$",
  image: `${BASE}/assets/images/Waterproofing-Technology.jpg`,
  logo: `${BASE}/assets/images/logo.png`,
  foundingDate: "1994",
  disambiguatingDescription: "The Roof Store (Storm Shield Paint Systems Inc.), Florida's original elastomeric roof coating manufacturer and contractor, founded 1994 in Davie, Florida. Continuously operating under this name at theroofstore.net since 2002.",
  description: "South Florida's original elastomeric roof coating company, serving homeowners and businesses since 1994. FungalShield, SmartShield & RoofShield systems weatherproof tile, flat, and metal roofs at half the cost of replacement.",
  areaServed: ["Broward County, FL", "Miami-Dade County, FL", "Palm Beach County, FL"],
  hasPOS: {
    "@type": "Place",
    name: "The Roof Store — Factory-Direct Coating Store, Davie FL",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4801 S University Dr",
      addressLocality: "Davie",
      addressRegion: "FL",
      postalCode: "33328",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 26.0765, longitude: -80.2521 },
    telephone: "+19542109614",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roof Coating Systems",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fungal Shield (RP1) — Anti-Fungal Roof Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Shield (RP2) — Tintable Waterproof Tile Roof Coating" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Shield (RP3) — Full Monolithic Hurricane Protection System" } },
    ],
  },
  sameAs: [
    "https://www.theroofstore.net",
    "https://maps.app.goo.gl/EtoKtkspkEtLBmGi9",
    "https://share.google/D1EDyrzQhB4vW1fdz",
    "https://www.facebook.com/profile.php?id=100068045314754",
    "https://www.bbb.org/us/fl/hollywood/profile/painting-contractors/storm-shield-paint-systems-inc-0633-90131779",
    "https://www.yelp.com/biz/the-roof-store-davie",
  ],
  owns: {
    "@type": "WebSite",
    name: "Windproof Roof Systems",
    url: "https://www.windproofroofsystems.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
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
    },
    { "@context": "https://schema.org", ...BUSINESS_CORE },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="The Roof Store | Elastomeric Roof Coating Florida"
        description="Florida's original elastomeric roof coating system. Save up to 50% vs. replacement. A+ BBB rated since 1994. Serving Broward, Miami-Dade & Palm Beach. Free consultation."
        canonical="/"
        ogImage="https://www.theroofstore.net/images/hero-bg.png"
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL", position: "26.0765;-80.2521" }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <img 
            src="/images/hero-bg.png" 
            alt="Florida home with liquid rubber roof coating applied by The Roof Store — weatherproof and hurricane-rated"
            title="The Roof Store — Elastomeric Roof Coating Florida | Fungal Shield, Smart Shield, Roof Shield"
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
            <div className="relative min-h-[260px] md:min-h-[320px] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
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
                <Link href="/contact">
                  <Hammer className="h-5 w-5 mr-2" />
                  Get a Free Installation Quote
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg w-full sm:w-auto font-bold">
                <Link href="/shop">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Buy Factory-Direct Coatings
                </Link>
              </Button>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row gap-x-8 gap-y-1 text-sm text-white/60">
              <span>Homeowners &amp; businesses — we install, you save vs. re-roofing</span>
              <span>Contractors &amp; DIY — factory pricing, shipped or picked up in Davie</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
              <span className="font-semibold text-white">Roof coating from $0.50/sq ft</span>
              <span className="text-white/30">·</span>
              <span>vs. $10–$25/sq ft to re-roof</span>
              <span className="text-white/30">·</span>
              <Link href="/pricing" className="text-accent font-semibold hover:underline">See pricing →</Link>
              <span className="text-white/30">·</span>
              <Link href="/roof-coating-florida" className="text-accent font-semibold hover:underline">Full guide →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap items-stretch justify-center divide-x divide-border">
            {[
              { val: "30+", lbl: "Years Licensed in FL" },
              { val: "A+", lbl: "BBB Accredited" },
              { val: "TAS-106", lbl: "Hurricane Certified" },
              { val: "3,000+", lbl: "Color Options" },
              { val: "111+", lbl: "Cities Served" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center px-6 py-4 text-center min-w-[100px]">
                <div className="text-xl font-bold text-primary leading-tight">{stat.val}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5 whitespace-nowrap">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Prop Banner */}
      <section className="bg-primary text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center p-4">
              <Factory className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Direct-Source Contractor</h3>
              <p className="text-white/80 text-sm">We sell RoofProtect's proprietary coatings and install them ourselves. No middlemen — straight from the Davie, FL factory to your roof.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Nearly 30 Years Experience</h3>
              <p className="text-white/80 text-sm">Pioneers in high-strength elastomeric roof coating systems. Licensed &amp; insured, A+ BBB since 1994.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Wind className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">World's Only TAS-106 Rated</h3>
              <p className="text-white/80 text-sm">Roof Shield is the only liquid coating on earth with Dade County TAS-106 Uplift certification — tested on Spanish tile roofs.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <ShieldCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">100% Weatherproof</h3>
              <p className="text-white/80 text-sm">Windproof, Waterproof, and Weatherproof protection. Documented 135+ MPH performance on real hurricane events.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Don't Re-Roof CTA */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 text-white">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
                Why Re-Roof?
              </div>
              <h2 className="text-3xl font-serif font-bold mb-3 leading-tight">
                Weatherproof your existing roof for half the cost of replacement.
              </h2>
              <p className="text-white/75 leading-relaxed">
                See a full side-by-side comparison — cost, lifespan, wind rating, warranty, and insurance — between a full re-roof and our liquid rubber coating system.
              </p>
            </div>
            <Link
              href="/roof-replacement-alternative-florida"
              className="shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm uppercase tracking-wider whitespace-nowrap"
            >
              See the Full Comparison <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Roof Coating Services in Broward, Miami-Dade &amp; Palm Beach County</h2>
            <p className="text-muted-foreground text-lg mb-6">We provide comprehensive restoration and weatherproofing systems that save you money while delivering superior protection across South Florida.</p>
            <ul className="text-sm text-muted-foreground text-left max-w-xl mx-auto space-y-2">
              <li><span className="font-semibold text-foreground">Broward County</span> — Roof coating and tile restoration in Fort Lauderdale, Coral Springs, Pembroke Pines, Hollywood, Weston, Davie, Pompano Beach, Miramar, Plantation, and 30+ cities</li>
              <li><span className="font-semibold text-foreground">Miami-Dade County</span> — Roof coating and waterproofing in Miami, Hialeah, Coral Gables, Doral, Homestead, Kendall, and 30+ cities</li>
              <li><span className="font-semibold text-foreground">Palm Beach County</span> — Roof painting and elastomeric coating in West Palm Beach, Boca Raton, Delray Beach, Boynton Beach, Lake Worth, and 20+ cities</li>
              <li><span className="font-semibold text-foreground">Monroe County</span> — Roof coating and hurricane protection in Key West and the Florida Keys</li>
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Link href="/commercial-roofs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Commercial Roofing →</Link>
            <Link href="/commercial-roof-coating-hoa" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">HOA &amp; Condo Associations →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Roof Tile Restoration", desc: "Complete cleaning, repair, and sealing of aging terracotta and concrete tiles.", icon: <Wrench className="h-6 w-6" /> },
              { title: "Flat Deck Roof Coating", desc: "Seamless elastomeric membranes that eliminate leaks on flat roofs permanently.", icon: <Droplets className="h-6 w-6" /> },
              { title: "Fungal Shield · Smart Shield · Roof Shield", desc: "Our three branded coating systems tackle algae, heat, and waterproofing — choose the right shield for your roof.", icon: <ShieldCheck className="h-6 w-6" /> }
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
                Protect Your Roof — And Your Insurance Policy
              </h2>
              <p className="text-primary-foreground/85 text-lg mb-4 leading-relaxed">
                Florida homeowners have the legal right, per state statute, to request an independent Useful Life Exam on their roof. It is that licensed inspection report — not any contractor or product — that can support a determination of additional useful life and help prevent unnecessary policy cancellation. The most effective thing a homeowner can do is take a proactive position: get the roof professionally cleaned, tiles repaired, and a quality protective coating applied before the inspection.
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

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Frequently Asked Questions About Roof Coating in Florida</h2>
            <p className="text-muted-foreground text-lg">Everything homeowners ask us before their free inspection.</p>
          </div>
          <div className="space-y-0 divide-y divide-border border border-border rounded-2xl overflow-hidden">
            {homeFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="px-8 py-7 bg-card"
              >
                <h3 className="font-serif font-bold text-lg text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="text-accent font-bold hover:underline text-sm">
              See all frequently asked questions →
            </Link>
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
