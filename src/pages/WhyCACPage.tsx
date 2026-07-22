import WhyCAC from '../components/sections/WhyCAC';
import { motion } from 'motion/react';

export default function WhyCACPage() {
  return (
    <div className="pt-24 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4 px-6 pt-6"
      >
        <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
          // The Independent Advantage
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-surface leading-tight">
          Why Choose CAC?
        </h1>
        <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
          The difference between opinion and court-grade documentary evidence.
        </p>
      </motion.div>

      {/* WhyCAC Section */}
      <WhyCAC />
    </div>
  );
}
