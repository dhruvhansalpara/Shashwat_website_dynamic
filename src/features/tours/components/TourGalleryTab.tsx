import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import SafeImage from '../../../components/shared/SafeImage';
import type { Tour } from '../../../types';
import { getTourDisplayImage, getTourFallbackImage } from '../../../utils/travelImages';

type TourGalleryTabProps = {
  tour: Tour;
};

export default function TourGalleryTab({ tour }: TourGalleryTabProps) {
  const heroImage = getTourDisplayImage(tour);
  const fallbackImage = getTourFallbackImage(tour);
  const gallery = tour.gallery || [heroImage, heroImage, heroImage];

  return (
    <div className="soft-card p-8 md:p-10 rounded-[2rem] shadow-sm">
      <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-1.5 h-8 bg-brand-primary rounded-full"></span>
        Photo Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <motion.div
            key={`${tour.id}-gallery-${index}`}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square overflow-hidden rounded-2xl group cursor-zoom-in"
          >
            <SafeImage
              src={image}
              fallbackSrc={fallbackImage}
              alt={`${tour.title} view ${index + 1}`}
              className="h-full w-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="text-white w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
