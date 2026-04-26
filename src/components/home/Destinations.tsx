import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations as staticDestinations } from '../../data/tours';
import SafeImage from '../shared/SafeImage';
import { getDestinationDisplayImage, getDestinationFallbackImage } from '../../utils/travelImages';
import { fetchDestinations, fetchPackages } from '../../utils/api';
import { Destination, Tour } from '../../types';

export default function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [packages, setPackages] = useState<Tour[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [dbDestinations, dbPackages] = await Promise.all([
          fetchDestinations(),
          fetchPackages()
        ]);
        
        setPackages(dbPackages || []);
        
        // If DB has data, use it. Otherwise, use static data.
        if (dbDestinations && dbDestinations.length > 0) {
          setDestinations(dbDestinations.slice(0, 4));
        } else {
          setDestinations(staticDestinations.slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to fetch destinations, falling back to static data', err);
        setDestinations(staticDestinations.slice(0, 4));
      }
    };
    loadData();
  }, []);

  const getDynamicTourCount = (dest: Destination) => {
    // Count packages that match this destination's toursRegion or name
    const region = (dest.toursRegion || '').toLowerCase().trim();
    const name = (dest.name || '').toLowerCase().trim();
    
    const count = packages.filter(pkg => {
      const pkgRegion = (pkg.searchRegion || '').toLowerCase().trim();
      return pkgRegion === region || pkgRegion === name;
    }).length;

    return count > 0 ? count : (dest.tourCount || 0);
  };

  return (
    <section className="home-section-soft py-24 bg-white/40">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-secondary font-black text-sm uppercase tracking-widest mb-4 block">
              Dream Destinations
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tight">
              Escape to the <br /> 
              <span className="italic text-brand-primary">Heart of Nature</span>
            </h2>
          </div>
          <Link 
            to="/destinations"
            className="flex items-center gap-2 group text-gray-900 font-bold hover:text-brand-secondary transition-colors"
          >
            View All Destinations
            <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-brand-secondary group-hover:border-brand-secondary group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => {
            const dynamicCount = getDynamicTourCount(destination);
            
            return (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 70, scale: 0.9, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 12,
                  mass: 0.85,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative h-[420px] overflow-hidden rounded-[32px]"
              >
                <div className="relative h-full w-full">
                  <SafeImage
                    src={getDestinationDisplayImage(destination)}
                    fallbackSrc={getDestinationFallbackImage(destination)}
                    alt={destination.name}
                    className="h-full w-full min-h-[420px] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent " />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute right-6 top-6 z-20">
                    <div className="rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-widest text-gray-900 shadow-xl shadow-black/20 backdrop-blur-md">
                      {dynamicCount} {dynamicCount === 1 ? 'Package' : 'Packages'}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0 text-white">
                    <p className="text-brand-secondary font-black text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {dynamicCount} PREMIUM Tours
                    </p>
                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                      {destination.name}
                    </h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + index * 0.05, duration: 0.45 }}
                      viewport={{ once: true }}
                      className="mt-5"
                    >
                      <Link
                        to={`/tours?region=${encodeURIComponent(destination.toursRegion || destination.name || '')}`}
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 text-sm font-black text-white backdrop-blur-sm transition-all hover:bg-brand-secondary hover:border-brand-secondary hover:scale-105"
                      >
                        <Ticket className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" />
                        View Tours
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
