import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatInr } from '../../../utils/currency';
import { getTourDisplayImage, getTourFallbackImage } from '../../../utils/travelImages';
import type { Tour } from '../../../types';
import SafeImage from '../../../components/shared/SafeImage';

type TourCardVariant = 'home' | 'listing';

type TourCardProps = {
  tour: Tour;
  index: number;
  variant?: TourCardVariant;
};

const cardMotionByVariant = {
  home: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: (index: number) => ({ duration: 0.5, delay: index * 0.1 }),
  },
  listing: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: (index: number) => ({ duration: 0.5, delay: index * 0.1 }),
  },
};

export default function TourCard({ tour, index, variant = 'listing' }: TourCardProps) {
  const cardMotion = cardMotionByVariant[variant];
  const isHomeVariant = variant === 'home';
  const imageSrc = getTourDisplayImage(tour);

  return (
    <motion.div
      key={tour.id}
      initial={cardMotion.initial}
      animate={cardMotion.animate}
      whileInView={isHomeVariant ? { opacity: 1, scale: 1 } : undefined}
      viewport={isHomeVariant ? { once: true } : undefined}
      transition={cardMotion.transition(index)}
      className={`rounded-[32px] overflow-hidden group border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full ${
        isHomeVariant ? 'bg-white' : 'soft-card'
      }`}
    >
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <SafeImage
          src={imageSrc}
          fallbackSrc={getTourFallbackImage(tour)}
          alt={tour.title}
          className={`h-full w-full transition-transform duration-700 group-hover:scale-110 ${
            isHomeVariant ? 'min-h-64' : 'min-h-[16rem]'
          }`}
        />
        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
          {isHomeVariant && tour.isPopular && (
            <span className="bg-brand-primary text-white px-3 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest shadow-lg shadow-brand-primary/20">
              Popular
            </span>
          )}
        </div>

        <div className="absolute top-6 right-6 z-20">
          <div className="rounded-full bg-white/92 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-lg shadow-black/10 backdrop-blur-sm">
            {tour.category || 'Holiday'}
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        {/* Rating removed as per user request */}

        <div className="h-14 mb-4">
          <h3 className={`text-xl font-black text-gray-900 line-clamp-2 group-hover:text-brand-secondary transition-colors leading-tight h-full flex items-center`}>
            {isHomeVariant ? (
              <Link to={`/tour/${tour.id}`} className="hover:underline decoration-brand-secondary/30">
                {tour.title}
              </Link>
            ) : (
              <span>{tour.title}</span>
            )}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 text-sm mb-6 pb-6 border-b border-gray-100 min-h-[3.5rem]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0" />
            <span className="line-clamp-1">{tour.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-primary flex-shrink-0" />
            <span className="line-clamp-1">{tour.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">From</p>
            <p className="text-2xl font-black text-gray-900">
              {formatInr(tour.price)}{' '}
              {isHomeVariant && (
                <span className="text-sm font-normal text-gray-400 italic">/ person (INR)</span>
              )}
            </p>
          </div>
          <Link
            to={`/tour/${tour.id}`}
            className={`flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-2xl transition-all px-4 group-hover:gap-2 group-hover:bg-brand-secondary group-hover:w-32 group-hover:justify-between`}
          >
            <span className="hidden group-hover:inline text-xs font-bold uppercase tracking-widest translate-x-2 group-hover:translate-x-0 transition-transform">
              {isHomeVariant ? 'Details' : 'Book Now'}
            </span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
