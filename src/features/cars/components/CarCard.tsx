import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Banknote, Briefcase, Settings, Star, Users } from 'lucide-react';
import SafeImage from '../../../components/shared/SafeImage';
import { formatInr } from '../../../utils/currency';
import type { Car } from '../../../types';

type CarCardProps = {
  car: Car;
  index: number;
  onBook: (carId: string) => void;
};

export default function CarCard({ car, index, onBook }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="soft-card rounded-[32px] overflow-hidden group border border-gray-200/90 shadow-sm hover:border-gray-300 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden p-4">
        <div className="w-full h-full rounded-[32px] overflow-hidden relative border border-gray-200/80 bg-gray-50">
          <SafeImage
            src={car.image}
            alt={car.model}
            className="h-full w-full min-h-48 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest">
              {car.category}
            </span>
            <span className="bg-black/50 text-white px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest backdrop-blur-sm">
              {car.type}
            </span>
          </div>
        </div>
      </div>

      <div className="p-8 pt-2">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-black text-gray-900 group-hover:text-brand-secondary transition-colors leading-tight">
              {car.model}
            </h3>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">{car.type}</p>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {car.features.slice(0, 4).map((feature) => (
            <li key={feature} className="text-xs font-medium text-gray-600 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-2xl">
            <Users className="w-4 h-4 text-brand-primary shrink-0" />
            <span className="text-xs font-bold">{car.seats} passengers</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-2xl">
            <Briefcase className="w-4 h-4 text-brand-primary shrink-0" />
            <span className="text-xs font-bold">{car.bags} luggage</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-2xl">
            <Settings className="w-4 h-4 text-brand-primary shrink-0" />
            <span className="text-xs font-bold">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-2xl">
            <Banknote className="w-4 h-4 text-brand-primary shrink-0" />
            <span className="text-xs font-bold">From {formatInr(car.pricePerKm)}/km</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div>
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block mb-1">
              Indicative rate
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-gray-900">{formatInr(car.pricePerKm)}</span>
              <span className="text-sm text-gray-400 font-bold">/ km</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onBook(car.id)}
            className="flex items-center justify-center h-14 px-5 bg-gray-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-brand-secondary"
          >
            Book
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
