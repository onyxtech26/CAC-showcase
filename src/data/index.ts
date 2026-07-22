import { CompletedProject, Service, Stat } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'ownership-investigation',
    iconName: 'Fingerprint',
    title: 'Property Ownership Investigation',
    description: 'Verifying legal and historical ownership — tracing an estate back to its original, pioneer owners before any distribution or transaction proceeds.',
    detailedDescription: 'We verify legal ownership through land title searches, review inheritance records, and trace historical and pioneer ownership back to original land grants, colonial records, survey plans and family agreements — establishing whether a property genuinely originates from the family’s ancestors.',
    checklist: [
      'Land title searches and legal ownership verification',
      'Historical and pioneer ownership tracing',
      'Review of inheritance records and legal beneficiaries',
      'Verification of prior transfers or sales',
      'Government archive and historical tax record searches'
    ]
  },
  {
    id: 'missing-property-investigation',
    iconName: 'Compass',
    title: 'Missing Property Investigation',
    description: 'Locating properties that have disappeared from family records through development, compulsory acquisition, incorrect registration or fraud.',
    detailedDescription: 'We investigate properties that have gone missing from family records — whether through township development, compulsory land acquisition, incorrect registration or fraudulent transfer — and determine whether compensation was paid, who received it, and whether it remains unclaimed.',
    checklist: [
      'Investigation of township and government-acquisition records',
      'Tracing of compensation payments and unclaimed proceeds',
      'Verification of registration and replacement land issuance',
      'Identification of administrative errors or fraudulent transfers',
      'Recovery pathway assessment for reclaiming the asset'
    ]
  },
  {
    id: 'title-document-investigation',
    iconName: 'FileSignature',
    title: 'Title & Document Investigation',
    description: 'Locating missing titles, Deeds of Gift and other vital documents through land registry, court and archival searches.',
    detailedDescription: 'Missing original title deeds and Deeds of Gift are a common source of disputes among heirs. We search the land registry, court and probate records, lawyers’ files, banking records and government gazettes, and where originals cannot be located, help obtain certified copies or secondary evidence.',
    checklist: [
      'Land registry and court record searches',
      'Probate file and lawyer’s file searches',
      'Banking record and family archive searches',
      'Government gazette and historical registration searches',
      'Certified copy or secondary evidence recovery'
    ]
  },
  {
    id: 'fraud-dispute-investigation',
    iconName: 'ShieldAlert',
    title: 'Fraud & Dispute Investigation',
    description: 'Exposing forged documents, unauthorised transfers and hidden beneficiaries behind contested estates — investigated objectively on the evidence.',
    detailedDescription: 'We investigate allegations common to family estate disputes — undisclosed inheritance, forged signatures and powers of attorney, unauthorised sales, hidden beneficiaries, invalid gifts and undue influence — objectively, using documentary and factual evidence rather than assumption.',
    checklist: [
      'Forged signature and power of attorney investigation',
      'Unauthorised sale and hidden beneficiary tracing',
      'Undue influence and invalid gift assessment',
      'Missing rental income and unaccounted fund review',
      'Objective, evidence-based findings for every allegation'
    ]
  },
  {
    id: 'asset-tracing-recovery',
    iconName: 'Coins',
    title: 'Asset Tracing & Recovery',
    description: 'Identifying and tracing movable and immovable assets, shareholdings, trusts and cross-border holdings across small and large estates.',
    detailedDescription: 'From a single family home to a portfolio spanning multiple states and countries, we identify and trace all movable and immovable assets — corporate shareholdings, trust arrangements, joint ownership structures and cross-border property — and assess their legal status and value.',
    checklist: [
      'Identification of all movable and immovable assets',
      'Corporate shareholding and trust arrangement tracing',
      'Cross-border and multi-title property investigation',
      'Financial tracing and asset valuation',
      'Assessment of hidden or transferred assets'
    ]
  },
  {
    id: 'legal-advisory-support',
    iconName: 'Handshake',
    title: 'Legal & Advisory Support',
    description: 'Referring clients to experienced lawyers, preparing evidence for proceedings, and coordinating with authorities through to resolution.',
    detailedDescription: 'Once our investigation concludes, we refer clients to lawyers experienced in property, probate, inheritance and land matters, help prepare supporting evidence for proceedings, liaise with land offices and government agencies, and monitor each case through to resolution.',
    checklist: [
      'Referral to experienced property and probate lawyers',
      'Evidence and documentation preparation for legal proceedings',
      'Liaison with land offices, survey departments and authorities',
      'Case progress monitoring through to resolution',
      'Continued investigative support alongside legal counsel'
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
    title: 'Abandoned',
    count: '40+',
    blurb: 'Abandoned and forgotten properties traced, verified and revived.',
    iconName: 'Layers'
  },
  {
    id: 'cp-forensic',
    title: 'Forensic',
    count: '50+',
    blurb: 'Deep-dive title, ownership and fraud investigations closed with findings.',
    iconName: 'Fingerprint'
  },
  {
    id: 'cp-consent',
    title: 'Consent / Bumi Consent',
    count: '35+',
    blurb: 'State-authority consent applications approved and registered.',
    iconName: 'Handshake'
  }
];

export const CASE_STATS = {
  totalCompleted: '227',
  activeCases: '30+'
};

// Headline stats bar — real, verifiable figures only.
export const STATS: Stat[] = [
  { id: 'st-years', value: '17+', label: 'Years Established', iconName: 'CalendarClock' },
  { id: 'st-cases', value: '227+', label: 'Cases Completed', iconName: 'FolderCheck' },
  { id: 'st-active', value: '30+', label: 'Active Cases', iconName: 'Activity' },
  { id: 'st-disciplines', value: '6', label: 'Core Disciplines', iconName: 'ShieldCheck' }
];
