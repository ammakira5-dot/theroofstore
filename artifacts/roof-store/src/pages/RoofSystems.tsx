import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplets, Wind, ShieldCheck, Zap, Sun, ThumbsUp } from "lucide-react";

const systems = [
  {
    icon: ShieldCheck,
    name: "Storm Shield Elastomeric Coating",
    tagline: "The Original Liquid Rubber Roof Shield System",
    description:
      "Our flagship elastomeric coating system is the most advanced weatherproofing solution available for Florida roofs. It creates a seamless, flexible membrane that expands and contracts with temperature fluctuations — making it ideal for Florida's extreme climate.",
    features: [
      "100% waterproof seamless membrane",
      "UV reflective to reduce energy costs",
      "Expands and contracts with temperature changes",
      "Guaranteed against hurricane force winds",
      "Extends roof life by 10–20 years",
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Droplets,
    name: "Liquid Rubber Flat Deck System",
    tagline: "Permanent Solution for Flat and Low-Slope Roofs",
    description:
      "Flat roofs present unique waterproofing challenges — our liquid-applied rubber system eliminates every seam and penetration point that could allow water intrusion. Applied as a liquid and cured to a seamless solid membrane.",
    features: [
      "Seamless application — no joints or seams",
      "Handles standing water and ponding",
      "Ideal for commercial and residential flat roofs",
      "Self-flashing around penetrations",
      "Highly resistant to chemicals and weathering",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sun,
    name: "Silicone Roof Coating System",
    tagline: "Superior UV and Moisture Resistance",
    description:
      "Our silicone-based coating system provides unmatched UV resistance and long-term flexibility. Silicone does not degrade from UV exposure and maintains its watertight seal even when ponding water is present on the roof surface.",
    features: [
      "Does not degrade from UV or ozone",
      "Maintains elasticity at extreme temperatures",
      "Excellent ponding water resistance",
      "Highly reflective — cool roof qualified",
      "Low VOC, environmentally responsible",
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Wind,
    name: "Hurricane-Grade Tile Restoration",
    tagline: "Protect and Beautify Your Tile Roof",
    description:
      "Our tile restoration system combines structural reinforcement with full weatherproofing. We reglaze, reseal, and coat existing tile roofs — restoring their appearance and bringing them up to hurricane standards without the cost of full replacement.",
    features: [
      "Ridge cap resealing and reinforcement",
      "Full tile cleaning and preparation",
      "Color-matched glazing coat application",
      "Seals hairline cracks and fractures",
      "Restores like-new appearance",
    ],
    color: "bg-primary/10 text-primary",
  },
];

export default function RoofSystems() {
  return (
    <div className="w-full">
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
