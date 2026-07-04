import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Award, Play } from "lucide-react";
import { SEO } from "@/components/SEO";

const featured = {
  name: "Don Godshall",
  location: "5651 Thornbluff Ave., Davie FL 33331",
  product: "Roof Shield System",
  yearsAgo: "15+ years ago",
  quote: "I had to either replace the roof or seal it. I decided to use the Roof Shield roof paint sealant system. During Hurricane Wilma my neighbors' tiles were hitting my house. The next morning after the storm passed we went outside to see what happened — our roof was still perfect.",
  image: "https://www.theroofstore.net/images/Don-Godshall-Testimonial.gif",
  videoId: "dYKcWoDVPns",
};

const reviews = [
  {
    name: "Mr. Dale King",
    location: "2001 NE 21st Ave, Ft Lauderdale, FL",
    product: "Roof Shield System",
    yearsAgo: "27 years ago — resealed 2002",
    text: "Original roof coating was installed in 1992, resealed in 2002. My roof went through several storms without leaks due to hurricane damage. I could not be more pleased with your process.",
  },
  {
    name: "George Figler",
    location: "Ft Lauderdale, FL — General Contractor, Muvico Company",
    product: "Roof Shield System",
    yearsAgo: "17 years ago",
    text: "I was looking to reroof or get a new replacement roof in Ft Lauderdale. Fortunately I found the rubber roof coating that could seal the roof and protect it. Wilma damaged several roofs up and down our street — my roof was intact and is still doing the job that was guaranteed.",
  },
  {
    name: "Patrick Pointu",
    location: "Lauderdale By The Sea, FL",
    product: "Roof Shield — 1,700 sq ft Flat BUR Roof",
    yearsAgo: "2.5 years ago",
    text: "Palm Beach County Sheriff. Had the Roof Shield system applied to my two-story home. Outstanding work and the flat roof has been completely problem-free since.",
  },
  {
    name: "Lonnie Mergler",
    location: "4771 SW 70th Ter, Davie FL",
    product: "Roof Shield System — S Tile",
    yearsAgo: "2.5 years ago",
    text: "Davie Code Enforcement Officer, Retired Police Officer NJ. The Roof Store installed the Roof Shield system on my S-tile roof. Professional from start to finish.",
  },
  {
    name: "Keith Zambrano",
    location: "Delray Beach, FL",
    product: "Smart Shield — S Tile",
    yearsAgo: "2.5 years ago",
    text: "Retired Military. Had Smart Shield applied to my S-tile roof. The energy savings have been noticeable immediately and the roof looks brand new. Excellent company.",
  },
  {
    name: "Julie Coppola",
    location: "2771 NE 15th Street, Fort Lauderdale FL",
    product: "Flat Cement Tile — Commercial",
    yearsAgo: "8 years ago",
    text: "Suffolk House Condominium, two-story commercial project. Flat cement tile roof waterproofed in 2014 and it has held up perfectly through every storm season since.",
  },
  {
    name: "Arlene Kalb",
    location: "5651 Thornbluff Ave, Davie FL",
    product: "Flat Tile — Resealed 2018",
    yearsAgo: "15 years ago",
    text: "Weatherproof installed in 2004, flat tile. Resealed in 2018. Over fifteen years of reliable protection from the same company. That's the track record that convinced me to stay with them.",
  },
  {
    name: "Dr. Lesley Kernisant",
    location: "2333 North Bay, Miami Beach FL",
    product: "Spanish Tile & Flat Deck",
    yearsAgo: "3 years ago",
    text: "Had both the Spanish tile and flat deck treated. The team was meticulous and professional. Miami Beach weather is relentless and this system has handled everything it's thrown at.",
  },
  {
    name: "Brian Bennett",
    location: "Lighthouse Point, FL",
    product: "Roof Shield — Flat Tile, Two Story",
    yearsAgo: "2.5 years ago",
    text: "Two-story flat tile roof in Lighthouse Point. The Roof Store treated the whole structure and the waterproofing has been flawless. Would recommend without hesitation.",
  },
];

const BASE = "https://www.theroofstore.net";

export default function Reviews() {
  const allReviews = [featured, ...reviews];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "The Roof Store",
      url: BASE,
      telephone: "+19542109614",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Davie",
        addressRegion: "FL",
        postalCode: "33328",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: String(allReviews.length),
        bestRating: "5",
        worstRating: "1",
      },
      review: allReviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "quote" in r ? r.quote : r.text,
        locationCreated: { "@type": "Place", name: r.location },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Reviews", item: `${BASE}/reviews` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Customer Reviews & Testimonials — The Roof Store Florida"
        description="Real testimonials from South Florida homeowners — including Don Godshall's Hurricane Wilma survival story. A+ BBB Rated since 1994. Roof Shield, Smart Shield, Fungal Shield."
        canonical="/reviews"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-white/80 mb-8">Real South Florida homeowners. Real storms. Real results.</p>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-6 py-3 rounded-full">
              <Award className="h-5 w-5 text-accent" />
              <span className="font-bold text-white">A+ BBB Rated Since 1994</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Don Godshall featured section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Featured Testimonial
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary">Hurricane Wilma Proof</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-card border rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[260px] bg-muted">
                <iframe
                  src={`https://www.youtube.com/embed/${featured.videoId}`}
                  title={`${featured.name} Testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed italic mb-6">
                  "{featured.quote}"
                </blockquote>
                <div className="border-t pt-5">
                  <div className="font-bold text-primary text-lg">{featured.name}</div>
                  <div className="text-sm text-muted-foreground">{featured.location}</div>
                  <div className="inline-block mt-2 bg-muted text-xs font-bold text-muted-foreground px-3 py-1 rounded-full uppercase tracking-wide">
                    {featured.product}
                  </div>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${featured.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-accent hover:underline"
                >
                  <Play className="h-4 w-4" />
                  Watch full testimonial video
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real customer grid */}
      <section className="py-10 pb-24 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-10">More Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-card rounded-xl p-7 shadow-sm border hover:shadow-md transition-shadow"
                data-testid={`review-card-${i}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5 italic text-sm">"{review.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.location}</div>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">{review.product}</span>
                    <span className="text-xs text-muted-foreground">{review.yearsAgo}</span>
                  </div>
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
            <div className="text-muted-foreground font-medium mb-6">Overall Rating — South Florida's Trusted Roof Coating Company</div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full font-bold">
              <Award className="h-5 w-5" />
              BBB Accredited Business — A+ Rating Since 1994
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Your Roof Could Be Next</h2>
          <p className="text-xl text-white/80 mb-10">Join 30 years of South Florida homeowners who chose to weatherproof instead of re-roof. Free consultation, no obligation.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
