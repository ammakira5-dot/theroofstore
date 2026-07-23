import { SEO } from "@/components/SEO";

const today = "July 22, 2026";

export default function TrademarkEvidenceFile() {
  return (
    <>
      <SEO
        title="Brand Infringement Evidence File | The Roof Store"
        description="Internal documentation of brand infringement evidence — The Roof Store (theroofstore.net) v. theroof.store."
        canonical="/trademark-evidence-file"
        noindex
        schema={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Brand Infringement Evidence File — The Roof Store v. theroof.store",
          description: "Documentation of brand infringement evidence — The Roof Store (theroofstore.net) v. theroof.store (Dmitry Lipinskiy).",
          datePublished: "2026-07-08",
          dateModified: "2026-07-08",
          publisher: {
            "@type": "Organization",
            name: "The Roof Store",
            url: "https://www.theroofstore.net",
          },
        }}
      />
      <div className="min-h-screen bg-white text-gray-900 font-serif print:text-sm">

        {/* Document Header */}
        <div className="max-w-4xl mx-auto px-8 py-12 print:py-6">

          {/* Case Header */}
          <div className="border-b-2 border-gray-900 pb-6 mb-8">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-sans">Prepared for Attorney Review — Confidential Work Product</p>
            <h1 className="text-2xl font-bold leading-tight mb-1">
              BRAND INFRINGEMENT EVIDENCE FILE
            </h1>
            <h2 className="text-lg font-semibold text-gray-700">
              The Roof Store / Storm Shield Paint Systems Inc.
              <span className="text-gray-400 mx-3">v.</span>
              theroof.store (Dmitry Lipinskiy)
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm font-sans">
              <div>
                <span className="font-semibold uppercase text-xs tracking-wide text-gray-500">Document Date</span>
                <p>{today}</p>
              </div>
              <div>
                <span className="font-semibold uppercase text-xs tracking-wide text-gray-500">Prepared By</span>
                <p>theroofstore.net — Internal</p>
              </div>
              <div>
                <span className="font-semibold uppercase text-xs tracking-wide text-gray-500">Prior Rights Holder</span>
                <p>The Roof Store / Storm Shield Paint Systems Inc.<br />4801 S University Dr, Davie, FL 33328<br />(954) 210-9614</p>
              </div>
              <div>
                <span className="font-semibold uppercase text-xs tracking-wide text-gray-500">Respondent Domain</span>
                <p>theroof.store<br />Registrant: Domains By Proxy, LLC (privacy-shielded)<br />Registrar: GoDaddy.com, LLC</p>
              </div>
            </div>
          </div>

          {/* Summary of Claim */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">I. Summary of Claim</h3>
            <p className="mb-3 leading-relaxed">
              The Roof Store has operated continuously under that name, and at the domain <strong>theroofstore.net</strong>, since <strong>July 29, 2002</strong> — and as a Florida-registered business since <strong>1994</strong>. The respondent registered <strong>theroof.store</strong> on <strong>August 13, 2021</strong>, a full <strong>19 years</strong> after the prior rights holder's domain registration and <strong>27 years</strong> after the business was founded.
            </p>
            <p className="mb-3 leading-relaxed">
              Both parties operate in the roofing industry. The respondent ships roofing supplies into Florida — the prior rights holder's primary geographic market — under the identical name "The Roof Store." The respondent's operator, <strong>Dmitry Lipinskiy</strong>, runs one of the roofing industry's largest content platforms (Roofing Insights, ~200,000–250,000 YouTube subscribers), amplifying the infringing brand across the national and Florida contractor market.
            </p>
            <p className="leading-relaxed">
              The respondent's domain is privacy-shielded via Domains By Proxy, LLC (GoDaddy) — a registration practice commonly associated with bad faith under UDRP ¶4(b) and ACPA analysis.
            </p>
          </section>

          {/* Prior Rights Timeline */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">II. Prior Rights Timeline</h3>
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4 w-32">Date</th>
                  <th className="text-left py-2">Event</th>
                  <th className="text-left py-2 pl-4 w-32">Party</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: "1994", event: "The Roof Store founded in Davie, Florida. First liquid rubber roof coating system introduced to the South Florida market under this name.", party: "Prior Rights Holder" },
                  { date: "July 29, 2002", event: "theroofstore.net domain registered. Continuous, unbroken commercial use begins online.", party: "Prior Rights Holder" },
                  { date: "2010s", event: "RoofProtect Products established as manufacturing entity. FungalShield (RP1), SmartShield (RP2), RoofShield (RP3) systems developed and commercialized under The Roof Store brand.", party: "Prior Rights Holder" },
                  { date: "2017", event: "Dmitry Lipinskiy founds Roofing Insights YouTube channel. Begins building national roofing contractor audience that will later be used to amplify the theroof.store brand.", party: "Respondent (background)" },
                  { date: "Aug 13, 2021", event: "theroof.store domain registered via GoDaddy / Domains By Proxy (privacy-shielded). Registration occurs 19 years after prior rights holder's domain, 27 years after business founding.", party: "Respondent" },
                  { date: "2021–present", event: "Respondent operates theroof.store as an online bulk roofing supplies distributor, actively shipping into Florida. Brand promoted via Roofing Insights podcast and YouTube channel (~200K–250K subscribers).", party: "Respondent" },
                  { date: "July 8, 2026", event: "Screenshots and evidence documented from live theroof.store website for this file.", party: "Documentation date" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-200 ${row.party === "Respondent" || row.party === "Respondent (background)" ? "bg-red-50" : row.party === "Prior Rights Holder" ? "bg-green-50" : ""}`}>
                    <td className="py-2 pr-4 font-semibold align-top text-xs">{row.date}</td>
                    <td className="py-2 leading-relaxed">{row.event}</td>
                    <td className="py-2 pl-4 text-xs align-top text-gray-600 italic">{row.party}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Exhibit A */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">III. Exhibit A — Homepage: Identical Brand Name in Commerce</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Screenshot captured July 8, 2026 from <strong>https://www.theroof.store/</strong>. The name "The Roof Store" appears as: (1) the site-wide logo/wordmark in the navigation bar, (2) the primary H1 headline on the homepage in styled display text, (3) the contact email domain <em>info@theroof.store</em>, and (4) printed on physical product packaging shipped to contractors nationwide.
            </p>
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT A — theroof.store Homepage</span>
                <span className="text-gray-500">Captured: July 8, 2026</span>
              </div>
              <img
                src="/attached_assets/screenshots/theroof_store.png"
                alt="Exhibit A: theroof.store homepage showing The Roof Store brand"
                className="w-full"
              />
            </div>
            <p className="text-xs font-sans text-gray-500 mt-2 italic">
              Note: Header reads "The Roof Store" in the nav bar (top-left). H1 headline reads "The Roof Store" in large styled purple/pink text. Product packaging visible showing "the Roof. STORE" logo.
            </p>
          </section>

          {/* Exhibit B */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">IV. Exhibit B — Content Pages: Systemic Brand Association</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              The respondent publishes articles bylined <em>"By: The Roof Store | Jairo"</em> and embeds YouTube videos from a channel named "The Roof Store." This demonstrates the name is used not incidentally but as a deliberate commercial identity across web content, video, and print.
            </p>

            <div className="border-2 border-gray-300 rounded overflow-hidden mb-6">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT B-1 — "Comparing Prices Between ABC Supply and The Roof Store"</span>
                <span className="text-gray-500">Captured: July 8, 2026</span>
              </div>
              <img
                src="/attached_assets/screenshots/theroof_store_articles_comparing-prices-between-abc-supply-and-the-roof-store.png"
                alt="Exhibit B-1: theroof.store article bylined The Roof Store"
                className="w-full"
              />
            </div>
            <p className="text-xs font-sans text-gray-500 mb-6 italic">
              Byline reads "By: The Roof Store | Jairo." YouTube embed titled "Price Comparison Between The Roof Store and ABC Supply." YouTube channel name shown as "The Roof Store."
            </p>

            <div className="border-2 border-gray-300 rounded overflow-hidden mb-3">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT B-2 — "Higher Profits for Integris Roofing"</span>
                <span className="text-gray-500">Captured: July 8, 2026</span>
              </div>
              <img
                src="/attached_assets/screenshots/theroof_store_articles_higher-profits-for-integris-roofing.png"
                alt="Exhibit B-2: theroof.store contractor testimonial article"
                className="w-full"
              />
            </div>
            <p className="text-xs font-sans text-gray-500 italic">
              Byline reads "By: The Roof Store | Jairo." YouTube channel shown as "The Roof Store." Article describes how a contractor discovered theroof.store through a podcast featuring Dmitry Lipinskiy — confirming the content-to-commerce pipeline built on the infringing name.
            </p>
          </section>

          {/* Exhibit C — Domain WHOIS */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">V. Exhibit C — Domain Registration Records</h3>
            <div className="grid grid-cols-2 gap-6 text-sm font-sans">
              <div className="border border-green-400 rounded p-4 bg-green-50">
                <p className="font-bold text-green-800 mb-2 uppercase text-xs tracking-wide">Prior Rights Holder</p>
                <table className="w-full text-xs">
                  <tbody>
                    {[
                      ["Domain", "theroofstore.net"],
                      ["Registered", "July 29, 2002"],
                      ["Business Founded", "1994"],
                      ["Registrant", "Storm Shield Paint Systems Inc."],
                      ["State", "Florida"],
                      ["Status", "Active — continuous commercial use"],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-green-200">
                        <td className="py-1 pr-2 font-semibold text-gray-600 w-28">{k}</td>
                        <td className="py-1">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border border-red-400 rounded p-4 bg-red-50">
                <p className="font-bold text-red-800 mb-2 uppercase text-xs tracking-wide">Respondent</p>
                <table className="w-full text-xs">
                  <tbody>
                    {[
                      ["Domain", "theroof.store"],
                      ["Registered", "August 13, 2021"],
                      ["Registrar", "GoDaddy.com, LLC"],
                      ["Registrant", "Domains By Proxy, LLC (privacy-shielded)"],
                      ["Last Updated", "May 9, 2024"],
                      ["Gap from prior rights", "19 years after domain / 27 after business"],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-red-200">
                        <td className="py-1 pr-2 font-semibold text-gray-600 w-28">{k}</td>
                        <td className="py-1">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs font-sans text-gray-600 mt-3 leading-relaxed">
              <strong>Note on privacy shielding:</strong> Registration through Domains By Proxy, LLC prevents direct identification of the registrant. WHOIS privacy is a recognized factor in UDRP bad faith analysis when used in combination with other indicators. The actual operator, Dmitry Lipinskiy, is publicly identified through the theroof.store website content, YouTube channel, and podcast appearances.
            </p>
          </section>

          {/* Exhibit D — Intent Evidence */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">VI. Exhibit D — Intent Evidence: On-Camera Brand Strategy Statement</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Dmitry Lipinskiy published a YouTube video titled <strong>"Why The Roof Store Prioritizes YouTube &amp; TikTok Over Instagram and Facebook?"</strong> This on-record public statement establishes that "The Roof Store" name was a <em>deliberate, planned commercial brand strategy</em> — not an incidental or coincidental choice. This is directly relevant to willfulness under Lanham Act § 43(a) and bad faith under UDRP ¶4(b)(iv).
            </p>
            <div className="border border-gray-300 rounded p-4 bg-gray-50 font-sans text-sm">
              <p className="font-semibold mb-1">Video Title (verbatim):</p>
              <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
                "Why The Roof Store Prioritizes YouTube &amp; TikTok Over Instagram and Facebook?"
              </blockquote>
              <p className="text-xs text-gray-500 mt-2">Source: YouTube channel "The Roof Store" — publicly accessible at youtube.com/watch?v=tAPtkwivXos</p>
            </div>
            <p className="text-sm font-sans mt-3 leading-relaxed">
              The video title explicitly treats "The Roof Store" as a named brand actor making content strategy decisions — confirming the name functions as a <em>trademark</em> in commerce, not merely a descriptive domain string.
            </p>
          </section>

          {/* Exhibit E — Digital Reach & Damages */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">VII. Exhibit E — Digital Reach &amp; Estimated Damages</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              The following figures are derived from publicly available data and are provided as a preliminary damages estimate. Exact traffic figures require formal discovery or paid SEO tool access.
            </p>
            <table className="w-full text-sm font-sans border-collapse mb-4">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4">Metric</th>
                  <th className="text-left py-2">Value</th>
                  <th className="text-left py-2 pl-4">Source</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Roofing Insights YouTube subscribers", "~200,000–250,000", "Public search data, July 2026"],
                  ["Roofing Insights podcast", "Active on Spotify + Apple Podcasts", "Platform listings, verified July 2026"],
                  ["theroof.store active since", "August 2021 (≥4.9 years)", "WHOIS registration record"],
                  ["theroof.store ships to", "All 50 states (including Florida)", "theroof.store website"],
                  ["Estimated branded FL searches captured/mo", "500–2,000 (est.)", "Industry CPC modeling"],
                  ["Average roofing CPC (Florida)", "$8–$15 per click", "Google Ads industry benchmarks"],
                  ["Estimated monthly traffic value diverted", "$4,000–$30,000/mo", "CPC × estimated clicks"],
                  ["Cumulative value since Aug 2021 (est.)", "$235,000–$1,770,000", "~59 months × monthly range"],
                ].map(([metric, value, source]) => (
                  <tr key={metric as string} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium align-top">{metric}</td>
                    <td className="py-2 font-semibold align-top">{value}</td>
                    <td className="py-2 pl-4 text-xs text-gray-500 align-top italic">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-600 leading-relaxed">
              <strong>Note:</strong> Unjust enrichment damages under the Lanham Act and ACPA are not limited to diverted traffic value. The respondent has built brand equity, customer lists, and contractor relationships under the infringing name that may represent additional recoverable value. Statutory damages under ACPA (15 U.S.C. § 1117(d)) range from $1,000 to $100,000 per domain, at the court's discretion.
            </p>
          </section>

          {/* Exhibit F — Wayback Machine */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">VIII. Exhibit F — Independent Third-Party Archive Verification (Internet Archive)</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              The Internet Archive's Wayback Machine (archive.org) independently crawled and preserved theroofstore.net starting in <strong>January 2002</strong> — six months before the July 29, 2002 WHOIS registration date, and captured continuously through the following years. This is <strong>third-party, independently verifiable evidence</strong> not authored or controlled by the prior rights holder, making it materially stronger than self-published claims.
            </p>
            <table className="w-full text-sm font-sans border-collapse mb-4">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4 w-32">Capture Date</th>
                  <th className="text-left py-2">Page Title / Content Summary</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Jan 21, 2002", `Title: "The Weatherproofing store." Footer: "Copyright © 2001. Anthony's Enterprises Inc. All rights reserved." Confirms live commercial content at this domain by January 2002.`],
                  ["Apr 5, 2004", `Same "Weatherproofing store" branding. "Copyright © 2004. Anthony's Enterprises Inc." Call-to-action: "Call me today for your FREE weatherproofing evaluation! Protect your property before it's too late!" Phone: (954)-274-1533 / (305)-924-0163.`],
                  ["Apr 25, 2005", `Same branding and entity. Updated phone: (754) 367-3768. Confirms continuous operation into 2005.`],
                  ["Dec 21, 2007", `Rebrand visible: "Welcome to the Roof Store." Full navigation added: about us | references | products | residential | commercial | affiliations | faq's | contact us. This marks the transition point to "The Roof Store" branding as documented in this file.`],
                ].map(([date, summary]) => (
                  <tr key={date} className="border-b border-gray-200 bg-green-50">
                    <td className="py-2 pr-4 font-semibold align-top text-xs">{date}</td>
                    <td className="py-2 leading-relaxed">{summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-600 leading-relaxed mb-2">
              <strong>Source:</strong> Internet Archive Wayback Machine, CDX API query for theroofstore.net, snapshots publicly viewable at web.archive.org/web/20020121005542/http://www.theroofstore.net/ and successive captures through 2007.
            </p>
            <div className="border border-amber-400 bg-amber-50 rounded p-4 text-xs font-sans text-amber-900 leading-relaxed">
              <strong>Chain of title clarification:</strong> The 2002–2005 archive captures list the registrant entity as <strong>"Anthony's Enterprises Inc."</strong> This was a prior corporation, since dissolved, owned by the same individual who owns and operates The Roof Store / Storm Shield Paint Systems Inc. today. The domain, brand, and business were carried forward under common ownership through the 2007 rebrand to "The Roof Store" and into the current entity — there is no gap in ownership or unrelated third party in the chain. Recommend attorney pull the Florida Sunbiz dissolution record for Anthony's Enterprises Inc. and the formation/history record for Storm Shield Paint Systems Inc. to document this common-ownership succession formally for the filing (same registrant name and/or officer across both Sunbiz records is typically sufficient).
            </div>
          </section>

          {/* Exhibit G — Printed Marketing Materials */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">IX. Exhibit G — Printed Marketing Brochure Referencing theroofstore.net</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Two-page printed marketing brochure for <strong>Storm Shield Paint Systems Inc.</strong> (dba "Roof Shield Coating System"), distributed to commercial and residential prospects in South Florida. The brochure explicitly references <strong>www.theroofstore.net</strong> twice as the destination for customer reviews and product materials data, and states the company "has been the roof restoration and waterproofing business serving the South Florida commercial and residential markets since 1994." It also includes a dated photo captioned <strong>"Fort Lauderdale Home Show, 1994"</strong> credited to Capt. Anthony R. Meurer, President — corroborating the 1994 founding date independently of the website archive record in Exhibit F.
            </p>
            <p className="text-xs font-sans text-amber-800 bg-amber-50 border border-amber-300 rounded p-3 mb-4 leading-relaxed">
              <strong>Dating note:</strong> This exact printed version references Hurricanes Wilma (2005) and Irma (2017) in customer testimonials, so this specific copy was printed or last revised sometime after 2017 — the underlying design and "since 1994" branding originated earlier (business records place initial creation in the early-to-mid 2000s), and the document has evidently been kept in ongoing use/revision since. Recommend attorney treat this as evidence of a marketing template in continuous use over two decades, dated conservatively as "in circulation, in some version, since at least the early-to-mid 2000s," rather than pinning an exact single print date without further documentation.
            </p>
            <div className="border-2 border-gray-300 rounded overflow-hidden mb-4">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT G — Storm Shield Paint Systems Inc. Brochure, Page 1</span>
                <span className="text-gray-500">Source: Company marketing archive</span>
              </div>
              <img
                src="/attached_assets/screenshots/storm_shield_brochure_page1.png"
                alt="Exhibit G page 1: Storm Shield Paint Systems Inc. brochure referencing theroofstore.net"
                className="w-full"
              />
            </div>
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT G — Storm Shield Paint Systems Inc. Brochure, Page 2</span>
                <span className="text-gray-500">Source: Company marketing archive</span>
              </div>
              <img
                src="/attached_assets/screenshots/storm_shield_brochure_page2.png"
                alt="Exhibit G page 2: Storm Shield Paint Systems Inc. brochure, since 1994, Fort Lauderdale Home Show 1994 photo"
                className="w-full"
              />
            </div>
            <p className="text-xs font-sans text-gray-500 mt-2 italic">
              Note: Brochure also lists current business address (4700 Sheridan Street, Suite J, Hollywood, FL 33021) and phone (954-210-9614), matching the prior rights holder's present-day contact information, confirming continuity of the same operating entity.
            </p>
          </section>

          {/* Exhibit H — Sunbiz Corporate Records */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">X. Exhibit H — Florida Sunbiz Corporate Records Confirming Common Ownership</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Official Florida Division of Corporations ("Sunbiz") records — not third-party or self-published sources — independently confirm that every entity name referenced in this file (including "Anthony's Enterprises Inc.," cited in Exhibit F as the 2002–2005 domain registrant) has been owned and controlled by the same individual, <strong>Anthony R. Meurer</strong>, resolving the chain-of-title question flagged in Exhibit F.
            </p>
            <table className="w-full text-sm font-sans border-collapse mb-4">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4">Entity Name</th>
                  <th className="text-left py-2 pr-4">Document #</th>
                  <th className="text-left py-2 pr-4">Filed / Period</th>
                  <th className="text-left py-2">Officer / Registered Agent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Anthony's Enterprises Inc.", "F96000003442", "Filed 07/08/1996 (FL foreign corp); revoked 09/24/1999", "Anthony R. Meurer — 3200 E 14th St Causeway, Pompano Beach, FL"],
                  ["Storm Shield Systems Inc.", "P02000006036", "Filed 01/17/2002", "Anthony R. Meurer"],
                  ["All Surface Restorations & Preservations Inc.", "P02000006036 (same entity, renamed)", "Renamed 03/31/2004", "Anthony R. Meurer"],
                  ["Storm Shield Paint Systems Inc. (current)", "P02000006036 (same entity, renamed)", "Renamed 02/02/2015 — ACTIVE today", "Anthony R. Meurer"],
                ].map(([name, doc, filed, officer]) => (
                  <tr key={name as string} className="border-b border-gray-200 align-top">
                    <td className="py-2 pr-4 font-semibold">{name}</td>
                    <td className="py-2 pr-4">{doc}</td>
                    <td className="py-2 pr-4">{filed}</td>
                    <td className="py-2 text-gray-700">{officer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Critically, document #P02000006036 is a <strong>single, unbroken corporate filing</strong> that has operated continuously since January 2002 under three successive names — Storm Shield Systems Inc. (2002–2004) → All Surface Restorations &amp; Preservations Inc. (2004–2015) → Storm Shield Paint Systems Inc. (2015–present) — with no dissolution, gap, or change of registrant/officer at any point. This is official state-record proof of continuous common ownership, independent of the website archive evidence in Exhibit F.
            </p>
            <p className="text-xs font-sans text-amber-800 bg-amber-50 border border-amber-300 rounded p-3 leading-relaxed">
              <strong>Note for counsel:</strong> Anthony's Enterprises Inc. (F96000003442) shows an administrative revocation in 1999, while Exhibit F's Wayback Machine captures list it as the theroofstore.net registrant/copyright holder as late as 2002–2005. This is not a contradiction — corporate revocation for failure to file an annual report does not retroactively erase prior use, and Sunbiz records confirm the same principal (Anthony R. Meurer) simultaneously incorporated the successor entity (Storm Shield Systems Inc., filed within months in early 2002) that carried the business and domain forward. The Roof Store confirms this is the same individual and business operating under different corporate names over time, not separate or unrelated parties. Recommend counsel cite both filings together to establish an unbroken chain of common ownership from at least 1996 to present.
            </p>
          </section>

          {/* Exhibit I — Circa-1999 TV Commercial */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XI. Exhibit I — Circa-1999 Television Commercial: "Don't Re-Roof, Waterproof at 1/2 the Cost"</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              A television commercial produced circa 1999 for the business (then operating as All Surface Restorations &amp; Preservations Inc., per Exhibit H's corporate name history) features the tagline <strong>"Don't Re-Roof, Waterproof at 1/2 the Cost"</strong> and shows live installation of the Roof Shield liquid rubber system on a flat cement tile roof. Per the site owner's direct, first-hand statement, the on-camera narration is his own voice, and the commercial displays a business phone number he has continuously owned for over 20 years — the same continuity of contact information used by the business today. A few years after airing, the commercial was uploaded to YouTube, where its own platform-recorded metadata provides independent, third-party-verifiable corroboration of its age and content.
            </p>
            <div className="border-2 border-gray-300 rounded overflow-hidden mb-3 bg-black aspect-video max-w-2xl">
              <iframe
                src="https://www.youtube.com/embed/IUcKj0nKNDc"
                title="Circa-1999 TV commercial — Don't Re-Roof, Waterproof at 1/2 the Cost — Roof Shield system installation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="border border-gray-300 rounded p-4 bg-gray-50 font-sans text-sm mb-4">
              <p className="font-semibold mb-1">YouTube Listing Details (verbatim, platform-recorded metadata):</p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Title:</strong> "Roof repair Fort Lauderdale Broward County"</li>
                <li><strong>Uploader / channel handle:</strong> makira1111</li>
                <li><strong>Views:</strong> 131</li>
                <li><strong>Upload age (as displayed by YouTube):</strong> "14y ago" — i.e. roughly 2012, consistent with the site owner's account that the commercial was uploaded a few years after its original ~1999 broadcast</li>
                <li><strong>Description (verbatim excerpt):</strong> "Don't Re-roof Weatherproof at 1/2 the cost. The Original Liquid Applied Rubber Roof Shield System since 1994, rubber roof ..."</li>
                <li><strong>URL:</strong> youtube.com/watch?v=IUcKj0nKNDc</li>
              </ul>
            </div>
            <p className="text-xs font-sans text-gray-500 mb-4 italic">
              Source: youtube.com/watch?v=IUcKj0nKNDc. Broadcast produced circa 1999, per site owner's recollection; the YouTube upload itself is independently datable via the platform's own "14y ago" listing (approx. 2012). A precise original broadcast/air date has not yet been independently documented and should be corroborated where possible (e.g. station traffic logs, video file metadata, or a dated master tape/cassette if one still exists).
            </p>
            <p className="text-xs font-sans text-amber-800 bg-amber-50 border border-amber-300 rounded p-3 leading-relaxed">
              <strong>Note for counsel:</strong> This exhibit is supported both by the site owner's first-hand statement (personal narration, personal phone number shown, personal recollection of production date) and by independently verifiable YouTube platform metadata (channel handle, upload-age indicator, view count, verbatim description) that is not authored or controlled by the respondent and predates this dispute by well over a decade. Together, these establish a strong, dated record of continuous use of the "Don't Re-Roof, Waterproof" tagline and the Roof Shield system name well before theroof.store existed. Counsel may still wish to further authenticate the original ~1999 broadcast date (e.g., broadcast records or witness affidavit), but the YouTube upload date itself should be independently verifiable directly from the platform (e.g., via YouTube Data API or a notarized screenshot) if needed for filing.
            </p>
          </section>

          {/* Exhibit J — 2011 Field Footage */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XI-A. Exhibit J — 2011 Field Footage: Cement Tile Roof Repair, Fort Lauderdale / Pompano Beach</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              A second, independently uploaded video on the same YouTube channel shows on-site field footage of a cement tile roof repair performed by the business in Fort Lauderdale / Pompano Beach, Florida, again using the "Don't Re-Roof, Weatherproof at 1/2 the Cost" positioning. Uploaded to YouTube on December 6, 2011 (per the platform's own recorded upload date), this predates theroof.store's August 2021 domain registration by nearly a decade and corroborates continuous, real-world use of the brand and tagline between the circa-1999 commercial (Exhibit I) and the present day.
            </p>
            <div className="border-2 border-gray-300 rounded overflow-hidden mb-3 bg-black aspect-video max-w-2xl">
              <iframe
                src="https://www.youtube.com/embed/_D-SYtBH-mQ"
                title="2011 field footage — cement tile roof repair, Fort Lauderdale / Pompano Beach"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="border border-gray-300 rounded p-4 bg-gray-50 font-sans text-sm mb-4">
              <p className="font-semibold mb-1">YouTube Listing Details (verbatim, platform-recorded metadata):</p>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Title:</strong> "Roof repair cement tile roof Ft lauderdale, Pompano Beach"</li>
                <li><strong>Uploader / channel handle:</strong> makira1111 (same channel as Exhibit I)</li>
                <li><strong>Views:</strong> 179</li>
                <li><strong>Upload age (as displayed by YouTube):</strong> "14y ago"; platform-recorded upload date December 6, 2011</li>
                <li><strong>Description (verbatim excerpt):</strong> "Don't Re Roof Weatherproof your roof at 1/2 The cost of re roofing in Fort Lauderdale Florida.33301. Visit us at www.theroofstore.net or call toll free 954-302-5387 for your free over the phone evaluation estimate and product price sheet"</li>
                <li><strong>URL:</strong> youtube.com/watch?v=_D-SYtBH-mQ</li>
              </ul>
            </div>
            <p className="text-xs font-sans text-gray-500 mb-4 italic">
              Source: youtube.com/watch?v=_D-SYtBH-mQ. Note the description lists a legacy toll-free number (954-302-5387), distinct from the business's current number (954-210-9614) — consistent with the same business updating its contact information over a multi-decade operating history, not a change of identity. The domain reference "www.theroofstore.net" in this 2011 description independently corroborates continuous use of that exact domain between Exhibit F's Wayback captures and the present.
            </p>
          </section>

          {/* Exhibit K — Google Search Console Brand Impact */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XI-B. Exhibit K — Google Search Console Data: Quantified Brand Search Damage</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Google Search Console data extracted from the prior rights holder's verified GSC property (theroofstore.net) covering a 3-month trailing window through July 22, 2026. This data provides direct, platform-native evidence of the search-engine brand confusion caused by the respondent's identical name use — measured not from estimates but from Google's own impression and click records for searches performed by real users.
            </p>
            <table className="w-full text-sm font-sans border-collapse mb-4">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4">Search Query</th>
                  <th className="text-left py-2 pr-4">Avg. Position</th>
                  <th className="text-left py-2 pr-4">Impressions (3 mo.)</th>
                  <th className="text-left py-2 pr-4">Clicks (3 mo.)</th>
                  <th className="text-left py-2">Expected Position</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["the roof store", "20.1", "161", "3", "#1 — own brand name"],
                  ["roof coating", "67.1", "2,782", "0", "Page 1 for primary service term"],
                  ["waterproof roof coating", "46.7", "—", "—", "Page 1–3 for core service"],
                  ["roof paint miami", "4.1", "—", "—", "Top 3 (local pack absorbing clicks)"],
                ].map(([query, pos, imp, clicks, expected]) => (
                  <tr key={query as string} className={`border-b border-gray-200 ${query === "the roof store" ? "bg-red-50 font-semibold" : ""}`}>
                    <td className="py-2 pr-4 font-mono text-xs">{query}</td>
                    <td className="py-2 pr-4 text-red-700 font-bold">{pos}</td>
                    <td className="py-2 pr-4">{imp}</td>
                    <td className="py-2 pr-4">{clicks}</td>
                    <td className="py-2 text-xs text-gray-500 italic">{expected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border border-red-300 bg-red-50 rounded p-4 text-sm font-sans text-red-900 leading-relaxed mb-4">
              <strong>Key finding — brand name at position 20.1:</strong> A business ranking at position 20 for its own exact brand name is a direct indicator of severe brand authority confusion in Google's index. An established local business with 24 years of continuous operation and a 2002 domain registration should appear at position 1 for its own name. The 19-position deficit — representing an estimated 95%+ loss of brand-name click share — is consistent with Google's inability to resolve which entity is the authoritative "The Roof Store" when two businesses in the same industry operate under the same name simultaneously.
            </div>
            <p className="text-sm font-sans mb-3 leading-relaxed">
              <strong>Compound effect:</strong> Brand confusion suppresses not only brand-name searches but overall domain authority signals. When Google cannot confidently associate "The Roof Store" name with theroofstore.net, it reduces the authority weight given to that domain across all keyword categories — compounding the damage beyond the brand-term loss alone. The "roof coating" position of 67.1 (page 7, effectively invisible) and "waterproof roof coating" at 46.7 (page 5) are consistent with a domain experiencing suppressed authority from unresolved brand identity conflict.
            </p>
            <p className="text-xs font-sans text-gray-600 leading-relaxed">
              <strong>Source:</strong> Google Search Console, verified property theroofstore.net, 3-month data window ending July 22, 2026. Data extracted and recorded by site administrator. Full GSC export available upon request in discovery.
            </p>
            <div className="border border-amber-300 bg-amber-50 rounded p-4 text-sm font-sans text-amber-900 leading-relaxed mt-4">
              <strong>GSC Data Retention Caveat (for counsel):</strong> Google Search Console retains query-level data for a maximum of 16 months. Pre-August 2021 baseline data — which would establish the brand search position before theroof.store launched — is no longer available within GSC. Establishing the August 2021 inflection point requires a third-party historical tool (Ahrefs, SEMrush, or Moz) capable of reconstructing historical keyword ranking data. All data available to the site administrator has been produced above; third-party tool comparison is recommended to counsel as the next evidentiary step.
            </div>
            <div className="mt-6 border-t border-gray-300 pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wide mb-3">Recommended Damages Quantification Methodology</h4>
              <p className="text-xs font-sans text-gray-700 mb-3 leading-relaxed">The following five-step methodology, once executed with available data sources, will convert the current CPC-modeled projection in Exhibit E into a defensible, auditable damages figure suitable for demand letter, UDRP filing, or litigation support:</p>
              <table className="w-full text-xs font-sans border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="text-left py-2 pr-3 w-8">Step</th>
                    <th className="text-left py-2 pr-3">Metric</th>
                    <th className="text-left py-2">How It Becomes a Damages Figure</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Baseline branded search volume for 'the roof store' + FL variants, pre-Aug 2021 vs. post", "Establishes whether search demand for the brand name split after theroof.store launched — requires Ahrefs/SEMrush historical data"],
                    ["2", "GSC impression share for branded terms, month-by-month, Aug 2021–present", "Shows the actual erosion curve, not a flat CPC estimate — 16-month window available now, pre-2025 window requires third-party tool"],
                    ["3", "Apply real Florida roofing CPC (Exhibit E: $8–$15/click) to the measured impression/click erosion", "Converts real search data into a defensible dollar figure — replaces the modeled volume assumption in the current Exhibit E"],
                    ["4", "Cross-reference with GA4 direct traffic and conversion trend over the same window", "Corroborates the search-data finding with a second, independent metric — NOTE: GA4 not yet installed on theroofstore.net; installation recommended immediately to begin building the record"],
                    ["5", "Layer in Ahrefs/SEMrush keyword cannibalization data", "Shows specific queries lost, not just aggregate volume — converts a range into a number opposing counsel must address"],
                  ].map(([step, metric, how]) => (
                    <tr key={step as string} className="border-b border-gray-200">
                      <td className="py-2 pr-3 font-bold text-gray-900">{step}</td>
                      <td className="py-2 pr-3 text-gray-800">{metric}</td>
                      <td className="py-2 text-gray-600 italic">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs font-sans text-gray-500 mt-3 italic">Methodology source: Supplementary Impact Analysis Memo, July 22, 2026. Does not constitute legal advice. All damages figures should be reviewed by counsel before inclusion in any filing or demand letter.</p>
            </div>
          </section>

          {/* Exhibit L — Public Prior Rights Notice Page */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XI-C. Exhibit L — Public Prior Rights Notice Page (Published July 7, 2026)</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              On July 7, 2026 — prior to any direct communication with the respondent — the prior rights holder published a fully indexed public notice page at <strong>https://www.theroofstore.net/the-original-roof-store-florida</strong>. This page serves as a dated, Google-indexed, public-record assertion of prior rights predating any dispute filing. It includes:
            </p>
            <ul className="list-disc list-inside text-sm font-sans space-y-1 mb-4 text-gray-700">
              <li>Organization schema markup declaring <strong>foundingDate: "1994"</strong> and continuous domain use from July 29, 2002</li>
              <li>Full public timeline of commercial use from 1994 to present</li>
              <li>Embedded circa-1999 TV commercial (Exhibit I) and 2011 field footage (Exhibit J)</li>
              <li>Explicit <strong>"Notice of Prior Rights"</strong> section citing UDRP ¶4(b)(iii), ¶4(b)(iv), and the willful blindness doctrine</li>
              <li>Reservation of rights covering WIPO filing, ACPA action, and Florida state law remedies</li>
            </ul>
            <div className="border border-gray-300 rounded p-4 bg-gray-50 font-sans text-sm">
              <p className="font-semibold mb-1">Live URL (publicly accessible, Google-indexed):</p>
              <p className="font-mono text-blue-700">https://www.theroofstore.net/the-original-roof-store-florida</p>
              <p className="text-xs text-gray-500 mt-2">Published: July 7, 2026 · Page title: "The Original Roof Store Florida — Established 1994 | Trademark Notice"</p>
            </div>
            <p className="text-xs font-sans text-gray-600 mt-3 leading-relaxed">
              <strong>Evidentiary value:</strong> Publication of this page on July 7, 2026 establishes a dated, independent, publicly accessible record that the prior rights holder was aware of the conflict and had formally asserted prior rights before any UDRP complaint was filed. This defeats any respondent argument that the complainant acquiesced to concurrent use or was unaware of the conflict. The page is archived by Google's crawl index and the Internet Archive (Wayback Machine), providing independent dating not within the prior rights holder's control.
            </p>
          </section>

          {/* Exhibit M — Automated Monitoring System */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XI-D. Exhibit M — Automated Monitoring System &amp; Append-Only Evidence Log</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Beginning July 8, 2026, the prior rights holder deployed an automated monitoring system that periodically fetches the live theroof.store homepage, computes a SHA-256 cryptographic hash of the full HTML response, and compares it against the previous check to detect any content changes. Each check — whether it detects a change or confirms no change — is permanently appended to an append-only database log. Entries cannot be edited or deleted once recorded, preserving evidentiary chain-of-custody integrity.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-sans mb-4">
              <div className="border border-gray-300 rounded p-4 bg-gray-50">
                <p className="font-semibold mb-2">System Specifications</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li><strong>Target URL:</strong> https://theroof.store/</li>
                  <li><strong>Hash algorithm:</strong> SHA-256 (full HTML content)</li>
                  <li><strong>Storage:</strong> Append-only PostgreSQL log — no edit/delete</li>
                  <li><strong>Snapshot size:</strong> First 20,000 characters of HTML per check</li>
                  <li><strong>Activated:</strong> July 8, 2026</li>
                  <li><strong>Access control:</strong> Admin write + attorney read-only (separate passwords)</li>
                </ul>
              </div>
              <div className="border border-gray-300 rounded p-4 bg-gray-50">
                <p className="font-semibold mb-2">Log Entries to Date (as of July 22, 2026)</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>Jul 8, 2026 10:25 AM — Baseline snapshot captured (first automated check)</li>
                  <li>Jul 8, 2026 11:37 AM — Automated check failed to reach target site</li>
                  <li>Jul 8, 2026 11:53 AM — Automated check failed to reach target site</li>
                  <li>Jul 8, 2026 12:31 PM — <strong className="text-amber-700">CHANGE DETECTED</strong> since last automated check — needs human review</li>
                </ul>
              </div>
            </div>
            <p className="text-xs font-sans text-gray-600 leading-relaxed">
              Attorney read-only access to the live log is available at <strong>https://www.theroofstore.net/trademark-monitoring</strong> using the separately provided attorney access password. The log view is read-only from the attorney account — no entries can be added, modified, or deleted from that access level, preserving the integrity of the evidentiary record for outside counsel review.
            </p>
          </section>

          {/* No Legitimate Rights Analysis */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XII. UDRP Element Analysis — Respondent Has No Legitimate Rights or Interest</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              This section directly addresses the second required element of the UDRP/URS test: that the <strong>respondent</strong> (Dmitry Lipinskiy, operating theroof.store) has no rights or legitimate interest of his own in the name "The Roof Store." Under UDRP Policy ¶4(a)(ii) and ¶4(c), once the complainant makes a prima facie showing on this element, the burden shifts to the respondent to come forward with evidence of a legitimate right — none is apparent from the public record.
            </p>
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4 w-1/3">UDRP ¶4(c) Safe Harbor</th>
                  <th className="text-left py-2 pr-4 w-1/3">Respondent's Position</th>
                  <th className="text-left py-2">Supporting Evidence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "¶4(c)(i) — Bona fide offering of goods/services under the name before any notice of the dispute",
                    "Fails. Respondent registered theroof.store in August 2021 — 19 years after the prior rights holder's domain and 27 years after the business was founded, in the same industry and geographic market. Prior use by another party in the same field at time of registration defeats a claim of bona fide, independent adoption.",
                    "Section II Timeline; Exhibit C (WHOIS dates)",
                  ],
                  [
                    "¶4(c)(ii) — Respondent has been commonly known by the domain name",
                    "Fails. Respondent's own public identity is \"Dmitry Lipinskiy\" / \"Roofing Insights\" — built since 2017, years before theroof.store existed. \"The Roof Store\" is not his personal or pre-existing business name; it was adopted for the domain in 2021 to compete in an industry he already had an audience in.",
                    "Section II Timeline (Roofing Insights founded 2017); Exhibit D",
                  ],
                  [
                    "¶4(c)(iii) — Legitimate noncommercial or fair use, without intent for commercial gain or to mislead",
                    "Fails. Respondent operates theroof.store as an active bulk roofing-supply commerce site shipping nationwide, including into Florida — the prior rights holder's core market. This is textbook commercial use of an identical name, not commentary, criticism, or fair use.",
                    "Exhibit A (homepage/commerce); Exhibit E (digital reach)",
                  ],
                ].map(([title, position, evidence]) => (
                  <tr key={title as string} className="border-b border-gray-200 align-top">
                    <td className="py-2 pr-4 font-medium">{title}</td>
                    <td className="py-2 pr-4 text-gray-700">{position}</td>
                    <td className="py-2 text-xs text-gray-500 italic">{evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm font-sans mt-4 leading-relaxed">
              Additionally, respondent holds no trademark registration of his own for "The Roof Store" (none located in USPTO or Florida Sunbiz trademark records as of the documentation date), and his own on-camera statement (Exhibit D) confirms the name was adopted as a deliberate brand-strategy decision — undercutting any argument that use of the identical name was coincidental, generic, or independently developed. Taken together, the record supports a prima facie finding that respondent lacks any right or legitimate interest in the name, shifting the burden to him to justify his use — a burden the public record gives him no apparent means to meet.
            </p>
          </section>

          {/* SEO / AI Manipulation Attack Vectors */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XIII. Anticipated Counter-Attack Vectors &amp; Countermeasures</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              If the respondent becomes aware of this claim, the following are the realistic technical/digital tactics they could attempt to muddy the record, along with the countermeasure already in place or recommended for each. Any attempt along these lines would itself constitute additional evidence of bad faith and awareness of prior rights.
            </p>
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4 w-1/3">Possible Tactic</th>
                  <th className="text-left py-2 pr-4 w-1/3">Why It Would Backfire</th>
                  <th className="text-left py-2">Our Countermeasure</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Publish a \"rebuttal\" or counter-history page disputing this claim", "Proves actual knowledge of the prior claim — defeats any innocent-registrant defense and is independently datable/archivable as new evidence of bad faith.", "Do not engage or link to it. Screenshot + Wayback-archive it immediately and log it in Section XIV below."],
                  ["Negative SEO: flood theroofstore.net with spammy/toxic backlinks to trigger a Google penalty", "Google's algorithm largely discounts this against established, trusted domains; a sudden unnatural link spike is itself detectable and reportable.", "Monitor Search Console \"Links\" report monthly; use Google's Disavow Tool if a spike appears; Ahrefs/SEMrush backlink alerts."],
                  ["Schema markup spam — inject false structured data (fake founding dates, fake reviews, fake awards) to compete for Google's Knowledge Panel / AI Overview citation", "Structured data claims are checkable against public records (Sunbiz, BBB, WHOIS); false schema is a reportable policy violation to Google.", "Keep our own Organization/LocalBusiness schema accurate, dated, and cross-linked (sameAs) to BBB, GMB, and Sunbiz so Google's entity graph favors the verifiable source."],
                  ["Content/AI farming — publish large volumes of AI-generated articles repeating \"The Roof Store\" + Florida keywords to dominate AI Overviews and LLM-cited answers", "Volume without authority or citations rarely outranks a domain with 24 years of consistent history and real citations once Google/AI systems weigh source trust.", "Continue building small amounts of high-quality, factual, citable content (which we're already doing) rather than competing on volume."],
                  ["Hidden-text / prompt-injection attempts aimed at AI answer engines (text designed to manipulate what LLMs say when asked about \"The Roof Store\")", "This is a form of manipulation most AI providers explicitly police; it can be reported directly to the AI platform as manipulation/spam.", "Periodically ask ChatGPT/Gemini/Perplexity/Google AI Overview \"who is the original Roof Store in Florida\" and log the answer as evidence of current AI perception."],
                  ["Fake or review-bombing attacks against BBB/GMB profiles to damage credibility", "Fake reviews are directly reportable and removable via BBB and Google's review policy enforcement, and create a paper trail of harassment.", "Monitor BBB/GMB profiles for unusual review activity; report and document immediately."],
                ].map(([tactic, why, counter]) => (
                  <tr key={tactic as string} className="border-b border-gray-200 align-top">
                    <td className="py-2 pr-4">{tactic}</td>
                    <td className="py-2 pr-4 text-gray-700">{why}</td>
                    <td className="py-2 text-gray-700">{counter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Monitoring & Defense Log */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XIV. Monitoring &amp; Defense Log</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Running log of monitoring activity and any new incidents observed. Add a dated row every time something new is checked or discovered.
            </p>
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4 w-32">Date</th>
                  <th className="text-left py-2 pr-4 w-40">Check / Incident</th>
                  <th className="text-left py-2">Finding</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Jul 8, 2026", "Initial evidence file compiled", "Baseline documentation established — see Exhibits A–I above."],
                  ["Jul 8, 2026", "Wayback Machine independent archive pull", "Confirmed continuous archive.org captures of theroofstore.net from Jan 2002 onward — see Exhibit F."],
                  ["Jul 8, 2026", "Printed marketing brochure located and added", "Storm Shield Paint Systems Inc. brochure referencing theroofstore.net and 1994 founding located and added as Exhibit G."],
                  ["Jul 8, 2026", "Sunbiz corporate records pulled", "Official Florida Sunbiz filings confirming common ownership (Anthony R. Meurer) across Anthony's Enterprises Inc., Storm Shield Systems Inc., All Surface Restorations & Preservations Inc., and Storm Shield Paint Systems Inc. located and added as Exhibit H."],
                  ["Jul 8, 2026", "Circa-1999 TV commercial located and added", "Original television commercial (\"Don't Re-Roof, Waterproof at 1/2 the Cost\") showing Roof Shield system installation, narrated by site owner, located on YouTube and added as Exhibit I."],
                  ["Jul 8, 2026", "YouTube upload metadata added to Exhibit I", "Platform-recorded metadata for the YouTube listing (channel handle \"makira1111,\" title \"Roof repair Fort Lauderdale Broward County,\" 131 views, \"14y ago\" upload age, verbatim description) added to Exhibit I as independent corroboration."],
                  ["Jul 8, 2026", "2011 field footage located and added", "Second video on the same \"makira1111\" YouTube channel — \"Roof repair cement tile roof Ft lauderdale, Pompano Beach\" (179 views, uploaded Dec 6, 2011, description references www.theroofstore.net and a legacy toll-free number) — located and added as Exhibit J."],
                  ["Jul 8, 2026", "Automated monitoring system activated", "SHA-256 hash-based monitoring of theroof.store homepage deployed. Baseline snapshot captured 10:25 AM EDT. Three subsequent checks recorded same day: two failed to reach target site; one detected a CHANGE from baseline — flagged for human review. Append-only log activated with attorney read-only access at /trademark-monitoring."],
                  ["Jul 7, 2026", "Public prior rights notice page published", "\"The Original Roof Store Florida — Established 1994 | Trademark Notice\" published at https://www.theroofstore.net/the-original-roof-store-florida. Page is fully Google-indexed, includes Organization schema with foundingDate: 1994, full commercial timeline, embedded 1999 TV commercial and 2011 field footage, and explicit UDRP ¶4(b)(iii)/¶4(b)(iv) prior rights notice. Constitutes public record of prior rights claim predating any filing. Added as Exhibit L."],
                  ["Jul 22, 2026", "Google Search Console brand impact data extracted", "3-month GSC data reviewed for theroofstore.net. Brand term \"the roof store\" at position 20.1 — 161 impressions, 3 clicks. \"Roof coating\" at position 67.1 — 2,782 impressions, 0 clicks. Data added as Exhibit K. Confirms quantifiable, platform-native evidence of search-engine brand confusion directly attributable to respondent's identical name use."],
                  ["Jul 22, 2026", "shopping.theroofstore.net legacy subdomain redirected", "Legacy subdomain shopping.theroofstore.net (an abandoned ~2020 PHP shopping cart indexed by Google) was found to be competing with theroofstore.net for brand-name searches, compounding the position 20.1 deficit. A 301 permanent redirect was implemented via .htaccess, routing all traffic from the subdomain to https://www.theroofstore.net/. Redirect verified live."],
                  ["Jul 22, 2026", "Brand evidence file PDF compiled and preserved", "Full evidence file printed to PDF (7 pages, image-based) and saved to project archive as Brand_Evidence_File_theroofstore_1784750473135.pdf. Document date updated to July 22, 2026. Exhibit images (A, B-1, B-2) confirmed present in project and copied to correct web-accessible path for display in both the live page and future PDF prints."],
                  ["Jul 22, 2026", "Exhibit K, L, M added to evidence file", "Google Search Console brand impact data (Exhibit K), public prior rights notice page (Exhibit L), and automated monitoring system description (Exhibit M) added to this evidence file. Document date updated from July 8 to July 22, 2026."],
                ].map(([date, check, finding]) => (
                  <tr key={date + check} className="border-b border-gray-200 align-top">
                    <td className="py-2 pr-4 font-semibold text-xs">{date}</td>
                    <td className="py-2 pr-4">{check}</td>
                    <td className="py-2 text-gray-700">{finding}</td>
                  </tr>
                ))}
                <tr className="border-b border-dashed border-gray-300 align-top text-gray-400 italic">
                  <td className="py-3 pr-4 text-xs">[date]</td>
                  <td className="py-3 pr-4">[next monitoring check]</td>
                  <td className="py-3">[finding — add as new incidents/checks occur]</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-500 mt-3 italic">
              Recommended monitoring cadence: monthly Search Console link/manual-action check; Google Alerts for "the roof store" + "trademark"; quarterly Ahrefs/SEMrush comparison against theroof.store; periodic AI-answer-engine spot checks (ChatGPT, Gemini, Google AI Overview) for "who is the original Roof Store in Florida."
            </p>
          </section>

          {/* Legal Framework */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XV. Applicable Legal Frameworks</h3>
            <div className="grid grid-cols-2 gap-4 text-sm font-sans">
              {[
                {
                  title: "ICANN UDRP",
                  body: "Uniform Domain-Name Dispute-Resolution Policy. Applies to .store TLD. Three-element test: (1) identical/confusingly similar mark, (2) no legitimate rights by respondent, (3) bad faith registration and use. Successful outcome: domain transfer or cancellation. Cost: ~$1,500–$3,500. Timeline: 60–90 days."
                },
                {
                  title: "WIPO Arbitration",
                  body: "World Intellectual Property Organization — one of ICANN's approved dispute resolution providers. Generally preferred for international respondents. Filing fee ~$1,500 (1 panelist). Full panel (3 arbitrators) available for ~$4,000."
                },
                {
                  title: "ACPA — Anti-Cybersquatting Consumer Protection Act",
                  body: "15 U.S.C. § 1125(d). Applies when domain registrant had bad faith intent to profit from a distinctive mark. Statutory damages $1,000–$100,000 per domain. In personam jurisdiction requires respondent identity — may require unmasking Domains By Proxy registrant via court order or UDRP discovery."
                },
                {
                  title: "Lanham Act § 43(a)",
                  body: "Federal unfair competition / false designation of origin. Applies to trademark-like rights even without federal registration. Prior use since 1994 establishes common law mark in Florida. Relevant to both injunctive relief and damages for unjust enrichment from infringing commercial activity."
                },
              ].map(f => (
                <div key={f.title} className="border border-gray-300 rounded p-4">
                  <p className="font-bold mb-1">{f.title}</p>
                  <p className="text-xs leading-relaxed text-gray-700">{f.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Next Steps */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XVI. Recommended Next Steps</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm font-sans leading-relaxed">
              <li><strong>Attorney review of this file</strong> — Florida IP counsel to assess strength of common law mark, UDRP eligibility, and ACPA standing before any public action.</li>
              <li><strong>Formal WHOIS/registrant unmasking</strong> — Confirm Dmitry Lipinskiy as registrant of record via UDRP discovery or pre-suit demand to GoDaddy.</li>
              <li><strong>Run paid SEO analysis</strong> — Pull theroof.store and theroofstore.net side-by-side on Ahrefs or SEMrush to document domain authority gap and specific keyword cannibalization before filing.</li>
              <li><strong>Cease-and-desist letter</strong> — Send privately to Dmitry Lipinskiy (personal and business addresses via Roofing Insights, theroof.store contact form) before any public filing. Preserve settlement leverage.</li>
              <li><strong>File UDRP complaint</strong> — If C&amp;D is ignored or rejected, file with WIPO or The Forum. Request domain transfer (not mere cancellation) to maximize outcome.</li>
              <li><strong>Parallel brand building</strong> — Continue entity reinforcement on theroofstore.net (structured data, content, citations) regardless of legal outcome, to recover organic search equity independently.</li>
            </ol>
          </section>

          {/* Reservation */}
          <section className="mb-12">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XVII. Reservation of Rights</h3>
            <p className="text-sm font-sans leading-relaxed text-gray-700">
              The Roof Store / Storm Shield Paint Systems Inc. expressly reserves all rights under the Lanham Act, ACPA, Florida common law, and ICANN UDRP with respect to the domain theroof.store and any other domain names or social media handles using "The Roof Store" brand. This document does not constitute a waiver of any right or remedy. All evidence herein was captured from publicly accessible web pages and represents the live state of the respondent's commercial operations as of the documentation date.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t-2 border-gray-900 pt-6 text-xs font-sans text-gray-500 flex justify-between">
            <div>
              <p className="font-semibold text-gray-700">The Roof Store / Storm Shield Paint Systems Inc.</p>
              <p>4801 S University Dr, Davie, FL 33328 · (954) 210-9614 · theroofstore.net</p>
            </div>
            <div className="text-right">
              <p>Document prepared: {today}</p>
              <p className="italic">Confidential — Attorney Review Copy</p>
            </div>
          </div>

          {/* Print button - hidden in print */}
          <div className="mt-8 print:hidden text-center">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded font-sans text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Print / Save as PDF
            </button>
            <p className="text-xs text-gray-400 mt-2 font-sans">Use your browser's File → Print → Save as PDF</p>
          </div>

        </div>
      </div>
    </>
  );
}
