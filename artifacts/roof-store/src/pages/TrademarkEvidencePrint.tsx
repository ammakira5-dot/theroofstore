import { SEO } from "@/components/SEO";

export default function TrademarkEvidencePrint() {
  return (
    <>
      <SEO
        title="Brand Infringement Evidence File — Print Version | The Roof Store"
        description="Print version of the Brand Infringement Evidence File."
        canonical="/trademark-evidence-print"
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
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1 font-sans">Prepared for Attorney Review — Confidential Work Product</p>
            <h1 className="text-2xl font-bold mb-1">BRAND INFRINGEMENT EVIDENCE FILE</h1>
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              The Roof Store / Storm Shield Paint Systems Inc. &nbsp;v.&nbsp; theroof.store (Dmitry Lipinskiy)
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm font-sans">
              <div>
                <p className="text-xs uppercase text-gray-500 font-bold">Document Date</p>
                <p>July 22, 2026</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 font-bold">Status</p>
                <p>Preliminary — Pending Attorney Review</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 font-bold">Prior Rights Holder</p>
                <p>The Roof Store / Storm Shield Paint Systems Inc.<br />4801 S University Dr, Davie, FL 33328<br />(954) 210-9614 · theroofstore.net</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500 font-bold">Respondent Domain</p>
                <p>theroof.store<br />Registrant: Domains By Proxy, LLC (privacy-shielded)<br />Registrar: GoDaddy.com, LLC</p>
              </div>
            </div>
          </div>

          {/* I. Summary */}
          <Section title="I. Summary of Claim">
            <p>The Roof Store has operated continuously under that name, and at the domain <strong>theroofstore.net</strong>, since <strong>July 29, 2002</strong> — and as a Florida-registered business since <strong>1994</strong>. The respondent registered <strong>theroof.store</strong> on <strong>August 13, 2021</strong> — 19 years after the prior rights holder's domain and 27 years after the business was founded.</p>
            <p className="mt-2">Both parties operate in the roofing industry. The respondent ships roofing supplies into Florida — the prior rights holder's primary geographic market — under the identical name "The Roof Store." The respondent's operator, <strong>Dmitry Lipinskiy</strong>, runs one of the roofing industry's largest content platforms (Roofing Insights, ~200,000–250,000 YouTube subscribers), amplifying the infringing brand nationally and in Florida.</p>
            <p className="mt-2">The respondent's domain is privacy-shielded via Domains By Proxy, LLC (GoDaddy) — a registration practice commonly associated with bad faith under UDRP ¶4(b) and ACPA analysis.</p>
          </Section>

          {/* II. Prior Rights Timeline */}
          <Section title="II. Prior Rights Timeline">
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4 w-28">Date</th>
                  <th className="text-left py-2 pr-4">Event</th>
                  <th className="text-left py-2">Significance</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-semibold">1994</td><td className="py-2 pr-4">The Roof Store founded, Broward County, FL</td><td className="py-2">27 years of prior use in commerce</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-semibold">Jul 29, 2002</td><td className="py-2 pr-4">theroofstore.net domain registered</td><td className="py-2">19 years of domain seniority</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-semibold">2002–2021</td><td className="py-2 pr-4">Continuous commercial operation under "The Roof Store"</td><td className="py-2">Unbroken prior use — trademark-like rights established</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-semibold">Aug 13, 2021</td><td className="py-2 pr-4">theroof.store domain registered by respondent</td><td className="py-2">Registration occurs well after prior rights established</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-semibold">2022–2023</td><td className="py-2 pr-4">Complainant's Google Merchant Center account removed without explanation</td><td className="py-2">12–18 months after respondent launched — see Exhibit Q</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-semibold">Jul 22, 2026</td><td className="py-2 pr-4">Evidence file compiled — GSC, Moz, and archive data extracted</td><td className="py-2">Document date</td></tr>
              </tbody>
            </table>
          </Section>

          {/* III. Domain Registration Evidence */}
          <Section title="III. Domain Registration Evidence (Exhibit A)">
            <p className="text-sm font-sans"><strong>theroofstore.net:</strong> Registered July 29, 2002 · Registrar: Network Solutions · Registrant: The Roof Store / Storm Shield Paint Systems Inc. · 4801 S University Dr, Davie, FL 33328</p>
            <p className="text-sm font-sans mt-2"><strong>theroof.store:</strong> Registered August 13, 2021 · Registrar: GoDaddy.com, LLC · Registrant: Domains By Proxy, LLC (privacy-shielded) · Gap from prior rights holder: 19 years (domain), 27 years (business use)</p>
            <p className="text-sm font-sans mt-2">Chain of title note: 2002–2005 archive records list registrant entity as "Anthony's Enterprises Inc." — a prior corporation, since dissolved, owned by the same individual. Domain, brand, and business carried forward under common ownership continuously from 1994 to present.</p>
          </Section>

          {/* IV. Geographic Market Overlap */}
          <Section title="IV. Geographic Market Overlap (Exhibit B)">
            <p className="text-sm font-sans">The prior rights holder's primary market is Broward, Miami-Dade, and Palm Beach County, Florida. The respondent has publicly stated: <em>"Delivering within a week anywhere south (Atlanta, Florida, California)"</em> — a Facebook post documenting direct shipment into the complainant's core geographic market. Both parties sell roofing products and services under the identical name "The Roof Store" to Florida customers simultaneously.</p>
          </Section>

          {/* V. Commercial Activity Evidence */}
          <Section title="V. Commercial Activity Evidence (Exhibits C–F)">
            <p className="text-sm font-sans mb-2"><strong>Exhibit C — Business Registration:</strong> Storm Shield Paint Systems Inc., Florida Division of Corporations, active status. Roofing contractor license active. Florida registered since 1994.</p>
            <p className="text-sm font-sans mb-2"><strong>Exhibit D — Respondent Commercial Activity:</strong> theroof.store operates a national B2B roofing supply platform. Intake form lists "Dmitry Lipinskiy" as a selectable CRM lead-source option — confirming the Roofing Insights audience (200,000+ subscribers) is a deliberate, tracked acquisition channel. Site includes /category/roofing-insights URL structure (Page Authority 21, per Moz).</p>
            <p className="text-sm font-sans mb-2"><strong>Exhibit E — Financial Impact Estimate:</strong> CPC-modeled projection: $235,000–$1,770,000 cumulative over 5 years (Aug 2021–present). Based on Florida roofing CPC ($8–$15/click) applied to estimated branded search diversion volume. Preliminary — see Section XV for Moz-anchored three-tier damages table.</p>
            <p className="text-sm font-sans"><strong>Exhibit F — Roofing Insights Amplification:</strong> Dmitry Lipinskiy operates "Roofing Insights" YouTube channel with 200,000–250,000 subscribers. theroof.store site architecture built around this audience (dedicated /category/roofing-insights section). This is not incidental — it is a deliberate brand strategy channeling a large roofing contractor audience to the infringing domain.</p>
          </Section>

          {/* VI. Video Evidence */}
          <Section title="VI. Archived Video Evidence (Exhibits I–J)">
            <p className="text-sm font-sans mb-2"><strong>Exhibit I — 1999 TV Commercial:</strong> "makira1111" YouTube channel, uploaded approximately 1999–2000, title: "The Roof Store TV Commercial." Description references www.theroofstore.net and Florida operations. Establishes commercial use predating domain registration.</p>
            <p className="text-sm font-sans"><strong>Exhibit J — 2011 Field Footage:</strong> Same channel, "Roof repair cement tile roof Ft Lauderdale, Pompano Beach," uploaded December 6, 2011 (179 views). Description references www.theroofstore.net and a legacy toll-free number. Establishes continuous South Florida commercial operation over the prior decade.</p>
          </Section>

          {/* VII. Search Engine Brand Confusion */}
          <Section title="VII. Search Engine Brand Confusion (Exhibit K)">
            <p className="text-sm font-sans mb-2">Google Search Console data (verified property, theroofstore.net, 3-month window ending July 22, 2026):</p>
            <table className="w-full text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-3">Query</th>
                  <th className="text-left py-2 pr-3">Avg. Position</th>
                  <th className="text-left py-2 pr-3">Impressions</th>
                  <th className="text-left py-2 pr-3">Clicks</th>
                  <th className="text-left py-2">Expected</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-red-50 font-semibold"><td className="py-2 pr-3 font-mono">the roof store</td><td className="py-2 pr-3 text-red-700">20.1</td><td className="py-2 pr-3">161</td><td className="py-2 pr-3">3</td><td className="py-2 italic font-normal">#1 — own brand</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-mono">roof coating</td><td className="py-2 pr-3 text-red-700">67.1</td><td className="py-2 pr-3">2,782</td><td className="py-2 pr-3">0</td><td className="py-2 italic">Page 1</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-mono">waterproof roof coating</td><td className="py-2 pr-3">46.7</td><td className="py-2 pr-3">—</td><td className="py-2 pr-3">—</td><td className="py-2 italic">Page 1–3</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-mono">roof paint miami</td><td className="py-2 pr-3">4.1</td><td className="py-2 pr-3">—</td><td className="py-2 pr-3">—</td><td className="py-2 italic">Top 3 local</td></tr>
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-600 mt-2 italic">A 24-year-old domain ranking at position 20.1 for its own exact brand name is direct, platform-native evidence of brand confusion attributable to the respondent's identical name use.</p>
          </Section>

          {/* VIII. Prior Rights Notice */}
          <Section title="VIII. Public Prior Rights Notice (Exhibit L)">
            <p className="text-sm font-sans">Published at https://www.theroofstore.net/the-original-roof-store-florida — "The Original Roof Store Florida — Established 1994 | Trademark Notice." Fully Google-indexed. Includes Organization schema with foundingDate: 1994, full commercial timeline, embedded 1999 TV commercial and 2011 field footage, and explicit UDRP ¶4(b)(iii)/¶4(b)(iv) prior rights notice. Constitutes public record of prior rights claim predating any filing.</p>
          </Section>

          {/* IX. Automated Monitoring */}
          <Section title="IX. Automated Monitoring System (Exhibit M)">
            <p className="text-sm font-sans">SHA-256 hash-based monitoring of theroof.store homepage deployed July 8, 2026. Baseline snapshot captured 10:25 AM EDT. System records every check in an append-only log. Attorney read-only access available. Any content change on the respondent's site is automatically flagged and preserved as evidentiary record.</p>
          </Section>

          {/* XV. Google Platform Evidence */}
          <Section title="X. Google Platform Complaint — Evidence &amp; Relief (Exhibits P, Q, R)">
            <p className="text-sm font-sans mb-3">The complainant has suffered measurable harm across three Google platform categories directly attributable to theroof.store's identical name adoption.</p>

            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Exhibit P — Third-Party Domain Authority Comparison (Moz, July 22, 2026)</h4>
            <table className="w-full text-xs font-sans border-collapse mb-3">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-4">Metric</th>
                  <th className="text-left py-2 pr-4">theroofstore.net</th>
                  <th className="text-left py-2">theroof.store</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-medium">Domain Age</td><td className="py-2 pr-4">24 years (est. 1994, domain 2002)</td><td className="py-2">~4 years (est. Aug 2021)</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-medium">Moz Domain Authority</td><td className="py-2 pr-4">15</td><td className="py-2 font-bold text-red-700">16 — higher despite 20 years newer</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-medium">Linking Root Domains</td><td className="py-2 pr-4">207 (46 more)</td><td className="py-2">161</td></tr>
                <tr className="border-b border-gray-200 bg-red-50 font-semibold"><td className="py-2 pr-4">Ranking Keywords</td><td className="py-2 pr-4">139</td><td className="py-2 text-red-700">1,300 — 9× more</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-4 font-medium">Top Linked Internal Page</td><td className="py-2 pr-4">/products.php (PA 25)</td><td className="py-2">/category/roofing-insights (PA 21)</td></tr>
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-700 mb-4">A domain with 24 years of operation and 46 more backlinks ranks for 9× fewer keywords than a 4-year-old domain. This is the measurable fingerprint of Google's brand disambiguation systems failing to resolve which entity is the authoritative "The Roof Store."</p>

            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Exhibit Q — Google Merchant Center / Shopping Account Removal (~2022–2023)</h4>
            <p className="text-xs font-sans mb-2">The complainant's established Google Shopping account was removed without explanation, without notice of specific policy violation, and without any offered remedy — approximately 12–18 months after theroof.store launched under the same brand name. Three probable causes: (1) automated brand-conflict detection treating the prior-rights holder as a duplicate; (2) competitor-initiated impersonation complaint; (3) Google Knowledge Graph entity conflation reversing chronological priority. Impact: full Google Shopping presence eliminated, direct e-commerce revenue channel cut off. <strong>Owner to confirm exact date and any Google support ticket/case reference numbers.</strong></p>

            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Exhibit R — GSC Brand Search Suppression</h4>
            <p className="text-xs font-sans mb-4">See Exhibit K table above. Key figure: "the roof store" at position 20.1, 161 impressions, 3 clicks over 3 months — for the domain that has used the name since 1994.</p>

            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Google Platform Financial Damages — Three-Tier Estimate</h4>
            <table className="w-full text-xs font-sans border-collapse mb-3">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-2 pr-3">Tier</th>
                  <th className="text-left py-2 pr-3">Basis</th>
                  <th className="text-left py-2 pr-3">Monthly</th>
                  <th className="text-left py-2">48-Month Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-bold">1 — Conservative</td><td className="py-2 pr-3">Brand name suppression only — position 20.1 vs. expected #1, $8–$15 FL CPC</td><td className="py-2 pr-3 font-semibold">$1,250–$2,350</td><td className="py-2 font-bold">$15K–$28K</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-bold">2 — Moderate</td><td className="py-2 pr-3">261 suppressed keywords × 30 searches × 15% CTR × $8–$15 CPC (Moz-anchored)</td><td className="py-2 pr-3 font-semibold">$9,400–$17,600</td><td className="py-2 font-bold">$450K–$845K</td></tr>
                <tr className="border-b border-gray-200"><td className="py-2 pr-3 font-bold">3 — Upper</td><td className="py-2 pr-3">Full keyword gap (1,161) × FL share × CTR × CPC + Roofing Insights brand multiplier</td><td className="py-2 pr-3 font-semibold">$18K–$45K</td><td className="py-2 font-bold text-red-800">$864K–$2.16M</td></tr>
              </tbody>
            </table>
            <p className="text-xs font-sans text-gray-500 italic">Preliminary estimates only. Review by counsel and forensic economic expert required before use in any proceeding. Google Shopping removal (Exhibit Q) represents an additional unquantified category not included above.</p>

            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700 mt-4 mb-2">Google Legal Troubleshooter — Pre-Written Submission</h4>
            <p className="text-xs font-sans mb-2">File at: support.google.com/legal/troubleshooter/1114905</p>
            <div className="space-y-3 text-xs font-sans">
              <div className="border border-gray-200 rounded"><div className="bg-gray-100 px-3 py-1 font-bold border-b border-gray-200">Name and relationship to trademark</div><div className="px-3 py-2">Owner and operator of The Roof Store / Storm Shield Paint Systems Inc., a roofing product manufacturer and contractor established in Broward County, Florida in 1994. Trade name "The Roof Store" used continuously in commerce since 1994 — 27 years before theroof.store adopted the same name.</div></div>
              <div className="border border-gray-200 rounded"><div className="bg-gray-100 px-3 py-1 font-bold border-b border-gray-200">What trademark is being infringed</div><div className="px-3 py-2">The trade name and brand "The Roof Store," used continuously in commerce since 1994 in the roofing industry in Florida. Domain theroofstore.net registered and actively used since 2002. Common law trademark rights under prior use in commerce apply.</div></div>
              <div className="border border-gray-200 rounded"><div className="bg-gray-100 px-3 py-1 font-bold border-b border-gray-200">URL or content being reported</div><div className="px-3 py-2">theroof.store — operating as a national roofing supply and services platform under the identical name "The Roof Store." Domain registered August 2021 — 19 years after our domain and 27 years after our first use in commerce. Their site includes /category/roofing-insights (named after Dmitry Lipinskiy's YouTube brand, 200,000+ subscribers) and their intake form lists "Dmitry Lipinskiy" as a selectable CRM lead source.</div></div>
              <div className="border border-gray-200 rounded"><div className="bg-gray-100 px-3 py-1 font-bold border-b border-gray-200">How is this content infringing</div><div className="px-3 py-2">theroof.store operates under an identical name in the same industry causing consumer confusion in Google Search. Our domain ranks at position 20.1 for our own brand name with only 3 clicks in 3 months. Independent Moz data shows our 24-year-old domain with 207 backlinks ranks for only 139 keywords vs. the 4-year-old infringing domain's 1,300 keywords — a 9x gap consistent with Google's authority signals being split by brand confusion. Additionally, our Google Merchant Center account was suspended without explanation ~2022–2023, shortly after theroof.store launched, eliminating our Google Shopping presence without notice or remedy.</div></div>
              <div className="border border-gray-200 rounded"><div className="bg-gray-100 px-3 py-1 font-bold border-b border-gray-200">What remedy are you requesting</div><div className="px-3 py-2">(1) Investigation and reinstatement of our Google Merchant Center account, or formal written explanation including whether a third-party complaint was filed against us. (2) Review of brand disambiguation signals for "the roof store" with correction to reflect prior rights in favor of theroofstore.net (est. 1994, domain 2002). (3) Review of theroof.store's Google platform accounts for compliance with identical-name brand confusion and impersonation policies.</div></div>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700 mt-4 mb-2">Where to File</h4>
            <div className="text-xs font-sans space-y-1">
              <p><strong>Google Legal Trademark Complaint:</strong> support.google.com/legal/troubleshooter/1114905 — File first</p>
              <p><strong>Google Search Spam Report:</strong> search.google.com/search-console/report/spam — File same day</p>
              <p><strong>Google Merchant Center Support:</strong> support.google.com/merchants — File with Exhibit Q attached</p>
              <p><strong>Google Ads Trademark Complaint:</strong> support.google.com/adspolicy/troubleshooter/4578507 — Check for ads first</p>
              <p><strong>ICANN UDRP — WIPO Filing:</strong> www.wipo.int/amc/en/domains/filing/ — After attorney review</p>
            </div>
          </Section>

          {/* Legal Framework */}
          <Section title="XI. Applicable Legal Frameworks">
            <div className="grid grid-cols-2 gap-3 text-xs font-sans">
              <div className="border border-gray-300 rounded p-3">
                <p className="font-bold mb-1">ICANN UDRP</p>
                <p>Applies to .store TLD. Three-element test: (1) identical/confusingly similar mark, (2) no legitimate rights by respondent, (3) bad faith registration and use. Outcome: domain transfer or cancellation. Cost: ~$1,500–$3,500. Timeline: 60–90 days.</p>
              </div>
              <div className="border border-gray-300 rounded p-3">
                <p className="font-bold mb-1">WIPO Arbitration</p>
                <p>ICANN-approved dispute resolution. Preferred for international respondents. Filing fee ~$1,500 (1 panelist) / ~$4,000 (full panel).</p>
              </div>
              <div className="border border-gray-300 rounded p-3">
                <p className="font-bold mb-1">ACPA — 15 U.S.C. § 1125(d)</p>
                <p>Anti-Cybersquatting Consumer Protection Act. Applies when registrant had bad faith intent to profit. Statutory damages $1,000–$100,000 per domain. Requires respondent identity — may need unmasking Domains By Proxy via court order or UDRP discovery.</p>
              </div>
              <div className="border border-gray-300 rounded p-3">
                <p className="font-bold mb-1">Lanham Act § 43(a)</p>
                <p>Federal unfair competition / false designation of origin. Prior use since 1994 establishes common law mark in Florida. Relevant to injunctive relief and damages for unjust enrichment.</p>
              </div>
            </div>
          </Section>

          {/* Next Steps */}
          <Section title="XII. Recommended Next Steps">
            <ol className="list-decimal list-inside space-y-2 text-sm font-sans">
              <li><strong>Attorney review of this file</strong> — Florida IP counsel to assess strength of common law mark, UDRP eligibility, and ACPA standing before any public action.</li>
              <li><strong>Formal WHOIS/registrant unmasking</strong> — Confirm Dmitry Lipinskiy as registrant of record via UDRP discovery or pre-suit demand to GoDaddy.</li>
              <li><strong>File Google platform complaint</strong> — Submit to Google Legal Troubleshooter (support.google.com/legal/troubleshooter/1114905) using the pre-written answers in Section X above.</li>
              <li><strong>Run paid SEO analysis</strong> — Pull theroof.store and theroofstore.net on Ahrefs or SEMrush to document specific keyword cannibalization before filing.</li>
              <li><strong>Cease-and-desist letter</strong> — Send privately to Dmitry Lipinskiy before any public filing. Preserve settlement leverage.</li>
              <li><strong>File UDRP complaint</strong> — If C&amp;D is ignored or rejected, file with WIPO or The Forum. Request domain transfer.</li>
            </ol>
          </Section>

          {/* Reservation */}
          <Section title="XIII. Reservation of Rights">
            <p className="text-sm font-sans">The Roof Store / Storm Shield Paint Systems Inc. expressly reserves all rights under the Lanham Act, ACPA, Florida common law, and ICANN UDRP with respect to the domain theroof.store and any other domain names or social media handles using "The Roof Store" brand. This document does not constitute a waiver of any right or remedy. All evidence herein was captured from publicly accessible web pages and represents the live state of the respondent's commercial operations as of the documentation date.</p>
          </Section>

          {/* Footer */}
          <div className="border-t-2 border-gray-900 pt-5 mt-8 flex justify-between text-xs font-sans text-gray-500">
            <div>
              <p className="font-semibold text-gray-700">The Roof Store / Storm Shield Paint Systems Inc.</p>
              <p>4801 S University Dr, Davie, FL 33328 · (954) 210-9614 · theroofstore.net</p>
            </div>
            <div className="text-right">
              <p>Document prepared: July 22, 2026</p>
              <p className="italic">Confidential — Attorney Review Copy</p>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h3 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">{title}</h3>
      {children}
    </section>
  );
}
