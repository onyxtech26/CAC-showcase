interface ServiceIconArtProps {
  serviceId: string;
  className?: string;
  label?: string;
}

const SERVICE_ICON_SOURCES: Record<string, string> = {
  'property-forensic': '/assets/service-icons/property-forensic.webp',
  'family-estate': '/assets/service-icons/family-estate.webp',
  'property-intelligence': '/assets/service-icons/property-intelligence.webp',
  'missing-property': '/assets/service-icons/missing-property.webp',
  'asset-tracing': '/assets/service-icons/asset-tracing.webp',
  'title-investigation': '/assets/service-icons/title-investigation.webp',
  'fraud-investigation': '/assets/service-icons/fraud-investigation.webp',
  'legal-coordination': '/assets/service-icons/legal-coordination.webp',
  'property-sale': '/assets/service-icons/property-sale.webp',
  'buyer-matching': '/assets/service-icons/buyer-matching.webp',
  'investment-consultancy': '/assets/service-icons/investment-consultancy.webp',
  'renovation-consultancy': '/assets/service-icons/renovation-consultancy.webp',
};

/**
 * Displays one isolated icon from the approved CAC 3D service-icon family.
 * Each transparent file contains only its own complete alpha component, so
 * neighboring shadows or object tips can never bleed into this icon.
 */
export default function ServiceIconArt({
  serviceId,
  className = '',
  label,
}: ServiceIconArtProps) {
  const source =
    SERVICE_ICON_SOURCES[serviceId] ?? SERVICE_ICON_SOURCES['property-forensic'];

  return (
    <span
      className={`service-icon-art ${className}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <img
        className='service-icon-art__image'
        src={source}
        alt=''
        aria-hidden='true'
        draggable={false}
      />
    </span>
  );
}
