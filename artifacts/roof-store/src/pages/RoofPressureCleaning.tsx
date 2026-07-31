import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Droplets, ShieldCheck, Sparkles, ArrowRight, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Roof Pressure Cleaning & Soft Washing",
    name: "Roof Pressure Cleaning & Soft Washing",
    description:
      "Professional roof pressure cleaning and soft washing for tile, cement, and flat roofs across South Florida — removing algae, mold, and black streaking, and preparing the surface for roof coating.",
    provider: {
      "@type": "RoofingContractor",
      name: "The Roof Store",
      telephone: "954-210-9614",
      url: BASE,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Broward County, FL" },
      { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
      { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
      { "@type": "AdministrativeArea", name: "Monroe County, FL" },
    ],
    url: `${BASE}/roof-pressure-cleaning`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Roof Services", item: `${BASE}/roof-services` },
      { "@type": "ListItem", position: 3, name: "Roof Pressure Cleaning & Soft Washing", item: `${BASE}/roof-pressure-cleaning` },
    ],
  },
];

const methods = [
  {
    icon: Droplets,
    title: "Soft Washing",
    detail:
      "A biodegradable cleaning solution is applied at low pressure, killing algae, mold, and moss at the root without physical wear on the tile. This is our recommended method for older, fragile, or granulated tile roofs.",
  },
  {
    icon: Sparkles,
    title: "Calibrated Pressure Washing",
    detail:
      "For sturdier tile, cement, and flat roof surfaces, we use calibrated low-pressure washing equipment set specifically for roofing — strong enough to strip years of biological buildup, gentle enough to protect the surface underneath.",
  },
];

const roofTypes = [
  "Spanish clay tile & barrel tile roofs",
  "Flat cement tile roofs",
  "Composite & concrete tile roofs",
  "Flat built-up & modified bitumen decks",
  "Metal roofs",
  "Shingle roofs",
];

const steps = [
  {
    step: "1",
    title: "Free On-Site Inspection",
    detail: "We inspect your roof's material, condition, and biological buildup to determine the safest cleaning method — soft wash or calibrated pressure wash.",
  },
  {
    step: "2",
    title: "Pre-Treatment",
    detail: "A biodegradable cleaning solution is applied to break down algae, mold, mildew, and black streaking at the source before rinsing.",
  },
  {
    step: "3",
    title: "Clean & Rinse",
    detail: "We clean the full roof surface — ridge caps, valleys, and flat areas included — using the method matched to your roof type, then rinse thoroughly.",
  },
  {
    step: "4",
    title: "Dry & Ready for Coating",
    detail: "Once dry (typically 24–48 hours in Florida weather), your roof is ready for painting, elastomeric coating, or waterproofing — with maximum adhesion guaranteed.",
  },
];

const faqs = [
  {
    q: "What's the difference between soft washing and pressure washing a roof?",
    a: "Pressure washing uses calibrated water pressure to physically strip buildup from the roof surface, while soft washing uses a biodegradable cleaning solution at low pressure to kill algae and mold at the root. Soft washing is gentler and is our preferred method for older, fragile, or granulated tile — pressure washing works well on sturdier tile, cement, and flat surfaces.",
  },
  {
    q: "Is pressure cleaning safe for my tile roof?",
    a: "Yes, when done correctly. Our equipment is calibrated specifically for roofing — not the general-purpose pressure washers used for driveways or siding. We evaluate your tile's age and condition first and switch to soft washing if there's any risk of surface damage.",
  },
  {
    q: "Do I need to pressure clean my roof before painting or coating it?",
    a: "Always. Roof coatings and paints need a clean, biologically-free surface to properly bond. Applying a coating over algae, mold, or dirt traps the growth underneath and causes premature coating failure. Pressure cleaning or soft washing is the mandatory first step of every job we do.",
  },
  {
    q: "How often should a South Florida roof be pressure cleaned?",
    a: "Most South Florida roofs benefit from cleaning every 1–3 years due to our humidity and heavy rainfall, which accelerate algae and mold growth. Roofs already protected with one of our coating systems typically need less frequent cleaning since the coating resists biological growth.",
  },
  {
    q: "Will pressure cleaning alone stop the black streaks from coming back?",
    a: "Cleaning removes existing growth but doesn't prevent it from returning — algae spores are airborne and will recolonize an untreated roof within a season in our climate. For permanent protection, we recommend our Fungal Shield (RP1) antimicrobial coating system after cleaning.",
  },
];

export default function RoofPressureCleaning() {
  return (
    <div className="w-full">
      <SEO
        title="Roof Pressure Cleaning & Soft Washing South Florida | The Roof Store"
        description="Professional roof pressure cleaning and soft washing for tile, cement, and flat roofs in Broward, Miami-Dade, Palm Beach & Monroe counties. Removes algae, mold, and black streaking — required prep before any roof coating. Licensed & insured, since 1994. Call 954-210-9614."
        canonical="/roof-pressure-cleaning"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Droplets className="h-4 w-4" />
              Step One Before Any Roof Coating
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Roof Pressure Cleaning &amp; Soft Washing
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl">
              Algae, mold, and black streaking don't just look bad — they trap moisture and destroy adhesion for any
              future coating. We safely deep-clean tile, cement, metal, and flat roofs across South Florida using
              soft wash and calibrated pressure wash methods matched to your roof's condition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-primary">Why Roof Cleaning Matters in South Florida</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              South Florida's humidity, rainfall, and shade from mature trees create ideal conditions for algae,
              mold, moss, and lichen to take hold on roof surfaces. Left untreated, this biological growth spreads,
              traps moisture against the roof, and accelerates deterioration of tile, underlayment, and decking.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond appearance, a dirty roof surface will not properly bond with any paint, elastomeric coating, or
              waterproofing membrane. Every job we perform — whether it's <Link href="/roof-systems" className="text-accent font-semibold hover:underline">Fungal Shield, Smart Shield, or Roof Shield</Link> —
              begins with a full pressure cleaning or soft wash to guarantee maximum adhesion and long-term performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-3">Two Cleaning Methods — Matched to Your Roof</h2>
            <p className="text-muted-foreground mb-10">We evaluate every roof before choosing the right cleaning method.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methods.map((m, i) => (
                <div key={i} className="bg-background rounded-xl p-6 flex gap-4 border shadow-sm">
                  <m.icon className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-1">{m.title}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roof types */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Roof Types We Safely Clean</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {roofTypes.map((t, i) => (
                <div key={i} className="flex items-center gap-3 bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-10 text-center">Our 4-Step Cleaning Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="bg-background rounded-xl p-6 border shadow-sm text-center">
                  <div className="h-10 w-10 rounded-full bg-accent text-white font-bold flex items-center justify-center mx-auto mb-4">
                    {s.step}
                  </div>
                  <div className="font-bold text-foreground mb-2">{s.title}</div>
                  <div className="text-muted-foreground text-sm leading-relaxed">{s.detail}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related service */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Keep it clean, permanently</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Prevent Algae From Coming Back</h3>
              <p className="text-muted-foreground max-w-xl">
                Cleaning removes existing growth, but it doesn't stop new growth. Our Fungal Shield (RP1) antimicrobial
                coating system permanently protects your roof against algae, mold, and black streaking after cleaning.
              </p>
            </div>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white shrink-0" >
              <Link href="/products/fungalshield">See Fungal Shield</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-10">Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((item, i) => (
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
            <h2 className="text-3xl font-serif font-bold mb-4">Ready for a Cleaner, Protected Roof?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free inspection and quote for roof pressure cleaning or soft washing — no pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Free Evaluation &amp; Estimate
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
