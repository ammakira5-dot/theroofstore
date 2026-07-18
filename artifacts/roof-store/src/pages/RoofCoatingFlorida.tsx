import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ShieldCheck, Check, X, ArrowRight, AlertTriangle, Medal, Phone } from "lucide-react";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Roof Coating in Florida: Complete Homeowner & Business Guide",
    description:
      "A comprehensive guide to roof coating in Florida covering types, costs, hurricane performance, insurance impact, and how to choose a licensed contractor.",
    url: `${BASE}/roof-coating-florida`,
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    author: { "@type": "Organization", name: "The Roof Store", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "The Roof Store",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/assets/images/logo.png` },
    },
    image: `${BASE}/assets/images/Waterproofing-Technology.jpg`,
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Roof Coating Florida",
        item: `${BASE}/roof-coating-florida`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is roof coating and how does it work in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Roof coating is a liquid-applied elastomeric, polyurethane, or silicone membrane sprayed or rolled directly onto an existing roof surface. It cures into a seamless, fully-adhered rubber layer that waterproofs, reflects UV heat, and — in certified systems — provides wind uplift resistance. In Florida's climate, roof coating extends the life of tile, flat, metal, and shingle roofs by 10–25 years at roughly 60–70% of the cost of full replacement.",
        },
      },
      {
        "@type": "Question",
        name: "How much does roof coating cost in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional roof coating in Florida costs between $1.90 and $3.50 per square foot installed, including labor and materials (5/12+ pitch is additional per sq ft). Waterproof color coating (RP2) starts at $1.90/sq ft. The full monolithic hurricane protection system (RP3 Roof Shield) starts at $2.70/sq ft. All prices at The Roof Store include labor and materials. Full replacement in Florida typically runs $10–$25 per square foot, making coating 60–70% less expensive.",
        },
      },
      {
        "@type": "Question",
        name: "Does roof coating void homeowners insurance in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A Florida Governor's Bulletin issued in March 2023 reaffirmed homeowners' legal right to an Additional Roof Life Certification — a licensed contractor or engineer's affidavit that certifies the coated roof's remaining useful life. Florida Senate Bill 2-D (2022) further restricts insurance companies from forcing roof replacement on roofs with more than 25% useful life remaining.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between roof coating and roof paint in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Roof paint is a thin decorative coating (2–5 mils) that lasts 2–3 years with minimal waterproofing. Roof coating is a thick liquid-applied rubber membrane (20–40+ mils) that cures into a seamless, fully-adhered waterproof surface lasting 10–25 years, with manufacturer warranties and — in The Roof Store's RP3 system — hurricane wind uplift certification.",
        },
      },
      {
        "@type": "Question",
        name: "How long does roof coating last in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professionally applied elastomeric roof coating system lasts 10–25 years in Florida's climate. The Roof Store's Roof Shield (RP3) system carries a maintenance-free Lifetime Warranty when professionally installed. Silicone formulations used on flat commercial roofs carry up to a 50-year product warranty.",
        },
      },
      {
        "@type": "Question",
        name: "Is roof coating hurricane-rated in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most roof coatings are not hurricane-rated. The Roof Store's Roof Shield (RP3) system is the only liquid-applied roof coating in the world to hold Dade County TAS-106 Uplift Certification (2023). The system has been validated at 135+ MPH and creates a monolithic roof structure with five times the wind uplift resistance of a standard new tile roof.",
        },
      },
      {
        "@type": "Question",
        name: "Can commercial properties use roof coating in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Roof Store provides silicone Grade 3 systems rated for standing water, with up to a 50-year product warranty. Applications include warehouses, retail centers, condominiums, HOA communities, and institutional buildings. Installation typically takes 1–3 days.",
        },
      },
      {
        "@type": "Question",
        name: "What types of roofs can be coated in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional coating can be applied to cement tile, barrel tile, S-tile, Spanish tile, flat concrete, flat smooth membrane, metal, shingle, gravel built-up, and foam roofs. Formulation is determined after a manufacturer's on-site inspection.",
        },
      },
      {
        "@type": "Question",
        name: "How do I choose a roof coating contractor in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Verify: (1) Florida Roofing Contractor license at DBPR.myflorida.com, (2) general liability and workers' comp insurance, (3) roofing-grade — not paint-grade — products, (4) manufacturer-backed written warranty, (5) familiarity with Additional Roof Life Certification. The Roof Store is A+ BBB rated and has been licensed in Florida since 1994.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "The Roof Store Waterproofing Products",
    alternateName: "The Roof Store",
    legalName: "Storm Shield Paint Systems Inc.",
    url: BASE,
    telephone: "+19542109614",
    email: "theroofstore@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4801 S University Dr",
      addressLocality: "Davie",
      addressRegion: "FL",
      postalCode: "33328",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 26.0765, longitude: -80.2521 },
    foundingDate: "1994",
    priceRange: "$$",
  },
];

const tocItems = [
  { href: "#what-is", label: "What Is Roof Coating?" },
  { href: "#why-florida", label: "Why Florida Roofs Need Coating More Than Any Other State" },
  { href: "#types", label: "Types of Roof Coating in Florida" },
  { href: "#residential", label: "Residential Roof Coating" },
  { href: "#commercial", label: "Commercial Roof Coating" },
  { href: "#insurance", label: "How Roof Coating Affects Homeowners Insurance" },
  { href: "#hurricane", label: "TAS-106 — The Only Hurricane-Certified Liquid Coating" },
  { href: "#cost", label: "Roof Coating Cost in Florida" },
  { href: "#how-to-choose", label: "How to Choose a Contractor" },
  { href: "#service-areas", label: "Service Areas" },
  { href: "#faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is roof coating and how does it work in Florida?",
    a: "Roof coating is a liquid-applied elastomeric, polyurethane, or silicone membrane sprayed or rolled directly onto an existing roof surface. It cures into a seamless, fully-adhered waterproof layer that protects against water infiltration, UV degradation, mold, and — in certified systems — wind uplift. In Florida's climate, it extends roof life by 10–25 years at roughly 60–70% of the cost of full replacement.",
  },
  {
    q: "How much does roof coating cost in Florida?",
    a: "Professional roof coating costs between $1.90 and $3.50 per square foot installed at The Roof Store, including labor and materials (5/12+ pitch is additional per sq ft). Waterproof color coating (RP2) starts at $1.90/sq ft; the full hurricane-rated monolithic system (RP3 Roof Shield) starts at $2.70/sq ft. All prices include labor and materials.",
    link: { href: "/pricing", label: "View the full price menu →" },
  },
  {
    q: "Does roof coating void homeowners insurance in Florida?",
    a: "No. Florida SB 2-D (2022) and a Governor's Bulletin issued in March 2023 establish homeowners' legal right to an Additional Roof Life Certification from a licensed contractor or engineer. This certification protects your insurance coverage and legally supersedes any insurance agent's opinion about roof condition. The Roof Store can issue ARLC documentation for qualifying coated roofs.",
  },
  {
    q: "What is the difference between roof coating and roof paint?",
    a: "Roof paint is a thin decorative product (2–5 mils dry film thickness) that lasts 2–3 years with minimal waterproofing. Professional roof coating is a thick rubber membrane (20–40+ mils) that cures into a seamless, fully-adhered waterproof surface lasting 10–25 years, with manufacturer warranties and — in The Roof Store's RP3 system — hurricane wind uplift certification.",
  },
  {
    q: "How long does roof coating last in Florida?",
    a: "A professionally applied roof coating system lasts 10–25 years in Florida, depending on formulation grade and maintenance. The Roof Shield (RP3) carries a maintenance-free Lifetime Warranty when professionally installed. Silicone systems on commercial flat roofs carry up to a 50-year product warranty.",
  },
  {
    q: "Is roof coating hurricane-rated in Florida?",
    a: "Most roof coatings are not hurricane-rated. The Roof Store's Roof Shield (RP3) is the only liquid-applied coating in the world with Dade County TAS-106 Uplift Certification (2023). It has been validated at 135+ MPH sustained wind and creates a monolithic roof structure with 5× the uplift resistance of a standard new tile roof.",
  },
  {
    q: "Can commercial properties use roof coating in Florida?",
    a: "Yes. The Roof Store provides silicone Grade 3 commercial systems rated for standing water, with up to 50-year product warranties. Applications include warehouses, retail centers, condominiums, HOA communities, and institutional buildings. Commercial installation typically takes 1–3 days with minimal business disruption.",
    link: { href: "/contact", label: "Request a commercial quote →" },
  },
  {
    q: "What types of roofs can be coated in Florida?",
    a: "Professional coating can be applied to cement tile, barrel tile, S-tile, Spanish tile, flat concrete, flat smooth membrane, metal, shingle, gravel built-up, and foam roofs. Formulation is determined after a manufacturer's on-site inspection.",
  },
  {
    q: "How do I choose a roof coating contractor in Florida?",
    a: "Verify: (1) Florida Roofing Contractor license at DBPR.myflorida.com, (2) general liability and workers' comp insurance, (3) roofing-grade — not paint-grade — products, (4) manufacturer-backed written warranty, (5) familiarity with Additional Roof Life Certification. The Roof Store is A+ BBB rated and has been licensed in Florida since 1994.",
    link: { href: "/contact", label: "Contact us →" },
  },
];

function AnswerBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg px-5 py-4 my-4">
      <div className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">Direct Answer</div>
      <p className="text-sm text-green-900 leading-relaxed">{children}</p>
    </div>
  );
}

function Callout({ variant = "blue", title, children }: { variant?: "blue" | "gold" | "red"; title: string; children: React.ReactNode }) {
  const styles = {
    blue: "bg-blue-50 border-blue-200",
    gold: "bg-amber-50 border-amber-300",
    red: "bg-red-50 border-red-200",
  };
  const titleStyles = { blue: "text-blue-800", gold: "text-amber-800", red: "text-red-800" };
  return (
    <div className={`border rounded-xl p-5 my-4 ${styles[variant]}`}>
      <div className={`font-bold text-sm mb-1 ${titleStyles[variant]}`}>{title}</div>
      <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

export default function RoofCoatingFlorida() {
  return (
    <div className="w-full">
      <SEO
        title="Roof Coating in Florida: Complete Homeowner & Business Guide | The Roof Store"
        description="Florida's authoritative guide to roof coating — types, costs, hurricane performance, insurance impact, and how to choose a certified contractor. Serving Broward, Miami-Dade & Palm Beach since 1994."
        canonical="/roof-coating-florida"
        ogImage={`${BASE}/assets/images/Waterproofing-Technology.jpg`}
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL", position: "26.0765;-80.2521" }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent/80 text-white py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Roof Coating Florida</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              Roof Coating in Florida:<br />Complete Homeowner &amp; Business Guide
            </h1>
            <p className="text-lg text-white/85 max-w-2xl mb-6">
              Everything Florida homeowners and property managers need to know about professional roof coating — from system types and hurricane ratings to insurance requirements, real costs, and how to choose a licensed contractor.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Updated July 2026", "Broward · Miami-Dade · Palm Beach · Monroe", "Residential & Commercial", "TAS-106 Certified Contractor"].map((chip) => (
                <span key={chip} className="bg-white/10 border border-white/20 rounded-full px-3 py-1">{chip}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-primary/5 border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap items-stretch justify-center divide-x divide-border">
            {[
              { val: "60–70%", lbl: "Savings vs. Replacement" },
              { val: "10–25 yrs", lbl: "System Lifespan" },
              { val: "135+ MPH", lbl: "Wind-Rated (RP3)" },
              { val: "Est. 1994", lbl: "Established in Florida" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center px-8 py-4 text-center min-w-[110px]">
                <div className="text-xl font-bold text-primary leading-tight">{s.val}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-12 max-w-4xl mx-auto">

        {/* Table of Contents */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-3">In This Guide</div>
            <ol className="space-y-1">
              {tocItems.map((item, i) => (
                <li key={i} className="text-sm">
                  <a href={item.href} className="text-sky-700 hover:text-sky-900 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Section 1 — What Is Roof Coating */}
        <motion.section id="what-is" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">What Is Roof Coating?</h2>
          <AnswerBlock>
            Roof coating is a liquid-applied elastomeric, polyurethane, or silicone membrane that is sprayed or rolled directly onto an existing roof surface. It cures into a seamless, fully-adhered waterproof layer that protects against water infiltration, UV degradation, mold, and — in certified systems — wind uplift. Unlike roof paint, professional roof coating is formulated to roofing-grade specifications and is designed to last 10–25 years.
          </AnswerBlock>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Professional roof coating systems are manufactured to standards fundamentally different from decorative roof paint. A roofing-grade coating cures into a thick, flexible rubber membrane — typically 20–40 mils of dry film thickness — that bonds directly to the roof substrate. Because there are no seams or joints in a liquid-applied system, it eliminates the primary failure point of conventional roofing: the gaps between materials where water enters.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Roof Store manufactures and applies three proprietary coating systems —{" "}
            <Link href="/products/fungalshield" className="text-accent hover:underline font-medium">Fungal Shield (RP1)</Link>,{" "}
            <Link href="/products/smartshield" className="text-accent hover:underline font-medium">Smart Shield (RP2)</Link>, and{" "}
            <Link href="/products/roofshield" className="text-accent hover:underline font-medium">Roof Shield (RP3)</Link>{" "}
            — each formulated in-house at our Davie, Florida facility for the specific demands of South Florida's climate.
          </p>

          <h3 className="text-xl font-serif font-bold text-primary mb-3">Roof Coating vs. Roof Paint — The Critical Difference</h3>
          <p className="text-muted-foreground mb-4">This distinction matters enormously in Florida, where contractors sometimes market standard acrylic paint as a "protective coating."</p>
          <div className="overflow-x-auto rounded-xl border mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">Characteristic</th>
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">Professional Roof Coating</th>
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">Standard Roof Paint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Dry Film Thickness", "20–40+ mils (roofing grade)", "2–5 mils (paint grade)"],
                  ["Waterproofing", "✓ Fully waterproof membrane", "✗ Water resistant only"],
                  ["Lifespan in Florida", "10–25 years", "2–3 years before recoat"],
                  ["Manufacturer Warranty", "✓ Yes (up to Lifetime on RP3)", "✗ No structural warranty"],
                  ["Wind Uplift Rating", "✓ TAS-106 on RP3 (135+ MPH)", "✗ None"],
                  ["Insurance Cert Eligible", "✓ Yes — ARLC available", "✗ Generally no"],
                  ["Typical Cost (installed)*", "From $1.90/sq ft (RP2) · up to $3.90/sq ft (RP3)", "From $1.70/sq ft"],
                ].map(([char, coating, paint], i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">{char}</td>
                    <td className={`px-4 py-3 ${coating.startsWith("✓") ? "text-green-700 font-semibold" : "text-muted-foreground"}`}>{coating}</td>
                    <td className={`px-4 py-3 ${paint.startsWith("✗") ? "text-red-600" : "text-muted-foreground"}`}>{paint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-2">* Prices shown are for coating application only and may not include preparation work such as pressure cleaning, fungal treatment, or tile repairs required before application.</p>

          <Callout variant="blue" title="💡 The 20-Cent Difference — Why Smart Shield (RP2) Is Actually Better Value Than Roof Paint">
            At roughly $0.20 more per square foot, Smart Shield costs only slightly more than standard roof paint — but the comparison ends there. Here's what that extra $0.20 actually buys:<br /><br />
            <strong>Thickness.</strong> Smart Shield applies at approximately <strong>10 dry mils</strong> per coat. Standard roof paint delivers only <strong>4–5 mils per coat</strong> — meaning you need two to three paint coats just to approach the same film thickness, with correspondingly more material cost. By the time a painter has applied enough product to come close to roofing-grade coverage, the price difference has reversed.<br /><br />
            <strong>Flexibility.</strong> Roof paint is rigid. Florida tile roofs expand and contract with every temperature cycle. Smart Shield's elastomeric rubber formula moves with the roof: it stretches up to <strong>500% elongation</strong> under stress and returns to its original dimensions — a property standard roof paints simply cannot match. A rigid paint film cracks at the joints and valleys where movement is greatest; an elastomeric membrane bridges those movements without failing.<br /><br />
            <strong>The real comparison isn't RP2 vs. paint. It's one coat of Smart Shield vs. two or three coats of paint — and the coating wins on film thickness, lifespan, flexibility, and total installed cost.</strong>
          </Callout>
        </motion.section>

        {/* Section 2 — Why Florida */}
        <motion.section id="why-florida" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Why Florida Roofs Need Coating More Than Any Other State</h2>
          <AnswerBlock>
            Florida roofs degrade faster than roofs anywhere else in the continental United States due to intense UV exposure, extreme humidity, year-round mold and algae growth, and seasonal hurricane-force winds. A 20-year-old Florida tile roof has often experienced more structural stress than a 40-year-old roof in a temperate climate — making protective coating one of the most cost-effective maintenance investments a Florida property owner can make.
          </AnswerBlock>
          <h3 className="text-xl font-serif font-bold text-primary mb-3">The Four Florida Roof Killers</h3>
          <div className="space-y-4">
            {[
              {
                num: "1",
                title: "UV and Solar Heat Loading",
                body: "Florida receives more direct solar radiation than any other contiguous U.S. state. Prolonged UV exposure oxidizes and embrittles roofing membranes, fades tile glazing, and accelerates the breakdown of sealants. The Smart Shield (RP2) system's BASF Cool Pigment Technology reduces attic temperatures and cooling costs by 15–25% per Florida Power & Light (FP&L) assessments.",
              },
              {
                num: "2",
                title: "Humidity and Moisture Cycling",
                body: "South Florida averages over 75% relative humidity year-round. Daily moisture cycling — condensation in the morning, solar heating in the afternoon — expands and contracts roofing materials repeatedly. Without a seamless waterproof membrane, this drives water into grout lines, tile underlap joints, and hairline cracks.",
              },
              {
                num: "3",
                title: "Mold and Algae (Gloeocapsa magma)",
                body: "The dark black streaking visible on Florida tile roofs is caused by the cyanobacterium Gloeocapsa magma, which thrives in Florida's warm, humid conditions. Left untreated, biological growth accelerates tile degradation and triggers insurance inspection failures. The Fungal Shield (RP1) system is specifically formulated to eliminate and prevent biological growth.",
              },
              {
                num: "4",
                title: "Hurricane Wind Uplift",
                body: "Standard tile roofs can lose individual tiles at sustained winds above 90 MPH. The Roof Shield (RP3) monolithic system bonds all tiles together into a single continuous surface, achieving 5× the wind uplift resistance of a standard new tile roof — validated by Dade County TAS-106 testing at 135+ MPH.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-5 bg-muted/50 rounded-xl border">
                <div className="h-8 w-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0">{item.num}</div>
                <div>
                  <div className="font-bold text-foreground mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 3 — Types */}
        <motion.section id="types" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Types of Roof Coating in Florida</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Three primary coating chemistries are used on Florida roofs. The right choice depends on roof type, condition, intended goal, and budget. The Roof Store determines the appropriate formulation grade after a manufacturer's inspection — not before.
          </p>
          <div className="space-y-4">
            {[
              {
                grade: "Grade 1",
                title: "Elastomeric (Acrylic Rubber)",
                body: "Elastomeric coatings are water-based acrylic systems that cure into a flexible rubber membrane. Well-suited to tile roofs in good condition that need waterproofing, UV protection, and color restoration. Forms the formulation base for Fungal Shield (RP1) and Smart Shield (RP2). Standard warranties typically range from 10–15 years.",
              },
              {
                grade: "Grade 2",
                title: "Polyurethane",
                body: "Polyurethane formulations offer higher tensile strength and impact resistance than standard elastomeric coatings, making them appropriate for roofs with moderate wear, heavier foot traffic surfaces, or greater structural movement requirements. Enhanced warranties are available for polyurethane-grade applications.",
              },
              {
                grade: "Grade 3",
                title: "Silicone",
                body: "Silicone roof coatings are the highest-performance formulation for Florida conditions. Unlike elastomeric and polyurethane coatings, 100% silicone systems are fully rated for standing water (ponding) — a critical requirement for flat commercial roofs. Silicone formulations carry product warranties of up to 50 years and are the standard specification for commercial flat roof applications.",
              },
            ].map((item) => (
              <div key={item.grade} className="p-5 bg-muted/50 rounded-xl border">
                <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{item.grade}</div>
                <div className="font-bold text-foreground text-lg mb-2">{item.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
          <Callout variant="blue" title="💡 How Formulation Is Determined">
            The Roof Store does not sell a coating grade before inspecting the roof. The manufacturer's inspection ($150, fully refunded when you proceed) determines roof condition, substrate compatibility, drainage pattern, and the appropriate formulation — the same quality-control process used by commercial roofing engineers, applied to every project.
          </Callout>
        </motion.section>

        {/* Section 4 — Residential */}
        <motion.section id="residential" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Residential Roof Coating in South Florida</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For South Florida homeowners, roof coating addresses three distinct problems uniquely prevalent in this market: aging tile roofs that are structurally sound but cosmetically degraded, insurance policy retention requirements tied to roof useful life, and the desire for hurricane protection that exceeds what a standard tile roof provides.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Tile Roof Restoration",
                body: "Cement tile and clay barrel tile roofs are the dominant residential roof type across Broward, Miami-Dade, and Palm Beach counties. After 15–25 years of Florida sun, humidity, and hurricane seasons, these roofs typically show faded glaze, biological streaking, and hairline cracks. The Smart Shield (RP2) system restores the roof in over 3,000 color options while providing a full waterproof membrane — at roughly half the cost of tile replacement.",
              },
              {
                title: "Full Monolithic Hurricane Protection (Roof Shield RP3)",
                body: "For homeowners whose primary concern is hurricane performance, the Roof Shield (RP3) system builds multiple product layers into the roof, filling every gap between tiles and creating a continuous sealed structure. This system is the only liquid-applied roof coating in the world certified under Dade County TAS-106 Uplift standards.",
              },
              {
                title: "Anti-Fungal Treatment (Fungal Shield RP1)",
                body: "As a standalone application or as the mandatory first step before RP2 or RP3, the Fungal Shield (RP1) system penetrates tile substrates to eliminate Gloeocapsa magma and other biological growth — without altering the tile's appearance or color. Appropriate for homeowners who want to stop biological progression and protect their insurance inspection results.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-muted/50 rounded-xl border">
                <div className="font-bold text-foreground mb-2">{item.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 5 — Commercial */}
        <motion.section id="commercial" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Commercial Roof Coating in Florida</h2>
          <AnswerBlock>
            Commercial roof coating in Florida is a cost-effective maintenance and waterproofing solution for flat roofs, low-slope roofs, and large tile roof structures on commercial properties. The Roof Store provides silicone Grade 3 systems rated for standing water — the standard for Florida commercial flat roofs — with up to a 50-year product warranty and installation typically completed in 1–3 days.
          </AnswerBlock>
          <h3 className="text-xl font-serif font-bold text-primary mb-3">Who Uses Commercial Roof Coating in Florida?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            {[
              "<strong>HOA communities and condo associations</strong> — Tile roof painting and waterproofing across multiple units, with color matching to HOA appearance standards using 3,000+ color options",
              "<strong>Warehouse and industrial property owners</strong> — Flat roof silicone coating rated for ponding water; eliminates costly re-roofing cycles on large commercial structures",
              "<strong>Retail centers and office buildings</strong> — Reflective silicone systems that reduce cooling loads and protect against Florida's heavy rainfall",
              "<strong>Property management companies</strong> — Multi-property coating contracts with consistent specifications, warranties, and maintenance schedules",
              "<strong>Church and institutional buildings</strong> — Large low-slope roofs where full replacement cost is prohibitive; coating extends service life by 15–25 years",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <Link href="/commercial-roofs" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm">
            Learn more about commercial roof coating <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.section>

        {/* Section 6 — Insurance */}
        <motion.section id="insurance" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">How Roof Coating Affects Your Florida Homeowners Insurance</h2>
          <AnswerBlock>
            Professional roof coating applied by a licensed Florida contractor does not void homeowners insurance. Under Florida Senate Bill 2-D (2022) and a Florida Governor's Bulletin issued in March 2023, homeowners have the legal right to an Additional Roof Life Certification — a licensed contractor or engineer's affidavit that certifies the roof's remaining useful life after coating. This legally protects the homeowner's insurance coverage.
          </AnswerBlock>
          <h3 className="text-xl font-serif font-bold text-primary mb-3">Florida Law: What You Actually Have the Right to Do</h3>
          <div className="space-y-3 text-sm text-muted-foreground mb-4">
            <p><strong className="text-foreground">Florida Senate Bill 2-D (2022)</strong> prohibits insurance companies from refusing to issue or renew a policy solely because a roof has less than 25% of its useful life remaining, provided that useful life is certified by a licensed Florida roofing contractor or engineer — not estimated by an insurer.</p>
            <p><strong className="text-foreground">Florida Governor's Bulletin (March 2023)</strong> reaffirmed homeowners' legal right to an Additional Roof Life Certification (ARLC). An ARLC is a signed affidavit from a licensed contractor or engineer stating the coated roof's remaining certified useful life. Insurance companies are legally required to accept a valid ARLC as documentation of roof condition.</p>
            <p>The Roof Store can issue Additional Roof Life Certifications for roofs that have received a qualifying coating system — certifying an additional 15–25 years of useful life without replacing the roof.</p>
          </div>
          <Callout variant="gold" title="⚠️ Warning: The Misinformation to Watch Out For">
            Some insurance agents tell homeowners "if you seal or paint your roof, you'll lose your coverage." This is false — and contradicted by Florida statute and the Governor's official bulletin. If you have been told this, request the legal basis in writing. A licensed roofing contractor's ARLC affidavit carries legal authority that an agent's verbal opinion does not.
          </Callout>
          <Link href="/roof-life-certification" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm mt-2">
            Learn more about the Additional Roof Life Certification <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.section>

        {/* Section 7 — TAS-106 */}
        <motion.section id="hurricane" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">TAS-106 — The Only Hurricane-Certified Liquid Coating in the World</h2>
          <AnswerBlock>
            The Roof Store's Roof Shield (RP3) system is the only liquid-applied roof coating system in the world to hold Dade County TAS-106 Uplift Certification. TAS-106 is Florida's highest wind resistance standard for roofing products. The Roof Shield system was certified most recently in 2023 and has been validated at sustained wind resistance exceeding 135 MPH on Spanish tile roof substrates.
          </AnswerBlock>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-xl px-4 py-3 mb-4 text-sm font-bold text-amber-800">
            <Medal className="h-5 w-5 text-amber-600" />
            Dade County TAS-106 Uplift Certified — Roof Shield (RP3) — 2023
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p><strong className="text-foreground">What TAS-106 Means:</strong> TAS-106 (Test Application Standard 106) is the Florida Building Code's standard for measuring wind uplift resistance of roof assemblies. Products must be physically tested on actual roof substrates under controlled conditions.</p>
            <p>The Roof Store's Roof Shield system achieves this by filling every gap, void, and overlapping joint between tiles with multiple product layers — binding the entire tile surface into a monolithic structure. A standard Spanish tile roof held down only by its own weight can lose individual tiles at sustained winds of 80–100 MPH. The Roof Shield monolithic system resists uplift at more than five times that force.</p>
            <p><strong className="text-foreground">Why No Other Coating Has TAS-106:</strong> TAS-106 testing costs tens of thousands of dollars to conduct and requires the product to be applied by the manufacturer's own licensed applicators. Generic elastomeric paints cannot bond tiles into a monolithic surface and therefore cannot pass the uplift test. The Roof Store invested in this certification because the company is both the product manufacturer and the contractor — giving full control over formulation, application protocol, and test compliance.</p>
          </div>
          <Link href="/products/roofshield" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm mt-4">
            Learn more about Roof Shield (RP3) <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.section>

        {/* Section 8 — Cost */}
        <motion.section id="cost" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Roof Coating Cost in Florida</h2>
          <AnswerBlock>
            Professional roof coating in Florida costs between $1.90 and $3.50 per square foot installed, including labor and materials (5/12+ pitch is additional per sq ft). At The Roof Store — as the direct manufacturer and contractor — pricing starts at $1.90/sq ft for waterproof color coating (RP2) and $2.70/sq ft for the full monolithic hurricane protection system (RP3 Roof Shield). Full tile roof replacement typically costs $10–$25/sq ft, making coating 60–70% less expensive.
          </AnswerBlock>
          <h3 className="text-xl font-serif font-bold text-primary mb-3">The Roof Store Factory Price Menu</h3>
          <p className="text-sm text-muted-foreground mb-4">Because The Roof Store manufactures its own products and employs its own crew, there is no distributor markup, contractor markup, or materials middleman. All prices include labor and materials.</p>
          <div className="overflow-x-auto rounded-xl border mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide text-muted-foreground">System</th>
                  <th className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide text-muted-foreground">Roof Type</th>
                  <th className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide text-muted-foreground">2/12–4/12 Pitch</th>
                  <th className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide text-muted-foreground">5/12 Pitch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-green-50/50"><td className="px-4 py-3 font-bold text-green-800" rowSpan={3}>Fungal Shield (RP1)<br /><span className="text-xs font-normal text-muted-foreground">Clear anti-fungal</span></td><td className="px-4 py-3 text-muted-foreground">Flat Smooth Tile</td><td className="px-4 py-3 font-semibold text-foreground">$0.50–$0.70</td><td className="px-4 py-3 font-semibold text-foreground">$0.70–$0.90</td></tr>
                <tr className="bg-green-50/50"><td className="px-4 py-3 text-muted-foreground">Flat Broom Tile</td><td className="px-4 py-3 font-semibold text-foreground">$0.60–$0.80</td><td className="px-4 py-3 font-semibold text-foreground">$0.80–$1.00</td></tr>
                <tr className="bg-green-50/50"><td className="px-4 py-3 text-muted-foreground">S-Tile / Barrel / Spanish</td><td className="px-4 py-3 font-semibold text-foreground">$0.70–$0.90</td><td className="px-4 py-3 font-semibold text-foreground">$0.90–$1.10</td></tr>
                <tr><td className="px-4 py-3 font-bold text-accent" rowSpan={3}>Smart Shield (RP2)<br /><span className="text-xs font-normal text-muted-foreground">Waterproof, 3,000+ colors</span></td><td className="px-4 py-3 text-muted-foreground">Flat Smooth Tile</td><td className="px-4 py-3 font-semibold text-foreground">$1.90–$2.20</td><td className="px-4 py-3 font-semibold text-foreground">$2.20–$2.50</td></tr>
                <tr><td className="px-4 py-3 text-muted-foreground">Flat Broom Tile</td><td className="px-4 py-3 font-semibold text-foreground">$2.10–$2.40</td><td className="px-4 py-3 font-semibold text-foreground">$2.40–$2.70</td></tr>
                <tr><td className="px-4 py-3 text-muted-foreground">S-Tile / Barrel / Spanish</td><td className="px-4 py-3 font-semibold text-foreground">$2.30–$2.70</td><td className="px-4 py-3 font-semibold text-foreground">$2.70–$3.10</td></tr>
                <tr className="bg-primary/5"><td className="px-4 py-3 font-bold text-primary" rowSpan={3}>Roof Shield (RP3)<br /><span className="text-xs font-normal text-muted-foreground">TAS-106, Lifetime Warranty</span></td><td className="px-4 py-3 text-muted-foreground">Flat Smooth Tile</td><td className="px-4 py-3 font-semibold text-foreground">$2.70–$3.10</td><td className="px-4 py-3 font-semibold text-foreground">$3.10–$3.50</td></tr>
                <tr className="bg-primary/5"><td className="px-4 py-3 text-muted-foreground">Flat Broom Tile</td><td className="px-4 py-3 font-semibold text-foreground">$2.90–$3.30</td><td className="px-4 py-3 font-semibold text-foreground">$3.30–$3.70</td></tr>
                <tr className="bg-primary/5"><td className="px-4 py-3 text-muted-foreground">S-Tile / Barrel / Spanish</td><td className="px-4 py-3 font-semibold text-foreground">$3.10–$3.50</td><td className="px-4 py-3 font-semibold text-foreground">$3.50–$3.90</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mb-6">All prices include labor and materials. Barrel tile and S-tile roof area is calculated at 1.20× interior square footage; flat cement tile at 1.10×. <Link href="/pricing" className="text-accent hover:underline">See the full pricing page for complete details →</Link></p>

          <h3 className="text-xl font-serif font-bold text-primary mb-3">Roof Coating vs. Replacement — True Cost Comparison</h3>
          <div className="overflow-x-auto rounded-xl border mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide text-muted-foreground">Factor</th>
                  <th className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide text-accent">Roof Coating (RP3)</th>
                  <th className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide text-muted-foreground">Full Roof Replacement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Installed Cost (2,000 sq ft tile)", "✓ $5,400–$7,000", "$20,000–$50,000"],
                  ["Lifespan", "Lifetime (RP3), 10–25 yrs (RP1/RP2)", "20–30 years (new tile)"],
                  ["Hurricane Rating", "✓ TAS-106, 135+ MPH (RP3)", "~90 MPH (standard tile)"],
                  ["Insurance Certification", "✓ ARLC available from contractor", "✓ New roof inspection"],
                  ["Disruption", "✓ 1–3 days installation", "1–3 weeks with debris removal"],
                  ["Landfill Waste", "✓ Zero — no tear-off", "✗ Significant (tons of tile)"],
                  ["Energy Savings", "15–25% cooling cost reduction (RP2/RP3)", "Depends on new tile color"],
                ].map(([factor, coating, replace], i) => (
                  <tr key={i} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{factor}</td>
                    <td className={`px-4 py-3 text-sm ${coating.startsWith("✓") ? "text-green-700 font-semibold" : "text-muted-foreground"}`}>{coating.replace("✓ ", "")}</td>
                    <td className={`px-4 py-3 text-sm ${replace.startsWith("✗") ? "text-red-600" : "text-muted-foreground"}`}>{replace.replace("✗ ", "")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 9 — How to Choose */}
        <motion.section id="how-to-choose" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">How to Choose a Roof Coating Contractor in Florida</h2>
          <AnswerBlock>
            A qualified Florida roof coating contractor must be licensed as a Florida Roofing Contractor (license type CCC or RC, verifiable at the Florida DBPR online system), carry general liability and workers' compensation insurance, use products manufactured to roofing-grade standards, provide a written manufacturer warranty, and be knowledgeable about Florida's insurance inspection requirements and the Additional Roof Life Certification process.
          </AnswerBlock>
          <h3 className="text-xl font-serif font-bold text-primary mb-3">Six Questions to Ask Any Florida Roof Coating Contractor</h3>
          <ol className="space-y-3 text-sm text-muted-foreground mb-6">
            {[
              "<strong>What is your Florida roofing contractor license number?</strong> — A licensed Florida roofing contractor can be verified instantly at the Florida DBPR website. Any contractor who refuses to provide their license number should not be hired.",
              "<strong>Are your coating products manufactured to roofing-grade specifications?</strong> — Ask for the product data sheet (PDS). If the product is paint-grade rather than roofing-grade, the warranty and performance claims will not hold up.",
              "<strong>Do you carry the product warranty, or does the manufacturer?</strong> — A manufacturer-backed warranty remains valid regardless of whether the contractor remains in business.",
              "<strong>Is your product TAS-106 certified?</strong> — Only The Roof Store's Roof Shield (RP3) holds this certification. If a competitor claims TAS-106 compliance, request the actual test report number from the Miami-Dade BCCO.",
              "<strong>Can you issue an Additional Roof Life Certification for insurance purposes?</strong> — This requires that the contractor be licensed and that the product meet the quality threshold an insurance inspector will accept.",
              "<strong>What does your inspection and preparation process include?</strong> — A professional system requires cleaning, fungal treatment, tile repairs, primer application, and coating application in specified layers. Any contractor skipping preparation steps is cutting corners.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ol>
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-6">
            <h3 className="text-lg font-serif font-bold text-primary mb-3">Why The Roof Store Is Different</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "🏭 <strong>Manufacturer + Contractor</strong> — We make our own products and apply them. No distributor markup. Full quality control from formulation to application.",
                "📋 <strong>A+ BBB Rated since 1994</strong> — Over 30 years of verified track record in South Florida's roofing market.",
                "🏅 <strong>World's Only TAS-106 Certified Liquid Coating</strong> — The Roof Shield (RP3) is the only liquid-applied system in the world with Dade County TAS-106 Uplift Certification.",
                "📝 <strong>ARLC Eligible</strong> — We can issue Additional Roof Life Certifications to support insurance policy retention.",
                "🔍 <strong>Manufacturer's Inspection First</strong> — We inspect before specifying. Every project starts with an on-site evaluation — not a sales call.",
              ].map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Section 10 — Service Areas */}
        <motion.section id="service-areas" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Roof Coating Service Areas — South Florida</h2>
          <p className="text-muted-foreground mb-6">Based in Davie, Florida, The Roof Store serves residential and commercial properties throughout South Florida with our licensed crew.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                county: "Broward County",
                slug: "broward-county",
                cities: ["Fort Lauderdale", "Coral Springs", "Pembroke Pines", "Hollywood", "Weston", "Davie", "Pompano Beach", "Miramar", "Plantation", "Boca Raton"],
              },
              {
                county: "Miami-Dade County",
                slug: "miami-dade-county",
                cities: ["Miami", "Hialeah", "Coral Gables", "Doral", "Homestead", "Kendall"],
              },
              {
                county: "Palm Beach County",
                slug: "palm-beach-county",
                cities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Boynton Beach", "Lake Worth"],
              },
              {
                county: "Monroe County / Florida Keys",
                slug: "monroe-county",
                cities: ["Key West"],
              },
            ].map((area) => (
              <div key={area.county} className="bg-muted/50 rounded-xl p-5 border">
                <h3 className="font-bold text-foreground mb-3">{area.county}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {area.cities.map((city) => (
                    <Link
                      key={city}
                      href={`/service-areas/${area.slug}/${city.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-background border rounded-full px-3 py-1 text-xs text-foreground hover:border-accent hover:text-accent transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                  <Link href={`/service-areas/${area.slug}`} className="bg-accent/10 border border-accent/30 text-accent rounded-full px-3 py-1 text-xs font-semibold hover:bg-accent/20 transition-colors">
                    All {area.county.split(" ")[0]} Cities →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline text-sm">
              View full service area map <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.section>

        {/* Product Cards */}
        <motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Our Roof Coating Systems</h2>
          <p className="text-muted-foreground mb-6">All three systems are manufactured in Davie, Florida by RoofProtect Products — a division of Storm Shield Paint Systems Inc. — and applied exclusively by The Roof Store's licensed crew or sold direct to homeowners and contractors.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              {
                tag: "RP1 · Entry Level",
                tagColor: "text-green-700 bg-green-50 border-green-200",
                name: "Fungal Shield",
                price: "From $0.50 / sq ft",
                desc: "Clear anti-fungal and anti-algae coating. Eliminates black streaking from Gloeocapsa magma. Applied as a standalone treatment or as the mandatory preparation step before RP2 or RP3. Does not alter roof appearance.",
                href: "/products/fungalshield",
              },
              {
                tag: "RP2 · Most Popular",
                tagColor: "text-accent bg-accent/5 border-accent/20",
                name: "Smart Shield",
                price: "From $1.90 / sq ft",
                desc: "Waterproof color coating in 3,000+ colors. BASF Cool Pigment Technology. Fully waterproof elastomeric membrane. Reduces cooling costs 15–25%. 10–15 year warranty. The most popular system for tile roof restoration.",
                href: "/products/smartshield",
              },
              {
                tag: "RP3 · Hurricane-Rated",
                tagColor: "text-primary bg-primary/5 border-primary/20",
                name: "Roof Shield",
                price: "From $2.70 / sq ft",
                desc: "The only TAS-106 Dade County certified liquid coating in the world. Multi-layer monolithic system. 135+ MPH verified. 5× stronger than new tile roof. Maintenance-free Lifetime Warranty.",
                href: "/products/roofshield",
              },
            ].map((card) => (
              <div key={card.name} className="border rounded-xl p-5 bg-background hover:shadow-md transition-shadow">
                <span className={`inline-block text-xs font-bold border rounded-full px-3 py-0.5 mb-3 ${card.tagColor}`}>{card.tag}</span>
                <h3 className="text-lg font-bold text-foreground mb-1">{card.name}</h3>
                <div className="text-lg font-bold text-primary mb-2">{card.price}</div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
                <Link href={card.href} className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline">
                  View {card.name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="text-sm text-accent font-semibold hover:underline">→ See full pricing and coverage charts</Link>
        </motion.section>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 md:p-10 text-center">
            <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-3">Ready to Protect Your Roof?</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">Free on-site consultation and inspection. No commitment. We'll tell you exactly which system your roof needs — and what it will cost.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-12 px-8">
                <Link href="/contact">Schedule a Free Consultation</Link>
              </Button>
              <a href="tel:+19542109614" className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                Call 954-210-9614
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section 11 — FAQ */}
        <motion.section id="faq" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-2 pb-3 border-b">Frequently Asked Questions — Roof Coating in Florida</h2>
          <p className="text-sm text-muted-foreground mb-6">For more detailed answers, see the full <Link href="/faq" className="text-accent hover:underline">Roof Coating FAQ</Link>.</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b pb-4 last:border-0">
                <div className="font-bold text-foreground mb-1">{faq.q}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                  {faq.link && (
                    <> <Link href={faq.link.href} className="text-accent hover:underline font-medium">{faq.link.label}</Link></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
