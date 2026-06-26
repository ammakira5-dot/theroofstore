import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { SEO } from "@/components/SEO";

const posts = [
  {
    title: "Roof Coating Can Save Your Home and Insurance Policy in Florida",
    slug: "roof-coating-can-save-your-home-and-insurance-policy-in-florida",
    url: "https://theroofstore.net/blog/roof-coating-can-save-your-home-and-insurance-policy-in-florida/",
    image: "https://theroofstore.net/blog/wp-content/uploads/2024/09/Before-and-After-Image-Youtube-Thumbnail-1-1024x576.jpg",
    date: "September 2024",
    tag: "Insurance & Roof Coating",
    excerpt:
      "There's a dangerous piece of misinformation spreading from insurance agents: \"If you seal or paint your roof, you'll lose your insurance.\" The reality? Florida's Governor issued a bulletin in March 2023 restating homeowners' legal right to an Additional Roof Life Certification — an affidavit that supersedes all insurance agent opinions and fully protects your coverage.",
  },
  {
    title: "New Florida Homeowners Insurance Laws",
    slug: "new-florida-homeowners-insurance-laws",
    url: "https://theroofstore.net/blog/new-florida-homeowners-insurance-laws/",
    image: "https://theroofstore.net/blog/wp-content/uploads/2024/09/Before-and-After-Image-Youtube-Thumbnail-1024x576.jpg",
    date: "September 2024",
    tag: "Florida Insurance Law",
    excerpt:
      "Only licensed contractors, engineers, and roof mitigation specialists — not insurance company employees — have the legal authority to assess your roof's condition. Insurance agents stomping around on your roof cannot legally deny your coverage. Here's what the new Florida laws actually say about who has the final word on your roof.",
  },
  {
    title: "Citizens Insurance for Older Tile Roofs in Florida",
    slug: "citizens-insurance-for-older-tile-roofs-in-florida",
    url: "https://theroofstore.net/blog/citizens-insurance-for-older-tile-roofs-in-florida/",
    image: "https://theroofstore.net/blog/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-22.52.19_c1160259-1.jpg",
    date: "September 2024",
    tag: "Citizens Insurance",
    excerpt:
      "Citizens Insurance has specific rules about older tile roofs — but they changed in 2023 in favor of homeowners. If your cement tile or Spanish tile roof is cleaned, repaired, and professionally sealed, it can qualify for continued coverage under Senate Bill 2-D. We explain exactly what the new Citizens roof rules mean for South Florida homeowners.",
  },
  {
    title: "Additional Roof Life Certification: Benefits & Meaning",
    slug: "additional-roof-life-certification-benefits-meaning",
    url: "https://theroofstore.net/blog/additional-roof-life-certification-benefits-meaning/",
    image: "https://theroofstore.net/blog/wp-content/uploads/2024/08/Additional-Roof-Life-Certification-Benefits-Meaning-2.jpg",
    date: "August 2024",
    tag: "Roof Certification",
    excerpt:
      "An Additional Roof Life Certification is a comprehensive professional assessment that documents how many more years your existing roof can provide sufficient protection. In Florida, this affidavit legally supersedes an insurance company's age-based denial — and can save you tens of thousands versus a forced replacement. Here's what it covers and how to get one.",
  },
];

const topics = [
  "Florida Insurance Laws",
  "Roof Coating Benefits",
  "Hurricane Protection",
  "Citizens Insurance",
  "Additional Roof Life Certification",
  "Tile Roof Maintenance",
  "Commercial Flat Roofs",
  "Energy Savings",
];

const BASE = "https://www.theroofstore.net";

export default function Blog() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "The Roof Store Blog",
      url: `${BASE}/blog`,
      description: "Expert articles on Florida roof coating, homeowners insurance laws, hurricane protection, and roof life certification.",
      publisher: {
        "@type": "Organization",
        name: "The Roof Store",
        url: BASE,
        logo: { "@type": "ImageObject", url: `${BASE}/assets/images/logo.png` },
      },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: p.url,
        datePublished: p.date,
        description: p.excerpt,
        author: { "@type": "Organization", name: "The Roof Store" },
        publisher: { "@type": "Organization", name: "The Roof Store", url: BASE },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Blog — Roof Coating, Florida Insurance Laws & Storm Protection | The Roof Store"
        description="Expert articles on Florida roof coating, homeowners insurance laws, hurricane protection, and Additional Roof Life Certification. The Roof Store — Davie, FL — 954-210-9614."
        canonical="/blog"
        schema={schema}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              Roofing Knowledge Base
            </div>
            <h1 className="text-5xl font-serif font-bold mb-6">The Roof Store Blog</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Florida roof coating, insurance law updates, hurricane protection, and maintenance guides — straight from 30 years of South Florida roofing experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-10">
              {posts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-video object-cover"
                    />
                  </a>
                  <div className="p-7">
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        <Tag className="h-3 w-3" />
                        {post.tag}
                      </div>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary mb-3 leading-snug">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                      {post.excerpt}
                    </p>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                    >
                      Read full article
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <aside className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary text-white rounded-2xl p-7"
              >
                <h3 className="font-serif font-bold text-lg mb-3">Free Roof Consultation</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Have a question about your roof, your insurance, or whether coating is right for you? Call us — no sales pressure, just honest answers from 30 years of experience.
                </p>
                <div className="space-y-3">
                  <Button asChild size="sm" className="w-full bg-accent hover:bg-accent/90 text-white">
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                  <a
                    href="tel:9542109614"
                    className="flex items-center justify-center gap-2 w-full border border-white/30 text-white text-sm font-bold py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Call 954-210-9614
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card border rounded-2xl p-7"
              >
                <h3 className="font-serif font-bold text-lg text-primary mb-4">Topics Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t, i) => (
                    <span key={i} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-accent/10 border border-accent/20 rounded-2xl p-7"
              >
                <h3 className="font-serif font-bold text-lg text-primary mb-3">Additional Roof Life Certification</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Florida law gives homeowners the right to a certified roof assessment that legally overrides insurance company age-based denials. We provide this certification.
                </p>
                <Link
                  href="/roof-services"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border rounded-2xl p-7"
              >
                <h3 className="font-serif font-bold text-lg text-primary mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Our Products", href: "/products" },
                    { label: "Before & After Projects", href: "/projects" },
                    { label: "Customer Reviews", href: "/reviews" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Factory Tour", href: "/factory" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">More Articles on the Full Blog</h2>
          <p className="text-muted-foreground mb-8">
            The complete blog is hosted at theroofstore.net/blog with additional articles, updates, and resources.
          </p>
          <Button asChild size="lg" variant="outline" className="h-12 px-8">
            <a href="https://theroofstore.net/blog/" target="_blank" rel="noopener noreferrer">
              Visit Full Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Have a Roofing Question?</h2>
          <p className="text-xl text-white/80 mb-10">
            30 years of South Florida experience. Free consultation. Honest answers about your roof — no sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              <a href="tel:9542109614">Call 954-210-9614</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
