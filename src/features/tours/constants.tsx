import React from 'react';
import { Camera, Info, Map } from 'lucide-react';

export const TOUR_CATEGORIES = [
  'All',
  'Heritage',
  'Hill Station',
  'Spiritual',
  'Beach & Leisure',
  'Wildlife & Desert',
  'Adventure',
] as const;

export type TourTabType = 'info' | 'itinerary' | 'gallery';

export const TOUR_TAB_ITEMS: {
  key: TourTabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { key: 'info', label: 'Info', icon: Info },
  { key: 'itinerary', label: 'Itinerary', icon: Map },
  { key: 'gallery', label: 'Gallery', icon: Camera },
];

export const DEFAULT_TOUR_HIGHLIGHTS = [
  'Expert local guidance',
  'All entry fees included',
  'Premium transport',
  'Authentic local lunch',
];

export const DEFAULT_TOUR_INCLUSIONS = [
  'Guided tour',
  'Transportation',
  'Refreshments',
];

export const DEFAULT_TOUR_EXCLUSIONS = [
  'Personal expenses',
  'Tips/Gratuities',
];

export const DEFAULT_TOUR_ITINERARY = [
  {
    day: 1,
    title: 'Introduction & Briefing',
    description: 'Meet your guide at the base for a priority check-in.',
  },
  {
    day: 2,
    title: 'Iconic Landmarks Visit',
    description: 'Visit the heart of the destination and learn about the architecture.',
  },
  {
    day: 3,
    title: 'Local Flavors Tasting',
    description: 'Enjoy a curated selection of local delicacies.',
  },
];
