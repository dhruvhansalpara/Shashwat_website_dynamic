import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import {
  DEFAULT_TOUR_EXCLUSIONS,
  DEFAULT_TOUR_HIGHLIGHTS,
  DEFAULT_TOUR_INCLUSIONS,
} from '../constants';
import type { Tour } from '../../../types';

type TourInfoTabProps = {
  tour: Tour;
};

export default function TourInfoTab({ tour }: TourInfoTabProps) {
  const highlights = tour.highlights || DEFAULT_TOUR_HIGHLIGHTS;
  const inclusions = tour.inclusions || DEFAULT_TOUR_INCLUSIONS;
  const exclusions = tour.exclusions || DEFAULT_TOUR_EXCLUSIONS;
  const description =
    tour.description ||
    `Experience the magic of ${tour.location} with our exclusive ${tour.title}. This carefully curated experience takes you through some of the most iconic spots while providing deep local insights.`;

  return (
    <div className="space-y-12">
      <div className="soft-card p-8 md:p-10 rounded-[2rem] shadow-sm">
        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-brand-primary rounded-full"></span>
          Tour Overview
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">{description}</p>

        <div className="mb-10">
          <h4 className="text-xl font-bold text-gray-900 mb-6">Experience Highlights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={`${tour.id}-highlight-${index}`}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100/50"
              >
                <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-brand-primary w-4 h-4" />
                </div>
                <span className="text-gray-700 font-bold text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-100 pt-10">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Inclusions
            </h4>
            <ul className="space-y-3">
              {inclusions.map((item, index) => (
                <li
                  key={`${tour.id}-inclusion-${index}`}
                  className="flex items-center gap-3 text-gray-600 text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Exclusions
            </h4>
            <ul className="space-y-3">
              {exclusions.map((item, index) => (
                <li
                  key={`${tour.id}-exclusion-${index}`}
                  className="flex items-center gap-3 text-gray-400 text-sm font-medium line-through decoration-gray-300"
                >
                  <XCircle className="w-4 h-4 text-red-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
