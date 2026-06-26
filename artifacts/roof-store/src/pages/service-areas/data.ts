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
      { name: "Coconut Creek", slug: "coconut-creek" },
      { name: "Cooper City", slug: "cooper-city" },
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
      { name: "Davie", slug: "davie" },
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
      { name: "Lauderdale Lakes", slug: "lauderdale-lakes" },
      { name: "Lauderhill", slug: "lauderhill" },
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
      { name: "Margate", slug: "margate" },
      { name: "Miramar", slug: "miramar" },
      { name: "North Lauderdale", slug: "north-lauderdale" },
      { name: "Oakland Park", slug: "oakland-park" },
      { name: "Parkland", slug: "parkland" },
      { name: "Pembroke Park", slug: "pembroke-park" },
      { name: "Pembroke Pines", slug: "pembroke-pines" },
      { name: "Plantation", slug: "plantation" },
      {
        name: "Pompano Beach",
        slug: "pompano-beach",
        // Coastal South Florida aerial
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Sea Ranch Lakes", slug: "sea-ranch-lakes" },
      { name: "Southwest Ranches", slug: "southwest-ranches" },
      { name: "Sunrise", slug: "sunrise" },
      { name: "Tamarac", slug: "tamarac" },
      { name: "West Park", slug: "west-park" },
      { name: "Weston", slug: "weston" },
      { name: "Wilton Manors", slug: "wilton-manors" },
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
      { name: "Biscayne Park", slug: "biscayne-park" },
      {
        name: "Coral Gables",
        slug: "coral-gables",
        // Silhouette of tropical palms at golden hour near the water
        image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Cutler Bay", slug: "cutler-bay" },
      { name: "Doral", slug: "doral" },
      { name: "El Portal", slug: "el-portal" },
      { name: "Florida City", slug: "florida-city" },
      {
        name: "Golden Beach",
        slug: "golden-beach",
        // Miami Beach barrier island from the water
        image: "https://images.unsplash.com/photo-1512936702668-1ab037aced2a?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Hialeah", slug: "hialeah" },
      { name: "Hialeah Gardens", slug: "hialeah-gardens" },
      { name: "Homestead", slug: "homestead" },
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
      { name: "Medley", slug: "medley" },
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
      { name: "Miami Gardens", slug: "miami-gardens" },
      { name: "Miami Lakes", slug: "miami-lakes" },
      { name: "Miami Shores", slug: "miami-shores" },
      { name: "Miami Springs", slug: "miami-springs" },
      {
        name: "North Bay Village",
        slug: "north-bay-village",
        // Aerial of Miami Beach skyline and coastline
        image: "https://images.unsplash.com/photo-1754269675202-6fb0016d9f21?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "North Miami", slug: "north-miami" },
      {
        name: "North Miami Beach",
        slug: "north-miami-beach",
        // Miami area skyline from the bay
        image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Opa-locka", slug: "opa-locka" },
      { name: "Palmetto Bay", slug: "palmetto-bay" },
      { name: "Pinecrest", slug: "pinecrest" },
      { name: "South Miami", slug: "south-miami" },
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
      { name: "Sweetwater", slug: "sweetwater" },
      { name: "Virginia Gardens", slug: "virginia-gardens" },
      { name: "West Miami", slug: "west-miami" },
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
      { name: "Atlantis", slug: "atlantis" },
      { name: "Belle Glade", slug: "belle-glade" },
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
      { name: "Cloud Lake", slug: "cloud-lake" },
      {
        name: "Delray Beach",
        slug: "delray-beach",
        // Tropical palms — evokes Delray's lush Atlantic Ave
        image: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Glen Ridge", slug: "glen-ridge" },
      { name: "Golfview", slug: "golfview" },
      { name: "Greenacres", slug: "greenacres" },
      {
        name: "Gulf Stream",
        slug: "gulf-stream",
        // Coconut palm at the water's edge
        image: "https://images.unsplash.com/photo-1513907404652-d138942b8859?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Haverhill", slug: "haverhill" },
      {
        name: "Highland Beach",
        slug: "highland-beach",
        // Canoe resting near a tropical palm — serene South FL coastal
        image: "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Hypoluxo", slug: "hypoluxo" },
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
      { name: "Lake Clarke Shores", slug: "lake-clarke-shores" },
      { name: "Lake Park", slug: "lake-park" },
      {
        name: "Lake Worth Beach",
        slug: "lake-worth-beach",
        // White boat docked in a South Florida marina
        image: "https://images.unsplash.com/photo-1544665215-3871472514fa?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Lantana", slug: "lantana" },
      { name: "Loxahatchee Groves", slug: "loxahatchee-groves" },
      {
        name: "Manalapan",
        slug: "manalapan",
        // Palm trees lining a sun-drenched beach sidewalk
        image: "https://images.unsplash.com/photo-1692678813200-d746a746bf07?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Mangonia Park", slug: "mangonia-park" },
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
      { name: "Pahokee", slug: "pahokee" },
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
      { name: "Palm Springs", slug: "palm-springs" },
      {
        name: "Riviera Beach",
        slug: "riviera-beach",
        // Golden hour at the beach — South Florida barrier coast
        image: "https://images.unsplash.com/photo-1573220983618-156ea86f9c17?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Royal Palm Beach", slug: "royal-palm-beach" },
      { name: "South Bay", slug: "south-bay" },
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
      { name: "Wellington", slug: "wellington" },
      {
        name: "West Palm Beach",
        slug: "west-palm-beach",
        // West Palm Beach waterfront with city buildings and Intracoastal
        image: "https://images.unsplash.com/photo-1584677488802-c080664c7c45?auto=format&fit=crop&w=1400&q=80",
      },
      { name: "Westlake", slug: "westlake" },
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
