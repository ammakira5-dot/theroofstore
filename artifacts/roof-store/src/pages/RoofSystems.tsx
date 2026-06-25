import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplets, ShieldCheck, Zap, Sun, ThumbsUp, Leaf } from "lucide-react";
import { SEO } from "@/components/SEO";

const systems = [
  {
    icon: Leaf,
    name: "FungalShield",
    tagline: "Florida's Anti-Fungal Roof Coating System",
    description:
      "Engineered specifically for Florida's humid climate, FungalShield is a high-performance anti-fungal, anti-algae roof coating that eliminates and prevents the black streaks and biological growth that plague South Florida roofs. Its active biocide formula bonds to the roof surface, creating a long-lasting barrier against mold, mildew, algae, and fungus — restoring appearance while protecting structural integrity.",
    features: [
      "Active biocide formula inhibits algae, mold, and fungal growth",
      "Eliminates black streaking caused by biological organisms",
      "Bonds seamlessly to tile, metal, and flat roof surfaces",
      "UV-stable formula maintains protection through Florida heat",
      "Extends roof life by halting biological deterioration",
    ],
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Sun,
    name: "SmartShield",
    tagline: "Energy-Reflective Smart Coating System",
    description:
      "SmartShield is our advanced energy-reflective roof coating engineered to dramatically reduce heat transfer into your home. Its proprietary heat-reflective technology bounces solar radiation away from the roof surface, lowering attic temperatures significantly and reducing cooling costs year-round. Ideal for Florida homeowners looking to cut energy bills while extending the life of their roof.",
    features: [
      "Reflects up to 90% of solar radiation",
      "Reduces attic temperatures by up to 40°F",
      "Lowers cooling costs by 20–30% annually",
      "ENERGY STAR cool roof qualified",
      "Compatible with tile, metal, and flat roof surfaces",
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: ShieldCheck,
    name: "RoofShield",
    tagline: "Flagship All-Weather Waterproofing System",
    description:
      "RoofShield is our flagship all-weather roof membrane system — the result of over 30 years of Florida roofing expertise. It creates a 100% seamless, waterproof membrane that withstands hurricane-force winds, tropical storms, and the relentless Florida sun. Whether your roof is flat, low-slope, tile, or metal, RoofShield delivers the ultimate in permanent waterproofing protection.",
    features: [
      "100% seamless waterproof membrane — no joints or seams",
      "Guaranteed against hurricane-force winds",
      "Expands and contracts with temperature fluctuations",
      "Extends roof life by 15–20 years",
      "Suitable for all Florida roof types",
    ],
    color: "bg-primary/10 text-primary",
  },
];

export default function RoofSystems() {
  return (
    <div className="w-full">
      <SEO
        title="FungalShield, SmartShield & RoofShield — Roof Systems for Florida"
        description="Explore our three branded roof systems: FungalShield anti-fungal coating, SmartShield energy-reflective system, and RoofShield all-weather waterproofing membrane — engineered for Florida's climate."
        canonical="/roof-systems"
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              The Original Since 1994
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Systems</h1>
            <p className="text-xl text-white/80">
              Advanced weatherproofing systems engineered for Florida's climate — designed to outperform and outlast traditional roofing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-16">
            {systems.map((system, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-bold mb-6 ${system.color}`}>
                    <system.icon className="h-4 w-4" />
                    {system.tagline}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">{system.name}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{system.description}</p>
                  <ul className="space-y-3 mb-8">
                    {system.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-foreground">
                        <Zap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white" size="lg">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
                <div className={`bg-muted rounded-2xl p-16 flex flex-col items-center justify-center text-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <system.icon className="h-24 w-24 text-primary mb-6 opacity-20" />
                  <h3 className="text-2xl font-serif font-bold text-primary">{system.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ShieldCheck, label: "Windproof" },
              { icon: Droplets, label: "Waterproof" },
              { icon: Sun, label: "UV Resistant" },
              { icon: ThumbsUp, label: "BBB Certified" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <span className="font-bold font-serif text-primary text-lg">{item.label}</span>
              </motion.div>
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
  );
}
