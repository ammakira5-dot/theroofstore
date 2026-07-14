export default function RpmBanner() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#e2e8f0", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 0 }}>

      {/* Simulated site header — full width */}
      <div style={{ width: "100%", maxWidth: 755 }}>

        {/* THE BANNER */}
        <div style={{
          width: "100%",
          height: 174,
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          background: "linear-gradient(135deg, #0c2340 0%, #1a3a5c 40%, #0e4a6e 70%, #0a7a8a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
        }}>

          <div style={{
            position: "absolute", inset: 0, opacity: 0.06,
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: "12px 12px",
          }} />

          <div style={{
            position: "absolute", top: -40, right: -40,
            width: 200, height: 200,
            background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
          }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{
              fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
              color: "#fbbf24", fontFamily: "Arial, sans-serif", fontWeight: 700,
              marginBottom: 6,
            }}>
              Miami-Dade County's
            </div>
            <div style={{
              fontSize: 38, fontWeight: 700, color: "#ffffff",
              lineHeight: 1, letterSpacing: -0.5,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}>
              Roof Paint Miami
            </div>
            <div style={{
              fontSize: 13, color: "#cbd5e1", marginTop: 8,
              fontFamily: "Arial, sans-serif", fontStyle: "italic",
              letterSpacing: 0.3,
            }}>
              Elastomeric &amp; Rubber Coating Specialists — Flat, Tile &amp; Metal Roofs
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 2, textAlign: "right", flexShrink: 0 }}>
            <div style={{
              background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.4)",
              borderRadius: 6, padding: "10px 18px",
            }}>
              <div style={{ fontSize: 11, color: "#fbbf24", fontFamily: "Arial, sans-serif", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
                Free Evaluation
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", fontFamily: "Arial, sans-serif", letterSpacing: 0.5 }}>
                (786) 837-9064
              </div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "Arial, sans-serif", marginTop: 3 }}>
                Licensed &amp; Insured · Miami-Dade
              </div>
            </div>
          </div>
        </div>

        {/* Simulated nav bar below banner */}
        <div style={{
          background: "#1e3a5f", display: "flex", gap: 0,
          fontFamily: "Arial, sans-serif", fontSize: 13,
        }}>
          {["Home","About Us","Reviews","Products","Residential","Commercial","Affiliations","FAQ","Contact Us"].map(item => (
            <div key={item} style={{
              padding: "10px 12px", color: "#cbd5e1", cursor: "pointer",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              whiteSpace: "nowrap",
            }}>{item}</div>
          ))}
        </div>

      </div>
    </div>
  );
}
