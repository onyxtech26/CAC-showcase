import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PremiumBackground from './components/ui/PremiumBackground';
import InquiryLogModal from './components/ui/InquiryLogModal';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProcessPage from './pages/ProcessPage';
import TrackRecordPage from './pages/TrackRecordPage';
import WhyCACPage from './pages/WhyCACPage';
import ContactPage from './pages/ContactPage';

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
      <div className="min-h-screen bg-transparent text-on-surface font-sans selection:bg-secondary selection:text-surface flex flex-col justify-between">
        {/* Static premium land-survey graphic background */}
        <PremiumBackground />

        {/* Dynamic Floating Glass Navbar */}
        <Navbar onOpenInquiryLog={handleOpenInquiryLog} />

        {/* Multi-Page Client-Side Routes */}
        <main className="flex-grow z-10">
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
