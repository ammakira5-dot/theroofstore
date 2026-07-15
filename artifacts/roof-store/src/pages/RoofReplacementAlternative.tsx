import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, XCircle, Phone, ArrowRight, DollarSign, ShieldCheck, Droplets, Sun, Clock, BookOpen } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Roof Replacement Alternative Florida — Coat It for Half the Cost",
    description:
      "Florida homeowners considering full roof replacement have a proven alternative: professional liquid rubber roof coating. Learn how coating vs. replacing stacks up on cost, lifespan, and hurricane protection.",
    datePublished: "2024-09-01",
    dateModified: "2026-07-12",
    author: {
      "@type": "Organization",
      name: "The Roof Store Waterproofing Products",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "The Roof Store Waterproofing Products",
      logo: { "@type": "ImageObject", url: `${BASE}/images/logo.png` },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I coat my roof instead of replacing it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — in most cases. If your roof deck is structurally sound and there is no widespread rot or failure, a professional liquid rubber coating system is a proven alternative to full replacement. It seals your existing roof, adds waterproofing, and can extend roof life by 10–15 years or more at roughly half the cost of a new roof.",
        },
      },
      {
        "@type": "Question",
        name: "How much does roof coating cost per square foot in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional roof coating in Florida typically costs $3–$7 per square foot depending on roof type, condition, and coating system. Full roof replacement in Florida averages $10–$20 per square foot. Coating saves most homeowners 40–60% compared to a full tear-off and replacement.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a roof coating last in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professionally applied liquid rubber coating system lasts 10–15 years in Florida's climate when properly maintained. Our RoofShield system carries a manufacturer's warranty and is TAS-106 Dade County pull-test rated for hurricane wind uplift.",
        },
      },
      {
        "@type": "Question",
        name: "Is roof coating worth it vs. replacement for tile roofs in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most Florida tile roofs, coating is absolutely worth it. Tile roofs in Florida face fungal growth, grout deterioration, and hurricane damage — all of which a coating system addresses without the cost and disruption of full replacement. Our SmartShield and RoofShield systems are specifically engineered for barrel tile, cement tile, and S-tile roofs.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best roof replacement alternative for flat roofs in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For flat roofs in Florida, a liquid rubber coating system is the most cost-effective alternative to full replacement. Our systems create a seamless, ponding-water-rated membrane over your existing flat deck — eliminating seams and penetrations where leaks start, at a fraction of replacement cost.",
        },
      },
    ],
  },
];

const comparisonRows = [
  // NOTE: keep in sync with itemListSchema below
  { label: "Average cost (1,500 sq ft roof)", replace: "$15,000–$30,000", coat: "$4,500–$10,500" },
  { label: "Disruption to home", replace: "Major — full tear-off", coat: "Minimal — applied over existing" },
  { label: "Time to complete", replace: "3–7 days", coat: "1–2 days" },
  { label: "Waterproofing", replace: "Dependent on new materials", coat: "Seamless liquid rubber seal" },
  { label: "Hurricane wind-uplift rated", replace: "Depends on product", coat: "Yes — TAS-106 Dade County rated" },
  { label: "Lifespan added", replace: "New roof: 20–30 years", coat: "10–15+ years extension" },
  { label: "Energy savings", replace: "Depends on color/material", coat: "Yes — FPL-documented up to 23%" },
  { label: "Fungal / algae protection", replace: "Not included", coat: "Yes — Fungal Shield antimicrobial" },
  { label: "Citizens Insurance certification", replace: "New roof qualifies", coat: "Coated roof can also qualify" },
  { label: "Warranty", replace: "Manufacturer warranty varies", coat: "10–15 year manufacturer warranty" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Roof Coating vs. Full Replacement — Florida Comparison",
  description:
    "Side-by-side comparison of professional roof coating vs. full roof replacement for Florida homeowners on cost, disruption, lifespan, hurricane protection, and more.",
  itemListElement: comparisonRows.map((row, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: row.label,
    description: `Full Replacement: ${row.replace} | Roof Coating: ${row.coat}`,
  })),
};

const whenCoatingWorks = [
  {
    icon: ShieldCheck,
    title: "Structurally sound deck",
    desc: "Your roof deck and framing are intact — no widespread rot, collapse, or structural failure. Coating seals and protects from the outside.",
  },
  {
    icon: Droplets,
    title: "Active leaks or water intrusion",
    desc: "Liquid rubber coating seals cracks, seams, and penetrations — stopping active leaks on tile, flat, and metal roofs.",
  },
  {
    icon: Sun,
    title: "Fading, chalking, or algae growth",
    desc: "Surface degradation, black streaking, and biological growth are exactly what our Fungal Shield and Smart Shield systems are built to fix.",
  },
  {
    icon: DollarSign,
    title: "Replacement quote feels too high",
    desc: "If you've received a replacement quote and it's straining your budget, coating delivers most of the same protection at 40–60% less cost.",
  },
];

const whenReplaceNeeded = [
  "Roof deck is rotted, sagging, or structurally compromised",
  "More than 25–30% of tiles are broken, missing, or irreparable",
  "Underlying insulation or decking is water-saturated throughout",
  "Local code requires tear-off due to existing layers",
];

const faqs = [
  {
    q: "Can I coat my roof instead of replacing it?",
    a: "Yes — in most cases. If your roof deck is structurally sound, a professional liquid rubber coating system is a proven alternative. It seals, waterproofs, and extends your existing roof's life by 10–15+ years at roughly half the cost of a new roof.",
  },
  {
    q: "How much does roof coating cost per square foot in Florida?",
    a: "Professional roof coating in Florida typically runs $3–$7 per square foot, compared to $10–$20 per square foot for full replacement. Most homeowners save 40–60% by coating instead of replacing.",
  },
  {
    q: "How long does a roof coating last in Florida?",
    a: "A professionally applied liquid rubber system lasts 10–15 years in Florida's climate. Our RoofShield system is TAS-106 Dade County pull-test rated for hurricane wind uplift and carries a manufacturer's warranty.",
  },
  {
    q: "Is roof restoration worth it vs. replacement for tile roofs?",
    a: "For most Florida tile roofs, absolutely. Our SmartShield and RoofShield systems are engineered for barrel tile, cement tile, and S-tile roofs — addressing fungal growth, grout deterioration, and hurricane vulnerability without the disruption or cost of full replacement.",
  },
  {
    q: "What's the best roof replacement alternative for flat roofs in Florida?",
    a: "A liquid rubber coating system. It creates a seamless, ponding-water-rated membrane directly over your existing flat deck — eliminating every seam and penetration where leaks start, at a fraction of replacement cost.",
  },
];

export default function RoofReplacementAlternative() {
  return (
    <div className="w-full">
      <SEO
        title="Roof Replacement Alternative Florida | The Roof Store"
        description="Considering a full roof replacement in Florida? There's a proven alternative: professional liquid rubber roof coating at 40–60% less cost. Tile roofs, flat roofs, and more. TAS-106 hurricane rated. A+ BBB since 1994. Call 954-210-9614."
        canonical="/roof-replacement-alternative-florida"
        schema={[...schema, itemListSchema]}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#28A74520,_transparent_70%)]" />
        <div className="container px-4 max-w-4xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Don't Re-Roof It — Weatherproof It
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Roof Replacement Alternative<br />
              <span className="text-accent">for Florida Homeowners</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl mb-4">
              Before you spend $15,000–$30,000 on a new roof, there's a question worth asking: <strong className="text-white">can you coat it instead?</strong> For most Florida tile roofs and flat roofs, the answer is yes — at roughly half the cost.
            </p>
            <p className="text-white/70 text-lg mb-10 max-w-2xl">
              The Roof Store has been Florida's roof coating alternative specialist since 1994. A+ BBB rated. TAS-106 Dade County hurricane rated. Serving Broward, Miami-Dade, and Palm Beach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9542109614"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                Call 954-210-9614
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors border border-white/20 text-lg"
              >
                Get a Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            {[
              { value: "40–60%", label: "Less than full replacement" },
              { value: "10–15+", label: "Years of added roof life" },
              { value: "30+", label: "Years serving Florida" },
              { value: "TAS-106", label: "Dade County hurricane rated" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">{s.value}</div>
                <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Article meta + quick nav */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
              <BookOpen className="h-4 w-4 text-accent" />
              <span>By <strong className="text-foreground">The Roof Store Team</strong></span>
              <span className="text-muted-foreground/40">·</span>
              <Clock className="h-3.5 w-3.5" />
              <span>7 min read</span>
              <span className="text-muted-foreground/40">·</span>
              <span>Updated July 2026</span>
            </div>
            <div className="bg-muted rounded-2xl border border-border overflow-hidden">
              <div className="bg-primary/5 border-b border-border px-6 py-4">
                <div className="text-xs font-bold text-accent uppercase tracking-widest">Article Quick Nav</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="px-6 py-5">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">What You'll Learn</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Can you coat instead of replace?",
                      "Coating vs. replacement — side by side",
                      "When coating is the right call",
                      "Tile roof restoration options",
                      "Flat roof coating alternative",
                      "Cost per square foot in Florida",
                      "Frequently asked questions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-5">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Next Steps</div>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="tel:9542109614" className="flex items-center gap-2 text-accent font-bold hover:underline">
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        Call for a free roof assessment
                      </a>
                    </li>
                    <li>
                      <Link href="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                        Request a free estimate online
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                        Browse our coating systems
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before / After — Lincoln Baker */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Real Customer Result
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              See the Difference — Before &amp; After
            </h2>
            <p className="text-muted-foreground text-lg">
              Tile roof restoration — South Florida home. Coating instead of full replacement.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-border bg-muted">
            <img
              src="/images/before-after-tile-roof-coating.jpg"
              alt="South Florida tile roof before and after Roof Shield coating restoration — no replacement needed"
              className="w-full object-cover"
            />
            <div className="px-6 py-4 bg-muted border-t border-border">
              <p className="text-sm text-muted-foreground text-center">South Florida tile roof — restored with Roof Shield coating. No tear-off. No replacement. Fully weatherproofed.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The core question */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              1. Can You Coat Your Roof Instead of Replacing It?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              This is the question every Florida homeowner facing a large replacement quote should be asking. The short answer: <strong className="text-foreground">in most cases, yes</strong> — and you'll pay roughly half as much to do it.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              A professional liquid rubber coating system doesn't replace your roof — it seals it, waterproofs it, and bonds to it as a continuous flexible membrane. It fills every crack, seam, and void that water uses to get in. Applied correctly, it extends your existing roof's life by 10–15 years or more.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The key word is <em>professionally applied</em>. This is not roof paint. Our proprietary systems — FungalShield (RP1), SmartShield (RP2), and RoofShield (RP3) — are 100% resin liquid rubber, no fillers, rated for ponding water, and tested under Florida's most demanding conditions including Dade County's TAS-106 hurricane wind-uplift standard.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-5 pl-5 border-l-4 border-accent/40">
              Many Florida homeowners start by searching for <strong className="text-foreground">"roof painting"</strong> — and that search brings them to exactly the right place. What's commonly called roof painting in South Florida is, at the professional level, a liquid-applied elastomeric coating system. It outperforms standard paint in waterproofing, flexibility, and longevity by a wide margin. If roof painting is what brought you here, you're already one step ahead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              2. Roof Restoration vs. Replacement — How They Compare
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Side by side, on the factors that matter most to Florida homeowners.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full bg-card text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-bold">Factor</th>
                  <th className="text-center px-6 py-4 font-bold">Full Replacement</th>
                  <th className="text-center px-6 py-4 font-bold text-accent">Roof Coating</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                    <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{row.replace}</td>
                    <td className="px-6 py-4 text-center font-semibold text-accent">{row.coat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* When coating works */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              3. When Roof Coating Is the Right Call
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Coating works when the structure of your roof is sound. Here are the signs your roof is a good candidate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {whenCoatingWorks.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted rounded-2xl p-7 border border-border flex gap-5 items-start">
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* When replacement is needed */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-serif font-bold text-primary mb-5">When Full Replacement Is Necessary</h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              We'll always give you an honest assessment. Coating isn't right for every roof. These are the situations where replacement is the correct answer:
            </p>
            <ul className="space-y-3">
              {whenReplaceNeeded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-5 italic">
              Not sure which category your roof falls into? A free on-site inspection tells you definitively — no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tile roof + flat roof sections */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              4. Tile Roof Restoration &amp; Flat Roof Coating — Florida's Two Biggest Needs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tile roof */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-background rounded-2xl p-8 border border-border">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Tile Roofs</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Tile Roof Restoration Instead of Replacement</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Florida's barrel tile, cement tile, and S-tile roofs face a unique set of problems: black algae and fungal streaking, crumbling grout and mortar, and wind uplift vulnerability during hurricane season. Full tile replacement is expensive and disruptive — and often unnecessary.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Our SmartShield (RP2) and RoofShield (RP3) systems coat directly over existing tile, sealing every surface and filling every void. Available in 3,000+ colors. TAS-106 hurricane wind-uplift tested.
              </p>
              <ul className="space-y-2">
                {["Barrel tile · cement tile · S-tile", "Fungal and algae elimination", "3,000+ color options", "Hurricane wind-uplift rated", "Half the cost of tile replacement"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Flat roof */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-background rounded-2xl p-8 border border-border">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Flat Roofs</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Flat Roof Coating as a Replacement Alternative</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Flat roofs — common on commercial buildings, townhomes, and Florida additions — develop seam failures and ponding-water leaks as membranes age. Full flat roof replacement tears off and re-lays an entire membrane system. Coating avoids the tear-off entirely.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Our liquid rubber systems are rated for ponding water and below-grade applications — meaning they seal completely even where water sits. Applied seamlessly over your existing flat deck, they eliminate every seam and penetration point.
              </p>
              <ul className="space-y-2">
                {["Seamless — no seams or joints to fail", "Ponding-water rated", "Residential and commercial", "Applied over existing deck — no tear-off", "FPL-documented energy savings"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand image — truck */}
      <section className="py-10 bg-background">
        <div className="container px-4 max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <img
                src="/images/roof-replacement-alternative-truck.png"
                alt="The Roof Store truck — Don't Re-Roof It, Weatherproof It at half the cost — South Florida"
                className="w-full object-cover max-h-56"
              />
              <div className="bg-muted px-6 py-3 text-xs text-muted-foreground italic text-center">
                The Roof Store — serving South Florida since 1994. "Don't Re-Roof It — Weatherproof It @ ½ the Cost."
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost section */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              5. Roof Coating Cost Per Square Foot in Florida
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The numbers are straightforward. On a typical 1,500 square foot Florida roof:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="bg-muted rounded-2xl p-7 border border-border">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Full Roof Replacement</div>
                <div className="text-4xl font-serif font-bold text-foreground mb-1">$15K–$30K</div>
                <div className="text-sm text-muted-foreground">$10–$20 per sq ft · Major disruption · 3–7 days</div>
              </div>
              <div className="bg-accent/5 rounded-2xl p-7 border-2 border-accent">
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Professional Roof Coating</div>
                <div className="text-4xl font-serif font-bold text-accent mb-1">$4.5K–$10K</div>
                <div className="text-sm text-muted-foreground">$3–$7 per sq ft · Minimal disruption · 1–2 days</div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The savings average <strong className="text-foreground">$10,000–$20,000</strong> on a typical Florida home — with comparable or superior waterproofing, hurricane protection, and a manufacturer's warranty. That's the case for coating first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              6. Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-background rounded-2xl border border-border p-7">
                <h3 className="font-bold text-foreground mb-3 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-serif font-bold mb-4">
              Get a Free Roof Assessment — No Obligation
            </h2>
            <p className="text-xl text-white/80 mb-2">
              We'll tell you honestly whether coating or replacement is the right answer for your roof.
            </p>
            <p className="text-white/50 text-sm mb-10">
              Serving Broward, Miami-Dade &amp; Palm Beach Counties · 4801 S University Dr, Davie FL 33328
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9542109614"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                954-210-9614
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-lg transition-colors border border-white/20 text-lg"
              >
                Request Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-white/40 text-xs mt-8">
              A+ BBB Rated Since 1994 · TAS-106 Dade County Hurricane Rated · Licensed &amp; Insured
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
