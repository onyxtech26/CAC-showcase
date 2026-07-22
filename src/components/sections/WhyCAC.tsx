import { motion } from 'motion/react';
import {
  BarChart3,
  ShieldCheck,
  Headphones,
  Building,
  Target,
  Compass
} from 'lucide-react';

export default function WhyCAC() {
  const edgeItems = [
    {
      title: 'Evidence First',
      desc: 'Every finding is backed by documentary evidence — land titles, deeds, probate records and historical archives — never assumption.',
      icon: ShieldCheck
    },
    {
      title: 'Independent & Objective',
      desc: 'We investigate every allegation objectively, wherever the evidence leads, regardless of which party in the family it favours.',
      icon: BarChart3
    },
    {
      title: 'Confidential & Professional',
      desc: 'Every case is handled with strict confidentiality, from initial consultation through to final resolution.',
      icon: Building
    },
    {
      title: 'End-to-End Support',
      desc: 'From investigation through to legal referral, recovery and resale, we carry each case through to a real resolution — not just a report.',
      icon: Compass
    }
  ];

  return (
    <section id="why-cac" className="py-16 md:py-24 relative overflow-hidden liquid-glass">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-tertiary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left Column: Why Discerning Clients Choose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div>
              <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3">
                // Core Values
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-on-surface">
                The Principles Behind<br />Every Case We Investigate
              </h3>
            </div>

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {edgeItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary border border-secondary/20 group-hover:bg-secondary/20 group-hover:border-secondary/40 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column: Vision & Mission (Asymmetrical Grid) */}
          <div className="space-y-8 lg:space-y-12">

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-surface p-8 sm:p-10 fingerprint-bg border-white/5 relative group hover:border-secondary/30 hover:shadow-[0_26px_55px_-26px_rgba(74,116,201,0.35)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[9px] text-secondary tracking-widest uppercase">// Core Direction</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-secondary mb-4">
                Our Vision
              </h4>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                To be the most trusted property forensic consultancy for Malaysian families — the name families turn to when ownership, inheritance or missing assets are in question.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="glass-surface p-8 sm:p-10 fingerprint-bg border-white/5 relative group hover:border-secondary/30 hover:shadow-[0_26px_55px_-26px_rgba(74,116,201,0.35)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[9px] text-secondary tracking-widest uppercase">// Core Mission</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-secondary mb-4">
                Our Mission
              </h4>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                To uncover the true ownership history of every estate we investigate, locate missing assets and documents, identify any irregular or unlawful transactions, and support families through to a fair, evidence-based resolution.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
