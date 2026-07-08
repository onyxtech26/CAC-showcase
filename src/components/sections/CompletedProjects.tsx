import { motion } from 'motion/react';
import {
  FileText,
  ScrollText,
  Home,
  Layers,
  Fingerprint,
  Handshake,
  Award,
  Activity,
  LucideIcon,
} from 'lucide-react';
import { COMPLETED_PROJECTS, CASE_STATS } from '../../data';
import RollingNumber from '../ui/RollingNumber';

const ICONS: Record<string, LucideIcon> = {
  FileText,
  ScrollText,
  Home,
  Layers,
  Fingerprint,
  Handshake,
};

export default function CompletedProjects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative liquid-glass overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-[0.25em] block mb-3">
            // Track Record
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
            Completed <span className="text-tertiary">Projects</span>
          </h3>
        </motion.div>

        {/* Glassmorphism card grid — each with a blinking navy neon glow */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          {COMPLETED_PROJECTS.map((project, i) => {
            const Icon = ICONS[project.iconName] ?? FileText;
            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -8 }}
                style={{ animationDelay: `${(i % 3) * 0.5 + Math.floor(i / 3) * 0.9}s` }}
                className="glass-neon group cursor-default p-7 sm:p-8 flex flex-col"
              >
                {/* Corner accents */}
                <span className="pointer-events-none absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-secondary/30" />
                <span className="pointer-events-none absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-tertiary/40" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md border border-tertiary/40 bg-tertiary/10 text-tertiary group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_18px_rgba(202,138,4,0.4)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-secondary/70 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-[neon-pulse_2.2s_ease-in-out_infinite]" />
                    Completed
                  </span>
                </div>

                <p className="font-display text-4xl sm:text-5xl font-bold text-secondary tracking-tight mb-2">
                  <RollingNumber value={project.count} />
                </p>
                <h4 className="font-display text-lg font-semibold text-tertiary mb-2 leading-snug">
                  {project.title}
                </h4>
                <p className="font-sans text-xs text-on-surface-variant/80 font-light leading-relaxed">
                  {project.blurb}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Totals — glassmorphism panel with rolling counters */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{ animationDelay: '1.4s' }}
          className="glass-neon mt-10 md:mt-14 max-w-3xl mx-auto px-8 py-8 sm:py-9"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 sm:divide-x divide-secondary/15 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-tertiary">
                <Award className="w-3.5 h-3.5" /> Total Cases Completed
              </span>
              <span className="font-display text-4xl sm:text-5xl font-bold text-secondary tracking-tight">
                <RollingNumber value={CASE_STATS.totalCompleted} /> <span className="text-xl align-middle text-on-surface-variant/60 font-sans font-light">cases</span>
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-secondary">
                <Activity className="w-3.5 h-3.5 animate-[neon-pulse_2.2s_ease-in-out_infinite]" /> Active Cases
              </span>
              <span className="font-display text-4xl sm:text-5xl font-bold text-secondary tracking-tight">
                <RollingNumber value={CASE_STATS.activeCases} />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
