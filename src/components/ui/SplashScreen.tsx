import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  onComplete?: () => void;
  /** Force show regardless of session storage (e.g. for preview) */
  forceShow?: boolean;
}

const STAGES = [
  'INITIALIZING LAND REGISTRY ARCHIVES...',
  'VERIFYING TITLE & DEED CHRONOLOGY...',
  'LOADING FORENSIC INTELLIGENCE HUB...',
  'WELCOME TO CAC CONSULTANCY'
];

export default function SplashScreen({ onComplete, forceShow = false }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (forceShow) return true;
    return !sessionStorage.getItem('cac_splash_shown');
  });

  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    if (progress < 30) setStageIndex(0);
    else if (progress < 65) setStageIndex(1);
    else if (progress < 95) setStageIndex(2);
    else setStageIndex(3);

    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('cac_splash_shown', 'true');
        onComplete?.();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsVisible(false);
    sessionStorage.setItem('cac_splash_shown', 'true');
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cac-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071326] text-white select-none overflow-hidden"
        >
          {/* Blueprint Grid Background Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(230, 192, 106, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(230, 192, 106, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Deep Ambient Radial Gold & Navy Glow */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-tertiary/15 blur-[140px] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/40 blur-[100px] pointer-events-none" />

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-8 right-8 z-10 px-4 py-1.5 rounded-full border border-tertiary/30 bg-white/5 hover:bg-white/10 text-tertiary font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-md transition-all"
          >
            Skip Intro →
          </button>

          {/* Main Logo Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl space-y-8">
            
            {/* Logo Emblem Showcase */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Concentric Sonar Pulse Rings */}
              <div className="absolute -inset-6 rounded-full border border-tertiary/30 animate-pulse pointer-events-none" />
              <div className="absolute -inset-12 rounded-full border border-tertiary/15 pointer-events-none" />

              {/* Logo Emblem Container */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-tertiary/20 via-[#0c1c34] to-secondary border border-tertiary/40 p-4 shadow-[0_0_50px_rgba(168,121,31,0.3)] flex items-center justify-center relative overflow-hidden">
                {/* Gold Specular Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-tertiary/20 to-transparent opacity-60 pointer-events-none animate-pulse" />
                <img
                  src="/icon.webp"
                  alt="Conglomerate Appraisal Consultancy"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>

            {/* Brand Title & Tagline */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                Conglomerate Appraisal <br />
                <span className="text-gold-gradient">Consultancy</span>
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-tertiary/90">
                Property Forensic Investigation & Estate Recovery
              </p>
            </motion.div>

            {/* Forensic Progress Indicator */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="w-full max-w-xs space-y-3 pt-2"
            >
              {/* Progress Track */}
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative border border-tertiary/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-tertiary via-gold-highlight to-tertiary shadow-[0_0_10px_#e6c06a]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status Message */}
              <div className="flex justify-between items-center text-tertiary/80 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="truncate max-w-[200px] text-left">
                  {STAGES[stageIndex]}
                </span>
                <span className="font-semibold text-gold-highlight ml-2">
                  {progress}%
                </span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Footprint Tag */}
          <div className="absolute bottom-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
            JOHOR & ALL OF MALAYSIA · EST. 2009
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
