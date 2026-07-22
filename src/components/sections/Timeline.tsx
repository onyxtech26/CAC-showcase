import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, FileSearch, Fingerprint, BarChart3, FileText, Scale, CheckCircle2 } from 'lucide-react';
import RollingNumber from '../ui/RollingNumber';

interface Step {
  id: number;
  label: string;
  sub: string;
  icon: any;
  details: string;
  deliverables: string[];
}

const STEPS: Step[] = [
  {
    id: 1,
    label: 'Consultation',
    sub: 'Requirement Analysis',
    icon: Users,
    details: 'We begin by understanding your case and requirements — the family situation, the properties or assets involved, and what you are trying to establish or resolve.',
    deliverables: [
      'Understanding of case background and objectives',
      'Identification of properties, assets and parties involved',
      'Scoping of the investigation and engagement terms'
    ]
  },
  {
    id: 2,
    label: 'Evidence',
    sub: 'Collection',
    icon: FileSearch,
    details: 'We gather the documents and public records that matter: land titles, deeds, probate files, survey plans, historical records and any material relevant to the estate.',
    deliverables: [
      'Land title, deed and probate document gathering',
      'Land registry, court and archival record searches',
      'Historical ownership and family record collection'
    ]
  },
  {
    id: 3,
    label: 'Investigation',
    sub: 'In-Depth Research',
    icon: Fingerprint,
    details: 'We conduct in-depth research and verification — tracing ownership history, checking for irregularities, and following leads across registries and archives.',
    deliverables: [
      'In-depth research and cross-registry verification',
      'Ownership chain and irregularity checks',
      'Field and archival lead follow-up'
    ]
  },
  {
    id: 4,
    label: 'Analysis',
    sub: 'Findings Review',
    icon: BarChart3,
    details: 'We examine the findings, cross-referencing documents against each other to identify gaps, inconsistencies, or evidence of irregular transfers.',
    deliverables: [
      'Cross-referencing of documents and evidence',
      'Identification of gaps and inconsistencies',
      'Assessment of irregular or fraudulent transfers'
    ]
  },
  {
    id: 5,
    label: 'Reporting',
    sub: 'Detailed Forensics',
    icon: FileText,
    details: 'We prepare a detailed forensic report backed by evidence — presenting verified ownership, a chronological history, and clear findings.',
    deliverables: [
      'Verified ownership and chronological history',
      'Evidence-backed findings documentation',
      'Recommendations for legal action or estate administration'
    ]
  },
  {
    id: 6,
    label: 'Legal Support',
    sub: 'Connecting Experts',
    icon: Scale,
    details: 'We connect you with the right legal experts and support the legal process alongside qualified counsel through to a resolution.',
    deliverables: [
      'Referral to experienced property and probate lawyers',
      'Evidence preparation for legal proceedings',
      'Liaison with land offices and government authorities'
    ]
  },
  {
    id: 7,
    label: 'Resolution',
    sub: 'Recover & Protect',
    icon: CheckCircle2,
    details: 'We carry the matter through to resolution — recovering, transferring or protecting the asset until your case is fully and finally closed.',
    deliverables: [
      'Distribution order and transfer follow-through',
      'Registration of inherited or recovered assets',
      'Continued support until the matter is fully resolved'
    ]
  }
];

export default function Timeline() {
  const [activeStepId, setActiveStepId] = useState<number>(3); // "Evaluate" is active initially
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const AUTOPLAY_DURATION = 5000; // 5 seconds per step

  const activeStep = STEPS.find(s => s.id === activeStepId) || STEPS[2];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStepId((prev) => (prev < STEPS.length ? prev + 1 : 1));
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleStepSelect = (stepId: number) => {
    setActiveStepId(stepId);
    setIsPlaying(false); // Pause autoplay when user manually interacts
  };

  const handlePrev = () => {
    setActiveStepId((prev) => (prev > 1 ? prev - 1 : STEPS.length));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setActiveStepId((prev) => (prev < STEPS.length ? prev + 1 : 1));
    setIsPlaying(false);
  };

  return (
    <section id="process" className="py-16 md:py-24 bg-transparent border-b border-white/5 relative overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20">

        {/* Title & Metadata Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3">
            // Our Process
          </span>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-on-surface">
            Our Investigation Process
          </h3>
        </motion.div>



        {/* Timeline Horizontal Line / Node Grid */}
        <div className="relative py-8 md:py-12 mb-8 md:mb-12 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[980px] xl:min-w-0 relative px-4 md:px-0">
            {/* Static track background */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-white/10 -translate-y-1/2" />

            {/* Active growing laser path */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] -translate-y-1/2 overflow-hidden pointer-events-none">
              <motion.div
                className="h-full bg-gradient-to-r from-secondary via-tertiary to-secondary shadow-[0_0_8px_rgba(74,116,201,0.4)]"
                animate={{ width: `${((activeStepId - 1) / (STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            {/* Stepper nodes */}
            <div className="grid grid-cols-7 gap-3 md:gap-4 relative z-10">
            {STEPS.map((step) => {
              const isActive = step.id === activeStepId;
              const isHighlight = step.id === 3; // "Evaluate" high interest stage

              return (
                <div
                  key={step.id}
                  onClick={() => handleStepSelect(step.id)}
                  className="flex flex-col items-center text-center group cursor-pointer snap-center"
                  id={`timeline-step-${step.id}`}
                >
                  {/* Node Diamond Container */}
                  <div className="relative mb-8 flex items-center justify-center w-12 h-12">

                    {/* Glowing outer rings for active diamond */}
                    {isActive && (
                      <div className={`absolute -inset-1 rotate-45 border ${isHighlight ? 'border-tertiary/20 bg-tertiary/[0.03]' : 'border-secondary/20 bg-secondary/[0.03]'
                        } animate-pulse`} />
                    )}

                    {/* Circular stroke progress countdown representing the 5s loop timer */}
                    {isActive && isPlaying && (
                      <svg className="absolute -inset-3.5 w-[76px] h-[76px] -rotate-90 pointer-events-none select-none" viewBox="0 0 40 40">
                        <motion.rect
                          key={`progress-rect-${step.id}`}
                          x="10"
                          y="10"
                          width="20"
                          height="20"
                          rx="2"
                          transform="rotate(45 20 20)"
                          fill="none"
                          strokeWidth="1.5"
                          stroke={isHighlight ? "#ca8a04" : "#13294b"}
                          strokeDasharray="80"
                          initial={{ strokeDashoffset: 80 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                        />
                      </svg>
                    )}

                    {/* Inner Solid Diamond */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 45 }}
                      animate={{ rotate: 45 }}
                      className={`w-5 h-5 border transition-all duration-300 relative z-10 flex items-center justify-center ${isActive
                          ? isHighlight
                            ? 'bg-tertiary border-tertiary shadow-[0_0_15px_rgba(202,138,4,0.4)]'
                            : 'bg-secondary border-secondary shadow-[0_0_15px_rgba(19,41,75,0.4)]'
                          : 'bg-surface-container-high border-secondary/40 group-hover:bg-secondary/10 group-hover:border-secondary'
                        }`}
                    >
                      {/* Nested static visual indicator in normal state */}
                      {!isActive && (
                        <div className="w-1.5 h-1.5 bg-secondary/30 rounded-none" />
                      )}
                    </motion.div>
                  </div>

                  {/* Labels */}
                  <h5 className={`font-display text-lg font-bold transition-colors ${isActive
                      ? isHighlight ? 'text-tertiary' : 'text-secondary'
                      : 'text-on-surface group-hover:text-secondary'
                    }`}>
                    {step.label}
                  </h5>
                  <p className="font-mono text-[10px] tracking-widest text-on-surface-variant uppercase mt-1">
                    {step.sub}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
        </div>

        {/* Selected Step Deep Dive Analysis Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-surface p-8 md:p-12 border-white/5 grid grid-cols-1 md:grid-cols-3 gap-10 items-start relative overflow-hidden shadow-lg backdrop-blur-md"
            id="timeline-active-content"
          >
            {/* Step summary column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-secondary font-bold px-2 py-0.5 border border-secondary/30 bg-secondary/5">
                  STAGE <RollingNumber value={`0${activeStep.id}`} duration={500} />
                </span>
                <h4 className="font-display text-2xl font-bold text-on-surface">
                  {activeStep.label}: {activeStep.sub}
                </h4>
              </div>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                {activeStep.details}
              </p>
            </div>

            {/* Step deliverables column */}
            <div className="space-y-4 md:border-l md:border-white/10 md:pl-10">
              <span className="font-mono text-[10px] uppercase text-secondary tracking-widest font-bold block">
                // System Outputs
              </span>
              <ul className="space-y-3 font-sans text-xs text-on-surface-variant font-light">
                {activeStep.deliverables.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start leading-relaxed">
                    <span className="text-tertiary font-mono">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
