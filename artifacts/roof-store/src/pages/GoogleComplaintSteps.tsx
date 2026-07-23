import { SEO } from "@/components/SEO";

export default function GoogleComplaintSteps() {
  return (
    <>
      <SEO
        title="Google Complaint Steps — The Roof Store"
        description="Google platform complaint filing guide — The Roof Store v. theroof.store."
        canonical="/google-complaint-steps"
        noindex
      />
      <div className="bg-white text-gray-900 min-h-screen">
        <div className="max-w-3xl mx-auto px-8 py-10 print:py-4 print:px-6">

          {/* Print button */}
          <div className="print:hidden mb-6 text-center">
            <button
              onClick={() => window.print()}
              className="bg-gray-900 text-white px-8 py-3 rounded font-sans text-sm font-semibold hover:bg-gray-700"
            >
              Print / Save as PDF
            </button>
            <p className="text-xs text-gray-400 mt-1 font-sans">File → Print → Save as PDF</p>
          </div>

          {/* Header */}
          <div className="border-b-2 border-gray-900 pb-5 mb-7">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-sans">Confidential — Attorney Review Copy</p>
            <h1 className="text-2xl font-bold mb-1">GOOGLE COMPLAINT STEPS</h1>
            <h2 className="text-base font-semibold text-gray-700 mb-1">Access, Fill-In Ready &amp; Filing Guide</h2>
            <p className="text-sm font-sans text-gray-600">
              <strong>Complainant:</strong> The Roof Store / Storm Shield Paint Systems Inc. — theroofstore.net — Est. 1994<br />
              <strong>Subject Domain:</strong> theroof.store (Dmitry Lipinskiy / Roofing Insights)<br />
              <strong>Companion file:</strong> Brand Infringement Evidence File — theroofstore.net/trademark-evidence-print
            </p>
          </div>

          {/* Step 1 */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">Step 1 — File Google Legal Trademark Complaint (File First)</h3>
            <p className="text-sm font-sans mb-3">
              <strong>URL:</strong>{" "}
              <span className="font-mono text-blue-700 text-xs">support.google.com/legal/troubleshooter/1114905</span>
            </p>
            <p className="text-sm font-sans mb-4 text-gray-600">Copy and paste each answer below directly into the corresponding form field.</p>

            <div className="space-y-4">
              <FormField
                label="Your name and relationship to the trademark"
                answer="Owner and operator of The Roof Store / Storm Shield Paint Systems Inc., a roofing product manufacturer and contractor established in Broward County, Florida in 1994. I have used the trade name 'The Roof Store' continuously in commerce since 1994 — 27 years before theroof.store adopted the same name."
              />
              <FormField
                label="What trademark is being infringed"
                answer="The trade name and brand 'The Roof Store,' used continuously in commerce since 1994 in the roofing industry in Florida. Domain theroofstore.net has been registered and actively used since July 29, 2002. Common law trademark rights under prior use in commerce apply. [Add federal trademark registration number here if/when filed.]"
              />
              <FormField
                label="What URL or content are you reporting"
                answer="theroof.store — operating as a national roofing supply and services commercial platform under the identical name 'The Roof Store.' The domain was registered approximately August 13, 2021 — 19 years after our domain registration and 27 years after our business was founded. The site includes a dedicated /category/roofing-insights page tied to Dmitry Lipinskiy's Roofing Insights YouTube brand (200,000+ subscribers), and their intake form lists 'Dmitry Lipinskiy' as a selectable CRM lead source."
              />
              <FormField
                label="How is this content infringing"
                answer="theroof.store operates under an identical name in the same industry (roofing), causing consumer confusion in Google Search. Google Search Console data shows our domain — the prior rights holder — ranking at position 20.1 for our own exact brand name 'the roof store,' with 161 impressions and only 3 clicks over a 3-month window. Independent third-party analysis (Moz, July 22, 2026) confirms our 24-year-old domain with 207 linking root domains ranks for only 139 keywords, while the 4-year-old infringing domain with 161 linking root domains ranks for 1,300 keywords — a 9x gap consistent with Google's authority signals being split by brand confusion. Additionally, our Google Merchant Center / Shopping account was suspended without explanation approximately 2022–2023, shortly after theroof.store's launch — eliminating our Google Shopping presence without notice, reason, or remedy."
              />
              <FormField
                label="What remedy are you requesting"
                answer="1. Investigation and reinstatement of our Google Merchant Center account, or formal written explanation of grounds for suspension, including disclosure of whether a third-party complaint was filed against our account and by whom. 2. Review of Google's brand disambiguation signals for the search query 'the roof store,' with correction to reflect prior rights in favor of theroofstore.net (established 1994, domain 2002). 3. Review of theroof.store's Google platform accounts (Search, Shopping, Ads) for compliance with Google's identical-name brand confusion and impersonation policies."
              />
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">Step 2 — File Google Search Spam Report (Same Day)</h3>
            <p className="text-sm font-sans mb-2">
              <strong>URL:</strong>{" "}
              <span className="font-mono text-blue-700 text-xs">search.google.com/search-console/report/spam</span>
            </p>
            <div className="border border-gray-200 rounded p-4 text-sm font-sans text-gray-800 leading-relaxed">
              <p className="mb-2"><strong>Report type:</strong> Brand impersonation / identical trade name</p>
              <p className="mb-2"><strong>Domain being reported:</strong> theroof.store</p>
              <p><strong>Description to use:</strong> "theroof.store operates under the identical trade name 'The Roof Store' adopted in August 2021 — 19 years after the prior rights holder (theroofstore.net, domain registered July 29, 2002, business established 1994) and without authorization. The duplicate brand name is causing measurable search engine confusion — the prior rights holder's domain currently ranks at position 20.1 for its own exact brand name. Requesting review for brand impersonation and identical-name confusion policy compliance."</p>
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">Step 3 — Google Merchant Center Support (Shopping Reinstatement)</h3>
            <p className="text-sm font-sans mb-2">
              <strong>URL:</strong>{" "}
              <span className="font-mono text-blue-700 text-xs">support.google.com/merchants</span>
            </p>
            <div className="border border-gray-200 rounded p-4 text-sm font-sans text-gray-800 leading-relaxed">
              <p className="mb-2"><strong>Subject line to use:</strong> "Merchant Center Account Suspended — Prior Rights Holder — Request for Reinstatement and Explanation"</p>
              <p className="mb-2"><strong>Message to use:</strong> "Our Google Merchant Center account for The Roof Store / Storm Shield Paint Systems Inc. (theroofstore.net, established 1994) was suspended approximately [INSERT EXACT DATE] without a specific reason, without a violation notice, and without any offered remedy through standard support channels. Our account predates theroof.store (registered August 2021) by [X] years. We are the prior rights holder to the trade name 'The Roof Store.' We request: (1) the specific reason(s) for our account suspension, (2) disclosure of whether any third-party complaint was filed against our account and by whom, and (3) reinstatement of our account or a formal written determination of ineligibility."</p>
              <div className="mt-3 border border-amber-300 bg-amber-50 rounded p-3 text-xs text-amber-900">
                <strong>Owner action required:</strong> Fill in the exact date of suspension and the number of years before theroof.store. Attach any emails or screenshots from Google related to the suspension.
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">Step 4 — Check for Google Ads (Before Filing Ads Complaint)</h3>
            <p className="text-sm font-sans mb-2">Search Google for <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">"the roof store"</span> and look for any paid ads at the top of the results page. If theroof.store is running Google Ads bidding on "the roof store" as a keyword:</p>
            <p className="text-sm font-sans mb-2">
              <strong>URL:</strong>{" "}
              <span className="font-mono text-blue-700 text-xs">support.google.com/adspolicy/troubleshooter/4578507</span>
            </p>
            <div className="border border-gray-200 rounded p-4 text-sm font-sans text-gray-800">
              <p><strong>Complaint basis:</strong> Trademark use in ad text or keyword bidding. Prior rights holder: theroofstore.net (est. 1994). Infringing advertiser: theroof.store. Request: prohibition on use of "The Roof Store" in ad copy or as a bidded keyword by theroof.store.</p>
            </div>
          </section>

          {/* Step 5 */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">Step 5 — ICANN UDRP via WIPO (After Attorney Review)</h3>
            <p className="text-sm font-sans mb-2">
              <strong>URL:</strong>{" "}
              <span className="font-mono text-blue-700 text-xs">www.wipo.int/amc/en/domains/filing/</span>
            </p>
            <div className="border border-gray-200 rounded p-4 text-sm font-sans text-gray-800 leading-relaxed">
              <p className="mb-2"><strong>Three-element UDRP test (all three must be satisfied):</strong></p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Identical or confusingly similar mark:</strong> theroof.store is confusingly similar to "The Roof Store" — identical name, same industry, identical consumers. ✅ Clearly satisfied.</li>
                <li><strong>No legitimate rights or interests by respondent:</strong> Respondent has no prior use, no registration, no authorization from the complainant. Business use began 27 years after complainant. ✅ Strong argument.</li>
                <li><strong>Bad faith registration and use:</strong> Privacy-shielded registration (Domains By Proxy), identical name, same industry, amplified via Roofing Insights platform (200,000+ subscribers). ✅ Multiple bad faith indicators.</li>
              </ol>
              <p className="mt-3 text-xs text-gray-600 italic">Cost: ~$1,500 (1 panelist) to ~$4,000 (3 panelists). Timeline: 60–90 days. Outcome if successful: domain transfer to complainant. Do not file without attorney review.</p>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-4">Quick Reference — All Filing URLs</h3>
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4">Step</th>
                  <th className="text-left py-2 pr-4">Action</th>
                  <th className="text-left py-2 pr-4">URL</th>
                  <th className="text-left py-2">Priority</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-gray-200 bg-red-50"><td className="py-2 pr-4 font-bold">1</td><td className="py-2 pr-4 font-semibold">Google Legal Trademark Complaint</td><td className="py-2 pr-4 font-mono text-blue-700">support.google.com/legal/troubleshooter/1114905</td><td className="py-2 font-bold text-red-700">File first</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-bold">2</td><td className="py-2 pr-4">Google Search Spam Report</td><td className="py-2 pr-4 font-mono text-blue-700">search.google.com/search-console/report/spam</td><td className="py-2">Same day</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-bold">3</td><td className="py-2 pr-4">Google Merchant Center Support</td><td className="py-2 pr-4 font-mono text-blue-700">support.google.com/merchants</td><td className="py-2">With Exhibit Q</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-bold">4</td><td className="py-2 pr-4">Google Ads Trademark Complaint</td><td className="py-2 pr-4 font-mono text-blue-700">support.google.com/adspolicy/troubleshooter/4578507</td><td className="py-2">Check ads first</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-bold">5</td><td className="py-2 pr-4">ICANN UDRP — WIPO Filing</td><td className="py-2 pr-4 font-mono text-blue-700">www.wipo.int/amc/en/domains/filing/</td><td className="py-2">After attorney review</td></tr>
              </tbody>
            </table>
          </section>

          {/* Footer */}
          <div className="border-t-2 border-gray-900 pt-5 mt-6 flex justify-between text-xs font-sans text-gray-500">
            <div>
              <p className="font-semibold text-gray-700">The Roof Store / Storm Shield Paint Systems Inc.</p>
              <p>4801 S University Dr, Davie, FL 33328 · (954) 210-9614 · theroofstore.net</p>
            </div>
            <div className="text-right">
              <p>July 22, 2026 · Confidential — Attorney Review Copy</p>
              <p className="italic">Full evidence: theroofstore.net/trademark-evidence-print</p>
            </div>
          </div>

          {/* Print button bottom */}
          <div className="print:hidden mt-6 text-center">
            <button
              onClick={() => window.print()}
              className="bg-gray-900 text-white px-8 py-3 rounded font-sans text-sm font-semibold hover:bg-gray-700"
            >
              Print / Save as PDF
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

function FormField({ label, answer }: { label: string; answer: string }) {
  return (
    <div className="border border-gray-200 rounded">
      <div className="bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-600 font-sans border-b border-gray-200">
        {label}
      </div>
      <div className="px-4 py-3 text-sm font-sans text-gray-800 leading-relaxed">
        {answer}
      </div>
    </div>
  );
}
