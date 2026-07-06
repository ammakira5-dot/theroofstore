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
    description: "Our treatment demonstrably extends the functional and protective life of your roof, providing the evidence needed to support an extended life certification.",
  },
  {
    number: "04",
    title: "Keep Your Insurance",
    description: "With a restored, professionally treated roof, you have the documentation to challenge cancellation and keep your homeowner's insurance policy in place.",
  },
];

const benefits = [
  "Avoid a $15,000–$40,000 full roof replacement",
  "Keep your existing homeowner's insurance policy",
  "100% acrylic elastomeric rubber coating — not just paint",
  "Extends roof life by 10–25 years",
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
    name: "Additional Roof Life Certification — The Roof Store",
    url: `${BASE}/roof-life-certification`,
    description: "Professional roof coating treatment that extends the certified life of aging roofs in Florida, helping homeowners avoid forced re-roofing by insurance companies.",
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
        title="Additional Roof Life Certification Florida | The Roof Store"
        description="Florida insurance company threatening to cancel because of your roof's age? Our professional rubber coating system extends your roof's certified life — saving you $15,000–$40,000 vs. full replacement. Serving Broward, Miami-Dade & Palm Beach since 1994."
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
              FLORIDA ROOF LIFE CERTIFICATION SERVICE
            </div>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Don't Let Your Insurance Company<br />
              <span className="text-accent">Force a Roof Replacement</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              If your Florida insurer is threatening to cancel your policy because of your roof's age, our professional rubber coating system can extend your roof's certified life — saving you tens of thousands of dollars.
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
              How Our Certification Treatment Works
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our high-strength liquid rubber coating system restores your roof to like-new protective performance — providing the professional treatment documentation needed to support an extended life certification.
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

      {/* Legal Basis / Sources */}
      <section className="py-12 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif font-bold text-xl text-primary mb-3">The Legal Basis for Roof Life Certification</h2>
          <p className="text-foreground/70 text-sm leading-relaxed mb-3">
            Roof life certification isn't a marketing concept — it's grounded in Florida law and the insurance industry's own paperwork. Florida Senate Bill 2-D (2022), codified as{" "}
            <span className="font-medium text-primary">Florida Statute 627.7011(5)</span>, prohibits insurers from denying coverage or requiring replacement of a roof based on age alone if a licensed contractor or engineer certifies the roof has sufficient remaining useful life.
          </p>
          <p className="text-foreground/70 text-sm leading-relaxed">
            Citizens Property Insurance Corporation formalizes this with its own{" "}
            <a
              href="https://www.citizensfla.com/documents/20702/1199344/CIT+RCF-1+03+23.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80"
            >
              Roof Condition Certification Form (CIT RCF-1)
            </a>
            , the affidavit a licensed contractor completes to document a roof's condition and remaining serviceable life. That's the exact document our assessment and coating treatment are designed to support.
          </p>
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
