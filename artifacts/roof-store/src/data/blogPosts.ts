const BASE = "https://www.theroofstore.net";

export interface BlogPost {
  slug: string;
  title: string;
  url: string;
  image: string;
  imageAlt: string;
  date: string;
  dateISO: string;
  tag: string;
  excerpt: string;
  body: string[];
  metaDescription: string;
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
  },
  {
    slug: "citizens-insurance-for-older-tile-roofs-in-florida",
    title: "Citizens Insurance for Older Tile Roofs in Florida",
    url: `${BASE}/blog/citizens-insurance-for-older-tile-roofs-in-florida/`,
    image: "/images/blog/post-3.png",
    imageAlt: "Older Spanish tile roof in South Florida — Citizens Insurance coverage options",
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
  },
];
