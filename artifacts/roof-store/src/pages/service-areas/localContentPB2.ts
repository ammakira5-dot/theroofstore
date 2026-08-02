import type { CityLocalContent } from "./localContent";

/**
 * Deep-localized content for Palm Beach County (batch 2) city pages,
 * plus Key West (Monroe County / the Florida Keys).
 *
 * Same structure and quality bar as the "pembroke-pines" exemplar in
 * localContent.ts: a unique 3-paragraph intro, a roof-landscape section,
 * a permits/HOA/insurance section, and 4–6 real neighborhoods per city.
 *
 * Brand rules enforced throughout: no dollar figures anywhere (the Factory
 * Price Sheet is emailed instantly via the contact form); RoofProtect is one
 * word (RoofProtect Products = the in-house factory that manufactures coating
 * materials); FungalShield (RP1), SmartShield (RP2), and RoofShield (RP3) are
 * systems sold by The Roof Store, not products; Storm Shield Paint Systems Inc.
 * is the optional exclusive licensed installer division; The Roof Store is the
 * Davie, FL retail storefront on University Drive, A+ BBB since 1994,
 * 954-210-9614; and an Additional Roof Life Certification after coating helps
 * satisfy Citizens/Florida carrier roof-age mandates.
 */
export const entries: Record<string, CityLocalContent> = {
  lantana: {
    intro: [
      "Lantana packs a lot of roof history into a small footprint. The old town core east of Dixie Highway is full of 1940s–1960s CBS cottages and bungalows with flat and low-slope decks, while Hypoluxo Island and the Intracoastal edge carry mid-century and newer homes with barrel tile and metal facing the salt air. West of I-95, Lantana's postwar and 1970s ranch neighborhoods run to gravel-surfaced flat roofs and gable tile that have long since faded and streaked.",
      "The salt exposure near the water is the recurring theme in our Lantana calls. Homes a few blocks off the Intracoastal see faster chalking on tile and quicker biological growth on flat decks than inland lots. A pressure clean plus our SmartShield elastomeric system restores color, seals the tile field, and puts a monolithic waterproof membrane over those tired flat sections — all without a tear-off.",
      "Lantana is a quick run north from our Davie shop on University Drive, so scheduling moves fast. Most homeowners go from free inspection to finished roof inside two weeks, weather permitting, and the Factory Price Sheet is emailed to you the moment you fill out the contact form.",
    ],
    roofLandscape: {
      heading: "The Lantana roof landscape",
      paragraphs: [
        "East of Dixie Highway, Lantana's original town cottages sit on small footprints with flat and low-slope decks — many layered with decades of old built-up gravel and tar. These are ideal for a bonded elastomeric membrane that turns a patchy, ponding deck into a single sealed surface. On Hypoluxo Island and the streets nearest the Intracoastal, salt-driven weathering on barrel tile and metal roofs is the dominant issue we treat.",
        "The high humidity coming off the water keeps algae and fungal streaking aggressive here, especially on north-facing slopes shaded by mature ficus and sea grape. Our FungalShield (RP1) system is the entry-level cleaning and biological-control treatment; most Lantana homeowners step up to SmartShield (RP2) so cleaning, color restoration, and waterproofing all happen in one project with materials manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lantana",
      paragraphs: [
        "Roof coating is a surface restoration rather than a structural alteration, so most Lantana projects don't require a building permit — though we always recommend confirming with the town if your insurer asks for documentation. Lantana has fewer master-planned HOAs than the county's western cities, but condo and townhome associations near the water do run appearance rules; we supply a written product spec sheet, color card, and manufacturer documentation for any board that requests it.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give Lantana homeowners a documented path to keeping coverage and avoiding a forced re-roof — typically at 60–70% less than replacement.",
      ],
    },
    neighborhoods: [
      { name: "Hypoluxo Island", note: "waterfront tile and metal roofs with heavy salt exposure — coastal-grade coating" },
      { name: "Old Town Lantana", note: "1940s–60s cottages with flat decks — membrane over old built-up gravel" },
      { name: "Lantana Heights", note: "1970s ranch homes with gable tile now faded and streaking" },
      { name: "Sports Village / Ocean Ave corridor", note: "mixed CBS and low-slope stock — SmartShield restoration candidates" },
      { name: "West Lantana / Moorings", note: "condo and townhome associations with appearance rules — full documentation supplied" },
    ],
  },

  "loxahatchee-groves": {
    intro: [
      "Loxahatchee Groves is unlike anywhere else we serve in Palm Beach County — a rural, five-acre-minimum town of nurseries, ranchettes, and agricultural homesteads west of the turnpike. The roofs match that character: sprawling single-family homes with big tile or metal fields, plus barns, equipment sheds, pole buildings, and outbuildings with flat and low-slope metal decks. One property here often means several structures to restore in a single mobilization.",
      "Because Loxahatchee Groves sits at the edge of the Everglades Agricultural Area, roofs bake under open sun with little shade and take the full brunt of afternoon storms rolling east. Metal roofs chalk and lose their finish; concrete tile fades and streaks; and older ag-building decks develop seam and fastener leaks. Our systems address all of it — SmartShield (RP2) for tile and residential fields, and elastomeric membrane coating for the metal and low-slope outbuildings.",
      "The upside of large rural parcels is scale: when we're already on your property, adding the barn or the guest house is efficient, and the full scope is spelled out on the Factory Price Sheet emailed to you the instant you complete the contact form.",
    ],
    roofLandscape: {
      heading: "The Loxahatchee Groves roof landscape",
      paragraphs: [
        "Metal is common here — standing-seam and 5V-crimp panels on homes and agricultural buildings alike. Over time the factory finish chalks, fasteners back out, and seams open; a properly prepped elastomeric coating re-seals the whole roof and reflects heat off the structures below. Concrete tile on the larger custom homes ages the way it does everywhere in the county: sound tile, exhausted surface, black streaking on shaded slopes.",
        "The lack of tree canopy means intense UV, so chalking and fading run fast on both metal and tile. Our FungalShield (RP1) treatment handles biological growth on shaded north faces, while RoofShield (RP3) — carrying TAS-106 Dade County Wind Uplift Certification — is popular on the exposed, wind-swept roofs out here where uplift resistance matters most. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Loxahatchee Groves",
      paragraphs: [
        "Surface restoration generally doesn't trigger a building permit in Loxahatchee Groves because no structural work is performed, but the town's rural and agricultural zoning can affect access and staging — something we plan for on the free inspection. There are very few conventional HOAs here, so architectural-review paperwork is rarely the hurdle; documentation for insurers is the more common request, and we provide it.",
        "For homeowners fighting a carrier non-renewal on roof age, our coating systems paired with an Additional Roof Life Certification give a documented path to keeping coverage without a forced re-roof — at a fraction of replacement cost.",
      ],
    },
    neighborhoods: [
      { name: "Okeechobee Blvd corridor", note: "large residential tile fields plus barns — multi-structure mobilizations" },
      { name: "Collecting Canal Road area", note: "nurseries and ranchettes with metal roofs and pole buildings" },
      { name: "B Road / D Road homesteads", note: "custom homes on acreage — full-property restoration scope" },
      { name: "North Road agricultural tract", note: "ag buildings with low-slope metal decks — elastomeric membrane coating" },
      { name: "Southern Blvd edge", note: "newer construction with concrete tile entering the restoration window" },
    ],
  },

  manalapan: {
    intro: [
      "Manalapan is one of the most exclusive addresses in Palm Beach County — a narrow barrier-island town of oceanfront and Intracoastal estates strung along Ocean Boulevard (A1A) between the Atlantic and the lagoon. The roofs here are large, architecturally significant, and directly in the salt spray: barrel and clay tile, standing-seam metal, and low-slope terraces on custom estates where quality and appearance are non-negotiable.",
      "Living between two bodies of salt water is hard on a roof. Manalapan's estates take airborne salt from both the ocean and the Intracoastal, which accelerates chalking on tile, corrosion on metal fasteners and flashings, and biological growth in the shaded courtyards common to these homes. Our SmartShield (RP2) and RoofShield (RP3) systems are built for exactly this exposure — deep cleaning, color restoration, and a sealed, UV- and salt-resistant surface.",
      "For estate-scale roofs, our optional licensed installer division, Storm Shield Paint Systems Inc., handles the work to the standard these properties demand. The complete scope and the Factory Price Sheet are emailed to you the moment you fill out the contact form.",
    ],
    roofLandscape: {
      heading: "The Manalapan roof landscape",
      paragraphs: [
        "Barrel and flat clay tile dominate the Mediterranean-style estates, with standing-seam metal on more contemporary homes and low-slope membrane on the flat terraces and loggias that these floor plans favor. Every one of these surfaces is fighting constant salt load; even structurally perfect tile goes chalky and streaked years faster here than it would inland.",
        "Because the homes are so large, we frequently combine systems on a single roof — SmartShield on the main tile fields, elastomeric membrane on the terraces, and targeted flashing and penetration sealing where salt has attacked the metal details. RoofShield (RP3) with its TAS-106 Dade County Wind Uplift Certification is the most-requested system for oceanfront exposure. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Manalapan",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit, but Manalapan is a small town with high standards; we recommend confirming documentation needs with the town, and we handle any spec sheets, color cards, and manufacturer paperwork the town or an estate's management requires. Appearance and color consistency are taken seriously here, and we color-match from a 3,000+ color palette so a restored roof reads as new.",
        "For estate owners facing carrier scrutiny on roof age, our coating systems combined with an Additional Roof Life Certification provide a documented, cost-effective way to satisfy Citizens or a private carrier and avoid an unnecessary full re-roof.",
      ],
    },
    neighborhoods: [
      { name: "Point Manalapan", note: "Intracoastal estates on the peninsula — dual salt exposure, tile and metal" },
      { name: "Ocean Boulevard (A1A) oceanfront", note: "direct Atlantic frontage — coastal-grade coating and flashing work" },
      { name: "La Coquille / Eau Palm Beach area", note: "resort-adjacent luxury homes with low-slope terraces" },
      { name: "Audubon Causeway homes", note: "waterfront custom roofs combining tile fields and metal details" },
      { name: "Town center estates", note: "large Mediterranean tile roofs — estate-scale restoration" },
    ],
  },

  "mangonia-park": {
    intro: [
      "Mangonia Park is a small, working town just north of West Palm Beach where industry and modest residential streets sit side by side. That mix defines our work here: warehouses, light-industrial buildings, and commercial storefronts with large flat and metal roofs, alongside older single-family homes with low-slope and gable roofs that have weathered decades of South Florida sun.",
      "The commercial flat roofs are the headline. Big built-up and modified-bitumen decks develop ponding, blistering, and seam failures over time, and a full replacement means tearing off a serviceable structure. Our elastomeric membrane coating bonds over the existing surface, stops the leaks, and reflects heat off the building — restoring the roof without shutting the business down.",
      "On the residential side, Mangonia Park's older homes are classic SmartShield candidates: pressure clean, seal the flat and low-slope sections, and recolor faded, streaked surfaces. Whatever the roof, the full scope and the Factory Price Sheet are emailed to you the instant you complete the contact form.",
    ],
    roofLandscape: {
      heading: "The Mangonia Park roof landscape",
      paragraphs: [
        "Commercial and light-industrial buildings along the rail and industrial corridors carry expansive flat decks — built-up, modified bitumen, and metal — that are prime for restoration rather than replacement. A properly prepped and coated deck can add many years of service life and cut cooling load through reflectivity, all without the disruption and cost of a tear-off.",
        "Residential Mangonia Park runs to postwar CBS homes with low-slope and gravel roofs, where age, ponding, and biological growth are the usual complaints. Our FungalShield (RP1) treatment clears the growth, and SmartShield (RP2) seals and recolors the surface with materials manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Mangonia Park",
      paragraphs: [
        "Surface restoration coatings generally don't require a building permit because no structural work is done, but commercial jobs sometimes need documentation for property managers or lenders — we provide spec sheets and manufacturer paperwork as needed. Mangonia Park has little HOA overhead on the residential side, so approvals are rarely the bottleneck.",
        "For homeowners whose carrier has flagged roof age, our systems paired with an Additional Roof Life Certification offer a documented path to keeping coverage and avoiding a forced re-roof, at 60–70% less than replacement.",
      ],
    },
    neighborhoods: [
      { name: "Industrial corridor (13th Street area)", note: "warehouses and light-industrial flat roofs — commercial membrane coating" },
      { name: "Old Dixie Highway commercial strip", note: "storefronts with low-slope and metal roofs" },
      { name: "Residential Mangonia Park", note: "postwar CBS homes with gravel and low-slope decks" },
      { name: "Silver Beach Road area", note: "mixed residential stock — SmartShield restoration candidates" },
      { name: "Rail-side business park", note: "large modified-bitumen decks ideal for reflective coating" },
    ],
  },

  "north-palm-beach": {
    intro: [
      "North Palm Beach is a mature waterfront community built largely in the 1950s and 1960s, laid out around a network of canals feeding into the Intracoastal and Lake Worth. The classic North Palm Beach home is a mid-century CBS ranch — often with a flat or low-slope roof over the living areas and gable tile elsewhere — sited on a canal lot where salt-laden air is a daily fact of life.",
      "Those flat mid-century decks are the heart of our work here. Decades of layered built-up tar eventually pond, blister, and leak, but the structure underneath is usually fine. Our elastomeric membrane coating bonds over the old surface and turns it into a single waterproof deck without a tear-off. On the tile roofs, salt and canal-side humidity drive fast chalking and heavy black streaking that SmartShield (RP2) cleans, seals, and recolors.",
      "North Palm Beach is an easy trip up I-95 from our Davie shop on University Drive, and the full scope plus the Factory Price Sheet are emailed to you the moment you fill out the contact form.",
    ],
    roofLandscape: {
      heading: "The North Palm Beach roof landscape",
      paragraphs: [
        "The 1950s–60s canal neighborhoods are dominated by low-slope and flat roofs — some of the most cost-effective restorations we do, because a bonded membrane over an existing deck avoids the labor and expense of a full replacement. Later infill and remodeled homes add barrel and S-tile that ages the way coastal tile always does: sound underneath, exhausted on the surface.",
        "Constant salt exposure from the canals and Intracoastal accelerates chalking on tile and corrosion on metal flashings, while the mature tree canopy shading many roofs encourages algae. FungalShield (RP1) handles the biological growth; most homeowners step up to SmartShield (RP2) for a one-project clean, seal, and recolor with materials manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in North Palm Beach",
      paragraphs: [
        "Coating is a surface restoration, so most North Palm Beach projects don't require a building permit, though we recommend confirming with the village if your insurer wants documentation. Condo and townhome associations along the water do enforce appearance standards, and we supply the spec sheets, color cards, and manufacturer documentation any board requires — matching approved palettes from 3,000+ colors.",
        "If Citizens or a private carrier has questioned your roof's age, our coating systems paired with an Additional Roof Life Certification give North Palm Beach homeowners a documented way to keep coverage without a forced re-roof — typically at 60–70% below replacement.",
      ],
    },
    neighborhoods: [
      { name: "Village of North Palm Beach (canal homes)", note: "1950s–60s flat and low-slope decks — membrane over old built-up tar" },
      { name: "Old Port Cove", note: "waterfront condos on the Intracoastal — commercial and low-slope coating" },
      { name: "Prosperity Harbor", note: "gated waterfront homes with tile roofs and appearance rules" },
      { name: "Lost Tree Village", note: "estate roofs near the ocean — coastal-grade restoration" },
      { name: "Yacht Club Drive area", note: "mid-century ranches with mixed flat and gable tile roofs" },
    ],
  },

  "ocean-ridge": {
    intro: [
      "Ocean Ridge is a slender barrier-island town between the Atlantic and the Intracoastal, just south of Manalapan. It's a low-key but high-value coastal community of custom homes, and the roofs here live in the harshest environment we work in: relentless salt spray, wind-driven rain, and intense sun with almost no relief. Barrel and clay tile, standing-seam metal, and low-slope terraces all take that punishment.",
      "Salt is the enemy on Ocean Ridge. It chalks tile, corrodes metal fasteners and flashings, and works into every seam and penetration. The homes here need coatings engineered for coastal exposure, applied over surfaces that have been properly cleaned and prepped first. Our SmartShield (RP2) and RoofShield (RP3) systems deliver a sealed, UV- and salt-resistant surface with real color restoration.",
      "For the larger oceanfront and Intracoastal homes, our optional licensed installer division, Storm Shield Paint Systems Inc., handles the work to coastal standards. Fill out the contact form and the complete scope, plus the Factory Price Sheet, is emailed to you instantly.",
    ],
    roofLandscape: {
      heading: "The Ocean Ridge roof landscape",
      paragraphs: [
        "Mediterranean-style homes with barrel and flat clay tile are common, alongside contemporary homes with standing-seam metal and flat terraces. Each surface fights constant salt load; even sound tile chalks and streaks faster here than a few miles inland, and metal flashings show corrosion at fasteners and valleys.",
        "We often blend systems on one roof — SmartShield on the tile fields, elastomeric membrane on the flat terraces, and focused sealing on the salt-attacked metal details. RoofShield (RP3), carrying TAS-106 Dade County Wind Uplift Certification, is the go-to for direct oceanfront exposure. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Ocean Ridge",
      paragraphs: [
        "Surface restoration generally doesn't require a building permit, but Ocean Ridge is a small town that values appearance and staging control; we confirm documentation needs and provide any spec sheets, color cards, and manufacturer paperwork the town or a property's management requests. Color-matching from a 3,000+ palette keeps a restored coastal roof reading as new.",
        "For owners facing carrier scrutiny on roof age, our coating systems combined with an Additional Roof Life Certification offer a documented, cost-effective route to keeping coverage and avoiding an unnecessary full re-roof.",
      ],
    },
    neighborhoods: [
      { name: "Oceanfront (A1A) homes", note: "direct Atlantic frontage — coastal-grade coating and flashing work" },
      { name: "Intracoastal / Spanish River Drive", note: "waterfront tile and metal roofs with dual salt exposure" },
      { name: "Inlet Cay", note: "gated waterfront estates with large tile fields" },
      { name: "Old Ocean Boulevard homes", note: "custom homes combining tile and low-slope terraces" },
      { name: "Town center residential", note: "mid-size coastal homes — SmartShield restoration candidates" },
    ],
  },

  pahokee: {
    intro: [
      "Pahokee sits on the southeast shore of Lake Okeechobee in the heart of the Glades — a farming community far from the coast, with its own distinct roof profile. The housing stock runs to modest postwar CBS homes, agricultural buildings, and older commercial structures downtown, many with low-slope, gravel, and metal roofs that have endured decades of open-sky sun with little shade.",
      "Out here the challenge isn't salt air — it's relentless UV, big lake-effect storms, and older roofs that were built simply and have aged hard. Flat and gravel decks pond and leak; metal roofs on homes and ag buildings chalk and lose their finish. Our elastomeric membrane coating re-seals those surfaces without a tear-off, and SmartShield (RP2) restores color and waterproofing on the residential fields.",
      "Pahokee is a longer drive from our Davie shop on University Drive, so we plan routes efficiently — and the full scope plus the Factory Price Sheet are emailed to you the instant you complete the contact form, no waiting for a callback.",
    ],
    roofLandscape: {
      heading: "The Pahokee roof landscape",
      paragraphs: [
        "Low-slope and gravel roofs dominate the older residential and downtown commercial stock, and they're among the most cost-effective restorations we offer — a bonded membrane over an existing deck avoids a full replacement entirely. Metal roofs are common on homes and agricultural buildings, and a properly prepped coating re-seals seams and fasteners while reflecting heat off the structure.",
        "With almost no tree canopy, Pahokee roofs face intense, unbroken UV, so chalking and finish loss run fast on both metal and tile. FungalShield (RP1) clears any biological growth on shaded sections, and materials for every system are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Pahokee",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit because no structural work is performed, though we recommend confirming with the city if an insurer requests documentation, which we readily provide. Pahokee has minimal HOA overhead, so architectural approvals are rarely a factor here.",
        "For homeowners whose carrier has flagged roof age, our coating systems paired with an Additional Roof Life Certification provide a documented path to keeping coverage and avoiding a forced re-roof — at 60–70% less than replacement.",
      ],
    },
    neighborhoods: [
      { name: "Downtown Pahokee", note: "older commercial buildings with flat and gravel decks — membrane coating" },
      { name: "Lakeshore / Bacom Point", note: "homes near the lake with low-slope and metal roofs" },
      { name: "East Pahokee residential", note: "postwar CBS homes with gravel and gable roofs" },
      { name: "Agricultural outskirts", note: "farm buildings and metal roofs — elastomeric coating at scale" },
      { name: "Larrimore Road area", note: "modest single-family stock — SmartShield restoration candidates" },
    ],
  },

  "palm-beach": {
    intro: [
      "Palm Beach — the Town of Palm Beach on the barrier island — is the most exacting place we work. Its estates and historic homes were designed by names like Mizner and Fatio, and their roofs are defining architectural elements: hand-laid barrel and clay tile, standing-seam and flat-lock metal, and low-slope terraces, all sitting directly in Atlantic and Intracoastal salt air. Nothing about a roof here is casual.",
      "The salt exposure between two bodies of water is brutal on these surfaces, chalking tile and corroding metal details, while the town's strict appearance standards mean any restoration has to be flawless in color and finish. Our SmartShield (RP2) and RoofShield (RP3) systems deliver deep cleaning, precise color restoration, and a sealed, coastal-grade surface — reviving a landmark roof rather than replacing irreplaceable tile.",
      "Estate roofs of this caliber are handled by our optional licensed installer division, Storm Shield Paint Systems Inc., working to the town's standards. Complete the contact form and the full scope, along with the Factory Price Sheet, is emailed to you instantly.",
    ],
    roofLandscape: {
      heading: "The Palm Beach roof landscape",
      paragraphs: [
        "Mizner-era and later Mediterranean estates carry barrel and flat clay tile that is often original and effectively irreplaceable — which is exactly why restoration matters here. Contemporary homes and additions add standing-seam and flat-lock metal, and nearly every estate has low-slope terraces and loggias that need true waterproofing membranes.",
        "The dual salt load from ocean and Intracoastal accelerates chalking, corrosion, and biological growth in shaded courtyards. We routinely combine systems on a single estate — SmartShield on the tile, elastomeric membrane on the terraces, targeted sealing on salt-attacked metal — with RoofShield (RP3) and its TAS-106 Dade County Wind Uplift Certification for the most exposed elevations. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Palm Beach",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit, but the Town of Palm Beach maintains rigorous appearance and landmark standards, and historic properties can carry additional review; we confirm requirements up front and prepare any spec sheets, color cards, and manufacturer documentation needed. Exact color-matching from a 3,000+ palette is essential to preserving a landmark roof's character.",
        "For estate owners facing carrier scrutiny on roof age, our coating systems combined with an Additional Roof Life Certification offer a documented, cost-effective way to satisfy Citizens or a private carrier while protecting original tile that a re-roof would destroy.",
      ],
    },
    neighborhoods: [
      { name: "Estate Section (South Ocean Blvd)", note: "Mizner-era barrel tile estates — landmark-grade restoration" },
      { name: "Midtown / Worth Avenue area", note: "historic Mediterranean roofs with strict appearance standards" },
      { name: "El Cid / historic districts", note: "1920s tile roofs, often original — preserve rather than replace" },
      { name: "North End", note: "mid-century and later homes with tile and low-slope terraces" },
      { name: "Everglades Island", note: "Intracoastal estates with dual salt exposure — coastal-grade systems" },
    ],
  },

  "palm-beach-gardens": {
    intro: [
      "Palm Beach Gardens is a large, master-planned city where roof aging happens by community and by decade. PGA National, BallenIsles, and Frenchman's Creek anchor the 1980s–90s tile stock, while newer villages like Mirasol, Old Palm, and the developments around Alton and Avenir bring 2000s and later construction. That means tens of thousands of barrel and S-tile roofs moving through the restoration window on a predictable schedule.",
      "Most Gardens calls follow a familiar pattern: the tile is structurally sound, but color has faded, black algae streaks the shaded slopes, and the community's architectural review board wants the roof brought back to its approved appearance. A pressure clean plus our SmartShield (RP2) system solves all three — restoring board-approved color, killing the growth, and sealing the tile field for another 10–15 years.",
      "Palm Beach Gardens is a straightforward run up I-95 from our Davie shop on University Drive. Fill out the contact form and the Factory Price Sheet is emailed to you instantly, so you can plan before we ever set foot on the property.",
    ],
    roofLandscape: {
      heading: "The Palm Beach Gardens roof landscape",
      paragraphs: [
        "The dominant roof is concrete barrel and S-tile on golf-community and gated homes, built in defined phases so whole neighborhoods age together — when one roof on your street starts chalking and streaking, yours is usually close behind. Older sections near the original PGA Boulevard corridor add some flat and low-slope stock that needs a true waterproofing membrane rather than a topcoat.",
        "The city's abundant lakes, golf-course irrigation, and mature landscaping keep humidity high at roof level and shade many slopes, so biological growth is aggressive. FungalShield (RP1) handles the growth; most Gardens homeowners choose SmartShield (RP2) for a one-project clean, seal, and recolor, with dark-tone options kept cool by Cool Pigment Technology. All materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Palm Beach Gardens",
      paragraphs: [
        "Roof coating is a surface restoration, so most Palm Beach Gardens projects don't require a building permit — though we recommend confirming with the city if your insurer or HOA asks for documentation. The bigger factor here is architectural review: nearly every gated and golf community requires color approval before roof work, and we supply the product spec sheet, color card, and manufacturer documentation your board needs, matching approved palettes from 3,000+ colors.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give Gardens homeowners a documented path to keeping coverage — at a fraction of the re-roof cost the insurer's letter implies.",
      ],
    },
    neighborhoods: [
      { name: "PGA National", note: "1980s–90s tile now deep in the restoration window — ARB color approval" },
      { name: "BallenIsles", note: "gated golf estates with strict palettes — full spec package supplied" },
      { name: "Mirasol", note: "2000s tile entering the proactive-coating window" },
      { name: "Frenchman's Creek / Frenchman's Reserve", note: "waterfront estate roofs, appearance rules enforced" },
      { name: "Old Palm Golf Club", note: "large custom tile roofs where volume scope applies" },
      { name: "Evergrene / Alton", note: "newer villages — SmartShield restoration and proactive coating" },
    ],
  },

  "palm-beach-shores": {
    intro: [
      "Palm Beach Shores occupies the southern tip of Singer Island, a compact beachside town wrapped by the Atlantic on one side and the Lake Worth Inlet on the other. It's a mix of mid-century single-family homes, older cottages, and low- and mid-rise condos, and every one of them sits squarely in the salt spray. Barrel tile, metal, and low-slope roofs all weather fast in this exposure.",
      "Salt air is the defining condition here. It chalks tile, corrodes metal flashings and fasteners, and drives biological growth on shaded and north-facing slopes. Our SmartShield (RP2) system cleans, seals, and recolors tile roofs to withstand the coastal environment, while elastomeric membrane coating restores the flat and low-slope decks common on the older cottages and the condo buildings.",
      "Palm Beach Shores is a short hop across the inlet from Riviera Beach and an easy trip from our Davie shop on University Drive. Complete the contact form and the Factory Price Sheet is emailed to you instantly.",
    ],
    roofLandscape: {
      heading: "The Palm Beach Shores roof landscape",
      paragraphs: [
        "The single-family stock runs to mid-century CBS homes and beach cottages with a mix of gable tile and low-slope decks, while the condo and resort buildings carry large flat roofs ideal for reflective membrane coating. Salt from both the ocean and the inlet means even sound tile chalks and streaks faster here than inland.",
        "Constant humidity and salt load also attack metal details and encourage algae in shaded areas. FungalShield (RP1) clears the growth; SmartShield (RP2) handles the full clean-seal-recolor on tile, and RoofShield (RP3) with TAS-106 Dade County Wind Uplift Certification is available for the most wind-exposed oceanfront roofs. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Palm Beach Shores",
      paragraphs: [
        "Surface restoration generally doesn't require a building permit, though we confirm documentation needs with the town when an insurer asks. Condo and resort boards here enforce appearance standards, and we supply the spec sheets, color cards, and manufacturer documentation any board requires, matching approved palettes from a 3,000+ color range.",
        "For homeowners and associations facing carrier scrutiny on roof age, our coating systems paired with an Additional Roof Life Certification offer a documented path to keeping coverage and avoiding a forced re-roof — at 60–70% below replacement.",
      ],
    },
    neighborhoods: [
      { name: "Singer Island oceanfront", note: "direct Atlantic frontage — coastal-grade tile and metal coating" },
      { name: "Inlet-side homes", note: "Lake Worth Inlet exposure — dual salt load on low-slope decks" },
      { name: "Town beach cottages", note: "mid-century CBS homes with gable tile and flat sections" },
      { name: "Condo / resort buildings", note: "large flat decks — reflective commercial membrane coating" },
      { name: "Cascade Lane / Ocean Ave area", note: "mixed residential stock — SmartShield restoration candidates" },
    ],
  },

  "palm-springs": {
    intro: [
      "The Village of Palm Springs, just west of Lake Worth Beach, is a dense, affordable, and well-established inland community. Its roofs reflect steady mid-century and 1970s–80s growth: CBS single-family homes with gable tile and low-slope sections, plus a large stock of condos, villas, and mobile/manufactured homes with flat and metal roofs. There's a lot of roof here, and most of it is deep in the restoration window.",
      "Away from the coast, Palm Springs roofs deal less with salt and more with age, sun, and biological growth. Faded tile, chalking, and heavy algae streaking on shaded slopes are the everyday complaints, and the older flat and low-slope decks develop ponding and leaks. A pressure clean plus our SmartShield (RP2) system restores color and seals the tile field, while elastomeric membrane coating rescues the flat sections without a tear-off.",
      "Palm Springs is a quick, central trip from our Davie shop on University Drive. Fill out the contact form and the Factory Price Sheet is emailed to you instantly.",
    ],
    roofLandscape: {
      heading: "The Palm Springs roof landscape",
      paragraphs: [
        "The dominant residential roof is concrete gable tile on 1970s–80s CBS homes, with a substantial share of flat and low-slope decks on older houses and villa communities. The condo and villa associations that fill much of the village carry large low-slope roofs that are cost-effective candidates for reflective membrane coating.",
        "Inland humidity and mature landscaping keep algae aggressive on shaded slopes, so FungalShield (RP1) is a frequent first step. Most homeowners move up to SmartShield (RP2) so cleaning, color restoration, and waterproofing happen in one project, with materials manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Palm Springs",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit, though we recommend confirming with the village if your insurer asks for documentation. Palm Springs' many condo and villa associations do enforce appearance rules, and we supply spec sheets, color cards, and manufacturer documentation for any board — matching approved palettes from 3,000+ colors.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give Palm Springs homeowners and associations a documented path to keeping coverage and avoiding a forced re-roof — at 60–70% below replacement.",
      ],
    },
    neighborhoods: [
      { name: "Lamplighter / village core", note: "1970s–80s CBS homes with gable tile now faded and streaking" },
      { name: "Village condo & villa associations", note: "large low-slope decks — reflective membrane coating" },
      { name: "Palm Springs Estates", note: "single-family tile roofs deep in the restoration window" },
      { name: "Congress Ave corridor homes", note: "mixed flat and gable stock — SmartShield candidates" },
      { name: "Manufactured/mobile home communities", note: "metal and low-slope roofs — elastomeric coating" },
    ],
  },

  "riviera-beach": {
    intro: [
      "Riviera Beach spans two very different worlds: the mainland city with its historic neighborhoods, marina district, and industrial waterfront, and Singer Island's oceanfront condos and homes across the Intracoastal. That split shapes our work — mainland flat and low-slope decks and older tile inland, and salt-battered coastal tile, metal, and high-rise flat roofs on the island.",
      "On the mainland, the housing stock includes postwar CBS homes with flat, gravel, and gable roofs that have aged hard under decades of sun and humidity; ponding, biological growth, and worn surfaces are the common issues, and elastomeric membrane plus SmartShield (RP2) address them without a tear-off. On Singer Island, salt spray drives fast chalking on tile and corrosion on metal, so coastal-grade coatings are the requirement.",
      "Riviera Beach is an easy run up I-95 from our Davie shop on University Drive. Complete the contact form and the Factory Price Sheet is emailed to you instantly, whether the roof is a mainland bungalow or an island tower.",
    ],
    roofLandscape: {
      heading: "The Riviera Beach roof landscape",
      paragraphs: [
        "Mainland Riviera Beach runs to postwar CBS homes with low-slope, gravel, and gable roofs, plus commercial and marina-district buildings with large flat decks ideal for reflective membrane restoration. Singer Island carries oceanfront condos and homes with barrel tile, metal, and expansive flat roofs — all fighting constant salt load.",
        "The coastal exposure on the island accelerates chalking, corrosion, and algae, while inland humidity keeps biological growth active on shaded mainland slopes. FungalShield (RP1) clears the growth, SmartShield (RP2) restores tile, and RoofShield (RP3) with TAS-106 Dade County Wind Uplift Certification serves the wind-exposed oceanfront. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Riviera Beach",
      paragraphs: [
        "Surface restoration generally doesn't require a building permit, but Singer Island's condo boards and mainland associations enforce appearance standards; we provide spec sheets, color cards, and manufacturer documentation for any board, matching approved palettes from 3,000+ colors. Commercial and marina-district jobs sometimes need documentation for managers or lenders, which we also supply.",
        "For homeowners and associations facing carrier scrutiny on roof age, our coating systems paired with an Additional Roof Life Certification offer a documented path to keeping coverage and avoiding a forced re-roof — at 60–70% below replacement.",
      ],
    },
    neighborhoods: [
      { name: "Singer Island oceanfront condos", note: "high-rise flat decks and coastal tile — commercial and coastal-grade coating" },
      { name: "Ocean Walk / island single-family", note: "barrel tile and metal roofs in heavy salt exposure" },
      { name: "Marina District", note: "waterfront commercial and low-slope buildings — reflective membrane" },
      { name: "Monroe Heights / historic mainland", note: "postwar CBS homes with gravel and gable roofs" },
      { name: "Riviera Beach Heights", note: "single-family flat and low-slope stock — SmartShield candidates" },
    ],
  },

  "royal-palm-beach": {
    intro: [
      "Royal Palm Beach is a suburban, family-oriented village in the county's central-western belt, built out largely from the 1980s through the 2000s. That timeline shows on the rooftops: streets of concrete barrel and S-tile in master-planned communities like Madison Green, La Mancha, and the Willows, all reaching the 20–35 year mark where the tile is sound but the surface is spent.",
      "The typical Royal Palm Beach call starts with faded color, chalking, and black algae streaks on shaded slopes — often prompted by an HOA notice about roof appearance. Our SmartShield (RP2) system answers all of it: a pressure clean, biological-growth control, board-approved color restoration, and a sealed tile field good for another 10–15 years, all without a tear-off.",
      "Royal Palm Beach is a direct trip west from our Davie shop on University Drive. Fill out the contact form and the Factory Price Sheet is emailed to you instantly, so you can plan before the free inspection.",
    ],
    roofLandscape: {
      heading: "The Royal Palm Beach roof landscape",
      paragraphs: [
        "The dominant roof is concrete barrel and S-tile on 1980s–2000s homes, built in phases so whole neighborhoods age on the same schedule — when one roof on your block starts streaking, yours is usually next. Some older sections near the original village core add flat and low-slope stock that needs a true waterproofing membrane.",
        "The village's lakes, canals, and year-round irrigation keep humidity high at roof level, so algae and fungal streaking show up fast on shaded slopes. FungalShield (RP1) is the entry-level fix; most homeowners choose SmartShield (RP2) for a one-project clean, seal, and recolor, with dark-tone options kept cool by Cool Pigment Technology. Materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Royal Palm Beach",
      paragraphs: [
        "Roof coating is a surface restoration, so most Royal Palm Beach projects don't require a building permit — though we recommend confirming with the village if your insurer or HOA asks for documentation. Architectural review is the more common hurdle: most communities require color approval before roof work, and we supply the spec sheet, color card, and manufacturer documentation your board needs, matching approved palettes from 3,000+ colors.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give Royal Palm Beach homeowners a documented path to keeping coverage — at a fraction of the re-roof cost the insurer's letter implies.",
      ],
    },
    neighborhoods: [
      { name: "Madison Green", note: "golf community with S-tile roofs now in the restoration window" },
      { name: "La Mancha", note: "1980s–90s barrel tile, many roofs past year 25 — HOA color approval" },
      { name: "The Willows", note: "family community with tile roofs faded and streaking" },
      { name: "Counterpoint Estates", note: "larger lots and estate roofs where broader scope applies" },
      { name: "Village core (older sections)", note: "mixed flat and tile stock — membrane and SmartShield systems" },
    ],
  },

  "south-bay": {
    intro: [
      "South Bay sits at the southern edge of Lake Okeechobee, a small Glades farming city with a roof profile all its own. The stock runs to modest postwar CBS homes, agricultural buildings, and older downtown commercial structures — many with low-slope, gravel, and metal roofs that have weathered decades of open-sky sun far from any coastline.",
      "The conditions out here are about UV and big lake-effect storms, not salt. Flat and gravel decks pond and leak with age, and metal roofs on homes and ag buildings chalk and lose their finish. Our elastomeric membrane coating re-seals those surfaces over the existing deck without a tear-off, and SmartShield (RP2) restores waterproofing and color on the residential fields.",
      "South Bay is a longer haul from our Davie shop on University Drive, so we plan routes efficiently — and the full scope plus the Factory Price Sheet are emailed to you the instant you complete the contact form.",
    ],
    roofLandscape: {
      heading: "The South Bay roof landscape",
      paragraphs: [
        "Low-slope and gravel roofs dominate the older residential and downtown commercial buildings, and they're among the most cost-effective restorations we offer — a bonded membrane over an existing deck avoids full replacement. Metal roofs are common on homes and farm structures, and a properly prepped coating re-seals seams and fasteners while reflecting heat off the building.",
        "With virtually no tree canopy, South Bay roofs face intense, unbroken UV, so chalking and finish loss run fast. FungalShield (RP1) clears any biological growth on shaded sections, and all coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in South Bay",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit because no structural work is performed, though we confirm with the city when an insurer requests documentation, which we readily provide. South Bay carries minimal HOA overhead, so architectural approvals are rarely a factor.",
        "For homeowners whose carrier has flagged roof age, our coating systems paired with an Additional Roof Life Certification provide a documented path to keeping coverage and avoiding a forced re-roof — at 60–70% less than replacement.",
      ],
    },
    neighborhoods: [
      { name: "Downtown South Bay", note: "older commercial buildings with flat and gravel decks — membrane coating" },
      { name: "US-27 corridor", note: "homes and businesses with low-slope and metal roofs" },
      { name: "Residential core", note: "postwar CBS homes with gravel and gable roofs" },
      { name: "Agricultural outskirts", note: "farm buildings and metal roofs — elastomeric coating at scale" },
      { name: "Lakeside area", note: "modest single-family stock — SmartShield restoration candidates" },
    ],
  },

  "south-palm-beach": {
    intro: [
      "South Palm Beach is a tiny barrier-island town that's almost entirely condominium — a dense line of low- and mid-rise oceanfront buildings squeezed between the Atlantic and the Intracoastal south of Palm Beach. That makes it a commercial and association-focused roof market: large flat and low-slope decks on condo towers, all sitting in relentless salt spray.",
      "Salt and sun are the constant here. Condo flat roofs develop ponding, blistering, and seam failures, and the salt load corrodes metal edge details and penetrations. Our elastomeric membrane coating bonds over the existing deck, stops the leaks, and reflects heat off the building — extending service life for the association without the enormous disruption and cost of a full replacement.",
      "South Palm Beach is an easy trip from our Davie shop on University Drive, and we're set up to work with condo boards and property managers. Fill out the contact form and the Factory Price Sheet is emailed to you instantly.",
    ],
    roofLandscape: {
      heading: "The South Palm Beach roof landscape",
      paragraphs: [
        "The town is dominated by condominium buildings with large flat and low-slope roofs — the classic candidates for reflective membrane restoration, where a coating can add years of service life and cut cooling load without a tear-off. The handful of single-family and smaller residential structures carry tile and low-slope sections that face the same coastal exposure.",
        "Direct oceanfront salt spray accelerates corrosion at flashings, drains, and edge metal, and drives biological growth in shaded areas. FungalShield (RP1) clears the growth, and our membrane and SmartShield (RP2) systems restore the surfaces with materials manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in South Palm Beach",
      paragraphs: [
        "Surface restoration generally doesn't require a building permit, but condo work often needs documentation for boards, managers, and lenders — we provide spec sheets, color cards, and manufacturer paperwork as a standard part of the proposal. Boards here enforce appearance standards, and we match approved palettes from a 3,000+ color range.",
        "For associations facing carrier scrutiny on roof age, our coating systems paired with an Additional Roof Life Certification offer a documented, cost-effective path to keeping coverage and avoiding a forced re-roof — at 60–70% below replacement.",
      ],
    },
    neighborhoods: [
      { name: "Oceanfront condo towers", note: "large flat decks in direct salt spray — reflective membrane coating" },
      { name: "Intracoastal-side buildings", note: "low-rise associations with low-slope roofs and edge-metal corrosion" },
      { name: "South Ocean Blvd (A1A) line", note: "the town's dense condo row — association-scale restoration" },
      { name: "Smaller residential parcels", note: "tile and low-slope homes — coastal-grade SmartShield systems" },
      { name: "Town center associations", note: "mid-rise condo boards — full documentation and color matching" },
    ],
  },

  tequesta: {
    intro: [
      "Tequesta sits at the northern edge of Palm Beach County, wrapped around the Loxahatchee River and just inland of Jupiter Island. It's a mature, upscale village of 1960s–80s waterfront and riverside homes, with barrel and S-tile, metal, and low-slope roofs living in a humid, tree-shaded, salt-touched environment near the coast and the river.",
      "The blend of river humidity, coastal salt, and heavy mature canopy makes biological growth especially aggressive here — black algae and fungal streaking hit shaded north-facing slopes hard, while tile fades and chalks and older flat sections pond. Our SmartShield (RP2) system cleans, seals, and recolors tile in one project, and elastomeric membrane coating restores the low-slope decks common on the older riverfront homes.",
      "Tequesta is a run up I-95 from our Davie shop on University Drive. Complete the contact form and the Factory Price Sheet is emailed to you instantly, so you can plan ahead of the free inspection.",
    ],
    roofLandscape: {
      heading: "The Tequesta roof landscape",
      paragraphs: [
        "The village runs to 1960s–80s single-family homes with barrel and S-tile plus flat and low-slope sections, and a share of metal roofs on riverside and newer homes. Country Club communities like Tequesta Country Club add larger tile roofs on golf and waterfront lots, all in the prime restoration window.",
        "The Loxahatchee River corridor keeps humidity high and the mature tree canopy shades many roof planes, so algae is relentless. FungalShield (RP1) handles the growth; most homeowners step up to SmartShield (RP2) for a full clean, seal, and recolor, and RoofShield (RP3) with TAS-106 Dade County Wind Uplift Certification is available near the coast. All materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Tequesta",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit, though we recommend confirming with the village if your insurer or HOA asks for documentation. Country Club and gated communities enforce appearance standards, and we supply the spec sheet, color card, and manufacturer documentation any board requires, matching approved palettes from 3,000+ colors.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give Tequesta homeowners a documented path to keeping coverage and avoiding a forced re-roof — at 60–70% below replacement.",
      ],
    },
    neighborhoods: [
      { name: "Tequesta Country Club", note: "golf and waterfront tile estates — ARB color approval and full spec package" },
      { name: "Riverbend / Loxahatchee River homes", note: "riverfront roofs with heavy shade — aggressive algae control" },
      { name: "Bermuda Terrace", note: "1960s–70s homes with tile and low-slope sections" },
      { name: "Village core / Old Dixie area", note: "mature single-family stock — SmartShield restoration candidates" },
      { name: "Rolling Hills", note: "established neighborhood with tile roofs deep in the window" },
    ],
  },

  wellington: {
    intro: [
      "Wellington is a large, master-planned village famous for its equestrian world, and its roofs reflect both the horse country and the suburban side. The residential stock is dominated by 1980s–2000s concrete barrel and S-tile in communities like Olympia, Versailles, and the Isles, while the equestrian corridors bring big estate homes plus barns, stables, and outbuildings with flat and metal decks — often several structures on one property.",
      "Most Wellington calls involve sound tile with an exhausted surface: faded color, chalking, and heavy algae streaking encouraged by the village's abundant lakes, canals, and horse-country irrigation. A pressure clean plus our SmartShield (RP2) system restores board-approved color, kills the growth, and seals the tile field — while elastomeric membrane coating handles the barn and outbuilding decks in the equestrian sections.",
      "Wellington is a direct trip west from our Davie shop on University Drive, and large equestrian properties are handled efficiently in a single mobilization. Fill out the contact form and the Factory Price Sheet is emailed to you instantly.",
    ],
    roofLandscape: {
      heading: "The Wellington roof landscape",
      paragraphs: [
        "The dominant residential roof is concrete barrel and S-tile on 1980s–2000s homes, built in phases so neighborhoods age together. The equestrian corridors — around Pierson Road, South Shore, and the Aero Club and Palm Beach Point areas — add estate homes with large tile fields plus barns and stables carrying flat and metal roofs that need true waterproofing and reflective coating.",
        "Wellington's extensive lakes, canals, and irrigation keep humidity high and drive fast biological growth on shaded slopes. FungalShield (RP1) clears the growth; SmartShield (RP2) is the popular one-project clean-seal-recolor, and RoofShield (RP3) with TAS-106 Dade County Wind Uplift Certification serves the exposed estate roofs. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Wellington",
      paragraphs: [
        "Roof coating is a surface restoration, so most Wellington projects don't require a building permit — though we recommend confirming with the village if your insurer or HOA asks for documentation. Architectural review is the frequent hurdle in the master-planned communities: color approval is required before roof work, and we supply the spec sheet, color card, and manufacturer documentation your board needs, matching approved palettes from 3,000+ colors.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give Wellington homeowners a documented path to keeping coverage — at a fraction of the re-roof cost the insurer's letter implies.",
      ],
    },
    neighborhoods: [
      { name: "Olympia", note: "2000s tile in gated communities — ARB color approval, full spec package" },
      { name: "Versailles", note: "estate barrel tile with strict palettes — documentation provided" },
      { name: "The Isles at Wellington", note: "lakefront S-tile now in the restoration window" },
      { name: "Palm Beach Point / equestrian estates", note: "estate roofs plus barns and stables — multi-structure mobilizations" },
      { name: "Aero Club", note: "airpark community with large estate tile fields" },
      { name: "Binks Forest", note: "golf-community tile roofs deep in the restoration window" },
    ],
  },

  "west-palm-beach": {
    intro: [
      "West Palm Beach is the county seat and by far its most varied roof market. The historic districts — El Cid, Flamingo Park, Grandview Heights, Old Northwood — are full of 1920s Mediterranean-revival homes with clay barrel tile, while downtown and the waterfront carry condos and commercial flat roofs, and the western suburbs off Okeechobee and Forest Hill bring 1970s–2000s tile subdivisions. Every era needs a different system.",
      "In the historic districts, the original barrel and clay tile is often irreplaceable, and preservation is the priority — our SmartShield (RP2) system cleans, seals, and recolors that tile rather than tearing it off. Downtown and along the Intracoastal, large flat decks on condos and commercial buildings are prime for reflective elastomeric membrane. Out west, faded and streaked suburban tile is the classic clean-seal-recolor project.",
      "West Palm Beach is a straightforward trip up I-95 from our Davie shop on University Drive. Fill out the contact form and the Factory Price Sheet is emailed to you instantly, whatever the roof.",
    ],
    roofLandscape: {
      heading: "The West Palm Beach roof landscape",
      paragraphs: [
        "The historic core is defined by 1920s clay barrel tile on Mediterranean-revival homes, plus flat and low-slope sections that need genuine waterproofing membranes. Downtown and the waterfront add condo and commercial flat roofs ideal for reflective coating, while the western suburbs run to 1970s–2000s concrete barrel and S-tile aging on a predictable, neighborhood-by-neighborhood schedule.",
        "Coastal salt near the Intracoastal, high inland humidity, and mature canopy across the historic districts all drive aggressive biological growth. FungalShield (RP1) clears it; SmartShield (RP2) restores tile in one project; and RoofShield (RP3) with TAS-106 Dade County Wind Uplift Certification serves the most exposed roofs. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in West Palm Beach",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit, but West Palm Beach's designated historic districts can carry additional review for exterior work; we confirm requirements up front and prepare spec sheets, color cards, and manufacturer documentation as needed. Exact color-matching from a 3,000+ palette is essential in the historic neighborhoods, and we handle HOA architectural review in the western communities.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give West Palm Beach homeowners and associations a documented path to keeping coverage — at a fraction of the re-roof cost the insurer's letter implies, and without destroying original historic tile.",
      ],
    },
    neighborhoods: [
      { name: "El Cid", note: "1920s clay barrel tile — historic-district preservation, not replacement" },
      { name: "Flamingo Park", note: "Mediterranean-revival homes with original tile — careful color matching" },
      { name: "Old Northwood", note: "historic bungalows and tile roofs with district review" },
      { name: "Downtown / waterfront condos", note: "large flat decks — reflective commercial membrane coating" },
      { name: "Andros Isle / western suburbs", note: "1990s–2000s subdivision tile in the restoration window" },
      { name: "Ibis Golf & Country Club", note: "gated estate tile roofs — ARB color approval, full spec package" },
    ],
  },

  westlake: {
    intro: [
      "Westlake is Palm Beach County's newest city — a master-planned community that broke ground in the mid-2010s and is still growing fast out west near Seminole Pratt Whitney Road. Almost all of its roofs are new construction: concrete barrel and S-tile and some flat sections on homes built to current, strong wind codes. That youth changes the conversation from repair to protection.",
      "New tile roofs in Westlake aren't failing — but the surface finish begins fading, chalking, and picking up algae streaks within the first several years in this humid, open, sun-exposed setting. A proactive FungalShield (RP1) or SmartShield (RP2) coating locks in the color, controls biological growth before it stains, and adds a sealed protective layer while the tile is still young, extending the life of a roof that's already in good shape.",
      "Westlake is a direct trip west from our Davie shop on University Drive. Fill out the contact form and the Factory Price Sheet is emailed to you instantly, so you can plan a proactive coating before problems ever start.",
    ],
    roofLandscape: {
      heading: "The Westlake roof landscape",
      paragraphs: [
        "The stock is overwhelmingly 2010s-and-later concrete barrel and S-tile on homes built to current codes, with some flat and low-slope sections on modern floor plans. Because the whole city is new and built in phases, roofs will move into the proactive-coating window neighborhood by neighborhood — and getting ahead of the fade and streaking is far easier than reversing it.",
        "The area's open exposure means intense UV and, with the surrounding lakes and canals, high humidity that encourages algae on shaded slopes. FungalShield (RP1) is the entry-level protection; SmartShield (RP2) adds sealing and color-lock with Cool Pigment Technology, keeping even dark board-approved tones cooler. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Westlake",
      paragraphs: [
        "Coating is a surface restoration and generally doesn't require a building permit, though we recommend confirming with the city if your insurer or HOA asks for documentation. As a master-planned community, Westlake enforces architectural standards and color approval, and we supply the spec sheet, color card, and manufacturer documentation your board needs, matching approved palettes from 3,000+ colors.",
        "Even on newer roofs, insurers increasingly reward documented protection: our coating systems paired with an Additional Roof Life Certification give Westlake homeowners a documented path to demonstrating roof condition to Citizens or a private carrier and preserving favorable coverage.",
      ],
    },
    neighborhoods: [
      { name: "Westlake Adventure Park area", note: "newest-phase tile roofs — proactive protective coating" },
      { name: "Seminole Pratt Whitney corridor", note: "growing single-family sections with new barrel and S-tile" },
      { name: "First residential phases", note: "earliest homes now entering the proactive-coating window" },
      { name: "Town center / townhomes", note: "modern flat and low-slope sections — membrane and SmartShield" },
      { name: "Newer gated villages", note: "HOA color approval required — full documentation supplied" },
    ],
  },

  "key-west": {
    intro: [
      "Key West is a world apart from the mainland — the last island of the Florida Keys in Monroe County, where roofs battle some of the most punishing salt-air exposure anywhere we work. The historic core of Old Town is famous for its conch houses: 19th-century wood-frame homes with steep metal roofs, wide porches, and details protected by one of the strictest preservation regimes in the country. Beyond Old Town, New Town and the Truman Annex area add mid-century and newer homes with metal, tile, and low-slope roofs.",
      "Metal is the signature Key West roof, and salt is its relentless enemy — standing-seam and V-crimp panels chalk, corrode at fasteners, and lose their finish under constant sea spray and blazing sun. A properly prepped elastomeric coating re-seals the panels, stops rust and leaks at seams and fasteners, and reflects heat off homes that rarely have much attic to spare. On the flat and low-slope decks common on newer construction, our membrane systems turn ponding surfaces into a single sealed deck without a tear-off.",
      "Key West is a long haul down the Overseas Highway from our Davie shop on University Drive, so we plan Keys projects carefully and efficiently. Complete the contact form and the Factory Price Sheet is emailed to you instantly, well before we make the trip down.",
    ],
    roofLandscape: {
      heading: "The Key West roof landscape",
      paragraphs: [
        "Old Town's historic conch houses wear steep standing-seam and V-crimp metal roofs — many original or period-correct — where preservation, not replacement, is the goal. A coating that re-seals and restores the metal keeps the character intact while stopping the corrosion and leaks that constant salt spray drives. New Town and outlying areas add concrete tile, metal, and flat/low-slope roofs on mid-century and newer homes.",
        "The extreme salt load, unbroken tropical sun, and high humidity make Key West roofs age faster than almost anywhere on the mainland — corrosion at fasteners and flashings and biological growth in shaded lanes are constant. FungalShield (RP1) clears the growth, our elastomeric metal and membrane coatings re-seal the surfaces, and RoofShield (RP3) with TAS-106 Dade County Wind Uplift Certification suits the hurricane-exposed island. All coating materials are manufactured by RoofProtect Products.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Key West",
      paragraphs: [
        "Key West enforces some of the toughest preservation rules in Florida: in the historic districts, exterior work — including roof color and finish on the landmark conch houses — falls under the city's Historic Architectural Review Commission (HARC), and approval is required before any work proceeds. We prepare the spec sheets, color cards, and manufacturer documentation a HARC submission needs and match historically appropriate colors from a 3,000+ palette. Coating itself is a surface restoration and generally doesn't require a structural building permit, but we always confirm requirements with the city.",
        "Insurance is a serious pressure point in the Keys, where carriers scrutinize roof age and condition heavily. Our coating systems paired with an Additional Roof Life Certification give Key West homeowners a documented path to satisfying Citizens or a private carrier and avoiding a forced re-roof — critical on historic homes where a tear-off would destroy irreplaceable original metal.",
      ],
    },
    neighborhoods: [
      { name: "Old Town conch houses", note: "19th-century wood-frame homes with historic metal roofs — HARC review, preserve original metal" },
      { name: "Truman Annex", note: "restored historic and newer homes with metal and low-slope roofs" },
      { name: "Casa Marina", note: "larger historic-district homes with metal and tile — salt-grade coating" },
      { name: "New Town", note: "mid-century and newer homes with tile, metal, and flat decks" },
      { name: "Bahama Village", note: "historic cottages with metal roofs in shaded lanes — corrosion and algae control" },
      { name: "Key West Golf Club / outer island", note: "newer homes with concrete tile and low-slope sections" },
    ],
  },
};
