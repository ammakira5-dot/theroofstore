import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

type AuthState = "idle" | "checking" | "granted" | "denied";

export default function AttorneyCaseFile() {
  const [authState, setAuthState] = useState<AuthState>("idle");
  const [contentHtml, setContentHtml] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [downloading, setDownloading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const pw = inputRef.current?.value ?? "";
    if (!pw) return;
    setAuthState("checking");
    try {
      const res = await fetch("/api/trademark-monitoring/case-file", {
        headers: { "x-admin-password": pw },
      });
      if (res.ok) {
        const data = await res.json();
        setContentHtml(data.html ?? "");
        setPassword(pw);
        setAuthState("granted");
      } else {
        setAuthState("denied");
        if (inputRef.current) inputRef.current.value = "";
      }
    } catch {
      setAuthState("denied");
    }
  }

  async function handleDownloadBrief() {
    if (!password || downloading) return;
    setDownloading(true);
    try {
      const res = await fetch("/api/trademark-monitoring/case-file/brief", {
        headers: { "x-admin-password": password },
      });
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Brief of Claimant - The Roof Store.docx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
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
              <button
                onClick={handleDownloadBrief}
                disabled={downloading}
                className="inline-block rounded-md bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800 disabled:opacity-60"
              >
                {downloading ? "Preparing…" : "⬇ Download: Brief of Claimant (.docx)"}
              </button>
              <button
                onClick={() => window.print()}
                className="inline-block rounded-md border border-gray-400 px-5 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-100"
              >
                🖨 Print this page
              </button>
            </div>

            <hr className="my-8" />

            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

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
