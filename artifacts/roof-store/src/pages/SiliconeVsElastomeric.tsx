import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Silicone vs. Elastomeric Roof Coating: Which Is Better for Florida?",
    description:
      "A side-by-side comparison of silicone and elastomeric roof coatings for South Florida's climate — flexibility, color options, hurricane wind-uplift testing, and long-term performance.",
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
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Roof Systems", item: `${BASE}/roof-systems` },
      { "@type": "ListItem", position: 3, name: "Silicone vs. Elastomeric Roof Coating", item: `${BASE}/silicone-vs-elastomeric-roof-coating` },
    ],
  },
];

const comparisonRows = [
  { label: "Ponding water resistance", silicone: "Excellent — best-in-class", elastomeric: "Good, not recommended for standing water" },
  { label: "Flexibility across temperature swings", silicone: "Good", elastomeric: "Excellent — engineered for wide swings" },
  { label: "Color options", silicone: "Limited — white, gray, tan", elastomeric: "3,000+ colors, fully custom" },
  { label: "Hurricane wind-uplift testing", silicone: "Not independently tested", elastomeric: "Passed the Dade County Certified TAS-106 Uplift Test (Roof Shield)" },
  { label: "Dirt pickup over time", silicone: "Higher — surface stays tacky", elastomeric: "Lower — cures to a firmer, cleaner finish" },
  { label: "Recoat / recoatability", silicone: "Difficult — needs full solvent-wash prep", elastomeric: "Straightforward maintenance recoats" },
  { label: "Best application", silicone: "Commercial flat roofs w/ ponding water", elastomeric: "Tile, metal & flat residential/commercial roofs" },
  { label: "Typical warranty (our systems)", silicone: "Up to 50-year (Grade 3 formulation)", elastomeric: "Standard–enhanced (Grade 1–2 formulation)" },
];

const elastomericBenefits = [
  {
    benefit: "Built for Florida's temperature extremes",
    detail:
      "Elastomeric coatings stay flexible across a wide temperature range — critical when a tile or flat roof surface can swing from cool overnight lows to 150°F+ in direct summer sun. That flexibility prevents cracking and delamination that rigid or overly stiff coatings can suffer.",
  },
  {
    benefit: "Full custom color range",
    detail:
      "Our Smart Shield system offers 3,000+ tintable colors — including dark charcoal and brown shades enhanced with BASF Cool Pigment Technology. Silicone coatings are typically limited to white, gray, or tan.",
  },
  {
    benefit: "Independently hurricane-tested",
    detail:
      "Our Roof Shield system is the world's only liquid-applied roof coating to pass the Dade County Certified TAS-106 Uplift Pull Test — the same wind-uplift standard required for new tile roof installations in Florida.",
  },
  {
    benefit: "Lower dirt pickup, cleaner over time",
    detail:
      "Elastomeric coatings cure to a firmer surface than silicone, which tends to stay tacky and attract dirt, pollen, and airborne debris — especially in Florida's dust and pollen-heavy seasons.",
  },
  {
    benefit: "Easier long-term maintenance",
    detail:
      "Silicone coatings are notoriously difficult to recoat — they require an aggressive solvent wash to accept a new topcoat. Our elastomeric and polyurethane systems are far more straightforward to maintain and recoat over time.",
  },
  {
    benefit: "Silicone still has its place",
    detail:
      "We do offer a Grade 3 silicone formulation with up to a 50-year product warranty for the one application where silicone genuinely outperforms: commercial flat roofs with standing/ponding water beyond ½ inch.",
  },
];

const faqs = [
  {
    q: "Is silicone or elastomeric roof coating better?",
    a: "It depends on the roof. For most Florida homes and standard commercial roofs, elastomeric or polyurethane coatings outperform silicone — they flex better across our extreme temperature swings, come in far more colors, and (in our Roof Shield system) have passed the Dade County Certified TAS-106 Uplift Test, which silicone products haven't. Silicone's one clear advantage is ponding water resistance, so we reserve it for commercial flat roofs that hold standing water.",
  },
  {
    q: "Why doesn't The Roof Store recommend silicone for most roofs?",
    a: "Silicone coatings stay tacky longer, which attracts more dirt and pollen over time, and they're difficult to recoat later — recoating requires an aggressive solvent wash that many contractors skip, leading to adhesion failures. Elastomeric and polyurethane systems are easier to maintain and better suited to Florida's UV intensity and heat.",
  },
  {
    q: "When would you use silicone instead of elastomeric?",
    a: "Silicone is the right call specifically for commercial flat roofs with negative slope or standing water deeper than ½ inch, where its superior ponding-water resistance outperforms elastomeric or polyurethane. Outside of that scenario, our elastomeric and polyurethane systems are the better long-term choice for Florida roofs.",
  },
  {
    q: "Do your silicone coatings still carry a strong warranty?",
    a: "Yes. Our Grade 3 silicone formulation carries up to a 50-year product warranty — the highest in our product line — and is used specifically where ponding water demands silicone's performance.",
  },
  {
    q: "Can I get an elastomeric coating in a dark color without it fading?",
    a: "Yes. Our Smart Shield system uses BASF Cool Pigment Technology, which increases Total Solar Reflectance by 32% even in dark colors like charcoal and brown — something most silicone products can't replicate given their limited color range.",
  },
];

export default function SiliconeVsElastomeric() {
  return (
    <div className="w-full">
      <SEO
        title="Silicone vs. Elastomeric Roof Coating: Which Is Better? | Florida"
        description="Comparing silicone and elastomeric roof coatings for South Florida's climate: flexibility, color options, hurricane wind-uplift testing, ponding water resistance, and long-term maintenance. Licensed & insured since 1994 — 954-210-9614."
        canonical="/silicone-vs-elastomeric-roof-coating"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-bold px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="h-4 w-4" />
              A Question We Get Asked Every Week
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Silicone vs. Elastomeric Roof Coating
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl">
              Silicone roof coatings are popular nationally, but The Roof Store defaults to elastomeric and
              polyurethane systems for most South Florida roofs — and that's a deliberate engineering choice, not a
              cost shortcut. Here's the honest breakdown of when each formulation wins.
            </p>
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
            <h2 className="text-3xl font-serif font-bold text-primary">Two Coating Chemistries, Different Strengths</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Silicone and elastomeric coatings are both liquid-applied, waterproof, and UV-stable — but they behave
              very differently in South Florida's environment. Silicone's biggest strength is resistance to standing,
              ponding water, which makes it the right call for certain commercial flat roofs. But for the flexibility,
              color range, and hurricane performance most South Florida homes and businesses need, elastomeric and
              polyurethane systems are the better all-around choice.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We manufacture all three formulation grades — elastomeric, polyurethane, and silicone — and specify the
              right one for your roof after a manufacturer's inspection. See our full breakdown of formulation
              grades on the <Link href="/roof-systems" className="text-accent font-semibold hover:underline">Roof Systems</Link> page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-10 text-center">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto rounded-xl shadow-sm">
              <table className="w-full bg-background">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-4 font-bold">Factor</th>
                    <th className="text-center px-6 py-4 font-bold text-white/80">Silicone</th>
                    <th className="text-center px-6 py-4 font-bold text-accent">Elastomeric / Polyurethane</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground text-sm">{row.silicone}</td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-accent">
                        <span className="inline-flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 shrink-0" />
                          {row.elastomeric}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why elastomeric for most roofs */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Why We Default to Elastomeric for Most Florida Roofs</h2>
            <p className="text-muted-foreground mb-10">
              Six reasons elastomeric and polyurethane outperform silicone for the majority of roofs we service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {elastomericBenefits.map((item, i) => (
                <div key={i} className="bg-accent/5 border border-accent/20 rounded-xl p-6 flex gap-4">
                  <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-1">{item.benefit}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* When silicone wins */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-background rounded-xl p-8 border shadow-sm flex gap-4">
              <XCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2">The One Case Silicone Wins: Ponding Water</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If your commercial flat roof holds more than ½ inch of standing water for extended periods, silicone
                  is the only formulation we recommend. It's the most durable coating ingredient available for that
                  specific scenario, and our Grade 3 silicone carries up to a 50-year product warranty. Outside of
                  ponding water conditions, our elastomeric and polyurethane systems are the better long-term
                  investment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-10">Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((item, i) => (
                <div key={i} className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-accent font-serif text-xl mt-0.5">Q</span>
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-7">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold mb-4">Not Sure Which Formulation Your Roof Needs?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our manufacturer's inspection will determine the right formulation — elastomeric, polyurethane, or
              silicone — for your specific roof, goals, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Free Roof Evaluation &amp; Estimate
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
