import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  // Gentle parallax drift for the blueprint image.
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 relative liquid-glass overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">

        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3">
              // The Firm
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface leading-tight">
              Property Forensic Investigation<br />
              <span className="font-medium text-tertiary font-display">for Family Estates</span>
            </h2>
          </div>

          <div className="relative pl-6 border-l border-tertiary/30 my-6 py-1">
            <p className="font-sans text-lg sm:text-xl text-on-surface-variant/90 italic leading-relaxed font-light">
              "Uncovering Truth. Protecting Legacies. Creating Value."
            </p>
          </div>

          <div className="space-y-4 font-sans text-on-surface-variant text-sm sm:text-base font-light leading-relaxed">
            <p>
              Established in 2009 and incorporated in 2020, Conglomerate Appraisal Consultancy (CAC) is a Malaysian property forensic consultancy specialising in tracing, verifying and documenting the ownership, history, legal status and movement of assets belonging to family estates across Johor &amp; All of Malaysia.
            </p>
            <p>
              Whether a small estate of a single family home or a large estate spanning multiple properties, companies and trusts, our objective is the same: establish true ownership based on documentary evidence, historical records and factual investigation — so families can resolve inheritance disputes, missing assets and questionable transfers with confidence.
            </p>
          </div>

          <div className="flex items-center gap-3 text-tertiary font-mono text-xs tracking-wider pt-4">
            <ShieldCheck className="w-5 h-5 text-tertiary" />
            <span className="uppercase tracking-[0.15em] font-semibold">Independent &amp; Evidence-Based</span>
          </div>
        </motion.div>

        {/* Right Side Visual: Clean Floating 3D Building (No Holographic Overlay) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="aspect-square relative w-full animate-float">
            {/* Soft subtle ambient shadow glow behind floating building */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-tertiary/10 blur-[80px] pointer-events-none" />

            {/* Malaysian Property Forensic Estate & Title Deed 3D Visual */}
            <motion.div
              style={{ y: imageY }}
              className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none select-none p-2"
            >
              <img
                src="/assets/about-forensic-malaysia-3d.webp"
                alt="CAC Property Forensic Investigation 3D Estate & Title Deed Model"
                className="w-full max-h-[480px] lg:max-h-[540px] object-contain scale-100 md:scale-105 lg:scale-105 filter drop-shadow-[0_20px_40px_rgba(202,138,4,0.3)] transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


