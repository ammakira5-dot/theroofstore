import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, Sun, Wind, Droplets, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const systems = [
  {
    name: "FungalShield (RP1)",
    lifespan: "5–7 Years",
    sub: "Renewable clear coat — anti-fungal & UV protection",
    icon: Shield,
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    details: [
      "Penetrating clear coat with anti-fungal agents",
      "~90 sq ft coverage per gallon",
      "5-Year Product Warranty included",
      "Renewable — reseal at 5–7 years for continuous protection",
      "Ideal for newer roofs in good structural condition",
    ],
  },
  {
    name: "SmartShield (RP2)",
    lifespan: "10–15 Years",
    sub: "Most popular — tintable waterproof tile coating",
    icon: Sun,
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-800",
    details: [
      "Cool Pigment Technology — 23% more reflective than standard coatings",
      "Confirmed FP&L energy savings (FP&L rebate eligible)",
      "Full waterproofing at the tile surface level",
      "~90 sq ft coverage per gallon",
      "Available in tinted colors to refresh roof appearance",
    ],
  },
  {
    name: "RoofShield (RP3)",
    lifespan: "Lifetime (Renewable)",
    sub: "Flagship system — TAS-106 certified, 135+ MPH rated",
    icon: Wind,
    color: "bg-primary/5 border-primary/20",
    badge: "bg-primary/10 text-primary",
    details: [
      "World's only liquid roof coating with Dade County TAS-106 Uplift certification",
      "Documented 135+ MPH wind resistance on real hurricane events",
      "Fills all gaps between tiles — creates monolithic surface",
      "Lifetime Transferable & Renewable Warranty",
      "Qualifies for Additional Roof Life Certification (up to 10 years on 50+ year old roofs)",
    ],
  },
];

const factors = [
  {
    icon: Sun,
    title: "Extreme UV Exposure",
    desc: "South Florida averages 3,000+ hours of sunshine per year — more than almost any region in North America. Standard paints and low-grade coatings oxidize, chalk, and degrade within 2–4 years. Our elastomeric formulas are specifically UV-stabilized to resist this.",
  },
  {
    icon: Droplets,
    title: "60+ Inches of Annual Rainfall",
    desc: "Florida's wet season (June–October) delivers intense daily rainfall that weaker coatings simply can't handle. Our liquid rubber systems are fully waterproof, not water-resistant — there's a critical difference that shows up after the first serious storm.",
  },
  {
    icon: Wind,
    title: "Hurricane-Force Winds",
    desc: "A roof coating that hasn't been properly adhered and built up in layers will fail under wind pressure. Our systems are applied in multiple coats with proper surface preparation — and RoofShield is the only coating ever independently tested and certified to Dade County's TAS-106 Uplift standard.",
  },
  {
    icon: Clock,
    title: "Application & Surface Preparation",
    desc: "The single biggest predictor of lifespan is not the coating itself — it's the surface prep. A roof that is pressure-cleaned, crack-repaired, and properly primed before coating will consistently outlast one where prep was skipped. Our crews do not cut corners here.",
  },
];

const lifespanFaqs = [
  {
    q: "How long does elastomeric roof coating last in Florida?",
    a: "It depends on the system and the quality of application. FungalShield (RP1) is designed for 5–7 years and is renewable. SmartShield (RP2) is built for 10–15 years. RoofShield (RP3) carries a Lifetime Renewable Warranty with documented 135+ MPH hurricane performance. Florida's climate — extreme UV, heavy rainfall, and hurricane-force winds — demands a properly engineered system, not a standard paint.",
  },
  {
    q: "Does roof coating need to be reapplied in Florida?",
    a: "All coating systems benefit from periodic inspection and, when appropriate, renewal coating. Our maintenance-free Lifetime Warranty on RoofShield covers this — the system is renewable rather than replaced. SmartShield and FungalShield can also be resealed at the end of their initial lifespan, which is more economical than a full new installation.",
  },
  {
    q: "How does Florida's climate affect roof coating lifespan compared to other states?",
    a: "Florida is significantly more demanding than most U.S. states due to its combination of extreme UV (year-round sun at a low latitude), annual hurricane season, heavy rainfall, high humidity, and — for coastal areas — salt air. Coatings that last 15–20 years in northern states may need replacement in 5–8 years in Florida if they're not specifically formulated for this climate.",
  },
  {
    q: "What shortens roof coating lifespan most in South Florida?",
    a: "The four biggest lifespan killers are: (1) inadequate surface preparation before application; (2) low-quality or incorrectly specified coating products; (3) insufficient coating thickness (applying too thin to save material); and (4) skipping annual maintenance inspections. Our licensed crew handles all four correctly on every installation.",
  },
  {
    q: "Can a roof coating extend my roof's certifiable life for insurance purposes?",
    a: "Yes — a professionally applied coating system combined with a licensed contractor's written inspection can support an Additional Roof Life Certification under Florida law. This certification carries legal weight with Citizens Insurance and private carriers under Senate Bill 2-D (Fla. 2022). The certification may extend your roof's certifiable life by 5–10 years, which is typically what insurance companies require to continue or reinstate coverage.",
  },
  {
    q: "How do I know when my roof coating needs to be resealed?",
    a: "Signs include: visible chalking or oxidation (coating turns dull or powdery), thin spots where tile color shows through, any areas of water pooling or ponding, and algae or mold re-appearing despite previous treatment. We recommend a free annual visual inspection. Most of our customers reseal based on our recommendation at the right interval rather than waiting for visible deterioration.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Long Does Roof Coating Last in Florida?",
    description: "Complete guide to elastomeric roof coating lifespan in Florida — system-by-system breakdown, climate factors, and how to maximize protection in South Florida's demanding conditions.",
    author: { "@type": "Organization", name: "The Roof Store", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "The Roof Store",
      logo: { "@type": "ImageObject", url: `${BASE}/assets/images/logo.png` },
    },
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/roof-coating-lifespan-florida` },
    image: `${BASE}/assets/images/Waterproofing-Technology.jpg`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Roof Coating Lifespan in Florida", item: `${BASE}/roof-coating-lifespan-florida` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lifespanFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

export default function RoofCoatingLifespan() {
  return (
    <div className="w-full">
      <SEO
        title="How Long Does Roof Coating Last in Florida? | The Roof Store"
        description="Florida's demanding climate — extreme UV, 60+ inches of rain, hurricane-force winds — means coating lifespan varies by system. FungalShield: 5–7 yrs. SmartShield: 10–15 yrs. RoofShield: Lifetime. Complete guide from South Florida's original coating contractor."
        canonical="/roof-coating-lifespan-florida"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Roof Coating Lifespan in Florida</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-white">South Florida Homeowner Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              How Long Does Roof Coating Last in Florida?
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              Florida's climate is one of the most demanding on roofing materials in North America. Here's exactly what to expect from each coating system — and what determines whether your coating lasts 5 years or a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Lifespan Comparison */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Lifespan by Coating System</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Not all roof coatings are the same. Our three systems are engineered for different levels of protection and budget — each with a clear, documented lifespan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systems.map((sys, i) => {
              const Icon = sys.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl border-2 p-8 ${sys.color}`}
                >
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 ${sys.badge}`}>
                    {sys.lifespan}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">{sys.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{sys.sub}</p>
                  <ul className="space-y-2">
                    {sys.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-4">Not sure which system your roof needs?</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Get a Free Roof Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Florida Climate Factors */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Why Florida Is Different — The 4 Lifespan Factors</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A coating that lasts 15 years in Ohio may last 6 years in Broward County. These are the factors that separate a durable Florida coating from one that fails prematurely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {factors.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl border p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/10 rounded-lg p-2">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary">{f.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifespan Maximizers */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-10">How to Maximize Your Coating's Lifespan</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Professional Surface Preparation", desc: "High-pressure cleaning (2,500+ PSI) removes all algae, mildew, oxidation, and loose material before any coating is applied. This step is non-negotiable — any contamination trapped under the coating becomes a failure point within 2–3 years. Our crews spend as much time on prep as on application." },
              { step: "02", title: "Full Crack & Tile Repair Before Coating", desc: "Every cracked tile, loose ridge cap, open valley, and damaged seam must be repaired before coating. Coating over damage extends the damage — it doesn't heal it. A proper pre-coat repair adds years to the finished system's life." },
              { step: "03", title: "Multi-Layer Application at Correct Thickness", desc: "A single thin coat applied to save material will fail in Florida's climate within 2–4 years. Our systems are applied in multiple coats with coverage controlled to the specified rate per square foot — not thinned or extended to cover more area per gallon." },
              { step: "04", title: "Annual Inspection & Spot Repairs", desc: "A 30-minute annual roof inspection catches early wear points — small cracks or areas thinning from ponding water — before they become full failures. Our customers on a maintenance schedule consistently get the high end of each system's lifespan range." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="text-5xl font-serif font-bold text-primary/15 shrink-0 leading-none">{item.step}</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {lifespanFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border p-7"
              >
                <h3 className="font-bold text-foreground mb-3 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary text-center mb-8">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/roof-systems", label: "FungalShield, SmartShield & RoofShield — System Breakdown" },
              { href: "/roof-replacement-alternative-florida", label: "Coating vs. Replacement — Full Cost Comparison" },
              { href: "/hurricane-roof-prep", label: "Hurricane Season Roof Prep Checklist" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors p-4 bg-muted rounded-lg border hover:border-accent">
                <ArrowRight className="h-4 w-4 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Get a Free Roof Life Assessment</h2>
          <p className="text-xl text-white/80 mb-10">
            One of our licensed inspectors will assess your roof's current condition, recommend the right coating system, and give you a written estimate — at no charge. Serving Broward, Miami-Dade &amp; Palm Beach County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Free Inspection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-10 text-lg">
              <a href="tel:954-210-9614">Call 954-210-9614</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
