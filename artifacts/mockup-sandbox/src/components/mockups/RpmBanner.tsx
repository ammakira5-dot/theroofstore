export default function RpmBanner() {
  return (
    <div style={{ width: "100%", background: "#f8f8f8", fontFamily: "Arial, sans-serif" }}>

      {/* ── NEW BANNER (replaces rooftony-small.jpg + TRS tagline) ── */}
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
        <div style={{ position:"absolute", inset:0, opacity:0.06,
          backgroundImage:`repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)`,
          backgroundSize:"12px 12px" }} />
        <div style={{ position:"absolute", top:-40, right:-40, width:200, height:200,
          background:"radial-gradient(circle,rgba(251,191,36,0.18) 0%,transparent 70%)", borderRadius:"50%" }} />

        <div style={{ position:"relative", zIndex:2 }}>
          <div style={{ fontSize:11, letterSpacing:4, textTransform:"uppercase", color:"#fbbf24",
            fontFamily:"Arial,sans-serif", fontWeight:700, marginBottom:6 }}>
            Miami-Dade County's
          </div>
          <div style={{ fontSize:38, fontWeight:700, color:"#ffffff", lineHeight:1, letterSpacing:-0.5,
            textShadow:"0 2px 8px rgba(0,0,0,0.4)" }}>
            Roof Paint Miami
          </div>
          <div style={{ fontSize:13, color:"#cbd5e1", marginTop:8, fontFamily:"Arial,sans-serif",
            fontStyle:"italic", letterSpacing:0.3 }}>
            Elastomeric &amp; Rubber Coating Specialists — Flat, Tile &amp; Metal Roofs
          </div>
        </div>

        <div style={{ position:"relative", zIndex:2, textAlign:"right", flexShrink:0 }}>
          <div style={{ background:"rgba(251,191,36,0.15)", border:"1px solid rgba(251,191,36,0.4)",
            borderRadius:6, padding:"10px 18px" }}>
            <div style={{ fontSize:11, color:"#fbbf24", fontFamily:"Arial,sans-serif",
              letterSpacing:2, textTransform:"uppercase", marginBottom:4 }}>Free Evaluation</div>
            <div style={{ fontSize:22, fontWeight:700, color:"#ffffff", fontFamily:"Arial,sans-serif", letterSpacing:0.5 }}>
              (786) 837-9064
            </div>
            <div style={{ fontSize:10, color:"#94a3b8", fontFamily:"Arial,sans-serif", marginTop:3 }}>
              Licensed &amp; Insured · Miami-Dade
            </div>
          </div>
        </div>
      </div>

      {/* ── NAV ── */}
      <div style={{ background:"#4a7c59", display:"flex", justifyContent:"center",
        flexWrap:"wrap", fontFamily:"Arial,sans-serif", fontSize:13 }}>
        {["Home","About Us","Reviews","Products","Residential","Commercial","Affiliations","FAQ","Contact Us"].map(item => (
          <div key={item} style={{ padding:"9px 14px", color:"#ffffff", cursor:"pointer",
            borderRight:"1px solid rgba(255,255,255,0.15)", whiteSpace:"nowrap" }}>{item}</div>
        ))}
      </div>

      {/* ── BODY CONTENT ── */}
      <div style={{ maxWidth:900, margin:"0 auto", padding:"24px 20px" }}>

        {/* Hero section */}
        <div style={{ background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:6,
          padding:"24px 28px", marginBottom:20, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
          <h2 style={{ color:"#1a3a5c", fontSize:22, margin:"0 0 12px", lineHeight:1.3 }}>
            Roof Coating Services in Miami-Dade County
          </h2>
          <p style={{ color:"#444", fontSize:14, lineHeight:1.7, margin:"0 0 12px" }}>
            Stop wasting money on roof replacement. Our professional elastomeric and rubber coating systems
            waterproof your existing roof for a fraction of the cost — flat roofs, barrel tile, cement tile,
            and metal roofs across Miami, Coral Gables, Hialeah, Doral, Kendall, and all of Miami-Dade County.
          </p>
          <p style={{ color:"#1a3a5c", fontSize:14, fontStyle:"italic", fontWeight:600, margin:0 }}>
            📞 Call Now (786) 837-9064 for your <span style={{ color:"#c0392b" }}>FREE</span> weatherproofing evaluation!
          </p>
        </div>

        {/* 3 service thumbnails */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:20 }}>
          {[
            { title:"Flat Roof Coating", desc:"Seamless rubber membrane for flat & low-slope roofs in Miami-Dade." },
            { title:"Tile Roof Coating", desc:"Barrel tile, cement tile & Spanish tile waterproofing systems." },
            { title:"Metal Roof Coating", desc:"Elastomeric coatings for metal roofs — commercial & residential." },
          ].map(s => (
            <div key={s.title} style={{ background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:6,
              padding:"18px 16px", textAlign:"center", boxShadow:"0 1px 4px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize:13, fontWeight:700, color:"#1a3a5c", marginBottom:8 }}>{s.title}</div>
              <div style={{ fontSize:12, color:"#555", lineHeight:1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Products heading */}
        <div style={{ background:"#1a3a5c", color:"#fff", borderRadius:6, padding:"14px 20px",
          fontSize:16, fontWeight:700, textAlign:"center" }}>
          Products Available at <span style={{ color:"#fbbf24" }}>The Roof Store</span>
        </div>

      </div>
    </div>
  );
}
