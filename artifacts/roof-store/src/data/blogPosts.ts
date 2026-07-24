const BASE = "https://www.theroofstore.net";

export interface BlogPost {
  slug: string;
  title: string;
  url: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  date: string;
  dateISO: string;
  tag: string;
  excerpt: string;
  body: string[];
  metaDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "roof-coating-can-save-your-home-and-insurance-policy-in-florida",
    title: "Roof Coating Can Save Your Home and Insurance Policy in Florida",
    url: `${BASE}/blog/roof-coating-can-save-your-home-and-insurance-policy-in-florida/`,
    image: "/images/blog/post-1.png",
    imageAlt: "Florida home with professional roof coating applied — protects insurance coverage",
    date: "September 2024",
    dateISO: "2024-09-01",
    tag: "Insurance & Roof Coating",
    excerpt:
      "There's a dangerous piece of misinformation spreading from insurance agents: \"If you seal or paint your roof, you'll lose your insurance.\" The reality? Florida's Governor issued a bulletin in March 2023 restating homeowners' legal right to an Additional Roof Life Certification — an affidavit that supersedes all insurance agent opinions and fully protects your coverage.",
    body: [
      "Florida insurance agents have been telling homeowners for years that sealing or painting a roof will void their coverage. This is not true — and in March 2023, Florida's Governor issued an official bulletin (Florida Office of Insurance Regulation, March 2023) to all insurance carriers explicitly restating that homeowners have a legal right to obtain an Additional Roof Life Certification. That certification, signed by a licensed contractor or engineer, legally supersedes any age-based or condition-based denial from an insurance company employee.",
      "The confusion stems from insurers trying to force roof replacements on older roofs — often tile roofs 10 to 20 years old — even when those roofs are structurally sound and watertight. A professional roof coating system, applied by a licensed contractor, restores the roof's waterproofing, fills gaps and seams, and provides documented evidence of the roof's continued serviceability. That documentation is exactly what the Additional Roof Life Certification captures.",
      "For South Florida homeowners facing Citizens Insurance or private carrier pressure, a properly documented roof coating is often the most cost-effective path to maintaining coverage. The average tile roof replacement in Broward or Miami-Dade runs $25,000–$50,000. A professional coating system from The Roof Store typically costs a fraction of that — and comes with a written lifetime warranty that satisfies insurer requirements. The key is working with a licensed contractor who can provide the certification alongside the installation.",
    ],
    metaDescription:
      "Florida's Governor issued a March 2023 bulletin protecting homeowners' right to an Additional Roof Life Certification. Roof coating does NOT void your insurance — here's what the law actually says.",
    keywords: ["roof coating Florida", "Florida homeowners insurance", "Additional Roof Life Certification", "Senate Bill 2-D", "Citizens Insurance roof", "South Florida roofing"],
  },
  {
    slug: "new-florida-homeowners-insurance-laws",
    title: "New Florida Homeowners Insurance Laws",
    url: `${BASE}/blog/new-florida-homeowners-insurance-laws/`,
    image: "/images/blog/post-2.png",
    imageAlt: "Florida homeowners insurance law documents — roof coating rights under SB 2-D",
    date: "September 2024",
    dateISO: "2024-09-01",
    tag: "Florida Insurance Law",
    excerpt:
      "Only licensed contractors, engineers, and roof mitigation specialists — not insurance company employees — have the legal authority to assess your roof's condition. Insurance agents stomping around on your roof cannot legally deny your coverage. Here's what the new Florida laws actually say about who has the final word on your roof.",
    body: [
      "Florida law is explicit: only a licensed roofing contractor, professional engineer, or roof mitigation specialist has the legal standing to assess the condition of your roof and determine its remaining useful life. An insurance company's adjuster or field agent can document what they observe, but they cannot unilaterally declare a roof non-compliant if a licensed professional has certified otherwise. This distinction matters enormously for homeowners facing non-renewal threats.",
      "Senate Bill 2-D (SB 2-D, Fla. 2022), passed in 2022, introduced major reforms to Florida's property insurance market. One of the most important provisions for homeowners with older roofs: insurers can no longer automatically require replacement of a roof that has 25% or more of its life remaining — as determined by a licensed professional assessment, not an insurance company's internal estimate. For cement tile and Spanish tile roofs, which commonly last 40–50+ years, this protection is particularly significant.",
      "The practical implication: before accepting an insurance company's demand for a full roof replacement, get a licensed contractor's written assessment. If that assessment documents serviceable condition and certifies additional roof life, Florida law gives that certification legal weight over the insurer's position. Storm Shield Paint Systems Inc. — The Roof Store — provides this certification as part of our professional coating services for qualifying roofs throughout Broward, Miami-Dade, and Palm Beach Counties.",
    ],
    metaDescription:
      "Senate Bill 2-D (Fla. 2022) changed what Florida insurers can demand from homeowners with older roofs. Learn who has legal authority to assess your roof — and it's not your insurance agent.",
    keywords: ["Florida homeowners insurance laws", "Senate Bill 2-D", "roof inspection rights Florida", "Citizens Insurance roof", "roofing contractor assessment", "South Florida roofing"],
  },
  {
    slug: "citizens-insurance-for-older-tile-roofs-in-florida",
    title: "Citizens Insurance for Older Tile Roofs in Florida",
    url: `${BASE}/blog/citizens-insurance-for-older-tile-roofs-in-florida/`,
    image: "/images/blog/post-3.png",
    imageAlt: "Older Spanish tile roof in South Florida — Citizens Insurance coverage options",
    imagePosition: "top",
    date: "September 2024",
    dateISO: "2024-09-01",
    tag: "Citizens Insurance",
    excerpt:
      "Citizens Insurance has specific rules about older tile roofs — but they changed in 2023 in favor of homeowners. If your cement tile or Spanish tile roof is cleaned, repaired, and professionally sealed, it can qualify for continued coverage under Senate Bill 2-D. We explain exactly what the new Citizens roof rules mean for South Florida homeowners.",
    body: [
      "Citizens Property Insurance Corporation — Florida's insurer of last resort — has historically been aggressive about requiring roof replacements on older homes. Prior to the 2022–2023 legislative reforms, Citizens could decline to renew policies on homes with roofs over 25 years old, regardless of actual condition. That blanket age-based policy has been significantly constrained by Senate Bill 2-D (SB 2-D, Fla. 2022) and subsequent regulatory guidance.",
      "Under the current framework, Citizens must give weight to a professional inspection and written certification of a roof's remaining useful life. For cement tile roofs and Spanish tile roofs — which are the dominant roof type in South Florida — the material itself is extremely durable. Tile roofs regularly last 50+ years when properly maintained and coated. The issue is rarely the tile itself; it's the underlying waterproofing and sealing that degrades over time. A professional liquid-applied coating system restores that waterproofing and can extend the certifiable life of the roof by 15–25 years.",
      "Homeowners facing Citizens non-renewal over roof age should take the following steps: (1) get a licensed contractor's written inspection confirming the roof is structurally sound; (2) have the roof professionally pressure-cleaned; (3) apply a certified coating system such as Smart Shield (RP2) or Roof Shield (RP3); (4) obtain an Additional Roof Life Certification from the licensed contractor. This documented package — inspection, coating, and certification — is the strongest possible response to a Citizens non-renewal notice. Call us at 954-210-9614 to discuss your specific situation.",
    ],
    metaDescription:
      "Citizens Insurance changed its rules for older tile roofs after SB 2-D (2022). A professional coating + Additional Roof Life Certification can protect your coverage. Here's the step-by-step process.",
    keywords: ["Citizens Insurance tile roof", "older tile roof Florida", "Additional Roof Life Certification", "SB 2-D roof coverage", "tile roof insurance Florida", "roof coating Citizens Insurance"],
  },
  {
    slug: "additional-roof-life-certification-benefits-meaning",
    title: "Additional Roof Life Certification: Benefits & Meaning",
    url: `${BASE}/blog/additional-roof-life-certification-benefits-meaning/`,
    image: "/images/blog/post-4.png",
    imageAlt: "Additional Roof Life Certification document — Florida roof insurance affidavit",
    date: "August 2024",
    dateISO: "2024-08-01",
    tag: "Roof Certification",
    excerpt:
      "An Additional Roof Life Certification is a comprehensive professional assessment that documents how many more years your existing roof can provide sufficient protection. In Florida, this affidavit legally supersedes an insurance company's age-based denial — and can save you tens of thousands versus a forced replacement. Here's what it covers and how to get one.",
    body: [
      "An Additional Roof Life Certification (also called a Roof Condition Certification or Roof Life Extension Affidavit) is a signed, written document prepared by a licensed roofing contractor or professional engineer that states the roof has been professionally inspected, treated, and is expected to remain serviceable for a specified number of additional years. In Florida, this certification carries legal weight under SB 2-D (Fla. 2022) — it gives homeowners a documented professional opinion that insurers must consider alongside their own assessments.",
      "The certification typically documents: the current condition of the roof substrate (decking, underlayment, and tiles or membrane); any repairs completed prior to or during the certification; the coating system applied and its specifications; and the licensed professional's opinion on the roof's remaining useful life. For a tile roof that receives a full Roof Shield (RP3) or Smart Shield (RP2) treatment, the certification may state 15–25 additional years of serviceability — a timeframe that completely satisfies Citizens and most private insurer requirements.",
      "The financial math is straightforward: a professional coating and certification from The Roof Store costs significantly less than a full roof replacement — often by $20,000 to $40,000 — while delivering the same insurance compliance outcome. And unlike a replacement, the coating preserves the original tile (which is often the most valuable part of a South Florida home's roof system). The certification is valid with all major Florida insurers and can be presented at any time — during renewal, following a non-renewal notice, or proactively before any issue arises. Call 954-210-9614 to schedule your assessment.",
    ],
    metaDescription:
      "An Additional Roof Life Certification legally supersedes insurance age-based denials in Florida (per SB 2-D, 2022). Learn what it covers, how to get one, and how it can save you $20,000–$40,000.",
    keywords: ["Additional Roof Life Certification", "roof life extension affidavit Florida", "Florida roof certification insurance", "Citizens Insurance roof compliance", "roof coating warranty Florida", "South Florida roofing contractor"],
  },
  {
    slug: "2026-hurricane-season-roof-prep-south-florida",
    title: "2026 Hurricane Season Roof Prep Checklist for South Florida Homeowners",
    url: `${BASE}/blog/2026-hurricane-season-roof-prep-south-florida/`,
    image: "/images/blog/post-5.png",
    imageAlt: "South Florida home roof prepared for hurricane season — tile inspection and coating",
    date: "July 2026",
    dateISO: "2026-07-01",
    tag: "Hurricane Prep",
    excerpt:
      "The Atlantic hurricane season runs June 1 through November 30. The window to prepare your roof is before the first watch — not after. Here is the complete pre-season checklist from 30 years of South Florida post-hurricane roof assessments: inspection, cleaning, repair, coating, and Citizens Insurance certification.",
    body: [
      "South Florida homeowners face a narrow but critical preparation window each spring. By the time June 1 arrives, your roof should be fully inspected, any cracked or loose tiles repaired, and — if you're applying a coating system — it should have had at least 24–72 hours of curing time. That means scheduling work in March or April at the latest. Pre-season booking fills up every year by mid-April. The homeowners who wait until May are consistently the ones we can't fit in before the season starts.",
      "The four-step sequence that matters: (1) Professional inspection — look specifically for cracked tiles, loose ridge caps, open valleys, and any area where wind can get a purchase; (2) Pressure cleaning at 2,500+ PSI to remove all algae, mildew, and oxidation that would prevent proper adhesion; (3) Full crack and tile repair before any coating is applied — coating over damage extends it, not heals it; (4) Coating application — at minimum FungalShield for roof surface protection, or Roof Shield (RP3) if you want the world's only TAS-106 Dade County certified liquid system that fills all gaps between tiles into a monolithic hurricane-rated surface. Don Godshall, one of our Davie customers, chose Roof Shield before Hurricane Wilma. His neighbors' tiles were hitting his house. His roof came through without losing a single tile.",
      "Two additional items that South Florida homeowners often overlook: first, trim any branches overhanging your roof before June 1 — falling limbs are one of the most common causes of post-storm roof damage, and no coating prevents impact damage. Second, if you have Citizens Insurance or a private carrier that has been pressuring you about your roof's age, a professionally applied coating combined with an Additional Roof Life Certification from our licensed team is often the fastest, least expensive path to satisfying their requirements under Florida law. Call 954-210-9614 to discuss your specific situation — free consultation, no obligation.",
    ],
    metaDescription:
      "Complete 2026 pre-season roof checklist for South Florida homeowners — inspection, cleaning, repair, coating, and Citizens Insurance certification. Schedule before April; booking fills fast.",
    keywords: ["hurricane roof prep South Florida", "2026 hurricane season checklist", "roof inspection before hurricane season", "tile roof hurricane protection", "TAS-106 roof coating", "roof coating Citizens Insurance certification"],
  },
  {
    slug: "how-long-does-roof-coating-last-florida",
    title: "How Long Does Elastomeric Roof Coating Last in Florida?",
    url: `${BASE}/blog/how-long-does-roof-coating-last-florida/`,
    image: "/images/blog/post-6.png",
    imageAlt: "Elastomeric roof coating applied to South Florida tile roof — long lifespan guide",
    date: "July 2026",
    dateISO: "2026-07-01",
    tag: "Roof Coating Guide",
    excerpt:
      "Florida's combination of extreme UV, 60+ inches of annual rainfall, high humidity, and hurricane-force winds makes it one of the most demanding environments for roofing materials in North America. Here's exactly how long each of our three coating systems is designed to last — and what determines whether your coating hits the low end or the high end of that range.",
    body: [
      "The honest answer is: it depends on the system, the quality of the application, and what happens to it afterward. Our three systems have different design lifespans: FungalShield (RP1) is built for 5–7 years and is renewable; SmartShield (RP2) is designed for 10–15 years; Roof Shield (RP3) carries a Lifetime Transferable and Renewable Warranty. But in Florida specifically, two factors have an outsized impact on which end of those ranges a given installation hits: surface preparation and application thickness. A roof that is fully pressure-cleaned, repaired, and primed before coating will consistently outperform a roof where prep was rushed or skipped — sometimes by double the lifespan.",
      "Florida's climate creates challenges that other regions don't have in the same combination. South Florida averages 3,000+ hours of annual sunshine — more than almost anywhere in the continental US — which causes standard coatings to oxidize, chalk, and degrade within 2–4 years. Pair that with 60+ inches of annual rainfall concentrated in a 5-month wet season (June–October), 90%+ humidity through summer, and hurricane-force wind events that test every seam and gap in your tile field. Our elastomeric formulas are specifically UV-stabilized, fully waterproof (not water-resistant), and — in the case of Roof Shield — independently certified under Dade County's TAS-106 Uplift standard for wind resistance. A standard acrylic or latex paint, even labeled 'roof coating,' will not perform at these standards in South Florida's conditions.",
      "The practical guide to maximizing lifespan: schedule an annual 30-minute inspection. Most coating failures don't happen catastrophically — they start as small thin spots or hairline separation around a penetration, and catch them early with a spot repair costs a fraction of what a full recoat costs. Our customers on an annual maintenance check consistently get the high end of each system's range. FungalShield customers who maintain their roofs reach 7 years routinely; Roof Shield customers with maintained roofs have roofs that are 15+ years old and still performing. Call 954-210-9614 to schedule an annual check — it's free for existing customers.",
    ],
    metaDescription:
      "How long does elastomeric roof coating last in Florida? FungalShield: 5–7 yrs. SmartShield: 10–15 yrs. RoofShield: Lifetime. The factors that determine lifespan in South Florida's extreme climate.",
    keywords: ["elastomeric roof coating lifespan Florida", "how long does roof coating last", "FungalShield lifespan", "SmartShield warranty", "RoofShield lifetime warranty", "Florida roof coating durability"],
  },
  {
    slug: "diy-vs-professional-roof-coating-florida",
    title: "DIY Roof Coating in Florida: What Pros Know That Homeowners Don't",
    url: `${BASE}/blog/diy-vs-professional-roof-coating-florida/`,
    image: "/images/blog/post-7.png",
    imageAlt: "Professional roof coating crew applying elastomeric system to South Florida tile roof",
    date: "July 2026",
    dateISO: "2026-07-01",
    tag: "DIY vs Professional",
    excerpt:
      "We've assessed hundreds of roofs where a homeowner applied a coating 2–5 years prior and is now dealing with peeling, delamination, or water intrusion. In almost every case, the failure wasn't the product — it was the process. Here is what professional installation actually involves, and why the gap between DIY and professional results is larger in Florida than anywhere else.",
    body: [
      "The most common DIY roof coating failure pattern we see in South Florida: a homeowner buys a 5-gallon bucket of coating at a home improvement store, rents a pressure washer, does a surface wash, and rolls or sprays the coating on. It looks good for 18 months. Then algae returns, the coating starts to peel at the edges, and a minor rain event reveals that moisture has been working its way under the coating for months. The problem is almost never the product — it's that surface preparation was insufficient. Professional-grade prep requires a 2,500+ PSI commercial washer with the correct nozzle angle and a mildewcide solution concentration that a standard home pressure washer can't deliver at that flow rate. When prep is cut short, the coating bonds to the algae or oxidation layer — not the tile — and that layer eventually releases.",
      "There are also three Florida-specific factors that don't apply the same way in most other states. First: TAS-106 Uplift certification — the only hurricane-rated certification for a liquid roof coating — is tied to licensed installation. A DIY application of our Roof Shield materials would not carry this certification. The certification is issued based on the full system as professionally installed, not the materials alone. Second: an Additional Roof Life Certification, which carries legal weight with Citizens Insurance and private carriers under SB 2-D (Fla. 2022) and can prevent a forced roof replacement, must be signed by a licensed contractor. DIY-applied systems cannot receive this certification. Third: Florida's contractor licensing laws generally require a licensed roofing contractor for most commercial installations, and while residential owner-occupant DIY isn't prohibited, unlicensed work can create disclosure complications at the point of sale or refinance.",
      "The equipment cost alone narrows the gap significantly. A commercial-grade pressure washer, professional nozzle set, appropriate mildewcide, commercial airless sprayer or heavy-duty roller system, fall-protection equipment, and all repair materials often add up to $2,000–$3,500 before you purchase any coating. That's before accounting for the value of a warranty, the TAS-106 certification, or the insurance certification. Our recommendation: for a small flat-roof section under 500 sq ft on a single-story home, a competent homeowner who does the prep correctly can get reasonable results with a quality coating. For a full tile roof on a two-story home in hurricane country — especially one where Citizens Insurance is a factor — the professional route delivers measurably better outcomes at a total cost that is closer to DIY than most homeowners expect. Call 954-210-9614 for a free written estimate and you'll have the real numbers to compare.",
    ],
    metaDescription:
      "DIY roof coating in Florida: the honest guide from 30 years in the field. Surface prep failures, TAS-106 certification requirements, insurance certification, and true cost comparison. Call 954-210-9614.",
    keywords: ["DIY roof coating Florida", "professional roof coating vs DIY", "TAS-106 certification requirements", "roof coating surface preparation", "Citizens Insurance roof certification", "South Florida roof coating contractor"],
  },
];
