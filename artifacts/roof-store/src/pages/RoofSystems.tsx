import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, ShieldCheck, Zap, Sun, Leaf, DollarSign } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Lightbox, useLightbox, type LightboxImage } from "@/components/Lightbox";

const systems = [
  {
    icon: Leaf,
    name: "FungalShield",
    tagline: "Florida's Anti-Fungal Roof Coating System",
    badge: "RP1 — Anti-Fungal System",
    location: "Broward County, FL",
    size: "Residential",
    color: "bg-green-100 text-green-700",
    description:
      "Engineered specifically for Florida's humid climate, FungalShield is a high-performance anti-fungal, anti-algae roof coating that eliminates and prevents the black streaks and biological growth that plague South Florida roofs. Its active biocide formula bonds to the roof surface, creating a long-lasting barrier against mold, mildew, algae, and fungus — restoring appearance while protecting structural integrity.",
    features: [
      "Active biocide formula inhibits algae, mold, and fungal growth",
      "Eliminates black streaking caused by biological organisms",
      "Bonds seamlessly to tile, metal, and flat roof surfaces",
      "UV-stable formula maintains protection through Florida heat",
      "Extends roof life by halting biological deterioration",
    ],
    gallery: [
      { src: "/images/projects/flat-cement-extra-1.png", alt: "Spanish clay tile roof treated with FungalShield anti-fungal coating" },
      { src: "/images/projects/flat-cement-extra-2.png", alt: "Spanish cement tile roof restored with FungalShield anti-fungal system" },
    ],
  },
  {
    icon: Sun,
    name: "SmartShield",
    tagline: "3,000+ Colors — The Darker the Color, the More It Reflects",
    badge: "RP2 — Energy-Reflective Coating",
    location: "South Florida",
    size: "Residential",
    color: "bg-accent/10 text-accent",
    description:
      "SmartShield is our most popular system and the most innovative protective color roof coating ever developed. In collaboration with BASF — the world's largest chemical producer — our team engineered Cool Pigment Technology that increases Total Solar Reflectance (TSR) by 32% even at the darkest black. Over 3,000 color options, FP&L-confirmed energy savings, and an exclusive formula not available in any retail store. The darker the color, the more it reflects.",
    features: [
      "3,000+ color options — full custom palette, any shade including dark charcoal & brown",
      "The darker the color, the MORE it reflects — BASF Cool Pigment Technology, TSR +32%",
      "Exclusive formula — not sold in Home Depot, Lowe's, or any retail store",
      "FP&L (Florida Power & Light) confirmed cooling cost savings",
      "Waterproof & guaranteed mildew-proof — 5× thicker than standard roof paint",
    ],
    gallery: [
      { src: "/images/projects/spanish-tile-extra-3.png", alt: "Composite tile roof coated with SmartShield color roof system" },
      { src: "/images/projects/spanish-tile-extra-4.png", alt: "Composite tile roof restoration with SmartShield cool pigment coating" },
      { src: "/images/projects/spanish-tile-extra-1.png", alt: "Composite tile roof close-up after SmartShield application" },
      { src: "/images/projects/spanish-tile-extra-2.png", alt: "Composite tile roof home exterior restored with SmartShield" },
    ],
  },
  {
    icon: ShieldCheck,
    name: "RoofShield",
    tagline: "World's Only TAS-106 Dade County Uplift Rated Coating",
    badge: "RP3 — Hurricane Protection Membrane",
    location: "Davie, FL",
    size: "Residential",
    color: "bg-primary/10 text-primary",
    worldsOnly: true,
    description:
      "RoofShield is the world's only liquid roof coating with an independent Dade County TAS-106 Uplift Pull Test certification — the exact same test required for new tile roof installations in Florida. Tested on real Spanish tile roofs, it mechanically bonds every tile to the substrate, delivering 5× the wind uplift resistance of a brand-new tile roof at half the cost. One 100% seamless liquid rubber membrane. No joints. No seams. No weak points. Lifetime Warranty — transferable and renewable.",
    features: [
      "World's ONLY TAS-106 Dade County Uplift Pull Test certified roof coating",
      "Tested on real Spanish & concrete tile — adds true tile attachment to substrate",
      "5× stronger in wind uplift than a new tile roof installation",
      "135+ MPH documented — zero tiles lost on treated roofs in real hurricane events",
      "100% seamless waterproof rubber membrane — stops leaks permanently",
      "Lifetime Warranty — maintenance-free, transferable & renewable",
    ],
    gallery: [
      { src: "/images/projects/clay-tile-before.png", alt: "Clay tile roof before RoofShield waterproof coating" },
      { src: "/images/projects/clay-tile-after.png", alt: "Clay tile roof after RoofShield waterproof coating" },
      { src: "/images/projects/flat-cement-before.png", alt: "Flat cement roof before RoofShield waterproof coating" },
      { src: "/images/projects/flat-cement-after.png", alt: "Flat cement roof after RoofShield waterproof coating" },
      { src: "/images/projects/spanish-tile-before.png", alt: "Spanish tile roof before RoofShield waterproof coating" },
      { src: "/images/projects/spanish-tile-after.png", alt: "Spanish tile roof after RoofShield waterproof coating" },
      { src: "/images/projects/flat-deck-before-2.png", alt: "Flat deck roof with water damage before RoofShield waterproof coating" },
      { src: "/images/projects/flat-deck-after-2.png", alt: "Flat deck roof fully restored after RoofShield waterproof coating" },
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
      description: "Three proprietary roof coating systems engineered for Florida's climate.",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FungalShield (RP1)", url: `${BASE}/products/fungalshield`, description: "Anti-fungal & anti-algae roof coating — eliminates black streaking on Florida tile roofs." },
        { "@type": "ListItem", position: 2, name: "SmartShield (RP2)", url: `${BASE}/products/smartshield`, description: "Tintable waterproof & weatherproof surface coating for tile roofs. 3,000+ colors. BASF Cool Pigment Technology." },
        { "@type": "ListItem", position: 3, name: "RoofShield (RP3)", url: `${BASE}/products/roofshield`, description: "Multi-layer monolithic hurricane protection system — fills every gap between tiles, sealed solid." },
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
        title="FungalShield, SmartShield & RoofShield — Roof Systems for Florida"
        description="Explore our three branded roof systems: FungalShield anti-fungal coating, SmartShield energy-reflective system, and RoofShield all-weather waterproofing membrane — engineered for Florida's climate."
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
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Systems</h1>
            <p className="text-xl text-white/80">
              Three proprietary systems. Engineered in South Florida. Built to outperform and outlast.
            </p>
          </motion.div>
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
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    {system.beforeSrc && (
                      <BeforeAfterSlider
                        beforeSrc={system.beforeSrc}
                        afterSrc={system.afterSrc!}
                        beforeLabel={system.beforeLabel}
                        afterLabel={system.afterLabel}
                        beforeAlt={`${system.name} — Before`}
                        afterAlt={`${system.name} — After`}
                      />
                    )}
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
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
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

                {system.gallery && system.gallery.length > 0 && (
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
