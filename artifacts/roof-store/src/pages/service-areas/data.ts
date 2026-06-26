export interface CityEntry {
  name: string;
  slug: string;
  image?: string;
}

export interface CountyEntry {
  name: string;
  slug: string;
  description: string;
  image: string;
  cities: CityEntry[];
}

// All images are locally cached in public/images/cities/ as JPEG files.
// Format: /images/cities/{unsplash-photo-id}.jpg
// Run `pnpm --filter @workspace/scripts run refresh-city-images` to re-download from Unsplash.

export const counties: CountyEntry[] = [
  {
    name: "Broward County",
    slug: "broward-county",
    // Bird's-eye view of river winding through downtown Fort Lauderdale
    image: "/images/cities/1538016298852-e69a243f7ee2.jpg",
    description:
      "The Roof Store serves all of Broward County, FL — from Fort Lauderdale to Coral Springs. Our rubber roof coating and tile restoration systems protect Broward homes from hurricanes, tropical storms, and intense UV exposure.",
    cities: [
      {
        name: "Coconut Creek",
        slug: "coconut-creek",
        // Aerial view of a master-planned South Florida suburban neighborhood
        image: "/images/cities/1558618666-fcd25c85cd64.jpg",
      },
      {
        name: "Cooper City",
        slug: "cooper-city",
        // Quiet suburban South Florida home exterior
        image: "/images/cities/1568605114967-8130f3a36994.jpg",
      },
      {
        name: "Coral Springs",
        slug: "coral-springs",
        // Beach with South Florida city skyline in the background
        image: "/images/cities/1691423332423-f2132628ff72.jpg",
      },
      {
        name: "Dania Beach",
        slug: "dania-beach",
        // Palm trees lining a sun-drenched beach sidewalk
        image: "/images/cities/1692678813200-d746a746bf07.jpg",
      },
      {
        name: "Davie",
        slug: "davie",
        // Horses in an open green field — Davie is known for its equestrian and western heritage
        image: "/images/cities/1553284965-83fd3e82fa5a.jpg",
      },
      {
        name: "Deerfield Beach",
        slug: "deerfield-beach",
        // Coastal South Florida aerial
        image: "/images/cities/1590523277543-a94d2e4eb00b.jpg",
      },
      {
        name: "Fort Lauderdale",
        slug: "fort-lauderdale",
        // Aerial photography of Fort Lauderdale coastline
        image: "/images/cities/1484199383121-dfa3c30608cd.jpg",
      },
      {
        name: "Hillsboro Beach",
        slug: "hillsboro-beach",
        // Golden hour at a South Florida beach
        image: "/images/cities/1573220983618-156ea86f9c17.jpg",
      },
      {
        name: "Hallandale Beach",
        slug: "hallandale-beach",
        // Beach volleyball on a sunny South Florida beach
        image: "/images/cities/1599509033274-4d2128aa81e2.jpg",
      },
      {
        name: "Hollywood",
        slug: "hollywood",
        // Palm tree silhouette against a dramatic South Florida sunset
        image: "/images/cities/1617202830798-cf48261fb70d.jpg",
      },
      {
        name: "Lauderdale Lakes",
        slug: "lauderdale-lakes",
        // Suburban South Florida home with pool
        image: "/images/cities/1564013799919-ab600027ffc6.jpg",
      },
      {
        name: "Lauderhill",
        slug: "lauderhill",
        // Row of suburban South Florida homes
        image: "/images/cities/1560518883-ce09059eeffa.jpg",
      },
      {
        name: "Lauderdale-by-the-Sea",
        slug: "lauderdale-by-the-sea",
        // Canoe resting near a tropical palm — classic coastal Florida
        image: "/images/cities/1520520731457-9283dd14aa66.jpg",
      },
      {
        name: "Lighthouse Point",
        slug: "lighthouse-point",
        // Classic coastal lighthouse — perfectly named
        image: "/images/cities/1570111684787-0c62fa8fbc1b.jpg",
      },
      {
        name: "Margate",
        slug: "margate",
        // Suburban South Florida home exterior
        image: "/images/cities/1570129477492-45c003edd2be.jpg",
      },
      {
        name: "Miramar",
        slug: "miramar",
        // Suburban neighborhood street — Miramar is a large diverse suburban city
        image: "/images/cities/1583608205776-bfd35f0d9f83.jpg",
      },
      {
        name: "North Lauderdale",
        slug: "north-lauderdale",
        // Suburban South Florida neighborhood aerial
        image: "/images/cities/1558618666-fcd25c85cd64.jpg",
      },
      {
        name: "Oakland Park",
        slug: "oakland-park",
        // Lush green park landscape — Oakland Park lives up to its name
        image: "/images/cities/1416339306562-f3d12fefd36f.jpg",
      },
      {
        name: "Parkland",
        slug: "parkland",
        // Serene green park — Parkland is celebrated for its park-like open spaces
        image: "/images/cities/1501594907352-04cda38ebc29.jpg",
      },
      {
        name: "Pembroke Park",
        slug: "pembroke-park",
        // Suburban residential street
        image: "/images/cities/1625602812206-5ec545ca1231.jpg",
      },
      {
        name: "Pembroke Pines",
        slug: "pembroke-pines",
        // Suburban street with homes — Pembroke Pines is one of Broward's largest planned communities
        image: "/images/cities/1560185007-5f0bb1866cab.jpg",
      },
      {
        name: "Plantation",
        slug: "plantation",
        // Tree-lined path through lush greenery — Plantation is known for its canopy of old oaks
        image: "/images/cities/1501594907352-04cda38ebc29.jpg",
      },
      {
        name: "Pompano Beach",
        slug: "pompano-beach",
        // Coastal South Florida aerial
        image: "/images/cities/1590523277543-a94d2e4eb00b.jpg",
      },
      {
        name: "Sea Ranch Lakes",
        slug: "sea-ranch-lakes",
        // Tranquil lake with dock — Sea Ranch Lakes is built around a private lake
        image: "/images/cities/1559494007-9f5847c49d94.jpg",
      },
      {
        name: "Southwest Ranches",
        slug: "southwest-ranches",
        // Open hay fields on a rural Florida ranch
        image: "/images/cities/1464226184884-fa280b87c399.jpg",
      },
      {
        name: "Sunrise",
        slug: "sunrise",
        // Warm South Florida sunrise over a suburban neighborhood
        image: "/images/cities/1477959858617-67f85cf4f1df.jpg",
      },
      {
        name: "Tamarac",
        slug: "tamarac",
        // Sunny suburban South Florida home — Tamarac is a mature planned community
        image: "/images/cities/1489824904134-891ab64532f1.jpg",
      },
      {
        name: "West Park",
        slug: "west-park",
        // Suburban South Florida residential street
        image: "/images/cities/1448630360428-65456885c650.jpg",
      },
      {
        name: "Weston",
        slug: "weston",
        // Upscale lakeside suburban community — Weston is a master-planned city with beautiful lakes
        image: "/images/cities/1559494007-9f5847c49d94.jpg",
      },
      {
        name: "Wilton Manors",
        slug: "wilton-manors",
        // Colorful vibrant street scene — Wilton Manors is known for its lively Wilton Drive
        image: "/images/cities/1555396273-367ea4eb4db5.jpg",
      },
    ],
  },
  {
    name: "Miami-Dade County",
    slug: "miami-dade-county",
    // Miami skyline — city high-rises reflected across Biscayne Bay
    image: "/images/cities/1535498730771-e735b998cd64.jpg",
    description:
      "The Roof Store serves all of Miami-Dade County, FL with professional rubber roof coating, tile restoration, and weatherproofing. From Miami Beach to Homestead, our A+ BBB-rated team protects South Florida homes from the elements.",
    cities: [
      {
        name: "Aventura",
        slug: "aventura",
        // Miami skyline glowing along the water at night
        image: "/images/cities/1530686577637-0ccce382b327.jpg",
      },
      {
        name: "Bal Harbour",
        slug: "bal-harbour",
        // Aerial photography of South Florida beachside buildings
        image: "/images/cities/1562517634-baa2da3acfbf.jpg",
      },
      {
        name: "Bay Harbor Islands",
        slug: "bay-harbor-islands",
        // South Beach street scene at night
        image: "/images/cities/1533106497176-45ae19e68ba2.jpg",
      },
      {
        name: "Biscayne Park",
        slug: "biscayne-park",
        // Quiet residential neighborhood — Biscayne Park is a small historic village
        image: "/images/cities/1568605114967-8130f3a36994.jpg",
      },
      {
        name: "Coral Gables",
        slug: "coral-gables",
        // Silhouette of tropical palms at golden hour near the water
        image: "/images/cities/1605723517503-3cadb5818a0c.jpg",
      },
      {
        name: "Cutler Bay",
        slug: "cutler-bay",
        // Sunny suburban South Florida street — Cutler Bay is a planned community in south Miami-Dade
        image: "/images/cities/1560518883-ce09059eeffa.jpg",
      },
      {
        name: "Doral",
        slug: "doral",
        // Modern corporate office park — Doral is home to business campuses and new construction
        image: "/images/cities/1486325212027-8081e485255e.jpg",
      },
      {
        name: "El Portal",
        slug: "el-portal",
        // Lush green tree canopy over a quiet residential street
        image: "/images/cities/1416339306562-f3d12fefd36f.jpg",
      },
      {
        name: "Florida City",
        slug: "florida-city",
        // Aerial view of tropical South Florida landscape — Florida City is the gateway to the Everglades
        image: "/images/cities/1501854140801-50d01698950b.jpg",
      },
      {
        name: "Golden Beach",
        slug: "golden-beach",
        // Miami Beach barrier island from the water
        image: "/images/cities/1512936702668-1ab037aced2a.jpg",
      },
      {
        name: "Hialeah",
        slug: "hialeah",
        // Colorful Latin neighborhood street — Hialeah is the heart of Cuban-American South Florida
        image: "/images/cities/1545324418-cc1a3fa10c00.jpg",
      },
      {
        name: "Hialeah Gardens",
        slug: "hialeah-gardens",
        // Suburban South Florida residential area
        image: "/images/cities/1564013799919-ab600027ffc6.jpg",
      },
      {
        name: "Homestead",
        slug: "homestead",
        // Lush tropical farmland — Homestead is surrounded by fruit groves and tropical agriculture
        image: "/images/cities/1574169208507-84376144848b.jpg",
      },
      {
        name: "Indian Creek Village",
        slug: "indian-creek-village",
        // Tropical palms beside a South Florida building
        image: "/images/cities/1514214246283-d427a95c5d2f.jpg",
      },
      {
        name: "Islandia",
        slug: "islandia",
        // Aerial view of the Overseas Highway threading through ocean — evokes the isolated island
        image: "/images/cities/1740990556921-6131d2a9d16c.jpg",
      },
      {
        name: "Key Biscayne",
        slug: "key-biscayne",
        // Tropical coastal waters
        image: "/images/cities/1548574505-5e239809ee19.jpg",
      },
      {
        name: "Medley",
        slug: "medley",
        // Industrial suburban warehouse area — Medley is a small industrial municipality
        image: "/images/cities/1558618666-fcd25c85cd64.jpg",
      },
      {
        name: "Miami",
        slug: "miami",
        // Low-angle view of Miami high-rise towers
        image: "/images/cities/1597535973747-951442d5dbc7.jpg",
      },
      {
        name: "Miami Beach",
        slug: "miami-beach",
        // Aerial view of Miami Beach cityscape and the Atlantic
        image: "/images/cities/1589083130544-0d6a2926e519.jpg",
      },
      {
        name: "Miami Gardens",
        slug: "miami-gardens",
        // Suburban South Florida neighborhood
        image: "/images/cities/1558618666-fcd25c85cd64.jpg",
      },
      {
        name: "Miami Lakes",
        slug: "miami-lakes",
        // Tranquil lake in a planned suburban community — Miami Lakes is built around its namesake lakes
        image: "/images/cities/1507003211169-0a1dd7228f2d.jpg",
      },
      {
        name: "Miami Shores",
        slug: "miami-shores",
        // Quiet upscale residential street — Miami Shores has charming Art Deco homes
        image: "/images/cities/1625602812206-5ec545ca1231.jpg",
      },
      {
        name: "Miami Springs",
        slug: "miami-springs",
        // Suburban South Florida home with lush landscaping
        image: "/images/cities/1570129477492-45c003edd2be.jpg",
      },
      {
        name: "North Bay Village",
        slug: "north-bay-village",
        // Aerial of Miami Beach skyline and coastline
        image: "/images/cities/1754269675202-6fb0016d9f21.jpg",
      },
      {
        name: "North Miami",
        slug: "north-miami",
        // Urban suburban South Florida neighborhood
        image: "/images/cities/1583608205776-bfd35f0d9f83.jpg",
      },
      {
        name: "North Miami Beach",
        slug: "north-miami-beach",
        // Miami area skyline from the bay
        image: "/images/cities/1506966953602-c20cc11f75e3.jpg",
      },
      {
        name: "Opa-locka",
        slug: "opa-locka",
        // Colorful urban neighborhood — Opa-locka is famous for its unique Moorish Revival architecture
        image: "/images/cities/1477959858617-67f85cf4f1df.jpg",
      },
      {
        name: "Palmetto Bay",
        slug: "palmetto-bay",
        // Lush tropical residential neighborhood in south Miami-Dade
        image: "/images/cities/1501594907352-04cda38ebc29.jpg",
      },
      {
        name: "Pinecrest",
        slug: "pinecrest",
        // Upscale South Florida home — Pinecrest is one of Miami-Dade's most desirable suburbs
        image: "/images/cities/1560185007-5f0bb1866cab.jpg",
      },
      {
        name: "South Miami",
        slug: "south-miami",
        // Charming walkable South Florida village streetscape
        image: "/images/cities/1448630360428-65456885c650.jpg",
      },
      {
        name: "Sunny Isles Beach",
        slug: "sunny-isles-beach",
        // Tropical beach at golden sunset
        image: "/images/cities/1669639785616-3353f0f11de7.jpg",
      },
      {
        name: "Surfside",
        slug: "surfside",
        // Body of water under a wide blue Florida sky
        image: "/images/cities/1628651102070-2df2c7d93f51.jpg",
      },
      {
        name: "Sweetwater",
        slug: "sweetwater",
        // Urban South Florida neighborhood — Sweetwater has a strong Nicaraguan-American community
        image: "/images/cities/1489824904134-891ab64532f1.jpg",
      },
      {
        name: "Virginia Gardens",
        slug: "virginia-gardens",
        // Small quiet South Florida residential neighborhood
        image: "/images/cities/1568605114967-8130f3a36994.jpg",
      },
      {
        name: "West Miami",
        slug: "west-miami",
        // Suburban South Florida residential street
        image: "/images/cities/1560518883-ce09059eeffa.jpg",
      },
    ],
  },
  {
    name: "Palm Beach County",
    slug: "palm-beach-county",
    // West Palm Beach waterfront — city, river, and bridge at night
    image: "/images/cities/1664829018245-04b94e17b8aa.jpg",
    description:
      "From Boca Raton to Jupiter, The Roof Store serves all of Palm Beach County with our rubber roof coating and tile restoration systems. Protecting Palm Beach County homes from Florida's harsh climate since 1994.",
    cities: [
      {
        name: "Atlantis",
        slug: "atlantis",
        // Serene lake with dock — Atlantis is a small private city built around a golf course and lake
        image: "/images/cities/1559494007-9f5847c49d94.jpg",
      },
      {
        name: "Belle Glade",
        slug: "belle-glade",
        // Vast farm fields glowing at sunrise — Belle Glade is surrounded by sugarcane and vegetable farms
        image: "/images/cities/1500382017468-9049fed747ef.jpg",
      },
      {
        name: "Boca Raton",
        slug: "boca-raton",
        // Aerial view of Boca Raton beach and the Atlantic Ocean
        image: "/images/cities/1738654942907-e79039dc247f.jpg",
      },
      {
        name: "Boynton Beach",
        slug: "boynton-beach",
        // Waterfront pier with people — South Florida coastal
        image: "/images/cities/1649357675339-53af4a244a0a.jpg",
      },
      {
        name: "Briny Breezes",
        slug: "briny-breezes",
        // People enjoying a South Florida beach
        image: "/images/cities/1587584398227-7920a80b30dc.jpg",
      },
      {
        name: "Cloud Lake",
        slug: "cloud-lake",
        // Reflective lake under a dramatic sky — Cloud Lake is a tiny residential lake community
        image: "/images/cities/1507003211169-0a1dd7228f2d.jpg",
      },
      {
        name: "Delray Beach",
        slug: "delray-beach",
        // Tropical palms — evokes Delray's lush Atlantic Ave
        image: "/images/cities/1524594081293-190a2fe0baae.jpg",
      },
      {
        name: "Glen Ridge",
        slug: "glen-ridge",
        // Quiet suburban South Florida residential street
        image: "/images/cities/1570129477492-45c003edd2be.jpg",
      },
      {
        name: "Golfview",
        slug: "golfview",
        // Lush green rolling landscape — Golfview is a small enclave beside a golf course
        image: "/images/cities/1501594907352-04cda38ebc29.jpg",
      },
      {
        name: "Greenacres",
        slug: "greenacres",
        // Green suburban neighborhood — Greenacres is a family-friendly city in central Palm Beach County
        image: "/images/cities/1583608205776-bfd35f0d9f83.jpg",
      },
      {
        name: "Gulf Stream",
        slug: "gulf-stream",
        // Coconut palm at the water's edge
        image: "/images/cities/1513907404652-d138942b8859.jpg",
      },
      {
        name: "Haverhill",
        slug: "haverhill",
        // Suburban South Florida residential street
        image: "/images/cities/1448630360428-65456885c650.jpg",
      },
      {
        name: "Highland Beach",
        slug: "highland-beach",
        // Canoe resting near a tropical palm — serene South FL coastal
        image: "/images/cities/1520520731457-9283dd14aa66.jpg",
      },
      {
        name: "Hypoluxo",
        slug: "hypoluxo",
        // Coastal waterway — Hypoluxo sits on the Intracoastal Waterway
        image: "/images/cities/1544665215-3871472514fa.jpg",
      },
      {
        name: "Juno Beach",
        slug: "juno-beach",
        // Coastal lighthouse — fitting for this quiet beach town
        image: "/images/cities/1576123300830-fe145f281d12.jpg",
      },
      {
        name: "Jupiter",
        slug: "jupiter",
        // Tropical coastal inlet waters
        image: "/images/cities/1548574505-5e239809ee19.jpg",
      },
      {
        name: "Jupiter Inlet Colony",
        slug: "jupiter-inlet-colony",
        // Tropical coastal inlet — adjacent to Jupiter Inlet
        image: "/images/cities/1548574505-5e239809ee19.jpg",
      },
      {
        name: "Lake Clarke Shores",
        slug: "lake-clarke-shores",
        // Calm lake with lush greenery — Lake Clarke Shores wraps around Clarke Lake
        image: "/images/cities/1559494007-9f5847c49d94.jpg",
      },
      {
        name: "Lake Park",
        slug: "lake-park",
        // Lakeside park setting — Lake Park is a historic small town on the Intracoastal
        image: "/images/cities/1416339306562-f3d12fefd36f.jpg",
      },
      {
        name: "Lake Worth Beach",
        slug: "lake-worth-beach",
        // White boat docked in a South Florida marina
        image: "/images/cities/1544665215-3871472514fa.jpg",
      },
      {
        name: "Lantana",
        slug: "lantana",
        // Coastal waterfront — Lantana sits on the Atlantic coast
        image: "/images/cities/1563714104487-2d992b91aeb9.jpg",
      },
      {
        name: "Loxahatchee Groves",
        slug: "loxahatchee-groves",
        // Horses in a green field — Loxahatchee Groves is a rural equestrian community
        image: "/images/cities/1553284965-83fd3e82fa5a.jpg",
      },
      {
        name: "Manalapan",
        slug: "manalapan",
        // Palm trees lining a sun-drenched beach sidewalk
        image: "/images/cities/1692678813200-d746a746bf07.jpg",
      },
      {
        name: "Mangonia Park",
        slug: "mangonia-park",
        // Suburban South Florida residential area
        image: "/images/cities/1560518883-ce09059eeffa.jpg",
      },
      {
        name: "North Palm Beach",
        slug: "north-palm-beach",
        // Roses and city buildings reflected in the Intracoastal — WPB waterfront
        image: "/images/cities/1584677488802-c080664c7c45.jpg",
      },
      {
        name: "Ocean Ridge",
        slug: "ocean-ridge",
        // Coastal aerial of barrier island — South Florida ocean ridge
        image: "/images/cities/1512936702668-1ab037aced2a.jpg",
      },
      {
        name: "Pahokee",
        slug: "pahokee",
        // Farm fields at golden hour — Pahokee is an agricultural town on Lake Okeechobee
        image: "/images/cities/1464226184884-fa280b87c399.jpg",
      },
      {
        name: "Palm Beach",
        slug: "palm-beach",
        // Night lights and Palm Beach-area architecture
        image: "/images/cities/1576124907498-5c384cd85616.jpg",
      },
      {
        name: "Palm Beach Gardens",
        slug: "palm-beach-gardens",
        // Water fountain in a South Florida park — lush suburban Palm Beach County
        image: "/images/cities/1576124908098-b386317d160f.jpg",
      },
      {
        name: "Palm Beach Shores",
        slug: "palm-beach-shores",
        // Tropical beach at golden hour sunset
        image: "/images/cities/1669639785616-3353f0f11de7.jpg",
      },
      {
        name: "Palm Springs",
        slug: "palm-springs",
        // Suburban South Florida neighborhood street
        image: "/images/cities/1558618666-fcd25c85cd64.jpg",
      },
      {
        name: "Riviera Beach",
        slug: "riviera-beach",
        // Golden hour at the beach — South Florida barrier coast
        image: "/images/cities/1573220983618-156ea86f9c17.jpg",
      },
      {
        name: "Royal Palm Beach",
        slug: "royal-palm-beach",
        // Aerial planned suburban neighborhood — Royal Palm Beach is a large planned community
        image: "/images/cities/1558618666-fcd25c85cd64.jpg",
      },
      {
        name: "South Bay",
        slug: "south-bay",
        // Expansive farm fields — South Bay sits on the southern shore of Lake Okeechobee
        image: "/images/cities/1500076656116-558758c991c1.jpg",
      },
      {
        name: "South Palm Beach",
        slug: "south-palm-beach",
        // Florida coastal sky and sea at golden hour
        image: "/images/cities/1563714104487-2d992b91aeb9.jpg",
      },
      {
        name: "Tequesta",
        slug: "tequesta",
        // Tropical coastal waters — northern Palm Beach county inlet
        image: "/images/cities/1548574505-5e239809ee19.jpg",
      },
      {
        name: "Wellington",
        slug: "wellington",
        // Polo horses galloping on a green field — Wellington is the polo capital of the world
        image: "/images/cities/1553284965-83fd3e82fa5a.jpg",
      },
      {
        name: "West Palm Beach",
        slug: "west-palm-beach",
        // West Palm Beach waterfront with city buildings and Intracoastal
        image: "/images/cities/1584677488802-c080664c7c45.jpg",
      },
      {
        name: "Westlake",
        slug: "westlake",
        // New master-planned suburban community — Westlake is one of Florida's newest incorporated cities
        image: "/images/cities/1625602812206-5ec545ca1231.jpg",
      },
    ],
  },
  {
    name: "Monroe County",
    slug: "monroe-county",
    // Aerial island view — Florida Keys from above, turquoise water all around
    image: "/images/cities/1519500900873-696f4e3171de.jpg",
    description:
      "The Roof Store extends service to Monroe County, FL — protecting Keys homes from the harshest marine climate in Florida. Our rubber roof coating systems are engineered for salt air, high humidity, and hurricane-force wind exposure.",
    cities: [
      {
        name: "Key West",
        slug: "key-west",
        // Sailboat at sea near the Key West shoreline — iconic Florida Keys scene
        image: "/images/cities/1531429957-9e7c26e39c84.jpg",
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
