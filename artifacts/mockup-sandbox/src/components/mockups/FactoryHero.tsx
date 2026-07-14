export default function FactoryHero() {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#f8f8f8" }}>

      {/* ── Hero section (mirrors the real Factory page) ── */}
      <section style={{
        background: "linear-gradient(135deg, #1a3a5c 0%, #0e4a6e 100%)",
        color: "#fff",
        padding: "64px 24px",
        textAlign: "center",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-block",
          background: "#d97706",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          padding: "6px 18px",
          borderRadius: 999,
          marginBottom: 24,
          fontFamily: "Arial, sans-serif",
        }}>
          Manufactured by RoofProtect Products — Davie, Florida
        </div>

        {/* NEW H1 */}
        <h1 style={{ fontSize: 42, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.2 }}>
          Our In-House Licensed Manufacturing Division
        </h1>

        {/* ── NEW: highlighted callout line ── */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(217, 119, 6, 0.18)",
          border: "1px solid rgba(217, 119, 6, 0.5)",
          borderRadius: 8,
          padding: "10px 22px",
          margin: "20px auto 28px",
          fontFamily: "Arial, sans-serif",
          fontSize: 15,
          fontWeight: 600,
          color: "#fbbf24",
          letterSpacing: 0.2,
        }}>
          <span style={{ fontSize: 18 }}>🛠️</span>
          Don't worry — we also install the products we sell.&nbsp;
          <span style={{ fontWeight: 400, color: "rgba(251,191,36,0.8)" }}>Licensed crew, same company.</span>
        </div>

        {/* ── NEW: truck/trailer image ── */}
        <div style={{ margin: "0 auto 32px", maxWidth: 520 }}>
          <img
            src="/images/roof-replacement-alternative-truck.png"
            alt="The Roof Store truck — we install the products we sell"
            style={{
              width: "100%",
              borderRadius: 10,
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              border: "2px solid rgba(255,255,255,0.12)",
            }}
          />
        </div>

        {/* Original body copy */}
        <p style={{
          fontSize: 18,
          color: "rgba(255,255,255,0.8)",
          maxWidth: 640,
          margin: "0 auto",
          lineHeight: 1.7,
          fontFamily: "Arial, sans-serif",
        }}>
          Through proprietary manufacturing technology, RoofProtect Products formulates every gallon
          of material used in the Fungal Shield, Smart Shield, and Roof Shield systems as 100% liquid
          rubber — no water, fillers, thickeners, or extenders. Engineered in South Florida for South Florida.
        </p>
      </section>

      {/* ── Stats bar (for context) ── */}
      <section style={{ background: "#f1f5f9", padding: "32px 24px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", textAlign: "center" }}>
          {[
            { value: "30+", label: "Years of South Florida R&D" },
            { value: "135+ MPH", label: "Documented Wind Resistance" },
            { value: "5×", label: "Stronger Than a New Roof" },
            { value: "A+", label: "BBB Rating Since 1994" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#1a3a5c" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#64748b", fontFamily: "Arial, sans-serif", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
