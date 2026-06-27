import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Shield, Users, Clock, CheckCircle2, Star, Factory, Hammer, ShoppingCart, UserCheck } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

export default function About() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About The Roof Store",
      url: `${BASE}/about`,
      description: "Nearly 30 years protecting Florida homes. The Roof Store — pioneers of the liquid rubber roof shield system. A+ BBB rated since 1994.",
      mainEntity: {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        name: "The Roof Store",
        url: BASE,
        telephone: "+19542109614",
        email: "theroofstore@gmail.com",
        foundingDate: "1994",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Davie",
          addressRegion: "FL",
          postalCode: "33314",
          addressCountry: "US",
        },
        description: "The Roof Store is a Florida-licensed roofing manufacturer and contractor. We manufacture FungalShield, SmartShield, and RoofShield — proprietary rubber roof coating systems — at our Davie, FL facility and apply them ourselves.",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
        areaServed: ["Broward County, FL", "Miami-Dade County, FL", "Palm Beach County, FL"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE}/about` },
      ],
    },
  ];
  return (
    <div className="w-full">
      <SEO
        title="About Us — The Roof Store"
        description="Nearly 30 years protecting Florida homes. The Roof Store — pioneers of the liquid rubber roof shield system. A+ BBB rated since 1994."
        canonical="/about"
        schema={schema}
        geo={{ region: "US-FL", placename: "Davie, FL" }}
      />
      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-5xl font-serif font-bold mb-6">About The Roof Store</h1>
            <p className="text-xl text-white/80">Nearly 30 years of protecting Florida homes from the elements.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Welcome to Theroofstore.net. For nearly 30 years, The Roof Store has operated as Florida's only licensed roofing <strong className="text-foreground">manufacturer and contractor</strong> — we formulate and produce our own coatings in Davie, Florida, and install them with our own licensed crew. No middlemen. No third-party products. Straight from our factory to your roof.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                The Roof Store (Contracting &amp; Product Installation Division) is A+ BBB Rated since 1994. Our team of certified professionals has protected thousands of Florida homes from hurricanes, tropical storms, and the relentless Florida sun. We also sell our products direct — you can buy them online and apply them yourself, or use any licensed installer you choose.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We pioneered the liquid-applied rubber roof shield system and hold the world's only independent Dade County <strong className="text-foreground">TAS-106 Uplift Pull Test certification</strong> for a liquid roof coating — tested on real Spanish tile roofs. This means our RoofShield system delivers provable tile attachment strength that withstands real hurricane-force winds and water damage without exception. Our systems work equally well on <strong className="text-foreground">flat roofs, cement tile, shingle, barrel tile, S-tile, metal, gravel, and foam</strong> — any Florida roof type.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white" size="lg">
                <Link href="/contact">Schedule Your Free Consultation</Link>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Clock, label: "Years in Business", value: "30+" },
                  { icon: Award, label: "BBB Rating", value: "A+" },
                  { icon: Shield, label: "Homes Protected", value: "10,000+" },
                  { icon: Users, label: "Satisfied Customers", value: "5,000+" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-muted rounded-xl p-8 text-center"
                  >
                    <stat.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg">We don't just sell products — we deliver peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Guaranteed Performance",
                desc: "Our products are guaranteed to perform under unusual and severe weather conditions, including hurricane force winds and torrential Florida rains.",
              },
              {
                icon: Star,
                title: "Pioneer of the Industry",
                desc: "We invented 'THE ORIGINAL LIQUID APPLIED RUBBER ROOF SHIELD SYSTEM' — and have been refining it for three decades.",
              },
              {
                icon: CheckCircle2,
                title: "Save Up to 50%",
                desc: "Our restoration and weatherproofing systems can save homeowners up to half the cost of a full roof replacement without compromising protection.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-sm border"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer + Contractor + Three Paths */}
      <section className="py-24 bg-background border-y">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <Factory className="h-3.5 w-3.5" />
              Manufacturer · Contractor · Direct Seller
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Three Ways to Work With Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Because we make our own products and run our own installation crews, you're never boxed into a single option. Pick whichever path fits your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Hammer,
                step: "Option 1",
                title: "Hire Us — Full Installation",
                desc: "Our licensed crew handles everything end-to-end: roof inspection, surface prep, full product application, and warranty documentation. This is the path we guarantee.",
                cta: "Get a Free Quote",
                href: "/contact",
                dark: true,
              },
              {
                Icon: ShoppingCart,
                step: "Option 2",
                title: "Buy Direct — Apply Yourself",
                desc: "Order RP1, RP2, or RP3 directly from roofprotectproducts.com and apply it yourself. Our team is available by phone at 954-210-9614 to guide you through the application at no charge.",
                cta: "Buy Online",
                href: "/shop",
                dark: false,
              },
              {
                Icon: UserCheck,
                step: "Option 3",
                title: "Buy & Use Your Own Installer",
                desc: "Purchase our products and use any licensed roofing contractor you prefer. We supply the product, the technical data sheets, and phone support to ensure it's applied correctly.",
                cta: "Browse Products",
                href: "/products",
                dark: false,
              },
            ].map(({ Icon, step, title, desc, cta, href, dark }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 border-2 flex flex-col ${dark ? "bg-primary text-white border-primary" : "bg-card border-border"}`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-5 ${dark ? "bg-accent text-white" : "bg-muted text-muted-foreground"}`}>{step}</div>
                <Icon className="h-7 w-7 text-accent mb-4" />
                <h3 className={`text-lg font-serif font-bold mb-3 ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${dark ? "text-white/80" : "text-muted-foreground"}`}>{desc}</p>
                <Button asChild size="sm" className={dark ? "bg-accent hover:bg-accent/90 text-white" : "bg-primary hover:bg-primary/90 text-white"}>
                  <Link href={href}>{cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Protect Your Home?</h2>
          <p className="text-xl text-white/80 mb-10">Don't wait for the next hurricane season. Schedule a free consultation with our experts today.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
            <Link href="/contact">Call 954-210-9614</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
