import { useState } from 'react';
import PremiumBackground from './components/ui/PremiumBackground';
import InquiryLogModal from './components/ui/InquiryLogModal';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import CompletedProjects from './components/sections/CompletedProjects';
import Timeline from './components/sections/Timeline';
import StatsBar from './components/sections/StatsBar';
import WhyCAC from './components/sections/WhyCAC';
import Contact from './components/sections/Contact';
import IntelligenceHub from './components/sections/IntelligenceHub';

export default function App() {
  const [isInquiryLogOpen, setIsInquiryLogOpen] = useState(false);

  const handleBookConsultation = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiryLog = () => {
    setIsInquiryLogOpen(true);
  };

  const handleInquirySubmitted = () => {
    // We can show optional confirmation or trigger modal refreshes
  };

  return (
    <div className="min-h-screen bg-transparent text-on-surface font-sans selection:bg-secondary selection:text-surface">
      {/* Static premium land-survey graphic background (site-wide) */}
      <PremiumBackground />

      {/* Dynamic Floating Glass Navbar */}
      <Navbar onOpenInquiryLog={handleOpenInquiryLog} />

      {/* Hero Section with animated property graphic */}
      <Hero onBookConsultation={handleBookConsultation} />

      {/* 12 Capabilities with expandable forensics drawer */}
      <Services />

      {/* Property Intelligence Dashboard Hub */}
      <IntelligenceHub />

      {/* Firm Overview Section */}
      <About />

      {/* Interactive Process Stepper with system outputs */}
      <Timeline />

      {/* Headline track-record stats bar */}
      <StatsBar />

      {/* Completed Projects — futuristic neon track-record cards */}
      <CompletedProjects />

      {/* Why Choose CAC and Vision/Mission offset grid */}
      <WhyCAC />

      {/* Consultation form & Mohaan Specialist details */}
      <Contact onInquirySubmitted={handleInquirySubmitted} />

      {/* Brand Disclaimer & Columns Footer */}
      <Footer />

      {/* Dialog Modals */}
      <InquiryLogModal
        isOpen={isInquiryLogOpen}
        onClose={() => setIsInquiryLogOpen(false)}
      />

    </div>
  );
}
