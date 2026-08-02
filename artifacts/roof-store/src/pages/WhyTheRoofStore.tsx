import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Store,
  Hammer,
  Wind,
  FileCheck2,
  ShieldCheck,
  BadgeDollarSign,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const tiers = [
  {
    Icon: Store,
    name: "The Roof Store",
    role: "Retailer",
    desc: "The retail storefront and network at theroofstore.net. Sells the three roof coating systems — Fungal Shield, Smart Shield, and Roof Shield — direct to homeowners, contractors, and businesses.",
  },
  {
    Icon: Factory,
    name: "RoofProtect Products",
    role: "Manufacturer",
    desc: "The in-house factory in Davie, FL. Manufactures every gallon of the coating materials used inside the three systems — 100% liquid rubber, no water, fillers, thickeners, or extenders. County-licensed and MSDS/SDS compliant.",
  },
  {
    Icon: Hammer,
    name: "Storm Shield Paint Systems Inc.",
    role: "Licensed Installer",
    desc: "The optional, exclusive licensed contracting division. Customers who want professional installation can hire the same organization that made the product — A+ BBB rated, licensed since 1994.",
  },
];

const proofPoints = [
  {
    Icon: Wind,
    title: "TAS-106 Hurricane Uplift Test",
    desc: "Roof Shield (RP3) is the only liquid-applied roof coating in the world to pass the Dade County Certified TAS-106 Uplift Test (2006) — with documented 135+ MPH performance in real hurricane events.",
    href: "/tas-106-certified-roof-coating",
    linkLabel: "See the TAS-106 test results",
  },
  {
    Icon: FileCheck2,
    title: "Additional Roof Life Certification",
    desc: "Under Florida SB 2-D, an independent Useful Life Exam can document additional useful life for an aging roof — documentation that matters when your insurance carrier questions your roof's age. Our system — which passed the Dade County Certified TAS-106 Uplift Test — and complete manufacturing records support that independent inspection.",
    href: "/roof-life-certification",
    linkLabel: "How the certification works",
  },
  {
    Icon: ShieldCheck,
    title: "Three Systems, One Source",
    desc: "Fungal Shield (RP1) for mold and biological growth. Smart Shield (RP2) with 3,000+ cool-pigment colors that reflect UV. Roof Shield (RP3), the premium monolithic system that passed the Dade County Certified TAS-106 Uplift Test. Every one built from materials made in our own Davie factory.",
    href: "/roof-systems",
    linkLabel: "Compare the three systems",
  },
  {
    Icon: BadgeDollarSign,
    title: "Factory-Direct Pricing",
    desc: "Because every gallon is blended at our own facility, there's no retail markup. Homeowners typically save 60–70% versus full roof replacement; contractors and DIYers buy the same coatings we install, at factory pricing, shipped or picked up in Davie.",
    href: "/pricing",
    linkLabel: "See pricing",
  },
];

export default function WhyTheRoofStore() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Why The Roof Store — Manufacturer, Retailer & Licensed Installer",
      url: `${BASE}/why-the-roof-store`,
      description:
        "Why The Roof Store stands apart: one connected organization that manufactures (RoofProtect Products), retails (The Roof Store), and installs (Storm Shield Paint Systems Inc.) its own roof coating systems — one of which passed the Dade County Certified TAS-106 Uplift Test — in Davie, Florida.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Why The Roof Store", item: `${BASE}/why-the-roof-store` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Why The Roof Store — Manufacturer, Retailer & Licensed Installer in One"
        description="One organization makes it, sells it, and installs it: RoofProtect Products manufactures, The Roof Store retails, Storm Shield Paint Systems installs. Passed the Dade County Certified TAS-106 Uplift Test, factory-direct pricing, Davie FL since 1994."
        canonical="/why-the-roof-store"
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL" }}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Manufacturer · Retailer · Licensed Installer
            </div>
            <h1 className="text-5xl font-serif font-bold mb-5">Why The Roof Store</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Most roofing contractors buy someone else's paint. Most supply stores don't install anything. The Roof Store is a vertical integrator — one connected organization in Davie, Florida that manufactures, sells, and installs its own liquid rubber roof coating systems. Here's why that matters for your roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The three tiers */}
      <section className="py-24 bg-background border-b">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">One Organization, Three Roles</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The formulation, the sale, the installation protocol, and the warranty all come from the same connected source — no distributor, no middleman, no warranty gap.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map(({ Icon, name, role, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{role}</div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
            Fungal Shield, Smart Shield, and Roof Shield are <strong className="text-foreground">systems</strong> — complete restoration methods built from products manufactured in-house by RoofProtect Products. Hiring our installation division is always optional: buy the product and apply it yourself, use your own licensed contractor, or have us do it end to end.
          </p>
        </div>
      </section>

      {/* Proof points */}
      <section className="py-24 bg-muted border-b">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">What Vertical Integration Earns You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proofPoints.map(({ Icon, title, desc, href, linkLabel }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col"
              >
                <Icon className="h-7 w-7 text-accent mb-4" />
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                <Link href={href} className="text-accent hover:underline font-semibold text-sm inline-flex items-center gap-1">
                  {linkLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-20 bg-background border-b">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Thirty Years of Skin in the Game</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                This isn't a franchise or a rebrand. The same family-run business has operated continuously in South Florida since 1994 — from the "Don't Reroof — Waterproof!" banner at the Fort Lauderdale Home Show to a fully in-house manufacturer today. The licensed installation division has held an A+ Better Business Bureau rating for over 30 years.
              </p>
              <p>
                When the organization that engineered the system is the same one that shows up on your roof, accountability has nowhere to hide. That's the whole idea.{" "}
                <Link href="/about" className="text-accent hover:underline font-medium">Read our full history →</Link>
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Licensed in Florida", value: "Since 1994" },
                { label: "BBB Rating", value: "A+" },
                { label: "TAS-106 Certified Test", value: "Passed 2006" },
                { label: "Homes Protected", value: "10,000+" },
              ].map((stat, i) => (
                <div key={i} className="bg-card rounded-xl p-6 text-center border">
                  <div className="text-2xl font-serif font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA — same primary conversion path as the rest of the site */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">See What Your Roof Qualifies For</h2>
          <p className="text-xl text-white/80 mb-10">
            A licensed representative assesses your roof, confirms the right system, and provides a firm quote — installed or product-only. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-10 text-lg font-bold">
              <Link href="/shop">Buy Factory-Direct</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <CheckCircle2 className="h-4 w-4" /> Call 954-210-9614 — Davie, FL
          </div>
        </div>
      </section>
    </div>
  );
}
