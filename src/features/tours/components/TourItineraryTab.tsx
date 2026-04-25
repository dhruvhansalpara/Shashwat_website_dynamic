import React from 'react';
import { DEFAULT_TOUR_ITINERARY } from '../constants';
import type { Tour } from '../../../types';

type TourItineraryTabProps = {
  tour: Tour;
};

export default function TourItineraryTab({ tour }: TourItineraryTabProps) {
  const itinerary = tour.itinerary || DEFAULT_TOUR_ITINERARY;

  return (
    <div className="soft-card p-8 md:p-10 rounded-[2rem] shadow-sm">
      <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-1.5 h-8 bg-brand-primary rounded-full"></span>
        Detailed Itinerary
      </h3>
      <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-gray-100">
        {itinerary.map((step, index) => (
          <div key={`${tour.id}-itinerary-${index}`} className="relative pl-16">
            <div className="absolute left-[20px] top-0 w-2.5 h-2.5 rounded-full bg-brand-primary border-4 border-white shadow-sm ring-4 ring-brand-primary/10"></div>
            <div className="flex flex-col gap-2">
              <span className="text-brand-primary font-black text-xs uppercase tracking-widest">Day 0{step.day}</span>
              <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
