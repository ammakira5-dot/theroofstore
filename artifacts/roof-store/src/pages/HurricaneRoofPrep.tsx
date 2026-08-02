import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wind, Shield, CheckCircle2, AlertTriangle, Calendar, ArrowRight, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const preSeasonChecklist = [
  {
    category: "Inspection (Before June 1)",
    icon: CheckCircle2,
    items: [
      "Professional roof inspection by a licensed contractor — look for cracked tiles, loose ridge caps, open valleys, and damaged flashing",
      "Check all roof penetrations: vents, pipes, skylights, and A/C unit bases for cracked sealant",
      "Inspect gutters and downspouts — clear and securely fastened",
      "Check soffit and fascia for water damage or rot from the previous season",
      "Look for signs of existing water intrusion in your attic",
    ],
  },
  {
    category: "Cleaning",
    icon: Wind,
    items: [
      "Professional pressure washing (2,500+ PSI) to remove all algae, mildew, and oxidation",
      "Clear all debris from valleys — where tiles meet at angles is where wind and water concentrate",
      "Clean all gutters and ensure downspouts drain at least 6 feet away from foundation",
      "Remove any tree branches overhanging the roof — a priority before hurricane season",
    ],
  },
  {
    category: "Repair",
    icon: AlertTriangle,
    items: [
      "Replace cracked or broken tiles — even hairline cracks allow water infiltration under wind pressure",
      "Re-bed and re-point all loose ridge caps with fresh mortar",
      "Seal all open valleys and exposed nail heads with appropriate sealant",
      "Re-caulk all flashings at walls, chimneys, and penetrations",
      "Repair any soft spots on flat decks — ponding water areas that haven't fully dried",
    ],
  },
  {
    category: "Coating & Protection",
    icon: Shield,
    items: [
      "Apply or renew your coating system before storm season begins — not after",
      "Roof Shield (RP3): passed the Dade County Certified TAS-106 Uplift Test, fills all gaps between tiles, creates monolithic hurricane test-verified surface",
      "SmartShield (RP2): Full tile-surface waterproofing, works with Citizens Insurance certification",
      "FungalShield (RP1): Anti-fungal renewal coat if existing coating is still sound but showing surface wear",
      "Request Additional Roof Life Certification to satisfy Citizens or private insurer requirements",
    ],
  },
];

const postStormChecklist = [
  "Safely inspect from the ground first — look for displaced tiles, visible gaps, and debris on the roof",
  "Check attic immediately after storm for any water intrusion (wet insulation, staining on decking)",
  "If safe to access: check ridge caps — they take the most abuse in high wind events",
  "Document any damage with photos before making any repairs — for insurance claims",
  "Do not apply a tarp over a coated roof without professional advice — can trap moisture",
  "Call us for an emergency post-storm assessment: 954-210-9614",
];

const hurricaneFaqs = [
  {
    q: "When should I prepare my roof for hurricane season in Florida?",
    a: "The Atlantic hurricane season runs June 1 through November 30. We recommend completing all pre-season prep by May 15 — before the first named storm watch of the season. Coating and major repairs should be scheduled in March–April to allow curing time before the June 1 official start date.",
  },
  {
    q: "Does roof coating actually help in a hurricane?",
    a: "Yes — specifically our Roof Shield (RP3) system. It is the world's only liquid roof coating to pass an independent Dade County Certified TAS-106 Uplift Pull Test. The system fills all gaps between tiles and bonds them into a monolithic surface — so wind cannot get under individual tiles and lift them. We have documented real hurricane events where neighboring roofs lost tiles while RoofShield-treated roofs held completely intact.",
  },
  {
    q: "Will a roof coating help my Citizens Insurance situation?",
    a: "Roof condition is one of the factors Citizens and private carriers assess during their inspection. A professionally coated and certified roof demonstrates active maintenance and waterproof integrity. Paired with an Additional Roof Life Certification from our licensed team, a coating system can support continued coverage under Florida law (SB 2-D, Fla. 2022) — and is typically far less expensive than a forced replacement.",
  },
  {
    q: "How soon before hurricane season should I coat my roof?",
    a: "Our coating systems require 24–72 hours of curing time depending on the product, temperature, and humidity. For a full Roof Shield (RP3) system — which involves multiple coats — we recommend scheduling in March or April to ensure full cure and any follow-up spot treatment is complete well before June 1. We typically have full booking by mid-April for pre-season installations.",
  },
  {
    q: "What's the difference between hurricane shutters and a roof coating for storm prep?",
    a: "Shutters protect windows and doors from wind and debris impact. Roof coating protects the roof structure itself — specifically the sealing and bonding of tiles and the waterproof membrane. They address different failure modes. The most common hurricane roof failure isn't tiles shattering from debris — it's wind uplift separating tiles from the field, which is exactly what Roof Shield's monolithic system prevents.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hurricane Season Roof Prep for South Florida Homeowners (May–October)",
    description: "Complete pre-season and post-storm roof checklist for South Florida homeowners. Covers inspection, cleaning, repair, coating, Citizens Insurance, and the Dade County Certified TAS-106 Uplift Test — from The Roof Store.",
    author: { "@type": "Organization", name: "The Roof Store", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "The Roof Store",
      logo: { "@type": "ImageObject", url: `${BASE}/assets/images/logo.png` },
    },
    datePublished: "2026-07-01",
    dateModified: "2026-07-21",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/hurricane-roof-prep` },
    image: `${BASE}/assets/images/Waterproofing-Technology.jpg`,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Hurricane Roof Prep", item: `${BASE}/hurricane-roof-prep` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hurricaneFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

export default function HurricaneRoofPrep() {
  return (
    <div className="w-full">
      <SEO
        title="Hurricane Season Roof Prep Checklist — South Florida Homeowners | The Roof Store"
        description="Complete May–October hurricane roof prep checklist: inspection, cleaning, repair, and coating. Roof Shield system passed the Dade County Certified TAS-106 Uplift Test — the only liquid coating tested to 135+ MPH. Serving Broward, Miami-Dade & Palm Beach."
        canonical="/hurricane-roof-prep"
        schema={schema}
      />

      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent" />
        </div>
        <div className="relative container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Hurricane Roof Prep</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Wind className="h-4 w-4 text-accent" />
              <span className="text-white">June 1 – November 30 Atlantic Hurricane Season</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Hurricane Season Roof Prep for South Florida Homeowners
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              The window to act is before the storm — not after. This is the complete pre-season checklist from South Florida's original roof coating contractor, built on 30 years of post-hurricane roof assessments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-12 px-8">
                <Link href="/contact">Schedule Pre-Season Inspection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
                <a href="tel:954-210-9614">
                  <Phone className="h-4 w-4 mr-2" />
                  954-210-9614
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAS-106 Callout */}
      <section className="py-10 bg-accent text-white">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-bold">
            <Shield className="h-6 w-6 shrink-0" />
            <span>
              The Roof Store's Roof Shield (RP3) is the world's only liquid roof coating to pass the Dade County Certified TAS-106 Uplift Test —
              independently tested and documented at 135+ MPH on real hurricane events.
            </span>
          </div>
        </div>
      </section>

      {/* Pre-Season Checklist */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Pre-Season Roof Checklist (Complete by May 15)</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Work through these four categories in order — each one builds on the last. Skipping inspection before repair, or repair before coating, causes the subsequent steps to underperform.
            </p>
          </div>

          <div className="space-y-10">
            {preSeasonChecklist.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border rounded-2xl overflow-hidden"
                >
                  <div className="bg-primary text-white px-8 py-5 flex items-center gap-3">
                    <div className="bg-white/20 rounded-full p-1.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-wide font-bold">Step {i + 1}</div>
                      <h3 className="text-xl font-serif font-bold">{section.category}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Recommended Preparation Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { month: "March – April", action: "Schedule professional inspection and coating. Best availability, allows full cure time before season starts." },
              { month: "May 1–15", action: "Complete all remaining repairs. Final inspection of gutters, downspouts, and all sealant points." },
              { month: "June 1", action: "Hurricane season begins. Your roof should be fully prepared, coated, and certified at this point." },
              { month: "Post-Storm", action: "Document any damage, check attic for water intrusion, call 954-210-9614 for emergency assessment." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div className="font-bold text-primary text-sm">{item.month}</div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.action}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Storm Checklist */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Post-Storm Roof Inspection Checklist</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              After any named storm or significant wind event, work through this list before calling anything complete.
            </p>
          </div>
          <div className="bg-card border rounded-2xl p-8 max-w-2xl mx-auto">
            <ul className="space-y-4">
              {postStormChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-accent/10 text-accent rounded-full w-7 h-7 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {hurricaneFaqs.map((faq, i) => (
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
              { href: "/roof-life-certification", label: "Additional Roof Life Certification Guide" },
              { href: "/products/roofshield", label: "Roof Shield (RP3) — TAS-106 Certified Test System" },
              { href: "/pricing", label: "Roof Coating Pricing Guide" },
              { href: "/roof-services", label: "Professional Roof Coating Services" },
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
          <h2 className="text-4xl font-serif font-bold mb-6">Don't Wait Until It's Hurricane Season</h2>
          <p className="text-xl text-white/80 mb-4">
            Booking fills up in April. Schedule your pre-season roof inspection and coating now — before the rush.
          </p>
          <p className="text-white/60 mb-10 text-sm">Serving Broward, Miami-Dade &amp; Palm Beach County. Free consultation, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Pre-Season Inspection</Link>
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
