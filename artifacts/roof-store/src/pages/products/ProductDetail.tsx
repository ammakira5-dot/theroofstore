import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { CheckCircle2, ArrowRight, Phone, ShoppingCart, ExternalLink, Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LocalQuoteForm } from "@/components/LocalQuoteForm";

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  icon: LucideIcon;
  accentColor: string;
  badgeColor: string;
  seoTitle: string;
  seoDescription: string;
  heroDesc: string;
  heroImage?: string;
  heroImageAlt?: string;
  overview: string[];
  features: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  applications: string[];
  faq: { q: string; a: string }[];
  relatedProducts: { name: string; href: string; desc: string; icon: LucideIcon }[];
  shopUrl?: string;
  price?: string;
  shopAvailable?: boolean;
  sku?: string;
  mpn?: string;
  productImage?: string;
  pdfUrl?: string;
  pdfLabel?: string;
  certificationUrl?: string;
  certificationLabel?: string;
  beforeAfterImages?: { before: string; beforeAlt: string; after: string; afterAlt: string; label: string }[];
  galleryImages?: { src: string; alt: string; caption: string }[];
}

const BASE = "https://www.theroofstore.net";

export function ProductDetail({ product }: { product: ProductData }) {
  const Icon = product.icon;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gallery = product.galleryImages ?? [];
  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % gallery.length : null));

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.seoDescription,
      image: product.productImage ?? product.heroImage,
      url: `${BASE}/products/${product.slug}`,
      ...(product.sku ? { sku: product.sku } : {}),
      ...(product.mpn ? { mpn: product.mpn } : {}),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "9",
        bestRating: "5",
        worstRating: "1",
      },
      brand: { "@type": "Brand", name: "RoofProtect" },
      manufacturer: {
        "@type": "Organization",
        name: "RoofProtect",
        url: "https://www.roofprotectproducts.com",
        address: { "@type": "PostalAddress", addressLocality: "Davie", addressRegion: "FL", postalCode: "33328", addressCountry: "US" },
      },
      ...(product.price
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: product.price.replace(/[^0-9.]/g, ""),
              availability: "https://schema.org/InStock",
              url: product.shopAvailable !== false && product.shopUrl
                ? product.shopUrl
                : `${BASE}/products/${product.slug}`,
              seller: { "@type": "Organization", name: "The Roof Store", url: BASE },
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE}/products` },
        { "@type": "ListItem", position: 3, name: product.name, item: `${BASE}/products/${product.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: product.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title={product.seoTitle}
        description={product.seoDescription}
        canonical={`/products/${product.slug}`}
        ogImage={product.productImage ?? product.heroImage}
        schema={schema}
      />

      <section className="relative bg-primary text-white overflow-hidden">
        {product.heroImage && (
          <div className="absolute inset-0">
            <img src={product.heroImage} alt={product.heroImageAlt ?? `${product.name} roof coating system — The Roof Store Florida`} title={`${product.name} Roof Coating System — The Roof Store`} className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          </div>
        )}
        <div className="relative container px-4 max-w-5xl mx-auto py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </nav>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 ${product.badgeColor}`}>
              <Icon className="h-3.5 w-3.5" />
              {product.category}
            </div>
            <h1 className="text-6xl font-serif font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-white/75 font-light mb-8 max-w-2xl">{product.tagline}</p>
            <div className="flex flex-wrap gap-4">
              {product.shopUrl && product.shopAvailable !== false ? (
                <a href={product.shopUrl} target="_blank" rel="nofollow noopener noreferrer">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white h-12 px-8">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Online{product.price ? ` — ${product.price}` : ""}
                    <ExternalLink className="h-3.5 w-3.5 ml-2 opacity-70" />
                  </Button>
                </a>
              ) : (
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-12 px-8">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              )}
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
                <a href="tel:954-210-9614">
                  <Phone className="h-4 w-4 mr-2" />
                  954-210-9614
                </a>
              </Button>
              {product.shopUrl && product.shopAvailable !== false && (
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              )}
              {product.pdfUrl && (
                <a href={product.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-8">
                    <Download className="h-4 w-4 mr-2" />
                    {product.pdfLabel ?? "Product Sheet (PDF)"}
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Overview</h2>
                {product.overview.map((p, i) => (
                  <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">{p}</p>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Technical Specifications</h2>
                <div className="border rounded-xl overflow-hidden">
                  {product.specs.map((s, i) => (
                    <div key={i} className={`grid grid-cols-2 px-6 py-3 ${i % 2 === 0 ? "bg-muted" : "bg-background"}`}>
                      <span className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">{s.label}</span>
                      <span className="text-foreground text-sm font-medium">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.pdfUrl && (
                    <a href={product.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        {product.pdfLabel ?? "Product Tech Sheet (PDF)"}
                      </Button>
                    </a>
                  )}
                </div>
                {product.certificationUrl && (
                  <Link href={product.certificationUrl} className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-300 rounded-xl p-4 hover:bg-amber-100 transition-colors group">
                    <div className="text-2xl leading-none mt-0.5">🏅</div>
                    <div>
                      <div className="font-bold text-amber-900 text-sm">{product.certificationLabel ?? "View Full Certification Reference"}</div>
                      <div className="text-xs text-amber-700 mt-0.5 flex items-center gap-1 group-hover:underline">
                        {product.certificationUrl} <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>

              {product.beforeAfterImages && product.beforeAfterImages.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="mb-4">
                    <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                      See the Transformation
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-2">Before &amp; After</h2>
                    <p className="text-muted-foreground">
                      Each pair shows the same roof section — before the system fills the tile gaps, and after the monolithic seal is complete.
                    </p>
                  </div>
                  <div className="space-y-8">
                    {product.beforeAfterImages.map((pair, i) => (
                      <div key={i}>
                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">{pair.label}</div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="relative rounded-xl overflow-hidden border shadow-sm">
                            <img src={pair.before} alt={pair.beforeAlt} className="w-full h-52 object-cover" />
                            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
                              Before
                            </div>
                          </div>
                          <div className="relative rounded-xl overflow-hidden border shadow-sm">
                            <img src={pair.after} alt={pair.afterAlt} className="w-full h-52 object-cover" />
                            <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow">
                              After
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {gallery.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2">See It In Action</h2>
                  <p className="text-muted-foreground mb-6">Real installations and our manufacturing process — straight from our team in Davie, FL.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="group relative rounded-xl overflow-hidden border shadow-sm bg-muted text-left focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label={`View full size: ${img.caption}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="px-3 py-2">
                          <p className="text-xs text-muted-foreground leading-snug">{img.caption}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <p className="text-sm text-muted-foreground">
                Every {product.name} installation begins with professional pressure cleaning and surface preparation — explore our full range of{" "}
                <Link href="/roof-services" className="text-accent font-semibold hover:underline">roof coating and restoration services</Link>.
              </p>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-muted rounded-xl">
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">{f.title}</div>
                        <div className="text-muted-foreground text-sm leading-relaxed">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((a, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="text-foreground">{a}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-5">
                  {product.faq.map((item, i) => (
                    <div key={i} className="border-b pb-5 last:border-0">
                      <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-serif font-bold mb-1">Get a Free Quote</h3>
                <p className="text-white/60 text-xs mb-5">
                  Ask about {product.name} for your roof — no cost, no obligation.
                </p>
                <LocalQuoteForm location={product.name} source="product-page-form" />
              </div>

              <div className="bg-muted rounded-xl p-6">
                <div className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Manufactured By</div>
                <div className="font-bold text-primary mb-1">RoofProtect</div>
                <div className="text-sm text-muted-foreground mb-4">Made in South Florida since 1994 — available exclusively through The Roof Store</div>
                <Link href="/factory" className="text-sm text-accent font-semibold flex items-center gap-1 hover:underline">
                  See our factory <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.relatedProducts.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="container px-4">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-10">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {product.relatedProducts.map((p, i) => (
                <Link key={i} href={p.href} className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group block">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">{p.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-5">Ready to Protect Your Roof?</h2>
          <p className="text-xl text-white/75 mb-8">Our certified technicians will inspect your roof and recommend the right system — at no cost.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Schedule Free Inspection</Link>
          </Button>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="max-w-4xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightboxIndex].src}
              alt={gallery[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/80 text-center mt-3 text-sm">{gallery[lightboxIndex].caption}</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
}
