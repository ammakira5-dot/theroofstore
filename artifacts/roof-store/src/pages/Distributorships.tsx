import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Globe, TrendingUp, Wrench, BarChart3, Users, Phone } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Established Online Presence & Identity", desc: "Join a brand with nearly 30 years of documented performance and an existing customer base in South Florida and beyond." },
  { icon: TrendingUp, title: "Complete Turn-Key Startup Package", desc: "Executive-level entry package includes comprehensive marketing demographics, territory analysis, and full business operations setup." },
  { icon: Wrench, title: "Full Sales Training & Support", desc: "We train you on our products, application process, sales approach, and customer evaluation methodology. You never go in cold." },
  { icon: BarChart3, title: "Comprehensive Marketing Demographics", desc: "Access to our South Florida market data, lead generation systems, and documented testimonials to accelerate your territory launch." },
  { icon: Users, title: "Documented Testimonials", desc: "Decades of customer testimonials, real project case studies, and documented hurricane performance results you can share with prospects." },
  { icon: CheckCircle2, title: "Proven 30-Year Process", desc: "The only TAS-106 Dade County Pull Test Rated roof coating system worldwide. 135+ MPH documented. The process is proven — you execute it." },
];

const markets = [
  { region: "Florida", desc: "South, Central, and North Florida residential and commercial markets" },
  { region: "Southeast US", desc: "Georgia, South Carolina, and coastal Gulf markets" },
  { region: "National", desc: "High-humidity and hurricane-prone markets across the continental US" },
  { region: "International", desc: "Tropical and coastal international markets — Caribbean, Central America, and beyond" },
];

const steps = [
  { n: "01", label: "Initial Contact", desc: "Call or submit an inquiry. We'll schedule a free over-the-phone consultation to discuss your market and background." },
  { n: "02", label: "Confidentiality Agreement", desc: "We require a confidentiality agreement before discussing business specifics — this protects both parties during the evaluation process." },
  { n: "03", label: "Territory & Opportunity Review", desc: "We walk through the market opportunity, profitability model, product line, and what a turn-key startup looks like for your specific region." },
  { n: "04", label: "Training & Launch", desc: "Once approved, you receive full sales training, product training, application support, and marketing resources to launch your territory." },
];

export default function Distributorships() {
  return (
    <div className="w-full">
      <SEO
        title="Distributorships & Franchise Opportunities — The Roof Store"
        description="Become a licensed distributor or contractor for FungalShield, SmartShield, and RoofShield — the only TAS-106 Dade County rated roof coating system worldwide. Florida, national, and international opportunities available."
        canonical="/distributorships"
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Contractor & Investor Opportunities
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Distributorships</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Construction and manufacturing of reflective, high-performance roof coating systems is one of the fastest-growing and most profitable businesses in the world today. Join the original.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "30+", label: "Years in Business" },
              { value: "5×", label: "Stronger Than a New Roof" },
              { value: "135+ MPH", label: "Documented Wind Rating" },
              { value: "A+", label: "BBB Rating Since 1994" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{s.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">The Opportunity</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The Roof Store is taking its proven process and premium product line into national and international markets. We bring an established brand and loyal customer base — a leader in the roof weatherproofing technology niche in South Florida for nearly 30 years. Our proprietary concept has consistently provided 5× the strength and longevity of existing roofs at a fraction of the cost and production time of traditional replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 bg-card border rounded-xl shadow-sm"
              >
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-primary text-center mb-10">Available Markets</h2>
            <div className="space-y-4">
              {markets.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 p-5 bg-muted rounded-xl"
                >
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary mb-0.5">{m.region}</div>
                    <div className="text-muted-foreground text-sm">{m.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 bg-card border rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl font-serif font-bold text-primary/20 shrink-0 leading-none w-10 text-center">{s.n}</div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{s.label}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Ready to Talk?</h2>
              <p className="text-white/75 text-lg leading-relaxed mb-4">
                Contact Raymond J. Meurer Jr., Director of Investor Relations, for a confidential consultation about available territories and the business opportunity.
              </p>
              <p className="text-white/60 text-sm">
                All discussions are confidential. A confidentiality agreement is required before substantive business specifics are shared.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg">
                <Link href="/contact">Submit an Inquiry</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 h-14 text-lg">
                <a href="tel:954-210-9614">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 954-210-9614 Option 1
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
