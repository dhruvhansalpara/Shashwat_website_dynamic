import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { tours as staticTours } from '../data/tours';
import {
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import { formatInr } from '../utils/currency';
import { getTodayInputDate } from '../utils/date';
import EnquiryModal from '../features/enquiry/components/EnquiryModal';
import TourBookingSidebar from '../features/tours/components/TourBookingSidebar';
import TourDetailsHero from '../features/tours/components/TourDetailsHero';
import TourDetailsTabs from '../features/tours/components/TourDetailsTabs';
import TourGalleryTab from '../features/tours/components/TourGalleryTab';
import TourInfoTab from '../features/tours/components/TourInfoTab';
import TourItineraryTab from '../features/tours/components/TourItineraryTab';
import { type TourTabType } from '../features/tours/constants';
import { buildTourWhatsAppUrl } from '../features/tours/utils';
import { getTourDisplayImage } from '../utils/travelImages';
import { fetchPackages } from '../utils/api';
import { Tour } from '../types';

export default function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab ] = useState<TourTabType>('info');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const todayInputMin = getTodayInputDate();
  const [travelDate, setTravelDate] = useState(() => todayInputMin);
  const [guestCount, setGuestCount] = useState('2 Adults, 0 Children');
  
  useEffect(() => {
    const loadTour = async () => {
      try {
        const dbPackages = await fetchPackages();
        const found = dbPackages.find((p: any) => p.id === id);
        setTour(found || null);
      } catch (err) {
        console.error('Failed to fetch tour', err);
        setTour(null);
      } finally {
        setLoading(false);
      }
    };
    loadTour();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary mx-auto"></div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-3xl font-bold">Tour not found</h2>
        <Link to="/tours" className="text-brand-primary font-bold mt-4 inline-block">Back to Tours</Link>
      </div>
    );
  }

  const tourWhatsAppUrl = buildTourWhatsAppUrl(
    `Hello Shashwat Holidays, I have a question about the ${tour.title} tour.`
  );
  
  const imageSrc = tour.image || getTourDisplayImage(tour as any);

  return (
    <div className="page-shell min-h-screen pt-24 pb-24">
      <Helmet>
        <title>{`${tour.title} | Tour Package | Shashwat Holidays`}</title>
        <meta name="description" content={`Book the best ${tour.title} tour package at Shashwat Holidays. Explore ${tour.location} with our premium travel services.`} />
        <meta property="og:title" content={`${tour.title} - Shashwat Holidays`} />
        <meta property="og:description" content={`Discover ${tour.title} in ${tour.location}. Premium experiences, local guides, and seamless booking.`} />
        <meta property="og:image" content={imageSrc} />
      </Helmet>
      <TourDetailsHero tour={tour} />

      <div className="site-container mt-8">
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-hidden whitespace-nowrap">
          <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/tours" className="hover:text-brand-primary transition-colors">Tours</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gray-900 truncate">{tour.title}</span>
        </nav>
      </div>

      <div className="site-container mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <TourDetailsTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'info' && <TourInfoTab tour={tour} />}
                {activeTab === 'itinerary' && <TourItineraryTab tour={tour} />}
                {activeTab === 'gallery' && <TourGalleryTab tour={tour} />}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <TourBookingSidebar
              priceLabel={formatInr(tour.price)}
              reviews={tour.reviews}
              travelDate={travelDate}
              guestCount={guestCount}
              minTravelDate={todayInputMin}
              whatsappUrl={tourWhatsAppUrl}
              onTravelDateChange={setTravelDate}
              onGuestCountChange={setGuestCount}
              onEnquiryClick={() => setIsEnquiryOpen(true)}
            />
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        packageName={tour.title}
        packagePrice={formatInr(tour.price)}
        expectedDate={travelDate}
        adultCount={guestCount}
        onExpectedDateChange={setTravelDate}
        onAdultCountChange={setGuestCount}
      />
    </div>
  );
}
