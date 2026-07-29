import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layers, CheckCircle, ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { counties } from "@/pages/service-areas/data";
import type { TileServicePageData } from "./data";

const BASE = "https://www.theroofstore.net";

function buildSchema(page: TileServicePageData) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${page.serviceType} South Florida`,
      description: page.description,
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
      serviceType: page.serviceType,
      areaServed: {
        "@type": "State",
        name: "Florida",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

export default function TileServicePage({ page }: { page: TileServicePageData }) {
  return (
    <>
      <SEO
        title={page.title}
        description={page.description}
        canonical={`/${page.slug}`}
        schema={buildSchema(page)}
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
              <Layers className="w-4 h-4" />
              {page.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{page.h1}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{page.heroSub}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{page.introHeading}</h2>
            {page.intro.map((p, i) => (
              <p key={i} className="text-lg text-gray-700 mb-5">
                {p}
              </p>
            ))}
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
              Why South Florida Homeowners Choose {page.serviceType}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.benefits.map((b, i) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every job follows a structured professional process — preparation is everything.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.process.map((p, i) => (
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

      {/* ── System callout ── */}
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
              <h2 className="text-3xl font-bold">{page.systemHeading}</h2>
            </div>
            <p className="text-gray-300 text-lg mb-6">{page.systemBody}</p>
            <ul className="space-y-3 mb-8">
              {page.systemPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={page.systemHref}>
                <span className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
                  {page.systemName} Product Page <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/roof-systems">
                <span className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer">
                  All Roof Coating Systems
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
              {page.serviceType} — Common Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {page.faqs.map((item, i) => (
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

      {/* ── Legacy city callouts ── */}
      {page.legacyCities && (
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
                {page.legacyCities.heading}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{page.legacyCities.body}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {page.legacyCities.cities.map((c) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Link href={c.href}>
                      <span className="hover:text-green-700 cursor-pointer">{c.name}</span>
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.note}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {counties.map((county) => (
                <div
                  key={county.slug}
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
                      <li className="text-sm text-gray-400">
                        +{county.cities.length - 5} more cities
                      </li>
                    )}
                  </ul>
                  <Link href={`/service-areas/${county.slug}`}>
                    <span className="inline-flex items-center gap-1 text-green-700 text-sm font-medium hover:text-green-900 cursor-pointer">
                      All {county.name} cities <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related services ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {page.related.map((r) => (
              <Link key={r.href} href={r.href}>
                <span className="inline-flex items-center gap-1.5 border border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-700 text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer">
                  {r.label} <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Tile Roof?</h2>
            <p className="text-green-100 text-lg mb-8">
              Get a free roof assessment and quote. We serve Broward, Miami-Dade, and Palm Beach
              Counties — call or submit a request online.
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
