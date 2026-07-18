import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Leaf, Sun, ShieldCheck, Info, Mail } from "lucide-react";

const BASE = "https://www.theroofstore.net";

interface PriceRow {
  type: string;
  low: string;
  high: string;
  sameCol?: boolean;
}

interface PriceSystem {
  id: string;
  badge: string;
  badgeColor: string;
  icon: typeof Leaf;
  name: string;
  code: string;
  tagline: string;
  from: string;
  flatNote?: string;
  inspection?: boolean;
  rows: PriceRow[];
}

const systems: PriceSystem[] = [
  {
    id: "fungalshield",
    badge: "Entry Level",
    badgeColor: "bg-green-100 text-green-800",
    icon: Leaf,
    name: "Fungal Shield",
    code: "RP1",
    tagline: "Clear anti-fungal & anti-algae coating — roofs or walls",
    from: "from 50¢ / sq ft",
    rows: [
      { type: "Flat Smooth Tile",      low: "50¢ – 70¢",    high: "70¢ – 90¢" },
      { type: "Flat Broom Swept Tile", low: "70¢ – 90¢",    high: "90¢ – $1.25" },
      { type: "S-Tile (Barrel / Spanish)", low: "90¢ – $1.25", high: "$1.25 – $1.45" },
    ],
  },
  {
    id: "smartshield",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: Sun,
    name: "Smart Shield",
    code: "RP2",
    tagline: "Waterproofing — tile roofs, walls & flat decks · 3,000+ colors",
    from: "from $1.90 / sq ft",
    flatNote: "$2.35 – $2.75 (flat deck, any pitch)",
    rows: [
      { type: "Flat Smooth Tile",      low: "$1.90 – $2.25", high: "$2.25 – $2.50" },
      { type: "Flat Broom Swept Tile", low: "$2.15 – $2.35", high: "$2.35 – $2.50" },
      { type: "S-Tile (Barrel / Spanish)", low: "$2.35 – $2.50", high: "$2.50 – $2.75" },
    ],
  },
  {
    id: "roofshield",
    badge: "Premium · Flagship",
    badgeColor: "bg-amber-100 text-amber-800",
    icon: ShieldCheck,
    name: "Roof Shield",
    code: "RP3",
    tagline: "Full weatherproofing retrofit · World's only TAS-106 Dade County rated coating · Lifetime warranty",
    from: "from $2.70 / sq ft",
    flatNote: "$2.75 – $3.50 (flat deck, any pitch)",
    inspection: true,
    rows: [
      { type: "Flat Smooth Tile",      low: "$2.70 – $3.00", high: "$2.70 – $3.00", sameCol: true },
      { type: "Flat Broom Swept Tile", low: "$3.25 – $3.50", high: "$3.65 – $3.85" },
      { type: "S-Tile (Barrel / Spanish)", low: "$4.00 – $4.20", high: "$4.45 – $4.75" },
    ],
  },
];

export default function Pricing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof Coating & Waterproofing Services — The Roof Store",
    url: `${BASE}/pricing`,
    provider: {
      "@type": "RoofingContractor",
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
    areaServed: [
      { "@type": "AdministrativeArea", name: "Broward County, Florida" },
      { "@type": "AdministrativeArea", name: "Miami-Dade County, Florida" },
      { "@type": "AdministrativeArea", name: "Palm Beach County, Florida" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roof Coating Price Menu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Fungal Shield (RP1) — Clear Anti-Fungal Roof Coating" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: "0.50",
            maxPrice: "1.45",
            unitText: "SQF",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Smart Shield (RP2) — Waterproofing Tile & Flat Roof Coating" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: "1.90",
            maxPrice: "2.75",
            unitText: "SQF",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Roof Shield (RP3) — TAS-106 Certified Full Weatherproofing System" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: "2.70",
            maxPrice: "4.75",
            unitText: "SQF",
          },
        },
      ],
    },
  };

  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Prices per Sq Ft | South Florida | The Roof Store"
        description="Roof coating prices for South Florida: Fungal Shield from $0.50, Smart Shield from $1.90, Roof Shield from $2.70 /sq ft. Labor & materials included. Free estimate: 954-210-9614."
        canonical="/pricing"
        ogImage="/images/og/pricing.jpg"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">Factory Price Menu</div>
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Coating Prices in South Florida — Fungal Shield, Smart Shield &amp; Roof Shield</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Per-square-foot rates by system, roof type, and pitch. All prices include labor &amp; materials. Exact quotes are finalized after a free onsite visit.
            </p>
            <p className="mt-4 text-sm text-white/60">
              Not sure which system is right for you?{" "}
              <Link href="/roof-coating-florida" className="text-accent font-semibold hover:underline">
                Read our complete Florida Roof Coating Guide →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 max-w-5xl mx-auto space-y-10">
          {systems.map((sys, i) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border rounded-2xl shadow-sm overflow-hidden"
            >
              {/* System header */}
              <div className="flex items-start justify-between gap-4 px-8 pt-8 pb-5 border-b">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <sys.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 ${sys.badgeColor}`}>{sys.badge}</span>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      {sys.name} <span className="text-base font-normal text-muted-foreground">({sys.code})</span>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">{sys.tagline}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-accent font-bold text-sm whitespace-nowrap">{sys.from}</span>
                </div>
              </div>

              {/* Price table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-8 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Roof Type</th>
                      <th className="text-center px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">2/12 – 4/12 Pitch</th>
                      <th className="text-center px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">5/12 Pitch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sys.flatNote && (
                      <tr className="border-t border-border/50">
                        <td className="px-8 py-3 text-foreground">Flat Deck</td>
                        <td className="px-6 py-3 text-center font-bold text-primary" colSpan={2}>{sys.flatNote.replace(" (flat deck, any pitch)", "")}</td>
                      </tr>
                    )}
                    {sys.rows.map((row, j) => (
                      <tr key={j} className={`border-t border-border/50 ${j % 2 === 1 ? "bg-muted/20" : ""}`}>
                        <td className="px-8 py-3 text-foreground">{row.type}</td>
                        {row.sameCol ? (
                          <td className="px-6 py-3 text-center font-bold text-primary" colSpan={2}>{row.low}</td>
                        ) : (
                          <>
                            <td className="px-6 py-3 text-center font-bold text-primary">{row.low}</td>
                            <td className="px-6 py-3 text-center font-bold text-primary">{row.high}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Inspection note for Roof Shield */}
              {sys.inspection && (
                <div className="mx-6 mb-6 mt-4 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex items-start gap-3">
                  <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <strong>Manufacturer's Inspection Required:</strong> The Roof Shield warranty program requires a pre-application Manufacturer's Report — $150 per 5,000 sq ft, <strong>100% refunded</strong> when you proceed. <Link href="/manufacturers-report" className="underline font-semibold">Learn more →</Link>
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="bg-muted py-10">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="bg-background rounded-xl border p-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">All prices include labor &amp; materials.</strong> Minor restoration on flat decks and seam taping included where designated.</p>
            <p>Variance based on warranty type, pitch, access difficulty, and surface condition. Exact pricing finalized after a free onsite assessment.</p>
            <p><strong className="text-foreground">Barrel tile square footage tip:</strong> Take your interior sq ft under air × 1.20 for barrel tile (× 1.10 for flat cement tile) to estimate roof surface area.</p>
          </div>
        </div>
      </section>

      {/* Email callout */}
      <section className="py-14 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex items-start gap-5">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Get the Full Price Sheet by Email — Instantly</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Submit a contact request and our factory price sheet is emailed to you automatically — with every system, roof type, and pitch combination laid out clearly. No waiting, no sales call required to see the numbers.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Send Me the Price Sheet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready for an Exact Quote?</h2>
          <p className="text-xl text-white/80 mb-10">
            These are factory guide prices. Your exact quote depends on your roof's size, pitch, type, and condition — all assessed for free at your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Free Onsite Assessment</Link>
            </Button>
            <a href="tel:954-210-9614" className="text-white/80 hover:text-white font-bold text-lg transition-colors">
              or call 954-210-9614
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
