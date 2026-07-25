import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Phone, Leaf, Sun, ShieldCheck, CheckCircle, AlertCircle, Package, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";

const products = [
  {
    code: "RP1",
    name: "Fungal Shield",
    slug: "fungalshield",
    icon: Leaf,
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    badgeClass: "bg-green-100 text-green-700",
    borderClass: "border-green-200",
    price: "$190",
    available: false,
    buyUrl: "https://www.roofprotectproducts.com/product/RP1FungalShield",
    tagline: "\"Save Your Tiles\"",
    subtitle: "Clear Anti-Fungal & Anti-Algae Roof Coating",
    description:
      "Fungal Shield Crystal Clear — one medium-thick even coat applied with a spray applicator creates a mildew-resistant clear gloss layer that promotes elimination of water egress to the substrate. Eliminates frequent cleanings and protects tiles from UV while improving the overall age and look of the tile.",
    highlights: [
      "Clear finish — preserves original tile appearance",
      "Guaranteed mildew resistant — less cleaning required",
      "UV protection for tile surfaces",
      "Eliminates black streaking and algae growth",
      "5-Year Product Warranty",
    ],
  },
  {
    code: "RP2",
    name: "Smart Shield",
    slug: "smartshield",
    icon: Sun,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    badgeClass: "bg-accent/10 text-accent",
    borderClass: "border-accent/30",
    price: "$285",
    available: true,
    buyUrl: "https://www.roofprotectproducts.com/product/RP2SmartShield",
    tagline: "\"Our Most Popular System Ever\"",
    subtitle: "Energy-Reflective Cool Pigment Roof Coating",
    description:
      "Smart Shield forms a waterproof coating membrane when rolled or sprayed in a heavy coat layer. Expands and contracts like flexible rubber, keeps water out, and reflects the sun's heat rays. Cool Pigment Technology increases total solar reflectance (TSR) by 32% — even at the darkest black. The darker the color, the more it reflects. FP&L confirmed energy savings.",
    highlights: [
      "FP&L confirmed cooling cost savings",
      "TSR increased by 32% even in darkest colors (BASF engineered)",
      "Waterproof membrane — wind-driven rain resistant",
      "Guaranteed mildew proof",
      "5× thicker than standard roof paint",
    ],
  },
  {
    code: "RP3",
    name: "Roof Shield",
    slug: "roofshield",
    icon: ShieldCheck,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    badgeClass: "bg-primary/10 text-primary",
    borderClass: "border-primary/30",
    price: "$325",
    available: true,
    buyUrl: "https://www.roofprotectproducts.com/product/RP3RoofShield",
    tagline: "\"Don't Re-Roof — Weatherproof at ½ the Cost\"",
    subtitle: "Hurricane-Proof Waterproofing System — World's Only TAS-106 Rated",
    description:
      "Roof Shield Premium Roof Coating is our most advanced high-impact weatherproof liquid rubber roof coating. Designed for permanent water and wind protection of roof tiles and flat roof systems. Stops existing roof leaks and increases roof life expectancy even on 50-year-old roofs. The only Dade County TAS-106 Uplift-tested roof coating in the world. Bright white energy-efficient formula.",
    highlights: [
      "World's ONLY TAS-106 Dade County Uplift Pull Test certified coating",
      "5× stronger than a new tile roof at ½ the cost",
      "100% seamless waterproof rubber membrane",
      "Lifetime Warranty — transferable & renewable",
      "Supports proactive roof maintenance for insurance inspection readiness",
    ],
    featured: true,
  },
];

const containerInfo = [
  { size: "5-Gallon", note: "Standard residential" },
  { size: "50-Gallon", note: "Commercial / contractor" },
];

const BASE = "https://www.theroofstore.net";

export default function Shop() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Buy Roof Coating Products Online — The Roof Store",
      url: `${BASE}/shop`,
      itemListElement: [
        {
          "@type": "ListItem", position: 1,
          item: {
            "@type": "Product",
            name: "Fungal Shield (RP1) — Anti-Fungal Roof Coating",
            description: "FungalShield (RP1) is a clear roof tile sealer that eliminates black streaking, algae, mold, and fungal growth on Florida tile, metal, and flat roofs. 5-Year Product Warranty.",
            image: `${BASE}/images/fungalshield-product.webp`,
            url: `${BASE}/products/fungalshield`,
            brand: { "@type": "Brand", name: "The Roof Store" },
            offers: { "@type": "Offer", priceCurrency: "USD", price: "190", availability: "https://schema.org/InStock", url: `${BASE}/products/fungalshield` },
          },
        },
        {
          "@type": "ListItem", position: 2,
          item: {
            "@type": "Product",
            name: "Smart Shield (RP2) — Tintable Waterproof Tile Roof Coating",
            description: "SmartShield (RP2) is a reflective cool roof coating that waterproofs tile roofs in 3,000+ colors. 5× the thickness of standard roof paint, true waterproofing, energy savings. 5-Year Product Warranty.",
            image: `${BASE}/images/smartshield-product.webp`,
            url: `${BASE}/products/smartshield`,
            brand: { "@type": "Brand", name: "The Roof Store" },
            offers: { "@type": "Offer", priceCurrency: "USD", price: "285", availability: "https://schema.org/InStock", url: `${BASE}/products/smartshield` },
          },
        },
        {
          "@type": "ListItem", position: 3,
          item: {
            "@type": "Product",
            name: "Roof Shield (RP3) — Monolithic Hurricane Protection System",
            description: "RoofShield (RP3) fills every gap between tiles with multiple product layers making your roof monolithic. TAS-106 Dade County rated, hurricane-proof. Lifetime warranty available.",
            image: `${BASE}/images/roofshield-bucket.webp`,
            url: `${BASE}/products/roofshield`,
            brand: { "@type": "Brand", name: "The Roof Store" },
            offers: { "@type": "Offer", priceCurrency: "USD", price: "325", availability: "https://schema.org/InStock", url: `${BASE}/products/roofshield` },
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Shop", item: `${BASE}/shop` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Buy Roof Coating Products Online | The Roof Store"
        description="Purchase RP1 Fungal Shield ($190), RP2 Smart Shield ($285), and RP3 Roof Shield ($325) online. Manufactured in Davie, FL. Available in 5–50 gallon containers. Free consultation 954-210-9614."
        canonical="/shop"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              <ShoppingCart className="h-4 w-4" />
              Roofprotect Products Online Store
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Buy Our Products Online</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Order directly from our product store at roofprotectproducts.com. Available in 5-gallon to 50-gallon containers. Inclusive of all taxes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {products.map(p => (
                <div key={p.code} className="bg-white/10 px-5 py-2.5 rounded-lg text-center">
                  <div className="text-xs text-white/60 uppercase tracking-widest">{p.code}</div>
                  <div className="font-bold">{p.name}</div>
                  <div className="text-accent font-bold text-lg">{p.price}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-muted border-b py-5">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-accent" />
              Available in 5-gallon to 50-gallon containers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              Prices inclusive of all taxes
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Manufactured in Davie, Florida
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              Bulk / contractor pricing: 954-210-9614
            </div>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="space-y-10">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl border-2 ${product.borderClass} overflow-hidden shadow-sm`}
              >
                {product.featured && (
                  <div className="bg-primary text-white text-center text-xs font-bold uppercase tracking-widest py-2">
                    ★ Flagship Product — World's Only TAS-106 Rated Coating
                  </div>
                )}
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                    {/* Left — identity */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`h-14 w-14 rounded-xl ${product.iconBg} flex items-center justify-center shrink-0`}>
                          <product.icon className={`h-7 w-7 ${product.iconColor}`} />
                        </div>
                        <div>
                          <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${product.badgeClass} mb-1`}>
                            {product.code}
                          </div>
                          <h2 className="text-2xl font-serif font-bold text-foreground">{product.name}</h2>
                        </div>
                      </div>

                      <div className="text-accent font-bold text-sm italic mb-1">{product.tagline}</div>
                      <div className="text-muted-foreground text-xs font-bold uppercase tracking-wide mb-4">{product.subtitle}</div>

                      <p className="text-muted-foreground leading-relaxed text-sm mb-6">{product.description}</p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right — price + buy */}
                    <div className="lg:border-l lg:pl-10">
                      <div className="text-center mb-6">
                        <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Price per 5-gallon</div>
                        <div className="text-5xl font-bold text-primary">{product.price}</div>
                        <div className="text-xs text-muted-foreground mt-1">Inclusive of all taxes</div>
                      </div>

                      {product.available ? (
                        <a
                          href={product.buyUrl}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="block"
                        >
                          <Button className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-bold mb-3">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Buy Now
                            <ExternalLink className="h-3.5 w-3.5 ml-2 opacity-70" />
                          </Button>
                        </a>
                      ) : (
                        <div className="mb-3">
                          <div className="w-full bg-muted border-2 border-dashed border-border rounded-lg h-12 flex items-center justify-center gap-2 text-muted-foreground text-sm font-bold">
                            <AlertCircle className="h-4 w-4" />
                            Currently Unavailable Online
                          </div>
                          <p className="text-xs text-muted-foreground text-center mt-2">Call us to order — 954-210-9614</p>
                        </div>
                      )}

                      <Button asChild variant="outline" className="w-full h-11 mb-4">
                        <Link href={`/products/${product.slug}`}>
                          Full Product Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>

                      <div className="bg-muted rounded-xl p-4 text-center">
                        <div className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-wide">Available Sizes</div>
                        <div className="text-sm text-foreground font-medium">5-Gallon · 50-Gallon</div>
                        <div className="text-xs text-muted-foreground mt-1">Bulk / contractor pricing — call</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor / bulk callout */}
      <section className="py-16 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="bg-card border rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Licensed Contractors & Distributors</div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Need Bulk or Contractor Pricing?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pricing shown is for retail 5-gallon purchases. Contractors, licensed installers, and distributors receive different pricing and can order in 50-gallon drums. Call us directly for bulk quotes and to be added to our authorized installer network.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 px-8">
                <a href="tel:9542109614">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 954-210-9614
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8">
                <Link href="/distributorships">Distributor Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit full store */}
      <section className="py-12 bg-background border-y">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Purchases are processed securely at our dedicated product store.
          </p>
          <a
            href="https://www.roofprotectproducts.com/products"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm"
          >
            Visit the full store at roofprotectproducts.com
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Not Sure Which Product You Need?</h2>
          <p className="text-xl text-white/80 mb-10">
            Call us for a free over-the-phone consultation. We'll tell you exactly which system makes sense for your roof type and walk you through the ordering process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              <a href="tel:9542109614">
                <Phone className="mr-2 h-5 w-5" />
                Call 954-210-9614
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
