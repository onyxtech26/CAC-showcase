import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// @ts-ignore
import propertyLottie from '../../assets/property.lottie?url';

interface HeroProps {
  onBookConsultation: () => void;
}

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
              // Turning Intelligence Into Evidence
            </span>
            <h1 className="font-display text-[clamp(1.85rem,4.6vw,3.75rem)] font-bold text-on-surface leading-[1.05] tracking-tight">
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="block font-light"
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
                  Protect Your Legacy.
                </motion.span>
              </span>
            </h1>
          </div>

          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed font-light">
            Conglomerate Appraisal Consultancy (CAC) is an elite property intelligence and forensic firm. We transform records, documentary research, and land registry archives into verified legal evidence.
          </p>

          <div className="font-mono text-xs text-secondary/90 tracking-wide flex flex-wrap gap-y-2 gap-x-4 items-center">
            <span>Property Forensic</span>
            <span className="text-tertiary/60">•</span>
            <span>Estate Investigation</span>
            <span className="text-tertiary/60">•</span>
            <span>Asset Recovery</span>
            <span className="text-tertiary/60">•</span>
            <span>Property Intelligence</span>
          </div>

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
              className="btn-premium w-full sm:w-auto bg-transparent text-on-surface px-8 py-4 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-secondary/5 border border-secondary/25 hover:border-secondary/50"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Right column isolated floating 3D property graphic */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative h-[480px] lg:h-[580px] hidden md:flex items-center justify-center pointer-events-none select-none"
        >
          <div className="relative w-full h-full flex items-center justify-center animate-float">
            {/* Ambient golden glow ring behind the floating model */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-radial from-tertiary/20 via-secondary/10 to-transparent blur-3xl pointer-events-none" />

            {/* Floating 3D Transparent Model Asset */}
            <img
              src="/assets/hero-3d-floating.png"
              alt="CAC Floating 3D Property Model"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(202,138,4,0.3)] transition-transform duration-700 hover:scale-105"
            />

            {/* Floating capability marker pins */}
            <div className="absolute top-[20%] right-[15%] flex items-center gap-1.5 bg-secondary text-white border border-tertiary/40 px-3 py-1 text-[10px] font-mono backdrop-blur-md rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#a8791f]" />
              <span>Ownership Verification</span>
            </div>

            <div className="absolute bottom-[25%] left-[10%] flex items-center gap-1.5 bg-secondary text-white border border-white/20 px-3 py-1 text-[10px] font-mono backdrop-blur-md rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              <span>Title Deed Tracing</span>
            </div>
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
