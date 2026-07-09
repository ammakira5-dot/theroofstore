import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { LocalQuoteForm } from "@/components/LocalQuoteForm";

interface CountyPageProps {
  county: string;
  slug: string;
  description: string;
  image: string;
  cities: { name: string; slug: string }[];
}

const BASE = "https://www.theroofstore.net";

export function CountyPage({ county, slug, description, image, cities }: CountyPageProps) {
  const countyUrl = `${BASE}/service-areas/${slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      name: "The Roof Store Waterproofing Products",
      alternateName: "The Roof Store",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: `${county}, Florida`,
      },
      priceRange: "$$",
      description: `Professional roof coating, tile restoration, and weatherproofing throughout ${county}, FL. A+ BBB Rated since 1994.`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roof Coating Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rubber Roof Coating" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tile Roof Restoration" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Deck Waterproofing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hurricane Protection Coating" } },
        ],
      },
      makesOffer: cities.map((c) => ({
        "@type": "Offer",
        areaServed: {
          "@type": "City",
          name: c.name,
          url: `${BASE}/service-areas/${slug}/${c.slug}`,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE}/service-areas` },
        { "@type": "ListItem", position: 3, name: county, item: countyUrl },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title={`Roof Painting & Coating Contractor in ${county}, FL — The Roof Store`}
        description={`Looking for a rubber roof paint or roof coating contractor in ${county}? The Roof Store provides professional roof coating systems for tile, flat, shingle, and metal roofs that outperform standard paint — waterproof, hurricane-rated, licensed & insured, A+ BBB since 1994. Free inspection: 954-210-9614.`}
        canonical={`/service-areas/${slug}`}
        schema={schema}
        geo={{ region: "US-FL", placename: `${county}, FL` }}
      />

      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <img
          src={image}
          alt={`${county}, Florida — The Roof Store service area`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 container px-4 max-w-4xl mx-auto py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-white">{county}</span>
            </nav>
            <h1 className="text-5xl font-serif font-bold mb-6 text-white">
              {slug === "miami-dade-county"
                ? "Roof Coating Services in Miami-Dade County, FL — Tile & Flat Roofs"
                : `Roof Coating Services in ${county}`}
            </h1>
            <p className="text-xl text-white/80">{description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  The Roof Store in {county}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The Roof Store has been protecting homes and commercial properties throughout {county} for nearly 30 years. Our team of certified technicians provides expert rubber roof coating, tile restoration, and weatherproofing services to homeowners across the county.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  We offer a proven alternative to costly roof replacement — our liquid-applied rubber roof shield system can restore and weatherproof your existing roof at up to half the cost of replacement. All work is performed by our licensed and insured team, backed by our A+ BBB rating and comprehensive performance warranties.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you have a tile roof, flat deck, or metal roof, our certified technicians will provide a thorough inspection and recommend the right roof coating system for your specific needs.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Services Available in {county}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Roof Pressure Cleaning & Soft Washing",
                    "Rubber Roof Coating",
                    "Tile Roof Restoration",
                    "Tile Reglazing",
                    "Flat Deck Waterproofing",
                    "Metal Roof Coating",
                    "Elastomeric Coating",
                    "Hurricane Protection",
                    "Silicone Roof System",
                    "Roof Repair & Maintenance",
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    Looking for a Roof Painting Contractor in {county}?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most homeowners in {county} start their search looking for a "roof painting contractor" — it's the natural first step when a roof starts fading or showing its age. But there's an important distinction that can save you thousands of dollars.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Standard roof paint</strong> coats the surface but doesn't seal it. In South Florida's climate — intense UV, heavy rainfall, high humidity, and hurricane-force winds — a painted roof needs reapplication every 2–3 years and provides little real waterproofing. It's a cosmetic fix for a structural problem.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Our roof coating systems</strong> cure into a seamless rubber membrane that bonds to your roof and seals every seam, crack, and penetration — hurricane wind-uplift rated and warranted for 10–15 years at a cost comparable to repeated paint jobs.
                  </p>
                  <Link href="/roof-painting-vs-coating" className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm">
                    Learn more: Roof Paint vs. Roof Coating Systems →
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Cities We Serve in {county}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cities.map((city, i) => (
                    <Link
                      key={i}
                      href={`/service-areas/${slug}/${city.slug}`}
                      className="flex items-center gap-2 py-2 text-foreground hover:text-accent transition-colors group"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform" />
                      {city.name}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-1">Free Roof Inspection</h3>
                <p className="text-white/60 text-xs mb-5">Serving {county}, FL — no cost, no obligation</p>
                <LocalQuoteForm location={`${county}, FL`} source="county-page-form" />
              </div>

              <div className="bg-muted rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-sm text-foreground">Call Us</div>
                    <a href="tel:954-210-9614" className="text-accent font-bold hover:underline">954-210-9614</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-sm text-foreground">Service Area</div>
                    <div className="text-muted-foreground text-sm">{county}, FL</div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-1">A+</div>
                <div className="text-sm font-bold text-foreground">BBB Rated</div>
                <div className="text-xs text-muted-foreground">Since 1994</div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
                <div className="text-sm font-bold text-foreground">Licensed &amp; Insured</div>
                <div className="text-xs text-muted-foreground">Florida Roofing Contractor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
