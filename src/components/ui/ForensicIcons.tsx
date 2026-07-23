import type { ReactElement, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Hand-drawn icon set for CAC, replacing generic Lucide glyphs with marks that
 * reference the actual work: fingerprints, land pins, deeds, scales, ledgers.
 * Shared grammar: 24x24, currentColor stroke, background elements at reduced
 * opacity so each icon reads as a foreground mark over a supporting motif —
 * echoes the survey-line depth language used elsewhere on the site.
 */
const base: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconPropertyForensic(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="14.5" r="2.2" strokeDasharray="3 2" opacity="0.5" />
      <circle cx="9.5" cy="14.5" r="4.2" strokeDasharray="4 2.5" opacity="0.35" />
      <circle cx="15" cy="9" r="3.2" />
      <line x1="17.3" y1="11.3" x2="20" y2="14" />
    </svg>
  );
}

export function IconFamilyEstate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7 L12 9.5" />
      <path d="M7.5 9.5 L16.5 9.5" />
      <path d="M7.5 9.5 L7.5 12" />
      <path d="M16.5 9.5 L16.5 12" />
      <circle cx="7.5" cy="14.5" r="2" />
      <circle cx="16.5" cy="14.5" r="2" />
    </svg>
  );
}

export function IconPropertyIntelligence(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" opacity="0.3" />
      <circle cx="12" cy="12" r="5.4" opacity="0.5" />
      <path d="M12 8.3c-1.7 0-3 1.3-3 3 0 2.2 3 5.4 3 5.4s3-3.2 3-5.4c0-1.7-1.3-3-3-3z" />
      <circle cx="12" cy="11.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMissingProperty(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 21c4-4.2 6-7.7 6-10.4a6 6 0 1 0-12 0c0 2.7 2 6.2 6 10.4z"
        strokeDasharray="2.4 2.2"
        opacity="0.7"
      />
      <circle cx="12" cy="10.2" r="1.7" />
      <line x1="13.2" y1="11.4" x2="14.6" y2="12.8" opacity="0.85" />
    </svg>
  );
}

export function IconAssetTracing(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="8.5" cy="16" rx="4" ry="1.6" opacity="0.5" />
      <ellipse cx="8.5" cy="13.6" rx="4" ry="1.6" />
      <line x1="8.5" y1="12" x2="8.5" y2="11" opacity="0.6" />
      <path d="M13.5 12.5c1.6-2.4 3-4 5.5-5.2" strokeDasharray="1.8 2" opacity="0.7" />
      <circle cx="19.3" cy="6.6" r="1.3" />
    </svg>
  );
}

export function IconTitleInvestigation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3.5 L13.5 3.5 L17 7 L17 20 A1 1 0 0 1 16 21 L7 21 A1 1 0 0 1 6 20 L6 4.5 A1 1 0 0 1 7 3.5 Z" opacity="0.55" />
      <path d="M13.5 3.5 L13.5 7 L17 7" opacity="0.55" />
      <line x1="8.5" y1="11.5" x2="13.5" y2="11.5" opacity="0.5" />
      <line x1="8.5" y1="14" x2="13.5" y2="14" opacity="0.5" />
      <circle cx="16.3" cy="16.8" r="2.4" />
      <path d="M15.2 16.8 L16 17.6 L17.4 15.9" strokeWidth="1.3" />
    </svg>
  );
}

export function IconFraudInvestigation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 L19 6 L19 11.2 C19 15.8 16 19.4 12 21 C8 19.4 5 15.8 5 11.2 L5 6 Z" opacity="0.5" />
      <path d="M9 10.8 C10 11.7 11 11.7 12 10.8 C13 9.9 14 9.9 15 10.8" opacity="0.9" />
      <line x1="8.3" y1="14.8" x2="15.7" y2="9.8" strokeWidth="1.4" />
    </svg>
  );
}

export function IconLegalCoordination(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="12" y1="4" x2="12" y2="19" opacity="0.6" />
      <line x1="5" y1="8" x2="19" y2="8" opacity="0.6" />
      <path d="M5 8 L2.6 13.2 A2.6 2.6 0 0 0 7.4 13.2 Z" opacity="0.85" />
      <path d="M19 8 L16.6 13.2 A2.6 2.6 0 0 0 21.4 13.2 Z" opacity="0.85" />
      <line x1="9" y1="19.5" x2="15" y2="19.5" opacity="0.6" />
    </svg>
  );
}

export function IconPropertySale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 11.5 L12 5 L19.5 11.5" opacity="0.55" />
      <path d="M6.5 10.3 L6.5 19 A1 1 0 0 0 7.5 20 L11.5 20 L11.5 14 L12.5 14 L12.5 20 L16.5 20 A1 1 0 0 0 17.5 19 L17.5 10.3" opacity="0.55" />
      <path d="M14.8 14.6 L18.6 14.6 L19.8 15.8 L18.6 17 L14.8 17 Z" />
      <circle cx="16.2" cy="15.8" r="0.35" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBuyerMatching(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6.5" cy="8" r="2.2" opacity="0.55" />
      <path d="M6.5 10.6 C4.5 10.6 3.2 11.9 3.2 13.9" opacity="0.45" />
      <circle cx="17.5" cy="8" r="2.2" opacity="0.55" />
      <path d="M17.5 10.6 C19.5 10.6 20.8 11.9 20.8 13.9" opacity="0.45" />
      <line x1="9.3" y1="14" x2="14.7" y2="14" strokeDasharray="1.6 1.6" opacity="0.8" />
      <path d="M10.9 14 L11.9 15 L13.5 13" strokeWidth="1.5" />
    </svg>
  );
}

export function IconInvestmentConsultancy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="14" width="2.6" height="6" opacity="0.5" />
      <rect x="8.2" y="10.5" width="2.6" height="9.5" opacity="0.5" />
      <rect x="12.4" y="7" width="2.6" height="13" opacity="0.5" />
      <path d="M15.8 12.8 L17.9 10 L19.9 11.8 L22 8.8" strokeWidth="1.6" />
      <path d="M19.6 8.4 L22 8.4 L22 10.8" strokeWidth="1.6" />
    </svg>
  );
}

export function IconRenovationConsultancy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="5.5" y1="6.5" x2="9.5" y2="6.5" strokeDasharray="1.2 1.4" opacity="0.35" />
      <line x1="5.5" y1="10" x2="9.5" y2="10" strokeDasharray="1.2 1.4" opacity="0.35" />
      <path d="M17.5 3.5 A4 4 0 0 0 12.5 8.5 L4 17 L7 20 L15.5 11.5 A4 4 0 0 0 20.5 6.5 L17.8 9.2 L15.8 8.5 L15.1 6.5 Z" opacity="0.9" />
    </svg>
  );
}

export function IconYearsEstablished(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
      <path d="M12 7.5 V12 L15 14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="2" x2="12" y2="4.5" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="19.5" x2="12" y2="22" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="12" x2="4.5" y2="12" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19.5" y1="12" x2="22" y2="12" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCasesCompleted(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M3.5 7.5 A1.5 1.5 0 0 1 5 6 H9.5 L11.5 8.5 H19 A1.5 1.5 0 0 1 20.5 10 V18 A1.5 1.5 0 0 1 19 19.5 H5 A1.5 1.5 0 0 1 3.5 18 Z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 13.5 L11 15.7 L15.5 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconActiveCases(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 9.5 L4.5 18 A1 1 0 0 0 5.5 19 L18.5 19 A1 1 0 0 0 19.5 18 L19.5 9.5" opacity="0.4" />
      <path d="M4.5 9.5 L6.5 5 L17.5 5 L19.5 9.5" opacity="0.4" />
      <path d="M6 14 L8.4 14 L9.6 11.4 L11.2 16 L12.5 12.6 L13.5 14 L18 14" strokeWidth="1.5" />
    </svg>
  );
}

export function IconCoreDisciplines(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 L19 6 L19 11.2 C19 15.8 16 19.4 12 21 C8 19.4 5 15.8 5 11.2 L5 6 Z" opacity="0.5" />
      <path
        d="M12 8.4 L12.9 11 L15.6 11.1 L13.4 12.7 L14.2 15.3 L12 13.7 L9.8 15.3 L10.6 12.7 L8.4 11.1 L11.1 11 Z"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function IconScrollText(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4.5 A2 2 0 1 0 7 8.5" opacity="0.5" />
      <path d="M7 4.5 L17 4.5 L17 18.5 A1.8 1.8 0 0 1 15.2 20.3 L8.8 20.3 A1.8 1.8 0 0 1 7 18.5 Z" opacity="0.55" />
      <line x1="9.5" y1="9" x2="14.5" y2="9" opacity="0.5" />
      <line x1="9.5" y1="12" x2="14.5" y2="12" opacity="0.5" />
      <line x1="9.5" y1="15" x2="12.5" y2="15" opacity="0.5" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4 L4 8.5 L12 13 L20 8.5 Z" opacity="0.85" />
      <path d="M4 12.5 L12 17 L20 12.5" opacity="0.5" />
      <path d="M4 16.5 L12 21 L20 16.5" opacity="0.3" />
    </svg>
  );
}

export function IconAward(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9.3" r="4.3" opacity="0.7" />
      <path d="M9.4 12.8 L7.8 20 L12 17.9 L16.2 20 L14.6 12.8" opacity="0.9" />
      <path d="M10.2 9.3 L11.3 10.4 L14 7.6" strokeWidth="1.4" />
    </svg>
  );
}

/** Keyed by the same `iconName` strings already used in src/data/index.ts. */
export const FORENSIC_ICONS: Record<string, (props: IconProps) => ReactElement> = {
  Fingerprint: IconPropertyForensic,
  Users: IconFamilyEstate,
  Globe: IconPropertyIntelligence,
  MapPin: IconMissingProperty,
  Coins: IconAssetTracing,
  FileText: IconTitleInvestigation,
  ShieldAlert: IconFraudInvestigation,
  Handshake: IconLegalCoordination,
  Home: IconPropertySale,
  UserCheck: IconBuyerMatching,
  TrendingUp: IconInvestmentConsultancy,
  Wrench: IconRenovationConsultancy,
  CalendarClock: IconYearsEstablished,
  FolderCheck: IconCasesCompleted,
  Activity: IconActiveCases,
  ShieldCheck: IconCoreDisciplines,
  ScrollText: IconScrollText,
  Layers: IconLayers,
  Award: IconAward,
};
