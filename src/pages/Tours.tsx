import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { tours as staticTours } from '../data/tours';
import { Filter, Search, Calendar, Users, X, MapPin } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { filterToursByDestinationQuery, filterToursByExactRegion } from '../features/tours/utils/search';
import { TOUR_CATEGORIES } from '../features/tours/constants';
import TourCard from '../features/tours/components/TourCard';
import { formatSearchDate } from '../features/tours/utils';
import { fetchPackages } from '../utils/api';
import { Tour } from '../types';

export default function ToursPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [allTours, setAllTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTours = async () => {
      try {
        const dbTours = await fetchPackages();
        setAllTours(dbTours || []);
      } catch (err) {
        console.error('Failed to fetch tours', err);
        setAllTours([]);
      } finally {
        setLoading(false);
      }
    };
    loadTours();
  }, []);

  const regionQ = searchParams.get('region')?.trim() ?? '';
  const destinationQ = searchParams.get('destination')?.trim() ?? '';
  const dateQ = searchParams.get('date')?.trim() ?? '';
  const travelersQ = searchParams.get('travelers')?.trim() ?? '';

  const hasSearchContext = Boolean(regionQ || destinationQ || dateQ || travelersQ);

  const filteredBySearch = useMemo(() => {
    if (regionQ) return filterToursByExactRegion(allTours, regionQ);
    return filterToursByDestinationQuery(allTours, destinationQ);
  }, [regionQ, destinationQ, allTours]);

  const filteredTours =
    activeCategory === 'All'
      ? filteredBySearch
      : filteredBySearch.filter((tour) => tour.category === activeCategory);

  const clearSearch = () => {
    setSearchParams({});
  };

  if (loading) {
    return (
      <div className="page-shell min-h-screen flex items-center justify-center pt-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <Helmet>
        <title>{`${regionQ ? `Tour Packages in ${regionQ}` : destinationQ ? `Tours matching "${destinationQ}"` : 'All India Tour Packages'} | Shashwat Holidays`}</title>
        <meta name="description" content={`Find the best ${regionQ || destinationQ || 'domestic and international'} tour packages at Shashwat Holidays. Explore diverse destinations with our expert planning.`} />
        <meta property="og:title" content={`${regionQ ? `Tour Packages in ${regionQ}` : destinationQ ? `Tours matching "${destinationQ}"` : 'All India Tour Packages'} | Shashwat Holidays`} />
        <meta property="og:description" content={`Find the best ${regionQ || destinationQ || 'domestic and international'} tour packages at Shashwat Holidays. Explore diverse destinations with our expert planning.`} />
        <meta property="og:image" content="https://shashwatholidays.in/shashwat-logo-new.png" />
        <meta property="og:url" content={`https://shashwatholidays.in/tours${regionQ ? `?region=${regionQ}` : destinationQ ? `?destination=${destinationQ}` : ''}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${regionQ ? `Tour Packages in ${regionQ}` : destinationQ ? `Tours matching "${destinationQ}"` : 'All India Tour Packages'} | Shashwat Holidays`} />
        <meta name="twitter:description" content={`Find the best ${regionQ || destinationQ || 'domestic and international'} tour packages at Shashwat Holidays. Explore diverse destinations with our expert planning.`} />
        <meta name="twitter:image" content="https://shashwatholidays.in/shashwat-logo-new.png" />
      </Helmet>
      <div className="site-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-secondary font-black text-sm uppercase tracking-widest mb-4 block">
              Adventure Awaits
            </span>
            <h1 className="text-5xl font-display font-black text-gray-900 tracking-tight">
              All <span className="italic text-brand-primary">Tour Packages</span>
            </h1>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {TOUR_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20 scale-105' 
                    : 'bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {hasSearchContext && (
          <div className="soft-card mb-10 rounded-[2rem] border border-brand-primary/20 p-6 md:p-8 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-brand-primary">
                  Your search
                </p>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                  {regionQ ? (
                    <>
                      Packages in{' '}
                      <span className="text-brand-secondary">{regionQ}</span>
                    </>
                  ) : destinationQ ? (
                    <>
                      Packages matching{' '}
                      <span className="text-brand-secondary">&ldquo;{destinationQ}&rdquo;</span>
                    </>
                  ) : (
                    <>All packages</>
                  )}
                </h2>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-medium">
                  {regionQ && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1.5">
                      <MapPin className="h-4 w-4 text-brand-primary" />
                      State / region filter
                    </span>
                  )}
                  {dateQ && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1.5">
                      <Calendar className="h-4 w-4 text-brand-primary" />
                      {formatSearchDate(dateQ)}
                    </span>
                  )}
                  {travelersQ && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1.5">
                      <Users className="h-4 w-4 text-brand-primary" />
                      {travelersQ}{' '}
                      {Number(travelersQ) === 1 ? 'traveler' : 'travelers'}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to={regionQ ? '/destinations' : '/#tour-search'}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-gray-700 transition-colors hover:border-brand-primary hover:text-brand-primary"
                >
                  <Search className="h-4 w-4" />
                  {regionQ ? 'Change region' : 'Edit search'}
                </Link>
                <button
                  type="button"
                  onClick={clearSearch}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-brand-secondary"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <p className="text-gray-500 font-medium">
            Showing{' '}
            <span className="text-gray-900 font-bold">{filteredTours.length}</span>
            {regionQ ? (
              <>
                {' '}
                in <span className="text-gray-900 font-bold">{regionQ}</span>
                {activeCategory !== 'All' && (
                  <>
                    {' '}
                    · category <span className="text-gray-900 font-bold">{activeCategory}</span>
                  </>
                )}
              </>
            ) : destinationQ ? (
              <>
                {' '}
                of <span className="text-gray-900 font-bold">{filteredBySearch.length}</span> matching
                &ldquo;{destinationQ}&rdquo;
                {activeCategory !== 'All' && (
                  <>
                    {' '}
                    in <span className="text-gray-900 font-bold">{activeCategory}</span>
                  </>
                )}
              </>
            ) : (
              <> tours{activeCategory !== 'All' ? ` in ${activeCategory}` : ''}</>
            )}
          </p>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-900">
            <Filter className="w-4 h-4" />
            Sort By: Recommended
          </button>
        </div>

        {filteredTours.length === 0 && (
          <div className="soft-card mb-12 rounded-[2rem] border border-dashed border-gray-200 px-8 py-16 text-center">
            <Search className="mx-auto mb-4 h-12 w-12 text-gray-300" />
            <h3 className="mb-2 text-xl font-black text-gray-900">No packages found</h3>
            <p className="mx-auto mb-8 max-w-md text-gray-500">
              {regionQ
                ? `No published packages for “${regionQ}” with the current category filter. Try “All”, pick another state on Destinations, or clear filters.`
                : destinationQ
                  ? `We could not find tours matching “${destinationQ}” with the current filters. Try a different spelling, switch category to All, or clear the search.`
                  : 'No tours match this category right now. Try selecting “All”.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {activeCategory !== 'All' && (
                <button
                  type="button"
                  onClick={() => setActiveCategory('All')}
                  className="rounded-full bg-brand-primary px-6 py-3 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-brand-primary/25"
                >
                  Show all categories
                </button>
              )}
              {(destinationQ || regionQ) && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="rounded-full border-2 border-gray-200 px-6 py-3 text-xs font-black uppercase tracking-widest text-gray-800 hover:border-brand-primary"
                >
                  Clear filters
                </button>
              )}
              <Link
                to="/#tour-search"
                className="rounded-full border-2 border-gray-200 px-6 py-3 text-xs font-black uppercase tracking-widest text-gray-800 hover:border-brand-primary"
              >
                New search
              </Link>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <React.Fragment key={tour.id}>
              <TourCard tour={tour} index={index} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
