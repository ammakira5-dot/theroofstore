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
      { name: "Lake Worth", slug: "lake-worth" },
      { name: "Wellington", slug: "wellington" },
      { name: "Palm Beach Gardens", slug: "palm-beach-gardens" },
      { name: "Jupiter", slug: "jupiter" },
      { name: "Greenacres", slug: "greenacres" },
      { name: "Royal Palm Beach", slug: "royal-palm-beach" },
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
