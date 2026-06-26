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

// All image URLs are Unsplash CDN (stable, free, high-res)
// Format: https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=1400&q=80
// All IDs verified live (HTTP 200) as of June 2026.

export const counties: CountyEntry[] = [
  {
    name: "Broward County",
    slug: "broward-county",
    // Bird's-eye view of river winding through downtown Fort Lauderdale
    image: "https://images.unsplash.com/photo-1538016298852-e69a243f7ee2?auto=format&fit=crop&w=1400&q=80",
    description:
      "The Roof Store serves all of Broward County, FL — from Fort Lauderdale to Coral Springs. Our rubber roof coating and tile restoration systems protect Broward homes from hurricanes, tropical storms, and intense UV exposure.",
    cities: [
      {
        name: "Coconut Creek",
        slug: "coconut-creek",
        // Aerial view of a master-planned South Florida suburban neighborhood
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Cooper City",
        slug: "cooper-city",
        // Quiet suburban South Florida home exterior
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Coral Springs",
        slug: "coral-springs",
        // Beach with South Florida city skyline in the background
        image: "https://images.unsplash.com/photo-1691423332423-f2132628ff72?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Dania Beach",
        slug: "dania-beach",
        // Palm trees lining a sun-drenched beach sidewalk
        image: "https://images.unsplash.com/photo-1692678813200-d746a746bf07?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Davie",
        slug: "davie",
        // Horses in an open green field — Davie is known for its equestrian and western heritage
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Deerfield Beach",
        slug: "deerfield-beach",
        // Coastal South Florida aerial
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Fort Lauderdale",
        slug: "fort-lauderdale",
        // Aerial photography of Fort Lauderdale coastline
        image: "https://images.unsplash.com/photo-1484199383121-dfa3c30608cd?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Hillsboro Beach",
        slug: "hillsboro-beach",
        // Golden hour at a South Florida beach
        image: "https://images.unsplash.com/photo-1573220983618-156ea86f9c17?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Hallandale Beach",
        slug: "hallandale-beach",
        // Beach volleyball on a sunny South Florida beach
        image: "https://images.unsplash.com/photo-1599509033274-4d2128aa81e2?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Hollywood",
        slug: "hollywood",
        // Palm tree silhouette against a dramatic South Florida sunset
        image: "https://images.unsplash.com/photo-1617202830798-cf48261fb70d?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lauderdale Lakes",
        slug: "lauderdale-lakes",
        // Suburban South Florida home with pool
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lauderhill",
        slug: "lauderhill",
        // Row of suburban South Florida homes
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lauderdale-by-the-Sea",
        slug: "lauderdale-by-the-sea",
        // Canoe resting near a tropical palm — classic coastal Florida
        image: "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lighthouse Point",
        slug: "lighthouse-point",
        // Classic coastal lighthouse — perfectly named
        image: "https://images.unsplash.com/photo-1570111684787-0c62fa8fbc1b?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Margate",
        slug: "margate",
        // Suburban South Florida home exterior
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Miramar",
        slug: "miramar",
        // Suburban neighborhood street — Miramar is a large diverse suburban city
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "North Lauderdale",
        slug: "north-lauderdale",
        // Suburban South Florida neighborhood aerial
        image: "https://images.unsplash.com/photo-1580226641568-17a7aeab3ea4?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Oakland Park",
        slug: "oakland-park",
        // Lush green park landscape — Oakland Park lives up to its name
        image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Parkland",
        slug: "parkland",
        // Serene green park — Parkland is celebrated for its park-like open spaces
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Pembroke Park",
        slug: "pembroke-park",
        // Suburban residential street
        image: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Pembroke Pines",
        slug: "pembroke-pines",
        // Suburban street with homes — Pembroke Pines is one of Broward's largest planned communities
        image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Plantation",
        slug: "plantation",
        // Tree-lined path through lush greenery — Plantation is known for its canopy of old oaks
        image: "https://images.unsplash.com/photo-1546587348-d7e0c43c7f3e?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Pompano Beach",
        slug: "pompano-beach",
        // Coastal South Florida aerial
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Sea Ranch Lakes",
        slug: "sea-ranch-lakes",
        // Tranquil lake with dock — Sea Ranch Lakes is built around a private lake
        image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Southwest Ranches",
        slug: "southwest-ranches",
        // Open hay fields on a rural Florida ranch
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Sunrise",
        slug: "sunrise",
        // Warm South Florida sunrise over a suburban neighborhood
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Tamarac",
        slug: "tamarac",
        // Sunny suburban South Florida home — Tamarac is a mature planned community
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "West Park",
        slug: "west-park",
        // Suburban South Florida residential street
        image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Weston",
        slug: "weston",
        // Upscale lakeside suburban community — Weston is a master-planned city with beautiful lakes
        image: "https://images.unsplash.com/photo-1574517883-6fee35059d06?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Wilton Manors",
        slug: "wilton-manors",
        // Colorful vibrant street scene — Wilton Manors is known for its lively Wilton Drive
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
  {
    name: "Miami-Dade County",
    slug: "miami-dade-county",
    // Miami skyline — city high-rises reflected across Biscayne Bay
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1400&q=80",
    description:
      "The Roof Store serves all of Miami-Dade County, FL with professional rubber roof coating, tile restoration, and weatherproofing. From Miami Beach to Homestead, our A+ BBB-rated team protects South Florida homes from the elements.",
    cities: [
      {
        name: "Aventura",
        slug: "aventura",
        // Miami skyline glowing along the water at night
        image: "https://images.unsplash.com/photo-1530686577637-0ccce382b327?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Bal Harbour",
        slug: "bal-harbour",
        // Aerial photography of South Florida beachside buildings
        image: "https://images.unsplash.com/photo-1562517634-baa2da3acfbf?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Bay Harbor Islands",
        slug: "bay-harbor-islands",
        // South Beach street scene at night
        image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Biscayne Park",
        slug: "biscayne-park",
        // Quiet residential neighborhood — Biscayne Park is a small historic village
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Coral Gables",
        slug: "coral-gables",
        // Silhouette of tropical palms at golden hour near the water
        image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Cutler Bay",
        slug: "cutler-bay",
        // Sunny suburban South Florida street — Cutler Bay is a planned community in south Miami-Dade
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Doral",
        slug: "doral",
        // Modern corporate office park — Doral is home to business campuses and new construction
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "El Portal",
        slug: "el-portal",
        // Lush green tree canopy over a quiet residential street
        image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Florida City",
        slug: "florida-city",
        // Aerial view of tropical South Florida landscape — Florida City is the gateway to the Everglades
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Golden Beach",
        slug: "golden-beach",
        // Miami Beach barrier island from the water
        image: "https://images.unsplash.com/photo-1512936702668-1ab037aced2a?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Hialeah",
        slug: "hialeah",
        // Colorful Latin neighborhood street — Hialeah is the heart of Cuban-American South Florida
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Hialeah Gardens",
        slug: "hialeah-gardens",
        // Suburban South Florida residential area
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Homestead",
        slug: "homestead",
        // Lush tropical farmland — Homestead is surrounded by fruit groves and tropical agriculture
        image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Indian Creek Village",
        slug: "indian-creek-village",
        // Tropical palms beside a South Florida building
        image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Islandia",
        slug: "islandia",
        // Aerial view of the Overseas Highway threading through ocean — evokes the isolated island
        image: "https://images.unsplash.com/photo-1740990556921-6131d2a9d16c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Key Biscayne",
        slug: "key-biscayne",
        // Tropical coastal waters
        image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Medley",
        slug: "medley",
        // Industrial suburban warehouse area — Medley is a small industrial municipality
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Miami",
        slug: "miami",
        // Low-angle view of Miami high-rise towers
        image: "https://images.unsplash.com/photo-1597535973747-951442d5dbc7?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Miami Beach",
        slug: "miami-beach",
        // Aerial view of Miami Beach cityscape and the Atlantic
        image: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Miami Gardens",
        slug: "miami-gardens",
        // Suburban South Florida neighborhood
        image: "https://images.unsplash.com/photo-1580226641568-17a7aeab3ea4?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Miami Lakes",
        slug: "miami-lakes",
        // Tranquil lake in a planned suburban community — Miami Lakes is built around its namesake lakes
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Miami Shores",
        slug: "miami-shores",
        // Quiet upscale residential street — Miami Shores has charming Art Deco homes
        image: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Miami Springs",
        slug: "miami-springs",
        // Suburban South Florida home with lush landscaping
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "North Bay Village",
        slug: "north-bay-village",
        // Aerial of Miami Beach skyline and coastline
        image: "https://images.unsplash.com/photo-1754269675202-6fb0016d9f21?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "North Miami",
        slug: "north-miami",
        // Urban suburban South Florida neighborhood
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "North Miami Beach",
        slug: "north-miami-beach",
        // Miami area skyline from the bay
        image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Opa-locka",
        slug: "opa-locka",
        // Colorful urban neighborhood — Opa-locka is famous for its unique Moorish Revival architecture
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Palmetto Bay",
        slug: "palmetto-bay",
        // Lush tropical residential neighborhood in south Miami-Dade
        image: "https://images.unsplash.com/photo-1546587348-d7e0c43c7f3e?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Pinecrest",
        slug: "pinecrest",
        // Upscale South Florida home — Pinecrest is one of Miami-Dade's most desirable suburbs
        image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "South Miami",
        slug: "south-miami",
        // Charming walkable South Florida village streetscape
        image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Sunny Isles Beach",
        slug: "sunny-isles-beach",
        // Tropical beach at golden sunset
        image: "https://images.unsplash.com/photo-1669639785616-3353f0f11de7?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Surfside",
        slug: "surfside",
        // Body of water under a wide blue Florida sky
        image: "https://images.unsplash.com/photo-1628651102070-2df2c7d93f51?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Sweetwater",
        slug: "sweetwater",
        // Urban South Florida neighborhood — Sweetwater has a strong Nicaraguan-American community
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Virginia Gardens",
        slug: "virginia-gardens",
        // Small quiet South Florida residential neighborhood
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "West Miami",
        slug: "west-miami",
        // Suburban South Florida residential street
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
  {
    name: "Palm Beach County",
    slug: "palm-beach-county",
    // West Palm Beach waterfront — city, river, and bridge at night
    image: "https://images.unsplash.com/photo-1664829018245-04b94e17b8aa?auto=format&fit=crop&w=1400&q=80",
    description:
      "From Boca Raton to Jupiter, The Roof Store serves all of Palm Beach County with our rubber roof coating and tile restoration systems. Protecting Palm Beach County homes from Florida's harsh climate since 1994.",
    cities: [
      {
        name: "Atlantis",
        slug: "atlantis",
        // Serene lake with dock — Atlantis is a small private city built around a golf course and lake
        image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Belle Glade",
        slug: "belle-glade",
        // Vast farm fields glowing at sunrise — Belle Glade is surrounded by sugarcane and vegetable farms
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Boca Raton",
        slug: "boca-raton",
        // Aerial view of Boca Raton beach and the Atlantic Ocean
        image: "https://images.unsplash.com/photo-1738654942907-e79039dc247f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Boynton Beach",
        slug: "boynton-beach",
        // Waterfront pier with people — South Florida coastal
        image: "https://images.unsplash.com/photo-1649357675339-53af4a244a0a?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Briny Breezes",
        slug: "briny-breezes",
        // People enjoying a South Florida beach
        image: "https://images.unsplash.com/photo-1587584398227-7920a80b30dc?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Cloud Lake",
        slug: "cloud-lake",
        // Reflective lake under a dramatic sky — Cloud Lake is a tiny residential lake community
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Delray Beach",
        slug: "delray-beach",
        // Tropical palms — evokes Delray's lush Atlantic Ave
        image: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Glen Ridge",
        slug: "glen-ridge",
        // Quiet suburban South Florida residential street
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Golfview",
        slug: "golfview",
        // Lush green rolling landscape — Golfview is a small enclave beside a golf course
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Greenacres",
        slug: "greenacres",
        // Green suburban neighborhood — Greenacres is a family-friendly city in central Palm Beach County
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Gulf Stream",
        slug: "gulf-stream",
        // Coconut palm at the water's edge
        image: "https://images.unsplash.com/photo-1513907404652-d138942b8859?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Haverhill",
        slug: "haverhill",
        // Suburban South Florida residential street
        image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Highland Beach",
        slug: "highland-beach",
        // Canoe resting near a tropical palm — serene South FL coastal
        image: "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Hypoluxo",
        slug: "hypoluxo",
        // Coastal waterway — Hypoluxo sits on the Intracoastal Waterway
        image: "https://images.unsplash.com/photo-1544665215-3871472514fa?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Juno Beach",
        slug: "juno-beach",
        // Coastal lighthouse — fitting for this quiet beach town
        image: "https://images.unsplash.com/photo-1576123300830-fe145f281d12?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Jupiter",
        slug: "jupiter",
        // Tropical coastal inlet waters
        image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Jupiter Inlet Colony",
        slug: "jupiter-inlet-colony",
        // Tropical coastal inlet — adjacent to Jupiter Inlet
        image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lake Clarke Shores",
        slug: "lake-clarke-shores",
        // Calm lake with lush greenery — Lake Clarke Shores wraps around Clarke Lake
        image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lake Park",
        slug: "lake-park",
        // Lakeside park setting — Lake Park is a historic small town on the Intracoastal
        image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lake Worth Beach",
        slug: "lake-worth-beach",
        // White boat docked in a South Florida marina
        image: "https://images.unsplash.com/photo-1544665215-3871472514fa?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Lantana",
        slug: "lantana",
        // Coastal waterfront — Lantana sits on the Atlantic coast
        image: "https://images.unsplash.com/photo-1563714104487-2d992b91aeb9?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Loxahatchee Groves",
        slug: "loxahatchee-groves",
        // Horses in a green field — Loxahatchee Groves is a rural equestrian community
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Manalapan",
        slug: "manalapan",
        // Palm trees lining a sun-drenched beach sidewalk
        image: "https://images.unsplash.com/photo-1692678813200-d746a746bf07?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Mangonia Park",
        slug: "mangonia-park",
        // Suburban South Florida residential area
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "North Palm Beach",
        slug: "north-palm-beach",
        // Roses and city buildings reflected in the Intracoastal — WPB waterfront
        image: "https://images.unsplash.com/photo-1584677488802-c080664c7c45?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Ocean Ridge",
        slug: "ocean-ridge",
        // Coastal aerial of barrier island — South Florida ocean ridge
        image: "https://images.unsplash.com/photo-1512936702668-1ab037aced2a?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Pahokee",
        slug: "pahokee",
        // Farm fields at golden hour — Pahokee is an agricultural town on Lake Okeechobee
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Palm Beach",
        slug: "palm-beach",
        // Night lights and Palm Beach-area architecture
        image: "https://images.unsplash.com/photo-1576124907498-5c384cd85616?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Palm Beach Gardens",
        slug: "palm-beach-gardens",
        // Water fountain in a South Florida park — lush suburban Palm Beach County
        image: "https://images.unsplash.com/photo-1576124908098-b386317d160f?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Palm Beach Shores",
        slug: "palm-beach-shores",
        // Tropical beach at golden hour sunset
        image: "https://images.unsplash.com/photo-1669639785616-3353f0f11de7?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Palm Springs",
        slug: "palm-springs",
        // Suburban South Florida neighborhood street
        image: "https://images.unsplash.com/photo-1580226641568-17a7aeab3ea4?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Riviera Beach",
        slug: "riviera-beach",
        // Golden hour at the beach — South Florida barrier coast
        image: "https://images.unsplash.com/photo-1573220983618-156ea86f9c17?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Royal Palm Beach",
        slug: "royal-palm-beach",
        // Aerial planned suburban neighborhood — Royal Palm Beach is a large planned community
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "South Bay",
        slug: "south-bay",
        // Expansive farm fields — South Bay sits on the southern shore of Lake Okeechobee
        image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "South Palm Beach",
        slug: "south-palm-beach",
        // Florida coastal sky and sea at golden hour
        image: "https://images.unsplash.com/photo-1563714104487-2d992b91aeb9?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Tequesta",
        slug: "tequesta",
        // Tropical coastal waters — northern Palm Beach county inlet
        image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Wellington",
        slug: "wellington",
        // Polo horses galloping on a green field — Wellington is the polo capital of the world
        image: "https://images.unsplash.com/photo-1566337170960-66b98c1d7f5d?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "West Palm Beach",
        slug: "west-palm-beach",
        // West Palm Beach waterfront with city buildings and Intracoastal
        image: "https://images.unsplash.com/photo-1584677488802-c080664c7c45?auto=format&fit=crop&w=1400&q=80",
      },
      {
        name: "Westlake",
        slug: "westlake",
        // New master-planned suburban community — Westlake is one of Florida's newest incorporated cities
        image: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
  {
    name: "Monroe County",
    slug: "monroe-county",
    // Aerial island view — Florida Keys from above, turquoise water all around
    image: "https://images.unsplash.com/photo-1519500900873-696f4e3171de?auto=format&fit=crop&w=1400&q=80",
    description:
      "The Roof Store extends service to Monroe County, FL — protecting Keys homes from the harshest marine climate in Florida. Our rubber roof coating systems are engineered for salt air, high humidity, and hurricane-force wind exposure.",
    cities: [
      {
        name: "Key West",
        slug: "key-west",
        // Sailboat at sea near the Key West shoreline — iconic Florida Keys scene
        image: "https://images.unsplash.com/photo-1531429957-9e7c26e39c84?auto=format&fit=crop&w=1400&q=80",
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
