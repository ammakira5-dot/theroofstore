import { SEO } from "@/components/SEO";

const today = "July 30, 2026";

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

          {/* Companion Documents */}
          <div className="mb-8 border border-blue-200 bg-blue-50 rounded p-4 font-sans text-sm">
            <p className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2">Companion Evidence Files</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-blue-500 font-bold text-base leading-none">→</span>
                <div>
                  <a href="/redemption-evidence-google-1" className="font-semibold text-blue-800 underline hover:text-blue-600">
                    Redemption Evd Google File 1
                  </a>
                  <span className="text-gray-600 ml-2">— Google Platform Complaint &amp; Brand Confusion Evidence: Exhibit P (Moz domain authority gap, 9× keyword suppression), Exhibit Q (Google Merchant Center / Shopping account removal ~2022–2023), Exhibit R (GSC brand search suppression data), Exhibit T (Google AI answer brand misattribution — non-existent "Synthetic Roofing Underlayment" product attributed to the complainant, captured Aug 2, 2026), three-tier financial damages table, pre-written Google Legal Troubleshooter form answers, and direct filing links.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-2">
                <span className="mt-0.5 text-blue-500 font-bold text-base leading-none">→</span>
                <div>
                  <a href="/google-complaint-steps" className="font-semibold text-blue-800 underline hover:text-blue-600">
                    Google Complaint Steps — Access &amp; Fill-In Ready
                  </a>
                  <span className="text-gray-600 ml-2">— Step-by-step Google filing guide: 5 pre-written form answers for Google Legal Troubleshooter, Search Spam Report, Merchant Center reinstatement request, Ads complaint, and WIPO UDRP — all copy-paste ready with direct URLs.</span>
                </div>
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
                  { date: "1998–1999", event: "Fort Lauderdale Home Show trade booth photographed — Anthony's Enterprises Inc. dba All Surface Restorations & Preservations booth displays the banner \"Don't Reroof — Waterproof! ½ THE COST OF A REROOF\" with the founder present. Dated physical-world proof of public commercial use of the brand slogan 22+ years before respondent's domain registration. See Exhibit G-2.", party: "Prior Rights Holder" },
                  { date: "Circa 2000", event: "Original \"Anthony Enterprises\" online store launches — a functioning HTML shopping-cart storefront selling Thermocoat roof coating under the \"Don't Reroof — Weatherproof at ½ the Cost\" banner, with the Roofshield™ SSS-shield bucket displayed. Recovered intact from the hosting server July 30, 2026. See Exhibit G-3.", party: "Prior Rights Holder" },
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
            <div className="border border-green-500 bg-green-50 rounded p-4 text-xs font-sans text-green-900 leading-relaxed mt-3">
              <strong>Phone continuity — 21 years of unbroken commercial use (new evidence, July 2026):</strong> The phone number <strong>(754) 367-3768</strong> first documented in the April 25, 2005 Wayback Machine capture above remains in active commercial use today (July 2026) on <strong>ftlauderdaleroofcoating.com</strong>, an authorized network site operating under the same brand system. A phone number documented on theroofstore.net in 2005 and still active in the brand network in 2026 constitutes a 21-year chain of continuous commercial use — independently verifiable through both the Internet Archive record above and the live website. This is third-party-confirmed, date-stamped evidence of prior and continuous commercial use of the brand network, relevant to both UDRP and trademark litigation proceedings.
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
              Note: Brochure also lists business address (4700 Sheridan Street, Suite J, Hollywood, FL 33021) and phone (954-210-9614), confirming continuity of the same operating entity.
            </p>
            <div className="border border-amber-400 bg-amber-50 rounded p-4 text-xs font-sans text-amber-900 leading-relaxed mt-3">
              <strong>Note for counsel — address discrepancy to clarify before filing:</strong> Exhibit G's brochure lists the business address as <strong>4700 Sheridan Street, Suite J, Hollywood, FL 33021</strong>. Current live schema on theroofstore.net lists the address as <strong>4801 S University Dr, Davie, FL 33328</strong>. This reflects a physical relocation of the business HQ from Hollywood to Davie at some point after this brochure version was in circulation — both addresses are legitimate, they simply correspond to different periods of operation. Recommend adding a date-of-relocation qualifier to Exhibit G's framing (e.g., "address current as of [year of brochure distribution]") before filing. A utility bill, lease agreement, or Florida Sunbiz registered agent address update showing the move date would formally close this gap and prevent opposing counsel from characterizing the discrepancy as inconsistency.
            </div>
          </section>

          {/* Exhibit G-2 — 1998/1999 Fort Lauderdale Home Show Booth Photograph */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">IX-B. Exhibit G-2 — Fort Lauderdale Home Show Booth Photograph (1998–1999)</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              Original photograph of the company's trade show booth at the <strong>Fort Lauderdale Home Show, 1998–1999</strong>, with the founder present at the booth. The booth signage displays: (1) the corporate banner <strong>"Anthony's Enterprises, Inc. — All Surface Restorations &amp; Preservations"</strong>; (2) the brand slogan banner <strong>"Don't Reroof —" / "Waterproof!" / "½ THE COST OF A REROOF"</strong>; (3) an overhead placard reading <strong>"All Surface Restorations &amp; Preservation"</strong>; and (4) before/after roof coating display boards and product buckets — the same product category and value proposition marketed by The Roof Store today.
            </p>
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT G-2 — Fort Lauderdale Home Show Booth, 1998–1999</span>
                <span className="text-gray-500">Source: Company photo archive · Added: July 29, 2026</span>
              </div>
              <img
                src="/images/ft-lauderdale-home-show-1998-1999-booth.png"
                alt="Exhibit G-2: 1998–1999 Fort Lauderdale Home Show booth of Anthony's Enterprises Inc. dba All Surface Restorations & Preservations displaying the Don't Reroof — Waterproof at half the cost of a reroof banner"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <p className="text-xs font-sans text-gray-500 mt-2 italic">
              Note: Banner reads "Anthony's Enterprises, Inc. / All Surface Restorations &amp; Preservations" above the slogan "Don't Reroof — Waterproof! ½ THE COST OF A REROOF." Founder pictured at right. Before/after coating sample boards and 5-gallon product buckets visible in booth.
            </p>
            <div className="border border-green-500 bg-green-50 rounded p-4 text-xs font-sans text-green-900 leading-relaxed mt-3">
              <strong>Evidentiary value:</strong> This photograph is dated physical-world proof that the exact slogan still used by The Roof Store today — "Don't Re-Roof, Waterproof at ½ the Cost" (see the 1999 TV commercial, Exhibit I, and the current homepage) — was in public commercial use at a major consumer trade show <strong>22–23 years before the respondent registered theroof.store (August 2021)</strong>. The corporate name on the banner, <strong>Anthony's Enterprises, Inc.</strong>, is the same entity independently confirmed by Florida Sunbiz records (Exhibit H) and by the 2002–2005 domain registration records (Exhibit F) as owned by the same individual who owns The Roof Store / Storm Shield Paint Systems Inc. today — directly corroborating the unbroken chain of title from the 1990s to the present. The photograph also corroborates the "Fort Lauderdale Home Show, 1994" reference in the printed brochure (Exhibit G), establishing a pattern of recurring Home Show presence across the 1990s.
            </div>
          </section>

          {/* Exhibit G-3 — Circa-2000 Original Online Store (Recovered from Hosting Server) */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">IX-C. Exhibit G-3 — Original "Anthony Enterprises" Online Store, Circa 2000 (Recovered from Hosting Server)</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              On July 30, 2026, the complainant's original HTML-era online store was located <strong>fully intact on the company's hosting server</strong>, in the <code>/store/</code> directory of the legacy theroofstore.net web root — 12 .htm pages and 52 supporting graphics files (64 files total), untouched since being superseded by later site versions. The storefront homepage (<code>index.htm</code>, reproduced below as rendered in a browser) displays: (1) the site title <strong>"Anthony Enterprises."</strong>; (2) the banner slogan <strong>"DON'T REROOF — WEATHERPROOF at ½ the Cost"</strong>; (3) a <strong>Roofshield™-branded 5-gallon product bucket bearing the SSS shield logo</strong>; (4) a functioning shopping cart (Show Basket / Checkout buttons, PayPal payment graphic) selling <strong>Thermocoat roof coating at $129.25</strong>; and (5) a copyright footer reading "Anthony Enterprises. All rights reserved." The page source contains the year <strong>2000</strong>. This storefront was publicly served on the complainant's own domain at <strong>theroofstore.net/store/</strong> — a fact independently corroborated by the Wayback Machine's archive of theroofstore.net, which captured <code>/store/</code> URLs — tying the circa-2000 e-commerce operation directly to the same domain in continuous use today.
            </p>
            <div className="border-2 border-gray-300 rounded overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT G-3 — "Anthony Enterprises" Online Store Homepage (index.htm), Circa 2000</span>
                <span className="text-gray-500">Source: Recovered from hosting server /store/ directory · Added: July 30, 2026</span>
              </div>
              <img
                src="/images/anthony-enterprises-online-store-circa-2000.jpg"
                alt="Exhibit G-3: circa-2000 Anthony Enterprises online store homepage with Don't Reroof — Weatherproof at half the cost banner, Roofshield bucket with SSS shield logo, and Thermocoat product for sale with shopping cart"
                className="w-full max-w-lg mx-auto"
              />
            </div>
            <p className="text-xs font-sans text-gray-500 mt-2 italic">
              Note: The complete 64-file snapshot (12 .htm pages: index, aboutus, catalog, basket, order01, search, contact, condit, confirm, tool01, 31, c35 — plus all original graphics) was preserved unaltered from the server on July 30, 2026 and archived in the project repository. Server file timestamps show the files as last modified December 7, 2019, when they were migrated onto the current hosting account with content intact.
            </p>
            <div className="border border-green-500 bg-green-50 rounded p-4 text-xs font-sans text-green-900 leading-relaxed mt-3">
              <strong>Evidentiary value:</strong> This is first-party primary-source proof — recovered directly from the company's own hosting server, not from a third-party archive — that the complainant operated a functioning <strong>e-commerce roofing products store around the year 2000, approximately 21 years before the respondent registered theroof.store (August 2021)</strong>. The store is branded to <strong>Anthony Enterprises</strong>, the same entity documented in the Sunbiz records (Exhibit H), the 2002–2005 WHOIS records (Exhibit F), and the 1998–1999 Home Show booth banner (Exhibit G-2) — extending the unbroken chain of title into online retail commerce. The banner slogan is the same "Don't Reroof" message shown at the 1998–1999 Home Show booth and in the 1999 TV commercial (Exhibit I), and the <strong>Roofshield™ bucket with the SSS shield logo</strong> ties the store directly to the product line still sold by The Roof Store today. This exhibit independently corroborates the Wayback Machine archive record (Exhibit F) with physical files under the complainant's continuous custody.
            </div>
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

          {/* Exhibit H-2 — Prior Federal Trademark Registration (USPTO) */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">X-B. Exhibit H-2 — Prior Federal Trademark Registration (USPTO Serial #78903590 / Reg. #3633280)</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              The prior rights holder obtained a <strong>federal trademark registration</strong> from the United States Patent and Trademark Office (USPTO) covering the core branded system used in connection with theroofstore.net. The registration covered the identical goods and services now offered by theroof.store — elastomeric roof coatings (IC 002), roofing installation and repair (IC 037), and waterproofing treatment of roof surfaces (IC 040).
            </p>
            <table className="w-full text-sm font-sans border-collapse mb-4">
              <tbody>
                {[
                  ["USPTO Serial Number", "78903590"],
                  ["Registration Number", "3633280"],
                  ["Registered Mark", `DON'T REROOF - WEATHERPROOF AT 1/2 THE COST "THE ORIGINAL LIQUID APPLIED RUBBER ROOF SHIELD SYSTEM" ROOFPROTECT SEALS, RESTORES AND PRESERVES`],
                  ["Register", "Principal Register (highest-level USPTO register)"],
                  ["Mark Type", "Trademark and Service Mark"],
                  ["Application Filing Date", "Jun. 08, 2006"],
                  ["Registration Date", "Jun. 02, 2009"],
                  ["International Classes", "IC 002 — Elastomeric-based liquid roof and tile weatherproofing coating (cement, metal, clay tile); IC 037 — Roofing installation and roofing repair services; IC 040 — Waterproofing and weatherproofing treatment of roof surfaces"],
                  ["Current Status", "DEAD — Registration Cancelled (Jan. 11, 2016). Reason: registrant did not file a Section 8 declaration of continued use (post-registration maintenance filing due in years 5–6). This is a cancellation for missed maintenance, not abandonment. Underlying commercial use never ceased. Common law rights remain intact (see attorney note below)."],
                  ["Date Cancelled", "Jan. 11, 2016 — the mark had active federal registration status for 6 years and 7 months (Jun. 2, 2009 → Jan. 11, 2016)"],
                  ["USPTO TSDR Record", "https://tsdr.uspto.gov/#caseNumber=78903590&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-semibold text-xs w-48 align-top">{label}</td>
                    <td className="py-2 text-xs leading-relaxed">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border border-blue-400 bg-blue-50 rounded p-4 text-xs font-sans text-blue-900 leading-relaxed mb-3">
              <strong>Evidentiary significance — "Don't Reroof" tagline cross-reference:</strong> The registered mark includes the literal phrase <em>"Don't Reroof — Weatherproof at 1/2 the Cost"</em> — the <strong>exact same tagline</strong> featured in the circa-1999 TV commercial (Exhibit I) and the December 2011 field footage (Exhibit J). USPTO's acceptance of this registration is official government confirmation that this tagline was in active commercial use in connection with roofing goods and services at the time of filing — independently corroborating the authenticity and commercial nature of those exhibits. This is federal-level, government-sourced corroboration, not self-published.
            </div>
            <div className="border border-green-500 bg-green-50 rounded p-4 text-xs font-sans text-green-900 leading-relaxed mb-3">
              <strong>Goods and services overlap with theroof.store (critical for UDRP and Lanham Act):</strong> The registered classes (IC 002: roof coatings; IC 037: roofing installation/repair; IC 040: waterproofing) directly and completely overlap with the goods and services offered by theroof.store. The prior rights holder not only used the name first — they had a federal registration in the identical goods/services categories <strong>12 years before theroof.store was registered</strong>. Respondent has no USPTO registration of his own for any mark relating to "The Roof Store" or its variations.
            </div>
            <div className="border border-amber-400 bg-amber-50 rounded p-4 text-xs font-sans text-amber-900 leading-relaxed">
              <strong>Note for counsel — Section 8 cancellation vs. abandonment (critical distinction):</strong> USPTO status shows <em>DEAD/REGISTRATION/Cancelled/Invalidated</em> with reason: <em>"Registration cancelled because registrant did not file an acceptable declaration under Section 8."</em> This is a <strong>Section 8 maintenance cancellation</strong> — legally and strategically distinct from abandonment. Under Lanham Act § 45, abandonment requires (1) non-use of the mark <strong>and</strong> (2) intent to abandon. Section 8 cancellation addresses only the post-registration maintenance formality — not the underlying commercial use of the mark. The business clearly continued operating under the brand after Jan. 11, 2016 (Wayback Machine captures, active website, ongoing commercial sales, Google reviews dated after 2016), which defeats any abandonment argument. The mark was active on the <strong>Principal Register</strong> for <strong>6 years and 7 months</strong> (Jun. 2, 2009 – Jan. 11, 2016), well before theroof.store existed. Common law trademark rights in "The Roof Store" brand and in the registered system marks have been <strong>independently confirmed by a trademark attorney</strong> as intact. A <strong>new federal trademark application is in preparation</strong> and will include "The Roof Store" as a named mark. Recommend counsel cite the prior registration (Reg. #3633280, filed Jun. 8, 2006, registered Jun. 2, 2009, cancelled Jan. 11, 2016 — Section 8 only) in any UDRP or Lanham Act proceeding to establish that the USPTO itself accepted the mark as valid and distinctive in these exact goods/services categories more than a decade before theroof.store existed.
            </div>
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
              Google Search Console data extracted from the prior rights holder's verified GSC property (theroofstore.net) covering the full 16-month window available from GSC (March 2025 – July 23, 2026). This is the maximum retention window Google provides. Data is platform-native — sourced directly from Google's own impression and click records for searches performed by real users. <strong>GA4 installed July 23, 2026; linked to GSC since January 30, 2024.</strong>
            </p>
            <table className="w-full text-sm font-sans border-collapse mb-4">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4">Search Query</th>
                  <th className="text-left py-2 pr-4">Avg. Position</th>
                  <th className="text-left py-2 pr-4">Impressions (16 mo.)</th>
                  <th className="text-left py-2 pr-4">Clicks (16 mo.)</th>
                  <th className="text-left py-2">Expected Position</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["the roof store", "11.24", "797", "11", "#1 — own brand name"],
                  ["the roof store reviews", "10.20", "44", "0", "#1–2 — own brand + reviews"],
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
              <strong>Key finding — brand name at position 11.24 (page 2):</strong> Over 16 months, Google users searched "the roof store" and the prior rights holder's site appeared 797 times — but generated only 11 clicks (1.46% CTR). A normal branded search CTR is 20–40%. At 30%, theroofstore.net should have received approximately 239 clicks. It received 11. That is a <strong>~95% click-capture loss</strong> on branded searches — directly attributable to brand confusion where Google cannot resolve which entity is the authoritative "The Roof Store." The query "the roof store reviews" produced 44 impressions and zero clicks over the same period.
            </div>

            {/* Month-by-month table — Exhibit E-2 */}
            <div className="mt-4 mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wide mb-2">Exhibit E-2 — Month-by-Month Branded Search Trend (Google-Native Data)</h4>
              <p className="text-xs font-sans text-gray-600 mb-3">Query: "the roof store" | Source: Google Search Console, verified property theroofstore.net | Period: March 2025 – July 2026</p>
              <table className="w-full text-xs font-sans border-collapse mb-2">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="text-left py-2 pr-4">Month</th>
                    <th className="text-left py-2 pr-4">Impressions</th>
                    <th className="text-left py-2 pr-4">Clicks</th>
                    <th className="text-left py-2">CTR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Mar 2025", 21, 0],
                    ["Apr 2025", 44, 2],
                    ["May 2025", 51, 0],
                    ["Jun 2025", 48, 1],
                    ["Jul 2025", 32, 0],
                    ["Aug 2025", 30, 1],
                    ["Sep 2025", 35, 0],
                    ["Oct 2025", 31, 0],
                    ["Nov 2025", 35, 1],
                    ["Dec 2025", 44, 1],
                    ["Jan 2026", 64, 0],
                    ["Feb 2026", 69, 1],
                    ["Mar 2026", 94, 0],
                    ["Apr 2026", 47, 2],
                    ["May 2026", 53, 2],
                    ["Jun 2026", 36, 0],
                    ["Jul 2026", 63, 0],
                  ].map(([month, imp, clicks]) => (
                    <tr key={month as string} className={`border-b border-gray-100 ${(imp as number) >= 60 ? "bg-red-50" : ""}`}>
                      <td className="py-1 pr-4 font-mono">{month}</td>
                      <td className="py-1 pr-4">{imp}</td>
                      <td className="py-1 pr-4">{clicks}</td>
                      <td className="py-1 text-red-700">{(imp as number) > 0 ? ((clicks as number / (imp as number)) * 100).toFixed(1) + "%" : "—"}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-900 font-bold">
                    <td className="py-2 pr-4">TOTAL</td>
                    <td className="py-2 pr-4">797</td>
                    <td className="py-2 pr-4">11</td>
                    <td className="py-2 text-red-700">1.38%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs font-sans text-gray-500 italic">Note: Impressions are growing (21 in Mar 2025 → 63–94 in early 2026) indicating increasing brand search demand — yet clicks remain near zero throughout. This confirms the brand search demand exists but is being captured by theroof.store, not the prior rights holder.</p>
            </div>

            <p className="text-sm font-sans mb-3 leading-relaxed">
              <strong>Compound effect:</strong> Brand confusion suppresses not only brand-name searches but overall domain authority signals. When Google cannot confidently associate "The Roof Store" name with theroofstore.net, it reduces the authority weight given to that domain across all keyword categories — compounding the damage beyond the brand-term loss alone. The "roof coating" position of 67.1 (page 7, effectively invisible) and "waterproof roof coating" at 46.7 (page 5) are consistent with a domain experiencing suppressed authority from unresolved brand identity conflict.
            </p>
            <p className="text-xs font-sans text-gray-600 leading-relaxed">
              <strong>Source:</strong> Google Search Console, verified property theroofstore.net, full 16-month window (March 2025 – July 23, 2026). Data extracted and recorded by site administrator. Raw .xlsx export on file. Full GSC export available upon request in discovery.
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
                    ["4", "Cross-reference with GA4 direct traffic and conversion trend over the same window", "Corroborates the search-data finding with a second, independent metric — GA4 installed July 23, 2026; linked to GSC since January 30, 2024. GA4 data will now begin building a corroborating traffic record going forward."],
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
                <p className="font-semibold mb-2">Log Entries to Date (as of July 30, 2026)</p>
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

          {/* Exhibit S — Respondent's Direct Commercial Solicitation Email */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XI-E. Exhibit S — Respondent's Direct Commercial Solicitation Email Received by the Prior Rights Holder (July 28, 2026)</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              On <strong>July 28, 2026 at 11:57 AM</strong>, the prior rights holder — a South Florida roof coating business owner — received a direct commercial solicitation email from <strong>Dmitry Lipinskiy (dmitry@roofinginsights.com)</strong>, the respondent and operator of theroof.store. The email, titled <em>"Hire our entire media team for August - $2,500,"</em> markets Roofing Insights Business School media and content-marketing services to roofing companies: unlimited video editing, daily content planning, content strategy, posting support, and platform optimization for a $2,500 one-time fee. The email footer lists the respondent's corporate address: Roofing Insights, 7600 Boone Ave N Suite #65, Minneapolis, MN 55428.
            </p>
            <p className="text-sm font-sans mb-4 leading-relaxed">
              The email was preserved as a Gmail print-to-PDF on July 30, 2026, with full headers, sender/recipient addresses, timestamps, and the Gmail URL visible on every page. All four pages are reproduced below.
            </p>
            {[1, 2, 3, 4].map((n) => (
              <figure key={n} className="border border-gray-300 rounded overflow-hidden mb-4">
                <img
                  src={`/images/dmitry-solicitation-email-2026-07-28-${n}.png`}
                  alt={`Exhibit S page ${n}: July 28 2026 solicitation email from Dmitry Lipinskiy (Roofing Insights) received by the prior rights holder, preserved with full Gmail headers`}
                  className="w-full"
                  loading="lazy"
                />
                <figcaption className="text-xs font-sans text-gray-500 px-3 py-2 bg-gray-50 border-t border-gray-200">Exhibit S — page {n} of 4 (Gmail print-to-PDF, captured July 30, 2026)</figcaption>
              </figure>
            ))}
            <p className="text-sm font-sans mt-4 leading-relaxed">
              <strong>Evidentiary value:</strong> (1) <strong>Commercial reach into the complainant's market is proven, not theoretical</strong> — the respondent's marketing machine delivered a paid-services solicitation directly into the inbox of the South Florida mark owner, undercutting any claim that his commercial activity does not reach Florida. (2) <strong>Respondent's sophistication is documented</strong> — his core business is selling professional brand-building, content marketing, and search visibility services to roofing contractors; a marketer of this caliber cannot credibly claim innocent or coincidental adoption of the identical mark "The Roof Store" (see also Exhibit D, his on-camera brand-strategy statement). (3) <strong>Structural B2B capture</strong> — the respondent simultaneously operates the media/referral channels where roofing contractors discover suppliers (Roofing Insights, 200,000+ audience; the Directorii referral network; the Roofing Insights Podcast, where Episode #29 promotes his own "The Roof Store" operation) and a competing supply business under the complainant's exact mark. The practical effect: to compete for B2B visibility under its own trade name, the mark owner would have to become a paying customer of the infringer. This exhibit is preserved in the append-only Monitoring &amp; Defense Log as entries #118 and #121.
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
              Additionally, respondent holds no trademark registration of his own for "The Roof Store" (none located in USPTO or Florida Sunbiz trademark records as of the documentation date) — while the prior rights holder previously held an actual federal registration (USPTO Reg. #3633280, Serial #78903590) covering the identical goods and services categories (IC 002: roof coatings; IC 037: roofing installation/repair; IC 040: waterproofing), subsequently cancelled Jan. 11, 2016 for failure to file a Section 8 maintenance declaration (not abandonment — commercial use continued) — common law rights confirmed by trademark attorney and a new federal application in preparation. Respondent's own on-camera statement (Exhibit D) confirms the name was adopted as a deliberate brand-strategy decision — undercutting any argument that use of the identical name was coincidental, generic, or independently developed. Taken together, the record supports a prima facie finding that respondent lacks any right or legitimate interest in the name, shifting the burden to him to justify his use — a burden the public record gives him no apparent means to meet.
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
                  ["Jul 23, 2026", "GA4 installed; GSC linked since Jan 30, 2024 confirmed", "Google Analytics 4 (Measurement ID: G-8XWMZHZ7E0) installed on theroofstore.net. GSC already linked to GA4 since January 30, 2024. GA4 will now begin building a corroborating traffic record for ongoing damages measurement."],
                  ["Jul 23, 2026", "Exhibit K upgraded to full 16-month GSC data; Exhibit E-2 created", "GSC Performance export (.xlsx) obtained for query 'the roof store', 16-month window (March 2025 – July 2026) — the maximum retention period Google provides. Results: 797 impressions, 11 clicks, position 11.24, CTR 1.38%. At expected branded CTR (30%), site should have received ~239 clicks — it received 11 (~95% click-capture loss). Month-by-month breakdown added as Exhibit E-2. All three evidence files (TrademarkEvidenceFile, TrademarkEvidencePrint, RedemptionEvidenceGoogle1) updated with real measured numbers replacing prior 3-month estimates. Google Legal Troubleshooter answer updated with 16-month data."],
                  ["Jul 29, 2026", "1998–1999 Home Show booth photograph located and added", "Original photograph of the Fort Lauderdale Home Show booth (1998–1999) located in company archive and added as Exhibit G-2. Booth banner shows \"Anthony's Enterprises, Inc. — All Surface Restorations & Preservations\" with the slogan \"Don't Reroof — Waterproof! ½ THE COST OF A REROOF\" and the founder present. Corroborates chain of title (Exhibits F, H), the 1999 TV commercial slogan (Exhibit I), and pre-2000 public commercial use — 22+ years before respondent's domain registration. Timeline (Section II) updated with 1998–1999 entry."],
                  ["Jul 30, 2026", "Circa-2000 original online store recovered from hosting server and added", "The original \"Anthony Enterprises\" HTML online store located fully intact in the /store/ directory of the legacy theroofstore.net web root — 12 .htm pages + 52 graphics (64 files). Homepage shows the \"Don't Reroof — Weatherproof at ½ the Cost\" banner, Roofshield™ SSS-shield bucket, and a working shopping cart selling Thermocoat at $129.25; page source contains the year 2000. Complete snapshot preserved unaltered in the project repository. Added as Exhibit G-3; timeline (Section II) updated with circa-2000 entry."],
                  ["Jul 30, 2026", "Respondent solicitation email received and preserved", "Direct commercial solicitation email from Dmitry Lipinskiy (dmitry@roofinginsights.com), dated July 28, 2026 — \"Hire our entire media team for August - $2,500\" — received by the prior rights holder in South Florida and preserved as a Gmail print-to-PDF with full headers. Added as Exhibit S. Monitoring & Defense Log entries #118 and #121 record the email and its exhibit-grade preservation; entry #119 records the respondent's Podcast Episode #29 self-promotion of \"The Roof Store\"; entry #120 records the national-expansion pattern analysis."],
                  ["Aug 2, 2026", "Google AI answer brand misattribution captured", "Live Google AI search session captured from a user in Miramar, FL (thread: \"paint Spanish tile roof...\" → \"active roof leaks\" → \"what about theroof store products\"). Google's AI correctly cited two genuine products (Smart Shield RP2, Fungal Shield Crystal Clear) to www.theroofstore.net, but attributed a non-existent third product — \"The Roof Store Synthetic Roofing Underlayment\" (ASTM D8257, FBC #48228) — to \"The Roof Store\" with no source link. The complainant has never made or sold any synthetic underlayment. Verbatim capture preserved in the case file and added as Exhibit T. Confirms brand confusion has propagated into Google's AI answer layer (product-line misrepresentation); the same answer directed the customer to three competing contractors."],
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

          {/* Google Platform Evidence */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XV. Google Platform Complaint — Evidence &amp; Relief</h3>
            <p className="text-sm font-sans leading-relaxed mb-4">
              In addition to the trademark and UDRP evidence documented above, the complainant has suffered measurable, documented harm across four Google platform categories directly attributable to theroof.store's adoption of the identical brand name — organic Search (Exhibit P, Exhibit R), Google Shopping / Merchant Center (Exhibit Q), and Google's AI answer layer (Exhibit T). The following exhibits support a separate Google platform complaint and provide independently-admissible evidence of ongoing commercial harm.
            </p>

            {/* Exhibit P */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Exhibit P — Third-Party Domain Authority Comparison (Moz, July 22, 2026)</h4>
            <p className="text-sm font-sans mb-3 leading-relaxed">
              Data retrieved live from Moz's public Domain Analysis tool (moz.com/domain-analysis) — an industry-standard, third-party SEO crawler used by Google-certified agencies and accepted in legal proceedings as an independent measure of domain authority and link equity.
            </p>
            <table className="w-full text-sm font-sans border-collapse mb-3">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4">Metric</th>
                  <th className="text-left py-2 pr-4">theroofstore.net (COMPLAINANT)</th>
                  <th className="text-left py-2">theroof.store (RESPONDENT)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Domain Age", "Est. 1994 · Domain 2002 (24 years)", "Est. August 2021 (~4 years)"],
                  ["Moz Domain Authority", "15", "16 — higher despite 20 years newer"],
                  ["Linking Root Domains", "207 (46 more than respondent)", "161"],
                  ["Ranking Keywords", "139", "1,300 (9× more)"],
                  ["Homepage Page Authority", "33", "31"],
                  ["Top Linked Internal Page", "/products.php (PA 25)", "/category/roofing-insights (PA 21)"],
                ].map(([metric, complainant, respondent], i) => (
                  <tr key={i} className={`border-b border-gray-200 ${i === 3 ? "bg-red-50 font-semibold" : ""}`}>
                    <td className="py-2 pr-4 font-medium text-gray-800 text-sm">{metric}</td>
                    <td className="py-2 pr-4 text-gray-700 text-sm">{complainant}</td>
                    <td className={`py-2 text-sm ${i === 1 || i === 3 ? "text-red-700 font-bold" : "text-gray-700"}`}>{respondent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border border-red-300 bg-red-50 rounded p-3 text-sm font-sans text-red-900 leading-relaxed mb-3">
              <strong>Key finding — 9× keyword ranking gap:</strong> A domain with 24 years of operation and 46 more linking root domains ranks for 9× fewer keywords than a 4-year-old domain. This is the measurable fingerprint of domain authority suppression caused by Google's brand disambiguation systems failing to resolve which entity is the authoritative "The Roof Store." The respondent's top linked internal page (<span className="font-mono text-xs">/category/roofing-insights</span>) is named directly after Dmitry Lipinskiy's YouTube brand — structural evidence that theroof.store is built around the Roofing Insights audience as a primary acquisition channel.
            </div>

            {/* Exhibit Q */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Exhibit Q — Google Merchant Center / Shopping Account Removal (~2022–2023)</h4>
            <div className="border border-red-300 bg-red-50 rounded p-3 text-sm font-sans text-red-900 leading-relaxed mb-3">
              <strong>Independent category of platform harm</strong> — distinct from search ranking suppression. The complainant's established Google Shopping / Merchant Center account was removed without explanation, without notice of specific policy violation, and without any offered remedy — approximately 12–18 months after theroof.store launched under the same brand name.
            </div>
            <div className="space-y-2 text-sm font-sans mb-3">
              <p><strong>Approximate timeline:</strong> Account removal occurred approximately 2022–2023 — within 12–18 months of theroof.store's August 2021 launch. [Owner: confirm exact date and any Google support case/ticket reference numbers.]</p>
              <p><strong>Three probable causes, all attributable to theroof.store's brand adoption:</strong></p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-800">
                <li><strong>Automated brand-conflict detection:</strong> Google Merchant Center flags accounts where two sellers operate under identical business names in the same category. When theroof.store launched and listed roofing products as "The Roof Store," the automated system may have treated the complainant's pre-existing account as a duplicate — suspending the lower-authority domain (DA 15) in favor of the newer, faster-growing one.</li>
                <li><strong>Competitor-initiated impersonation report:</strong> Merchant Center allows sellers to report others for trademark violations. If theroof.store filed a complaint identifying theroofstore.net as an impersonator, Google's system would have suspended the complainant's account without disclosing the complaint.</li>
                <li><strong>Entity conflation:</strong> Google's Knowledge Graph may have merged both "The Roof Store" entities, causing the complainant's Merchant Center account to be flagged as a duplicate of the respondent's — reversing the actual chronological priority.</li>
              </ol>
              <p><strong>Impact:</strong> Eliminated the complainant's Google Shopping presence entirely — product listings removed from Google's shopping index, Shopping Ads disabled, direct e-commerce revenue channel cut off. This harm is separate from and compounded by the organic search suppression in Exhibit P and Exhibit K.</p>
            </div>

            {/* Exhibit R */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Exhibit R — Google Search Console: Brand Name Suppression (16-Month Window)</h4>
            <table className="w-full text-sm font-sans border-collapse mb-3">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-3">Query</th>
                  <th className="text-left py-2 pr-3">Avg. Position</th>
                  <th className="text-left py-2 pr-3">Impressions (16 mo.)</th>
                  <th className="text-left py-2 pr-3">Clicks (16 mo.)</th>
                  <th className="text-left py-2">Expected (Prior Rights)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["the roof store", "11.24", "797", "11", "#1 — own brand name"],
                  ["the roof store reviews", "10.20", "44", "0", "#1–2 — own brand + reviews"],
                  ["roof coating", "67.1", "2,782", "0", "Page 1 for primary service"],
                  ["waterproof roof coating", "46.7", "—", "—", "Page 1–3"],
                  ["roof paint miami", "4.1", "—", "—", "Top 3 (local)"],
                ].map(([q, pos, imp, clicks, exp]) => (
                  <tr key={q as string} className={`border-b border-gray-200 ${q === "the roof store" ? "bg-red-50 font-semibold" : ""}`}>
                    <td className="py-2 pr-3 font-mono text-xs">{q}</td>
                    <td className="py-2 pr-3 text-red-700 font-bold text-sm">{pos}</td>
                    <td className="py-2 pr-3 text-sm">{imp}</td>
                    <td className="py-2 pr-3 text-sm">{clicks}</td>
                    <td className="py-2 text-xs text-gray-500 italic">{exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-500 mb-4">Source: Google Search Console, verified property theroofstore.net, full 16-month window (March 2025 – July 23, 2026). Raw .xlsx export on file.</p>

            {/* Exhibit T — Google AI Answer: Brand Misattribution */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Exhibit T — Google AI Answer: Brand Misattribution of Third-Party "Synthetic Roofing Underlayment" Product (Captured August 2, 2026)</h4>
            <p className="text-sm font-sans mb-3 leading-relaxed">
              On August 2, 2026, the prior rights holder captured a live Google AI search session from a user located in <strong>Miramar, Florida</strong> — within the complainant's core South Florida market. The multi-turn thread began with <em>"paint Spanish tile roof...,"</em> proceeded to <em>"active roof leaks,"</em> and concluded with <em>"what about theroof store products."</em> In response to that final query, Google's AI generated a company profile of <strong>The Roof Store (Davie, FL)</strong>. It correctly described two genuine products — <strong>Smart Shield RP2</strong> and <strong>Fungal Shield Crystal Clear</strong> — each cited to <span className="font-mono text-xs">www.theroofstore.net</span>. The same answer then attributed a third product, <strong>"The Roof Store Synthetic Roofing Underlayment"</strong> (woven polypropylene, ASTM D8257, Florida Building Code approval #48228), cited only to <strong>"The Roof Store"</strong> with <strong>no website link</strong>.
            </p>
            <div className="border border-gray-300 rounded p-4 bg-gray-50 font-sans text-sm mb-3">
              <p className="font-semibold mb-1">Verbatim excerpt from the captured Google AI answer (case-file source lines 168–172):</p>
              <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 leading-relaxed">
                "The Roof Store Synthetic Roofing Underlayment<br />
                Relevance for Spanish Tile: If your active leak requires a &lsquo;lift and reset&rsquo; patch or a full re-roof, this is the heavy-duty water barrier that goes under the tiles.<br />
                Standout features: A high-strength, woven polypropylene underlayment that passes rigorous ASTM D8257 waterproofing standards and carries Florida Building Code approval (#48228).<br />
                The Roof Store"
              </blockquote>
              <p className="text-xs text-gray-500 mt-2">Source: Live Google AI search session, captured August 2, 2026 (user in Miramar, FL). Full verbatim capture preserved in the case file.</p>
            </div>
            <div className="border-2 border-gray-300 rounded overflow-hidden mb-3 max-w-md mx-auto">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sans flex justify-between items-center border-b border-gray-300">
                <span className="font-semibold">EXHIBIT T-1 — Device Photograph of Live Google AI Answer</span>
                <span className="text-gray-500">Captured: August 2, 2026</span>
              </div>
              <img
                src="/images/evidence/exhibit-t-ai-answer-phone-capture.jpg"
                alt="Exhibit T-1: photograph of a mobile device displaying the live Google AI answer attributing 'The Roof Store Synthetic Roofing Underlayment' to The Roof Store, alongside the genuine Fungal Shield Crystal Clear product"
                className="w-full"
              />
              <p className="text-xs font-sans text-gray-500 px-4 py-2 italic border-t border-gray-300">
                Photograph of the live Google AI answer as displayed on the prior rights holder's mobile device (google.com/search, AI Mode). Visible on screen: the genuine "Fungal Shield Crystal Clear" product entry, immediately followed by the misattributed "The Roof Store Synthetic Roofing Underlayment" entry citing ASTM D8257 and Florida Building Code approval — a product the complainant has never made or sold. The device photograph corroborates the verbatim text capture above and demonstrates the answer as actually presented to a consumer.
              </p>
            </div>
            <div className="border border-red-300 bg-red-50 rounded p-3 text-sm font-sans text-red-900 leading-relaxed mb-3">
              <strong>Factual record:</strong> The Roof Store / theroofstore.net has never manufactured, sold, or mentioned any synthetic roofing underlayment. No such product, and none of the cited certification numbers (ASTM D8257 / Florida Building Code approval #48228), appears anywhere on theroofstore.net. The two products the AI linked to www.theroofstore.net are genuine; the third — attributed to "The Roof Store" with no source link — is not a product of the complainant.
            </div>
            <div className="border border-amber-300 bg-amber-50 rounded p-3 text-sm font-sans text-amber-900 leading-relaxed mb-3">
              <strong>Analysis:</strong> This misattribution is consistent with Google's knowledge systems conflating the infringing theroof.store entity's product line with the prior rights holder's brand. The brand confusion documented throughout this file — in Search rankings (Exhibit K, Exhibit P, Exhibit R) and Merchant Center (Exhibit Q) — has now propagated into Google's AI answer layer, where it misrepresents the complainant's own product catalog to consumers in the complainant's home market. The AI linked the two authentic products directly to www.theroofstore.net but supplied no source link for the non-existent underlayment product it nonetheless attributed to "The Roof Store."
              <p className="mt-2"><strong>Complainant's contention as to strategic intent:</strong> The complainant contends the respondent's product selection was not coincidental. "The Roof Store" is a highly brandable trade name the complainant built over three decades, and the complainant's flagship market position — expressed in its longstanding homepage tagline "Don't Re-Roof. Weatherproof at 1/2 the Cost." — is the direct alternative to tile lift-off/re-roofing. By adopting the identical name and selling <em>roofing underlayment</em> — the core material of the very lift-off/re-roof procedure the complainant's system exists to make unnecessary — the respondent accomplishes two harms with one act: (1) appropriation of the complainant's brand identity, and (2) association of that brand, in the consumer's mind and now in Google's AI answers, with the traditional re-roofing approach the complainant's business is built on displacing. The captured AI answer is the concrete realization of both harms simultaneously: the complainant's name, attached to the re-roof product, presented to a leak customer in the complainant's home market, with the complainant's actual solution absent.</p>
            </div>
            <div className="border border-red-400 bg-red-50 rounded p-3 text-sm font-sans text-red-900 leading-relaxed mb-4">
              <strong>Significance for the record:</strong>
              <ol className="list-decimal pl-5 space-y-1 mt-2">
                <li><strong>Direct evidence of ongoing consumer-facing brand confusion in Google's newest surface (AI answers)</strong> — the confusion now appears in the generative answer presented above the traditional results, not only in organic rankings and shopping.</li>
                <li><strong>Misattribution of a competitor/infringer product to the complainant</strong> — a new category of harm: product-line misrepresentation. Consumers are told the complainant sells a product it does not make, with third-party certification claims the complainant has never asserted.</li>
                <li><strong>Customer diversion in the same answer</strong> — while presenting the conflated profile, the AI directed the leak-repair customer to three competing roofing contractors (Earl W. Johnston Roofing; Istueta Roofing; T&amp;S Roofing Systems).</li>
                <li><strong>The complainant's flagship product was omitted entirely from its own company profile.</strong> Although the AI was asked directly about "theroof store products," its profile of The Roof Store never mentioned <strong>Roof Shield (RP3)</strong> — the complainant's flagship system and the world's only liquid roof coating to pass the Dade County Certified TAS-106 Uplift Test. RP3 is precisely the product that answers the consumer's question in that thread: a non-intrusive, seamless coating solution for tile roof leaks. A consumer reading this profile would conclude the complainant has no answer for their leak beyond a traditional under-tile material — when in fact the complainant's flagship product is the answer, and the traditional approach is warranted only where a roof is too far deteriorated to restore.</li>
                <li><strong>The infringing product displaced the complainant's actual solution at the precise point of need.</strong> The AI framed the misattributed underlayment as the answer for "an active leak requiring a 'lift and reset' patch" — an intrusive, risky, and expensive procedure requiring removal and resetting of roof tiles. The complainant's genuine Roof Shield (RP3) system exists specifically to make that procedure unnecessary: a seamless liquid-applied coating system installed <em>without lifting a single tile</em>. In other words, at the exact moment a South Florida consumer asked the question the complainant's flagship product answers, the AI presented the infringer's tear-off-adjacent product under the complainant's name — steering the consumer toward the intrusive repair path and away from the complainant's non-intrusive solution, while the complainant received neither the sale nor the attribution.</li>
              </ol>
            </div>

            {/* Exhibit U — Respondent's Own Product Listing Confirms Source of AI Misattribution */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Exhibit U — Respondent's Own Live Product Listing Confirms the Source of the AI Misattribution (Verified August 2, 2026)</h4>
            <p className="text-sm font-sans mb-3 leading-relaxed">
              On August 2, 2026, the product described in the Google AI answer (Exhibit T) was located <strong>for sale on the respondent's own website</strong>, at <span className="font-mono text-xs">https://www.theroof.store/product/the-roof-store-synthetic-roofing-underlayment</span>. The live listing is titled <strong>"The Roof Store Synthetic Roofing Underlayment ASTM D8257"</strong> and its product description states verbatim: <em>"Florida Approval # 48228. Intertek CCRR 0401. 100 GSM. Passes ASTM D8257. The Roof Store Synthetic Roofing Underlayment is coated, woven polypropylene mechanically attached underlayment."</em>
            </p>
            <div className="border border-red-300 bg-red-50 rounded p-3 text-sm font-sans text-red-900 leading-relaxed mb-3">
              <strong>This closes the loop on Exhibit T.</strong> Every identifying detail the Google AI attributed to "The Roof Store" — the product name, "woven polypropylene," ASTM D8257, and Florida Building Code approval #48228 — matches, word for word, the respondent's own product listing on theroof.store. The AI misattribution is not a hallucination of a non-existent product: it is the respondent's actual product, branded with the words "The Roof Store" in its product name, being presented to consumers under the complainant's identity.
            </div>
            <p className="text-sm font-sans mb-2 leading-relaxed"><strong>Domain and priority timeline (public records, retrieved August 2, 2026):</strong></p>
            <ul className="list-disc pl-5 text-sm font-sans space-y-1 mb-3">
              <li><strong>theroofstore.net</strong> (complainant): first archived by the Internet Archive on <strong>April 28, 2001</strong> — continuous public use of the trade name for over 25 years, with company use dating to 1994.</li>
              <li><strong>theroof.store</strong> (respondent): registered <strong>August 13, 2021</strong> (registry RDAP record, Tucows Registry; registrar GoDaddy.com, LLC), first archived December 27, 2021, operating as an online roofing-materials store by December 2022.</li>
              <li>The respondent therefore entered the market approximately <strong>27 years after</strong> the complainant's first use and <strong>20 years after</strong> the complainant's domain was publicly archived — naming its house-brand underlayment product "The Roof Store Synthetic Roofing Underlayment."</li>
            </ul>
            <div className="border border-amber-300 bg-amber-50 rounded p-3 text-sm font-sans text-amber-900 leading-relaxed mb-4">
              <strong>Relevance to bad faith:</strong> The respondent did not merely register a confusingly similar domain — it placed the complainant's exact trade name inside a product title ("The Roof Store Synthetic Roofing Underlayment") for a product category (roofing underlayment, the core material of tile lift-off/re-roofing) that is the direct commercial antithesis of the complainant's publicly established "Don't Re-Roof" market position. Search and AI systems indexing that product title now attribute the respondent's re-roofing product to the complainant, as documented in Exhibit T.
            </div>

            {/* Google Damages */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Google Platform Financial Damages — Three-Tier Estimate</h4>
            <p className="text-xs font-sans text-gray-500 italic mb-3">Preliminary estimates only. All figures should be reviewed by counsel and/or a forensic economic expert before use in any proceeding or demand letter.</p>
            <table className="w-full text-sm font-sans border-collapse mb-3">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-3 text-xs">Tier</th>
                  <th className="text-left py-2 pr-3 text-xs">Basis</th>
                  <th className="text-left py-2 pr-3 text-xs">Monthly Est.</th>
                  <th className="text-left py-2 text-xs">48-Month Cumulative</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1 — Conservative", "Brand name suppression only — 'the roof store' at position 20.1 vs. expected #1 (73% CTR gap, $8–$15 FL roofing CPC)", "$1,250–$2,350/mo", "$15,000–$28,000"],
                  ["2 — Moderate (anchor)", "Total keyword suppression — 261 suppressed keywords × 30 avg. searches × 15% CTR × $8–$15 CPC. Anchored to Moz data (Exhibit P).", "$9,400–$17,600/mo", "$450,000–$845,000"],
                  ["3 — Upper Bound", "Full opportunity cost including traffic diverted to theroof.store — 1,161 keyword gap × 20% FL-relevant × 30 searches × 2.5% CTR × $8–$15 CPC, plus Roofing Insights brand multiplier", "$18,000–$45,000/mo", "$864,000–$2,160,000"],
                ].map(([tier, basis, monthly, cumulative]) => (
                  <tr key={tier as string} className="border-b border-gray-200">
                    <td className="py-3 pr-3 font-bold text-gray-900 text-xs">{tier}</td>
                    <td className="py-3 pr-3 text-xs text-gray-700">{basis}</td>
                    <td className="py-3 pr-3 font-semibold text-xs">{monthly}</td>
                    <td className="py-3 font-bold text-red-800 text-xs">{cumulative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-500 italic mb-4">Tier 2 is the primary anchor — supported by independent Moz data (Exhibit P). The Google Shopping removal (Exhibit Q) is an additional, unquantified category of platform-access damages not included in any tier above.</p>

            {/* Monetary Value of Click Loss */}
            <div className="border border-gray-300 rounded p-4 mb-4 bg-gray-50">
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-3">Monetary Value of Measured Click Loss (GSC Data — July 23, 2026)</h4>
              <p className="text-xs font-sans text-gray-700 mb-3 leading-relaxed">
                The following converts the platform-native GSC click-loss data (Exhibit E-2) into estimated business damages using two methodologies: (1) ad-equivalent CPC value, and (2) actual customer job value. The second methodology is the legally relevant figure for damages claims.
              </p>
              <table className="w-full text-xs font-sans border-collapse mb-3">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="text-left py-2 pr-3">Methodology</th>
                    <th className="text-left py-2 pr-3">Calculation</th>
                    <th className="text-left py-2 pr-3">16-Month Loss</th>
                    <th className="text-left py-2">48-Month Loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-3 font-semibold text-xs">Ad-equivalent (CPC)</td>
                    <td className="py-2 pr-3 text-xs text-gray-700">228 lost clicks × $8–$15 FL roofing CPC</td>
                    <td className="py-2 pr-3 text-xs font-semibold">$1,824–$3,420</td>
                    <td className="py-2 text-xs font-bold text-gray-700">$5,472–$10,260</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-red-50">
                    <td className="py-2 pr-3 font-semibold text-xs">Actual job value (low)</td>
                    <td className="py-2 pr-3 text-xs text-gray-700">228 lost clicks × 2% conversion × $2,000 avg. coating job</td>
                    <td className="py-2 pr-3 text-xs font-semibold">~$9,120</td>
                    <td className="py-2 text-xs font-bold text-red-800">~$27,360</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-red-50">
                    <td className="py-2 pr-3 font-semibold text-xs">Actual job value (high)</td>
                    <td className="py-2 pr-3 text-xs text-gray-700">228 lost clicks × 2% conversion × $15,000 avg. job</td>
                    <td className="py-2 pr-3 text-xs font-semibold">~$68,400</td>
                    <td className="py-2 text-xs font-bold text-red-800">~$205,200</td>
                  </tr>
                </tbody>
              </table>
              <div className="border border-amber-300 bg-amber-50 rounded p-3 text-xs font-sans text-amber-900 leading-relaxed mb-3">
                <strong>Important — GSC window is only 16 months:</strong> theroof.store launched ~August 2021. Google only retains GSC data for 16 months, meaning approximately 3+ additional years of brand confusion damage (Aug 2021 – Mar 2025) cannot be measured from GSC alone. The figures above represent only the measurable tail of a longer-running harm. Establishing the full 4-year loss requires Ahrefs/SEMrush historical data — recommended as the next evidentiary step for counsel.
              </div>
              <div className="border border-blue-300 bg-blue-50 rounded p-3 text-xs font-sans text-blue-900 leading-relaxed">
                <strong>Litigation vs. UDRP — practical threshold:</strong> A trademark lawsuit costs $30,000–$100,000+ in attorney fees. The branded-search click-loss alone may not justify that cost in isolation — but combined with Tier 2 keyword suppression ($450K–$845K, Moz-anchored) and the Google Shopping removal, the full damages picture likely does. However, the <strong>fastest and cheapest path to domain transfer is UDRP</strong> — costs $1,500–$2,500, decided in 60–90 days, and can force theroof.store to transfer or cancel the domain without a federal lawsuit. UDRP should be filed first; litigation is the escalation path if UDRP fails.
              </div>
            </div>

            {/* Google Form Answers */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Google Legal Troubleshooter — Pre-Written Submission Answers</h4>
            <p className="text-sm font-sans mb-3">File at: <span className="font-mono text-xs text-blue-700">support.google.com/legal/troubleshooter/1114905</span></p>
            {[
              {
                q: "Name and relationship to the trademark",
                a: "Owner and operator of The Roof Store / Storm Shield Paint Systems Inc., a roofing product manufacturer and contractor established in Broward County, Florida in 1994. Trade name 'The Roof Store' used continuously in commerce since 1994 — 27 years before theroof.store adopted the same name."
              },
              {
                q: "What trademark is being infringed",
                a: "The trade name and brand 'The Roof Store,' used continuously in commerce since 1994 in the roofing industry in Florida. Domain theroofstore.net registered and actively used since 2002. Common law trademark rights under prior use in commerce apply."
              },
              {
                q: "URL or content being reported",
                a: "theroof.store — operating as a national roofing supply and services platform under the identical name 'The Roof Store.' Domain registered August 2021 — 19 years after our domain and 27 years after our first use in commerce. Their site includes /category/roofing-insights (named after Dmitry Lipinskiy's YouTube brand with 200,000+ subscribers) and their intake form lists 'Dmitry Lipinskiy' as a selectable CRM lead source."
              },
              {
                q: "How is this content infringing",
                a: "theroof.store operates under an identical name in the same industry causing consumer confusion in Google Search. Our domain — the prior rights holder — ranks at position 20.1 for our own brand name with only 3 clicks in 3 months (Exhibit R). Independent third-party analysis (Moz, July 22, 2026) shows our 24-year-old domain with 207 linking domains ranks for only 139 keywords vs. the 4-year-old infringing domain's 1,300 keywords — a 9× gap consistent with Google's authority signals being split by brand confusion. Additionally, our Google Merchant Center account was suspended without explanation ~2022–2023, shortly after theroof.store's launch, eliminating our Google Shopping presence without notice, reason, or remedy."
              },
              {
                q: "What remedy are you requesting",
                a: "(1) Investigation and reinstatement of our Google Merchant Center account, or formal written explanation of grounds for suspension, including whether a third-party complaint was filed against us and by whom. (2) Review of Google's brand disambiguation signals for 'the roof store,' with correction to reflect prior rights in favor of theroofstore.net (est. 1994, domain 2002). (3) Review of theroof.store's Google platform accounts for compliance with Google's identical-name brand confusion and impersonation policies."
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="mb-4 border border-gray-200 rounded">
                <div className="bg-gray-100 px-3 py-2 text-xs font-bold uppercase tracking-wide text-gray-600 font-sans border-b border-gray-200">
                  Form Field {i + 1}: {q}
                </div>
                <div className="px-3 py-2 text-sm font-sans text-gray-800 leading-relaxed">
                  {a}
                </div>
              </div>
            ))}

            {/* Filing Links */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-700 mt-6 mb-3">Where to File — Direct Links</h4>
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4 text-xs">Action</th>
                  <th className="text-left py-2 pr-4 text-xs">URL</th>
                  <th className="text-left py-2 text-xs">Priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Google Legal Trademark Complaint", "support.google.com/legal/troubleshooter/1114905", "File first"],
                  ["Google Search Spam Report", "search.google.com/search-console/report/spam", "File same day"],
                  ["Google Merchant Center Support", "support.google.com/merchants", "File with Exhibit Q attached"],
                  ["Google Ads Trademark Complaint", "support.google.com/adspolicy/troubleshooter/4578507", "Check for ads first"],
                  ["ICANN UDRP — WIPO Filing", "www.wipo.int/amc/en/domains/filing/", "After attorney review"],
                ].map(([action, url, priority]) => (
                  <tr key={action as string} className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium text-gray-900 text-xs">{action}</td>
                    <td className="py-2 pr-4 font-mono text-xs text-blue-700">{url}</td>
                    <td className="py-2 text-xs text-gray-600 italic">{priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Legal Framework */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XVI. Applicable Legal Frameworks</h3>
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
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XVII. Recommended Next Steps</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm font-sans leading-relaxed">
              <li><strong>Attorney review of this file</strong> — Florida IP counsel to assess strength of common law mark, UDRP eligibility, and ACPA standing before any public action.</li>
              <li><strong>Formal WHOIS/registrant unmasking</strong> — Confirm Dmitry Lipinskiy as registrant of record via UDRP discovery or pre-suit demand to GoDaddy.</li>
              <li><strong>Run paid SEO analysis</strong> — Pull theroof.store and theroofstore.net side-by-side on Ahrefs or SEMrush to document domain authority gap and specific keyword cannibalization before filing.</li>
              <li><strong>Cease-and-desist letter</strong> — Send privately to Dmitry Lipinskiy (personal and business addresses via Roofing Insights, theroof.store contact form) before any public filing. Preserve settlement leverage.</li>
              <li><strong>File UDRP complaint</strong> — If C&amp;D is ignored or rejected, file with WIPO or The Forum. Request domain transfer (not mere cancellation) to maximize outcome.</li>
              <li><strong>Parallel brand building</strong> — Continue entity reinforcement on theroofstore.net (structured data, content, citations) regardless of legal outcome, to recover organic search equity independently.</li>
            </ol>
          </section>

          {/* UDRP Complaint Brief */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XVIII. Draft UDRP Complaint Brief — ICANN / WIPO Filing</h3>
            <p className="text-sm font-sans leading-relaxed text-gray-700 mb-4">
              A full-structure UDRP complaint brief has been prepared for attorney review, organized per the ICANN Uniform Domain-Name Dispute-Resolution Policy three-element test. The brief is not a final legal filing — it requires review and finalization by licensed IP counsel before submission to WIPO or The Forum.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5 text-sm font-sans">
              <p className="font-semibold text-blue-900 mb-3">Three-Element Test Summary (UDRP ¶4(a)):</p>
              <ol className="list-decimal list-inside space-y-2 text-blue-800 leading-relaxed">
                <li><strong>Identical / confusingly similar mark</strong> — theroof.store incorporates the entirety of "THE ROOF STORE." The .store TLD is semantically meaningful, heightening — not reducing — confusing similarity. Common law rights established since 1994; federal registration 2009–2016 covering identical goods/services classes (IC 002, 037, 040).</li>
                <li><strong>No legitimate rights or interests</strong> — All three Policy ¶4(c) safe harbors fail. Respondent's own identity ("Dmitry Lipinskiy" / "Roofing Insights") predated the domain by four years under a different name; the domain was adopted deliberately for commercial use in the identical industry.</li>
                <li><strong>Bad faith registration and use</strong> — Supported by five independent factors: competitive disruption (¶4(b)(iii)); intentional confusion for commercial gain (¶4(b)(iv)); privacy/proxy registration combined with other bad-faith indicators; constructive knowledge given a 19-year priority gap; and continuing use after documented public notice (Exhibit L, July 7 2026).</li>
              </ol>
            </div>
            <a
              href="/ref/8f3k-2m9x-771q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded font-sans text-sm font-semibold hover:bg-gray-700 transition-colors print:hidden"
            >
              Open Full Complaint Brief ↗
            </a>
            <p className="text-xs text-gray-400 mt-2 font-sans print:hidden">Password-protected document — requires attorney or admin access. Excluded from search engines.</p>
          </section>

          {/* Reservation */}
          <section className="mb-12">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XIX. Reservation of Rights</h3>
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
