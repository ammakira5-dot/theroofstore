import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, MapPin, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Authorized Partner Network — The Roof Store Waterproofing Products",
  url: `${BASE}/partner-network`,
  description:
    "The Roof Store Waterproofing Products maintains an authorized partner network of specialty distributors serving South Florida. Each partner is trained in our proprietary coating systems and serves a defined territory.",
  provider: {
    "@type": "Organization",
    name: "The Roof Store Waterproofing Products",
    url: BASE,
    telephone: "+19542109614",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4801 S University Dr",
      addressLocality: "Davie",
      addressRegion: "FL",
      postalCode: "33328",
      addressCountry: "US",
    },
  },
};

const partners = [
  {
    name: "Windproof Roof Systems",
    url: "https://www.windproofroofsystems.com",
    domain: "windproofroofsystems.com",
    phone: "954-743-0667",
    specialty: "Tile Roof Restoration & Reglazing",
    territory: "South Florida — Broward, Miami-Dade, Palm Beach",
    description:
      "Windproof Roof Systems is our authorized specialist for tile roof restoration, reglazing, and decorative color changes. Their technicians are trained in our full Roof Shield coating system and focus on barrel tile, cement tile, and S-tile roofs throughout South Florida. Dade County TAS-106 wind uplift tested.",
    services: [
      "Tile Roof Restoration",
      "Tile Reglazing",
      "Decorative Color Changes",
      "Hurricane Wind-Uplift Coating",
      "Tile Re-Setting & Repair",
    ],
    badge: "Tile Specialist",
    linkPaused: false,
  },
  {
    name: "Roof Protect Products",
    url: "https://www.roofprotectproducts.com",
    domain: "roofprotectproducts.com",
    phone: "954-900-1973",
    specialty: "Roofing Product Supply & Distribution",
    territory: "South Florida & National Distribution",
    description:
      "Roof Protect Products is our authorized product supply and distribution partner — operating under our in-house RoofProtect factory license, the manufacturing label behind FungalShield, SmartShield, and RoofShield. Contractors and property managers can purchase our full range of rubber roof coating products, sealants, and primers direct from the factory in Broward County, Florida.",
    services: [
      "Wholesale Product Supply",
      "Elastomeric Roof Coating Products",
      "Waterproofing Sealants & Primers",
      "Contractor Supply Program",
      "National Product Distribution",
    ],
    badge: "Product Supply",
    linkPaused: false,
  },
];

export default function PartnerNetwork() {
  return (
    <div className="w-full">
      <SEO
        title="Authorized Partner Network — The Roof Store Waterproofing Products"
        description="The Roof Store maintains an authorized network of specialty partners serving South Florida. Windproof Roof Systems (tile restoration) and Roof Protect Products (product supply) are trained in our proprietary coating systems."
        canonical="/partner-network"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-bold px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="h-4 w-4" />
              Authorized Partners
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Our Authorized Partner Network
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl">
              The Roof Store Waterproofing Products maintains a select network of authorized specialty partners
              throughout South Florida — each trained in our proprietary coating systems and serving a defined
              territory or product specialty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What authorized means */}
      <section className="py-12 bg-muted/50 border-b border-border">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            {[
              { label: "Factory Trained", desc: "All partners complete full on-site training at our Davie, FL facility before operating." },
              { label: "System Certified", desc: "Partners are certified specifically in our Fungal Shield, Smart Shield, and Roof Shield systems." },
              { label: "Backed by The Roof Store", desc: "Every partner carries the backing of our A+ BBB rating, 30+ year reputation, and product warranties." },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-6">
                <ShieldCheck className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-bold text-foreground mb-2">{item.label}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto space-y-10">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted rounded-2xl overflow-hidden border border-border"
            >
              {/* Card header */}
              <div className="bg-primary text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {partner.badge}
                  </div>
                  <h2 className="text-2xl font-serif font-bold">{partner.name}</h2>
                  <div className="text-white/70 text-sm mt-1">{partner.specialty}</div>
                </div>
                {!partner.linkPaused && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors border border-white/20 shrink-0"
                  >
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Card body */}
              <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-foreground">{partner.territory}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-accent shrink-0" />
                      <a href={`tel:${partner.phone.replace(/\D/g, "")}`} className="text-accent font-bold hover:underline">
                        {partner.phone}
                      </a>
                    </div>
                    {partner.linkPaused ? (
                      <div className="flex items-center gap-3 text-sm">
                        <ExternalLink className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                        <span className="text-muted-foreground/70 italic">
                          Site link temporarily paused pending content updates
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 text-sm">
                        <ExternalLink className="h-4 w-4 text-accent shrink-0" />
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {partner.domain}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Services Offered</div>
                  <ul className="space-y-2.5">
                    {partner.services.map((svc, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-foreground">{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate disclosure */}
      <section className="py-6 bg-muted/30 border-t border-border">
        <div className="container px-4 max-w-4xl mx-auto">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            The Roof Store is our retail storefront. Our coating products are manufactured in-house under our{" "}
            <strong className="text-foreground">RoofProtect</strong> factory license, and professional installation
            is available through <strong className="text-foreground">Storm Shield Paint Systems Inc.</strong>, our
            exclusive Florida-licensed contracting and installation division. Windproof Roof Systems is our authorized
            tile restoration specialist. All coating products distributed or installed under these brands are
            manufactured at our Broward County, Florida facility.
          </p>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 border border-border flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Interested in Becoming an Authorized Partner?</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer exclusive county and state territories for qualified contractors and investors. Partners
                receive full factory training, complete advertising packages, and ongoing business support from our
                team in Davie, FL.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/distributorships"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                View Opportunities
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:9542109614"
                className="inline-flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent font-bold px-6 py-3 rounded-lg transition-colors border border-accent/30"
              >
                <Phone className="h-4 w-4" />
                954-210-9614
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main company CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold mb-4">Need Service for Your Home or Property?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              For residential and commercial roof coating and waterproofing services throughout South Florida,
              contact The Roof Store directly. Free inspections, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Schedule Free Inspection
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:954-210-9614"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors border border-white/20"
              >
                <Phone className="h-5 w-5" />
                954-210-9614
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              4801 S University Dr, Davie FL 33328 · A+ BBB Rated since 1994
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
