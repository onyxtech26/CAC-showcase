import { motion } from 'motion/react';
import { ShieldCheck, History, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 xl:px-20 max-w-[1440px] mx-auto space-y-16">
      <SEO
        title="About Our Firm"
        description="Learn about Conglomerate Appraisal Consultancy (CAC) — 15+ years of estate forensics, pioneer land tracing, and High-Court evidence verification."
      />
      
      {/* Page Header Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-4 pt-4"
      >
        <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
          // About Conglomerate Appraisal Consultancy
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-surface leading-tight">
          Property Forensic Investigation <br />
          <span className="text-tertiary">for Family Estates</span>
        </h1>
        <p className="font-sans text-lg text-on-surface-variant/90 italic font-light">
          "Uncovering Truth. Protecting Legacies. Creating Value."
        </p>
      </motion.div>

      {/* Main Grid: Story & Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: History & Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 font-sans text-on-surface-variant font-light text-base leading-relaxed"
        >
          <div className="bg-surface/60 border border-tertiary/20 p-6 rounded-2xl backdrop-blur-md space-y-3">
            <div className="flex items-center gap-3 text-tertiary font-mono text-xs uppercase tracking-wider">
              <History className="w-5 h-5 text-tertiary" />
              <span>Est. 2009 • Incorporated 2020</span>
            </div>
            <p className="text-on-surface text-lg font-medium leading-normal">
              Conglomerate Appraisal Consultancy (CAC) is a Malaysian property forensic consultancy specialising in tracing, verifying and documenting the ownership, history, legal status and movement of assets belonging to family estates across Johor &amp; All of Malaysia.
            </p>
          </div>

          <p>
            Whether a small estate of a single family home or a large estate spanning multiple properties, companies and trusts, our objective is the same: establish true ownership based on documentary evidence, historical records and factual investigation — so families can resolve inheritance disputes, missing assets and questionable transfers with confidence.
          </p>

          <p>
            With over 17 years of specialized experience in Malaysian land registry archives, colonial grant records, and high-court probate documentation, our team provides an independent, objective evidence base that empowers legal counsel and protects family legacies.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 p-3 bg-secondary/10 border border-secondary/20 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-tertiary shrink-0" />
              <span>Independent &amp; Objective</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-secondary/10 border border-secondary/20 rounded-xl">
              <Award className="w-4 h-4 text-tertiary shrink-0" />
              <span>High-Court Proven Evidence</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Visual Asset */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[500px] animate-float flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-tertiary/10 blur-[90px] pointer-events-none" />
            <img
              src="/assets/about-forensic-malaysia-3d.png"
              alt="CAC Property Forensic Investigation 3D Model"
              className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(202,138,4,0.35)]"
            />
          </div>
        </motion.div>

      </div>

      {/* Core Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-8 pt-8 border-t border-secondary/10"
      >
        <div className="text-center space-y-2">
          <span className="font-mono text-xs text-tertiary uppercase tracking-[0.2em]">// Our Core Principles</span>
          <h2 className="font-display text-3xl font-bold text-on-surface">Built On Rigorous Evidence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface/40 border border-secondary/15 p-6 rounded-2xl space-y-3 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary font-mono text-sm font-bold">
              01
            </div>
            <h3 className="font-display text-xl font-bold text-on-surface">Documentary Truth</h3>
            <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
              We never rely on assumptions. Every claim and title record is cross-referenced with primary land registry books, gazettes, and survey archives.
            </p>
          </div>

          <div className="bg-surface/40 border border-secondary/15 p-6 rounded-2xl space-y-3 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary font-mono text-sm font-bold">
              02
            </div>
            <h3 className="font-display text-xl font-bold text-on-surface">Legacy Protection</h3>
            <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
              Family estates represent generations of labor. Our investigations resolve disputes and restore lawful ownership to rightful heirs.
            </p>
          </div>

          <div className="bg-surface/40 border border-secondary/15 p-6 rounded-2xl space-y-3 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary font-mono text-sm font-bold">
              03
            </div>
            <h3 className="font-display text-xl font-bold text-on-surface">Legal Utility</h3>
            <p className="font-sans text-sm text-on-surface-variant font-light leading-relaxed">
              Our findings are packaged into comprehensive forensic evidence portfolios formatted for immediate use by probate lawyers and court proceedings.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Banner CTA */}
      <div className="bg-gradient-to-r from-secondary/30 via-tertiary/10 to-secondary/30 border border-tertiary/30 rounded-3xl p-8 md:p-12 text-center space-y-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface">
          Need an Independent Estate Investigation?
        </h3>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto font-light">
          Speak directly with our principal property forensic specialists for a confidential review of your family estate documentation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 btn-premium bg-tertiary text-surface px-8 py-4 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#f0c368] border border-tertiary shadow-lg"
        >
          <span>Contact Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
