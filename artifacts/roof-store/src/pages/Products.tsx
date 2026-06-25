import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Droplets, Sun, Wind, Package, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const products = [
  {
    icon: ShieldCheck,
    name: "Storm Shield Premium Elastomeric",
    category: "Elastomeric Coating",
    description:
      "Our flagship elastomeric roof coating. High-build, 100% acrylic formula that creates a seamless, flexible membrane over your existing roof. Designed specifically for Florida's climate extremes — from hurricane force winds to intense UV exposure.",
    specs: ["Tensile Strength: 350+ PSI", "Elongation: 450%", "Reflectivity: 87%", "Coverage: 1–2 gallons per 100 sq ft", "Colors: White, Tan, Gray"],
    bestFor: "Tile roofs, concrete roofs, metal roofs",
  },
  {
    icon: Droplets,
    name: "Storm Shield Liquid Rubber",
    category: "Liquid Rubber Membrane",
    description:
      "The original liquid-applied rubber roof shield system. Creates an impenetrable seamless membrane ideal for flat and low-slope roofs. No seams, no joints, no weak points. Bonds directly to the existing substrate for complete waterproofing.",
    specs: ["Tensile Strength: 400+ PSI", "Elongation: 600%", "Ponding Water Resistant", "Coverage: 1.5–2 gallons per 100 sq ft", "Color: White"],
    bestFor: "Flat roofs, low-slope roofs, foam roofs",
  },
  {
    icon: Sun,
    name: "Storm Shield Silicone System",
    category: "Silicone Coating",
    description:
      "Premium silicone-based coating that does not degrade from UV exposure over time. Maintains its elastic properties in extreme temperatures and provides superior ponding water resistance. The ultimate long-term solution.",
    specs: ["UV Resistant — no degradation", "Elongation: 500%", "Ponding Water Rated", "Coverage: 1–1.5 gallons per 100 sq ft", "Colors: White, Tan"],
    bestFor: "Long-term applications, ponding water areas",
  },
  {
    icon: Wind,
    name: "Storm Shield Tile Glaze",
    category: "Tile Restoration Product",
    description:
      "Professional-grade ceramic and concrete tile glaze designed to restore the protective finish on aging roof tiles. Seals porosity, restores original color depth, and protects against UV degradation, algae, and weathering.",
    specs: ["UV Stabilized Formula", "Penetrating Seal", "Mold and Mildew Resistant", "Coverage: 100–150 sq ft per gallon", "Available in Multiple Colors"],
    bestFor: "Clay tile, concrete tile, slate tile",
  },
  {
    icon: Package,
    name: "Storm Shield Primer System",
    category: "Surface Primer",
    description:
      "The critical foundation layer for any Storm Shield coating system. Ensures maximum adhesion between the existing roof substrate and the topcoat. Penetrates and seals porous surfaces for a unified, bonded application.",
    specs: ["Water-Based Formula", "Penetrating Adhesion Promoter", "Solvent-Free", "Coverage: 200–300 sq ft per gallon", "Compatible with all Storm Shield coatings"],
    bestFor: "All applications before topcoat systems",
  },
  {
    icon: ShieldCheck,
    name: "Storm Shield Sealant",
    category: "Sealant & Detail Product",
    description:
      "Elastomeric sealant for ridge caps, penetrations, eave edges, and detail work. Maintains flexibility through thermal cycling and adheres to virtually any roofing substrate. The perfect complement to any Storm Shield coating system.",
    specs: ["Elastomeric — Permanent Flex", "Paintable Surface", "30-Year Formulation", "Color: White", "Bonds to: Metal, Tile, Concrete, Wood"],
    bestFor: "Ridge caps, penetrations, flashing details",
  },
];

export default function Products() {
  return (
    <div className="w-full">
      <SEO
        title="Storm Shield Roof Coating Products — Elastomeric, Silicone, Liquid Rubber"
        description="Professional-grade Storm Shield roof coating products: elastomeric, liquid rubber, silicone systems, tile glaze, primer, and sealant — engineered for Florida's climate."
        canonical="/products"
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Storm Shield Product Line
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Our Products</h1>
            <p className="text-xl text-white/80">
              Professional-grade roofing products engineered for Florida's demanding climate. Available for contractor installation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow"
                data-testid={`product-card-${i}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{product.category}</div>
                    <h3 className="text-xl font-serif font-bold text-foreground">{product.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                <div className="mb-6">
                  <div className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Specifications</div>
                  <ul className="space-y-2">
                    {product.specs.map((spec, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Best For: </span>
                  <span className="text-sm text-foreground">{product.bestFor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">Interested in Distributorship?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Storm Shield products are available for licensed contractors and distributors throughout Florida and beyond. Contact us to learn about our distributor program.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">
              Contact Us About Distributorship <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Get Expert Product Recommendations</h2>
          <p className="text-xl text-white/80 mb-10">Not sure which product is right for your project? Our experts will recommend the perfect system for your specific roof type and conditions.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
