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

export const counties: CountyEntry[] = [
  {
    name: "Broward County",
    slug: "broward-county",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1400&q=80",
    description:
      "The Roof Store serves all of Broward County, FL — from Fort Lauderdale to Coral Springs. Our rubber roof coating and tile restoration systems protect Broward homes from hurricanes, tropical storms, and intense UV exposure.",
    cities: [
      { name: "Coconut Creek", slug: "coconut-creek" },
      { name: "Cooper City", slug: "cooper-city" },
      { name: "Coral Springs", slug: "coral-springs" },
      { name: "Dania Beach", slug: "dania-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Davie", slug: "davie" },
      { name: "Deerfield Beach", slug: "deerfield-beach", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1400&q=80" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale", image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1400&q=80" },
      { name: "Hillsboro Beach", slug: "hillsboro-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Hallandale Beach", slug: "hallandale-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Hollywood", slug: "hollywood", image: "https://images.unsplash.com/photo-1568869038-6e91a2f4c7d3?auto=format&fit=crop&w=1400&q=80" },
      { name: "Lauderdale Lakes", slug: "lauderdale-lakes" },
      { name: "Lauderhill", slug: "lauderhill" },
      { name: "Lauderdale-by-the-Sea", slug: "lauderdale-by-the-sea", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Lighthouse Point", slug: "lighthouse-point", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Margate", slug: "margate" },
      { name: "Miramar", slug: "miramar" },
      { name: "North Lauderdale", slug: "north-lauderdale" },
      { name: "Oakland Park", slug: "oakland-park" },
      { name: "Parkland", slug: "parkland" },
      { name: "Pembroke Park", slug: "pembroke-park" },
      { name: "Pembroke Pines", slug: "pembroke-pines" },
      { name: "Plantation", slug: "plantation" },
      { name: "Pompano Beach", slug: "pompano-beach", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1400&q=80" },
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
    image: "https://images.unsplash.com/photo-1514214246283-d8a5a0d0f929?auto=format&fit=crop&w=1400&q=80",
    description:
      "The Roof Store serves all of Miami-Dade County, FL with professional rubber roof coating, tile restoration, and weatherproofing. From Miami Beach to Homestead, our A+ BBB-rated team protects South Florida homes from the elements.",
    cities: [
      { name: "Aventura", slug: "aventura", image: "https://images.unsplash.com/photo-1514214246283-d8a5a0d0f929?auto=format&fit=crop&w=1400&q=80" },
      { name: "Bal Harbour", slug: "bal-harbour", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Bay Harbor Islands", slug: "bay-harbor-islands", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Biscayne Park", slug: "biscayne-park" },
      { name: "Coral Gables", slug: "coral-gables", image: "https://images.unsplash.com/photo-1582560469781-1bc8f4a5e726?auto=format&fit=crop&w=1400&q=80" },
      { name: "Cutler Bay", slug: "cutler-bay" },
      { name: "Doral", slug: "doral" },
      { name: "El Portal", slug: "el-portal" },
      { name: "Florida City", slug: "florida-city" },
      { name: "Golden Beach", slug: "golden-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Hialeah", slug: "hialeah" },
      { name: "Hialeah Gardens", slug: "hialeah-gardens" },
      { name: "Homestead", slug: "homestead" },
      { name: "Indian Creek Village", slug: "indian-creek-village", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Islandia", slug: "islandia", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Key Biscayne", slug: "key-biscayne", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80" },
      { name: "Medley", slug: "medley" },
      { name: "Miami", slug: "miami", image: "https://images.unsplash.com/photo-1514214246283-d8a5a0d0f929?auto=format&fit=crop&w=1400&q=80" },
      { name: "Miami Beach", slug: "miami-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Miami Gardens", slug: "miami-gardens" },
      { name: "Miami Lakes", slug: "miami-lakes" },
      { name: "Miami Shores", slug: "miami-shores" },
      { name: "Miami Springs", slug: "miami-springs" },
      { name: "North Bay Village", slug: "north-bay-village", image: "https://images.unsplash.com/photo-1514214246283-d8a5a0d0f929?auto=format&fit=crop&w=1400&q=80" },
      { name: "North Miami", slug: "north-miami" },
      { name: "North Miami Beach", slug: "north-miami-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Opa-locka", slug: "opa-locka" },
      { name: "Palmetto Bay", slug: "palmetto-bay" },
      { name: "Pinecrest", slug: "pinecrest" },
      { name: "South Miami", slug: "south-miami" },
      { name: "Sunny Isles Beach", slug: "sunny-isles-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Surfside", slug: "surfside", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Sweetwater", slug: "sweetwater" },
      { name: "Virginia Gardens", slug: "virginia-gardens" },
      { name: "West Miami", slug: "west-miami" },
    ],
  },
  {
    name: "Palm Beach County",
    slug: "palm-beach-county",
    image: "https://images.unsplash.com/photo-1610116761614-4e9b0ff9fc85?auto=format&fit=crop&w=1400&q=80",
    description:
      "From Boca Raton to Jupiter, The Roof Store serves all of Palm Beach County with our rubber roof coating and tile restoration systems. Protecting Palm Beach County homes from Florida's harsh climate since 1994.",
    cities: [
      { name: "Atlantis", slug: "atlantis" },
      { name: "Belle Glade", slug: "belle-glade" },
      { name: "Boca Raton", slug: "boca-raton", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Boynton Beach", slug: "boynton-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Briny Breezes", slug: "briny-breezes", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Cloud Lake", slug: "cloud-lake" },
      { name: "Delray Beach", slug: "delray-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Glen Ridge", slug: "glen-ridge" },
      { name: "Golfview", slug: "golfview" },
      { name: "Greenacres", slug: "greenacres" },
      { name: "Gulf Stream", slug: "gulf-stream", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Haverhill", slug: "haverhill" },
      { name: "Highland Beach", slug: "highland-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Hypoluxo", slug: "hypoluxo" },
      { name: "Juno Beach", slug: "juno-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Jupiter", slug: "jupiter", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80" },
      { name: "Jupiter Inlet Colony", slug: "jupiter-inlet-colony", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80" },
      { name: "Lake Clarke Shores", slug: "lake-clarke-shores" },
      { name: "Lake Park", slug: "lake-park" },
      { name: "Lake Worth Beach", slug: "lake-worth-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Lantana", slug: "lantana" },
      { name: "Loxahatchee Groves", slug: "loxahatchee-groves" },
      { name: "Manalapan", slug: "manalapan", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Mangonia Park", slug: "mangonia-park" },
      { name: "North Palm Beach", slug: "north-palm-beach", image: "https://images.unsplash.com/photo-1610116761614-4e9b0ff9fc85?auto=format&fit=crop&w=1400&q=80" },
      { name: "Ocean Ridge", slug: "ocean-ridge", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Pahokee", slug: "pahokee" },
      { name: "Palm Beach", slug: "palm-beach", image: "https://images.unsplash.com/photo-1610116761614-4e9b0ff9fc85?auto=format&fit=crop&w=1400&q=80" },
      { name: "Palm Beach Gardens", slug: "palm-beach-gardens", image: "https://images.unsplash.com/photo-1610116761614-4e9b0ff9fc85?auto=format&fit=crop&w=1400&q=80" },
      { name: "Palm Beach Shores", slug: "palm-beach-shores", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Palm Springs", slug: "palm-springs" },
      { name: "Riviera Beach", slug: "riviera-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Royal Palm Beach", slug: "royal-palm-beach" },
      { name: "South Bay", slug: "south-bay" },
      { name: "South Palm Beach", slug: "south-palm-beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80" },
      { name: "Tequesta", slug: "tequesta", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80" },
      { name: "Wellington", slug: "wellington" },
      { name: "West Palm Beach", slug: "west-palm-beach", image: "https://images.unsplash.com/photo-1610116761614-4e9b0ff9fc85?auto=format&fit=crop&w=1400&q=80" },
      { name: "Westlake", slug: "westlake" },
    ],
  },
  {
    name: "Monroe County",
    slug: "monroe-county",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80",
    description:
      "The Roof Store extends service to Monroe County, FL — protecting Keys homes from the harshest marine climate in Florida. Our rubber roof coating systems are engineered for salt air, high humidity, and hurricane-force wind exposure.",
    cities: [
      { name: "Key West", slug: "key-west", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1400&q=80" },
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
