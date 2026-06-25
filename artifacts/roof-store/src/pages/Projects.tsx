import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, ShieldCheck, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const ROOF_AFTER = "/images/hero-bg.png";

const beforeAfterProjects = [
  {
    title: "Tile Roof Restoration — Boca Raton Estate",
    type: "Elastomeric Coating + Reglazing",
    location: "Boca Raton, FL",
    size: "3,200 sq ft",
    saved: "$28,000",
    description:
      "This 20-year-old barrel tile roof had significant algae staining, faded glaze, and hairline cracks at the ridge caps. After a full Storm Shield restoration — cleaning, crack repair, repointing, and multi-coat elastomeric application — the roof looks new and is fully weatherproofed.",
    beforeStyle: {
      filter: "grayscale(0.55) sepia(0.35) contrast(0.85) brightness(0.75) saturate(0.6)",
    },
    beforeLabel: "Before — Worn & Faded",
    afterLabel: "After — Storm Shield Applied",
  },
  {
    title: "Flat Deck Waterproofing — Fort Lauderdale Office",
    type: "Liquid Rubber Membrane",
    location: "Fort Lauderdale, FL",
    size: "5,800 sq ft",
    saved: "$65,000",
    description:
      "A chronic leaking flat roof on a commercial building had cost the owner tens of thousands in interior repairs. After our liquid rubber membrane system was applied seamlessly over the existing substrate, leaks were eliminated permanently — no seams, no joints, no weak points.",
    beforeStyle: {
      filter: "grayscale(0.6) sepia(0.4) contrast(0.8) brightness(0.7) hue-rotate(10deg)",
    },
    beforeLabel: "Before — Chronic Leaks",
    afterLabel: "After — Sealed Membrane",
  },
  {
    title: "Spanish Tile Reglazing — Coral Springs",
    type: "Tile Reglazing + Storm Shield",
    location: "Coral Springs, FL",
    size: "4,500 sq ft",
    saved: "$42,000",
    description:
      "This Spanish clay tile roof had completely lost its protective glaze. Extensive algae growth had discolored the entire surface. After deep cleaning, individual tile repairs, and our full reglaze + Storm Shield coating application, the color and protection were fully restored.",
    beforeStyle: {
      filter: "grayscale(0.7) sepia(0.5) contrast(0.75) brightness(0.65) saturate(0.4)",
    },
    beforeLabel: "Before — Algae & Discoloration",
    afterLabel: "After — Restored & Sealed",
  },
];

const caseStudies = [
  {
    title: "Hurricane Recovery Coating",
    location: "Hollywood, FL",
    type: "Storm Shield Premium System",
    description: "Post-hurricane assessment and full Storm Shield premium system application. Multiple cracked tiles replaced, all ridge caps reseated and sealed.",
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

export default function Projects() {
  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Projects — Before & After South Florida"
        description="See real before & after results from The Roof Store's rubber roof coating and tile restoration projects across South Florida. Real savings vs. replacement."
        canonical="/projects"
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
                    beforeSrc={ROOF_AFTER}
                    afterSrc={ROOF_AFTER}
                    beforeStyle={project.beforeStyle}
                    beforeLabel={project.beforeLabel}
                    afterLabel={project.afterLabel}
                    beforeAlt={`${project.title} — Before`}
                    afterAlt={`${project.title} — After Storm Shield`}
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
