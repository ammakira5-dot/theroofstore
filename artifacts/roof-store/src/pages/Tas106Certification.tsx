import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ShieldCheck, Phone, ExternalLink } from "lucide-react";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TAS-106 Dade County Uplift Certification — The Only Certified Liquid Roof Coating in the World",
    description:
      "Comprehensive reference on Dade County TAS-106 Uplift Certification for liquid-applied roof coatings, including what the standard tests, why Roof Shield (RP3) is the only liquid coating to hold it, and what it means for Florida homeowners.",
    url: `${BASE}/tas-106-certified-roof-coating`,
    datePublished: "2026-07-18",
    dateModified: "2026-07-28",
    author: { "@type": "Organization", name: "The Roof Store", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "The Roof Store",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/assets/images/logo.png` },
    },
    about: [
      {
        "@type": "Thing",
        name: "TAS-106",
        description:
          "Test Application Standard 106 — the Miami-Dade County standard for wind uplift resistance of roofing assemblies, tested in compliance with Dade County Testing Standards.",
      },
      {
        "@type": "Thing",
        name: "Roof Shield (RP3)",
        description:
          "The Roof Store's Roof Shield (RP3) is a multi-layer liquid-applied rubber roof coating system and the only liquid coating in the world to hold Dade County TAS-106 Uplift Certification.",
      },
    ],
    image: `${BASE}/assets/images/Waterproofing-Technology.jpg`,
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer-block", ".geo-fact", "h2", "h3"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Roof Coating Florida", item: `${BASE}/roof-coating-florida` },
      { "@type": "ListItem", position: 3, name: "TAS-106 Certification", item: `${BASE}/tas-106-certified-roof-coating` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Roof Shield (RP3)",
    description:
      "The world's only liquid-applied roof coating system certified under Dade County TAS-106 Uplift Standard. Multi-layer monolithic system. 135+ MPH wind resistance. Lifetime Warranty.",
    image: "https://www.theroofstore.net/images/roofshield-bucket.webp",
    sku: "RP3",
    brand: { "@type": "Brand", name: "RoofProtect" },
    manufacturer: {
      "@type": "Organization",
      name: "RoofProtect",
      url: "https://www.roofprotectproducts.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Davie",
        addressRegion: "FL",
        postalCode: "33328",
        addressCountry: "US",
      },
    },
    url: `${BASE}/products/roofshield`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "325",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "The Roof Store", url: BASE },
    },
    hasCertification: {
      "@type": "Certification",
      name: "Dade County TAS-106 Uplift Certification",
      certificationIdentification: "TAS-106",
      issuedBy: {
        "@type": "Organization",
        name: "Miami-Dade County — Dade County Testing Standards",
      },
      validFrom: "2006",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "9",
      bestRating: "5",
      worstRating: "1",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is TAS-106 certification for roof coatings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TAS-106 (Test Application Standard 106) is the Miami-Dade County standard that measures the wind uplift resistance of roofing assemblies, tested in compliance with Dade County Testing Standards. It is the most stringent wind uplift certification for roofing products in the United States. Products must be physically tested on actual roof substrates under laboratory conditions. The Roof Store's Roof Shield (RP3) is the only liquid-applied coating system in the world to hold this certification.",
        },
      },
      {
        "@type": "Question",
        name: "Is Roof Shield (RP3) the only liquid coating with TAS-106 certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Roof Store's Roof Shield (RP3) system is the only liquid-applied roof coating in the world to hold Dade County TAS-106 Uplift Certification. The certification was originally issued in 2006. No other liquid coating, elastomeric coating, or roof paint product holds TAS-106 certification, because standard coating products are not designed to bond roof tiles into a monolithic structure — the physical requirement for passing the TAS-106 uplift test.",
        },
      },
      {
        "@type": "Question",
        name: "What wind speed does TAS-106 certified Roof Shield resist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Roof Shield (RP3) system has been field-verified at sustained wind resistance exceeding 135 MPH on Spanish tile roof substrates. This exceeds the sustained wind speed of a Category 4 hurricane (130–156 MPH sustained winds per the Saffir-Simpson scale). The TAS-106 certification confirms the system meets Miami-Dade County's highest wind pressure resistance requirements for roofing assemblies.",
        },
      },
      {
        "@type": "Question",
        name: "How is TAS-106 different from a standard roof coating wind rating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most roof coatings and paints carry no wind uplift rating whatsoever. TAS-106 certification requires physical laboratory testing on an actual roof assembly by an independent accredited testing laboratory, with results reviewed and published as a public Notice of Acceptance (NOA) under Dade County Testing Standards. It is a regulatory certification backed by a government document — not a marketing claim.",
        },
      },
      {
        "@type": "Question",
        name: "Why does making a roof monolithic increase wind resistance so dramatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard tile roof's wind failure begins when wind pressure enters through gaps between tiles and lifts individual tiles independently. Once one tile lifts, the exposed area grows rapidly and adjacent tiles fail in cascade. The Roof Shield (RP3) monolithic system fills every inter-tile gap, eliminating wind entry points and bonding all tiles into a single continuous assembly. Wind uplift must overcome the resistance of the entire bonded assembly simultaneously — approximately five times more force than is needed to lift individual tiles on a standard roof.",
        },
      },
      {
        "@type": "Question",
        name: "Does TAS-106 certification help with homeowners insurance in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TAS-106 certification provides government-documented wind resistance data that insurance underwriters, inspectors, and adjusters recognize. It strengthens the foundation for an Additional Roof Life Certification (ARLC) under Florida SB 2-D (2022), supports policy retention arguments with insurers questioning roof age, and demonstrates compliance with Miami-Dade and Broward County HVHZ requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What roof types can receive TAS-106 certified Roof Shield installation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TAS-106 certification was tested on Spanish tile (S-tile and barrel tile) substrates — the dominant residential roof type in South Florida. The system is also applicable to flat cement tile, flat broom tile, metal, flat deck, foam, and gravel roofs. Formulation is confirmed after a manufacturer's inspection.",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify The Roof Store's TAS-106 certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The certification is recorded in Miami-Dade County's public Notice of Acceptance (NOA) database at miamidade.gov/building. The Roof Store provides the specific NOA reference number upon request. Contact us at 954-210-9614 or ammakira5@gmail.com.",
        },
      },
      {
        "@type": "Question",
        name: "Can I install Roof Shield myself and still have TAS-106 certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The TAS-106 certification applies to the Roof Shield (RP3) system as installed by The Roof Store's licensed crew under the manufacturer's tested protocol. DIY or third-party contractor installation does not carry TAS-106 certification, because the certification is tied to the tested assembly and applicator qualification.",
        },
      },
      {
        "@type": "Question",
        name: "Does Roof Shield RP3 require a permit in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Permit requirements vary by county and municipality. In most South Florida jurisdictions, roof coating application does not require a building permit when no structural work is performed. As a licensed Florida Roofing Contractor, The Roof Store identifies and fulfills all applicable permit requirements for every project before work begins.",
        },
      },
    ],
  },
];

const tocItems = [
  { href: "#what-is-tas106", label: "What Is TAS-106?" },
  { href: "#why-tas106-matters", label: "Why TAS-106 Is Florida's Highest Roofing Standard" },
  { href: "#how-roof-shield-passed", label: "How Roof Shield (RP3) Achieved Certification" },
  { href: "#monolithic", label: "The Monolithic System — Why It Works" },
  { href: "#five-times-stronger", label: "5× Stronger Than a New Tile Roof — Explained" },
  { href: "#why-no-others", label: "Why No Other Liquid Coating Is Certified" },
  { href: "#insurance", label: "What TAS-106 Means for Your Insurance" },
  { href: "#specs", label: "Technical Specifications" },
  { href: "#verify", label: "How to Verify the Certification" },
  { href: "#faq", label: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "What is TAS-106 certification for roof coatings?",
    a: "TAS-106 (Test Application Standard 106) is the Miami-Dade County standard governing wind uplift resistance of roofing assemblies, tested in compliance with Dade County Testing Standards. It is the most rigorous wind resistance certification for roofing products in the United States. Products must be physically tested on actual roof substrates, and results are published in a publicly accessible Notice of Acceptance (NOA). The Roof Store's Roof Shield (RP3) is the only liquid-applied coating system in the world to hold this certification.",
  },
  {
    q: "Is Roof Shield (RP3) the only liquid coating with TAS-106 certification?",
    a: "Yes. The Roof Store's Roof Shield (RP3) system is the only liquid-applied roof coating in the world to hold a Dade County TAS-106 Uplift Certification (NOA), originally issued in 2006. No other coating product — elastomeric, polyurethane, acrylic, or silicone — holds this certification, because no other coating is formulated and applied to create a full monolithic bond between roof tiles.",
  },
  {
    q: "What wind speed does TAS-106 certified Roof Shield resist?",
    a: "The Roof Shield (RP3) system has been field-verified at sustained wind resistance exceeding 135 MPH on Spanish tile roof substrates — exceeding the lower bound of Category 4 hurricane wind speed (130 MPH per the Saffir-Simpson Hurricane Wind Scale). This is a certified test result, not a manufacturer estimate.",
  },
  {
    q: "How is TAS-106 different from a standard roof coating wind rating?",
    a: "Most roof coatings carry no independent wind rating at all. Those that do carry wind resistance claims generally do so through manufacturer statements without independent government testing. TAS-106 requires physical laboratory testing on a real roof assembly by an accredited testing laboratory, with results published as a public Notice of Acceptance under Dade County Testing Standards. It is a regulatory certification — not a marketing claim.",
  },
  {
    q: "Why does making a roof monolithic increase wind resistance so dramatically?",
    a: "A standard tile roof's wind failure begins when wind pressure enters through gaps between tiles and lifts individual tiles independently. Once one tile lifts, the exposed area grows rapidly and adjacent tiles fail in cascade. The Roof Shield (RP3) monolithic system fills every inter-tile gap, eliminating wind entry points and bonding all tiles into a single continuous assembly. Wind uplift must overcome the resistance of the entire bonded assembly simultaneously — approximately five times more force than is needed to lift individual tiles on a standard roof.",
  },
  {
    q: "Does TAS-106 certification help with homeowners insurance in Florida?",
    a: "Yes. TAS-106 certification provides government-documented wind resistance data that insurance underwriters, inspectors, and adjusters recognize. It strengthens the foundation for an Additional Roof Life Certification (ARLC) under Florida SB 2-D (2022), supports policy retention arguments with insurers questioning roof age, and demonstrates compliance with Miami-Dade and Broward County HVHZ requirements. The Roof Store provides the installation records and system documentation that support a homeowner's ARLC request from an independent licensed inspector or engineer.",
  },
  {
    q: "What roof types can receive TAS-106 certified Roof Shield installation?",
    a: "The TAS-106 certification was tested on Spanish tile (S-tile and barrel tile) substrates — the dominant residential roof type in South Florida. The system is also applicable to flat cement tile, flat broom tile, metal, flat deck, foam, and gravel roofs. Formulation is confirmed after a manufacturer's inspection. The certified wind performance rating applies specifically to the tile roof assembly configuration that was physically tested.",
  },
  {
    q: "How do I verify The Roof Store's TAS-106 certification?",
    a: "The certification is recorded in Miami-Dade County's public Notice of Acceptance (NOA) database at miamidade.gov/building. The Roof Store provides the specific NOA reference number upon request. Contact us at 954-210-9614 or ammakira5@gmail.com and we will send the NOA documentation directly.",
  },
  {
    q: "Can I install Roof Shield myself and still have TAS-106 certification?",
    a: "No. The TAS-106 certification applies to the Roof Shield (RP3) system as installed by The Roof Store's licensed crew under the manufacturer's tested protocol — including surface preparation, specific product layer sequence, and dry film thickness verification. DIY or third-party contractor installation of RP3 product does not carry TAS-106 certification, because the certification is tied to the tested assembly and applicator qualification. Only professionally installed Roof Shield projects by The Roof Store qualify for the certified wind rating and the associated Lifetime Warranty.",
  },
  {
    q: "Does Roof Shield RP3 require a permit in Florida?",
    a: "Permit requirements vary by county and municipality. In most South Florida jurisdictions, roof coating application does not require a building permit when no structural work is performed. As a licensed Florida Roofing Contractor, The Roof Store identifies and fulfills all applicable permit requirements for every project before work begins — we handle permitting coordination where required so homeowners do not need to navigate the process themselves.",
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

function GeoFact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4">
      <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">{label}</div>
      <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

function Callout({
  variant = "blue",
  title,
  children,
}: {
  variant?: "blue" | "gold" | "red" | "purple" | "green";
  title: string;
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    blue: "bg-blue-50 border-blue-200",
    gold: "bg-amber-50 border-amber-300",
    red: "bg-red-50 border-red-200",
    purple: "bg-violet-50 border-violet-200",
    green: "bg-green-50 border-green-200",
  };
  const titleStyles: Record<string, string> = {
    blue: "text-blue-800",
    gold: "text-amber-800",
    red: "text-red-800",
    purple: "text-violet-800",
    green: "text-green-800",
  };
  return (
    <div className={`border rounded-xl p-5 my-4 ${styles[variant]}`}>
      <div className={`font-bold text-sm mb-1 ${titleStyles[variant]}`}>{title}</div>
      <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

const steps = [
  {
    title: "Manufacturer Inspection",
    body: "Before any application, a licensed The Roof Store representative inspects the roof to confirm substrate condition, identify damaged tiles, map drainage patterns, and specify the exact product sequence. No two roofs receive identical specifications — the inspection determines the application protocol.",
  },
  {
    title: "Anti-Fungal Preparation (RP1 Fungal Shield)",
    body: "All biological growth — mold, algae, and Gloeocapsa magma — is eliminated with Fungal Shield (RP1). Clean, biologically inert substrate is required for proper adhesion of subsequent layers. This step is non-negotiable on all RP3 installations.",
  },
  {
    title: "Pressure or Soft Wash Preparation",
    body: "The roof surface is cleaned to bare substrate specification — free of dirt, debris, chalking, and loose material. Proper surface preparation is one of the most critical determinants of long-term adhesion performance.",
  },
  {
    title: "Tile Repair and Void Filling — First Layer",
    body: "Cracked tiles, failed ridge caps, and compromised grout lines are repaired. The first product layer is applied with specific attention to the gaps and joints between tiles — filling the spaces where wind uplift begins on a conventional tile roof.",
  },
  {
    title: "Primary Silicone Membrane Layers",
    body: "Multiple layers of the proprietary premium silicone base formulation are applied to the specified dry film thickness, completely encapsulating the tile surface and all inter-tile joints. Each layer is applied to wet-on-dry protocol — ensuring full cure between applications.",
  },
  {
    title: "Final Monolithic Seal and Inspection",
    body: "The completed system is inspected for coverage completeness, dry film thickness, and proper void fill. The finished roof is a single continuous sealed structure — no exposed tile gaps, no exposed grout lines, no individual tile movement under uplift force.",
  },
];

const techSpecs = [
  { label: "Product Name", value: "Roof Shield — The Original Liquid Applied Rubber Roof Shield System" },
  { label: "Product Code", value: "RP3" },
  { label: "Manufacturer", value: "RoofProtect (Storm Shield Paint Systems Inc., Davie FL 33328)" },
  { label: "Wind Certification", value: "Dade County TAS-106 Uplift Certification (NOA) — originally issued 2006" },
  { label: "Testing Authority", value: "Miami-Dade County — Dade County Testing Standards" },
  { label: "Verified Wind Resistance", value: "135+ MPH sustained (Spanish tile substrate)" },
  { label: "Relative Wind Performance", value: "5× the wind uplift resistance of a code-compliant standard new tile roof" },
  { label: "Base Formulation", value: "Proprietary premium silicone — rated for standing water and ponding" },
  { label: "System Type", value: "Multi-layer, full-void-fill monolithic assembly" },
  { label: "Compatible Substrates", value: "Spanish tile, S-tile, barrel tile, flat cement tile, flat broom tile, metal, flat deck, foam, gravel" },
  { label: "Warranty", value: "Maintenance-free Lifetime Warranty (professionally installed) · Transferable · Renewable" },
  { label: "Installed Cost", value: "Factory Price Sheet emailed via our contact form (labor and materials included)" },
  { label: "Unit Retail Price", value: "$325 per 5-gallon pail (direct purchase)" },
  { label: "Coverage (retail)", value: "~50 sq ft per gallon (varies by substrate profile depth)" },
  { label: "Installation Time", value: "1–3 days (typical residential tile roof)" },
  { label: "Manufacturer Inspection", value: "Yes — fee on Factory Price Sheet (refunded in full on project proceed)" },
  { label: "Insurance Certification", value: "Additional Roof Life Certification (ARLC) available from The Roof Store upon installation" },
];

const standardsCompare = [
  {
    std: "TAS-106",
    body: "Miami-Dade County",
    tests: "Wind uplift resistance of full roofing assembly — in-situ physical test",
    applies: "All roofing products sold in Miami-Dade wind zones (used statewide as benchmark)",
    highlight: true,
  },
  {
    std: "Florida Building Code (FBC) Wind Rating",
    body: "FL DBPR / Building Commission",
    tests: "Component and cladding pressure resistance",
    applies: "Standard statewide products",
    highlight: false,
  },
  {
    std: "ASTM D3468 / D6083",
    body: "ASTM International",
    tests: "Elastomeric membrane tensile and elongation properties",
    applies: "Material properties — not assembly wind performance",
    highlight: false,
  },
  {
    std: "Manufacturer wind speed claim (no standard)",
    body: "None",
    tests: "Not independently tested — marketing statement only",
    applies: "Most roof coatings and paints",
    highlight: false,
  },
];

export default function Tas106Certification() {
  return (
    <div className="w-full">
      <SEO
        title="TAS-106 Dade County Uplift Certification — The Only Certified Liquid Roof Coating in the World | The Roof Store"
        description="The Roof Store's Roof Shield (RP3) is the world's only liquid-applied roof coating with Dade County TAS-106 Uplift Certification — tested at 135+ MPH, 5× stronger than a new tile roof. Learn what TAS-106 means and why it matters for Florida homeowners."
        canonical="/tas-106-certified-roof-coating"
        ogImage={`${BASE}/assets/images/Waterproofing-Technology.jpg`}
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL", position: "26.0765;-80.2521" }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-primary text-white py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <nav className="text-sm text-white/55 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/roof-coating-florida" className="hover:text-white transition-colors text-indigo-300">Roof Coating Florida</Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">TAS-106 Certification</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/50 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              🏅 Dade County TAS-106 Uplift Certified · Since 2006
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight text-white">
              TAS-106 Dade County Uplift Certification —<br className="hidden md:block" /> The Only Certified Liquid Roof Coating in the World
            </h1>
            <p className="text-lg text-white/85 max-w-2xl mb-6">
              The Roof Store's Roof Shield (RP3) is the only liquid-applied roof coating system on earth to hold Dade County TAS-106 Uplift Certification — the most rigorous wind resistance standard for roofing products in the United States.
            </p>
          </motion.div>
        </div>

        {/* Proof bar */}
        <div className="container max-w-4xl mx-auto mt-2">
          <div className="grid grid-cols-2 md:grid-cols-5 bg-white/5 border border-white/10 rounded-xl overflow-hidden divide-x divide-white/10">
            {[
              { val: "TAS-106", lbl: "Dade County Certified" },
              { val: "135+ MPH", lbl: "Verified wind resistance" },
              { val: "5×", lbl: "Stronger than new tile roof" },
              { val: "2006", lbl: "Certification issued" },
              { val: "Worldwide", lbl: "Only liquid coating certified" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center px-4 py-4 text-center">
                <div className="text-xl font-bold text-indigo-300 leading-tight">{s.val}</div>
                <div className="text-xs text-white/60 uppercase tracking-wide mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container px-4 py-10 max-w-4xl mx-auto">

        {/* Cert card */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="border-2 border-amber-300 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 p-6 mb-6 flex gap-4 items-start">
            <div className="text-4xl leading-none">🏅</div>
            <div>
              <div className="font-extrabold text-amber-900 mb-1">Dade County TAS-106 Uplift Certification — Roof Shield (RP3)</div>
              <div className="text-sm text-amber-800 flex flex-wrap gap-x-4 gap-y-1">
                <span>📋 Standard: TAS-106</span>
                <span>🏛️ Testing Authority: Miami-Dade County</span>
                <span>📅 Issued: 2006</span>
                <span>🌀 Wind Speed: 135+ MPH</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TOC */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-3">Contents</div>
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

        {/* Section 1 — What Is TAS-106 */}
        <motion.section id="what-is-tas106" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">What Is TAS-106?</h2>
          <AnswerBlock>
            TAS-106 (Test Application Standard 106) is the Miami-Dade County standard for measuring the wind uplift resistance of roofing assemblies, tested in compliance with Dade County Testing Standards. It is recognized as the most stringent roofing wind resistance certification in the United States. A product or system holding TAS-106 certification has been physically tested on an actual roof structure under controlled laboratory conditions and demonstrated that it resists the wind uplift forces generated by a major hurricane.
          </AnswerBlock>

          <h3 className="text-xl font-serif font-bold text-primary mb-3 mt-6">Miami-Dade County Testing Standards</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Miami-Dade County developed its own enhanced testing standards after Hurricane Andrew devastated South Florida in August 1992, causing $27.3 billion in insured losses — at the time the most costly natural disaster in U.S. history. The destruction revealed catastrophic failures in existing roofing standards, and Miami-Dade County responded by developing the most rigorous local building code in the country.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When Miami-Dade County approves a roofing product under TAS-106, it issues a Notice of Acceptance (NOA) — a public document that records the tested assembly, the testing laboratory, the results, and the product specifications. The NOA system ensures that every TAS-certified product can be independently verified by homeowners, inspectors, insurers, and building officials.
          </p>

          <GeoFact label="Verified Fact">
            Hurricane Andrew (1992) destroyed or severely damaged over 125,000 homes in South Florida. Post-disaster engineering analysis found that the majority of roof failures occurred at the tile-to-structure connection — individual tiles lifted under wind pressure, allowing catastrophic water intrusion. Miami-Dade County's TAS standards were developed specifically to prevent this failure mode in future hurricanes. <em>(Source: Miami-Dade County — historical building code development record.)</em>
          </GeoFact>

          <h3 className="text-xl font-serif font-bold text-primary mb-3 mt-6">How TAS-106 Is Different from Other Roof Certifications</h3>
          <div className="overflow-x-auto rounded-xl border mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">Standard</th>
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">Governing Body</th>
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">What It Tests</th>
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">Applicable To</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {standardsCompare.map((row, i) => (
                  <tr key={i} className={row.highlight ? "bg-amber-50 font-semibold" : "hover:bg-muted/30"}>
                    <td className="px-4 py-3 font-medium text-foreground">{row.highlight ? <strong>{row.std}</strong> : row.std}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.body}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.tests}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.applies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 2 — Why TAS-106 Matters */}
        <motion.section id="why-tas106-matters" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Why TAS-106 Is Florida's Highest Roofing Standard</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Florida sits entirely within a hurricane wind zone. The majority of the state — and all of South Florida — is classified as High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. The HVHZ designation triggers the most stringent product approval requirements in the country, and TAS-106 is the standard that governs wind uplift performance within that zone.
          </p>

          <GeoFact label="Regulatory Context">
            The High Velocity Hurricane Zone (HVHZ) under the Florida Building Code covers Miami-Dade County and Broward County in their entirety — the two most populous counties in South Florida and the core of The Roof Store's service area. All roofing products installed in the HVHZ must have a current Miami-Dade County Notice of Acceptance (NOA) issued under TAS testing standards. Products without an NOA cannot legally be installed as a primary roofing system in these counties.
          </GeoFact>

          <h3 className="text-xl font-serif font-bold text-primary mb-3 mt-6">What TAS-106 Testing Involves</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The TAS-106 test procedure requires the manufacturer to build a full-scale roof assembly on a test structure using their specified product and installation protocol. An independent accredited testing laboratory — not the manufacturer — conducts the test. Chambers beneath the test assembly apply increasing negative air pressure (simulating wind uplift) in controlled increments. The test records the pressure at which the assembly first shows distress and the pressure at which it fails structurally.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The results must demonstrate that the roofing assembly can resist the wind pressure design loads specified by Miami-Dade County's code for the applicable wind speed zone. A product that fails to meet the required uplift resistance cannot receive an NOA and cannot be certified to TAS-106.
          </p>

          <Callout variant="purple" title="🔬 Why Physical Testing Matters More Than Computer Modeling">
            Some roofing product manufacturers use finite element analysis or computational fluid dynamics to claim wind resistance performance. TAS-106 does not accept computer models — it requires a physical test on a real roof assembly. This matters because real-world failure modes (adhesion at tile edges, grout line failures, thermal expansion effects) cannot be fully modeled computationally. Miami-Dade County's insistence on physical testing has produced the most reliable wind resistance data of any roofing certification program in the U.S.
          </Callout>
        </motion.section>

        {/* Section 3 — How Roof Shield Passed */}
        <motion.section id="how-roof-shield-passed" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">How Roof Shield (RP3) Achieved TAS-106 Certification</h2>
          <AnswerBlock>
            Roof Shield (RP3) achieved TAS-106 certification by creating a fundamentally different roof assembly: instead of a surface coating applied over individual tiles, the Roof Shield system is applied in multiple layers that fill every gap, void, and overlapping joint between tiles — bonding the entire tile surface into a single continuous monolithic structure. This monolithic structure resists wind uplift as a unified assembly, not as individual tiles. The test assembly demonstrated resistance exceeding 135 MPH sustained wind loads on a Spanish tile substrate, meeting Miami-Dade County's HVHZ requirements.
          </AnswerBlock>

          {/* Pull test video embed */}
          <div className="my-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border aspect-video">
              <iframe
                src="https://www.youtube.com/embed/j33btx-TGXo"
                title="TAS-106 Dade County Uplift Pull Test — Roof Shield (RP3)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded">▶ VIDEO</span>
              The independent Dade County TAS-106 Uplift Pull Test — watch the actual certification test being performed on the Roof Shield (RP3) system.{" "}
              <Link href="/videos" className="text-accent hover:underline">See all videos →</Link>
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-primary mb-4 mt-6">The Application Protocol That Makes Certification Possible</h3>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-extrabold text-sm mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 4 — Monolithic */}
        <motion.section id="monolithic" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">The Monolithic System — Why It Works</h2>
          <AnswerBlock>
            A monolithic roof is a single continuous sealed structure with no gaps, joints, or independent components. The Roof Shield (RP3) system creates a monolithic roof by filling every space between tiles with a liquid rubber membrane, bonding all tiles together into one unified surface. Because wind uplift acts on the entire assembly simultaneously rather than on individual tiles, the force required to cause failure increases by approximately five times compared to a standard tile roof installation.
          </AnswerBlock>

          <h3 className="text-xl font-serif font-bold text-primary mb-3 mt-6">How Wind Destroys a Standard Tile Roof</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A conventional Spanish tile or barrel tile roof consists of hundreds of individual tiles resting in position under their own weight, held by mortar at ridges and by mechanical fasteners at eaves. During a hurricane, wind creates negative air pressure — uplift — against the underside of tiles. This pressure acts on each tile independently through the gaps between tiles. Once wind pressure exceeds the weight and fixing strength of an individual tile, that tile lifts. The gap left by one tile then allows wind to enter the roof assembly from above, dramatically increasing the effective uplift area and accelerating failure of adjacent tiles. This is the cascade failure mode documented in every major Florida hurricane since Andrew.
          </p>

          <h3 className="text-xl font-serif font-bold text-primary mb-3">How Roof Shield Stops That Failure Mode</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By filling every inter-tile gap and joint with a bonded rubber membrane, the Roof Shield (RP3) system removes the physical pathway through which wind enters the tile assembly. There are no individual tiles that can lift independently. There are no exposed gaps that wind pressure can exploit. The entire tile surface acts as a single structural unit — and that unit's uplift resistance is governed by the adhesion of the full membrane to the entire roof deck, not by the weight of any single tile.
          </p>

          {/* Compare grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="border border-border rounded-xl p-5">
              <h4 className="font-bold text-sm mb-3">Standard Tile Roof</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Individual tiles independent</li>
                <li>• Gaps allow wind entry beneath tiles</li>
                <li>• Uplift acts per-tile</li>
                <li>• Cascade failure once first tile lifts</li>
                <li>• Typical failure onset: 80–100 MPH</li>
                <li>• No wind uplift certification for the assembly</li>
              </ul>
            </div>
            <div className="border-2 border-amber-300 bg-amber-50 rounded-xl p-5">
              <h4 className="font-bold text-sm mb-3">🏅 Roof Shield (RP3) Monolithic System</h4>
              <ul className="space-y-1.5 text-sm text-green-800">
                <li>✓ All tiles bonded into single structure</li>
                <li>✓ No gaps — wind has no entry point</li>
                <li>✓ Uplift acts on entire bonded assembly</li>
                <li>✓ No cascade failure mode possible</li>
                <li>✓ Certified resistance: 135+ MPH</li>
                <li>✓ TAS-106 Dade County certified assembly</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 5 — 5× Stronger */}
        <motion.section id="five-times-stronger" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">5× Stronger Than a New Tile Roof — Explained</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The 5× stronger claim is derived from comparative uplift testing data between standard new tile roof installations and the Roof Shield (RP3) monolithic assembly on equivalent substrates. It is not a marketing estimate — it is the ratio of measured uplift resistance forces between the two assembly types.
          </p>

          <GeoFact label="How the Comparison Is Measured">
            Wind uplift resistance is measured in pounds per square foot (psf) of negative air pressure applied to the underside of the roofing assembly. A standard new Spanish tile roof installation in South Florida is engineered to meet the Florida Building Code minimum uplift resistance requirement. The Roof Shield (RP3) monolithic assembly, as tested under TAS-106 protocol, demonstrates uplift resistance exceeding five times that minimum code requirement — meaning the force required to cause structural failure of the Roof Shield assembly is more than five times the force required to begin lifting individual tiles on a code-compliant standard tile installation.
          </GeoFact>

          <h3 className="text-xl font-serif font-bold text-primary mb-3 mt-4">What "5× Stronger" Means in a Hurricane</h3>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Category 4 hurricanes produce sustained winds of 130–156 MPH. At these wind speeds, standard tile roofs that meet minimum Florida Building Code requirements can — and do — suffer tile loss. The Roof Shield monolithic system's 135+ MPH certified resistance means the system has been tested to maintain structural integrity at sustained wind speeds that exceed the lower bound of Category 4. This is not absolute protection — no roofing system can guarantee zero damage from a direct major hurricane strike. But it places the Roof Shield system in a materially different wind performance category from any standard tile roof and from any other liquid coating product.
          </p>

          {/* Don Godshall real-world testimonial */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Real-World Hurricane Proof — Customer Testimonial</div>
            <div className="rounded-xl overflow-hidden shadow border aspect-video mb-3">
              <iframe
                src="https://www.youtube.com/embed/dYKcWoDVPns"
                title="Don Godshall — Hurricane Wilma Survivor, Roof Shield Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <blockquote className="italic text-sm text-foreground/80 border-l-4 border-primary pl-4 mb-1">
              "During Hurricane Wilma my neighbors' tiles were hitting my house. The next morning after the storm passed we went outside to see what happened — our roof was still perfect."
            </blockquote>
            <div className="text-xs text-muted-foreground font-semibold mt-1">— Don Godshall · 5651 Thornbluff Ave., Davie FL</div>
          </div>
        </motion.section>

        {/* Section 6 — Why No Others */}
        <motion.section id="why-no-others" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Why No Other Liquid Coating Has TAS-106 Certification</h2>
          <AnswerBlock>
            No other liquid-applied roof coating in the world holds Dade County TAS-106 Uplift Certification because standard coating products are not designed to bond individual roof tiles into a monolithic structure. They are designed to coat the surface of tiles — which means the inter-tile gaps remain open, and the coating adds no measurable wind uplift resistance to the tile assembly. Without creating a monolithic bond, no coating product can pass the TAS-106 uplift test. The Roof Shield (RP3) formulation and application protocol were specifically engineered to fill those gaps and achieve the structural bond required for TAS-106 certification.
          </AnswerBlock>

          <h3 className="text-xl font-serif font-bold text-primary mb-3 mt-6">The Technical Barrier Other Products Cannot Clear</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            For a liquid coating to receive TAS-106 certification, the tested assembly must demonstrate that the coating system — not just the underlying tiles — contributes materially to wind uplift resistance. This requires:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>A formulation with sufficient body</strong> to fill the three-dimensional voids between tile profiles, not just coat the tile surface</span></li>
            <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>Multi-layer application protocol</strong> with specified dry film thicknesses that achieve a structural membrane — not a decorative layer</span></li>
            <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>Adhesion chemistry</strong> compatible with the specific tile substrate under Florida's temperature and humidity cycling</span></li>
            <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">•</span><span><strong>A manufacturer willing to commit to the test</strong> — TAS-106 testing is expensive, time-consuming, and requires manufacturing the product to the same specification every time</span></li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Generic elastomeric paints and coatings fail on the first criterion: their formulation is designed for surface application, not void-fill. They are applied at 3–5 mils of dry film thickness — far too thin to bridge the gaps between tiles. Even if a thin coating passed the adhesion requirements, it would not create a monolithic bond and would not resist the uplift forces tested under TAS-106.
          </p>

          <Callout variant="red" title="⚠️ Warning: False TAS-106 Claims in the Marketplace">
            Some Florida roofing contractors claim their coating products are "TAS-106 compliant" or "hurricane rated" without holding an actual Miami-Dade County Notice of Acceptance. These claims are either referring to the underlying tile product (which has its own NOA separate from the coating), referring to a different TAS standard, or are unsupported marketing language. <strong>Ask any contractor claiming TAS-106 certification to provide the specific NOA number from the Miami-Dade County NOA database.</strong> Only The Roof Store's Roof Shield (RP3) system has a valid NOA for a liquid-applied coating assembly.
          </Callout>
        </motion.section>

        {/* Section 7 — Insurance */}
        <motion.section id="insurance" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">What TAS-106 Certification Means for Your Florida Insurance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TAS-106 certification directly strengthens your position with Florida homeowners insurance providers in three distinct ways.
          </p>

          <h3 className="text-xl font-serif font-bold text-primary mb-2 mt-4">1. Documented Wind Resistance for Underwriting</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Florida insurance underwriters assess roof wind resistance when setting premiums and when evaluating policy renewals. A roof system with a government-issued Notice of Acceptance that includes a verified wind uplift rating provides the kind of objective, third-party documentation that underwriters can act on — reducing uncertainty about the roof's performance in a hurricane event.
          </p>

          <h3 className="text-xl font-serif font-bold text-primary mb-2">2. Stronger Foundation for Additional Roof Life Certification</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Under Florida Senate Bill 2-D (2022), an Additional Roof Life Certification (ARLC) protects homeowners' insurance coverage when insurers question roof age. A roof coated with the TAS-106 certified Roof Shield (RP3) system supports a materially stronger ARLC than a non-certified coating — because the installation records include certified wind performance data, not just cosmetic condition. The Roof Store provides complete installation documentation to support the homeowner's independent ARLC inspection.
          </p>

          <h3 className="text-xl font-serif font-bold text-primary mb-2">3. Compliance With Miami-Dade and Broward HVHZ Requirements</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Because Roof Shield (RP3) holds a current Miami-Dade County NOA, it is a code-compliant roofing product for the High Velocity Hurricane Zone — the area covering all of Miami-Dade and Broward counties. Insurance inspectors in these counties are familiar with the NOA system. A roof carrying an active NOA-certified system is unambiguously in a different risk category than a roof with a non-certified coating.
          </p>

          <Callout variant="green" title="✅ The Roof Store Provides Full ARLC Support Documentation">
            As both the product manufacturer and the licensed contractor, The Roof Store provides complete installation records for every Roof Shield (RP3) project — including reference to the TAS-106 Notice of Acceptance. This gives your independent inspector the strongest possible foundation for issuing the ARLC affidavit your insurance company needs.
          </Callout>
        </motion.section>

        {/* Section 8 — Technical Specifications */}
        <motion.section id="specs" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">Roof Shield (RP3) — Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground w-2/5">Specification</th>
                  <th className="px-4 py-3 font-bold text-xs uppercase tracking-wide text-muted-foreground">Value / Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {techSpecs.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.label === "Installed Cost (from)" ? (
                        <>{row.value.replace(" (includes labor and materials)", "")} (includes labor and materials) — <Link href="/pricing" className="text-accent hover:underline">see full pricing →</Link></>
                      ) : row.label === "Unit Retail Price" ? (
                        <>{row.value.replace(" (direct purchase)", "")} — <Link href="/products/roofshield" className="text-accent hover:underline">buy direct →</Link></>
                      ) : row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 9 — How to Verify */}
        <motion.section id="verify" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4 pb-3 border-b">How to Verify the TAS-106 Certification</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every TAS-106 certified product sold in Miami-Dade County is registered in the Miami-Dade County Notice of Acceptance (NOA) public database. The Roof Store's Roof Shield (RP3) certification can be independently verified by any homeowner, inspector, insurance adjuster, or building official. There is no need to take our word for it.
          </p>

          <h3 className="text-xl font-serif font-bold text-primary mb-3">Verification Steps</h3>
          <ol className="space-y-3 mb-4">
            {[
              "Visit the Miami-Dade County NOA database — publicly accessible at miamidade.gov/building",
              "Search by manufacturer name (RoofProtect or Storm Shield Paint Systems) or by product name (Roof Shield, RP3)",
              "Request the NOA reference number directly from The Roof Store — we provide the specific NOA document number upon request to any homeowner, inspector, or insurance representative. Call 954-210-9614 or email ammakira5@gmail.com",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="bg-muted border-l-3 border-slate-400 rounded-r-lg px-4 py-3 text-sm text-muted-foreground italic mb-6">
            If a competitor claims TAS-106 certification for a liquid coating product and cannot provide a Miami-Dade County NOA number, the claim is not verified. The Miami-Dade County NOA database is the authoritative source — any certified product must appear in it.
          </div>

          {/* PDF downloads */}
          <div className="border border-border rounded-xl p-5">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Documentation Downloads</div>
            <div className="space-y-3">
              {[
                {
                  href: "/docs/miami-dade-tas-106-roof-coating-uplift-test.pdf",
                  icon: "📋",
                  title: "TAS-106 Uplift Test — Official Test Document",
                  sub: "The independent laboratory test report for the Roof Shield (RP3) TAS-106 certification",
                },
                {
                  href: "/docs/roofshield-strength-data-sheet.pdf",
                  icon: "📊",
                  title: "Roof Shield Strength Data Sheet",
                  sub: "Technical strength specifications and performance data for the RP3 system",
                },
                {
                  href: "/docs/roofprotect-brochure.pdf",
                  icon: "📄",
                  title: "RoofProtect Product Brochure",
                  sub: "Full product range overview — Fungal Shield (RP1), Smart Shield (RP2), Roof Shield (RP3)",
                },
              ].map((doc, i) => (
                <a
                  key={i}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-2xl leading-none mt-0.5">{doc.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{doc.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{doc.sub}</div>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent mt-1 flex-shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="bg-gradient-to-br from-indigo-950 to-primary text-white rounded-2xl p-8 text-center">
            <ShieldCheck className="h-10 w-10 mx-auto mb-3 text-amber-300" />
            <h2 className="text-2xl font-serif font-bold mb-2">Get the World's Only TAS-106 Certified Roof Coating</h2>
            <p className="text-white/85 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Schedule a free manufacturer's inspection. We'll assess your roof, confirm Roof Shield (RP3) is the right fit, and provide a firm per-sq-ft quote — with no obligation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                <Link href="/contact">Free Roof Evaluation &amp; Estimate</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 font-bold">
                <a href="tel:+19542109614"><Phone className="h-4 w-4 mr-2" />Call 954-210-9614</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 font-bold">
                <Link href="/products/roofshield">View Roof Shield →</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Section 10 — FAQ */}
        <motion.section id="faq" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-2 pb-3 border-b">Frequently Asked Questions — TAS-106 Roof Coating Certification</h2>
          <p className="text-sm text-muted-foreground mb-6">
            For broader roof coating questions, see the full{" "}
            <Link href="/faq" className="text-accent hover:underline">Roof Coating FAQ</Link>{" "}
            and the{" "}
            <Link href="/roof-coating-florida" className="text-accent hover:underline">Roof Coating Florida Guide</Link>.
          </p>
          <div className="divide-y divide-border">
            {faqs.map((item, i) => (
              <div key={i} className="py-4">
                <h3 className="font-bold text-sm text-foreground mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related pages */}
        <div className="border-t pt-6 text-sm text-muted-foreground">
          <strong className="text-foreground">Related pages:</strong>{" "}
          <Link href="/products/roofshield" className="text-accent hover:underline">Roof Shield (RP3) — Product Page</Link>
          {" · "}
          <Link href="/roof-coating-florida" className="text-accent hover:underline">Roof Coating Florida Guide</Link>
          {" · "}
          <Link href="/pricing" className="text-accent hover:underline">Pricing</Link>
          {" · "}
          <Link href="/faq" className="text-accent hover:underline">Full FAQ</Link>
          {" · "}
          <Link href="/contact" className="text-accent hover:underline">Contact Us</Link>
        </div>

      </div>
    </div>
  );
}
