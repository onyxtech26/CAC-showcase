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

        {/* Right Side Visual: Executive Portrait Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[460px] mx-auto animate-float">
            {/* Soft subtle ambient shadow glow behind portrait */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-tertiary/15 blur-[90px] pointer-events-none" />

            {/* Premium Framed Executive Portrait Container */}
            <motion.div
              style={{ y: imageY }}
              className="relative z-10 overflow-hidden rounded-2xl border border-tertiary/35 bg-surface/90 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-md transition-transform duration-700 hover:border-tertiary/60"
            >
              {/* Executive Portrait Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-secondary/10">
                <img
                  src="/assets/founder-portrait.png"
                  alt="Principal Property Forensic Investigator - CAC"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-105"
                />
                
                {/* Gradient vignette for seamless text integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-90" />
              </div>

              {/* Executive Title & Credentials Overlay Card */}
              <div className="absolute bottom-0 inset-x-0 p-6 space-y-2 bg-gradient-to-t from-surface via-surface/95 to-transparent">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-tertiary shrink-0" />
                  <span className="font-mono text-[11px] text-tertiary uppercase tracking-[0.2em] font-semibold">
                    Principal Forensic Investigator
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface tracking-tight">
                  Conglomerate Appraisal Consultancy
                </h3>
                <p className="font-sans text-xs text-on-surface-variant/80 font-light leading-relaxed">
                  Leading complex estate asset recovery, title deed verification, and high-court legal evidence compilation across Malaysia.
                </p>
                
                <div className="pt-2 flex items-center gap-2 font-mono text-[10px] text-tertiary/90 uppercase tracking-widest border-t border-tertiary/15 mt-3">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span>17+ Years Forensic Expertise • Johor &amp; All Malaysia</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


