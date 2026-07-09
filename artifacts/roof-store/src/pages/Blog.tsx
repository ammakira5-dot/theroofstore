import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const posts = [
  {
    title: "Roof Coating Can Save Your Home and Insurance Policy in Florida",
    slug: "roof-coating-can-save-your-home-and-insurance-policy-in-florida",
    url: "https://www.theroofstore.net/blog/roof-coating-can-save-your-home-and-insurance-policy-in-florida/",
    image: "/images/blog/post-1.png",
    date: "September 2024",
    tag: "Insurance & Roof Coating",
    excerpt:
      "There's a dangerous piece of misinformation spreading from insurance agents: \"If you seal or paint your roof, you'll lose your insurance.\" The reality? Florida's Governor issued a bulletin in March 2023 restating homeowners' legal right to an Additional Roof Life Certification — an affidavit that supersedes all insurance agent opinions and fully protects your coverage.",
    body: [
      "Florida insurance agents have been telling homeowners for years that sealing or painting a roof will void their coverage. This is not true — and in March 2023, Florida's Governor issued an official bulletin to all insurance carriers explicitly restating that homeowners have a legal right to obtain an Additional Roof Life Certification. That certification, signed by a licensed contractor or engineer, legally supersedes any age-based or condition-based denial from an insurance company employee.",
      "The confusion stems from insurers trying to force roof replacements on older roofs — often tile roofs 10 to 20 years old — even when those roofs are structurally sound and watertight. A professional roof coating system, applied by a licensed contractor, restores the roof's waterproofing, fills gaps and seams, and provides documented evidence of the roof's continued serviceability. That documentation is exactly what the Additional Roof Life Certification captures.",
      "For South Florida homeowners facing Citizens Insurance or private carrier pressure, a properly documented roof coating is often the most cost-effective path to maintaining coverage. The average tile roof replacement in Broward or Miami-Dade runs $25,000–$50,000. A professional coating system from The Roof Store typically costs a fraction of that — and comes with a written lifetime warranty that satisfies insurer requirements. The key is working with a licensed contractor who can provide the certification alongside the installation.",
    ],
  },
  {
    title: "New Florida Homeowners Insurance Laws",
    slug: "new-florida-homeowners-insurance-laws",
    url: "https://www.theroofstore.net/blog/new-florida-homeowners-insurance-laws/",
    image: "/images/blog/post-2.png",
    date: "September 2024",
    tag: "Florida Insurance Law",
    excerpt:
      "Only licensed contractors, engineers, and roof mitigation specialists — not insurance company employees — have the legal authority to assess your roof's condition. Insurance agents stomping around on your roof cannot legally deny your coverage. Here's what the new Florida laws actually say about who has the final word on your roof.",
    body: [
      "Florida law is explicit: only a licensed roofing contractor, professional engineer, or roof mitigation specialist has the legal standing to assess the condition of your roof and determine its remaining useful life. An insurance company's adjuster or field agent can document what they observe, but they cannot unilaterally declare a roof non-compliant if a licensed professional has certified otherwise. This distinction matters enormously for homeowners facing non-renewal threats.",
      "Senate Bill 2-D, passed in 2022, introduced major reforms to Florida's property insurance market. One of the most important provisions for homeowners with older roofs: insurers can no longer automatically require replacement of a roof that has 25% or more of its life remaining — as determined by a licensed professional assessment, not an insurance company's internal estimate. For cement tile and Spanish tile roofs, which commonly last 40–50+ years, this protection is particularly significant.",
      "The practical implication: before accepting an insurance company's demand for a full roof replacement, get a licensed contractor's written assessment. If that assessment documents serviceable condition and certifies additional roof life, Florida law gives that certification legal weight over the insurer's position. Storm Shield Paint Systems Inc. — The Roof Store — provides this certification as part of our professional coating services for qualifying roofs throughout Broward, Miami-Dade, and Palm Beach Counties.",
    ],
  },
  {
    title: "Citizens Insurance for Older Tile Roofs in Florida",
    slug: "citizens-insurance-for-older-tile-roofs-in-florida",
    url: "https://www.theroofstore.net/blog/citizens-insurance-for-older-tile-roofs-in-florida/",
    image: "/images/blog/post-3.png",
    date: "September 2024",
    tag: "Citizens Insurance",
    excerpt:
      "Citizens Insurance has specific rules about older tile roofs — but they changed in 2023 in favor of homeowners. If your cement tile or Spanish tile roof is cleaned, repaired, and professionally sealed, it can qualify for continued coverage under Senate Bill 2-D. We explain exactly what the new Citizens roof rules mean for South Florida homeowners.",
    body: [
      "Citizens Property Insurance Corporation — Florida's insurer of last resort — has historically been aggressive about requiring roof replacements on older homes. Prior to the 2022–2023 legislative reforms, Citizens could decline to renew policies on homes with roofs over 25 years old, regardless of actual condition. That blanket age-based policy has been significantly constrained by Senate Bill 2-D and subsequent regulatory guidance.",
      "Under the current framework, Citizens must give weight to a professional inspection and written certification of a roof's remaining useful life. For cement tile roofs and Spanish tile roofs — which are the dominant roof type in South Florida — the material itself is extremely durable. Tile roofs regularly last 50+ years when properly maintained and coated. The issue is rarely the tile itself; it's the underlying waterproofing and sealing that degrades over time. A professional liquid-applied coating system restores that waterproofing and can extend the certifiable life of the roof by 15–25 years.",
      "Homeowners facing Citizens non-renewal over roof age should take the following steps: (1) get a licensed contractor's written inspection confirming the roof is structurally sound; (2) have the roof professionally pressure-cleaned; (3) apply a certified coating system such as Smart Shield (RP2) or Roof Shield (RP3); (4) obtain an Additional Roof Life Certification from the licensed contractor. This documented package — inspection, coating, and certification — is the strongest possible response to a Citizens non-renewal notice. Call us at 954-210-9614 to discuss your specific situation.",
    ],
  },
  {
    title: "Additional Roof Life Certification: Benefits & Meaning",
    slug: "additional-roof-life-certification-benefits-meaning",
    url: "https://www.theroofstore.net/blog/additional-roof-life-certification-benefits-meaning/",
    image: "/images/blog/post-4.png",
    date: "August 2024",
    tag: "Roof Certification",
    excerpt:
      "An Additional Roof Life Certification is a comprehensive professional assessment that documents how many more years your existing roof can provide sufficient protection. In Florida, this affidavit legally supersedes an insurance company's age-based denial — and can save you tens of thousands versus a forced replacement. Here's what it covers and how to get one.",
    body: [
      "An Additional Roof Life Certification (also called a Roof Condition Certification or Roof Life Extension Affidavit) is a signed, written document prepared by a licensed roofing contractor or professional engineer that states the roof has been professionally inspected, treated, and is expected to remain serviceable for a specified number of additional years. In Florida, this certification carries legal weight — it gives homeowners a documented professional opinion that insurers must consider alongside their own assessments.",
      "The certification typically documents: the current condition of the roof substrate (decking, underlayment, and tiles or membrane); any repairs completed prior to or during the certification; the coating system applied and its specifications; and the licensed professional's opinion on the roof's remaining useful life. For a tile roof that receives a full Roof Shield (RP3) or Smart Shield (RP2) treatment, the certification may state 15–25 additional years of serviceability — a timeframe that completely satisfies Citizens and most private insurer requirements.",
      "The financial math is straightforward: a professional coating and certification from The Roof Store costs significantly less than a full roof replacement — often by $20,000 to $40,000 — while delivering the same insurance compliance outcome. And unlike a replacement, the coating preserves the original tile (which is often the most valuable part of a South Florida home's roof system). The certification is valid with all major Florida insurers and can be presented at any time — during renewal, following a non-renewal notice, or proactively before any issue arises. Call 954-210-9614 to schedule your assessment.",
    ],
  },
];

const faqs = [
  {
    q: "Can I seal or paint my roof and still keep my Florida homeowners insurance?",
    a: "Yes. Florida law explicitly protects homeowners who choose to coat or seal their roofs. The Governor's March 2023 bulletin to all insurers restated that an Additional Roof Life Certification — signed by a licensed contractor — legally supersedes any insurance agent's age-based or condition-based denial. Coating your roof does not void your insurance. In fact, a properly documented professional coating often strengthens your coverage position by providing written certification of the roof's continued serviceability.",
  },
  {
    q: "What is an Additional Roof Life Certification and how do I get one?",
    a: "An Additional Roof Life Certification is a signed affidavit from a licensed roofing contractor or professional engineer documenting that your roof has been professionally inspected, repaired as needed, and treated — and is expected to remain serviceable for a stated number of additional years. To get one, you need a licensed contractor to inspect and coat your roof, then issue the written certification. The Roof Store provides this certification as part of our Roof Shield (RP3) and Smart Shield (RP2) coating services for qualifying roofs. Call 954-210-9614 to schedule your assessment.",
  },
  {
    q: "Does Citizens Insurance accept a roof coating in place of a full replacement?",
    a: "Yes, under Senate Bill 2-D and subsequent regulatory guidance, Citizens must give legal weight to a licensed professional's written certification of a roof's remaining useful life. If a licensed contractor inspects your roof, applies an approved coating system, and certifies that the roof has 15+ additional years of serviceable life, Citizens cannot automatically deny that certification. The process must be documented correctly — inspection report, coating application with licensed contractor's sign-off, and written certification — but when done properly, it is a legally recognized alternative to full replacement.",
  },
  {
    q: "How long does a professional roof coating last in South Florida?",
    a: "Professional liquid-applied roof coating systems applied by licensed contractors typically last 15–25 years in South Florida's climate, depending on the product system and roof type. Roof Shield (RP3), our TAS-106 Dade County rated system, carries a lifetime warranty when professionally installed. Smart Shield (RP2), our elastomeric tile roof coating, is warranted for the life of the roof under normal conditions. South Florida's UV exposure, heat, and hurricane-season rainfall are factored into the formulation of both systems — they're manufactured specifically for this climate.",
  },
  {
    q: "Who is legally qualified to assess my roof's condition in Florida?",
    a: "Only a Florida-licensed roofing contractor, professional engineer (PE), or certified roof mitigation specialist has the legal standing to assess your roof's condition and issue a binding written certification. An insurance company's adjuster or field agent can document their observations, but they cannot override a licensed professional's written certification of a roof's remaining useful life. This distinction is established by Florida statute and was reinforced by the 2022–2023 insurance reform legislation.",
  },
  {
    q: "Can an insurance company force me to replace my roof in Florida?",
    a: "Not if a licensed professional has certified otherwise. Senate Bill 2-D (2022) and the Governor's 2023 insurance bulletin significantly constrained insurers' ability to mandate replacement of roofs that a licensed professional has certified as having remaining useful life. If your roof is structurally sound and a licensed contractor has professionally treated and certified it, Florida law gives that certification legal weight. Insurers can still non-renew policies for other reasons, but roof age alone — when countered by a proper certification — is no longer sufficient grounds for a forced replacement mandate.",
  },
  {
    q: "What's the difference between a roof coating and a roof replacement?",
    a: "A roof replacement removes all existing materials down to the decking and installs a completely new roof system — tile, membrane, underlayment, and all. It costs $25,000–$60,000+ in South Florida and disrupts the home for days or weeks. A professional roof coating system applies liquid-applied waterproofing layers over the existing roof — sealing all gaps, voids, and seams — without removing the existing materials. It costs a fraction of replacement, is completed in 1–3 days, and when done with a certified system like Roof Shield (RP3), delivers the same waterproofing protection with a lifetime warranty. For structurally sound roofs, coating is almost always the superior financial choice.",
  },
  {
    q: "Does roof coating help with Florida's hurricane wind and water requirements?",
    a: "Yes — especially Roof Shield (RP3), which is TAS-106 Dade County rated, the highest hurricane-resistance certification available in Florida. TAS-106 rating means the system has been independently tested to withstand hurricane-force wind uplift and wind-driven rain intrusion. The Roof Shield system fills every gap and void between tiles with multiple layers of liquid-applied material, making the roof essentially monolithic — a single continuous waterproof surface with no spaces for wind or water to penetrate. This is the only liquid-applied system of its kind with this specific Dade County certification.",
  },
  {
    q: "How do I know if my tile roof qualifies for coating instead of replacement?",
    a: "Most tile roofs in South Florida qualify for coating if the tile itself is intact (not more than 15–20% broken or missing), the decking is sound (no widespread rot or structural damage), and there are no active major leaks that have caused interior structural damage. A professional inspection will confirm this. In our experience — over 30 years and thousands of South Florida roofs — the majority of tile roofs that insurance companies pressure homeowners to replace are actually excellent candidates for coating. Call 954-210-9614 for a free assessment and honest opinion on your specific roof.",
  },
  {
    q: "Can a roof coating help me avoid losing my Citizens Insurance policy?",
    a: "In many cases, yes. Citizens has non-renewed thousands of policies over roof age — particularly tile roofs over 25 years old. If your roof is structurally sound, a professional coating system combined with an Additional Roof Life Certification provides the documented evidence Citizens needs to continue coverage. The key is acting before your renewal date, not after receiving a non-renewal notice (though a coating and certification can also be used to respond to a notice). The Roof Store has helped hundreds of South Florida homeowners use this approach to retain their Citizens coverage. Call us at 954-210-9614 to discuss your timeline.",
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 bg-card hover:bg-muted/50 transition-colors"
      >
        <span className="font-serif font-bold text-primary leading-snug">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-accent shrink-0 mt-0.5" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />}
      </button>
      {open && (
        <div className="px-6 py-5 bg-card border-t text-muted-foreground leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  );
}

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
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
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
        description="Expert articles on Florida roof coating, homeowners insurance laws, Citizens Insurance, hurricane protection, and Additional Roof Life Certification. The Roof Store — Davie, FL — 954-210-9614."
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

            <div className="lg:col-span-2 space-y-12">
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
                    <p className="text-muted-foreground leading-relaxed text-sm mb-5 font-medium">
                      {post.excerpt}
                    </p>
                    <div className="space-y-3 mb-6">
                      {post.body.map((para, j) => (
                        <p key={j} className="text-muted-foreground leading-relaxed text-sm">
                          {para}
                        </p>
                      ))}
                    </div>
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

      <section className="py-24 bg-muted">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Florida Roof Coating & Insurance — Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answers to the most common questions South Florida homeowners ask about roof coatings, Citizens Insurance, and the Additional Roof Life Certification — from 30 years of hands-on experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
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
