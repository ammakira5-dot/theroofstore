import { motion } from "framer-motion";
import { Link } from "wouter";
import { Paintbrush, CheckCircle, ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { counties } from "@/pages/service-areas/data";

const BASE = "https://www.theroofstore.net";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tile Roof Painting South Florida",
    description:
      "Professional tile roof painting and elastomeric coating services for Spanish tile, flat cement tile, and clay barrel tile roofs throughout South Florida. Available in 3,000+ colors.",
    provider: {
      "@type": "LocalBusiness",
      name: "The Roof Store",
      telephone: "+19542109614",
      url: BASE,
      address: {
        "@type": "PostalAddress",
        addressRegion: "FL",
        addressCountry: "US",
      },
      areaServed: ["Broward County", "Miami-Dade County", "Palm Beach County"],
    },
    serviceType: "Tile Roof Painting",
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you paint a tile roof in South Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Professional-grade elastomeric coatings like SmartShield are applied directly to Spanish tile, flat cement tile, and clay barrel tile roofs in South Florida. Unlike standard roof paint, elastomeric coatings flex with the roof through Florida's heat cycles, resist UV degradation, and are available in 3,000+ colors. The process includes full pressure cleaning and preparation before any coating is applied.",
        },
      },
      {
        "@type": "Question",
        name: "How long does tile roof painting last in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A professional elastomeric coating application on a tile roof in Florida typically lasts 10–15 years depending on the system and number of coats applied. Standard off-the-shelf roof paint degrades in 2–3 years under South Florida's UV intensity and rainfall. Our SmartShield system uses BASF Cool Pigment Technology and is designed specifically for Florida's climate.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best paint for tile roofs in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best solution for tile roofs in Florida is a professional-grade elastomeric coating, not standard roof paint. SmartShield by RoofProtect Products is formulated for South Florida's climate — UV-resistant, flexible, anti-fungal, and available in over 3,000 tintable colors including cool-pigment shades that reflect heat and lower cooling costs.",
        },
      },
    ],
  },
];

const benefits = [
  {
    heading: "3,000+ color options",
    body: "Restore or completely change your roof color with professional-grade elastomeric coatings in over 3,000 tintable shades — including BASF Cool Pigment colors that reflect heat even in darker tones.",
  },
  {
    heading: "Flexible, not brittle",
    body: "Florida's heat causes roofs to expand and contract daily. Elastomeric coatings flex with the roof; standard paint cracks and peels. SmartShield maintains a tight seal through every temperature cycle.",
  },
  {
    heading: "UV & mold resistant",
    body: "South Florida's UV intensity degrades standard paint in 2–3 years. SmartShield's formulation resists UV breakdown and inhibits the algae and fungal growth that causes black streaking on tile roofs.",
  },
  {
    heading: "Cool roof performance",
    body: "BASF Cool Pigment Technology increases solar reflectance by up to 32% compared to standard coatings — helping lower attic temperatures and reduce air conditioning costs year-round.",
  },
  {
    heading: "No full reroof required",
    body: "Roof painting and coating is applied over your existing tile — no tear-off, no landfill waste, no weeks of construction. Most jobs are completed in 1–3 days depending on roof size.",
  },
  {
    heading: "Boosts curb appeal & resale value",
    body: "A freshly coated roof in a modern color is one of the fastest ways to improve the exterior appearance of a South Florida home — and a strong selling point at resale.",
  },
];

const process = [
  {
    step: "1",
    title: "Roof Inspection & Assessment",
    desc: "We assess the tile type, condition, and any areas needing attention before any coating work begins. You are informed of all findings prior to the start of work.",
  },
  {
    step: "2",
    title: "Pressure Cleaning & Soft Washing",
    desc: "Every job starts with a thorough low-pressure wash or soft-wash treatment to strip algae, mold, dirt, and black streaking. Clean surface = maximum adhesion.",
  },
  {
    step: "3",
    title: "Preparation & Priming",
    desc: "Loose tile, failed ridge caps, and surface imperfections are addressed. A primer/sealer is applied to lock down the surface and ensure the coating bonds properly.",
  },
  {
    step: "4",
    title: "Multi-Coat Application",
    desc: "SmartShield elastomeric coating is applied in multiple coats to the manufacturer's mil-thickness specification, building a seamless, weather-resistant membrane across the entire tile surface.",
  },
];

export default function TileRoofPainting() {
  return (
    <>
      <SEO
        title="Tile Roof Painting South Florida | Elastomeric Coating | The Roof Store"
        description="Professional tile roof painting and elastomeric coating for Spanish tile, flat cement tile, and clay barrel tile roofs in South Florida. 3,000+ colors. Free assessment. Call 954-210-9614."
        canonical={`${BASE}/tile-roof-painting`}
        schema={schema}
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#1a2e1a] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-800/40 border border-green-600/40 rounded-full px-4 py-1.5 text-sm text-green-300 mb-6">
              <Paintbrush className="w-4 h-4" />
              Professional Tile Roof Painting — South Florida
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tile Roof Painting in South Florida
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Restore your roof's color, protect against South Florida's climate, and boost curb appeal — with professional elastomeric coatings available in over 3,000 colors. Serving Broward, Miami-Dade, and Palm Beach Counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer">
                  Get a Free Assessment <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="tel:+19542109614"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" /> 954-210-9614
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Is Tile Roof Painting?
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              Tile roof painting — also called elastomeric roof coating — is the process of applying a flexible, weather-resistant coating directly to your existing Spanish tile, flat cement tile, clay barrel tile roof, or flat deck. It refreshes the color, seals the tile surface, and extends roof life without requiring a full replacement.
            </p>
            <p className="text-lg text-gray-700 mb-5">
              In South Florida, roof tiles fade and chalk from intense UV exposure, develop black streaks from algae and mold, and lose their color uniformity within a few years. Roof painting restores that appearance — and when done with a professional elastomeric system, it adds meaningful protection against Florida's heat, rain, and humidity.
            </p>
            <p className="text-lg text-gray-700">
              At The Roof Store, we use <strong>SmartShield</strong> — a professional-grade elastomeric coating by RoofProtect Products, formulated specifically for Florida's climate. It is not standard roof paint. It flexes with the roof, resists UV breakdown, and is available in over 3,000 tintable colors including cool-pigment shades engineered to reflect heat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why South Florida Homeowners Choose Professional Roof Painting
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional elastomeric roof coating outperforms standard paint in every category that matters in Florida's climate.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{b.heading}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Tile Roof Painting Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A professional tile roof painting job follows a structured process — preparation is everything.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 bg-gray-50 rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SmartShield callout ── */}
      <section className="py-16 px-4 bg-[#1a2e1a] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-7 h-7 text-yellow-400" />
              <h2 className="text-3xl font-bold">SmartShield — Our Tile Roof Coating System</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              SmartShield (RP2) is a professional-grade elastomeric roof coating by RoofProtect Products, manufactured by Storm Shield Paint Systems Inc. — the same company behind The Roof Store. It is not a commodity product sold at hardware stores; it is a professional-application system with BASF Cool Pigment Technology built in.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Available in 3,000+ tintable colors",
                "BASF Cool Pigment Technology — increases solar reflectance by up to 32%",
                "Elastomeric formula — flexes with the roof through Florida's heat cycles",
                "Anti-fungal and mold-resistant — inhibits black streaking",
                "Can be applied over existing tile, flat cement, and clay barrel tile",
                "Can be used as a top coat over RoofShield for maximum protection",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/smartshield">
                <span className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
                  SmartShield Product Page <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/roof-painting-vs-coating">
                <span className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer">
                  Roof Paint vs. Coating — What's the Difference?
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tile Roof Painting — Common Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                q: "Can you paint a tile roof in South Florida?",
                a: "Yes. Professional elastomeric coatings like SmartShield are applied directly to Spanish tile, flat cement tile, and clay barrel tile. Unlike standard roof paint, elastomeric coatings flex with the roof through Florida's heat cycles, resist UV degradation, and are available in 3,000+ colors. All work begins with full cleaning and preparation.",
              },
              {
                q: "How long does tile roof painting last in Florida?",
                a: "A professional elastomeric coating on a tile roof in Florida typically lasts 10–15 years depending on the system and the number of coats applied. Standard off-the-shelf roof paint degrades in 2–3 years under South Florida's UV intensity and rainfall.",
              },
              {
                q: "What is the difference between roof paint and roof coating?",
                a: "Standard roof paint is thin, rigid, and designed primarily for aesthetics. It cracks as the roof moves, provides no waterproofing seal, and breaks down quickly in Florida's climate. Elastomeric roof coating is a thick, flexible, weatherproof membrane that seals the surface, resists UV, and is engineered to last. See our full comparison page for more detail.",
              },
              {
                q: "Do I need to replace my tile roof before painting?",
                a: "No — in most cases tile roofs are painted or coated over the existing tile without any replacement. A thorough inspection identifies any areas that need attention before the coating is applied. Clients are alerted to any required repairs prior to the start of work. Structural repairs are generally the responsibility of the property owner.",
              },
              {
                q: "What colors are available for tile roof painting?",
                a: "SmartShield is available in over 3,000 tintable colors. This includes standard terracotta and earth tones as well as lighter cool-pigment shades engineered to reflect solar heat. Color samples are available on request.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service areas ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tile Roof Painting Service Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide tile roof painting and elastomeric coating services throughout South Florida — Broward, Miami-Dade, and Palm Beach Counties.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {counties.map((county) => (
              <motion.div
                key={county.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{county.name}</h3>
                <ul className="space-y-1 mb-4">
                  {county.cities.slice(0, 5).map((city) => (
                    <li key={city.slug} className="text-sm text-gray-600">
                      <Link href={`/service-areas/${county.slug}/${city.slug}`}>
                        <span className="hover:text-green-700 cursor-pointer">{city.name}</span>
                      </Link>
                    </li>
                  ))}
                  {county.cities.length > 5 && (
                    <li className="text-sm text-gray-400">+{county.cities.length - 5} more cities</li>
                  )}
                </ul>
                <Link href={`/service-areas/${county.slug}`}>
                  <span className="inline-flex items-center gap-1 text-green-700 text-sm font-medium hover:text-green-900 cursor-pointer">
                    All {county.name} cities <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Repaint Your Tile Roof?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Get a free roof assessment and color consultation. We serve Broward, Miami-Dade, and Palm Beach Counties — call or submit a request online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                  Request a Free Assessment <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="tel:+19542109614"
                className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white px-8 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" /> 954-210-9614
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
