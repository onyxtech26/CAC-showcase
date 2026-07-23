import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import Contact from '../components/sections/Contact';
import ServiceIconArt from '../components/ui/ServiceIconArt';
import { SERVICES } from '../data';
import { ShieldCheck, ArrowRight, ChevronRight, FileSearch, Layers } from 'lucide-react';

import SEO from '../components/utils/SEO';

interface HomePageProps {
  onInquirySubmitted: () => void;
}

export default function HomePage({ onInquirySubmitted }: HomePageProps) {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="space-y-16 md:space-y-24">
      <SEO
        title="Property Forensic Investigation & Family Estate Recovery"
        description="Independent property forensic investigation, land registry tracing, and historical title verification across Johor & Malaysia."
      />
      {/* 1. Hero Section */}
      <Hero onBookConsultation={handleBookConsultation} />

      {/* 2. Headline Stats Bar */}
      <StatsBar />

      {/* 3. Featured Services Overview */}
      <section className="py-12 px-6 md:px-12 xl:px-20 max-w-[1440px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-secondary/15 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
              // Core Expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface">
              Featured Forensic Capabilities
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-tertiary font-mono text-xs uppercase tracking-wider hover:underline"
          >
            <span>Explore All 12 Disciplines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-surface elevated group relative rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <span aria-hidden="true" className="gold-border" />
              <div className="relative z-[1] space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <ServiceIconArt
                    serviceId={service.id}
                    className="w-20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1"
                  />
                  <span className="font-mono text-[10px] uppercase text-tertiary/70 tracking-widest">
                    0{index + 1} / Verified
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant/80 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-tertiary font-mono text-xs uppercase font-semibold hover:translate-x-1 transition-transform"
              >
                <span>Read Full Scope</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Firm Brief Preview (About Us Snippet) */}
      <section className="py-12 px-6 md:px-12 xl:px-20 max-w-[1440px] mx-auto">
        <div className="bg-surface/40 border border-tertiary/25 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center backdrop-blur-md">
          <div className="space-y-6">
            <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
              // The Firm Overview
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface leading-tight">
              Property Forensic Investigation <br />
              <span className="text-tertiary font-medium">for Family Estates</span>
            </h2>
            <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
              Established in 2009 and incorporated in 2020, Conglomerate Appraisal Consultancy (CAC) specialises in tracing, verifying and documenting ownership history, land grants, and legal status across Johor &amp; All of Malaysia.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 btn-premium bg-tertiary text-surface px-6 py-3.5 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#f0c368] border border-tertiary shadow-md"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Spotlight glow behind the floating estate model */}
            <div className="absolute w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-tertiary/30 via-secondary/10 to-transparent blur-3xl pointer-events-none" />
            <img
              src="/assets/about-forensic-malaysia-3d.webp"
              alt="CAC Malaysian Estate 3D Model"
              className="relative max-h-[360px] object-contain filter drop-shadow-[0_20px_40px_rgba(202,138,4,0.3)] animate-float"
            />
          </div>
        </div>
      </section>

      {/* 5. Process & Intelligence Teaser — deep-navy accent moment */}
      <section className="px-6 md:px-12 xl:px-20 max-w-[1440px] mx-auto">
        <div className="dark-band rounded-3xl px-6 md:px-12 py-14 md:py-20 text-center space-y-8">
          <div className="relative z-[1] max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-gold-highlight uppercase tracking-[0.25em] block">
              // Evidence &amp; Methodology
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Standardized <span className="text-gold-gradient">5-Step</span> Forensic Process
            </h2>
            <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed">
              Every case follows a strict protocol from historical land registry searches to court-ready evidence file compilation.
            </p>
          </div>

          <div className="relative z-[1] flex justify-center pt-2">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 btn-premium bg-tertiary text-surface px-8 py-4 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#f0c368] border border-tertiary shadow-lg"
            >
              <span>Explore 5-Step Process &amp; Intelligence Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <Contact onInquirySubmitted={onInquirySubmitted} />
    </div>
  );
}
