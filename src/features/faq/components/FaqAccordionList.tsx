import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Minus, Plus } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionListProps = {
  items: FaqItem[];
  activeIndex: number | null;
  onToggle: (index: number) => void;
};

export default function FaqAccordionList({
  items,
  activeIndex,
  onToggle,
}: FaqAccordionListProps) {
  if (items.length === 0) {
    return (
      <div className="soft-card text-center py-20 rounded-3xl border border-dashed border-gray-200">
        <HelpCircle className="w-12 h-12 text-gray-200 mx-auto mb-4" />
        <p className="text-gray-400 font-bold">No questions found in this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
            activeIndex === index
              ? 'border-transparent shadow-xl ring-1 ring-gray-100'
              : 'border-gray-100 bg-white/90 backdrop-blur-sm'
          }`}
        >
          <button
            onClick={() => onToggle(index)}
            className={`w-full flex items-center justify-between px-8 py-7 text-left transition-colors ${
              activeIndex === index ? 'bg-brand-secondary text-white' : 'bg-white text-gray-900'
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                  activeIndex === index ? 'border-white/30 text-white' : 'border-brand-primary/30 text-brand-primary'
                }`}
              >
                {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
              <span className="text-lg font-bold tracking-tight">{faq.question}</span>
            </div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-10 pb-10 pt-4 bg-white">
                  <p className="text-gray-500 text-lg leading-relaxed ml-10">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
