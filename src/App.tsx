/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import PageLoader from './components/ui/PageLoader';
import WhatsAppChat from './features/support/components/WhatsAppChat';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import DestinationsPage from './pages/Destinations';
import ToursPage from './pages/Tours';
import TourDetails from './pages/TourDetails';
import ContactPage from './pages/Contact';
import FAQPage from './pages/FAQ';
import CarRentalPage from './pages/CarRental';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';
import RefundPolicyPage from './pages/RefundPolicy';
import HelpCenterPage from './pages/HelpCenter';
import AdminPage from './pages/Admin';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Shashwat Holidays | Premium Tours & Car Rentals in India</title>
          <link rel="canonical" href="https://shashwatholidays.in/" />
        </Helmet>
        <PageLoader />
        <ScrollToTop />
        <div className="app-shell min-h-screen flex flex-col">
          <Navbar />
          <main className="content-shell flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/car-rental" element={<CarRentalPage />} />
              <Route path="/tour/:id" element={<TourDetails />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppChat />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
