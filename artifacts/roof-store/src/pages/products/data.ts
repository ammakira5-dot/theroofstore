import { Leaf, Sun, ShieldCheck } from "lucide-react";
import type { ProductData } from "./ProductDetail";

const BASE = "https://www.theroofstore.net";

export const fungalShield: ProductData = {
  slug: "fungalshield",
  name: "FungalShield",
  tagline: "Save Your Tiles — Florida's Anti-Fungal & Anti-Algae Roof Coating",
  category: "RP1 — Anti-Fungal Roof Coating",
  icon: Leaf,
  accentColor: "text-green-700",
  badgeColor: "bg-green-100 text-green-700",
  seoTitle: "FungalShield (RP1) — Anti-Fungal Roof Coating | The Roof Store Florida",
  seoDescription: "FungalShield (RP1) eliminates black streaking, algae, mold, and fungal growth on Florida roofs. Active biocide formula. Mildew resistant. 5-Year Product Warranty. Free quote — 954-210-9614.",
  heroDesc: "Sheds water, prevents staining, eliminates black streaking — and keeps tiles looking new.",
  heroImage: `${BASE}/images/homeshow-small.JPG`,
  overview: [
    "FungalShield (RP1) is The Roof Store's clear anti-fungal roof coating — the answer to South Florida's most common roof complaint: black streaks, green algae patches, and mold colonies that make a perfectly sound roof look like it needs replacing. These aren't cosmetic issues — they are living biological organisms actively breaking down your roofing substrate.",
    "FungalShield's active biocide formula penetrates and bonds to clay tile, concrete tile, metal, and flat roof surfaces, killing existing biological growth while creating a long-lasting barrier against future infestations. It sheds water away from the tile surface, prevents staining, and provides UV protection — all in a clear finish that preserves the original look of your roof.",
    'Manufactured at our Davie, Florida facility as a true liquid rubber coating — 100% without water, fillers, thickeners, or extenders. Every batch is the same proprietary formula refined over 30 years. The 5-Year Product Warranty is included standard. As our own slogan says: "Save Your Tiles."',
  ],
  features: [
    { title: "Active Biocide Formula", desc: "Kills algae, mold, and fungus at the cellular level — eliminates black streaking caused by Gloeocapsa magma bacteria." },
    { title: "Prevents Re-Infestation", desc: "Creates a permanent biological barrier that inhibits future mold, mildew, algae, and fungal growth." },
    { title: "Sheds Water & Prevents Staining", desc: "Waterproofs the tile surface and prevents biological staining from taking hold after application." },
    { title: "UV Protection", desc: "UV-stable formula protects tile surfaces from sun degradation under Florida's intense solar exposure." },
    { title: "Mildew Resistant — Guaranteed", desc: "Less cleaning required. Guaranteed mildew resistance is written into the product warranty." },
    { title: "Clear Finish", desc: "Preserves the original appearance of your tiles — no color change, no visible coating, just a protected roof." },
  ],
  specs: [
    { label: "Product Code", value: "RP1 — FungalShield" },
    { label: "Formula", value: "Clear liquid rubber acrylic — no water, fillers, or extenders" },
    { label: "Coverage Rate", value: "~90 sq ft per gallon" },
    { label: "Finish", value: "Clear — no color change to tiles" },
    { label: "Mildew Resistance", value: "Guaranteed" },
    { label: "UV Resistance", value: "UV-stable — no degradation in Florida heat" },
    { label: "Compatible Substrates", value: "Clay tile, concrete tile, metal, flat deck" },
    { label: "Product Warranty", value: "5 Years" },
    { label: "Manufactured", value: "Davie, Florida — Storm Shield Paint Systems Inc." },
  ],
  applications: [
    "Tile roofs with black streaking and algae growth",
    "Roofs in high-humidity coastal and inland Florida climates",
    "HOA properties requiring uniform clean appearance",
    "Post-pressure-wash protective treatment",
    "Preventative treatment on new construction roofs",
    "Historic or aged tile roofs where preserving appearance matters",
    "Commercial flat roofs with surface mildew growth",
    "Roofs where prior biological damage has been remediated",
  ],
  faq: [
    {
      q: "Is FungalShield the same as bleach or pressure washing?",
      a: "No — pressure washing and bleach treatments kill surface growth temporarily but provide no lasting protection. FungalShield bonds to the tile surface and creates a permanent barrier against re-infestation. It also doesn't risk the tile damage that high-pressure washing can cause on aged tiles.",
    },
    {
      q: "Will FungalShield change the color or appearance of my tiles?",
      a: "FungalShield is a clear coating. Your tiles will look the same — just cleaner and free of biological staining. The coating is not visible to the eye after curing.",
    },
    {
      q: "How long does the 5-Year Warranty cover?",
      a: "The 5-Year Product Warranty covers the mildew resistance and waterproofing performance of the FungalShield coating against defects in the product. Actual biological protection performance in Florida conditions typically runs beyond the warranty period.",
    },
    {
      q: "Can FungalShield be combined with SmartShield or RoofShield?",
      a: "Yes — FungalShield is frequently applied as a base treatment before SmartShield or RoofShield, particularly on roofs with a history of biological growth. The products are fully compatible.",
    },
    {
      q: "Do you need to come out and inspect before applying?",
      a: "Yes — we provide a free over-the-phone or on-site evaluation to assess the condition of your roof, identify the biological growth present, and confirm FungalShield is the right product for your situation.",
    },
  ],
  relatedProducts: [
    { name: "SmartShield", href: "/products/smartshield", desc: "Energy-reflective smart coating — our most popular system.", icon: Sun },
    { name: "RoofShield", href: "/products/roofshield", desc: "Flagship all-weather waterproofing membrane — lifetime warranty.", icon: ShieldCheck },
  ],
  shopUrl: "https://www.roofprotectproducts.com/product/RP1FungalShield",
  price: "$190",
  shopAvailable: false,
};

export const smartShield: ProductData = {
  slug: "smartshield",
  name: "SmartShield",
  tagline: "3,000+ Colors — The Darker the Color, the More It Reflects. Exclusive — Not Available in Any Retail Store.",
  category: "RP2 — Energy-Reflective Protective Color Roof Coating",
  icon: Sun,
  accentColor: "text-accent",
  badgeColor: "bg-accent/10 text-accent",
  seoTitle: "SmartShield (RP2) — 3,000+ Color Protective Roof Coating | The Roof Store Florida",
  seoDescription: "SmartShield: 3,000+ color options, BASF Cool Pigment Technology — the darker the color the more it reflects. FP&L confirmed energy savings. Exclusive formula not sold in any retail store. Free quote — 954-210-9614.",
  heroDesc: "3,000+ color options. The darker the color, the more it reflects. FP&L confirmed energy savings. Exclusively available through The Roof Store.",
  heroImage: `${BASE}/images/Waterproofing-Technology.jpg`,
  overview: [
    "SmartShield (RP2) is The Roof Store's most popular system — and the most innovative protective color roof coating ever developed for the South Florida market. For years, homeowners have wanted to paint their roofs in beautiful darker colors — charcoal, dark brown, slate, terracotta — without sacrificing energy performance. Every other product on the market made them choose: color or efficiency. SmartShield eliminates that choice entirely.",
    "In collaboration with BASF — the world's largest chemical producer — our product development team engineered a breakthrough: Cool Pigment Technology that increases Total Solar Reflectance (TSR) by 32%, even at the darkest black. The science is counterintuitive and industry-exclusive: the darker the color, the more heat it reflects. BASF re-engineered our base resins and infused its proprietary cool pigment chemistry, which passed a full cycle of tensile tests, flexural tests, DSC, TGA, and viscosity testing. The result has been recognized worldwide as one of the most innovative reflective coatings of its kind — and it is not available in any other retail store anywhere.",
    "SmartShield offers over 3,000 color options — so your roof gets the exact look you want while reflecting the Florida heat away from your home. Florida Power & Light (FP&L) independently confirmed SmartShield saves on cooling costs. Like all Roof Store products, it is manufactured as true liquid rubber acrylic in our Davie, Florida facility — 100% without water, fillers, thickeners, or extenders. Waterproof, mildew-proof, and guaranteed for durability.",
  ],
  features: [
    { title: "3,000+ Color Options", desc: "The widest color selection of any protective roof coating — choose any color from our palette. Exclusively formulated for The Roof Store." },
    { title: "The Darker, the More Reflective", desc: "Our BASF-engineered Cool Pigment Technology increases Total Solar Reflectance (TSR) by 32% — even at the darkest black. No other coating achieves this." },
    { title: "BASF Collaboration — Exclusive Formula", desc: "Developed with BASF, the world's largest chemical producer. Passed full tensile, flexural, DSC, TGA, and viscosity testing. Not sold in any retail store." },
    { title: "FP&L Confirmed Energy Savings", desc: "Florida Power & Light independently confirmed SmartShield saves on cooling costs — utility-endorsed performance no competitor can claim." },
    { title: "Waterproof & Mildew-Proof — Guaranteed", desc: "Protects against wind-driven rain and water intrusion. Guaranteed mildew resistance — less cleaning, more lasting curb appeal." },
    { title: "Adds Strength & Durability", desc: "5× thicker than standard roof paint. Prevents chipping, cracking, and premature color fading — extends tile life significantly." },
  ],
  specs: [
    { label: "Product Code", value: "RP2 — SmartShield" },
    { label: "Color Options", value: "3,000+ colors — full custom palette available" },
    { label: "Technology", value: "BASF Cool Pigment — TSR increased by 32% even at darkest black" },
    { label: "Key Property", value: "The darker the color, the MORE it reflects — unique worldwide" },
    { label: "Coverage Rate", value: "~90 sq ft per gallon" },
    { label: "Thickness", value: "5× thicker than standard roof paint" },
    { label: "Energy Endorsement", value: "FP&L (Florida Power & Light) confirmed cooling cost savings" },
    { label: "Waterproofing", value: "Wind-driven rain resistant" },
    { label: "Mildew Resistance", value: "Guaranteed" },
    { label: "Availability", value: "Exclusive — not available in any retail store" },
    { label: "Compatible Substrates", value: "Cement tile, clay tile, S-tile, flat tile, shingle, metal" },
    { label: "Manufactured", value: "Davie, Florida — Storm Shield Paint Systems Inc." },
  ],
  applications: [
    "Homeowners who want a dark-colored roof (charcoal, brown, slate, terracotta) without losing energy efficiency",
    "South Florida homes with high monthly cooling bills",
    "Any tile roof — the darker the chosen color, the greater the reflective benefit",
    "Properties targeting FP&L or utility energy rebate programs",
    "Coastal and sun-exposed roofs with maximum UV exposure",
    "HOA and multi-unit buildings standardizing on a single color with maximum energy savings",
    "Rental properties and commercial buildings cutting operating costs",
    "Post-storm roof restoration with energy upgrade and color refresh",
  ],
  faq: [
    {
      q: "How can a dark color reflect MORE heat than a lighter one?",
      a: "This is the breakthrough our collaboration with BASF produced. Standard dark pigments absorb heat — that's why everyone assumed dark roofs would always be hotter. Our Cool Pigment Technology uses specially engineered near-infrared-reflective (NIR) pigments that bounce away the sun's heat energy even in the darkest color ranges. TSR is increased by 32% across all colors, with the greatest gain at the darkest end of the spectrum. No other coating in any store achieves this.",
    },
    {
      q: "How many colors does SmartShield come in?",
      a: "Over 3,000 color options. We work with you to match any HOA-approved color, any existing tile, or any custom aesthetic. Because we manufacture the product ourselves, we can produce the exact formulation for your project — something no retail paint store can do.",
    },
    {
      q: "Is SmartShield available at Home Depot, Lowe's, or any other retailer?",
      a: "No. SmartShield is an exclusive proprietary formula developed in collaboration with BASF specifically for The Roof Store. It is not sold in any retail store, hardware chain, or through any other contractor. The only way to get it is directly through us.",
    },
    {
      q: "Did FP&L really confirm SmartShield saves on cooling costs?",
      a: "Yes. Florida Power & Light independently evaluated SmartShield's energy performance and confirmed cooling cost savings. This is utility-endorsed validation that no generic elastomeric competitor product can match.",
    },
    {
      q: "What does the BASF collaboration mean for the product?",
      a: "BASF is the world's largest chemical producer. Our product development team worked directly with BASF scientists to re-engineer our base resins and integrate proprietary cool pigment chemistry. The resulting formula passed a full cycle of tensile tests, flexural tests, DSC, TGA, and viscosity testing — the same rigor applied to industrial coatings. This is why SmartShield performs at a level no retail product can match.",
    },
    {
      q: "Can SmartShield be applied over FungalShield?",
      a: "Yes — we frequently apply FungalShield first as a biocide base treatment, then SmartShield over it for combined energy, color, and biological protection. The products are fully compatible and designed to work together.",
    },
  ],
  relatedProducts: [
    { name: "FungalShield", href: "/products/fungalshield", desc: "Anti-fungal & anti-algae coating — eliminate black streaking.", icon: Leaf },
    { name: "RoofShield", href: "/products/roofshield", desc: "Flagship all-weather waterproofing membrane — lifetime warranty.", icon: ShieldCheck },
  ],
  shopUrl: "https://www.roofprotectproducts.com/product/RP2SmartShield",
  price: "$285",
  shopAvailable: true,
  pdfUrl: "https://theroofstore.net/Roof_Painting_Service_Broward_County_for_Smart_Shield.pdf",
  pdfLabel: "SmartShield Product Sheet (PDF)",
};

export const roofShield: ProductData = {
  slug: "roofshield",
  name: "RoofShield",
  tagline: "The Original. 5× Stronger. Lifetime Warranty. The Definitive Hurricane-Proof Roof System.",
  category: "RP3 — All-Weather Waterproofing Membrane",
  icon: ShieldCheck,
  accentColor: "text-primary",
  badgeColor: "bg-primary/10 text-primary",
  seoTitle: "RoofShield (RP3) — Hurricane-Proof Waterproofing Membrane | The Roof Store Florida",
  seoDescription: "RoofShield is the only TAS-106 Dade County Pull Test Rated roof coating in the world. 135+ MPH documented. 5× stronger than a new roof at ½ the cost. Lifetime warranty, transferable & renewable. Free quote — 954-210-9614.",
  heroDesc: "The world's only TAS-106 Dade County Pull Test Rated roof coating. 135+ MPH. 5× stronger. Lifetime warranty.",
  heroImage: `${BASE}/images/roof-shield-system.jpg`,
  overview: [
    '"Don\'t Re-Roof — Weatherproof at ½ the Cost." That is the promise of RoofShield, and it is backed by 30 years of documented performance and the only independent Dade County TAS-106 Uplift Pull Test certification ever given to a liquid roof coating system worldwide — updated in 2023, still standing 16 years later.',
    "RoofShield (RP3) creates a 100% seamless liquid rubber membrane over your entire roof — Concrete, Barrel, Flat, or S-Tile, Metal, Gravel, and Foam. No joints, no seams, no weak points. The proprietary manufacturing technology produces true liquid rubber acrylic without water, fillers, thickeners, or extenders, with elongation and adhesion characteristics that allow it to expand and contract with temperature fluctuations without cracking or separating.",
    "This is the system that has been documented surviving real Category-force hurricane winds without displacing a single tile on treated roofs. It is 5× stronger in wind uplift resistance than a new tile roof installation at half the cost, and it comes with a maintenance-free Lifetime Product Warranty that is both transferable and renewable — something no standard new roof can offer.",
  ],
  features: [
    { title: "World's Only TAS-106 Rated Coating", desc: "The only Dade County TAS-106 Uplift Pull Test Resistance Rated roof coating system worldwide — certified, documented, updated 2023." },
    { title: "135+ MPH Documented Wind Resistance", desc: "Not simulated — real hurricane-force documented projects where treated roofs did not lose a single tile." },
    { title: "5× Stronger Than a New Roof at ½ the Cost", desc: "5× the wind uplift resistance of a standard new tile roof replacement at approximately half the cost and a fraction of the time." },
    { title: "100% Seamless Waterproof Membrane", desc: "No joints, no seams — the entire roof surface becomes one continuous waterproof membrane." },
    { title: "Lifetime Product Warranty", desc: "Maintenance-free. The warranty is transferable to a new owner and renewable — unmatched in the industry." },
    { title: "Additional Roof Life Certification", desc: "After successful installation, we can certify an additional 5–10 years of useful roof life — even on 50+ year old roofs, recognized by the State of Florida and Citizens Insurance." },
  ],
  specs: [
    { label: "Product Code", value: "RP3 — RoofShield" },
    { label: "System Type", value: "Seamless liquid rubber acrylic membrane — no water, fillers, or extenders" },
    { label: "Coverage Rate", value: "~50 sq ft per gallon (full membrane thickness)" },
    { label: "Wind Rating", value: "135+ MPH — documented real hurricane performance" },
    { label: "Certification", value: "TAS-106 Dade County Uplift Pull Test — only rated coating worldwide" },
    { label: "Wind Strength", value: "5× stronger than a new tile roof in uplift resistance" },
    { label: "Warranty", value: "Lifetime — Maintenance Free, Transferable & Renewable" },
    { label: "Roof Life Extension", value: "Up to 10 additional years certification (State of Florida / Citizens recognized)" },
    { label: "Compatible Substrates", value: "Flat cement deck, shingle, concrete tile, barrel tile, S-tile, metal, gravel, foam — any Florida roof type" },
    { label: "Manufactured", value: "Davie, Florida — Storm Shield Paint Systems Inc." },
  ],
  applications: [
    "Tile roofs approaching or past replacement age",
    "Flat decks and low-slope roofs with chronic or active leaks",
    "Properties in hurricane-prone zones requiring maximum wind protection",
    "Commercial buildings seeking long-term waterproofing without re-roofing",
    "Insurance-restoration projects — Citizens and other carrier approved",
    "Roofs needing Additional Roof Life Certification for insurance purposes",
    "Metal roofs with failing seams and wind-driven rain penetration",
    "Post-hurricane storm damage restoration and reinforcement",
  ],
  faq: [
    {
      q: "What makes RoofShield different from any other roof coating on the market?",
      a: "RoofShield is the only liquid roof coating in the world that has received an independent Dade County TAS-106 Uplift Pull Test certification — the same test required for new tile roof installations in Florida. No other coating has this certification. Updated in 2023, it still stands 16 years later.",
    },
    {
      q: "How does 5× stronger than a new roof actually work?",
      a: "A new tile roof must pass a TAS-106 test at a minimum of 35 lbs of uplift in the field and 55 lbs at the ridge — equivalent to approximately 120–130 MPH. RoofShield-treated roofs have been pull-tested at 5× those values. The system mechanically bonds the tiles to the substrate, dramatically increasing wind uplift resistance.",
    },
    {
      q: "What does the Lifetime Warranty actually cover?",
      a: "The Lifetime Product Warranty covers the RoofShield membrane against product failure. It is maintenance-free — you do not need to reapply coats or pay for upkeep. It is transferable to a new buyer when the property sells, and renewable. No standard new roof warranty offers all three.",
    },
    {
      q: "Will this qualify my old roof for insurance continuation?",
      a: "Yes — after a successful RoofShield installation, we can certify an additional 5–10 years of useful roof life. The State of Florida recognizes this, and Citizens Property Insurance Corporation has accepted this certification for coverage continuation on roofs past normal eligibility age.",
    },
    {
      q: "How much cheaper is this than replacing my roof?",
      a: "RoofShield is typically approximately half the cost of a full tile roof replacement — while delivering 5× the wind uplift resistance. Most residential projects save $20,000–$80,000. Call us for a free evaluation and price comparison for your specific roof.",
    },
  ],
  relatedProducts: [
    { name: "FungalShield", href: "/products/fungalshield", desc: "Anti-fungal & anti-algae coating — eliminate black streaking.", icon: Leaf },
    { name: "SmartShield", href: "/products/smartshield", desc: "Energy-reflective smart coating — FP&L confirmed savings.", icon: Sun },
  ],
  shopUrl: "https://www.roofprotectproducts.com/product/RP3RoofShield",
  price: "$325",
  shopAvailable: true,
  pdfUrl: "https://www.theroofstore.net/roof_waterproofing_Lauderdale_broward.pdf",
  pdfLabel: "RoofShield Product Sheet (PDF)",
};

export const productMap: Record<string, ProductData> = {
  fungalshield: fungalShield,
  smartshield: smartShield,
  roofshield: roofShield,
};
