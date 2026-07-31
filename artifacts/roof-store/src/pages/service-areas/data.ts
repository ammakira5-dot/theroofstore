export interface CityEntry {
  name: string;
  slug: string;
  image?: string;
  blurb?: string;
  jobPhotos?: { src: string; alt: string; caption: string }[];
}

export interface CountyExtraSection {
  heading: string;
  body: string;
  linkHref?: string;
  linkLabel?: string;
}

export interface CountyEntry {
  name: string;
  slug: string;
  description: string;
  image: string;
  cities: CityEntry[];
  extraSections?: CountyExtraSection[];
}

// All images are served from object storage (App Storage / GCS) via the CDN.
// Format: /api/storage/public-objects/cities/{unsplash-photo-id}.jpg
// Run `pnpm --filter @workspace/scripts run refresh-city-images` to re-download from Unsplash and re-upload to storage.

export const counties: CountyEntry[] = [
  {
    name: "Broward County",
    slug: "broward-county",
    // Bird's-eye view of river winding through downtown Fort Lauderdale
    image: "/api/storage/public-objects/cities/1538016298852-e69a243f7ee2.jpg",
    description:
      "The Roof Store serves all of Broward County, FL — from Fort Lauderdale to Coral Springs. Our elastomeric roof coating and tile restoration systems protect Broward homes from hurricanes, tropical storms, and intense UV exposure.",
    cities: [
      {
        name: "Coconut Creek",
        slug: "coconut-creek",
        image: "/api/storage/public-objects/cities/1558618666-fcd25c85cd64.jpg",
        blurb:
          "Known as the Butterfly Capital of the World, Coconut Creek is a master-planned community with a high concentration of cement tile roofs that need periodic resealing to combat South Florida's UV exposure and heavy summer rains. Many homes here were built in the 1990s and are entering the prime window where professional restoration is far more cost-effective than a full replacement.",
      },
      {
        name: "Cooper City",
        slug: "cooper-city",
        image: "/api/storage/public-objects/cities/1568605114967-8130f3a36994.jpg",
        blurb:
          "Cooper City is a tight-knit family suburb where most homes feature barrel or flat tile roofs installed in the 1980s and 90s — making it prime territory for restoration rather than replacement. The city's tree canopy is beautiful but holds moisture against roof surfaces, accelerating algae and fungal growth that our Fungal Shield system is specifically designed to eliminate.",
      },
      {
        name: "Coral Springs",
        slug: "coral-springs",
        image: "/api/storage/public-objects/cities/1691423332423-f2132628ff72.jpg",
        blurb:
          "One of Broward's largest planned communities, Coral Springs features a wide mix of residential roof types — from flat decks on 1970s ranch homes to barrel tile on newer estate properties. The city's age means many roofs are decades old and show signs of UV degradation, fading, and hairline cracking that our elastomeric coating systems seal and protect without the disruption of a tear-off. For homeowners chasing the modern dark tile look, our Smart Shield system's BASF Cool Pigment Technology reflects heat even at the darkest color choices.",
      },
      {
        name: "Dania Beach",
        slug: "dania-beach",
        image: "/api/storage/public-objects/cities/1692678813200-d746a746bf07.jpg",
        blurb:
          "Florida's oldest city south of St. Augustine, Dania Beach has a mix of historic bungalows and newer condos along the Intracoastal Waterway — all subject to the corrosive effects of salt air and tropical humidity. Coastal exposure here accelerates the degradation of roof sealants, making regular inspection and recoating essential for long-term protection.",
      },
      {
        name: "Davie",
        slug: "davie",
        image: "/api/storage/public-objects/cities/1553284965-83fd3e82fa5a.jpg",
        jobPhotos: [
          {
            src: "/images/jobs/davie-shingle-in-progress.jpg",
            alt: "Roof Shield System being applied to a shingle tile roof in Davie, FL",
            caption: "Roof Shield System going on — production phase",
          },
          {
            src: "/images/jobs/davie-shingle-before.jpg",
            alt: "Shingle tile roof in Davie, FL before Roof Shield coating",
            caption: "A real Davie job — shingle tile roof before coating",
          },
          {
            src: "/images/jobs/davie-shingle-seam-detail.jpg",
            alt: "Close-up showing seams sealed on the right side and unsealed on the left of the same roof in Davie, FL",
            caption: "One photo, two halves: seams fully sealed on the right, not yet on the left — the difference between painting and true coating",
          },
        ],
        blurb:
          "Our home base — The Roof Store has operated out of Davie since 1994, and we know the local roofing landscape better than anyone. As Davie's original elastomeric roof coating contractor, we work on everything from large flat-deck barn roofs to Spanish tile on residential homes throughout the town, serving Davie's unique mix of equestrian estates, suburban neighborhoods, and commercial properties. Darker tile roofs have become increasingly popular with Davie homeowners, and our Smart Shield system's BASF Cool Pigment Technology lets you go dark without sacrificing energy efficiency.",
      },
      {
        name: "Deerfield Beach",
        slug: "deerfield-beach",
        image: "/api/storage/public-objects/cities/1590523277543-a94d2e4eb00b.jpg",
        blurb:
          "Deerfield Beach's coastline and proximity to the Atlantic Ocean mean roofs here face above-average salt air exposure, UV intensity, and wind load. Many of the city's mid-century flat-roof homes have been maintained with layers of old tar and gravel — our elastomeric coating system bonds directly over those surfaces, creating a modern watertight membrane without the mess of a full tear-off.",
      },
      {
        name: "Fort Lauderdale",
        slug: "fort-lauderdale",
        image: "/api/storage/public-objects/cities/1484199383121-dfa3c30608cd.jpg",
        blurb:
          "Fort Lauderdale's diverse building stock — from Intracoastal waterfront estates with clay tile to inland flat-roof commercial buildings — requires expertise across multiple roof systems. Salt air from the ocean and the Intracoastal, combined with heavy marine humidity, makes Fort Lauderdale one of South Florida's most demanding environments for roofing materials.",
      },
      {
        name: "Hillsboro Beach",
        slug: "hillsboro-beach",
        image: "/api/storage/public-objects/cities/1573220983618-156ea86f9c17.jpg",
        blurb:
          "One of the wealthiest small communities in Florida, Hillsboro Beach sits on a narrow barrier island between the Atlantic Ocean and the Intracoastal Waterway — giving roofs a double dose of salt air from both directions. Homes here typically feature high-end clay tile or flat-deck designs that require expert care to maintain their appearance and watertight integrity.",
      },
      {
        name: "Hallandale Beach",
        slug: "hallandale-beach",
        image: "/api/storage/public-objects/cities/1599509033274-4d2128aa81e2.jpg",
        blurb:
          "Hallandale Beach's dense mix of high-rise condos, aging mid-rises, and single-family homes creates a wide range of roofing needs — from small residential flat decks to large commercial membrane systems. Its position directly on the Atlantic coast means all structures face intense salt air exposure and hurricane wind loads that demand a durable, flexible roof coating system.",
      },
      {
        name: "Hollywood",
        slug: "hollywood",
        image: "/api/storage/public-objects/cities/1617202830798-cf48261fb70d.jpg",
        blurb:
          "Hollywood's famous Broadwalk and beach culture attract a strong real estate market, but the coastal environment takes a heavy toll on roofing materials. Many of Hollywood's residential neighborhoods feature older flat-deck and barrel tile roofs that show significant UV fading and sealant breakdown — ideal candidates for our elastomeric restoration systems.",
      },
      {
        name: "Lauderdale Lakes",
        slug: "lauderdale-lakes",
        image: "/api/storage/public-objects/cities/1564013799919-ab600027ffc6.jpg",
        blurb:
          "Lauderdale Lakes is a mature, densely populated community where most homes were built in the 1960s and 70s — putting many flat and low-slope roofs well past the age of their original sealants. Our elastomeric coating systems breathe new life into these aging structures, extending roof life by 15–20 years at a fraction of replacement cost.",
      },
      {
        name: "Lauderhill",
        slug: "lauderhill",
        image: "/api/storage/public-objects/cities/1560518883-ce09059eeffa.jpg",
        blurb:
          "Lauderhill is one of Broward's most affordable communities, and homeowners here are keenly aware of the value of protecting their investment without overspending. Our elastomeric roof coating systems deliver the same long-term protection as a full replacement at up to 60–70% less cost — a significant benefit for Lauderhill's budget-conscious property owners.",
      },
      {
        name: "Lauderdale-by-the-Sea",
        slug: "lauderdale-by-the-sea",
        image: "/api/storage/public-objects/cities/1520520731457-9283dd14aa66.jpg",
        blurb:
          "This charming coastal village is famous for its beachside bungalows and dive culture, but its direct Atlantic exposure makes it one of the most corrosive environments in South Florida for roofing systems. Salt spray, tropical humidity, and intense UV combine to degrade roof sealants faster here than almost anywhere in Broward County.",
      },
      {
        name: "Lighthouse Point",
        slug: "lighthouse-point",
        image: "/api/storage/public-objects/cities/1570111684787-0c62fa8fbc1b.jpg",
        blurb:
          "True to its name, Lighthouse Point is a picturesque coastal community built around a network of canals and the Intracoastal Waterway — meaning almost every home faces significant salt air exposure. Many Lighthouse Point homes feature flat decks over garages and Florida rooms that are particularly vulnerable to water intrusion without proper maintenance and recoating.",
      },
      {
        name: "Margate",
        slug: "margate",
        image: "/api/storage/public-objects/cities/1570129477492-45c003edd2be.jpg",
        blurb:
          "Margate is a mature suburban community with a large stock of 1970s and 1980s single-family homes, many built with flat or low-slope roofs that need periodic restoration. The city's inland location means less salt air exposure than coastal Broward, but intense UV radiation and summer storm systems still take a significant toll on aging roof surfaces.",
      },
      {
        name: "Miramar",
        slug: "miramar",
        image: "/api/storage/public-objects/cities/1583608205776-bfd35f0d9f83.jpg",
        blurb:
          "One of Broward's fastest-growing cities, Miramar features a diverse mix of newer planned communities and older suburban neighborhoods — with everything from barrel tile on estate homes to flat decks on commercial strip malls. The city's growth means many homeowners are in the prime window (15–25 years post-construction) where restoration is the smartest long-term roofing decision.",
      },
      {
        name: "North Lauderdale",
        slug: "north-lauderdale",
        image: "/api/storage/public-objects/cities/1558618666-fcd25c85cd64.jpg",
        blurb:
          "North Lauderdale is a compact community where older flat-roof homes built in the 1970s and 80s are common — many of them well past the effective life of their original roof systems. Our low-cost restoration approach gives North Lauderdale homeowners a practical way to address roof aging without the financial burden of a complete tear-off and replacement.",
      },
      {
        name: "Oakland Park",
        slug: "oakland-park",
        image: "/api/storage/public-objects/cities/1416339306562-f3d12fefd36f.jpg",
        blurb:
          "Oakland Park has seen significant revitalization in recent years, with buyers renovating mid-century homes that often need roof attention as part of a larger upgrade. Many of the city's original flat-deck roofs still have old built-up tar systems beneath them — surfaces our elastomeric coating bonds directly to without requiring demolition or a full tear-off.",
      },
      {
        name: "Parkland",
        slug: "parkland",
        image: "/api/storage/public-objects/cities/1501594907352-04cda38ebc29.jpg",
        blurb:
          "Parkland is one of Broward's most prestigious planned communities, known for its large estate homes, equestrian trails, and strict HOA standards. Most homes here feature high-end barrel tile roofs that need expert care — our tile restoration and resealing process restores original color and integrity while meeting Parkland's demanding aesthetic requirements. Parkland's estate homeowners increasingly want darker tile roofs, and our Smart Shield system's BASF Cool Pigment Technology delivers that look without the heat penalty older dark coatings carried.",
      },
      {
        name: "Pembroke Park",
        slug: "pembroke-park",
        image: "/api/storage/public-objects/cities/1625602812206-5ec545ca1231.jpg",
        blurb:
          "A small, close-knit municipality between Hollywood and Miramar, Pembroke Park has a predominantly flat-roof residential and commercial building stock that requires consistent maintenance to stay watertight. Our elastomeric coating systems provide long-lasting protection for both the residential and light-industrial structures common throughout the town.",
      },
      {
        name: "Pembroke Pines",
        slug: "pembroke-pines",
        image: "/api/storage/public-objects/cities/1560185007-5f0bb1866cab.jpg",
        blurb:
          "One of the largest cities in Florida, Pembroke Pines features one of the highest concentrations of HOA-governed communities in South Florida — meaning roof appearance and integrity matter as much as performance. Our tile restoration and elastomeric coating systems meet HOA color standards while delivering the weatherproofing protection that Pembroke Pines homeowners expect.",
      },
      {
        name: "Plantation",
        slug: "plantation",
        image: "/api/storage/public-objects/cities/1501594907352-04cda38ebc29.jpg",
        blurb:
          "Plantation's signature feature is its stunning canopy of mature oaks — but those trees drop leaves and seed pods that accumulate on roofs, holding moisture and promoting algae and mold growth. Our Fungal Shield system is specifically designed to prevent and eliminate the black streaking and biological growth that Plantation homeowners deal with every year.",
      },
      {
        name: "Pompano Beach",
        slug: "pompano-beach",
        image: "/api/storage/public-objects/cities/1590523277543-a94d2e4eb00b.jpg",
        blurb:
          "Pompano Beach is a rapidly redeveloping coastal city with a wide range of building ages — from 1960s flat-roof bungalows near the beach to brand-new waterfront developments. With direct Atlantic exposure, salt air and UV radiation accelerate roof degradation here faster than inland areas, making professional roof coating installation — not just a can of paint — essential for lasting protection.",
      },
      {
        name: "Sea Ranch Lakes",
        slug: "sea-ranch-lakes",
        image: "/api/storage/public-objects/cities/1559494007-9f5847c49d94.jpg",
        blurb:
          "One of the smallest municipalities in Florida, Sea Ranch Lakes is an exclusive gated community built around a private lake on the Intracoastal Waterway. The combination of waterfront exposure and the high expectations of Sea Ranch Lakes residents makes expert roof maintenance essential — our certified technicians treat every project here with the precision the community demands.",
      },
      {
        name: "Southwest Ranches",
        slug: "southwest-ranches",
        image: "/api/storage/public-objects/cities/1464226184884-fa280b87c399.jpg",
        blurb:
          "Southwest Ranches is a semi-rural enclave of large estates and equestrian properties where roofs span large footprints — including flat-deck barn structures and custom tile estate homes. The combination of agricultural dust, tropical humidity, and large roof surfaces makes regular inspection and recoating especially important in Southwest Ranches.",
      },
      {
        name: "Sunrise",
        slug: "sunrise",
        image: "/api/storage/public-objects/cities/1477959858617-67f85cf4f1df.jpg",
        blurb:
          "Home to a major arena and a massive commercial corridor along the Sawgrass Expressway, Sunrise has one of the highest concentrations of commercial flat roofs in Broward County alongside large residential neighborhoods. Our elastomeric roof coating systems are equally suited to large commercial membrane applications and the tile and shingle systems common in Sunrise's residential communities.",
      },
      {
        name: "Tamarac",
        slug: "tamarac",
        image: "/api/storage/public-objects/cities/1489824904134-891ab64532f1.jpg",
        blurb:
          "Tamarac is a well-established community with a large senior population and a housing stock predominantly built in the 1970s and 80s — making it one of the most active areas in Broward for roof restoration. Many of Tamarac's homes feature flat-deck designs with aging built-up roofing that can be sealed and protected for another 15–20 years with our liquid-applied elastomeric system.",
      },
      {
        name: "West Park",
        slug: "west-park",
        image: "/api/storage/public-objects/cities/1448630360428-65456885c650.jpg",
        blurb:
          "West Park is a small but densely populated city in southern Broward County, incorporated in 2005 after decades of county jurisdiction. The city's older residential building stock — mostly flat and low-slope roofs from the 1960s and 70s — makes it an area where roof restoration delivers exceptional value for homeowners looking to protect their investment affordably.",
      },
      {
        name: "Weston",
        slug: "weston",
        image: "/api/storage/public-objects/cities/1559494007-9f5847c49d94.jpg",
        blurb:
          "Weston is one of South Florida's premier master-planned communities, known for its award-winning schools, manicured streetscapes, and upscale lifestyle. Homes here typically feature barrel or S-tile roofs with high HOA standards for appearance — our tile restoration and resealing process restores faded, porous tile to like-new condition without the cost of full replacement. Dark tile roofs are trending among Weston homeowners, and our Smart Shield system's BASF Cool Pigment Technology reflects heat even at the darkest color choices — so you get the modern look without a hotter roof.",
      },
      {
        name: "Wilton Manors",
        slug: "wilton-manors",
        image: "/api/storage/public-objects/cities/1555396273-367ea4eb4db5.jpg",
        blurb:
          "Known for its vibrant Wilton Drive and strong community pride, Wilton Manors has a diverse mix of 1950s-era bungalows and renovated mid-century homes — many with flat decks or low-slope roofs that need specialized waterproofing care. The city's urban character and small lot sizes make our non-disruptive liquid-applied coating system an ideal fit.",
      },
    ],
  },
  {
    name: "Miami-Dade County",
    slug: "miami-dade-county",
    // Miami skyline — city high-rises reflected across Biscayne Bay
    image: "/api/storage/public-objects/cities/1535498730771-e735b998cd64.jpg",
    description:
      "The Roof Store serves all of Miami-Dade County, FL with professional elastomeric roof coating, tile restoration, and weatherproofing. From Miami Beach to Homestead, our A+ BBB-rated team protects South Florida homes from the elements.",
    cities: [
      {
        name: "Aventura",
        slug: "aventura",
        image: "/api/storage/public-objects/cities/1530686577637-0ccce382b327.jpg",
        blurb:
          "Aventura is a luxury high-rise city on the Intracoastal Waterway where waterfront exposure and salt air are constant concerns for both residential towers and surrounding single-family homes. Our certified technicians are experienced working with the building management standards that Aventura's condominium associations and high-end homeowners demand.",
      },
      {
        name: "Bal Harbour",
        slug: "bal-harbour",
        image: "/api/storage/public-objects/cities/1562517634-baa2da3acfbf.jpg",
        blurb:
          "One of the most exclusive addresses in Florida, Bal Harbour sits directly on the Atlantic Ocean with roofs subject to constant salt spray, tropical UV, and hurricane wind loads. The high property values here make professional roof maintenance not just a smart investment but an essential one — our technicians understand the premium standards that Bal Harbour residents expect.",
      },
      {
        name: "Bay Harbor Islands",
        slug: "bay-harbor-islands",
        image: "/api/storage/public-objects/cities/1533106497176-45ae19e68ba2.jpg",
        blurb:
          "Surrounded by the waters of Biscayne Bay and Broad Causeway, Bay Harbor Islands homes face salt air exposure from multiple directions — accelerating the breakdown of tile grout, sealants, and waterproofing membranes. The island community's upscale character means every job we do here is held to the highest standards of workmanship and detail.",
      },
      {
        name: "Biscayne Park",
        slug: "biscayne-park",
        image: "/api/storage/public-objects/cities/1568605114967-8130f3a36994.jpg",
        blurb:
          "A small historic village incorporated in 1933, Biscayne Park is one of Miami-Dade's oldest communities with charming mid-century homes that often carry aging roof systems. The tree-canopied streets hold moisture against roof surfaces — our Fungal Shield treatment is particularly effective on the organic growth common in Biscayne Park's shaded neighborhoods.",
      },
      {
        name: "Coral Gables",
        slug: "coral-gables",
        image: "/api/storage/public-objects/cities/1605723517503-3cadb5818a0c.jpg",
        blurb:
          "Coral Gables is known for its stunning Mediterranean Revival architecture and strict city design codes — most homes feature clay barrel tile roofs that require specialized restoration expertise. Our technicians understand how to preserve the historic character of Coral Gables homes while delivering modern weatherproofing performance that the City Beautiful demands.",
      },
      {
        name: "Cutler Bay",
        slug: "cutler-bay",
        image: "/api/storage/public-objects/cities/1560518883-ce09059eeffa.jpg",
        blurb:
          "A planned community in southern Miami-Dade, Cutler Bay was largely developed after Hurricane Andrew in 1992 — meaning many homes were built to post-Andrew code but are now approaching the age where restoration becomes critical. The city's proximity to Biscayne Bay means coastal wind and humidity are ongoing concerns for roofing systems throughout the community.",
      },
      {
        name: "Doral",
        slug: "doral",
        image: "/api/storage/public-objects/cities/1486325212027-8081e485255e.jpg",
        blurb:
          "Doral is one of Miami-Dade's fastest-growing cities, home to a booming corporate corridor and large master-planned residential communities with predominantly newer construction. Even newer tile and flat-deck roofs in Doral benefit from proactive coating and sealing to prevent the UV damage and moisture penetration that South Florida's climate accelerates over time.",
      },
      {
        name: "El Portal",
        slug: "el-portal",
        image: "/api/storage/public-objects/cities/1416339306562-f3d12fefd36f.jpg",
        blurb:
          "El Portal is a small, tree-rich village just north of Miami with a unique character rooted in its historic homes and lush landscaping. The dense tree canopy is a defining feature but also a roofing challenge — leaves and shading promote algae and mold growth on roof surfaces that our Fungal Shield system is specifically formulated to prevent.",
      },
      {
        name: "Florida City",
        slug: "florida-city",
        image: "/api/storage/public-objects/cities/1501854140801-50d01698950b.jpg",
        blurb:
          "Florida City is the southernmost city on the Florida mainland and the gateway to the Everglades — giving it a particularly intense subtropical climate with high heat, extreme humidity, and serious hurricane exposure. As the last urban stop before the Keys, Florida City sees some of the most demanding weather conditions in the continental United States, making durable roof protection here especially critical.",
      },
      {
        name: "Golden Beach",
        slug: "golden-beach",
        image: "/api/storage/public-objects/cities/1512936702668-1ab037aced2a.jpg",
        blurb:
          "One of the smallest and wealthiest municipalities in Florida, Golden Beach sits on a narrow barrier island with direct Atlantic Ocean exposure from the front and Intracoastal from the rear. The combination of constant salt air, hurricane winds, and high property values makes expert roof maintenance an absolute priority for every homeowner here.",
      },
      {
        name: "Hialeah",
        slug: "hialeah",
        image: "/api/storage/public-objects/cities/1545324418-cc1a3fa10c00.jpg",
        blurb:
          "Florida's fifth-largest city and one of the most densely populated, Hialeah has a vibrant Cuban-American community and a diverse building stock ranging from 1950s CBS block homes to newer commercial developments. Many of Hialeah's older homes have flat or low-slope roofs with aging built-up systems that our elastomeric coating can seal and rejuvenate without requiring a full tear-off.",
      },
      {
        name: "Hialeah Gardens",
        slug: "hialeah-gardens",
        image: "/api/storage/public-objects/cities/1564013799919-ab600027ffc6.jpg",
        blurb:
          "A smaller city adjacent to Hialeah, Hialeah Gardens has a mix of residential and light-industrial properties with predominantly flat and low-slope roof systems. Our elastomeric coating and waterproofing systems work equally well on both residential flat decks and commercial membrane applications common throughout the area.",
      },
      {
        name: "Homestead",
        slug: "homestead",
        image: "/api/storage/public-objects/cities/1574169208507-84376144848b.jpg",
        blurb:
          "Homestead was ground zero for Hurricane Andrew in 1992 — an event that fundamentally changed how South Florida approaches roofing standards. Today, Homestead homeowners understand hurricane risk better than almost anyone, and our elastomeric roof coating systems with hurricane-rated wind uplift resistance are engineered precisely for these conditions.",
      },
      {
        name: "Indian Creek Village",
        slug: "indian-creek-village",
        image: "/api/storage/public-objects/cities/1514214246283-d427a95c5d2f.jpg",
        blurb:
          "Indian Creek Village is one of the most exclusive private communities in the world, home to billionaires and celebrities on a private island in Biscayne Bay. The ultra-high-end homes here require equally premium roofing expertise — our certified technicians work with the precision and professionalism that Indian Creek Village property standards demand.",
      },
      {
        name: "Islandia",
        slug: "islandia",
        image: "/api/storage/public-objects/cities/1740990556921-6131d2a9d16c.jpg",
        blurb:
          "Islandia is one of Florida's most unusual municipalities — a remote community in Biscayne Bay's Card Sound area accessible primarily by boat. The extreme marine environment here — surrounded by saltwater on all sides — is among the most corrosive for roofing materials anywhere in Florida, making our elastomeric waterproofing systems an essential defense against the elements.",
      },
      {
        name: "Key Biscayne",
        slug: "key-biscayne",
        image: "/api/storage/public-objects/cities/1548574505-5e239809ee19.jpg",
        blurb:
          "A barrier island connected to Miami by the Rickenbacker Causeway, Key Biscayne combines the lifestyle of a secluded island village with direct Atlantic Ocean exposure on all sides. Salt air, tropical UV, and hurricane risk are constant concerns here — our elastomeric roof systems are specifically engineered for high-wind coastal environments like Key Biscayne.",
      },
      {
        name: "Medley",
        slug: "medley",
        image: "/api/storage/public-objects/cities/1558618666-fcd25c85cd64.jpg",
        blurb:
          "Medley is a small industrial municipality in western Miami-Dade known primarily for its warehouses and commercial facilities — making it one of the area's top markets for commercial flat-roof coating and maintenance. Our large-scale elastomeric roof coating systems are well-suited to the wide commercial membrane applications that dominate Medley's building landscape.",
      },
      {
        name: "Miami",
        slug: "miami",
        image: "/api/storage/public-objects/cities/1597535973747-951442d5dbc7.jpg",
        blurb:
          "As Florida's premier urban center, Miami's building stock spans everything from Art Deco flat-roofed hotels in South Beach to sprawling Coconut Grove estates with clay tile — requiring a roofing partner with expertise across every system. Miami's coastal position, Biscayne Bay exposure, and status as one of the most hurricane-vulnerable cities in the country make professional roof protection here non-negotiable.",
      },
      {
        name: "Miami Beach",
        slug: "miami-beach",
        image: "/api/storage/public-objects/cities/1589083130544-0d6a2926e519.jpg",
        blurb:
          "Built on a barrier island between Biscayne Bay and the Atlantic Ocean, Miami Beach roofs face salt air from both directions alongside intense UV and annual hurricane threats. The city's famous Art Deco architecture features many flat-roof buildings from the 1930s and 40s that require specialized waterproofing expertise to maintain their historic character and watertight integrity.",
      },
      {
        name: "Miami Gardens",
        slug: "miami-gardens",
        image: "/api/storage/public-objects/cities/1558618666-fcd25c85cd64.jpg",
        blurb:
          "Miami Gardens is a large, predominantly residential city in northern Miami-Dade with a significant stock of 1960s and 70s single-family CBS homes — many with original flat or low-slope roofing that has never been restored. Our elastomeric coating systems are a cost-effective solution for Miami Gardens homeowners who need reliable roof protection without the expense of full replacement.",
      },
      {
        name: "Miami Lakes",
        slug: "miami-lakes",
        image: "/api/storage/public-objects/cities/1507003211169-0a1dd7228f2d.jpg",
        blurb:
          "A master-planned community built around its namesake network of lakes, Miami Lakes features upscale residential neighborhoods with predominantly tile roofing and high community standards. The lake environment adds persistent humidity to South Florida's roofing challenges — our tile restoration and resealing process protects both performance and the curb appeal that Miami Lakes residents maintain.",
      },
      {
        name: "Miami Shores",
        slug: "miami-shores",
        image: "/api/storage/public-objects/cities/1625602812206-5ec545ca1231.jpg",
        blurb:
          "Miami Shores is a historic village with one of South Florida's finest collections of Mediterranean Revival and Art Deco residential architecture — most homes feature clay barrel tile roofs that define the neighborhood's character. Restoring and resealing these original tile systems is a specialty of ours, preserving Miami Shores' distinctive look while providing modern weatherproofing performance.",
      },
      {
        name: "Miami Springs",
        slug: "miami-springs",
        image: "/api/storage/public-objects/cities/1570129477492-45c003edd2be.jpg",
        blurb:
          "Miami Springs was founded in 1926 with a Pueblo Revival architectural theme — giving it a unique collection of historic homes with curved parapets, flat roofs, and rounded forms that require specialized waterproofing expertise. Our liquid-applied elastomeric coating systems are ideal for the complex flat and low-slope geometries found throughout Miami Springs' historic building stock.",
      },
      {
        name: "North Bay Village",
        slug: "north-bay-village",
        image: "/api/storage/public-objects/cities/1754269675202-6fb0016d9f21.jpg",
        blurb:
          "Spread across three man-made islands in Biscayne Bay, North Bay Village has perhaps the highest proportion of waterfront properties in Miami-Dade — with salt air exposure on every block. The island environment accelerates roofing system degradation significantly, making regular inspection and recoating essential for every property here.",
      },
      {
        name: "North Miami",
        slug: "north-miami",
        image: "/api/storage/public-objects/cities/1583608205776-bfd35f0d9f83.jpg",
        blurb:
          "North Miami is a culturally diverse city undergoing significant development pressure, with older neighborhoods featuring 1950s and 60s flat-roof CBS homes alongside newer construction. Many of North Miami's original roofing systems are overdue for restoration — our elastomeric coating provides a cost-effective alternative to full replacement that many North Miami homeowners find compelling.",
      },
      {
        name: "North Miami Beach",
        slug: "north-miami-beach",
        image: "/api/storage/public-objects/cities/1506966953602-c20cc11f75e3.jpg",
        blurb:
          "North Miami Beach is a dense, ethnically diverse community with a mix of aging apartment buildings and single-family homes — many with flat roofs that are well past their original maintenance schedules. Our commercial and residential flat-roof coating systems are equally effective on the wide range of building types found throughout North Miami Beach.",
      },
      {
        name: "Opa-locka",
        slug: "opa-locka",
        image: "/api/storage/public-objects/cities/1477959858617-67f85cf4f1df.jpg",
        blurb:
          "Famous for its extraordinary collection of Moorish Revival architecture built in the 1920s — including minarets, domes, and horseshoe arches — Opa-locka has a unique building stock that requires specialized roofing expertise. Many of the city's historic structures feature flat and low-slope roof systems where our liquid-applied elastomeric coating provides watertight protection without disturbing the historic character above.",
      },
      {
        name: "Palmetto Bay",
        slug: "palmetto-bay",
        image: "/api/storage/public-objects/cities/1501594907352-04cda38ebc29.jpg",
        blurb:
          "Palmetto Bay is one of Miami-Dade's most desirable suburban communities — a family-friendly village in south Miami-Dade known for its excellent schools, lush landscaping, and large single-family homes. Most properties here feature barrel tile or flat-deck roofing, with many at the age where professional restoration extends roof life by decades at a fraction of replacement cost.",
      },
      {
        name: "Pinecrest",
        slug: "pinecrest",
        image: "/api/storage/public-objects/cities/1560185007-5f0bb1866cab.jpg",
        blurb:
          "Pinecrest is Miami-Dade's premier high-end suburb — a lushly landscaped village of large estate homes with immaculate curb appeal and high property values. Most Pinecrest homes feature custom clay or concrete tile roofing that requires expert restoration to maintain both appearance and waterproofing performance — our tile reglazing and resealing services are a natural fit here.",
      },
      {
        name: "South Miami",
        slug: "south-miami",
        image: "/api/storage/public-objects/cities/1448630360428-65456885c650.jpg",
        blurb:
          "A charming small city with a walkable downtown and strong community identity, South Miami features a mix of mid-century homes and newer construction — many with tile or flat-deck roofing in need of professional care. Our restoration approach fits well with South Miami's value-conscious community that prefers smart investment over unnecessary replacement.",
      },
      {
        name: "Sunny Isles Beach",
        slug: "sunny-isles-beach",
        image: "/api/storage/public-objects/cities/1669639785616-3353f0f11de7.jpg",
        blurb:
          "Known for its row of oceanfront luxury high-rises, Sunny Isles Beach sits directly on the Atlantic with maximum salt air and wind exposure. The high density of luxury residential towers and surrounding single-family neighborhoods makes our experience with both large-scale commercial and high-end residential roofing systems especially relevant here.",
      },
      {
        name: "Surfside",
        slug: "surfside",
        image: "/api/storage/public-objects/cities/1628651102070-2df2c7d93f51.jpg",
        blurb:
          "Surfside made international headlines in 2021 with the Champlain Towers collapse — an event that brought renewed urgency to building inspection and maintenance standards across South Florida. Today, Surfside property owners are especially attentive to structural and waterproofing integrity, and our thorough inspection and documentation process gives homeowners the confidence they need.",
      },
      {
        name: "Sweetwater",
        slug: "sweetwater",
        image: "/api/storage/public-objects/cities/1489824904134-891ab64532f1.jpg",
        blurb:
          "Sweetwater is a small, vibrant city with a large Nicaraguan-American community and a commercial corridor that serves a broad regional population. The city's mix of residential CBS homes and commercial strip buildings creates opportunities for both residential and commercial flat-roof restoration that our team handles with equal expertise.",
      },
      {
        name: "Virginia Gardens",
        slug: "virginia-gardens",
        image: "/api/storage/public-objects/cities/1568605114967-8130f3a36994.jpg",
        blurb:
          "Virginia Gardens is one of Miami-Dade's smallest municipalities — a quiet, compact village near Miami International Airport with a predominantly single-family residential character. The older CBS homes here often have flat or low-slope roofing that benefits enormously from our elastomeric coating restoration, extending roof life significantly at a cost homeowners in this tight-knit community appreciate.",
      },
      {
        name: "West Miami",
        slug: "west-miami",
        image: "/api/storage/public-objects/cities/1560518883-ce09059eeffa.jpg",
        blurb:
          "West Miami is a small, historic city bordered by Coral Gables and Miami with a strong Cuban-American community and well-maintained older homes. The city's aging building stock — mostly 1950s and 60s CBS construction — features flat and low-slope roofs that are prime candidates for our elastomeric coating restoration systems.",
      },
    ],
  },
  {
    name: "Palm Beach County",
    slug: "palm-beach-county",
    // West Palm Beach waterfront — city, river, and bridge at night
    image: "/api/storage/public-objects/cities/1664829018245-04b94e17b8aa.jpg",
    description:
      "From Boca Raton to Jupiter, The Roof Store serves all of Palm Beach County with our elastomeric roof coating and tile restoration systems. Protecting Palm Beach County homes from Florida's harsh climate since 1994.",
    extraSections: [
      {
        heading: "HOA Roof Painting in Boca Raton & Palm Beach County Communities",
        body: "HOA roof painting in Boca Raton and across Palm Beach County is one of the most common inquiries we receive — and one of the most misunderstood services in the roofing industry. Most HOA governing documents specify approved roof colors and finishes, but they rarely distinguish between cosmetic roof paint and a performance-rated roof coating system. That distinction matters enormously in South Florida. Standard exterior paint fades, peels, and fails within 2–3 years in Palm Beach County's UV intensity and humidity. Our SmartShield (RP2) system uses BASF Cool Pigment Technology to deliver HOA-compliant color — including the darker tones trending in Boca Raton and Delray Beach — while also reflecting heat and forming a waterproof membrane that lasts 10–15 years. We work directly with HOA property managers and board members throughout Palm Beach County, providing documentation packages that include color samples, warranty letters, and technical data sheets to satisfy architectural review committees. Communities in Boca Raton, Palm Beach Gardens, Wellington, and Boynton Beach regularly engage us for whole-community re-coating projects and reserve-study-backed maintenance programs.",
        linkHref: "/commercial-roof-coating-hoa",
        linkLabel: "HOA & condo association roof coating services →",
      },
    ],
    cities: [
      {
        name: "Atlantis",
        slug: "atlantis",
        image: "/api/storage/public-objects/cities/1559494007-9f5847c49d94.jpg",
        blurb:
          "Atlantis is a tiny, exclusive city built around a private golf course and lake — with a small collection of luxury homes that demand premium roofing expertise. The lake setting adds persistent humidity to the typical South Florida roofing challenges, making quality maintenance essential for Atlantis homeowners who expect nothing but the best.",
      },
      {
        name: "Belle Glade",
        slug: "belle-glade",
        image: "/api/storage/public-objects/cities/1500382017468-9049fed747ef.jpg",
        blurb:
          "Sitting on the southern shore of Lake Okeechobee, Belle Glade faces a unique climate: high agricultural humidity from surrounding sugarcane fields, intense inland heat, and occasional severe storms rolling off the lake. The combination of moisture and heat creates ideal conditions for algae and organic growth on roof surfaces — our Fungal Shield system addresses this problem directly.",
      },
      {
        name: "Boca Raton",
        slug: "boca-raton",
        image: "/api/storage/public-objects/cities/1738654942907-e79039dc247f.jpg",
        blurb:
          "Boca Raton is Palm Beach County's most affluent city — known for its Mediterranean architecture, upscale planned communities, and pristine curb appeal. Most homes here feature high-end barrel or flat tile roofing that requires expert restoration to maintain the immaculate standard that Boca Raton communities and HOAs demand.",
      },
      {
        name: "Boynton Beach",
        slug: "boynton-beach",
        image: "/api/storage/public-objects/cities/1649357675339-53af4a244a0a.jpg",
        blurb:
          "Boynton Beach is a rapidly growing coastal city with one of the most diverse housing stocks in Palm Beach County — from original 1950s beach bungalows to new waterfront developments. Our elastomeric coating and tile restoration services cover the full range of roof types found across Boynton Beach's expanding residential neighborhoods.",
      },
      {
        name: "Briny Breezes",
        slug: "briny-breezes",
        image: "/api/storage/public-objects/cities/1587584398227-7920a80b30dc.jpg",
        blurb:
          "One of Florida's smallest and most unusual municipalities, Briny Breezes is a mobile home cooperative community directly on the Atlantic Ocean — with all structures facing intense salt air, UV, and hurricane wind loads. The community's unique oceanfront exposure makes expert roofing maintenance especially important for every resident here.",
      },
      {
        name: "Cloud Lake",
        slug: "cloud-lake",
        image: "/api/storage/public-objects/cities/1507003211169-0a1dd7228f2d.jpg",
        blurb:
          "Cloud Lake is one of Palm Beach County's smallest municipalities — a quiet residential enclave of just a few hundred residents near West Palm Beach. The modest size of the community belies the importance of proper roof maintenance here, where older homes benefit significantly from our elastomeric coating restoration approach.",
      },
      {
        name: "Delray Beach",
        slug: "delray-beach",
        image: "/api/storage/public-objects/cities/1524594081293-190a2fe0baae.jpg",
        blurb:
          "Delray Beach has transformed into one of South Florida's most vibrant small cities — known for its walkable Atlantic Avenue, arts scene, and a booming real estate market attracting buyers from across the country. The city's diverse housing stock ranges from 1950s beach bungalows to new luxury construction, with a wide variety of roofing needs our team is fully equipped to handle.",
      },
      {
        name: "Glen Ridge",
        slug: "glen-ridge",
        image: "/api/storage/public-objects/cities/1570129477492-45c003edd2be.jpg",
        blurb:
          "Glen Ridge is a small, quiet residential municipality in central Palm Beach County with a tight-knit community of homeowners in well-maintained properties. South Florida's UV intensity and summer storm systems demand regular roof attention even in this inland community, where our restoration systems deliver excellent value.",
      },
      {
        name: "Golfview",
        slug: "golfview",
        image: "/api/storage/public-objects/cities/1501594907352-04cda38ebc29.jpg",
        blurb:
          "Golfview is a small enclave community adjacent to a golf course in central Palm Beach County — a quiet, exclusive residential area where property values and maintenance standards run high. Many homes here feature tile roofing that benefits from our professional resealing and restoration services to maintain both aesthetics and watertight performance.",
      },
      {
        name: "Greenacres",
        slug: "greenacres",
        image: "/api/storage/public-objects/cities/1583608205776-bfd35f0d9f83.jpg",
        blurb:
          "Greenacres is a family-oriented city in central Palm Beach County with a large stock of affordable single-family homes — many built in the 1970s and 80s with flat or tile roofing. Our restoration systems offer Greenacres homeowners a practical, cost-effective way to protect and extend the life of aging roofs without the expense of full replacement.",
      },
      {
        name: "Gulf Stream",
        slug: "gulf-stream",
        image: "/api/storage/public-objects/cities/1513907404652-d138942b8859.jpg",
        blurb:
          "Gulf Stream is one of Florida's wealthiest small communities — an oceanfront town of grand estates along A1A with direct Atlantic exposure and the Gulf Stream current offshore. The combination of luxury property values and constant salt air and UV exposure makes expert roof maintenance here both essential and economically justified.",
      },
      {
        name: "Haverhill",
        slug: "haverhill",
        image: "/api/storage/public-objects/cities/1448630360428-65456885c650.jpg",
        blurb:
          "Haverhill is a small, rural-feeling community in western Palm Beach County with a mix of residential and agricultural properties. The area's inland location gives it a distinct character from coastal Palm Beach County, but Florida's intense climate still demands regular roof inspection and maintenance for all property types.",
      },
      {
        name: "Highland Beach",
        slug: "highland-beach",
        image: "/api/storage/public-objects/cities/1520520731457-9283dd14aa66.jpg",
        blurb:
          "Highland Beach is a narrow barrier island community between Boca Raton and Delray Beach — sitting directly on the Atlantic with Intracoastal to the west. The town's oceanfront location puts roofs in one of the most demanding environments in Palm Beach County for salt air corrosion and UV degradation.",
      },
      {
        name: "Hypoluxo",
        slug: "hypoluxo",
        image: "/api/storage/public-objects/cities/1544665215-3871472514fa.jpg",
        blurb:
          "Hypoluxo is a small barrier island town on the Intracoastal Waterway — with essentially every property facing direct marine exposure from the water. The town's waterfront character means salt air, coastal wind, and humidity are constant factors in accelerating roofing system wear throughout the community.",
      },
      {
        name: "Juno Beach",
        slug: "juno-beach",
        image: "/api/storage/public-objects/cities/1576123300830-fe145f281d12.jpg",
        blurb:
          "Juno Beach is a quiet coastal town known for its sea turtle nesting habitat and relaxed beach lifestyle — but its direct Atlantic Ocean exposure means roofs here face some of the most intense UV and salt air conditions in Palm Beach County. Our elastomeric coating systems provide the durable, seamless protection that Juno Beach's coastal homes require.",
      },
      {
        name: "Jupiter",
        slug: "jupiter",
        image: "/api/storage/public-objects/cities/1548574505-5e239809ee19.jpg",
        blurb:
          "Jupiter is one of Palm Beach County's most desirable coastal communities — home to professional athletes, celebrity residents, and a thriving waterfront lifestyle. The city's position at the northern end of Palm Beach County means it's among the first to feel the effects of major storm systems moving up Florida's coast, making hurricane-rated roof protection especially important here.",
      },
      {
        name: "Jupiter Inlet Colony",
        slug: "jupiter-inlet-colony",
        image: "/api/storage/public-objects/cities/1548574505-5e239809ee19.jpg",
        blurb:
          "One of Florida's smallest incorporated municipalities, Jupiter Inlet Colony is a private beachfront community directly adjacent to Jupiter Inlet — with every home exposed to constant salt air from both the ocean and the inlet. The small size and exclusive character of the community makes our personalized, detail-oriented service approach an especially good fit.",
      },
      {
        name: "Lake Clarke Shores",
        slug: "lake-clarke-shores",
        image: "/api/storage/public-objects/cities/1559494007-9f5847c49d94.jpg",
        blurb:
          "Lake Clarke Shores is a small lakeside community wrapping around Clarke Lake in central Palm Beach County — a tranquil residential area where the lake setting adds persistent humidity to typical South Florida roofing challenges. Many homes here are mid-century construction with aging flat or tile roofing that benefits from professional restoration.",
      },
      {
        name: "Lake Park",
        slug: "lake-park",
        image: "/api/storage/public-objects/cities/1416339306562-f3d12fefd36f.jpg",
        blurb:
          "Lake Park is a historic small town on the Intracoastal Waterway with a storied past as one of Palm Beach County's original communities, dating to the 1940s. The older building stock here means many homes have roofing systems that are overdue for professional assessment and restoration rather than the costly alternative of full replacement.",
      },
      {
        name: "Lake Worth Beach",
        slug: "lake-worth-beach",
        image: "/api/storage/public-objects/cities/1544665215-3871472514fa.jpg",
        blurb:
          "Lake Worth Beach is a funky, artsy coastal community known for its diverse population, eclectic downtown, and direct Atlantic Ocean beach. The coastal exposure here — combined with many older buildings in the historic downtown area — creates significant demand for expert flat-roof waterproofing and restoration services.",
      },
      {
        name: "Lantana",
        slug: "lantana",
        image: "/api/storage/public-objects/cities/1563714104487-2d992b91aeb9.jpg",
        blurb:
          "Lantana is a small coastal town on the Intracoastal Waterway with direct access to the Atlantic Ocean beach — giving roofs here a heavy dose of salt air exposure from both directions. Our elastomeric coating systems are specifically formulated to withstand the marine environment that Lantana homeowners deal with year-round.",
      },
      {
        name: "Loxahatchee Groves",
        slug: "loxahatchee-groves",
        image: "/api/storage/public-objects/cities/1553284965-83fd3e82fa5a.jpg",
        blurb:
          "Loxahatchee Groves is a rural equestrian community in western Palm Beach County — similar in character to Davie in Broward — with large properties, horse paddocks, and a country feel unlike anything else in the county. The area's agricultural setting creates unique roofing challenges including wind-driven debris, high irrigation humidity, and large low-slope structures like barns and outbuildings.",
      },
      {
        name: "Manalapan",
        slug: "manalapan",
        image: "/api/storage/public-objects/cities/1692678813200-d746a746bf07.jpg",
        blurb:
          "Manalapan is one of the wealthiest per-capita towns in Florida — a small barrier island community between Boynton Beach and Delray Beach with oceanfront mansions that rival anything in Palm Beach. The combination of extreme property values and constant Atlantic Ocean exposure makes expert roof maintenance both essential and economically straightforward here.",
      },
      {
        name: "Mangonia Park",
        slug: "mangonia-park",
        image: "/api/storage/public-objects/cities/1560518883-ce09059eeffa.jpg",
        blurb:
          "Mangonia Park is a small, modest municipality in the heart of West Palm Beach's urban area — a tight-knit community with older housing stock and a working-class character. The older homes here are excellent candidates for our cost-effective elastomeric coating restoration systems, which deliver maximum protection at significantly lower cost than full replacement.",
      },
      {
        name: "North Palm Beach",
        slug: "north-palm-beach",
        image: "/api/storage/public-objects/cities/1584677488802-c080664c7c45.jpg",
        blurb:
          "North Palm Beach is an upscale waterfront community on the Intracoastal Waterway — known for its marina, golf course, and some of the finest residential properties in northern Palm Beach County. The combination of high property values and significant waterfront exposure makes professional roof maintenance a standard part of property care throughout North Palm Beach.",
      },
      {
        name: "Ocean Ridge",
        slug: "ocean-ridge",
        image: "/api/storage/public-objects/cities/1512936702668-1ab037aced2a.jpg",
        blurb:
          "Ocean Ridge is a small, exclusive barrier island town between Boynton Beach and Briny Breezes — with direct Atlantic Ocean exposure making it one of the most demanding roofing environments in the county. Every home here faces maximum salt air, UV, and hurricane wind load, and our elastomeric coating systems are engineered precisely for these conditions.",
      },
      {
        name: "Pahokee",
        slug: "pahokee",
        image: "/api/storage/public-objects/cities/1464226184884-fa280b87c399.jpg",
        blurb:
          "Located on the eastern shore of Lake Okeechobee, Pahokee is a small agricultural community facing a unique inland roofing environment — intense heat, high humidity from the lake, and violent thunderstorms that roll across the water without warning. Our elastomeric coating systems are durable under these demanding inland climate conditions as well as the coastal environments more common in Palm Beach County.",
      },
      {
        name: "Palm Beach",
        slug: "palm-beach",
        image: "/api/storage/public-objects/cities/1576124907498-5c384cd85616.jpg",
        blurb:
          "The Town of Palm Beach is one of the most storied and expensive addresses in America — home to magnificent estates along Ocean Boulevard and Worth Avenue's legendary shopping. Every roofing project on Palm Beach Island is held to the absolute highest standard of craftsmanship and materials, and our certified technicians work with the precision that Palm Beach property owners and their architects expect.",
      },
      {
        name: "Palm Beach Gardens",
        slug: "palm-beach-gardens",
        image: "/api/storage/public-objects/cities/1576124908098-b386317d160f.jpg",
        blurb:
          "Palm Beach Gardens is a large, master-planned city known for its world-class golf courses, upscale planned communities, and proximity to major medical facilities. Many of the city's newer luxury homes feature tile roofing with HOA-mandated color standards — our tile restoration and resealing process maintains both performance and the precise aesthetic requirements that Palm Beach Gardens communities enforce.",
      },
      {
        name: "Palm Beach Shores",
        slug: "palm-beach-shores",
        image: "/api/storage/public-objects/cities/1669639785616-3353f0f11de7.jpg",
        blurb:
          "Palm Beach Shores is a small residential community at the southern tip of Singer Island — with Atlantic Ocean exposure on the east and Lake Worth Lagoon on the west. The dual waterfront exposure creates one of Palm Beach County's most challenging marine environments for roofing systems of all types.",
      },
      {
        name: "Palm Springs",
        slug: "palm-springs",
        image: "/api/storage/public-objects/cities/1558618666-fcd25c85cd64.jpg",
        blurb:
          "Palm Springs, Florida is a modest, family-oriented community in central Palm Beach County with a strong blue-collar identity and older residential housing stock. Many homes here have flat or low-slope roofs that have been patched piecemeal over the years — our comprehensive elastomeric coating approach seals everything in a single, uniform watertight membrane.",
      },
      {
        name: "Riviera Beach",
        slug: "riviera-beach",
        image: "/api/storage/public-objects/cities/1573220983618-156ea86f9c17.jpg",
        blurb:
          "Riviera Beach is a waterfront city on Singer Island and the Palm Beach Inlet with a diverse residential community and a working waterfront that serves the local marine industry. The combination of Intracoastal exposure, ocean proximity, and significant humidity from marine activity makes Riviera Beach one of the more demanding roofing environments in northern Palm Beach County.",
      },
      {
        name: "Royal Palm Beach",
        slug: "royal-palm-beach",
        image: "/api/storage/public-objects/cities/1558618666-fcd25c85cd64.jpg",
        blurb:
          "Royal Palm Beach is a large, family-friendly planned community in western Palm Beach County — one of the fastest-growing areas in the county over the past two decades. The city's mix of newer construction and older planned phases means homeowners across Royal Palm Beach are at various stages of the roof restoration consideration cycle, and our team works with all ages of construction.",
      },
      {
        name: "South Bay",
        slug: "south-bay",
        image: "/api/storage/public-objects/cities/1500076656116-558758c991c1.jpg",
        blurb:
          "South Bay sits on the southern rim of Lake Okeechobee — a small, agricultural community facing its own demanding climate conditions including intense heat, lake humidity, and severe inland storms. Our elastomeric coating systems are well-suited to the flat and low-slope industrial and residential roofing common in South Bay's building stock.",
      },
      {
        name: "South Palm Beach",
        slug: "south-palm-beach",
        image: "/api/storage/public-objects/cities/1563714104487-2d992b91aeb9.jpg",
        blurb:
          "South Palm Beach is a tiny residential town — barely a quarter mile wide — squeezed between the Atlantic Ocean and Lake Worth Lagoon on the southern end of Palm Beach Island. With the ocean on one side and the Intracoastal on the other, virtually every building here faces maximum marine exposure from two directions.",
      },
      {
        name: "Tequesta",
        slug: "tequesta",
        image: "/api/storage/public-objects/cities/1548574505-5e239809ee19.jpg",
        blurb:
          "Tequesta is a quiet, upscale community at the northern tip of Palm Beach County on the Loxahatchee River and Jupiter Inlet — known for its natural character and high quality of life. The riverfront and coastal exposure here creates a distinctive set of roofing challenges, and our elastomeric coating and tile restoration systems are well-suited to the custom homes throughout this desirable community.",
      },
      {
        name: "Wellington",
        slug: "wellington",
        image: "/api/storage/public-objects/cities/1553284965-83fd3e82fa5a.jpg",
        blurb:
          "Wellington is the equestrian capital of the world — hosting the Winter Equestrian Festival and polo events that attract enthusiasts from across the globe. The large estate properties and equestrian facilities here create significant demand for both residential tile restoration and large-scale flat-deck coating on barns and agricultural structures throughout the community.",
      },
      {
        name: "West Palm Beach",
        slug: "west-palm-beach",
        image: "/api/storage/public-objects/cities/1584677488802-c080664c7c45.jpg",
        blurb:
          "The county seat of Palm Beach County, West Palm Beach is a growing urban center undergoing a renaissance — with new development, a thriving downtown, and a diverse mix of historic neighborhoods and modern construction. From historic Flamingo Park bungalows to new high-rises on the Intracoastal, our team has the expertise to handle every roof type found across West Palm Beach's varied building stock.",
      },
      {
        name: "Westlake",
        slug: "westlake",
        image: "/api/storage/public-objects/cities/1625602812206-5ec545ca1231.jpg",
        blurb:
          "Westlake is one of Florida's newest incorporated cities — a modern master-planned community in western Palm Beach County that has grown rapidly since its incorporation in 2018. Even in this brand-new city, proactive roof coating and sealing from the start significantly extends the life of tile and flat-deck systems against South Florida's relentless UV exposure and storm activity.",
      },
    ],
  },
  {
    name: "Monroe County",
    slug: "monroe-county",
    // Aerial island view — Florida Keys from above, turquoise water all around
    image: "/api/storage/public-objects/cities/1519500900873-696f4e3171de.jpg",
    description:
      "The Roof Store extends service to Monroe County, FL — protecting Keys homes from the harshest marine climate in Florida. Our elastomeric roof coating systems are engineered for salt air, high humidity, and hurricane-force wind exposure.",
    extraSections: [
      {
        heading: "Comparing Roof Paint vs. Roof Coating in Key West",
        body: "Salt air roof protection in Key West is not optional — it is an ongoing maintenance requirement for every property in Monroe County. The Florida Keys sit entirely surrounded by saltwater, which means roofs here face chloride-laden air from all directions, 365 days a year. Standard roof paints and sealants break down rapidly in this environment: salt crystals work into micro-cracks, grout joints, and tile pores, accelerating corrosion and water intrusion far faster than inland South Florida. Our elastomeric rubber coating system forms a seamless, salt-resistant membrane over the entire roof surface — sealing every joint and penetration against both the marine atmosphere and hurricane-force wind-driven rain. For homeowners in Key West, Marathon, Islamorada, and throughout the Keys, this level of protection is what separates a roof that lasts 15 years from one that needs attention every 3. We are one of the few contractors in South Florida who regularly works in Monroe County and understands the specific maintenance cycle and material selection that the Keys environment demands.",
        linkHref: "/products/roofshield",
        linkLabel: "Learn about our hurricane-rated RoofShield system →",
      },
    ],
    cities: [
      {
        name: "Key West",
        slug: "key-west",
        image: "/api/storage/public-objects/cities/1531429957-9e7c26e39c84.jpg",
        blurb:
          "Key West is the southernmost city in the continental United States — sitting at the tip of the Florida Keys with the Atlantic Ocean on one side and the Gulf of Mexico on the other. The extreme marine environment here is perhaps the most demanding for roofing systems anywhere in Florida: constant salt air from all directions, maximum UV exposure, and direct hurricane paths make expert roof protection in Key West an absolute necessity.",
      },
    ],
  },
];

export function getCityImage(county: CountyEntry, city: CityEntry): string {
  return city.image ?? county.image;
}

export function findCounty(slug: string): CountyEntry | undefined {
  return counties.find((c) => c.slug === slug);
}

export function findCity(countySlug: string, citySlug: string): { city: CityEntry; county: CountyEntry } | undefined {
  const county = findCounty(countySlug);
  if (!county) return undefined;
  const city = county.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { city, county };
}
