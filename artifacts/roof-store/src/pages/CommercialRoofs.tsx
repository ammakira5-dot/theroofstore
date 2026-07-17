import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Droplets, Wrench, Building2, Wind, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Lightbox, useLightbox } from "@/components/Lightbox";

const roofTypes = [
  {
    id: "flat-deck",
    icon: Droplets,
    title: "Commercial Flat Decks",
    subtitle: "Seamless Rubber Membrane Systems",
    image: "https://www.theroofstore.net/services/commercial-flat-roof-elastomeric.jpg",
    description:
      "Flat and low-slope commercial roofs are the most vulnerable to ponding water, UV degradation, and thermal shock. Our liquid-applied rubber membrane system creates a fully seamless waterproof layer — no seams, no joints, no weak spots — that conforms to any deck shape and lasts decades without replacement.",
    facts: [
      "Fully seamless — eliminates every potential leak point",
      "Handles ponding water without cracking or lifting",
      "Thermal shock resistant through Florida's heat cycles",
      "Applied in multiple reinforced coats for commercial-grade performance",
      "Compatible with all existing flat deck substrates",
      "Energy-efficient white reflective finish reduces cooling costs",
    ],
    systems: ["BUR over concrete decks", "Foam-coated flat decks", "TPO and EPDM overlays", "Concrete slab roofs"],
  },
  {
    id: "bur-modified",
    icon: Building2,
    title: "Built-Up Roofing (BUR) & Modified Bitumen",
    subtitle: "Restoration Without Tear-Off",
    image: "https://www.theroofstore.net/services/Residential-Flat-Roof-Restoration.jpg",
    description:
      "Built-up roofing and modified bitumen systems are workhorses — but they age, crack, and blister over time. Full tear-off and replacement is expensive and disruptive. Our rubber coating system bonds directly over existing BUR and mod-bit surfaces, sealing every crack and blister with a fresh waterproof membrane at a fraction of replacement cost.",
    facts: [
      "No tear-off required — coat directly over existing BUR or mod-bit",
      "Seals blisters, cracks, and failed lap joints",
      "Reinforced polyester membrane bonded to the substrate",
      "Self-leveling — fills low spots and eliminates ponding zones",
      "Extends roof life 15–25 years from application date",
      "Passes Dade County TAS-106 uplift pull-test certification",
    ],
    systems: ["Multi-ply built-up roofing", "Modified bitumen cap sheets", "Gravel-ballasted BUR", "Torchdown mod-bit systems"],
  },
  {
    id: "metal",
    icon: Wind,
    title: "Commercial Metal Roofs",
    subtitle: "Stop Leaks. Stop Rust. Stop Replacement.",
    image: "https://www.theroofstore.net/services/Commercial-Metal-Roof-Waterproofing.jpg",
    description:
      "Commercial metal roofs leak at screw penetrations, lap joints, ridge caps, and anywhere the metal has expanded and contracted over years of heat cycles. We stop metal roof leaks using a rubberized urethane sealant process with a reinforced polyester membrane — a field-prepared, self-leveling system that permanently seals every penetration and joint.",
    facts: [
      "Seals screw penetrations, lap joints, and ridge caps permanently",
      "Rubberized urethane expands and contracts with the metal",
      "Prevents rust and corrosion under the membrane",
      "Bright white reflective finish reduces roof temperature by up to 35%",
      "Works on all metal profiles — standing seam, R-panel, corrugated",
      "No replacement needed — protects existing metal structure",
    ],
    systems: ["Standing seam metal roofs", "R-panel and corrugated", "Exposed fastener systems", "Metal over existing built-up roofs"],
  },
];

const processSteps = [
  { step: "01", title: "Inspection & Assessment", desc: "We inspect every penetration, joint, blister, and weak point. You receive a written report and honest recommendation — no upsell." },
  { step: "02", title: "Surface Preparation", desc: "Pressure washing, blister cutting, crack repair, and rust treatment where applicable. The substrate is fully prepped before any coating is applied." },
  { step: "03", title: "Primer Coat", desc: "A bonding primer is applied to ensure the rubber membrane adheres fully to the existing surface — critical for long-term performance." },
  { step: "04", title: "Reinforced Membrane", desc: "Polyester mesh is embedded into the first coat of rubber at all seams, penetrations, and joints — the structural layer of the system." },
  { step: "05", title: "Main Rubber Coat(s)", desc: "Multiple coats of our liquid rubber are applied across the full surface. Each coat is allowed to cure before the next is applied." },
  { step: "06", title: "Inspection & Documentation", desc: "Our supervisors confirm installation quality. You receive documentation and warranty paperwork at project completion." },
];

const galleryImages = [
  { src: "/images/commercial/commercial-flat-roof-dania-florida.jpg", caption: "Dania Boat Yard — 17,000 sq ft Metal Roof", tag: "Metal Roof" },
  { src: "/images/commercial/commercial-flat-roof-waterproofing.jpg", caption: "Flat Deck Waterproofing — South Florida", tag: "Flat Deck" },
  { src: "/images/commercial/commercial-flat-roof.jpg", caption: "Commercial Flat Roof Coating", tag: "Flat Deck" },
  { src: "/images/commercial/Omar-Mart-Metal-Roof.jpg", caption: "Omar Mart — Metal Roof System", tag: "Metal Roof" },
  { src: "/images/commercial/commercial-flat-roof-sunrise-florida.jpg", caption: "Flat Roof Restoration — Sunrise, FL", tag: "Flat Deck" },
  { src: "/images/commercial/metal-roof-system-ft-lauderdale.jpg", caption: "Metal Roof System — Fort Lauderdale", tag: "Metal Roof" },
  { src: "/images/commercial/commercial-roof-reroof-broward-fl.jpg", caption: "Commercial Roof Coating — Broward County", tag: "BUR / Mod-Bit" },
  { src: "/images/commercial/industrial-roof-coating-broward-florida-big.jpg", caption: "Industrial Roof Coating — Broward, FL", tag: "Industrial" },
  { src: "/images/commercial/commercial-roof-coating-parkland-florida-big.jpg", caption: "Commercial Coating — Parkland, FL", tag: "Flat Deck" },
  { src: "/images/commercial/commercial-flat-roof-replacement-broward-fl.jpg", caption: "Flat Roof Restoration — Broward County", tag: "Flat Deck" },
  { src: "/images/commercial/commercial-metal-roof-system.jpg", caption: "Commercial Metal Roof System", tag: "Metal Roof" },
  { src: "/images/commercial/Avres-Nursery-Davie-Florida.jpg", caption: "Avres Nursery — Davie, FL", tag: "Industrial" },
  { src: "/images/commercial/commercial-metal-roof.jpg", caption: "Commercial Metal Roof Waterproofing", tag: "Metal Roof" },
  { src: "/images/commercial/commercial-flat-roof-insulation.jpg", caption: "Flat Roof Insulation & Coating", tag: "Flat Deck" },
];

const tagColors: Record<string, string> = {
  "Flat Deck": "bg-blue-100 text-blue-800",
  "Metal Roof": "bg-slate-100 text-slate-700",
  "BUR / Mod-Bit": "bg-amber-100 text-amber-800",
  "Industrial": "bg-green-100 text-green-800",
};

const realJobs = [
  {
    name: "Ralph Puopolo — La Costa",
    address: "5333 Collins Ave, Miami Beach FL",
    detail: "Architectural Barrel Tile — Commercial Project",
  },
  {
    name: "Joe Venuto — Park Place",
    address: "736 NE 7th Ave, Fort Lauderdale",
    detail: "Waterproofed Solid Concrete Roofs — Commercial",
  },
  {
    name: "Julie Coppola — Suffolk House Condominium",
    address: "2771 NE 15th Street, Fort Lauderdale FL",
    detail: "2-Story Flat Cement Tile — Waterproofed 2014",
  },
  {
    name: "Akhtar Hussaine, Esq.",
    address: "Pembroke Pines, FL",
    detail: "3 Commercial Flat Roofs — Survived Hurricane Irma",
  },
];

const BASE = "https://www.theroofstore.net";

export default function CommercialRoofs() {
  const lb = useLightbox(galleryImages.map(img => ({ src: img.src, alt: img.caption, caption: img.caption })));
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Commercial Roof Waterproofing — The Roof Store",
      url: `${BASE}/commercial-roofs`,
      provider: {
        "@type": "RoofingContractor",
        name: "The Roof Store",
        url: BASE,
        telephone: "+19542109614",
        address: { "@type": "PostalAddress", addressLocality: "Davie", addressRegion: "FL", postalCode: "33328", addressCountry: "US" },
      },
      areaServed: ["Broward County, FL", "Miami-Dade County, FL", "Palm Beach County, FL"],
      description: "Commercial flat deck, built-up roofing (BUR), modified bitumen, and metal roof waterproofing in South Florida. No tear-off. Seamless rubber membrane systems. TAS-106 certified.",
      serviceType: "Commercial Roof Waterproofing",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Commercial Roofs", item: `${BASE}/commercial-roofs` },
      ],
    },
  ];

  return (
    <>
    <div className="w-full">
      <SEO
        title="Commercial Flat Roof & Metal Waterproofing | The Roof Store FL"
        description="Commercial flat deck, BUR, modified bitumen, and metal roof waterproofing in South Florida. Silicone-grade coatings rated for ponding water and negative-pitch roofs. No tear-off. Seamless membrane systems. TAS-106 certified. Call 954-210-9614."
        canonical="/commercial-roofs"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Commercial Roofing
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">
              Flat Decks, Built-Up Roofs, Modified Bitumen & Metal Roofs
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Waterproofed. Rubber membrane sealed. No tear-off required. The same TAS-106 Dade County certified system used on residential roofs — engineered for commercial performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
                <Link href="/contact">Get a Commercial Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
                <a href="tel:9542109614">Call 954-210-9614</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { stat: "30+", label: "Years Waterproofing Commercial Roofs" },
              { stat: "TAS-106", label: "Dade County Uplift Certified" },
              { stat: "No Tear-Off", label: "Apply Over Existing System" },
              { stat: "A+", label: "BBB Rating Since 1994" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-3xl font-serif font-bold text-primary mb-1">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {roofTypes.map((type, i) => (
        <section
          key={type.id}
          id={type.id}
          className={`py-24 ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container px-4">
            <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={i % 2 !== 0 ? "lg:order-2" : ""}
              >
                <img
                  src={type.image}
                  alt={type.title}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-video"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={i % 2 !== 0 ? "lg:order-1" : ""}
              >
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                  <type.icon className="h-3.5 w-3.5" />
                  {type.subtitle}
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">{type.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{type.description}</p>
                <ul className="space-y-2 mb-6">
                  {type.facts.map((fact, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                <div className="border rounded-xl p-4 bg-background/60">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Compatible With</div>
                  <div className="flex flex-wrap gap-2">
                    {type.systems.map((s, k) => (
                      <span key={k} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-primary text-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Commercial Application Process</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Every commercial job follows the same documented 6-step process. Our supervisors inspect every stage before moving to the next coat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 rounded-xl p-6"
              >
                <div className="text-4xl font-serif font-bold text-accent/80 mb-3">{step.step}</div>
                <div className="font-bold text-white mb-2">{step.title}</div>
                <div className="text-white/70 text-sm leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-3">Commercial Project Gallery</h2>
            <p className="text-muted-foreground text-lg">Flat decks, metal roofs, and industrial coatings across South Florida — real jobs, real results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden rounded-xl shadow-sm bg-card cursor-zoom-in"
                onClick={() => lb.open(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  title={img.caption}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <p className="text-white text-xs font-medium leading-snug">{img.caption}</p>
                </div>
                <div className="p-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[img.tag]}`}>{img.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Real Commercial Jobs</h2>
            <p className="text-muted-foreground">Documented projects — references and photos available on request.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {realJobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-xl p-6 flex gap-4 items-start"
              >
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{job.name}</div>
                  <div className="text-sm text-muted-foreground">{job.address}</div>
                  <div className="text-xs text-muted-foreground mt-1 italic">{job.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Phone references available upon request. See full customer list on our{" "}
            <Link href="/reviews" className="text-accent font-semibold hover:underline">Reviews page</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-10 border shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-6 w-6 text-accent" />
                <span className="font-bold text-primary text-lg">TAS-106 Dade County Certified</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our rubber membrane system is the only liquid-applied roof coating in the world to pass the Dade County TAS-106 Uplift Pull Test on an existing tile roof system. That same certification backs every commercial flat deck, BUR, mod-bit, and metal roof we apply it to.
              </p>
            </div>
            <div className="shrink-0">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
                <Link href="/contact">Request Commercial Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <Wrench className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Stop That Commercial Roof Leak?</h2>
          <p className="text-xl text-white/80 mb-10">
            No tear-off. No replacement. Just a permanent rubber membrane system backed by 30 years of South Florida commercial roofing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Get a Free Commercial Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              <a href="tel:9542109614">Call 954-210-9614</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
    <Lightbox
      images={galleryImages.map(img => ({ src: img.src, alt: img.caption, caption: img.caption }))}
      index={lb.activeIndex}
      onClose={lb.close}
      onPrev={lb.prev}
      onNext={lb.next}
    />
    </>
  );
}
