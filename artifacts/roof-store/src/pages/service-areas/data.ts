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
      { name: "Fort Lauderdale", slug: "fort-lauderdale" },
      { name: "Hollywood", slug: "hollywood" },
      { name: "Pompano Beach", slug: "pompano-beach" },
      { name: "Coral Springs", slug: "coral-springs" },
      { name: "Pembroke Pines", slug: "pembroke-pines" },
      { name: "Miramar", slug: "miramar" },
      { name: "Sunrise", slug: "sunrise" },
      { name: "Plantation", slug: "plantation" },
      { name: "Deerfield Beach", slug: "deerfield-beach" },
      { name: "Hallandale Beach", slug: "hallandale-beach" },
      { name: "Davie", slug: "davie" },
      { name: "Weston", slug: "weston" },
      { name: "Cooper City", slug: "cooper-city" },
      { name: "Tamarac", slug: "tamarac" },
      { name: "Margate", slug: "margate" },
      { name: "Coconut Creek", slug: "coconut-creek" },
      { name: "Oakland Park", slug: "oakland-park" },
      { name: "Lauderhill", slug: "lauderhill" },
      { name: "North Lauderdale", slug: "north-lauderdale" },
      { name: "Lauderdale Lakes", slug: "lauderdale-lakes" },
      { name: "Dania Beach", slug: "dania-beach" },
      { name: "Wilton Manors", slug: "wilton-manors" },
      { name: "Lighthouse Point", slug: "lighthouse-point" },
      { name: "Lauderdale-by-the-Sea", slug: "lauderdale-by-the-sea" },
      { name: "Parkland", slug: "parkland" },
      { name: "Pembroke Park", slug: "pembroke-park" },
      { name: "West Park", slug: "west-park" },
      { name: "Southwest Ranches", slug: "southwest-ranches" },
      { name: "Sea Ranch Lakes", slug: "sea-ranch-lakes" },
      { name: "Hillsboro Beach", slug: "hillsboro-beach" },
    ],
  },
  {
    name: "Miami-Dade County",
    slug: "miami-dade-county",
    description:
      "The Roof Store serves all of Miami-Dade County, FL with professional rubber roof coating, tile restoration, and weatherproofing. From Miami Beach to Homestead, our A+ BBB-rated team protects South Florida homes from the elements.",
    cities: [
      { name: "Miami", slug: "miami" },
      { name: "Hialeah", slug: "hialeah" },
      { name: "Miami Beach", slug: "miami-beach" },
      { name: "Aventura", slug: "aventura" },
      { name: "North Miami", slug: "north-miami" },
      { name: "Coral Gables", slug: "coral-gables" },
      { name: "Homestead", slug: "homestead" },
      { name: "Miami Gardens", slug: "miami-gardens" },
      { name: "Doral", slug: "doral" },
      { name: "Kendall", slug: "kendall" },
      { name: "Pinecrest", slug: "pinecrest" },
      { name: "South Miami", slug: "south-miami" },
      { name: "North Miami Beach", slug: "north-miami-beach" },
      { name: "Hialeah Gardens", slug: "hialeah-gardens" },
      { name: "Miami Lakes", slug: "miami-lakes" },
      { name: "Miami Shores", slug: "miami-shores" },
      { name: "Miami Springs", slug: "miami-springs" },
      { name: "Cutler Bay", slug: "cutler-bay" },
      { name: "Palmetto Bay", slug: "palmetto-bay" },
      { name: "Sunny Isles Beach", slug: "sunny-isles-beach" },
      { name: "Key Biscayne", slug: "key-biscayne" },
      { name: "Surfside", slug: "surfside" },
      { name: "Bal Harbour", slug: "bal-harbour" },
      { name: "Bay Harbor Islands", slug: "bay-harbor-islands" },
      { name: "Opa-locka", slug: "opa-locka" },
      { name: "Florida City", slug: "florida-city" },
      { name: "Sweetwater", slug: "sweetwater" },
      { name: "West Miami", slug: "west-miami" },
      { name: "North Bay Village", slug: "north-bay-village" },
      { name: "Medley", slug: "medley" },
      { name: "Biscayne Park", slug: "biscayne-park" },
      { name: "El Portal", slug: "el-portal" },
      { name: "Virginia Gardens", slug: "virginia-gardens" },
      { name: "Golden Beach", slug: "golden-beach" },
    ],
  },
  {
    name: "Palm Beach County",
    slug: "palm-beach-county",
    description:
      "From Boca Raton to Jupiter, The Roof Store serves all of Palm Beach County with our rubber roof coating and tile restoration systems. Protecting Palm Beach County homes from Florida's harsh climate since 1994.",
    cities: [
      { name: "West Palm Beach", slug: "west-palm-beach" },
      { name: "Boca Raton", slug: "boca-raton" },
      { name: "Delray Beach", slug: "delray-beach" },
      { name: "Boynton Beach", slug: "boynton-beach" },
      { name: "Lake Worth Beach", slug: "lake-worth-beach" },
      { name: "Wellington", slug: "wellington" },
      { name: "Palm Beach Gardens", slug: "palm-beach-gardens" },
      { name: "Jupiter", slug: "jupiter" },
      { name: "Greenacres", slug: "greenacres" },
      { name: "Royal Palm Beach", slug: "royal-palm-beach" },
      { name: "Riviera Beach", slug: "riviera-beach" },
      { name: "North Palm Beach", slug: "north-palm-beach" },
      { name: "Lake Park", slug: "lake-park" },
      { name: "Palm Springs", slug: "palm-springs" },
      { name: "Palm Beach", slug: "palm-beach" },
      { name: "Juno Beach", slug: "juno-beach" },
      { name: "Tequesta", slug: "tequesta" },
      { name: "Lantana", slug: "lantana" },
      { name: "Hypoluxo", slug: "hypoluxo" },
      { name: "Atlantis", slug: "atlantis" },
      { name: "Lake Clarke Shores", slug: "lake-clarke-shores" },
      { name: "Manalapan", slug: "manalapan" },
      { name: "Ocean Ridge", slug: "ocean-ridge" },
      { name: "Highland Beach", slug: "highland-beach" },
      { name: "Gulf Stream", slug: "gulf-stream" },
      { name: "Haverhill", slug: "haverhill" },
      { name: "Mangonia Park", slug: "mangonia-park" },
      { name: "Pahokee", slug: "pahokee" },
      { name: "Belle Glade", slug: "belle-glade" },
      { name: "South Bay", slug: "south-bay" },
      { name: "Westlake", slug: "westlake" },
      { name: "Loxahatchee Groves", slug: "loxahatchee-groves" },
      { name: "Palm Beach Shores", slug: "palm-beach-shores" },
      { name: "South Palm Beach", slug: "south-palm-beach" },
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
