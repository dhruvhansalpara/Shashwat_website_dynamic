import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { destinations as staticDestinations } from '../data/tours';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '../components/shared/SafeImage';
import { getDestinationDisplayImage, getDestinationFallbackImage } from '../utils/travelImages';
import { fetchDestinations } from '../utils/api';
import { Destination } from '../types';

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const dbDestinations = await fetchDestinations();
        
        // If DB has data, use it. Otherwise, use static data.
        if (dbDestinations && dbDestinations.length > 0) {
          setDestinations(dbDestinations);
        } else {
          setDestinations(staticDestinations);
        }
      } catch (err) {
        console.error('Failed to fetch destinations, falling back to static data', err);
        setDestinations(staticDestinations);
      } finally {
        setLoading(false);
      }
    };
    loadDestinations();
  }, []);

  return (
    <div className="page-shell pt-32 pb-24">
      <Helmet>
        <title>Explore Destinations in India | Shashwat Holidays</title>
        <meta name="description" content="Discover the most beautiful travel destinations in India. From Rajasthan's deserts to Kerala's backwaters and Himachal's mountains." />
      </Helmet>
      <div className="site-container">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">
            Explore India
          </span>
          <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900 tracking-tight mb-6">
            Our <span className="italic text-brand-primary">Destinations</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Browse states and regions we cover most often — deserts, ghats, mountains, beaches, and heritage circuits — each with curated multi-day packages.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[420px] overflow-hidden rounded-[32px] shadow-lg shadow-black/5"
              >
                <Link
                  to={`/tours?region=${encodeURIComponent(destination.toursRegion || '')}`}
                  className="absolute inset-0 block focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/60 rounded-[32px]"
                >
                  <SafeImage
                    src={getDestinationDisplayImage(destination)}
                    fallbackSrc={getDestinationFallbackImage(destination)}
                    alt={destination.name}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="mb-4 w-fit rounded-full bg-brand-primary/95 backdrop-blur-sm px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                      {(destination.tourCount || 0)} PREMIUM PACKAGES
                    </div>
                    <h3 className="mb-4 text-3xl font-black leading-tight text-white">{destination.name}</h3>
                    <span className="flex items-center gap-2 text-sm font-black text-white/90 group-hover:text-white transition-colors">
                      Explore state highlights
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

