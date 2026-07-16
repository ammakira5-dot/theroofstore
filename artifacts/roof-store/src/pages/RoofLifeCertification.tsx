import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ShieldCheck, FileCheck, AlertTriangle, Clock, DollarSign, Home, CheckCircle, Phone } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Insurance Company Demands Re-Roofing",
    description: "Your insurer says your roof is too old and threatens to cancel your policy unless you replace it — a $15,000–$40,000 expense.",
  },
  {
    icon: Clock,
    title: "Roof Still Has Years of Life Left",
    description: "Your roof looks fine and doesn't leak, but insurance companies flag it based solely on age, not actual condition.",
  },
  {
    icon: DollarSign,
    title: "Re-Roofing Cost Is Unaffordable",
    description: "A full roof replacement disrupts your life and budget. There has to be a better option — and there is.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free Roof Assessment",
    description: "We inspect your roof's current condition — tile integrity, waterproofing status, structural soundness — and determine if it's a candidate for certification treatment.",
  },
  {
    number: "02",
    title: "Professional Coating Application",
    description: "We apply our Fungal Shield, Smart Shield, or Roof Shield rubber coating system — a high-strength waterproof membrane that restores and protects the roof surface.",
  },
  {
    number: "03",
    title: "Extended Roof Life",
    description: "Our treatment restores your roof's protective performance — giving you the best possible foundation when you exercise your legal right to request an independent Useful Life Exam.",
  },
  {
    number: "04",
    title: "Keep Your Insurance",
    description: "With a professionally restored roof, you are in the strongest possible position when a licensed inspector assesses its condition. It is the inspector's report — not the contractor — that the insurance company recognizes.",
  },
];

const benefits = [
  "Avoid a $15,000–$40,000 full roof replacement",
  "Keep your existing homeowner's insurance policy",
  "100% acrylic elastomeric rubber coating — not just paint",
  "Helps put your roof in its strongest condition before an independent Useful Life Exam",
  "Works on cement tile, barrel tile, shingle, flat, and metal roofs",
  "A+ BBB Rated — serving South Florida since 1994",
  "Licensed Florida roofing contractor",
  "Free assessment — no obligation",
];

const BASE = "https://www.theroofstore.net";

export default function RoofLifeCertification() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Additional Roof Life Certification & Roof Life Extension — The Roof Store",
    url: `${BASE}/roof-life-certification`,
    description: "Professional roof restoration and coating for aging Florida roofs — helping homeowners take a proactive position before an independent Useful Life Exam and putting their roof in the strongest possible condition for insurance review.",
    provider: {
      "@type": "LocalBusiness",
      name: "The Roof Store Waterproofing Products",
      alternateName: "The Roof Store",
      telephone: "954-210-9614",
      areaServed: ["Broward County", "Miami-Dade County", "Palm Beach County"],
    },
    serviceType: "Additional Roof Life Certification",
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
  };

  return (
    <>
      <SEO
        title="Roof Life Extension & Certification Florida | The Roof Store"
        description="Florida insurance threatening to cancel your policy over your roof's age? Florida law gives homeowners the right to request an independent Useful Life Exam. We help get your roof in the strongest possible condition before the inspector arrives. Serving Broward, Miami-Dade & Palm Beach since 1994."
        canonical={`${BASE}/roof-life-certification`}
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <FileCheck className="h-4 w-4" />
              FLORIDA ROOF LIFE EXTENSION & CERTIFICATION SERVICE
            </div>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Don't Let Your Insurance Company<br />
              <span className="text-accent">Force a Roof Replacement</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              If your Florida insurer is threatening to cancel your policy because of your roof's age, your best move is a proactive one. Florida law gives homeowners the right to request an independent Useful Life Exam — and a professionally restored, well-maintained roof puts you in the strongest possible position when the inspector arrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                  Get a Free Roof Assessment
                </Button>
              </Link>
              <a href="tel:954-210-9614">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold px-8 gap-2">
                  <Phone className="h-4 w-4" />
                  954-210-9614
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">
              The Florida Roof Insurance Crisis
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Florida insurance companies are canceling policies on roofs over 15–20 years old — regardless of actual condition. Thousands of homeowners are being forced into unnecessary replacements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-red-50 border border-red-100 rounded-2xl p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <p.icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary mb-2">{p.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <ShieldCheck className="h-4 w-4" />
              THE SOLUTION
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">
              How Our Roof Life Extension Treatment Works
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our high-strength liquid rubber coating system restores your roof to peak protective performance — so when you exercise your legal right to request an independent Useful Life Exam, your roof speaks for itself.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="text-5xl font-serif font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
                Why Homeowners Choose<br />
                <span className="text-accent">The Roof Store</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Since 1994, we've helped thousands of South Florida homeowners protect their roofs and their insurance policies — without the cost and disruption of a full replacement.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                  Schedule Your Free Assessment
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/90">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roof Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-serif font-bold text-3xl text-primary mb-4">
              Roof Types We Treat
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Our rubber coating systems work on virtually every residential roof type common in South Florida.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Cement Tile Roofs",
              "Barrel Tile Roofs",
              "Spanish S-Tile Roofs",
              "Flat & Low-Slope Roofs",
              "Shingle Roofs",
              "Metal Roofs",
            ].map((type, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-4">
                <Home className="h-5 w-5 text-accent shrink-0" />
                <span className="font-medium text-primary">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Your Legal Right as a Florida Homeowner */}
      <section className="py-16 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-6">
            Section 1 — The Law
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">Your Legal Right as a Florida Homeowner</h2>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            Most Florida homeowners facing a cancellation notice don't know this right exists. It is written into state law — and it belongs to you, not to your insurance company.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">An insurance company cannot legally cancel your policy or force you to replace your roof simply because of its age.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The law</p>
              <p className="text-foreground/70 leading-relaxed">Under <strong className="text-primary">Florida Statute §627.7011(5)</strong>, enacted through <strong className="text-primary">Senate Bill 2-D signed May 26, 2022</strong>, insurers are expressly prohibited from non-renewing or denying coverage based on roof age alone — provided a licensed inspector's written report confirms sufficient remaining useful life. <strong className="text-primary">Senate Bill 2-A</strong>, signed December 2022 and effective <strong className="text-primary">January 1, 2023</strong>, reinforced and expanded these protections.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">The authority to request an independent roof inspection belongs to the homeowner — not the insurance company, and not the contractor.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The law</p>
              <p className="text-foreground/70 leading-relaxed">Florida homeowners have the statutory right to request a <strong className="text-primary">Useful Life Exam</strong> — an independent inspection performed by a licensed Florida contractor or engineer. It is that report, and only that report, that the insurance company is legally required to recognize. No contractor certifies your roof's useful life. No product does. The right is yours.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">Citizens Insurance has a formal, documented process for this — and specific dates when it became enforceable.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <p className="text-foreground/70 leading-relaxed">Citizens Property Insurance Corporation formalized this through its <strong className="text-primary">Roof Condition Certification Form, <a href="https://www.citizensfla.com/documents/20702/1199344/CIT+RCF-1+03+23.pdf" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-accent/80">CIT RCF-1</a></strong>. Binding operational rules took effect <strong className="text-primary">May 1, 2023</strong> (new business) and <strong className="text-primary">September 1, 2023</strong> (policy renewals), officially codifying that a certified inspector must verify a minimum of <strong className="text-primary">5 years of remaining useful life</strong> to bypass the replacement requirement.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">This right can only be exercised once — so the condition of the roof at the time of that inspection matters enormously.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <p className="text-foreground/70 leading-relaxed">In <strong className="text-primary">June 2024</strong>, Citizens issued a formal restriction: the 5-year useful life extension is available <strong className="text-primary">one time only, per property</strong>. When that period expires, full replacement is required. There is no second extension. A homeowner who arrives at that inspection with a roof in poor condition has lost their one opportunity.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">The State of Florida itself endorses proactive roof maintenance as the answer — not replacement.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <p className="text-foreground/70 leading-relaxed">In <strong className="text-primary">July 2024</strong>, Governor DeSantis signed <strong className="text-primary">Senate Bill 7028</strong>, adding <strong className="text-primary">$200 million</strong> to the <strong className="text-primary">My Safe Florida Home Program</strong> — a state grant providing <strong className="text-primary">$2 for every $1 spent</strong>, up to <strong className="text-primary">$10,000</strong>, specifically for wind-mitigation roof upgrades. The state's own policy funds the proactive approach.</p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">The pressure from insurers is increasing. The legislative relief homeowners were waiting for has not arrived.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <p className="text-foreground/70 leading-relaxed">In <strong className="text-primary">July 2025</strong>, private carriers began aggressively non-renewing policies on shingle roofs over 15 years old. In <strong className="text-primary">March 2026</strong>, <strong className="text-primary">House Bill 815</strong> — which would have required insurers to treat different roof types differently under the age rule — <strong className="text-primary">died in committee on March 13, 2026</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Puts You in the Strongest Position */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-6">
            Section 2 — Your Best Move
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">What Puts You in the Strongest Position</h2>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            The homeowner who takes a proactive position before the inspector arrives is in a fundamentally different situation than one who waits.
          </p>

          <div className="space-y-8">
            <div className="bg-slate-50 rounded-2xl p-7 border border-border">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">The insurance company can only use the age of the roof against you. That argument does not prevail when the homeowner has taken demonstrable steps to maintain the roof's condition.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <p className="text-foreground/70 leading-relaxed">Florida Statute §627.7011(5) is explicit — age alone is not sufficient grounds for cancellation when a licensed inspector's report documents sufficient remaining useful life. A roof that is cleaned, repaired, and professionally coated gives an inspector a documented, well-maintained surface to evaluate. It gives the insurance company very little to flag beyond a calendar date.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-border">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">Get the roof cleaned before the inspection — biological growth is an immediate red flag.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">Why it matters</p>
              <p className="text-foreground/70 leading-relaxed">Mold, algae, and lichen are visible markers of neglect that an inspector will note directly. A professionally cleaned roof surface removes those flags entirely and allows the inspector to assess the actual condition of the tiles, not the growth on top of them.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-border">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">Have any damaged or cracked tiles repaired before the inspection — individual tile condition is assessed directly.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">Why it matters</p>
              <p className="text-foreground/70 leading-relaxed">A roof in otherwise good condition with visible cracked or missing tiles creates documented deficiencies in the inspection report. Tile repair is a fraction of the cost of replacement and eliminates the most common point-of-failure findings.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-border">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">Apply a quality protective coating — a sealed, waterproofed roof in demonstrably good condition speaks for itself.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">Why it matters</p>
              <p className="text-foreground/70 leading-relaxed">A professionally applied elastomeric or silicone coating restores the roof's protective surface, seals micro-cracks and porous tile surfaces, and presents a uniformly sound membrane to an inspector. The coating is not what grants the useful life extension — the inspector's report does. But the coating is what makes that report favorable.</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-border">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">When you have done all three — cleaned, repaired, and coated — the insurance company has very little leverage left.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <p className="text-foreground/70 leading-relaxed">§627.7011(5) removes age as a standalone cancellation basis when a licensed inspector documents sufficient remaining useful life. A homeowner who has cleaned, repaired, and professionally coated their roof has done everything within their power to support a favorable inspection outcome. The educated, proactive homeowner eliminates the leverage that forces unnecessary and expensive replacements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What the Industry Tried and Why It Didn't Go Far Enough */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-6">
            Section 3 — The Industry Record
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">What the Industry Tried — and Why It Didn't Go Far Enough</h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            The Florida roofing industry has known for over a decade that tile roof vulnerability to wind-driven water intrusion is a solved problem. The building code process tried to address it. It was voted down.
          </p>

          <div className="space-y-8">
            <div className="bg-white/10 rounded-2xl p-7 border border-white/20">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-white mb-3">The industry proposed a polyurethane head-lap adhesive requirement for tile roofs. It was defeated — because polyurethane applied across the full field tile surface strips the roof's air-permeable classification.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-white/50 mb-1">The facts</p>
              <p className="text-white/80 leading-relaxed">FRSA, TRI, and Florida Building Code Chapter 15 HVHZ technical committees debated requiring a continuous polyurethane adhesive bond at the head-lap of every field tile. The proposal addressed a real problem — tile roofs allow wind-driven water to enter through the spaces between tiles. But the solution was wrong for the location. Polyurethane foam applied across the full tile field converts a mechanically fastened, air-permeable system into a fully bonded system — eliminating the pressure-equalization engineering that the wind-uplift rating depends on. The proposal died on that basis.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-7 border border-white/20">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-white mb-3">FRSA and TRI do permit polyurethane — but only at the ridge caps and side pointings, not across the field tiles. That is the line the building code drew. Our system respects it.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-white/50 mb-1">The facts</p>
              <p className="text-white/80 leading-relaxed">FRSA/TRI installation guidelines permit polyurethane foam adhesive at the hip and ridge caps and at side pointings — locations where mechanical fastening alone is insufficient and where the air-permeable classification of the field tile is not compromised. Our system uses polyurethane exclusively at those approved locations. The field tile surface receives an elastomeric or silicone coating — breathable, flexible, and fully compatible with the roof's engineered wind-uplift performance.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-7 border border-white/20">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-white mb-3">The result is a system that achieves what the voted-down proposal was trying to achieve — without any of its code violations.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-white/50 mb-1">The facts</p>
              <p className="text-white/80 leading-relaxed mb-4">A field treated with our elastomeric or silicone coating and ridge caps secured with polyurethane at the FRSA/TRI-permitted locations delivers:</p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />A continuously sealed surface that resists wind-driven water intrusion across the entire field</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />Full preservation of the roof's air-permeable classification and wind uplift engineering</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />Ridge and hip securement at the maximum HVHZ-rated 55 lbs of uplift resistance</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />No moisture trapping — the breathable field coating allows vapor movement as designed</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-1" />No product approval violations — the tile system's Florida Product Approval Number remains intact</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-2xl p-7 border border-white/20">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-white mb-3">The building code has not caught up. Our system already has.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-white/50 mb-1">The facts</p>
              <p className="text-white/80 leading-relaxed">No amendment to the Florida Building Code currently requires a breathable elastomeric or silicone field coating as a standard installation step for new tile roofs. The insurance industry still prices premiums based on storm damage statistics that a properly coated tile field would reduce. The roofing industry still replaces roofs that a maintained, coated tile system could have extended. The homeowner who understands this is the one who is not paying for any of it unnecessarily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our System's Technical Position & Proof */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-6">
            Section 4 — The Proof
          </div>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">TAS-106: The Test That Proves It</h2>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            TAS-106 is the Florida Dade County standard for tile roof wind uplift — the same pull-test tool used to certify new tile roof installations. No liquid roof coating in the world has passed this test. Ours has.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">Our RoofShield system was pull-tested using the same TAS-106 equipment used to certify new tile roofs. The result was documented and on record.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <div className="text-foreground/70 leading-relaxed">
                <p className="mb-4">Using the standard TAS-106 tile uplift pull-test tool, three installation methods were tested side-by-side:</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif font-bold text-red-500 mb-1">~35 lbs</div>
                    <div className="text-xs font-bold text-red-400 uppercase tracking-wide">Cement patty + nail</div>
                    <div className="text-xs text-foreground/60 mt-1">Standard new-roof installation — breaches at this load</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif font-bold text-amber-500 mb-1">~55 lbs</div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Foam patty</div>
                    <div className="text-xs text-foreground/60 mt-1">Polyurethane ridge installation — breaches at this load</div>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-serif font-bold text-green-600 mb-1">100 lbs</div>
                    <div className="text-xs font-bold text-green-500 uppercase tracking-wide">RoofShield system</div>
                    <div className="text-xs text-foreground/60 mt-1">No breach — test stopped at 100 lbs</div>
                  </div>
                </div>
                <p>The tile seated in RoofShield did not breach at 100 lbs of pull force — the maximum applied in the documented test. The cement patty and nail installation (standard new-roof method) broke at approximately 35 lbs. The foam patty (polyurethane) broke at approximately 55 lbs. Our system held at more than <strong className="text-primary">twice the resistance of a brand-new tile installation.</strong></p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href="https://www.theroofstore.net/uplift-test.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  View Test Documentation
                </a>
                <Link href="/videos">
                  <button className="inline-flex items-center gap-2 border border-accent text-accent text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-accent/5 transition-colors">
                    Watch the Pull Test Video
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-border shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-accent mb-1">Our position</p>
              <p className="font-serif font-bold text-lg text-primary mb-3">Ask any competitor for their TAS-106 documentation. Most cannot produce it.</p>
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-1">The facts</p>
              <p className="text-foreground/70 leading-relaxed">TAS-106 Dade County Uplift Pull Test certification is the gold standard for tile roof wind resistance in Florida. It is the test the Florida Building Code uses to approve new tile roof systems. Obtaining this certification for a liquid coating system requires independent third-party testing and documented results. We have it. It is the reason we are the only TAS-106 rated liquid roof coating in the world — and why we say so.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
            Get Your Free Roof Assessment Today
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Don't pay for a roof replacement you don't need. Call us or request an assessment online — we serve Broward, Miami-Dade, and Palm Beach Counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:954-210-9614">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold px-8 gap-2">
                <Phone className="h-4 w-4" />
                Call 954-210-9614
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                Request Online Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
