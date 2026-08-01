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
};
