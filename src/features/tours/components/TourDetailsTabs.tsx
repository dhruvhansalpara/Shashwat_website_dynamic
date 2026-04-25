import React from 'react';
import { TOUR_TAB_ITEMS, type TourTabType } from '../constants';

type TourDetailsTabsProps = {
  activeTab: TourTabType;
  onTabChange: (tab: TourTabType) => void;
};

export default function TourDetailsTabs({ activeTab, onTabChange }: TourDetailsTabsProps) {
  return (
    <div className="soft-card flex items-center gap-2 mb-8 p-2 rounded-2xl shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
      {TOUR_TAB_ITEMS.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => onTabChange(key)}
          className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center gap-2 ${
            activeTab === key
              ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
              : 'text-gray-400 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
}
