/**
 * Pilot: deep-localized content for the 10 highest-value city pages
 * (owner-approved list, July 2026 — western Broward + NW Miami-Dade).
 *
 * Cities with an entry here get a genuinely unique intro plus extra
 * local sections (roof landscape, permits & HOA notes, neighborhoods).
 * All other cities keep the existing template + hashed content variants.
 */

export interface LocalSection {
  heading: string;
  paragraphs: string[];
}

export interface CityLocalContent {
  /** Replaces the hashed intro variant with a fully unique intro. */
  intro: string[];
  /** "The <city> roof landscape" — housing stock, roof types, local conditions. */
  roofLandscape: LocalSection;
  /** Permits, HOA, and local rules specific to this city. */
  permitsAndRules: LocalSection;
  /** Neighborhoods / communities we work in, with a local note each. */
  neighborhoods: { name: string; note: string }[];
}

export const cityLocalContent: Record<string, CityLocalContent> = {
  /* ── BROWARD ─────────────────────────────────────────────── */

  "pembroke-pines": {
    intro: [
      "Pembroke Pines is one of our busiest service areas — and one of the most HOA-dense cities in Florida. Master-planned communities like SilverLakes, Chapel Trail, Grand Palms, and Pembroke Falls were built in waves through the late 1980s and 1990s, which means tens of thousands of barrel-tile and S-tile roofs all hit the 25–35 year mark at roughly the same time. That's exactly the window where restoration beats replacement.",
      "Most of the calls we get from Pembroke Pines start the same way: the roof is structurally fine, but the tile has gone chalky, black algae streaks run down the north-facing slopes, and the HOA has sent a courtesy notice about roof appearance. A pressure clean plus our SmartShield elastomeric system solves all three — restoring color the HOA will approve, killing the algae, and sealing the tile field for another 10–15 years.",
      "Because Pembroke Pines is a short drive west of our Davie shop on University Drive, scheduling is fast — most Pines projects go from free inspection to finished roof inside two weeks, weather permitting.",
    ],
    roofLandscape: {
      heading: "The Pembroke Pines roof landscape",
      paragraphs: [
        "West of Flamingo Road, Pembroke Pines is almost entirely 1988–2000 construction: concrete S-tile and barrel tile on 4/12–5/12 pitches, built to pre- and post-Andrew codes depending on the year. East of University Drive the housing stock is older — 1960s–70s ranch homes in the original Pembroke Pines neighborhoods, many with flat or low-slope sections over garages and Florida rooms that need a true waterproofing membrane, not just paint.",
        "The lakes and canals that thread through SilverLakes and Chapel Trail keep humidity high at roof level, so algae and fungal streaking show up here faster than in drier inland cities. Our FungalShield (RP1) treatment is the entry-level fix; most Pines homeowners step up to SmartShield (RP2) so the cleaning, color restoration, and waterproofing happen in one project.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Pembroke Pines",
      paragraphs: [
        "Roof coating is a surface restoration, not a structural alteration, so most Pembroke Pines projects do not require a building permit — though we always recommend confirming with the city's Building Division if your insurer or HOA asks for documentation. What Pines homeowners deal with far more often is HOA architectural review: nearly every community west of Flamingo requires color approval before any roof work. We supply a written product spec sheet, BASF color card, and manufacturer documentation for your board, and we can color-match your community's approved palette from 3,000+ options.",
        "If Citizens or a private carrier has flagged your roof's age, our coating systems paired with an Additional Roof Life Certification give Pembroke Pines homeowners a documented path to keeping coverage — at a fraction of the re-roof cost the insurer's letter implies you need.",
      ],
    },
    neighborhoods: [
      { name: "SilverLakes", note: "1990s S-tile on lakefront lots — heavy algae exposure, strict color palettes" },
      { name: "Chapel Trail", note: "late-80s/90s barrel tile, many roofs now past year 30" },
      { name: "Pembroke Falls", note: "gated, HOA color approval required — we handle the paperwork" },
      { name: "Grand Palms", note: "golf community with larger estate roofs where volume pricing applies" },
      { name: "Century Village", note: "flat-deck condo buildings — commercial membrane coating available" },
    ],
  },

  miramar: {
    intro: [
      "Miramar runs 14 miles east to west, and its roofs tell that story in order: 1950s–60s CBS homes with flat and low-slope roofs in historic east Miramar near State Road 7, 1980s tile in the middle of the city, and huge 1990s–2000s master-planned communities — Silver Falls, Riviera Isles, Sunset Lakes, Vizcaya — out west near I-75. We work across all three eras, and the right system is different for each.",
      "East-side flat roofs are usually layered with decades of old built-up tar; our elastomeric membrane bonds directly over those surfaces and turns them into a single sealed deck without a tear-off. Out west, the story is HOA-governed barrel tile hitting the 20–30 year window — structurally sound, but faded, streaked, and starting to fail insurance inspections on age alone.",
      "That insurance angle matters more in Miramar than almost anywhere we work: we regularly coat west Miramar roofs specifically to satisfy carrier requirements, pairing the system with an Additional Roof Life Certification so the homeowner keeps coverage without a $30,000+ forced re-roof.",
    ],
    roofLandscape: {
      heading: "The Miramar roof landscape",
      paragraphs: [
        "West Miramar's dominant roof is concrete barrel tile on a 5/12 pitch — the steeper pitch and heavier tile profile put most SmartShield projects in the $2.35–$2.75/sq ft range and RoofShield in the $4.00–$4.75 range. Because these communities were built quickly in large phases, whole streets age together: when one roof on your block starts showing chalk and streaking, yours is usually next.",
        "Historic Miramar east of University Drive is a different job entirely — smaller footprints, flat decks, parapet walls, and older penetrations that need sealing. These are some of the most cost-effective restorations we do: a 1,500 sq ft flat deck can often be fully membraned for less than a tenth of replacement cost.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Miramar",
      paragraphs: [
        "Coating projects in Miramar generally don't trigger a building permit because no structural work is performed — but west Miramar's HOAs (Sunset Lakes, Riviera Isles, Silver Falls, and others) almost all require architectural review board approval for roof color. We provide the spec sheets and color documentation your board needs, and BASF Cool Pigment Technology means even a dark color choice stays energy-compliant.",
        "Under Florida SB 2-D, insurers must offer credits for certified roof systems. Our RoofShield (RP3) system carries TAS-106 Dade County Wind Uplift Certification — the strongest wind rating available for a liquid coating — which is why it's our most-requested system among Miramar homeowners fighting carrier non-renewal letters.",
      ],
    },
    neighborhoods: [
      { name: "Silver Falls & Silver Isles", note: "1990s barrel tile now in the prime restoration window" },
      { name: "Riviera Isles", note: "lakefront estate roofs, strict HOA palettes — full documentation provided" },
      { name: "Sunset Lakes", note: "large gated community, frequent insurance-driven coating projects" },
      { name: "Historic East Miramar", note: "1950s–60s flat and low-slope decks — membrane over old built-up tar" },
      { name: "Miramar Park of Commerce", note: "one of Florida's largest business parks — commercial flat-roof coating" },
    ],
  },

  weston: {
    intro: [
      "Weston is a city where the roofs are governed as carefully as the streetscapes. Nearly every neighborhood — from Weston Hills to Savanna to The Ridges — sits under an HOA with a defined roof color palette and an architectural review process, and the city itself maintains some of the strictest appearance standards in Broward. We've built our Weston process around that reality: documentation first, then the roof.",
      "The housing stock is remarkably consistent: 1990s–2000s concrete S-tile and barrel tile, built post-Andrew to strong wind codes, on homes that are now 20–35 years old. These roofs almost never need replacement — the tile is sound — but the surface is exhausted: faded color, chalking, hairline mortar cracks at ridge caps, and the black streaking that Weston's lakes and year-round irrigation encourage.",
      "Weston is also where the dark-roof trend is strongest in our service area. Our SmartShield system's BASF Cool Pigment Technology is the answer boards accept: a deep charcoal or slate look that still reflects solar infrared, so the ARB gets its aesthetic and you don't get a hotter attic.",
    ],
    roofLandscape: {
      heading: "The Weston roof landscape",
      paragraphs: [
        "Because Weston was master-planned by Arvida and built in defined phases, roof aging is highly predictable by neighborhood: Country Isles and Weston Hills (late 1980s–early 90s) are the oldest and most restoration-ready, while The Ridges and San Messina (2000s) are just entering the window where a proactive coating prevents the damage instead of repairing it.",
        "The city's canal-and-lake system keeps ambient humidity high, and Weston's mature landscaping shades many roof planes — both accelerate biological growth. On tile this age we almost always find open or hairline-cracked ridge cap mortar during inspection; we flag and address it before any coating system goes on, because a warranted membrane over a failing ridge is a warranty nobody can honor.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Weston",
      paragraphs: [
        "Weston contracts its building department services, and surface restoration generally does not require a permit — but virtually every Weston project requires HOA architectural review. Boards here typically want a product specification sheet, a manufacturer color card, and proof of licensing and insurance before approving. We prepare that package as a standard part of every Weston quote, and we can color-match any approved tile sample in your community's palette.",
        "For insurance-driven projects, RoofShield (RP3) with its TAS-106 Dade County Uplift Certification plus an Additional Roof Life Certification is the strongest documentation package we can put in front of a carrier questioning a 25-year-old Weston roof.",
      ],
    },
    neighborhoods: [
      { name: "Weston Hills Country Club", note: "estate barrel tile, ARB color approval — full spec package supplied" },
      { name: "Savanna", note: "family community with S-tile roofs now 20–25 years old" },
      { name: "The Ridges", note: "2000s tile entering the proactive-coating window" },
      { name: "Country Isles", note: "Weston's oldest neighborhoods — most restoration-ready roofs in the city" },
      { name: "Bonaventure", note: "mixed condo and single-family — flat-deck and tile systems both served" },
    ],
  },

  davie: {
    intro: [
      "Davie is home — The Roof Store has operated from 4801 S University Drive since 1994, and there's a fair chance we've already coated a roof on your street. Being the local shop matters in a town like this: Davie's roofs range from flat-deck barns and stables in the equestrian sections to Spanish tile on new construction near Nova Southeastern, and knowing which system fits which roof is the difference between a restoration that lasts 15 years and paint that fails in two.",
      "The equestrian corridors — around Orange Drive, Shenandoah, and the ranch sections west of Flamingo — give us some of our largest residential projects: 3,000–6,000 sq ft roofs plus barn and outbuilding decks, where per-square-foot pricing drops toward the bottom of our published ranges and one mobilization covers the whole property.",
      "Closer to University Drive and Davie Road, the stock shifts to 1970s–90s suburban tile and flat-roof homes. These are classic SmartShield candidates: pressure clean, seal, and recolor in 3,000+ BASF colors — including the darker tones Davie homeowners increasingly ask for, kept cool by Cool Pigment Technology.",
    ],
    roofLandscape: {
      heading: "The Davie roof landscape",
      paragraphs: [
        "No other city in our service area mixes roof types like Davie: metal and flat-deck agricultural buildings, 1970s ranch homes with low-slope sections, barrel tile subdivisions from the 90s, and townhome communities near the university corridor. Agricultural dust from the ranch sections settles on roof surfaces and feeds biological growth, so Davie roofs often need a more thorough pre-coat cleaning than coastal ones — a step we never skip, because coating over contamination is how warranties die.",
        "Davie's Old West character also means larger lots and fewer HOAs than neighboring Pembroke Pines or Weston — for many Davie homeowners the decision is purely practical: extend a sound roof for 60–70% less than replacement, with no dumpster and no weeks of tear-off noise on the property.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, local rules & insurance in Davie",
      paragraphs: [
        "The Town of Davie treats roof coating as surface restoration, so a permit is generally not required — and with fewer HOA communities than surrounding cities, most Davie projects can go straight from free inspection to scheduling. Where HOAs do exist (Forest Ridge, Pine Island Ridge, and newer townhome communities), we provide the standard approval package.",
        "For equestrian and agricultural properties, we coordinate around animals and turnout schedules — our crews have worked Davie barn roofs for decades and know the routine. And for any Davie homeowner facing an insurance age-out letter, our shop is five minutes away: bring the letter in, or call 954-210-9614, and we'll map the coating-plus-certification path that keeps your coverage.",
      ],
    },
    neighborhoods: [
      { name: "Shenandoah & Orange Drive corridor", note: "equestrian estates — house, barn, and outbuilding roofs in one project" },
      { name: "Forest Ridge", note: "tile community with HOA review — approval package provided" },
      { name: "Pine Island Ridge", note: "condo and townhome flat decks alongside tile buildings" },
      { name: "Rolling Hills", note: "golf-adjacent 1970s–80s homes, prime restoration age" },
      { name: "University corridor", note: "newer tile townhomes near NSU — proactive sealing projects" },
    ],
  },

  plantation: {
    intro: [
      "Plantation's defining feature — its magnificent canopy of mature oaks — is also its defining roofing problem. Those trees drop leaves, pods, and shade across roof planes all year, holding moisture against the surface and feeding the black algae streaking that Plantation homeowners fight more than any other city we serve. It's why FungalShield treatments and algae-resistant SmartShield coatings make up an outsized share of our Plantation work.",
      "The housing stock splits cleanly at University Drive. East Plantation — the historic acre-lot sections along Broward Boulevard and the neighborhoods around Plantation Historical Museum — is 1950s–70s construction with a lot of flat-deck and low-slope roofs, many carrying decades of old built-up tar our membrane bonds straight over. West of University, Plantation Acres and Hawks Landing bring larger tile roofs and, in the gated communities, HOA color review.",
      "Plantation homeowners tend to be renovators, not movers — people restoring mid-century homes they intend to keep. A coating system fits that mindset: it preserves the original roof structure, solves the algae and fading, and costs 60–70% less than tearing off a roof that doesn't need to go.",
    ],
    roofLandscape: {
      heading: "The Plantation roof landscape",
      paragraphs: [
        "Shade is the variable that changes everything here. A north-facing tile slope under oak canopy in Plantation can carry ten times the biological load of the same roof in an open subdivision, so our inspections map the shaded planes specifically — those areas get extra treatment during the pre-coat cleaning so growth doesn't return under the new surface.",
        "Plantation Acres adds a rural twist: larger footprints, outbuildings, and well-water irrigation that leaves mineral staining on tile. Meanwhile the Central Park and Jacaranda areas are classic 1970s–80s Broward tile now 40+ years old — roofs that pass structural inspection but look exhausted, which is precisely the restoration sweet spot.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Plantation",
      paragraphs: [
        "The City of Plantation does not generally require a permit for surface-level roof restoration. HOA requirements vary sharply by neighborhood: Hawks Landing and the Jacaranda communities run formal architectural review, while the acre-lot sections east of University and most of Plantation Acres have no HOA at all. Where approval is needed, our SmartShield color range covers over 3,000 BASF Cool Pigment options and we submit the documentation for you.",
        "Plantation's older flat-deck homes are frequent targets of insurance age-out letters. A membrane coating with an Additional Roof Life Certification documents the restored condition for your carrier — we've kept many east-Plantation mid-century homes insured this way without a tear-off.",
      ],
    },
    neighborhoods: [
      { name: "Plantation Acres", note: "acre-plus lots, outbuildings, well-water staining — larger-roof pricing applies" },
      { name: "Hawks Landing", note: "gated estate tile with formal ARB review — we handle submissions" },
      { name: "Central Park / Jacaranda", note: "1970s–80s tile at prime restoration age" },
      { name: "East Plantation historic sections", note: "mid-century flat decks — membrane over original built-up roofing" },
      { name: "Plantation Isles", note: "canal-front homes where humidity accelerates algae growth" },
    ],
  },

  "coral-springs": {
    intro: [
      "Coral Springs was built almost entirely between 1970 and 1995, which makes it the single most restoration-ready city in our service area: tens of thousands of roofs, nearly all between 30 and 55 years old, in a city famous for enforcing appearance standards. The original flat-deck ranch homes near University Drive and the barrel-tile subdivisions further west are aging on the same clock, and very few of them actually need replacement — they need their surface renewed.",
      "Coral Springs' reputation for strict code enforcement is real: the city built its brand on manicured neighborhoods, and roof condition is part of that. A chalky, black-streaked roof draws attention here faster than anywhere else in Broward. Our process — pressure clean, repair flagged tiles and ridge caps, then a warranted elastomeric system — brings a roof back inside both HOA standards and the city's expectations in a matter of days.",
      "For homeowners chasing the modern dark-tile look that's spreading through Eagle Trace and Heron Bay, SmartShield's BASF Cool Pigment Technology reflects solar heat even in the deepest charcoals — the aesthetic upgrade without the cooling-bill penalty.",
    ],
    roofLandscape: {
      heading: "The Coral Springs roof landscape",
      paragraphs: [
        "The city's development marched west decade by decade: 1970s flat-deck and shingle ranch homes in the original sections east of University, 1980s S-tile through the center, and 1990s barrel tile in the gated golf communities out west. The most common conditions we document on Coral Springs inspections are UV-bleached tile color, open or hairline-cracked ridge cap mortar, algae streaking on shaded planes, and — on the older flat sections — built-up roofing at the end of its sealant life.",
        "All of it is coatable. The flat decks take our seamless membrane directly over the old surface; the tile fields take SmartShield for sealing and color, or RoofShield where the homeowner wants the TAS-106 hurricane-rated monolithic retrofit — increasingly popular in Coral Springs as insurance carriers scrutinize 1980s roofs.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Coral Springs",
      paragraphs: [
        "Surface restoration generally does not require a Coral Springs building permit, but this is a city where documentation pays: the community's architectural standards mean HOA boards (and sometimes neighbors) ask questions, and we answer them with a full spec-and-color package before work begins. Communities like Eagle Trace, Heron Bay-adjacent sections, and the Maplewood/Ramblewood areas each have their own palettes we can match exactly.",
        "Coral Springs' 1970s–80s roofs are squarely in the age range Florida carriers flag. Our coating systems plus an Additional Roof Life Certification give the insurer documented proof of restored condition — the alternative to a five-figure re-roof on a structurally sound roof.",
      ],
    },
    neighborhoods: [
      { name: "Eagle Trace", note: "gated golf-community tile with HOA palettes — exact color matching" },
      { name: "Maplewood / Ramblewood", note: "1970s–80s original sections, flat decks and early tile" },
      { name: "Westchester & Wyndham Lakes", note: "1980s–90s S-tile at peak restoration age" },
      { name: "Cypress Run / The Isles", note: "canal-adjacent homes with heavier algae loads" },
      { name: "Downtown / University corridor", note: "commercial flat roofs and townhome communities" },
    ],
  },

  sunrise: {
    intro: [
      "Sunrise splits into two roofing worlds. The residential core — Sunrise Golf Village and the 1960s–70s neighborhoods east of Pine Island Road — carries some of the oldest flat-deck housing stock in Broward, homes whose original built-up roofs have been patched for decades and are perfect candidates for a full seamless membrane. Out west, Sawgrass Mills and the arena anchor one of the county's largest commercial corridors, where we coat big flat commercial decks the same way, just at scale.",
      "That older east-side stock is where Sunrise homeowners feel insurance pressure hardest: carriers see a 1968 flat roof and send the age-out letter regardless of actual condition. Our elastomeric membrane over the existing deck, documented with an Additional Roof Life Certification, is the counter-argument — restored, warranted, and certified, at a fraction of what the letter implies you must spend.",
      "Sunrise summers also make the energy math unusually favorable: on a low-slope roof taking full afternoon sun, SmartShield's reflective BASF pigments routinely drop attic temperatures 15–25°F, which residents notice on the very next FPL bill.",
    ],
    roofLandscape: {
      heading: "The Sunrise roof landscape",
      paragraphs: [
        "Sunrise Golf Village — the city's original core, famous once for its upside-down house — is wall-to-wall 1960s CBS homes with flat and low-slope roofs. Most have two or three generations of patching: silver coat over tar over the original built-up deck. Our membrane bonds over that history and turns it into one sealed surface; no tear-off, no dumpster, usually done in a day or two.",
        "West of Pine Island the stock modernizes into 1980s–90s tile in communities around Welleby and Sawgrass, where the work shifts to classic tile restoration — cleaning, ridge repair, sealing, color. The commercial corridor along the Sawgrass Expressway adds warehouse and retail flat decks where our systems compete directly with single-ply replacement at a fraction of the cost and disruption.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Sunrise",
      paragraphs: [
        "The City of Sunrise treats coating as surface restoration — generally no permit required — and the older east-side neighborhoods mostly have no HOA, so those projects move quickly from inspection to application. The Welleby-area communities and newer townhome developments do run architectural review, and we supply the standard spec-and-color package wherever it's needed.",
        "For commercial property owners along the Sawgrass corridor: our flat-deck systems install without closing your building, and cure fast enough that tenant disruption is minimal. Call 954-210-9614 for a commercial walkthrough.",
      ],
    },
    neighborhoods: [
      { name: "Sunrise Golf Village", note: "1960s flat decks — full membrane over layered built-up roofing" },
      { name: "Welleby", note: "1980s tile communities with HOA review" },
      { name: "Sawgrass corridor", note: "commercial flat roofs — warehouse, retail, and office decks" },
      { name: "Sunrise Lakes", note: "condo flat decks — association and volume pricing available" },
      { name: "New River Estates", note: "1970s–80s single-family at prime restoration age" },
    ],
  },

  /* ── MIAMI-DADE ──────────────────────────────────────────── */

  hialeah: {
    intro: [
      "Hialeah is Florida's fifth-largest city and one of its hardest-working — block after block of 1950s–70s CBS homes, most with flat or low-slope roofs, in a city where families keep their houses for generations. That combination makes Hialeah one of the strongest restoration markets in South Florida: these roofs were built solid, they've been patched faithfully for decades, and a seamless elastomeric membrane gives them another 15+ years without the $20,000+ tear-off that many Hialeah budgets simply shouldn't have to absorb.",
      "The typical Hialeah roof we inspect has layers: original built-up tar, a silver coat from the 90s, patch repairs around the AC stand and vents. Our membrane bonds over all of it, seals the penetrations, and turns the whole deck into one waterproof surface. On the barrel-tile homes common in the newer western sections near the Gardens line, SmartShield handles cleaning, sealing, and color in one project.",
      "Hialeah homeowners are also squarely in the crosshairs of Florida's insurance age-out problem — a structurally sound 1965 roof still draws the carrier letter. A coating system documented with an Additional Roof Life Certification is the practical answer, and we walk Hialeah families through that paperwork in English or Spanish. Hablamos español — llámenos al 954-210-9614.",
    ],
    roofLandscape: {
      heading: "The Hialeah roof landscape",
      paragraphs: [
        "East Hialeah and the neighborhoods around Amelia Earhart Park are the city's oldest — 1950s CBS with parapet-wall flat roofs, many carrying 60+ years of patch history. West Hialeah toward the Gardens boundary modernizes into 1970s–80s tile and low-slope combinations. Throughout the city, the flat-roof share is far higher than the South Florida average, which is exactly the roof type where liquid-applied membranes outperform everything short of full replacement.",
        "Hialeah's density also means commercial work: warehouses along the Palmetto, storefronts on West 49th Street, and light-industrial decks near the Hialeah Market area. We coat those the same way — seamless membrane, minimal business disruption, no tear-off debris.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, local rules & insurance in Hialeah",
      paragraphs: [
        "Roof coating is surface restoration and generally does not require a City of Hialeah permit — though for RoofShield installations we provide the full manufacturer inspection report and warranty paperwork, which many Hialeah homeowners want on file for insurance purposes anyway. Most Hialeah neighborhoods have no HOA, so projects move fast: free inspection, written quote, and typically application within two weeks.",
        "Miami-Dade is the birthplace of the TAS-106 uplift standard, and our RoofShield (RP3) system is the only liquid coating in the world certified to it — a meaningful credential on Hialeah's older roofs when a carrier questions wind resistance.",
      ],
    },
    neighborhoods: [
      { name: "East Hialeah", note: "1950s flat parapet roofs — membrane over generations of patching" },
      { name: "West Hialeah", note: "1970s–80s tile and low-slope mixes near the Gardens line" },
      { name: "Palm Springs North area", note: "suburban tile at prime restoration age" },
      { name: "West 49th Street corridor", note: "storefront and commercial flat decks" },
      { name: "Palmetto industrial corridor", note: "warehouse roof coating with minimal tenant disruption" },
    ],
  },

  "miami-lakes": {
    intro: [
      "Miami Lakes was master-planned by the Graham family starting in 1962 around a simple idea — neighborhoods wrapped around lakes — and sixty years later that design defines its roofing needs. Nearly every section of town sits within a few hundred feet of water, which keeps humidity at roof level high year-round and makes algae and fungal streaking the number-one complaint we hear from Miami Lakes homeowners.",
      "The housing stock is upscale and tile-heavy: barrel and S-tile on the lakefront estates and the Royal Oaks sections, mixed with the original 1960s–70s Graham-era homes in the eastern loops off Ludlam Road. The older tile has fifty years of UV behind it; the newer tile is fighting the lake humidity. Both end at the same place — a roof that's structurally fine but visibly tired — and both are solved with cleaning plus a sealed, recolored SmartShield surface rather than replacement.",
      "Miami Lakes residents maintain their properties to a standard the town's design invites, and several communities run architectural review for roof color. We supply the full documentation package and match colors from 3,000+ BASF Cool Pigment options — including the darker modern tones that stay cool in the Miami sun.",
    ],
    roofLandscape: {
      heading: "The Miami Lakes roof landscape",
      paragraphs: [
        "The town's famous curving loop streets mean roofs face every compass direction, and on lakefront lots the water-facing slopes consistently carry the heaviest biological growth — our inspections map those planes for extra treatment during pre-coat cleaning. The Main Street area and the business parks along the Palmetto add commercial flat decks to the mix, which we coat with the same seamless membrane at commercial scale.",
        "Graham-era homes from the 60s and 70s often hide low-slope sections behind tile mansards — a detail unique to this era of construction that inexperienced applicators miss. Those sections need true membrane waterproofing, not tile paint, and we quote them as such.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Miami Lakes",
      paragraphs: [
        "The Town of Miami Lakes generally does not require a permit for surface roof restoration. Communities like Royal Oaks and the gated lakefront sections run architectural review for color changes — we prepare the spec sheet, color card, and licensing documentation for your board as standard. For the town's many original-era roofs now drawing insurance scrutiny, our systems paired with an Additional Roof Life Certification document the restored condition for your carrier.",
        "Being twenty minutes from our Davie shop, Miami Lakes scheduling is quick: most projects run inspection to completion inside two weeks, weather permitting.",
      ],
    },
    neighborhoods: [
      { name: "Royal Oaks", note: "gated 1990s tile with ARB color review — full documentation supplied" },
      { name: "Lake Patricia & eastern loops", note: "original Graham-era 1960s–70s homes, mansard low-slope sections" },
      { name: "Lakefront estates", note: "water-facing slopes carry the heaviest algae loads in town" },
      { name: "Main Street area", note: "mixed-use and commercial flat decks" },
      { name: "Miami Lakes business parks", note: "office and light-industrial roof coating along the Palmetto" },
    ],
  },

  "miami-gardens": {
    intro: [
      "Miami Gardens is Miami-Dade's largest predominantly residential city, and its housing stock is remarkably consistent: 1960s and 70s single-family CBS homes, most with their original flat, low-slope, or gravel built-up roofs — a huge share of which have never had a full restoration, only spot repairs. For these roofs, our liquid-applied membrane is usually the single most cost-effective improvement the house can get: sealed, warranted, and done in days for 60–70% less than replacement.",
      "This is also the city where Florida's insurance crisis bites hardest per household. Carriers see a 50-year-old roof and non-renew on age alone, and a forced re-roof can equal a year's income. We built our coating-plus-certification path for exactly this situation: restore the roof, document it with an Additional Roof Life Certification, and give the homeowner paperwork that answers the carrier letter — without the tear-off.",
      "Between Hard Rock Stadium, the Calder area, and the commercial corridors along NW 27th Avenue and the Palmetto, Miami Gardens also carries substantial commercial flat-roof stock that we service with the same membrane systems at commercial scale.",
    ],
    roofLandscape: {
      heading: "The Miami Gardens roof landscape",
      paragraphs: [
        "Neighborhoods like Norland, Bunche Park, Scott Lake, and Andover were built in waves through the 60s and 70s, so whole blocks share the same roof age and the same conditions: sun-cooked built-up surfaces, ponding areas around drains and AC stands, and sealant that gave up years ago. Our membrane handles all of it — it bridges hairline cracking, seals penetrations, and its reflective surface drops attic temperatures noticeably on these low-slope designs.",
        "The city's tile share is smaller but present in the newer western sections; those follow our standard tile restoration path. Either way, every Miami Gardens inspection is free, and every quote is written — no phone-estimate guesswork on a roof this consequential to insure.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, local rules & insurance in Miami Gardens",
      paragraphs: [
        "Surface roof restoration generally does not require a City of Miami Gardens permit, and most of the city's neighborhoods have no HOA — so the path from inspection to finished roof is one of the fastest in our service area. Where documentation matters most here is insurance: we provide the manufacturer warranty paperwork and, with RoofShield (RP3), the TAS-106 Dade County Uplift Certification — the strongest wind credential a liquid coating can carry, created by this county's own building code.",
        "If you've received a non-renewal or roof-age letter, bring it to the free inspection. We'll tell you honestly whether coating plus certification solves it for your roof — and if the roof genuinely needs structural repair first, we'll tell you that too.",
      ],
    },
    neighborhoods: [
      { name: "Norland & Scott Lake", note: "1960s CBS flat and low-slope roofs — classic membrane candidates" },
      { name: "Bunche Park & Andover", note: "original built-up roofs, many never fully restored" },
      { name: "Carol City core", note: "60s–70s single-family stock facing the heaviest insurance pressure" },
      { name: "NW 27th Avenue corridor", note: "storefront and commercial flat decks" },
      { name: "Stadium / Calder area", note: "commercial and light-industrial roof coating at scale" },
    ],
  },

  /* ── BROWARD — ROUND 2 (July 2026 rollout) ─────────────────── */

  "fort-lauderdale": {
    intro: [
      "Fort Lauderdale is the roofing stress-test of Broward County: salt air off the Atlantic, canal humidity through the Isles, and a housing stock that runs from 1920s Sailboat Bend cottages to brand-new flat-roof modern builds off Las Olas. No single roof system fits the whole city — which is exactly why an evaluation-first approach beats a one-size-fits-all quote.",
      "East of Federal Highway, salt spray is the enemy: it chalks tile finishes and corrodes exposed fasteners years faster than inland. Our elastomeric systems seal the tile field against salt intrusion, and on the flat and low-slope roofs common in Victoria Park, Poinsettia Heights, and the beach area, Roof Shield — the only TAS-106 Miami-Dade uplift-rated monolithic coating — adds documented hurricane protection where it matters most: two miles from open water.",
      "West of I-95, the calls change — 1950s–70s ranch homes in Riverland and Melrose Park with aging shingle and gravel roofs, where insurers are applying the heaviest roof-age pressure in the county. A coating restoration plus an Additional Roof Life Certification is very often the difference between keeping coverage and a five-figure re-roof.",
    ],
    roofLandscape: {
      heading: "The Fort Lauderdale roof landscape",
      paragraphs: [
        "Coastal Fort Lauderdale — Harbor Beach, Rio Vista, the Las Olas Isles, Coral Ridge — mixes barrel tile estates with mid-century flat roofs, all under constant salt-air attack. Inland, Victoria Park and Wilton-adjacent neighborhoods carry 1940s–60s homes with flat additions and Florida rooms that need true waterproofing membranes, while the western neighborhoods are dominated by 1950s–70s CBS ranches on shingle and gravel built-up roofs.",
        "Fort Lauderdale also has more residential flat roof per square mile than almost anywhere in Broward — mid-century moderns, new construction contemporaries, and thousands of condo and townhome decks. Flat roofs fail at seams and ponding areas first; a monolithic coating eliminates the seams entirely, which is why it's our most-requested system east of US-1.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Fort Lauderdale",
      paragraphs: [
        "Roof coating is surface restoration rather than structural work, so most Fort Lauderdale projects don't trigger a building permit — though the city's Development Services Department is stricter than most Broward municipalities about barrier-island and historic-district work, and we confirm requirements before starting in Sailboat Bend or the beach area. Condo and HOA buildings east of the Intracoastal almost always require board approval; we provide full product specs, color documentation, and proof of insurance for the package.",
        "Fort Lauderdale homeowners are squarely in the crosshairs of roof-age underwriting — Citizens and private carriers routinely flag any roof over 15 years within a mile of the coast. Our coating systems paired with an Additional Roof Life Certification give you a documented, inspector-signed answer to that letter at a fraction of replacement cost.",
      ],
    },
    neighborhoods: [
      { name: "Victoria Park", note: "1940s–60s homes with flat additions — classic membrane restoration territory" },
      { name: "Coral Ridge", note: "barrel tile under direct salt exposure — sealing beats replacing" },
      { name: "Rio Vista & Las Olas Isles", note: "waterfront estates, HOA-grade color matching from 3,000+ options" },
      { name: "Poinsettia Heights & Middle River Terrace", note: "mid-century flat and low-slope roofs — Roof Shield candidates" },
      { name: "Riverland & Melrose Park", note: "1950s–70s ranches facing the heaviest insurance roof-age pressure" },
    ],
  },

  hollywood: {
    intro: [
      "Hollywood's roofs span a full century — Joseph Young's original 1920s Hollywood Lakes homes, the post-war ranches of Hollywood Hills, the 1970s tile of Emerald Hills, and miles of coastal condo decks along A1A. Each era fails differently, and we've coated all of them from our shop fifteen minutes away in Davie.",
      "In Hollywood Lakes and the east side, the combination of age and salt air means many tile and flat roofs are on their second or third recoat cycle already — the question isn't whether to maintain them, it's whether the last contractor used real elastomeric coating or cheap roof paint. We see the difference on inspections every week: paint peels in sheets after three summers; a true coating system is still shedding water at year ten.",
      "West of the Turnpike, Emerald Hills and the newer gated sections carry big tile roofs now hitting the 30–50 year window, where a SmartShield restoration saves 60–70% against replacement and satisfies both the HOA's appearance standards and the insurer's age concerns in one project.",
    ],
    roofLandscape: {
      heading: "The Hollywood roof landscape",
      paragraphs: [
        "East Hollywood is flat-roof country: 1920s–50s homes in the Lakes with built-up and modified bitumen decks, plus the low-slope commercial corridor along Hollywood Boulevard and Federal Highway. Central Hollywood — the Hills, Boulevard Heights, Driftwood — is dominated by 1950s–60s CBS ranches under shingle and gravel, while Emerald Hills and the western sections run to 1970s–90s concrete tile on larger footprints.",
        "The beach barrier island is its own market: high-rise and garden condo roofs where board approval, staging logistics, and documented wind-uplift ratings decide who gets the job. Roof Shield's TAS-106 certification — tested to Miami-Dade's uplift standard — is the credential coastal boards ask about by name.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Hollywood",
      paragraphs: [
        "Most Hollywood coating projects proceed without a building permit since coating is a maintenance restoration, not a structural change — but Hollywood Lakes sits partly in historic-district overlay zones where exterior changes get extra scrutiny, and we verify with the city's Building Division when a property is affected. Condo work east of the Intracoastal always goes through board review; we supply the full spec-sheet package.",
        "Hollywood's older housing stock makes it one of the most insurance-pressured cities in southeast Broward. If your carrier has flagged roof age, a coating restoration plus Additional Roof Life Certification documents extended service life — the paper trail underwriters actually accept.",
      ],
    },
    neighborhoods: [
      { name: "Hollywood Lakes", note: "1920s–50s flat and tile roofs, historic-overlay sensitivity — we handle the details" },
      { name: "Hollywood Hills", note: "post-war CBS ranches under the heaviest roof-age insurance letters" },
      { name: "Emerald Hills", note: "1970s–90s tile estates — HOA color approval and volume pricing" },
      { name: "Boulevard Heights & Driftwood", note: "1950s–60s shingle and gravel — prime restoration-vs-replace territory" },
      { name: "Hollywood Beach & North Beach", note: "condo decks needing documented TAS-106 uplift ratings" },
    ],
  },

  "pompano-beach": {
    intro: [
      "Pompano Beach roofs live a hard life: direct Atlantic exposure on the barrier island, canal humidity through the Isles and Harbor Village, and a big inventory of 1950s–70s homes in Old Pompano, Cresthaven, and Kendall Green that are now 50+ years into service. Restoration — not replacement — is what most of these roofs actually need.",
      "The east side's problem is salt: it dulls and chalks tile within a decade and eats at flat-roof seams and flashings. Our elastomeric systems re-seal the entire surface as one waterproof membrane, and on flat decks Roof Shield adds the Miami-Dade TAS-106 uplift rating that matters this close to open water.",
      "Inland, Palm Aire's golf-course condo communities carry acres of low-slope roof where boards want one thing above all: a documented, warrantied system with a contractor who handles the approval paperwork. That package — spec sheets, color cards, insurance certificates — is standard with every Pompano quote we write.",
    ],
    roofLandscape: {
      heading: "The Pompano Beach roof landscape",
      paragraphs: [
        "East of Federal Highway, Pompano mixes 1950s–60s beach cottages and flat-roof mid-centuries with waterfront tile estates in Harbor Village and the Isles — all under constant salt attack. The central city (Old Pompano, Cresthaven, Kendall Green) is classic post-war CBS ranch stock on shingle and gravel roofs, much of it now flagged by insurers purely on age.",
        "West of I-95, Palm Aire and the Cypress Bend corridor bring large-scale condo and townhome roof fields — flat and low-slope decks where seam failure and ponding are the recurring issues, and where a monolithic coating over the whole field outperforms patch-after-patch maintenance.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Pompano Beach",
      paragraphs: [
        "Coating restorations in Pompano Beach generally don't require a building permit since no structural change is made — we confirm with the city's Development Services when a project includes repairs that might. Barrier-island condos and the Palm Aire associations all require board sign-off; we've built our documentation package around exactly what those boards ask for.",
        "Pompano's coastal zip codes see some of the most aggressive roof-age underwriting in Broward. A coating system plus Additional Roof Life Certification gives homeowners a certified answer that keeps coverage in place at a fraction of what the insurer's letter implies you must spend.",
      ],
    },
    neighborhoods: [
      { name: "Harbor Village & the Isles", note: "waterfront tile under direct salt exposure — seal and restore" },
      { name: "Old Pompano & Cresthaven", note: "1950s–70s CBS ranches facing roof-age insurance letters" },
      { name: "Palm Aire", note: "golf-course condo communities — board-ready documentation standard" },
      { name: "Kendall Green & Collier City", note: "post-war shingle and gravel roofs, restoration saves 60–70%" },
      { name: "Beach / A1A corridor", note: "condo decks where TAS-106 uplift documentation wins approvals" },
    ],
  },

  "deerfield-beach": {
    intro: [
      "Deerfield Beach roofing splits into three very different jobs: salt-exposed cottages and condos near the beach and the Cove, the enormous flat-roof inventory of Century Village East, and 1970s–90s tile in Deer Creek and the western neighborhoods. We quote each one differently, because they fail differently.",
      "Century Village East alone holds hundreds of low-slope condo buildings from the 1970s — roofs that have been patched, re-patched, and patched again. A monolithic elastomeric coating over the entire deck stops the leak-chase for a decade or more, and it's a fraction of the special assessment a tear-off would trigger.",
      "In the Cove and east of Federal Highway, the story is salt and age together: 1950s–60s homes whose original roofs have been recovered once already and whose owners are now getting roof-age letters from their insurers. Restoration plus an Additional Roof Life Certification answers that letter without a re-roof.",
    ],
    roofLandscape: {
      heading: "The Deerfield Beach roof landscape",
      paragraphs: [
        "East Deerfield — the Cove, the beach area, Little Harbor — carries 1950s–60s CBS homes with flat additions and tile mains, all in the salt-spray zone. Central Deerfield's post-war grid runs to shingle and gravel ranches, while Century Village East is one of the largest concentrations of low-slope condo roof in Broward County.",
        "West of Powerline Road, Deer Creek's golf-course communities bring 1970s–90s concrete tile on larger homes — now deep into the age window where chalking, algae streaking, and HOA appearance notices arrive together. One SmartShield project resolves all three.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Deerfield Beach",
      paragraphs: [
        "Roof coating projects in Deerfield Beach typically proceed without a building permit — coating is restoration, not alteration — and we verify with the city's Building Department whenever repair scope could change that. Century Village and the Deer Creek associations require formal approval; our board package (specs, colors, insurance, warranty terms) is built for exactly that process.",
        "With so much 1950s–70s housing stock, Deerfield homeowners see constant roof-age insurance pressure. A documented coating restoration with Additional Roof Life Certification is the accepted paper trail that keeps policies in force.",
      ],
    },
    neighborhoods: [
      { name: "The Cove", note: "1950s–60s waterfront homes — salt-sealed tile and flat-roof restoration" },
      { name: "Century Village East", note: "massive low-slope condo inventory — monolithic coating beats patch cycles" },
      { name: "Deer Creek", note: "1970s–90s golf-community tile with HOA color approval — we handle it" },
      { name: "Little Harbor & east of Federal", note: "beach-zone roofs needing uplift-rated systems" },
      { name: "Crystal Lake area", note: "townhome and villa roof fields quoted at volume pricing" },
    ],
  },

  tamarac: {
    intro: [
      "Tamarac was built as Florida retirement country in the 1960s and 70s — Kings Point, Mainlands, the Woodlands — and its roofs are now the oldest large inventory in central Broward. The good news: most of them are structurally sound, which makes Tamarac one of the best restoration markets in the county.",
      "The Mainlands sections and Kings Point carry thousands of near-identical low-slope and gravel roofs from the same construction waves, which means the same failures arrive on the same schedule: dried-out surfaces, seam leaks over Florida rooms, and insurance letters triggered purely by the roof's birth year. A coating restoration resets that clock for a fraction of replacement cost.",
      "Because so many Tamarac communities are association-managed, we've standardized the whole approval package — product specs, color documentation, insurance certificates, and warranty terms — so your board or management company gets everything in one submission.",
    ],
    roofLandscape: {
      heading: "The Tamarac roof landscape",
      paragraphs: [
        "East and central Tamarac are dominated by 1960s–70s single-story homes — the Mainlands' flat and low-slope roofs, Tamarac Lakes' gravel built-ups, and the Woodlands' larger golf-course homes under tile and shingle. Nearly all of it is now 45–60 years old, deep into the range where surfaces fail even when structures don't.",
        "Western Tamarac, built out in the 1980s–90s along Nob Hill and Pine Island, runs to concrete tile in HOA communities like Westwood — younger roofs, but now hitting the 30-year chalking-and-algae stage where SmartShield restoration is the natural fix.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Tamarac",
      paragraphs: [
        "Coating work in Tamarac is surface restoration and generally requires no building permit — we confirm with the city's Building Department when repairs are included. The bigger process is association approval: Kings Point, the Mainlands sections, and most western HOAs require documented sign-off, and our board-ready package is designed to pass on the first submission.",
        "Tamarac's roof ages make it ground zero for roof-age underwriting. Our coating systems plus an Additional Roof Life Certification give homeowners and associations the certified documentation that satisfies carriers without a tear-off.",
      ],
    },
    neighborhoods: [
      { name: "Kings Point", note: "large 55+ condo and villa roof fields — association-scale pricing" },
      { name: "The Mainlands", note: "1960s–70s flat and low-slope roofs, the county's classic restoration stock" },
      { name: "The Woodlands", note: "golf-course homes with tile and shingle mains now past year 40" },
      { name: "Westwood", note: "1980s tile communities hitting the chalking stage — HOA colors matched" },
      { name: "Tamarac Lakes", note: "original gravel built-ups where coating beats another recover" },
    ],
  },

  margate: {
    intro: [
      "Margate is 1960s–70s Florida in concentrated form: block after block of single-story CBS ranches under shingle, gravel, and early tile roofs, plus the villa-style communities of Paradise Gardens and Oriole. Almost none of it is new — which means almost all of it is in the restoration window right now.",
      "The most common Margate call is a roof that isn't leaking yet but has been flagged anyway: an insurer's roof-age letter, or an appraisal that dinged the home for a 'weathered' roof. Both are appearance-and-documentation problems more than structural ones, and a coating restoration with certified documentation solves both for a fraction of a re-roof.",
      "Margate's canal grid keeps humidity high street by street, so black algae streaking shows up early — often the first thing owners notice. FungalShield treatment kills it; most homeowners bundle it into a full SmartShield restoration so cleaning, color, and waterproofing happen in one project.",
    ],
    roofLandscape: {
      heading: "The Margate roof landscape",
      paragraphs: [
        "Margate's core housing stock went up between 1958 and 1979 — CBS ranches with 3/12–4/12 pitches under shingle or gravel, plus flat sections over garages and Florida rooms that were never designed to last this long without a membrane. The Oriole communities and Paradise Gardens add thousands of villa and duplex roofs built on the same schedule, so entire streets age in unison.",
        "Because the housing is so uniform, the economics are too: on a typical Margate ranch, a coating restoration runs 60–70% below replacement, and neighboring homeowners frequently schedule together — volume pricing that rarely applies in less uniform cities.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Margate",
      paragraphs: [
        "Coating projects in Margate are surface restorations and generally need no building permit; we confirm with the city's Building Department when repair scope warrants it. The Oriole and Paradise Gardens associations require approval before exterior work — our standard package covers the specs, colors, and insurance certificates they ask for.",
        "With a housing stock this age-uniform, Margate sees waves of roof-age insurance letters. A coating restoration plus Additional Roof Life Certification is the documented answer that keeps coverage in place without a tear-off.",
      ],
    },
    neighborhoods: [
      { name: "Paradise Gardens", note: "villa communities where whole sections restore together at volume pricing" },
      { name: "Oriole sections", note: "1970s duplex and villa roofs, association approval handled" },
      { name: "Original Margate grid", note: "1960s CBS ranches — the classic restoration-vs-replace decision" },
      { name: "Coral Gate area", note: "canal-side homes with early algae streaking — FungalShield territory" },
      { name: "Holiday Springs corridor", note: "later tile now hitting the 30-year chalking stage" },
    ],
  },

  lauderhill: {
    intro: [
      "Lauderhill's roofs split cleanly at University Drive: east of it, 1960s ranches from the city's original build-out; west of it, Inverrary — the massive 1970s golf-course development whose condos, villas, and estates put more low-slope roof in one place than almost anywhere in central Broward.",
      "Inverrary is where we do our biggest Lauderhill work: association buildings with flat and low-slope decks that have hit the patch-and-leak cycle. Coating the entire deck as one monolithic membrane stops the cycle — and costs a fraction of the special assessment a tear-off would force on residents.",
      "East Lauderhill homeowners mostly call about the insurance letter: original or once-recovered roofs from the 1960s that carriers flag on age alone. A restoration plus Additional Roof Life Certification gives them the certified paperwork that answers it.",
    ],
    roofLandscape: {
      heading: "The Lauderhill roof landscape",
      paragraphs: [
        "East Lauderhill (the original city, plotted in the early 1960s) is CBS ranch country — shingle and gravel mains with flat additions, now 55+ years old. Inverrary's 1970s build-out added everything at once: high-rise decks, garden condos, villa clusters, and larger single-family homes around the golf courses, most of it low-slope and all of it aging on the same clock.",
        "The newer western strips along Nob Hill add 1980s–90s tile townhomes — younger roofs, but many now chalking and streaking on schedule. For associations, our quotes cover whole roof fields, not single buildings, which is where the real savings sit.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lauderhill",
      paragraphs: [
        "Roof coating in Lauderhill is restoration work and typically requires no building permit — we verify with the city when repairs are bundled in. Inverrary's associations run formal approval processes; our board package (specs, color documentation, insurance, warranty) is built to clear them on first submission.",
        "Lauderhill's 1960s–70s stock draws steady roof-age underwriting pressure. Coating plus Additional Roof Life Certification is the documented path that keeps policies in force at a fraction of replacement cost.",
      ],
    },
    neighborhoods: [
      { name: "Inverrary", note: "1970s golf-course condos and villas — association-scale monolithic coating" },
      { name: "Original east Lauderhill", note: "1960s CBS ranches facing age-based insurance letters" },
      { name: "Boulevard Gardens & Broward Estates edge", note: "post-war shingle and gravel restoration stock" },
      { name: "Nob Hill corridor", note: "1980s–90s tile townhomes at the chalking stage" },
      { name: "City Hall / 441 corridor", note: "commercial flat decks coated at scale" },
    ],
  },

  parkland: {
    intro: [
      "Parkland is the newest housing stock we serve in Broward — and its roofs are aging faster than owners expect. The big master-planned communities built from the 1990s through the 2010s (Heron Bay, Parkland Golf & Country Club, MiraLago, Parkland Isles) carry premium concrete tile that's now 15–30 years old: structurally excellent, cosmetically fading, and starting to draw both HOA notices and insurer questions.",
      "Parkland's HOAs are among the strictest in the county — architectural review boards with defined color palettes and formal submission processes. That's our home turf: we color-match from 3,000+ tintable options including the community's approved palette, and we hand your board a complete documentation package with the application.",
      "The math matters more here because the roofs are bigger: on a Parkland estate roof, restoring with SmartShield instead of replacing routinely saves tens of thousands of dollars while resetting both appearance and waterproofing for another 10–15 years.",
    ],
    roofLandscape: {
      heading: "The Parkland roof landscape",
      paragraphs: [
        "Nearly all of Parkland is 1990s-or-newer concrete tile — S-tile and flat-profile tile on large 2-story footprints, built to post-Andrew code. The failure mode isn't structural: it's finish. By year 15–20 the factory slurry coat chalks off, colors fade unevenly, and algae takes hold on north slopes — exactly the surface problems an elastomeric restoration reverses.",
        "The older Ranches section (east Parkland's acreage lots) adds a different roof population: 1970s–80s homes, some under shingle or early tile, on properties where owners want work done quietly and done once. Both markets end at the same place — restoration over replacement while the structure is still sound.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Parkland",
      paragraphs: [
        "Coating is surface restoration and generally doesn't require a Parkland building permit — we confirm with the city's Building Department when scope demands it. The real process is architectural review: Heron Bay, PGCC, MiraLago, and the other master-planned communities all require formal color and product approval, and our submission package is built to their standards.",
        "Even Parkland's younger roofs are starting to see insurer age questions at the 15–20 year mark. A documented restoration with Additional Roof Life Certification settles the question before it becomes a non-renewal notice.",
      ],
    },
    neighborhoods: [
      { name: "Heron Bay", note: "1990s–2000s tile at the fade-and-chalk stage — ARB palette matched" },
      { name: "Parkland Golf & Country Club", note: "estate-scale tile roofs where restoration saves tens of thousands" },
      { name: "MiraLago & Parkland Bay", note: "newest stock — proactive maintenance coating extends the factory finish" },
      { name: "Parkland Isles & Cypress Head", note: "gated 90s communities with formal color approval — we handle it" },
      { name: "The Ranches", note: "acreage properties with older mixed roofs — one-visit evaluation covers it all" },
    ],
  },

  "coconut-creek": {
    intro: [
      "Coconut Creek roofing is a tale of two inventories: Wynmoor Village — one of the largest 55+ condo communities in Florida, with acres of 1970s low-slope roof — and the 1980s–2000s tile townhome communities of the Township and Winston Park. We work both, and they need completely different systems.",
      "Wynmoor's buildings are on their third or fourth patch cycle in places. Coating an entire deck as one seamless membrane is the fix that actually holds — and for an association, it's the difference between a maintenance line item and a special assessment.",
      "In the Township, Winston Park, and Regency Lakes, the tile is now 25–40 years old: chalky, streaked on the north slopes, and drawing HOA appearance notices. A SmartShield restoration answers the notice, kills the algae, and re-waterproofs the field in one project — with the HOA paperwork handled by us.",
    ],
    roofLandscape: {
      heading: "The Coconut Creek roof landscape",
      paragraphs: [
        "South Coconut Creek is anchored by Wynmoor's garden-style condo buildings — 1970s low-slope decks in continuous roof fields, plus the surrounding villa communities built on the same schedule. Central and north Coconut Creek shifted to concrete tile: the Township's 1980s townhomes, Winston Park's 1990s single-family sections, and Regency Lakes' gated 90s stock.",
        "The city's dense tree canopy and lake systems (it's the 'Butterfly Capital' for a reason) keep shade and humidity high, so algae and fungal streaking arrive earlier here than in more open cities — often the first visible sign a roof is due for restoration.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Coconut Creek",
      paragraphs: [
        "Coating restorations in Coconut Creek typically proceed without a building permit — we confirm with the city's Development Services when repairs are included. Almost every Creek address sits inside an association: Wynmoor, the Township's sub-associations, Winston Park, Regency Lakes. Our board-ready package (specs, colors, insurance, warranty) is standard with every quote.",
        "Between Wynmoor's 1970s decks and the Township's aging tile, age-based insurance scrutiny is constant. A documented coating restoration with Additional Roof Life Certification keeps coverage in place without a tear-off.",
      ],
    },
    neighborhoods: [
      { name: "Wynmoor Village", note: "1970s low-slope condo fields — monolithic coating ends the patch cycle" },
      { name: "The Township", note: "1980s tile townhomes with sub-association approvals — we handle them" },
      { name: "Winston Park", note: "1990s single-family tile at the chalking stage" },
      { name: "Regency Lakes", note: "gated 90s community, HOA palette matched from 3,000+ colors" },
      { name: "Banyan Trails area", note: "2000s tile — proactive coating extends the original finish" },
    ],
  },

  "oakland-park": {
    intro: [
      "Oakland Park is one of Broward's best restoration markets: a compact city of 1950s–60s CBS homes — Coral Heights, Lloyd Estates, North Andrews Gardens — where the roofs are old enough to draw insurance letters but sound enough that replacement is usually the wrong answer.",
      "The classic Oakland Park roof is a low-pitch shingle or gravel main with a flat addition over a Florida room or carport — and it's the flat section that leaks first. Our approach treats the whole roof as one system: repair, seal, and coat it into a single waterproof membrane instead of patching the flat section every other summer.",
      "The city's east side and the Corals sit minutes from the Intracoastal, where salt air accelerates surface wear. Coating re-seals those surfaces for years at a fraction of replacement — and with the Additional Roof Life Certification, it answers the age question insurers keep asking about mid-century homes.",
    ],
    roofLandscape: {
      heading: "The Oakland Park roof landscape",
      paragraphs: [
        "Oakland Park's housing stock is overwhelmingly 1950s–60s: CBS ranches under shingle, gravel built-up, and early tile, with flat and low-slope sections everywhere — the signature of Florida's post-war building boom. Coral Heights and the Corals add larger mid-century homes, many with full flat roofs that are prime monolithic-coating candidates.",
        "The Dixie Highway and Powerline corridors carry a dense strip of commercial flat decks — warehouses, storefronts, and the city's growing brewery-district buildings — where reflective cool-roof coating cuts cooling costs while sealing the deck.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Oakland Park",
      paragraphs: [
        "Most Oakland Park coating projects need no building permit — coating is restoration, not structural alteration — and we confirm with the city's Building Division when repair scope could change that. HOA involvement is lighter here than in western Broward, so projects typically move from evaluation to finished roof faster.",
        "With nearly the whole city built before 1970, roof-age underwriting hits Oakland Park hard. A coating restoration plus Additional Roof Life Certification is the certified documentation that keeps mid-century homes insurable without a five-figure tear-off.",
      ],
    },
    neighborhoods: [
      { name: "Coral Heights", note: "mid-century homes with flat roofs — monolithic membrane territory" },
      { name: "Lloyd Estates", note: "1950s–60s CBS ranches facing age-based insurance letters" },
      { name: "North Andrews Gardens", note: "post-war shingle and gravel, restoration saves 60–70%" },
      { name: "Corals of Oakland Park", note: "east-side salt exposure — sealing beats replacing" },
      { name: "Dixie Highway corridor", note: "commercial flat decks — reflective cool-roof coating at scale" },
    ],
  },

  /* ── BROWARD — ROUND 3: remaining cities (July 2026) ───────── */

  "cooper-city": {
    intro: [
      "Cooper City is family-suburb Broward: quiet streets of 1970s–90s tile roofs in Rock Creek, Embassy Lakes, and the original Cooper Colony sections, plus the newer Monterra community's 2010s tile on the old Waldrep Dairy land. It's ten minutes from our Davie shop, which makes it one of our fastest-scheduled service areas.",
      "The typical Cooper City call is a 25–35 year old concrete tile roof that's gone chalky and streaked but is structurally sound — exactly the roof that should be restored, not replaced. A SmartShield restoration brings back the color (HOA-approved), kills the algae, and re-waterproofs the field at 60–70% below replacement cost.",
      "For Embassy Lakes, Rock Creek, and Monterra homeowners, we handle the HOA approval paperwork start to finish — product specs, color documentation from 3,000+ tintable options, and insurance certificates in one package.",
    ],
    roofLandscape: {
      heading: "The Cooper City roof landscape",
      paragraphs: [
        "The original Cooper Colony and Flamingo Gardens-adjacent sections carry 1960s–70s ranches under shingle and early tile; Rock Creek and Embassy Lakes added waves of 1980s–90s concrete S-tile; and Monterra brought 2000s–2010s flat-profile tile built to modern code. Three eras, three different restoration timelines — all of them served from ten minutes away.",
        "Cooper City's mature oak canopy keeps many roofs shaded and damp after summer storms, so algae and fungal streaking are the most common first complaint. FungalShield treatment handles it standalone; most owners bundle it into a full coating restoration.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Cooper City",
      paragraphs: [
        "Coating is surface restoration and generally requires no Cooper City building permit — we confirm with the city's Building Division when repair scope warrants. Rock Creek, Embassy Lakes, Monterra, and most newer sections require architectural approval for roof color changes; our submission package is built to pass first time.",
        "Tile from the 80s and 90s is now drawing insurer age questions across Cooper City. A coating restoration plus Additional Roof Life Certification documents extended service life — the answer carriers accept.",
      ],
    },
    neighborhoods: [
      { name: "Rock Creek", note: "1980s S-tile at the chalking stage — HOA palette matched" },
      { name: "Embassy Lakes", note: "1990s gated tile communities, approval paperwork handled" },
      { name: "Monterra", note: "2010s tile — proactive coating extends the factory finish" },
      { name: "Cooper Colony", note: "original 1960s–70s ranches, classic restoration stock" },
      { name: "Country Address / Flamingo corridor", note: "larger lots, mixed tile and shingle mains" },
    ],
  },

  "dania-beach": {
    intro: [
      "Dania Beach is Broward's oldest city — incorporated 1904 — and its roofs show the whole century: pre-war cottages near the antique district, 1950s–60s CBS ranches in Melaleuca Gardens, and salt-battered beach-area homes and condos east of the Intracoastal.",
      "Age plus salt is the Dania Beach combination: original and once-recovered roofs that are structurally serviceable but surface-failed, on homes whose owners are getting roof-age letters from insurers. A coating restoration with Additional Roof Life Certification answers the letter at a fraction of the re-roof price.",
      "We're minutes away — our Davie shop sits just up Griffin Road — so Dania Beach evaluations are usually scheduled within days, and most projects finish inside two weeks.",
    ],
    roofLandscape: {
      heading: "The Dania Beach roof landscape",
      paragraphs: [
        "West of US-1, Dania Beach is post-war Florida: CBS ranches under shingle, gravel built-up, and early tile, with flat additions over Florida rooms that leak first. The historic core near Federal Highway adds some of Broward's oldest housing stock, where careful restoration matters more than anywhere.",
        "East of the Intracoastal, beach-area homes and low-rise condos take direct salt exposure, and the Griffin Road / airport-adjacent corridors carry a heavy inventory of commercial flat decks — marine businesses, warehouses, and hotels where reflective cool-roof coating cuts cooling loads while sealing the deck.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Dania Beach",
      paragraphs: [
        "Most Dania Beach coating projects proceed without a building permit — coating is restoration, not structural work — and we confirm with the city's Building Division when repairs are included. Beach-area condo associations require board approval; our documentation package covers it.",
        "With so much pre-1975 housing, Dania Beach sees intense roof-age underwriting. Restoration plus Additional Roof Life Certification is the certified paper trail that keeps older homes insurable.",
      ],
    },
    neighborhoods: [
      { name: "Melaleuca Gardens", note: "1950s–60s CBS ranches — prime restoration-vs-replace territory" },
      { name: "Historic downtown / antique district", note: "some of Broward's oldest roofs, restored with care" },
      { name: "Dania Beach oceanside", note: "salt-exposed homes and condos — sealing beats replacing" },
      { name: "Griffin Road corridor", note: "commercial flat decks — cool-roof coating at scale" },
      { name: "Estates of Fort Lauderdale area", note: "villa and townhome roof fields at volume pricing" },
    ],
  },

  "hallandale-beach": {
    intro: [
      "Hallandale Beach packs two roofing worlds into four square miles: the condo canyon along A1A and Three Islands, and the 1950s–60s single-family core west of Federal Highway. We coat both — association decks by the acre and ranch roofs by the street.",
      "For the Golden Isles and Three Islands waterfront homes, salt and sun are relentless: tile finishes chalk early and flat sections fail at the seams. Elastomeric restoration re-seals the whole surface as one membrane, with the Miami-Dade TAS-106 uplift-rated Roof Shield on flat decks this close to open water.",
      "In the western neighborhoods, the story is roof-age insurance pressure on 60-year-old homes. A documented coating restoration with Additional Roof Life Certification keeps coverage in place without the five-figure tear-off the letter implies.",
    ],
    roofLandscape: {
      heading: "The Hallandale Beach roof landscape",
      paragraphs: [
        "East Hallandale is dominated by condo and co-op buildings — from garden-style walk-ups to towers — whose low-slope decks age on maintenance-budget schedules. Golden Isles and Three Islands add waterfront single-family estates under tile, while the blocks west of US-1 hold the original 1950s–60s CBS ranch grid.",
        "Hallandale's position on the Miami-Dade line means many of its buildings were built and re-roofed to Dade-influenced standards — and boards here ask for documented uplift ratings by name. Roof Shield's TAS-106 certification is that document.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Hallandale Beach",
      paragraphs: [
        "Coating restorations in Hallandale Beach generally require no building permit; we confirm with the city's Building Division when scope includes repairs. Nearly every east-side property runs through a board or association — our submission package (specs, colors, insurance, warranty, uplift documentation) is standard with every quote.",
        "Coastal zip codes here draw some of South Florida's most aggressive roof-age underwriting. Coating plus Additional Roof Life Certification is the certified answer that keeps policies in force.",
      ],
    },
    neighborhoods: [
      { name: "Golden Isles", note: "waterfront tile estates under direct salt exposure" },
      { name: "Three Islands", note: "condo and townhome decks — board-ready documentation standard" },
      { name: "A1A / beach corridor", note: "association buildings needing TAS-106 uplift-rated systems" },
      { name: "West of Federal core", note: "1950s–60s ranches facing roof-age insurance letters" },
      { name: "Golden Horn / Layne Blvd area", note: "mid-century waterfront homes, flat sections sealed as one membrane" },
    ],
  },

  "hillsboro-beach": {
    intro: [
      "Hillsboro Beach is a three-mile barrier island — one road, ocean on one side, Intracoastal on the other — where every single roof lives in the most punishing salt environment Broward has. 'Millionaire's Mile' estates and oceanfront condos alike face the same physics: salt spray, relentless UV, and direct hurricane exposure.",
      "Out here, roof surfaces fail years before their inland twins would. Coating restoration is how island owners stay ahead of it: re-sealing tile fields and flat decks into continuous membranes before salt intrusion becomes structural damage — with Roof Shield's Miami-Dade TAS-106 uplift rating providing the documented wind protection an open-ocean address demands.",
      "We bring the full documentation package every Hillsboro Beach association and estate manager asks for: specs, warranty terms, insurance certificates, and the uplift certification itself.",
    ],
    roofLandscape: {
      heading: "The Hillsboro Beach roof landscape",
      paragraphs: [
        "The Mile's estates carry large barrel-tile and flat-roof modern builds facing direct Atlantic exposure; the island's condo buildings — most from the 1960s–80s — hold acres of low-slope deck that boards maintain on recoat cycles rather than tear-offs. Both markets are documentation-driven: uplift ratings, warranties, and insurance paperwork decide who gets hired.",
        "Salt is the constant. It chalks finishes, corrodes fasteners and flashings, and finds every seam. A monolithic elastomeric coating removes the seams from the equation entirely — which is why recoat-cycle maintenance is the island standard.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Hillsboro Beach",
      paragraphs: [
        "The Town of Hillsboro Beach is small and attentive — we confirm requirements with Town Hall before any project, though coating restorations generally proceed without a permit. Condo boards along the Mile require formal approval; our package is built for exactly that review.",
        "Barrier-island underwriting is the strictest there is: carriers question any roof past 12–15 years this close to open water. A documented restoration with Additional Roof Life Certification is the answer that keeps island coverage in place.",
      ],
    },
    neighborhoods: [
      { name: "Millionaire's Mile estates", note: "oceanfront tile and flat roofs under maximum salt exposure" },
      { name: "Oceanfront condo corridor", note: "1960s–80s decks maintained on recoat cycles — board packages standard" },
      { name: "Intracoastal-side properties", note: "dock-side homes where salt hits from both directions" },
      { name: "Hillsboro Inlet area", note: "the island's most exposed roofs — TAS-106 documentation essential" },
    ],
  },

  "lauderdale-by-the-sea": {
    intro: [
      "Lauderdale-by-the-Sea kept its low-rise beach-town character on purpose — which means its roofs are mostly 1950s–60s cottages, small condos, and mid-century homes rather than towers. Charming stock, but every square foot of it sits in the salt-spray zone.",
      "The classic LBTS roof problem is surface failure ahead of structural failure: chalked tile, corroded flashings, and flat sections over Florida rooms that leak at the seams. Coating restoration re-seals it all as one membrane and preserves the original roof — often the right answer on older cottages where a tear-off would invite a cascade of code upgrades.",
      "For the town's garden condos and co-ops, we quote whole roof fields with the board documentation included — and with Roof Shield's TAS-106 Miami-Dade uplift rating for decks a block from open ocean.",
    ],
    roofLandscape: {
      heading: "The Lauderdale-by-the-Sea roof landscape",
      paragraphs: [
        "The town core and Bel-Air section carry 1950s–60s single-family homes — low-pitch shingle, gravel, white tile, and flat sections — while the beach blocks hold small condo and motel-era buildings from the same decades, nearly all low-slope. Silver Shores and the Terra Mar island area add waterfront homes with larger tile mains.",
        "Nothing in LBTS is far from salt. Surfaces here age on coastal time, and the recoat cycle — clean, seal, coat every 10–15 years — is what keeps mid-century roofs serving decades past their design life.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lauderdale-by-the-Sea",
      paragraphs: [
        "The town runs its own building department and takes exterior work seriously; coating restorations generally proceed without a permit, and we confirm before starting. Condo and co-op boards require approval — our documentation package covers specs, colors, insurance, and uplift ratings.",
        "Coastal roof-age underwriting hits LBTS's mid-century stock hard. A coating restoration plus Additional Roof Life Certification keeps these homes insurable without replacing roofs that don't need it.",
      ],
    },
    neighborhoods: [
      { name: "Bel-Air", note: "1950s–60s beach cottages — preservation-minded restoration" },
      { name: "Silver Shores", note: "waterfront homes with salt-exposed tile mains" },
      { name: "Terra Mar Island", note: "estate roofs between ocean and Intracoastal" },
      { name: "Town core / El Mar Drive", note: "garden condos and motel-era low-slope decks — board packages standard" },
    ],
  },

  "lauderdale-lakes": {
    intro: [
      "Lauderdale Lakes was built almost all at once — the 1960s and early 70s — so its roofs age together: CBS ranches in Oriole Estates and the original sections, and a large inventory of garden-condo decks in communities like Hawaiian Gardens. When roofs turn 55 on the same schedule, insurance letters arrive on the same schedule too.",
      "Most Lauderdale Lakes roofs we evaluate are structurally fine but surface-failed: dried shingle, gravel built-ups past their cycle, flat sections leaking at seams. Restoration — not replacement — is the economical answer, and with the Additional Roof Life Certification it's also the documented answer insurers accept.",
      "For the city's condo associations, we quote entire roof fields with board documentation included — turning a looming special assessment into a maintenance line item.",
    ],
    roofLandscape: {
      heading: "The Lauderdale Lakes roof landscape",
      paragraphs: [
        "The single-family grid — Oriole Estates, the sections off Oakland Park Boulevard and 441 — is uniform 1960s–70s CBS construction under shingle, gravel, and early tile, with the flat Florida-room additions that always leak first. The condo side, led by Hawaiian Gardens' garden-style buildings, adds acres of low-slope deck maintained on association budgets.",
        "Uniform stock means uniform economics: coating restoration typically runs 60–70% below replacement here, and neighboring owners frequently schedule together for volume pricing.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lauderdale Lakes",
      paragraphs: [
        "Coating projects in Lauderdale Lakes generally require no building permit — restoration, not alteration — and we confirm with the city when repairs are bundled. Condo boards require formal approval; our package is built for it.",
        "With nearly the whole city built before 1975, roof-age underwriting is constant. Restoration plus Additional Roof Life Certification is the certified paper trail that keeps coverage in force.",
      ],
    },
    neighborhoods: [
      { name: "Hawaiian Gardens", note: "garden-condo roof fields — monolithic coating ends the patch cycle" },
      { name: "Oriole Estates", note: "1960s–70s CBS ranches facing age-based insurance letters" },
      { name: "Original city grid", note: "post-war shingle and gravel, restoration saves 60–70%" },
      { name: "441 / State Road 7 corridor", note: "commercial flat decks coated at scale" },
    ],
  },

  "lighthouse-point": {
    intro: [
      "Lighthouse Point is a city of canals — more than 18 miles of them — and nearly every home is a waterfront home. Its 1950s–70s ranches and remodeled estates sit under tile, shingle, and flat roofs that take Intracoastal salt air daily, a half-step gentler than the barrier island but relentless all the same.",
      "The typical Lighthouse Point evaluation finds a sound structure with a tired surface: chalked barrel tile, streaked north slopes, corroding flashings at the flat sections. Elastomeric restoration re-seals it all — and preserves original mid-century roofs that fit the neighborhood's character far better than a builder-grade replacement would.",
      "Owners here also carry some of Broward's highest coastal insurance premiums, so the Additional Roof Life Certification paired with a coating restoration does double duty: it answers the age question and documents the roof for the file.",
    ],
    roofLandscape: {
      heading: "The Lighthouse Point roof landscape",
      paragraphs: [
        "The city built out between the early 1950s and mid-1970s: single-story CBS ranches and split-levels on canal lots, under barrel tile, white tile, shingle, and generous flat sections over Florida rooms and garages. Decades of remodels have added larger second-story homes, but the mid-century roof stock still dominates street by street.",
        "Salt-side aging is the pattern — surfaces on the east and canal-facing slopes wear first. A full-field coating evens it out and buys 10–15 years per cycle, which is why many Lighthouse Point roofs are on their second or third professional recoat.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Lighthouse Point",
      paragraphs: [
        "Lighthouse Point's Building Department is thorough on structural work, but coating restorations are surface maintenance and generally proceed without a permit — we confirm before starting. There are few HOAs here; decisions are the homeowner's, which keeps projects moving fast.",
        "Coastal underwriting flags LHP roofs on age routinely. Restoration plus Additional Roof Life Certification is the certified documentation that keeps waterfront coverage in place.",
      ],
    },
    neighborhoods: [
      { name: "Coral Key Villas", note: "canal-front ranches with salt-worn tile — seal and restore" },
      { name: "Lake Placid / Venetian Isles sections", note: "1950s–60s waterfront homes, flat sections membraned as one" },
      { name: "Yacht Club area", note: "larger remodeled estates under barrel tile" },
      { name: "Federal Highway corridor", note: "commercial and marina flat decks — cool-roof coating" },
    ],
  },

  "north-lauderdale": {
    intro: [
      "North Lauderdale was built fast in the 1970s as starter-home Florida — compact CBS single-families, duplexes, and townhome communities that all turned 45–50 around the same time. That makes it one of the most restoration-ready cities in central Broward: sound structures, tired surfaces.",
      "The most common call here is insurance-driven: a carrier flags the roof's age, and the owner faces a re-roof quote that doesn't fit a starter-home budget. A coating restoration with Additional Roof Life Certification answers the carrier at a fraction of the price — that's the exact scenario our systems were built for.",
      "Townhome and villa associations along Kimberly Boulevard and Rock Island Road can quote whole roof fields at once; uniform 1970s construction means one system fits many buildings, and volume pricing follows.",
    ],
    roofLandscape: {
      heading: "The North Lauderdale roof landscape",
      paragraphs: [
        "The city's core is 1970s construction nearly wall to wall: low-pitch shingle and gravel on single-families and duplexes, early tile on the later sections, and continuous townhome roof fields in the planned communities. Flat utility sections and porch roofs are the first leak points, and they respond best to a monolithic membrane rather than patching.",
        "The 1980s filled in the western edges with tile that's now at the chalking-and-streaking stage — the same restoration timeline as neighboring Tamarac and Margate stock.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in North Lauderdale",
      paragraphs: [
        "Coating restorations in North Lauderdale generally proceed without a building permit — we confirm with the city's Building Department when repairs are included. Townhome associations require approval before exterior work; our documentation package handles it.",
        "Uniform 1970s stock means age-based insurance letters arrive street by street. Restoration plus Additional Roof Life Certification is the certified answer that keeps starter-home coverage affordable.",
      ],
    },
    neighborhoods: [
      { name: "Kimberly Boulevard corridor", note: "1970s townhome roof fields quoted at volume pricing" },
      { name: "Broadview Park edge / Rock Island", note: "compact CBS single-families facing age letters" },
      { name: "Silver Lakes area (North Lauderdale)", note: "1980s tile at the chalking stage" },
      { name: "McNab Road corridor", note: "duplex and villa stock — one system fits many buildings" },
    ],
  },

  "pembroke-park": {
    intro: [
      "Pembroke Park is small on the map but heavy on roof: alongside its residential streets sits one of south Broward's densest concentrations of warehouse and light-industrial flat roof, packed between Hallandale Beach Boulevard and Pembroke Road. We serve both sides of it.",
      "For the commercial corridor, reflective cool-roof coating is the workhorse: it seals aging flat decks against leaks and cuts summer cooling loads on metal and built-up roofs measurably — often the fastest-payback maintenance a warehouse owner can buy.",
      "On the residential side, the town's 1950s–70s homes and its large mobile-home communities need honest evaluation more than anything: what's coatable, what needs repair first, and what the insurance-ready documentation looks like. That evaluation is free.",
    ],
    roofLandscape: {
      heading: "The Pembroke Park roof landscape",
      paragraphs: [
        "The commercial inventory dominates: built-up, modified bitumen, and metal warehouse roofs from the 1970s–90s, most now on their second or third maintenance cycle. Monolithic elastomeric coating over these decks stops seam leaks and adds reflectivity in one application.",
        "Residentially, Pembroke Park mixes post-war CBS homes with established mobile-home communities like Park Lake Estates — where lightweight reflective coatings are one of the few practical ways to extend roof life without adding structural load.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Pembroke Park",
      paragraphs: [
        "The Town of Pembroke Park handles permitting locally; coating restorations are surface maintenance and generally proceed without one — we confirm scope with the town before starting commercial work. Community managers get our full documentation package.",
        "Commercial carriers increasingly demand documented roof condition at renewal. A coating restoration with photographic documentation and warranty terms is the file they want to see.",
      ],
    },
    neighborhoods: [
      { name: "Hallandale Beach Blvd corridor", note: "warehouse flat decks — cool-roof coating at scale" },
      { name: "Park Lake Estates & mobile-home communities", note: "lightweight reflective systems, no structural load" },
      { name: "Residential core off SW 40th Ave", note: "1950s–70s CBS homes, restoration-first evaluations" },
      { name: "Pembroke Road industrial strip", note: "metal and built-up roofs sealed and reflectivity-coated" },
    ],
  },

  "sea-ranch-lakes": {
    intro: [
      "Sea Ranch Lakes is one of Broward's smallest municipalities — a private, gated village of a few hundred homes tucked between A1A and the Intracoastal. Every roof in the village lives in full coastal exposure, and most sit on generous mid-century footprints that deserve preservation, not replacement.",
      "Village homes are predominantly 1950s–60s builds — many carefully remodeled — under tile, white gravel, and flat-roof modern lines. Salt air ages those surfaces on coastal time; elastomeric restoration re-seals them and keeps original rooflines intact, which matters in a community that protects its character.",
      "We work quietly and to schedule inside the gate, and every quote includes the documentation coastal insurers ask for — including the Additional Roof Life Certification that answers roof-age questions without a tear-off.",
    ],
    roofLandscape: {
      heading: "The Sea Ranch Lakes roof landscape",
      paragraphs: [
        "The village's mid-century stock runs to low-slung ranches and Florida-modern homes with flat and low-slope sections — architecture worth preserving, with roof surfaces that need renewal every coastal decade. Barrel and white tile mains take the salt chalking first; flat sections fail at seams and flashings.",
        "A monolithic coating treats the whole roof as one membrane — tile field, flat sections, and flashings sealed together — which is why recoat-cycle maintenance is the sensible standard a block from the ocean.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Sea Ranch Lakes",
      paragraphs: [
        "The Village of Sea Ranch Lakes reviews exterior work through its own processes, and we coordinate with the village and the homeowner before any project; coating restorations are surface maintenance and generally straightforward to approve. Color matching keeps the village's palette intact.",
        "Barrier-adjacent underwriting flags these mid-century roofs constantly. Restoration plus Additional Roof Life Certification is the certified documentation that keeps village homes insured without replacing sound roofs.",
      ],
    },
    neighborhoods: [
      { name: "Lakefront homes", note: "mid-century ranches around the village lake — tile and flat sections restored as one" },
      { name: "A1A-side properties", note: "maximum salt exposure — sealing on a strict recoat cycle" },
      { name: "Intracoastal-side homes", note: "dock-side salt from the west, coated flashings and seams" },
      { name: "Village core", note: "preserved 1950s–60s architecture — restoration over replacement" },
    ],
  },

  "southwest-ranches": {
    intro: [
      "Southwest Ranches is acreage country — ranch estates, equestrian properties, and family compounds on lots the rest of Broward doesn't have. The roofs are bigger, the outbuildings are real (barns, stables, workshops), and the right answer usually covers all of them in one project.",
      "A typical Ranches evaluation walks the whole property: a large tile or metal main residence, a guest house, a barn with a rusting metal roof, and a workshop with an aging flat deck. Our systems handle each — elastomeric restoration on tile, rust-sealing reflective coating on metal, monolithic membrane on flat — quoted together at property scale.",
      "Metal roof coating earns its keep here: it stops corrosion at seams and fasteners, reflects heat off barns and stables (your animals feel the difference), and costs a fraction of re-sheeting.",
    ],
    roofLandscape: {
      heading: "The Southwest Ranches roof landscape",
      paragraphs: [
        "Main residences run from 1970s–80s ranch homes in Rolling Oaks and Sunshine Ranches to 1990s–2000s estate builds under big concrete-tile fields in Landmark Ranch and the newer sections. Outbuildings multiply the roof inventory: metal barn and stable roofs, shingle guest houses, flat-deck workshops — most aging on no particular maintenance schedule until something leaks.",
        "Tree cover and pasture humidity keep algae pressure high on shaded slopes, and well water staining adds its own marks. A property-wide clean-and-coat resets everything at once.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Southwest Ranches",
      paragraphs: [
        "The Town of Southwest Ranches contracts its building services and keeps rural flexibility in mind; coating restorations are surface maintenance and generally proceed without a permit — we confirm when outbuilding repairs are in scope. There are few HOAs; decisions are the owner's.",
        "Insurers increasingly ask about every structure on an agricultural-residential policy, not just the house. Documented coating restorations across the property — with Additional Roof Life Certification on the main residence — keep the whole schedule insurable.",
      ],
    },
    neighborhoods: [
      { name: "Sunshine Ranches", note: "estate homes and horse properties — whole-property quotes" },
      { name: "Rolling Oaks", note: "1970s–80s ranch mains with metal outbuildings — rust-seal coating" },
      { name: "Landmark Ranch Estates", note: "large 2000s tile fields at the fade stage" },
      { name: "Green Meadows", note: "acreage compounds where barns and workshops join the project" },
      { name: "Frontier Trails area", note: "equestrian facilities — reflective coating cools stables measurably" },
    ],
  },

  "west-park": {
    intro: [
      "West Park is one of Florida's youngest cities (incorporated 2005) built on some of south Broward's oldest neighborhoods — Carver Ranches, Miami Gardens, Utopia, and Lake Forest date to the 1940s–60s. That means the city's roofs are among the county's most senior, and among the most flagged by insurers.",
      "The West Park pattern is a structurally sound CBS home under an original or once-recovered roof — shingle, gravel, or early tile — whose owner has received the roof-age letter. A coating restoration plus Additional Roof Life Certification answers it for a fraction of the re-roof quote, which is exactly the math a working household needs.",
      "We're a short drive up from our Davie shop, evaluations are free, and neighbors frequently schedule together — uniform housing stock makes volume pricing work street by street.",
    ],
    roofLandscape: {
      heading: "The West Park roof landscape",
      paragraphs: [
        "Carver Ranches and Miami Gardens (the West Park neighborhood, not the Dade city) carry 1940s–60s CBS homes under low-pitch shingle and gravel, with flat additions that leak first. Utopia and Lake Forest add the same post-war stock, much of it recovered once in the 1980s–90s and now due again.",
        "The State Road 7 corridor brings a strip of commercial flat decks — shops, churches, and small warehouses — where reflective cool-roof coating seals and cools in one application.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in West Park",
      paragraphs: [
        "Coating restorations in West Park generally require no building permit — we confirm with the city's building services when repair scope warrants. With few HOAs, projects move at the homeowner's pace, usually evaluation to finished roof inside two weeks.",
        "This is one of the most age-flagged housing inventories in Broward. Restoration plus Additional Roof Life Certification is the certified documentation that keeps pre-1970 homes insured without tear-offs their owners shouldn't need.",
      ],
    },
    neighborhoods: [
      { name: "Carver Ranches", note: "1940s–60s CBS homes — the county's classic restoration stock" },
      { name: "Miami Gardens (West Park)", note: "post-war shingle and gravel due for their second renewal" },
      { name: "Utopia", note: "compact mid-century homes facing age-based insurance letters" },
      { name: "Lake Forest", note: "1950s–60s stock where neighbors schedule together for volume pricing" },
      { name: "SR-7 corridor", note: "commercial flat decks — cool-roof coating at scale" },
    ],
  },

  "wilton-manors": {
    intro: [
      "Wilton Manors is the Island City — ringed by the Middle River — and its mid-century character is the draw: 1950s–60s CBS ranches and Florida-modern homes with the low rooflines and flat sections that define the look. Preserving those roofs, not replacing them, is usually the right call.",
      "The typical Wilton Manors roof is 60+ years old structurally and perfectly serviceable — but the surface is done: chalked white tile, dried shingle, flat sections patched too many times. An elastomeric restoration re-seals the whole roof as one membrane and keeps the original lines intact, at 60–70% below replacement.",
      "River humidity feeds algae on shaded slopes across the island, and insurers flag these mid-century roofs on age alone. One project — clean, coat, certify — answers both.",
    ],
    roofLandscape: {
      heading: "The Wilton Manors roof landscape",
      paragraphs: [
        "East and west of Wilton Drive, the housing stock is remarkably consistent: 1950s–60s single-story CBS homes under white tile, shingle, and gravel, with flat sections over carports and Florida rooms. The riverfront lots add larger remodeled homes, and the Drive itself carries a lively strip of low-slope commercial roofs.",
        "Because the stock is so uniform, so is the fix: full-field elastomeric restoration with the flat sections membraned in — the island standard for keeping mid-century roofs alive decade after decade.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Wilton Manors",
      paragraphs: [
        "Coating restorations in Wilton Manors generally proceed without a building permit — surface maintenance, not structural change — and we confirm with the city's Building Department when repairs are included. Few HOAs here; homeowners decide, and projects move quickly.",
        "Age-based underwriting hits the island's 1950s–60s stock constantly. Restoration plus Additional Roof Life Certification is the certified answer that keeps mid-century homes insured without erasing their character under a builder-grade re-roof.",
      ],
    },
    neighborhoods: [
      { name: "Wilton Drive corridor", note: "commercial low-slope roofs — sealed and reflectivity-coated" },
      { name: "Middle River riverfront", note: "remodeled mid-century homes with humidity-fed algae — cleaned and coated" },
      { name: "Westside / Jenada Isles", note: "island lots with 1950s–60s tile and flat sections" },
      { name: "East of the Drive", note: "classic CBS ranches facing age-based insurance letters" },
      { name: "Highland Estates", note: "post-war stock where restoration preserves the original roofline" },
    ],
  },

  /* ── MIAMI-DADE — ROUND 4 (July 2026 rollout) ──────────────── */

  miami: {
    intro: [
      "Miami is where roof coating has to prove itself: the strictest wind code in America, a century of housing stock from Coconut Grove bungalows to Brickell-adjacent flat-roof moderns, and a climate that attacks every surface with UV, salt, and ten wet months a year. This is our home county's flagship market — and the reason our flagship product carries a Miami-Dade rating.",
      "Roof Shield is the world's only monolithic roof coating with a TAS-106 Miami-Dade uplift rating — the county's own hurricane test standard. On the flat and low-slope roofs that define whole Miami neighborhoods (Shenandoah, Silver Bluff, the Upper Eastside's MiMo district), that rating is the difference between a coating and a certified hurricane system.",
      "The other Miami constant is insurance pressure: carriers flag roof age across the city's 1920s–1970s neighborhoods relentlessly. A coating restoration plus an Additional Roof Life Certification gives Miami homeowners the documented answer — at 60–70% below the re-roof quote the letter implies you need.",
    ],
    roofLandscape: {
      heading: "The Miami roof landscape",
      paragraphs: [
        "Miami's roof map reads by era: 1920s–40s Mediterranean barrel tile and Art Deco flat roofs in the Roads, Shenandoah, and the historic core; 1950s–60s CBS ranches with white tile and gravel across Flagami, Westchester-adjacent blocks, and Allapattah; MiMo-era flat and butterfly roofs along Biscayne Boulevard's Upper Eastside; and modern flat-roof construction everywhere infill happens. Flat and low-slope roof dominates this city like nowhere else in Florida.",
        "Coconut Grove adds its own microclimate — dense canopy, heavy shade, constant algae and fungal pressure on tile and shingle alike. FungalShield treatment exists for exactly this; Grove homeowners typically bundle it into a full restoration.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Miami",
      paragraphs: [
        "The City of Miami and Miami-Dade County run some of the most rigorous building oversight in the country — but coating is surface restoration, and most projects proceed without a permit. Where historic districts apply (Morningside, the MiMo Biscayne corridor, parts of the Grove and Shenandoah), exterior changes get extra review, and we confirm requirements before starting. Our documentation package — NOA references, TAS-106 certification, product specs — is built for Miami-grade scrutiny.",
        "Miami's roof-age insurance crisis is the worst in Florida: carriers non-renew on age alone across the city's older neighborhoods. A documented coating restoration with Additional Roof Life Certification is the certified path that keeps 50-year-old Miami homes insured without 50-thousand-dollar re-roofs.",
      ],
    },
    neighborhoods: [
      { name: "Coconut Grove", note: "canopy shade and algae pressure — clean, treat, and coat in one project" },
      { name: "The Roads & Shenandoah", note: "1920s–40s barrel tile and flat roofs restored, not replaced" },
      { name: "Upper Eastside / MiMo district", note: "mid-century flat and butterfly roofs — TAS-106 rated membrane" },
      { name: "Flagami & Allapattah", note: "1950s–60s CBS stock facing the county's heaviest insurance letters" },
      { name: "Coral Way corridor", note: "Mediterranean tile estates — color-matched from 3,000+ options" },
    ],
  },

  "miami-beach": {
    intro: [
      "Miami Beach roofs work harder than any in Florida: barrier-island salt on every surface, the nation's most famous Art Deco flat-roof inventory, and building oversight to match. Coating restoration was practically invented for this island — sealing flat decks and tile fields as one membrane instead of tearing off roofs that historic rules protect.",
      "From South Beach's Deco and MiMo apartment buildings to Mid-Beach's 1930s–50s single-family streets and North Beach's garden condos, the dominant roof is flat or low-slope — and flat roofs fail at seams, flashings, and ponding zones first. A monolithic elastomeric coating eliminates the seams; Roof Shield adds the Miami-Dade TAS-106 uplift rating that an open-ocean address demands.",
      "For the island's condo boards and hotel operators, we bring the full documentation package — NOA references, uplift certification, specs, insurance — because on Miami Beach, the paperwork is half the project.",
    ],
    roofLandscape: {
      heading: "The Miami Beach roof landscape",
      paragraphs: [
        "South Beach is Deco flat-roof territory — 1930s–40s apartment buildings whose parapet-walled decks have been recovered and recoated for ninety years. Mid-Beach mixes 1930s–50s Mediterranean tile homes on the Sunset Islands and La Gorce with flat-roof moderns; North Beach carries MiMo-era garden condos and post-war single families, nearly all low-slope. Salt exposure is total — there is no inland on this island.",
        "Reflective cool-roof coating earns double duty here: it seals against salt intrusion and cuts cooling loads on buildings that air-condition year-round. On white-membrane historic decks, it's also the maintenance approach preservation boards prefer — restore, don't replace.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Miami Beach",
      paragraphs: [
        "Miami Beach layers city review on top of Miami-Dade code, and its historic districts (Flamingo Park, Collins Waterfront, North Shore) scrutinize exterior work closely — though coating is maintenance-grade restoration and generally proceeds without structural permitting. We confirm district requirements before starting and supply preservation-friendly documentation.",
        "Island underwriting is merciless on roof age. A coating restoration with Additional Roof Life Certification — plus TAS-106 uplift documentation on flat decks — is the certified file that keeps Beach properties insured.",
      ],
    },
    neighborhoods: [
      { name: "South Beach / Flamingo Park district", note: "historic Deco flat decks — restore under preservation rules" },
      { name: "Sunset Islands & La Gorce", note: "1930s–50s tile estates under total salt exposure" },
      { name: "Mid-Beach", note: "Mediterranean and modern mix — whole-roof membrane systems" },
      { name: "North Beach / Normandy Isles", note: "MiMo garden condos — board-ready documentation standard" },
      { name: "Collins Avenue corridor", note: "hotel and condo decks where cool-roof coating cuts cooling loads" },
    ],
  },

  "coral-gables": {
    intro: [
      "Coral Gables is the City Beautiful — George Merrick's 1920s Mediterranean vision, protected by the strictest aesthetic regulation in South Florida. Its barrel-tile roofs aren't just roofs; they're a regulated architectural feature. Restoring them correctly, in approved colors, with board-ready documentation, is a specialty — and it's ours.",
      "The classic Gables project is a 1920s–1950s barrel tile roof that's structurally magnificent and cosmetically exhausted: faded, chalked, streaked with algae under the oak canopy. Our elastomeric restoration brings back the color (matched to Gables-approved palettes from 3,000+ tintable options), kills the algae, and seals the tile field — while preserving the original tile that gives the house its value.",
      "Replacement on these homes is a last resort: original barrel tile is often irreplaceable, and a tear-off invites both cost and character loss. Coating restoration keeps the history on the roof.",
    ],
    roofLandscape: {
      heading: "The Coral Gables roof landscape",
      paragraphs: [
        "The historic core — from the Granada entrance through the Country Club sections — is 1920s–40s Mediterranean barrel tile, much of it original clay. Post-war sections toward Riviera and south toward Sunset added 1950s–60s tile and white-gravel roofs, while Gables Estates and Cocoplum carry large waterfront tile fields under salt exposure. The oak canopy that defines the city also feeds constant algae and lichen pressure on shaded slopes.",
        "Flat sections hide everywhere in the Gables — over loggias, Florida rooms, and garage wings — and they fail before the tile does. Our approach membranes those sections and seals the tile field in one project.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Coral Gables",
      paragraphs: [
        "Coral Gables regulates exterior appearance like nowhere else in Florida — roof color changes go through the city's Board of Architects review, and historic designations add another layer. We handle that process routinely: color submissions from approved palettes, product documentation, and the patience the Gables process requires. Coating itself is surface restoration and generally needs no structural permit.",
        "Gables homes carry high insured values, and carriers question 60–90 year old roofs constantly. A documented restoration with Additional Roof Life Certification answers the age question while preserving the original roof — the outcome both the insurer and the Board of Architects prefer.",
      ],
    },
    neighborhoods: [
      { name: "Historic core / Country Club sections", note: "1920s–40s original barrel tile — restoration preserves irreplaceable clay" },
      { name: "Gables Estates & Cocoplum", note: "waterfront estate tile under salt exposure — sealed and color-matched" },
      { name: "Riviera & South Gables", note: "1950s–60s tile and gravel at the restoration stage" },
      { name: "Granada / Alhambra corridors", note: "canopy-shaded slopes with algae pressure — FungalShield territory" },
      { name: "Miracle Mile / downtown Gables", note: "commercial flat decks behind Mediterranean facades" },
    ],
  },

  doral: {
    intro: [
      "Doral is new-Miami: master-planned tile-roof communities built from the 1980s through the 2010s — Doral Park, Doral Isles, Islands at Doral, Grand Bay — alongside one of Florida's largest warehouse districts. Two completely different roof markets, one city, and we work both.",
      "Doral's residential tile is hitting its first restoration cycle: 1980s–90s roofs past year 30, 2000s roofs chalking at year 20 under relentless UV. The HOAs here are active and appearance-driven — a SmartShield restoration in the community's approved palette answers the HOA notice, kills the streaking, and re-waterproofs the field at 60–70% below replacement.",
      "On the industrial side, Doral's miles of warehouse flat roof are prime cool-roof coating territory: seal the seams, stop the leaks, and cut cooling loads on buildings that run air conditioning around the clock.",
    ],
    roofLandscape: {
      heading: "The Doral roof landscape",
      paragraphs: [
        "Residential Doral is concrete tile nearly wall to wall: S-tile and flat-profile tile on 1980s–2010s homes across Doral Park, Doral Isles, The Islands, and the newer communities toward NW 107th. The city's lake systems keep humidity at roof level high, so algae streaking arrives early on north slopes.",
        "West and south Doral carry the warehouse district — built-up, modified bitumen, and metal decks from the 1970s onward, many now decades into service. Monolithic elastomeric coating over these decks stops seam failure and adds reflectivity in one application, with documented warranties that commercial carriers ask for at renewal.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Doral",
      paragraphs: [
        "Coating restorations in Doral generally proceed without a building permit — surface maintenance under Miami-Dade code — and we confirm when repair scope warrants. Nearly every Doral home sits inside an HOA with architectural review; our submission package (specs, colors, insurance, warranty) is built to clear them first pass.",
        "Even Doral's younger roofs now draw insurer age questions at 15–20 years. Restoration plus Additional Roof Life Certification documents extended service life before the question becomes a non-renewal.",
      ],
    },
    neighborhoods: [
      { name: "Doral Park & Doral Estates", note: "1980s tile past year 30 — full restoration cycle" },
      { name: "Doral Isles & The Islands", note: "1990s–2000s lakefront tile with early algae streaking" },
      { name: "Grand Bay / NW 107th corridor", note: "newer tile — proactive coating extends the factory finish" },
      { name: "Warehouse district (NW 25th–58th St)", note: "flat decks coated and cooled at industrial scale" },
      { name: "Downtown Doral", note: "mixed-use flat roofs — reflective systems with documented warranties" },
    ],
  },

  aventura: {
    intro: [
      "Aventura is association country: a city built almost entirely of condo towers, garden condos, and gated townhome communities between the Intracoastal and Biscayne Boulevard. Roof decisions here are board decisions — and boards buy documentation, warranties, and track record before they buy anything else.",
      "The city's garden condos and townhome communities from the 1980s–90s carry acres of low-slope and tile roof now deep into the restoration window. Coating an entire roof field as one monolithic membrane turns a looming special assessment into a maintenance line item — the math every Aventura board meeting wants to hear.",
      "Salt air off the Intracoastal accelerates everything east of Biscayne Boulevard, and Roof Shield's Miami-Dade TAS-106 uplift rating is the credential coastal boards ask about by name. Our quote package arrives board-ready: specs, colors, insurance, warranty, and the certification itself.",
    ],
    roofLandscape: {
      heading: "The Aventura roof landscape",
      paragraphs: [
        "Beyond the towers, Aventura's coatable inventory is substantial: garden-condo buildings and townhome roof fields in communities like Del Vista, Aventura Lakes, and the country-club sections — 1980s–90s tile and low-slope decks aging on association schedules. The Turnberry and Waterways areas add waterfront buildings where salt exposure shortens every maintenance cycle.",
        "Flat sections and walkway roofs fail at seams first; tile fields chalk and streak on schedule. A community-wide restoration handles both in one mobilization — which is also where the volume pricing lives.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Aventura",
      paragraphs: [
        "Aventura projects run through association governance more than city permitting — coating is surface restoration under Miami-Dade code and generally needs no permit, but every association requires formal board approval. Our package is built for Aventura boards: full specs, color documentation, insurance certificates, warranty terms, and TAS-106 uplift certification.",
        "Since Surfside, South Florida associations face intense scrutiny on building maintenance documentation. A documented roof restoration program — with certified life-extension paperwork — is now standard due diligence, and we provide the full file.",
      ],
    },
    neighborhoods: [
      { name: "Aventura Lakes", note: "1990s townhome roof fields — community-wide restoration pricing" },
      { name: "Del Vista / country-club corridor", note: "1980s garden condos deep in the restoration window" },
      { name: "The Waterways", note: "Intracoastal-side buildings on shortened salt-exposure cycles" },
      { name: "Turnberry area", note: "association decks where TAS-106 documentation wins the board vote" },
      { name: "Biscayne corridor", note: "commercial and retail flat decks — cool-roof coating at scale" },
    ],
  },

  homestead: {
    intro: [
      "Homestead knows hurricanes like nowhere else in America — Andrew came ashore here in 1992 and rewrote Florida's building code on the way. Everything about roofing in Homestead traces back to that morning: the post-Andrew rebuild stock, the county's TAS uplift standards, and a community that takes wind protection personally.",
      "That's why Roof Shield resonates here: it's the world's only monolithic roof coating rated under Miami-Dade's own TAS-106 uplift test — the standard Andrew created. On Homestead's post-Andrew tile and the older stock that survived, a coating restoration adds documented wind protection while sealing out the rain that ten wet months deliver.",
      "Homestead's mix is broader than most cities: historic downtown homes, 1990s rebuild tile, big new communities toward the Turnpike, agricultural buildings with metal roofs, and working families for whom the 60–70% savings versus re-roofing isn't a preference — it's the budget.",
    ],
    roofLandscape: {
      heading: "The Homestead roof landscape",
      paragraphs: [
        "Post-Andrew Homestead is concrete tile built to the code Andrew wrote — 1990s–2000s S-tile now hitting its first restoration cycle, chalked and streaked but structurally sound. The historic core around Krome Avenue keeps pre-war and mid-century homes under shingle and early tile, while the eastern and Turnpike-corridor communities (Malibu Bay, Waterstone, Oasis) add 2000s–2010s tile at the proactive-maintenance stage.",
        "The Redland's agricultural edge brings metal — packing houses, barns, and equipment buildings where rust-sealing reflective coating stops corrosion and drops interior temperatures in one application.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Homestead",
      paragraphs: [
        "Homestead enforces Miami-Dade's post-Andrew code as a point of local pride; coating remains surface restoration and generally proceeds without a permit, and our NOA and TAS-106 documentation speaks the local building department's language. The newer gated communities require HOA color approval — handled in our standard package.",
        "Insurance pressure hits Homestead from both ends: age flags on the surviving pre-Andrew stock and premium pressure on everything this far into the wind zone. Restoration plus Additional Roof Life Certification — with uplift-rated product documentation — is the certified answer on both counts.",
      ],
    },
    neighborhoods: [
      { name: "Historic downtown / Krome corridor", note: "pre-war and mid-century survivors restored with care" },
      { name: "Post-Andrew rebuild sections", note: "1990s tile at its first restoration cycle" },
      { name: "Malibu Bay & Waterstone", note: "2000s HOA tile — proactive coating extends the finish" },
      { name: "Oasis / Turnpike corridor", note: "newest stock, HOA palettes matched" },
      { name: "The Redland edge", note: "agricultural metal roofs — rust-sealed and heat-reflective" },
    ],
  },

  "north-miami": {
    intro: [
      "North Miami is mid-century Miami at scale: square mile after square mile of 1940s–60s CBS homes under white tile, gravel, and flat sections, from the Griffing Boulevard corridor to the Keystone Point waterfront. Most of these roofs are structurally sound at 60–80 years old — and almost all of them are surface-failed.",
      "Keystone Point and Sans Souci add the salt factor: canal-front homes whose east-facing slopes chalk and corrode years ahead of inland twins. Elastomeric restoration re-seals the whole roof — tile field, flat sections, flashings — as one membrane, with Roof Shield's Miami-Dade TAS-106 uplift rating on the flat decks.",
      "And everywhere in North Miami, the insurance letter is the trigger: carriers flag these mid-century roofs on age alone. A coating restoration plus Additional Roof Life Certification is the certified answer at a fraction of the re-roof quote.",
    ],
    roofLandscape: {
      heading: "The North Miami roof landscape",
      paragraphs: [
        "The city's core grid is post-war CBS construction — low-pitch white tile, gravel built-ups, and the flat Florida-room additions that leak first. Keystone Point, Sans Souci, and the Bayshore sections carry larger waterfront homes under tile with generous flat wings, while the 125th Street and Biscayne corridors add a dense strip of commercial low-slope decks.",
        "Uniform stock means uniform economics: restoration typically runs 60–70% below replacement here, and because whole streets age together, neighbors frequently schedule together for volume pricing.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in North Miami",
      paragraphs: [
        "Coating restorations in North Miami generally proceed without a building permit — surface maintenance under Miami-Dade code — and we confirm with the city's Building Department when repairs are bundled. Few HOAs; homeowners decide, and projects move from evaluation to finished roof quickly.",
        "North Miami's mid-century inventory is squarely in the age-flag zone. Restoration plus Additional Roof Life Certification keeps 60-year-old homes insured without tear-offs they don't need.",
      ],
    },
    neighborhoods: [
      { name: "Keystone Point", note: "canal-front tile and flat wings under salt exposure — sealed as one membrane" },
      { name: "Sans Souci Estates", note: "waterfront mid-century homes on shortened maintenance cycles" },
      { name: "Griffing / central grid", note: "1940s–60s CBS stock facing age-based insurance letters" },
      { name: "Biscayne & 125th St corridors", note: "commercial flat decks — cool-roof coating at scale" },
      { name: "Enchanted Place / NE sections", note: "post-war homes where restoration saves 60–70%" },
    ],
  },

  "north-miami-beach": {
    intro: [
      "North Miami Beach — Uleta to Eastern Shores — is 1950s–60s Florida nearly wall to wall: CBS ranches under white tile and gravel inland, and canal-front homes taking daily salt air along the Intracoastal edge. The roofs are old enough to draw insurance letters and sound enough that most shouldn't be replaced.",
      "Eastern Shores is the sharp end: waterfront homes minutes from the inlet whose roofs age on coastal time. Elastomeric restoration re-seals tile fields and flat sections into one membrane — with the Miami-Dade TAS-106 uplift rating on flat decks this close to open water.",
      "Inland, the pattern is the classic one: a structurally sound 60-year-old roof, a carrier's age letter, and a re-roof quote that doesn't fit the budget. Restoration plus Additional Roof Life Certification answers the letter for a fraction of it.",
    ],
    roofLandscape: {
      heading: "The North Miami Beach roof landscape",
      paragraphs: [
        "The city's core — Uleta, Sunray, the Washington Park sections — is uniform post-war CBS: low-pitch white tile, shingle, and gravel with flat additions over Florida rooms and carports. Eastern Shores and the Maule Lake waterfront add larger 1960s homes with big tile mains and flat wings under constant salt exposure.",
        "The 163rd Street corridor carries one of north Dade's densest commercial strips — mall-era flat decks and storefront roofs where reflective cool-roof coating seals and cools in one application.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in North Miami Beach",
      paragraphs: [
        "Coating restorations in North Miami Beach generally require no building permit — we confirm with the city when repair scope warrants. Eastern Shores runs its own security district and association processes; our documentation package covers the approvals.",
        "Between coastal underwriting on the east side and age flags across the core, NMB homeowners see constant insurance pressure. A documented restoration with Additional Roof Life Certification is the certified file that keeps coverage in place.",
      ],
    },
    neighborhoods: [
      { name: "Eastern Shores", note: "inlet-adjacent waterfront tile — sealed on a strict recoat cycle" },
      { name: "Uleta & Sunray", note: "1950s–60s CBS ranches facing age-based letters" },
      { name: "Maule Lake / Intracoastal edge", note: "canal-front homes with salt-worn east slopes" },
      { name: "Washington Park sections", note: "post-war stock where neighbors schedule together" },
      { name: "163rd Street corridor", note: "commercial flat decks — cool-roof coating at scale" },
    ],
  },

  "cutler-bay": {
    intro: [
      "Cutler Bay carries Andrew's memory in its bones — the storm's eyewall crossed here in 1992, flattening whole sections of what was then Cutler Ridge. The town that rebuilt is a mix of survivors, 1990s rebuild tile, and 2000s Lakes-by-the-Bay stock — three roof generations, all now due different kinds of care.",
      "The post-Andrew rebuild tile is hitting year 30: chalked, streaked, structurally fine. The 1950s–70s survivors in the original Cutler Ridge and Saga Bay sections carry age-flagged roofs their insurers question annually. Both get the same answer — coating restoration with certified documentation, at 60–70% below replacement.",
      "This far into the wind zone, Roof Shield's Miami-Dade TAS-106 uplift rating isn't a nice-to-have; it's the specification. It's the world's only monolithic coating rated under the county's own hurricane test — the test Andrew made necessary.",
    ],
    roofLandscape: {
      heading: "The Cutler Bay roof landscape",
      paragraphs: [
        "Old Cutler Ridge and Saga Bay hold the pre-Andrew stock — 1950s–70s CBS homes under shingle, gravel, and early tile, many recovered post-storm and due again. The rebuild years added uniform 1990s S-tile across the town core, and Lakes by the Bay stretched 1990s–2000s tile communities toward the bay, where salt-tinged easterlies age the exposed slopes first.",
        "The Old Cutler and US-1 corridors add commercial low-slope decks and townhome roof fields — association work where volume pricing and board documentation decide the job.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Cutler Bay",
      paragraphs: [
        "The Town of Cutler Bay enforces Miami-Dade code with post-Andrew seriousness; coating is surface restoration and generally proceeds without a permit, and our NOA and TAS-106 documentation is the language its building department speaks. Lakes by the Bay and the newer communities require HOA color approval — our package handles it.",
        "Insurance pressure is double here: age flags on the survivors, premium pressure on everything in the wind zone. Restoration plus Additional Roof Life Certification — backed by uplift-rated product documentation — answers both.",
      ],
    },
    neighborhoods: [
      { name: "Old Cutler Ridge", note: "pre-Andrew survivors — age-flagged and restoration-ready" },
      { name: "Saga Bay", note: "1970s waterside stock on salt-shortened cycles" },
      { name: "Post-Andrew core", note: "1990s rebuild tile at year 30 — full restoration cycle" },
      { name: "Lakes by the Bay", note: "1990s–2000s HOA tile — palettes matched, paperwork handled" },
      { name: "Old Cutler / US-1 corridors", note: "commercial decks and townhome fields at volume pricing" },
    ],
  },

  "palmetto-bay": {
    intro: [
      "Palmetto Bay is the village of big canopies and big tile roofs — 1950s–80s ranch estates on generous lots from Coral Reef Drive down to the Deering Estate, shaded by some of Dade's oldest oaks. The shade is the character, and it's also the roofing problem: algae and lichen own these slopes.",
      "The typical Palmetto Bay evaluation finds a large, structurally excellent tile roof wearing twenty years of canopy fallout: black streaking, moss at the valleys, chalked finish under it all. FungalShield treatment plus a SmartShield restoration cleans, kills, recolors, and re-seals the whole field — one project, 60–70% below what replacing that much tile would cost.",
      "East of Old Cutler, the bayfront estates add salt to the mix, and Andrew's memory runs deep here too — Roof Shield's Miami-Dade TAS-106 uplift rating is the documented wind answer for a village that rebuilt once already.",
    ],
    roofLandscape: {
      heading: "The Palmetto Bay roof landscape",
      paragraphs: [
        "The village's core is 1950s–80s single-story and split-level homes under concrete and clay tile, with the occasional white-gravel mid-century — nearly all on quarter-acre-plus lots beneath mature canopy. East Palmetto Bay's estate sections toward the Deering Estate carry larger tile fields with bayfront salt exposure; the western sections mix in post-Andrew rebuild tile from the 1990s.",
        "Flat wings over Florida rooms and garages hide throughout this stock and fail before the tile does — membraned in as part of every full restoration.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Palmetto Bay",
      paragraphs: [
        "The Village of Palmetto Bay runs attentive local government; coating restorations are surface maintenance and generally proceed without a permit — we confirm when repair scope warrants. Few HOAs; owners decide, and estate-scale projects get estate-scale scheduling.",
        "Large insured values plus 40–70 year old roofs equals constant carrier questions. A documented restoration with Additional Roof Life Certification keeps village homes insured while preserving original tile worth keeping.",
      ],
    },
    neighborhoods: [
      { name: "Coral Reef Drive corridor", note: "canopy-shaded estate tile — clean, treat, coat in one project" },
      { name: "East Palmetto Bay / Deering edge", note: "bayfront tile fields with salt-worn east slopes" },
      { name: "The Falls-adjacent west side", note: "1990s rebuild tile at its first restoration cycle" },
      { name: "Old Cutler corridor", note: "original 1950s–60s homes under irreplaceable early tile" },
      { name: "Franjo / village core", note: "split-levels with hidden flat wings — membraned as one" },
    ],
  },

  pinecrest: {
    intro: [
      "Pinecrest is estate-roof country: acre lots under some of the largest residential tile fields in Miami-Dade, from Red Road to the Ludlam corridor, all beneath a canopy that made the village famous and keeps its roofs permanently shaded. Big roofs, big trees, big restoration math.",
      "On a Pinecrest-scale tile roof, the restoration-versus-replacement decision routinely swings tens of thousands of dollars. When the structure is sound — and on these 1950s–90s homes it usually is — a SmartShield restoration recolors, re-seals, and re-waterproofs the entire field for a fraction of the tear-off, without the months of disruption an estate re-roof brings.",
      "The canopy feeds relentless algae, moss, and lichen on shaded slopes; FungalShield treatment is practically a Pinecrest standard. And on remodeled flat-roof moderns, Roof Shield brings the Miami-Dade TAS-106 uplift rating this wind zone expects.",
    ],
    roofLandscape: {
      heading: "The Pinecrest roof landscape",
      paragraphs: [
        "Original Pinecrest is 1950s–70s ranch estates under clay and concrete tile with white-gravel flat wings — the classic 'North Pinecrest' stock around the Parrot Jungle-era streets. Decades of teardowns added 1990s–2010s builds: bigger footprints, S-tile and flat-profile tile, and a growing set of flat-roof contemporaries. All of it sits under canopy that shades slopes year-round.",
        "The US-1 edge carries the village's commercial strip, but Pinecrest's real inventory is residential: some of the county's largest single-home roof fields, where per-square-foot economics make coating's 60–70% savings most dramatic.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Pinecrest",
      paragraphs: [
        "The Village of Pinecrest reviews construction carefully, but coating is surface restoration and generally proceeds without a permit — we confirm with the Building Division when scope includes repairs. No HOAs to speak of; owners decide, and we schedule estate projects to minimize disruption.",
        "High insured values draw carrier attention to roof age across the village. A documented restoration with Additional Roof Life Certification settles the question — and preserves original tile that suits these streets better than anything new.",
      ],
    },
    neighborhoods: [
      { name: "North Pinecrest", note: "1950s–70s ranch estates under original tile — restoration preserves them" },
      { name: "Red Road corridor", note: "large shaded tile fields — FungalShield plus full restoration" },
      { name: "Ludlam / central village", note: "teardown-era 1990s–2000s tile at the chalking stage" },
      { name: "US-1 edge", note: "commercial low-slope decks — cool-roof coating" },
      { name: "SW 120th St sections", note: "flat-roof contemporaries — TAS-106 rated membrane" },
    ],
  },

  "key-biscayne": {
    intro: [
      "Key Biscayne is an island village at the end of a causeway — ocean on one side, bay on the other, and not one roof beyond the reach of salt. Its 1950s–70s village core and its rebuilt estate stock share the same reality: surfaces here age on island time, and Andrew's landfall just north made wind documentation a way of life.",
      "The Key's mid-century homes — the classic village ranches and Mackle-era cottages — carry tile and flat roofs that are structurally sound and perpetually salt-worn. Elastomeric restoration re-seals them as one membrane on a recoat cycle that island owners know by heart; Roof Shield adds the Miami-Dade TAS-106 uplift rating an open-Atlantic address demands.",
      "For the island's condos and townhome associations, the documentation is the deal: uplift certification, specs, insurance, warranty — the package we bring to every board.",
    ],
    roofLandscape: {
      heading: "The Key Biscayne roof landscape",
      paragraphs: [
        "The village core holds 1950s–70s single-story homes — Mackle-built cottages and expanded ranches under tile, white gravel, and flat sections — while decades of rebuilds added Mediterranean tile estates and flat-roof moderns, especially toward the ocean side. The condo corridor along the beach carries large low-slope decks maintained on association recoat cycles.",
        "Salt is total and bidirectional — Atlantic east, bay west. Fasteners, flashings, and seams fail first; a monolithic coating removes the seams from the equation, which is why island roofs live on 10–15 year recoat cycles rather than replacement gambles.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Key Biscayne",
      paragraphs: [
        "The Village of Key Biscayne runs its own attentive building oversight; coating restorations are surface maintenance and generally proceed without a permit — we confirm before starting. Condo boards require formal approval, and our island package leads with the TAS-106 uplift certification they ask about first.",
        "Island underwriting is the strictest in the county: any roof past 12–15 years draws questions. Restoration plus Additional Roof Life Certification is the certified answer that keeps Key homes and condos insured without tearing off sound roofs.",
      ],
    },
    neighborhoods: [
      { name: "Village core / Mackle sections", note: "1950s–70s island cottages — preserved by recoat cycles" },
      { name: "Ocean-side estates", note: "rebuilt tile and flat-roof moderns under maximum salt exposure" },
      { name: "Beach condo corridor", note: "association decks — TAS-106 documentation leads the package" },
      { name: "Bay-side streets", note: "west-facing salt from the bay — flashings and seams sealed as one" },
      { name: "Harbor Drive corridor", note: "estate tile fields on island maintenance schedules" },
    ],
  },

  "south-miami": {
    intro: [
      "South Miami is the City of Pleasant Living — a walkable mid-century grid around Sunset Drive where 1930s–60s homes sit under original tile, shingle, and flat sections, shaded by the same canopy that runs through neighboring Coral Gables and Pinecrest. Old roofs, good bones, heavy shade: restoration country.",
      "The typical South Miami roof is 50–80 years old structurally and surface-done: chalked tile, algae-owned north slopes, a flat Florida-room wing patched one time too many. Elastomeric restoration re-seals the whole roof as one membrane and keeps the original character — at 60–70% below what replacement costs.",
      "And like everywhere in this band of mid-century Dade, the trigger is usually the insurance letter. Restoration plus Additional Roof Life Certification is the certified answer that keeps these homes covered.",
    ],
    roofLandscape: {
      heading: "The South Miami roof landscape",
      paragraphs: [
        "North of Sunset, the streets toward the Gables carry 1930s–50s Mediterranean tile and early CBS homes; the core grid holds post-war ranches with white tile, shingle, and gravel; and the Cocoplum-adjacent southern sections mix in larger remodeled homes. Canopy shade is constant, and with it algae, moss, and lichen on every shaded slope.",
        "The Sunset Drive / US-1 corridor adds downtown South Miami's commercial low-slope decks — restaurant rows and storefronts where cool-roof coating seals and cools in one pass.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in South Miami",
      paragraphs: [
        "Coating restorations in South Miami are surface maintenance and generally proceed without a permit — we confirm with the city's Building Department when repairs are included. Few HOAs; homeowners decide, and compact lots make for fast projects.",
        "Age-based underwriting hits this mid-century stock constantly. A documented restoration with Additional Roof Life Certification keeps 60-year-old South Miami homes insured without erasing their character.",
      ],
    },
    neighborhoods: [
      { name: "North of Sunset / Gables edge", note: "1930s–50s tile restored, not replaced" },
      { name: "Core grid off Sunset Drive", note: "post-war ranches facing age-based letters" },
      { name: "Cambridge Lawns", note: "historic 1930s cottages — preservation-minded restoration" },
      { name: "South of 72nd sections", note: "remodeled homes with hidden flat wings — membraned as one" },
      { name: "Sunset / US-1 corridor", note: "downtown commercial decks — cool-roof coating" },
    ],
  },

  "miami-shores": {
    intro: [
      "Miami Shores is one of Dade's great architectural time capsules: a 1920s–50s village of Mediterranean Revival, Art Deco, and mid-century homes east and west of Biscayne Boulevard, protected by an architectural review process that takes appearance seriously. These roofs deserve preservation — and that's exactly what coating restoration is.",
      "The classic Shores project is original barrel tile or white tile, 60–90 years old, structurally sound and cosmetically spent. Restoration re-seals and recolors it — matched through the village's review from 3,000+ tintable options — while keeping original tile that literally cannot be bought new.",
      "The bayfront streets add salt exposure, the canopy adds algae, and the insurers add age letters: one documented restoration answers all three.",
    ],
    roofLandscape: {
      heading: "The Miami Shores roof landscape",
      paragraphs: [
        "East of Biscayne Boulevard toward the bay, the Shores carries its grandest stock — 1920s–40s Mediterranean tile and Deco flat roofs on estate lots, salt-exposed and canopy-shaded at once. The western grid holds 1940s–50s CBS homes under white tile, shingle, and gravel with the era's flat Florida-room wings.",
        "Nearly every roof in the village is past 60; nearly all are structurally fine. Surface renewal on a cycle — clean, treat, coat — is what keeps this inventory alive, and it's the approach the village's aesthetic standards favor over tear-offs.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Miami Shores",
      paragraphs: [
        "Miami Shores Village reviews exterior changes through its architectural process — roof color changes included — and we handle those submissions routinely: approved-palette color documentation, product specs, and the patience village review deserves. Coating itself is surface restoration and generally needs no structural permit.",
        "Carriers question 70-year-old roofs relentlessly. Restoration plus Additional Roof Life Certification is the certified documentation that keeps the Shores' historic homes insured — with their original roofs intact.",
      ],
    },
    neighborhoods: [
      { name: "Bayfront estates", note: "1920s–40s Mediterranean tile under salt and canopy at once" },
      { name: "East of Biscayne grid", note: "Deco and mid-century homes — village-approved color matching" },
      { name: "Western sections", note: "1940s–50s CBS stock facing age letters" },
      { name: "Grand Concourse corridor", note: "the village's signature streets — preservation-first restoration" },
      { name: "Barry University area", note: "post-war homes with flat wings membraned in" },
    ],
  },

  "miami-springs": {
    intro: [
      "Miami Springs is Glenn Curtiss's other planned city — a 1920s Pueblo Revival vision wrapped around a golf course, minutes from the airport. Its curved streets carry some of Dade's most distinctive old roofs: Pueblo parapets with flat decks, Mediterranean tile, and post-war CBS infill, all aging together inside the Circle.",
      "Flat roofs behind parapet walls — the Pueblo signature — are coating's natural habitat: a monolithic elastomeric membrane over the deck, sealed at the parapets, ends the patch cycle these 90-year-old roofs have lived on. Tile mains get the same renewal through a SmartShield restoration.",
      "Between airport-corridor commerce and mid-century homes, the Springs also carries a working inventory of low-slope commercial decks — and everywhere, the mid-century insurance-age letters that a certified restoration answers.",
    ],
    roofLandscape: {
      heading: "The Miami Springs roof landscape",
      paragraphs: [
        "The historic core around the Circle and Curtiss Parkway holds 1920s–30s Pueblo Revival homes — flat decks, parapets, rounded stucco — alongside Mediterranean tile from the same boom. The rest of the Springs filled in through the 1940s–60s: CBS ranches under white tile, shingle, and gravel, with the flat additions of the era.",
        "The NW 36th Street and airport-edge corridors add hotels, offices, and hangar-adjacent commercial decks — reflective cool-roof territory where sealing and cooling pay for themselves.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Miami Springs",
      paragraphs: [
        "Miami Springs values its historic character and reviews exterior work accordingly; coating is surface restoration and generally proceeds without a permit — we confirm with the city when historic properties are involved. Pueblo parapet details get the careful flashing work they need.",
        "The Springs' 1920s–60s stock draws constant age-based underwriting. Restoration plus Additional Roof Life Certification keeps these irreplaceable homes insured without tearing off roofs that define them.",
      ],
    },
    neighborhoods: [
      { name: "The Circle / Curtiss Parkway", note: "1920s Pueblo flat decks — monolithic membrane behind the parapets" },
      { name: "Country Club sections", note: "golf-course homes under Mediterranean and mid-century tile" },
      { name: "Post-war grid", note: "1940s–60s CBS ranches facing age letters" },
      { name: "NW 36th St corridor", note: "airport-edge commercial decks — cool-roof coating" },
      { name: "Fairway sections", note: "mid-century homes with flat wings sealed as one" },
    ],
  },

  "hialeah-gardens": {
    intro: [
      "Hialeah Gardens grew fast and recent — most of the city went up from the 1980s through the 2000s, which means its concrete-tile inventory is now hitting the first big restoration window all at once: chalked finishes at year 25, algae streaks off the lakes, HOA notices arriving street by street.",
      "The math here is straightforward and family-budget-driven: a SmartShield restoration recolors and re-seals a Gardens tile roof at 60–70% below replacement, answers the HOA's appearance notice, and — paired with the Additional Roof Life Certification — answers the insurer's age question in the same project.",
      "Along the Okeechobee Road corridor, the city's warehouse and light-industrial strip adds flat and metal decks where cool-roof coating seals seams and cuts cooling loads on hard-working buildings.",
    ],
    roofLandscape: {
      heading: "The Hialeah Gardens roof landscape",
      paragraphs: [
        "Residential Hialeah Gardens is concrete S-tile nearly throughout — 1980s–2000s townhomes and single-families in gated and HOA communities around the lakes. The earliest sections are past year 35 and fully in the restoration window; the 2000s stock is chalking on schedule under relentless UV.",
        "The Okeechobee corridor carries the commercial weight: warehouses, truck-serving businesses, and retail decks in built-up, modified bitumen, and metal — all candidates for monolithic sealing and reflectivity in one application.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Hialeah Gardens",
      paragraphs: [
        "Coating restorations in Hialeah Gardens generally proceed without a building permit — surface maintenance under Miami-Dade code — and we confirm when repairs are bundled. Most communities carry HOA color rules; our submission package handles the approvals in Spanish or English, whichever the board prefers.",
        "Tile from the 80s and 90s is now squarely age-flagged. Restoration plus Additional Roof Life Certification documents extended life before the carrier's question becomes a non-renewal.",
      ],
    },
    neighborhoods: [
      { name: "Lake communities", note: "1980s–90s S-tile with lakeside algae streaking — cleaned and coated" },
      { name: "Gated townhome sections", note: "HOA roof fields quoted at community scale" },
      { name: "2000s single-family stock", note: "first chalking cycle — proactive restoration" },
      { name: "Okeechobee Road corridor", note: "warehouse flat and metal decks — sealed and cooled" },
      { name: "NW 103rd St sections", note: "older Gardens stock facing age letters" },
    ],
  },

  sweetwater: {
    intro: [
      "Sweetwater is one of Dade's hardest-working small cities — a compact 1960s–80s grid beside FIU and Dolphin Mall, where CBS homes and townhomes house working families and the roofs have carried decades without complaint. Now they're due, and the budget answer matters.",
      "The Sweetwater pattern: a structurally sound roof from the city's build-out years, a carrier's age letter, and a replacement quote that doesn't fit. A coating restoration with Additional Roof Life Certification answers the letter at 60–70% less — that's the exact scenario our systems exist for.",
      "The city's flood-conscious, storm-tested character fits our flagship too: Roof Shield's Miami-Dade TAS-106 uplift rating brings documented wind protection to a city that takes storms seriously.",
    ],
    roofLandscape: {
      heading: "The Sweetwater roof landscape",
      paragraphs: [
        "The core grid between Flagler and the Tamiami Canal is 1960s–80s CBS — low-pitch shingle, gravel, and early tile with flat additions, on compact lots where whole blocks age together. The newer edges toward 109th Avenue add 1990s tile and townhome roof fields.",
        "The Dolphin-adjacent commercial strips carry retail and light-industrial low-slope decks — cool-roof coating territory where sealing and cooling pay back fast.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Sweetwater",
      paragraphs: [
        "Coating restorations in Sweetwater generally require no building permit — we confirm with the city when repair scope warrants, and we work in Spanish or English throughout. Few HOAs in the core; projects move at the homeowner's pace.",
        "Age flags arrive block by block in stock this uniform. Restoration plus Additional Roof Life Certification keeps Sweetwater homes insured on budgets that can't absorb tear-offs — and neighbors scheduling together earn volume pricing.",
      ],
    },
    neighborhoods: [
      { name: "Core grid off Flagler", note: "1960s–80s CBS homes — the classic restoration case" },
      { name: "Canal-side streets", note: "humidity-fed algae on north slopes — treated and coated" },
      { name: "FIU-adjacent sections", note: "townhome and rental roofs maintained at field scale" },
      { name: "109th Ave newer edge", note: "1990s tile at the chalking stage" },
      { name: "Dolphin corridor", note: "retail flat decks — cool-roof coating at scale" },
    ],
  },

  "west-miami": {
    intro: [
      "West Miami is barely a square mile of classic mid-Dade living: 1940s–60s CBS homes on tight, tidy blocks between Coral Way and Eighth Street, many in the same families for generations. The roofs match the story — original white tile, shingle, and gravel, sixty-plus years old and mostly sound underneath.",
      "On these compact homes the restoration math is at its most persuasive: re-seal and recolor the existing roof for a fraction of replacement, answer the insurer's age letter with certified documentation, and skip the disruption a tear-off brings to a close-knit block.",
      "We work these streets in Spanish or English, evaluations are free, and because West Miami's stock is so uniform, neighbors regularly schedule together for volume pricing.",
    ],
    roofLandscape: {
      heading: "The West Miami roof landscape",
      paragraphs: [
        "The city is post-war CBS nearly wall to wall: low-pitch white tile and shingle mains, gravel built-ups, and the flat Florida-room additions of the era, on a grid that filled in between the 1940s and 1960s. Decades of family remodels added second stories and new wings — usually with flat sections that leak before anything else.",
        "Coral Way and SW 8th Street frame the city with commercial strips whose low-slope decks take the same coating systems at storefront scale.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in West Miami",
      paragraphs: [
        "Coating restorations in West Miami generally proceed without a building permit — surface maintenance, confirmed with the city when repairs are included. No HOAs; the homeowner decides, and compact roofs mean fast projects.",
        "This is exactly the mid-century stock carriers flag on age alone. Restoration plus Additional Roof Life Certification is the certified answer that keeps multi-generation family homes insured without five-figure tear-offs.",
      ],
    },
    neighborhoods: [
      { name: "Coral Way frontage", note: "1940s–50s homes under original white tile — restored, not replaced" },
      { name: "Central grid", note: "post-war CBS blocks where neighbors schedule together" },
      { name: "SW 8th St edge", note: "storefront low-slope decks — sealed and cooled" },
      { name: "Remodeled two-story stock", note: "added flat wings membraned into one system" },
    ],
  },

  "opa-locka": {
    intro: [
      "Opa-locka has the most distinctive skyline of any small city in Florida — Glenn Curtiss's 1926 Moorish Revival vision, domes and minarets included, over a working-class city whose 1940s–60s CBS homes have carried families for generations. History worth keeping, on budgets that need restoration math, not replacement math.",
      "The typical Opa-locka roof is structurally serviceable and surface-spent: dried shingle, gravel past its cycle, flat sections patched for years. A coating restoration re-seals it for 60–70% less than a tear-off — and with the Additional Roof Life Certification, it answers the age letter that carriers send this housing stock relentlessly.",
      "The city's industrial side — the airport-adjacent warehouse districts — adds serious flat-roof inventory where monolithic coating seals seams and reflective topcoats cut cooling loads on hard-working buildings.",
    ],
    roofLandscape: {
      heading: "The Opa-locka roof landscape",
      paragraphs: [
        "The historic core around Ali Baba Avenue and the Moorish city hall holds 1920s–40s homes — including flat-parapet Moorish details found nowhere else — while the broader grid is 1940s–60s CBS under shingle, gravel, and early tile with the era's flat additions. Whole blocks age together, and whole blocks get flagged by insurers together.",
        "Opa-locka Executive Airport anchors one of north Dade's largest warehouse belts: built-up, modified bitumen, and metal decks by the acre, most overdue for the seal-and-reflect treatment.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Opa-locka",
      paragraphs: [
        "Coating restorations in Opa-locka generally proceed without a building permit — we confirm with the city when scope includes repairs, and historic Moorish properties get the careful detail work their parapets deserve. No HOAs; owners decide.",
        "This is among the most age-flagged housing in the county. Restoration plus Additional Roof Life Certification keeps Opa-locka's homes insured on working budgets — the certified alternative to tear-offs families shouldn't be forced into.",
      ],
    },
    neighborhoods: [
      { name: "Historic Moorish core", note: "1920s–40s parapet roofs — careful membrane detail work" },
      { name: "Ali Baba / Sharazad grid", note: "1940s–60s CBS homes facing age letters block by block" },
      { name: "Magnolia North", note: "post-war stock where restoration saves 60–70%" },
      { name: "Airport warehouse belt", note: "acres of flat and metal deck — sealed and cooled at scale" },
      { name: "NW 135th St corridor", note: "commercial and civic low-slope roofs" },
    ],
  },

  /* ── MIAMI-DADE — ROUND 5: coastal villages & small cities ── */

  surfside: {
    intro: [
      "Surfside is a beach town that thinks like a village — nine blocks of 1930s–60s homes and low-rise buildings between the ocean and the bay, where every roof lives in full salt exposure and, since 2021, every association takes maintenance documentation more seriously than anywhere in Florida.",
      "The town's single-family streets carry mid-century tile and flat-roof homes that age on coastal time: chalked finishes, corroded flashings, seam-failed flat wings. Elastomeric restoration re-seals each roof as one membrane — with Roof Shield's Miami-Dade TAS-106 uplift rating for an address this close to open Atlantic.",
      "For Surfside's condo and co-op boards, the documented file is everything now: uplift certification, specs, warranty terms, insurance — the complete package, delivered before work begins.",
    ],
    roofLandscape: {
      heading: "The Surfside roof landscape",
      paragraphs: [
        "West of Collins, the town grid holds 1930s–60s single-family homes — Mediterranean tile, white tile, and flat-roof moderns on compact lots, nearly all past 60 years old and nearly all salt-worn ahead of their inland twins. The Collins corridor carries the condo inventory: low-slope decks maintained on association recoat cycles under post-2021 scrutiny.",
        "Harding and Abbott Avenue's town-center strip adds low-slope commercial decks — small-scale, but the same physics: seal the seams, reflect the heat, document everything.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Surfside",
      paragraphs: [
        "The Town of Surfside reviews building work carefully — understandably more than ever — though coating restorations are surface maintenance and generally proceed without structural permitting; we confirm with the Building Department before starting. Board approvals come with our full documentation file.",
        "Coastal underwriting flags Surfside roofs early and often. Restoration plus Additional Roof Life Certification is the certified answer that keeps town homes and buildings insured without tearing off sound roofs.",
      ],
    },
    neighborhoods: [
      { name: "Town grid west of Collins", note: "1930s–60s tile and flat-roof homes on coastal recoat cycles" },
      { name: "Collins condo corridor", note: "association decks — full documentation file standard" },
      { name: "Bay-side streets", note: "salt from both directions — flashings and seams sealed as one" },
      { name: "Harding town center", note: "low-slope commercial decks — sealed and cooled" },
    ],
  },

  "bal-harbour": {
    intro: [
      "Bal Harbour is a third of a square mile of the most valuable coastal real estate in Florida — gated single-family streets, world-class oceanfront buildings, and not one roof outside the salt zone. Here, roof work is judged on documentation, discretion, and finish quality — in that order.",
      "The village's residential section carries Mediterranean tile estates and flat-roof moderns whose surfaces age on open-Atlantic time. Elastomeric restoration re-seals them invisibly — original lines kept, colors matched exactly, salt sealed out — with Roof Shield's Miami-Dade TAS-106 uplift rating documented in the file.",
      "For the Collins Avenue buildings, boards and managers get the complete package: uplift certification, NOA references, specs, warranties, insurance — before a single ladder goes up.",
    ],
    roofLandscape: {
      heading: "The Bal Harbour roof landscape",
      paragraphs: [
        "The gated village section holds estate homes under barrel tile and flat-roof contemporary builds, most remodeled to high standards and all maintained on strict cycles — coastal ownership at this level runs on prevention, not repair. The oceanfront corridor carries the tower and low-rise deck inventory, association-managed and documentation-driven.",
        "Salt exposure is total. Surfaces, fasteners, and flashings age on the Atlantic's schedule, and the recoat cycle — clean, seal, coat, document — is what keeps both estate tile and association decks ahead of it.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Bal Harbour",
      paragraphs: [
        "The Village of Bal Harbour maintains exacting standards; coating restorations are surface maintenance and generally proceed without structural permitting — we confirm with the village before starting, and we work to the discretion gated streets expect.",
        "Underwriting at these insured values questions every aging surface. Restoration plus Additional Roof Life Certification — with TAS-106 uplift documentation — is the certified file that satisfies both carrier and board.",
      ],
    },
    neighborhoods: [
      { name: "Gated village streets", note: "estate tile and flat-roof moderns — invisible restoration, exact color match" },
      { name: "Collins oceanfront corridor", note: "association decks — complete documentation before work begins" },
      { name: "Bal Harbour Shops area", note: "premium retail low-slope roofs maintained to match the address" },
      { name: "Bay-side homes", note: "west-facing salt — flashings and seams sealed as one" },
    ],
  },

  "bay-harbor-islands": {
    intro: [
      "Bay Harbor Islands is two islands with two personalities: the East Island's walkable grid of homes and boutique buildings, and the West Island's single-family streets — both surrounded entirely by Biscayne Bay, both aging on salt time.",
      "The islands' mid-century homes and the East Island's low-rise buildings carry classic 1940s–60s roofs: tile mains, white gravel, flat decks behind parapets. Restoration re-seals them as monolithic membranes — the approach that preserves the islands' MiMo-era character instead of replacing it.",
      "With redevelopment adding new flat-roof buildings beside 70-year-old originals, boards on the East Island run active maintenance programs — and our board package (specs, uplift certification, insurance, warranty) is built for exactly that review.",
    ],
    roofLandscape: {
      heading: "The Bay Harbor Islands roof landscape",
      paragraphs: [
        "The West Island is single-family: 1940s–60s homes under tile and flat sections, many remodeled, all bay-exposed on at least one side. The East Island mixes original MiMo-era apartment buildings — flat parapet decks, some by South Florida's noted mid-century architects — with new construction whose flat roofs will live on the same recoat cycles.",
        "Bay salt is gentler than open Atlantic but constant from every direction. Seams, flashings, and fasteners lead the failure list; monolithic coating removes the seams from it.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Bay Harbor Islands",
      paragraphs: [
        "The Town of Bay Harbor Islands reviews building work attentively; coating restorations are surface maintenance and generally proceed without structural permitting — confirmed with the town first. East Island boards get the full documentation file.",
        "Island underwriting questions roof age early. Restoration plus Additional Roof Life Certification keeps both original MiMo buildings and family homes insured without tear-offs.",
      ],
    },
    neighborhoods: [
      { name: "West Island streets", note: "1940s–60s family homes — bay-exposed tile and flat wings" },
      { name: "East Island MiMo buildings", note: "original parapet decks — preservation by membrane" },
      { name: "Kane Concourse corridor", note: "boutique commercial roofs — sealed and cooled" },
      { name: "Broad Causeway edges", note: "maximum bay exposure — strict recoat cycles" },
    ],
  },

  "sunny-isles-beach": {
    intro: [
      "Sunny Isles Beach transformed from Motel Row to a tower skyline in one generation — but between the towers, the city still carries its 1950s–60s bones: garden condos, co-ops, and the Golden Shores single-family enclave, all on a barrier strip with ocean on one side and the Intracoastal on the other.",
      "That older low-rise inventory is where coating earns its keep: MiMo-era flat decks and tile roofs, association-maintained on tight budgets, decades into patch cycles that a monolithic elastomeric membrane finally ends — at maintenance-line-item cost, not special-assessment cost.",
      "Every quote arrives board-ready: specs, insurance, warranty, and Roof Shield's Miami-Dade TAS-106 uplift certification — the document that matters most on a strip this exposed.",
    ],
    roofLandscape: {
      heading: "The Sunny Isles Beach roof landscape",
      paragraphs: [
        "Between Collins and the Intracoastal, Sunny Isles keeps a substantial 1950s–60s inventory: garden-style condo buildings and co-ops with flat parapet decks, plus Golden Shores' single-family streets under tile and flat sections at the city's north end. All of it is salt-exposed from both directions and decades past its design life — alive because of surface renewal, not in spite of it.",
        "The remaining low-rise commercial along Collins — the Motel Row survivors — carries the same flat-deck physics: seal the seams, reflect the heat, document the work.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Sunny Isles Beach",
      paragraphs: [
        "Sunny Isles Beach reviews building work through Miami-Dade code with coastal seriousness; coating restorations are surface maintenance and generally proceed without structural permitting — confirmed with the city first. Association boards get the complete documentation file.",
        "Barrier-strip underwriting flags aging decks constantly. Restoration plus Additional Roof Life Certification is the certified answer that keeps garden condos and Golden Shores homes insured without replacement-scale spending.",
      ],
    },
    neighborhoods: [
      { name: "Golden Shores", note: "1950s–60s single-family enclave — tile and flat wings on coastal cycles" },
      { name: "Intracoastal-side garden condos", note: "MiMo decks — monolithic membrane ends the patch cycle" },
      { name: "Collins low-rise survivors", note: "Motel Row-era flat roofs sealed and cooled" },
      { name: "North Bay Road sections", note: "co-op buildings — board-ready documentation standard" },
    ],
  },

  "golden-beach": {
    intro: [
      "Golden Beach is the only town on the barrier strip that stayed entirely single-family — a mile of gated oceanfront and bay-side estates with private beach, private police, and some of the most valuable residential roofs in Florida. Work here is judged on finish, discretion, and paperwork.",
      "The town's estates carry large Mediterranean tile fields, flat-roof moderns, and remodeled mid-century homes — all in full Atlantic exposure. Restoration re-seals these roofs invisibly: original tile kept, colors matched exactly from 3,000+ options, salt sealed out for another decade-plus per cycle.",
      "Roof Shield's Miami-Dade TAS-106 uplift rating goes in every Golden Beach file — documented wind protection for addresses where the ocean is the front yard.",
    ],
    roofLandscape: {
      heading: "The Golden Beach roof landscape",
      paragraphs: [
        "Ocean Boulevard's estates face the Atlantic directly — big barrel-tile fields and contemporary flat roofs that age on the harshest schedule in the county. The bay-side streets (Center Island, the Massini and Terracina sections) carry equally substantial homes with salt from the west and canal humidity underneath.",
        "Ownership here runs on prevention: strict maintenance cycles, exact color continuity, and complete documentation. That's precisely the discipline a professional recoat program provides.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Golden Beach",
      paragraphs: [
        "The Town of Golden Beach reviews all exterior work and controls access to its streets; we coordinate with the town and the household before any project, and coating restorations — surface maintenance — generally proceed without structural permitting.",
        "At Golden Beach insured values, carriers scrutinize every aging surface. Restoration plus Additional Roof Life Certification, with uplift documentation, is the certified file that answers them.",
      ],
    },
    neighborhoods: [
      { name: "Ocean Boulevard estates", note: "direct-Atlantic tile fields — restored on the strictest cycles" },
      { name: "Center Island", note: "bay-side estates with salt from the west" },
      { name: "Golden Beach Drive sections", note: "remodeled mid-century homes — original lines preserved" },
      { name: "Strand-side streets", note: "flat-roof moderns — TAS-106 documented membranes" },
    ],
  },

  "indian-creek-village": {
    intro: [
      "Indian Creek Village is a private island — a few dozen estates around a country club, with its own police force and a bridge you don't cross uninvited. Its roofs are among the largest and most valuable residential surfaces in America, and they live entirely surrounded by Biscayne Bay salt.",
      "Estate roofs at this scale are maintained, never neglected: large barrel-tile fields, flat-roof contemporaries, and remodeled classics on strict prevention cycles. Elastomeric restoration is the discipline behind those cycles — re-sealing entire fields invisibly, matching colors exactly, and documenting everything for the household's file.",
      "We work to island standards: coordinated access, discreet crews, exact scheduling, and complete paperwork including Roof Shield's Miami-Dade TAS-106 uplift certification.",
    ],
    roofLandscape: {
      heading: "The Indian Creek Village roof landscape",
      paragraphs: [
        "The island's estates ring the golf course with bay frontage on every lot — Mediterranean tile, contemporary flat-roof builds, and comprehensive remodels, all with substantial roof area and all salt-exposed from every direction. Surfaces here are renewed before they fail; that's what estate management means.",
        "Flat sections, loggia roofs, and parapet details get membrane treatment; tile fields get cleaned, treated, and coated in exact color continuity — one mobilization, whole-property scope.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Indian Creek Village",
      paragraphs: [
        "The Village coordinates all access and reviews exterior work; we schedule through the household and village administration, and coating restorations — surface maintenance — generally proceed without structural permitting.",
        "Carriers underwriting island estates want documented maintenance programs. A certified restoration file — product specs, uplift rating, warranty, Additional Roof Life Certification — is exactly that documentation.",
      ],
    },
    neighborhoods: [
      { name: "Bayfront estates", note: "the island's full perimeter — salt-sealed tile and membrane systems" },
      { name: "Country club grounds", note: "club facilities maintained to member standards" },
      { name: "Contemporary builds", note: "flat-roof estates — TAS-106 documented membranes" },
    ],
  },

  "north-bay-village": {
    intro: [
      "North Bay Village is three islands in the middle of Biscayne Bay — Harbor Island, North Bay Island, and Treasure Island — strung along the 79th Street Causeway with water on every side. No roof in the village is more than a block from salt air.",
      "The village's mid-century inventory — 1940s–60s island homes and MiMo-era apartment buildings — carries tile mains and flat parapet decks that have survived this exposure precisely because they've been resurfaced on cycles. Monolithic elastomeric coating is that cycle's modern form: seams eliminated, salt sealed out, decades added.",
      "For the village's condo boards and the new buildings rising beside the originals, every quote arrives with the full file: specs, insurance, warranty, and Roof Shield's Miami-Dade TAS-106 uplift certification.",
    ],
    roofLandscape: {
      heading: "The North Bay Village roof landscape",
      paragraphs: [
        "North Bay Island and the residential streets carry 1940s–60s single-family homes — tile, white gravel, flat wings — many remodeled but nearly all on original structures. Harbor Island and Treasure Island mix garden condos and MiMo apartment buildings with the causeway's commercial strip, almost all of it low-slope deck.",
        "Bay salt arrives from every compass point, and seam-and-flashing failure leads every inspection list. One membrane over the whole deck is the island answer.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in North Bay Village",
      paragraphs: [
        "North Bay Village reviews building work under Miami-Dade code; coating restorations are surface maintenance and generally proceed without structural permitting — confirmed with the village first. Boards receive the complete documentation package.",
        "All-sides salt exposure means early age flags from carriers. Restoration plus Additional Roof Life Certification keeps island homes and buildings insured without tear-offs.",
      ],
    },
    neighborhoods: [
      { name: "North Bay Island", note: "1940s–60s island homes — tile and flat wings sealed as one" },
      { name: "Treasure Island residential", note: "mid-century stock on strict recoat cycles" },
      { name: "Harbor Island buildings", note: "MiMo decks and garden condos — board packages standard" },
      { name: "79th St Causeway strip", note: "commercial low-slope roofs — sealed and cooled" },
    ],
  },

  "biscayne-park": {
    intro: [
      "Biscayne Park is a village built around its medians — a 1930s–50s enclave of Old Florida homes under mature oaks, with a log-cabin village hall and a protective attitude toward its character. The roofs are original-era tile, shingle, and flat sections, and preserving them is the point.",
      "The classic Park project is a 70–90 year old roof that's structurally sound under decades of canopy fallout: algae-blackened slopes, moss in the valleys, chalked tile beneath. Clean, treat, coat — one restoration recovers the roof and keeps the village's period character intact at 60–70% below replacement.",
      "And as everywhere in mid-century Dade, the insurance letter is the usual trigger; a documented restoration with Additional Roof Life Certification is the certified answer.",
    ],
    roofLandscape: {
      heading: "The Biscayne Park roof landscape",
      paragraphs: [
        "The village grid holds 1930s–50s homes — Mediterranean and Deco-influenced tile, early CBS ranches under white tile and shingle, and the flat additions of the era — beneath one of the densest oak canopies in north Dade. Shade is constant, and so are algae, moss, and lichen on every north slope.",
        "Nothing here is large-scale: it's house-by-house preservation work, which suits a restoration approach that keeps original materials on original homes.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Biscayne Park",
      paragraphs: [
        "The Village of Biscayne Park guards its character and reviews exterior work accordingly; coating restorations are surface maintenance and generally proceed without structural permitting — we confirm with the village first and match colors to the neighborhood's period palette.",
        "Carriers flag 80-year-old roofs on sight. Restoration plus Additional Roof Life Certification keeps the Park's originals insured — with their original roofs still on them.",
      ],
    },
    neighborhoods: [
      { name: "Griffing Boulevard medians", note: "the village's signature streets — period-correct restoration" },
      { name: "1930s–40s originals", note: "irreplaceable early tile preserved by coating" },
      { name: "Post-war CBS sections", note: "white tile and shingle facing age letters" },
      { name: "Canopy-heavy blocks", note: "algae and moss treated, then sealed out" },
    ],
  },

  "el-portal": {
    intro: [
      "El Portal is a half-square-mile village on the Little River — a 1920s–50s enclave known for its peacocks, its canopy, and one of the oldest housing inventories in north Dade. These are exactly the roofs restoration was made for: original, characterful, and structurally sound under exhausted surfaces.",
      "Village roofs wear their history: Mediterranean tile from the 1920s boom, post-war white tile and shingle, flat wings added over generations — all beneath shade that feeds algae year-round. A clean-treat-coat restoration recovers them for a fraction of replacement and keeps original materials in place.",
      "River humidity, canopy shade, and 70-year-old surfaces also mean insurers ask about these roofs constantly; certified restoration documentation is the answer that keeps them covered.",
    ],
    roofLandscape: {
      heading: "The El Portal roof landscape",
      paragraphs: [
        "The village spans the Little River's north bank: 1920s–40s tile homes in the historic sections, 1950s CBS infill under white tile and shingle, and the flat Florida-room additions every era contributed. The canopy is village policy — and its shade keeps every north slope in the algae zone.",
        "Riverside lots add humidity from below; nothing here is far from water or shade. Surface renewal on a cycle is what has kept this inventory alive for a century.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in El Portal",
      paragraphs: [
        "The Village of El Portal reviews exterior work with small-village attention; coating restorations are surface maintenance and generally proceed without structural permitting — confirmed with the village first, with color choices that respect the streetscape.",
        "Age flags arrive village-wide on stock this old. Restoration plus Additional Roof Life Certification keeps El Portal's originals insured without tearing off history.",
      ],
    },
    neighborhoods: [
      { name: "Little River frontage", note: "riverside humidity — treated slopes and sealed surfaces" },
      { name: "Historic 1920s–40s sections", note: "boom-era tile preserved by restoration" },
      { name: "Post-war infill", note: "white tile and shingle facing age letters" },
      { name: "Sherwood Forest streets", note: "canopy-shaded originals — clean, treat, coat" },
    ],
  },

  "virginia-gardens": {
    intro: [
      "Virginia Gardens is a third of a square mile of old-school Dade — a 1940s–60s village beside the airport that kept its small-town government and its original housing stock. The roofs are the era's classics: low-pitch white tile, shingle, gravel, and flat additions, most past year 60 and most structurally fine.",
      "The village pattern is the familiar one at its most compact: sound roof, spent surface, insurance letter. A coating restoration answers all three — re-sealed, recolored, and certified with the Additional Roof Life Certification — at 60–70% below the replacement quote.",
      "The NW 36th Street airport corridor next door adds hotel and commercial low-slope decks where reflective cool-roof coating seals and cools hard-working buildings.",
    ],
    roofLandscape: {
      heading: "The Virginia Gardens roof landscape",
      paragraphs: [
        "The village grid filled in through the 1940s–60s: CBS homes under white tile, shingle, and gravel built-ups, with the flat Florida-room and carport additions of the period. Whole streets age together, and the compact lots make for fast, tidy projects.",
        "Airport-corridor commerce frames the village with low-slope decks — the same coating systems at commercial scale, with documented warranties for business owners.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Virginia Gardens",
      paragraphs: [
        "Coating restorations in Virginia Gardens generally proceed without a building permit — surface maintenance, confirmed with the village's building services when repairs are included. No HOAs; homeowners decide, and neighbors frequently schedule together.",
        "This is precisely the mid-century stock carriers flag on age. Restoration plus Additional Roof Life Certification keeps village homes insured on sensible budgets.",
      ],
    },
    neighborhoods: [
      { name: "Village core grid", note: "1940s–60s CBS homes — the classic restoration case" },
      { name: "Curtiss Parkway edge", note: "Springs-adjacent streets under original tile" },
      { name: "NW 36th St corridor", note: "hotel and commercial decks — sealed and cooled" },
      { name: "Compact interior blocks", note: "neighbors scheduling together for volume pricing" },
    ],
  },

  medley: {
    intro: [
      "Medley is Dade's industrial engine — a town of a few hundred residents and tens of millions of square feet of warehouse, distribution, and manufacturing roof along the Miami River and the rail corridors. Here, roofing is a business decision measured in downtime avoided and cooling dollars saved.",
      "Medley's flat and metal decks — built-up, modified bitumen, standing-seam and screw-down metal from the 1960s onward — live hard lives under UV, ponding, and vibration. Monolithic elastomeric coating seals the whole deck as one membrane without interrupting operations underneath: no tear-off, no exposure, no shutdown.",
      "Reflective topcoats then cut roof-surface temperatures dramatically — real money in buildings that condition air or protect inventory — and the documented warranty satisfies the commercial carriers that ask for roof condition at every renewal.",
    ],
    roofLandscape: {
      heading: "The Medley roof landscape",
      paragraphs: [
        "The inventory is industrial nearly wall to wall: distribution centers and manufacturers along Okeechobee Road and the river, truck-serving businesses off NW South River Drive, and rail-side warehouses by the acre — decks from every decade since the 1960s, most on their second or third maintenance cycle.",
        "Metal roofs add their own failure modes — fastener back-out, seam corrosion, rust bloom — all arrested by rust-converting primers and elastomeric topcoats at a fraction of re-sheeting cost.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Medley",
      paragraphs: [
        "The Town of Medley processes commercial work efficiently; coating restorations are surface maintenance and generally proceed without structural permitting — we confirm scope with the town on larger projects and schedule around your operations, nights and weekends included.",
        "Commercial property carriers now demand documented roof condition. A coating restoration with photographic documentation, specs, and warranty terms is the file that clears renewal — and defers capital replacement for years.",
      ],
    },
    neighborhoods: [
      { name: "Okeechobee Road corridor", note: "distribution-scale flat decks — sealed without shutdown" },
      { name: "Miami River industrial", note: "riverside warehouses on decades-old built-up roofs" },
      { name: "NW South River Drive", note: "truck-serving businesses — metal roofs rust-sealed" },
      { name: "Rail-corridor warehouses", note: "acres of deck coated and cooled at scale" },
    ],
  },

  "florida-city": {
    intro: [
      "Florida City is the last town before the Keys and the Everglades — the southern gateway that took Hurricane Andrew's full force in 1992 and rebuilt. Its roofs tell that story: pre-Andrew survivors, 1990s rebuild stock, and the working agricultural buildings of the Redland's southern edge.",
      "For the town's homes — post-war CBS survivors and post-Andrew rebuilds alike — the restoration math matters most: re-seal and recolor at 60–70% below replacement, with the Additional Roof Life Certification answering the age letters carriers send this far into the wind zone.",
      "Roof Shield speaks Florida City's language: the world's only monolithic coating rated under Miami-Dade's TAS-106 uplift test — the standard written after the storm this town remembers best. And on the gateway's hotels, fruit stands, and packing houses, cool-roof coating seals decks while cutting the cooling bills of the hottest town in the county.",
    ],
    roofLandscape: {
      heading: "The Florida City roof landscape",
      paragraphs: [
        "The residential core mixes pre-Andrew CBS homes under shingle and early tile with 1990s rebuild stock built to the code Andrew created — now itself 30 years old and due surface renewal. The US-1 and Palm Drive corridors carry the gateway economy's roofs: hotels, restaurants, and retail low-slope decks serving Keys and park traffic year-round.",
        "The agricultural edge adds packing houses and equipment buildings under metal — rust-sealing reflective coating stops corrosion and drops interior temperatures where people actually work.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, HOA rules & insurance in Florida City",
      paragraphs: [
        "Florida City enforces Miami-Dade's post-Andrew code with local memory; coating restorations are surface maintenance and generally proceed without a permit — confirmed with the city when repairs are in scope. We work in Spanish or English throughout.",
        "Wind-zone premiums and age flags squeeze this town from both sides. Restoration plus Additional Roof Life Certification — backed by TAS-106-rated product documentation — is the certified answer working budgets need.",
      ],
    },
    neighborhoods: [
      { name: "Residential core", note: "pre-Andrew survivors and 90s rebuilds — both restoration-ready" },
      { name: "US-1 gateway strip", note: "hotel and retail decks — sealed and cooled for Keys traffic" },
      { name: "Palm Drive corridor", note: "commercial roofs serving the park gateway" },
      { name: "Redland southern edge", note: "packing houses and farm metal — rust-sealed and reflective" },
    ],
  },

  islandia: {
    intro: [
      "Islandia is Dade's ghost municipality — the island chain in Biscayne Bay that was planned as a city, became Biscayne National Park instead, and was formally dissolved in 2012. Almost no one lives there, and that's exactly why it appears here: we serve the boating community and park-adjacent property owners who keep structures in this corner of the bay.",
      "The real roofing market 'in Islandia' is on the water's edge: Homestead Bayfront and Black Point marina buildings, park-adjacent structures, and the mainland homes of the boaters who know these islands best. Salt exposure here is total, and coating — not replacement — is how bayfront structures survive it.",
      "If your property faces the bay anywhere along this stretch, the systems are the same ones we run island-wide: monolithic membranes on flat decks, elastomeric restoration on tile, and Roof Shield's Miami-Dade TAS-106 uplift rating documented in the file.",
    ],
    roofLandscape: {
      heading: "The Islandia-area roof landscape",
      paragraphs: [
        "The historic Islandia islands themselves — Elliott Key, Totten Key, and their neighbors — now belong to Biscayne National Park, with only park structures remaining. The serviceable inventory sits on the mainland rim: marina buildings, bayfront homes from Cutler Bay down through Homestead's coastal edge, and the working structures of the bay's boating economy.",
        "Everything here shares one condition: unbroken salt exposure off the bay. Surfaces, seams, and fasteners age on coastal time, and scheduled recoat cycles are what keep bayfront structures serviceable.",
      ],
    },
    permitsAndRules: {
      heading: "Permits, rules & insurance near Islandia",
      paragraphs: [
        "Work near the park boundary follows Miami-Dade code and, where applicable, park-adjacent rules — we confirm jurisdiction before any bayfront project. Marina and commercial structures get documented commercial packages.",
        "Bayfront underwriting is as strict as it gets. Documented coating restoration with Additional Roof Life Certification is the certified file that keeps waterfront structures insured.",
      ],
    },
    neighborhoods: [
      { name: "Black Point marina area", note: "working waterfront structures — salt-sealed and documented" },
      { name: "Homestead Bayfront edge", note: "park-adjacent buildings under total exposure" },
      { name: "Bayfront mainland homes", note: "the boating community's own roofs, coated on coastal cycles" },
    ],
  },
};
