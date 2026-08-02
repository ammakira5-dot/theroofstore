import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

type AuthState = "idle" | "checking" | "granted" | "denied";

export default function AttorneyCaseFile() {
  const [authState, setAuthState] = useState<AuthState>("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const password = inputRef.current?.value ?? "";
    if (!password) return;
    setAuthState("checking");
    try {
      const res = await fetch("/api/trademark-monitoring/verify", {
        headers: { "x-admin-password": password },
      });
      if (res.ok) setAuthState("granted");
      else {
        setAuthState("denied");
        if (inputRef.current) inputRef.current.value = "";
      }
    } catch {
      setAuthState("denied");
    }
  }

  if (authState === "granted") {
    return (
      <>
        <Helmet>
          <title>Attorney Case File — Substantial Arguments</title>
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        </Helmet>
        <div className="min-h-screen bg-white text-gray-900">
          <div className="mx-auto max-w-4xl px-6 py-10 print:py-4">
            <div className="mb-8 rounded-lg border-2 border-red-300 bg-red-50 p-4 text-sm text-red-900 print:hidden">
              <strong>CONFIDENTIAL — ATTORNEY WORK PRODUCT.</strong> Prepared for counsel review. Not for publication or distribution. This page is excluded from search engines.
            </div>

            <h1 className="text-2xl font-bold">
              Substantial Arguments — Point-by-Point Rebuttal to Presumed Defenses
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Matter: The Roof Store (theroofstore.net, use in commerce since 1994) adv. theroof.store (registered August 13, 2021) · Prepared August 3, 2026
            </p>

            <div className="mt-6 flex flex-wrap gap-3 print:hidden">
              <a
                href="/bcf-77419-x.docx"
                download="Brief of Claimant - The Roof Store.docx"
                className="inline-block rounded-md bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800"
              >
                ⬇ Download: Brief of Claimant (.docx)
              </a>
              <button
                onClick={() => window.print()}
                className="inline-block rounded-md border border-gray-400 px-5 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-100"
              >
                🖨 Print this page
              </button>
            </div>

            <hr className="my-8" />

            <section className="space-y-4">
              <h2 className="text-xl font-bold">Rebuttal Point 1 — “The mark is merely descriptive and unprotectable.”</h2>
              <p>
                The mark has acquired secondary meaning through more than three decades of continuous, exclusive use in the same geographic market. Complainant has used “The Roof Store” in commerce since 1994 and has maintained a continuous web presence at theroofstore.net since at least April 2001 (Internet Archive, exhibit on record). Under the <em>Dudley</em> factors: (1) length and exclusivity of use — 27+ years before Respondent’s registration, unshared by any competitor in the market; (2) established physical facility and factory operations in Broward County under the mark; (3) verified Google Business Profile, decades of customer relationships, and an indexed body of web content under the mark.
              </p>
              <p>
                Most tellingly, secondary meaning is demonstrated <em>by the Respondent’s own conduct</em>: Google’s AI systems associate the mark with a single company profile — proof the marketplace treats “The Roof Store” as a source identifier, not a description. And under <em>Stout v. Laws</em>, 37 Haw. 382 (1946), a junior user who adopts an established name is <em>presumed</em> to be seeking “the trade which belongs to the established concern.”
              </p>
              <p className="text-sm text-gray-700">
                <strong>Supporting authority:</strong> <em>Inwood Labs., Inc. v. Ives Labs., Inc.</em>, 456 U.S. 844, 851 n.11 (1982) (secondary-meaning definition); <em>In re Seats, Inc.</em>, 757 F.2d 274 (Fed. Cir. 1985); <em>In re Bush Brothers &amp; Co.</em>, 884 F.2d 569 (Fed. Cir. 1989); <em>Application of the Chesapeake Corp. of Virginia</em>, 420 F.2d 754 (C.C.P.A. 1970); <em>Dudley v. HealthSource Chiropractic</em>, 585 F. Supp. 2d 433 (W.D.N.Y. 2008) (six-factor framework); <em>Impulse Communications v. Uplift Games</em> (D.R.I. 2024) (unregistered senior mark with secondary meaning prevailed; closest fact pattern).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-xl font-bold">Rebuttal Point 2 — “Common-law rights are geographically limited.”</h2>
              <p>
                Respondent markets and sells into Florida — the precise territory where Complainant’s rights are strongest and oldest. This is not a case of remote junior use in a distant market; the confusion documented in Exhibit T occurred in response to a South Florida consumer query about a Spanish tile roof, Complainant’s home market and specialty. Where the junior user enters the senior user’s established territory, geographic limitation is no defense; it is the location of the injury.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Supporting authority:</strong> Tea Rose–<em>Rectanus</em> doctrine (shield for innocent remote users, not a sword for market invaders); <em>ACCU Personnel v. AccuStaff</em>, 846 F. Supp. 1191 (D. Del. 1994); <em>SMJ &amp; J v. NRG Heat &amp; Power</em>, 912 F. Supp. 2d 189 (M.D. Pa. 2012); <em>Architemps, Inc. v. Architemps, Ltd.</em>, 704 F. Supp. 39 (S.D.N.Y. 1988); <em>Stout v. Laws</em>, 37 Haw. 382 (1946).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-xl font-bold">Rebuttal Point 3 — “Registration of a generic domain, without knowledge, is not bad faith.”</h2>
              <p>
                Actual knowledge is established, not inferred. Exhibit S is a direct commercial solicitation sent by Respondent to Complainant on July 28, 2026 — Respondent demonstrably knows Complainant exists, knows its name, and knows its line of business. Further, any WHOIS or search-engine query at the time of registration (August 13, 2021) would have disclosed theroofstore.net and its twenty-year footprint; under the willful-blindness doctrine recognized by UDRP panels and federal courts, failure to conduct that elementary search is itself evidence of bad faith.
              </p>
              <p>
                Respondent then compounded the deception by titling a product “<strong>The Roof Store</strong> Synthetic Roofing Underlayment” (Exhibit U) — embedding Complainant’s exact trade name, with the space restored, into a product title. One does not accidentally adopt a competitor’s name as a product name.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Supporting authority:</strong> <em>Mira Holdings v. ZoomerMedia</em> (D. Colo. 2023) (nine ACPA bad-faith factors; solicitation to Complainant by name is conclusive of knowledge); <em>Eurotech v. Cosmos European Travels</em>, 213 F. Supp. 2d 612 (E.D. Va. 2002) (willful blindness); <em>Xereas v. Heiss</em>, 933 F. Supp. 2d 1 (D.D.C. 2013) (applies to re-registration); <em>American Chicle v. Topps Chewing Gum</em>, 210 F.2d 680 (2d Cir. 1954) (passing off); <em>51 West 51st Corp. v. Roland</em>, 50 A.2d 369 (N.J. Ch. 1946) (likelihood of reliance sufficient; copied name “unnecessary to the honest prosecution of the junior’s business”); <em>Weiss v. The Stork Gift Shop</em>, 45 A.2d 688 (N.J. Ch. 1946) (generic words still protected where use is calculated to deceive); <em>Ready Capital Corp. v. READY CAPITAL CORP.</em> (letter-for-letter adoption states a viable claim); <em>Bates Mfg. Co. v. Bates Numbering Mach. Co.</em>, 172 F. 892 (3d Cir. 1909) (gradual appropriation of reputation); <em>Borescopes R US v. 1800Endoscope.Com</em>, 728 F. Supp. 2d 938 (M.D. Tenn. 2010) (two-element passing-off test).
              </p>
            </section>

            <section className="mt-10 space-y-4">
              <h2 className="text-xl font-bold">Rebuttal Point 4 — “An AI answer is not consumer confusion.”</h2>
              <p>
                Exhibit T is not offered as machine error; Exhibit U proves it is not one. The AI’s statements — “ASTM D8257,” “Florida Approval # 48228” — match Respondent’s own published product listing verbatim. The confusion originates in Respondent’s commercial content, not in algorithmic invention.
              </p>
              <p>
                Moreover, AI-generated answers are now a primary consumer-facing channel: the misattribution was delivered to a real consumer at the moment of purchase decision, in Complainant’s home market, displacing Complainant’s flagship product with Respondent’s. Whether the intermediary is a phone call, a search result, or an AI answer, the source and the injury are identical — and here both are documented, dated, and captured.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Supporting authority:</strong> <em>Jenzabar, Inc. v. Long Bow Group</em>, 82 Mass. App. Ct. 648 (2012) (initial-interest confusion actionable even if later dispelled); <em>Lion-Aire Corp. v. Lion Air Installation</em> (E.D.N.Y. 2024) (misdirected digital interaction constitutes actual confusion inflicting commercial injury).
              </p>
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm">
                <strong>⚠ Presentation caution (for counsel):</strong> <em>Sunenblick v. Harrell</em>, 895 F. Supp. 616 (S.D.N.Y. 1995) and <em>RVC Floor Decor v. Floor &amp; Decor Holdings</em> (E.D.N.Y. 2023) hold that misdirected <em>inquiries</em> alone are insufficient — confusion evidence must connect to a <em>purchasing decision</em>. Exhibit T should always be presented as a purchase-decision misattribution (consumer selecting a repair approach for a failing Spanish tile roof — the moment of product/procedure selection — with Complainant’s flagship product displaced by Respondent’s), never as a mere misdirected inquiry. Per <em>Trouble v. Wet Seal</em>, 179 F. Supp. 2d 291 (S.D.N.Y. 2001), customer statements of confusion are admissible as state-of-mind evidence, but logs manufactured for litigation are not — the monitoring log’s ordinary-course, append-only design should be preserved as-is.
              </div>
            </section>

            <section className="mt-10 space-y-3">
              <h2 className="text-xl font-bold">Known gap to strengthen (Point 1)</h2>
              <p className="text-sm">
                Secondary-meaning proof would hit harder with countable specifics: years of advertising spend, invoice volume, review counts, media mentions, historical ads. This evidence pile is being assembled.
              </p>
            </section>

            <section className="mt-10 space-y-3">
              <h2 className="text-xl font-bold">Related evidence (this site)</h2>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li><a className="text-blue-700 underline" href="/trademark-evidence-file">Trademark Evidence File</a> — Exhibits A–U</li>
                <li><a className="text-blue-700 underline" href="/trademark-monitoring-log">Trademark Monitoring Log</a> — append-only, timestamped (attorney read-only access with this same password)</li>
                <li><a className="text-blue-700 underline" href="/trademark-evidence-print">Print-formatted evidence file</a></li>
              </ul>
            </section>

            <p className="mt-12 border-t pt-4 text-xs text-gray-500">
              Confidential attorney work product · Prepared August 3, 2026 · The Roof Store, Broward County, Florida
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Access Required</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
        <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: "12px", padding: "40px 48px", width: "100%", maxWidth: "400px", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>🔒</div>
            <p style={{ color: "#94a3b8", fontSize: ".82rem", letterSpacing: ".08em", textTransform: "uppercase", margin: 0 }}>Restricted Document</p>
            <h1 style={{ color: "#f1f5f9", fontSize: "1.2rem", fontWeight: 700, margin: "8px 0 0" }}>Access Required</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", color: "#94a3b8", fontSize: ".8rem", marginBottom: "8px", letterSpacing: ".04em" }}>Password</label>
            <input
              ref={inputRef}
              type="password"
              autoComplete="current-password"
              autoFocus
              style={{ width: "100%", padding: "11px 14px", background: "#0f172a", border: authState === "denied" ? "1px solid #ef4444" : "1px solid #475569", borderRadius: "8px", color: "#f1f5f9", fontSize: ".95rem", outline: "none", boxSizing: "border-box", marginBottom: authState === "denied" ? "8px" : "20px" }}
              placeholder="Enter access password"
            />
            {authState === "denied" && (
              <p style={{ color: "#ef4444", fontSize: ".82rem", margin: "0 0 16px" }}>Incorrect password. Try again.</p>
            )}
            <button
              type="submit"
              disabled={authState === "checking"}
              style={{ width: "100%", padding: "11px", background: authState === "checking" ? "#334155" : "#2563eb", color: "#fff", border: "none", borderRadius: "8px", fontSize: ".95rem", fontWeight: 700, cursor: authState === "checking" ? "default" : "pointer", transition: "background .15s" }}
            >
              {authState === "checking" ? "Verifying…" : "Access Document"}
            </button>
          </form>
          <p style={{ color: "#475569", fontSize: ".75rem", textAlign: "center", marginTop: "24px", marginBottom: 0, lineHeight: 1.5 }}>
            This document is confidential attorney work product.<br />Authorized access only.
          </p>
        </div>
      </div>
    </>
  );
}
