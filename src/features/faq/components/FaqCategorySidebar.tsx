import React from 'react';
import { MessageSquare } from 'lucide-react';
import { FAQ_CATEGORIES, FAQ_SUPPORT_CARD } from '../constants';

type FaqCategorySidebarProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function FaqCategorySidebar({
  activeCategory,
  onCategoryChange,
}: FaqCategorySidebarProps) {
  return (
    <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-32">
      <div className="space-y-2">
        {FAQ_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-sm transition-all group ${
              activeCategory === category
                ? 'soft-card text-brand-primary shadow-sm'
                : 'text-gray-400 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <span className="tracking-tight">{category}</span>
            {activeCategory === category && <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />}
          </button>
        ))}
      </div>

      <div className="soft-card p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -tr-16 -te-16" />
        <div className="relative z-10">
          <div className="bg-gray-50 p-6 rounded-2xl mb-6 border border-gray-50">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
              <MessageSquare className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-black text-[#05445E] mb-3 leading-tight">
              {FAQ_SUPPORT_CARD.title}
            </h3>
            <a
              href={FAQ_SUPPORT_CARD.mailto}
              className="break-all text-xs font-bold text-brand-primary hover:underline"
            >
              {FAQ_SUPPORT_CARD.email}
            </a>
          </div>
          <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all">
            {FAQ_SUPPORT_CARD.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
