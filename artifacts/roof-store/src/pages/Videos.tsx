import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Play, ShieldCheck, FileCheck } from "lucide-react";

interface VideoEntry {
  id: string;
  title: string;
  tag: string;
  icon: typeof Play;
  testimonialImage: string | null;
  customer: string | null;
  location: string | null;
  quote: string | null;
  desc: string;
  uploadDate?: string;
}

const videos: VideoEntry[] = [
  {
    id: "dYKcWoDVPns",
    title: "Don Godshall — Hurricane Wilma Survivor",
    tag: "Customer Testimonial",
    icon: Play,
    testimonialImage: "/images/godshall/godshall_series.gif",
    customer: "Don Godshall",
    location: "5651 Thornbluff Ave., Davie FL",
    quote: "During Hurricane Wilma my neighbors' tiles were hitting my house. The next morning after the storm passed we went outside to see what happened — our roof was still perfect.",
    desc: "Don Godshall faced a choice: replace the roof or seal it with Roof Shield. He chose Roof Shield. When Hurricane Wilma hit, neighbor tiles were flying across his yard. His roof didn't lose a single tile. Watch his full story.",
  },
  {
    id: "j33btx-TGXo",
    title: "TAS-106 Dade County Uplift Test",
    tag: "Certification Test",
    icon: FileCheck,
    testimonialImage: null,
    customer: null,
    location: null,
    quote: null,
    desc: "Watch the independent Dade County TAS-106 Uplift Pull Test — the only test of its kind performed on a liquid roof coating system in the world. Certified, documented, and still standing 16 years later.",
  },
];

const highlights = [
  { icon: ShieldCheck, stat: "135+ MPH", label: "Documented wind resistance — real hurricane projects" },
  { icon: FileCheck, stat: "TAS-106", label: "Only Dade County pull test rated coating worldwide" },
  { icon: Play, stat: "30 Years", label: "Of documented South Florida performance" },
];

const BASE = "https://www.theroofstore.net";

export default function Videos() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "The Roof Store Videos",
      url: `${BASE}/videos`,
      itemListElement: videos.map((v, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "VideoObject",
          name: v.title,
          description: v.desc,
          thumbnailUrl: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${v.id}`,
          uploadDate: v.uploadDate ?? "2024-01-01",
          publisher: { "@type": "Organization", name: "The Roof Store", url: BASE },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Videos", item: `${BASE}/videos` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Videos — Roof Shield System & Uplift Test | The Roof Store Florida"
        description="Watch The Roof Store's customer testimonials and the TAS-106 Dade County Uplift Test — the only pull test rated roof coating system in the world. See real hurricane performance documented on video."
        canonical="/videos"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              See It for Yourself
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">Videos</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Real customers, real tests, real results. Watch the TAS-106 Dade County uplift certification and hear from homeowners who've been through hurricane season with our systems on their roof.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {highlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                  <h.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-serif font-bold text-primary mb-1">{h.stat}</div>
                <div className="text-muted-foreground text-sm">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
              >
                <div className="lg:col-span-3">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  {video.testimonialImage && (
                    <img
                      src={video.testimonialImage}
                      alt={`${video.customer} testimonial`}
                      className="mt-4 rounded-xl w-full max-w-sm"
                    />
                  )}
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 w-fit">
                    <video.icon className="h-3.5 w-3.5" />
                    {video.tag}
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-4">{video.title}</h2>
                  {video.quote && (
                    <blockquote className="text-foreground italic leading-relaxed mb-4 border-l-4 border-accent pl-4">
                      "{video.quote}"
                    </blockquote>
                  )}
                  <p className="text-muted-foreground leading-relaxed mb-3">{video.desc}</p>
                  {video.customer && (
                    <div className="text-sm font-bold text-primary">{video.customer}</div>
                  )}
                  {video.location && (
                    <div className="text-xs text-muted-foreground">{video.location}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Want to See It in Person?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Schedule a free roof inspection and we'll walk you through exactly what we do — no sales pressure, just an honest evaluation of your roof and what it needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Free Inspection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg">
              <a href="/docs/tas-106-uplift-test.pdf" target="_blank" rel="noopener noreferrer">
                Download Uplift Test PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-5">Ready to Protect Your Roof?</h2>
          <p className="text-xl text-white/75 mb-8">
            The same system you just saw tested and certified — available for your roof today.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
