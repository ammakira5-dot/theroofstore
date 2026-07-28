import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Calendar, MapPin, Phone, AlertTriangle, Scale, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Original Roof Store Florida — Established 1994 | Trademark Notice",
    url: `${BASE}/the-original-roof-store-florida`,
    description: "The Roof Store has operated continuously from theroofstore.net since July 29, 2002. Florida's original liquid rubber roof coating company, founded in Davie, FL in 1994. Official trademark and domain rights notice.",
    datePublished: "2026-07-07",
    dateModified: "2026-07-08",
    publisher: {
      "@type": "Organization",
      name: "The Roof Store",
      url: BASE,
      foundingDate: "1994",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4801 S University Dr",
        addressLocality: "Davie",
        addressRegion: "FL",
        postalCode: "33328",
        addressCountry: "US",
      },
    },
  },
];

const milestones = [
  { year: "1994", event: "The Roof Store founded in Davie, Florida, as an asset of Anthony's Enterprises Inc. and Storm Shield Paint Systems Inc. First liquid rubber roof coating system introduced to the South Florida market. Storm Shield Paint Systems Inc. exhibits at the Fort Lauderdale Home Show that same year." },
  { year: "1999", event: "A television commercial airs featuring the tagline \"Don't Re-Roof, Waterproof at 1/2 the Cost,\" showing live installation of the Roof Shield system on a flat cement tile roof — narrated personally by our founder." },
  { year: "Early-to-mid 2000s", event: "Printed marketing materials in commercial distribution reference www.theroofstore.net alongside the Storm Shield Paint Systems Inc. name, evidencing established brand and domain identity around the time of formal domain registration." },
  { year: "2002", event: "theroofstore.net domain registered July 29, 2002. Continuous, unbroken commercial use begins." },
  { year: "2010s", event: "RoofProtect Products established as the manufacturing entity. FungalShield (RP1), SmartShield (RP2), and RoofShield (RP3) systems developed and commercialized." },
  { year: "2022+", event: "Confusingly similar domain names registered by out-of-state entities, both of which actively market into Florida — The Roof Store's primary geographic market." },
];

const legalBodies = [
  {
    name: "ICANN UDRP",
    full: "Uniform Domain-Name Dispute-Resolution Policy",
    desc: "The international policy governing domain name disputes. Under UDRP ¶4(b), bad faith registration includes registration primarily to disrupt a competitor's business (¶4(b)(iii)) and to attract users through confusion as to source or affiliation (¶4(b)(iv)).",
  },
  {
    name: "WIPO",
    full: "World Intellectual Property Organization — Arbitration and Mediation Center",
    desc: "Located in Geneva, Switzerland. ICANN-approved UDRP dispute resolution provider with jurisdiction to order transfer or cancellation of infringing domain registrations. Handles the majority of UDRP cases filed globally.",
  },
  {
    name: "The Forum (ADR Forum)",
    full: "Forum — Formerly National Arbitration Forum",
    desc: "Located in Minneapolis, Minnesota. ICANN-approved UDRP dispute resolution provider. An additional and alternative arbitration body available to complainants under ICANN policy.",
  },
  {
    name: "Lanham Act / ACPA",
    full: "U.S. Trademark Law — Anti-Cybersquatting Consumer Protection Act",
    desc: "U.S. federal statute providing remedies for bad faith registration of domain names confusingly similar to established marks, including statutory damages and injunctive relief in U.S. federal courts.",
  },
];

export default function OriginalRoofStore() {
  return (
    <div className="w-full">
      <SEO
        title="The Original Roof Store Florida — Established 1994 | Trademark Notice"
        description="The Roof Store has operated from theroofstore.net since July 29, 2002 — over two decades of unbroken commercial use in Florida. Official notice of prior rights, trademark position, and domain rights under ICANN UDRP policy."
        canonical="/the-original-roof-store-florida"
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL", position: "26.0765;-80.2521" }}
      />

      {/* Hero */}
      <section className="relative bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Florida's Original Since 1994
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              The Original Roof Store —<br />
              <span className="text-accent">Florida's First Since 1994</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl mb-8">
              If you searched for "The Roof Store" and landed somewhere else first, this is the one that has been here all along. <strong className="text-white">theroofstore.net</strong> has operated continuously since July 29, 2002 — over two decades of unbroken commercial presence serving South Florida homeowners and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 text-sm font-medium">
                <Calendar className="h-4 w-4 text-accent" />
                Domain registered: July 29, 2002
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 text-sm font-medium">
                <Shield className="h-4 w-4 text-accent" />
                Business founded: 1994
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 text-sm font-medium">
                <MapPin className="h-4 w-4 text-accent" />
                Davie, Florida — A+ BBB Rated
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
              <p>
                <strong className="text-foreground">The Roof Store</strong> is a Florida-based roofing products manufacturer and contractor headquartered at 4801 S University Drive, Davie, FL 33328. We have operated under the name "The Roof Store" and at the domain <strong className="text-foreground">theroofstore.net</strong> continuously since our domain registration on <strong className="text-foreground">July 29, 2002</strong>. The Roof Store name and business assets have been held since <strong className="text-foreground">1994</strong> by Anthony's Enterprises Inc. and Storm Shield Paint Systems Inc., the licensed Florida corporations behind our roofing operations.
              </p>
              <p>
                Our proprietary liquid rubber roof coating systems — <strong className="text-foreground">FungalShield (RP1)</strong>, <strong className="text-foreground">SmartShield (RP2)</strong>, and <strong className="text-foreground">RoofShield (RP3)</strong> — are manufactured under our RoofProtect factory license and installed by Storm Shield Paint Systems Inc., our licensed contracting division. We serve Broward, Miami-Dade, and Palm Beach counties and have been A+ rated by the Better Business Bureau throughout our operation.
              </p>
              <p>
                We are Florida's original source for high-strength, liquid-applied rubber roof coating systems. Our track record in the Florida market is a matter of public commercial record spanning more than 30 years.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Unbroken Commercial Timeline</h2>
            <p className="text-muted-foreground text-lg">Two decades of documented, continuous use in the Florida market — prior to any confusingly similar registration.</p>
          </motion.div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 bg-primary text-white rounded-xl px-4 py-2 text-sm font-bold min-w-[80px] text-center">
                  {m.year}
                </div>
                <div className="bg-card rounded-xl border border-border p-5 flex-1">
                  <p className="text-foreground leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original 1999 TV Commercial */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Original 1999 TV Commercial</h2>
            <p className="text-muted-foreground text-lg mb-8">
              "Don't Re-Roof, Waterproof at 1/2 the Cost" — the same promise we've made to Florida homeowners for over 25 years, captured live on a real roof installation.
            </p>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
              <iframe
                src="https://www.youtube.com/embed/IUcKj0nKNDc"
                title="Original 1999 TV commercial — Don't Re-Roof, Waterproof at 1/2 the Cost"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prior Rights & Bad Faith Notice */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-7 w-7 text-destructive shrink-0" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Notice of Prior Rights</h2>
            </div>
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                The Roof Store is aware of at least two business entities that have adopted names or domain registrations confusingly similar to <strong className="text-foreground">"The Roof Store"</strong> and that actively market roofing products or services into the State of Florida — the same primary geographic market in which The Roof Store has operated continuously since our domain registration on <strong className="text-foreground">July 29, 2002</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Both registrations were made after <strong className="text-foreground">theroofstore.net</strong> had already established over 20 years of unbroken commercial use and digital footprint. Any standard domain availability check, WHOIS query, or registrar search system conducted at or before the time of registration would have revealed the existence of theroofstore.net and its long-established commercial use.
              </p>
              <p className="text-lg leading-relaxed">
                Under the <strong className="text-foreground">willful blindness doctrine</strong> — recognized by UDRP panels and U.S. federal courts — deliberate avoidance of a readily available search, or failure to conduct one, does not constitute good faith and may itself constitute evidence of bad faith registration. A registrant cannot claim ignorance of a prior mark when basic due diligence would have revealed its existence. This is sometimes referred to as the "ostrich approach" and has been consistently rejected by WIPO and Forum arbitrators in UDRP proceedings.
              </p>
              <p className="text-lg leading-relaxed">
                The geographic overlap — both parties selling into Florida, our established and primary market — provides additional grounds supporting a finding of intentional bad faith targeting and likely consumer confusion as to source, sponsorship, or affiliation, consistent with UDRP Policy ¶4(b)(iii) and ¶4(b)(iv).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-7 w-7 text-primary shrink-0" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Applicable Legal Framework</h2>
            </div>
            <p className="text-muted-foreground text-lg">This matter is governed by the following international and U.S. legal frameworks.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {legalBodies.map((body, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{body.name}</div>
                <div className="text-sm font-semibold text-foreground mb-3">{body.full}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{body.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation of Rights */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Reservation of Rights</h2>
            <p className="text-white/85 text-lg leading-relaxed mb-6">
              The Roof Store expressly reserves all rights to pursue available remedies, including but not limited to:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Filing a UDRP complaint with the WIPO Arbitration and Mediation Center (Geneva, Switzerland)",
                "Filing a UDRP complaint with The Forum / ADR Forum (Minneapolis, Minnesota)",
                "Sending formal Cease and Desist correspondence to infringing parties",
                "Pursuing remedies under the Anti-Cybersquatting Consumer Protection Act (ACPA) in U.S. federal court",
                "Pursuing remedies under applicable Florida state law governing unfair competition and deceptive trade practices",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent shrink-0 mt-2.5" />
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/60 text-sm italic">
              This notice was published on July 7, 2026 and constitutes public record of The Roof Store's prior rights claim. This notice does not constitute a waiver of any rights or remedies, all of which are expressly preserved. This page does not constitute legal advice. Consult a qualified intellectual property attorney for guidance specific to your situation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">You Found the Original</h2>
            <p className="text-muted-foreground text-lg mb-8">
              The Roof Store has been protecting Florida homes since 1994. If you're looking for the real thing — the original liquid rubber roof coating specialist at theroofstore.net — you're in the right place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4" /> Call 954-210-9614
              </Link>
              <Link
                href="/roof-systems"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Our Roof Systems <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
