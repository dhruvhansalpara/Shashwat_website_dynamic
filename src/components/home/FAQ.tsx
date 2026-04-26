import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../../config/contact';

const faqs = [
  {
    question: "How do I book a tour?",
    answer: "You can book directly through our website by selecting your preferred tour and dates, then following the secure checkout process."
  },
  {
    question: "Can I customize my itinerary?",
    answer: "Yes, we offer wide range of custom travel planning services. Reach out to our team to create a personalized journey that fits your specific needs and interests."
  },
  {
    question: "Are flights included?",
    answer: "Typically, international flights are not included in our standard tour packages to allow you more flexibility. However, we can assist with flight bookings as an add-on service if requested."
  },
  {
    question: "How many people are in a group tour?",
    answer: "Our group tours usually range from 10 to 20 people, ensuring a more intimate and personalized experience for everyone while maintaining a great social atmosphere."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="home-section-soft home-section-white py-24" id="faq">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HelpCircle className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">Faq's</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-dark mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Travel planning has never been easier.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'border-transparent shadow-xl' : 'border-gray-100'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`w-full flex items-center justify-between px-8 py-6 text-left transition-colors ${
                    activeIndex === index ? 'bg-brand-secondary text-white' : 'bg-white text-gray-900 group'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${
                      activeIndex === index ? 'border-white/30 text-white' : 'border-brand-primary/30 text-brand-primary group-hover:bg-brand-primary/10'
                    }`}>
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
                      <div className="px-8 pb-8 pt-2 bg-gray-50/50">
                        <p className="text-gray-500 text-lg leading-relaxed ml-12">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white border border-gray-100 p-8 rounded-[40px] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -tr-16 -te-16" />
            
            <div className="relative z-10">
              <div className="bg-gray-50 p-6 rounded-3xl mb-8 border border-gray-100/50">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 relative">
                  <MessageSquare className="w-6 h-6 text-brand-primary" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-primary rounded-full border-2 border-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-4 leading-tight">
                  Let us guide you—reach out anytime.
                </h3>
                <a href={CONTACT_MAILTO} className="block break-all font-bold text-brand-primary hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="text-center space-y-8">
                <p className="text-gray-500 font-medium px-4">
                  Got more questions? Find answers on our FAQ page
                </p>
                
                <Link
                  to="/faq"
                  className="flex items-center justify-between bg-brand-accent hover:opacity-90 text-white p-1 rounded-full group transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span className="pl-6 font-bold uppercase text-xs tracking-widest">Read All Faq's</span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-accent transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
