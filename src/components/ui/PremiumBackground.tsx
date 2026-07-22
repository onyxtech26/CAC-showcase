import { useMemo } from 'react';

/**
 * PremiumBackground
 * A single, static, full-viewport graphic layer for the whole site.
 * A calm but clearly-visible "land survey" composition: a steel-blue base,
 * navy/gold ambient light, a technical blueprint grid, topographic contour
 * lines, concentric survey rings and corner coordinate registration marks.
 * Rendered once (fixed, behind content, no pointer events, no motion).
 */
export default function PremiumBackground() {
  const VW = 1440;
  const VH = 900;

  // Organic, terrain-like contour polylines (elevation-map feel).
  const contours = useMemo(() => {
    const rows = 20;
    const lines: string[] = [];
    for (let i = 0; i < rows; i++) {
      const baseY = (VH / (rows - 1)) * i;
      const amp = 26 + (i % 4) * 14;
      const wl = 300 + (i % 3) * 120;
      const phase = i * 0.75;
      let d = `M -60 ${baseY.toFixed(1)}`;
      for (let x = -60; x <= VW + 60; x += 32) {
        const bell = Math.sin((x / VW) * Math.PI);
        const y = baseY + Math.sin(x / wl + phase) * amp * bell;
        d += ` L ${x} ${y.toFixed(1)}`;
      }
      lines.push(d);
    }
    return lines;
  }, []);

  const ringCx = VW * 0.8;
  const ringCy = VH * 0.32;

  // Corner registration marks with faux coordinate labels (forensic detail).
  const corners = [
    { x: 40, y: 40, anchor: 'start', label: 'N 01°28′ 12″' },
    { x: VW - 40, y: 40, anchor: 'end', label: 'E 103°45′ 30″' },
    { x: 40, y: VH - 40, anchor: 'start', label: 'GRID · WGS 84' },
    { x: VW - 40, y: VH - 40, anchor: 'end', label: 'CAC · SURVEY' },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex: -1 }}
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Base dark-navy gradient so it clearly reads as "designed" */}
          <linearGradient id="pb-base" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#0d1b33" />
            <stop offset="38%" stopColor="#0a1626" />
            <stop offset="72%" stopColor="#08131f" />
            <stop offset="100%" stopColor="#060d18" />
          </linearGradient>
          {/* Premium film grain for tactile depth */}
          <filter id="pb-grain" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="n" />
            <feColorMatrix in="n" type="saturate" values="0" />
          </filter>
          {/* Vignette for cinematic depth at the edges */}
          <radialGradient id="pb-vignette" cx="50%" cy="46%" r="75%">
            <stop offset="55%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
          </radialGradient>
          {/* Fine technical grid */}
          <pattern id="pb-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.05" />
          </pattern>
          {/* Coarse survey grid */}
          <pattern id="pb-grid-lg" width="220" height="220" patternUnits="userSpaceOnUse">
            <path d="M 220 0 L 0 0 0 220" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.07" />
          </pattern>
          {/* Ambient light glows */}
          <radialGradient id="pb-navy-tl" cx="12%" cy="0%" r="60%">
            <stop offset="0%" stopColor="#4a74c9" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#4a74c9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pb-gold-tr" cx="100%" cy="4%" r="55%">
            <stop offset="0%" stopColor="#e3b34d" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#e3b34d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pb-navy-b" cx="50%" cy="115%" r="60%">
            <stop offset="0%" stopColor="#4a74c9" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#4a74c9" stopOpacity="0" />
          </radialGradient>
          {/* Centre focal lift for readability */}
          <radialGradient id="pb-focus" cx="42%" cy="44%" r="55%">
            <stop offset="0%" stopColor="#16305a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#16305a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base + grids */}
        <rect width={VW} height={VH} fill="url(#pb-base)" />
        <rect width={VW} height={VH} fill="url(#pb-grid)" />
        <rect width={VW} height={VH} fill="url(#pb-grid-lg)" />

        {/* Topographic contour lines */}
        <g fill="none" stroke="#ffffff" strokeWidth="1.25" strokeOpacity="0.06">
          {contours.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        {/* Gold accent contours for warmth */}
        <g fill="none" stroke="#e3b34d" strokeWidth="1.4" strokeOpacity="0.12">
          <path d={contours[7]} />
          <path d={contours[13]} />
        </g>

        {/* Concentric survey rings + crosshair (echoes the lens motif) */}
        <g fill="none" stroke="#4a74c9" strokeOpacity="0.18" strokeWidth="1.25">
          {[80, 170, 275, 400].map((r) => (
            <circle key={r} cx={ringCx} cy={ringCy} r={r} />
          ))}
        </g>
        <line x1={ringCx - 440} y1={ringCy} x2={ringCx + 440} y2={ringCy} stroke="#4a74c9" strokeWidth="1" strokeOpacity="0.14" />
        <line x1={ringCx} y1={ringCy - 440} x2={ringCx} y2={ringCy + 440} stroke="#4a74c9" strokeWidth="1" strokeOpacity="0.14" />
        <circle cx={ringCx} cy={ringCy} r="6" fill="#e3b34d" fillOpacity="0.7" />

        {/* Centre focal wash to keep content readable */}
        <rect width={VW} height={VH} fill="url(#pb-focus)" />

        {/* Ambient glows on top so the colour clearly shows */}
        <rect width={VW} height={VH} fill="url(#pb-navy-tl)" />
        <rect width={VW} height={VH} fill="url(#pb-gold-tr)" />
        <rect width={VW} height={VH} fill="url(#pb-navy-b)" />

        {/* Film grain (very subtle) for premium tactile texture */}
        <rect width={VW} height={VH} filter="url(#pb-grain)" opacity="0.05" />

        {/* Corner registration marks + coordinate labels */}
        <g stroke="#4a74c9" strokeOpacity="0.35" strokeWidth="1.4">
          {corners.map((c, i) => {
            const sx = c.anchor === 'end' ? -1 : 1;
            const sy = c.y > VH / 2 ? -1 : 1;
            return (
              <g key={i}>
                <line x1={c.x} y1={c.y} x2={c.x + 20 * sx} y2={c.y} />
                <line x1={c.x} y1={c.y} x2={c.x} y2={c.y + 20 * sy} />
              </g>
            );
          })}
        </g>
        <g
          fill="#aab7cc"
          fillOpacity="0.5"
          fontFamily="'Space Mono', monospace"
          fontSize="12"
          letterSpacing="1.5"
        >
          {corners.map((c, i) => {
            const ty = c.y > VH / 2 ? c.y - 14 : c.y + 30;
            return (
              <text key={i} x={c.x} y={ty} textAnchor={c.anchor as 'start' | 'end'}>
                {c.label}
              </text>
            );
          })}
        </g>

        {/* Cinematic vignette on top for depth */}
        <rect width={VW} height={VH} fill="url(#pb-vignette)" />
      </svg>
    </div>
  );
}
