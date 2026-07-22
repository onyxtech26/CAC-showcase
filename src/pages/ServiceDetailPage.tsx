import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { ArrowLeft, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 pb-20 px-6 text-center space-y-4">
        <h1 className="font-display text-3xl font-bold text-on-surface">Capability Not Found</h1>
        <p className="font-sans text-sm text-on-surface-variant">The requested forensic capability does not exist.</p>
        <Link to="/services" className="inline-flex items-center gap-2 btn-premium bg-tertiary text-surface px-6 py-3 font-mono text-xs uppercase">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 xl:px-20 max-w-[1200px] mx-auto space-y-12">
      
      {/* Back Button */}
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-tertiary font-mono text-xs uppercase tracking-wider hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Capabilities</span>
      </Link>

      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 border-b border-secondary/15 pb-8"
      >
        <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block">
          // Core Capability Audit Protocol
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-surface leading-tight">
          {service.title}
        </h1>
        <p className="font-sans text-lg text-on-surface-variant font-light leading-relaxed max-w-3xl">
          {service.description}
        </p>
      </motion.div>

      {/* Detailed Content & Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left 2 Cols: Comprehensive Description & Checklist */}
        <div className="lg:col-span-2 space-y-8 font-sans text-on-surface-variant font-light leading-relaxed">
          <div className="bg-surface/50 border border-secondary/15 p-6 md:p-8 rounded-2xl space-y-4 backdrop-blur-md">
            <h2 className="font-display text-2xl font-bold text-on-surface">Detailed Scope of Investigation</h2>
            <p className="text-base leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-on-surface">Key Forensic Deliverables &amp; Checklist</h3>
            <div className="space-y-3">
              {service.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-surface/40 border border-secondary/10 rounded-xl backdrop-blur-md">
                  <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-on-surface font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Action & Consultation Card */}
        <div className="bg-gradient-to-b from-surface/80 to-surface/40 border border-tertiary/30 p-6 md:p-8 rounded-2xl space-y-6 backdrop-blur-md sticky top-28">
          <div className="flex items-center gap-3 text-tertiary font-mono text-xs uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-tertiary" />
            <span>Verified Evidence Standard</span>
          </div>

          <h3 className="font-display text-xl font-bold text-on-surface">
            Initiate Case Inquiry for {service.title}
          </h3>

          <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
            Our team conducts preliminary land office and archive record lookups before initiating formal evidence gathering.
          </p>

          <Link
            to="/contact"
            className="w-full btn-premium bg-tertiary text-surface px-6 py-4 font-mono text-xs uppercase font-semibold tracking-wider hover:bg-[#f0c368] border border-tertiary shadow-lg flex items-center justify-center gap-2"
          >
            <span>Consult Our Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
}
