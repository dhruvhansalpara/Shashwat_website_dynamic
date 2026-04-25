import { Banknote, MapPin, ShieldCheck } from 'lucide-react';

export const CAR_FILTER_TABS = ['All', 'SUV', 'Sedan', 'Hatchback'] as const;

export const CAR_FEATURE_HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: 'Verified drivers',
    desc: 'Professional, route-trained drivers for city and highway.',
  },
  {
    icon: MapPin,
    title: 'Local & outstation',
    desc: 'Airport, one-way, and multi-day Gujarat / India routes.',
  },
  {
    icon: Banknote,
    title: 'Transparent per km',
    desc: 'Indicative INR/km by cab type; tolls & parking extra.',
  },
];
