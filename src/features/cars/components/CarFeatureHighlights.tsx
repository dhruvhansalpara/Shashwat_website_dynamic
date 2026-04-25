import React from 'react';
import { CAR_FEATURE_HIGHLIGHTS } from '../constants';

export default function CarFeatureHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {CAR_FEATURE_HIGHLIGHTS.map((item) => (
        <div key={item.title} className="soft-card p-6 rounded-3xl flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
            <item.icon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{item.title}</h4>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
