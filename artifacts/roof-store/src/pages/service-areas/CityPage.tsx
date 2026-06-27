import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { LocalQuoteForm } from "@/components/LocalQuoteForm";

interface CityPageProps {
  city: string;
  county: string;
  countySlug: string;
  citySlug: string;
  image: string;
  blurb?: string;
}

const BASE = "https://www.theroofstore.net";

export function CityPage({ city, county, countySlug, citySlug, image, blurb }: CityPageProps) {
  const cityUrl = `${BASE}/service-areas/${countySlug}/${citySlug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      name: "The Roof Store Waterproofing Products",
      alternateName: "The Roof Store",
      url: BASE,
      telephone: "+19542109614",
      email: "theroofstore@gmail.com",
      image,
      address: {
        "@type": "PostalAddress",
        streetAddress: "4411 SW 47th Ave",
        addressLocality: "Davie",
        addressRegion: "FL",
        postalCode: "33314",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "City",
        name: city,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `${county}, Florida`,
        },
      },
      priceRange: "$$",
      description: `Professional roof coating, tile restoration, and weatherproofing in ${city}, FL. A+ BBB Rated since 1994.`,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE}/service-areas` },
        { "@type": "ListItem", position: 3, name: county, item: `${BASE}/service-areas/${countySlug}` },
        { "@type": "ListItem", position: 4, name: city, item: cityUrl },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title={`Rubber Roof Coating in ${city}, FL — The Roof Store`}
        description={`The Roof Store provides rubber roof coating, tile restoration, and weatherproofing in ${city}, ${county}, FL. A+ BBB rated since 1994. Free consultation — call 954-210-9614.`}
        canonical={`/service-areas/${countySlug}/${citySlug}`}
        ogImage={image}
        schema={schema}
        geo={{ region: "US-FL", placename: `${city}, FL` }}
      />

      {/* Hero with city photo */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        {/* City photo */}
        <img
          src={image}
          alt={`${city}, Florida — The Roof Store service area`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-primary/75" />

        <div className="relative z-10 container px-4 max-w-4xl mx-auto py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6 flex-wrap">
              <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>/</span>
              <Link href={`/service-areas/${countySlug}`} className="hover:text-white transition-colors">{county}</Link>
              <span>/</span>
              <span className="text-white">{city}</span>
            </nav>
            <h1 className="text-5xl font-serif font-bold mb-6 text-white">Rubber Roof Coating in {city}, FL</h1>
            <p className="text-xl text-white/85">
              Professional roof restoration and weatherproofing for {city} homeowners and businesses. A+ BBB Rated since 1994.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Roof Coating Services in {city}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The Roof Store has been serving {city}, {county} homeowners and commercial property owners for nearly 30 years. Our certified technicians provide professional rubber roof coating, tile restoration, and weatherproofing services throughout the {city} area.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Living in {city}, FL means dealing with intense UV exposure, heavy rainfall, high humidity, and the constant threat of hurricanes. Our roof coating systems are specifically engineered for South Florida's demanding climate — protecting your home without the cost of a full roof replacement.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Most homeowners in {city} save 40–60% compared to full roof replacement costs while getting better long-term protection. Our liquid-applied rubber roof shield system creates a seamless, weatherproof membrane over your existing roof — with no landfill waste and minimal disruption to your property.
                </p>
              </motion.div>

              {blurb && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg px-6 py-5">
                    <h3 className="text-sm font-bold text-accent uppercase tracking-wide mb-2">About {city}</h3>
                    <p className="text-muted-foreground leading-relaxed">{blurb}</p>
                  </div>
                </motion.div>
              )}

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                  Our Services in {city}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Rubber Roof Coating",
                    "Tile Roof Restoration",
                    "Tile Reglazing & Reseal",
                    "Flat Deck Waterproofing",
                    "Elastomeric Coating",
                    "Hurricane Protection Coating",
                    "Silicone Roof System",
                    "Emergency Roof Repair",
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Why {city} Homeowners Choose Us</h3>
                <div className="space-y-4">
                  {[
                    { title: "Nearly 30 Years in South Florida", desc: "Established in 1994, we understand Florida's climate and building codes better than anyone." },
                    { title: "A+ BBB Accredited", desc: "Our Better Business Bureau A+ rating reflects nearly three decades of honest, high-quality work." },
                    { title: "Save Up to 50%", desc: "Our restoration and weatherproofing systems cost significantly less than a full roof replacement." },
                    { title: "Hurricane Guaranteed", desc: "Our roof coating systems are tested and guaranteed to perform under Florida hurricane conditions." },
                    { title: "Free Roof Inspection", desc: `No-cost, no-obligation assessment by a certified technician — we come to your ${city} property.` },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                      <Star className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-foreground mb-1">{item.title}</div>
                        <div className="text-muted-foreground text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  Serving {city} and Surrounding Communities
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  In addition to {city}, we serve all communities throughout {county} and the greater South Florida tri-county area.{" "}
                  <Link href={`/service-areas/${countySlug}`} className="text-accent hover:underline font-medium">
                    View all cities in {county}
                  </Link>{" "}
                  or{" "}
                  <Link href="/service-areas" className="text-accent hover:underline font-medium">
                    see our full service area map.
                  </Link>
                </p>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-1">Free Roof Inspection</h3>
                <p className="text-white/60 text-xs mb-5">Serving {city}, FL — no cost, no obligation</p>
                <LocalQuoteForm location={`${city}, FL`} source="city-page-form" />
              </div>

              <div className="bg-muted rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-sm text-foreground">Call Now</div>
                    <a href="tel:954-210-9614" className="text-accent font-bold text-lg hover:underline">954-210-9614</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-sm text-foreground">Currently Serving</div>
                    <div className="text-muted-foreground text-sm">{city}, {county}, FL</div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-1">A+</div>
                <div className="text-sm font-bold text-foreground">BBB Accredited Business</div>
                <div className="text-xs text-muted-foreground">Serving {city} since 1994</div>
              </div>

              {/* City photo thumbnail */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={`Aerial view of ${city}, Florida`}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="bg-muted px-4 py-2 text-xs text-muted-foreground text-center">
                  {city}, {county}, Florida
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
