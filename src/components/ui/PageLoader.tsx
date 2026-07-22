export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 px-6">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-tertiary/20 animate-ping" />
        <div className="w-8 h-8 rounded-full border-2 border-t-tertiary border-r-tertiary/40 border-b-transparent border-l-transparent animate-spin" />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-tertiary/80">
        Loading CAC Intelligence...
      </span>
    </div>
  );
}
