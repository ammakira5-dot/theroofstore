import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";

const projects = [
  {
    title: "Tile Roof Restoration",
    location: "Boca Raton, FL",
    type: "Elastomeric Coating + Reglazing",
    description: "Full tile restoration on a 3,200 sq ft estate home. Included deep cleaning, crack repair, ridge repointing, and Storm Shield elastomeric coating application.",
    result: "Roof restored to like-new condition. Owner saved $28,000 vs. full replacement quote.",
  },
  {
    title: "Commercial Flat Roof",
    location: "Fort Lauderdale, FL",
    type: "Liquid Rubber Membrane",
    description: "5,800 sq ft flat roof on a commercial office building with chronic leaking issues. Applied full liquid rubber membrane system over the existing substrate.",
    result: "Zero leaks in 4 years since installation. Owner reports 20% reduction in HVAC costs.",
  },
  {
    title: "Hurricane Recovery Coating",
    location: "Hollywood, FL",
    type: "Storm Shield Premium System",
    description: "Post-hurricane assessment and full Storm Shield premium system application. Multiple cracked tiles replaced, all ridge caps reseated and sealed.",
    result: "Insurance approved restoration. Passed wind mitigation inspection at highest rating.",
  },
  {
    title: "Flat Deck Condominium",
    location: "Aventura, FL",
    type: "Silicone Roof System",
    description: "12,000 sq ft condominium roof with extensive weathering and ponding water issues. Applied our silicone roof system over an existing modified bitumen roof.",
    result: "Full waterproofing achieved. HOA saved over $150,000 vs. full replacement bid.",
  },
  {
    title: "Spanish Tile Estate",
    location: "Coral Springs, FL",
    type: "Tile Restoration + Reglazing",
    description: "Complete restoration of a 4,500 sq ft Spanish clay tile roof that had lost its protective glaze and suffered significant algae growth and discoloration.",
    result: "Dramatic color restoration. Tiles sealed and protected for the next 15+ years.",
  },
  {
    title: "Metal Standing Seam Roof",
    location: "Plantation, FL",
    type: "Elastomeric Metal Roof Coating",
    description: "Standing seam metal roof with rust and UV degradation issues. Full elastomeric coating applied to stop rust progression and create UV-reflective surface.",
    result: "Rust halted. Energy savings of approximately $300/month on cooling costs.",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      <SEO
        title="Roof Coating Projects — South Florida Case Studies"
        description="Real rubber roof coating and tile restoration projects across South Florida. See how homeowners saved thousands vs. full roof replacement with Storm Shield systems."
        canonical="/projects"
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-white/80">
              Real projects. Real savings. Real protection for Florida homes and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
                data-testid={`project-card-${i}`}
              >
                <div className="bg-muted h-48 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl font-serif font-bold text-primary/20 mb-2">{String(i + 1).padStart(2, "0")}</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wide">{project.type}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 text-accent" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                    <div className="text-xs font-bold text-accent uppercase tracking-wide mb-1">Result</div>
                    <p className="text-sm text-foreground font-medium">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Start Your Project Today</h2>
          <p className="text-xl text-white/80 mb-10">Join thousands of South Florida homeowners who have trusted us to protect their most valuable asset.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
