import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench, Paintbrush, Droplets, ShieldCheck, Wind, Star } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Roof Tile Reglazing",
    description:
      "Over time, roof tiles lose their protective glaze and become porous, faded, and vulnerable to water absorption. Our professional reglazing service restores the tile's original protective barrier, sealing out moisture and restoring color uniformity.",
    benefits: ["Restores original color vibrancy", "Seals porous surfaces", "Prevents algae and mold growth", "Extends tile life significantly"],
  },
  {
    icon: Paintbrush,
    title: "Roof Tile Restoration",
    description:
      "Our full tile restoration process goes beyond simple reglazing. We repair cracked tiles, repoint ridge caps, clean entire roof surfaces, and apply a multi-coat weatherproofing system that transforms aging roofs into like-new condition.",
    benefits: ["Structural crack repairs", "Ridge cap repointing", "Full surface deep cleaning", "Multi-coat protective system"],
  },
  {
    icon: Droplets,
    title: "Flat Deck Rubber Roof Paint",
    description:
      "Flat and low-slope roofs demand a different solution — our rubber roof paint creates a seamless, fully adhered membrane that eliminates every potential leak point. No seams, no joints, no weak spots.",
    benefits: ["Seamless waterproof membrane", "Handles ponding water", "Thermal shock resistant", "Commercial and residential grade"],
  },
  {
    icon: ShieldCheck,
    title: "Premium Roof Coating Systems",
    description:
      "Our premium multi-layer coating systems are engineered for maximum longevity and protection. Applied in multiple coats over a prepared substrate, these systems provide decades of reliable weatherproof performance.",
    benefits: ["Multi-layer application system", "10–25 year performance warranty", "Energy-efficient reflective finish", "Full roof system approach"],
  },
  {
    icon: Wind,
    title: "Hurricane Protection & Reinforcement",
    description:
      "Florida's hurricane season demands more than ordinary roofing. Our hurricane protection services reinforce your existing roof's weakest points — ridge caps, eave areas, tile edges — sealing them against the force of tropical storm winds.",
    benefits: ["Ridge and hip reinforcement", "Edge sealing and flashing", "Wind uplift resistance", "Pre-season inspections available"],
  },
  {
    icon: Wrench,
    title: "Roof Repair & Maintenance",
    description:
      "Don't let small problems become expensive emergencies. Our repair and maintenance services address cracked tiles, failed sealants, hairline fractures, and water infiltration before they compromise the structure of your roof.",
    benefits: ["Emergency repair available", "Leak detection and sealing", "Preventive maintenance plans", "Free assessment included"],
  },
];

export default function RoofServices() {
  return (
    <div className="w-full">
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Services</h1>
            <p className="text-xl text-white/80">
              Comprehensive solutions for every roof type — tile, flat, metal, and more. Serving Florida for nearly 30 years.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow"
                data-testid={`service-card-${i}`}
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Don't Re-Roof. Weatherproof.</h2>
          <p className="text-xl text-white/80 mb-10">
            Save up to 50% compared to full roof replacement. Call us today for a free evaluation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <a href="tel:954-210-9614" className="text-white/80 hover:text-white font-bold text-lg transition-colors">
              or call 954-210-9614
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
