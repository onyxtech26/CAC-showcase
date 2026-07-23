import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data';
import { Search, ArrowRight, ShieldCheck } from 'lucide-react';
import ServiceIconArt from '../components/ui/ServiceIconArt';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 xl:px-20 max-w-[1440px] mx-auto space-y-12">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4 pt-4"
      >
        <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
          // Complete Capabilities Directory
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-surface leading-tight">
          12 Core Forensic &amp; Estate Disciplines
        </h1>
        <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
          From pioneer colonial land title tracing to complex multi-beneficiary estate recovery and legal court evidence packages.
        </p>
      </motion.div>

      {/* Search Input Bar */}
      <div className="max-w-xl mx-auto relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-tertiary/70" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search capability or keywords..."
          className="w-full bg-surface/70 border border-tertiary/30 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-sans text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-tertiary backdrop-blur-md"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-surface elevated relative p-6 flex flex-col justify-between transition-colors duration-300 group"
          >
            <span aria-hidden="true" className="gold-border" />
            <div className="relative z-[1] space-y-4">
              <div className="flex items-start justify-between gap-4">
                <ServiceIconArt
                  serviceId={service.id}
                  className="w-24 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1"
                />
                <span className="font-mono text-[10px] uppercase text-tertiary/70 tracking-widest">
                  {String(index + 1).padStart(2, '0')} · Verified
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-on-surface group-hover:text-tertiary transition-colors">
                {service.title}
              </h3>

              <p className="font-sans text-sm text-on-surface-variant/80 font-light leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 pt-2 border-t border-secondary/10">
                {service.checklist.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-mono text-[11px] text-on-surface-variant/90">
                    <ShieldCheck className="w-3.5 h-3.5 text-tertiary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-[1] pt-6">
              <Link
                to={`/services/${service.id}`}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary/10 hover:bg-tertiary text-on-surface hover:text-surface font-mono text-xs uppercase font-semibold transition-all duration-300 border border-secondary/20 hover:border-tertiary"
              >
                <span>View Full Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
