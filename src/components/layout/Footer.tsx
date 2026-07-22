import { Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const contacts = [
    '+6018-377 7716',
    'conglomerateac@gmail.com',
    'www.cac.com.my'
  ];

  const socials = [
    'LinkedIn',
    'TikTok'
  ];

  return (
    <footer className="relative bg-black/20 backdrop-blur-2xl border-t border-white/10 pt-12 pb-8 px-6 md:px-12 xl:px-20 overflow-hidden z-10 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.35)]">
      {/* Liquid Organic Morphing Glass Blobs in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.9, 1],
            borderRadius: [
              "42% 58% 70% 30% / 45% 45% 55% 55%",
              "70% 30% 52% 48% / 60% 40% 60% 40%",
              "50% 50% 30% 70% / 50% 60% 40% 60%",
              "42% 58% 70% 30% / 45% 45% 55% 55%"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-10 left-10 w-96 h-96 bg-gradient-to-tr from-secondary/15 via-secondary/10 to-transparent blur-2xl"
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.85, 1.1, 1],
            borderRadius: [
              "50% 50% 30% 70% / 50% 60% 40% 60%",
              "30% 70% 70% 30% / 50% 30% 70% 50%",
              "60% 40% 60% 40% / 40% 30% 70% 60%",
              "50% 50% 30% 70% / 50% 60% 40% 60%"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-tertiary/10 via-amber-300/10 to-transparent blur-3xl"
        />

        {/* Blob 3 (Center Liquid Bridge) */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-secondary/5 to-tertiary/5 rounded-full blur-xl opacity-80"
        />
      </div>

      {/* Glossy Liquid Specular Reflection Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent pointer-events-none z-0" />

      {/* Edge highlight reflection stroke */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[1.5px] inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0 blur-[1px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-10">

        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img src="/icon.png" alt="CAC" className="h-8 w-auto" />
            <span className="h-4 w-[1px] bg-white/20"></span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-on-surface-variant/60 uppercase">
              Est. 2009
            </span>
          </div>
          <p className="font-sans text-xs text-on-surface-variant max-w-xs leading-relaxed font-light">
            Conglomerate Appraisal Consultancy — Property Forensic Consultation. Independent, evidence-based investigation for family estates across Johor &amp; All of Malaysia.
          </p>
        </div>

        {/* Links Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div className="space-y-4">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Links</p>
            <ul className="space-y-2 font-sans text-xs text-on-surface-variant font-light">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-tertiary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Locations</p>
            <ul className="space-y-2 font-sans text-xs text-on-surface-variant/80 font-light">
              <li>
                <span className="block font-medium text-on-surface/90">Johor (HQ)</span>
                <span className="block leading-relaxed mt-1">
                  85-01, Jalan Wira 2,<br />
                  Taman Tan Sri Yaacob,<br />
                  81300 Skudai, Johor
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Contact</p>
            <ul className="space-y-2 font-sans text-xs text-on-surface-variant/80 font-light">
              {contacts.map((contact, idx) => (
                <li key={idx}>{contact}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-widest font-semibold">Social</p>
            <ul className="space-y-2 font-sans text-xs text-on-surface-variant/80 font-light">
              {socials.map((social, idx) => (
                <li key={idx}>
                  <span className="hover:text-tertiary transition-colors cursor-pointer">{social}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Copy fine print */}
      <div className="relative z-10 max-w-[1440px] mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center font-mono text-[9px] text-on-surface-variant/40 gap-4">
        <p>Powered by Onyxx Tech Hub. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-on-surface cursor-pointer">Privacy Policy</span>
          <span className="hover:text-on-surface cursor-pointer">Terms of Engagement</span>
        </div>
      </div>
    </footer>
  );
}
