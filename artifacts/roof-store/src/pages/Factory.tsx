import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Leaf, Sun, ShieldCheck, Award, Users, MapPin } from "lucide-react";
import { Lightbox, useLightbox } from "@/components/Lightbox";

const BASE = "https://www.theroofstore.net";

const factoryPhotos = [
  { src: "/images/factory/exterior.png", alt: "The Roof Store manufacturing facility exterior — Davie Florida roof coating manufacturer since 1994", title: "The Roof Store — Roof Coating Manufacturer Davie FL" },
  { src: "/images/factory/exterior2.png", alt: "The Roof Store MFG building exterior with team — roof coating manufacturer Davie Florida", title: "The Roof Store MFG — Davie Florida Manufacturing Facility" },
  { src: "/images/factory/exterior3.png", alt: "The Roof Store MFG sign — The Original Liquid Applied Rubber Roof Shield System, Davie Florida", title: "The Roof Store MFG Sign — Original Liquid Applied Rubber Roof Shield System" },
  { src: "/images/factory/4.jpg", alt: "Roof coating factory production floor — The Roof Store Davie Florida manufacturer", title: "Factory Production Floor — The Roof Store" },
  { src: "/images/factory/5.jpg", alt: "Batch mixing process for liquid rubber roof coating system at The Roof Store", title: "Roof Coating Batch Mixing — The Roof Store" },
  { src: "/images/factory/7.jpg", alt: "Roof coating product storage and finishing at South Florida manufacturing facility", title: "Roof Coating Storage — The Roof Store Factory" },
  { src: "/images/factory/10.jpg", alt: "Quality control lab testing roof coating formulas at The Roof Store Davie FL", title: "Quality Control Lab — The Roof Store Roof Coatings" },
  { src: "/images/factory/12.jpg", alt: "Fungal Shield Smart Shield Roof Shield inventory at The Roof Store manufacturing plant", title: "Roof Coating Inventory — The Roof Store" },
  { src: "/images/factory/13.jpg", alt: "Liquid rubber roof coating manufacturing process at The Roof Store South Florida", title: "Manufacturing Process — The Roof Store Davie FL" },
  { src: "/images/factory/14.jpg", alt: "Factory operations at The Roof Store roof coating manufacturer in Davie Florida", title: "Factory Operations — The Roof Store" },
  { src: "/images/factory/15.jpg", alt: "Technician operating liquid rubber blending tank at The Roof Store coating facility in Davie Florida", title: "Liquid Rubber Blending — The Roof Store Roof Coating Manufacturer" },
  { src: "/images/factory/interior1.png", alt: "The Roof Store product showroom and supply area — roof coating materials and accessories in Davie Florida", title: "The Roof Store Showroom — Roof Coating Supplies Davie FL" },
  { src: "/images/factory/interior2.png", alt: "The Roof Store owner demonstrating roof coating fabric membrane at Davie Florida manufacturing facility", title: "Roof Coating Membrane Demo — The Roof Store Manufacturer" },
  { src: "/images/factory/mixing.png", alt: "Custom color tinting and mixing roof coating at The Roof Store manufacturing facility in Davie Florida", title: "Roof Coating Color Mixing — The Roof Store Manufacturer Davie FL" },
  { src: "/images/factory/mixing-tank.png", alt: "Worker operating large liquid rubber blending tank at The Roof Store roof coating factory in Davie Florida", title: "Liquid Rubber Blending Tank — The Roof Store Manufacturing Davie FL" },
];

const products = [
  { icon: Leaf, name: "Fungal Shield", code: "RP1", href: "/products/fungalshield", color: "bg-green-100 text-green-700", desc: "Anti-fungal & anti-algae roof coating" },
  { icon: Sun, name: "Smart Shield", code: "RP2", href: "/products/smartshield", color: "bg-accent/10 text-accent", desc: "Energy-reflective smart coating system — our most popular" },
  { icon: ShieldCheck, name: "Roof Shield", code: "RP3", href: "/products/roofshield", color: "bg-primary/10 text-primary", desc: "Flagship all-weather waterproofing membrane" },
];

const stats = [
  { value: "30+", label: "Years of South Florida R&D" },
  { value: "135+ MPH", label: "Documented Wind Resistance" },
  { value: "5×", label: "Stronger Than a New Roof" },
  { value: "A+", label: "BBB Rating Since 1994" },
];

export default function Factory() {
  const lb = useLightbox(factoryPhotos);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "RoofProtect Products — Manufacturing Facility",
      url: `${BASE}/factory`,
      telephone: "+19542109614",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Davie",
        addressRegion: "FL",
        postalCode: "33328",
        addressCountry: "US",
      },
      description: "RoofProtect Products manufactures the liquid rubber coating materials used in the Fungal Shield, Smart Shield, and Roof Shield systems sold by The Roof Store, at our Davie, Florida facility since 1994. The only TAS-106 Dade County Pull Test Rated roof coating system worldwide.",
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fungal Shield (RP1)", description: "Anti-fungal roof coating system — materials manufactured in-house by RoofProtect Products in Davie, FL" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Smart Shield (RP2)", description: "Tintable waterproof tile roof coating system — materials manufactured in-house by RoofProtect Products in Davie, FL" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Roof Shield (RP3)", description: "Monolithic hurricane protection roof system — materials manufactured in-house by RoofProtect Products in Davie, FL" } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Factory", item: `${BASE}/factory` },
      ],
    },
  ];

  return (
    <>
    <div className="w-full">
      <SEO
        title="Our In-House Licensed Manufacturing Division — RoofProtect Products, Davie, Florida"
        description="RoofProtect Products manufactures the liquid rubber coating materials used in the Fungal Shield, Smart Shield, and Roof Shield systems sold by The Roof Store, at our Davie, Florida facility. The only TAS-106 Dade County Pull Test Rated roof coating system worldwide. 135+ MPH wind resistance documented."
        canonical="/factory"
        ogImage={`${BASE}/images/factory/1.jpg`}
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL", position: "26.0765;-80.2521" }}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Manufactured by RoofProtect Products — Davie, Florida
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Our In-House Licensed Manufacturing Division</h1>
            <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/40 rounded-lg px-6 py-3 mb-6 text-sm font-semibold text-accent">
              🛠️ Don't worry — we also install the products we sell.&nbsp;
              <span className="font-normal text-white/70">Licensed crew, same company.</span>
            </div>
            <div className="max-w-lg mx-auto mb-6">
              <img
                src="/images/roof-replacement-alternative-truck.png"
                alt="The Roof Store licensed installation crew — truck and trailer wrap"
                className="w-full rounded-xl shadow-2xl border border-white/10"
              />
            </div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Through proprietary manufacturing technology, RoofProtect Products formulates every gallon of material used in the Fungal Shield, Smart Shield, and Roof Shield systems as 100% liquid rubber — no water, fillers, thickeners, or extenders. Engineered in South Florida for South Florida.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{s.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-5">
              <MapPin className="h-3.5 w-3.5" />
              4801 South University Drive, Davie FL 33328
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Inside the Facility</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              "The Original Liquid Applied Rubber Roof Shield System" — trademarked, with all underlying materials manufactured exclusively by RoofProtect Products at this South Florida facility. The only Dade County TAS-106 Uplift Pull Test Rated roof coating system in the world. Certified, documented, and proven through real hurricane conditions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-20">
            {factoryPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-xl bg-muted cursor-zoom-in relative group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                onClick={() => lb.open(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={e => {
                    const el = e.currentTarget.closest(".overflow-hidden") as HTMLElement | null;
                    if (el) el.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full transition-opacity duration-300">Click to enlarge</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "World's Only TAS-106 Rated Roof Coating",
                desc: "The Roof Shield System is the only Dade County TAS-106 Uplift Pull Test Resistance Rated roof coating system worldwide — updated 2023 and still standing 16 years later. Tested to withstand 135+ MPH documented hurricane-force winds.",
              },
              {
                icon: ShieldCheck,
                title: "100% Pure Liquid Rubber Formula",
                desc: "Our proprietary manufacturing process produces true liquid rubber acrylic — 100% without water, fillers, thickeners, or extenders. This is why our elongation, adhesion, and waterproofing performance is unlike anything else on the market.",
              },
              {
                icon: Users,
                title: "Manufacturer + Retailer + Installer = Accountability",
                desc: "RoofProtect Products manufactures the materials, The Roof Store sells the systems (A+ BBB Rated since 1994), and our exclusive licensed contracting partner, Storm Shield Paint Systems Inc., can install it on your roof. One connected family of companies — full accountability, zero gap.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-xl p-8 shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-5">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-accent mb-4">The Proof</div>
              <h2 className="text-4xl font-serif font-bold mb-4">5× Stronger Than a New Roof at ½ the Cost</h2>
              <p className="text-white/75 text-lg leading-relaxed mb-4">
                The original Roof Shield System has been independently tested and documented to be five times stronger in wind uplift resistance than a standard new tile roof installation — at half the cost and a fraction of the installation time.
              </p>
              <p className="text-white/75 leading-relaxed">
                Our documented projects include roofs that survived real Category-force hurricane winds without a single tile displaced. Not simulated. Not theoretical. Real roofs, real storms.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-accent font-bold text-sm uppercase tracking-wide mb-1">TAS-106 Pull Test</div>
                <div className="text-white font-bold text-lg">Dade County Approved — Only Rated Coating Worldwide</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-accent font-bold text-sm uppercase tracking-wide mb-1">Wind Rating</div>
                <div className="text-white font-bold text-lg">135+ MPH — Documented Real Hurricane Performance</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-accent font-bold text-sm uppercase tracking-wide mb-1">Certification</div>
                <div className="text-white font-bold text-lg">Additional Roof Life — up to 10 Years on 50+ Y/O Roofs</div>
              </div>
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white h-12">
                <a href="https://www.theroofstore.net/uplift-test.php" target="_blank" rel="noopener noreferrer">
                  See the Uplift Test Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Three Systems — Materials Manufactured Here</h2>
            <p className="text-muted-foreground text-lg">RP1, RP2, and RP3 — the materials behind each system are formulated and blended on-site by RoofProtect Products in Davie, Florida.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={p.href} className="block bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 ${p.color}`}>
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{p.code}</div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-1 group-hover:text-accent transition-colors">{p.name}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-5">
                <Users className="h-3.5 w-3.5" />
                Distributor & Contractor Program
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Become a Distributor</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We supply Fungal Shield, Smart Shield, and Roof Shield to licensed contractors and distributors throughout Florida, nationally, and internationally. Volume pricing, technical training, and full marketing support included.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                County, state, and national territories available. Installer distributorships from $25,000. Sales manager packages negotiable.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-bold">
                <Link href="/distributorships">View Distributorship Opportunities</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full h-14 text-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Lightbox images={factoryPhotos} index={lb.activeIndex} onClose={lb.close} onPrev={lb.prev} onNext={lb.next} />
    </>
  );
}
