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
    name: "Fungal Shield",
    slug: "fungalshield",
    tagline: "\"Save Your Tiles\"",
    subtitle: "Clear Roof Tile Sealer & Anti-Fungal, Anti-Algae Roof Coating",
    accentClass: "border-green-600",
    badgeClass: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    coverageSqFt: 90,
    summary:
      "Florida's clear roof tile sealer and anti-fungal roof coating — kills black streaking, mold, algae, and fungal growth at the cellular level. Bonds to tile, metal roofing, and flat deck surfaces alike, creating a permanent biological barrier without changing the color or appearance of your roof.",
    highlights: [
      "Active biocide formula — eliminates Gloeocapsa magma (black streak bacteria)",
      "Doubles as a clear metal roof coating — protects metal panels without changing their finish",
      "Guaranteed mildew resistance — less cleaning required",
      "Sheds water, prevents staining & UV protection",
      "Clear finish — preserves original tile appearance",
      "Compatible: clay tile, concrete tile, metal roofing, flat deck",
      "5-Year Product Warranty — included standard",
    ],
    specs: [
      { label: "Product Code", value: "RP1 — Fungal Shield" },
      { label: "Coverage Rate", value: "~90 sq ft per gallon" },
      { label: "Finish", value: "Clear — no color change to tiles" },
      { label: "Mildew Resistance", value: "Guaranteed" },
      { label: "UV Resistance", value: "UV-stable — no degradation in Florida heat" },
      { label: "Warranty", value: "5-Year Product Warranty" },
      { label: "Manufactured", value: "Davie, FL — The Roof Store" },
      { label: "Price", value: "$190 per 5-gallon pail" },
    ],
    bestFor: "Tile, metal, and flat roofs with black streaking, algae patches, or mold in South Florida's year-round humidity.",
  },
  {
    code: "RP2",
    icon: Sun,
    name: "Smart Shield",
    slug: "smartshield",
    tagline: "\"Waterproof. Weatherproof. In 3,000+ Colors.\"",
    subtitle: "Tintable Waterproof & Weatherproof Tile Roof Coating",
    accentClass: "border-accent",
    badgeClass: "bg-accent/10 text-accent",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    coverageSqFt: 90,
    summary:
      "A complete waterproof and weatherproof coating system designed specifically for Florida tile roofs — in over 3,000 tintable colors. 5× thicker than standard roof paint. BASF Cool Pigment Technology means the darker the color, the MORE it reflects (TSR +32%). FP&L confirmed energy savings. Exclusively available through The Roof Store.",
    highlights: [
      "Surface coating for field tiles — waterproof, weatherproof, 5× thicker than standard roof paint",
      "Ridge caps polyurethaned & fiber coated on every job — minimum hurricane wind-lift protection",
      "Also formulated as a direct-to-metal roof coating — not just tile",
      "Rated for ponding water on flat roofs — no \"not for use in ponding water\" exclusion",
      "3,000+ tintable color options — match any HOA shade or custom color",
      "The darker the color, the MORE it reflects — BASF Cool Pigment Technology (TSR +32%)",
      "FP&L (Florida Power & Light) independently confirmed cooling cost savings",
      "Guaranteed mildew resistance — exclusive formula, not sold in any retail store",
    ],
    specs: [
      { label: "Product Code", value: "RP2 — Smart Shield" },
      { label: "Primary Function", value: "Waterproof & weatherproof coating for tile, metal & flat roofs" },
      { label: "Color Options", value: "3,000+ tintable colors — full custom palette" },
      { label: "Coverage Rate", value: "~90 sq ft per gallon" },
      { label: "Cool Pigment", value: "BASF Technology — TSR +32% even at darkest black" },
      { label: "Energy Endorsement", value: "FP&L confirmed cooling cost savings" },
      { label: "Ponding Water", value: "Rated for standing water on flat decks — no exclusion" },
      { label: "Mildew Resistance", value: "Guaranteed" },
      { label: "Availability", value: "Exclusive — not sold in any retail store" },
      { label: "Manufactured", value: "Davie, FL — The Roof Store" },
      { label: "Price", value: "$285 per 5-gallon pail" },
    ],
    bestFor: "Any tile roof homeowner who wants proven waterproof protection in a chosen color — dark or light — while also reflecting the Florida heat.",
    extra: "Developed in collaboration with BASF — the world's largest chemical producer — Smart Shield passed full tensile, flexural, DSC, TGA, and viscosity testing. The BASF Cool Pigment breakthrough: choose any color you want and the darker you go, the more heat reflects away from your home. Exclusively available through The Roof Store.",
    pdfUrl: "/docs/roofprotect-brochure.pdf",
    pdfLabel: "RoofProtect Product Brochure (PDF)",
  },
  {
    code: "RP3",
    icon: ShieldCheck,
    name: "Roof Shield",
    slug: "roofshield",
    tagline: "\"We Don't Just Coat Your Roof — We Make It Monolithic\"",
    subtitle: "Multi-Layer System — Fills Every Gap Between Tiles. Hurricane Proof.",
    accentClass: "border-primary",
    badgeClass: "bg-primary/10 text-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    coverageSqFt: 50,
    summary:
      "Not a coating — a complete multi-layer system that physically fills every gap, void, and space between your tiles with several of our proprietary products. The result: a monolithic roof where wind cannot lift individual tiles and rain has no spaces to enter through. The world's only TAS-106 Dade County Uplift Pull Test Rated liquid roof coating. 5× stronger than a new roof. ½ the cost. Lifetime warranty.",
    highlights: [
      "Fills every gap and void between tiles — multiple products, multiple layers",
      "Creates a monolithic roof: one continuous sealed structure, not individual tiles",
      "Wind cannot lift tiles — rain cannot enter — no gaps remain after installation",
      "World's ONLY TAS-106 Dade County Uplift Pull Test Rated liquid coating",
      "135+ MPH documented real hurricane wind resistance — 5× stronger than a new roof",
      "½ the cost of full roof replacement — Lifetime Warranty, transferable & renewable",
      "Proactive maintenance puts homeowner in strongest position for an independent Useful Life Exam",
      "Rated for ponding water on flat roofs — no \"not for use in ponding water\" exclusion",
      "Also applies to metal roofing — seals seams and fasteners the same way it seals tile gaps",
    ],
    specs: [
      { label: "Product Code", value: "RP3 — Roof Shield" },
      { label: "System Type", value: "Multi-layer — several proprietary products applied in sequence" },
      { label: "Key Mechanism", value: "Fills every tile gap and void → creates one monolithic sealed roof" },
      { label: "Coverage Rate", value: "~50 sq ft per gallon (multi-layer full system)" },
      { label: "Certification", value: "TAS-106 Dade County Uplift Pull Test — only rated liquid coating worldwide" },
      { label: "Wind Rating", value: "135+ MPH — documented real hurricane performance" },
      { label: "Wind Strength vs. New Roof", value: "5× stronger in wind uplift resistance" },
      { label: "Warranty", value: "Lifetime — Maintenance-Free, Transferable & Renewable" },
      { label: "Roof Life Extension", value: "Up to 10 years certification (FL / Citizens recognized)" },
      { label: "Ponding Water", value: "Rated for standing water on flat decks — no exclusion" },
      { label: "Compatible Substrates", value: "Tile, flat deck, metal roofing" },
      { label: "Manufactured", value: "Davie, FL — The Roof Store" },
      { label: "Price", value: "$325 per 5-gallon pail" },
    ],
    bestFor: "Any tile roof where hurricane wind or rain intrusion between tiles is a risk — and any roof approaching replacement age that deserves a structural solution rather than a simple re-roof.",
    featured: true,
    pdfUrl: "/docs/roofshield-strength-data-sheet.pdf",
    pdfLabel: "Roof Shield Strength Data Sheet (PDF)",
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
    feature: "Engineered base chemistry matched to your roof",
    ours: "passes",
    generic: "fails",
    note: "Generic coatings are one-size-fits-all off-the-shelf paint. Ours are formulated per system and per project — elastomeric, polyurethane, or silicone — matched to your roof, budget, and goals.",
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
  {
    feature: "Dedicated metal roof coating option",
    ours: "passes",
    generic: "warn",
    note: "Fungal Shield, Smart Shield, and Roof Shield all bond directly to metal roofing — not just tile.",
  },
];

const questions = [
  {
    q: "Does the product pass TAS-106 Dade County Wind Uplift?",
    a: "This is the gold standard test for tile roof wind resistance in Florida. A new tile roof must pass minimum 35 lbs uplift in the field and 55 lbs at the ridge caps (≈120–130 MPH). Our Roof Shield (RP3) is the only liquid coating in the world that has received an independent TAS-106 certification. Ask any competitor to provide their TAS-106 documentation. Most cannot.",
  },
  {
    q: "Is the product rated for ponding water and flat roofs?",
    a: "Read the warranty exclusions. Many popular-brand roof coatings — including Lanco Harris, Karnak, and Sherwin-Williams products — specifically state \"not for use in ponding water\" or \"not intended for use in ponding areas.\" That exclusion disqualifies them from flat roof use. Our products do not carry this limitation.",
  },
  {
    q: "What's the difference between your elastomeric, polyurethane, and silicone options?",
    a: "We don't force every roof into one formula. Depending on your roof type, budget, and goals, we build your system on one of three engineered base chemistries — elastomeric, polyurethane, or silicone. Fungal Shield (RP1) uses a raw, uncolored elastomeric resin base — no fillers, no added color — loaded with additives that repel fungus and mold, reduce tile porosity, shed water, and add UV protection. Smart Shield (RP2) uses an elastomeric or polyurethane base that we had re-engineered with BASF to do something generic coatings can't: hold true darker color choices on tile roofs without breaking down. That matters because dark tile roofs are one of the biggest trends in South Florida right now, and most reflective coatings simply can't perform in darker tones. This isn't off-the-shelf paint — every base is engineered for a specific job.",
  },
  {
    q: "Can these systems be combined — like a colored top coat over Roof Shield?",
    a: "Yes, and it's actually common. For example, a client with a tile roof who wants the full Roof Shield monolithic waterproofing system but also wants the roof painted a specific color — black is popular — will get the Roof Shield base coats applied first to seal and waterproof the roof, then Smart Shield applied as the final top coat for color and reflectivity. Our systems aren't rigid, one-size packages — we combine base and top coats to match the performance and look each client wants.",
  },
  {
    q: "How many coats are required and how often do you recoat?",
    a: "Some generic coatings require a separate protective coat over the waterproofing coat — and then require recoating every 3–5 years. \"Protect the protectant\" doesn't make much sense. Roof Shield comes with a lifetime maintenance-free warranty. You should do the math on long-term cost before purchasing any competitor product.",
  },
  {
    q: "Is the warranty transferable when the property sells?",
    a: "Most manufacturer warranties are non-transferable and void upon change of ownership. Our Roof Shield lifetime warranty is fully transferable to a new buyer and renewable. This adds measurable value to your property at resale.",
  },
  {
    q: "Can you provide documentation for any energy savings claims?",
    a: "For Smart Shield (RP2): FP&L (Florida Power & Light) independently confirmed our product saves on cooling costs — this is utility-validated, not a marketing claim. Ask any competitor whether their energy savings claim has been independently validated by a utility company.",
  },
  {
    q: "Do you offer a metal roof coating, or is this just for tile?",
    a: "All three systems apply to metal roofing, not just tile. Fungal Shield works as a clear metal roof coating that stops rust-driven staining and biological growth without changing the panel's finish. Smart Shield applies as a direct-to-metal waterproof, weatherproof, tintable coating. Roof Shield's multi-layer system seals seams and fasteners on metal roofs the same way it seals gaps between tiles.",
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

const BASE = "https://www.theroofstore.net";

export default function Products() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Roof Coating Products — The Roof Store",
      url: `${BASE}/products`,
      description: "RP1 Fungal Shield, RP2 Smart Shield, RP3 Roof Shield — manufactured in Davie FL. The only TAS-106 rated coating in the world.",
      hasPart: [
        { "@type": "WebPage", name: "Fungal Shield (RP1)", url: `${BASE}/products/fungalshield` },
        { "@type": "WebPage", name: "Smart Shield (RP2)", url: `${BASE}/products/smartshield` },
        { "@type": "WebPage", name: "Roof Shield (RP3)", url: `${BASE}/products/roofshield` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Fungal Shield (RP1)",
      description: "Florida's clear roof tile sealer and anti-fungal coating — kills black streaking, mold, algae, and fungal growth at the cellular level. Bonds to tile, metal, and flat deck surfaces. 5-year product warranty.",
      image: `${BASE}/images/roofshield-bucket.webp`,
      url: `${BASE}/products/fungalshield`,
      sku: "RP1",
      brand: { "@type": "Brand", name: "RoofProtect Products" },
      offers: { "@type": "Offer", priceCurrency: "USD", price: "190", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@type": "Organization", name: "The Roof Store" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Smart Shield (RP2)",
      description: "Mid-grade elastomeric roof coating with BASF Cool Pigment Technology. Available in 3,000+ colors. FP&L utility-validated energy savings. 10-year product warranty.",
      image: `${BASE}/images/roofshield-bucket.webp`,
      url: `${BASE}/products/smartshield`,
      sku: "RP2",
      brand: { "@type": "Brand", name: "RoofProtect Products" },
      offers: { "@type": "Offer", priceCurrency: "USD", price: "285", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@type": "Organization", name: "The Roof Store" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Roof Shield (RP3)",
      description: "Premium monolithic roof restoration system. World's only TAS-106 Dade County Uplift certified liquid coating. Creates a seamless, gap-free surface over tile and flat roofs. Lifetime Warranty.",
      image: `${BASE}/images/roofshield-bucket.webp`,
      url: `${BASE}/products/roofshield`,
      sku: "RP3",
      brand: { "@type": "Brand", name: "RoofProtect Products" },
      offers: { "@type": "Offer", priceCurrency: "USD", price: "325", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition", seller: { "@type": "Organization", name: "The Roof Store" } },
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Products — Tile, Flat & Metal | TAS-106 Rated | The Roof Store"
        description="The only TAS-106 (Dade County) Uplift Tested roof coating system in the world. Florida-made for tile, flat & metal roofs. Stops leaks, saves energy, hurricane-tested. Free estimate: 954-210-9614."
        canonical="/products"
        schema={schema}
      />

      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Roofprotect Products — Manufactured in Davie, Florida
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">FungalShield, SmartShield &amp; RoofShield — Roof Coating Products for South Florida</h1>
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
              <div className="text-sm font-bold uppercase tracking-wider opacity-80">Coverage Reference — Weatherproof Coating Products</div>
            </div>
            <div className="flex gap-6 sm:gap-12">
              {[
                { code: "RP1", name: "Fungal Shield", coverage: "90 sq ft/gal" },
                { code: "RP2", name: "Smart Shield", coverage: "90 sq ft/gal" },
                { code: "RP3", name: "Roof Shield", coverage: "50 sq ft/gal" },
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

                      {product.highlights.some((h) => h.includes("Roof Life Certification") || h.includes("Roof Life Extension")) && (
                        <div className="mt-3 text-xs text-muted-foreground">
                          Learn more about the{" "}
                          <Link href="/roof-life-certification" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">
                            Additional Roof Life Certification
                          </Link>
                          .
                        </div>
                      )}
                    </div>

                    {/* Right column — specs */}
                    <div>
                      <img
                        src="/images/roofshield-bucket.webp"
                        alt={`${product.name} roof coating 5-gallon pail — RoofProtect liquid rubber, manufactured in Davie FL`}
                        loading="lazy"
                        className="w-full max-w-xs mx-auto mb-6 drop-shadow-md"
                        data-testid={`product-image-${i}`}
                      />
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
                desc: "Order RP1, RP2, or RP3 from our online store and apply it yourself. Call us at 954-210-9614 — our team walks you through the process at no extra charge. Product warranty limitations may apply for self-applied installations — contact us for full warranty terms before purchase.",
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

      {/* RELATED LINKS */}
      <section className="py-10 bg-muted border-y">
        <div className="container px-4 max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">Explore More</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/commercial-roofs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Commercial Roofing Services →</Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Pricing Guide →</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Roof Coating Blog →</Link>
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
