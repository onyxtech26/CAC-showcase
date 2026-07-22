import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ShieldCheck, FileSearch, Lock } from 'lucide-react';
// @ts-ignore
import propertyLottie from '../../assets/property.lottie?url';

interface HeroProps {
  onBookConsultation: () => void;
}

const BADGES = [
  { label: 'Independent Investigation', icon: FileSearch },
  { label: 'Evidence Based Findings', icon: ShieldCheck },
  { label: 'Confidential & Professional', icon: Lock },
];

export default function Hero({ onBookConsultation }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll-linked parallax: image drifts up, text drifts gently, both fade.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[88svh] flex items-center pt-[88px] overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 items-center py-10 md:py-12">

        {/* Left column text & CTA */}
        <motion.div
          style={{ y: textY, opacity: fade }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3 md:mb-4">
              // Property Forensic Experts
            </span>
            <h1 className="font-display text-[clamp(1.85rem,4.6vw,3.75rem)] font-bold text-on-surface leading-[1.05] tracking-tight">
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="block"
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  Uncover The Truth.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="block font-medium text-tertiary"
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                >
                  Protect What's Yours.
                </motion.span>
              </span>
            </h1>
          </div>

          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed font-light">
            We are property forensic experts specialising in uncovering ownership, tracing assets, and resolving complex property disputes across family estates — with facts, not assumptions.
          </p>

          <ul className="flex flex-col gap-2.5 pt-1">
            {BADGES.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5 text-on-surface-variant font-sans text-sm">
                <Icon className="w-4 h-4 text-tertiary flex-shrink-0" />
                {label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              onClick={scrollToServices}
              whileTap={{ scale: 0.97 }}
              className="btn-premium w-full sm:w-auto bg-tertiary text-surface px-8 py-4 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#f0c368] border border-tertiary shadow-lg hover:shadow-tertiary/25"
            >
              Our Services
            </motion.button>
            <motion.button
              onClick={onBookConsultation}
              whileTap={{ scale: 0.97 }}
              className="btn-premium w-full sm:w-auto bg-transparent text-on-surface px-8 py-4 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-white/5 border border-white/25 hover:border-white/50"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Right column animated property graphic (Lottie) */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative h-[450px] lg:h-[550px] xl:h-[600px] hidden md:block"
        >
          <div className="absolute inset-0">
            {/* Property Lottie animation */}
            <DotLottieReact
              src={propertyLottie}
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-on-surface-variant/50">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-secondary/40 to-transparent" />
      </motion.div>
    </section>
  );
}
