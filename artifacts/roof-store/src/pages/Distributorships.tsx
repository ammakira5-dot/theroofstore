import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import {
  CheckCircle2,
  MapPin,
  DollarSign,
  Tv,
  Globe,
  ShieldCheck,
  Wrench,
  TrendingUp,
  Users,
  Package,
  Phone,
  CreditCard,
} from "lucide-react";

const BASE = "https://www.theroofstore.net";

const systemBenefits = [
  "Upgrades, Protects & Insulates in one system",
  "FPL-documented up to 23% annual electric bill savings",
  "Pays for itself over time",
  "Easy to install — complete on-site training provided",
  "60–70% less than roof replacement",
  "Stronger than a new roof",
  "Virtually sells itself",
];

const whatYouGet = [
  {
    icon: Package,
    title: "38 Proprietary Products at Wholesale",
    desc: "Purchase our full line of 100% resin liquid rubber products — no fillers — at 8–10% below retail price. Suitable for ponding water and below-grade projects.",
  },
  {
    icon: Wrench,
    title: "Complete On-Site Training",
    desc: "Full application training for all phases of the process. Installer, distributor, and sales manager tracks all included.",
  },
  {
    icon: Tv,
    title: "In-House Advertising Package",
    desc: "15 & 30-second TV commercials, testimonial video, installation video, 30-second radio spot, brochures, presentation folders, business cards, and branded shirts.",
  },
  {
    icon: Globe,
    title: "Dedicated Website & Online Branding",
    desc: "A dedicated website with product credentials, verifiable references over 5 years old, Google My Business account, and full content management.",
  },
  {
    icon: CreditCard,
    title: "V-Terminal Merchant Account",
    desc: "No-touch merchant account accepting all major credit cards — great for same-day repair servicing and on-the-spot payments.",
  },
  {
    icon: ShieldCheck,
    title: "Proven 9-Minute Sales Video",
    desc: "A step-by-step sales concept plus a nine-minute presentation video demonstrating installations in progress on all types of roof surfaces.",
  },
  {
    icon: MapPin,
    title: "Exclusive County Territories",
    desc: "Authorized distributors can receive exclusive county-assigned territories within Florida — plus state and national territory options.",
  },
  {
    icon: Users,
    title: "In-House Contractors & Licensing",
    desc: "Access to licensed, insured, and seasoned professional installers. Contractor and manufacturer's licensed qualifier included.",
  },
  {
    icon: TrendingUp,
    title: "Contractually Secured & Proven Profitable",
    desc: "A complete, contractually-backed business support model. Turn-key for sales managers. Financing available for those who qualify.",
  },
];

const credentials = [
  "Dade County Tested Rubber Roof Products",
  "Contractor & Manufacturer Licensed Qualifier",
  "State-of-the-Art Roof Waterproofing System",
  "Online References with Verifiable Phone Numbers",
  "A+ BBB Rated Since 1994",
  "TAS-106 Uplift Pull Test Certified",
];

const steps = [
  { n: "01", label: "Call or Inquire", desc: "Call 954-210-9614 Option 1 or submit a contact form for a FREE over-the-phone consultation and price sheet." },
  { n: "02", label: "Territory Review", desc: "We walk through available territories — county, state, and national — and review the market opportunity for your area." },
  { n: "03", label: "Product & Sales Training", desc: "Complete on-site training for application, sales, and business operations. Installer and sales manager tracks available." },
  { n: "04", label: "Launch Your Territory", desc: "Go live with your exclusive territory, full advertising package, dedicated website, and ongoing business support." },
];

export default function Distributorships() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Roof Coating Distributorship Opportunities — The Roof Store Florida",
      url: `${BASE}/distributorships`,
      description:
        "Become an authorized distributor of Fungal Shield, Smart Shield, and Roof Shield roof coating systems. Exclusive county territories, full training, advertising support, and proven sales system. Call 954-210-9614.",
      provider: {
        "@type": "Organization",
        name: "The Roof Store — Storm Shield Paint Systems Inc.",
        url: BASE,
        telephone: "+19542109614",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Distributorships", item: `${BASE}/distributorships` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Distributorship Opportunities — The Roof Store Florida"
        description="Become an authorized distributor of Fungal Shield, Smart Shield & Roof Shield. Exclusive county territories, full training, complete advertising support, and proven sales system. Call 954-210-9614."
        canonical="/distributorships"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#28A74520,_transparent_70%)]" />
        <div className="container px-4 max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Opportunities Now Available
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Distributorship<br />
              <span className="text-accent">Opportunities</span>
            </h1>
            <p className="text-xl text-white/80 mb-3 max-w-2xl mx-auto italic">
              "The Amazing Proven Liquid Applied Rubber Roof System"
            </p>
            <p className="text-2xl font-bold text-white mb-10">
              Don't Re-Roof It — Weatherproof It!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
                <a href="tel:9542109614">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 954-210-9614 Option 1
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-muted border-b border-border">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
            {[
              { value: "30+", label: "Years in Business" },
              { value: "38", label: "Proprietary Products" },
              { value: "135+ MPH", label: "Documented Wind Rating" },
              { value: "A+", label: "BBB Rated Since 1994" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="text-3xl font-serif font-bold text-primary mb-1">{s.value}</div>
                <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Shield System Overview */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
                The 5-Step Seamless Roof Coating System
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                Roof Shield™ — A Product That Virtually Sells Itself
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Fungal Shield, Smart Shield, and Roof Shield are the most advanced roof coating, waterproofing, and painting products available today. Our proprietary liquid rubber formulas are 100% resin — no fillers — and are suitable for ponding water and below-grade projects.
              </p>
              <ul className="space-y-3">
                {systemBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Cement Tile Before / After */}
              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src="/images/distributorships/Cement-tile-before.jpg" alt="Cement tile roof before Roof Shield coating" className="w-full h-44 object-cover" />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded">BEFORE</span>
                  </div>
                  <div className="relative">
                    <img src="/images/distributorships/Cement-Tile-After.jpg" alt="Cement tile roof after Roof Shield coating" className="w-full h-44 object-cover" />
                    <span className="absolute top-2 left-2 bg-accent/90 text-white text-xs font-bold px-2 py-0.5 rounded">AFTER</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Cement Tile — Customer Testimonial</div>
                  <p className="text-muted-foreground italic text-sm">"Your process to extend the life of the roof is great."</p>
                </div>
              </div>

              {/* Barrel Tile Weatherproof */}
              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <img src="/images/distributorships/barrel-tile-after-weatherproof.jpg" alt="Barrel tile roof after weatherproofing with Roof Shield" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Barrel Tile — Customer Testimonial</div>
                  <p className="text-muted-foreground italic text-sm">"The coating really stopped all my roof leaks."</p>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-6 text-center">
                <div className="text-sm font-semibold text-white/70 mb-1 uppercase tracking-wide">County, State & National</div>
                <div className="text-2xl font-serif font-bold">Territories Available</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">What You Get as a Distributor</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've established the relationships and the credibility. You get a complete, proven business from day one — not a concept.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & How It Works */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Investment */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">The Numbers</h2>
              <div className="space-y-5 mb-8">
                <div className="rounded-2xl border-2 border-border bg-card p-7">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Distributor Installer</div>
                  <div className="flex items-end gap-1 mb-3">
                    <DollarSign className="h-6 w-6 text-accent mb-1" />
                    <span className="text-4xl font-serif font-bold text-foreground">25,000</span>
                    <span className="text-muted-foreground text-sm mb-1">minimum</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Full product line, exclusive territory, on-site training, and complete advertising package included.</p>
                </div>
                <div className="rounded-2xl border-2 border-accent bg-accent/5 p-7">
                  <div className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Turn-Key Option</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Sales Manager</div>
                  <div className="text-3xl font-serif font-bold text-foreground mb-3">Negotiable</div>
                  <p className="text-muted-foreground text-sm">Financing available for those who qualify. Complete business support included.</p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl p-6 border border-border">
                <div className="text-sm font-bold text-primary mb-4">Included Credentials</div>
                <div className="space-y-2.5">
                  {credentials.map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">How It Works</h2>
              <div className="space-y-5">
                {steps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5 bg-card border border-border rounded-xl p-5 shadow-sm"
                  >
                    <div className="text-3xl font-serif font-bold text-primary/20 shrink-0 leading-none w-10 text-center">{s.n}</div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{s.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Network callout */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="bg-muted rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Already a Partner?</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">View Our Authorized Distributor & Licensed Installers Network</h3>
              <p className="text-muted-foreground leading-relaxed">
                See our current authorized partners — Windproof Roof Systems and Roof Protect Products — and how they're listed on theroofstore.net.
              </p>
            </div>
            <Link
              href="/partner-network"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors shrink-0"
            >
              View Distributor & Installer Network
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-2">
              Call for a FREE over-the-phone consultation and price sheet.
            </p>
            <p className="text-white/50 text-sm mb-10">
              Only serious inquiries, please. Cleaning and coating systems available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
                <a href="tel:9542109614">
                  <Phone className="h-5 w-5 mr-2" />
                  954-210-9614 Option 1
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
                <Link href="/contact">Send a Message</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
