import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, ChevronDown } from 'lucide-react';
import { whatsappLink, emailLink, CONSULT_EMAIL, WHATSAPP_NUMBER } from '../../lib/contact';

// Brand WhatsApp glyph (lucide has no brand icons).
function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

interface NavbarProps {
  onOpenInquiryLog: () => void;
}

export default function Navbar({ onOpenInquiryLog }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const consultRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'about', 'services', 'projects', 'process', 'why-cac', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the consultation dropdown on click-away or Escape.
  useEffect(() => {
    if (!consultOpen) return;
    const onDown = (e: MouseEvent) => {
      if (consultRef.current && !consultRef.current.contains(e.target as Node)) {
        setConsultOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setConsultOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [consultOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Completed Projects', href: '#projects', id: 'projects' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Why CAC', href: '#why-cac', id: 'why-cac' },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-[64px] z-50 transition-all duration-300 border rounded-full ${isScrolled
            ? 'bg-white/75 backdrop-blur-md border-black/10 shadow-lg'
            : 'bg-white/30 backdrop-blur-sm border-black/5 shadow-md'
          } flex justify-between items-center px-4 md:px-6`}
      >
        {/* Moving neon light travelling around the navbar pill border */}
        <span className="neon-ring" aria-hidden="true" />

        {/* Logo — click scrolls to top */}
        <a
          href="#home"
          aria-label="CAC — back to top"
          className="flex items-center group select-none"
        >
          <img
            src="/icon.png"
            alt="Conglomerate Appraisal Consultancy"
            className="h-9 md:h-10 w-auto group-hover:scale-110 transition-transform duration-300"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-xs uppercase tracking-[0.2em] text-on-surface-variant">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`hover:text-tertiary transition-all duration-300 relative py-1 ${activeSection === link.id ? 'text-secondary font-semibold font-mono' : ''
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-secondary to-tertiary" />
              )}
            </a>
          ))}
        </div>

        {/* Book Consultation — dropdown with Email / WhatsApp */}
        <div ref={consultRef} className="hidden sm:flex items-center gap-4 h-full py-2 relative">
          <button
            onClick={() => setConsultOpen((v) => !v)}
            aria-expanded={consultOpen}
            aria-haspopup="menu"
            className="btn-premium bg-secondary text-white pl-6 pr-5 h-full rounded-full font-mono text-xs uppercase font-semibold hover:bg-tertiary hover:border-tertiary duration-200 border border-secondary shadow-md hover:shadow-tertiary/25 flex items-center gap-2"
          >
            Book Consultation
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${consultOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {consultOpen && (
              <motion.div
                role="menu"
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.14, ease: 'easeIn' } }}
                transition={{ type: 'spring', damping: 24, stiffness: 300 }}
                style={{
                  transformOrigin: 'top right',
                  background: 'linear-gradient(135deg,#f7e2a3,#ca8a04,#8a5e05,#e9c766,#ca8a04)',
                }}
                className="absolute right-0 top-[calc(100%+14px)] w-72 p-[1.5px] rounded-2xl shadow-[0_24px_60px_-20px_rgba(202,138,4,0.55)]"
              >
                <div className="rounded-[15px] overflow-hidden bg-gradient-to-b from-[#fffdf6] to-[#faf3e0]">
                  <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-tertiary/90 px-4 pt-3.5 pb-3 border-b border-tertiary/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-[neon-pulse_2.5s_ease-in-out_infinite]" />
                    Choose a channel
                  </p>

                  {/* WhatsApp */}
                  <a
                    role="menuitem"
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setConsultOpen(false)}
                    className="flex items-center gap-3.5 px-4 py-3.5 hover:bg-tertiary/10 transition-colors duration-200 group/opt"
                  >
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#25D366] text-white shadow-[0_6px_16px_-4px_rgba(37,211,102,0.6)] group-hover/opt:scale-110 transition-transform duration-300 flex-shrink-0">
                      <WhatsAppIcon className="w-6 h-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-bold text-secondary leading-tight">WhatsApp Us</span>
                      <span className="block font-mono text-[10px] text-on-surface-variant/70 truncate">
                        +{WHATSAPP_NUMBER.slice(0, 2)} {WHATSAPP_NUMBER.slice(2, 4)}-{WHATSAPP_NUMBER.slice(4, 7)} {WHATSAPP_NUMBER.slice(7)}
                      </span>
                    </span>
                  </a>

                  <div className="h-px mx-4 bg-tertiary/15" />

                  {/* Email */}
                  <a
                    role="menuitem"
                    href={emailLink()}
                    onClick={() => setConsultOpen(false)}
                    className="flex items-center gap-3.5 px-4 py-3.5 hover:bg-tertiary/10 transition-colors duration-200 group/opt"
                  >
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-tertiary to-[#a9720a] text-white shadow-[0_6px_16px_-4px_rgba(202,138,4,0.6)] group-hover/opt:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-bold text-secondary leading-tight">Send an Email</span>
                      <span className="block font-mono text-[10px] text-on-surface-variant/70 truncate">{CONSULT_EMAIL}</span>
                    </span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="text-on-surface p-3 flex items-center justify-center rounded-sm hover:bg-black/5 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-40 bg-white/95 backdrop-blur-2xl md:hidden border-b border-black/15 animate-fade-in overflow-y-auto no-scrollbar">
          <div className="flex flex-col p-6 space-y-6 font-mono text-sm tracking-wider uppercase">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-4 border-b border-black/5 flex justify-between items-center ${activeSection === link.id ? 'text-secondary font-bold' : 'text-on-surface-variant'
                  }`}
              >
                <span>{link.name}</span>
                <span className="text-[10px] opacity-40">0{idx + 1}</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-[0.25em] text-on-surface-variant/60 uppercase">
                Book Consultation
              </span>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#25D366] text-white py-4 text-center font-mono text-xs uppercase font-semibold transition-all hover:bg-[#20ba59] active:scale-95 duration-200 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href={emailLink()}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-secondary text-white py-4 text-center font-mono text-xs uppercase font-semibold transition-all hover:bg-tertiary active:scale-95 duration-200 border border-secondary hover:border-tertiary flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Send an Email
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
