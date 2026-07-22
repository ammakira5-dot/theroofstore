import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Tag, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const BASE = "https://www.theroofstore.net";

interface BlogPostRouteProps {
  params: { slug: string };
}

export function BlogPostPage({ params }: BlogPostRouteProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-accent font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: `${BASE}${post.image}`,
      url: post.url,
      datePublished: post.dateISO,
      dateModified: post.dateISO,
      author: {
        "@type": "Organization",
        name: "The Roof Store",
        url: BASE,
      },
      publisher: {
        "@type": "Organization",
        name: "The Roof Store — Storm Shield Paint Systems Inc.",
        url: BASE,
        logo: {
          "@type": "ImageObject",
          url: `${BASE}/assets/images/logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": post.url,
      },
      articleBody: post.body.join(" "),
      keywords: post.keywords.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: post.url },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title={`${post.title} | The Roof Store`}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        schema={schema}
      />

      <section className="bg-primary text-white py-20">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-5 flex-wrap">
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-accent bg-accent/20 px-3 py-1 rounded-full">
                <Tag className="h-3 w-3" />
                {post.tag}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-snug">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden mb-10 shadow-md">
              <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full aspect-video object-cover"
              />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-medium border-l-4 border-accent pl-5">
              {post.excerpt}
            </p>

            <div className="space-y-6">
              {post.body.map((para, i) => (
                <p key={i} className="text-foreground leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-3xl mx-auto">
          <div className="bg-primary text-white rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="h-7 w-7 text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-bold mb-2">Ready to Protect Your Roof?</h2>
              <p className="text-white/80 leading-relaxed mb-5">
                Get a free onsite inspection from our licensed team. We'll assess your roof honestly and tell you whether coating, restoration, or certification is the right move — no pressure, no upsell.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">Schedule Free Inspection</Link>
                </Button>
                <a
                  href="tel:9542109614"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
                >
                  Call 954-210-9614
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm">
              <ArrowLeft className="h-4 w-4" />
              Back to All Articles
            </Link>
            <Link href="/roof-life-certification" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              Learn about Roof Life Certification →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
