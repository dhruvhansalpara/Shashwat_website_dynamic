import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Globe, Award, Heart, CheckCircle2, Headphones, BadgeCheck, MapPinned, Sparkles, Compass, CalendarRange } from 'lucide-react';

const trustHighlights = [
  {
    icon: Headphones,
    title: '24/7 Emergency Support',
    description: 'Our travel team stays available before departure, during the journey, and whenever plans change on the road.',
  },
  {
    icon: Shield,
    title: 'Safety-First Planning',
    description: 'Verified partners, dependable transport, and carefully selected stays make every itinerary feel secure and seamless.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Local Guides',
    description: 'We work with experienced destination experts who add real context, local stories, and practical support.',
  },
  {
    icon: MapPinned,
    title: 'All-Inclusive Curation',
    description: 'Clear inclusions, thoughtful pacing, and destination-first experiences help you travel without hidden surprises.',
  },
];

const storySteps = [
  {
    icon: Sparkles,
    step: '01',
    title: 'Listen First',
    description: 'We begin by understanding your travel style, comfort level, pace, and the moments you want the journey to be remembered for.',
  },
  {
    icon: Compass,
    step: '02',
    title: 'Curate Thoughtfully',
    description: 'Our team shapes routes, stays, transport, and experiences into a plan that feels premium, balanced, and effortless.',
  },
  {
    icon: CalendarRange,
    step: '03',
    title: 'Travel Smoothly',
    description: 'From confirmations to on-trip coordination, we stay present behind the scenes so your days unfold with confidence.',
  },
];

export default function About() {
  return (
    <div className="page-shell pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary font-black text-sm uppercase tracking-[0.5em] mb-6 block"
          >
            Our Story & Vision
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-white leading-tight tracking-tighter"
          >
            Crafting Unforgettable <br />
            <span className="italic text-brand-primary font-medium">Global Memories</span>
          </motion.h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl skew-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
                  alt="Our Mission" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-secondary p-10 rounded-[40px] text-white shadow-2xl hidden md:block max-w-sm">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-black mb-4">Our Mission</h3>
                <p className="text-sm opacity-80 leading-relaxed font-medium">To provide luxury travel experiences that are as seamless as they are transformative, leaving a positive footprint everywhere we go.</p>
              </div>
            </motion.div>

            <div>
              <span className="text-brand-secondary font-black text-sm uppercase tracking-widest mb-4 block">
                The Shashwat Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tight mb-8">
                Impactful Travel with <br /> 
                <span className="italic text-brand-primary font-medium">Integrity at its Core.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex-shrink-0 flex items-center justify-center text-brand-primary">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">Trust & Safety First</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">Every destination, hotel, and guide is personally vetted to ensure your journey is as safe as it is spectacular.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex-shrink-0 flex items-center justify-center text-brand-secondary">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">Global Connectivity</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">Our network spans 6 continents, providing you with local insights that search engines can't find.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex-shrink-0 flex items-center justify-center text-brand-accent">
                    <Heart className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">Passion for People</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">We don't just book tours; we build relationships. Our 98% client retention rate speaks for itself.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Components */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="site-container text-center">
          <span className="text-brand-primary font-black text-sm uppercase tracking-[0.4em] mb-6 block">
            Why We Are Trusted
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-16 tracking-tighter">
            Recognized Excellence in <br />
            <span className="italic text-brand-primary font-medium">Bespoke Travel.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Full Transparency', desc: 'No hidden costs, no surprise additions. What you see is exactly what you get.' },
              { title: 'Verified Experts', desc: 'All our guides hold national certifications and carry a minimum of 10 years experience.' },
              { title: 'Traveler Protection', desc: 'Complete financial protection and 24/7 on-ground assistance wherever you fly.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-12 h-12 text-brand-primary mx-auto mb-6" />
                <h4 className="text-xl font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-white/60 font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="soft-card rounded-[40px] px-8 py-10 md:px-12 md:py-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {trustHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className={`px-6 py-6 ${index !== 3 ? 'xl:border-r xl:border-brand-accent/20' : ''} ${index > 0 ? 'md:border-t-0' : ''}`}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-accent/10 text-brand-accent">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black tracking-tight text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="max-w-xs text-base font-medium leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="soft-card rounded-[40px] p-8 md:p-10">
                <span className="mb-4 block text-sm font-black uppercase tracking-widest text-brand-secondary">
                  How We Design Trips
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-gray-900">
                  Animated planning, <span className="italic text-brand-primary">human service</span>
                </h2>
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-500">
                  Every Shashwat itinerary is built around clarity, destination knowledge, and real support. We combine careful planning with warm hospitality so every journey feels considered from start to finish.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-[26px] bg-gray-900 px-6 py-7 text-white shadow-xl shadow-gray-900/20">
                    <p className="text-3xl font-black">2000+</p>
                    <p className="mt-2 text-xs font-black uppercase tracking-widest text-white/65">Curated experiences</p>
                  </div>
                  <div className="rounded-[26px] bg-brand-primary/10 px-6 py-7 text-gray-900">
                    <p className="text-3xl font-black text-brand-primary">15+</p>
                    <p className="mt-2 text-xs font-black uppercase tracking-widest text-gray-500">Years in travel</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-primary/10 blur-3xl" />
              <div className="absolute -bottom-10 left-12 h-32 w-32 rounded-full bg-brand-secondary/10 blur-3xl" />
            </motion.div>

            <div className="space-y-5">
              {storySteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  className="soft-card group rounded-[32px] p-7 md:p-8"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className="flex items-center gap-4 md:w-[180px] md:flex-col md:items-start">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-primary/12 text-brand-primary transition-transform duration-300 group-hover:-translate-y-1">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-[0.28em] text-gray-400">
                        Step {item.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black tracking-tight text-gray-900">{item.title}</h3>
                      <p className="mt-3 text-base font-medium leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
