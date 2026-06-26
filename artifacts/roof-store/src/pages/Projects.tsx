import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, ShieldCheck, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const beforeAfterProjects = [
  {
    title: "Spanish Tile Roof Restoration",
    type: "RoofShield Liquid Rubber Membrane System",
    location: "Davie, FL",
    size: "Residential",
    saved: "$22,000+",
    description:
      "Cement tile roofs are vulnerable to UV degradation, algae staining, and hairline cracking at the ridge caps. After a full surface clean, crack repair, and multi-coat RoofShield application, the tiles were restored, sealed, and protected against wind uplift — at a fraction of re-roof cost.",
    beforeSrc: "/images/projects/clay-tile-before.png",
    afterSrc: "/images/projects/clay-tile-after.png",
    beforeLabel: "Before",
    afterLabel: "After",
    gallery: [
      { src: "/images/projects/spanish-tile-extra-3.png", alt: "Spanish tile roof before and after comparison" },
      { src: "/images/projects/spanish-tile-extra-4.png", alt: "Spanish tile restoration aerial before and after" },
      { src: "/images/projects/spanish-tile-extra-1.png", alt: "Restored Spanish tile roof close-up" },
      { src: "/images/projects/spanish-tile-extra-2.png", alt: "Spanish tile roof home exterior after restoration" },
    ],
  },
  {
    title: "Flat Deck Rubber Roof Installation",
    type: "Liquid Rubber Membrane — Full Flat Deck",
    location: "South Florida",
    size: "Residential Flat Deck",
    saved: "$18,000+",
    description:
      "Flat roofs are the most leak-prone in Florida. This flat deck received a complete liquid rubber membrane system — no tear-off, no replacement. The seamless application eliminates every joint and seam, permanently stopping leaks through ponding water, UV, and storm rain.",
    beforeSrc: "/images/projects/flat-deck-before.png",
    afterSrc: "/images/projects/flat-deck-after.png",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    title: "Flat Cement Tile Waterproofing System",
    type: "FungalShield + RoofShield Two-Coat System",
    location: "Broward County, FL",
    size: "Residential",
    saved: "$30,000+",
    description:
      "A two-coat system starting with FungalShield (RP1) to kill mold and prevent regrowth, followed by RoofShield (RP3) as the waterproof topcoat. The finished surface sheds water, reflects UV, and carries a lifetime transferable warranty — fully documented for insurance and resale.",
    beforeSrc: "/images/projects/flat-cement-before.png",
    afterSrc: "/images/projects/flat-cement-after.png",
    beforeLabel: "Before",
    afterLabel: "After",
    gallery: [
      { src: "/images/projects/flat-cement-extra-1.png", alt: "Flat cement tile waterproofing project exterior" },
      { src: "/images/projects/flat-cement-extra-2.png", alt: "Flat cement tile waterproofing crew on site" },
    ],
  },
];

const caseStudies = [
  {
    title: "Hurricane Recovery Coating",
    location: "Hollywood, FL",
    type: "RoofShield Premium System",
    description: "Post-hurricane assessment and full RoofShield premium system application. Multiple cracked tiles replaced, all ridge caps reseated and sealed.",
    result: "Insurance-approved restoration. Passed wind mitigation inspection at highest rating.",
    icon: ShieldCheck,
  },
  {
    title: "Flat Deck Condominium",
    location: "Aventura, FL",
    type: "Silicone Roof System",
    description: "12,000 sq ft condominium roof with extensive weathering and ponding water issues. Applied silicone roof system over an existing modified bitumen roof.",
    result: "HOA saved over $150,000 vs. full replacement bid. Zero leaks reported.",
    icon: DollarSign,
  },
  {
    title: "Metal Standing Seam Roof",
    location: "Plantation, FL",
    type: "Elastomeric Metal Coating",
    description: "Standing seam metal roof with rust and UV degradation. Full elastomeric coating applied to halt rust and create a cool, UV-reflective surface.",
    result: "Rust completely halted. Energy savings of ~$300/month on cooling costs.",
    icon: Zap,
  },
];

const BASE = "https://www.theroofstore.net";

export default function Projects() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Roof Coating Projects — Before & After | The Roof Store",
      url: `${BASE}/projects`,
      description: "Real before and after roof coating results from South Florida homeowners. Tile restoration, flat deck waterproofing, and rubber roof coating projects.",
      provider: {
        "@type": "RoofingContractor",
        name: "The Roof Store",
        url: BASE,
        telephone: "+19542109614",
        address: { "@type": "PostalAddress", addressLocality: "Davie", addressRegion: "FL", postalCode: "33314", addressCountry: "US" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE}/projects` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Projects — Before & After South Florida"
        description="See real before & after results from The Roof Store's rubber roof coating and tile restoration projects across South Florida. Real savings vs. replacement."
        canonical="/projects"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Before & After</h1>
            <p className="text-xl text-white/80">
              Drag the slider to see real transformations. Real projects. Real savings. Real protection.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="space-y-20">
            {beforeAfterProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <BeforeAfterSlider
                    beforeSrc={project.beforeSrc}
                    afterSrc={project.afterSrc}
                    beforeLabel={project.beforeLabel}
                    afterLabel={project.afterLabel}
                    beforeAlt={`${project.title} — Before`}
                    afterAlt={`${project.title} — After`}
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location} · {project.size}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2">{project.title}</h2>
                  <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">{project.type}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{project.description}</p>

                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-accent uppercase tracking-wide">Owner Saved vs. Replacement</div>
                        <div className="text-2xl font-serif font-bold text-primary">{project.saved}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {project.gallery && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 lg:col-span-2"
                  >
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">More Photos — {project.title}</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {project.gallery.map((img, gi) => (
                        <div key={gi} className="overflow-hidden rounded-lg shadow-sm aspect-[4/3] bg-muted">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">More Project Results</h2>
            <p className="text-muted-foreground text-lg">Every project comes with a written performance guarantee and full documentation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-5">
                  <cs.icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {cs.location}
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-1">{cs.title}</h3>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">{cs.type}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{cs.description}</p>
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <div className="text-xs font-bold text-accent uppercase tracking-wide mb-1">Result</div>
                  <p className="text-sm text-foreground font-medium">{cs.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Want Results Like These?</h2>
          <p className="text-xl text-white/80 mb-10">
            Every project starts with a free roof inspection. Our certified technicians will assess your roof and show you exactly what's possible.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
