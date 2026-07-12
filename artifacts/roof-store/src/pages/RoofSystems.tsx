import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, ShieldCheck, Zap, Sun, Leaf, DollarSign } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Lightbox, useLightbox, type LightboxImage } from "@/components/Lightbox";

interface RoofSystem {
  icon: typeof Leaf;
  name: string;
  tagline: string;
  badge: string;
  location: string;
  size: string;
  color: string;
  worldsOnly?: boolean;
  description: string;
  features: string[];
  gallery?: { src: string; alt: string }[];
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
  extraBeforeSrc?: string;
  extraAfterSrc?: string;
  extraBeforeLabel?: string;
  extraAfterLabel?: string;
  extraBeforeSrc2?: string;
  extraAfterSrc2?: string;
  extraBeforeLabel2?: string;
  extraAfterLabel2?: string;
}

const systems: RoofSystem[] = [
  {
    icon: Leaf,
    name: "Fungal Shield",
    tagline: "Florida's Anti-Fungal Roof Coating System",
    badge: "RP1 — Anti-Fungal System",
    location: "Broward County, FL",
    size: "Residential",
    color: "bg-green-100 text-green-700",
    description:
      "Engineered specifically for Florida's humid climate, Fungal Shield is a high-performance anti-fungal, anti-algae roof coating that eliminates and prevents the black streaks and biological growth that plague South Florida roofs. Its active biocide formula, built on a clear elastomeric base, bonds to the roof surface, creating a long-lasting barrier against mold, mildew, algae, and fungus — restoring appearance while protecting structural integrity.",
    features: [
      "Active biocide formula inhibits algae, mold, and fungal growth",
      "Eliminates black streaking caused by biological organisms",
      "Bonds seamlessly to tile, metal, and flat roof surfaces",
      "UV-stable formula maintains protection through Florida heat",
      "Extends roof life by halting biological deterioration",
    ],
    gallery: [
      { src: "/images/projects/flat-cement-extra-1.png", alt: "Spanish clay tile roof treated with Fungal Shield anti-fungal coating" },
      { src: "/images/projects/flat-cement-extra-2.png", alt: "Spanish cement tile roof restored with Fungal Shield anti-fungal system" },
    ],
  },
  {
    icon: Sun,
    name: "Smart Shield",
    tagline: "3,000+ Colors — The Darker the Color, the More It Reflects",
    badge: "RP2 — Energy-Reflective Coating",
    location: "South Florida",
    size: "Residential",
    color: "bg-accent/10 text-accent",
    description:
      "Smart Shield is our most popular system and the most innovative protective color roof coating ever developed. In collaboration with BASF — the world's largest chemical producer — RoofProtect engineered Cool Pigment Technology that increases Total Solar Reflectance (TSR) by 32% even at the darkest black. Typically built on an elastomeric base for darker tile colors, the base can also be formulated as polyurethane, or blended with ceramic for a flatter, less-reflective look on non-reflective tile roofs and certain flat roofs. Over 3,000 color options, FP&L-confirmed energy savings, and an exclusive formula not available in any retail store. The darker the color, the more it reflects.",
    features: [
      "3,000+ color options — full custom palette, any shade including dark charcoal & brown",
      "The darker the color, the MORE it reflects — BASF Cool Pigment Technology, TSR +32%",
      "Exclusive formula — not sold in Home Depot, Lowe's, or any retail store",
      "FP&L (Florida Power & Light) confirmed cooling cost savings",
      "Waterproof & guaranteed mildew-proof — 5× thicker than standard roof paint",
    ],
    gallery: [
      { src: "/api/storage/public-objects/smartshield/ss-tile-repair-before.png", alt: "Broken roof tile before Smart Shield repair — open valley damage" },
      { src: "/api/storage/public-objects/smartshield/ss-tile-repair-step2.png", alt: "Roof tile repair in progress — fiber coat pointing applied" },
      { src: "/api/storage/public-objects/smartshield/ss-tile-repair-step3.png", alt: "Roof tile repair complete — residue wiped, surface ready for coating" },
      { src: "/api/storage/public-objects/smartshield/ss-softwash-truck.jpg", alt: "Chemical soft wash truck with water tank used for roof cleaning in Florida" },
      { src: "/api/storage/public-objects/smartshield/ss-softwash-pressure.jpg", alt: "Soft wash truck and pressure cleaning equipment on Florida roofing job" },
      { src: "/api/storage/public-objects/smartshield/ss-softwash-tool.jpg", alt: "Soft wash cleaning tool applied to tile roof surface" },
      { src: "/api/storage/public-objects/smartshield/ss-softwash-cleaning.jpg", alt: "Technician performing chemical soft wash on tile roof" },
      { src: "/api/storage/public-objects/smartshield/ss-open-valleys.png", alt: "Adding waterproofing to open valleys on tile roof — Smart Shield prep step" },
      { src: "/api/storage/public-objects/smartshield/ss-ridge-caps.png", alt: "Ridge caps polyurethaned and pointings fiber coated on tile roof — Smart Shield prep" },
      { src: "/images/projects/spanish-tile-extra-3.png", alt: "Completed Smart Shield project — composite tile roof color system" },
      { src: "/images/projects/spanish-tile-extra-4.png", alt: "Completed Smart Shield project — cool pigment restored tile roof" },
    ],
  },
  {
    icon: ShieldCheck,
    name: "Roof Shield",
    tagline: "The Original Liquid Applied Rubber Roof Shield System",
    badge: "RP3 — Hurricane Protection Membrane",
    location: "Davie, FL",
    size: "Residential",
    color: "bg-primary/10 text-primary",
    worldsOnly: true,
    description:
      "Roof Shield — The Original Liquid Applied Rubber Roof Shield System — is the world's only liquid roof coating with an independent Dade County TAS-106 Uplift Pull Test certification — the exact same test required for new tile roof installations in Florida. Typically formulated with a proprietary premium silicone base ingredient (interchangeable with elastomeric or polyurethane depending on the project), it mechanically bonds every tile to the substrate, delivering 5× the wind uplift resistance of a brand-new tile roof at half the cost. One 100% seamless membrane. No joints. No seams. No weak points. Lifetime Warranty — transferable and renewable.",
    features: [
      "World's ONLY TAS-106 Dade County Uplift Pull Test certified roof coating",
      "Tested on real Spanish & concrete tile — adds true tile attachment to substrate",
      "5× stronger in wind uplift than a new tile roof installation",
      "135+ MPH documented — zero tiles lost on treated roofs in real hurricane events",
      "100% seamless waterproof membrane — stops leaks permanently, including on flat roofs with standing water",
      "Lifetime Warranty — maintenance-free, transferable & renewable",
    ],
    gallery: [
      { src: "/images/projects/clay-tile-before.png", alt: "Composite clay tile roof before Roof Shield waterproof coating" },
      { src: "/images/projects/clay-tile-after.png", alt: "Composite clay tile roof after Roof Shield waterproof coating" },
      { src: "/images/projects/flat-cement-before.png", alt: "Flat cement tile roof before Roof Shield waterproof coating" },
      { src: "/images/projects/flat-cement-after.png", alt: "Flat cement tile roof after Roof Shield waterproof coating" },
      { src: "/images/projects/spanish-tile-before.png", alt: "Composite Spanish tile roof before Roof Shield waterproof coating" },
      { src: "/images/projects/spanish-tile-after.png", alt: "Composite Spanish tile roof after Roof Shield waterproof coating" },
      { src: "/images/projects/flat-deck-before-2.png", alt: "Commercial built-up flat deck roof before Roof Shield waterproof coating" },
      { src: "/images/projects/flat-deck-after-2.png", alt: "Commercial built-up flat deck roof fully restored after Roof Shield waterproof coating" },
      { src: "/api/storage/public-objects/roofshield/rs-flat-seams-before.png", alt: "Flat roof retrofit — all seams taped to create a monolithic seamless system" },
      { src: "/api/storage/public-objects/roofshield/rs-flat-coated-after.png", alt: "Flat roof after Roof Shield retrofit — fully coated monolithic seamless waterproof system completed" },
    ],
  },
];

const BASE = "https://www.theroofstore.net";

const allGalleryImages: LightboxImage[] = systems.flatMap(
  (s) => (s.gallery ?? []).map((img) => ({ src: img.src, alt: img.alt }))
);

function galleryOffset(systemIndex: number): number {
  let offset = 0;
  for (let i = 0; i < systemIndex; i++) {
    offset += systems[i].gallery?.length ?? 0;
  }
  return offset;
}

export default function RoofSystems() {
  const lb = useLightbox(allGalleryImages);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "The Roof Store — Roof Coating Systems",
      url: `${BASE}/roof-systems`,
      description: "Three proprietary roof coating systems — Fungal Shield, Smart Shield, Roof Shield — built from products manufactured in-house by RoofProtect Products in Davie, FL. Formulation (elastomeric, polyurethane, or silicone) is specified per roof after manufacturer's inspection. Up to 50-year silicone product warranty available.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fungal Shield (RP1)", url: `${BASE}/products/fungalshield`, description: "Anti-fungal & anti-algae roof coating — eliminates black streaking on Florida tile roofs." },
        { "@type": "ListItem", position: 2, name: "Smart Shield (RP2)", url: `${BASE}/products/smartshield`, description: "Tintable waterproof & weatherproof surface coating for tile roofs. 3,000+ colors. BASF Cool Pigment Technology." },
        { "@type": "ListItem", position: 3, name: "Roof Shield (RP3)", url: `${BASE}/products/roofshield`, description: "Multi-layer monolithic hurricane protection system — fills every gap between tiles, sealed solid." },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Roof Systems", item: `${BASE}/roof-systems` },
      ],
    },
  ];

  return (
    <>
    <div className="w-full">
      <SEO
        title="Roof Coating Systems Florida | The Roof Store"
        description="FungalShield, SmartShield & RoofShield are The Roof Store's proprietary roof coating systems for tile, flat, shingle, and metal roofs, professionally installed by our licensed crew for residential and commercial properties in Florida. Built from elastomeric, polyurethane & silicone products manufactured in-house by RoofProtect. Up to 50-year silicone warranty. Davie, FL — 954-210-9614."
        canonical="/roof-systems"
        ogImage="https://www.theroofstore.net/images/roofshield-product.png"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              The Original Since 1994
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Coating Systems in South Florida — Tile, Flat &amp; Metal Roofs</h1>
            <p className="text-xl text-white/80">
              Three proprietary systems. Engineered in South Florida. Built to outperform and outlast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulation grades — systems vs. products */}
      <section className="py-16 bg-muted border-b border-border">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Manufacturer-Specified — Not Off the Shelf
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              The System Defines the Goal. The Formulation Is Specified Per Roof.
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Fungal Shield, Smart Shield, and Roof Shield are application systems — each engineered for a specific
              protection goal. The actual coating product used within each system is determined <em>after</em> our
              manufacturer's inspection, based on the roof's condition, surface material, the client's goals, and
              realistic budget. RoofProtect manufactures three formulation grades — and not every roof qualifies for every one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                grade: "Grade 1",
                name: "Elastomeric",
                summary: "Proven entry-level formulation with strong performance across a wide range of residential roofs. Excellent for flexibility, adhesion, and weatherproofing. Best-value option for qualifying surfaces.",
                warranty: "Standard warranty",
                best: "Tile, flat, and metal roofs in good base condition",
              },
              {
                grade: "Grade 2",
                name: "Polyurethane",
                summary: "Stronger and more durable than elastomeric, with a more robust long-term warranty. Bridges the gap between elastomeric and silicone — ideal when you want silicone-grade performance at a lower investment.",
                warranty: "Enhanced warranty",
                best: "Roofs requiring greater durability or with moderate weathering",
              },
              {
                grade: "Grade 3",
                name: "Silicone",
                summary: "The most durable coating ingredient available. Rated for ponding water — the only formulation we recommend for commercial flat roofs holding more than ½ inch of standing water. Carries the highest product warranty in our line.",
                warranty: "Up to 50-year product warranty",
                best: "Commercial flat roofs, negative-pitch surfaces, ponding water",
                highlight: true,
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl border p-6 ${f.highlight ? "border-accent bg-accent/5" : "border-border bg-card"}`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${f.highlight ? "text-accent" : "text-muted-foreground"}`}>
                  {f.grade}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{f.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.summary}</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${f.highlight ? "text-accent" : "text-muted-foreground"}`} />
                    <span className={f.highlight ? "font-bold text-accent" : "text-muted-foreground"}>{f.warranty}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{f.best}</span>
                  </div>
                </div>
                {f.name === "Silicone" && (
                  <Link
                    href="/silicone-roof-coating"
                    className="inline-block mt-4 text-xs font-semibold text-accent hover:underline"
                  >
                    Learn more about silicone roof coating →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
            Formulation is determined by our licensed manufacturer's inspection — not every surface qualifies for
            every product. We recommend only what is realistic and best for the roof, the client's goals, and the budget.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="space-y-24">
            {systems.map((system, i) => (
              <div key={i}>
                {i > 0 && <div className="border-t border-border mb-24" />}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={i % 2 === 1 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                    {system.beforeSrc ? (
                      <>
                        <BeforeAfterSlider
                          beforeSrc={system.beforeSrc}
                          afterSrc={system.afterSrc!}
                          beforeLabel={system.beforeLabel}
                          afterLabel={system.afterLabel}
                          beforeAlt={`${system.name} — Before`}
                          afterAlt={`${system.name} — After`}
                        />
                        {system.extraBeforeSrc && (
                          <div className="mt-6">
                            <BeforeAfterSlider
                              beforeSrc={system.extraBeforeSrc}
                              afterSrc={system.extraAfterSrc!}
                              beforeLabel={system.extraBeforeLabel}
                              afterLabel={system.extraAfterLabel}
                              beforeAlt={`${system.name} — Before (2)`}
                              afterAlt={`${system.name} — After (2)`}
                            />
                          </div>
                        )}
                        {system.extraBeforeSrc2 && (
                          <div className="mt-6">
                            <BeforeAfterSlider
                              beforeSrc={system.extraBeforeSrc2}
                              afterSrc={system.extraAfterSrc2!}
                              beforeLabel={system.extraBeforeLabel2}
                              afterLabel={system.extraAfterLabel2}
                              beforeAlt={`${system.name} — Before (3)`}
                              afterAlt={`${system.name} — After (3)`}
                            />
                          </div>
                        )}
                      </>
                    ) : system.gallery && system.gallery.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {system.gallery.map((img, idx) => (
                          <div
                            key={idx}
                            className="overflow-hidden rounded-xl aspect-[4/3] bg-muted relative group cursor-zoom-in"
                            onClick={() => lb.open(galleryOffset(i) + idx)}
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              title={`${img.alt} — ${system.name} | The Roof Store`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full transition-opacity duration-300">Click to enlarge</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className={i % 2 === 1 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                    {system.worldsOnly && (
                      <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        ★ World's Only TAS-106 Dade County Rated Coating
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                      <MapPin className="h-3.5 w-3.5" />
                      {system.location} · {system.size}
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-2">{system.name}</h2>
                    <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">{system.tagline}</div>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{system.description}</p>
                    <ul className="space-y-2 mb-6">
                      {system.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-foreground">
                          <Zap className="h-4 w-4 text-accent shrink-0 mt-1" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-white" size="lg">
                      <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                  </div>
                </motion.div>

                {system.beforeSrc && system.gallery && system.gallery.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12"
                  >
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">More Photos — {system.name}</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {system.gallery.map((img, gi) => (
                        <div
                          key={gi}
                          className="overflow-hidden rounded-lg shadow-sm aspect-[4/3] bg-muted relative group cursor-zoom-in"
                          onClick={() => lb.open(galleryOffset(i) + gi)}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            title={`${img.alt} — ${system.name} | The Roof Store`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full transition-opacity duration-300">Click to enlarge</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Not Sure Which System is Right for You?</h2>
          <p className="text-xl text-white/80 mb-10">Our experts will inspect your roof and recommend the perfect solution for your specific needs and budget.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Inspection</Link>
          </Button>
        </div>
      </section>
    </div>
    <Lightbox images={allGalleryImages} index={lb.activeIndex} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </>
  );
}
