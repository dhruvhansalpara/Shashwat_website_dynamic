import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tours as staticTours } from '../../data/tours';
import TourCard from '../../features/tours/components/TourCard';
import { getFeaturedTours } from '../../features/tours/utils';
import { fetchPackages } from '../../utils/api';
import { Tour } from '../../types';

export default function TourPackages() {
  const [allTours, setAllTours] = useState<Tour[]>([]);

  useEffect(() => {
    const loadTours = async () => {
      try {
        const dbTours = await fetchPackages();
        setAllTours(dbTours || []);
      } catch (err) {
        console.error('Failed to fetch tours', err);
        setAllTours([]);
      }
    };
    loadTours();
  }, []);

  const homeTours = useMemo(() => getFeaturedTours(allTours), [allTours]);

  return (
    <section className="home-section-soft home-section-muted py-24">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-4 block">
            Featured Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Most Popular Tours
          </h2>
          <p className="text-gray-500">
            Hand-picked domestic packages across Rajasthan, Kerala, the mountains, coast, and spiritual circuits — priced transparently in INR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeTours.map((tour, index) => (
            <React.Fragment key={tour.id}>
              <TourCard tour={tour} index={index} variant="home" />
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/tours"
            className="inline-block bg-white border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-10 py-4 rounded-full font-black transition-all uppercase text-sm tracking-[0.2em] active:scale-95 shadow-xl shadow-brand-secondary/10"
          >
            Discover More Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
