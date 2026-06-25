import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { FlaskConical, ShieldCheck, Leaf, Sun, Award, Microscope, Truck, Users } from "lucide-react";

const process = [
  {
    step: "01",
    icon: FlaskConical,
    title: "Raw Material Selection",
    desc: "Every batch begins with pharmaceutical-grade biocides, elastomeric polymers, and UV-stabilizers sourced from certified suppliers. We test every incoming material before it enters production.",
  },
  {
    step: "02",
    icon: Microscope,
    title: "R&D for Florida's Climate",
    desc: "Our in-house lab tests every formula against South Florida's specific challenges — 90%+ humidity, 180+ UV index days per year, and sustained hurricane-force wind events. No off-the-shelf chemistry.",
  },
  {
    step: "03",
    icon: FlaskConical,
    title: "Controlled Batch Blending",
    desc: "Formulas are blended in temperature-controlled mixing vessels under strict tolerances. Every batch is assigned a unique lot number for full traceability from production to application.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Quality Control Testing",
    desc: "Each production lot is tested for viscosity, adhesion strength, elongation, UV resistance, anti-microbial efficacy, and waterproofing performance before it leaves the facility.",
  },
  {
    step: "05",
    icon: Truck,
    title: "Same-Day South Florida Delivery",
    desc: "Finished product ships directly to job sites across Broward, Miami-Dade, and Palm Beach counties. No warehousing delays — product goes from blending to roof application within 48 hours.",
  },
];

const products = [
  { icon: Leaf, name: "FungalShield", href: "/products/fungalshield", color: "bg-green-100 text-green-700", desc: "Anti-fungal & anti-algae roof coating" },
  { icon: Sun, name: "SmartShield", href: "/products/smartshield", color: "bg-accent/10 text-accent", desc: "Energy-reflective smart coating system" },
  { icon: ShieldCheck, name: "RoofShield", href: "/products/roofshield", color: "bg-primary/10 text-primary", desc: "Flagship all-weather waterproofing membrane" },
];

const stats = [
  { value: "30+", label: "Years of Florida R&D" },
  { value: "3", label: "Proprietary Product Lines" },
  { value: "100%", label: "Made in South Florida" },
  { value: "A+", label: "BBB Rating Since 1994" },
];

export default function Factory() {
  return (
    <div className="w-full">
      <SEO
        title="Our Factory — Made in South Florida Since 1994"
        description="The Roof Store manufactures FungalShield, SmartShield, and RoofShield entirely in South Florida. R&D formulated for Florida's climate, quality-tested in our facility before every shipment."
        canonical="/factory"
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Made in South Florida
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Our Factory</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Every gallon of FungalShield, SmartShield, and RoofShield is formulated, blended, tested, and shipped from our South Florida facility — engineered for the climate we live in.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted">
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
                <div className="text-4xl font-serif font-bold text-primary mb-2">{s.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Why We Manufacture In-House</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most roofing coating companies buy white-label products and resell them. We don't. Since 1994, Storm Shield Paint Systems has operated its own manufacturing facility in South Florida — because Florida's climate demands formulations that no generic supplier can provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Microscope,
                title: "Florida-Specific Formulas",
                desc: "Our chemists have spent 30 years optimizing for South Florida's specific UV intensity, humidity levels, hurricane wind loads, and biological growth patterns. The result is chemistry that off-the-shelf products can't match.",
              },
              {
                icon: ShieldCheck,
                title: "Full Quality Control",
                desc: "Every production batch is tested in-house before it ships. We test viscosity, elongation, adhesion, UV resistance, and biocide efficacy — not just one sample per lot, but statistically validated batch-wide sampling.",
              },
              {
                icon: Award,
                title: "Accountability to You",
                desc: "When you buy from us, the same company that mixed your product is also applying it to your roof. We own the outcome at every stage — that's a level of accountability no distributor model can offer.",
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

          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">From Formula to Your Roof</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 bg-card border rounded-xl p-6 shadow-sm"
              >
                <div className="shrink-0 text-center">
                  <div className="text-3xl font-serif font-bold text-primary/20 leading-none">{step.step}</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Three Product Lines</h2>
            <p className="text-muted-foreground text-lg">Each manufactured in-house for a specific Florida roofing challenge.</p>
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
                  <h3 className="text-xl font-serif font-bold text-primary mb-1 group-hover:text-accent transition-colors">{p.name}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-5">
                <Users className="h-3.5 w-3.5" />
                Distributor & Contractor Program
              </div>
              <h2 className="text-4xl font-serif font-bold mb-4">Interested in Carrying Our Products?</h2>
              <p className="text-white/75 text-lg leading-relaxed">
                We supply FungalShield, SmartShield, and RoofShield to licensed roofing contractors and distributors throughout Florida. Volume pricing, technical training, and marketing support included.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg">
                <Link href="/contact">Contact Us About Distribution</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 h-14 text-lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
