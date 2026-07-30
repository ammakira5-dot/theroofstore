export interface TileServiceFaq {
  q: string;
  a: string;
}

export interface TileServiceBenefit {
  heading: string;
  body: string;
}

export interface TileServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface TileServiceCity {
  name: string;
  href: string;
  note: string;
}

export interface TileServicePageData {
  slug: string;
  title: string;
  description: string;
  serviceType: string;
  badge: string;
  h1: string;
  heroSub: string;
  introHeading: string;
  intro: string[];
  benefits: TileServiceBenefit[];
  process: TileServiceStep[];
  systemName: string;
  systemHref: string;
  systemHeading: string;
  systemBody: string;
  systemPoints: string[];
  faqs: TileServiceFaq[];
  legacyCities?: { heading: string; body: string; cities: TileServiceCity[] };
  related: { href: string; label: string }[];
  ctaHeading?: string;
}

const SHARED_PROCESS: TileServiceStep[] = [
  {
    step: "1",
    title: "Roof Inspection & Assessment",
    desc: "We assess the tile type — Spanish S-tile, barrel tile, or flat cement tile — its condition, and any areas needing attention before work begins. You are informed of all findings prior to the start of work.",
  },
  {
    step: "2",
    title: "Pressure Cleaning & Soft Washing",
    desc: "Every job starts with a thorough low-pressure wash or soft-wash treatment to strip algae, mold, dirt, and black streaking. A clean surface means maximum adhesion.",
  },
  {
    step: "3",
    title: "Preparation & Priming",
    desc: "Loose tile, failed ridge caps, and surface imperfections are addressed. A primer/sealer locks down the porous tile surface so the coating bonds properly.",
  },
  {
    step: "4",
    title: "Multi-Coat Application",
    desc: "The coating system is applied in multiple coats to the manufacturer's mil-thickness specification, building a seamless, weather-resistant membrane across the entire tile surface.",
  },
];

export const tileServicePages: TileServicePageData[] = [
  {
    slug: "spanish-tile-roof-coating",
    title: "Spanish Tile Roof Coating (S-Tile / Barrel Tile) — South Florida | The Roof Store",
    description:
      "Professional Spanish tile roof coating for S-tile and barrel tile roofs in South Florida. Elastomeric coatings that penetrate and strengthen tile surfaces, extend roof life, and save up to 50–60% vs. replacement. Since 1994 — 954-210-9614.",
    serviceType: "Spanish Tile Roof Coating",
    badge: "Spanish Tile Roof Coating — South Florida",
    h1: "Spanish Tile (S-Tile / Barrel Tile) Roof Coating",
    heroSub:
      "Durable elastomeric roof coating for Spanish tile, S-tile, and barrel tile roofs — protecting and restoring South Florida tile roofs since 1994. Serving Broward, Miami-Dade, and Palm Beach Counties.",
    introHeading: "Why Coat a Spanish Tile Roof?",
    intro: [
      "Spanish tile — also called S-tile or barrel tile — is known for unbeatable water and weather protection. But under South Florida's UV intensity, wind, and rain, the strength of Spanish roof tiles is reduced over time. Tiles fade, chalk, and become porous.",
      "A professional-grade elastomeric roof coating penetrates and strengthens the tile surface, creating a seal that blocks moisture from entering the tile. Because elastomeric coatings contain a high level of top-quality resin, they stay flexible for years — flexing with the roof through Florida's daily heat cycles instead of cracking like standard paint.",
      "Applied correctly, a tile roof coating extends roof life, reduces cooling bills by reflecting sunlight and UV, and can save up to 50–60% of the cost of a full roof replacement. Incorrect application can damage roof tiles — which is why coating should always be installed by an experienced professional crew. The Roof Store has been coating Spanish tile roofs in South Florida since 1994.",
    ],
    benefits: [
      {
        heading: "Extends tile roof life",
        body: "Coating protects Spanish tile from UV, water intrusion, and weathering — the damage that shortens a tile roof's serviceable life.",
      },
      {
        heading: "Reduces cooling bills",
        body: "Reflective tile roof coating lowers roof surface temperature by reflecting sunlight and UV — helping decrease interior temperature by an average of 9 to 10 degrees.",
      },
      {
        heading: "No early roof replacement",
        body: "Restoring with a coating system can save up to 50–60% of the money that would otherwise go into a complete roof replacement.",
      },
      {
        heading: "Fade resistance",
        body: "Reflective coatings maintain your roof color far longer — keeping the property appealing without repainting every few years.",
      },
      {
        heading: "Penetrates & strengthens tile",
        body: "Coatings penetrate and strengthen the roof tile surface, sealing out moisture and eliminating the extra weight load of water-soaked tile.",
      },
      {
        heading: "Environmentally friendly",
        body: "Coating extends roof life instead of sending tons of tear-off tile to the landfill, and minimizes debris from ongoing repairs.",
      },
    ],
    process: SHARED_PROCESS,
    systemName: "SmartShield & RoofShield",
    systemHref: "/products/smartshield",
    systemHeading: "Our Spanish Tile Coating Systems",
    systemBody:
      "For Spanish tile roofs we install SmartShield (RP2) — a reflective elastomeric coating in 3,000+ colors with BASF Cool Pigment Technology — or, for maximum hurricane protection, RoofShield (RP3), the original liquid applied rubber roof shield system that fills every gap between tiles and makes the roof monolithic. Both are manufactured in-house by RoofProtect Products in Davie, FL.",
    systemPoints: [
      "SmartShield: 3,000+ tintable colors, cool-pigment reflectance, true waterproofing",
      "RoofShield: TAS-106 Dade County pull-test rated — the hurricane-proof tile system",
      "Elastomeric formulas flex with the roof through Florida's heat cycles",
      "Anti-fungal, mold-resistant — stops the black streaking common on S-tile",
      "Manufactured in-house — factory-direct pricing, no middleman markup",
    ],
    faqs: [
      {
        q: "What is Spanish tile roof coating?",
        a: "It is the application of a professional-grade elastomeric or rubber coating directly over existing Spanish tile (S-tile / barrel tile). The coating penetrates and strengthens the tile surface, seals out moisture, restores color, and extends the life of the roof — without a tear-off.",
      },
      {
        q: "Is S-tile the same as Spanish tile and barrel tile?",
        a: "In South Florida the terms are used interchangeably. \"S-tile\" describes the S-shaped profile of the classic Spanish tile; \"barrel tile\" refers to the rounded half-cylinder style. Our coating systems are installed on all of these profiles, in clay, concrete, and cement.",
      },
      {
        q: "How much does coating save vs. replacing a Spanish tile roof?",
        a: "Restoring a tile roof with a professional coating system typically saves up to 50–60% compared to the cost of a complete roof replacement — and avoids weeks of tear-off construction and landfill waste.",
      },
      {
        q: "Can a coated Spanish tile roof handle hurricanes?",
        a: "Our RoofShield system is TAS-106 Dade County pull-test rated. It fills the gaps between tiles with multiple product layers, making the roof monolithic — documented wind resistance of 135+ MPH.",
      },
    ],
    legacyCities: {
      heading: "Spanish Tile Roof Coating Across South Florida",
      body: "We have coated Spanish tile and barrel tile roofs across Broward, Miami-Dade, and Palm Beach counties for over 30 years — including long-running work in these communities:",
      cities: [
        {
          name: "Wilton Manors",
          href: "/service-areas/broward-county/wilton-manors",
          note: "Spanish tile roof coating for Wilton Manors' mid-century neighborhoods, where original S-tile roofs respond exceptionally well to restoration.",
        },
        {
          name: "Fort Lauderdale",
          href: "/service-areas/broward-county/fort-lauderdale",
          note: "Barrel tile and S-tile coating throughout greater Fort Lauderdale, from Victoria Park to Coral Ridge.",
        },
        {
          name: "Davie",
          href: "/service-areas/broward-county/davie",
          note: "Home base — our crews and the RoofProtect factory are located right here in Davie.",
        },
      ],
    },
    related: [
      { href: "/spanish-tile-roof-painting", label: "Spanish Tile Roof Painting" },
      { href: "/spanish-tile-roof-waterproofing", label: "Spanish Tile Roof Waterproofing" },
      { href: "/spanish-tile-roof-maintenance", label: "Spanish Tile Repair & Maintenance" },
      { href: "/cement-tile-roof-restoration", label: "Cement Tile Roof Restoration" },
      { href: "/roof-services", label: "All Roof Coating & Restoration Services" },
    ],
  },
  {
    slug: "spanish-tile-roof-painting",
    title: "Spanish Tile Roof Painting (S-Tile / Barrel Tile) — South Florida | The Roof Store",
    description:
      "Spanish tile roof painting for S-tile and barrel tile roofs in South Florida — professional elastomeric coating in 3,000+ colors, 5× thicker than standard roof paint. Serving Sunrise, Tamarac & all of Broward, Miami-Dade, Palm Beach. 954-210-9614.",
    serviceType: "Spanish Tile Roof Painting",
    badge: "Spanish Tile Roof Painting — South Florida",
    h1: "Spanish Tile (S-Tile / Barrel Tile) Roof Painting",
    heroSub:
      "Restore your Spanish tile roof's color with professional elastomeric coating — 3,000+ colors, engineered for Florida heat, UV, and rain. Serving Broward, Miami-Dade, and Palm Beach Counties since 1994.",
    introHeading: "Painting a Spanish Tile Roof the Right Way",
    intro: [
      "Spanish tile is constructed of porous materials like concrete or clay. When tiles fade, chalk, and streak under South Florida's sun, a fresh coat of the right product transforms the whole property. But standard exterior paint is the wrong product — it is thin, rigid, and degrades in 2–3 years under Florida UV.",
      "Professional Spanish tile roof painting uses an elastomeric coating — about 5× the thickness of standard roof paint — that bonds to the porous tile surface, seals it against moisture, and flexes with the roof through daily heat expansion and contraction.",
      "Our SmartShield system is available in over 3,000 tintable colors, including BASF Cool Pigment shades that reflect heat even in darker tones — so an S-tile roof can go modern dark without baking the attic.",
    ],
    benefits: [
      {
        heading: "3,000+ colors",
        body: "From classic terracotta barrel-tile tones to modern charcoal — with cool-pigment technology that reflects heat in every shade.",
      },
      {
        heading: "5× thicker than paint",
        body: "Elastomeric coating builds a real membrane on the tile — not a cosmetic film that cracks and peels within a couple of summers.",
      },
      {
        heading: "Flexes, never cracks",
        body: "Florida roofs expand and contract daily. Elastomeric coatings flex with the S-tile profile; standard paint cracks along the curves.",
      },
      {
        heading: "Fade & fungus resistant",
        body: "UV-resistant, anti-fungal formulation stops the black streaking and algae growth that ruins the look of Spanish tile roofs.",
      },
      {
        heading: "Cool roof performance",
        body: "BASF Cool Pigment Technology increases solar reflectance — lowering attic temperatures and air conditioning costs.",
      },
      {
        heading: "Curb appeal & resale value",
        body: "A freshly coated barrel tile roof in a modern color is one of the fastest exterior upgrades a South Florida home can get.",
      },
    ],
    process: SHARED_PROCESS,
    systemName: "SmartShield",
    systemHref: "/products/smartshield",
    systemHeading: "SmartShield — Our Spanish Tile Painting System",
    systemBody:
      "SmartShield (RP2) is a professional-grade reflective elastomeric coating manufactured in-house by RoofProtect Products in Davie, FL. It is not hardware-store roof paint — it is a professional-application system with BASF Cool Pigment Technology built in, engineered specifically for Florida tile roofs.",
    systemPoints: [
      "3,000+ tintable colors — terracotta, earth tones, modern darks, custom matches",
      "True waterproofing — 5× the thickness of standard roof paint",
      "Cool Pigment reflectance confirmed by FP&L energy savings data",
      "Anti-fungal — inhibits the algae that causes black streaking on S-tile",
      "Applied over existing Spanish, barrel, and flat cement tile — no tear-off",
    ],
    faqs: [
      {
        q: "Can you paint a Spanish tile roof?",
        a: "Yes — with the right product. Professional elastomeric coatings like SmartShield are applied directly to Spanish tile, S-tile, and barrel tile roofs. Unlike standard paint, they flex with the tile, resist UV, and truly waterproof the surface. Every job begins with pressure cleaning and preparation.",
      },
      {
        q: "How long does Spanish tile roof painting last?",
        a: "A professional elastomeric application typically lasts 10–15 years in Florida depending on the system and number of coats. Standard off-the-shelf roof paint degrades in 2–3 years under South Florida UV.",
      },
      {
        q: "Do you serve Sunrise and Tamarac?",
        a: "Yes — Sunrise and Tamarac have been part of our Spanish tile painting service area for decades, along with every city in Broward, Miami-Dade, and Palm Beach counties.",
      },
      {
        q: "What colors work best on barrel tile?",
        a: "Classic terracotta and earth tones remain the most popular, but cool-pigment darks are the fastest-growing choice. SmartShield's 3,000+ tintable colors include shades engineered to reflect heat even in dark colors.",
      },
    ],
    legacyCities: {
      heading: "Spanish Tile Roof Painting in Sunrise, Tamarac & Beyond",
      body: "Our crews have painted and coated Spanish tile roofs across these Broward communities for decades:",
      cities: [
        {
          name: "Sunrise",
          href: "/service-areas/broward-county/sunrise",
          note: "Long-running Spanish tile painting work throughout Sunrise's 1980s–90s tile-roof neighborhoods.",
        },
        {
          name: "Tamarac",
          href: "/service-areas/broward-county/tamarac",
          note: "S-tile and barrel tile roof painting for Tamarac homes and communities.",
        },
        {
          name: "Plantation",
          href: "/service-areas/broward-county/plantation",
          note: "Tile and metal roof painting across Plantation's established neighborhoods.",
        },
      ],
    },
    related: [
      { href: "/spanish-tile-roof-coating", label: "Spanish Tile Roof Coating" },
      { href: "/spanish-tile-roof-waterproofing", label: "Spanish Tile Roof Waterproofing" },
      { href: "/tile-roof-painting", label: "Tile Roof Painting (All Tile Types)" },
      { href: "/roof-painting-vs-coating", label: "Roof Paint vs. Coating — The Difference" },
      { href: "/roof-services", label: "All Roof Coating & Restoration Services" },
    ],
  },
  {
    slug: "spanish-tile-roof-waterproofing",
    title: "Spanish Tile Roof Waterproofing (S-Tile / Barrel Tile) — South Florida | The Roof Store",
    description:
      "Residential Spanish tile roof waterproofing in South Florida. Spanish tile is a watershed, not waterproof — our proprietary systems seal S-tile and barrel tile roofs against wind-driven rain. Manufacturer & installer since 1994. 954-210-9614.",
    serviceType: "Spanish Tile Roof Waterproofing",
    badge: "Spanish Tile Roof Waterproofing — South Florida",
    h1: "Spanish Tile (S-Tile / Barrel Tile) Roof Waterproofing",
    heroSub:
      "Spanish tile roofs are beautiful — but they are not waterproof. Our proprietary waterproofing systems seal the tile and stop rainwater from reaching the substrate. Manufacturer and installer, serving South Florida since 1994.",
    introHeading: "Spanish Tile Is a Watershed — Not Waterproof",
    intro: [
      "It surprises many homeowners: a Spanish tile roof is a watershed and a decorative covering — the tiles shed most water, but the actual waterproofing is the underlayment beneath them. As that underlayment ages, wind-driven rain that gets past the tile has nowhere to go but into the roof deck.",
      "The Roof Store is both a manufacturer and contracting company — we develop, manufacture, and install our own Spanish tile waterproofing systems, and have provided residential Spanish tile roof waterproofing in Florida since 1994.",
      "Our advanced waterproofing products give S-tile and barrel tile roofs true water resistance and a smooth, upgraded look — while eliminating rainwater intrusion into the substrate. That saves you from the messy, expensive repairs that follow hidden leaks.",
    ],
    benefits: [
      {
        heading: "Stops substrate intrusion",
        body: "Seals the tile surface and the gaps where wind-driven rain penetrates — protecting the underlayment and deck below.",
      },
      {
        heading: "Manufacturer-direct system",
        body: "We manufacture our own waterproofing products in Davie, FL — the installer and the factory are the same company.",
      },
      {
        heading: "Monolithic option",
        body: "RoofShield fills every gap between tiles with multiple product layers, making the entire roof one continuous membrane.",
      },
      {
        heading: "Hurricane rated",
        body: "The RoofShield system is TAS-106 Dade County pull-test rated with documented 135+ MPH wind resistance.",
      },
      {
        heading: "Prevents costly repairs",
        body: "Waterproofing now costs a fraction of the interior damage, mold remediation, and deck repairs that follow years of slow leaks.",
      },
      {
        heading: "Upgraded appearance",
        body: "Waterproofed tile gets a smooth, uniform, renewed finish — protection that also looks like a brand-new roof.",
      },
    ],
    process: SHARED_PROCESS,
    systemName: "RoofShield",
    systemHref: "/products/roofshield",
    systemHeading: "RoofShield — The Original Liquid Applied Rubber Roof Shield System",
    systemBody:
      "For maximum Spanish tile waterproofing we install RoofShield (RP3) — the original liquid applied rubber roof shield system. Multiple product layers fill every gap between the tiles, making the roof monolithic: one continuous waterproof membrane over the entire tile surface.",
    systemPoints: [
      "Fills every gap between S-tiles and barrel tiles — true waterproofing, not just shedding",
      "TAS-106 Dade County pull-test rated — the hurricane-proof roof",
      "Silicone-base options for maximum water resistance",
      "Lifetime warranty available on the full system",
      "Also available: SmartShield reflective waterproof top coats in 3,000+ colors",
    ],
    faqs: [
      {
        q: "Isn't a Spanish tile roof already waterproof?",
        a: "No — Spanish tile is a watershed, not a waterproof membrane. Tiles shed most water, but the underlayment beneath does the real waterproofing, and it degrades with age. Waterproofing the tile surface itself stops wind-driven rain from ever reaching the substrate.",
      },
      {
        q: "What does Spanish tile waterproofing involve?",
        a: "After cleaning and preparation, waterproofing products are applied over the tile — sealing the porous surface and, with the RoofShield system, filling the gaps between tiles to create a monolithic membrane across the whole roof.",
      },
      {
        q: "Do you waterproof other roof types?",
        a: "Yes — we waterproof flat roofs, cement tile, shingle, and commercial metal roofs across South Florida with the same manufacturer-direct systems.",
      },
      {
        q: "How long has The Roof Store been waterproofing tile roofs?",
        a: "Since 1994 — over 30 years of Spanish tile waterproofing in South Florida, as both the manufacturer and the licensed installing contractor, A+ BBB rated.",
      },
    ],
    legacyCities: {
      heading: "Residential Spanish Tile Waterproofing Across South Florida",
      body: "From coastal wind-driven rain zones to inland communities, we waterproof S-tile and barrel tile roofs across all three counties:",
      cities: [
        {
          name: "Lighthouse Point",
          href: "/service-areas/broward-county/lighthouse-point",
          note: "Coastal waterproofing work where wind-driven rain demands more than a watershed.",
        },
        {
          name: "Surfside",
          href: "/service-areas/miami-dade-county/surfside",
          note: "Barrier-island tile waterproofing in Miami-Dade's toughest salt-and-storm exposure.",
        },
        {
          name: "Juno Beach",
          href: "/service-areas/palm-beach-county/juno-beach",
          note: "Palm Beach County coastal communities where tile waterproofing protects against nor'easter rain events.",
        },
      ],
    },
    related: [
      { href: "/spanish-tile-roof-coating", label: "Spanish Tile Roof Coating" },
      { href: "/spanish-tile-roof-painting", label: "Spanish Tile Roof Painting" },
      { href: "/products/roofshield", label: "RoofShield (RP3) Product Page" },
      { href: "/tas-106-certified-roof-coating", label: "TAS-106 Certified Roof Coating" },
      { href: "/roof-services", label: "All Roof Coating & Restoration Services" },
    ],
  },
  {
    slug: "spanish-tile-roof-maintenance",
    title: "Spanish Tile Roof Repair & Maintenance (S-Tile / Barrel Tile) — South Florida | The Roof Store",
    description:
      "Spanish tile roof repair and maintenance in South Florida — cleaning, resealing, coating renewal, and preventive care for S-tile and barrel tile roofs. Protect your tile investment without replacement. Since 1994 — 954-210-9614.",
    serviceType: "Spanish Tile Roof Repair and Maintenance",
    badge: "Spanish Tile Repair & Maintenance — South Florida",
    h1: "Spanish Tile (S-Tile / Barrel Tile) Roof Repair & Maintenance",
    heroSub:
      "Spanish tile is one of the most durable roofing materials made — when it's maintained. Preventive cleaning, resealing, and coating renewal keep S-tile and barrel tile roofs performing for decades. Serving South Florida since 1994.",
    introHeading: "Maintenance Is What Makes Tile Roofs Last",
    intro: [
      "Spanish tile roofing is not just stunning — it is one of the most durable roof materials available, made from natural ceramic or clay, concrete, or synthetic compositions. But durability depends on maintenance. Heavy storms, intense moisture, fungal growth, and even animals cause damage that must be addressed to prevent bigger issues.",
      "In South Florida, the maintenance cycle matters more than anywhere: UV chalks the surface, summer rain feeds algae and black streaking, and hurricane season tests every ridge cap and tile edge. Small issues left alone become underlayment leaks — and underlayment repairs cost many times more than surface maintenance.",
      "Our maintenance work centers on protective coating renewal: cleaning, resealing, and recoating the tile surface so it continues to shed water, resist fungus, and hold its color. While proper coating eliminates many repair needs, our crews also address loose tiles, failed ridge caps, and surface damage found during inspection.",
    ],
    benefits: [
      {
        heading: "Prevents expensive damage",
        body: "Surface maintenance costs a fraction of the underlayment and interior repairs that follow neglected tile roofs.",
      },
      {
        heading: "Stops fungal destruction",
        body: "FungalShield clear sealer eliminates the black streaking, algae, and mold that eat away at tile surfaces — without harsh repeated pressure cleaning that destroys tile.",
      },
      {
        heading: "Extends coating life",
        body: "Renewal coats keep an existing coating system performing at specification instead of degrading to failure.",
      },
      {
        heading: "Hurricane readiness",
        body: "Maintained, sealed tile with sound ridge caps performs dramatically better in wind events than loose, degraded tile.",
      },
      {
        heading: "Preserves your investment",
        body: "A tile roof is one of the most valuable components of a South Florida home — maintenance protects decades of remaining service life.",
      },
      {
        heading: "Insurance advantages",
        body: "A maintained, certified roof supports Additional Roof Life Certification — which can help with Florida homeowners insurance requirements.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Inspection & Condition Report",
        desc: "We inspect the tile field, ridge caps, valleys, and coating condition, and report all findings before any work is scheduled.",
      },
      {
        step: "2",
        title: "Soft-Wash Cleaning",
        desc: "Low-pressure cleaning removes algae, mold, and debris without the tile damage caused by repeated harsh pressure cleaning.",
      },
      {
        step: "3",
        title: "Repairs & Resealing",
        desc: "Loose tiles, failed ridge caps, and surface imperfections are corrected; exposed or worn areas are resealed.",
      },
      {
        step: "4",
        title: "Protective Coating Renewal",
        desc: "Where an existing coating is aging, renewal coats restore full protection — clear FungalShield or color-matched SmartShield.",
      },
    ],
    systemName: "FungalShield",
    systemHref: "/products/fungalshield",
    systemHeading: "FungalShield — Maintenance-Grade Clear Tile Protection",
    systemBody:
      "FungalShield (RP1) is our clear anti-fungal roof tile sealer — the maintenance product that precludes the repeated pressure cleanings that destroy tile roofs. It eliminates black streaking, algae, mold, and fungal growth while preserving the tile's natural or coated color underneath.",
    systemPoints: [
      "Clear finish — no color change, preserves original or coated tile appearance",
      "Eliminates black streaking, algae, mold, and fungal growth",
      "Precludes destructive repeat pressure cleanings",
      "Mildew resistant with a 5-year product warranty",
      "Also available tinted, or topped with SmartShield color coats",
    ],
    faqs: [
      {
        q: "How often does a Spanish tile roof need maintenance in Florida?",
        a: "A professional inspection every 2–3 years is a good baseline, with cleaning and resealing as conditions require. Coated roofs need less frequent intervention — the coating does the protecting between visits.",
      },
      {
        q: "Does pressure cleaning damage Spanish tile?",
        a: "Repeated harsh pressure cleaning erodes the tile surface and shortens roof life. We use low-pressure soft-washing, and our FungalShield clear sealer prevents the regrowth that drives the cleaning cycle in the first place.",
      },
      {
        q: "Can you repair individual tiles?",
        a: "Loose tiles, failed ridge caps, and surface damage found during inspection are addressed as part of maintenance work. Clients are alerted to any required structural repairs before work begins.",
      },
      {
        q: "Is maintenance worth it on an older tile roof?",
        a: "Almost always. Spanish tile itself lasts 50+ years — it's the surface condition and underlayment that fail. Maintenance and coating renewal extend the roof's certified life at a fraction of replacement cost.",
      },
    ],
    related: [
      { href: "/spanish-tile-roof-coating", label: "Spanish Tile Roof Coating" },
      { href: "/roof-pressure-cleaning", label: "Roof Pressure Cleaning & Soft Washing" },
      { href: "/products/fungalshield", label: "FungalShield (RP1) Product Page" },
      { href: "/roof-life-certification", label: "Additional Roof Life Certification" },
      { href: "/roof-services", label: "All Roof Coating & Restoration Services" },
    ],
  },
  {
    slug: "cement-tile-roof-restoration",
    title: "Cement Tile Roof Restoration — Flat & Barrel Cement Tile | South Florida | The Roof Store",
    description:
      "Cement tile roof restoration in South Florida — restore and protect flat and barrel cement roof tiles with elastomeric coating systems. Save up to 50–60% vs. replacement. Serving Miramar & all of Broward, Miami-Dade, Palm Beach. 954-210-9614.",
    serviceType: "Cement Tile Roof Restoration",
    badge: "Cement Tile Roof Restoration — South Florida",
    h1: "Cement Tile Roof Restoration",
    heroSub:
      "Restore and protect your cement roof tiles — flat tile or barrel profile — with professional coating systems that renew color, seal the surface, and extend roof life for a fraction of replacement cost. Since 1994.",
    introHeading: "Restore Your Cement Tile Roof — Don't Replace It",
    intro: [
      "Cement (concrete) tile is the most common tile roof in South Florida — and the most restorable. Cement tile is porous: over the years it absorbs moisture, grows algae, fades from UV, and loses the factory surface that once protected it. But the tile itself remains structurally sound for decades.",
      "Restoration renews that protection. After cleaning and preparation, an elastomeric coating system seals the porous surface, locks out moisture, restores uniform color, and gives the entire roof a like-new finish — flat cement tile or barrel profile alike.",
      "Getting roof restoration is a major decision for any homeowner, and it starts with an honest inspection. Restoration typically saves up to 50–60% versus complete replacement — with no tear-off, no weeks of construction, and no tons of old tile in the landfill.",
    ],
    benefits: [
      {
        heading: "Up to 50–60% savings",
        body: "Restoration costs a fraction of full cement tile replacement — and modern coating systems perform for 10–15 years.",
      },
      {
        heading: "Seals porous cement",
        body: "Cement tile absorbs water. Coating penetrates and seals the surface, eliminating moisture absorption and the extra weight load it causes.",
      },
      {
        heading: "Like-new appearance",
        body: "Uniform color in 3,000+ tintable shades — restore original terracotta or go modern with cool-pigment darks.",
      },
      {
        heading: "No tear-off disruption",
        body: "Restoration happens on top of your existing roof. Most jobs finish in days, not the weeks a replacement takes.",
      },
      {
        heading: "Hurricane-rated option",
        body: "The RoofShield monolithic system adds TAS-106-rated wind performance to a restored cement tile roof.",
      },
      {
        heading: "Insurance & certification",
        body: "A restored, coated roof supports Additional Roof Life Certification for Florida insurance requirements.",
      },
    ],
    process: SHARED_PROCESS,
    systemName: "SmartShield & RoofShield",
    systemHref: "/products/smartshield",
    systemHeading: "Our Cement Tile Restoration Systems",
    systemBody:
      "Cement tile restoration uses SmartShield (RP2) reflective elastomeric coating for color and waterproofing — or the full RoofShield (RP3) monolithic system for maximum protection. Both are manufactured in-house by RoofProtect Products in Davie, FL, and installed by our own licensed crews.",
    systemPoints: [
      "SmartShield: seals porous cement tile in 3,000+ colors with cool-pigment reflectance",
      "RoofShield: fills every tile gap — monolithic, TAS-106 hurricane rated",
      "FungalShield clear sealer available for maintenance between restorations",
      "Factory-direct: manufacturer and installer are the same company",
      "A+ BBB rated since 1994",
    ],
    faqs: [
      {
        q: "What is cement tile roof restoration?",
        a: "It is the professional cleaning, preparation, repair, and recoating of an existing cement (concrete) tile roof. The coating seals the porous tile, restores color, and extends roof life — avoiding a full replacement.",
      },
      {
        q: "How do I know if my cement tile roof can be restored?",
        a: "Most structurally sound cement tile roofs are restorable, even with heavy fading, algae, and surface wear. An inspection determines tile and underlayment condition — you are informed of all findings before any work begins.",
      },
      {
        q: "How much does restoration save vs. replacement?",
        a: "Typically up to 50–60% versus complete cement tile replacement — plus days instead of weeks of work, and no tear-off debris.",
      },
      {
        q: "Do you restore cement tile roofs in Miramar?",
        a: "Yes — Miramar's large stock of 1980s–2000s cement tile roofs has been part of our restoration service area for decades, along with every city in Broward, Miami-Dade, and Palm Beach counties.",
      },
    ],
    legacyCities: {
      heading: "Cement Tile Roof Restoration Across South Florida",
      body: "Cement tile restoration and painting has been part of our work in these communities for decades:",
      cities: [
        {
          name: "Miramar",
          href: "/service-areas/broward-county/miramar",
          note: "Cement tile roof painting and restoration throughout Miramar's tile-roof neighborhoods.",
        },
        {
          name: "Pembroke Pines",
          href: "/service-areas/broward-county/pembroke-pines",
          note: "Flat and barrel cement tile restoration across Pembroke Pines' master-planned communities.",
        },
        {
          name: "Coconut Creek",
          href: "/service-areas/broward-county/coconut-creek",
          note: "A high concentration of cement tile roofs needing periodic resealing against UV and summer rain.",
        },
      ],
    },
    related: [
      { href: "/spanish-tile-roof-coating", label: "Spanish Tile Roof Coating" },
      { href: "/spanish-tile-roof-painting", label: "Spanish Tile Roof Painting" },
      { href: "/tile-roof-painting", label: "Tile Roof Painting (All Tile Types)" },
      { href: "/roof-replacement-alternative-florida", label: "Roof Replacement Alternative" },
      { href: "/roof-services", label: "All Roof Coating & Restoration Services" },
    ],
  },
  {
    slug: "shingle-roof-coating",
    title: "Shingle Roof Coating, Painting & Waterproofing — South Florida | The Roof Store",
    description:
      "Professional shingle roof coating, painting, waterproofing, and restoration for South Florida homes. Elastomeric systems that seal aging asphalt shingles, restore color, and extend roof life — up to 50–60% less than replacement. Since 1994 — 954-210-9614.",
    serviceType: "Shingle Roof Coating",
    badge: "Shingle Roof Coating — South Florida",
    h1: "Shingle Roof Coating, Painting & Waterproofing",
    heroSub:
      "Restore and waterproof your asphalt shingle roof with professional elastomeric coating — sealing granule loss, restoring color, and extending roof life. Serving Broward, Miami-Dade, and Palm Beach Counties since 1994.",
    introHeading: "Why Coat a Shingle Roof?",
    intro: [
      "Asphalt shingle is the most common roof type in Florida — and the one that ages fastest under our sun. UV exposure dries out the asphalt, granules wash into the gutters, and shingles curl, crack, and fade. Most homeowners are told the only fix is a full replacement.",
      "There is another option. A professional-grade elastomeric shingle roof coating seals the shingle surface, locks down remaining granules, and builds a flexible waterproof membrane over the entire roof — restoring color and weather protection without a tear-off.",
      "Applied correctly, shingle roof coating extends the serviceable life of the roof, reflects heat to lower cooling bills, and can save up to 50–60% of the cost of a full shingle roof replacement. The Roof Store has provided residential shingle roof coating, painting, and waterproofing in South Florida since 1994.",
    ],
    benefits: [
      {
        heading: "Extends shingle roof life",
        body: "Coating seals out the UV and moisture that dry, curl, and crack asphalt shingles — adding years of serviceable life to an aging roof.",
      },
      {
        heading: "Seals granule loss",
        body: "The elastomeric membrane locks down remaining granules and covers exposed asphalt, stopping the wear cycle that ends in replacement.",
      },
      {
        heading: "True waterproofing",
        body: "Shingle roof waterproofing creates a seamless flexible membrane across the field of the roof — sealing hairline gaps, nail heads, and worn tabs.",
      },
      {
        heading: "Restores color",
        body: "Shingle roof painting with SmartShield's 3,000+ tintable colors takes a faded, blotchy shingle roof back to a uniform, like-new finish.",
      },
      {
        heading: "Reduces cooling bills",
        body: "Reflective cool-pigment coating lowers roof surface temperature — dark shingle roofs are among Florida's biggest attic heat collectors.",
      },
      {
        heading: "Fraction of replacement cost",
        body: "Restoring with a coating system can save up to 50–60% of the money that would otherwise go into a complete shingle roof replacement.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Roof Inspection & Assessment",
        desc: "We assess shingle condition — granule loss, curling, cracked or missing tabs — and identify any repairs needed before coating. You are informed of all findings prior to the start of work.",
      },
      {
        step: "2",
        title: "Soft Washing & Surface Cleaning",
        desc: "Shingle roofs are soft-washed — never high-pressure blasted — to remove algae, mold, and dirt without stripping granules. A clean surface means maximum adhesion.",
      },
      {
        step: "3",
        title: "Repairs & Priming",
        desc: "Damaged tabs are repaired or replaced, exposed nail heads sealed, and a primer/sealer locks down the porous shingle surface so the coating bonds properly.",
      },
      {
        step: "4",
        title: "Multi-Coat Application",
        desc: "The elastomeric coating is applied in multiple coats to the manufacturer's mil-thickness specification, building a seamless flexible membrane across the entire shingle field.",
      },
    ],
    systemName: "SmartShield",
    systemHref: "/products/smartshield",
    systemHeading: "Our Shingle Roof Coating System",
    systemBody:
      "For shingle roofs we install SmartShield (RP2) — a reflective elastomeric coating in 3,000+ colors with BASF Cool Pigment Technology, manufactured in-house by RoofProtect Products in Davie, FL. It flexes with the shingle through Florida's daily heat cycles instead of cracking like standard paint, and its anti-fungal formula stops the black streaking common on aging shingle roofs.",
    systemPoints: [
      "SmartShield: 3,000+ tintable colors, cool-pigment reflectance, true waterproofing",
      "About 5× the thickness of standard roof paint — a real membrane, not a cosmetic film",
      "Anti-fungal, mold-resistant — stops black streaking on shingle roofs",
      "Elastomeric formula flexes with the roof through Florida's heat cycles",
      "Manufactured in-house — factory-direct pricing, no middleman markup",
    ],
    faqs: [
      {
        q: "Can you coat or paint an asphalt shingle roof?",
        a: "Yes — with the right product and preparation. Professional elastomeric coatings like SmartShield are applied directly over asphalt shingles after soft washing, repairs, and priming. Unlike standard paint, they flex with the shingle, resist UV, and truly waterproof the surface.",
      },
      {
        q: "How much does shingle roof coating save vs. replacement?",
        a: "Restoring a shingle roof with a professional coating system typically saves up to 50–60% compared to the cost of a complete shingle roof replacement — and avoids days of tear-off construction and landfill waste.",
      },
      {
        q: "How long does a coated shingle roof last?",
        a: "A professional elastomeric application typically lasts 10–15 years in Florida depending on the system, number of coats, and roof condition at the time of application.",
      },
      {
        q: "Is every shingle roof a candidate for coating?",
        a: "No — a shingle roof with widespread structural damage, saturated decking, or extensive missing shingles may need repairs first or may not be a candidate. Every job starts with an honest inspection, and you are told exactly what we find before any work begins.",
      },
    ],
    related: [
      { href: "/metal-roof-coating", label: "Metal Roof Coating & Restoration" },
      { href: "/spanish-tile-roof-coating", label: "Spanish Tile Roof Coating" },
      { href: "/roof-replacement-alternative-florida", label: "Roof Replacement Alternative" },
      { href: "/roof-services", label: "All Roof Coating & Restoration Services" },
    ],
    ctaHeading: "Ready to Protect Your Shingle Roof?",
  },
  {
    slug: "metal-roof-coating",
    title: "Commercial Metal Roof Coating, Painting & Waterproofing — South Florida | The Roof Store",
    description:
      "Commercial metal roof coating, painting, waterproofing, and restoration in South Florida. Elastomeric systems that stop rust, seal seams and fasteners, and reflect heat — without a metal roof replacement. Since 1994 — 954-210-9614.",
    serviceType: "Metal Roof Coating",
    badge: "Commercial Metal Roof Coating — South Florida",
    h1: "Commercial Metal Roof Coating, Painting & Waterproofing",
    heroSub:
      "Stop rust, seal seams, and reflect South Florida heat with professional elastomeric metal roof coating — for warehouses, commercial buildings, and metal-roofed homes. Serving Broward, Miami-Dade, and Palm Beach Counties since 1994.",
    introHeading: "Why Coat a Metal Roof?",
    intro: [
      "Metal roofs face their own set of challenges in South Florida — salt air corrosion, rust creep at cut edges and fasteners, seam leaks from daily thermal movement, and intense heat gain that drives cooling costs up.",
      "A professional elastomeric metal roof coating system addresses all of them at once: rust-inhibiting preparation stops corrosion before it spreads, seam and fastener sealing eliminates the leak points that fail first, and a reflective top coat drops the roof surface temperature dramatically.",
      "Applied correctly, commercial metal roof restoration extends the roof's serviceable life for a fraction of the cost of a metal roof replacement — with no tenant disruption, no tear-off, and no weeks of construction. The Roof Store has coated, painted, and waterproofed metal roofs across South Florida since 1994.",
    ],
    benefits: [
      {
        heading: "Stops rust & corrosion",
        body: "Rust-inhibiting preparation and coating seal the metal surface against South Florida's salt air — stopping corrosion before it spreads.",
      },
      {
        heading: "Seals seams & fasteners",
        body: "Seams, laps, and fastener heads — the points where every metal roof leaks first — are individually sealed before the field coating goes on.",
      },
      {
        heading: "Reflective heat reduction",
        body: "A reflective coating dramatically lowers metal roof surface temperature — cutting heat gain and air conditioning costs for the building below.",
      },
      {
        heading: "Handles thermal movement",
        body: "Metal roofs expand and contract more than any other roof type. Elastomeric coating flexes with that daily movement instead of cracking.",
      },
      {
        heading: "No replacement, no disruption",
        body: "Restoration happens over the existing roof — no tear-off, no tenant disruption, and a fraction of the cost of metal roof replacement.",
      },
      {
        heading: "Commercial & residential grade",
        body: "The same systems protect warehouses, strip centers, and industrial buildings as well as metal-roofed South Florida homes.",
      },
    ],
    process: [
      {
        step: "1",
        title: "Roof Inspection & Assessment",
        desc: "We assess the metal panel type and condition — rust, seam separation, fastener back-out, coating failure — and identify repairs needed before work begins. You are informed of all findings prior to the start of work.",
      },
      {
        step: "2",
        title: "Pressure Cleaning & Rust Treatment",
        desc: "The roof is pressure cleaned to remove dirt, chalking, and loose coating, and rust areas are mechanically prepared and treated with rust-inhibiting primer.",
      },
      {
        step: "3",
        title: "Seam & Fastener Sealing",
        desc: "Every seam, lap, penetration, and fastener head is individually sealed — eliminating the leak points that fail first on metal roofs.",
      },
      {
        step: "4",
        title: "Multi-Coat Application",
        desc: "The elastomeric coating is applied in multiple coats to the manufacturer's mil-thickness specification, building a seamless reflective membrane across the entire roof.",
      },
    ],
    systemName: "SmartShield & RoofShield",
    systemHref: "/products/smartshield",
    systemHeading: "Our Metal Roof Coating Systems",
    systemBody:
      "For metal roofs we install SmartShield (RP2) — a reflective elastomeric coating in 3,000+ colors with BASF Cool Pigment Technology — or, where maximum waterproofing is needed, RoofShield (RP3), the original liquid applied rubber roof shield system. Both are manufactured in-house by RoofProtect Products in Davie, FL — the installer and the factory are the same company.",
    systemPoints: [
      "SmartShield: 3,000+ tintable colors, cool-pigment reflectance, true waterproofing",
      "RoofShield: seamless liquid-applied rubber membrane for maximum waterproofing",
      "Rust-inhibiting preparation and primers for corroded panels",
      "Elastomeric formulas flex with metal's daily expansion and contraction",
      "Manufactured in-house — factory-direct pricing, no middleman markup",
    ],
    faqs: [
      {
        q: "Can you paint or coat a rusted metal roof?",
        a: "Yes — surface rust is mechanically prepared, treated with rust-inhibiting primer, and then coated. Widespread structural rust-through requires panel repairs first; every job starts with an honest inspection and you are told exactly what we find.",
      },
      {
        q: "How much does metal roof coating save vs. replacement?",
        a: "Restoring a metal roof with a professional coating system typically saves up to 50–60% compared to the cost of a complete metal roof replacement — with no tear-off and no business disruption.",
      },
      {
        q: "Does coating stop metal roof seam leaks?",
        a: "Yes — seams, laps, and fastener heads are individually sealed before the field coats go on, and the finished elastomeric membrane flexes with the roof's daily thermal movement so the seal lasts.",
      },
      {
        q: "How much cooler is a coated metal roof?",
        a: "A reflective coating can lower metal roof surface temperature dramatically — reflective cool-pigment finishes reflect sunlight and UV instead of absorbing it, reducing heat transferred into the building and lowering cooling costs.",
      },
    ],
    related: [
      { href: "/commercial-roofs", label: "Commercial Roof Systems" },
      { href: "/shingle-roof-coating", label: "Shingle Roof Coating & Restoration" },
      { href: "/roof-systems", label: "Compare All Roof Coating Systems" },
      { href: "/roof-services", label: "All Roof Coating & Restoration Services" },
    ],
    ctaHeading: "Ready to Protect Your Metal Roof?",
  },
];

export function getTileServicePage(slug: string): TileServicePageData | undefined {
  return tileServicePages.find((p) => p.slug === slug);
}
