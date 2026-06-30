import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

const areas = [
  "Broward County", "Miami-Dade County", "Palm Beach County", "Fort Lauderdale",
  "Boca Raton", "Pompano Beach", "Hollywood", "Pembroke Pines", "Miramar",
  "Coral Springs", "Sunrise", "Plantation", "Deerfield Beach", "Hallandale Beach",
  "Davie", "Weston", "Cooper City", "Tamarac", "Margate", "Coconut Creek",
  "West Palm Beach", "Delray Beach", "Boynton Beach", "Lake Worth", "Wellington",
  "Miami", "Hialeah", "Miami Beach", "Aventura", "North Miami",
];

const BASE = "https://www.theroofstore.net";

export default function ServiceAreas() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      name: "The Roof Store Waterproofing Products",
      alternateName: "The Roof Store",
      url: BASE,
      telephone: "+19542109614",
      email: "theroofstore@gmail.com",
      address: { "@type": "PostalAddress", streetAddress: "4801 S University Dr", addressLocality: "Davie", addressRegion: "FL", postalCode: "33328", addressCountry: "US" },
      areaServed: areas.map((a) => ({ "@type": "Place", name: `${a}, FL` })),
      description: "The Roof Store serves South Florida homeowners across Broward, Miami-Dade, and Palm Beach counties. A+ BBB rated since 1994.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE}/service-areas` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Service Areas — South Florida Roof Coating | The Roof Store"
        description="The Roof Store serves Broward, Miami-Dade, and Palm Beach counties. Rubber roof coating, tile restoration, and weatherproofing in Fort Lauderdale, Miami, West Palm Beach, and 30+ South Florida cities."
        canonical="/service-areas"
        schema={schema}
        geo={{ region: "US-FL", placename: "South Florida" }}
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Service Areas</h1>
            <p className="text-xl text-white/80">
              Proudly serving South Florida homeowners and businesses for nearly 30 years.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Areas We Serve</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                The Roof Store serves the full South Florida tri-county region. We work with homeowners and commercial property owners throughout Broward, Miami-Dade, and Palm Beach counties, delivering the same expert-level service regardless of location.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Not sure if we cover your area? Call us directly at{" "}
                <a href="tel:954-210-9614" className="text-accent font-bold hover:underline">954-210-9614</a> and we'll let you know immediately.
              </p>
              <div className="bg-muted rounded-xl p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-foreground mb-1">Primary Service Region</div>
                    <div className="text-muted-foreground">South Florida — Broward, Miami-Dade, and Palm Beach Counties</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-foreground mb-1">Call for Service Availability</div>
                    <a href="tel:954-210-9614" className="text-accent font-bold hover:underline">954-210-9614 — Option 1</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">Cities and Communities We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center gap-2 py-2"
                    data-testid={`area-${i}`}
                  >
                    <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="text-foreground font-medium">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Protect Your Home?</h2>
          <p className="text-xl text-white/80 mb-10">Wherever you are in South Florida, we'll come to you. Schedule your free consultation today.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
