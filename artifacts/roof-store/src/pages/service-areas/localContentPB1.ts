/**
 * Deep-localized city page content — Palm Beach County, batch 1.
 *
 * Same structure and quality bar as the "pembroke-pines" exemplar in
 * localContent.ts. One entry per city keyed by slug. Every entry is
 * genuinely distinct — real neighborhoods, housing eras, roof types,
 * coastal exposure, HOA/condo governance, and permit realities.
 *
 * Brand rules enforced: no dollar figures anywhere (pricing lives only on
 * the Factory Price Sheet emailed via the contact form); RoofProtect is one
 * word (RoofProtect Products = the in-house factory); FungalShield (RP1),
 * SmartShield (RP2), and RoofShield (RP3) are SYSTEMS sold by The Roof Store.
 */

import type { CityLocalContent } from "./localContent";

export const entries: Record<string, CityLocalContent> = {
  atlantis: {
    intro: [
      "Atlantis is a small, gated municipality wrapped around the Atlantis Country Club golf course, and its roofs reflect its origins as a planned 1970s–80s community: concrete barrel tile and flat cement-tile on generous single-story homes, most now well past the 30-year mark. The tile itself is almost always sound — what's failed is the surface, and that's precisely the work our systems are built for.",
      "Because Atlantis sits inland just west of JFK Medical Center, its roofs get the full brunt of South Florida humidity without the constant salt scour of the coast. The result is heavy black algae streaking on north-facing planes and chalked, faded fields on the sun-baked south slopes. A pressure clean followed by our SmartShield (RP2) elastomeric system restores color, kills the algae at the root, and reseals the tile for another decade-plus.",
      "The Roof Store is a short run east on Lake Worth Road from our Davie shop on University Drive, so Atlantis projects schedule quickly — and because this is a tightly governed city, we handle the color documentation the country club community expects before a single square foot of coating goes down.",
    ],
    roofLandscape: {
      heading: "The Atlantis roof landscape",
      paragraphs: [
        "The dominant roof in Atlantis is 1970s–80s concrete barrel and flat-profile cement tile on low 3/12–4/12 pitches, typical of the golf-course estate homes lining the fairways. Many of these roofs carry original tile that pre-dates modern underlayment expectations, so during inspection we look closely at ridge-cap mortar and cracked field tiles before recommending a system — a coating is only as good as the deck beneath it.",
        "Homes along the water hazards and the club's mature oak canopy sit in near-constant shade, which accelerates fungal growth far beyond what you'd see on an open lot. FungalShield (RP1) is the entry-level treatment for those algae-heavy planes, but most Atlantis homeowners step up to SmartShield (RP2) so cleaning, color restoration, and waterproofing all happen in one mobilization.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Atlantis",
      paragraphs: [
        "Roof coating is a surface restoration rather than a structural alteration, so Atlantis projects usually don't require a building permit — but we always recommend confirming with the city if your insurer asks for documentation. What matters far more here is the community's appearance standard: as a golf-course municipality, Atlantis expects roof colors that stay within an approved palette, and we supply a written spec sheet and manufacturer color card so your approval is straightforward.",
        "If Citizens or a private carrier has flagged your Atlantis roof on age alone, our coating systems paired with an Additional Roof Life Certification give you a documented path to keeping coverage — satisfying Florida carriers' roof-age mandates without the forced re-roof the insurer's letter implies you need.",
      ],
    },
    neighborhoods: [
      { name: "Atlantis Country Club estates", note: "1970s–80s barrel tile on fairway lots — heavy shade, strong algae exposure" },
      { name: "Atlantis Boulevard corridor", note: "single-story tile homes now past year 30, prime restoration window" },
      { name: "The Fountains-adjacent streets", note: "flat cement-tile roofs where full membrane resealing applies" },
      { name: "Lakeside homes off Country Club Drive", note: "waterfront planes with persistent north-facing streaking" },
      { name: "Interior cul-de-sac homes", note: "chalked, sun-faded south slopes ideal for color restoration" },
    ],
  },

  "belle-glade": {
    intro: [
      "Belle Glade sits on the southeastern rim of Lake Okeechobee, and it's a very different roofing environment from the coastal cities we serve. This is an agricultural community — the muck farms and sugar fields that ring the town shape everything, including the dust, humidity, and organic load that settle on roofs here. The housing stock leans toward mid-century CBS homes with low-slope and flat roofs, plus a good deal of light-gauge metal.",
      "Because Belle Glade is inland on the lake, roofs take relentless sun and moisture but very little salt. That combination is hard on flat built-up decks in particular: decades of layered tar go brittle and split, and standing water finds every seam. Our elastomeric membrane bonds directly over those aged surfaces and turns a leaking deck into a single sealed, reflective roof — no tear-off required.",
      "We drive out to the Glades regularly from our Davie storefront, and homeowners here appreciate that restoration keeps a sound roof in service for years longer. The Factory Price Sheet is emailed to you instantly when you fill out the contact form, so you can see exactly where a coating lands compared to replacement.",
    ],
    roofLandscape: {
      heading: "The Belle Glade roof landscape",
      paragraphs: [
        "The most common roof in Belle Glade is a low-slope or flat CBS home from the 1950s–70s, often with an old built-up tar or modified-bitumen deck that's been patched more than once. On these, our reflective elastomeric membrane is the workhorse: it seals the field, bridges hairline cracks, and drops attic temperatures dramatically under the Glades sun. Where metal roofing is present, we clean, prime, and coat to stop rust progression and re-seal fastener lines.",
        "Belle Glade's agricultural setting means roofs accumulate organic dust and biological growth faster than most inland cities, so a thorough pressure clean is essential before any coating. FungalShield (RP1) handles algae-heavy planes; homeowners with older flat decks typically choose the full SmartShield (RP2) waterproofing approach for the seam sealing it includes.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Belle Glade",
      paragraphs: [
        "Surface restoration generally doesn't trigger a building permit in Belle Glade because no structural work is performed, though we recommend confirming with the city's building office if your insurer wants documentation. HOA governance is light here compared with the gated coastal cities, so most projects move straight from inspection to scheduling without an architectural review step.",
        "Insurance pressure reaches the Glades too. If a carrier has questioned your roof's age, our coating systems combined with an Additional Roof Life Certification provide the documentation Florida insurers require to keep a sound roof covered — avoiding a forced replacement on a deck that still has years of service left in it.",
      ],
    },
    neighborhoods: [
      { name: "Downtown Belle Glade", note: "1950s–70s CBS homes with flat built-up decks needing membrane resealing" },
      { name: "Torry Island / lakeside", note: "high-humidity waterfront exposure and heavy organic growth" },
      { name: "SW residential district", note: "low-slope roofs where reflective coating cuts attic heat sharply" },
      { name: "Agricultural-edge homesteads", note: "metal roofs — clean, prime, and coat to arrest rust and seal fasteners" },
      { name: "Central neighborhood streets", note: "older tar decks patched repeatedly, ideal for a single sealed membrane" },
    ],
  },

  "boca-raton": {
    intro: [
      "Boca Raton is one of the largest and most architecturally distinct markets we serve, and its roofs run the full range: signature Mediterranean-revival barrel tile in the older east-side estates, uniform S-tile across the 1980s–90s gated communities west of I-95, and sprawling flat and low-slope decks on the mid-century modern homes near the coast. Boca's Addison Mizner design heritage means clay and concrete tile is everywhere — and it's exactly the roof restoration serves best.",
      "The city's proximity to the Atlantic drives a specific pattern of wear: salt-laden air and intense UV chalk the tile field and etch the color out of once-rich terracotta and Mediterranean blends, while black algae streaking runs heavy on shaded, humid interior planes. A pressure clean plus our SmartShield (RP2) system restores the estate-grade appearance Boca's boards insist on and reseals the tile for another decade and beyond.",
      "Boca is also one of the most HOA- and condo-governed cities in Palm Beach County, so documentation is central to every project. We prepare the color spec and manufacturer card your association needs, and the Factory Price Sheet is emailed to you the moment you complete the contact form.",
    ],
    roofLandscape: {
      heading: "The Boca Raton roof landscape",
      paragraphs: [
        "East Boca — the estate districts around the Old Floresta and coastal neighborhoods — carries the oldest and most prestigious tile: barrel and Mediterranean-profile roofs on steeper pitches where color restoration and mortar work go hand in hand. West of I-95, the master-planned communities built through the 1980s and 90s are almost uniformly concrete S-tile, and those roofs are now hitting the 25–35 year window where restoration decisively beats replacement.",
        "The salt exposure closer to the coast accelerates chalking and biological growth, so a thorough clean is non-negotiable here. On the many flat and low-slope mid-century roofs near the beach, our elastomeric membrane bonds over aged built-up surfaces to create a reflective, watertight deck. RoofProtect Products manufactures the coating materials used across all three systems, so the Boca palette we can color-match runs to thousands of options.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Boca Raton",
      paragraphs: [
        "Coating is a surface restoration and typically does not require a Boca Raton building permit, but the city and its many associations take appearance seriously. Nearly every gated community west of I-95 and every coastal condo board requires architectural review and color approval before roof work begins. We supply the written product specification, manufacturer color card, and licensing documentation your board expects, and we can color-match your community's approved palette exactly.",
        "For insurance-driven work — common on Boca's 25-plus-year-old tile — our systems paired with an Additional Roof Life Certification satisfy Citizens and private-carrier roof-age mandates, giving Boca homeowners a documented path to keeping coverage instead of accepting a forced re-roof.",
      ],
    },
    neighborhoods: [
      { name: "Old Floresta", note: "historic Mediterranean-revival tile — color restoration with ridge-cap mortar work" },
      { name: "Boca West", note: "large gated golf community, strict ARB palettes — full spec package provided" },
      { name: "The Sanctuary / coastal estates", note: "salt-exposed barrel tile with heavy chalking on ocean-facing planes" },
      { name: "Boca Del Mar", note: "1980s S-tile now firmly in the restoration window" },
      { name: "Downtown / mid-century modern near the beach", note: "flat and low-slope decks — reflective membrane over old built-up roofing" },
      { name: "Royal Palm Yacht & Country Club", note: "estate roofs where full documentation and color matching are essential" },
    ],
  },

  "boynton-beach": {
    intro: [
      "Boynton Beach spans from the Intracoastal out to the western 55-plus communities, and its roofs are as varied as its geography. The barrier-island and near-coastal neighborhoods carry older barrel tile and flat mid-century decks under constant salt exposure, while the vast western developments — Aberdeen, Hunters Run, Indian Spring — are dominated by 1980s–90s S-tile roofs that have all reached the restoration window at once.",
      "Boynton's 55-plus communities are a huge part of what we do here. These are exactly the homeowners for whom restoration makes the most sense: a structurally sound tile roof that's simply faded and streaked, on a home where a full replacement is a disruptive expense that a coating avoids entirely. A pressure clean plus SmartShield (RP2) restores the community-approved color and reseals the field for years.",
        "Being a straight shot up from our Davie storefront, Boynton schedules fast — and because so many of its communities are condo- and HOA-governed, we build the color documentation into every quote. The Factory Price Sheet arrives by email the instant you submit the contact form.",
    ],
    roofLandscape: {
      heading: "The Boynton Beach roof landscape",
      paragraphs: [
        "West Boynton is overwhelmingly 1980s–90s concrete S-tile on 4/12–5/12 pitches, built across the huge planned communities off Jog and Hagen Ranch Roads. Because these neighborhoods went up in large phases, entire streets age in step — when one roof starts chalking and streaking, the rest of the block is close behind. That predictability makes proactive restoration especially cost-effective here.",
        "Closer to the Intracoastal and US-1, the stock shifts to older barrel tile and flat CBS homes carrying real salt exposure — the ocean air etches color and drives corrosion into any exposed metal flashing. On those flat decks our elastomeric membrane creates a single sealed, reflective surface, while FungalShield (RP1) and SmartShield (RP2) handle the tile fields depending on how far the biological growth has progressed.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Boynton Beach",
      paragraphs: [
        "Roof coating in Boynton Beach generally does not require a building permit since it's a surface restoration, though we recommend confirming with the city if your carrier requests it. Where Boynton homeowners spend their energy is condo and HOA approval: the western communities and the coastal condo associations nearly all require architectural review and roof-color sign-off. We provide the spec sheet, manufacturer color card, and documentation your board needs, matched to your community's approved palette.",
        "Insurance is a major driver in Boynton's older communities. Our systems combined with an Additional Roof Life Certification satisfy the roof-age requirements Citizens and Florida carriers impose, letting homeowners on 25-plus-year roofs keep coverage without the forced replacement the non-renewal letter threatens.",
      ],
    },
    neighborhoods: [
      { name: "Aberdeen", note: "large gated golf community, 1980s–90s S-tile in the prime restoration window" },
      { name: "Hunters Run", note: "condo and villa clusters — board color approval required, documentation supplied" },
      { name: "Indian Spring", note: "established western community with tile roofs now past year 25" },
      { name: "Leisureville / 55-plus villages", note: "sound roofs on homes where restoration beats disruptive replacement" },
      { name: "Coastal / Intracoastal neighborhoods", note: "salt-exposed barrel tile and flat decks with heavy chalking" },
      { name: "Chapel Hill", note: "older single-family tile with north-facing algae streaking" },
    ],
  },

  "briny-breezes": {
    intro: [
      "Briny Breezes is one of the most unusual municipalities in Florida — a mobile-home cooperative town wedged between the Atlantic and the Intracoastal on a narrow strip of A1A. That singular setting defines its roofing needs entirely: the community is built of manufactured and mobile homes with low-slope metal and membrane roofs, sitting directly in the salt spray of the ocean.",
      "There is no housing type more exposed to coastal wear than Briny Breezes. Salt air corrodes metal roof panels and fasteners, and the relentless sun bakes older membrane roofs until seams split. Our approach here centers on reflective elastomeric coatings that seal metal and membrane decks, arrest rust, and reflect the heat that otherwise turns these compact homes into ovens.",
      "Because Briny is a small, close-knit cooperative, word travels fast — a coating that performs on one home leads to the next. We handle the whole town's roof types, and the Factory Price Sheet is emailed to you instantly when you complete the contact form so you can see exactly where restoration lands.",
    ],
    roofLandscape: {
      heading: "The Briny Breezes roof landscape",
      paragraphs: [
        "Almost every roof in Briny Breezes is low-slope metal or membrane over a manufactured or mobile home. On the metal roofs, salt-driven corrosion is the enemy: we clean and prime the panels, treat rust, seal every fastener line and lap seam, and finish with a reflective elastomeric coating that both waterproofs and dramatically cuts interior heat. On older membrane and rolled-roofing decks, our system bonds over the aged surface to re-seal splits and open seams without a tear-off.",
        "Because the community sits within feet of the ocean on both sides, salt load and UV are extreme, and biological growth thrives in the constant humidity. A thorough clean is essential before any coating, and the reflectivity of the finished system is a genuine comfort upgrade in homes that carry very little attic insulation.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Briny Breezes",
      paragraphs: [
        "As a cooperative town, Briny Breezes handles home improvements through its community organization, and roof coating — being a surface restoration rather than structural work — typically avoids the permit and re-roof process a full replacement would trigger. We recommend confirming any requirements with the town's cooperative office, and we provide written product documentation for the community's records.",
        "Coastal insurance is a constant concern in a town this exposed. Our coating systems paired with an Additional Roof Life Certification give Briny homeowners documentation that satisfies Florida carriers' roof-age requirements — a meaningful advantage where full replacement of a manufactured-home roof is both costly and disruptive.",
      ],
    },
    neighborhoods: [
      { name: "Ocean-side rows (east of A1A)", note: "maximum salt spray — metal roofs need rust treatment and sealed fasteners" },
      { name: "Intracoastal-side rows (west of A1A)", note: "membrane and rolled decks with UV-split seams to re-seal" },
      { name: "Central cooperative lots", note: "low-slope roofs where reflective coating cuts interior heat sharply" },
      { name: "Corner and end units", note: "highest wind and salt exposure, prioritized for full seam sealing" },
      { name: "Older membrane-roof homes", note: "aged rolled roofing sealed over without a tear-off" },
    ],
  },

  "cloud-lake": {
    intro: [
      "Cloud Lake is one of Palm Beach County's tiniest municipalities — a small residential enclave just west of West Palm Beach near the airport, only a handful of streets in size. Its modest scale means we know the housing here intimately: mostly mid-century CBS homes with a mix of low-slope, flat, and gable roofs, many carrying decades of layered surfacing that's overdue for restoration.",
      "Being inland and close to the airport, Cloud Lake roofs get steady sun and humidity without heavy salt, which favors the durable reflective coatings we specialize in. The most common calls involve flat and low-slope decks where old built-up roofing has gone brittle and started to leak at the seams — precisely where our elastomeric membrane shines, sealing the whole deck without a tear-off.",
      "Because Cloud Lake is so compact and close to our service base, projects here move quickly from free inspection to finished roof. The Factory Price Sheet is emailed to you the moment you submit the contact form, so there's no waiting to see how restoration compares to replacement.",
    ],
    roofLandscape: {
      heading: "The Cloud Lake roof landscape",
      paragraphs: [
        "Cloud Lake's housing is largely mid-century CBS construction, and that means a lot of low-slope and flat roofs with aged built-up or modified-bitumen surfaces. On these, our reflective elastomeric membrane is the natural fit: it bonds over the existing deck, bridges hairline cracks, seals failing laps, and cuts attic heat under the inland sun. Where older gable roofs carry tile or metal, we clean, prime, and coat to restore appearance and extend service life.",
        "The town's inland position keeps humidity high enough for black algae to take hold on shaded planes, so a thorough pressure clean precedes every coating. FungalShield (RP1) addresses growth-heavy surfaces; homeowners with aging flat decks generally choose the full SmartShield (RP2) system for its waterproofing and seam-sealing.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Cloud Lake",
      paragraphs: [
        "Surface restoration doesn't perform structural work, so Cloud Lake coating projects generally don't require a building permit — though we recommend confirming with the town if your insurer asks for documentation. With no dense HOA governance in this small municipality, projects here typically move straight from inspection to scheduling without an architectural review step.",
        "Insurance pressure reaches even the smallest towns. If a carrier has flagged your Cloud Lake roof on age, our coating systems combined with an Additional Roof Life Certification supply the documentation Florida insurers require to keep a sound roof covered, sparing you a forced replacement on a deck with years of life remaining.",
      ],
    },
    neighborhoods: [
      { name: "Davis Road corridor", note: "mid-century CBS homes with flat decks needing membrane resealing" },
      { name: "Central Cloud Lake streets", note: "low-slope roofs where reflective coating cuts inland attic heat" },
      { name: "Airport-adjacent homes", note: "steady sun and humidity, minimal salt — ideal coating conditions" },
      { name: "Older gable-roof properties", note: "tile and metal roofs cleaned, primed, and recoated for longevity" },
      { name: "Shaded interior lots", note: "north-facing planes with algae growth handled by FungalShield" },
    ],
  },

  "delray-beach": {
    intro: [
      "Delray Beach blends historic charm with dense coastal development, and its roofs run the gamut: 1920s–40s bungalows and Mediterranean homes in the historic districts near Atlantic Avenue, mid-century flat-roof homes east toward the ocean, and expansive 1980s–90s tile communities west of I-95. The city's design-conscious character means clay and concrete tile is prominent — and restoration is the way to preserve it.",
      "Delray's coastal exposure is a defining factor. Salt air and hard UV chalk the tile fields and etch color from historic terracotta and Mediterranean blends, while the humidity that hangs over the barrier island and its lush landscaping drives heavy black algae streaking. A pressure clean plus our SmartShield (RP2) system restores the appearance the historic districts and HOAs demand while resealing the tile for another decade-plus.",
      "With the city's tight architectural standards and abundant HOA and condo governance, documentation matters here, and we build it into every project. The Factory Price Sheet is emailed to you instantly when you fill out the contact form.",
    ],
    roofLandscape: {
      heading: "The Delray Beach roof landscape",
      paragraphs: [
        "East Delray — the historic districts and the neighborhoods stretching toward the ocean — carries the oldest roofs: barrel and Mediterranean tile on the older homes, plus flat and low-slope decks on mid-century construction. Salt exposure here is significant, chalking tile and corroding flashing, so a thorough clean is essential. On flat decks, our elastomeric membrane creates a reflective, watertight surface over aged built-up roofing.",
        "West of I-95, the planned communities off Atlantic Avenue and Military Trail are dominated by 1980s–90s concrete S-tile, now squarely in the 25–35 year restoration window. These roofs age street by street because they were built in phases, making proactive coating especially efficient. RoofProtect Products manufactures the coating materials used in all three systems, giving us thousands of colors to match Delray's varied palettes.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Delray Beach",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a Delray Beach building permit, but the city's historic-district guidelines and its many associations place a premium on appearance. Historic-area homes may have color and material expectations, and the western communities and coastal condos nearly all require architectural review. We supply the product spec, manufacturer color card, and licensing documentation each board or district requires, matched to the approved palette.",
        "Insurance drives a great deal of Delray work on older roofs. Our systems paired with an Additional Roof Life Certification satisfy Citizens and private-carrier roof-age mandates, giving homeowners on 25-plus-year roofs a documented route to keeping coverage rather than a forced re-roof.",
      ],
    },
    neighborhoods: [
      { name: "Historic Del-Ida Park & Marina districts", note: "1920s–40s tile and bungalow roofs — restoration preserves historic character" },
      { name: "Beachside / barrier island", note: "salt-exposed barrel tile and flat mid-century decks with heavy chalking" },
      { name: "Rainberry Bay / western communities", note: "1980s–90s S-tile in the prime restoration window" },
      { name: "Lake Ida area", note: "mix of older tile and flat roofs with north-facing algae streaking" },
      { name: "Downtown condos off Atlantic Ave", note: "flat-deck buildings — commercial reflective membrane coating available" },
      { name: "Tropic Isle", note: "waterfront homes with intense salt and UV exposure on tile fields" },
    ],
  },

  "glen-ridge": {
    intro: [
      "Glen Ridge is a small, quiet municipality tucked beside Greenacres and West Palm Beach — a handful of residential streets that most drivers pass without noticing. Its roofs are largely mid-century and later CBS homes with a mix of low-slope, flat, and gable profiles, many now decades into service and showing the fade and streaking that inland Palm Beach humidity produces.",
      "Being inland, Glen Ridge roofs face heavy sun and moisture but little salt, a combination that suits our reflective coating systems perfectly. The typical project involves either a chalked, algae-streaked tile field or an aging flat deck where old built-up roofing has begun to split at the seams. A pressure clean plus SmartShield (RP2) addresses both — restoring color and resealing the surface for years.",
      "Because the town is compact and close to our service area, Glen Ridge jobs schedule quickly and finish fast. The Factory Price Sheet is emailed to you the instant you submit the contact form, so you'll see immediately how restoration compares to a full replacement.",
    ],
    roofLandscape: {
      heading: "The Glen Ridge roof landscape",
      paragraphs: [
        "Glen Ridge's housing stock is mid-century CBS construction with a mix of tile and flat roofing. The tile fields — mostly older concrete profiles on low pitches — respond well to cleaning and color restoration, while the flat and low-slope decks call for our elastomeric membrane to seal aged built-up surfaces, bridge hairline cracks, and reflect the inland sun that otherwise heats these homes hard.",
        "The town's inland humidity keeps algae active on shaded planes, so every project begins with a thorough pressure clean. FungalShield (RP1) is the entry-level fix for growth-heavy surfaces; most homeowners with older roofs move up to SmartShield (RP2) so cleaning, color, and waterproofing all happen in one visit.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Glen Ridge",
      paragraphs: [
        "Roof coating is a surface restoration rather than structural work, so Glen Ridge projects generally don't require a building permit — we recommend confirming with the town if your insurer wants documentation. HOA governance is minimal in this small municipality, so most projects move directly from inspection to scheduling.",
        "Insurance concerns apply here as everywhere in Florida. If a carrier has questioned your roof's age, our systems combined with an Additional Roof Life Certification supply the documentation needed to keep a sound Glen Ridge roof covered, avoiding a forced re-roof on a deck that still has real service life left.",
      ],
    },
    neighborhoods: [
      { name: "Central Glen Ridge streets", note: "mid-century CBS tile and flat roofs in the restoration window" },
      { name: "Homes along the town's main residential lanes", note: "low-slope decks needing reflective membrane resealing" },
      { name: "Shaded interior lots", note: "north-facing planes with persistent algae streaking" },
      { name: "Older gable-roof properties", note: "concrete tile fields cleaned and color-restored" },
      { name: "Border streets near Greenacres", note: "aging flat decks where old built-up roofing has split at seams" },
    ],
  },

  golfview: {
    intro: [
      "Golfview is among the smallest incorporated towns in Palm Beach County — a tiny residential pocket adjacent to Palm Beach International Airport with only a few homes. Its scale makes it one of the most personal service areas we cover: essentially every roof is a known quantity, mostly mid-century CBS homes with low-slope and flat profiles that have carried their surfacing for decades.",
      "Because Golfview sits inland right by the airport, its roofs face constant sun and humidity with minimal salt exposure — conditions that favor durable reflective coatings. The most common need here is on aging flat decks where old built-up roofing has grown brittle and begun to leak, exactly the failure our elastomeric membrane is designed to reverse without a tear-off.",
      "In a town this size, a single well-performing roof is a strong reference, and we take that seriously. The Factory Price Sheet is emailed to you instantly when you fill out the contact form, so you can weigh restoration against replacement right away.",
    ],
    roofLandscape: {
      heading: "The Golfview roof landscape",
      paragraphs: [
        "Golfview's homes are predominantly mid-century CBS with flat and low-slope roofs, many carrying aged built-up or modified-bitumen surfaces. Our reflective elastomeric membrane is the ideal match: it bonds over the existing deck, seals failing seams and hairline cracks, and cuts the attic heat that the airport-adjacent sun drives into these homes. Where tile or metal is present, we clean, prime, and coat to restore appearance and extend service life.",
        "The inland location keeps humidity high enough for algae to establish on shaded planes, so a full pressure clean precedes any coating. FungalShield (RP1) handles growth-heavy surfaces, while older flat decks call for the complete SmartShield (RP2) waterproofing approach.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Golfview",
      paragraphs: [
        "Because coating performs no structural work, Golfview projects generally don't require a building permit — we recommend confirming with the town if your insurer requests documentation. With no dense HOA governance in a town this small, projects move straight from inspection to scheduling.",
        "Insurance pressure is universal in Florida, even in the smallest municipalities. If a carrier has flagged your Golfview roof's age, our coating systems paired with an Additional Roof Life Certification provide the documentation insurers require to keep a sound roof covered rather than forcing a replacement.",
      ],
    },
    neighborhoods: [
      { name: "Golfview town center", note: "mid-century CBS homes with flat decks needing membrane resealing" },
      { name: "Airport-adjacent lots", note: "steady sun and humidity, minimal salt — favorable coating conditions" },
      { name: "Low-slope roof homes", note: "reflective coating cuts attic heat significantly" },
      { name: "Older tile-roof properties", note: "concrete fields cleaned and color-restored" },
      { name: "Shaded interior parcels", note: "north-facing planes treated for algae before coating" },
    ],
  },

  greenacres: {
    intro: [
      "Greenacres is a large, established residential city west of Lake Worth Beach, and its roofs reflect steady growth from the 1970s through the 2000s. The housing runs from older single-family CBS homes with flat and low-slope roofs in the eastern sections to sprawling deed-restricted and HOA communities of 1980s–90s S-tile and barrel tile further west — a huge volume of roofs now in the prime restoration window.",
      "Greenacres is heavy on 55-plus and deed-restricted communities, which makes it one of our most natural markets: these are homeowners with structurally sound roofs that have simply faded and streaked, where a coating restores the community-approved appearance without the cost and disruption of a tear-off. A pressure clean plus SmartShield (RP2) is the standard solution — clean, seal, and recolor in one project.",
      "Sitting just west of our regular Lake Worth Road corridor, Greenacres schedules quickly, and because so many of its communities require color approval, we prepare the documentation up front. The Factory Price Sheet is emailed to you the moment you complete the contact form.",
    ],
    roofLandscape: {
      heading: "The Greenacres roof landscape",
      paragraphs: [
        "West Greenacres is dominated by 1980s–90s concrete S-tile and barrel tile on the deed-restricted and gated communities off Jog and Melaleuca — roofs now 25–35 years old and squarely in the restoration window. Built in large phases, these neighborhoods age street by street, so proactive coating is highly efficient here. East Greenacres carries older single-family CBS homes with more flat and low-slope roofing that calls for our elastomeric membrane.",
        "Greenacres' inland humidity, combined with the mature landscaping and canals threading through many communities, keeps algae active — black streaking on north-facing planes is one of the most common triggers for a call. FungalShield (RP1) treats those planes; SmartShield (RP2) is the full-service choice most homeowners make for the color restoration and waterproofing it bundles in.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Greenacres",
      paragraphs: [
        "Surface restoration generally doesn't require a Greenacres building permit since no structural work is involved, though we recommend confirming with the city if your carrier asks. Where Greenacres homeowners focus is community approval: the deed-restricted and HOA communities nearly all require architectural review and roof-color sign-off. We supply the product spec, manufacturer color card, and documentation your board needs, matched to your community's approved palette from thousands of colors.",
        "Insurance is a major driver in Greenacres' older communities. Our systems paired with an Additional Roof Life Certification satisfy Citizens and Florida-carrier roof-age mandates, giving homeowners on 25-plus-year roofs a documented path to keeping coverage rather than a forced replacement.",
      ],
    },
    neighborhoods: [
      { name: "River Bridge", note: "large gated community, 1980s–90s tile in the prime restoration window" },
      { name: "Pine Ridge / deed-restricted villages", note: "55-plus homes where restoration beats disruptive replacement" },
      { name: "Original Greenacres (east)", note: "older CBS homes with flat and low-slope decks for membrane coating" },
      { name: "Fairways / golf-community sections", note: "estate tile roofs with ARB color approval — documentation supplied" },
      { name: "Canal-side neighborhoods", note: "high-humidity lots with heavy north-facing algae streaking" },
      { name: "Villa and townhome clusters", note: "board color approval required, matched to community palette" },
    ],
  },

  "gulf-stream": {
    intro: [
      "Gulf Stream is a small, affluent oceanfront town between Delray Beach and Boynton Beach, and it is one of the most exacting places we work. Its estate homes — many in Gulf Stream's distinctive Mediterranean and British West Indies styles — carry high-end clay and concrete tile roofs directly in the path of Atlantic salt spray, under design and appearance standards that leave no room for anything less than a flawless restoration.",
      "The coastal exposure here is severe. Salt-laden air chalks tile fields, etches color from premium terracotta and Mediterranean blends, and corrodes flashing and fasteners, while the humidity encourages algae on shaded estate planes. Our SmartShield (RP2) system, following a meticulous pressure clean, restores the estate-grade color and finish these homes require and reseals the tile against continued coastal wear.",
      "Given the town's strict architectural review, documentation is central to every Gulf Stream project — we prepare the color spec and manufacturer card the town expects. The Factory Price Sheet is emailed to you instantly when you complete the contact form.",
    ],
    roofLandscape: {
      heading: "The Gulf Stream roof landscape",
      paragraphs: [
        "Gulf Stream's roofs are overwhelmingly high-end clay and concrete tile — barrel and Mediterranean profiles on steeper pitches, plus flat and low-slope sections on the more modern estate homes. The premium tile is almost always structurally sound; what fails first under coastal exposure is the surface, making color restoration and careful mortar work the heart of the job. On flat estate decks, our elastomeric membrane provides a reflective, watertight surface.",
        "Direct ocean exposure makes salt and UV the dominant forces here, so an exacting clean precedes every coating. RoofProtect Products manufactures the coating materials used across all three systems, giving us thousands of colors to match Gulf Stream's refined and often town-guided palettes precisely.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Gulf Stream",
      paragraphs: [
        "Coating is a surface restoration and typically does not require a Gulf Stream building permit, but the town enforces some of the most rigorous architectural review standards in Palm Beach County. Roof color and finish are closely governed, so we prepare a complete package — product specification, manufacturer color card, and licensing documentation — matched to the town's approved standards before any work begins.",
        "Coastal insurance is a real pressure even on estate homes. Our systems paired with an Additional Roof Life Certification satisfy Citizens and private-carrier roof-age requirements, giving Gulf Stream homeowners a documented path to keeping coverage without a forced re-roof on premium tile that remains structurally sound.",
      ],
    },
    neighborhoods: [
      { name: "Oceanfront estates (east of A1A)", note: "maximum salt exposure — premium tile with heavy chalking and etched color" },
      { name: "Place Au Soleil", note: "waterfront community with barrel tile and flat sections needing full restoration" },
      { name: "Gulf Stream Golf Club area", note: "estate roofs under strict town color review — full documentation supplied" },
      { name: "Core village homes", note: "Mediterranean-style tile with ridge-cap mortar work before coating" },
      { name: "Intracoastal-side estates", note: "high-humidity planes with algae growth and corroding flashing" },
    ],
  },

  haverhill: {
    intro: [
      "Haverhill is a small residential town along its namesake road in central Palm Beach County, sitting inland between West Palm Beach and the western suburbs. Its roofs are largely mid-century and later CBS homes with a mix of tile, flat, and low-slope profiles, many of which have carried their original surfacing well past the point where restoration makes clear sense.",
      "Because Haverhill is inland, its roofs endure heavy sun and humidity but little salt — ideal conditions for the durable reflective coating systems we specialize in. The typical Haverhill project is either a faded, algae-streaked tile field or an aging flat deck where old built-up roofing has begun to split. A pressure clean plus SmartShield (RP2) restores color and reseals the surface for years to come.",
      "Compact and centrally located, Haverhill schedules quickly from our service base. The Factory Price Sheet is emailed to you the instant you submit the contact form, so you can compare restoration to replacement without delay.",
    ],
    roofLandscape: {
      heading: "The Haverhill roof landscape",
      paragraphs: [
        "Haverhill's housing is predominantly mid-century CBS construction with a mix of concrete tile and flat roofing. The tile fields respond well to cleaning and color restoration, while the flat and low-slope decks call for our elastomeric membrane to seal aged built-up surfaces, bridge cracks, and reflect the inland sun that heats these homes through the long summer.",
        "The town's inland humidity keeps algae active on shaded planes, so a thorough pressure clean starts every job. FungalShield (RP1) is the entry-level treatment for growth-heavy surfaces; most homeowners with older roofs choose SmartShield (RP2) so cleaning, color, and waterproofing happen together.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Haverhill",
      paragraphs: [
        "Roof coating is a surface restoration and generally doesn't require a Haverhill building permit, though we recommend confirming with the town if your insurer wants documentation. HOA governance is light in this small town, so most projects move directly from inspection to scheduling without an architectural review step.",
        "Insurance concerns reach Haverhill like everywhere in Florida. If a carrier has flagged your roof's age, our systems combined with an Additional Roof Life Certification provide the documentation insurers require to keep a sound roof covered, avoiding a forced re-roof on a deck with real service life remaining.",
      ],
    },
    neighborhoods: [
      { name: "Haverhill Road corridor", note: "mid-century CBS homes with tile and flat roofs in the restoration window" },
      { name: "Central Haverhill streets", note: "low-slope decks needing reflective membrane resealing" },
      { name: "Shaded interior lots", note: "north-facing planes with algae streaking treated before coating" },
      { name: "Older gable-roof homes", note: "concrete tile fields cleaned and color-restored" },
      { name: "Border neighborhoods near West Palm", note: "aging flat decks where old built-up roofing has split at seams" },
    ],
  },

  "highland-beach": {
    intro: [
      "Highland Beach is a narrow oceanfront town of high-rise condominiums and luxury single-family estates strung along A1A between Boca Raton and Delray Beach. Its roofing profile is dominated by two things: the flat and low-slope decks of its many condo towers, and the premium tile roofs of its beachfront estates — all sitting directly in the salt spray of the Atlantic.",
      "There's no more demanding coastal environment. Salt air corrodes flashing and fasteners, chalks tile fields, and drives biological growth in the constant humidity, while the flat condo decks endure relentless UV that splits aging membrane seams. Our reflective elastomeric membrane seals and protects those large flat decks, and SmartShield (RP2) restores the estate tile — both after a meticulous clean.",
      "Condo-board and HOA governance defines nearly every project in Highland Beach, so we build the documentation into each quote. The Factory Price Sheet is emailed to you instantly when you fill out the contact form, giving boards and owners a clear picture right away.",
    ],
    roofLandscape: {
      heading: "The Highland Beach roof landscape",
      paragraphs: [
        "The bulk of Highland Beach's roof area sits atop condominium towers — large flat and low-slope decks where our reflective elastomeric membrane is the workhorse, bonding over aged built-up and modified-bitumen surfaces to create a single sealed, heat-reflecting roof without a tear-off. These commercial-scale coatings are exactly the kind of project our systems are built for.",
        "The single-family estates carry premium barrel and Mediterranean tile under direct ocean exposure, where salt and UV chalk the field and etch the color. On these, careful cleaning, color restoration, and ridge-cap mortar work precede the SmartShield (RP2) system. RoofProtect Products manufactures the coating materials used across all three systems, so color matching to a board-approved palette is straightforward.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Highland Beach",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a Highland Beach building permit, but condo boards and the town's estate associations govern appearance closely. Board approval for roof color and system is standard, so we prepare the product specification, manufacturer color card, and licensing documentation each association requires before scheduling any work.",
        "Coastal insurance pressure is intense in a town this exposed. Our systems paired with an Additional Roof Life Certification satisfy Citizens and private-carrier roof-age mandates — a significant advantage for condo associations and estate owners facing the enormous cost of full re-roofs on structurally sound decks.",
      ],
    },
    neighborhoods: [
      { name: "A1A condominium towers", note: "large flat decks — commercial reflective membrane coating over aged built-up" },
      { name: "Oceanfront single-family estates", note: "premium salt-exposed tile with heavy chalking and etched color" },
      { name: "Intracoastal-side residences", note: "tile and flat sections with algae growth and corroding flashing" },
      { name: "Bel Lido Isle", note: "waterfront homes needing full restoration under coastal exposure" },
      { name: "Mid-town condo communities", note: "board color approval required, matched to approved palette" },
    ],
  },

  hypoluxo: {
    intro: [
      "Hypoluxo is a small town straddling the Intracoastal near Lantana and Boynton Beach, with a mix of mainland single-family homes and island communities along the water. That split gives it two roofing realities: inland homes with tile and flat roofs facing steady humidity, and waterfront properties on Hypoluxo Island contending with direct salt exposure off the Intracoastal.",
      "The town's housing spans mid-century CBS homes through more recent construction, with a good deal of older barrel tile and flat decks that have reached the restoration window. Salt on the island side chalks tile and corrodes flashing, while inland humidity drives algae streaking — both problems our systems reverse. A pressure clean plus SmartShield (RP2) restores color and reseals the surface across either environment.",
      "Sitting right along our Lake Worth-to-Boynton corridor, Hypoluxo schedules quickly. The Factory Price Sheet is emailed to you the moment you submit the contact form, so you can see how restoration compares to a full replacement without waiting.",
    ],
    roofLandscape: {
      heading: "The Hypoluxo roof landscape",
      paragraphs: [
        "Mainland Hypoluxo carries mid-century and later CBS homes with concrete tile and flat roofing. The tile fields clean up and recolor well, while the flat and low-slope decks call for our elastomeric membrane to seal aged built-up surfaces and reflect the sun. On Hypoluxo Island, the waterfront homes face genuine salt exposure — chalked tile, corroding flashing, and heavier maintenance demands that make a sealed, protective coating especially valuable.",
        "Humidity is high throughout the town given its position on the water, so algae is a persistent issue on shaded planes and a thorough pressure clean precedes every coating. FungalShield (RP1) treats growth-heavy surfaces, and SmartShield (RP2) is the full-service choice for combined cleaning, color restoration, and waterproofing.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Hypoluxo",
      paragraphs: [
        "Because coating performs no structural work, Hypoluxo projects generally don't require a building permit — we recommend confirming with the town if your insurer requests documentation. Where island and gated communities apply appearance standards, we supply the product spec and manufacturer color card needed for approval; mainland projects with lighter governance often move straight to scheduling.",
        "Insurance is a real concern, especially on the salt-exposed island side. Our systems paired with an Additional Roof Life Certification satisfy Citizens and Florida-carrier roof-age requirements, giving Hypoluxo homeowners a documented path to keeping coverage rather than a forced re-roof on a sound roof.",
      ],
    },
    neighborhoods: [
      { name: "Hypoluxo Island", note: "waterfront homes with direct salt exposure — chalked tile and corroding flashing" },
      { name: "Mainland single-family streets", note: "mid-century CBS tile and flat roofs in the restoration window" },
      { name: "Intracoastal-adjacent lots", note: "high-humidity planes with heavy algae streaking" },
      { name: "Older barrel-tile homes", note: "faded fields cleaned and color-restored" },
      { name: "Flat-deck properties near US-1", note: "aged built-up roofing sealed with reflective membrane" },
    ],
  },

  "juno-beach": {
    intro: [
      "Juno Beach is a compact oceanfront town in northern Palm Beach County, known for its beach, its pier, and its blend of condominium communities and single-family neighborhoods just off the Atlantic. Its roofs face the full coastal package — salt spray, hard UV, and humidity — across a mix of flat condo decks and tile-roofed homes built largely from the 1970s onward.",
      "The town's condominium communities account for a large share of its roof area, and those flat and low-slope decks are prime candidates for our reflective elastomeric membrane, which seals aging built-up surfaces and reflects the coastal sun. The single-family homes carry barrel and S-tile that salt has chalked and faded — restored beautifully by SmartShield (RP2) after a thorough clean.",
      "With so many condo boards and HOAs governing appearance here, documentation is part of every project. The Factory Price Sheet is emailed to you instantly when you complete the contact form, giving owners and boards a clear comparison to replacement right away.",
    ],
    roofLandscape: {
      heading: "The Juno Beach roof landscape",
      paragraphs: [
        "Juno Beach's condominium communities carry extensive flat and low-slope decks — the natural home for our reflective elastomeric membrane, which bonds over aged built-up and modified-bitumen surfaces to create a single sealed, heat-reflecting roof without a tear-off. These larger-scale coatings are exactly what our systems are engineered to do.",
        "The single-family neighborhoods off US-1 and near the ocean carry 1970s-onward barrel and concrete S-tile. Coastal salt and UV chalk these fields and drive color loss, while humidity encourages algae on shaded planes — so a careful clean precedes every coating. FungalShield (RP1) treats the growth-heavy surfaces; SmartShield (RP2) is the full-service restoration most homeowners choose.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Juno Beach",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a Juno Beach building permit, though we recommend confirming with the town if your carrier asks. Condo boards and HOAs here govern roof color and system closely, so we prepare the product specification, manufacturer color card, and licensing documentation each association requires and match your community's approved palette.",
        "Coastal insurance pressure is significant in Juno Beach. Our systems paired with an Additional Roof Life Certification satisfy Citizens and private-carrier roof-age mandates, giving condo associations and homeowners a documented route to keeping coverage instead of facing forced re-roofs on sound decks.",
      ],
    },
    neighborhoods: [
      { name: "Oceanfront condominium towers", note: "large flat decks — commercial reflective membrane over aged built-up roofing" },
      { name: "Juno Isles", note: "single-family barrel and S-tile with coastal chalking and fade" },
      { name: "Ocean Trail community", note: "condo and villa clusters — board color approval, documentation supplied" },
      { name: "Neighborhoods off US-1", note: "1970s-onward tile roofs now in the restoration window" },
      { name: "Near-pier residences", note: "maximum salt exposure with corroding flashing and heavy fade" },
    ],
  },

  jupiter: {
    intro: [
      "Jupiter is one of the largest and most diverse coastal cities in northern Palm Beach County, and its roofs span everything from waterfront estates on the Loxahatchee River and Jupiter Inlet to sprawling inland master-planned communities like Abacoa and Jupiter Farms. Barrel tile, concrete S-tile, flat decks, and metal all appear here in volume, shaped by a coastline that delivers real salt exposure.",
      "The city's growth through the 1980s, 90s, and 2000s left tens of thousands of tile roofs that are now reaching the restoration window together. Near the water, salt and UV chalk the tile and etch its color; inland, the humidity around Jupiter's lakes and preserves drives heavy algae streaking. A pressure clean plus SmartShield (RP2) restores the community-approved appearance and reseals the field for another decade-plus.",
      "Jupiter is dense with HOAs and coastal condo boards, so documentation is central to how we work here. The Factory Price Sheet is emailed to you instantly when you fill out the contact form, and we prepare the color spec your board expects.",
    ],
    roofLandscape: {
      heading: "The Jupiter roof landscape",
      paragraphs: [
        "Inland Jupiter — Abacoa, Jupiter Farms, and the many gated communities off Central Boulevard and Indiantown Road — is dominated by 1980s–2000s concrete S-tile and barrel tile, much of it now 20–35 years old and squarely in the restoration window. Built in defined phases, these neighborhoods age predictably, making proactive coating efficient across whole streets.",
        "Along the river, the inlet, and the ocean, the estate homes carry premium tile and flat sections under direct salt exposure, where careful cleaning, color restoration, and mortar work come first. Condo communities near the water add large flat decks suited to our reflective elastomeric membrane. RoofProtect Products manufactures the coating materials in all three systems, giving Jupiter thousands of color options to match.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Jupiter",
      paragraphs: [
        "Surface restoration generally doesn't require a Jupiter building permit since no structural work occurs, though we recommend confirming with the town if your insurer asks. Where Jupiter homeowners focus is community approval: the gated inland communities and coastal condo boards almost all require architectural review and roof-color sign-off. We supply the product spec, manufacturer color card, and documentation matched to your community's approved palette.",
        "Insurance drives much of Jupiter's tile-roof work. Our systems paired with an Additional Roof Life Certification satisfy Citizens and Florida-carrier roof-age mandates, giving homeowners on 25-plus-year roofs a documented path to keeping coverage rather than accepting a forced re-roof.",
      ],
    },
    neighborhoods: [
      { name: "Abacoa", note: "1990s–2000s S-tile in the restoration window, strict community palettes" },
      { name: "Jupiter Farms", note: "larger inland properties with tile and metal roofs across bigger footprints" },
      { name: "Jupiter Inlet / riverfront estates", note: "premium salt-exposed tile with heavy chalking and etched color" },
      { name: "Egret Landing / Maplewood", note: "gated communities with tile roofs now past year 25" },
      { name: "Coastal condominium communities", note: "large flat decks — commercial reflective membrane coating available" },
      { name: "Jonathan's Landing", note: "waterfront and golf estate roofs with ARB color approval — documentation supplied" },
    ],
  },

  "jupiter-inlet-colony": {
    intro: [
      "Jupiter Inlet Colony is a small, gated oceanfront town occupying the southern tip of Jupiter Island, surrounded by water on nearly every side. Its roofs are among the most salt-exposed we service — single-family coastal estates carrying tile and flat sections, all sitting between the Atlantic and the Jupiter Inlet where the salt spray is constant and severe.",
      "This is coastal restoration at its most demanding. Salt-laden air chalks tile fields, etches color from premium blends, and corrodes flashing and fasteners faster than almost anywhere on the mainland, while humidity encourages growth on shaded estate planes. Our SmartShield (RP2) system, following a meticulous clean, restores the estate-grade finish and seals the tile against relentless coastal wear.",
      "As a small, tightly governed town, Jupiter Inlet Colony expects careful documentation, and we prepare the color spec and manufacturer card accordingly. The Factory Price Sheet is emailed to you instantly when you complete the contact form.",
    ],
    roofLandscape: {
      heading: "The Jupiter Inlet Colony roof landscape",
      paragraphs: [
        "The Colony's roofs are almost entirely single-family coastal estates — barrel and Mediterranean tile on steeper pitches, with flat and low-slope sections on the more modern homes. The tile is typically structurally sound; it's the surface that surrenders first to salt and UV, making color restoration and ridge-cap mortar work the core of the job. On flat estate decks, our reflective elastomeric membrane provides a sealed, heat-reflecting surface.",
        "Being nearly surrounded by water, the Colony faces about the harshest salt and UV load on the northern Palm Beach coast, so an exacting clean precedes every coating. RoofProtect Products manufactures the coating materials used in all three systems, giving us thousands of colors to match the town's refined palettes precisely.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Jupiter Inlet Colony",
      paragraphs: [
        "Coating is a surface restoration and typically doesn't require a Jupiter Inlet Colony building permit, but this small town governs appearance closely as a matter of course. We prepare a full package — product specification, manufacturer color card, and licensing documentation — matched to the town's standards before any work begins, so approval is straightforward.",
        "Coastal insurance pressure is acute given the Colony's extreme exposure. Our systems paired with an Additional Roof Life Certification satisfy Citizens and private-carrier roof-age requirements, giving estate owners a documented path to keeping coverage without a forced re-roof on premium tile that remains sound.",
      ],
    },
    neighborhoods: [
      { name: "Oceanfront estates", note: "maximum salt exposure — premium tile with heavy chalking and etched color" },
      { name: "Inlet-side residences", note: "constant spray off the Jupiter Inlet, corroding flashing and fasteners" },
      { name: "Beach Road homes", note: "barrel and Mediterranean tile with ridge-cap mortar work before coating" },
      { name: "Interior colony lots", note: "flat and low-slope sections suited to reflective membrane" },
      { name: "Waterfront modern homes", note: "flat estate decks needing sealed, heat-reflecting coating" },
    ],
  },

  "lake-clarke-shores": {
    intro: [
      "Lake Clarke Shores is a small, established residential town built around a chain of lakes just south of West Palm Beach. Its roofs are largely mid-century and later single-family homes — concrete tile, flat, and low-slope profiles — set among mature landscaping and waterfront lots that keep humidity high and algae active year-round.",
      "Being inland on freshwater lakes rather than the ocean, Lake Clarke Shores roofs face steady sun and heavy humidity but little salt, favoring the durable reflective coatings we specialize in. The town's abundant tree canopy and lakefront moisture drive persistent black algae streaking, while sun-baked fields chalk and fade. A pressure clean plus SmartShield (RP2) reverses both — restoring color and resealing the tile.",
      "Compact and close to our regular service corridor, Lake Clarke Shores schedules quickly. The Factory Price Sheet is emailed to you the moment you submit the contact form, so you can weigh restoration against replacement immediately.",
    ],
    roofLandscape: {
      heading: "The Lake Clarke Shores roof landscape",
      paragraphs: [
        "Lake Clarke Shores is predominantly mid-century and later single-family CBS homes with concrete tile on low-to-moderate pitches, plus flat and low-slope sections over garages and additions. The tile fields respond well to cleaning and color restoration, while the flat decks call for our elastomeric membrane to seal aged built-up surfaces and reflect the inland sun.",
        "The town's lakefront setting and mature canopy keep humidity high and many roof planes in shade, which accelerates biological growth well beyond an open inland lot. FungalShield (RP1) is the entry-level treatment for algae-heavy planes; most homeowners choose SmartShield (RP2) so cleaning, color restoration, and waterproofing all happen in one project.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lake Clarke Shores",
      paragraphs: [
        "Roof coating is a surface restoration rather than structural work, so Lake Clarke Shores projects generally don't require a building permit — we recommend confirming with the town if your insurer wants documentation. HOA governance is relatively light in this established town, so most projects move directly from inspection to scheduling, with color documentation supplied on request.",
        "Insurance concerns apply here as throughout Florida. If a carrier has flagged your roof's age, our systems combined with an Additional Roof Life Certification provide the documentation insurers require to keep a sound roof covered, avoiding a forced re-roof on a deck with real service life left.",
      ],
    },
    neighborhoods: [
      { name: "Lakefront homes", note: "waterfront lots with persistent north-facing algae streaking" },
      { name: "Central town streets", note: "mid-century CBS tile roofs in the prime restoration window" },
      { name: "Shaded canopy lots", note: "heavy biological growth from mature landscaping, treated before coating" },
      { name: "Homes with flat additions", note: "low-slope garage and Florida-room decks needing membrane sealing" },
      { name: "Sun-exposed interior parcels", note: "chalked, faded tile fields ideal for color restoration" },
    ],
  },

  "lake-park": {
    intro: [
      "Lake Park is a historic town on the Intracoastal in northern Palm Beach County, one of the area's oldest planned communities dating to the 1920s. Its roofs reflect that deep history: charming older bungalows and CBS homes with flat, low-slope, and gable roofs in the original town grid, alongside newer waterfront and multifamily construction — all within reach of Intracoastal salt exposure.",
      "The town's older housing stock means many flat and low-slope decks carry decades of layered built-up roofing that's grown brittle and prone to leaking, while the coastal air chalks tile and corrodes flashing. Our elastomeric membrane bonds over those aged flat surfaces to create a single sealed, reflective deck without a tear-off, and SmartShield (RP2) restores the older tile and gable roofs after a thorough clean.",
      "Lake Park's historic character and mix of housing make each roof a bit different, and we treat them that way. The Factory Price Sheet is emailed to you instantly when you complete the contact form, so you'll see how restoration compares to replacement right away.",
    ],
    roofLandscape: {
      heading: "The Lake Park roof landscape",
      paragraphs: [
        "Lake Park's original town grid carries 1920s-onward bungalows and CBS homes with plenty of flat and low-slope roofing — often aged built-up decks that have been patched over the years. These are ideal for our reflective elastomeric membrane, which seals seams and hairline cracks and cuts attic heat. Gable roofs with older tile or metal are cleaned, primed, and coated to restore appearance and extend life.",
        "Proximity to the Intracoastal brings genuine salt exposure that chalks tile and corrodes exposed metal flashing, while the humidity keeps algae active on shaded planes. Every project starts with a thorough pressure clean. FungalShield (RP1) handles growth-heavy surfaces, and SmartShield (RP2) is the full-service choice for combined cleaning, color, and waterproofing.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lake Park",
      paragraphs: [
        "Surface restoration generally doesn't require a Lake Park building permit since no structural work is performed, though we recommend confirming with the town if your carrier requests documentation — especially given the town's historic character. Where waterfront or multifamily communities apply appearance standards, we supply the product spec and manufacturer color card needed for approval.",
        "Coastal insurance pressure reaches Lake Park's older roofs. Our systems paired with an Additional Roof Life Certification satisfy Citizens and Florida-carrier roof-age requirements, giving homeowners a documented path to keeping coverage rather than a forced re-roof on a sound roof.",
      ],
    },
    neighborhoods: [
      { name: "Historic town grid", note: "1920s-onward bungalows and CBS homes with aged flat built-up decks" },
      { name: "Intracoastal-adjacent homes", note: "salt-exposed tile and corroding flashing near the water" },
      { name: "Kelsey City historic core", note: "older gable and low-slope roofs cleaned and restored" },
      { name: "Waterfront and marina-area properties", note: "high salt and humidity exposure on tile and flat sections" },
      { name: "Multifamily and villa clusters", note: "flat decks suited to reflective membrane; board approval documentation supplied" },
    ],
  },

  "lake-worth-beach": {
    intro: [
      "Lake Worth Beach is a vibrant, historic coastal city known for its early-20th-century bungalows, its arts district, and its blend of mainland neighborhoods and barrier-island beachfront. Its roofs are as characterful as its architecture: Craftsman and Mediterranean bungalows with tile and gable roofs, mid-century flat-deck homes, and beachfront properties facing direct Atlantic salt exposure.",
      "The city's older housing means many roofs carry decades of history — original tile fields that have chalked and streaked, and flat built-up decks that have grown brittle. Coastal salt near the beach accelerates the wear, etching color and corroding flashing. A pressure clean plus SmartShield (RP2) restores the vintage character of these roofs and reseals them, while our elastomeric membrane handles the aging flat decks without a tear-off.",
      "Lake Worth Beach's historic-district guidelines and neighborhood associations make documentation important, and Lake Worth Road runs straight to our Davie storefront, so scheduling is fast. The Factory Price Sheet is emailed to you the instant you fill out the contact form.",
    ],
    roofLandscape: {
      heading: "The Lake Worth Beach roof landscape",
      paragraphs: [
        "Mainland Lake Worth Beach is rich in 1920s–40s Craftsman and Mediterranean bungalows carrying older tile and gable roofs, alongside mid-century CBS homes with flat and low-slope decks. The tile fields clean up and recolor beautifully, restoring the historic look the districts value, while the flat decks call for our elastomeric membrane to seal aged built-up surfaces and reflect the coastal sun.",
        "On the barrier island and near the beach, salt and UV are the dominant forces — chalking tile, etching color, and corroding flashing — so an exacting clean precedes every coating. The city's humidity and mature tree canopy keep algae active on shaded planes throughout. FungalShield (RP1) treats growth-heavy surfaces; SmartShield (RP2) is the full-service restoration most homeowners choose. RoofProtect Products manufactures the coating materials used in all three systems.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lake Worth Beach",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a Lake Worth Beach building permit, but the city's historic-district guidelines place a real premium on appearance. Homes in the historic areas may carry color and material expectations, and beachfront condos and associations govern roof color closely. We supply the product spec, manufacturer color card, and licensing documentation each district or board requires, matched to the appropriate palette from thousands of colors.",
        "Insurance drives much of the work on Lake Worth Beach's older roofs. Our systems paired with an Additional Roof Life Certification satisfy Citizens and Florida-carrier roof-age mandates, giving homeowners a documented route to keeping coverage rather than a forced re-roof on a sound roof.",
      ],
    },
    neighborhoods: [
      { name: "College Park / Old Town", note: "1920s–40s bungalow tile and gable roofs — restoration preserves historic character" },
      { name: "Beachfront / barrier island", note: "salt-exposed tile and flat decks with heavy chalking and etched color" },
      { name: "Downtown arts district", note: "mixed older tile and flat roofs, historic-district color guidelines" },
      { name: "Parrot Cove", note: "waterfront-adjacent homes with high humidity and algae streaking" },
      { name: "Bryant Park area", note: "Mediterranean and CBS homes with older tile fields for color restoration" },
      { name: "Mid-century mainland neighborhoods", note: "flat and low-slope built-up decks sealed with reflective membrane" },
    ],
  },
};
