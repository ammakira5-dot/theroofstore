import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const faqs = [
  {
    q: "What is a liquid-applied rubber roof coating system?",
    a: "A liquid-applied rubber roof coating is a seamless, elastomeric membrane applied directly to your existing roof surface. Unlike traditional roofing materials, it's applied as a liquid and cures into a solid, fully-adhered rubber membrane with no seams or joints — which are the primary entry points for water in conventional roofing systems.",
  },
  {
    q: "How does roof coating compare to full roof replacement?",
    a: "Roof coating typically costs 60–70% less than full replacement, can be applied over your existing roof (avoiding landfill waste), and can extend the life of your roof by 10–25 years. It also qualifies as a roofing maintenance cost in many tax and insurance scenarios. However, if your roof has severe structural damage, replacement may be the better option — our team will give you an honest assessment.",
  },
  {
    q: "Will a roof coating hold up to Florida hurricanes?",
    a: "Our roof coating systems are specifically engineered for Florida's severe weather environment. The elastomeric formulation flexes and stretches under wind loads rather than cracking or separating. Our systems are tested and guaranteed against hurricane force winds. We have thousands of installations that have survived multiple hurricane seasons with zero failures.",
  },
  {
    q: "How long does the coating last?",
    a: "Our premium roof coating systems are designed to last 10–25 years depending on the system selected, application thickness, roof condition, and maintenance. We provide written performance guarantees on all of our installations. Annual inspections and minor touch-ups can extend the life further.",
  },
  {
    q: "Can you coat any type of roof?",
    a: "We work with a wide range of roof types including clay and concrete tile, flat and low-slope roofs, modified bitumen, metal roofs, and more. Not all roofs are candidates for coating — during your free consultation, our technicians will inspect your roof and advise whether coating or restoration is appropriate for your situation.",
  },
  {
    q: "How long does the installation take?",
    a: "Most residential roof coating projects are completed in 1–3 days depending on roof size and system complexity. Flat roof applications may be completed in a single day. We'll give you a detailed timeline during your consultation.",
  },
  {
    q: "Will the coating affect my energy bills?",
    a: "Yes — positively. Our coatings are highly UV-reflective, which reduces heat absorption and can lower your cooling costs by 15–25% during Florida's hot summer months. This makes them 'cool roof' products that may qualify for energy efficiency incentives in some programs.",
  },
  {
    q: "I have an active tile roof leak — do I need a 'tile lift-and-reset' underlayment repair?",
    a: "Often, no. Understand what a 'lift-and-reset' really is: re-roofing by another name. The tiles come off, new material goes underneath, and the tiles go back on — a partial re-roof, marketed as a 'repair.' Don't re-roof when you don't have to. It's invasive, and it commonly creates new cracked tiles and new leaks unless you're committed to a full tile replacement project. Our Roof Shield (RP3) system takes a fundamentally different approach — our liquid rubber flows between the tiles and fills every gap, and when completed it is a seamless coating system: one continuous waterproof membrane above the tiles, so your roof no longer depends on the old underlayment as its only water barrier. Cracked tiles and defects are always repaired first as part of the process. The one exception: if bad or rotted wood (roof decking) is suspected underneath, that localized section must be repaired first — tiles in that area are lifted, the bad piece of wood is removed and dried back in with traditional materials — and then the coating system proceeds over the sound roof. RP3 is far superior to any traditional roof material application, including synthetic underlayments — call 954-210-9614 for a free inspection to confirm your roof is a candidate.",
  },
  {
    q: "Does The Roof Store sell synthetic roofing underlayment?",
    a: "No. The Roof Store and RoofProtect Products have never manufactured or sold synthetic roofing underlayment — the Roof Shield (RP3) seamless monolithic system makes it unnecessary. Any 'synthetic roofing underlayment' sold under a similar-sounding name is not our product and is not affiliated with The Roof Store of Davie, FL (theroofstore.net).",
  },
  {
    q: "What is Roof Tile Reglazing?",
    a: "Reglazing restores the protective glaze layer on ceramic or concrete roof tiles. Over time, tiles become porous and lose their protective finish — leading to water absorption, algae growth, and discoloration. Reglazing seals the tile surface, restoring its original color and protective properties at a fraction of the cost of tile replacement.",
  },
  {
    q: "Do you offer warranties?",
    a: "Yes. We provide written performance warranties on all our installations. Warranty terms vary by system — from 5-year maintenance warranties to 15+ year performance guarantees on our premium systems. Ask our team for full warranty details during your consultation.",
  },
  {
    q: "Do I need to pressure clean my roof before painting or waterproofing it?",
    a: "Yes — professional roof pressure cleaning or soft washing is always the required first step before any tile roof painting, waterproofing, or flat roof sealing. Paint and coatings need a clean, dry surface to bond properly. Applying coatings over algae, mold, dirt, or loose material will cause premature peeling and failure. Our team handles the pressure cleaning or soft wash treatment as part of every roof painting and waterproofing project.",
  },
  {
    q: "What is the difference between roof pressure cleaning and soft washing?",
    a: "Pressure cleaning uses calibrated low-pressure water to physically blast away algae, mold, and black streaking, and is our standard method for most tile, cement, and flat roofs. Soft washing uses a biodegradable cleaning solution applied at very low pressure to kill biological growth at the root — it's a gentler option we recommend for older, cracked, or more fragile tile where high-pressure water could cause damage. Both methods are always followed by a full rinse and inspection before any coating is applied.",
  },
  {
    q: "Do you offer silicone roof coating for flat or commercial roofs?",
    a: "Yes. For commercial flat roofs and any roof that holds standing or ponding water, silicone is the strongest liquid-applied coating formulation available — it's the industry standard for that application. Our RoofShield (RP3) system is typically formulated with a proprietary premium silicone base ingredient for exactly this reason, and additionally is the world's only liquid roof coating to pass the Dade County Certified TAS-106 Uplift Pull Test (independently tested per Dade County, FL uplift standards).",
    link: { href: "/silicone-roof-coating", label: "Learn more about our silicone roof coating system" },
  },
  {
    q: "How much does a roof coating cost in Florida?",
    a: "Roof coating pricing depends on the system (SmartShield RP2 or RoofShield RP3), your roof type, and pitch — installed, including labor and materials. As a general rule, coating saves homeowners up to 60–70% vs. full roof replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly.",
    link: { href: "/roof-coating-florida", label: "Complete Florida Roof Coating Cost Guide →" },
  },
  {
    q: "Can you paint a tile roof in South Florida?",
    a: "Absolutely. Tile roof painting is one of our most popular services. We use professional-grade elastomeric roof coatings specifically formulated for Florida's UV intensity, heat, and humidity — available in over 3,000 colors. Tile roof painting restores faded, chalky, or discolored tiles, improves curb appeal, adds a waterproof barrier, and can reduce cooling costs by reflecting solar heat. All painting is done after thorough pressure cleaning.",
  },
  {
    q: "How do I waterproof a tile roof?",
    a: "Tile roof waterproofing involves cleaning the roof surface, repairing any cracked or broken tiles, repointing ridge caps and hip areas, and applying a multi-coat coating system that seals every tile surface and fills every gap. The result is a continuous waterproof membrane over your existing tile roof that stops leaks permanently. Our RoofShield system is the world's only coating to pass the Dade County Certified TAS-106 Uplift Test (per independent Dade County testing) — the strongest waterproofing solution available for tile roofs in South Florida.",
  },
  {
    q: "How do I seal a flat roof after pressure cleaning?",
    a: "After pressure cleaning a flat or low-slope roof, the surface needs to dry completely (typically 24–48 hours in Florida weather), then a primer is applied followed by one or more coats of elastomeric rubber coating. Our flat roof sealing process creates a seamless, fully-adhered waterproof membrane with no seams, joints, or weak points. We handle the entire process — pressure cleaning, drying, priming, and sealing — as a single continuous project.",
  },
  {
    q: "What types of roofs do you pressure clean or soft wash?",
    a: "We pressure clean and soft wash all roof types common in South Florida: Spanish clay tile, flat cement tile, concrete tile, clay barrel tile, commercial built-up flat decks, modified bitumen, and metal roofs. We use calibrated low-pressure washing or soft wash chemical treatments appropriate to each surface type — ensuring a thorough clean without damaging tiles or dislodging mortar.",
  },
  {
    q: "How much does roof pressure cleaning or soft washing cost in South Florida?",
    a: "Roof pressure cleaning and soft washing costs vary based on roof size, pitch, and condition. Most residential tile roofs in Broward, Miami-Dade, and Palm Beach County range from a few hundred to over a thousand dollars depending on square footage. We include a free roof evaluation with every estimate — call us at 954-210-9614 or use our contact form for a no-obligation quote.",
  },
  {
    q: "How do I get started?",
    a: "Simply call us at 954-210-9614 or use our online contact form to schedule a free roof evaluation and consultation. One of our certified technicians will come to your property, assess your roof, and provide a detailed written proposal at no charge.",
  },
];

const BASE = "https://www.theroofstore.net";

export default function Faq() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE}/faq` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Roof Coating FAQ — Florida Homeowners' Top Questions Answered | The Roof Store"
        description="Answers to common questions about roof coating systems: tile restoration, hurricane performance, warranties, and how coating compares to full roof replacement. The Roof Store — Davie, FL — 954-210-9614."
        schema={schema}
        canonical="/faq"
        ogImage="/images/og/faq.jpg"
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Coating FAQ — Florida Homeowners' Top Questions Answered</h1>
            <p className="text-xl text-white/80">
              Everything you need to know about roof coating, restoration, and weatherproofing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border rounded-xl px-6 py-6"
              >
                <h3 className="font-serif font-bold text-lg text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{faq.a}</p>
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="mt-3 inline-block font-semibold text-primary hover:underline text-sm"
                  >
                    {faq.link.label} →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-white/80 mb-10">Our experts are standing by to answer any questions you have about your specific roof situation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <a href="tel:954-210-9614" className="text-white/80 hover:text-white font-bold text-lg transition-colors">
              Call 954-210-9614
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
