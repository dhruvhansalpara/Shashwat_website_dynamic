import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '../../../components/shared/SafeImage';
import type { Tour } from '../../../types';
import { getTourDisplayImage, getTourFallbackImage } from '../../../utils/travelImages';

type TourDetailsHeroProps = {
  tour: Tour;
};

export default function TourDetailsHero({ tour }: TourDetailsHeroProps) {
  const imageSrc = getTourDisplayImage(tour);

  return (
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <SafeImage
        src={imageSrc}
        fallbackSrc={getTourFallbackImage(tour)}
        alt={tour.title}
        className="h-full w-full min-h-[400px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black/30" />
      <div className="absolute inset-0 flex items-end">
        <div className="site-container w-full pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="flex items-center gap-2 text-white/70 mb-4 text-xs font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/tours" className="hover:text-white transition-colors">Tours</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-primary">{tour.category}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-tight max-w-4xl tracking-tight">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white font-bold text-sm">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <MapPin className="text-brand-primary w-4 h-4" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Clock className="text-brand-primary w-4 h-4" />
                <span>{tour.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
