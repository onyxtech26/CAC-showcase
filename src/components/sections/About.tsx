import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
// @ts-ignore
import aboutPic from '../../assets/hero-pic.png';

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
              "Clarity before commitment. Evidence before decision."
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

        {/* Right Side Visual with scanning elements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square relative animate-float">
            {/* Ambient glow behind the lens */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-secondary/10 blur-[70px] pointer-events-none" />

            {/* Rotating dashed survey ring */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full border border-dashed border-secondary/20 animate-[spin_28s_linear_infinite] pointer-events-none" />

            {/* Orbiting gold survey marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] animate-[spin_16s_linear_infinite] pointer-events-none">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-tertiary shadow-[0_0_10px_rgba(202,138,4,0.7)]" />
            </div>

            {/* The property image (parallax drift, full, uncropped) */}
            <motion.div
              style={{
                y: imageY,
                backgroundImage: `url(${aboutPic})`,
              }}
              className="relative z-10 w-full h-full bg-contain bg-center bg-no-repeat"
            />

            {/* Animated survey scan sweeping across the lens */}
            <div className="absolute left-[8%] w-[84%] h-[2px] bg-gradient-to-r from-transparent via-tertiary/70 to-transparent shadow-[0_0_12px_rgba(202,138,4,0.5)] animate-scan z-20 pointer-events-none" />

            {/* Corner registration brackets */}
            <div className="absolute top-0 left-0 w-7 h-7 border-t border-l border-secondary/30 z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-7 h-7 border-t border-r border-secondary/30 z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-7 h-7 border-b border-l border-secondary/30 z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-7 h-7 border-b border-r border-secondary/30 z-20 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
