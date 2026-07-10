import express from "express";
import sirv from "sirv";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;
const staticDir = join(__dirname, "dist/public");

// ── Per-page meta map ─────────────────────────────────────────────────────
// Injected server-side so Googlebot sees unique title/description/canonical
// on every page (not just the homepage default baked into index.html).

const BASE = "https://www.theroofstore.net";

const PAGE_META = {
  "/": {
    title: "The Roof Store | Elastomeric Roof Coating Florida — Fungal Shield, Smart Shield & Roof Shield",
    description: "Florida's original elastomeric roof coating system. Save up to 50% vs. replacement. A+ BBB rated since 1994. Serving Broward, Miami-Dade & Palm Beach. Free consultation.",
  },
  "/about": {
    title: "About The Roof Store — Florida Roof Painting Contractor Since 1994",
    description: "The Roof Store has protected Florida homes and businesses for 30+ years — pioneers of the liquid rubber roof coating system. FungalShield, SmartShield & RoofShield built from products manufactured in-house by RoofProtect. Licensed & insured, A+ BBB rated since 1994. Davie, FL — 954-210-9614.",
  },
  "/roof-systems": {
    title: "Roof Coating Systems Florida — FungalShield, SmartShield & RoofShield | The Roof Store",
    description: "FungalShield, SmartShield & RoofShield are The Roof Store's proprietary roof coating systems for tile, flat, shingle, and metal roofs, professionally installed by our licensed crew for residential and commercial properties in Florida. Built from elastomeric, polyurethane & silicone products manufactured in-house by RoofProtect. Up to 50-year silicone warranty. Davie, FL — 954-210-9614.",
  },
  "/roof-services": {
    title: "Roof Restoration & Roof Painting Services — Tile, Flat, Shingle & Metal Roofs | South Florida",
    description: "Licensed roof restoration and roof painting contractor for residential and commercial properties in South Florida: pressure cleaning, tile reglazing & restoration, flat deck rubber coating, elastomeric coating systems, metal roof coating, hurricane protection, and emergency repairs. FungalShield, SmartShield & RoofShield systems.",
  },
  "/service-areas": {
    title: "Roof Painting & Roof Coating Service Areas — South Florida | The Roof Store",
    description: "The Roof Store provides roof painting and roof coating installation for tile, flat, shingle, and metal roofs in Broward, Miami-Dade, and Palm Beach counties. Rubber roof coating, tile restoration, and weatherproofing in Fort Lauderdale, Miami, West Palm Beach, and 30+ South Florida cities.",
  },
  "/products": {
    title: "Roof Coating Products — FungalShield, SmartShield & RoofShield | The Roof Store Florida",
    description: "Shop The Roof Store's proprietary roof coating systems: FungalShield (RP1) anti-fungal clear sealer, SmartShield (RP2) reflective waterproof tile coating, and RoofShield (RP3) TAS-106 hurricane-rated monolithic system. Manufactured in-house by RoofProtect. Davie, FL — 954-210-9614.",
  },
  "/products/fungalshield": {
    title: "FungalShield (RP1) — Clear Roof Tile Sealer & Anti-Fungal Roof Coating | The Roof Store Florida",
    description: "FungalShield (RP1) is a clear roof tile sealer that eliminates black streaking, algae, mold, and fungal growth on Florida tile, metal, and flat roofs. A stronger alternative to standard roof painting for tile and metal roofs. Mildew resistant. 5-Year Product Warranty. $190 — Free quote 954-210-9614.",
  },
  "/products/smartshield": {
    title: "SmartShield (RP2) — Reflective Cool Roof Coating for Tile | The Roof Store Florida",
    description: "SmartShield is a reflective cool roof coating that waterproofs tile roofs in 3,000+ colors. 5× the thickness of standard roof paint, true waterproofing, BASF Cool Pigment for energy savings. Elastomeric or polyurethane base. FP&L confirmed energy savings. Free quote — 954-210-9614.",
  },
  "/products/roofshield": {
    title: "RoofShield (RP3) — The Original Liquid Applied Rubber Roof Shield System | The Roof Store Florida",
    description: "RoofShield — The Original Liquid Applied Rubber Roof Shield System — fills every gap between tiles with multiple product layers making your roof monolithic. TAS-106 Dade County rated, hurricane-proof, lifetime warranty. Silicone base for all roof types including flat roofs. 954-210-9614.",
  },
  "/commercial-roofs": {
    title: "Commercial Flat Deck, BUR, Modified Bitumen & Metal Roof Waterproofing | The Roof Store Florida",
    description: "Commercial flat deck, BUR, modified bitumen, and metal roof waterproofing in South Florida. Silicone-grade coatings rated for ponding water and negative-pitch roofs. No tear-off. Seamless membrane systems. TAS-106 certified. Call 954-210-9614.",
  },
  "/reviews": {
    title: "5-Star Customer Reviews & Testimonials — The Roof Store Florida",
    description: "Real 5-star testimonials from South Florida homeowners — including Hurricane Wilma survival stories. A+ BBB Rated since 1994, one of South Florida's longest-standing roof coating contractors. RoofShield, SmartShield, FungalShield.",
  },
  "/projects": {
    title: "Roof Coating Projects — Before & After South Florida | The Roof Store",
    description: "See real before & after results from The Roof Store's rubber roof coating and tile restoration projects across South Florida. Real savings vs. replacement.",
  },
  "/blog": {
    title: "Blog — Roof Coating, Florida Insurance Laws & Storm Protection | The Roof Store",
    description: "Expert articles on Florida roof coating, homeowners insurance laws, Citizens Insurance, hurricane protection, and Additional Roof Life Certification. The Roof Store — Davie, FL — 954-210-9614.",
  },
  "/faq": {
    title: "FAQ — Roof Painting & Roof Coating Questions Answered | The Roof Store",
    description: "Answers to common questions about roof painting and roof coating systems: tile restoration, hurricane performance, warranties, and how coating compares to full roof replacement. The Roof Store — Davie, FL — 954-210-9614.",
  },
  "/questions": {
    title: "Questions to Ask Your Roofing Contractor | The Roof Store",
    description: "Important questions every Florida homeowner should ask before hiring a roof coating contractor. Protect yourself from unlicensed work and poor-quality products. The Roof Store — 954-210-9614.",
  },
  "/videos": {
    title: "Videos — Roof Shield System & Uplift Test | The Roof Store Florida",
    description: "Watch The Roof Store's customer testimonials and the TAS-106 Dade County Uplift Test — the only pull test rated roof coating system in the world. See real hurricane performance documented on video.",
  },
  "/factory": {
    title: "Our Manufacturing Partner — RoofProtect Products, Davie, Florida",
    description: "RoofProtect Products manufactures the liquid rubber coating materials used in FungalShield, SmartShield, and RoofShield sold by The Roof Store. The only TAS-106 Dade County Pull Test Rated roof coating system worldwide. 135+ MPH wind resistance documented.",
  },
  "/distributorships": {
    title: "Roof Coating Distributorship Opportunities — The Roof Store Florida",
    description: "Become an authorized distributor of FungalShield, SmartShield & RoofShield. Exclusive county territories, full training, complete advertising support, and proven sales system. Call 954-210-9614.",
  },
  "/shop": {
    title: "Buy Roof Coating Products Online — FungalShield, SmartShield, RoofShield | The Roof Store",
    description: "Purchase RP1 FungalShield ($190), RP2 SmartShield ($285), and RP3 RoofShield ($325) online. Manufactured in Davie, FL. Available in 5–50 gallon containers. Free consultation 954-210-9614.",
  },
  "/contact": {
    title: "Contact The Roof Store — Davie, FL | 954-210-9614",
    description: "Contact The Roof Store for a free roof inspection or quote. Licensed & insured roof coating contractor serving South Florida since 1994. Call 954-210-9614 or visit us in Davie, FL.",
  },
  "/pricing": {
    title: "Roof Coating Pricing — FungalShield, SmartShield & RoofShield | The Roof Store",
    description: "Transparent pricing for FungalShield, SmartShield, and RoofShield roof coating systems. DIY product purchase or full professional installation. Significantly less than a full roof replacement. Call 954-210-9614.",
  },
  "/roof-systems": {
    title: "Roof Painting & Roof Coating Systems Florida — FungalShield, SmartShield & RoofShield | The Roof Store",
    description: "FungalShield, SmartShield & RoofShield are The Roof Store's proprietary roof coating systems for tile, flat, shingle, and metal roofs. Built from products manufactured in-house by RoofProtect. Up to 50-year silicone warranty. Davie, FL — 954-210-9614.",
  },
  "/silicone-vs-elastomeric-roof-coating": {
    title: "Silicone vs Elastomeric Roof Coating — What's the Difference? | The Roof Store",
    description: "Silicone vs elastomeric roof coating compared: ponding water resistance, UV performance, lifespan, and cost. The Roof Store manufactures both. Davie, FL — 954-210-9614.",
  },
  "/roof-pressure-cleaning": {
    title: "Roof Pressure Cleaning & Soft Washing — South Florida | The Roof Store",
    description: "Professional roof pressure cleaning and soft washing for tile, flat, and metal roofs in South Florida. Required before any coating application. Licensed & insured. Free quote — 954-210-9614.",
  },
  "/partner-network": {
    title: "Authorized Installer & Partner Network | The Roof Store",
    description: "Find authorized installers and partners of The Roof Store's FungalShield, SmartShield & RoofShield coating systems across South Florida. Licensed & insured crews only. 954-210-9614.",
  },
  "/roof-life-certification": {
    title: "Additional Roof Life Certification — Florida Insurance Compliance | The Roof Store",
    description: "Get an Additional Roof Life Certification for your Florida homeowners insurance. The Roof Store's coating systems can extend your roof's certified life and help you keep or reduce your insurance coverage. 954-210-9614.",
  },
  "/service-areas/broward-county": {
    title: "Roof Painting & Coating Contractor in Broward County, FL — The Roof Store",
    description: "Professional roof coating, tile restoration, and waterproofing across all 31 municipalities in Broward County, FL. Licensed & insured, A+ BBB rated since 1994. FungalShield, SmartShield & RoofShield. Free inspection: 954-210-9614.",
  },
  "/service-areas/miami-dade-county": {
    title: "Roof Painting & Coating Contractor in Miami-Dade County, FL — The Roof Store",
    description: "Professional roof coating, tile restoration, and waterproofing across Miami-Dade County, FL. Licensed & insured, A+ BBB rated since 1994. FungalShield, SmartShield & RoofShield. Free inspection: 954-210-9614.",
  },
  "/service-areas/palm-beach-county": {
    title: "Roof Painting & Coating Contractor in Palm Beach County, FL — The Roof Store",
    description: "Professional roof coating, tile restoration, and waterproofing across Palm Beach County, FL. Licensed & insured, A+ BBB rated since 1994. FungalShield, SmartShield & RoofShield. Free inspection: 954-210-9614.",
  },
  "/roof-services/broward-county": {
    title: "Roof Restoration & Painting Services in Broward County, FL | The Roof Store",
    description: "Roof painting contractor in Broward County, FL — elastomeric, acrylic, and reflective cool roof coating services. Tile, flat, and metal roof coating, waterproofing, and hurricane protection. Licensed & insured, A+ BBB rated since 1994. Free quote: 954-210-9614.",
  },
  "/roof-services/miami-dade-county": {
    title: "Roof Restoration & Painting Services in Miami-Dade County, FL | The Roof Store",
    description: "Roof painting contractor in Miami-Dade County, FL — elastomeric, acrylic, and reflective cool roof coating services. Tile, flat, and metal roof coating, waterproofing, and hurricane protection. Licensed & insured, A+ BBB rated since 1994. Free quote: 954-210-9614.",
  },
  "/roof-services/palm-beach-county": {
    title: "Roof Restoration & Painting Services in Palm Beach County, FL | The Roof Store",
    description: "Roof painting contractor in Palm Beach County, FL — elastomeric, acrylic, and reflective cool roof coating services. Tile, flat, and metal roof coating, waterproofing, and hurricane protection. Licensed & insured, A+ BBB rated since 1994. Free quote: 954-210-9614.",
  },
};

// City-level page meta — generated dynamically from slug → city name lookup
const CITY_SLUG_TO_NAME = {
  // Broward County
  "coconut-creek": "Coconut Creek", "cooper-city": "Cooper City",
  "coral-springs": "Coral Springs", "dania-beach": "Dania Beach",
  "davie": "Davie", "deerfield-beach": "Deerfield Beach",
  "fort-lauderdale": "Fort Lauderdale", "hillsboro-beach": "Hillsboro Beach",
  "hallandale-beach": "Hallandale Beach", "hollywood": "Hollywood",
  "lauderdale-lakes": "Lauderdale Lakes", "lauderhill": "Lauderhill",
  "lauderdale-by-the-sea": "Lauderdale-by-the-Sea", "lighthouse-point": "Lighthouse Point",
  "margate": "Margate", "miramar": "Miramar", "north-lauderdale": "North Lauderdale",
  "oakland-park": "Oakland Park", "parkland": "Parkland",
  "pembroke-park": "Pembroke Park", "pembroke-pines": "Pembroke Pines",
  "plantation": "Plantation", "pompano-beach": "Pompano Beach",
  "sea-ranch-lakes": "Sea Ranch Lakes", "southwest-ranches": "Southwest Ranches",
  "sunrise": "Sunrise", "tamarac": "Tamarac", "west-park": "West Park",
  "weston": "Weston", "wilton-manors": "Wilton Manors",
  // Miami-Dade County
  "aventura": "Aventura", "bal-harbour": "Bal Harbour",
  "bay-harbor-islands": "Bay Harbor Islands", "biscayne-park": "Biscayne Park",
  "coral-gables": "Coral Gables", "cutler-bay": "Cutler Bay",
  "doral": "Doral", "el-portal": "El Portal",
  "florida-city": "Florida City", "hialeah": "Hialeah",
  "hialeah-gardens": "Hialeah Gardens", "homestead": "Homestead",
  "indian-creek-village": "Indian Creek Village", "key-biscayne": "Key Biscayne",
  "medley": "Medley", "miami": "Miami", "miami-beach": "Miami Beach",
  "miami-gardens": "Miami Gardens", "miami-lakes": "Miami Lakes",
  "miami-shores": "Miami Shores", "miami-springs": "Miami Springs",
  "north-bay-village": "North Bay Village", "north-miami": "North Miami",
  "north-miami-beach": "North Miami Beach", "opa-locka": "Opa-locka",
  "palmetto-bay": "Palmetto Bay", "pinecrest": "Pinecrest",
  "south-miami": "South Miami", "sunny-isles-beach": "Sunny Isles Beach",
  "surfside": "Surfside", "sweetwater": "Sweetwater",
  "virginia-gardens": "Virginia Gardens", "west-miami": "West Miami",
  // Palm Beach County
  "boca-raton": "Boca Raton", "boynton-beach": "Boynton Beach",
  "briny-breezes": "Briny Breezes", "cloud-lake": "Cloud Lake",
  "delray-beach": "Delray Beach", "glen-ridge": "Glen Ridge",
  "golf": "Golf", "golfview": "Golfview",
  "greenacres": "Greenacres", "gulf-stream": "Gulf Stream",
  "haverhill": "Haverhill", "highland-beach": "Highland Beach",
  "hypoluxo": "Hypoluxo", "juno-beach": "Juno Beach",
  "jupiter": "Jupiter", "jupiter-inlet-colony": "Jupiter Inlet Colony",
  "lake-clarke-shores": "Lake Clarke Shores", "lake-park": "Lake Park",
  "lake-worth-beach": "Lake Worth Beach", "lantana": "Lantana",
  "loxahatchee-groves": "Loxahatchee Groves", "manalapan": "Manalapan",
  "mangonia-park": "Mangonia Park", "north-palm-beach": "North Palm Beach",
  "ocean-ridge": "Ocean Ridge", "pahokee": "Pahokee",
  "palm-beach": "Palm Beach", "palm-beach-gardens": "Palm Beach Gardens",
  "palm-beach-shores": "Palm Beach Shores", "palm-springs": "Palm Springs",
  "riviera-beach": "Riviera Beach", "royal-palm-beach": "Royal Palm Beach",
  "south-bay": "South Bay", "south-palm-beach": "South Palm Beach",
  "tequesta": "Tequesta", "village-of-golf": "Village of Golf",
  "wellington": "Wellington", "west-palm-beach": "West Palm Beach",
};

// City-level coordinates for geo meta tag server-side injection
// Mirrors artifacts/roof-store/src/pages/service-areas/coords.ts
const CITY_COORDS = {
  // Broward County
  "coconut-creek":         { lat: 26.2706, lon: -80.1786 },
  "cooper-city":           { lat: 26.0569, lon: -80.2714 },
  "coral-springs":         { lat: 26.2708, lon: -80.2706 },
  "dania-beach":           { lat: 26.0526, lon: -80.1428 },
  "davie":                 { lat: 26.0765, lon: -80.2521 },
  "deerfield-beach":       { lat: 26.3184, lon: -80.0999 },
  "fort-lauderdale":       { lat: 26.1224, lon: -80.1373 },
  "hillsboro-beach":       { lat: 26.3126, lon: -80.0794 },
  "hallandale-beach":      { lat: 25.9812, lon: -80.1483 },
  "hollywood":             { lat: 26.0112, lon: -80.1495 },
  "lauderdale-lakes":      { lat: 26.1673, lon: -80.2108 },
  "lauderhill":            { lat: 26.1423, lon: -80.2136 },
  "lauderdale-by-the-sea": { lat: 26.1915, lon: -80.0965 },
  "lighthouse-point":      { lat: 26.2751, lon: -80.0872 },
  "margate":               { lat: 26.2445, lon: -80.2061 },
  "miramar":               { lat: 25.9871, lon: -80.2322 },
  "north-lauderdale":      { lat: 26.2173, lon: -80.2247 },
  "oakland-park":          { lat: 26.1712, lon: -80.1320 },
  "parkland":              { lat: 26.3087, lon: -80.2425 },
  "pembroke-park":         { lat: 25.9937, lon: -80.1706 },
  "pembroke-pines":        { lat: 26.0126, lon: -80.2962 },
  "plantation":            { lat: 26.1270, lon: -80.2331 },
  "pompano-beach":         { lat: 26.2379, lon: -80.1248 },
  "sea-ranch-lakes":       { lat: 26.2915, lon: -80.0899 },
  "southwest-ranches":     { lat: 26.0337, lon: -80.3005 },
  "sunrise":               { lat: 26.1504, lon: -80.2997 },
  "tamarac":               { lat: 26.2128, lon: -80.2497 },
  "west-park":             { lat: 25.9787, lon: -80.1853 },
  "weston":                { lat: 26.1003, lon: -80.3997 },
  "wilton-manors":         { lat: 26.1587, lon: -80.1337 },
  // Miami-Dade County
  "aventura":              { lat: 25.9565, lon: -80.1393 },
  "bal-harbour":           { lat: 25.8936, lon: -80.1269 },
  "bay-harbor-islands":    { lat: 25.8890, lon: -80.1264 },
  "biscayne-park":         { lat: 25.8937, lon: -80.1686 },
  "coral-gables":          { lat: 25.7215, lon: -80.2684 },
  "cutler-bay":            { lat: 25.5807, lon: -80.3462 },
  "doral":                 { lat: 25.8195, lon: -80.3369 },
  "el-portal":             { lat: 25.8554, lon: -80.1814 },
  "florida-city":          { lat: 25.4478, lon: -80.4789 },
  "golden-beach":          { lat: 25.9729, lon: -80.1255 },
  "hialeah":               { lat: 25.8576, lon: -80.2781 },
  "hialeah-gardens":       { lat: 25.8698, lon: -80.3397 },
  "homestead":             { lat: 25.4687, lon: -80.4776 },
  "indian-creek-village":  { lat: 25.8851, lon: -80.1247 },
  "islandia":              { lat: 25.3754, lon: -80.4312 },
  "key-biscayne":          { lat: 25.6908, lon: -80.1624 },
  "medley":                { lat: 25.8229, lon: -80.3355 },
  "miami":                 { lat: 25.7617, lon: -80.1918 },
  "miami-beach":           { lat: 25.7907, lon: -80.1300 },
  "miami-gardens":         { lat: 25.9420, lon: -80.2455 },
  "miami-lakes":           { lat: 25.9092, lon: -80.3133 },
  "miami-shores":          { lat: 25.8665, lon: -80.1803 },
  "miami-springs":         { lat: 25.8226, lon: -80.2928 },
  "north-bay-village":     { lat: 25.8430, lon: -80.1558 },
  "north-miami":           { lat: 25.8896, lon: -80.1867 },
  "north-miami-beach":     { lat: 25.9326, lon: -80.1636 },
  "opa-locka":             { lat: 25.9020, lon: -80.2497 },
  "palmetto-bay":          { lat: 25.6235, lon: -80.3362 },
  "pinecrest":             { lat: 25.6647, lon: -80.3005 },
  "south-miami":           { lat: 25.7066, lon: -80.2936 },
  "sunny-isles-beach":     { lat: 25.9540, lon: -80.1225 },
  "surfside":              { lat: 25.8788, lon: -80.1258 },
  "sweetwater":            { lat: 25.7637, lon: -80.3731 },
  "virginia-gardens":      { lat: 25.8087, lon: -80.3031 },
  "west-miami":            { lat: 25.7566, lon: -80.2936 },
  // Palm Beach County
  "atlantis":              { lat: 26.5904, lon: -80.0953 },
  "belle-glade":           { lat: 26.6901, lon: -80.6698 },
  "boca-raton":            { lat: 26.3683, lon: -80.1289 },
  "boynton-beach":         { lat: 26.5354, lon: -80.0662 },
  "briny-breezes":         { lat: 26.5282, lon: -80.0596 },
  "cloud-lake":            { lat: 26.6738, lon: -80.1006 },
  "delray-beach":          { lat: 26.4615, lon: -80.0728 },
  "glen-ridge":            { lat: 26.6709, lon: -80.1012 },
  "golfview":              { lat: 26.6726, lon: -80.0973 },
  "greenacres":            { lat: 26.6237, lon: -80.1270 },
  "gulf-stream":           { lat: 26.4893, lon: -80.0609 },
  "haverhill":             { lat: 26.6995, lon: -80.1339 },
  "highland-beach":        { lat: 26.3987, lon: -80.0660 },
  "hypoluxo":              { lat: 26.5571, lon: -80.0548 },
  "juno-beach":            { lat: 26.8779, lon: -80.0534 },
  "jupiter":               { lat: 26.9342, lon: -80.0942 },
  "jupiter-inlet-colony":  { lat: 26.9565, lon: -80.0715 },
  "lake-clarke-shores":    { lat: 26.6423, lon: -80.0767 },
  "lake-park":             { lat: 26.8012, lon: -80.0617 },
  "lake-worth-beach":      { lat: 26.6148, lon: -80.0573 },
  "lantana":               { lat: 26.5854, lon: -80.0515 },
  "loxahatchee-groves":    { lat: 26.6590, lon: -80.3445 },
  "manalapan":             { lat: 26.5237, lon: -80.0490 },
  "mangonia-park":         { lat: 26.7673, lon: -80.0729 },
  "north-palm-beach":      { lat: 26.8237, lon: -80.0868 },
  "ocean-ridge":           { lat: 26.5176, lon: -80.0601 },
  "pahokee":               { lat: 26.8204, lon: -80.6665 },
  "palm-beach":            { lat: 26.7056, lon: -80.0364 },
  "palm-beach-gardens":    { lat: 26.8234, lon: -80.1373 },
  "palm-beach-shores":     { lat: 26.7726, lon: -80.0365 },
  "palm-springs":          { lat: 26.6387, lon: -80.0962 },
  "riviera-beach":         { lat: 26.7757, lon: -80.0601 },
  "royal-palm-beach":      { lat: 26.7101, lon: -80.2211 },
  "south-bay":             { lat: 26.6665, lon: -80.7165 },
  "south-palm-beach":      { lat: 26.5948, lon: -80.0373 },
  "tequesta":              { lat: 26.9687, lon: -80.1026 },
  "wellington":            { lat: 26.6590, lon: -80.2706 },
  "west-palm-beach":       { lat: 26.7153, lon: -80.0534 },
  "westlake":              { lat: 26.7490, lon: -80.2564 },
  "key-west":              { lat: 24.5551, lon: -81.7800 },
};

// County-level centroids for geo meta tag injection on county pages
const COUNTY_COORDS = {
  "broward-county":     { lat: 26.1901, lon: -80.3659 },
  "miami-dade-county":  { lat: 25.7617, lon: -80.1918 },
  "palm-beach-county":  { lat: 26.7153, lon: -80.0534 },
};

function resolvePageMeta(path) {
  // Exact match
  if (PAGE_META[path]) return { ...PAGE_META[path], canonical: path };

  // City service-areas page: /service-areas/<county>/<city>
  const cityMatch = path.match(/^\/service-areas\/([^/]+)\/([^/]+)$/);
  if (cityMatch) {
    const citySlug = cityMatch[2];
    const city = CITY_SLUG_TO_NAME[citySlug] || citySlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const coords = CITY_COORDS[citySlug];
    return {
      title: `Roof Painting & Coating Contractor in ${city}, FL | Roof Coating Systems — The Roof Store`,
      description: `Looking for a roof coating contractor in ${city}, FL? The Roof Store offers professional roof coating systems for tile, flat, shingle, and metal roofs — waterproof, hurricane-rated, A+ BBB accredited since 1994. Free inspection: 954-210-9614.`,
      canonical: path,
      ...(coords && {
        geo: {
          region: "US-FL",
          placename: `${city}, FL`,
          position: `${coords.lat};${coords.lon}`,
          icbm: `${coords.lat}, ${coords.lon}`,
        },
      }),
    };
  }

  // County service-areas page: /service-areas/<county>
  const saCountyMatch = path.match(/^\/service-areas\/([^/]+)$/);
  if (saCountyMatch) {
    const countySlug = saCountyMatch[1];
    const county = countySlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const coords = COUNTY_COORDS[countySlug];
    return {
      title: `Roof Painting & Coating Contractor in ${county}, FL — The Roof Store`,
      description: `Professional roof coating, tile restoration, and waterproofing across ${county}, FL. Licensed & insured, A+ BBB rated since 1994. FungalShield, SmartShield & RoofShield. Free inspection: 954-210-9614.`,
      canonical: path,
      ...(coords && {
        geo: {
          region: "US-FL",
          placename: `${county}, FL`,
          position: `${coords.lat};${coords.lon}`,
          icbm: `${coords.lat}, ${coords.lon}`,
        },
      }),
    };
  }

  // County roof-services page: /roof-services/<county>
  const rsCountyMatch = path.match(/^\/roof-services\/([^/]+)$/);
  if (rsCountyMatch) {
    const county = rsCountyMatch[1].replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    return {
      title: `Roof Restoration & Painting Services in ${county}, FL | The Roof Store`,
      description: `Roof painting contractor in ${county}, FL — elastomeric, acrylic, and reflective cool roof coating services. Tile, flat, and metal roof coating, waterproofing, and hurricane protection. Licensed & insured, A+ BBB rated since 1994. Free quote: 954-210-9614.`,
      canonical: path,
    };
  }

  // Fallback — homepage meta (will be overridden by React Helmet client-side)
  return {
    title: "The Roof Store | Roof Coating Installation & Roof Painting Contractor | South Florida Since 1994",
    description: "The Roof Store — South Florida's roof coating systems provider and installation contractor since 1994. FungalShield, SmartShield & RoofShield. Davie, FL · 954-210-9614.",
    canonical: path,
  };
}

// Read and cache index.html at startup
let indexHtml = null;
function getIndexHtml() {
  if (!indexHtml) {
    const indexPath = join(staticDir, "index.html");
    indexHtml = fs.readFileSync(indexPath, "utf-8");
  }
  return indexHtml;
}

// ── Known routes manifest ──────────────────────────────────────────────────
// Authoritative list of every real page path (same source as sitemap.xml),
// generated at build time by scripts/src/generate-sitemap.ts. Any path NOT
// in this set is a genuinely invalid/legacy URL and must return a real 404
// — not a 200 with homepage content (a "soft 404" that keeps stale/garbage
// URLs indexed by Google forever).
let knownRoutes = null;
function getKnownRoutes() {
  if (!knownRoutes) {
    try {
      const manifestPath = join(staticDir, "routes.json");
      knownRoutes = new Set(JSON.parse(fs.readFileSync(manifestPath, "utf-8")));
    } catch {
      // Manifest missing (e.g. stale build) — fail safe to "no known routes"
      // so we don't accidentally 404 everything; PAGE_META exact matches and
      // service-area regex matches in resolvePageMeta still work below.
      knownRoutes = new Set();
    }
  }
  return knownRoutes;
}

function isKnownRoute(path) {
  if (getKnownRoutes().has(path)) return true;
  // Dynamic patterns not enumerable in the static routes manifest but still
  // real, resolvable pages (mirrors resolvePageMeta's regex matches).
  if (/^\/service-areas\/[^/]+\/[^/]+$/.test(path)) return true;
  if (/^\/roof-services\/[^/]+$/.test(path)) return true;
  return false;
}

const app = express();

// ── Canonical host enforcement (non-www → www) ────────────────────────────
// Ensures Google always sees a single canonical host, matching our
// canonical tags, sitemap, and internal links (all www.theroofstore.net).
app.use((req, res, next) => {
  const host = req.headers.host || "";
  if (host === "theroofstore.net") {
    return res.redirect(301, `https://www.theroofstore.net${req.originalUrl}`);
  }
  next();
});

// ── Server-side 301 redirects ─────────────────────────────────────────────
// These ensure Google receives a proper "Moved Permanently" response instead
// of a 200 with a client-rendered 404 (soft 404), preserving SEO authority.

const EXACT_REDIRECTS = {
  // Root-level PHP pages
  "/residential.php": "/roof-services",
  "/projects/reviews.php": "/reviews",
  "/affiliations.php": "/partner-network",
  "/testimonials.php": "/reviews",
  "/energy-incentives.php": "/roof-systems",
  "/Roof_Painting_Service_Broward_County_for_Smart_Shield.php": "/products/smartshield",
  "/Roof_Painting_Service_Broward_County_for_Smart_Shield.pdf": "/products/smartshield",
  "/assets/files/basic-colors-smart-shield.pdf": "/products/smartshield",
  // RoofProtect product embed URLs — match each bucket's #1 roller to its correct product page
  "/pdf/fungalshield-info.pdf": "/products/fungalshield",
  "/pdf/roofshield-info.pdf": "/products/roofshield",
  "/pdf/smartshield-info.pdf": "/products/smartshield",
  // RP3 RoofShield — old brochure embed URL now points to RoofShield product page
  "/pdf/pdf-images/Brochure/Brochure_2006_Revised_2018.pdf": "/products/roofshield",
  "/roof-shield-system.php": "/products/roofshield",
  "/factory.php": "/factory",
  "/commercial.php": "/commercial-roofs",
  "/install-video.php": "/videos",
  "/products.php": "/products",
  "/reviews.php": "/reviews",
  "/references.php": "/reviews",
  "/miami-dade-references.php": "/reviews",
  "/faq.php": "/faq",
  "/questions.php": "/questions",
  "/aboutus.php": "/about",
  "/contact.php": "/contact",
  "/distributorships.php": "/distributorships",
  "/videos.php": "/videos",
  "/blog.php": "/blog",

  // /fl/ city PHP pages — specific city matches
  "/fl/index.php": "/service-areas",
  "/fl/broward-county.php": "/service-areas/broward-county",
  "/fl/Palm-Beach-County.php": "/service-areas/palm-beach-county",
  "/fl/Dade-County.php": "/service-areas/miami-dade-county",
  "/fl/serviceareas.php": "/service-areas",
  "/fl/Davie-roof-repair.php": "/service-areas/broward-county/davie",
  "/fl/Plantation-metal-roof-painting.php": "/service-areas/broward-county/plantation",
  "/fl/Pompano-Beach-roof-contractor.php": "/service-areas/broward-county/pompano-beach",
  "/fl/Pembroke-Park-roof-coating.php": "/service-areas/broward-county/pembroke-park",
  "/fl/Hollywood-metal-roof-restoration.php": "/service-areas/broward-county/hollywood",
  "/fl/Hallandale-roof-painting.php": "/service-areas/broward-county/hallandale-beach",
  "/fl/Lauderdale-Lakes-roof-coating.php": "/service-areas/broward-county/lauderdale-lakes",
  "/fl/Margate-shingle-roof-painting.php": "/service-areas/broward-county/margate",
  "/fl/North-Lauderdale-metal-roof-restoration.php": "/service-areas/broward-county/north-lauderdale",
  "/fl/Miramar-cement-tile-roof-painting.php": "/service-areas/broward-county/miramar",
  "/fl/Lighthouse-Point-roof-waterproofing.php": "/service-areas/broward-county/lighthouse-point",
  "/fl/Sunrise-Tamarac-spanish-tile-roof-painting.php": "/service-areas/broward-county/sunrise",
  "/fl/Boynton-Beach-roof-contractor.php": "/service-areas/palm-beach-county/boynton-beach",
  "/fl/Jupiter-roof-painting.php": "/service-areas/palm-beach-county/jupiter",
  "/fl/Palm-Beach-roof-painting.php": "/service-areas/palm-beach-county",
  "/fl/Boca-Raton-roof-restoration.php": "/service-areas/palm-beach-county/boca-raton",
  "/fl/Lake-Worth-roof-coating.php": "/service-areas/palm-beach-county/lake-worth-beach",
  "/fl/Lantana-roof-coating.php": "/service-areas/palm-beach-county/lantana",
  "/fl/North-Palm-Beach-roof-contractor.php": "/service-areas/palm-beach-county/north-palm-beach",
  "/fl/Atlantis-roof-waterproofing.php": "/service-areas/palm-beach-county",
  "/fl/Juno-Beach-roof-waterproofing.php": "/service-areas/palm-beach-county",
  "/fl/Surfside-roof-waterproofing.php": "/service-areas/miami-dade-county",
  "/fl/Miami-Gardens-roof-coating.php": "/service-areas/miami-dade-county",
  "/fl/Miami-Beach-roof-sealing.php": "/service-areas/miami-dade-county",
  "/fl/Homestead-roof-restoration.php": "/service-areas/miami-dade-county",
  "/fl/Deerfield-Beach-roof-sealing.php": "/service-areas/broward-county/deerfield-beach",
  "/fl/Oakland-Park-roof-sealing.php": "/service-areas/broward-county/oakland-park",
  "/fl/Southwest-Ranches-roof-coating.php": "/service-areas/broward-county/southwest-ranches",
  "/fl/Sweetwater-roof-coating.php": "/service-areas/miami-dade-county/sweetwater",
  "/fl/Sunny-Isles-Beach-roof-coating.php": "/service-areas/miami-dade-county/sunny-isles-beach",
  "/fl/Cooper-City-roof-painting.php": "/service-areas/broward-county/cooper-city",
  "/fl/Fort-Lauderdale-shingle-roof-painting.php": "/service-areas/broward-county/fort-lauderdale",
  "/fl/Pembroke-Pines-roof-painting.php": "/service-areas/broward-county/pembroke-pines",
  "/fl/Virginia-Gardens-roof-painting.php": "/service-areas/miami-dade-county/virginia-gardens",
  "/fl/Key-Biscayne-roof-painting.php": "/service-areas/miami-dade-county/key-biscayne",
  "/fl/Parkland-shingle-roof-coating.php": "/service-areas/broward-county/parkland",
  "/fl/Miami-roof-restoration.php": "/service-areas/miami-dade-county/miami",
  "/fl/North-Miami-roof-contractor.php": "/service-areas/miami-dade-county/north-miami",
  "/fl/Briny-Breezes-roof-repair.php": "/service-areas/palm-beach-county/briny-breezes",
  "/fl/Bal-Harbour-roof-painting.php": "/service-areas/miami-dade-county/bal-harbour",
  "/fl/Ocean-Ridge-roof-sealing.php": "/service-areas/palm-beach-county/ocean-ridge",
  "/fl/West-Palm-Beach-roof-sealing.php": "/service-areas/palm-beach-county/west-palm-beach",
  "/fl/Weston-shingle-roof-restoration.php": "/service-areas/broward-county/weston",
  "/fl/Pahokee-roof-coating.php": "/service-areas/palm-beach-county/pahokee",
  "/fl/North-Bay-Village-roof-painting.php": "/service-areas/miami-dade-county/north-bay-village",
  "/fl/Opa-Locka-roof-coating.php": "/service-areas/miami-dade-county/opa-locka",
  "/fl/Indian-Creek-Village-roof-sealing.php": "/service-areas/miami-dade-county/indian-creek-village",
  "/fl/Golfview-roof-painting.php": "/service-areas/palm-beach-county/golfview",
  "/fl/Lauderhill-roof-sealing.php": "/service-areas/broward-county/lauderhill",

  // /services/ PHP pages — specific matches
  "/services/commercial-metal-roof-coating.php": "/commercial-roofs",
  "/services/commercial-metal-roof-restoration.php": "/commercial-roofs",
  "/services/commercial-metal-roof-painting.php": "/commercial-roofs",
  "/services/additional-roof-life-certification.php": "/roof-life-certification",
  "/services/spanish-tile-roof-coating.php": "/roof-systems",
  "/services/residential-spanish-tile-roof-waterproofing.php": "/roof-systems",
  "/services/cement-tile-roof-restoration.php": "/roof-systems",

  // Legacy non-PHP service pages
  "/roof-painting-service-broward-county-florida": "/roof-services",
  "/roof-painting-service-broward-county": "/roof-services",
  "/roof-painting": "/roof-services",
  "/roof-painting-florida": "/roof-services",
  "/roof-coating": "/roof-services",
  "/roof-coating-broward-county": "/roof-services",
  "/roof-coating-florida": "/roof-services",
  "/elastomeric-roof-coating": "/roof-services",
  "/liquid-rubber-roof-coating": "/roof-services",
  "/roof-waterproofing": "/roof-services",
  "/roof-waterproofing-broward-county": "/roof-services",
  "/waterproofing-flat-roof-broward-county": "/roof-services",
  "/waterproofing-roof-broward-county": "/roof-services",
  "/roof-waterproofing-lauderdale-broward": "/roof-services",
  "/roof-sealing": "/roof-services",
  "/roof-sealing-broward-county": "/roof-services",
  "/roof-restoration": "/roof-services",
  "/roof-repair": "/roof-services",
  "/tile-roof-coating": "/roof-services",
  "/tile-roof-restoration": "/roof-services",
  "/cement-tile-roof-coating": "/roof-services",
  "/barrel-tile-roof-coating": "/roof-services",
  "/roof-certification": "/roof-services",
  "/additional-roof-life-certification": "/roof-services",

  // Legacy commercial
  "/commercial-roof-coating": "/commercial-roofs",
  "/commercial-roofing": "/commercial-roofs",
  "/commercial-roofing-contractor": "/commercial-roofs",
  "/commercial-roofing-contractor-broward-county": "/commercial-roofs",
  "/flat-roof-waterproofing": "/commercial-roofs",
  "/flat-roof-coating": "/commercial-roofs",
  "/foam-roof-coating": "/commercial-roofs",

  // Legacy products
  "/smartshield": "/products/smartshield",
  "/smart-shield": "/products/smartshield",
  "/fungalshield": "/products/fungalshield",
  "/fungal-shield": "/products/fungalshield",
  "/roofshield": "/products/roofshield",
  "/roof-shield": "/products/roofshield",
  "/rp1": "/products/fungalshield",
  "/rp2": "/products/smartshield",
  "/rp3": "/products/roofshield",

  // Legacy company pages — .php variants
  "/about-us.php": "/about",
  "/contact-us.php": "/contact",
  "/services.php": "/roof-services",

  // Legacy company pages
  "/about-us": "/about",
  "/our-company": "/about",
  "/contact-us": "/contact",
  "/testimonials": "/reviews",
  "/customer-reviews": "/reviews",
  "/gallery": "/projects",
  "/photo-gallery": "/projects",
  "/our-work": "/projects",
  "/before-after": "/projects",
  "/before-and-after": "/projects",
  "/project-gallery": "/projects",
  "/factory-tour": "/factory",
  "/manufacturing": "/factory",
  "/our-factory": "/factory",
  "/video": "/videos",
  "/video-gallery": "/videos",
  "/distributor": "/distributorships",
  "/distributorships/": "/distributorships",
  "/franchise": "/distributorships",
  "/questions-to-ask": "/questions",
  "/questions-to-ask-your-roofing-contractor": "/questions",

  // Legacy service area pages
  "/broward-county": "/service-areas/broward",
  "/broward": "/service-areas/broward",
  "/miami-dade": "/service-areas/miami-dade",
  "/miami-dade-county": "/service-areas/miami-dade",
  "/palm-beach": "/service-areas/palm-beach",
  "/palm-beach-county": "/service-areas/palm-beach",
  "/service-area": "/service-areas",
  "/areas-we-serve": "/service-areas",
  "/locations": "/service-areas",
};

app.use((req, res, next) => {
  const dest = EXACT_REDIRECTS[req.path];
  if (dest) return res.redirect(301, dest);

  // /fl/*.php catch-all → /service-areas
  if (req.path.startsWith("/fl/") && req.path.endsWith(".php")) {
    return res.redirect(301, "/service-areas");
  }

  // /services/*.php catch-all → /roof-services
  if (req.path.startsWith("/services/") && req.path.endsWith(".php")) {
    return res.redirect(301, "/roof-services");
  }

  // General .php catch-all — any unmapped .php URL → homepage
  // (prevents sirv from returning a hard 404 for file-extension paths)
  if (req.path.endsWith(".php")) {
    return res.redirect(301, "/");
  }

  // /blog/:slug → /blog
  if (req.path.startsWith("/blog/") && req.path.length > 6) {
    return res.redirect(301, "/blog");
  }

  // /projects/:slug, /project/:slug, /gallery/:slug → /projects
  if (
    (req.path.startsWith("/projects/") ||
      req.path.startsWith("/project/") ||
      req.path.startsWith("/gallery/") ||
      req.path.startsWith("/portfolio/")) &&
    req.path.length > req.path.indexOf("/", 1) + 1
  ) {
    return res.redirect(301, "/projects");
  }

  next();
});

// ── Static assets (JS, CSS, images, fonts, etc.) ─────────────────────────
// Serve real files first; don't fall through to SPA for asset requests.
// IMPORTANT: sirv will serve a matching index.html directly for "/" (and any
// other extensionless path with a matching static file), which would bypass
// the per-page meta injection below and ship pages with no title/meta tags.
// So we only let sirv handle actual asset requests (paths with a file
// extension) and always route extensionless page routes to the SPA fallback.
const staticAssets = sirv(staticDir, {
  single: false,
  etag: true,
});
app.use((req, res, next) => {
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(req.path) && req.path !== "/index.html";
  if (!hasExtension) return next();
  return staticAssets(req, res, next);
});

// ── Prerendered pages ──────────────────────────────────────────────────────
// `pnpm run build` runs a headless-browser prerender pass (see
// scripts/src/prerender.ts) that snapshots every route's fully-rendered HTML
// (real body content + JSON-LD schema, not just title/meta tags) into
// dist/public/<path>/index.html. Serve those directly when present — this is
// what makes city/county/product/FAQ page content actually crawlable without
// requiring Googlebot to execute JS. Real users still get full client-side
// React after the JS bundle loads (no hydration mismatch since content is
// identical, just briefly re-rendered client-side).
app.use((req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD") return next();
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(req.path) && req.path !== "/index.html";
  if (hasExtension) return next();

  const prerenderedPath = join(staticDir, req.path, "index.html");
  if (fs.existsSync(prerenderedPath) && fs.statSync(prerenderedPath).isFile()) {
    res.set("Cache-Control", "public, max-age=3600");
    return res.sendFile(prerenderedPath);
  }
  next();
});

// ── SPA fallback with per-page meta injection ─────────────────────────────
// Safety net for any route that wasn't prerendered (e.g. a new page added
// without rebuilding yet, or an unmapped path). Injects title/description/
// canonical server-side so Googlebot still sees unique tags per page, even
// though the visible body content will only be to a JS-executing crawler.
app.use((req, res) => {
  // Genuinely unknown path (not a real page, not a legacy URL we redirect) —
  // return a real 404 instead of a soft-404 (200 + homepage content), so
  // Google doesn't index garbage/legacy URLs indefinitely.
  if (!isKnownRoute(req.path)) {
    res.status(404);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(`<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8" />
    <title>Page Not Found | The Roof Store</title>
    <meta name="robots" content="noindex, follow" />
  </head>
  <body>
    <h1>Page Not Found</h1>
    <p>The page you're looking for doesn't exist. <a href="${BASE}/">Return to The Roof Store homepage</a>.</p>
  </body>
</html>`);
    return;
  }

  const meta = resolvePageMeta(req.path);
  const canonicalUrl = `${BASE}${meta.canonical}`;
  const escaped = {
    title: meta.title.replace(/&/g, "&amp;").replace(/"/g, "&quot;"),
    description: meta.description.replace(/&/g, "&amp;").replace(/"/g, "&quot;"),
    canonicalUrl: canonicalUrl.replace(/&/g, "&amp;").replace(/"/g, "&quot;"),
  };

  let html = getIndexHtml();

  // Build the full meta block and insert it before </head> (single injection, no duplicates)
  const metaTags = [
    `<title>${escaped.title}</title>`,
    `<meta name="description" content="${escaped.description}" />`,
    `<link rel="canonical" href="${escaped.canonicalUrl}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="The Roof Store" />`,
    `<meta property="og:title" content="${escaped.title}" />`,
    `<meta property="og:description" content="${escaped.description}" />`,
    `<meta property="og:url" content="${escaped.canonicalUrl}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escaped.title}" />`,
    `<meta name="twitter:description" content="${escaped.description}" />`,
  ];

  if (meta.geo) {
    metaTags.push(
      `<meta name="geo.region" content="${meta.geo.region}" />`,
      `<meta name="geo.placename" content="${meta.geo.placename}" />`,
      `<meta name="geo.position" content="${meta.geo.position}" />`,
      `<meta name="ICBM" content="${meta.geo.icbm}" />`,
    );
  }

  html = html.replace("</head>", `    ${metaTags.join("\n    ")}\n  </head>`);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(html);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`The Roof Store serving on port ${port}`);
});
