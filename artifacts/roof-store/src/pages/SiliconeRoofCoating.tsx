import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone, Droplets, ShieldCheck, Building2 } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Silicone Roof Coating",
    name: "Silicone Roof Coating for Commercial & Flat Roofs",
    provider: {
      "@type": "RoofingContractor",
      name: "The Roof Store Waterproofing Products",
      alternateName: "The Roof Store",
      telephone: "+19542109614",
      url: BASE,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Broward County, Florida" },
      { "@type": "AdministrativeArea", name: "Miami-Dade County, Florida" },
      { "@type": "AdministrativeArea", name: "Palm Beach County, Florida" },
      { "@type": "AdministrativeArea", name: "Monroe County, Florida" },
    ],
    description:
      "Professional silicone roof coating installation for commercial and residential flat roofs with ponding water in South Florida — part of our Roof Shield (RP3) system, manufactured in-house by RoofProtect.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Roof Systems", item: `${BASE}/roof-systems` },
      { "@type": "ListItem", position: 3, name: "Silicone Roof Coating", item: `${BASE}/silicone-roof-coating` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is silicone roof coating best used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Silicone roof coating is the top-performing formulation for commercial and residential flat roofs that hold standing or ponding water — more than ½ inch for extended periods. It resists degradation from prolonged water exposure better than any other liquid-applied roofing formulation, making it the standard choice for negative-slope commercial flat roofs, low-slope decks, and roofs with poor drainage.",
        },
      },
      {
        "@type": "Question",
        name: "Is silicone roof coating good for commercial flat roofs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — silicone is widely regarded as the industry standard for commercial flat roof coating, especially on built-up roofing, modified bitumen, and TPO substrates where ponding water is common. It forms a fully-adhered, seamless waterproof membrane that stays stable in constant moisture exposure, which is exactly the condition many commercial flat roofs face.",
        },
      },
      {
        "@type": "Question",
        name: "How long does silicone roof coating last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Grade 3 silicone formulation, part of the Roof Shield (RP3) system, carries up to a 50-year product warranty — the longest in our product line — when professionally installed and maintained.",
        },
      },
      {
        "@type": "Question",
        name: "Who installs silicone roof coating in South Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Roof Store installs silicone roof coating systems throughout Broward, Miami-Dade, Palm Beach, and Monroe Counties, using Roof Shield (RP3) — a proprietary silicone-based system manufactured in-house by RoofProtect and independently TAS-106 Dade County Uplift rated.",
        },
      },
    ],
  },
];

const whySilicone = [
  {
    icon: Droplets,
    title: "Best-in-Class Ponding Water Resistance",
    detail:
      "Silicone is the only liquid-applied coating ingredient rated for continuous exposure to standing water. If your commercial flat roof holds more than ½ inch of water for extended periods after rain, silicone is the correct specification — not a compromise.",
  },
  {
    icon: Building2,
    title: "The Commercial Flat Roof Standard",
    detail:
      "Silicone roof coating is the industry-preferred choice for commercial flat roofs, negative-slope decks, and low-slope buildings — restaurants, warehouses, retail centers, and multi-family properties with built-up, modified bitumen, or TPO roofing.",
  },
  {
    icon: ShieldCheck,
    title: "Up to a 50-Year Product Warranty",
    detail:
      "Our Grade 3 silicone formulation carries the highest product warranty in our entire line — reflecting its long-term performance on the roofs it's engineered for.",
  },
  {
    icon: CheckCircle,
    title: "Seamless, Fully-Adhered Membrane",
    detail:
      "Applied as a liquid and cured into one continuous, monolithic waterproof layer — no seams, laps, or joints for water to find its way through, unlike traditional roofing materials.",
  },
];

export default function SiliconeRoofCoating() {
  return (
    <div className="w-full">
      <SEO
        title="Silicone Roof Coating for Commercial & Flat Roofs in South Florida | The Roof Store"
        description="Professional silicone roof coating installation for commercial and flat roofs with ponding water in Broward, Miami-Dade & Palm Beach County. Part of our Roof Shield (RP3) system — up to a 50-year warranty. Free estimate: 954-210-9614."
        canonical="/silicone-roof-coating"
        schema={schema}
        geo={{ region: "US-FL", placename: "South Florida" }}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/roof-systems" className="hover:text-white">Roof Systems</Link>
              <span>/</span>
              <span className="text-white">Silicone Roof Coating</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Droplets className="h-4 w-4" />
              Part of Our Roof Shield (RP3) System
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Silicone Roof Coating for Commercial &amp; Flat Roofs
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl">
              For commercial flat roofs, negative-slope decks, and any roof that holds standing water, silicone is the
              strongest liquid-applied coating formulation available. The Roof Store manufactures and installs
              premium silicone roof coating throughout South Florida as part of our Roof Shield (RP3) system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Get a Free Silicone Coating Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:954-210-9614"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors border border-white/20"
              >
                <Phone className="h-5 w-5" />
                954-210-9614
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-primary">The Right Formulation for Ponding Water</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Commercial flat roofs — restaurants, warehouses, retail centers, offices, and multi-family properties —
              face a challenge residential sloped roofs don't: standing water. Poor drainage, negative slope, and
              low-slope design mean water often sits on the roof surface for hours or days after rain. Most coating
              formulations aren't built for that. Silicone is.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              RoofProtect manufactures a proprietary premium silicone-based formulation as part of our Roof Shield
              (RP3) system — engineered specifically for flat roofs holding ponding water, negative-slope commercial
              decks, and any surface where long-term moisture exposure would degrade other coatings. See how it fits
              into our full product lineup on the{" "}
              <Link href="/roof-systems" className="text-accent font-semibold hover:underline">
                Roof Systems
              </Link>{" "}
              page, or view full specs on the{" "}
              <Link href="/products/roofshield" className="text-accent font-semibold hover:underline">
                Roof Shield (RP3) product page
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why silicone */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Why Silicone Wins on Flat & Commercial Roofs</h2>
            <p className="text-muted-foreground mb-10">
              Four reasons silicone is the industry standard for ponding-water and commercial flat roof applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whySilicone.map((item, i) => (
                <div key={i} className="bg-background border rounded-xl p-6 flex gap-4">
                  <item.icon className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-1">{item.title}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Where We Install Silicone Roof Coating</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Commercial flat roofs with ponding or standing water",
                "Negative-slope and low-slope roof decks",
                "Built-up roofing (BUR) and modified bitumen roofs",
                "TPO and other single-ply commercial membranes",
                "Restaurants, warehouses & retail centers with drainage issues",
                "Multi-family and HOA flat-roof buildings",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product tie-in */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">
                Silicone Is One of Three Formulations We Manufacture
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RoofProtect manufactures three formulation grades in-house — elastomeric, polyurethane, and silicone —
                and specifies the right one for your roof after a manufacturer's inspection. Silicone is used
                specifically within our Roof Shield (RP3) system for ponding-water and commercial flat roof
                applications; our Fungal Shield (RP1) and Smart Shield (RP2) systems typically use elastomeric or
                polyurethane formulations for tile, metal, and standard flat/sloped roofs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Curious how silicone compares to our elastomeric systems for your specific roof? Read our{" "}
                <Link href="/silicone-vs-elastomeric-roof-coating" className="text-accent font-semibold hover:underline">
                  full silicone vs. elastomeric comparison
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold mb-4">Have a Flat Roof With Standing Water?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free manufacturer's inspection and find out if silicone roof coating is the right fit for
              your commercial or residential flat roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Schedule Free Inspection
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:954-210-9614"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors border border-white/20"
              >
                <Phone className="h-5 w-5" />
                954-210-9614
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Serving Broward, Miami-Dade, Palm Beach, and Monroe Counties · Licensed &amp; Insured · A+ BBB Rated since 1994
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
