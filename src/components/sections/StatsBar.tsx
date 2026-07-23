import { motion } from 'motion/react';
import { STATS } from '../../data';
import RollingNumber from '../ui/RollingNumber';
import IconChip from '../ui/IconChip';
import { FORENSIC_ICONS, IconCoreDisciplines } from '../ui/ForensicIcons';

export default function StatsBar() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
        <motion.div
          className="max-w-3xl mx-auto glass-surface elevated border border-secondary/15 rounded-3xl overflow-hidden relative shadow-[0_20px_50px_-15px_rgba(19,41,75,0.12)] grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-secondary/10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Subtle warm gold accent line across the top */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-tertiary/40 to-transparent pointer-events-none" />

          {STATS.map((stat) => {
            const Icon = FORENSIC_ICONS[stat.iconName] ?? IconCoreDisciplines;
            return (
              <motion.div
                key={stat.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="relative z-[1] flex flex-col items-center text-center gap-3.5 py-10 px-6 sm:px-10 group hover:bg-white/50 transition-colors duration-300"
              >
                <IconChip
                  icon={Icon}
                  sizeClass="w-16 h-16"
                  iconClass="w-8 h-8"
                  className="group-hover:scale-105 transition-transform duration-300 shadow-md"
                />
                <RollingNumber
                  value={stat.value}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight"
                />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-tertiary font-semibold">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

