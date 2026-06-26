import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Leaf, Sun, ShieldCheck, Award, Users, MapPin } from "lucide-react";

const BASE = "https://www.theroofstore.net";

const factoryPhotos = [
  { src: `${BASE}/images/factory/1.jpg`, alt: "The Roof Store manufacturing facility" },
  { src: `${BASE}/images/factory/2.jpg`, alt: "Roof coating production equipment" },
  { src: `${BASE}/images/factory/3.jpg`, alt: "Liquid rubber blending tanks" },
  { src: `${BASE}/images/factory/4.jpg`, alt: "Factory production floor" },
  { src: `${BASE}/images/factory/5.jpg`, alt: "Batch mixing process" },
  { src: `${BASE}/images/factory/7.jpg`, alt: "Product storage and finishing" },
  { src: `${BASE}/images/factory/10.jpg`, alt: "Quality control lab" },
  { src: `${BASE}/images/factory/12.jpg`, alt: "Roof coating inventory" },
  { src: `${BASE}/images/factory/13.jpg`, alt: "Manufacturing process" },
  { src: `${BASE}/images/factory/14.jpg`, alt: "Factory operations" },
];

const products = [
  { icon: Leaf, name: "FungalShield", code: "RP1", href: "/products/fungalshield", color: "bg-green-100 text-green-700", desc: "Anti-fungal & anti-algae roof coating" },
  { icon: Sun, name: "SmartShield", code: "RP2", href: "/products/smartshield", color: "bg-accent/10 text-accent", desc: "Energy-reflective smart coating system — our most popular" },
  { icon: ShieldCheck, name: "RoofShield", code: "RP3", href: "/products/roofshield", color: "bg-primary/10 text-primary", desc: "Flagship all-weather waterproofing membrane" },
];

const stats = [
  { value: "30+", label: "Years of South Florida R&D" },
  { value: "135+ MPH", label: "Documented Wind Resistance" },
  { value: "5×", label: "Stronger Than a New Roof" },
  { value: "A+", label: "BBB Rating Since 1994" },
];

export default function Factory() {
  return (
    <div className="w-full">
      <SEO
        title="Our Factory — Manufactured in Davie, Florida Since 1994"
        description="The Roof Store manufactures FungalShield, SmartShield, and RoofShield at our Davie, Florida facility. The only TAS-106 Dade County Pull Test Rated roof coating system worldwide. 135+ MPH wind resistance documented."
        canonical="/factory"
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Made in Davie, Florida
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Our Factory</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Through proprietary manufacturing technology, every gallon of FungalShield, SmartShield, and RoofShield is formulated as 100% liquid rubber — no water, fillers, thickeners, or extenders. Engineered in South Florida for South Florida.
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
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Inside Our Facility</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              "The Original Liquid Applied Rubber Roof Shield System" — trademarked and manufactured exclusively at our South Florida facility. The only Dade County TAS-106 Uplift Pull Test Rated roof coating system in the world. Certified, documented, and proven through real hurricane conditions.
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
                className={`overflow-hidden rounded-xl bg-muted ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
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
                title: "Contractor + Manufacturer = Accountability",
                desc: "We don't just make it — we install it. The Roof Store is our exclusive contracting division, A+ BBB Rated since 1994. The same company that formulated your product applies it to your roof. Full accountability, zero gap.",
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
                The original RoofShield System has been independently tested and documented to be five times stronger in wind uplift resistance than a standard new tile roof installation — at half the cost and a fraction of the installation time.
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
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Three Products — Manufactured Here</h2>
            <p className="text-muted-foreground text-lg">RP1, RP2, and RP3 — each formulated and blended on-site in Davie, Florida.</p>
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
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Carry Our Products</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We supply FungalShield, SmartShield, and RoofShield to licensed contractors and distributors throughout Florida, nationally, and internationally. Volume pricing, technical training, and full marketing support included.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg">
                <Link href="/contact">Contact Us About Distribution</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full h-14 text-lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
