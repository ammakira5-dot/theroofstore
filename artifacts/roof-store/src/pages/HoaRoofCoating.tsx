import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const BASE = "https://www.theroofstore.net";

const faqs = [
  {
    q: "How long do commercial roof coatings last on condo buildings?",
    a: "Most commercial roof coatings last between 10 and 20 years depending on the coating type, roof condition, climate exposure, and maintenance schedule. Regular roof inspections and recoating programs can sometimes extend performance even longer.",
  },
  {
    q: "Are roof coatings cheaper than full roof replacement?",
    a: "Yes. Many roof restoration systems cost about 30% to 50% of a full roof replacement. That lower upfront cost is one reason many Florida HOA boards are evaluating coatings as part of reserve planning.",
  },
  {
    q: "What type of roof coating works best in Florida?",
    a: "Silicone coatings are often recommended for Florida because they resist ponding water and handle heavy rain well. Elastomeric roof coatings are also popular because they provide flexibility and UV protection in hot climates.",
  },
  {
    q: "Do commercial roof coatings help with energy savings?",
    a: "Reflective coatings can reduce roof temperatures and lower cooling demand. Studies show cooling energy savings between 10% and 17% in Florida-type climates, especially on large flat commercial roofs.",
  },
  {
    q: "Why are roof inspections so important for HOA boards now?",
    a: "Florida reserve laws and milestone inspection requirements have increased the focus on long-term building maintenance. Roof inspections help boards identify problems early, support reserve studies, and maintain better documentation for insurance carriers.",
  },
  {
    q: "Where can HOA boards learn more about roof restoration systems?",
    a: "Boards researching coating systems, elastomeric products, and roof restoration options can review our commercial roofing services and product information. Comparing coating types and maintenance strategies can help associations make more informed decisions.",
  },
];

export default function HoaRoofCoating() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Commercial Roof Coating for HOA and Condo Properties — What Boards Need to Know",
      description: "Florida HOA boards and condo associations are turning to commercial roof coatings to extend roof life, reduce costs, and meet new reserve funding requirements. A complete guide for property managers and board members.",
      url: `${BASE}/commercial-roof-coating-hoa`,
      datePublished: "2026-07-19",
      dateModified: "2026-07-19",
      author: { "@type": "Organization", name: "The Roof Store", url: BASE },
      publisher: {
        "@type": "Organization",
        name: "The Roof Store",
        url: BASE,
        logo: { "@type": "ImageObject", url: `${BASE}/assets/images/logo.png` },
      },
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
        { "@type": "ListItem", position: 2, name: "Commercial Roofs", item: `${BASE}/commercial-roofs` },
        { "@type": "ListItem", position: 3, name: "HOA & Condo Roof Coating", item: `${BASE}/commercial-roof-coating-hoa` },
      ],
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Commercial Roof Coating for HOA & Condo Properties in Florida | The Roof Store"
        description="Florida HOA boards and condo associations are turning to commercial roof coatings to extend roof life, reduce costs, and meet reserve funding requirements. TAS-106 rated systems. Free consultation: 954-210-9614."
        canonical="/commercial-roof-coating-hoa"
        schema={schema}
        geo={{ region: "US-FL", placename: "South Florida" }}
      />

      <section className="bg-primary text-white py-24">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block bg-accent/20 text-accent-foreground text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              For HOA Boards & Property Managers
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Commercial Roof Coating for HOA and Condo Properties
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              What Florida boards need to know about roof restoration, reserve planning, and choosing the right coating system.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Florida HOA and condo boards are dealing with higher insurance costs, stricter reserve funding rules, and older roofing systems that need more care than they did in the past. Many associations going into 2026 are trying to get more life out of existing roofs instead of paying for a full replacement, which can place real pressure on community budgets. Because of this, commercial roof coatings and restoration systems are becoming a more common choice across Florida.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A properly planned coating system may help protect roofs from UV exposure, slow leak development, and improve roof performance over time. Some properties also see lower cooling costs and fewer problems during inspections. For condo and HOA communities, that can make it easier to delay large capital projects while still keeping up with regular maintenance. Florida's updated condo laws also put more focus on roof inspections during reserve studies and insurance reviews, so many boards are paying much closer attention to roof condition and documentation.
              </p>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Understanding the basics of commercial roof coatings helps boards make better decisions about warranties, budgets, and long-term roof maintenance. Property managers are also looking for clearer information about coating types, roof preparation, contractor expectations, and possible energy savings.
              </p>

              <h2 className="text-3xl font-serif font-bold text-primary mt-10 mb-4">Why Florida HOA Boards Are Looking at Roof Restoration</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Florida condo associations have faced much tighter financial pressure since the Surfside tragedy and the reserve study laws that followed. Boards now have to plan ahead for major repairs and building systems with much more detail, and roofing is still one of the biggest expenses in many reserve studies. For many communities, it's also one of the toughest budget items to handle.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Reserve planning specialists at Criterium-Cromer say roof inspections and long-term maintenance planning are now closely connected to both compliance rules and financial planning for condo associations (<a href="https://criterium-cromer.com/florida-condo-reserve-study-law-2025" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Criterium-Cromer</a>). That change has led many HOA boards to look at roof restoration before choosing a full tear-off replacement.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Commercial roof coatings can add another 10 to 20 years to a roof's lifespan while costing about 30% to 50% less than full replacement projects. For communities trying to manage reserve funding, assessments, and long-term repair schedules, those savings can make a real difference during annual budgeting talks.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <caption className="text-left text-xs text-muted-foreground mb-2">General cost and lifespan comparison for HOA roofing decisions</caption>
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left px-4 py-3 font-bold border border-border">Roofing Option</th>
                      <th className="text-left px-4 py-3 font-bold border border-border">Average Cost Impact</th>
                      <th className="text-left px-4 py-3 font-bold border border-border">Typical Life Extension</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border border-border">Full roof replacement</td>
                      <td className="px-4 py-3 border border-border">Highest upfront cost</td>
                      <td className="px-4 py-3 border border-border">20–30 years</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="px-4 py-3 border border-border font-medium">Commercial roof coating</td>
                      <td className="px-4 py-3 border border-border font-medium">30–50% of replacement cost</td>
                      <td className="px-4 py-3 border border-border font-medium">10–20 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-border">Basic repairs only</td>
                      <td className="px-4 py-3 border border-border">Lower short-term cost</td>
                      <td className="px-4 py-3 border border-border">1–5 years</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-right text-xs text-muted-foreground mt-1">Source: <a href="https://ridgelineconstructionhsv.com/roof-coatings-benefit/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ridgeline Construction</a></p>
              </div>

              <blockquote className="my-8 border-l-4 border-accent pl-6 italic">
                <p className="text-lg text-foreground/80">
                  "Roof coatings appear to provide a lightweight weather shield or viable means to protect the underlying membrane from the adverse effects of direct exposure to sun and weather, providing the membrane and coatings are applied correctly."
                </p>
                <footer className="mt-3 text-sm text-muted-foreground">
                  — National Roofing Contractors Association (NRCA), <a href="https://nrca.net/roofingguidelines/pdf?id=133765&k=1959734" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">MRCA Roof Coatings Research</a>
                </footer>
              </blockquote>

              <h2 className="text-3xl font-serif font-bold text-primary mt-10 mb-4">How Commercial Roof Coatings Work on Condo and HOA Buildings</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Commercial roof coatings add a protective layer over an existing roofing system. They're often used on flat roofs, modified bitumen roofs, metal roofs, and other low-slope roofing systems found on condo buildings, clubhouses, and similar Florida properties.
              </p>
              <p className="text-muted-foreground mb-3 leading-relaxed">Most coating systems fall into four main categories:</p>
              <ul className="list-disc list-inside ml-4 mb-4 space-y-1.5 text-muted-foreground">
                <li>Acrylic coatings known for strong UV reflectivity</li>
                <li>Silicone coatings made to handle ponding water</li>
                <li>Polyurethane coatings used for impact resistance and long-term wear</li>
                <li>Elastomeric roof coatings that offer flexibility and waterproofing</li>
              </ul>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Florida properties often use silicone roof coatings because they hold up well during heavy rain and in areas where water sits on the roof for long periods. Elastomeric coatings are also common because they expand and contract as temperatures change throughout the year, which helps during long heat waves and storm seasons.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Before a roof restoration project starts, contractors should complete a professional roof inspection. They check moisture levels, drainage issues, flashing details, the condition of the existing membrane, and signs of storm damage. Without this inspection, the coating system could fail sooner than expected or overlook problems already forming beneath the surface.
              </p>

              <div className="my-8 aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/zG9sTfDW_7k"
                  title="Commercial Roof Coating for HOA and Condo Properties"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <p className="text-muted-foreground mb-3 leading-relaxed">A typical coating project usually includes:</p>
              <ol className="list-decimal list-inside ml-4 mb-4 space-y-1.5 text-muted-foreground">
                <li>A full roof inspection</li>
                <li>Cleaning, pressure washing, and surface preparation</li>
                <li>Roof repairs and seam treatment</li>
                <li>Primer application if needed</li>
                <li>Final coating installation</li>
                <li>A post-project inspection and warranty review</li>
              </ol>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                HOA boards should also understand that roof coatings are not the right fix for every situation. Roofs with major deterioration, trapped moisture, or structural failure may still require full replacement instead of restoration.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                According to Strang Tryson PLLC, Florida associations face growing financial and legal risk when milestone inspections and reserve requirements are ignored (<a href="https://strangtryson.com/new-florida-condo-inspection-reserve-requirements-for-2025-what-owners-associations-need-to-know" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Strang Tryson PLLC</a>). Insurance renewals and reserve planning now receive closer review, so documented roof inspections and maintenance records matter much more than they did in past years.
              </p>

              <h2 className="text-3xl font-serif font-bold text-primary mt-10 mb-4">Energy Savings and Insurance Benefits in Florida</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Long stretches of heat and constant UV exposure can wear down commercial roofs in Florida. Reflective roof coatings help lower roof surface temperatures, which can reduce the strain on a building's cooling system. For condo towers, office buildings, and HOA communities with shared spaces, those energy savings can become more noticeable during the hottest times of the year when cooling demand rises fast.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Studies from Lawrence Berkeley National Laboratory and ENERGY STAR show that reflective roofing systems can greatly reduce cooling loads in warm climates (<a href="https://www.energystar.gov/ia/partners/prod_development/revisions/downloads/roofs/Lawrence_Berkeley_National_Laboratory.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ENERGY STAR</a>). White roof coatings may reflect 80% to 90% of solar radiation, while darker roofing materials may reflect as little as 6%.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <caption className="text-left text-xs text-muted-foreground mb-2">Verified performance data for reflective commercial roof coatings</caption>
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left px-4 py-3 font-bold border border-border">Performance Metric</th>
                      <th className="text-left px-4 py-3 font-bold border border-border">Verified Range</th>
                      <th className="text-left px-4 py-3 font-bold border border-border">Source Context</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border border-border">Annual building energy savings</td>
                      <td className="px-4 py-3 border border-border">7–15%</td>
                      <td className="px-4 py-3 border border-border">Commercial buildings</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="px-4 py-3 border border-border">Florida cooling reduction</td>
                      <td className="px-4 py-3 border border-border">10–17%</td>
                      <td className="px-4 py-3 border border-border">Cooling-dominated climates</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-border">Roof temperature reduction</td>
                      <td className="px-4 py-3 border border-border">30°F–60°F</td>
                      <td className="px-4 py-3 border border-border">Reflective coating systems</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="px-4 py-3 border border-border">Peak power savings</td>
                      <td className="px-4 py-3 border border-border">11–30%</td>
                      <td className="px-4 py-3 border border-border">Florida field studies</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-right text-xs text-muted-foreground mt-1">Source: <a href="https://commercialroofingonly.com/blog/energy-star-reflective-roof-coatings-energy-savings-roi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ENERGY STAR and Florida field studies</a></p>
              </div>

              <blockquote className="my-8 border-l-4 border-accent pl-6 italic">
                <p className="text-lg text-foreground/80">
                  "Commercial buildings that install ENERGY STAR qualified roofing save an average of 7–15% on total building energy costs annually, with cooling-dominated buildings at the high end of that range."
                </p>
                <footer className="mt-3 text-sm text-muted-foreground">
                  — EPA ENERGY STAR Program, <a href="https://commercialroofingonly.com/blog/energy-star-reflective-roof-coatings-energy-savings-roi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ENERGY STAR roofing program summary</a>
                </footer>
              </blockquote>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Insurance providers are paying more attention to roof age, maintenance records, and inspection history during underwriting reviews. A restoration program with regular inspections can help show consistent upkeep over time. While coatings do not guarantee lower insurance premiums, many condo boards and property managers include restoration systems as part of a stronger maintenance history.
              </p>

              <h2 className="text-3xl font-serif font-bold text-primary mt-10 mb-4">Common Mistakes HOA Boards Should Avoid</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Many HOA boards wait too long to decide on roof restoration. Coatings usually work best while the roof still has good remaining life. Once leaks start spreading, moisture gets trapped under the surface, or the membrane begins wearing down in multiple spots, restoration may no longer make sense — and a full replacement becomes the only option at much greater cost.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Picking the wrong coating system creates another serious issue. South Florida roofs deal with constant UV exposure, hurricane weather, humidity, and long rainy seasons. Materials that work well in dry western states do not always perform the same way in Florida conditions. Climate plays a major role in how long a coating system will last.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Some boards put too much focus on the lowest proposal. A lower bid may leave out important prep work or use cheaper materials that break down faster over time. Many coating failures happen because the surface was not prepared properly before installation.
              </p>

              <blockquote className="my-8 border-l-4 border-accent pl-6 italic">
                <p className="text-lg text-foreground/80">
                  "Cool roofs reduced cooling energy use by 10–17% annually compared to dark membrane controls."
                </p>
                <footer className="mt-3 text-sm text-muted-foreground">
                  — Oak Ridge National Laboratory, <a href="https://commercialroofingonly.com/blog/energy-star-reflective-roof-coatings-energy-savings-roi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">EPA ENERGY STAR documentation referencing ORNL field studies</a>
                </footer>
              </blockquote>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Warranty details also get missed more often than they should. Some restoration systems now include renewable warranties, which allow the roof to be recoated years later and continue protecting the building without starting another full replacement project.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Another common problem is inconsistent inspection records. Insurance carriers and reserve consultants are asking for more detailed maintenance documentation. Annual inspections and written reports support long-term planning and create a clearer record of the roof's condition over time.
              </p>

              <h2 className="text-3xl font-serif font-bold text-primary mt-10 mb-4">What HOA Boards Should Expect in 2026 Roofing Trends</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Florida condo and HOA communities are paying more attention to energy efficiency as utility costs continue to rise. Cool roof systems are no longer seen as just a simple upgrade. Many associations now include them in larger energy-management plans, especially when long-term operating costs are part of the conversation.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                According to Persistence Market Research (<a href="https://www.persistencemarketresearch.com/market-research/cool-roof-coatings-market.asp" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Persistence Market Research</a>), the cool roof coatings market is expected to grow from US$5 billion in 2025 to US$8.1 billion by 2032. Reflective roofing systems are becoming more common as property owners focus on sustainability goals and reducing energy use over time.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Inspection requirements are also changing how associations approach roofing decisions. Milestone inspections and reserve studies now affect maintenance schedules and long-term planning far more than they did before. Instead of waiting for leaks or storm damage, many communities are planning restoration work earlier and adding roof replacement cycles into reserve plans.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Many associations are also pairing roof restoration projects with drainage upgrades or regular cleaning programs to help roofs last longer and reduce future repair costs.
              </p>

              <h2 className="text-3xl font-serif font-bold text-primary mt-10 mb-4">Planning a Smart Roof Inspection and Maintenance Strategy</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A roof restoration project usually runs more smoothly when a maintenance plan is already set up. Condo boards that wait until leaks show up inside units often end up dealing with higher costs and much larger repairs. Even small roof issues, like light cracking or worn sealants, can become serious damage if they are left alone for too long.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Florida specialists usually suggest scheduling two roof inspections each year: one before hurricane season begins and another after major storms pass through the area. During these inspections, contractors should carefully check the membrane, flashing details, drains, standing water, sealants, storm damage, and areas that show early wear.
              </p>
              <p className="text-muted-foreground mb-3 leading-relaxed">Boards should also keep organized records, including:</p>
              <ul className="list-disc list-inside ml-4 mb-6 space-y-1.5 text-muted-foreground">
                <li>Inspection reports</li>
                <li>Past repairs and leak history</li>
                <li>Warranty details and related documents</li>
                <li>Storm damage notes</li>
                <li>Cleaning schedules and ongoing maintenance work</li>
                <li>Recommendations from contractors or inspectors</li>
              </ul>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                These documents can support reserve studies and are often helpful during insurance reviews. Florida legal and reserve planning professionals say associations are increasingly expected to take an early and active role with major building systems (<a href="https://www.pmlawfla.com/new-2025-florida-condo-laws-hb-913-signed-by-desantis-what-homeowners-need-to-know" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PMLaw</a>), and roofing systems are part of that change.
              </p>

              <h2 className="text-3xl font-serif font-bold text-primary mt-10 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border pb-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-4">Building a Long-Term Roofing Plan for Your Community</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Commercial roof coatings are no longer seen as short-term fixes. By 2026, many Florida condo and HOA boards are adding roof restoration to their larger maintenance and financial plans. Higher replacement costs, stricter reserve rules, insurance pressure, and rising energy bills are all shaping how communities handle roofing systems over time.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The boards that stay most prepared usually deal with issues early instead of waiting until damage shows up. Regular roof inspections, organized service records, and scheduled maintenance reviews help communities avoid expensive surprises. Many associations now look into restoration options sooner, before visible damage spreads across the roof system.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Still, coatings are not the right choice for every building. Proper inspections and moisture testing should happen before work begins, especially because hidden water intrusion can affect long-term results. The coating choice also matters, and experienced contractors often make a clear difference in how well a restored roof lasts over the years.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background border-y">
        <div className="container px-4 max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">Explore More</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Our Coating Products →</Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Pricing Guide →</Link>
            <Link href="/commercial-roofs" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent border rounded-lg px-4 py-2 hover:border-accent transition-colors bg-card">Commercial Roofing Services →</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Request a Commercial Roof Assessment</h2>
          <p className="text-white/80 text-lg mb-8">
            The Roof Store works directly with HOA boards, condo associations, and property managers across South Florida. We provide inspections, restoration systems, and written documentation your reserve consultant and insurance carrier can use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg">
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg">
              <Link href="/commercial-roofs">View Commercial Services</Link>
            </Button>
          </div>
          <p className="mt-6 text-white/60 text-sm">Call us directly: <a href="tel:954-210-9614" className="text-accent font-bold hover:underline">954-210-9614</a></p>
        </div>
      </section>
    </div>
  );
}
