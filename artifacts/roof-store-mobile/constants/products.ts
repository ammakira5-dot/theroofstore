export interface Product {
  id: string;
  code: string;
  name: string;
  tagline: string;
  warranty: string;
  description: string;
  highlights: string[];
  substrates: string[];
  accentColor: string;
  iconName: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "fungalshield",
    code: "RP1",
    name: "FungalShield",
    tagline: "Anti-Fungal Roof Coating",
    warranty: "5-Year Product Warranty",
    description:
      "Eliminates and permanently prevents biological growth — algae, mold, fungus, and black streaking. An active biocide formula creates a clear, lasting biological barrier that sheds water and stays UV-stable for years.",
    highlights: [
      "Clear finish — no color change to your roof",
      "Active biocide formula kills existing growth",
      "UV-stable, water-shedding surface",
      "Guaranteed mildew resistance",
      "Permanent biological barrier",
    ],
    substrates: ["Clay tile", "Concrete tile", "Metal", "Flat decks"],
    accentColor: "#28A745",
    iconName: "shield-checkmark",
  },
  {
    id: "smartshield",
    code: "RP2",
    name: "SmartShield",
    tagline: "Waterproof & Energy-Reflective Coating",
    warranty: "High-Durability Surface Protection",
    description:
      "Waterproofs and weatherproofs while delivering energy savings and custom color. Five times thicker than standard roof paint, SmartShield uses BASF Cool Pigment Technology to boost Total Solar Reflectance by 32% — and counterintuitively, darker colors reflect more heat.",
    highlights: [
      "5× thicker than standard roof paint",
      "BASF Cool Pigment Technology — 32% more TSR",
      "3,000+ tintable colors available",
      "Confirmed energy savings by FP&L",
      "Hurricane wind-lift protection on ridge caps",
    ],
    substrates: ["Clay tile", "Concrete tile", "Metal", "Flat decks"],
    accentColor: "#2b7fd4",
    iconName: "flash",
  },
  {
    id: "roofshield",
    code: "RP3",
    name: "RoofShield",
    tagline: "Multi-Layer Monolithic Hurricane System",
    warranty: "Lifetime Product Warranty",
    description:
      "The ultimate waterproofing and structural reinforcement system. RoofShield fills every gap and void between tiles, creating a single monolithic structure that is the world's only TAS-106 rated coating — five times stronger than a new tile roof and documented to resist 135+ MPH winds.",
    highlights: [
      "World's only TAS-106 Rated Coating",
      "Dade County Uplift Pull Test certified",
      "5× stronger than a new tile roof",
      "Resists 135+ MPH hurricane winds",
      "Certifies 5–10 years of additional roof life",
      "Lifetime, transferable & renewable warranty",
    ],
    substrates: ["Clay tile", "Concrete tile", "Metal"],
    accentColor: "#e06b2e",
    iconName: "home",
  },
];

export const getProduct = (id: string): Product | undefined =>
  PRODUCTS.find((p) => p.id === id);
