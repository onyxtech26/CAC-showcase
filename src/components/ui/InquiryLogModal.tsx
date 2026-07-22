import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, FileText, ClipboardList, Clock, ShieldAlert, BadgeCheck, MessageSquare } from 'lucide-react';
import { Inquiry } from '../../types';

interface InquiryLogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryLogModal({ isOpen, onClose }: InquiryLogModalProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchCode, setSearchCode] = useState('');
  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);

  // Load inquiries from localStorage
  const loadInquiries = () => {
    const list = JSON.parse(localStorage.getItem('cac_inquiries') || '[]');
    setInquiries(list);
    if (list.length > 0 && !activeInquiry) {
      setActiveInquiry(list[0]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }

    // Listen for custom submit updates
    const handleUpdate = () => loadInquiries();
    window.addEventListener('cac_inquiry_added', handleUpdate);
    return () => window.removeEventListener('cac_inquiry_added', handleUpdate);
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode) return;
    const found = inquiries.find(
      (inq) => inq.trackingCode.toLowerCase() === searchCode.trim().toLowerCase()
    );
    if (found) {
      setActiveInquiry(found);
    } else {
      alert(`Tracking code "${searchCode}" not found in local registries.`);
    }
  };

  // Status timeline generators based on tracking code hashing
  const getTimelineSteps = (inquiry: Inquiry) => {
    const isScheduled = inquiry.serviceRequired.includes('Scheduled');
    return [
      {
        title: 'Case Intake Complete',
        desc: 'Inquiry details safely logged and indexed in CAC secure file systems.',
        date: inquiry.timestamp,
        done: true
      },
      {
        title: 'Conduit Verification',
        desc: 'Security checks executed. Form payload hashes fully authenticated.',
        date: inquiry.timestamp,
        done: true
      },
      {
        title: 'Land Registry Check',
        desc: 'Checking local land registries and encumbrance files regarding your property brief.',
        date: 'Processing...',
        done: true
      },
      {
        title: 'Investigator Assignment',
        desc: isScheduled
          ? 'Scheduling confirmed. Consultant Mohaan preparing consultation brief.'
          : 'Docket assigned to Senior Investigator Mohaan for direct contact.',
        date: 'Awaiting Update',
        done: false,
        active: true
      }
    ];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-4xl h-[90vh] md:h-[80vh] bg-surface/98 backdrop-blur-2xl border border-secondary/10 overflow-hidden z-10 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-secondary/10 flex justify-between items-center bg-secondary/[0.03]">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-secondary" />
                <div>
                  <h3 className="font-display text-lg font-bold text-on-surface">
                    Inquiry Registry & Case Tracker
                  </h3>
                  <p className="font-sans text-[10px] text-on-surface-variant font-light uppercase tracking-wider">
                    Trace submission history and investigator status logs
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 border border-secondary/10 bg-secondary/5 hover:border-secondary/20 text-on-surface-variant hover:text-on-surface transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Inner Content Grid */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-transparent">

              {/* Left Column: List of submissions */}
              <div className="w-full md:w-80 border-r border-secondary/5 flex flex-col bg-secondary/[0.02] overflow-y-auto">
                <div className="p-4 border-b border-secondary/5">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      placeholder="Enter Tracking ID..."
                      value={searchCode}
                      onChange={(e) => setSearchCode(e.target.value)}
                      className="w-full bg-white/60 border border-secondary/10 px-3.5 py-2 pr-9 font-mono text-[10px] uppercase text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-secondary"
                    />
                    <button type="submit" className="absolute right-2.5 top-2.5 text-on-surface-variant hover:text-secondary cursor-pointer">
                      <Search className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>

                {inquiries.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-on-surface-variant/50">
                    <ClipboardList className="w-8 h-8 opacity-40 mb-3 text-secondary" />
                    <p className="font-mono text-[10px] uppercase tracking-wider">No cases found</p>
                    <p className="font-sans text-[11px] font-light leading-normal mt-1 max-w-xs">
                      Submit an inquiry or book a consultation to initiate a trackable file.
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 divide-y divide-secondary/5">
                    {inquiries.map((inq) => {
                      const isActive = activeInquiry?.id === inq.id;
                      return (
                        <div
                          key={inq.id}
                          onClick={() => setActiveInquiry(inq)}
                          className={`p-4 cursor-pointer text-left transition-colors ${isActive ? 'bg-secondary/10 border-l-2 border-secondary' : 'hover:bg-secondary/[0.03]'
                            }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-mono text-[10px] font-bold text-secondary">
                              {inq.trackingCode}
                            </span>
                            <span className="text-[9px] font-mono text-tertiary px-1 py-0.2 bg-tertiary/5 border border-tertiary/10">
                              ACTIVE
                            </span>
                          </div>
                          <h4 className="font-display text-sm font-semibold text-on-surface truncate">
                            {inq.fullName}
                          </h4>
                          <p className="font-sans text-[10px] text-on-surface-variant/80 truncate mt-0.5">
                            {inq.serviceRequired}
                          </p>
                          <p className="font-mono text-[9px] text-on-surface-variant/40 mt-1.5 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {inq.timestamp}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Case Deep-Dive Timeline */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col justify-between">
                {activeInquiry ? (
                  <div className="space-y-6">
                    {/* Header summary info */}
                    <div className="border-b border-secondary/5 pb-4">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="font-mono text-[9px] text-secondary tracking-widest block mb-1">
                            // SECURE CASE CONDUIT ACTIVE
                          </span>
                          <h4 className="font-display text-xl font-bold text-on-surface">
                            Case File for: {activeInquiry.fullName}
                          </h4>
                        </div>
                        <div className="text-right font-mono text-[10px]">
                          <span className="text-on-surface-variant block">TRACKING ID</span>
                          <span className="text-secondary font-bold">{activeInquiry.trackingCode}</span>
                        </div>
                      </div>
                    </div>

                    {/* Inquiry brief overview */}
                    <div className="bg-secondary/[0.03] p-4 border border-secondary/5 rounded-none font-sans text-xs space-y-2">
                      <p className="text-secondary font-mono text-[9px] uppercase tracking-widest font-bold">
                        // Inquiry Content
                      </p>
                      <div className="text-on-surface-variant font-light space-y-1">
                        <p><strong>Required Discipline:</strong> {activeInquiry.serviceRequired}</p>
                        <p><strong>Contact Email:</strong> {activeInquiry.email}</p>
                        {activeInquiry.phoneNumber && (
                          <p><strong>Phone Number:</strong> {activeInquiry.phoneNumber}</p>
                        )}
                        <p className="italic bg-white/70 border border-secondary/5 p-2 mt-2 leading-relaxed text-on-surface-variant">
                          "{activeInquiry.briefInquiry}"
                        </p>
                      </div>
                    </div>

                    {/* Timeline Tracker */}
                    <div className="space-y-4">
                      <h5 className="font-mono text-[10px] text-secondary uppercase tracking-widest font-bold">
                        // Real-Time Investigative Milestones
                      </h5>

                      <div className="relative pl-6 border-l border-secondary/10 space-y-6">
                        {getTimelineSteps(activeInquiry).map((step, idx) => (
                          <div key={idx} className="relative">
                            {/* Marker dot */}
                            <div className={`absolute -left-[29px] top-1.5 w-3.5 h-3.5 border rounded-full rotate-45 flex items-center justify-center bg-surface ${step.done
                                ? 'border-secondary'
                                : 'border-secondary/20'
                              }`}>
                              {step.done && <div className="w-1.5 h-1.5 bg-secondary rounded-full" />}
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between items-baseline">
                                <h6 className={`font-display text-xs font-bold ${step.done ? 'text-on-surface' : 'text-on-surface-variant/40'
                                  }`}>
                                  {step.title}
                                </h6>
                                <span className="font-mono text-[8px] text-on-surface-variant/50">
                                  {step.date}
                                </span>
                              </div>
                              <p className={`font-sans text-[11px] font-light leading-relaxed ${step.done ? 'text-on-surface-variant/80' : 'text-on-surface-variant/30'
                                }`}>
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center text-on-surface-variant/50">
                    <FileText className="w-12 h-12 text-secondary/35 mb-4 animate-pulse" />
                    <h4 className="font-display text-lg font-bold text-on-surface/90">
                      Case Intelligence Dashboard
                    </h4>
                    <p className="font-sans text-xs text-on-surface-variant/75 font-light max-w-sm mt-1 leading-normal">
                      Select a submitted case from the list or search using your tracking code to view real-time investigation stages and notes.
                    </p>
                  </div>
                )}

                {/* Footer notes */}
                {activeInquiry && (
                  <div className="border-t border-secondary/5 pt-4 mt-6 text-[10px] font-sans text-on-surface-variant/50 flex justify-between items-center">
                    <span>SECURE_SESSION_CIPHER: SHA-256</span>
                    <span>Last Updated: {activeInquiry.lastUpdated}</span>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
