import React, { useMemo, useState } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import FaqAccordionList from '../features/faq/components/FaqAccordionList';
import FaqCategorySidebar from '../features/faq/components/FaqCategorySidebar';
import { FAQ_CATEGORIES } from '../features/faq/constants';
import { getFaqItemsByCategory } from '../features/faq/utils';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(
    () => getFaqItemsByCategory(activeCategory, searchQuery),
    [activeCategory, searchQuery]
  );

  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <div className="site-container mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <nav className="flex items-center gap-2 text-gray-400 mb-4 text-xs font-bold uppercase tracking-widest">
              <span>Home</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-primary">Support Center</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-display font-black text-[#05445E] tracking-tight">
              Frequently Asked <span className="text-brand-primary italic">Questions</span>
            </h1>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setActiveIndex(0);
              }}
              className="w-full bg-white border border-gray-100 rounded-full py-5 pl-14 pr-8 text-sm focus:outline-none focus:ring-4 focus:ring-brand-primary/10 shadow-sm transition-all"
            />
          </div>
        </div>
      </div>

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <FaqCategorySidebar
            activeCategory={activeCategory}
            onCategoryChange={(category) => {
              setActiveCategory(category);
              setActiveIndex(0);
            }}
          />

          <div className="lg:col-span-9">
            <FaqAccordionList
              items={filteredFaqs}
              activeIndex={activeIndex}
              onToggle={(index) => setActiveIndex(activeIndex === index ? null : index)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
