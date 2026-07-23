import type { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface IconChipProps {
  /** Icon component to render inside the chip (Lucide or a custom forensic icon). */
  icon: IconComponent;
  /** Outer chip size (Tailwind sizing classes), e.g. "w-14 h-14". */
  sizeClass?: string;
  /** Icon size (Tailwind sizing classes), e.g. "w-6 h-6". */
  iconClass?: string;
  /** Visual variant: 'glass' (light luxury), 'navy' (dark gradient), 'gold' (solid gold accent). Default is 'glass'. */
  variant?: 'glass' | 'navy' | 'gold';
  /** Extra classes on the outer chip (e.g. group-hover transforms). */
  className?: string;
}

/**
  * Dimensional icon badge matching the site's luxury land-survey aesthetic.
  */
export default function IconChip({
  icon: Icon,
  sizeClass = 'w-16 h-16',
  iconClass = 'w-8 h-8',
  variant = 'glass',
  className = '',
}: IconChipProps) {
  if (variant === 'navy') {
    return (
      <span className={`icon-chip ${sizeClass} ${className}`}>
        <Icon className={`${iconClass} text-gold-highlight`} strokeWidth={2} />
      </span>
    );
  }

  if (variant === 'gold') {
    return (
      <span
        className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-tertiary via-[#c79a35] to-[#8c6214] border border-tertiary/60 shadow-[0_10px_25px_-6px_rgba(168,121,31,0.4)] ${sizeClass} ${className}`}
      >
        <Icon className={`${iconClass} text-white filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`} strokeWidth={2.2} />
      </span>
    );
  }

  // Default 'glass' variant — polished light-luxury emblem matching the site theme
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-tertiary/15 via-white/90 to-secondary/10 border border-tertiary/35 shadow-[0_8px_20px_-6px_rgba(19,41,75,0.12)] backdrop-blur-md transition-all duration-300 group-hover:border-tertiary/60 group-hover:shadow-[0_12px_28px_-6px_rgba(168,121,31,0.25)] ${sizeClass} ${className}`}
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-tertiary/20 pointer-events-none" />
      <Icon className={`${iconClass} text-tertiary transition-transform duration-300 group-hover:scale-110`} strokeWidth={2} />
    </span>
  );
}

