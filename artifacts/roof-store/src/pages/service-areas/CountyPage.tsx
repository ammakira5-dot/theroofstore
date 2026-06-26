import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { LocalQuoteForm } from "@/components/LocalQuoteForm";

interface CountyPageProps {
  county: string;
  slug: string;
  description: string;
  cities: { name: string; slug: string }[];
}

export function CountyPage({ county, slug, description, cities }: CountyPageProps) {
  return (
    <div className="w-full">
      <SEO
        title={`Rubber Roof Coating in ${county} — The Roof Store`}
        description={`The Roof Store provides rubber roof coating, tile restoration, and weatherproofing services throughout ${county}, FL. A+ BBB rated since 1994. Free consultation.`}
        canonical={`/service-areas/${slug}`}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-white">{county}</span>
            </nav>
            <h1 className="text-5xl font-serif font-bold mb-6">Roof Coating Services in {county}</h1>
            <p className="text-xl text-white/80">{description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  The Roof Store in {county}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The Roof Store has been protecting homes and commercial properties throughout {county} for nearly 30 years. Our team of certified technicians provides expert rubber roof coating, tile restoration, and weatherproofing services to homeowners across the county.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  We offer a proven alternative to costly roof replacement — our liquid-applied rubber roof shield system can restore and weatherproof your existing roof at up to half the cost of replacement. All work is backed by our A+ BBB rating and comprehensive performance warranties.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you have a tile roof, flat deck, or metal roof, our certified technicians will provide a thorough inspection and recommend the right roof coating system for your specific needs.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Services Available in {county}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Rubber Roof Coating",
                    "Tile Roof Restoration",
                    "Tile Reglazing",
                    "Flat Deck Waterproofing",
                    "Elastomeric Coating",
                    "Hurricane Protection",
                    "Silicone Roof System",
                    "Roof Repair & Maintenance",
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Cities We Serve in {county}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cities.map((city, i) => (
                    <Link
                      key={i}
                      href={`/service-areas/${slug}/${city.slug}`}
                      className="flex items-center gap-2 py-2 text-foreground hover:text-accent transition-colors group"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform" />
                      {city.name}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-1">Free Roof Inspection</h3>
                <p className="text-white/60 text-xs mb-5">Serving {county}, FL — no cost, no obligation</p>
                <LocalQuoteForm location={`${county}, FL`} source="county-page-form" />
              </div>

              <div className="bg-muted rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-sm text-foreground">Call Us</div>
                    <a href="tel:954-210-9614" className="text-accent font-bold hover:underline">954-210-9614</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-sm text-foreground">Service Area</div>
                    <div className="text-muted-foreground text-sm">{county}, FL</div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-1">A+</div>
                <div className="text-sm font-bold text-foreground">BBB Rated</div>
                <div className="text-xs text-muted-foreground">Since 1994</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
