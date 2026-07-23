import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Smooth intro playback duration (~2.6 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 2600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cac-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#faf8f3] text-[#14213a] select-none overflow-hidden"
        >
          {/* Technical Survey Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(19, 41, 75, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(19, 41, 75, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Warm Ambient Gold & Navy Washes */}
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-tertiary/[0.08] blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-secondary/[0.06] blur-[150px] pointer-events-none" />

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-8 right-8 z-20 px-4 py-1.5 rounded-full border border-secondary/20 bg-white/80 hover:bg-white text-secondary font-mono text-[10px] uppercase tracking-[0.2em] shadow-sm backdrop-blur-md transition-all cursor-pointer"
          >
            Skip Intro →
          </button>

          {/* Central Logo & Focus Showcase */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl space-y-8">
            
            {/* BIG & CLEAR LOGO STAGE */}
            <div className="relative flex items-center justify-center">
              
              {/* Rotating Gold Precision Aperture / Lens Focus Ring */}
              <motion.div
                initial={{ scale: 1.4, opacity: 0, rotate: -45 }}
                animate={{
                  scale: [1.4, 1.15, 1],
                  opacity: [0, 0.6, 0.35],
                  rotate: [ -45, 0, 15 ]
                }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-tertiary/40 pointer-events-none"
              >
                {/* Precision Survey Tick Marks */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-tertiary/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-tertiary/60" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-1 bg-tertiary/60" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-1 bg-tertiary/60" />
              </motion.div>

              {/* Inner Outer Gold Ring Pulse */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.9, 1.06, 1], opacity: [0.2, 0.7, 0.4] }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
                className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-2 border-tertiary/25 pointer-events-none"
              />

              {/* PROMINENT, LARGE & CLEAR LOGO EMBLEM CARD */}
              <motion.div
                initial={{ scale: 0.75, opacity: 0, filter: 'blur(10px)' }}
                animate={{
                  scale: [0.75, 1.05, 1],
                  opacity: [0, 1, 1],
                  filter: ['blur(10px)', 'blur(0px)', 'blur(0px)']
                }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl bg-white border border-tertiary/35 p-6 sm:p-7 shadow-[0_20px_50px_-12px_rgba(19,41,75,0.18)] backdrop-blur-2xl flex items-center justify-center overflow-hidden"
              >
                {/* Gold Specular Reflection Sweep */}
                <motion.div
                  initial={{ x: '-120%', opacity: 0 }}
                  animate={{ x: ['120%', '-120%', '120%'], opacity: [0, 0.7, 0] }}
                  transition={{ duration: 1.6, delay: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-tertiary/25 to-transparent skew-x-12 pointer-events-none"
                />

                {/* Big, Crystal-Clear Logo Image */}
                <img
                  src="/icon.webp"
                  alt="Conglomerate Appraisal Consultancy"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(19,41,75,0.12)]"
                />
              </motion.div>
            </div>

            {/* Brand Title & Subtitle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-3 pt-2"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-tertiary font-semibold bg-tertiary/10 px-4 py-1.5 rounded-full border border-tertiary/25">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                Property Forensic Investigation
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-secondary uppercase leading-tight pt-1">
                Conglomerate Appraisal <br />
                <span className="text-tertiary">Consultancy</span>
              </h1>

              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-on-surface-variant font-medium">
                Johor &amp; All of Malaysia · Est. 2009
              </p>
            </motion.div>

          </div>

          {/* Bottom Footprint Tag */}
          <div className="absolute bottom-6 font-mono text-[10px] uppercase tracking-[0.25em] text-secondary/40">
            [ LAND REGISTRY &amp; TITLE VERIFICATION ]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
