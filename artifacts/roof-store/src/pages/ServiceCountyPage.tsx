import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, ArrowRight, ShieldCheck, Waves, Paintbrush, Droplets, Sun, Wind, Wrench } from "lucide-react";
import { SEO } from "@/components/SEO";
import { LocalQuoteForm } from "@/components/LocalQuoteForm";

interface ServiceCountyPageProps {
  county: string;
  slug: string;
  cities: { name: string; slug: string }[];
}

const BASE = "https://www.theroofstore.net";

const serviceBlocks = [
  {
    icon: Waves,
    title: "Roof Pressure Cleaning",
    body: (county: string) =>
      `Before any roof coating, painting, or waterproofing job in ${county}, our technicians pressure clean tile, cement, and flat roofs to remove algae, mold, and black streaking — ensuring maximum adhesion for the coating systems that follow.`,
  },
  {
    icon: Paintbrush,
    title: "Elastomeric & Acrylic Roof Coating",
    body: (county: string) =>
      `Our elastomeric and acrylic roof coating systems restore faded, chalky tile roofs throughout ${county} in 3,000+ tintable colors — a flexible, weatherproof membrane that outperforms standard roof paint in Florida's climate.`,
  },
  {
    icon: Sun,
    title: "Reflective & Cool Roof Coating",
    body: (county: string) =>
      `SmartShield, our reflective cool roof coating, uses BASF Cool Pigment Technology to increase solar reflectance by 32% — even in the darkest colors. Homeowners in ${county} choose it to lower cooling costs without sacrificing curb appeal.`,
  },
  {
    icon: Droplets,
    title: "Tile & Flat Roof Waterproofing",
    body: (county: string) =>
      `Cracked or porous tile and aging flat decks let water infiltrate the roof structure. Our waterproofing systems seal every gap and seam on ${county} roofs, backed by RoofShield — the world's only TAS-106 Dade County Uplift rated monolithic coating.`,
  },
  {
    icon: Wind,
    title: "Hurricane Protection Coating",
    body: (county: string) =>
      `${county} sits squarely in Florida's hurricane corridor. Our hurricane protection coatings reinforce ridge caps, eaves, and tile edges against wind-lift — helping roofs withstand tropical storm and hurricane-force winds.`,
  },
  {
    icon: Wrench,
    title: "Roof Repair & Maintenance",
    body: (county: string) =>
      `From cracked tiles to failed sealants, our repair and maintenance services address small problems in ${county} before they become costly emergencies — with free assessments and emergency repair availability.`,
  },
];

export function ServiceCountyPage({ county, slug, cities }: ServiceCountyPageProps) {
  const pageUrl = `${BASE}/roof-services/${slug}`;

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
      description: `Elastomeric, acrylic, and reflective cool roof coating services throughout ${county}, FL. A+ BBB Rated since 1994.`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Roof Coating Services in ${county}`,
        itemListElement: serviceBlocks.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Roof Services", item: `${BASE}/roof-services` },
        { "@type": "ListItem", position: 3, name: county, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title={`Elastomeric & Reflective Roof Coating in ${county}, FL — The Roof Store`}
        description={`Elastomeric, acrylic, and reflective cool roof coating services in ${county}, FL. Tile restoration, waterproofing, and hurricane protection — A+ BBB rated since 1994. Free quote: 954-210-9614.`}
        canonical={`/roof-services/${slug}`}
        schema={schema}
        geo={{ region: "US-FL", placename: `${county}, FL` }}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/roof-services" className="hover:text-white transition-colors">Roof Services</Link>
              <span>/</span>
              <span className="text-white">{county}</span>
            </nav>
            <h1 className="text-5xl font-serif font-bold mb-6">
              Roof Coating Services in {county}, FL
            </h1>
            <p className="text-xl text-white/80">
              Elastomeric, acrylic, and reflective cool roof coating systems — tile restoration, waterproofing, and hurricane protection for {county} homes and businesses since 1994.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The Roof Store has provided roof coating, elastomeric painting, and reflective cool roof coating services throughout {county} for nearly 30 years. Our liquid-applied rubber roof shield systems restore and weatherproof existing roofs at up to half the cost of full replacement — backed by an A+ BBB rating and comprehensive performance warranties.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceBlocks.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-xl p-6 shadow-sm border"
                  >
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.body(county)}</p>
                  </motion.div>
                ))}
              </div>

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

              <Link href="/roof-services" className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm">
                ← Back to All Roof Services
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-1">Free Roof Inspection</h3>
                <p className="text-white/60 text-xs mb-5">Serving {county}, FL — no cost, no obligation</p>
                <LocalQuoteForm location={`${county}, FL`} source="service-county-page-form" />
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
                <div className="text-3xl font-serif font-bold text-accent mb-1 flex items-center justify-center gap-2">
                  <ShieldCheck className="h-6 w-6" /> A+
                </div>
                <div className="text-sm font-bold text-foreground">BBB Rated</div>
                <div className="text-xs text-muted-foreground">Since 1994</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
