import { entries as browardFaqs } from "./cityFaqsBroward";
import { entries as miamiDadeFaqs } from "./cityFaqsMiamiDade";
import { entries as palmBeachFaqs } from "./cityFaqsPalmBeach";
export interface CityFaq {
  q: string;
  a: string;
}


export const cityFaqOverrides: Record<string, CityFaq[]> = {
  ...browardFaqs,
  ...miamiDadeFaqs,
  ...palmBeachFaqs,

  "fort-lauderdale": [
    {
      q: "How much does roof coating cost in Fort Lauderdale, FL?",
      a: "Fort Lauderdale roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials and typically run 60–70% less than replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free onsite estimate.",
    },
    {
      q: "Does roof coating work on Fort Lauderdale's older tile and flat-deck homes?",
      a: "Yes. Fort Lauderdale's housing stock runs the full spectrum — 1950s flat-deck waterfront homes, 1970s barrel tile subdivisions, and newer concrete tile estates. Our SmartShield (RP2) system handles flat decks, clay tile, and concrete tile equally well. RoofShield (RP3) is especially effective on older roofs with field-space gaps and open ridge caps from decades of hurricane exposure.",
    },
    {
      q: "Will my Fort Lauderdale HOA approve a roof coating project?",
      a: "Most Fort Lauderdale HOAs approve roof restoration because it is a surface treatment — not a structural change. Our SmartShield (RP2) system offers 3,000+ colors produced with BASF Cool Pigment Technology, including exact matches to common HOA palettes. We supply a product specification sheet and manufacturer documentation on request.",
    },
  ],
  "hollywood": [
    {
      q: "Do Hollywood, FL homes typically need tile coating or full replacement?",
      a: "Most Hollywood homes built between 1970 and 2000 have barrel or flat cement tile that is structurally sound but showing UV fading, algae staining, and hairline cracking — ideal candidates for restoration rather than replacement. FungalShield (RP1) clears algae and staining; SmartShield (RP2) adds full waterproofing and a color refresh good for 10–15 years.",
    },
    {
      q: "What is the average roof coating price in Hollywood, FL?",
      a: "Hollywood roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials and typically run 60–70% less than replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free onsite estimate.",
    },
    {
      q: "How quickly can you start a Hollywood, FL roof coating project?",
      a: "After a free onsite assessment we typically schedule application within 7–14 business days, depending on crew availability and weather. Most residential projects in Hollywood are completed in one to two days. Call 954-210-9614 to get on the schedule.",
    },
  ],
  "pembroke-pines": [
    {
      q: "Does Pembroke Pines require a permit for roof coating?",
      a: "Most roof coating projects in Pembroke Pines do not require a building permit — a coating is a surface restoration, not a structural alteration. We recommend confirming with the Pembroke Pines Building & Zoning division if your HOA or insurer requires documentation. For RoofShield (RP3) installations we provide a full manufacturer inspection report and warranty paperwork.",
    },
    {
      q: "What roof coating system is best for Pembroke Pines tile homes?",
      a: "Pembroke Pines has a large stock of 1990s barrel and S-tile homes that are ideal for SmartShield (RP2). These roofs are structurally sound but typically show algae, UV fading, and cracked mortar — exactly what RP2 corrects, with a 10-year warranty. For homeowners focused on insurance documentation, RoofShield (RP3) adds TAS-106 hurricane wind-uplift certification — the highest wind resistance standard in the US.",
    },
    {
      q: "How much does roof coating cost in Pembroke Pines?",
      a: "Pembroke Pines roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials and typically run 60–70% less than replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free onsite estimate.",
    },
  ],
  "miramar": [
    {
      q: "Does roof coating qualify for a Miramar homeowners insurance discount?",
      a: "Yes. Our RoofShield (RP3) system carries TAS-106 Dade County Wind Uplift Certification — the highest hurricane resistance standard in the United States. Under Florida SB 2-D, insurers must offer credits for certified roof systems, and an Additional Roof Life Certification (ARLC) documenting the restored condition can help retain coverage on aging Miramar roofs.",
    },
    {
      q: "How much does roof coating cost in Miramar, FL?",
      a: "Miramar roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — Miramar's prevalent barrel tile on 5/12 pitch roofs is priced accordingly on the factory sheet. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free written estimate.",
    },
  ],
  "coral-springs": [
    {
      q: "What roof problems are most common in Coral Springs, FL?",
      a: "Coral Springs was heavily developed in the 1970s and 80s, so many flat-deck ranch homes and barrel tile roofs are now 30–45 years old. The most common issues we see are UV-bleached tile color, algae and fungal staining from Broward's humidity, open ridge caps, and hairline cracking in mortar joints. All of these are addressable with our elastomeric coating systems — no tear-off required.",
    },
    {
      q: "How much does roof coating cost in Coral Springs?",
      a: "Coral Springs roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials and typically run 60–70% less than replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free onsite estimate.",
    },
  ],
  "davie": [
    {
      q: "Is roof coating a good option for large Davie equestrian-area homes?",
      a: "Yes — Davie's large-lot equestrian properties often have tile roofs over 3,000 sq ft, where roof coating's economies of scale work strongly in your favor. Larger roofs see per-square-foot rates drop toward the lower end of our published ranges. Our crew is experienced with rural setbacks and working around equestrian facilities.",
    },
    {
      q: "How much does roof coating cost in Davie, FL?",
      a: "Davie roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch. Davie's mix of flat-deck ranch homes and barrel tile estates means totals vary widely — submit a quote request and we'll email the full Factory Price Sheet instantly.",
    },
  ],
  "plantation": [
    {
      q: "Do Plantation, FL HOAs allow roof coating color changes?",
      a: "Most Plantation HOAs allow roof restoration, and many approve color changes within their approved palette. Our SmartShield (RP2) system offers 3,000+ BASF Cool Pigment colors. We provide a written product spec sheet for HOA architectural review on request, and can color-match any approved tile sample.",
    },
    {
      q: "How much does roof coating cost in Plantation, FL?",
      a: "Plantation roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials and typically run 60–70% less than replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free onsite estimate.",
    },
  ],
  "sunrise": [
    {
      q: "What is the average roof coating cost in Sunrise, FL?",
      a: "Sunrise roof coating pricing depends on the system and roof type — all prices include labor and materials and typically run 60–70% less than the cost to re-roof. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly.",
    },
    {
      q: "Can roof coating reduce my energy bills in Sunrise, FL?",
      a: "Yes. Our SmartShield (RP2) and RoofShield (RP3) systems use BASF Cool Pigment Technology, which reflects solar infrared energy even in dark colors. Homeowners in Sunrise typically see attic temperatures drop 15–25°F on peak summer afternoons, reducing AC runtime and monthly energy costs.",
    },
  ],
  "weston": [
    {
      q: "Will my Weston HOA approve a roof coating color change?",
      a: "Weston's communities — Weston Hills, Savanna, The Ridges, and others — nearly all require architectural review board approval before roof work. Our SmartShield (RP2) system offers 3,000+ BASF Cool Pigment colors including exact matches to approved community palettes, and we prepare the full ARB package (product spec sheet, manufacturer color card, licensing and insurance proof) as part of every Weston quote.",
    },
    {
      q: "Can I get a dark roof color in Weston without a hotter house?",
      a: "Yes — this is Weston's most-requested upgrade. SmartShield's BASF Cool Pigment Technology reflects solar infrared energy even in deep charcoal and slate tones, so you get the modern dark-tile look without the attic heat penalty older dark coatings carried. Attic temperature drops of 15–25°F on peak afternoons are typical versus an aged, non-reflective surface.",
    },
    {
      q: "How much does roof coating cost in Weston, FL?",
      a: "Weston roof coating pricing depends on the system (SmartShield RP2 or RoofShield RP3), roof type, and pitch — Weston's barrel and S-tile estates are priced accordingly on the factory sheet, typically 60–70% less than re-roofing. Fill out our contact form for the full Factory Price Sheet, or call 954-210-9614 for a free written estimate.",
    },
  ],
  "hialeah": [
    {
      q: "Can you coat Hialeah's older flat roofs without a tear-off?",
      a: "Yes — that's most of our Hialeah work. The city's 1950s–70s CBS homes typically have flat or low-slope roofs with layers of old built-up tar and silver coat. Our elastomeric membrane bonds directly over those surfaces, seals every penetration, and turns the deck into one waterproof surface — no tear-off, no dumpster, usually finished in one to two days.",
    },
    {
      q: "¿Ofrecen servicio en español en Hialeah?",
      a: "Sí — hablamos español. Ofrecemos inspección gratuita, presupuesto por escrito y toda la documentación del seguro (incluida la certificación Additional Roof Life) en Hialeah y sus alrededores. Llámenos al 954-210-9614.",
    },
    {
      q: "How much does roof coating cost in Hialeah, FL?",
      a: "Hialeah roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3) and roof type. A typical Hialeah flat roof can be fully membraned for a fraction of what a tear-off would cost — all prices include labor and materials. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly.",
    },
  ],
  "miami-lakes": [
    {
      q: "Why do Miami Lakes roofs get so much algae and black streaking?",
      a: "Miami Lakes was master-planned around its namesake lakes, so nearly every roof sits close to water — keeping humidity at roof level high year-round. Water-facing slopes consistently carry the heaviest biological growth. Our FungalShield (RP1) treatment eliminates it, and SmartShield (RP2) adds a sealed, algae-resistant surface so it doesn't come back.",
    },
    {
      q: "Do Miami Lakes communities require approval for roof color changes?",
      a: "Several do — Royal Oaks and the gated lakefront sections run architectural review. We supply the product specification sheet, BASF color card, and licensing documentation for your board as standard, and can match any approved palette from 3,000+ Cool Pigment colors.",
    },
    {
      q: "How much does roof coating cost in Miami Lakes, FL?",
      a: "Miami Lakes roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), roof type, and pitch — the town's barrel and S-tile roofs are priced accordingly on the factory sheet. Free onsite estimate — call 954-210-9614 or fill out the form for the full Factory Price Sheet.",
    },
  ],
  "miami-gardens": [
    {
      q: "My insurance company says my Miami Gardens roof is too old. Can coating help?",
      a: "Often, yes. Miami Gardens' 1960s–70s homes draw age-based non-renewal letters even when the roof is structurally sound. Our coating systems restore and seal the roof, and an Additional Roof Life Certification documents the restored condition for your carrier — a fraction of the cost of the forced re-roof the letter implies. Bring the letter to your free inspection and we'll tell you honestly whether coating solves it for your roof.",
    },
    {
      q: "Do you coat the original built-up gravel roofs common in Miami Gardens?",
      a: "Yes. Neighborhoods like Norland, Bunche Park, and Scott Lake are full of original 1960s built-up roofs that have only ever had spot repairs. Our liquid-applied membrane bridges hairline cracking, seals drains and AC-stand penetrations, and its reflective surface noticeably drops attic temperatures on these low-slope designs.",
    },
    {
      q: "How much does roof coating cost in Miami Gardens, FL?",
      a: "Miami Gardens roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3) and roof type — including labor and materials. A typical flat roof is restored for 60–70% less than replacement. Fill out our contact form for the Factory Price Sheet, or call 954-210-9614 for a free written estimate.",
    },
  ],
  "pompano-beach": [
    {
      q: "Does salt air from the ocean damage tile roofs in Pompano Beach?",
      a: "Yes — Pompano Beach's coastal location means tile roofs are exposed to salt-laden air that accelerates efflorescence, mortar erosion, and tile fading. Our RoofShield (RP3) rubber membrane creates a sealed barrier that blocks salt penetration, while SmartShield (RP2) applies BASF-formulated pigments resistant to UV and salt fade. Coastal properties in Pompano Beach are among our most frequent restoration jobs.",
    },
    {
      q: "How much does roof coating cost in Pompano Beach?",
      a: "Pompano Beach roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), roof type, and pitch. Coastal and waterfront properties may have higher surface prep needs due to salt damage — all prep costs are quoted transparently before work begins. Fill out our contact form for the full Factory Price Sheet.",
    },
  ],
  "deerfield-beach": [
    {
      q: "How much does roof coating cost in Deerfield Beach, FL?",
      a: "Deerfield Beach roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials and typically run 60–70% less than replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free onsite estimate.",
    },
    {
      q: "Does roof coating help with Deerfield Beach hurricane insurance?",
      a: "Our RoofShield (RP3) system carries TAS-106 Dade County Uplift Certification, qualifying Deerfield Beach homeowners for Florida SB 2-D insurance credits and supporting Additional Roof Life Certification (ARLC) documentation. Ask about our manufacturer inspection report package during your free estimate.",
    },
  ],
  "coral-gables": [
    {
      q: "Will roof coating preserve the Mediterranean look of my Coral Gables home?",
      a: "Coral Gables has strict architectural design standards rooted in its Mediterranean Revival character. Our SmartShield (RP2) system restores deep terracotta, burnt sienna, and earth-tone colors without altering tile profile, and typically does not require a permit for restoration projects. We have completed numerous projects in Coral Gables and can supply references and an HOA specification package.",
    },
    {
      q: "Does roof coating affect property values in Coral Gables?",
      a: "A freshly coated, waterproofed tile roof with documented warranty coverage is a disclosed asset in any Coral Gables real estate transaction. RoofShield (RP3) comes with a manufacturer-backed lifetime warranty transferable to new owners — a strong selling point in Coral Gables' premium market where deferred maintenance is a significant negotiation factor.",
    },
    {
      q: "How much does roof coating cost in Coral Gables?",
      a: "Coral Gables roof coating pricing depends on the system (SmartShield RP2 or RoofShield RP3), roof type, and pitch — Coral Gables' prevalent Spanish barrel tile on pitched roofs is priced accordingly on the factory sheet. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly.",
    },
  ],
  "doral": [
    {
      q: "Is roof coating popular in Doral, FL?",
      a: "Yes — Doral's rapid growth in the 2000s and 2010s produced a large stock of flat-deck and cement tile homes now entering the 15–25 year range where restoration outperforms replacement. We serve Doral regularly for both residential tile restoration and commercial flat-deck waterproofing. Call 954-210-9614 for a same-week estimate.",
    },
    {
      q: "How much does roof coating cost in Doral, FL?",
      a: "Doral roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3) and roof type. Doral's mix of flat-deck commercial and residential tile makes us a frequent choice for HOA communities throughout the city — all prices include labor and materials. Fill out our contact form for the full Factory Price Sheet.",
    },
  ],
  "aventura": [
    {
      q: "Does salt air affect roofs in Aventura, FL?",
      a: "Aventura's coastal location exposes roofs to salt-laden air that degrades mortar, bleaches tile color, and accelerates fungal growth. Our SmartShield (RP2) and RoofShield (RP3) systems create a sealed membrane that blocks salt penetration and UV damage. We frequently service Aventura high-rise and townhome communities.",
    },
    {
      q: "How much does roof coating cost in Aventura?",
      a: "Aventura roof coating pricing depends on the system (SmartShield RP2 or RoofShield RP3) and roof type. Aventura's condo and townhome buildings may qualify for commercial volume pricing — contact us at 954-210-9614 to discuss your building's needs, or fill out the form for the Factory Price Sheet.",
    },
  ],
  "miami-beach": [
    {
      q: "Can roof coating protect Miami Beach homes from salt and humidity damage?",
      a: "Miami Beach's oceanfront climate is one of the most demanding in the US — high salt content, extreme UV, and year-round humidity. Our RoofShield (RP3) system creates a TAS-106 certified rubber membrane that seals out salt moisture, while our SmartShield (RP2) BASF pigments resist UV and salt fade. Both systems are designed specifically for South Florida coastal conditions.",
    },
    {
      q: "How much does roof coating cost in Miami Beach?",
      a: "Miami Beach roof coating pricing depends on the system (SmartShield RP2 or RoofShield RP3), roof type, and pitch. Coastal properties may have additional prep needs — all costs are quoted transparently before work begins. Call 954-210-9614 for a free onsite assessment or fill out the form for the Factory Price Sheet.",
    },
  ],
  "homestead": [
    {
      q: "Why is RoofShield (RP3) especially important in Homestead, FL?",
      a: "Homestead sits in the direct path of South Florida's hurricane corridor — the same track that brought Hurricane Andrew in 1992. Our RoofShield (RP3) system carries TAS-106 Dade County Uplift Certification, the highest wind resistance rating available for a coating system in the US. For Homestead homeowners, this certification supports Florida SB 2-D insurance credits and provides documented storm protection.",
    },
    {
      q: "How much does roof coating cost in Homestead, FL?",
      a: "Homestead roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), roof type, and pitch — all prices include labor and materials. Free onsite assessment — call 954-210-9614 or submit the form and the full Factory Price Sheet is emailed to you instantly.",
    },
  ],
  "boca-raton": [
    {
      q: "Do Boca Raton HOAs approve roof coating color changes?",
      a: "Boca Raton has some of South Florida's strictest HOA architectural review boards. Our SmartShield (RP2) system can match virtually any approved HOA tile color using BASF Cool Pigment Technology. We supply a written product specification sheet and manufacturer color card for your HOA's review. Many Boca Raton communities have approved our system after a single documentation submission.",
    },
    {
      q: "How much does roof coating cost in Boca Raton?",
      a: "Boca Raton roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), roof type, and pitch. Boca Raton's Spanish barrel tile and larger estate homes often have 3,000–5,000 sq ft roofs where our volume pricing applies. Fill out our contact form for the full Factory Price Sheet, or call 954-210-9614 for a free written estimate.",
    },
    {
      q: "What roof coating system is best for Boca Raton's HOA communities?",
      a: "SmartShield (RP2) is the go-to system for Boca Raton HOA communities — it provides full waterproofing, HOA-approvable color restoration, and a 10-year warranty, all without structural alteration that would trigger permit requirements. For homes with documented wind insurance concerns, RoofShield (RP3) adds TAS-106 hurricane certification.",
    },
  ],
  "west-palm-beach": [
    {
      q: "What roof coating systems do you offer in West Palm Beach?",
      a: "We offer all three Storm Shield Paint Systems in West Palm Beach: FungalShield (RP1, anti-algae), SmartShield (RP2, waterproofing + energy-reflective), and RoofShield (RP3, TAS-106 hurricane-rated rubber membrane). West Palm Beach's mix of older masonry homes and newer tile estates makes all three systems relevant — fill out our contact form and the full Factory Price Sheet is emailed to you instantly.",
    },
    {
      q: "How much does roof coating cost in West Palm Beach, FL?",
      a: "West Palm Beach roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly. Palm Beach County projects may include a small travel surcharge — call 954-210-9614 for a county-specific quote.",
    },
  ],
  "boynton-beach": [
    {
      q: "How much does roof coating cost in Boynton Beach, FL?",
      a: "Boynton Beach roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly. Palm Beach County projects may include a small travel surcharge — call 954-210-9614 for a county-specific quote.",
    },
    {
      q: "Is roof coating recommended for Boynton Beach's older tile roofs?",
      a: "Yes. Boynton Beach has a substantial stock of 1980s and 1990s barrel and flat cement tile homes — many now 30–40 years old — that are prime candidates for restoration rather than replacement. Our SmartShield (RP2) system seals hairline cracks, eliminates algae, refreshes color, and extends roof life by 10–15 years at a fraction of tear-off cost.",
    },
  ],
  "delray-beach": [
    {
      q: "How much does roof coating cost in Delray Beach, FL?",
      a: "Delray Beach roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly. Palm Beach County projects may include a small travel surcharge — call 954-210-9614 for a county-specific quote.",
    },
    {
      q: "What roof problems are common in Delray Beach?",
      a: "Delray Beach's mix of beach proximity and inland communities means we see everything from salt-accelerated tile fading and efflorescence on coastal streets to algae-heavy shading on tree-lined interior lots. Our FungalShield (RP1) eliminates biological growth; SmartShield (RP2) seals and waterproofs the tile surface; RoofShield (RP3) adds a full rubber membrane for maximum durability.",
    },
  ],
};

export function getCityFaqs(
  citySlug: string,
  city: string,
  county: string,
): CityFaq[] {
  const overrides = cityFaqOverrides[citySlug];
  if (overrides && overrides.length > 0) return overrides;

  return [
    {
      q: `How much does roof coating cost in ${city}, FL?`,
      a: `${city} roof coating pricing depends on the system (FungalShield RP1, SmartShield RP2, or RoofShield RP3), your roof type, and pitch — all prices include labor and materials and typically run 60–70% less than replacement. Fill out our contact form and the full Factory Price Sheet is emailed to you instantly, or call 954-210-9614 for a free onsite estimate.`,
    },
    {
      q: `Do you serve ${city}, ${county}?`,
      a: `Yes — The Roof Store has served ${city} and all of ${county} since 1994. We are A+ BBB Accredited and factory-authorized to apply all three Storm Shield Paint Systems: FungalShield (RP1), SmartShield (RP2), and RoofShield (RP3).`,
    },
    {
      q: `How do I get a roof coating estimate in ${city}?`,
      a: `Call us at 954-210-9614 or submit the quote form on this page. We schedule a free onsite assessment — no charge, no obligation — and provide a written estimate the same day based on your roof's size, tile type, pitch, and surface condition.`,
    },
  ];
}
