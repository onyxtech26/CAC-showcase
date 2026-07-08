import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Scale,
  Compass,
  Briefcase,
  Search,
  FileSignature,
  ArrowRight,
  CheckCircle2,
  X,
  Fingerprint
} from 'lucide-react';
import { SERVICES } from '../../data';
import { Service } from '../../types';
import { lockScroll, unlockScroll } from '../../lib/scrollLock';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!selectedService) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    document.addEventListener('keydown', onKey);
    lockScroll();
    return () => {
      document.removeEventListener('keydown', onKey);
      unlockScroll();
    };
  }, [selectedService]);

  // Map icon strings to Lucide icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Scale': return Scale;
      case 'Compass': return Compass;
      case 'Briefcase': return Briefcase;
      case 'SearchCode': return Fingerprint;
      case 'FileSignature': return FileSignature;
      default: return Search;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-transparent relative overflow-hidden border-y border-black/5">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3">
            // Forensic Capabilities
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
            Specialized <span className="text-tertiary">Service</span> Portfolio
          </h3>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(service)}
                className="glass-surface p-8 lg:p-10 hover:border-tertiary/50 transition-colors duration-300 group cursor-pointer relative flex flex-col justify-between"
              >
                {/* Blinking luxury-gold halo behind the card */}
                <span
                  aria-hidden="true"
                  style={{ animationDelay: `${(i % 3) * 0.5 + Math.floor(i / 3) * 0.8}s` }}
                  className="gold-blink pointer-events-none absolute inset-0"
                />

                <div className="relative z-[1]">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 mb-6 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-secondary/15 group-hover:border-secondary/40 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-on-surface mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h4>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="relative z-[1] font-mono text-[10px] text-tertiary flex items-center gap-2 uppercase tracking-widest mt-auto font-semibold hover:text-secondary group-hover:translate-x-1 transition-all"
                >
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Forensic Detail Modal / Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
            />

            {/* Centered pop-up modal */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedService.title} details`}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12, transition: { duration: 0.16, ease: 'easeIn' } }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative w-full max-w-2xl max-h-[88vh] bg-white/95 backdrop-blur-2xl border border-black/10 p-6 sm:p-10 overflow-y-auto no-scrollbar flex flex-col shadow-2xl z-10"
            >
              <div>
                {/* Header controls */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-tertiary rounded-full" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                      Forensic Audit File // {selectedService.id.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    aria-label="Close"
                    className="p-1.5 border border-black/10 bg-black/5 hover:border-black/25 hover:rotate-90 transition-all duration-300 text-on-surface-variant hover:text-on-surface"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-on-surface">
                      {selectedService.title}
                    </h3>
                    <p className="font-sans text-sm text-secondary font-mono mt-1 uppercase tracking-wider">
                      Specialized Appraisal Capability
                    </p>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-on-surface-variant/95 leading-relaxed font-light">
                    {selectedService.detailedDescription}
                  </p>

                  {/* Investigation Path Timeline */}
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs text-secondary uppercase tracking-widest font-semibold border-b border-black/10 pb-2">
                      // Tactical Audit Checklist
                    </h4>
                    <motion.div
                      className="space-y-3"
                      initial="hidden"
                      animate="show"
                      variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
                    >
                      {selectedService.checklist.map((step, idx) => (
                        <motion.div
                          key={idx}
                          variants={{
                            hidden: { opacity: 0, x: -12 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                          }}
                          className="flex gap-3 items-start"
                        >
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-tertiary" />
                          </div>
                          <span className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-8 mt-8 border-t border-black/10">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="btn-premium w-full block text-center bg-secondary text-white py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-tertiary border border-secondary hover:border-tertiary"
                >
                  Engage on {selectedService.title}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
