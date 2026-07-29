import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Shield, Users, Clock, CheckCircle2, Star, Factory, Hammer, ShoppingCart, UserCheck, Youtube, Network } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const milestones = [
  { year: "1994", event: "Founded in Davie, Florida, bringing the first liquid elastomeric roof coating system to the South Florida market — the same family-run business that operates The Roof Store today." },
  { year: "1998–99", event: "Our booth at the Fort Lauderdale Home Show carries the banner that still defines us today: \"Don't Reroof — Waterproof! ½ the Cost of a Reroof\" — with before-and-after coating boards and our founder on hand to talk roofs." },
  { year: "1999", event: "Our \"Don't Re-Roof, Waterproof at 1/2 the Cost\" television commercial airs across Broward County, putting a live Roof Shield installation — and our founder's own voice — in front of thousands of Florida homeowners." },
  { year: "2002", event: "We launch theroofstore.net, extending our reach from local TV and print into a full digital presence that has run continuously ever since." },
  { year: "2010s", event: "We grow our in-house manufacturing capability, standing up RoofProtect Products to formulate FungalShield (RP1), SmartShield (RP2), and RoofShield (RP3) ourselves — bringing production in-house alongside our sales and installation teams." },
  { year: "Today", event: "30+ years and 10,000+ Florida homes later, we're still the same independently owned, family-run business — now with our own factory, our own crews, and an A+ BBB rating to show for it." },
];

const credentials = [
  { label: "Licensed Since", value: "1994 — Florida Roofing Coating Contractor" },
  { label: "BBB Rating", value: "A+ Accredited" },
  { label: "Certification", value: "Dade County TAS-106 Uplift — 2006" },
  { label: "ARLC Authority", value: "Additional Roof Life Certifications under Florida SB 2-D (2022)" },
  { label: "Manufacturing", value: "In-house, Davie, FL — RoofProtect Products" },
  { label: "Service Area", value: "Broward · Miami-Dade · Palm Beach · Monroe counties" },
];

export default function About() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About The Roof Store",
      url: `${BASE}/about`,
      description: "The Roof Store is the retail storefront and network. RoofProtect Products manufactures the coating materials in-house. Storm Shield Paint Systems Inc. is the licensed contracting division. One connected organization — Davie, Florida, since 1994. A+ BBB. TAS-106 certified.",
      mainEntity: {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        name: "The Roof Store",
        legalName: "Storm Shield Paint Systems Inc.",
        url: BASE,
        telephone: "+19542109614",
        email: "theroofstore@gmail.com",
        foundingDate: "1994",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Davie",
          addressRegion: "FL",
          postalCode: "33328",
          addressCountry: "US",
        },
        description: "The Roof Store is the retail storefront and network. RoofProtect Products manufactures the coating materials in-house. Storm Shield Paint Systems Inc. is the Florida-licensed contracting division that installs them. One connected organization, same ownership, Davie FL, since 1994.",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
        areaServed: ["Broward County, FL", "Miami-Dade County, FL", "Palm Beach County, FL", "Monroe County, FL"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE}/about` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Fungal Shield (RP1)",
      description: "Entry-level elastomeric roof coating system for tile roofs. Kills and prevents algae and fungal growth. 5-year product warranty.",
      image: `${BASE}/images/fungalshield-product.png`,
      url: `${BASE}/products/fungalshield`,
      sku: "RP1",
      brand: { "@type": "Brand", name: "RoofProtect Products" },
      offers: { "@type": "Offer", priceCurrency: "USD", price: "190", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@type": "Organization", name: "The Roof Store" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Smart Shield (RP2)",
      description: "Mid-grade elastomeric roof coating with BASF Cool Pigment Technology. Available in 3,000+ colors. 10-year product warranty.",
      image: `${BASE}/images/smartshield-product.png`,
      url: `${BASE}/products/smartshield`,
      sku: "RP2",
      brand: { "@type": "Brand", name: "RoofProtect Products" },
      offers: { "@type": "Offer", priceCurrency: "USD", price: "285", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@type": "Organization", name: "The Roof Store" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Roof Shield (RP3)",
      description: "Premium monolithic roof restoration system. World's only TAS-106 Dade County Uplift certified liquid coating. Lifetime Warranty.",
      image: `${BASE}/images/roofshield-product.png`,
      url: `${BASE}/products/roofshield`,
      sku: "RP3",
      brand: { "@type": "Brand", name: "RoofProtect Products" },
      offers: { "@type": "Offer", priceCurrency: "USD", price: "325", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@type": "Organization", name: "The Roof Store" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "The Roof Store — Original 1999 TV Commercial (\"Don't Re-Roof, Waterproof at 1/2 the Cost\")",
      description: "Television commercial for The Roof Store's Roof Shield system, showing a live installation on a flat cement tile roof. Aired circa 1999 in the Fort Lauderdale / Broward County market.",
      thumbnailUrl: "https://img.youtube.com/vi/IUcKj0nKNDc/maxresdefault.jpg",
      uploadDate: "1999-06-01T00:00:00+00:00",
      embedUrl: "https://www.youtube.com/embed/IUcKj0nKNDc",
      contentUrl: "https://www.youtube.com/watch?v=IUcKj0nKNDc",
      publisher: { "@type": "Organization", name: "The Roof Store", url: BASE },
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "The Roof Store — Cement Tile Roof Repair, Ft. Lauderdale / Pompano Beach",
      description: "Field footage of The Roof Store repairing a cement tile roof in Fort Lauderdale / Pompano Beach, Florida.",
      thumbnailUrl: "https://img.youtube.com/vi/_D-SYtBH-mQ/hqdefault.jpg",
      uploadDate: "2011-12-06T00:00:00+00:00",
      embedUrl: "https://www.youtube.com/embed/_D-SYtBH-mQ",
      contentUrl: "https://www.youtube.com/watch?v=_D-SYtBH-mQ",
      publisher: { "@type": "Organization", name: "The Roof Store", url: BASE },
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="About The Roof Store — Florida Roof Coating Contractor Since 1994"
        description="Storm Shield Paint Systems Inc. — trading as The Roof Store — manufactures and installs its own roof coating systems from a single facility in Davie, Florida. Licensed since 1994. A+ BBB. TAS-106 certified. 954-210-9614."
        canonical="/about"
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL" }}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-5">About The Roof Store</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The Roof Store is the retail storefront and network. RoofProtect Products manufactures the coating materials in-house. Storm Shield Paint Systems Inc. is the licensed contracting division that installs them. One connected organization — Davie, Florida, since 1994.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Identity + Credentials */}
      <section className="py-20 bg-background border-b">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            <h2 className="text-4xl font-serif font-bold text-primary mb-8">We Manufacture It. We Install It.</h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg mb-10">
              <p>
                Storm Shield Paint Systems Inc. — trading as The Roof Store — has manufactured and installed its own roof coating systems in South Florida since 1994. The coating materials are produced in-house under our{" "}
                <strong className="text-foreground">RoofProtect</strong> factory license. The same organization that develops the product installs it on your roof and backs it with a Lifetime Warranty.
              </p>
              <p>
                Most contractors buy materials from a third-party manufacturer and pass warranty responsibility up the chain. There is no gap in that chain here. The formulation, the installation protocol, the quality inspection, and the warranty all come from the same licensed source — a Florida-licensed manufacturer and contractor operating continuously under the same license since 1994.
              </p>
              <p>
                When a manufacturer's inspection qualifies your roof for{" "}
                <Link href="/products/roofshield" className="text-accent hover:underline font-medium">Roof Shield (RP3)</Link>,
                the organization that engineered the system is the same one that shows up on your roof. No middleman. No warranty gap. Full accountability at every step.
              </p>
              <p>
                The Roof Store's{" "}
                <Link href="/products/roofshield" className="text-accent hover:underline font-medium">Roof Shield (RP3)</Link>{" "}
                system is the only liquid-applied roof coating in the world to hold Dade County{" "}
                <Link href="/tas-106-certified-roof-coating" className="text-accent hover:underline font-medium">TAS-106 Uplift Certification</Link>{" "}
                (2006) — Miami-Dade County tested in compliance with Miami-Dade County Testing Standards. The company holds an A+ rating with the Better Business Bureau.{" "}
                <Link href="/roof-life-certification" className="text-accent hover:underline font-medium font-semibold">See the Additional Roof Life Certification you may qualify for →</Link>
              </p>
            </div>

            {/* Credentials block */}
            <div className="border rounded-xl overflow-hidden">
              <div className="bg-muted px-5 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Credentials
              </div>
              {credentials.map((row, i) => (
                <div key={i} className={`grid grid-cols-2 px-5 py-3 text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/40"}`}>
                  <span className="font-semibold text-foreground">{row.label}</span>
                  <span className="text-muted-foreground">{row.value}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-24 bg-background border-b">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              30+ Years in Florida
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our History</h2>
            <p className="text-muted-foreground text-lg">
              From a local TV commercial in 1999 to a fully in-house manufacturer today — the same family-run business, growing every step of the way.
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/IUcKj0nKNDc"
                    title="Original 1999 TV commercial — Don't Re-Roof, Waterproof at 1/2 the Cost"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Our original 1999 TV commercial — "Don't Re-Roof, Waterproof at 1/2 the Cost."</p>
              </div>
              <div>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/_D-SYtBH-mQ"
                    title="Cement tile roof repair — Fort Lauderdale / Pompano Beach"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground">2011 field footage — cement tile roof repair in Fort Lauderdale / Pompano Beach.</p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <a href="https://www.youtube.com/@makira1111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                <Youtube className="h-4 w-4" /> More videos on our YouTube channel
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl border">
              <img
                src="/images/ft-lauderdale-home-show-1998-1999-booth.png"
                alt="The Roof Store's founder at the company booth, Fort Lauderdale Home Show 1998–1999, with the banner Don't Reroof — Waterproof at half the cost of a reroof"
                className="w-full"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Our founder at the Fort Lauderdale Home Show, 1998–1999 — the same "Don't Reroof — Waterproof! ½ the Cost of a Reroof" message we still stand behind today, with before-and-after coating boards on display.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border p-6 flex flex-col"
              >
                <div className="bg-primary text-white rounded-lg px-3 py-1.5 text-sm font-bold w-fit mb-4">{m.year}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted border-b">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: "Years in Business", value: "30+" },
              { icon: Award, label: "BBB Rating", value: "A+" },
              { icon: Shield, label: "Homes Protected", value: "10,000+" },
              { icon: Users, label: "Satisfied Customers", value: "5,000+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 text-center border"
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-4xl font-serif font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What this means for the customer */}
      <section className="py-24 bg-background border-b">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">What the Manufacturer–Contractor Model Means for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "One Organization — Full Accountability",
                desc: "There is no distributor, no middleman, and no separate warranty administrator. The company that engineered the product is the company that installs it and backs it. When something needs attention, there is one phone number.",
              },
              {
                icon: Star,
                title: "The Original System — Since 1994",
                desc: "The Roof Store invented The Original Liquid Applied Rubber Roof Shield System and has been refining it for three decades. The TAS-106 certification was earned on our own product, tested on our own installation, and has been current since 2006.",
              },
              {
                icon: CheckCircle2,
                title: "Up to 60–70% Less Than Roof Replacement",
                desc: "A full tile roof replacement typically runs $10–$25 per square foot. The Roof Store's systems start at $0.50/sq ft (RP1) and $2.70/sq ft (RP3 full monolithic system) — installed, including labor and materials.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Four ways to work with us */}
      <section className="py-24 bg-background border-y">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <Factory className="h-3.5 w-3.5" />
              Manufacturer · Contractor · Direct Seller · Partner Network
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Four Ways to Work With Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Because we make our own products and run our own installation crews, you're never boxed into a single option.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                Icon: Hammer,
                step: "Option 1",
                title: "Hire Us — Full Installation",
                desc: "Our licensed crew handles everything end-to-end: manufacturer's inspection, surface prep, full product application, and warranty documentation. This is the path we guarantee with our Lifetime Warranty.",
                cta: "Get a Free Quote",
                href: "/contact",
                dark: true,
              },
              {
                Icon: ShoppingCart,
                step: "Option 2",
                title: "Buy Direct — Apply Yourself",
                desc: "Order RP1, RP2, or RP3 directly from roofprotectproducts.com and apply it yourself. Our team is available by phone at 954-210-9614 to guide you through the application at no charge. Product warranty limitations may apply for self-applied installations — contact us for full warranty terms before purchase.",
                cta: "Buy Online",
                href: "/shop",
                dark: false,
              },
              {
                Icon: UserCheck,
                step: "Option 3",
                title: "Buy & Use Your Own Installer",
                desc: "Purchase our products and use any licensed contractor you prefer. We supply the product, the technical data sheets, and phone support to ensure it's applied correctly.",
                cta: "Browse Products",
                href: "/products",
                dark: false,
              },
              {
                Icon: Network,
                step: "Option 4",
                title: "Work With an Authorized Partner",
                desc: "The Roof Store's authorized distributor and partner network extends our reach across South Florida. Partners are not casual resellers — they have completed manufacturer training, met qualifying standards, and made a financial commitment to join the network. That means they carry real accountability for the work and the product. For homeowners, an authorized partner means faster scheduling and local coverage beyond our direct crew's capacity, without losing the product guarantee.",
                cta: "View Partner Network",
                href: "/partner-network",
                dark: false,
              },
            ].map(({ Icon, step, title, desc, cta, href, dark }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl p-8 border-2 flex flex-col ${dark ? "bg-primary text-white border-primary" : "bg-card border-border"}`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-5 ${dark ? "bg-accent text-white" : "bg-muted text-muted-foreground"}`}>{step}</div>
                <Icon className="h-7 w-7 text-accent mb-4" />
                <h3 className={`text-lg font-serif font-bold mb-3 ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${dark ? "text-white/80" : "text-muted-foreground"}`}>{desc}</p>
                <Button asChild size="sm" className={dark ? "bg-accent hover:bg-accent/90 text-white" : "bg-primary hover:bg-primary/90 text-white"}>
                  <Link href={href}>{cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Schedule a Manufacturer's Inspection</h2>
          <p className="text-xl text-white/80 mb-10">A licensed The Roof Store representative assesses your roof, confirms the right system, and provides a firm per-square-foot quote. No obligation.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Call 954-210-9614</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
