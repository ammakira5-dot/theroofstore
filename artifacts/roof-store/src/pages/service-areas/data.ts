export interface CityEntry {
  name: string;
  slug: string;
}

export interface CountyEntry {
  name: string;
  slug: string;
  description: string;
  cities: CityEntry[];
}

export const counties: CountyEntry[] = [
  {
    name: "Broward County",
    slug: "broward-county",
    description:
      "The Roof Store serves all of Broward County, FL — from Fort Lauderdale to Coral Springs. Our rubber roof coating and tile restoration systems protect Broward homes from hurricanes, tropical storms, and intense UV exposure.",
    cities: [
      { name: "Coconut Creek", slug: "coconut-creek" },
      { name: "Cooper City", slug: "cooper-city" },
      { name: "Coral Springs", slug: "coral-springs" },
      { name: "Dania Beach", slug: "dania-beach" },
      { name: "Davie", slug: "davie" },
      { name: "Deerfield Beach", slug: "deerfield-beach" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale" },
      { name: "Hillsboro Beach", slug: "hillsboro-beach" },
      { name: "Hallandale Beach", slug: "hallandale-beach" },
      { name: "Hollywood", slug: "hollywood" },
      { name: "Lauderdale Lakes", slug: "lauderdale-lakes" },
      { name: "Lauderhill", slug: "lauderhill" },
      { name: "Lauderdale-by-the-Sea", slug: "lauderdale-by-the-sea" },
      { name: "Lighthouse Point", slug: "lighthouse-point" },
      { name: "Margate", slug: "margate" },
      { name: "Miramar", slug: "miramar" },
      { name: "North Lauderdale", slug: "north-lauderdale" },
      { name: "Oakland Park", slug: "oakland-park" },
      { name: "Parkland", slug: "parkland" },
      { name: "Pembroke Park", slug: "pembroke-park" },
      { name: "Pembroke Pines", slug: "pembroke-pines" },
      { name: "Plantation", slug: "plantation" },
      { name: "Pompano Beach", slug: "pompano-beach" },
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
    description:
      "The Roof Store serves all of Miami-Dade County, FL with professional rubber roof coating, tile restoration, and weatherproofing. From Miami Beach to Homestead, our A+ BBB-rated team protects South Florida homes from the elements.",
    cities: [
      { name: "Aventura", slug: "aventura" },
      { name: "Bal Harbour", slug: "bal-harbour" },
      { name: "Bay Harbor Islands", slug: "bay-harbor-islands" },
      { name: "Biscayne Park", slug: "biscayne-park" },
      { name: "Coral Gables", slug: "coral-gables" },
      { name: "Cutler Bay", slug: "cutler-bay" },
      { name: "Doral", slug: "doral" },
      { name: "El Portal", slug: "el-portal" },
      { name: "Florida City", slug: "florida-city" },
      { name: "Golden Beach", slug: "golden-beach" },
      { name: "Hialeah", slug: "hialeah" },
      { name: "Hialeah Gardens", slug: "hialeah-gardens" },
      { name: "Homestead", slug: "homestead" },
      { name: "Indian Creek Village", slug: "indian-creek-village" },
      { name: "Islandia", slug: "islandia" },
      { name: "Key Biscayne", slug: "key-biscayne" },
      { name: "Medley", slug: "medley" },
      { name: "Miami", slug: "miami" },
      { name: "Miami Beach", slug: "miami-beach" },
      { name: "Miami Gardens", slug: "miami-gardens" },
      { name: "Miami Lakes", slug: "miami-lakes" },
      { name: "Miami Shores", slug: "miami-shores" },
      { name: "Miami Springs", slug: "miami-springs" },
      { name: "North Bay Village", slug: "north-bay-village" },
      { name: "North Miami", slug: "north-miami" },
      { name: "North Miami Beach", slug: "north-miami-beach" },
      { name: "Opa-locka", slug: "opa-locka" },
      { name: "Palmetto Bay", slug: "palmetto-bay" },
      { name: "Pinecrest", slug: "pinecrest" },
      { name: "South Miami", slug: "south-miami" },
      { name: "Sunny Isles Beach", slug: "sunny-isles-beach" },
      { name: "Surfside", slug: "surfside" },
      { name: "Sweetwater", slug: "sweetwater" },
      { name: "Virginia Gardens", slug: "virginia-gardens" },
      { name: "West Miami", slug: "west-miami" },
    ],
  },
  {
    name: "Palm Beach County",
    slug: "palm-beach-county",
    description:
      "From Boca Raton to Jupiter, The Roof Store serves all of Palm Beach County with our rubber roof coating and tile restoration systems. Protecting Palm Beach County homes from Florida's harsh climate since 1994.",
    cities: [
      { name: "Atlantis", slug: "atlantis" },
      { name: "Belle Glade", slug: "belle-glade" },
      { name: "Boca Raton", slug: "boca-raton" },
      { name: "Boynton Beach", slug: "boynton-beach" },
      { name: "Briny Breezes", slug: "briny-breezes" },
      { name: "Cloud Lake", slug: "cloud-lake" },
      { name: "Delray Beach", slug: "delray-beach" },
      { name: "Glen Ridge", slug: "glen-ridge" },
      { name: "Golfview", slug: "golfview" },
      { name: "Greenacres", slug: "greenacres" },
      { name: "Gulf Stream", slug: "gulf-stream" },
      { name: "Haverhill", slug: "haverhill" },
      { name: "Highland Beach", slug: "highland-beach" },
      { name: "Hypoluxo", slug: "hypoluxo" },
      { name: "Juno Beach", slug: "juno-beach" },
      { name: "Jupiter", slug: "jupiter" },
      { name: "Jupiter Inlet Colony", slug: "jupiter-inlet-colony" },
      { name: "Lake Clarke Shores", slug: "lake-clarke-shores" },
      { name: "Lake Park", slug: "lake-park" },
      { name: "Lake Worth Beach", slug: "lake-worth-beach" },
      { name: "Lantana", slug: "lantana" },
      { name: "Loxahatchee Groves", slug: "loxahatchee-groves" },
      { name: "Manalapan", slug: "manalapan" },
      { name: "Mangonia Park", slug: "mangonia-park" },
      { name: "North Palm Beach", slug: "north-palm-beach" },
      { name: "Ocean Ridge", slug: "ocean-ridge" },
      { name: "Pahokee", slug: "pahokee" },
      { name: "Palm Beach", slug: "palm-beach" },
      { name: "Palm Beach Gardens", slug: "palm-beach-gardens" },
      { name: "Palm Beach Shores", slug: "palm-beach-shores" },
      { name: "Palm Springs", slug: "palm-springs" },
      { name: "Riviera Beach", slug: "riviera-beach" },
      { name: "Royal Palm Beach", slug: "royal-palm-beach" },
      { name: "South Bay", slug: "south-bay" },
      { name: "South Palm Beach", slug: "south-palm-beach" },
      { name: "Tequesta", slug: "tequesta" },
      { name: "Wellington", slug: "wellington" },
      { name: "West Palm Beach", slug: "west-palm-beach" },
      { name: "Westlake", slug: "westlake" },
    ],
  },
  {
    name: "Monroe County",
    slug: "monroe-county",
    description:
      "The Roof Store extends service to Monroe County, FL — protecting Keys homes from the harshest marine climate in Florida. Our rubber roof coating systems are engineered for salt air, high humidity, and hurricane-force wind exposure.",
    cities: [
      { name: "Key West", slug: "key-west" },
    ],
  },
];

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
