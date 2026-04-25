import React from 'react';
import { CAR_FILTER_TABS } from '../constants';

type CarFilterTabsProps = {
  activeTab: (typeof CAR_FILTER_TABS)[number];
  onTabChange: (tab: (typeof CAR_FILTER_TABS)[number]) => void;
};

export default function CarFilterTabs({ activeTab, onTabChange }: CarFilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {CAR_FILTER_TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all ${
            activeTab === tab
              ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/25'
              : 'soft-card text-gray-500 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          {tab === 'All' ? 'All cabs' : `${tab} cab`}
        </button>
      ))}
    </div>
  );
}
