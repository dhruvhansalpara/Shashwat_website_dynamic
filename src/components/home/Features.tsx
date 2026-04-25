import React from 'react';
import { ShieldCheck, Calendar, Map, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Safety First Always',
    description: 'We prioritize your safety with verified local partners and comprehensive travel insurance options.'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Easy Booking',
    description: 'Our seamless booking process ensures your travel plan is ready in just a few clicks.'
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: 'Expert Local Guides',
    description: 'Travel with the best guides who know every hidden gem and local story of your destination.'
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: '24/7 Premium Support',
    description: 'Our dedicated support team is available around the clock to assist you wherever you are.'
  }
];

export default function Features() {
  return (
    <section className="home-section-soft home-section-muted py-24">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Image Side */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop" 
                alt="Travelers" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-brand-secondary p-8 rounded-[32px] text-white shadow-xl shadow-brand-secondary/40 hidden md:block max-w-xs">
              <p className="text-4xl font-black mb-2 uppercase tracking-tighter">12,000+</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Satisfied Travelers Worldwide</p>
            </div>
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0 opacity-50" />
          </div>

          {/* Right: Content Side */}
          <div className="flex-1">
            <span className="text-brand-secondary font-black text-sm uppercase tracking-widest mb-4 block">
              Why Choose Shashwat
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tight mb-8">
              We Provide the <br /> 
              <span className="italic text-brand-primary">Best Travel Experience</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12 font-medium">
              With over 15 years of experience, we've developed the perfect formula for unforgettable trips. We handle all the details so you can focus on making memories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                    index % 2 === 0 ? 'bg-brand-primary/10 text-brand-primary' : 'bg-brand-secondary/10 text-brand-secondary'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-3 uppercase tracking-tighter">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
