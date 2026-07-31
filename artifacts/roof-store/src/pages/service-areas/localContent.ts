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
};
