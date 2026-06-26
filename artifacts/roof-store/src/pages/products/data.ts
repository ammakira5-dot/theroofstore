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
  tagline: "Waterproof. Weatherproof. 3,000+ Colors. The Tintable Roof Coating Built for Florida Tile.",
  category: "RP2 — Tintable Waterproof & Weatherproof Tile Roof Coating",
  icon: Sun,
  accentColor: "text-accent",
  badgeColor: "bg-accent/10 text-accent",
  seoTitle: "SmartShield (RP2) — Tintable Waterproof Roof Coating for Tile | The Roof Store Florida",
  seoDescription: "SmartShield waterproofs and weatherproofs tile roofs in 3,000+ colors. BASF Cool Pigment means the darker the color, the more it reflects. FP&L confirmed energy savings. Exclusive — not in any retail store. Free quote — 954-210-9614.",
  heroDesc: "A full waterproof, weatherproof coating system for tile roofs — in over 3,000 tintable colors. The darker the color, the more it reflects. FP&L confirmed energy savings. Exclusively available through The Roof Store.",
  heroImage: `${BASE}/images/Waterproofing-Technology.jpg`,
  overview: [
    "SmartShield (RP2) is The Roof Store's most popular system — a complete waterproof and weatherproof coating engineered specifically for Florida tile roofs. Before anything else, SmartShield is a protective roofing system: it seals the tile surface against wind-driven rain, UV degradation, moisture intrusion, and mildew growth. It is 5× thicker than standard roof paint and bonds directly to the tile, forming a durable rubber-acrylic barrier that extends tile life significantly.",
    "What sets SmartShield apart from any other waterproof tile coating is its color capability. Over 3,000 tintable color options — and in collaboration with BASF, the world's largest chemical producer, we engineered a breakthrough that no one else has achieved: Cool Pigment Technology that increases Total Solar Reflectance (TSR) by 32%, even at the darkest black. The counterintuitive result: the darker the color you choose, the more heat it reflects away from your home. Florida Power & Light (FP&L) independently confirmed the energy savings.",
    "SmartShield is manufactured as true liquid rubber acrylic at our Davie, Florida facility — 100% without water, fillers, thickeners, or extenders. It is exclusively available through The Roof Store. No retail store, hardware chain, or any other contractor carries this formula.",
  ],
  features: [
    { title: "Waterproof & Weatherproof — Primary Function", desc: "SmartShield's first job is protection: it seals tile roofs against wind-driven rain, UV damage, and moisture intrusion. 5× thicker than standard roof paint — a real rubber-acrylic membrane, not a thin coat." },
    { title: "3,000+ Tintable Colors", desc: "The widest color selection of any protective tile roof coating. Match any HOA color, existing tile shade, or custom aesthetic — exclusively formulated and manufactured by The Roof Store." },
    { title: "The Darker, the More Reflective", desc: "BASF-engineered Cool Pigment Technology increases Total Solar Reflectance (TSR) by 32% — even at the darkest black. Choose the color you want without sacrificing energy performance." },
    { title: "FP&L Confirmed Energy Savings", desc: "Florida Power & Light independently confirmed SmartShield saves on cooling costs — the only utility-endorsed roof coating in our category." },
    { title: "BASF Collaboration — Exclusive Formula", desc: "Developed with BASF, the world's largest chemical producer. Passed full tensile, flexural, DSC, TGA, and viscosity testing. Not sold in any retail store, period." },
    { title: "Guaranteed Mildew Resistance", desc: "Biologically resistant formula — less cleaning, no black streaking, more lasting curb appeal throughout Florida's humid climate." },
  ],
  specs: [
    { label: "Product Code", value: "RP2 — SmartShield" },
    { label: "Primary Function", value: "Waterproof & weatherproof coating for tile roofs" },
    { label: "Color Options", value: "3,000+ tintable colors — full custom palette available" },
    { label: "Coverage Rate", value: "~90 sq ft per gallon" },
    { label: "Thickness", value: "5× thicker than standard roof paint" },
    { label: "Cool Pigment", value: "BASF Technology — TSR increased by 32% even at darkest black" },
    { label: "Energy Endorsement", value: "FP&L (Florida Power & Light) confirmed cooling cost savings" },
    { label: "Waterproofing", value: "Wind-driven rain resistant" },
    { label: "Mildew Resistance", value: "Guaranteed" },
    { label: "Availability", value: "Exclusive — not available in any retail store" },
    { label: "Compatible Substrates", value: "Cement tile, clay tile, S-tile, flat tile, shingle, metal" },
    { label: "Manufactured", value: "Davie, Florida — Storm Shield Paint Systems Inc." },
  ],
  applications: [
    "Tile roofs needing waterproofing and weatherproofing protection — primary use case",
    "Homeowners who want a specific roof color (dark or light) without sacrificing protection",
    "South Florida homes with high monthly cooling bills seeking a tinted protective coating",
    "Any tile roof — cement tile, clay tile, barrel tile, S-tile",
    "HOA communities standardizing on a single approved color with maximum durability",
    "Post-storm roof restoration with color refresh and weatherproofing upgrade",
    "Coastal and sun-exposed roofs with maximum UV and moisture exposure",
    "Properties targeting FP&L or utility energy rebate programs",
  ],
  faq: [
    {
      q: "What is SmartShield actually for — is it paint or a waterproofer?",
      a: "Both. SmartShield is first and foremost a waterproof weatherproof coating for tile roofs — it seals the tile surface against rain, UV, and moisture. It also happens to come in over 3,000 tintable colors with BASF Cool Pigment energy-reflectance built in. Think of it as a complete tile roof protection system that also looks exactly how you want it to.",
    },
    {
      q: "How can a dark color reflect MORE heat than a lighter one?",
      a: "This is the breakthrough our collaboration with BASF produced. Standard dark pigments absorb heat — that's why everyone assumed dark roofs would always be hotter. Our Cool Pigment Technology uses specially engineered near-infrared-reflective (NIR) pigments that bounce away the sun's heat energy even in the darkest color ranges. TSR is increased by 32% across all colors, with the greatest gain at the darkest end of the spectrum. No other coating achieves this.",
    },
    {
      q: "How many colors does SmartShield come in?",
      a: "Over 3,000 tintable color options. We work with you to match any HOA-approved color, any existing tile, or any custom aesthetic. Because we manufacture the product ourselves, we can produce the exact formulation for your project — something no retail paint store can do.",
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
      q: "Can SmartShield be applied over FungalShield?",
      a: "Yes — we frequently apply FungalShield first as a biocide base treatment, then SmartShield over it for combined weatherproofing, color, and biological protection. The products are fully compatible and designed to work together as a system.",
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
  galleryImages: [
    {
      src: "https://www.theroofstore.net/assets/images/making-color.jpeg",
      alt: "Mixing custom SmartShield roof paint colors at the factory",
      caption: "Custom color mixing at our Davie, FL factory",
    },
    {
      src: "https://www.theroofstore.net/assets/images/custom-colors-2.png",
      alt: "SmartShield color palette — over 3,000 custom options",
      caption: "3,000+ color options — any shade, any HOA",
    },
    {
      src: "https://www.theroofstore.net/assets/images/prep-image-smart-shield-1.png",
      alt: "SmartShield prep — filling valleys and low spots with coating",
      caption: "Step 1: Prep — filling valleys with base coat",
    },
    {
      src: "https://www.theroofstore.net/assets/images/prep-image-smart-shield-2.jpeg",
      alt: "SmartShield application in progress on tile roof",
      caption: "Step 2: Coating applied across tile surface",
    },
    {
      src: "https://www.theroofstore.net/assets/images/smart-sheild-top-coated.jpeg",
      alt: "SmartShield top coat — final job completed on tile roof",
      caption: "Finished: top coat complete, color locked in",
    },
    {
      src: "https://www.theroofstore.net/assets/images/Refelctive-smart-shield-prep-1.jpeg",
      alt: "Reflective SmartShield installation — prep phase",
      caption: "Cool Pigment coat — reflects heat even at dark colors",
    },
  ],
};

export const roofShield: ProductData = {
  slug: "roofshield",
  name: "RoofShield",
  tagline: "We Don't Just Coat Your Roof — We Make It Monolithic. No Gaps. No Seams. Hurricane Proof.",
  category: "RP3 — Multi-Layer Monolithic Hurricane Roof System",
  icon: ShieldCheck,
  accentColor: "text-primary",
  badgeColor: "bg-primary/10 text-primary",
  seoTitle: "RoofShield (RP3) — Multi-Layer Monolithic Hurricane Roof System | The Roof Store Florida",
  seoDescription: "RoofShield fills every gap and void between your tiles with multiple product layers — making your roof monolithic. Wind and rain cannot penetrate because there are no spaces left. TAS-106 rated, 5× stronger, lifetime warranty. 954-210-9614.",
  heroDesc: "A multi-layer system using several of our proprietary products to fill every space between your tiles — creating a single monolithic roof structure. No gaps. No wind or rain entry. The world's only TAS-106 Dade County Pull Test Rated liquid roof coating.",
  heroImage: `${BASE}/images/roof-shield-system.jpg`,
  overview: [
    "RoofShield (RP3) is fundamentally different from any roof coating on the market — because it is not just a coating. It is a multi-layer system that uses several of our proprietary products in combination to physically fill every void, gap, and space between your tiles: under the overlaps, in the grout joints, between barrel tile ribs, in every penetration point. Before treatment, your tile roof has hundreds of open spaces that wind and rain can enter. After RoofShield, those spaces are gone — sealed solid with liquid rubber.",
    "The result is a monolithic roof. Instead of hundreds of individual tiles sitting on mortar and clips — each one a potential wind or water entry point — the entire roof surface becomes one continuous sealed structure. Wind cannot lift individual tiles because they are bonded into a single unit. Rain cannot penetrate between tiles because there are no gaps left to enter. Before and after photos of the process show the dramatic difference: tile voids that were once open to the sky are completely filled and sealed.",
    "This multi-layer monolithic system is the reason RoofShield holds the only independent Dade County TAS-106 Uplift Pull Test certification ever awarded to a liquid roof coating — 5× the wind uplift strength of a new tile roof, at approximately half the replacement cost, with a maintenance-free Lifetime Warranty that is transferable and renewable.",
  ],
  features: [
    { title: "Multi-Layer System — Not Just a Coating", desc: "RoofShield uses several proprietary products in multiple application layers to fill and seal every gap between tiles. The before/after transformation is visible to the eye." },
    { title: "Monolithic Roof Structure", desc: "After RoofShield, your tile roof is no longer individual pieces — it is one continuous sealed unit. Wind cannot get under individual tiles. Rain has no gaps to enter through." },
    { title: "Every Gap and Void Filled — Completely", desc: "Under overlaps, in grout joints, between barrel tile ribs, around all penetrations — every space is filled with liquid rubber. No entry points remain for wind or water." },
    { title: "World's Only TAS-106 Rated Coating", desc: "The only Dade County TAS-106 Uplift Pull Test Resistance Rated roof coating system worldwide — the same standard required for new tile installations. Certified and updated 2023." },
    { title: "135+ MPH Documented Wind Resistance — 5× Stronger", desc: "Not simulated — real documented hurricane projects where treated roofs did not lose a single tile. 5× the wind uplift resistance of a new tile roof at half the cost." },
    { title: "Lifetime Product Warranty", desc: "Maintenance-free. Transferable to a new buyer when the property sells. Renewable. No standard new roof warranty offers all three." },
    { title: "Additional Roof Life Certification", desc: "We can certify an additional 5–10 years of useful roof life post-installation — even on 50+ year old roofs. Recognized by the State of Florida and Citizens Insurance." },
  ],
  specs: [
    { label: "Product Code", value: "RP3 — RoofShield" },
    { label: "System Type", value: "Multi-layer monolithic roof system — multiple products applied in sequence" },
    { label: "Key Mechanism", value: "Fills every gap and void between tiles — creates one continuous sealed roof structure" },
    { label: "Coverage Rate", value: "~50 sq ft per gallon (full multi-layer membrane)" },
    { label: "Wind Rating", value: "135+ MPH — documented real hurricane performance" },
    { label: "Certification", value: "TAS-106 Dade County Uplift Pull Test — only rated liquid coating worldwide" },
    { label: "Wind Strength", value: "5× stronger than a new tile roof in uplift resistance" },
    { label: "Warranty", value: "Lifetime — Maintenance-Free, Transferable & Renewable" },
    { label: "Roof Life Extension", value: "Up to 10 additional years certification (State of Florida / Citizens recognized)" },
    { label: "Compatible Substrates", value: "Concrete tile, barrel tile, S-tile, flat deck, metal, gravel, foam — any Florida roof" },
    { label: "Manufactured", value: "Davie, Florida — Storm Shield Paint Systems Inc." },
  ],
  applications: [
    "Tile roofs where individual tiles are at risk of wind uplift in hurricane conditions",
    "Any tile roof where gaps between tiles allow rain or wind intrusion",
    "Roofs approaching or past replacement age that need a structural solution",
    "Flat decks and low-slope roofs with chronic or active leaks",
    "Properties in hurricane-prone zones requiring documented wind resistance",
    "Insurance-restoration projects — Citizens and other carrier accepted",
    "Roofs needing Additional Roof Life Certification for insurance continuation",
    "Post-hurricane storm damage restoration and reinforcement",
  ],
  faq: [
    {
      q: "What does 'monolithic roof' actually mean?",
      a: "A monolithic roof is one continuous sealed structure — instead of hundreds of individual tiles with gaps between them. RoofShield fills every void and space between your tiles with multiple layers of liquid rubber product. After installation, your tile roof behaves as a single unit: wind cannot get under individual tiles to lift them, and rain cannot penetrate through the spaces between tiles because those spaces no longer exist. Before/after photos of the process make this immediately clear.",
    },
    {
      q: "How many products are used in the RoofShield system?",
      a: "RoofShield is a multi-layer system that uses several of our proprietary products applied in sequence. Each layer serves a specific function — penetrating seal, gap fill, bonding membrane, and protective topcoat — working together to create the final monolithic structure. This is why you cannot replicate the result with a single off-the-shelf product.",
    },
    {
      q: "What makes RoofShield different from any other roof coating?",
      a: "Most roof coatings go over the surface of tiles — they do not fill the spaces between them. RoofShield fills the voids, gaps, and overlaps between tiles, transforming a collection of individual pieces into one sealed roof structure. That's why it holds the world's only TAS-106 Dade County Uplift Pull Test certification for a liquid coating — because no other product has achieved what RoofShield does structurally.",
    },
    {
      q: "How does 5× stronger than a new roof actually work?",
      a: "A new tile roof passes TAS-106 at approximately 35–55 lbs of uplift force. RoofShield-treated roofs pull-test at 5× those values because the tiles are no longer individual pieces — they are bonded into a monolithic structure. Wind uplift force that would displace a single tile has no effect when that tile is mechanically fused to every tile around it and to the substrate beneath.",
    },
    {
      q: "What does the Lifetime Warranty cover?",
      a: "The Lifetime Product Warranty covers the RoofShield membrane against product failure. It is maintenance-free, transferable to a new buyer when the property sells, and renewable. No standard new roof warranty offers all three.",
    },
    {
      q: "Will this qualify my old roof for insurance continuation?",
      a: "Yes — after a successful RoofShield installation, we can certify an additional 5–10 years of useful roof life. The State of Florida recognizes this, and Citizens Property Insurance Corporation has accepted this certification for coverage continuation on roofs past normal eligibility age.",
    },
    {
      q: "How much cheaper is this than replacing my roof?",
      a: "RoofShield is typically approximately half the cost of a full tile roof replacement — while delivering 5× the wind uplift resistance and a monolithic structure no new roof can match. Most residential projects save $20,000–$80,000. Call us for a free evaluation.",
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
  beforeAfterImages: [
    {
      label: "Cement Tile Roof",
      before: "https://www.theroofstore.net/assets/images/imagebefore.png",
      beforeAlt: "Cement tile roof before RoofShield — visible gaps and voids between tiles",
      after: "https://www.theroofstore.net/assets/images/imageafter.png",
      afterAlt: "Cement tile roof after RoofShield — all gaps sealed, monolithic surface",
    },
    {
      label: "Barrel Tile Roof",
      before: "https://www.theroofstore.net/assets/images/1.jpg",
      beforeAlt: "Barrel tile roof before RoofShield — open spaces between tile ribs",
      after: "https://www.theroofstore.net/assets/images/2-min.jpeg",
      afterAlt: "Barrel tile roof after RoofShield — every space between tiles sealed solid",
    },
  ],
};

export const productMap: Record<string, ProductData> = {
  fungalshield: fungalShield,
  smartshield: smartShield,
  roofshield: roofShield,
};
