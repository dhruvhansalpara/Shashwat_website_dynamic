import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import EnquiryModal from '../features/enquiry/components/EnquiryModal';
import { cars } from '../data/cars';
import { CAR_FILTER_TABS } from '../features/cars/constants';
import CarCard from '../features/cars/components/CarCard';
import CarFeatureHighlights from '../features/cars/components/CarFeatureHighlights';
import CarFilterTabs from '../features/cars/components/CarFilterTabs';
import CarPageHero from '../features/cars/components/CarPageHero';
import { formatInr } from '../utils/currency';

export default function CarRentalPage() {
  const [tab, setTab] = useState<(typeof CAR_FILTER_TABS)[number]>('All');
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);

  const filteredCars = useMemo(() => {
    if (tab === 'All') return cars;
    return cars.filter((car) => car.category === tab);
  }, [tab]);

  const selectedCar = useMemo(
    () => cars.find((car) => car.id === selectedCarId) ?? null,
    [selectedCarId]
  );

  return (
    <div className="page-shell min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Premium Car Rental Services | Shashwat Holidays</title>
        <meta name="description" content="Safe and reliable car rental across Rajasthan and India. Book Sedans, SUVs, and luxury coaches with top-rated drivers." />
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
