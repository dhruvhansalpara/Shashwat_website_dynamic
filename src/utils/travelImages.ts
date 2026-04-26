import type { Destination, Tour } from '../types';

const PUBLIC_BASE = import.meta.env.BASE_URL || '/';
const destinationAsset = (filename: string) => `${PUBLIC_BASE}destinations/${filename}`;

const REGION_IMAGE_POOL: Record<string, string[]> = {
  rajasthan: [
    destinationAsset('ds_rajeshthan_1.jpg'),
    destinationAsset('ds_rajeshthan_2.jpg'),
    destinationAsset('ds_rajeshthan_3.jpg'),
    destinationAsset('ds_rajeshthan_4.jpg'),
  ],
  uttarakhand: [
    destinationAsset('ds_utrakhand.jpg'),
    destinationAsset('ds_utrakhand_1.jpg'),
    destinationAsset('ds_utrakhand_2.jpg'),
  ],
  'himachal pradesh': [
    destinationAsset('ds_himachal_pradesh.jpg'),
    destinationAsset('ds_himachal_pradesh_1.jpg'),
    destinationAsset('ds_himachal_pradesh_2.jpg'),
  ],
  'uttar pradesh': [
    destinationAsset('ds_uttar_pradesh.jpg'),
    destinationAsset('ds_uttar_pradesh_1.jpg'),
    destinationAsset('ds_uttar_pradesh_2.jpg'),
  ],
  'delhi ncr': [
    destinationAsset('ds_delhi.jpg'),
    destinationAsset('ds_delhi_1.jpg'),
    destinationAsset('ds_delhi_2.jpg'),
    destinationAsset('ds_delhi_3.jpg'),
  ],
  'delhi & golden triangle': [
    destinationAsset('ds_delhi.jpg'),
    destinationAsset('ds_delhi_1.jpg'),
    destinationAsset('ds_delhi_2.jpg'),
    destinationAsset('ds_delhi_3.jpg'),
  ],
  kerala: [
    destinationAsset('ds_Kerla.jpg'),
    destinationAsset('ds_Kerla_1.jpg'),
    destinationAsset('ds_Kerla_2.jpg'),
    destinationAsset('ds_Kerla_3.jpg'),
  ],
  maharashtra: [
    destinationAsset('ds_maharashtra.jpg'),
    destinationAsset('ds_maharashtra_1.jpg'),
    destinationAsset('ds_maharashtra_2.jpg'),
    destinationAsset('ds_maharashtra_3.jpg'),
  ],
  gujarat: [destinationAsset('ds_gujarat.jpg')],
  karnataka: [
    destinationAsset('ds_karnataka.jpg'),
    destinationAsset('ds_karnataka_1.jpg'),
    destinationAsset('ds_karnataka_2.jpg'),
  ],
  goa: [
    destinationAsset('ds_goa.jpg'),
    destinationAsset('ds_goa_1.jpg'),
    destinationAsset('ds_goa_2.jpg'),
    destinationAsset('ds_goa_3.jpg'),
  ],
  sikkim: [
    destinationAsset('ds_sikkim.jpg'),
    destinationAsset('ds_sikkim_1.jpg'),
    destinationAsset('ds_sikkim_2.jpg'),
    destinationAsset('ds_sikkim_3.jpg'),
  ],
  'arunachal pradesh': [
    destinationAsset('ds_arunchal_pradesh.jpg'),
    destinationAsset('ds_arunchal_pradesh_1.jpg'),
    destinationAsset('ds_arunchal_pradesh_2.jpg'),
  ],
  punjab: [destinationAsset('ds_panjab.jpg')],
};

const CATEGORY_IMAGE_MAP: Record<string, string> = {
  spiritual: destinationAsset('ds_rajeshthan_2.jpg'),
  adventure: destinationAsset('ds_rajeshthan_4.jpg'),
  heritage: destinationAsset('ds_rajeshthan_1.jpg'),
  'hill station': destinationAsset('ds_utrakhand.jpg'),
};

const TOUR_IMAGE_MATCHERS: Array<{ keywords: string[]; image: string }> = [
  {
    keywords: ['jaipur', 'amber fort', 'amer fort', 'hawa mahal', 'pink city'],
    image: destinationAsset('ds_rajeshthan_2.jpg'),
  },
  {
    keywords: ['jaisalmer', 'sam sand dunes', 'thar', 'desert'],
    image: destinationAsset('ds_rajeshthan_4.jpg'),
  },
  {
    keywords: ['ajmer', 'pushkar', 'brahma temple'],
    image: destinationAsset('ds_rajeshthan_3.jpg'),
  },
  {
    keywords: ['nainital', 'naini lake', 'bhimtal'],
    image: destinationAsset('ds_utrakhand.jpg'),
  },
  {
    keywords: ['mussoorie', 'kempty', 'gun hill', 'lal tibba'],
    image: destinationAsset('ds_utrakhand_1.jpg'),
  },
  {
    keywords: ['haridwar', 'rishikesh', 'ganga aarti', 'har ki pauri', 'rafting'],
    image: destinationAsset('ds_utrakhand_2.jpg'),
  },
  {
    keywords: ['shimla', 'kufri', 'the ridge'],
    image: destinationAsset('ds_himachal_pradesh_1.jpg'),
  },
  {
    keywords: ['manali', 'solang', 'rohtang', 'hadimba'],
    image: destinationAsset('ds_himachal_pradesh_2.jpg'),
  },
  {
    keywords: ['dharamshala', 'mcleodganj', 'bhagsu', 'dalai lama'],
    image: destinationAsset('ds_himachal_pradesh_1.jpg'),
  },
  {
    keywords: ['agra', 'taj mahal', 'fatehpur sikri'],
    image: destinationAsset('ds_uttar_pradesh.jpg'),
  },
  {
    keywords: ['varanasi', 'kashi', 'ghat', 'ganga'],
    image: destinationAsset('ds_uttar_pradesh_1.jpg'),
  },
  {
    keywords: ['ayodhya', 'ram mandir'],
    image: destinationAsset('ds_uttar_pradesh_2.jpg'),
  },
  {
    keywords: ['delhi', 'red fort', 'india gate', 'golden triangle'],
    image: destinationAsset('ds_delhi.jpg'),
  },
  {
    keywords: ['munnar', 'tea garden', 'tea estate'],
    image: destinationAsset('ds_Kerla_1.jpg'),
  },
  {
    keywords: ['alleppey', 'alappuzha', 'backwater', 'houseboat', 'kumarakom'],
    image: destinationAsset('ds_Kerla_2.jpg'),
  },
  {
    keywords: ['thekkady', 'periyar', 'wildlife'],
    image: destinationAsset('ds_Kerla_3.jpg'),
  },
  {
    keywords: ['mumbai', 'marine drive', 'gateway of india'],
    image: destinationAsset('ds_maharashtra_1.jpg'),
  },
  {
    keywords: ['lonavala', 'khandala', 'mahabaleshwar'],
    image: destinationAsset('ds_maharashtra_2.jpg'),
  },
  {
    keywords: ['dwarka', 'somnath', 'rann', 'kutch', 'statue of unity'],
    image: destinationAsset('ds_gujarat_1.jpg'),
  },
  {
    keywords: ['coorg', 'mysore', 'mysuru', 'hampi', 'badami'],
    image: destinationAsset('ds_karnataka_1.jpg'),
  },
  {
    keywords: ['goa', 'baga', 'candolim', 'palolem'],
    image: destinationAsset('ds_goa_1.jpg'),
  },
  {
    keywords: ['gangtok', 'rumtek', 'mg marg'],
    image: destinationAsset('ds_sikkim_1.jpg'),
  },
  {
    keywords: ['tsomgo', 'changu', 'baba mandir'],
    image: destinationAsset('ds_sikkim_2.jpg'),
  },
  {
    keywords: ['nathula', 'indo-china border'],
    image: destinationAsset('ds_sikkim_3.jpg'),
  },
  {
    keywords: ['tawang', 'sela pass'],
    image: destinationAsset('ds_arunchal_pradesh_1.jpg'),
  },
  {
    keywords: ['bomdila', 'dirang', 'sangti valley'],
    image: destinationAsset('ds_arunchal_pradesh_2.jpg'),
  },
  {
    keywords: ['amritsar', 'golden temple', 'harmandir sahib'],
    image: destinationAsset('ds_panjab.jpg'),
  },
  {
    keywords: ['wagah', 'jallianwala', 'attari'],
    image: destinationAsset('ds_panjab.jpg'),
  },
  {
    keywords: ['chandigarh', 'rock garden', 'sukhna lake'],
    image: destinationAsset('ds_panjab.jpg'),
  },
];

function normalize(value: string | undefined) {
  return (value || '').toLowerCase();
}

function hashSeed(value: string | undefined) {
  const normalized = normalize(value);
  if (!normalized) return 0;
  return Array.from(normalized).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function findRegionImage(region: string | undefined, seed?: string) {
  const normalizedRegion = normalize(region);
  const pool = REGION_IMAGE_POOL[normalizedRegion];
  if (!pool || pool.length === 0) return undefined;
  if (!seed) return pool[0];
  const index = hashSeed(seed) % pool.length;
  return pool[index];
}

function findMatchedImage(text: string) {
  return TOUR_IMAGE_MATCHERS.find(({ keywords }) => keywords.some((keyword) => text.includes(keyword)))?.image;
}

function findCategoryImage(category: string | undefined) {
  const normalizedCategory = normalize(category);
  return Object.entries(CATEGORY_IMAGE_MAP).find(([key]) => normalizedCategory.includes(key))?.[1];
}

export function normalizeImagePath(path: string | undefined): string {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/') || path.startsWith('data:')) return path;
  if (path.startsWith('ds_')) return `${PUBLIC_BASE}destinations/${path}`;
  return path;
}

export function getDestinationDisplayImage(destination: Pick<Destination, 'name' | 'toursRegion' | 'image'>) {
  const norm = normalizeImagePath(destination.image);
  if (norm && !norm.includes('unsplash.com') && !norm.includes('picsum.photos')) {
    // If user provided a specific local asset or custom URL, use it first
    return norm;
  }

  return (
    findRegionImage(destination.toursRegion, destination.name) ||
    findRegionImage(destination.name, destination.name) ||
    norm
  );
}

export function getTourDisplayImage(tour: Pick<Tour, 'title' | 'location' | 'searchRegion' | 'category' | 'image'>) {
  const norm = normalizeImagePath(tour.image);
  const searchableText = [tour.title, tour.location, tour.searchRegion, tour.category].map(normalize).join(' ');
  return (
    findMatchedImage(searchableText) ||
    findRegionImage(tour.searchRegion, tour.title) ||
    findCategoryImage(tour.category) ||
    norm
  );
}

export function getDestinationFallbackImage(destination: Pick<Destination, 'name' | 'toursRegion' | 'image'>) {
  const norm = normalizeImagePath(destination.image);
  return (
    findRegionImage(destination.toursRegion, destination.name) ||
    findRegionImage(destination.name, destination.name) ||
    norm
  );
}

export function getTourFallbackImage(tour: Pick<Tour, 'searchRegion' | 'category' | 'image'>) {
  return findRegionImage(tour.searchRegion, tour.searchRegion) || findCategoryImage(tour.category) || tour.image;
}
