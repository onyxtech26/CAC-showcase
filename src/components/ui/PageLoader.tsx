export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-5 px-6 select-none">
      {/* CAC Brand Logo Badge with Sonar Pulse Ring */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute -inset-2 rounded-2xl border border-tertiary/30 animate-pulse pointer-events-none" />
        <div className="absolute -inset-4 rounded-2xl border border-tertiary/15 pointer-events-none" />
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tertiary/15 via-white to-secondary/10 border border-tertiary/35 shadow-md flex items-center justify-center p-2.5">
          <img
            src="/icon.webp"
            alt="CAC Logo"
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
      </div>

      <div className="text-center space-y-1">
        <span className="font-display text-sm font-semibold text-secondary block">
          CONGLOMERATE APPRAISAL CONSULTANCY
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-tertiary block">
          Loading Forensic Intelligence...
        </span>
      </div>
    </div>
  );
}
