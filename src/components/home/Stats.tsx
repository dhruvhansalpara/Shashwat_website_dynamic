import React from 'react';
import { motion } from 'motion/react';
import { Send, Globe, Users, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Send,
    value: "11.3M+",
    label: "Our Journey",
    delay: 0.1
  },
  {
    icon: Globe,
    value: "247K",
    label: "Supports",
    delay: 0.2
  },
  {
    icon: Users,
    value: "366K",
    label: "Happy Clients",
    delay: 0.3
  },
  {
    icon: MapPin,
    value: "321+",
    label: "Destinations",
    delay: 0.4
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-gray-50/40" id="stats">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.6 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <stat.icon className="w-8 h-8 text-brand-secondary transform group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-black text-brand-dark mb-3 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em] ml-[0.3em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
