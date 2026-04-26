import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import EnquiryModal from '../features/enquiry/components/EnquiryModal';
import { CAR_FILTER_TABS } from '../features/cars/constants';
import CarCard from '../features/cars/components/CarCard';
import CarFeatureHighlights from '../features/cars/components/CarFeatureHighlights';
import CarFilterTabs from '../features/cars/components/CarFilterTabs';
import CarPageHero from '../features/cars/components/CarPageHero';
import { formatInr } from '../utils/currency';
import { fetchCars } from '../utils/api';
import { Car } from '../types';

export default function CarRentalPage() {
  const [tab, setTab] = useState<(typeof CAR_FILTER_TABS)[number]>('All');
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const dbCars = await fetchCars();
        setCars(dbCars || []);
      } catch (err) {
        console.error('Failed to fetch cars', err);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };
    loadCars();
  }, []);

  const filteredCars = useMemo(() => {
    if (tab === 'All') return cars;
    return cars.filter((car) => car.category === tab);
  }, [tab, cars]);

  const selectedCar = useMemo(
    () => cars.find((car) => car.id === selectedCarId) ?? null,
    [selectedCarId, cars]
  );

  if (loading) {
    return (
      <div className="page-shell min-h-screen flex items-center justify-center pt-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Premium Car Rental Services | Shashwat Holidays</title>
        <meta name="description" content="Safe and reliable car rental across Rajasthan and India. Book Sedans, SUVs, and luxury coaches with top-rated drivers." />
        <meta property="og:title" content="Premium Car Rental Services | Shashwat Holidays" />
        <meta property="og:description" content="Safe and reliable car rental across Rajasthan and India. Book Sedans, SUVs, and luxury coaches with top-rated drivers." />
        <meta property="og:image" content="https://shashwatholidays.in/shashwat-logo-new.png" />
        <meta property="og:url" content="https://shashwatholidays.in/car-rental" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Car Rental Services | Shashwat Holidays" />
        <meta name="twitter:description" content="Safe and reliable car rental across Rajasthan and India. Book Sedans, SUVs, and luxury coaches with top-rated drivers." />
        <meta name="twitter:image" content="https://shashwatholidays.in/shashwat-logo-new.png" />
      </Helmet>
      <div className="site-container">
        <CarPageHero />
        <CarFilterTabs activeTab={tab} onTabChange={setTab} />
        <CarFeatureHighlights />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <React.Fragment key={car.id}>
              <CarCard car={car} index={index} onBook={setSelectedCarId} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <EnquiryModal
        isOpen={Boolean(selectedCar)}
        onClose={() => setSelectedCarId(null)}
        packageName={selectedCar ? `${selectedCar.model} (${selectedCar.type})` : ''}
        packagePrice={selectedCar ? `${formatInr(selectedCar.pricePerKm)}/km` : ''}
        enquiryType="car"
        itemLabel="Car"
        dialogTitle="Book This Car"
        submitLabel="Send Car Request"
      />
    </div>
  );
}
