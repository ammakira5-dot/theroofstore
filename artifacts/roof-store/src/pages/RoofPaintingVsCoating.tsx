import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Roof Paint vs. Roof Coating Systems: What South Florida Homeowners Need to Know",
  description:
    "Most homeowners search for 'roof painting contractors' but what they actually need is a professional roof coating system. Learn the critical difference — and why it matters in South Florida's climate.",
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
};

const paintProblems = [
  {
    issue: "No waterproofing seal",
    detail:
      "Standard roof paint sits on the surface and does not penetrate or seal seams, cracks, or penetrations. Water finds its way in at every joint.",
  },
  {
    issue: "Short lifespan in South Florida",
    detail:
      "South Florida's UV intensity, high heat, and intense rainfall degrade standard paint in 2–3 years — requiring constant reapplication and ongoing cost.",
  },
  {
    issue: "No flexibility",
    detail:
      "Paint dries rigid. As your roof expands and contracts with temperature swings, rigid paint cracks and peels — opening new entry points for water.",
  },
  {
    issue: "No hurricane protection",
    detail:
      "Roof paint is not tested or rated for wind uplift. It adds no structural reinforcement and provides zero additional hurricane protection.",
  },
  {
    issue: "Algae and fungus return quickly",
    detail:
      "Paint provides no antimicrobial protection. Black streaking and biological growth return within a season in South Florida's humid climate.",
  },
  {
    issue: "No insurance or certification value",
    detail:
      "A painted roof does not qualify for Citizens Insurance Roof Life Certification or any extended warranty program.",
  },
];

const coatingBenefits = [
  {
    benefit: "Seamless waterproof membrane",
    detail:
      "Liquid-applied coatings cure into a continuous rubber membrane that bonds to your roof and seals every seam, crack, and penetration — top to bottom.",
  },
  {
    benefit: "Engineered for South Florida",
    detail:
      "Our coating systems are formulated specifically for Florida's climate — UV-stable, heat-reflective, and tested under the most demanding subtropical conditions.",
  },
  {
    benefit: "Flexible and self-healing",
    detail:
      "Elastomeric rubber coatings expand and contract with your roof through temperature cycles without cracking, peeling, or losing adhesion.",
  },
  {
    benefit: "Hurricane wind-uplift rated",
    detail:
      "Our RoofShield system carries Florida Product Approval for wind uplift resistance — tested to perform in hurricane conditions.",
  },
  {
    benefit: "FungalShield protection built in",
    detail:
      "Our RP1 FungalShield system includes permanent antimicrobial protection that prevents black algae, fungus, and biological growth from returning.",
  },
  {
    benefit: "Citizens Insurance certification eligible",
    detail:
      "Professionally applied roof coating systems can qualify your roof for a Citizens Insurance Roof Life Certification, potentially saving you significantly on premiums.",
  },
];

const comparisonRows = [
  { label: "Waterproofing", paint: "None", coating: "Full seamless seal" },
  { label: "Lifespan in South Florida", paint: "2–3 years", coating: "10–15+ years" },
  { label: "Flexibility", paint: "Rigid — cracks", coating: "Elastomeric — moves with roof" },
  { label: "Hurricane rated", paint: "No", coating: "Yes — Florida Product Approval" },
  { label: "Algae / mold protection", paint: "None", coating: "FungalShield antimicrobial" },
  { label: "Citizens certification eligible", paint: "No", coating: "Yes" },
  { label: "Energy savings", paint: "Minimal", coating: "Significant UV reflection" },
  { label: "Warranty", paint: "None", coating: "10–15 year manufacturer warranty" },
  { label: "Long-term cost", paint: "Higher (repeat jobs)", coating: "Lower (one application)" },
];

export default function RoofPaintingVsCoating() {
  return (
    <div className="w-full">
      <SEO
        title="Roof Paint vs. Roof Coating Systems — What South Florida Homeowners Need to Know | The Roof Store"
        description="Searching for a roof painting contractor in South Florida? Learn why professional roof coating systems outperform standard roof paint — better waterproofing, longer lifespan, hurricane-rated. A+ BBB rated since 1994."
        canonical="/roof-painting-vs-coating"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-bold px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="h-4 w-4" />
              Common Misconception — Read This First
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Roof Paint vs. Roof Coating Systems
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl">
              Most South Florida homeowners search for a "roof painting contractor" when their roof starts showing signs
              of age. Here's the critical difference that can save you thousands of dollars — and why it matters more in
              Florida than anywhere else in the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The misconception */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-primary">Why "Roof Painting" Falls Short Here</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Roof painting is a legitimate service in many climates. Apply a coat of elastomeric or acrylic paint, the
              roof looks better, and in mild climates that might hold up for a few years. But South Florida is not a mild
              climate.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We have the most intense UV radiation in the continental United States. We get 60+ inches of rainfall per
              year — much of it in short, violent downpours. We deal with high humidity year-round, tropical storm
              season from June through November, and hurricane-force wind events that test every surface on your home.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In this environment, standard roof paint is a <strong>cosmetic solution to a structural problem.</strong>{" "}
              It makes the roof look better for a season or two, but it doesn't seal, doesn't waterproof, doesn't flex,
              and doesn't protect. Homeowners end up repainting every 2–3 years and still dealing with leaks, algae, and
              deterioration — spending more over time than a proper coating system would have cost upfront.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems with paint */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">6 Problems with Standard Roof Paint in South Florida</h2>
            <p className="text-muted-foreground mb-10">These aren't opinions — they're documented performance realities in our climate.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paintProblems.map((item, i) => (
                <div key={i} className="bg-background rounded-xl p-6 flex gap-4">
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-1">{item.issue}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What coating systems do instead */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">What a Roof Coating System Actually Does</h2>
            <p className="text-muted-foreground mb-10">
              Our proprietary coating systems — FungalShield (RP1), SmartShield (RP2), and RoofShield (RP3) — are not
              paint. They are liquid-applied roofing systems that cure into a continuous rubber membrane.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coatingBenefits.map((item, i) => (
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
                    <th className="text-center px-6 py-4 font-bold text-red-300">Standard Roof Paint</th>
                    <th className="text-center px-6 py-4 font-bold text-accent">Roof Coating System</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                      <td className="px-6 py-4 text-center text-muted-foreground text-sm">
                        <span className="inline-flex items-center gap-1">
                          <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                          {row.paint}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm font-medium text-accent">
                        <span className="inline-flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 shrink-0" />
                          {row.coating}
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

      {/* Our three systems */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Our Three Coating Systems</h2>
            <p className="text-muted-foreground mb-10">
              Unlike painting contractors who apply a single product to every roof, we match the right system to your
              specific roof type, condition, and goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "FungalShield",
                  code: "RP1",
                  href: "/products/fungalshield",
                  desc: "Our antimicrobial coating system designed to permanently prevent algae, mold, and black streaking. Ideal for tile roofs in heavily shaded or humid environments.",
                  tag: "Best for: Tile — algae & mold control",
                },
                {
                  name: "SmartShield",
                  code: "RP2",
                  href: "/products/smartshield",
                  desc: "Our energy-efficient reflective coating system that dramatically reduces roof surface temperature and lowers cooling costs — while providing a full waterproof seal.",
                  tag: "Best for: Flat / low-slope roofs",
                },
                {
                  name: "RoofShield",
                  code: "RP3",
                  href: "/products/roofshield",
                  desc: "Our premium hurricane-rated rubber roof system with the highest wind uplift resistance and longest warranty. Built for South Florida's most demanding exposure conditions.",
                  tag: "Best for: Maximum protection & warranty",
                },
              ].map((sys) => (
                <Link key={sys.code} href={sys.href} className="group block bg-muted rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-xs font-bold text-accent mb-1">{sys.code}</div>
                  <div className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">{sys.name}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{sys.desc}</p>
                  <div className="text-xs font-medium text-foreground bg-accent/10 rounded px-3 py-1.5 inline-block">{sys.tag}</div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-10">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I just paint my roof and save money?",
                  a: "You can, but in South Florida it's rarely the cheaper option long-term. A painted roof typically needs reapplication every 2–3 years. Over a 10-year period you'll spend more on paint jobs than you would have on a single coating system — and you'll still have leaks and deterioration. The coating system pays for itself through longevity and energy savings.",
                },
                {
                  q: "Is roof coating the same as roof paint?",
                  a: "No. Roof paint is a surface coating that dries rigid and provides minimal waterproofing. Roof coating systems are liquid-applied membranes that cure into a flexible, seamless rubber barrier. They're classified differently by building codes, carry manufacturer warranties, and are tested to Florida Product Approval wind uplift standards — none of which apply to paint.",
                },
                {
                  q: "Do I need a new roof before I can get a coating?",
                  a: "Usually not. Our coating systems are designed to be applied directly over an existing roof — whether it's a flat deck, barrel tile, shingle, or metal. We conduct a thorough inspection first to identify any areas needing spot repair. In most cases, a coating system eliminates the need for a full replacement entirely.",
                },
                {
                  q: "Will a roof coating help with my Citizens Insurance?",
                  a: "Yes. Professionally applied roof coating systems from a licensed contractor can qualify your roof for a Citizens Insurance Roof Life Certification — which may allow you to keep coverage on an older roof and potentially reduce your premium. Ask us about this when you call.",
                },
                {
                  q: "How long does a roof coating last?",
                  a: "Our coating systems carry manufacturer warranties of 10–15 years depending on the system selected. With proper maintenance and periodic inspection, many of our customers' roofs have lasted 20+ years without replacement.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-xl p-6">
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
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Stop Painting and Start Protecting?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free roof inspection from a certified technician. We'll assess your roof, explain which system is
              right for you, and give you a no-obligation estimate — no pressure, no sales pitch.
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
              Serving Broward, Miami-Dade, Palm Beach, and Monroe Counties · A+ BBB Rated since 1994
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
