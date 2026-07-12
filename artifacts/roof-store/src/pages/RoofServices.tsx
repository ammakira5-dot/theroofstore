import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wrench, Paintbrush, Droplets, ShieldCheck, Wind, Star, Waves, MapPin, ArrowRight, Layers } from "lucide-react";
import { SEO } from "@/components/SEO";
import { counties } from "@/pages/service-areas/data";

const services = [
  {
    icon: Waves,
    title: "Roof Pressure Cleaning & Soft Washing",
    description:
      "Professional roof pressure cleaning and soft washing are the essential first step before any tile roof painting, waterproofing, or flat roof sealing. We use calibrated low-pressure washing and chemical soft wash treatments to safely deep-clean Spanish tile, flat cement tile, clay barrel tile, and flat decks — removing algae, mold, black streaking, and biological buildup without damaging the tile surface.",
    benefits: ["Soft wash treatment safe for aged or fragile tile", "Safe for all tile types — clay, cement, and composite", "Required before any painting, coating, or sealing", "Removes algae, mold, moss, and black streaking"],
  },
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
    title: "Flat Deck Roof Coating",
    description:
      "Flat and low-slope roofs demand a different solution — our roof coating creates a seamless, fully adhered membrane that eliminates every potential leak point. No seams, no joints, no weak spots.",
    benefits: ["Seamless waterproof membrane", "Handles ponding water", "Thermal shock resistant", "Commercial and residential grade"],
  },
  {
    icon: ShieldCheck,
    title: "Premium Reflective & Elastomeric Roof Coating Systems",
    description:
      "Our premium multi-layer elastomeric and acrylic roof coating systems are engineered for maximum longevity and protection. Applied in multiple coats over a prepared substrate, these reflective cool roof coating systems provide decades of reliable weatherproof performance.",
    benefits: ["Multi-layer elastomeric application system", "10–25 year performance warranty", "Reflective cool roof coating finish", "Full roof system approach"],
  },
  {
    icon: Layers,
    title: "Metal Roof Coating",
    description:
      "Metal roofs face their own set of challenges in South Florida — rust, corrosion, seam leaks, and intense heat gain. Our metal roof coating systems seal seams and fasteners, stop corrosion before it spreads, and reflect solar heat to lower cooling costs, all without the expense of a full metal roof replacement.",
    benefits: ["Corrosion & rust prevention", "Seam and fastener sealing", "Reflective heat-reducing finish", "Extends metal roof lifespan"],
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
      "Don't let small problems become expensive emergencies. Repair and maintenance services address cracked tiles, failed sealants, hairline fractures, and water infiltration before they compromise the structure of your roof. Clients are always alerted to any required repairs prior to application. Structural repairs are generally the responsibility of the property owner.",
    benefits: ["Preventive maintenance plans", "Free assessment included"],
  },
];

const BASE = "https://www.theroofstore.net";

export default function RoofServices() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Roof Services — The Roof Store",
      url: `${BASE}/roof-services`,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Elastomeric Roof Coating", provider: { "@type": "LocalBusiness", name: "The Roof Store" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Tile Roof Restoration", provider: { "@type": "LocalBusiness", name: "The Roof Store" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "Tile Reglazing & Reseal", provider: { "@type": "LocalBusiness", name: "The Roof Store" } } },
        { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "Flat Deck Waterproofing", provider: { "@type": "LocalBusiness", name: "The Roof Store" } } },
        { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "Metal Roof Coating", provider: { "@type": "LocalBusiness", name: "The Roof Store" } } },
        { "@type": "ListItem", position: 6, item: { "@type": "Service", name: "Hurricane Protection Coating", provider: { "@type": "LocalBusiness", name: "The Roof Store" } } },
        { "@type": "ListItem", position: 7, item: { "@type": "Service", name: "Emergency Roof Repair", provider: { "@type": "LocalBusiness", name: "The Roof Store" } } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Roof Services", item: `${BASE}/roof-services` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Roof Coating & Restoration Services | South Florida"
        description="Licensed roof restoration and roof coating contractor for residential and commercial properties in South Florida: pressure cleaning, soft washing, tile reglazing & restoration, flat deck coating, shingle roof coating, elastomeric coating systems, metal roof coating, hurricane protection, and emergency repairs. Professionally installed with our FungalShield, SmartShield & RoofShield systems."
        canonical="/roof-services"
        schema={schema}
      />
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

      {/* SEO keyword section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto space-y-12">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Roof Pressure Cleaning, Soft Washing, Elastomeric &amp; Reflective Roof Coating in South Florida</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Whether you need to pressure clean or soft wash a Spanish tile roof, paint a flat cement tile roof, apply an elastomeric or acrylic roof coating, or install a reflective cool roof coating on a flat deck — The Roof Store has been South Florida's trusted roof maintenance specialist since 1994, serving Broward, Miami-Dade, Palm Beach, and Monroe counties.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Roof Pressure Cleaning &amp; Soft Washing — All Roof Types</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Professional roof pressure cleaning and soft washing removes years of algae, mold, black streaking, and biological buildup from tile, cement, and flat roofs. On older or more fragile tile, our lower-impact soft wash method applies a biodegradable cleaning solution that kills growth at the root without the physical wear of high-pressure water. Pressure cleaning and soft washing is always the first step before any roof painting, coating, or waterproofing job — ensuring maximum adhesion and long-term performance.</p>
              <p className="text-sm font-semibold text-foreground mb-2">We safely pressure clean and soft wash:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-accent">→</span> Spanish clay tile &amp; cement tile roofs</li>
                <li className="flex gap-2"><span className="text-accent">→</span> Clay barrel tile roofs</li>
                <li className="flex gap-2"><span className="text-accent">→</span> Flat cement tile roofs</li>
                <li className="flex gap-2"><span className="text-accent">→</span> Commercial built-up flat decks</li>
              </ul>
              <Link href="/roof-pressure-cleaning" className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm mt-4">
                Learn more about pressure cleaning &amp; soft washing →
              </Link>
            </div>
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Tile Roof Painting &amp; Color Restoration</h3>
              <p className="text-muted-foreground leading-relaxed">Faded, chalky, or discolored roof tiles impact curb appeal and resale value. Our tile roof painting service uses professional-grade elastomeric and acrylic roof coatings in 3,000+ colors to restore your tile's appearance — or give it an entirely new look. All tile roof painting is done after professional pressure cleaning to ensure proper adhesion and a lasting finish.</p>
            </div>
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Tile Roof Waterproofing</h3>
              <p className="text-muted-foreground leading-relaxed">In traditional tile roof design, water is expected to pass between tile gaps onto an underlayment paper below — a system that works only as long as that paper stays intact. Years of roof movement cause the paper to tear, letting water infiltrate the deck and leading to leaks, rot, and costly structural damage. Our Smart Shield system seals and waterproofs the tile surface itself with a durable, flexible coating. For roofs where the underlayment paper is aging or failing, our Roof Shield system retrofits the entire tile field into one monolithic, gap-filled surface — so water is never able to reach the paper at all — and carries the world's only TAS-106 Dade County Uplift rated coating. Clients have the option to add Smart Shield as a top coat over Roof Shield for maximum reflectivity and cooling on a dark color choice, combining both systems in one roof.</p>
            </div>
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Flat Roof Sealing After Pressure Cleaning</h3>
              <p className="text-muted-foreground leading-relaxed">After pressure cleaning, a flat or low-slope roof needs a fresh coat of rubber waterproofing sealant to restore its watertight integrity. Our flat roof sealing service applies a seamless elastomeric membrane directly over the cleaned surface — stopping leaks and protecting against Florida's ponding rain and intense UV exposure.</p>
            </div>
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary mb-3">Reflective &amp; Cool Roof Coating</h3>
              <p className="text-muted-foreground leading-relaxed">Our Smart Shield reflective roof coating uses BASF Cool Pigment Technology to increase Total Solar Reflectance by 32% — even at the darkest black. This acrylic cool roof coating lowers attic temperatures and cooling costs while giving you 3,000+ tintable color choices, independently confirmed by Florida Power &amp; Light.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service by county links */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Roof Services By County</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Elastomeric, acrylic, and reflective cool roof coating services tailored to your county.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {counties.map((county, i) => (
              <Link
                key={i}
                href={`/roof-services/${county.slug}`}
                className="flex items-center justify-center gap-2 bg-card border rounded-xl py-4 px-4 text-foreground font-semibold hover:text-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                {county.name}
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer's Report callout */}
      <section className="py-16 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl border shadow-sm p-8 md:p-10 flex flex-col md:flex-row items-start gap-8">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">Required for Warranty</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">Manufacturer's Inspection Report</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every Roof Shield Monolithic warranty program on a flat or tile roof requires a pre-application Manufacturer's Report — including infrared moisture imaging, a signed drawing legend, photo documentation, and a required rework scope. The fee is <strong className="text-foreground">$150 per 5,000 sq ft</strong> and is <strong className="text-foreground">100% refundable</strong> when you proceed with the warranty program.
              </p>
              <Link href="/manufacturers-report" className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm">
                Learn about the inspection process →
              </Link>
            </div>
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
