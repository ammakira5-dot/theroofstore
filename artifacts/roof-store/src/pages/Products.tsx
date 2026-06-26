import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck, Sun, Leaf, ArrowRight, ExternalLink,
  CheckCircle, XCircle, AlertTriangle, Phone, ChevronDown, ChevronUp, Download,
  Hammer, ShoppingCart, UserCheck,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const products = [
  {
    code: "RP1",
    icon: Leaf,
    name: "FungalShield",
    slug: "fungalshield",
    tagline: "\"Save Your Tiles\"",
    subtitle: "Anti-Fungal & Anti-Algae Clear Roof Coating",
    accentClass: "border-green-600",
    badgeClass: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    coverageSqFt: 90,
    summary:
      "Florida's clear anti-fungal roof coating — kills black streaking, mold, algae, and fungal growth at the cellular level. Bonds to the tile surface and creates a permanent biological barrier without changing the color or appearance of your roof.",
    highlights: [
      "Active biocide formula — eliminates Gloeocapsa magma (black streak bacteria)",
      "Guaranteed mildew resistance — less cleaning required",
      "Sheds water, prevents staining & UV protection",
      "Clear finish — preserves original tile appearance",
      "Compatible: clay tile, concrete tile, metal, flat deck",
      "5-Year Product Warranty — included standard",
    ],
    specs: [
      { label: "Product Code", value: "RP1 — FungalShield" },
      { label: "Coverage Rate", value: "~90 sq ft per gallon" },
      { label: "Finish", value: "Clear — no color change to tiles" },
      { label: "Mildew Resistance", value: "Guaranteed" },
      { label: "UV Resistance", value: "UV-stable — no degradation in Florida heat" },
      { label: "Warranty", value: "5-Year Product Warranty" },
      { label: "Manufactured", value: "Davie, FL — Storm Shield Paint Systems Inc." },
    ],
    bestFor: "Tile roofs with black streaking, algae patches, or mold in South Florida's year-round humidity.",
  },
  {
    code: "RP2",
    icon: Sun,
    name: "SmartShield",
    slug: "smartshield",
    tagline: "\"Our Most Popular System Ever\"",
    subtitle: "Energy-Reflective Cool Pigment Roof Coating",
    accentClass: "border-accent",
    badgeClass: "bg-accent/10 text-accent",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    coverageSqFt: 90,
    summary:
      "The most innovative protective color roof coating ever made — developed in collaboration with BASF, the world's largest chemical producer. Over 3,000 color options. The breakthrough: the darker the color, the MORE it reflects (TSR +32% even at darkest black). FP&L confirmed energy savings. Exclusive — not available in any retail store.",
    highlights: [
      "3,000+ color options — choose any shade from light to dark charcoal",
      "The darker the color, the MORE it reflects — BASF Cool Pigment Technology, TSR increased by 32%",
      "FP&L (Florida Power & Light) independently confirmed cooling cost savings",
      "Exclusive formula — not sold in Home Depot, Lowe's, or any other retailer",
      "5× thicker than standard roof paint — waterproof & guaranteed mildew-proof",
      "Developed with BASF: passed full tensile, flexural, DSC, TGA & viscosity testing",
    ],
    specs: [
      { label: "Product Code", value: "RP2 — SmartShield" },
      { label: "Color Options", value: "3,000+ colors — full custom palette" },
      { label: "Key Differentiator", value: "Darker color = MORE reflective — BASF Cool Pigment (TSR +32%)" },
      { label: "Coverage Rate", value: "~90 sq ft per gallon" },
      { label: "Energy Endorsement", value: "FP&L confirmed cooling cost savings" },
      { label: "Waterproofing", value: "Wind-driven rain resistant" },
      { label: "Mildew Resistance", value: "Guaranteed" },
      { label: "Availability", value: "Exclusive — not sold in any retail store" },
      { label: "Manufactured", value: "Davie, FL — Storm Shield Paint Systems Inc." },
    ],
    bestFor: "Any homeowner who wants a dark-colored roof (charcoal, brown, slate, terracotta) AND lower energy bills — the only coating that delivers both.",
    extra: "BASF — the world's largest chemical producer — re-engineered our base resins and infused proprietary cool pigment chemistry in 2018. The result passed full tensile tests, flexural tests, DSC, TGA, and viscosity testing. Recognized worldwide as one of the most innovative reflective coatings of its kind — and available exclusively through The Roof Store.",
    pdfUrl: "https://theroofstore.net/Roof_Painting_Service_Broward_County_for_Smart_Shield.pdf",
    pdfLabel: "SmartShield Product Sheet",
  },
  {
    code: "RP3",
    icon: ShieldCheck,
    name: "RoofShield",
    slug: "roofshield",
    tagline: "\"Don't Re-Roof — Weatherproof at ½ the Cost\"",
    subtitle: "Flagship Hurricane-Proof Waterproofing System",
    accentClass: "border-primary",
    badgeClass: "bg-primary/10 text-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    coverageSqFt: 50,
    summary:
      "The original. The only liquid roof coating in the world with an independent Dade County TAS-106 Uplift Pull Test certification — 5× stronger than a new tile roof at ½ the cost. Creates a 100% seamless waterproof rubber membrane. Lifetime warranty, transferable and renewable.",
    highlights: [
      "World's ONLY TAS-106 Dade County Uplift Pull Test Rated coating",
      "135+ MPH documented wind resistance — real hurricane performance",
      "5× stronger in wind uplift than a new tile roof",
      "½ the cost of full roof replacement",
      "100% seamless waterproof rubber membrane — no joints, no seams",
      "Lifetime Warranty — maintenance-free, transferable & renewable",
      "Additional Roof Life Certification for up to 10 years (Citizens Insurance accepted)",
    ],
    specs: [
      { label: "Product Code", value: "RP3 — RoofShield" },
      { label: "Coverage Rate", value: "~50 sq ft per gallon (full membrane thickness)" },
      { label: "Certification", value: "TAS-106 Dade County Uplift Pull Test — only rated coating worldwide" },
      { label: "Wind Rating", value: "135+ MPH — documented real hurricane performance" },
      { label: "Wind Strength vs. New Roof", value: "5× stronger in uplift resistance" },
      { label: "Warranty", value: "Lifetime — Maintenance-Free, Transferable & Renewable" },
      { label: "Roof Life Extension", value: "Up to 10 years certification (FL / Citizens recognized)" },
      { label: "Compatible Substrates", value: "Concrete tile, barrel tile, S-tile, flat, metal, gravel, foam" },
      { label: "Manufactured", value: "Davie, FL — Storm Shield Paint Systems Inc." },
    ],
    bestFor: "Any Florida roof approaching replacement age, after hurricane damage, or needing insurance certification.",
    featured: true,
    pdfUrl: "https://www.theroofstore.net/roof_waterproofing_Lauderdale_broward.pdf",
    pdfLabel: "RoofShield Product Sheet",
  },
];

const comparisonRows = [
  {
    feature: "Waterproofing — ponding water resistance",
    ours: "passes",
    generic: "fails",
    note: "Most generic brands state \"not for use in ponding water\" on their label.",
  },
  {
    feature: "TAS-106 Dade County Wind Uplift Certification",
    ours: "passes",
    generic: "fails",
    note: "No other coating in the world holds this certification.",
  },
  {
    feature: "True 100% Liquid Rubber Acrylic",
    ours: "passes",
    generic: "warn",
    note: "Elastomeric coatings are not rubber — they combine enamel and thickeners and hold water in the film.",
  },
  {
    feature: "Below-grade / flat roof application",
    ours: "passes",
    generic: "fails",
    note: "Elastomeric paints and mastics are designed for verticals (walls), not flat or low-slope roofs.",
  },
  {
    feature: "No additional coats required every 3–5 years",
    ours: "passes",
    generic: "fails",
    note: "Generic elastomeric requires recoating every few years — 'protect the protectant.' Do the math.",
  },
  {
    feature: "Lifetime Transferable & Renewable Warranty",
    ours: "passes",
    generic: "fails",
    note: "Standard roof coating warranties are limited and non-transferable.",
  },
  {
    feature: "Passes the freezer test (does not crack or break)",
    ours: "passes",
    generic: "fails",
    note: "Place generic elastomeric in a freezer — it breaks. Real rubber does not.",
  },
];

const questions = [
  {
    q: "Does the product pass TAS-106 Dade County Wind Uplift?",
    a: "This is the gold standard test for tile roof wind resistance in Florida. A new tile roof must pass minimum 35 lbs uplift in the field and 55 lbs at the ridge caps (≈120–130 MPH). Our RoofShield (RP3) is the only liquid coating in the world that has received an independent TAS-106 certification. Ask any competitor to provide their TAS-106 documentation. Most cannot.",
  },
  {
    q: "Is the product rated for ponding water and flat roofs?",
    a: "Read the warranty exclusions. Many popular-brand roof coatings — including Lanco Harris, Karnak, and Sherwin-Williams products — specifically state \"not for use in ponding water\" or \"not intended for use in ponding areas.\" That exclusion disqualifies them from flat roof use. Our products do not carry this limitation.",
  },
  {
    q: "Is it a true 100% rubber acrylic or an elastomeric?",
    a: "Elastomeric paint is not rubber. It is a category of products made by combining enamel and thickeners — essentially caulk that needs a topcoat to protect it. Elastomerics were designed for sealing walls, not waterproofing roofs. Our products are true liquid rubber acrylics — manufactured without water, fillers, thickeners, or extenders. Put them in a freezer: rubber survives, elastomeric cracks.",
  },
  {
    q: "How many coats are required and how often do you recoat?",
    a: "Some generic coatings require a separate protective coat over the waterproofing coat — and then require recoating every 3–5 years. \"Protect the protectant\" doesn't make much sense. RoofShield comes with a lifetime maintenance-free warranty. You should do the math on long-term cost before purchasing any competitor product.",
  },
  {
    q: "Is the warranty transferable when the property sells?",
    a: "Most manufacturer warranties are non-transferable and void upon change of ownership. Our RoofShield lifetime warranty is fully transferable to a new buyer and renewable. This adds measurable value to your property at resale.",
  },
  {
    q: "Can you provide documentation for any energy savings claims?",
    a: "For SmartShield (RP2): FP&L (Florida Power & Light) independently confirmed our product saves on cooling costs — this is utility-validated, not a marketing claim. Ask any competitor whether their energy savings claim has been independently validated by a utility company.",
  },
];

function ComparisonIcon({ status }: { status: string }) {
  if (status === "passes")
    return <CheckCircle className="h-5 w-5 text-accent mx-auto" />;
  if (status === "fails")
    return <XCircle className="h-5 w-5 text-destructive mx-auto" />;
  return <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />;
}

function FAQ({ items }: { items: typeof questions }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y border rounded-xl overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-card">
          <button
            className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-bold text-foreground text-sm leading-snug">{item.q}</span>
            {open === i ? (
              <ChevronUp className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            )}
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Products() {
  return (
    <div className="w-full">
      <SEO
        title="FungalShield, SmartShield & RoofShield — Roof Coating Products | The Roof Store Florida"
        description="RP1 FungalShield, RP2 SmartShield, RP3 RoofShield — manufactured in Davie FL. The only TAS-106 rated coating in the world. FP&L confirmed energy savings. Free consultation 954-210-9614."
        canonical="/products"
      />

      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Roofprotect Products — Manufactured in Davie, Florida
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Our Product Line</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Three proprietary liquid rubber roof coating systems — RP1, RP2, and RP3 — each formulated for a specific Florida roofing challenge. True liquid rubber acrylic. No water, fillers, thickeners, or extenders.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {products.map(p => (
                <div key={p.code} className="bg-white/10 px-5 py-3 rounded-lg text-center">
                  <div className="text-xs text-white/60 uppercase tracking-widest">{p.code}</div>
                  <div className="text-lg font-bold">{p.name}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING TABLE STRIP */}
      <section className="bg-accent text-white py-6">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold uppercase tracking-wider opacity-80">Coverage Reference — Weatherproof Rubber Products</div>
            </div>
            <div className="flex gap-6 sm:gap-12">
              {[
                { code: "RP1", name: "FungalShield", coverage: "90 sq ft/gal" },
                { code: "RP2", name: "SmartShield", coverage: "90 sq ft/gal" },
                { code: "RP3", name: "RoofShield", coverage: "50 sq ft/gal" },
              ].map(p => (
                <div key={p.code} className="text-center">
                  <div className="text-xs font-bold opacity-70 uppercase tracking-wide">{p.code}</div>
                  <div className="font-bold">{p.name}</div>
                  <div className="text-xs opacity-80">{p.coverage}</div>
                </div>
              ))}
            </div>
            <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white/20 shrink-0">
              <a href="tel:9542109614">
                <Phone className="h-4 w-4 mr-2" />
                Call for Pricing
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">The Three Systems</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each product addresses a specific roof protection need. Many installations combine systems — call us and we'll recommend the right combination for your roof.
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl border-2 ${product.accentClass} overflow-hidden shadow-sm`}
                data-testid={`product-card-${i}`}
              >
                {product.featured && (
                  <div className="bg-primary text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                    ★ Flagship Product — The Original Liquid Applied Rubber Roof Shield System™
                  </div>
                )}
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left column */}
                    <div>
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`h-14 w-14 rounded-xl ${product.iconBg} flex items-center justify-center shrink-0`}>
                          <product.icon className={`h-7 w-7 ${product.iconColor}`} />
                        </div>
                        <div>
                          <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${product.badgeClass} mb-1`}>
                            {product.code}
                          </div>
                          <h3 className="text-2xl font-serif font-bold text-foreground">{product.name}</h3>
                        </div>
                      </div>

                      <div className="text-accent font-bold text-sm italic mb-2">{product.tagline}</div>
                      <div className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-4">{product.subtitle}</div>

                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{product.summary}</p>

                      {product.extra && (
                        <div className="bg-muted/60 rounded-xl p-4 mb-6 border text-sm text-muted-foreground leading-relaxed">
                          <span className="font-bold text-foreground">BASF Partnership: </span>
                          {product.extra}
                        </div>
                      )}

                      <div className="mb-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">What it does</div>
                        <ul className="space-y-2">
                          {product.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted rounded-xl p-4 text-sm">
                        <span className="font-bold text-foreground">Best for: </span>
                        <span className="text-muted-foreground">{product.bestFor}</span>
                      </div>
                    </div>

                    {/* Right column — specs */}
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">Technical Specifications</div>
                      <div className="divide-y border rounded-xl overflow-hidden mb-6">
                        {product.specs.map((spec, j) => (
                          <div key={j} className="flex items-start px-4 py-3 bg-card">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide w-40 shrink-0 pt-0.5">{spec.label}</span>
                            <span className="text-sm text-foreground font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex-1"
                        >
                          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                            Full Product Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button asChild variant="outline" className="flex-1">
                          <a href="tel:9542109614">
                            <Phone className="h-4 w-4 mr-2" />
                            Get a Quote
                          </a>
                        </Button>
                      </div>
                      {product.pdfUrl && (
                        <a
                          href={product.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 flex items-center gap-2 text-sm text-accent font-bold hover:underline"
                        >
                          <Download className="h-4 w-4" />
                          {product.pdfLabel ?? "Download Product Sheet (PDF)"}
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE WAYS TO GET OUR PRODUCTS */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Flexible — Your Way</div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">We Are Both Manufacturer &amp; Contractor</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Roof Store manufactures these coatings at our own facility in Davie, FL and installs them with our own licensed crew. But you're not locked into hiring us — you can source the products and use any installer you trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Hammer,
                step: "Option 1",
                title: "Hire Us — Full Installation",
                desc: "Our licensed crew handles everything: inspection, surface prep, full application, and warranty documentation. The most common path — and the one we guarantee end-to-end.",
                cta: "Get a Free Quote",
                href: "/contact",
                dark: true,
              },
              {
                Icon: ShoppingCart,
                step: "Option 2",
                title: "Buy Direct — Apply Yourself",
                desc: "Order RP1, RP2, or RP3 from our online store and apply it yourself. Call us at 954-210-9614 — our team walks you through the process at no extra charge.",
                cta: "Buy Online",
                href: "/shop",
                dark: false,
              },
              {
                Icon: UserCheck,
                step: "Option 3",
                title: "Buy &amp; Use Your Own Contractor",
                desc: "Source our product and hand it to any licensed roofing contractor of your choice. We provide the technical specifications and support so the job is done right.",
                cta: "Browse Products",
                href: "/products/roofshield",
                dark: false,
              },
            ].map(({ Icon, step, title, desc, cta, href, dark }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      {/* READ A LABEL LIKE A PRO — comparison section */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
              Read a Label Like a Pro
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Know What You're Purchasing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Many popular "named brand" roof coatings include exclusions on their labels that disqualify them from the most important use cases. Here's how our products compare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border shadow-sm"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-bold">Feature</th>
                  <th className="px-6 py-4 font-bold text-center">Our Products<br /><span className="text-xs font-normal opacity-80">RP1 / RP2 / RP3</span></th>
                  <th className="px-6 py-4 font-bold text-center">Generic Elastomeric<br /><span className="text-xs font-normal opacity-80">Home Depot Brands</span></th>
                </tr>
              </thead>
              <tbody className="divide-y bg-card">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{row.feature}</div>
                      {row.note && <div className="text-xs text-muted-foreground mt-1">{row.note}</div>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonIcon status={row.ours} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <ComparisonIcon status={row.generic} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            ✓ = Passes &nbsp;|&nbsp; ✗ = Fails &nbsp;|&nbsp; ⚠ = Limitation applies. Always read the manufacturer's full label and warranty exclusions before purchasing any roof coating product.
          </p>
        </div>
      </section>

      {/* QUESTIONS CUSTOMERS SHOULD ASK */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Questions to Ask Any Roofing Contractor
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you use us or another company, these are the questions you should ask before purchasing any roof coating product. The answers reveal everything.
            </p>
          </motion.div>

          <FAQ items={questions} />
        </div>
      </section>

      {/* DISTRIBUTORSHIPS CALLOUT */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="bg-card border rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Contractors & Investors</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">Distributorship Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Our products are available for licensed contractors and distributors throughout Florida and nationwide. Franchise and investor opportunities are available. Call us or see our Distributorships page for details on pricing, territory, and program structure.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 px-8">
                <Link href="/distributorships">
                  Distributor Program <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TECH SHEETS CALLOUT */}
      <section className="py-10 bg-background border-y">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">For Architects & Engineers</div>
              <p className="font-bold text-foreground">Technical documentation available on request:</p>
              <p className="text-sm text-muted-foreground">Performance Rating Material Data · MSDS · TAS-106 Wind Resistance Tech Data · Product Brochure (2024)</p>
            </div>
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <a href="tel:9542109614">
                <Phone className="h-4 w-4 mr-2" />
                Call 954-210-9614
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Not Sure Which Product Is Right for You?</h2>
          <p className="text-xl text-white/80 mb-10">
            Call us for a free over-the-phone consultation and price sheet. We'll tell you exactly which system makes sense for your roof type, age, and goals — no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              <a href="tel:9542109614">Call 954-210-9614</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
