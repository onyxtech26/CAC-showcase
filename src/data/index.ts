import { CompletedProject, Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'legal-court-matters',
    iconName: 'Scale',
    title: 'Legal Court Matters',
    description: 'Court-ready forensic evidence, valuation support and case management for property, estate and inheritance proceedings.',
    detailedDescription: 'We support clients and counsel through property-related court matters — from Letters of Administration (LA) and Probate applications to contested land, boundary and inheritance proceedings. Every submission is backed by court-admissible forensic evidence and defensible valuation findings.',
    checklist: [
      'Court-admissible forensic and valuation reports',
      'Letters of Administration (LA) & Probate application support',
      'Evidence preparation for land and inheritance disputes',
      'Liaison with lawyers and counsel through proceedings',
      'Post-judgment execution, transfer and registration support'
    ]
  },
  {
    id: 'forensic-consultation',
    iconName: 'SearchCode',
    title: 'Property Forensic Consultation',
    description: 'Deep-dive investigation of title, encumbrances, valuation integrity and dispute exposure — uncovering risk and hidden value before capital is committed.',
    detailedDescription: 'Our core discipline. We conduct deep-dive forensic investigation of title, encumbrances, valuation integrity and dispute exposure — uncovering risk and hidden value before capital is committed to any asset.',
    checklist: [
      'Title and chain-of-ownership investigation',
      'Encumbrance, caveat and easement analysis',
      'Valuation integrity and comparables verification',
      'Dispute and litigation exposure assessment',
      'Risk and hidden-value findings before capital is committed'
    ]
  },
  {
    id: 'subsale-flips',
    iconName: 'Building2',
    title: 'Subsale Acquisition & Flips',
    description: 'Sourcing and securing below-market subsale homes, refurbishing where needed, and resolving to a profitable resale within months.',
    detailedDescription: 'We source and secure below-market subsale homes, refurbish where needed, and resolve them to a profitable resale within a short, defined window — typically two to three months per project.',
    checklist: [
      'Sourcing of below-market subsale opportunities',
      'Acquisition negotiation and securing of the asset',
      'Targeted refurbishment where value can be added',
      'Fast, profitable resale within a defined window',
      'Milestone reporting through to resale completion'
    ]
  },
  {
    id: 'land-banking',
    iconName: 'Compass',
    title: 'Land Banking & Development',
    description: 'Acquisition of agricultural and development land at acquisition discounts, held and repositioned for conversion or onward sale.',
    detailedDescription: 'We acquire agricultural and development land at meaningful acquisition discounts, then hold and reposition it for conversion or onward sale — including higher-upside plays such as our anchor land parcel in Paloh, Johor.',
    checklist: [
      'Acquisition of agricultural and development land at a discount',
      'Highest and Best Use and conversion assessment',
      'Repositioning for conversion or onward sale',
      'Holding strategy aligned to the facility window',
      'Exit routing to development partners or buyers'
    ]
  },
  {
    id: 'estate-jkptg',
    iconName: 'FileSignature',
    title: 'Big & Small Estate (JKPTG)',
    description: 'End-to-end administration of big and small estate claims through JKPTG and the courts — from petition to final distribution.',
    detailedDescription: 'We manage estate matters end-to-end: small estate petitions through JKPTG (Department of Director General of Lands and Mines), Letters of Administration and Probate for larger estates, verification of assets and heirs, and carrying distribution orders through to registered transfer.',
    checklist: [
      'Small estate petitions and hearings via JKPTG',
      'Letters of Administration (LA) & Probate for larger estates',
      'Asset and heir verification with official title searches',
      'Distribution order applications and follow-through',
      'Transfer and registration of inherited assets to heirs'
    ]
  },
  {
    id: 'investment-advisory',
    iconName: 'Briefcase',
    title: 'Market & Investment Advisory',
    description: 'Exit strategy, pricing and timing guidance for partners across the property pipeline.',
    detailedDescription: 'We provide exit strategy, pricing and timing guidance for our partners — translating forensic appraisal and market evidence into disciplined decisions on when and how to realise value across the pipeline.',
    checklist: [
      'Exit strategy design for each asset',
      'Pricing guidance based on verified evidence',
      'Timing and market-window analysis',
      'Portfolio-level capital allocation guidance',
      'Realised-return tracking against projections'
    ]
  }
];

// Completed engagement track record, shown in the "Completed Projects" section.
export const COMPLETED_PROJECTS: CompletedProject[] = [
  {
    id: 'cp-la',
    title: 'Letter of Administration (LA)',
    count: '27+',
    blurb: 'Letters of Administration secured and executed for estates without a will.',
    iconName: 'FileText'
  },
  {
    id: 'cp-probate',
    title: 'Probate',
    count: '30+',
    blurb: 'Grants of Probate obtained and carried through the High Court.',
    iconName: 'ScrollText'
  },
  {
    id: 'cp-subsale',
    title: 'Subsale (House & Land)',
    count: '50+',
    blurb: 'Subsale house and land transactions resolved end-to-end.',
    iconName: 'Home'
  },
  {
    id: 'cp-abundant',
    title: 'Abundant',
    count: '40+',
    blurb: 'Complex recovery and resolution engagements carried to completion.',
    iconName: 'Layers'
  },
  {
    id: 'cp-forensic',
    title: 'Forensic',
    count: '50+',
    blurb: 'Deep-dive title and valuation investigations closed with findings.',
    iconName: 'Fingerprint'
  },
  {
    id: 'cp-consent',
    title: 'Consent',
    count: '35+',
    blurb: 'State-authority consent applications approved and registered.',
    iconName: 'Handshake'
  }
];

export const CASE_STATS = {
  totalCompleted: '227',
  activeCases: '30+'
};
