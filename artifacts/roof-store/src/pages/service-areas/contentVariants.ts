function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function variantIndex(slug: string, variantCount: number): number {
  return hashSlug(slug) % variantCount;
}

export const introVariants: ((city: string, county: string) => string[])[] = [
  (city, county) => [
    `The Roof Store has been serving ${city}, ${county} homeowners and commercial property owners for nearly 30 years. Our certified technicians provide professional rubber roof coating, tile restoration, and weatherproofing services throughout the ${city} area.`,
    `Living in ${city}, FL means dealing with intense UV exposure, heavy rainfall, high humidity, and the constant threat of hurricanes. Our roof coating systems are specifically engineered for South Florida's demanding climate — protecting your home without the cost of a full roof replacement.`,
    `Most homeowners in ${city} save 40–60% compared to full roof replacement costs while getting better long-term protection. Our liquid-applied rubber roof shield system creates a seamless, weatherproof membrane over your existing roof — with no landfill waste and minimal disruption to your property.`,
  ],
  (city, county) => [
    `For nearly three decades, ${city} and the rest of ${county} have relied on The Roof Store for professional roof coating, tile restoration, and waterproofing — work carried out by the same certified crew of technicians on every job.`,
    `${city} homeowners face a familiar set of challenges: relentless UV, tropical downpours, thick humidity, and hurricane season every year. We build our coating systems specifically to hold up against exactly that, so your roof stays protected without a full tear-off.`,
    `A liquid-applied rubber membrane goes on seamless, cures fast, and typically saves ${city} property owners 40–60% versus replacement — all while keeping the old roof out of the landfill and your property free of demolition mess.`,
  ],
  (city, county) => [
    `Since 1994, The Roof Store has protected roofs across ${county}, including ${city} — the same certified technicians handling every coating, restoration, and waterproofing job from start to finish.`,
    `South Florida throws everything at a roof: harsh sun, torrential rain, thick humidity, and hurricane-force wind. In ${city}, that means a roof coating system needs to be engineered for the climate, not just applied to it — which is exactly how ours are built.`,
    `Rather than a full roof replacement, most ${city} property owners choose our liquid-applied rubber system: a seamless membrane bonded directly to the existing roof, saving 40–60% on cost with none of the waste or disruption of a tear-off.`,
  ],
  (city, county) => [
    `${city} sits within ${county}, one of the markets The Roof Store has served for almost 30 years with professional rubber roof coating, tile restoration, and weatherproofing — always performed by our own certified technicians.`,
    `Between intense UV, heavy seasonal rain, high humidity, and hurricane risk, ${city} is a demanding place for a roof to survive. Our coating systems are engineered around those exact conditions rather than a generic climate.`,
    `Property owners in ${city} typically cut roofing costs by 40–60% by choosing our liquid-applied rubber roof shield system over full replacement — a seamless, weatherproof membrane installed with minimal disruption and zero landfill waste.`,
  ],
];

export const serviceVariants: ((city: string) => { title: string; desc: string }[])[] = [
  (city) => [
    { title: "Roof Pressure Cleaning & Soft Washing", desc: `Professional low-pressure washing and soft wash treatments remove years of algae, mold, and black streaking from tile and flat roofs in ${city}. Soft washing is a gentler, chemical-based option for older or fragile tile. Always the required first step before any painting, coating, or waterproofing.` },
    { title: "Tile Roof Painting", desc: `Restore faded, chalky, or discolored tile roofs with professional-grade elastomeric coatings in 3,000+ colors. A popular choice for ${city} homeowners looking to refresh curb appeal and resale value.` },
    { title: "Tile Roof Waterproofing", desc: `Traditional tile roofs rely on underlayment paper below the tiles to stop water — paper that tears over time as the roof moves, causing leaks. Our Smart Shield coating seals the tile surface itself, while our Roof Shield system retrofits the whole tile field into one monolithic surface so water never reaches aging paper at all. Covers Spanish tile, flat cement tile, and clay barrel tile roofs in ${city}.` },
    { title: "Flat Roof Sealing", desc: `Seamless elastomeric rubber membrane applied over your existing flat deck — no seams, no weak points. Ideal for flat-roofed homes and commercial buildings throughout ${city}.` },
    { title: "Hurricane Protection Coating", desc: `Our Roof Shield system is the world's only TAS-106 Dade County Uplift rated coating — engineered to withstand South Florida hurricane-force winds and keep ${city} homes protected season after season.` },
    { title: "Roof Repair & Maintenance", desc: `Cracked tiles, failed ridge caps, eave wood damage — we repair all problem areas before waterproofing so your ${city} roof is fully sound before any warranty system is applied.` },
  ],
  (city) => [
    { title: "Pressure Cleaning & Soft Washing", desc: `We strip built-up algae, mold, and black streaking off ${city} tile and flat roofs with calibrated low-pressure washing, or a gentler soft-wash chemical treatment for older tile that can't take direct pressure. Every job starts here before a single coat goes on.` },
    { title: "Tile Roof Painting & Color Restoration", desc: `Faded or chalky tile in ${city} gets a full color refresh with elastomeric coatings available in over 3,000 shades — a fast way to boost curb appeal and resale value.` },
    { title: "Tile Waterproofing", desc: `Tile roofs are engineered to let water pass through tile gaps onto underlayment paper below — paper that tears with age and roof movement, causing leaks. Smart Shield seals the tile surface, while Roof Shield retrofits the tile field into one monolithic, gap-filled surface so water can't reach that paper at all — suitable for Spanish tile, flat cement tile, and clay barrel tile found around ${city}.` },
    { title: "Flat Deck Sealing", desc: `Flat roofs on ${city} homes and commercial buildings get a seamless elastomeric membrane with zero seams and zero weak points.` },
    { title: "Hurricane-Rated Coating", desc: `Roof Shield carries the world's only TAS-106 Dade County Uplift rating — built to keep ${city} roofs intact through hurricane season year after year.` },
    { title: "Repair Before Restoration", desc: `Cracked tile, failed ridge caps, damaged eave wood — we fix every structural issue on a ${city} roof before any coating or warranty system is applied.` },
  ],
  (city) => [
    { title: "Soft Wash & Pressure Cleaning", desc: `${city} tile and flat roofs accumulate algae and black streaking fast in this climate — we remove it with low-pressure washing or, for delicate older tile, a biodegradable soft-wash treatment. Mandatory prep before any coating work.` },
    { title: "Elastomeric Tile Painting", desc: `We bring faded or discolored ${city} tile roofs back to life with elastomeric coatings in a 3,000+ color range, a favorite among homeowners focused on curb appeal.` },
    { title: "Tile Roof Sealing", desc: `Tile roofs are built to let water pass between tiles onto underlayment paper below — paper that tears over time as the roof moves, causing leaks. Smart Shield seals the tile surface over Spanish tile, flat cement tile, and clay barrel tile throughout ${city}, while Roof Shield retrofits the whole roof into one monolithic, gap-filled surface so water never reaches that aging paper.` },
    { title: "Flat Roof Waterproofing", desc: `${city} flat decks — residential or commercial — get a seamless rubber membrane with no seams to fail.` },
    { title: "Wind & Hurricane Coating", desc: `Roof Shield holds the only TAS-106 Dade County Uplift certification of any liquid coating, giving ${city} roofs proven hurricane protection.` },
    { title: "Structural Repair", desc: `Before we coat anything, we resolve cracked tiles, ridge cap failures, and eave wood rot so every ${city} roof is sound underneath its new system.` },
  ],
  (city) => [
    { title: "Roof Washing (Pressure & Soft Wash)", desc: `Years of algae and mold buildup on ${city} roofs come off with either calibrated pressure washing or a low-pressure soft-wash chemical treatment for fragile older tile — always the first step in our process.` },
    { title: "Tile Color Restoration", desc: `${city} homeowners refresh faded, chalky tile with elastomeric coatings offered in more than 3,000 colors, boosting both curb appeal and resale value.` },
    { title: "Tile Leak Sealing", desc: `Traditional tile roofs let water pass between tiles onto underlayment paper below — paper that tears over time as the roof moves, causing leaks. Our Smart Shield system seals the tile surface across Spanish tile, flat cement tile, and barrel tile roofs in ${city}, while our Roof Shield system retrofits the roof into one monolithic, gap-filled surface so water never reaches that paper at all.` },
    { title: "Flat Roof Membrane Coating", desc: `Commercial and residential flat decks in ${city} get a seamless elastomeric rubber coating with no vulnerable seams.` },
    { title: "Hurricane Wind-Uplift Coating", desc: `Our Roof Shield system is the only liquid coating worldwide with TAS-106 Dade County Uplift certification — real hurricane protection for ${city} properties.` },
    { title: "Pre-Coating Repairs", desc: `We handle cracked tile, ridge cap damage, and eave wood repair on ${city} roofs first, ensuring a solid base before any coating or warranty applies.` },
  ],
];

export const whyChooseVariants: ((city: string) => { title: string; desc: string }[])[] = [
  (city) => [
    { title: "Nearly 30 Years in South Florida", desc: "Established in 1994, we understand Florida's climate and building codes better than anyone." },
    { title: "Licensed & Insured", desc: "The Roof Store is a fully licensed and insured Florida roofing contractor — every job is covered." },
    { title: "A+ BBB Accredited", desc: "Our Better Business Bureau A+ rating reflects nearly three decades of honest, high-quality work." },
    { title: "Save Up to 50%", desc: "Our restoration and weatherproofing systems cost significantly less than a full roof replacement." },
    { title: "Hurricane Guaranteed", desc: "Our roof coating systems are tested and guaranteed to perform under Florida hurricane conditions." },
    { title: "Free Roof Inspection", desc: `No-cost, no-obligation assessment by a certified technician — we come to your ${city} property.` },
  ],
  (city) => [
    { title: "Serving Florida Since 1994", desc: "Three decades of hands-on experience with Florida's climate, codes, and roofing quirks." },
    { title: "Fully Licensed & Insured", desc: "Every job is backed by our Florida contractor license and full insurance coverage." },
    { title: "A+ Rated with the BBB", desc: "Our Better Business Bureau rating is the result of consistent, honest work since the 90s." },
    { title: "Cut Costs by Up to 50%", desc: "Restoration and coating systems typically run half the price of a full roof tear-off." },
    { title: "Built for Hurricane Season", desc: "Every coating system we install is tested and guaranteed for Florida's hurricane conditions." },
    { title: "No-Cost Roof Inspection", desc: `A certified technician evaluates your ${city} property in person, free and with no obligation.` },
  ],
  (city) => [
    { title: "Nearly Three Decades of Experience", desc: "Founded in 1994 — we know Florida's climate, codes, and roofs inside and out." },
    { title: "Fully Licensed Florida Contractor", desc: "Every project is performed under full state licensing and insurance coverage." },
    { title: "A+ BBB Rating", desc: "Earned over nearly 30 years of consistent, high-quality workmanship." },
    { title: "Save Up to Half the Cost", desc: "Our systems are a fraction of the price of a complete roof replacement." },
    { title: "Guaranteed Hurricane Performance", desc: "All coating systems are tested and warrantied against Florida's hurricane conditions." },
    { title: "Complimentary Roof Inspection", desc: `A certified technician visits your ${city} property at no cost, with zero obligation.` },
  ],
  (city) => [
    { title: "In Business Since 1994", desc: "Almost 30 years of direct experience with Florida roofing conditions and code requirements." },
    { title: "State-Licensed & Fully Insured", desc: "Every job we perform is fully licensed and insured under Florida contractor requirements." },
    { title: "A+ Better Business Bureau Rating", desc: "Reflecting close to three decades of reliable, quality work for Florida homeowners." },
    { title: "Up to 50% Savings vs. Replacement", desc: "Our systems deliver comparable protection at a fraction of full roof replacement cost." },
    { title: "Hurricane-Tested Systems", desc: "Every coating we install is tested and guaranteed to hold up under Florida hurricane conditions." },
    { title: "Free, No-Obligation Inspection", desc: `Our certified technician comes directly to your ${city} property at no charge.` },
  ],
];

export const paintVsCoatingVariants: ((city: string) => { heading: string; paragraphs: string[] })[] = [
  (city) => ({
    heading: `Looking for a Roof Painting Contractor in ${city}?`,
    paragraphs: [
      `Most homeowners start their search looking for a "roof painting contractor" — it's the natural first step when a roof starts fading, cracking, or showing its age. But there's a critical distinction that can save you thousands of dollars and years of headaches.`,
      `Standard roof paint coats the surface but doesn't seal it. In South Florida's climate — intense UV, heavy summer rains, high humidity, and hurricane-force winds — a painted roof typically needs re-application every 2–3 years and provides little to no real waterproofing protection. It's a cosmetic fix for a structural problem.`,
      `Our roof coating systems are a different category entirely. Applied as a liquid, they cure into a seamless, flexible rubber membrane that bonds directly to your roof surface — sealing every seam, crack, and penetration. They're hurricane wind-uplift rated, reflect UV to lower cooling costs, and are warranted for 10–15 years. The investment is comparable to repeated paint jobs, but it lasts dramatically longer and actually waterproofs your home.`,
    ],
  }),
  (city) => ({
    heading: `Searching for Roof Painting Near ${city}?`,
    paragraphs: [
      `A lot of ${city} homeowners begin by searching for roof paint — it's the first thing that comes to mind once a roof looks faded or worn. But there's an important difference worth understanding before you spend a dollar.`,
      `Standard paint sits on the surface without sealing it. Given South Florida's UV intensity, torrential summer storms, humidity, and hurricane winds, a painted roof usually needs redoing every 2–3 years and offers little actual waterproofing — a cosmetic patch, not a real fix.`,
      `A true roof coating system is entirely different. It's applied wet and cures into a seamless, flexible rubber membrane bonded directly to the roof — sealing seams, cracks, and every penetration point. It carries a hurricane wind-uplift rating, reflects heat to cut cooling costs, and is warrantied for 10–15 years — similar upfront cost to repeated paint jobs, but far longer-lasting and genuinely waterproof.`,
    ],
  }),
  (city) => ({
    heading: `Comparing Roof Paint vs. Roof Coating in ${city}`,
    paragraphs: [
      `When a roof in ${city} starts fading or cracking, "roof painting" is usually the first search term that comes to mind. It's worth knowing the difference before deciding, since it affects both cost and how long the fix actually lasts.`,
      `Standard roof paint is a surface-level coat — it doesn't seal the roof. Between South Florida's UV load, seasonal downpours, humidity, and hurricane winds, painted roofs typically need re-coating every 2–3 years and add almost no waterproofing value.`,
      `A proper roof coating system cures into a seamless, flexible rubber membrane bonded to the roof itself, sealing every seam and crack. It's rated for hurricane wind uplift, reflects UV to reduce cooling costs, and comes with a 10–15 year warranty — roughly the cost of repeat paint jobs, but with dramatically better results.`,
    ],
  }),
  (city) => ({
    heading: `Roof Paint or Roof Coating for Your ${city} Property?`,
    paragraphs: [
      `Homeowners in ${city} often start out looking for a roof painting contractor — it's the go-to first move when a roof starts to fade or crack. But the two options aren't the same, and the difference matters.`,
      `Roof paint coats the surface but leaves it unsealed. In a climate like South Florida's — intense sun, heavy rain, high humidity, hurricane winds — that means repainting every 2–3 years with minimal actual waterproofing.`,
      `A roof coating system, by contrast, is applied liquid and cures into a seamless rubber membrane bonded to the roof, sealing every seam and crack. It carries a hurricane wind-uplift rating, reflects heat to lower cooling bills, and is warrantied 10–15 years — for about what repeated paint jobs would cost, with far better long-term protection.`,
    ],
  }),
];
