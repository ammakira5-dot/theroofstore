import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const diyRisks = [
  {
    title: "Surface Preparation Is 60–70% of the Job",
    desc: "Professional surface prep requires a commercial-grade pressure washer (minimum 2,500 PSI) with the right nozzles for tile, the right detergent concentration for mildew removal, and experience to know how much pressure each tile type can handle without cracking. Skipping or underperforming this step is the single biggest cause of premature DIY coating failure.",
  },
  {
    title: "Florida Contractor Licensing Requirements",
    desc: "In Florida, applying a roof coating system to a residential or commercial structure typically requires a licensed roofing contractor (CCC or CC license class). DIY on your own home is not prohibited, but if you later sell or refinance, an unlicensed installation may create disclosure and title issues.",
  },
  {
    title: "TAS-106 Certification Requires Licensed Application",
    desc: "The world's only liquid roof coating with Dade County TAS-106 Uplift certification is our Roof Shield (RP3) system. That certification is tied to our licensed installation process. A DIY application of the same coating materials would not carry TAS-106 certification — the system's hurricane performance documentation only applies to professionally installed work.",
  },
  {
    title: "Insurance Certification Requires a Licensed Contractor",
    desc: "An Additional Roof Life Certification — which can legally supersede an insurance company's age-based denial under Florida law (SB 2-D, Fla. 2022) — must be signed by a licensed contractor or professional engineer. A DIY-applied coating system cannot be certified under this standard.",
  },
  {
    title: "Product Warranty Is Void Without Professional Application",
    desc: "Our product warranties (5-Year on FungalShield, 10-Year on SmartShield, Lifetime on RoofShield) apply to professionally installed systems. DIY application voids manufacturer warranty coverage.",
  },
  {
    title: "Multi-Story and Complex Roof Geometry Safety",
    desc: "South Florida homes commonly have two-story profiles, mixed flat and tile sections, and complex hip-and-valley configurations. Working on these without professional fall-protection equipment and roofing experience creates serious safety risk.",
  },
];

const whatProsDo = [
  { title: "Commercial-grade pressure wash", desc: "2,500–4,000 PSI with tile-appropriate nozzle angle and a mildewcide solution, not a consumer pressure washer." },
  { title: "Full crack and tile repair", desc: "Every cracked tile, loose ridge cap, open valley, and damaged seam is repaired before a single drop of coating is applied." },
  { title: "Primer coat application", desc: "A bonding primer is applied before the main coating — critical for adhesion on aged tile surfaces." },
  { title: "Multi-coat liquid rubber application", desc: "Minimum two coats of coating, applied at the correct coverage rate per square foot (not thinned to cover more area)." },
  { title: "Edge sealing and ridge cap treatment", desc: "Every edge, ridge cap, and penetration (vents, pipes, flashings) is individually sealed — the failure points that DIY applicators typically miss." },
  { title: "Post-application inspection", desc: "A second-pass inspection after curing to identify and spot-treat any thin areas before the project is signed off." },
];

const diyFaqs = [
  {
    q: "Can I apply roof coating myself in Florida?",
    a: "On your own residence, DIY application is not legally prohibited. However, it comes with significant limitations: no TAS-106 certification on the installed system, no Additional Roof Life Certification for insurance purposes, voided product warranty, and — frankly — results that rarely match a professional installation. Florida's climate demands multi-coat systems with proper surface prep, and cutting corners on either shortens lifespan dramatically.",
  },
  {
    q: "What equipment would I need to DIY a roof coating in Florida?",
    a: "At minimum: a commercial-grade pressure washer (2,500+ PSI), professional nozzles and mildewcide detergent, a commercial airless sprayer or heavy-duty roller system, appropriate coating materials ($190–$325/gallon depending on system), roofing safety harness and anchor system, and all necessary repair materials (hydraulic cement, caulk, mesh, replacement tiles). The equipment cost alone often approaches $1,500–$3,000 before any materials are purchased.",
  },
  {
    q: "Why does a professional roof coating cost more than DIY materials?",
    a: "Professional pricing includes: licensed labor and supervision, commercial-grade equipment, full surface preparation, multi-coat application, all crack and tile repairs, warranty coverage, and — for qualifying systems — an Additional Roof Life Certification document. The cost delta between DIY materials and professional installation narrows significantly once you factor in equipment, the value of the certification, and the longer lifespan of a properly applied professional system.",
  },
  {
    q: "What's the most common DIY roof coating mistake in Florida?",
    a: "Insufficient surface preparation — specifically, applying coating over a roof that hasn't been fully cleaned of algae, mildew, and oxidation. The coating bonds to the contaminant rather than the tile, and the contaminated layer eventually releases, taking the coating with it. We see this regularly on roofs where a homeowner applied a coating 2–4 years prior and now has peeling and delamination.",
  },
  {
    q: "Does professional roof coating come with a warranty?",
    a: "Yes. Our systems include written product warranties: 5 years on FungalShield (RP1), 10 years on SmartShield (RP2), and a Lifetime Transferable & Renewable Warranty on Roof Shield (RP3). Warranties require professional installation and are void for DIY-applied systems.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DIY vs. Professional Roof Coating in Florida: What You Need to Know",
    description: "Honest comparison of DIY vs. professional roof coating in Florida — covering licensing requirements, TAS-106 certification, insurance implications, surface prep, and true cost of each approach.",
    author: { "@type": "Organization", name: "The Roof Store", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "The Roof Store",
      logo: { "@type": "ImageObject", url: `${BASE}/assets/images/logo.png` },
    },
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/diy-vs-pro-roof-coating` },
    image: `${BASE}/assets/images/Waterproofing-Technology.jpg`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "DIY vs. Professional Roof Coating", item: `${BASE}/diy-vs-pro-roof-coating` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: diyFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

export default function DiyVsPro() {
  return (
    <div className="w-full">
      <SEO
        title="DIY vs. Professional Roof Coating in Florida | The Roof Store"
        description="Honest comparison of DIY vs. professional roof coating in Florida — TAS-106 certification, insurance certification, surface prep, product warranty, and true cost breakdown. From South Florida's original coating contractor."
        canonical="/diy-vs-pro-roof-coating"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">DIY vs. Professional Roof Coating</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="text-white">Honest Homeowner Guide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              DIY vs. Professional Roof Coating in Florida: What You Need to Know
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              We're going to give you the honest answer — including the things that are genuinely doable yourself, and the things where cutting corners in Florida's climate will cost you more in the long run.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-serif font-bold text-red-800">DIY Roof Coating</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "No TAS-106 hurricane certification on installed system",
                  "No Additional Roof Life Certification for insurance",
                  "Product warranty voided",
                  "Equipment cost: $1,500–$3,000 before materials",
                  "Surface prep errors cause premature failure (2–4 yrs)",
                  "No licensed contractor sign-off for home sale/refinance",
                  "Safety risk on multi-story and complex roof profiles",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                    <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                <h2 className="text-2xl font-serif font-bold text-emerald-800">Professional Installation</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "TAS-106 certified on RoofShield (RP3) — 135+ MPH rated",
                  "Additional Roof Life Certification available for insurance",
                  "Written product warranty (5 yr / 10 yr / Lifetime)",
                  "Commercial-grade equipment included in price",
                  "Full surface prep, crack repair, multi-coat application",
                  "Licensed contractor sign-off on completed work",
                  "Insured — protects your home and family",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-emerald-900">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DIY Risks */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Why DIY Roof Coating Fails in Florida</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These aren't reasons to scare you away from DIY — they're the specific issues that cause premature failure and cost more money to fix than the original professional installation would have cost.
            </p>
          </div>
          <div className="space-y-6">
            {diyRisks.map((risk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border p-7 flex gap-5 items-start"
              >
                <div className="bg-red-100 rounded-full p-2 mt-0.5 shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{risk.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{risk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Pros Do */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">What Professionals Do Differently</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here is the actual sequence of steps our licensed crews follow on every installation — the steps that determine whether a coating lasts 5 years or a lifetime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatProsDo.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border rounded-xl p-6"
              >
                <div className="text-3xl font-serif font-bold text-primary/20 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            {diyFaqs.map((faq, i) => (
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

      {/* Related */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-primary text-center mb-8">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/roof-coating-lifespan-florida", label: "How Long Does Roof Coating Last in Florida?" },
              { href: "/roof-systems", label: "FungalShield, SmartShield & RoofShield Systems" },
              { href: "/pricing", label: "Roof Coating Pricing Guide" },
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
          <h2 className="text-4xl font-serif font-bold mb-6">Get a Professional Quote — Free, No Obligation</h2>
          <p className="text-xl text-white/80 mb-10">
            Our licensed inspector will assess your roof, recommend the right system, and give you a written estimate. You'll know exactly what professional installation costs before you decide anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Free Assessment</Link>
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
