import Contact from '../components/sections/Contact';
import { motion } from 'motion/react';

interface ContactPageProps {
  onInquirySubmitted: () => void;
}

export default function ContactPage({ onInquirySubmitted }: ContactPageProps) {
  return (
    <div className="pt-24 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4 px-6 pt-6"
      >
        <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
          // Confidential Case Review
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-surface leading-tight">
          Book a Forensic Consultation
        </h1>
        <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
          Speak directly with our senior property intelligence team. All inquiries strictly confidential.
        </p>
      </motion.div>

      {/* Contact Section */}
      <Contact onInquirySubmitted={onInquirySubmitted} />
    </div>
  );
}
