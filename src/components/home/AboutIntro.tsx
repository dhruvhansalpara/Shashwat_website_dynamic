import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustSignals = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    label: 'Bonded & Insured',
    detail: 'Full financial protection for your peace of mind.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    label: 'Award Winning',
    detail: 'Voted #1 Boutique Travel Agency 2024.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    label: 'Expert Curation',
    detail: 'Every itinerary is hand-crafted and personally vetted.'
  }
];

export default function AboutIntro() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Visual Side */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="rounded-[32px] overflow-hidden shadow-2xl"
                >
                  <img src="https://images.unsplash.com/photo-1539635278303-d4002c07dee3?q=80&w=400" alt="Culture" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="rounded-[32px] overflow-hidden shadow-2xl bg-brand-primary p-8 text-white text-center"
                >
                  <p className="text-4xl font-black mb-1 leading-none">15+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Years of Experience</p>
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="rounded-[32px] overflow-hidden shadow-2xl"
                >
                  <img src="https://images.unsplash.com/photo-1540202404-a2f29016bb5d?q=80&w=400" alt="Experience" className="w-full h-[320px] object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <div className="rounded-[32px] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1621644024834-d9bc265bf029?q=80&w=400" alt="Team" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-secondary/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="flex-1 order-1 lg:order-2">
            <span className="text-brand-secondary font-black text-sm uppercase tracking-widest mb-4 block">
              The Shashwat Legacy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tight mb-8 leading-[1.05]">
              Beyond Travel.<br />
              <span className="italic text-brand-primary font-medium">Bespoke Life Journeys.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              We started with a simple belief: travel isn't just about the marks on a map, it's about the marks left on your soul. Since our inception, we've curated over 2,000 unique experiences for travelers who seek the authentic, the luxury, and the unforgettable.
            </p>

            <div className="space-y-8 mb-12">
              {trustSignals.map((signal, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 border border-gray-100">
                    {signal.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-1">{signal.label}</h4>
                    <p className="text-sm text-gray-400 font-medium leading-tight">{signal.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-8 border-t border-gray-200 pt-10">
              <Link 
                to="/about"
                className="px-10 py-5 bg-gray-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-primary transition-all active:scale-95 shadow-xl shadow-gray-200"
              >
                Our Whole Story
              </Link>
              <div className="flex items-center gap-4">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Trusted By</p>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=50&h=50&fit=crop&q=80`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-primary flex items-center justify-center text-[10px] font-bold text-white shadow-sm backdrop-blur-sm">
                    +10k
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
