import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, MapPin, Phone, ShieldCheck, ArrowRight, BadgeCheck, DollarSign, FileText, Scale } from "lucide-react";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Authorized Distributor & Licensed Installers Network — The Roof Store Waterproofing Products",
  url: `${BASE}/partner-network`,
  description:
    "The Roof Store Waterproofing Products maintains an authorized network of licensed partners serving South Florida. Each installer partner is factory-trained in our proprietary coating systems, authorized to sell and install them, and serves a defined territory; Roof Protect Products, our manufacturing and supply division, supplies product only and does not perform installations.",
  provider: {
    "@type": "Organization",
    name: "The Roof Store Waterproofing Products",
    url: BASE,
    telephone: "+19542109614",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4801 S University Dr",
      addressLocality: "Davie",
      addressRegion: "FL",
      postalCode: "33328",
      addressCountry: "US",
    },
    member: [
      { "@type": "Organization", name: "Windproof Roof Systems", url: "https://www.windproofroofsystems.com", telephone: "+19547430667", areaServed: ["Broward County FL", "Miami-Dade County FL", "Palm Beach County FL"] },
      { "@type": "Organization", name: "Roof Protect Products", url: "https://www.roofprotectproducts.com", telephone: "+19549001973", areaServed: ["South Florida", "United States"] },
      { "@type": "Organization", name: "Storm Shield Roof Coating Systems", telephone: "+15613284770", areaServed: ["Port St. Lucie FL", "Treasure Coast FL"], address: { "@type": "PostalAddress", addressLocality: "Port St. Lucie", addressRegion: "FL", addressCountry: "US" } },
      { "@type": "Organization", name: "Roof Shield Coating Systems Inc", telephone: "+19543025387", areaServed: ["Hollywood FL", "Broward County FL"], address: { "@type": "PostalAddress", addressLocality: "Hollywood", addressRegion: "FL", addressCountry: "US" } },
      { "@type": "Organization", name: "Fort Lauderdale Roof Coating", url: "https://www.ftlauderdaleroofcoating.com", telephone: "+17543673768", areaServed: ["Fort Lauderdale FL", "Broward County FL"], address: { "@type": "PostalAddress", addressLocality: "Fort Lauderdale", addressRegion: "FL", addressCountry: "US" } },
      { "@type": "Organization", name: "Best Roof Paint", url: "https://www.bestroofpaint.com", telephone: "+19544001324", areaServed: ["Broward County FL", "Palm Beach County FL", "Martin County FL", "St. Lucie County FL", "Miami-Dade County FL"], address: { "@type": "PostalAddress", streetAddress: "5079 SW 48th St", addressLocality: "Davie", addressRegion: "FL", postalCode: "33314", addressCountry: "US" } },
      { "@type": "Organization", name: "Roof Paint Miami", url: "https://www.roofpaintmiami.com", telephone: "+17868379064", areaServed: ["Miami-Dade County FL"], address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" } },
      { "@type": "Organization", name: "Roof Restorations and Waterproofing Inc", url: "https://www.roofrestorationsandwaterproofinginc.com", telephone: "+18778245823", areaServed: ["Fort Lauderdale FL", "South Florida"], address: { "@type": "PostalAddress", streetAddress: "110 E Broward Blvd", addressLocality: "Fort Lauderdale", addressRegion: "FL", postalCode: "33301", addressCountry: "US" } },
    ],
  },
};

const partners = [
  {
    name: "Windproof Roof Systems",
    url: "https://www.windproofroofsystems.com",
    domain: "windproofroofsystems.com",
    phone: "954-743-0667",
    specialty: "Tile Roof Restoration & Reglazing",
    territory: "South Florida — Broward, Miami-Dade, Palm Beach",
    description:
      "Windproof Roof Systems is our authorized specialist for tile roof restoration, reglazing, and decorative color changes. Their technicians are trained in our full Roof Shield coating system — the Dade County TAS-106 uplift-tested system — and focus on barrel tile, cement tile, and S-tile roofs throughout South Florida.",
    services: [
      "Tile Roof Restoration",
      "Tile Reglazing",
      "Decorative Color Changes",
      "Hurricane Wind-Uplift Coating",
      "Tile Re-Setting & Repair",
    ],
    badge: "Tile Specialist",
    linkPaused: false,
    gmbOnly: false,
    reviewsTitle: "Customer Reviews — Storm Shield Paint Systems Inc · ⭐ 5.0 · 10 Google Reviews",
    reviews: [
      { author: "Dr. Gary Enker", text: "Everyone with a roof should have this product applied to prevent future leaks and damage to your roof. Anthony the owner is a true perfectionist professional. The product is outstanding — able to pick from any color you prefer." },
      { author: "Kathee Antezana", text: "Had a leak in my roof that I attempted to fix several times without success. Anthony came and sealed and painted the entire roof. Did a great job and my 50-year-old barrel tile roof looked great and was leak free." },
      { author: "Jean Louis Sorondo", text: "We have a flat roof building in Miami Beach and got tired of playing whack-a-mole with random roof leaks — causing drywall damage and repair headaches in different condos each time. We finally got it resolved." },
      { author: "Naeem Khan", text: "We were told our flat deck needed to be replaced but we tried the silicone roof restoration instead and even got our insurance to pass inspection — we were told it wouldn't. Great system and company, highly recommend." },
      { author: "Clara Cushing", text: "Had our tile roof painted and they did a great job. Very professional crew — they covered everything I asked and didn't leave a mess like the last service we hired." },
      { author: "Joel Bryan", text: "I was looking for a good alternative to the enormous expense of replacing my roof so we decided on having it Storm Shielded. They did a great job sealing all the tiles and my neighbors all think I got a new roof." },
      { author: "Simon Addrison", text: "Great work. I was concerned about getting coating on the brick pavers around my house and these guys worked extremely cleanly — zero spillage or drips. Extremely happy with the roof system and repairs. I can wholeheartedly recommend this company." },
      { author: "Robert R.", text: "They didn't charge us extra to cut the trees back that were laying on sections of our roof before they cleaned and sealed the roof tiles. It came out better than we could have imagined." },
      { author: "Mary Farren", text: "Very impressed with the roof coating service provided. I would highly recommend them." },
      { author: "Jaye Stone", text: "I don't usually refer anyone but had to leave this company a review — their employees were on time, did an excellent job, and my wife is really happy with the color we picked. It was a pleasure doing business with them." },
    ],
  },
  {
    name: "Roof Protect Products",
    url: "https://www.roofprotectproducts.com",
    domain: "roofprotectproducts.com",
    phone: "954-900-1973",
    specialty: "Roofing Product Supply & Distribution",
    territory: "South Florida & National Distribution",
    description:
      "Roof Protect Products is our authorized product supply and distribution partner — operating under our in-house RoofProtect factory license, the manufacturing label behind FungalShield, SmartShield, and RoofShield. Contractors and property managers can purchase our full range of rubber roof coating products, sealants, and primers direct from the factory in Broward County, Florida. Roof Protect Products manufactures under strict factory licensing requirements and does not perform installations — installation is handled by Storm Shield directly or by the authorized installer partners on this page.",
    services: [
      "Wholesale Product Supply",
      "Elastomeric Roof Coating Products",
      "Waterproofing Sealants & Primers",
      "Contractor Supply Program",
      "National Product Distribution",
    ],
    badge: "Product Supply",
    linkPaused: false,
    gmbOnly: false,
    reviews: [] as { author: string; text: string }[],
  },
  {
    name: "Storm Shield Roof Coating Systems",
    url: "https://maps.google.com/?q=Storm+Shield+Roof+Coating+Systems,+2049+SW+Cranberry+St,+Port+St.+Lucie,+FL+34953",
    domain: "Google Business Profile",
    phone: "561-328-4770",
    specialty: "Flat Roof Waterproofing & Coating",
    territory: "Port St. Lucie & Treasure Coast, Florida",
    description:
      "Storm Shield Roof Coating Systems is our authorized distributor and installer serving the Treasure Coast region of Florida. Operating from Port St. Lucie, they specialize in liquid-applied rubber waterproofing for flat, shingle, and tile roofs — and have earned a verified 5.0-star Google rating across 6 reviews from local customers.",
    services: [
      "Flat Roof Waterproofing",
      "Shingle Roof Sealing",
      "Tile Roof Leak Repair",
      "Commercial Metal Roof Coating",
      "Elastomeric Sealant Application",
    ],
    badge: "Treasure Coast",
    linkPaused: false,
    gmbOnly: true,
    reviews: [
      { author: "Alex L.", text: "Very happy with the job the Storm Shield Coating Company did on our roof. If you need your roof completely sealed they are the ones to hire." },
      { author: "Glen J.", text: "Our shingle roof needed repairs and we didn't want to replace the roof yet. We chose to seal it and it looks wonderful — they did a great job." },
      { author: "Christine G.", text: "My flat roof needed some work and got it all done in a couple of days. They took care of all the repairs before they applied the waterproofing." },
    ],
  },
  {
    name: "Roof Shield Coating Systems Inc",
    url: "https://maps.google.com/?q=Roof+Shield+Coating+Systems+Inc,+Hollywood,+FL",
    domain: "Google Business Profile",
    phone: "954-302-5387",
    specialty: "Licensed Roof Coating Installer",
    territory: "Hollywood & Broward County, Florida",
    description:
      "Roof Shield Coating Systems Inc is our licensed installer serving Hollywood and Broward County. With 7+ years in business and a verified 5.0-star Google rating across 8 reviews, they bring proven hands-on experience applying our liquid rubber coating systems to tile, flat, and shingle roofs throughout South Florida.",
    services: [
      "Tile Roof Coating & Restoration",
      "Flat Roof Waterproofing",
      "Shingle Roof Sealing",
      "Liquid Rubber Application",
      "Hurricane-Rated Coating Systems",
    ],
    badge: "Hollywood",
    linkPaused: false,
    gmbOnly: true,
    reviewsTitle: "Customer Reviews — Roof Shield Coating System · ⭐ 5.0 · 8 Google Reviews",
    reviews: [
      { author: "Abdullah Imran", text: "The Roof was old and we have had a couple of leaks in the past, this system was new to us since we dont have this type in up state New York, we tried the roof coating process, it was simple and sealed all our roof tiles in one piece, looks great, they did an excellent job" },
      { author: "Amber Phillips", text: "Our insurance company wanted to drop us but we found this company and they literally saved us thousands of dollars on not being forced to do a complete roof replacement, our roof was in good shape and it is only 15 years old, long story short we had it certified after the work was done and that ended the scam the insurance company was trying to pull on us, great service." },
      { author: "Ann Jordan", text: "Great Products our Roof Coating project was done on time and within our Budget." },
      { author: "Ryan Turnstall", text: "We needed a solution to replacement of our tile Roof and went with restoring them with the Coating and it came better than we expected and we saved money doing this instead." },
      { author: "Carl Rader", text: "Roof Shield was the solution to getting our roof life certification and it looks like a new roof again." },
    ],
  },
  {
    name: "Fort Lauderdale Roof Coating",
    url: "https://www.ftlauderdaleroofcoating.com",
    domain: "ftlauderdaleroofcoating.com",
    phone: "754-367-3768",
    specialty: "Coastal & Waterfront Tile Roof Specialist",
    territory: "Fort Lauderdale & Broward Intracoastal Communities",
    description:
      "Fort Lauderdale Roof Coating is our authorized specialist for coastal and Intracoastal roofing projects in Fort Lauderdale and Broward County. Operating since 2005, they bring two decades of hands-on experience with Spanish barrel tile, cement tile, and flat roofs in salt-air environments — where surface preparation and coating chemistry differ significantly from inland projects.",
    services: [
      "Spanish Tile Roof Coating & Restoration",
      "Cement Tile Waterproofing",
      "Flat Roof Liquid Rubber Membrane",
      "Metal Roof Coating",
      "Hurricane Pre-Season Sealing",
    ],
    badge: "Fort Lauderdale",
    linkPaused: false,
    gmbOnly: false,
    reviews: [] as { author: string; text: string }[],
  },
  {
    name: "Best Roof Paint",
    url: "https://www.bestroofpaint.com",
    domain: "bestroofpaint.com",
    phone: "954-400-1324",
    specialty: "Roofing-Grade Coating — Broward, Palm Beach & Treasure Coast",
    territory: "Broward, Palm Beach, Martin, St. Lucie & Miami-Dade Counties",
    description:
      "Best Roof Paint is our authorized distributor-installer serving the broadest geographic footprint in the network — from Miami-Dade through the Treasure Coast. Their focus is on helping homeowners and property managers distinguish roofing-grade coatings from consumer paint products, and they carry our full RoofProtect coating line for residential tile, flat, and metal roofs. Verified 5.0-star Google rating across 5 reviews.",
    services: [
      "Elastomeric Roof Coating",
      "Roof Painting",
      "Flat Roof Waterproofing",
      "Metal Roof Coating",
      "Tile Roof Restoration",
      "Contractor Product Supply",
    ],
    badge: "Broward / Palm Beach",
    linkPaused: false,
    gmbOnly: false,
    reviews: [] as { author: string; text: string }[],
  },
  {
    name: "Roof Paint Miami",
    url: "https://www.roofpaintmiami.com",
    domain: "roofpaintmiami.com",
    phone: "786-837-9064",
    specialty: "Miami-Dade HOA & Condo Roof Coating Specialist",
    territory: "Miami-Dade County — including Condominiums & HOA Communities",
    description:
      "Roof Paint Miami is our authorized specialist for multi-unit and high-density roofing projects in Miami-Dade County. They specialize in condo towers, HOA-governed communities, and gated neighborhoods — providing color sample boards for board approval, phased scheduling around occupied units, and manufacturer-backed documentation packages for HOA insurance and resale requirements.",
    services: [
      "Condo & HOA Roof Coating",
      "Roof Painting",
      "Flat Roof Waterproofing",
      "Barrel Tile & Cement Tile Restoration",
      "Metal Roof Coating",
      "Reflective Coating for Energy Code Compliance",
    ],
    badge: "Miami-Dade",
    linkPaused: false,
    gmbOnly: false,
    reviews: [] as { author: string; text: string }[],
  },
  {
    name: "Roof Restorations and Waterproofing Inc",
    url: "https://www.roofrestorationsandwaterproofinginc.com",
    domain: "roofrestorationsandwaterproofinginc.com",
    phone: "877-824-5823",
    specialty: "Roof Restoration & Waterproofing — South Florida",
    territory: "Fort Lauderdale & Greater South Florida",
    description:
      "Roof Restorations and Waterproofing Inc is our authorized restoration and waterproofing partner serving the greater Fort Lauderdale area. With a verified 5.0-star Google rating across 9 reviews, they bring proven hands-on experience in liquid rubber waterproofing for residential and commercial roofs throughout South Florida.",
    services: [
      "Roof Restoration",
      "Liquid Rubber Waterproofing",
      "Flat Roof Membrane Application",
      "Tile Roof Sealing",
      "Commercial Roof Coating",
      "Roof Painting",
      "Elastomeric Roof Coating Installation",
      "Roof Cleaning & Mildewcide Prep",
      "Hurricane Pre-Season Sealing",
    ],
    badge: "South Florida",
    linkPaused: false,
    gmbOnly: false,
    reviews: [] as { author: string; text: string }[],
  },
];

export default function PartnerNetwork() {
  return (
    <div className="w-full">
      <SEO
        title="Authorized Distributor & Licensed Installers Network — The Roof Store Waterproofing Products"
        description="The Roof Store maintains an authorized network of licensed specialty partners serving South Florida. Windproof Roof Systems, Roof Protect Products, Fort Lauderdale Roof Coating, Best Roof Paint, Roof Paint Miami, Roof Restorations and Waterproofing Inc, and others — all factory trained in our proprietary coating systems."
        canonical="/partner-network"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent text-sm font-bold px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="h-4 w-4" />
              Authorized Partners
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Authorized Distributor & Licensed Installers Network
            </h1>
            <p className="text-xl text-white/85 leading-relaxed max-w-3xl">
              Storm Shield Paint Systems Inc. installs directly throughout South Florida. Our authorized partner network
              exists to expand scheduling availability — every installer partner is factory-trained, legally authorized, and
              covered by the same manufacturer warranty as Storm Shield.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-7 py-3.5 rounded-lg transition-colors"
              >
                Schedule with Storm Shield Directly
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:9542109614"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-lg transition-colors border border-white/20"
              >
                <Phone className="h-4 w-4" />
                954-210-9614
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We install directly — call us first */}
      <section className="py-10 bg-accent/10 border-b border-accent/20">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Call Us First</div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Storm Shield Paint Systems Inc. Installs Directly.</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are never required to go through a partner. Storm Shield Paint Systems Inc. — the licensed Florida manufacturer and contractor behind The Roof Store — performs direct installations throughout Broward, Miami-Dade, Palm Beach, and Monroe counties. Call us first to check availability. If our schedule cannot meet your timeline, our authorized partner network can get you on the calendar sooner — with the same product, the same protocol, and the same warranty.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-3">
              <a href="tel:9542109614" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                <Phone className="h-4 w-4" />
                Call 954-210-9614
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-bold px-6 py-3 rounded-lg transition-colors border border-primary/20">
                Free Inspection Request
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why partners exist */}
      <section className="py-14 bg-muted/40 border-b border-border">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-serif font-bold text-primary mb-3">Why an Authorized Partner Network Exists</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              South Florida's demand for our coating systems exceeds any single crew's scheduling capacity. Rather than turn homeowners away, Storm Shield established a legally authorized partner network — installer partners who have met strict qualification standards and are legally bound to install our systems using the same materials, the same protocol, and the same quality controls as Storm Shield directly. The network also includes Roof Protect Products, our manufacturing and supply division, which supplies product but does not perform installations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: BadgeCheck,
                  title: "Specialized Manufacturer Product Training",
                  desc: "Every authorized partner completes hands-on factory training at our Davie, FL facility. They are certified in our Fungal Shield, Smart Shield, and Roof Shield systems before installing a single job.",
                },
                {
                  icon: DollarSign,
                  title: "Hard Money Licensing & Product Investment",
                  desc: "Partners must meet real financial qualifying thresholds — licensing fees, product inventory investment, and territorial commitment. They have skin in the game. This is not a loose referral arrangement.",
                },
                {
                  icon: FileText,
                  title: "Territorial Vetting & Business Review",
                  desc: "Each partner territory is reviewed for market fit, licensing standing, and business history before authorization is granted. Territories are exclusive — only one authorized partner per defined area.",
                },
                {
                  icon: Scale,
                  title: "Legal Authorization Agreement with Storm Shield",
                  desc: "Every partner operates under a formal legal agreement with Storm Shield Paint Systems Inc. They are contractually bound to our installation standards and authorized to issue the same manufacturer warranty as Storm Shield directly.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-xl p-6 border border-border flex gap-4">
                  <item.icon className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-1">{item.title}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Warranty assurance bar */}
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl px-6 py-4 flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>Warranty assurance — professionally installed jobs:</strong> Every authorized installer partner installs under Storm Shield's manufacturer warranty — the same warranty you receive when Storm Shield installs directly. Because they are legally bound to our materials and protocol, the warranty source does not change.
                </p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  <strong>Buy &amp; Owner-Applied:</strong> Product purchased for self-installation or third-party contractor application is subject to a limited warranty. Restrictions apply. Full manufacturer warranty terms are available upon request — call 954-210-9614 or contact us before purchase.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-16 bg-background">
        <div className="container px-4 max-w-4xl mx-auto space-y-10">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted rounded-2xl overflow-hidden border border-border"
            >
              {/* Card header */}
              <div className="bg-primary text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {partner.badge}
                  </div>
                  <h2 className="text-2xl font-serif font-bold">{partner.name}</h2>
                  <div className="text-white/70 text-sm mt-1">{partner.specialty}</div>
                </div>
                {!partner.linkPaused && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors border border-white/20 shrink-0"
                  >
                    {partner.gmbOnly ? "View on Google Maps" : "Visit Site"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Card body */}
              <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-foreground">{partner.territory}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-accent shrink-0" />
                      <a href={`tel:${partner.phone.replace(/\D/g, "")}`} className="text-accent font-bold hover:underline">
                        {partner.phone}
                      </a>
                    </div>
                    {partner.linkPaused ? (
                      <div className="flex items-center gap-3 text-sm">
                        <ExternalLink className="h-4 w-4 text-muted-foreground/50 shrink-0" />
                        <span className="text-muted-foreground/70 italic">
                          Site link temporarily paused pending content updates
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 text-sm">
                        <ExternalLink className="h-4 w-4 text-accent shrink-0" />
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {partner.domain}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Services Offered</div>
                  <ul className="space-y-2.5">
                    {partner.services.map((svc, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-foreground">{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {partner.reviews.length > 0 && (
                <div className="px-8 pb-8 border-t border-border pt-6">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">{partner.reviewsTitle ?? "Customer Reviews — ⭐ 5.0 Google Rating"}</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {partner.reviews.map((review, k) => (
                      <blockquote key={k} className="bg-background rounded-xl p-4 border border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed italic mb-3">"{review.text}"</p>
                        <cite className="text-xs font-bold text-foreground not-italic">— {review.author}</cite>
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate disclosure */}
      <section className="py-6 bg-muted/30 border-t border-border">
        <div className="container px-4 max-w-4xl mx-auto">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            The Roof Store is our retail storefront. Our coating products are manufactured in-house under our{" "}
            <strong className="text-foreground">RoofProtect</strong> factory license, and professional installation
            is available through <strong className="text-foreground">Storm Shield Paint Systems Inc.</strong>, our
            exclusive Florida-licensed contracting and installation division. Windproof Roof Systems is our authorized
            tile restoration specialist. All coating products distributed or installed under these brands are
            manufactured at our Broward County, Florida facility.
          </p>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 border border-border flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-bold text-primary mb-3">Interested in Becoming an Authorized Partner?</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer exclusive county and state territories for qualified contractors and investors. Partners
                receive full factory training, complete advertising packages, and ongoing business support from our
                team in Davie, FL.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/distributorships"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                View Opportunities
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:9542109614"
                className="inline-flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent font-bold px-6 py-3 rounded-lg transition-colors border border-accent/30"
              >
                <Phone className="h-4 w-4" />
                954-210-9614
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main company CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold mb-4">Need Service for Your Home or Property?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              For residential and commercial roof coating and waterproofing services throughout South Florida,
              contact The Roof Store directly. Free inspections, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Schedule Free Inspection
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:954-210-9614"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors border border-white/20"
              >
                <Phone className="h-5 w-5" />
                954-210-9614
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              4801 S University Dr, Davie FL 33328 · Licensed Roof Coating Manufacturer · Florida
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
