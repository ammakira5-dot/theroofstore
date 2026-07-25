import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

type AuthState = "idle" | "checking" | "granted" | "denied";

export default function UdrpDraftGate() {
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

      if (res.ok) {
        setAuthState("granted");
      } else {
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
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        </Helmet>
        <iframe
          src="/rpt-88291-b.html"
          title="UDRP Complaint Draft"
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", border: "none", zIndex: 9999 }}
        />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Access Required</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </Helmet>
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}>
        <div style={{
          background: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "12px",
          padding: "40px 48px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 20px 60px rgba(0,0,0,.5)",
        }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>🔒</div>
            <p style={{ color: "#94a3b8", fontSize: ".82rem", letterSpacing: ".08em", textTransform: "uppercase", margin: 0 }}>
              Restricted Document
            </p>
            <h1 style={{ color: "#f1f5f9", fontSize: "1.2rem", fontWeight: 700, margin: "8px 0 0" }}>
              Access Required
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <label style={{ display: "block", color: "#94a3b8", fontSize: ".8rem", marginBottom: "8px", letterSpacing: ".04em" }}>
              Password
            </label>
            <input
              ref={inputRef}
              type="password"
              autoComplete="current-password"
              autoFocus
              style={{
                width: "100%",
                padding: "11px 14px",
                background: "#0f172a",
                border: authState === "denied" ? "1px solid #ef4444" : "1px solid #475569",
                borderRadius: "8px",
                color: "#f1f5f9",
                fontSize: ".95rem",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: authState === "denied" ? "8px" : "20px",
              }}
              placeholder="Enter access password"
            />
            {authState === "denied" && (
              <p style={{ color: "#ef4444", fontSize: ".82rem", margin: "0 0 16px" }}>
                Incorrect password. Try again.
              </p>
            )}
            <button
              type="submit"
              disabled={authState === "checking"}
              style={{
                width: "100%",
                padding: "11px",
                background: authState === "checking" ? "#334155" : "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: ".95rem",
                fontWeight: 700,
                cursor: authState === "checking" ? "default" : "pointer",
                transition: "background .15s",
              }}
            >
              {authState === "checking" ? "Verifying…" : "Access Document"}
            </button>
          </form>

          <p style={{ color: "#475569", fontSize: ".75rem", textAlign: "center", marginTop: "24px", marginBottom: 0, lineHeight: 1.5 }}>
            This document is confidential attorney work product.<br />
            Authorized access only.
          </p>
        </div>
      </div>
    </>
  );
}
