import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Leaf, Sun, ShieldCheck, Mail, ChevronDown } from "lucide-react";

const BASE = "https://www.theroofstore.net";

const systems = [
  {
    id: "fungalshield",
    badge: "Entry Level",
    badgeColor: "bg-green-100 text-green-800",
    icon: Leaf,
    name: "Fungal Shield",
    code: "RP1",
    tagline: "Clear anti-fungal & anti-algae coating — roofs or walls",
  },
  {
    id: "smartshield",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: Sun,
    name: "Smart Shield",
    code: "RP2",
    tagline: "Waterproofing — tile roofs, walls & flat decks · 3,000+ colors",
  },
  {
    id: "roofshield",
    badge: "Premium · Flagship",
    badgeColor: "bg-amber-100 text-amber-800",
    icon: ShieldCheck,
    name: "Roof Shield",
    code: "RP3",
    tagline: "Full weatherproofing retrofit · World's only TAS-106 Dade County rated coating · Lifetime warranty",
  },
];

const pricingFaqs = [
  {
    q: "How do I find out what roof coating costs in South Florida?",
    a: "Fill out our contact form and the full Factory Price Sheet is emailed to you — every system, every roof type, every pitch range laid out clearly. Pricing depends on the system you choose, your roof type, pitch, and surface condition, so the price sheet plus a free onsite assessment gives you an accurate number instead of a guess.",
  },
  {
    q: "How does roof coating compare to a full re-roof in cost?",
    a: "Coating restoration typically runs 60–70% less than a full tear-off and replacement. Coating also preserves your existing tile, avoids permit delays, generates no landfill waste, and qualifies structurally sound roofs for warranties and insurance documentation that a re-roof cannot match at the same cost.",
  },
  {
    q: "Do roof coating prices include labor and materials?",
    a: "Yes — every price on our factory sheet includes labor and materials with no hidden add-ons. Minor prep items such as cracked mortar, failed ridge caps, or open valleys are noted in your written estimate and quoted as a separate line item — never buried in the coating price.",
  },
  {
    q: "What affects my roof coating price?",
    a: "Four main factors: the system you select (RP1, RP2, or RP3), your roof type (flat tile, broom-swept tile, or barrel/S-tile), your roof's pitch, and its surface condition. Larger roofs benefit from economies of scale. Everything is spelled out on the Factory Price Sheet and confirmed at your free onsite assessment.",
  },
  {
    q: "Will roof coating help with my homeowners insurance?",
    a: "Yes — two ways. First, our RoofShield (RP3) system carries TAS-106 Dade County Uplift Certification, which Florida SB 2-D requires insurers to discount. Second, Florida law gives every homeowner the right to request an independent Useful Life Exam — an inspection by a licensed contractor or engineer. It is that inspector's report, not any contractor or product, that the insurance company is legally required to recognize. The most effective thing you can do is put your roof in the best possible condition before that exam: professionally cleaned, repaired, and coated. That is exactly what we do.",
  },
  {
    q: "How do I get an exact roof coating quote?",
    a: "Submit a contact request and our full factory price sheet is emailed to you instantly. For an exact project price we schedule a free onsite assessment where we measure your roof, note the tile type and pitch, and confirm surface condition. No sales pressure, no commitment required.",
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Roof Coating & Waterproofing Services — The Roof Store",
      url: `${BASE}/pricing`,
      provider: {
        "@type": "RoofingContractor",
        name: "The Roof Store Waterproofing Products",
        url: BASE,
        telephone: "+19542109614",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4801 S University Dr",
          addressLocality: "Davie",
          addressRegion: "FL",
          postalCode: "33328",
          addressCountry: "US",
        },
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Broward County, Florida" },
        { "@type": "AdministrativeArea", name: "Miami-Dade County, Florida" },
        { "@type": "AdministrativeArea", name: "Palm Beach County, Florida" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pricingFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Pricing | Get the Factory Price Sheet | The Roof Store"
        description="Get South Florida roof coating pricing for Fungal Shield, Smart Shield & Roof Shield. Fill out the form and the full Factory Price Sheet is emailed to you. Free estimate: 954-210-9614."
        canonical="/pricing"
        ogImage="/images/og/pricing.jpg"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">Factory Price Sheet</div>
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Coating Pricing in South Florida — Fungal Shield, Smart Shield &amp; Roof Shield</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Rates vary by system, roof type, and pitch — all prices include labor &amp; materials, and coating typically runs 60–70% less than a full roof replacement. The complete Factory Price Sheet is emailed to you when you fill out the contact form.
            </p>
            <div className="mt-8 bg-accent/15 border border-accent/40 rounded-2xl p-6 text-left max-w-2xl mx-auto">
              <p className="text-white font-bold mb-2">How to get your Factory Price Sheet:</p>
              <p className="text-white/85 text-sm leading-relaxed mb-4">
                Fill out our contact form and the Factory Price Sheet is emailed to you. You'll also receive a follow-up
                EagleView measurement of your roof, priced with the system you tell us you want installed — just mention
                it in the "Tell Us About Your Roof" section of the form.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Fill Out the Contact Form →</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Not sure which system is right for you?{" "}
              <Link href="/roof-coating-florida" className="text-accent font-semibold hover:underline">
                Read our complete Florida Roof Coating Guide →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The three systems — no rates shown; price sheet by email */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-serif font-bold text-primary">Three Systems, One Price Sheet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every system is priced per square foot by roof type and pitch, with labor and materials included. The full rate menu for all three systems arrives by email when you fill out the form.
            </p>
          </div>
          {systems.map((sys, i) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 px-8 py-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <sys.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 ${sys.badgeColor}`}>{sys.badge}</span>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      {sys.name} <span className="text-base font-normal text-muted-foreground">({sys.code})</span>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">{sys.tagline}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm font-semibold">
                      <Link href={`/products/${sys.id}`} className="text-accent hover:underline">Full product details →</Link>
                      <Link href="/shop" className="text-primary hover:underline">Buy factory-direct →</Link>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <Link href="/contact" className="text-accent font-bold text-sm whitespace-nowrap hover:underline">Get rates by email →</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="bg-muted py-10">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="bg-background rounded-xl border p-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">All prices include labor &amp; materials.</strong> Minor restoration on flat decks and seam taping included where designated.</p>
            <p>Variance based on warranty type, pitch, access difficulty, and surface condition. Exact pricing finalized after a free onsite assessment.</p>
            <p><strong className="text-foreground">Barrel tile square footage tip:</strong> Take your interior sq ft under air × 1.20 for barrel tile (× 1.10 for flat cement tile) to estimate roof surface area.</p>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="py-16 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif font-bold text-primary">What Affects Your Roof Coating Price?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Four main factors determine where your project lands on the factory price sheet.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-card border rounded-xl p-5 space-y-2">
              <h3 className="font-bold text-primary">Roof Type &amp; Pitch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Flat smooth concrete tile is the quickest to coat — no valleys or ridges to fill. S-tile (barrel / Spanish tile) requires more material and labor to seal every channel, so it sits at the top of each range. Steeper pitches (5/12 and above) add a safety and access premium.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-5 space-y-2">
              <h3 className="font-bold text-primary">Surface Condition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A clean, sound roof with no broken tiles or exposed field spaces goes straight to application. Heavy algae, cracked mortar, or multiple broken tiles require prep work — repair costs are quoted separately and never buried in the coating price.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-5 space-y-2">
              <h3 className="font-bold text-primary">System Selected</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fungal Shield (RP1) is a single-coat anti-fungal application. Smart Shield (RP2) adds a BASF waterproofing membrane and color. Roof Shield (RP3) is a full multi-layer rubber retrofit system — more coats, more material, more labor, and a manufacturer-backed lifetime warranty.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-5 space-y-2">
              <h3 className="font-bold text-primary">Roof Size &amp; Access</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Larger roofs benefit from economies of scale — the per-square-foot rate can decrease as total area grows. Difficult access (minimal setback, pool enclosures directly below, or second-story overhangs) adds a modest surcharge that is always disclosed up front.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coating vs. replacement */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="bg-card border rounded-2xl p-8 space-y-4">
            <h2 className="text-3xl font-serif font-bold text-primary">Roof Coating vs. Full Replacement: A Cost Comparison</h2>
            <p className="text-muted-foreground leading-relaxed">
              A full roof replacement in South Florida comes with permit fees, dumpster haul-away, and weeks of scheduling lag with a roofing crew. Our coating systems deliver a fully waterproofed, color-coated, warranty-backed tile roof at a fraction of replacement cost — typically <strong className="text-foreground">60–70% less</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The structural tile underneath a coated roof is also left intact. Tear-offs remove decades of good tile along with the bad. Coating restores, seals, and recolors the existing surface — nothing goes to the landfill, and there's no waiting on back-ordered tile to match an aging style. For roofs that are structurally sound but cosmetically aged or beginning to show water intrusion, coating is almost always the more cost-effective path.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Not every roof is a coating candidate. Our free onsite assessment tells you plainly whether coating is the right call or whether the deck has deteriorated beyond what a surface system can address. We'd rather tell you that up front than sell you a coating that won't last.
            </p>
            <Link href="/diy-vs-pro-roof-coating" className="inline-flex items-center gap-2 text-accent font-bold hover:underline text-sm">
              DIY vs. Professional Roof Coating — what changes and why →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Roof Coating Pricing — Frequently Asked Questions</h2>
          <div className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="border rounded-xl overflow-hidden bg-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-foreground hover:bg-muted/50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-accent shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed text-sm border-t bg-muted/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email callout */}
      <section className="py-14 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex items-start gap-5">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Get the Factory Price Sheet by Email</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fill out the contact form and the Factory Price Sheet is emailed to you — every system, roof type, and pitch combination laid out clearly. You'll also receive a follow-up EagleView measurement of your roof, priced with the system you mention in the form.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">Fill Out the Contact Form →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-10 bg-muted border-y">
        <div className="container px-4 max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">Explore More</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Browse Our Products →</Link>
            <Link href="/commercial-roofs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Commercial Roofing →</Link>
            <Link href="/roof-services" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Services Overview →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready for an Exact Quote?</h2>
          <p className="text-xl text-white/80 mb-10">
            Your exact quote depends on your roof's size, pitch, type, and condition — all assessed for free at your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Free Roof Evaluation & Estimate</Link>
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
