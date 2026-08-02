/**
 * Deep-localized content for the 4 county hub pages — same substantive
 * treatment as the city pages (unique intro + custom meta description).
 * Keyed by county slug. No dollar figures anywhere — pricing is referenced
 * only via the emailed Factory Price Sheet.
 */

export interface CountyLocalContent {
  /** Custom SEO meta description (~155 chars, insurance-rescue hook). */
  metaDescription: string;
  /** Replaces the generic "The Roof Store in {county}" paragraphs. */
  intro: string[];
}

export const countyLocalContent: Record<string, CountyLocalContent> = {
  "broward-county": {
    metaDescription:
      "Broward roof failing an insurance age check? Our coating + Additional Roof Life Certification satisfies Citizens & FL carriers for 60–70% less than re-roofing. Davie-based since 1994.",
    intro: [
      "Broward County is home turf. Our retail storefront and the RoofProtect Products factory sit on University Drive in Davie, which means every Broward job — from Deerfield Beach down to Hallandale Beach — is a short drive for our crews and a same-week inspection for you. We've been coating, restoring, and weatherproofing Broward roofs for nearly 30 years, A+ BBB rated since 1994.",
      "Broward's roofs cluster into three generations: 1950s–60s flat and low-slope decks east of US-1, 1970s–80s barrel tile through the central corridor, and the enormous wave of late-80s/90s S-tile in the master-planned west — Weston, Pembroke Pines, Coral Springs, Parkland. That western wave is now hitting the 25–35 year mark all at once, which is exactly when Florida insurers start sending roof-age letters. Restoration with an Additional Roof Life Certification is the documented path to keeping coverage without a forced tear-off.",
      "Whether you want our exclusive licensed installer, Storm Shield Paint Systems Inc., to handle everything, or you're a contractor or DIYer buying materials factory-direct from our Davie facility, the FungalShield (RP1), SmartShield (RP2), and RoofShield (RP3) systems cover every roof type in the county — tile, flat deck, metal, and shingle.",
    ],
  },
  "miami-dade-county": {
    metaDescription:
      "Miami-Dade roof flagged for age by your insurer? A certified coating + Roof Life Certification meets Citizens' mandates at 60–70% below replacement. Tile, flat & metal. Since 1994.",
    intro: [
      "Miami-Dade has the oldest and most varied roof stock in South Florida — pre-war flat decks in Little Havana and Miami Shores, mid-century gravel and built-up roofs across Hialeah and Westchester, barrel tile from Coral Gables to Kendall, and high-rise condo decks from Brickell to Sunny Isles. The Roof Store has restored all of them for nearly 30 years, and our coating systems are engineered for exactly this climate: brutal UV, salt air, tropical downpours, and hurricane season.",
      "Miami-Dade is also ground zero for Florida's insurance roof-age crackdown. Citizens and private carriers routinely flag roofs over 15–25 years regardless of actual condition. Before you accept a forced re-roof, get our free evaluation: if the deck and structure are sound, a coating system paired with an Additional Roof Life Certification gives your carrier the documentation it asks for — at 60–70% less than replacement.",
      "Work is performed by our exclusive licensed installer, Storm Shield Paint Systems Inc., using materials manufactured in-house by RoofProtect Products at our Davie facility — or contractors and building managers can buy the same materials factory-direct. The Factory Price Sheet is emailed to you instantly when you fill out the contact form.",
    ],
  },
  "palm-beach-county": {
    metaDescription:
      "Palm Beach County insurer demanding a new roof? Coating + Additional Roof Life Certification satisfies FL carriers for 60–70% less. Tile, flat, metal — free evaluation, since 1994.",
    intro: [
      "Palm Beach County runs from oceanfront estates on the island of Palm Beach to equestrian country in Wellington and lakeside communities out by Belle Glade — and the roofing needs change with every mile. Coastal homes fight salt-air corrosion and blistering UV; the huge 1980s–2000s planned communities of Boca Raton, Boynton Beach, and Palm Beach Gardens have tile roofs aging out in waves; and the Glades communities deal with some of the harshest sun exposure in the state.",
      "What the whole county shares is the insurance squeeze: carriers flagging roofs by age alone. Our answer is the same proven path we've offered since 1994 — restore the roof you already own with a FungalShield (RP1), SmartShield (RP2), or RoofShield (RP3) system, then document it with an Additional Roof Life Certification that satisfies Citizens and private carriers, typically at 60–70% below replacement cost.",
      "HOA and architectural review boards are a fact of life in Palm Beach County, from gated Boca communities to the island's strict standards. We supply product spec sheets, manufacturer documentation from RoofProtect Products, and color matching from 3,000+ options to get your project approved the first time.",
    ],
  },
  "monroe-county": {
    metaDescription:
      "Keys roof taking a beating from salt and sun? Coating + Additional Roof Life Certification keeps your insurance without a tear-off — metal, flat & tile. A+ BBB since 1994.",
    intro: [
      "Monroe County — the Florida Keys — is the toughest roofing environment in the continental United States. Salt spray attacks fasteners and flashings year-round, UV exposure is relentless, and every roof must be ready for a direct hurricane hit. From Key Largo down to Key West, the dominant stock is standing-seam and V-crimp metal, plus flat decks on ground-level commercial buildings and the conch houses of Old Town.",
      "Metal roofs in the Keys rarely need replacement — they need protection. Our coating systems seal seams and fastener heads, stop galvanic corrosion before it spreads, and reflect heat that drives cooling costs. For flat decks, the same liquid-applied membrane technology creates a seamless, hurricane-rated surface. Both come with the documentation insurers ask for, including the Additional Roof Life Certification.",
      "Because the Keys are a scheduled service run from our Davie headquarters, we group Monroe County projects for efficiency — and many Keys contractors simply buy materials factory-direct from RoofProtect Products and install to our published specifications. Either way, the Factory Price Sheet is emailed to you instantly through the contact form.",
    ],
  },
};
