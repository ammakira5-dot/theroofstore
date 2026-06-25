import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Droplets, Sun, Package, ArrowRight, Leaf } from "lucide-react";
import { SEO } from "@/components/SEO";

const products = [
  {
    icon: Leaf,
    name: "FungalShield",
    category: "Anti-Fungal Roof Coating System",
    description:
      "Florida's premier anti-fungal, anti-algae roof coating. FungalShield's active biocide formula bonds to the roof surface, eliminating existing biological growth and preventing future mold, mildew, algae, and fungal infestations. Engineered for South Florida's year-round humidity.",
    specs: ["Active Biocide Formula", "Mold & Algae Growth Inhibitor", "UV-Stable — no degradation in Florida heat", "Compatible with tile, metal, and flat roofs", "Long-lasting biological barrier"],
    bestFor: "Florida homes with algae streaking, humid climates, tile and flat roofs",
  },
  {
    icon: Sun,
    name: "SmartShield",
    category: "Energy-Reflective Smart Coating System",
    description:
      "Our advanced energy-reflective coating that dramatically cuts heat transfer into your home. SmartShield's proprietary solar-reflective technology bounces radiation away from the roof surface, lowering attic temperatures and reducing cooling costs year-round — paying for itself through energy savings.",
    specs: ["Solar Reflectivity: up to 90%", "Attic Temp Reduction: up to 40°F", "Cooling Cost Reduction: 20–30%", "ENERGY STAR Cool Roof Qualified", "Compatible with tile, metal, and flat roofs"],
    bestFor: "Energy-conscious homeowners, high-cooling-cost properties, sun-exposed roofs",
  },
  {
    icon: ShieldCheck,
    name: "RoofShield",
    category: "Flagship All-Weather Waterproofing System",
    description:
      "Our flagship all-weather roof membrane system — the result of over 30 years of Florida roofing expertise. RoofShield creates a 100% seamless, waterproof membrane that withstands hurricane-force winds, tropical storms, and intense UV exposure. The definitive solution for permanent roof protection.",
    specs: ["100% Seamless Waterproof Membrane", "Hurricane-Force Wind Rated", "Elongation: 500%+", "Extends Roof Life: 15–20 Years", "Suitable for all Florida roof types"],
    bestFor: "Flat roofs, low-slope roofs, tile, metal, and concrete substrates",
  },
  {
    icon: Package,
    name: "Primer System",
    category: "Surface Primer",
    description:
      "The critical foundation layer for any roof coating system. Our primer ensures maximum adhesion between the existing roof substrate and the topcoat. It penetrates and seals porous surfaces for a unified, bonded application that maximizes the performance of FungalShield, SmartShield, or RoofShield.",
    specs: ["Water-Based Formula", "Penetrating Adhesion Promoter", "Solvent-Free", "Coverage: 200–300 sq ft per gallon", "Compatible with all roof coating systems"],
    bestFor: "All applications before topcoat systems",
  },
  {
    icon: Droplets,
    name: "Sealant",
    category: "Sealant & Detail Product",
    description:
      "Elastomeric sealant for ridge caps, penetrations, eave edges, and detail work. Maintains flexibility through thermal cycling and adheres to virtually any roofing substrate. The perfect complement to any of our roof coating systems.",
    specs: ["Elastomeric — Permanent Flex", "Paintable Surface", "30-Year Formulation", "Color: White", "Bonds to: Metal, Tile, Concrete, Wood"],
    bestFor: "Ridge caps, penetrations, flashing details",
  },
];

export default function Products() {
  return (
    <div className="w-full">
      <SEO
        title="FungalShield, SmartShield & RoofShield Products — The Roof Store"
        description="Professional-grade roof coating products: FungalShield anti-fungal system, SmartShield energy-reflective coating, and RoofShield all-weather waterproofing membrane — engineered for Florida's climate."
        canonical="/products"
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              FungalShield · SmartShield · RoofShield
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
            Our products are available for licensed contractors and distributors throughout Florida and beyond. Contact us to learn about our distributor program.
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
