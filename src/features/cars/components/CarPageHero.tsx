import React from 'react';
import { motion } from 'motion/react';
import { Car, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../../../config/contact';
import { SHASHWAT_INSTAGRAM_URL } from '../../../config/social';

export default function CarPageHero() {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-2 mb-4"
      >
        <Car className="w-5 h-5 text-brand-secondary" />
        <span className="text-brand-secondary font-black text-xs uppercase tracking-widest">
          Cab fleet (Ahmedabad & outstation)
        </span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="text-5xl md:text-6xl font-display font-black text-gray-900 mb-4 tracking-tight"
      >
        Premium <span className="text-brand-primary italic">Car Rental</span> services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-500 text-lg max-w-2xl mx-auto mb-6"
      >
        One-way, local, and outstation cabs with clear per-km pricing in INR. Fleet mix and indicative rates follow
        typical Ahmedabad market bands for Innova, Ertiga, Dzire, and hatchbacks â€”{' '}
        <a
          href={SHASHWAT_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary font-bold underline-offset-2 hover:underline"
        >
          Shashwat Holidays on Instagram
        </a>{' '}
        for updates; we confirm the final fare on route and date.
      </motion.p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <a
          href={`tel:${CONTACT_PHONE_TEL}`}
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-700 underline-offset-2 hover:text-brand-primary hover:underline"
        >
          <Phone className="h-4 w-4 shrink-0" />
          {CONTACT_PHONE_DISPLAY}
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-primary hover:underline"
        >
          Get a cab quote
        </Link>
      </div>
    </div>
  );
}
