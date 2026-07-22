import StatsBar from '../components/sections/StatsBar';
import CompletedProjects from '../components/sections/CompletedProjects';
import { motion } from 'motion/react';

export default function TrackRecordPage() {
  return (
    <div className="pt-24 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4 px-6 pt-6"
      >
        <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
          // Proven Performance &amp; Case Portfolio
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-surface leading-tight">
          Track Record &amp; Executed Cases
        </h1>
        <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
          Over 227+ completed property forensic, probate, and family estate cases across Johor &amp; All of Malaysia.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <StatsBar />

      {/* Completed Projects Grid */}
      <CompletedProjects />
    </div>
  );
}
