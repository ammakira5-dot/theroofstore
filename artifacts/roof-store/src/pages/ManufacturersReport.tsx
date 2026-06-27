import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Camera, Layers, Droplets, RotateCcw, ShieldCheck, AlertTriangle, Phone } from "lucide-react";

const BASE = "https://www.theroofstore.net";

export default function ManufacturersReport() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Manufacturer's Inspection Report — RoofShield Monolithic System",
    description:
      "Pre-application roof inspection required for RoofShield warranty programs in Florida. Includes infrared moisture scan, signed drawing legend, photo documentation, and required rework areas. Fee is 100% refundable.",
    provider: {
      "@type": "RoofingContractor",
      name: "The Roof Store",
      telephone: "954-210-9614",
      url: BASE,
    },
    areaServed: ["Miami-Dade County", "Broward County", "Palm Beach County"],
    url: `${BASE}/manufacturers-report`,
    offers: {
      "@type": "Offer",
      price: "150.00",
      priceCurrency: "USD",
      description: "$150 per 5,000 sq ft — 100% refundable with warranty program",
    },
  };

  const reportItems = [
    {
      icon: Camera,
      title: "Photo Documentation",
      desc: "Comprehensive photographic record of the entire roof surface, including all existing problem areas, penetrations, flashings, and drainage points.",
    },
    {
      icon: Layers,
      title: "Signed Drawing Legend",
      desc: "A scaled roof drawing signed by our inspector clearly marking all zones, rework areas, drains, AC units, pipes, and structural features.",
    },
    {
      icon: Droplets,
      title: "Infrared Moisture Scan",
      desc: "Thermal infrared imaging detects hidden moisture trapped beneath the surface — invisible to the naked eye but critical to long-term coating adhesion and warranty validity.",
    },
    {
      icon: ClipboardCheck,
      title: "Required Rework Scope",
      desc: "A written itemized list of any repairs or surface preparation required before application — no surprises. If rework is needed, we quote it before the job starts.",
    },
  ];

  return (
    <>
      <SEO
        title="Manufacturer's Inspection Report | RoofShield Warranty | The Roof Store"
        description="The Roof Store's Manufacturer's Report is required for all RoofShield Monolithic warranty programs on flat and tile roofs in Florida. Includes infrared moisture scan, drawing legend, and rework scope. $150/5,000 sq ft — 100% refundable."
        canonical={`${BASE}/manufacturers-report`}
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="h-4 w-4" />
            Required for Warranty
          </div>
          <h1 className="text-5xl font-serif font-bold mb-6 leading-tight">
            Manufacturer's Inspection Report
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Every RoofShield Monolithic warranty program on a flat or tile roof requires a Manufacturer's Report — a thorough pre-application inspection that protects both you and the warranty.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">What Is It?</div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                A Complete Roof Assessment Before We Touch a Drop of Coating
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Before we can apply the RoofShield Monolithic system and back it with a manufacturer's warranty, we need to know exactly what we're working with. Flat roofs with negative pitch, old rework areas, ponding water zones, AC units with minimal clearance — these all affect how we prepare and apply the system.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The Manufacturer's Report documents the roof's current condition in full detail: photographs, a signed scaled drawing, infrared moisture imaging, and a written scope of any repairs needed before application can begin.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The report <strong className="text-foreground">must accompany any warranty program</strong>. It is the foundation of the guarantee we provide.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border">
              <img
                src="/images/flat-roof-inspection-example.png"
                alt="Flat roof inspection — ponding water zones, rework areas, and AC penetrations documented during manufacturer's report"
                className="w-full h-auto object-cover"
              />
              <div className="bg-muted px-5 py-3 text-xs text-muted-foreground font-medium">
                Example: flat roof with ponding zones, old rework patches, and pipe penetrations — all documented in the report
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the report contains */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Report Contents</div>
            <h2 className="text-4xl font-serif font-bold text-primary">What's Included in Every Report</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reportItems.map((item) => (
              <div key={item.title} className="bg-background rounded-2xl p-8 shadow-sm border">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example drawings callout */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Example: Inspection Drawing</h3>
                <p className="text-muted-foreground text-sm">
                  Your report will include a scaled drawing like this — designating all required rework areas, repairs, drain locations, AC clearances, and ponding zones before any product is applied.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-6 text-center text-muted-foreground text-sm border border-dashed border-muted-foreground/30">
              <Layers className="h-8 w-8 mx-auto mb-3 opacity-30" />
              Sample inspection drawing provided upon scheduling your report.
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Pricing</div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Fee Structure</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Transparent pricing — and 100% refundable when you proceed with a warranty program.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Main report fee */}
            <div className="bg-background rounded-2xl p-8 shadow-sm border-2 border-accent/30 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">100% Refundable</span>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-bold text-primary mb-2">Manufacturer's Inspection Report</h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-serif font-bold text-accent">$150</span>
                  <span className="text-muted-foreground mb-1">per 5,000 sq ft</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Example: a 20,000 sq ft commercial flat roof = <strong className="text-foreground">$600</strong> — fully refunded when the warranty program is purchased.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Photo documentation of full roof surface", "Signed scaled drawing legend", "Infrared moisture scan", "Required rework scope (if any)", "100% refunded with warranty program"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cores */}
            <div className="bg-background rounded-2xl p-8 shadow-sm border">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Core Samples</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                In situations where long-term ponding water is present, the Manufacturer may require core samples to assess structural integrity below the surface. Core testing is performed by an independent certified testing company.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                <p className="font-semibold text-foreground mb-1">Additional charge — varies by scope</p>
                <p className="text-muted-foreground">Paid directly to the independent Testing Company. We coordinate scheduling on your behalf.</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 flex items-start gap-3">
            <RotateCcw className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              <strong>Fully Refundable Guarantee:</strong> The Manufacturer's Report fee is 100% refunded when you move forward with a RoofShield warranty program. You only pay it once — and it comes back to you at the start of the job.
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Why It Matters</div>
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            You Can't Warranty What You Can't Inspect
          </h2>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Any contractor can paint your roof. Providing a manufacturer's warranty backed by real data is different. The Manufacturer's Report is what separates a <em>guaranteed</em> roof system from a coat of paint.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Flat roofs have unique challenges — negative pitch areas that hold water, old torch-down or modified bitumen rework patches, AC condensate drains, pipe penetrations with minimal clearance. We document every one of them so the system is applied correctly, performs as designed, and is warrantied without exceptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Your Inspection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg border-primary text-primary hover:bg-primary hover:text-white">
              <a href="tel:954-210-9614">
                <Phone className="h-5 w-5 mr-2" />
                Call 954-210-9614
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
