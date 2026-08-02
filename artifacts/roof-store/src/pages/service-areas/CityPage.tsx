import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, ShieldCheck, Star, Waves, Paintbrush, Droplets, Wind, Wrench, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { LocalQuoteForm } from "@/components/LocalQuoteForm";
import { cityCoords } from "./coords";
import { variantIndex, introVariants, serviceVariants, whyChooseVariants, paintVsCoatingVariants } from "./contentVariants";
import { getCityFaqs } from "./cityFAQs";
import { cityLocalContent } from "./localContent";
import { cityMetaDescriptions } from "./metaDescriptions";

interface CityPageProps {
  city: string;
  county: string;
  countySlug: string;
  citySlug: string;
  image: string;
  blurb?: string;
  jobPhotos?: { src: string; alt: string; caption: string }[];
}

const BASE = "https://www.theroofstore.net";

const serviceIcons = [Waves, Paintbrush, Droplets, ShieldCheck, Wind, Wrench];

export function CityPage({ city, county, countySlug, citySlug, image, blurb, jobPhotos }: CityPageProps) {
  const cityUrl = `${BASE}/service-areas/${countySlug}/${citySlug}`;
  const coords = cityCoords[citySlug];

  const introIdx = variantIndex(citySlug, introVariants.length);
  const serviceIdx = variantIndex(`${citySlug}-svc`, serviceVariants.length);
  const whyIdx = variantIndex(`${citySlug}-why`, whyChooseVariants.length);
  const paintIdx = variantIndex(`${citySlug}-paint`, paintVsCoatingVariants.length);

  const localContent = cityLocalContent[citySlug];
  const introParagraphs = localContent?.intro ?? introVariants[introIdx](city, county);
  const services = serviceVariants[serviceIdx](city);
  const whyChoose = whyChooseVariants[whyIdx](city);
  const paintVsCoating = paintVsCoatingVariants[paintIdx](city);

  const faqs = getCityFaqs(citySlug, city, county);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      name: "The Roof Store Waterproofing Products",
      alternateName: "The Roof Store",
      url: BASE,
      telephone: "+19542109614",
      email: "ammakira5@gmail.com",
      image,
      address: {
        "@type": "PostalAddress",
        streetAddress: "4801 S University Dr",
        addressLocality: "Davie",
        addressRegion: "FL",
        postalCode: "33328",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "City",
        name: city,
        ...(coords && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: coords.lat,
            longitude: coords.lon,
          },
        }),
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `${county}, Florida`,
        },
      },
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
      description: `Professional roof coating, tile restoration, and weatherproofing in ${city}, FL. A+ BBB Rated since 1994.`,
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
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Roof Coating & Waterproofing",
      name: `Roof Coating Services in ${city}, FL`,
      description: `Professional rubber roof coating, tile restoration, and waterproofing services for homeowners and businesses in ${city}, ${county}, Florida.`,
      url: cityUrl,
      provider: {
        "@type": "RoofingContractor",
        name: "The Roof Store",
        telephone: "+19542109614",
        url: BASE,
      },
      areaServed: {
        "@type": "City",
        name: city,
        ...(coords && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: coords.lat,
            longitude: coords.lon,
          },
        }),
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `${county}, Florida`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title={`Roof Coating in ${city}, FL | The Roof Store`}
        description={
          cityMetaDescriptions[citySlug] ??
          `Insurance flagging your ${city} roof's age? Our coating + Additional Roof Life Certification satisfies FL carriers for 60–70% less than re-roofing. A+ BBB since 1994.`
        }
        canonical={`/service-areas/${countySlug}/${citySlug}`}
        ogImage={image}
        schema={schema}
        geo={{
          region: "US-FL",
          placename: `${city}, FL`,
          ...(coords && { position: `${coords.lat};${coords.lon}` }),
        }}
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
            <h1 className="text-5xl font-serif font-bold mb-6 text-white">Roof Coating Services in {city}, FL</h1>
            <p className="text-xl text-white/85">
              Professional roof restoration and weatherproofing for {city} homeowners and businesses. A+ BBB Rated since 1994.
            </p>
          </motion.div>
        </div>
      </section>

      {jobPhotos && jobPhotos.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-2">
              Our Work in {city}
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Real photos from a real {city} job — no stock images.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobPhotos.map((photo, i) => (
                <figure key={i} className="bg-card border rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-56 object-cover"
                  />
                  <figcaption className="p-4 text-sm text-muted-foreground leading-relaxed">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Roof Coating Services in {city}
                </h2>
                {introParagraphs.map((p, i) => (
                  <p key={i} className={`text-muted-foreground text-lg leading-relaxed ${i < introParagraphs.length - 1 ? "mb-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </motion.div>

              {localContent && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">{localContent.roofLandscape.heading}</h3>
                      {localContent.roofLandscape.paragraphs.map((p, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{p}</p>
                      ))}
                    </div>
                    <div className="bg-primary/5 border border-primary/15 rounded-xl p-6">
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">{localContent.permitsAndRules.heading}</h3>
                      {localContent.permitsAndRules.paragraphs.map((p, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{p}</p>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                        {city} neighborhoods &amp; communities we serve
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {localContent.neighborhoods.map((n, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 border rounded-lg">
                            <MapPin className="h-4 w-4 text-accent shrink-0 mt-1" />
                            <div>
                              <div className="font-bold text-foreground text-sm">{n.name}</div>
                              <div className="text-muted-foreground text-sm">{n.note}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

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
                  {services.map((service, i) => {
                    const Icon = serviceIcons[i] ?? ShieldCheck;
                    return (
                      <div key={i} className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl border hover:shadow-sm transition-shadow">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-bold text-foreground mb-1">{service.title}</div>
                          <div className="text-muted-foreground text-sm leading-relaxed">{service.desc}</div>
                          {service.title.includes("Tile Roof Paint") && (
                            <Link href="/tile-roof-painting" className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-2 hover:underline">
                              Learn more about tile roof painting →
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Explore our complete range of{" "}
                  <Link href="/roof-services" className="text-accent font-semibold hover:underline">roof coating and restoration services</Link>{" "}
                  available in {city} and throughout South Florida.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Why {city} Homeowners Choose Us</h3>
                <div className="space-y-4">
                  {whyChoose.map((item, i) => (
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
                <div className="bg-muted/50 border rounded-xl p-6">
                  <h3 className="text-xl font-serif font-bold text-primary mb-4">Our Roof Coating Systems</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link href="/products/fungalshield" className="block bg-background border rounded-lg p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                      <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">RP1</div>
                      <div className="font-bold text-foreground group-hover:text-accent transition-colors">Fungal Shield</div>
                      <div className="text-xs text-muted-foreground mt-1">Anti-fungal &amp; anti-algae coating</div>
                    </Link>
                    <Link href="/products/smartshield" className="block bg-background border rounded-lg p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                      <div className="text-xs font-bold text-accent uppercase tracking-wide mb-1">RP2</div>
                      <div className="font-bold text-foreground group-hover:text-accent transition-colors">Smart Shield</div>
                      <div className="text-xs text-muted-foreground mt-1">Energy-reflective · most popular</div>
                    </Link>
                    <Link href="/products/roofshield" className="block bg-background border rounded-lg p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                      <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">RP3</div>
                      <div className="font-bold text-foreground group-hover:text-accent transition-colors">Roof Shield</div>
                      <div className="text-xs text-muted-foreground mt-1">Hurricane-rated · TAS-106 certified</div>
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
                    <Link href="/roof-systems" className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline">
                      Compare all systems →
                    </Link>
                    <Link href="/roof-coating-florida" className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline">
                      Florida Roof Coating Guide →
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    {paintVsCoating.heading}
                  </h3>
                  {paintVsCoating.paragraphs.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                  <Link href="/roof-painting-vs-coating" className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm">
                    Learn more: Roof Paint vs. Roof Coating Systems →
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-5">
                  Frequently Asked Questions — {city} Roof Coating
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border rounded-xl overflow-hidden bg-card">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-foreground hover:bg-muted/50 transition-colors"
                        aria-expanded={openFaq === i}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-accent shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t bg-muted/20 pt-4">
                          {faq.a}
                        </div>
                      )}
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

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 space-y-3">
                  <div className="text-xs font-bold text-accent uppercase tracking-wide">Dade County TAS-106 Uplift Certified · Since 2006</div>
                  <h3 className="text-2xl font-serif font-bold text-primary">The Hurricane Wind Test Behind Every {city} Roof We Coat</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Roof Shield (RP3) system is the only liquid-applied roof coating in the world to pass Dade County's TAS-106 Uplift Pull Test — the same wind-uplift standard required for brand-new tile roof installations in Florida. Independently verified to 135+ MPH, it bonds every tile to the substrate for 5× the wind uplift resistance of a new tile roof.
                  </p>
                  <Link href="/tas-106-certified-roof-coating" className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm">
                    See the TAS-106 certification and what it means for your {city} home →
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="bg-muted/40 border rounded-lg px-5 py-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5">Contractors &amp; DIY — buy factory-direct</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2.5">
                    Not looking for full-service installation? Buy the same 100% liquid rubber coatings we use in {city} at factory pricing — shipped anywhere, or picked up at our Davie, FL facility. Custom colors tinted in-house.
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    <Link href="/shop" className="text-accent font-semibold hover:underline">Shop factory-direct →</Link>
                    <Link href="/roof-systems" className="text-accent font-semibold hover:underline">View product specs →</Link>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-1">Free Roof Evaluation &amp; Contractor Installation Estimate</h3>
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

              <div className="bg-muted rounded-xl p-6">
                <div className="text-sm font-bold text-foreground mb-4">Roof Coating Pricing</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-bold text-green-700 uppercase tracking-wide">RP1 FungalShield</div>
                    <div className="text-xs text-muted-foreground">Anti-fungal · 5–7 yr</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-wide">RP2 SmartShield ★</div>
                    <div className="text-xs text-muted-foreground">Energy-saving · 10–15 yr</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wide">RP3 RoofShield</div>
                    <div className="text-xs text-muted-foreground">Hurricane-rated · Lifetime</div>
                  </div>
                  <div className="border-t pt-3 text-xs text-muted-foreground leading-relaxed">
                    Typically 60–70% less than re-roofing · Includes labor &amp; materials
                  </div>
                </div>
                <Link href="/pricing" className="block text-center text-xs text-accent font-semibold mt-4 hover:underline">
                  Get the Factory Price Sheet →
                </Link>
              </div>

              <div className="bg-muted rounded-xl p-5 space-y-2">
                <div className="text-sm font-bold text-foreground mb-3">Explore Our Systems</div>
                <Link href="/products/smartshield" className="flex items-center justify-between bg-background border rounded-lg px-4 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                  Smart Shield <span className="text-xs text-muted-foreground">RP2 — Most Popular</span>
                </Link>
                <Link href="/products/roofshield" className="flex items-center justify-between bg-background border rounded-lg px-4 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                  Roof Shield <span className="text-xs text-muted-foreground">RP3 — Hurricane Rated</span>
                </Link>
                <Link href="/products/fungalshield" className="flex items-center justify-between bg-background border rounded-lg px-4 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                  Fungal Shield <span className="text-xs text-muted-foreground">RP1 — Anti-Algae</span>
                </Link>
                <Link href="/roof-systems" className="block text-center text-xs text-accent font-semibold mt-1 hover:underline">
                  Compare all systems →
                </Link>
              </div>

              {/* Google Maps embed */}
              {coords ? (
                <div className="rounded-xl overflow-hidden shadow-md border border-border">
                  <div className="bg-muted px-4 py-2.5 flex items-center gap-2 text-xs font-semibold text-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                    {city}, {county}, FL
                  </div>
                  <iframe
                    title={`Map of ${city}, Florida — The Roof Store service area`}
                    src={`https://maps.google.com/maps?q=${coords.lat},${coords.lon}&z=13&output=embed`}
                    width="100%"
                    height="220"
                    style={{ border: 0, display: "block" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
