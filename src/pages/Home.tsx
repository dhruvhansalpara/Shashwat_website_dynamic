import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Destinations from '../components/home/Destinations';
import TourPackages from '../components/home/TourPackages';
import CarRental from '../components/home/CarRental';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Shashwat Holidays",
    "image": "https://shashwatholidays.in/shashwat-logo-new.png",
    "@id": "https://shashwatholidays.in/",
    "url": "https://shashwatholidays.in/",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.0225,
      "longitude": 72.5714
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <>
      <Helmet>
        <title>Shashwat Holidays | Best Tour Packages & Car Rentals in India</title>
        <meta name="description" content="Official website of Shashwat Holidays. Book premium domestic and international tour packages. Expert travel planning for Rajasthan, Kerala, and Bhutan." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Hero />
      <Destinations />
      <TourPackages />
      <CarRental />
      <Features />
      <Testimonials />
      <FAQ />
    </>
  );
}
