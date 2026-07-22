import { motion } from 'motion/react';
import { CalendarClock, FolderCheck, Activity, ShieldCheck, LucideIcon } from 'lucide-react';
import { STATS } from '../../data';
import RollingNumber from '../ui/RollingNumber';

const ICONS: Record<string, LucideIcon> = {
  CalendarClock,
  FolderCheck,
  Activity,
  ShieldCheck,
};

export default function StatsBar() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">
        <motion.div
          className="glass-neon grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-secondary/10 overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {STATS.map((stat) => {
            const Icon = ICONS[stat.iconName] ?? ShieldCheck;
            return (
              <motion.div
                key={stat.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="flex flex-col items-center text-center gap-2 py-8 px-4"
              >
                <Icon className="w-5 h-5 text-tertiary mb-1" />
                <span className="font-display text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
                  <RollingNumber value={stat.value} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
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
