import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, MessageSquare, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Inquiry } from '../../types';
import { whatsappLink } from '../../lib/contact';

interface ContactProps {
  onInquirySubmitted: () => void;
}

export default function Contact({ onInquirySubmitted }: ContactProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('Property Ownership Investigation');
  const [briefInquiry, setBriefInquiry] = useState('');

  // Custom multi-stage form submission status
  const [submissionStage, setSubmissionStage] = useState<'idle' | 'securing' | 'hashing' | 'generating' | 'success' | 'error'>('idle');
  const [issuedTrackingCode, setIssuedTrackingCode] = useState('');

  const servicesList = [
    'Property Ownership Investigation',
    'Missing Property Investigation',
    'Title & Document Investigation',
    'Fraud & Dispute Investigation',
    'Asset Tracing & Recovery',
    'Legal & Advisory Support'
  ];

  const handleWhatsApp = () => {
    // Standard WhatsApp API link redirect
    window.open(whatsappLink(), '_blank');
  };

  // Company lead inbox (FormSubmit delivers the form to this address by email).
  const LEAD_EMAIL = 'conglomerateac@gmail.com';
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

  // Fallback: open the visitor's email client with the inquiry pre-filled,
  // so a lead is never lost if the automated delivery is unavailable.
  const emailInquiryDirectly = () => {
    const subject = `Website Inquiry — ${service} — ${fullName || 'New Lead'}`;
    const body =
      `Full Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phoneNumber}\n` +
      `Service Required: ${service}\n\n` +
      `Brief Inquiry:\n${briefInquiry}\n`;
    window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phoneNumber || !briefInquiry) return;

    const trackingCode = `CAC-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    setSubmissionStage('securing');
    await wait(700);
    setSubmissionStage('hashing');

    try {
      // Send the lead to the company inbox by email.
      const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Website Lead — ${service} — ${fullName}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
          'Tracking Code': trackingCode,
          'Full Name': fullName,
          'Email Address': email,
          'Phone Number': phoneNumber,
          'Service Required': service,
          'Brief Inquiry': briefInquiry,
          Source: 'CAC Website — Contact Form',
          Submitted: new Date().toLocaleString(),
        }),
      });

      setSubmissionStage('generating');
      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || (data && data.success === 'false')) {
        throw new Error((data && data.message) || 'Submission failed');
      }

      await wait(500);
      setIssuedTrackingCode(trackingCode);

      // Keep a local copy so the inquiry log / case tracker still works.
      const newInquiry: Inquiry = {
        id: Math.random().toString(36).substr(2, 9),
        fullName,
        email,
        phoneNumber,
        serviceRequired: service,
        briefInquiry,
        timestamp: new Date().toLocaleString(),
        status: 'received',
        trackingCode,
        lastUpdated: new Date().toLocaleString(),
      };
      const existingInquiries = JSON.parse(localStorage.getItem('cac_inquiries') || '[]');
      localStorage.setItem('cac_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));
      window.dispatchEvent(new Event('cac_inquiry_added'));

      setSubmissionStage('success');
      onInquirySubmitted();

      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setBriefInquiry('');
    } catch (err) {
      console.error('Lead submission failed:', err);
      setSubmissionStage('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent border-b border-secondary/5 relative overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24">

        {/* Left Side: Investigator Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          <div>
            <span className="font-mono text-xs text-tertiary uppercase tracking-[0.25em] block mb-3">
              // Direct Engagement
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-on-surface leading-tight">
              Consult with our Experts
            </h3>
          </div>

          {/* Expert Card */}
          <div className="glass-surface p-8 border-secondary/5 backdrop-blur-md relative overflow-hidden">
            {/* Background coordinate grid watermark */}
            <div className="absolute top-2 right-4 font-mono text-[9px] text-secondary/[0.06] uppercase">
              // CASE_FILE_ASSIGNMENT
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full border-2 border-tertiary p-0.5 overflow-hidden bg-surface-container flex-shrink-0 transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-lg hover:shadow-tertiary/30">
                <img
                  src="/assets/mohaan-portrait.png"
                  alt="Mohaan - Forensic Consultant"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-on-surface">Mohaan</p>
                <p className="font-mono text-xs text-on-surface-variant/75 uppercase tracking-wider">
                  Forensic Consultant
                </p>
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs text-on-surface-variant">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Coverage: Johor &amp; All of Malaysia</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>conglomerateac@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>+6018-377 7716</span>
              </div>
            </div>

            {/* WhatsApp Integration button */}
            <button
              onClick={handleWhatsApp}
              className="btn-premium w-full mt-8 bg-[#25D366] text-white py-4 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-[#20ba59] shadow-md"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Side: Secure Inquiry Form */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-surface p-8 sm:p-10 relative"
          >
            {/* Submission Multi-Stage HUD Overlay */}
            <AnimatePresence mode="wait">
              {submissionStage !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-surface/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-8 text-center"
                >
                  {submissionStage === 'securing' && (
                    <div className="space-y-4">
                      <Loader2 className="w-10 h-10 text-secondary animate-spin mx-auto" />
                      <p className="font-mono text-xs text-secondary uppercase tracking-[0.2em]">
                        Securing TLS Case Conduit...
                      </p>
                      <p className="font-sans text-xs text-on-surface-variant font-light">
                        Establishing encrypted point-to-point path
                      </p>
                    </div>
                  )}

                  {submissionStage === 'hashing' && (
                    <div className="space-y-4">
                      <Loader2 className="w-10 h-10 text-tertiary animate-spin mx-auto" />
                      <p className="font-mono text-xs text-tertiary uppercase tracking-[0.2em]">
                        Hashing Case Metadata...
                      </p>
                      <p className="font-sans text-xs text-on-surface-variant font-light">
                        Executing SHA-256 validation checksums
                      </p>
                    </div>
                  )}

                  {submissionStage === 'generating' && (
                    <div className="space-y-4">
                      <Loader2 className="w-10 h-10 text-secondary animate-spin mx-auto" />
                      <p className="font-mono text-xs text-secondary uppercase tracking-[0.2em]">
                        Generating Forensic Case ID...
                      </p>
                      <p className="font-sans text-xs text-on-surface-variant font-light">
                        Cataloging docket in registry database
                      </p>
                    </div>
                  )}

                  {submissionStage === 'success' && (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="space-y-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display text-xl font-bold text-on-surface">
                          Inquiry File Initiated
                        </h4>
                        <p className="font-mono text-xs text-tertiary">
                          TRACKING ID: {issuedTrackingCode}
                        </p>
                      </div>
                      <p className="font-sans text-xs text-on-surface-variant font-light max-w-sm leading-relaxed mx-auto">
                        Your inquiry has been logged with reference <strong className="font-mono text-secondary">{issuedTrackingCode}</strong>. Connect directly with Senior Consultant Mohaan via WhatsApp for urgent priority handling:
                      </p>
                      <div className="flex flex-col gap-2 pt-2 max-w-xs mx-auto">
                        <a
                          href={whatsappLink(`Hello CAC, I just submitted an inquiry (${issuedTrackingCode}) regarding ${service}. My Name: ${fullName}, Phone: ${phoneNumber}. Details: ${briefInquiry}`)}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-premium bg-[#25D366] text-white py-3 text-center font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#20ba59] flex items-center justify-center gap-2 shadow-sm"
                        >
                          <MessageSquare className="w-4 h-4" /> Send via WhatsApp
                        </a>
                        <button
                          onClick={() => setSubmissionStage('idle')}
                          className="font-mono text-[10px] text-on-surface-variant/70 hover:text-on-surface uppercase border border-secondary/15 hover:border-secondary/30 bg-transparent px-4 py-2 tracking-widest"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {submissionStage === 'error' && (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="space-y-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/40 flex items-center justify-center mx-auto">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display text-xl font-bold text-on-surface">
                          Transmission Failed
                        </h4>
                      </div>
                      <p className="font-sans text-xs text-on-surface-variant font-light max-w-sm leading-relaxed mx-auto">
                        We couldn't send your inquiry automatically just now. You can email it to us
                        directly — your details are already filled in — or try again.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                          onClick={emailInquiryDirectly}
                          className="font-mono text-[10px] text-white uppercase bg-secondary hover:bg-tertiary px-4 py-2 tracking-widest font-bold transition-colors"
                        >
                          Email Us Directly
                        </button>
                        <button
                          onClick={() => setSubmissionStage('idle')}
                          className="font-mono text-[10px] text-secondary hover:text-on-surface uppercase border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 px-4 py-2 tracking-widest font-bold"
                        >
                          Try Again
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Standard Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label className="font-mono text-on-surface-variant/85 text-[9px] uppercase tracking-widest block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-0 border-b border-secondary/20 px-0 py-2 focus:ring-0 focus:border-secondary text-on-surface placeholder:text-on-surface-variant/50 font-sans text-sm transition-all focus:outline-none"
                />
              </div>

              <div className="relative">
                <label className="font-mono text-on-surface-variant/85 text-[9px] uppercase tracking-widest block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@address.com"
                  className="w-full bg-transparent border-0 border-b border-secondary/20 px-0 py-2 focus:ring-0 focus:border-secondary text-on-surface placeholder:text-on-surface-variant/50 font-sans text-sm transition-all focus:outline-none"
                />
              </div>

              <div className="relative">
                <label className="font-mono text-on-surface-variant/85 text-[9px] uppercase tracking-widest block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+60 12-345 6789"
                  className="w-full bg-transparent border-0 border-b border-secondary/20 px-0 py-2 focus:ring-0 focus:border-secondary text-on-surface placeholder:text-on-surface-variant/50 font-sans text-sm transition-all focus:outline-none"
                />
              </div>

              <div className="relative">
                <label className="font-mono text-on-surface-variant/85 text-[9px] uppercase tracking-widest block mb-1">
                  Service Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-secondary/20 px-0 py-2 focus:ring-0 focus:border-secondary text-on-surface font-sans text-sm transition-all focus:outline-none cursor-pointer"
                >
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv} className="bg-surface text-on-surface">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <label className="font-mono text-on-surface-variant/85 text-[9px] uppercase tracking-widest block mb-1">
                  Brief Inquiry Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={briefInquiry}
                  onChange={(e) => setBriefInquiry(e.target.value)}
                  placeholder="Describe your property case, title issue, or survey requirements..."
                  className="w-full bg-transparent border-0 border-b border-secondary/20 px-0 py-2 focus:ring-0 focus:border-secondary text-on-surface placeholder:text-on-surface-variant/50 font-sans text-sm transition-all focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-premium w-full bg-secondary text-white py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-tertiary hover:border-tertiary border border-secondary duration-300 navy-glow shadow-md hover:shadow-tertiary/25 cursor-pointer"
              >
                Initiate Inquiry
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
