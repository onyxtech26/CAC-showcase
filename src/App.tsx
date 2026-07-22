import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PremiumBackground from './components/ui/PremiumBackground';
import InquiryLogModal from './components/ui/InquiryLogModal';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageLoader from './components/ui/PageLoader';
import ScrollToTop from './components/utils/ScrollToTop';

// Lazy Loaded Pages for Optimized Bundle Code-Splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const TrackRecordPage = lazy(() => import('./pages/TrackRecordPage'));
const WhyCACPage = lazy(() => import('./pages/WhyCACPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  const [isInquiryLogOpen, setIsInquiryLogOpen] = useState(false);

  const handleOpenInquiryLog = () => {
    setIsInquiryLogOpen(true);
  };

  const handleInquirySubmitted = () => {
    // Confirmation handling
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-transparent text-on-surface font-sans selection:bg-secondary selection:text-surface flex flex-col justify-between">
        {/* Static premium land-survey graphic background */}
        <PremiumBackground />

        {/* Dynamic Floating Glass Navbar */}
        <Navbar onOpenInquiryLog={handleOpenInquiryLog} />

        {/* Multi-Page Client-Side Routes with Suspense Fallback */}
        <main className="flex-grow z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage onInquirySubmitted={handleInquirySubmitted} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/projects" element={<TrackRecordPage />} />
              <Route path="/why-cac" element={<WhyCACPage />} />
              <Route path="/contact" element={<ContactPage onInquirySubmitted={handleInquirySubmitted} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Brand Disclaimer & Columns Footer */}
        <Footer />

        {/* Dialog Modals */}
        <InquiryLogModal
          isOpen={isInquiryLogOpen}
          onClose={() => setIsInquiryLogOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
