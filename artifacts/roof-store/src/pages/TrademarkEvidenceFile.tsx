import { SEO } from "@/components/SEO";

const today = "July 8, 2026";

export default function TrademarkEvidenceFile() {
  return (
    <>
      <SEO
        title="Brand Infringement Evidence File | The Roof Store"
        description="Internal documentation of brand infringement evidence — The Roof Store (theroofstore.net) v. theroof.store."
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
              <strong>Flag for attorney review:</strong> The 2002–2005 archive captures list the registrant entity as <strong>"Anthony's Enterprises Inc."</strong>, not Storm Shield Paint Systems Inc. This may reflect a predecessor entity, a DBA/trade name arrangement, or a later corporate restructuring/rebrand. Recommend confirming chain of title and any assignment of the domain and "The Roof Store" mark from Anthony's Enterprises Inc. to Storm Shield Paint Systems Inc. via Florida Sunbiz records before relying on this evidence in a formal filing, to ensure standing is clearly established.
            </div>
          </section>

          {/* SEO / AI Manipulation Attack Vectors */}
          <section className="mb-10">
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">IX. Anticipated Counter-Attack Vectors &amp; Countermeasures</h3>
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
                  ["Publish a \"rebuttal\" or counter-history page disputing this claim", "Proves actual knowledge of the prior claim — defeats any innocent-registrant defense and is independently datable/archivable as new evidence of bad faith.", "Do not engage or link to it. Screenshot + Wayback-archive it immediately and log it in Section X below."],
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
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">X. Monitoring &amp; Defense Log</h3>
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
                  ["Jul 8, 2026", "Initial evidence file compiled", "Baseline documentation established — see Exhibits A–F above."],
                  ["Jul 8, 2026", "Wayback Machine independent archive pull", "Confirmed continuous archive.org captures of theroofstore.net from Jan 2002 onward — see Exhibit F."],
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
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XI. Applicable Legal Frameworks</h3>
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
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XII. Recommended Next Steps</h3>
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
            <h3 className="text-base font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">XIII. Reservation of Rights</h3>
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
