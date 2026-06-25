import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Award } from "lucide-react";

const reviews = [
  {
    name: "Robert M.",
    location: "Fort Lauderdale, FL",
    rating: 5,
    date: "March 2024",
    text: "After Hurricane Ian caused significant damage to my tile roof, I was quoted $35,000 for full replacement. The Roof Store came out, assessed everything, and restored my roof for under $12,000. The Storm Shield coating looks amazing and I've had zero issues since. Highly recommend calling them before any roofer.",
  },
  {
    name: "Sandra K.",
    location: "Boca Raton, FL",
    rating: 5,
    date: "January 2024",
    text: "I've been using Storm Shield products for 8 years now. The team is professional, shows up on time, and the work quality is exceptional. My roof tiles look brand new and I haven't had a single leak. Best investment I've made in my home.",
  },
  {
    name: "James T.",
    location: "Hollywood, FL",
    rating: 5,
    date: "November 2023",
    text: "The flat roof on my commercial building was a constant problem. After trying two other contractors, I found The Roof Store. They applied their rubber coating system and it's been 3 years without a single issue. I wish I had found them sooner.",
  },
  {
    name: "Maria C.",
    location: "Coral Springs, FL",
    rating: 5,
    date: "September 2023",
    text: "Fantastic experience from start to finish. The crew was professional, clean, and respectful of my property. The consultation was thorough and they explained every step of the process. My roof looks better than it did when the house was new. 5 stars without hesitation.",
  },
  {
    name: "David L.",
    location: "Pembroke Pines, FL",
    rating: 5,
    date: "July 2023",
    text: "The Roof Store saved me from an expensive re-roof. My 20-year-old tile roof was showing its age but structurally sound. They did a full restoration and it now looks and performs like new. The BBB A+ rating is well-deserved — this company does exactly what they say.",
  },
  {
    name: "Patricia W.",
    location: "Plantation, FL",
    rating: 5,
    date: "May 2023",
    text: "I was skeptical that a coating could really solve my leaking problems, but I'm a believer now. The rubber membrane they applied to my flat roof has kept it perfectly dry through two wet seasons and multiple tropical storms. Outstanding product and service.",
  },
];

export default function Reviews() {
  return (
    <div className="w-full">
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-white/80 mb-8">What Florida homeowners say about The Roof Store.</p>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-6 py-3 rounded-full">
              <Award className="h-5 w-5 text-accent" />
              <span className="font-bold text-white">A+ BBB Rated Since 1994</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border hover:shadow-md transition-shadow"
                data-testid={`review-card-${i}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.location}</div>
                  <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-12 shadow-sm border">
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-5xl font-serif font-bold text-primary mb-2">5.0</div>
            <div className="text-muted-foreground font-medium mb-6">Average Rating — Based on hundreds of reviews</div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full font-bold">
              <Award className="h-5 w-5" />
              BBB Accredited Business — A+ Rating
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Join Thousands of Satisfied Customers</h2>
          <p className="text-xl text-white/80 mb-10">Schedule your free consultation and experience the Storm Shield difference.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
