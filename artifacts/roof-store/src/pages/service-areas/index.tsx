import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

import { counties as countiesData } from "./data";

const counties = countiesData.map((c) => ({
  name: c.name,
  slug: c.slug,
  image: c.image,
  cities: c.cities.map((city) => ({ name: city.name, slug: city.slug })),
}));

export default function ServiceAreas() {
  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Service Areas — South Florida"
        description="The Roof Store serves all of South Florida including Broward, Miami-Dade, and Palm Beach Counties. Find your city and schedule a free roof consultation today."
        canonical="/service-areas"
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Service Areas</h1>
            <p className="text-xl text-white/80">
              Proudly serving South Florida homeowners and businesses for nearly 30 years. Browse by county or city below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {counties.map((county, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-xl shadow-sm overflow-hidden"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={county.image}
                    alt={`${county.name}, Florida`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary">{county.name}</h2>
                </div>

                <Link
                  href={`/service-areas/${county.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm mb-2 hover:underline"
                >
                  View full {county.name} page <ArrowRight className="h-4 w-4" />
                </Link>
                <br />
                <Link
                  href={`/roof-services/${county.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm mb-6 hover:underline"
                >
                  Roof coating services in {county.name} <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="overflow-y-auto h-60 pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-accent/40 hover:[&::-webkit-scrollbar-thumb]:bg-accent/70">
                  <ul className="space-y-2">
                    {county.cities.map((city, j) => (
                      <li key={j}>
                        <Link
                          href={`/service-areas/${county.slug}/${city.slug}`}
                          className="flex items-center gap-2 py-1.5 text-foreground hover:text-accent transition-colors group"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform" />
                          {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Don't See Your City?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Call us at <a href="tel:954-210-9614" className="text-accent font-bold hover:underline">954-210-9614</a> — we may still be able to serve your area.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
