import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, Phone, FileText, Download } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const sections = [
  {
    letter: "A",
    title: "Elastomeric, Mastics & 100% Acrylic Rubber — What's the Difference?",
    content: [
      {
        type: "p",
        text: "Home Depot roof paints and coatings — including Lanco Harris, Siliconizers, Somay Roof Mastic, Sherwin Williams Karnak, and Nu-tech — are suggested by their own manufacturers NOT to be used in ponding water. Just read their warranty. These are good products for painting walls, but they are not engineered for flat roofs.",
      },
      {
        type: "p",
        text: "Elastomeric is a process of manufacturing made by combining enamel and thickeners. It is not a finished product but a category of similar products with completely different uses. Elastomeric is essentially caulk — then you have to paint it. Mastic is caulk. Paint is paint. And premium 100% Rubber is 100% Rubber — which they are not.",
      },
      {
        type: "callout",
        title: "The Freezer Test",
        text: "To test the true waterproof characteristics of any roof coating, simply place it in the freezer. Generic elastomeric products will easily break — because they are not designed to push all the water through even at their driest cure state. That is why ponding water is the real litmus test, and why these manufacturers include specific exclusion statements on their labels. Real rubber does not crack in the freezer.",
      },
      {
        type: "p",
        text: "Elastomeric paints and mastics alone were not designed for waterproofing roofs or below-grade projects — they are limited to verticals (walls), because they hold a percentage of water in the film, regaining some water then returning to a dry state. Water barrier elastomeric paints or mastics require a third paint coat to protect from weathering — 'protect the protectant' doesn't make much sense. Additional coats are required every 3 to 5 years, which is very costly. Do the math before you buy.",
      },
      {
        type: "highlight",
        title: "What \"Hurricane Proof\" or \"High Velocity Wind Zone Rated\" Really Means",
        text: "The TAS-106 Dade County Approved tile pull test is required on all new tile roof replacements in Florida after tiles are set. New tile roof replacement requires a minimum of 35 lbs of lift in the field and 55 lbs at the ridge caps — equal to about 120–130 MPH. Miami Dade High Velocity Wind Zone Rated means the structure has been tested to the minimum wind resistance standard at 130 MPH within its own strength design criteria before any mastic, caulk, or elastomeric is applied. If you Google \"hurricane coatings,\" companies will show videos where you can see the gaps between the tiles — obviously painting alone adds no uplift resistance whatsoever. Our Roof Shield (RP3) is the only liquid coating in the world that has received an independent TAS-106 Uplift Pull Test certification.",
      },
      {
        type: "fact",
        text: "Roofprotect Advanced Rubber roof coating can be submerged under water for prolonged periods without subsequent damage due to saturation of the coating — ideal for flat roofs. Generic elastomeric products cannot make this claim.",
      },
      {
        type: "highlight",
        title: "Doesn't a Roof Need to Breathe? Won't a Coating Trap Moisture?",
        text: "This is one of the most common objections you'll hear from roof-replacement companies — and it's misleading. \"Breathable\" in roofing terms means vapor-permeable: the coating blocks liquid water from entering while still letting trapped moisture vapor escape. Our elastomeric coatings have a high permeability rating, and our silicone-based Roof Shield system — while somewhat less permeable than pure acrylic — is still vapor-permeable and lets the roof assembly dry out over time. The real risk isn't breathability, it's coating over a roof with existing trapped moisture or unrepaired leaks — which is why every installation starts with an infrared moisture scan to confirm the deck is dry first. Learn more about when and why we specify silicone on our dedicated silicone roof coating page.",
      },
    ],
  },
  {
    letter: "B",
    title: "Roof Life Extension: Would You Like to Extend the Life of Your Roof?",
    content: [
      {
        type: "callout",
        title: "Citizens Insurance — What Homeowners Need to Know",
        text: "If you have a 25-year-old shingle roof or a 50-year-old cement tile roof and received a notice from Citizens Windstorm Insurance that unless you re-roof you will no longer have windstorm insurance protection — read the following carefully.",
      },
      {
        type: "p",
        text: "Citizens Insurance now requires that homes with a shingle roof of 25 years or cement tile roofs of 50 years must have the roof replaced to be eligible for coverage — UNLESS a licensed inspection report confirms the roof has sufficient remaining useful life. Under Florida law, homeowners have the legal right to request that independent Useful Life Exam. It is the report from that licensed inspector — not any contractor or product — that the insurance company recognizes. The most effective thing a homeowner can do is be proactive: get the roof professionally cleaned, have damaged tiles repaired, and apply a quality protective coating before the exam. When the inspector arrives, a roof in demonstrably good condition puts the homeowner in the strongest possible position.",
      },
      {
        type: "highlight",
        title: "Florida Roofing Rules — Leak Guarantees",
        text: "A roofing contractor must provide a minimum of 2 years for leaks on a new roof replacement. Unusual wind conditions of 65 MPH or above may void previous roof repair or new roof installation warranties. This varies depending on the contractor and system installed. Always inquire about the fine print on warranties and how this affects you in the event of a storm. Our Roof Shield lifetime warranty is transferable to a new buyer and renewable — no standard new roof warranty offers all three.",
      },
      {
        type: "p",
        text: "If your roof is not old enough to be ineligible but you received notification that your policy will be canceled unless you get an inspection — follow through with the instructions. If your roof is in good condition and the insurance inspector or agent is pressuring you, give us a call. We have a team of attorneys we can recommend who will take your case, providing you have followed all the rules and your roof is not truly a re-roof candidate due to wear and tear.",
      },
    ],
  },
  {
    letter: "C",
    title: "White Reflective Roof Coatings to Save on Energy Bills",
    content: [
      {
        type: "p",
        text: "FP&L (Florida Power & Light) has a participating contractor reflective rebate program. Our Smart Shield (RP2) coating features Cool Pigment Technology — 23% more reflective than our prior formula — and FP&L has independently confirmed that Smart Shield saves on cooling costs. This is utility-validated, not a marketing claim.",
      },
      {
        type: "callout",
        title: "FP&L Rebate Program — Current Status",
        text: "FP&L reflective roof contractor partner program rebate enrollment is not currently in effect, primarily because the rebate checks are distributed to the participating contracting firms rather than the property owners — presenting quality control issues. However, a $1,500 tax incentive rebate is still applicable under reflective roof systems. See Energy Tax Credit information for details. FP&L cannot warranty the workmanship or products — the contracting firm is to supply all guarantees and warranties.",
      },
      {
        type: "p",
        text: "There are presently no rebate incentives to repair or replace cement tile roofs or barrel clay tile roofs from the insurance industry, with the exception of under-air act rebates by applying white Energy Star reflective paints or coatings. Our Smart Shield qualifies for Energy Star reflective roof recognition.",
      },
      {
        type: "highlight",
        title: "Our Smart Shield Innovation — The BASF Partnership",
        text: "The market wanted darker colors like charcoal black and dark brown on roof tiles. Our question was: how do you make a dark color reflect heat against the sun's rays? We sent our products to BASF — the world's largest chemical producer — for complete redevelopment and testing. They came back with increased tensile strength, durability, and reflectiveness. BASF added its chemistry for a sustainable future and helped develop the most innovative dark-color coating on the planet. The result passed a full cycle of tensile tests, flexural tests, DSC, TGA, and viscosity testing. Smart Shield's formulation is recognized worldwide as one of the most innovative products of its kind.",
      },
    ],
  },
  {
    letter: "D",
    title: "Common Misconceptions — Setting the Record Straight",
    content: [
      {
        type: "highlight",
        title: "\"Roof coating is just a bandaid.\"",
        text: "Cheap roof paint? Yes — that's a bandaid. What we apply is a 100% resin liquid rubber membrane, engineered to bond permanently to your roof structure, rated for ponding water, and independently tested to withstand Dade County's TAS-106 hurricane wind-uplift standard. Our clients have roofs we coated over 20 years ago that have survived multiple hurricane seasons without a single leak. That's not a bandaid — that's a permanent weatherproofing system at 60–70% less than the cost of tearing off and rebuilding.",
      },
      {
        type: "highlight",
        title: "\"It won't last.\"",
        text: "Our systems have documented 20+ year performance in Florida's harshest climate — real roofs, real storms. No theoretical projections. We have installed roofs that are still performing today after two-plus decades of Florida heat, UV exposure, and hurricane-force winds.",
      },
      {
        type: "highlight",
        title: "\"It's just paint.\"",
        text: "100% resin liquid rubber — no fillers, no water-based shortcuts, rated for ponding water. This is a fundamentally different product from anything sold at a hardware store. Run the freezer test: generic elastomeric products crack and break. Real rubber does not.",
      },
      {
        type: "highlight",
        title: "\"It voids my roof warranty.\"",
        text: "Our coating systems are designed to work with your existing roof materials, not against them. The installation process is non-destructive and fully compatible with tile, flat, and metal roof assemblies. Our Roof Shield warranty is transferable and renewable — advantages no new-roof warranty offers.",
      },
      {
        type: "highlight",
        title: "\"My insurance won't cover it.\"",
        text: "Florida homeowners often qualify for an Additional Roof Life Certification after a Roof Shield installation — which Citizens Insurance accepts in lieu of a full re-roof requirement. We have helped hundreds of homeowners keep their coverage without replacing a roof that still had useful life.",
      },
      {
        type: "highlight",
        title: "\"A new tile roof is stronger than a coated one.\"",
        text: "New cement tile manufactured under current building codes is actually lighter-duty than the older tile it replaces. Retrofit your existing tile with our liquid rubber system and the assembly is measurably stronger — and more weatherproof — than new tile alone. The TAS-106 Dade County Pull Test confirms it.",
      },
      {
        type: "highlight",
        title: "\"The roof can't breathe under a coating.\"",
        text: "Acrylic elastomeric and silicone roof coatings breathe — they allow water vapor to escape while blocking liquid water from entering. In roofing, \"breathing\" means vapor-permeable: trapped moisture inside the roof substrate can evaporate outward rather than being sealed in, which would cause blistering, bubbling, or rot. Our coatings are vapor-permeable by design. The real risk isn't breathability — it's coating over a roof with existing trapped moisture or unrepaired leaks, which is why every installation starts with a moisture inspection before a single gallon is applied.",
      },
    ],
  },
];

const pdfs = [
  {
    name: "RoofProtect Product Brochure (RP2 Smart Shield)",
    url: "/docs/roofprotect-brochure.pdf",
    product: "RP2",
    desc: "Smart Shield color coating information, BASF chemistry details, and the full RoofProtect product line overview.",
  },
  {
    name: "Roof Shield (RP3) — Strength Data Sheet",
    url: "/docs/roofshield-strength-data-sheet.pdf",
    product: "RP3",
    desc: "Roof Shield waterproofing system strength data — TAS-106 certification, wind uplift performance, and technical details.",
  },
];

function ContentBlock({ block }: { block: (typeof sections)[0]["content"][0] }) {
  if (block.type === "p") {
    return <p className="text-muted-foreground leading-relaxed text-sm">{block.text}</p>;
  }
  if (block.type === "callout") {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
        <div className="font-bold text-primary mb-2 text-sm">{block.title}</div>
        <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
      </div>
    );
  }
  if (block.type === "highlight") {
    return (
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
        <div className="font-bold text-accent mb-2 text-sm">{block.title}</div>
        <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
      </div>
    );
  }
  if (block.type === "fact") {
    return (
      <div className="flex gap-3 bg-muted rounded-xl p-4">
        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-foreground leading-relaxed font-medium">{block.text}</p>
      </div>
    );
  }
  return null;
}

export default function Questions() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div className="w-full">
      <SEO
        title="Questions to Ask Before Buying Any Roof Coating | The Roof Store Florida"
        description="The questions every Florida homeowner should ask before purchasing roof paint, coatings, or sealers — elastomeric vs. rubber, TAS-106, ponding water, warranties, and energy savings. The Roof Store — 954-210-9614."
        canonical="/questions"
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Know Before You Buy
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Questions Customers Should Ask</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The questions you should ask if you're looking to purchase the best high-quality roof paints, coatings, and sealers — whether you buy from us or anyone else.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF Downloads Strip */}
      <section className="bg-accent text-white py-5">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 opacity-80 shrink-0" />
              <span className="text-sm font-bold uppercase tracking-wider opacity-90">Product Technical Downloads</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {pdfs.map((pdf, i) => (
                <a
                  key={i}
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg text-sm font-bold"
                >
                  <Download className="h-4 w-4" />
                  {pdf.product} — Technical PDF
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-8 mb-14"
          >
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground">Read a label like a pro.</span> Every roof coating manufacturer's label tells you what their product can — and cannot — do. Most homeowners don't know what to look for. The sections below explain exactly what questions to ask, what the answers reveal, and how to separate genuine hurricane-rated rubber systems from generic elastomeric paint dressed up in marketing language.
            </p>
          </motion.div>

          {/* Accordion sections */}
          <div className="space-y-4 mb-20">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border rounded-2xl overflow-hidden bg-card shadow-sm"
              >
                <button
                  className="w-full flex items-center gap-5 px-7 py-6 text-left hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                >
                  <span className="h-10 w-10 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center shrink-0">
                    {section.letter}
                  </span>
                  <span className="font-serif font-bold text-lg text-primary leading-snug flex-1">{section.title}</span>
                  <span className="text-muted-foreground text-xl shrink-0">{openSection === i ? "−" : "+"}</span>
                </button>
                {openSection === i && (
                  <div className="px-7 pb-8 space-y-5 border-t pt-6">
                    {section.content.map((block, j) => (
                      <ContentBlock key={j} block={block} />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* PDF Downloads */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Download Technical Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pdfs.map((pdf, i) => (
                <motion.a
                  key={i}
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-card border rounded-xl p-6 hover:shadow-md hover:border-accent/40 transition-all group"
                >
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{pdf.product}</div>
                    <div className="font-bold text-foreground text-sm mb-1 group-hover:text-accent transition-colors">{pdf.name}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{pdf.desc}</div>
                  </div>
                  <Download className="h-5 w-5 text-muted-foreground shrink-0 mt-1 group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              For MSDS, Performance Rating Material Data, and TAS-106 Wind Resistance Tech Data — call 954-210-9614 or contact us and we'll send the documentation directly.
            </p>
          </div>

          {/* Comparison at a glance */}
          <div className="bg-muted rounded-2xl overflow-hidden mb-16">
            <div className="px-7 py-5 bg-primary">
              <h3 className="font-serif font-bold text-xl text-white">Quick Comparison — Our Products vs. Generic Brands</h3>
            </div>
            <div className="divide-y">
              {[
                { feature: "Can be used in ponding water (flat roofs)", ours: true, generic: false },
                { feature: "TAS-106 Dade County Wind Uplift certified", ours: true, generic: false },
                { feature: "True 100% liquid rubber acrylic (no fillers or thickeners)", ours: true, generic: null },
                { feature: "Lifetime maintenance-free warranty", ours: true, generic: false },
                { feature: "Warranty is transferable to new buyer", ours: true, generic: false },
                { feature: "Does NOT require recoating every 3–5 years", ours: true, generic: false },
                { feature: "FP&L utility-confirmed energy savings", ours: true, generic: false },
                { feature: "Passes the freezer test (true rubber — does not crack)", ours: true, generic: false },
              ].map((row, i) => (
                <div key={i} className="flex items-center px-7 py-4 bg-card gap-4">
                  <span className="flex-1 text-sm text-foreground">{row.feature}</span>
                  <div className="flex gap-8 shrink-0">
                    <div className="text-center w-16">
                      <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wide">Our Products</div>
                      {row.ours ? <CheckCircle className="h-5 w-5 text-accent mx-auto" /> : <XCircle className="h-5 w-5 text-destructive mx-auto" />}
                    </div>
                    <div className="text-center w-16">
                      <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wide">Generic</div>
                      {row.generic === null
                        ? <AlertTriangle className="h-5 w-5 text-yellow-500 mx-auto" />
                        : row.generic
                        ? <CheckCircle className="h-5 w-5 text-accent mx-auto" />
                        : <XCircle className="h-5 w-5 text-destructive mx-auto" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="h-12 px-8">
              <Link href="/products">
                <ArrowRight className="mr-2 h-4 w-4" />
                See Full Product Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-white/80 mb-10">
            Call us for a free over-the-phone consultation. We'll answer every question you have honestly — whether we end up being the right fit for your roof or not.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              <a href="tel:9542109614">
                <Phone className="mr-2 h-5 w-5" />
                Call 954-210-9614
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
