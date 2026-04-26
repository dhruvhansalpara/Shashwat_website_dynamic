export interface Destination {
  id: string;
  name: string;
  image: string;
  tourCount: number;
  packageCount?: number;
  slug?: string;
  /** Exact `Tour.searchRegion` — used for /tours?region=… so only that state’s packages show. */
  toursRegion: string;
}

export interface Tour {
  id: string;
  title: string;
  location: string;
  /** When a city/place matches, all tours in this region can be shown (e.g. state / country). */
  searchRegion?: string;
  /** Cities and alternate names for search and autocomplete. */
  searchPlaces?: string[];
  /** Amount in Indian Rupees (INR) per person, twin share, unless the package notes otherwise. */
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  image: string;
  category: string;
  isPopular?: boolean;
  destination_ids?: string[];
  description?: string;
  highlights?: string[];
  itinerary?: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions?: string[];
  exclusions?: string[];
  gallery?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Car {
  id: string;
  model: string;
  /** Display segment e.g. "SUV Cab", "Sedan Cab". */
  type: string;
  /** Filter group aligned with typical fleet menus. */
  category: 'SUV' | 'Sedan' | 'Hatchback';
  transmission: 'Automatic' | 'Manual';
  seats: number;
  bags: number;
  /** Indicative INR per km (local / outstation varies; confirm on booking). */
  pricePerKm: number;
  image: string;
  isAvailable: boolean;
  features: string[];
}
