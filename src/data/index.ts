import { CompletedProject, Service, Stat } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'property-forensic',
    iconName: 'Fingerprint',
    imageUrl: '/assets/icon-ownership-3d-floating.png',
    title: 'Property Forensic Investigation',
    description: 'Systematic analysis of land titles, deeds, and historical records to establish true, pioneer ownership and trace succession lines.',
    detailedDescription: 'We conduct independent property forensic audits by researching historical registry books, colonial grants, surveyor cadastrals, and local archives. Our findings map succession chains, clarify heir validity, and compile evidence packages designed to stand up in judicial and state arbitration processes.',
    checklist: [
      'Colonial land grant & pioneer title tracing',
      'Registry chain-of-ownership reconstruction',
      'Deed authenticity & conveyance audits',
      'High-court archive & probate record searches',
      'Compilation of verified forensic evidence portfolios'
    ]
  },
  {
    id: 'family-estate',
    iconName: 'Users',
    imageUrl: '/assets/icon-ownership-3d-floating.png',
    title: 'Family Estate Investigation',
    description: 'Resolving complex estate disputes among heirs by tracing hidden assets, verifying beneficiaries, and clarifying distribution paths.',
    detailedDescription: 'When family estates are contested or lack clear administration, our agents step in. We research family genealogies, identify all lawful beneficiaries (including missing or unnotified heirs), uncover undisclosed or hidden inherited assets, and provide administration support for probate filings.',
    checklist: [
      'Beneficiary tracing & lawful heir identification',
      'Hidden estate asset discovery & mapping',
      'Genealogy & family tree lineage verification',
      'Intestate distribution path clarification',
      'Probate court document compilation'
    ]
  },
  {
    id: 'property-intelligence',
    iconName: 'Globe',
    imageUrl: '/assets/icon-missing-3d-floating.png',
    title: 'Property Intelligence Centre',
    description: 'Advanced property due diligence utilizing GIS maps, satellite imagery, survey plans, and historical ownership chronologies.',
    detailedDescription: 'Our intelligence services compile geospatial data, registry entries, and historical zoning maps. We construct a comprehensive dashboard of a property’s physical and legal boundary history, protecting buyers and developers from costly encroachment or land classification errors.',
    checklist: [
      'Geospatial boundary audits & GIS surveying analysis',
      'Historical zoning & land use chronology mapping',
      'Encroachment & easement risk assessment',
      'Zoning restriction & developmental constraint review',
      'High-resolution satellite ownership mapping'
    ]
  },
  {
    id: 'missing-property',
    iconName: 'MapPin',
    imageUrl: '/assets/icon-missing-3d-floating.png',
    title: 'Missing Property Recovery',
    description: 'Locating properties lost due to township developments, compulsory government acquisition, or historical zoning changes.',
    detailedDescription: 'Valuable ancestral land often gets lost in government acquisitions, highway constructions, or township consolidation projects. We trace lost coordinates, audit replacement land allocations, and determine if outstanding compensation funds remain unclaimed by the rightful heirs.',
    checklist: [
      'Historical coordinates & boundary recovery',
      'Compulsory government acquisition audit',
      'Highway, rail, & infrastructure project mapping',
      'Unclaimed compensation fund tracing',
      'Zoning layout & master plan reconciliation'
    ]
  },
  {
    id: 'asset-tracing',
    iconName: 'Coins',
    imageUrl: '/assets/icon-asset-3d-floating.png',
    title: 'Asset Tracing & Recovery',
    description: 'Identifying and mapping residential, commercial, agricultural, corporate, and vehicle assets held under small or large estates.',
    detailedDescription: 'We trace assets from single residential homes to sprawling agricultural plantations, corporate shareholdings, bank funds, and international holdings. Our investigations map out current assets, identify unauthorized transfers, and verify hidden ownership structures.',
    checklist: [
      'Residential & commercial portfolio mapping',
      'Agricultural & plantation asset tracking',
      'Corporate shareholdings & trust structure investigation',
      'Unauthorized asset transfer audit',
      'Vehicle, equipment, & luxury asset location'
    ]
  },
  {
    id: 'title-investigation',
    iconName: 'FileText',
    imageUrl: '/assets/icon-title-3d-floating.png',
    title: 'Title & Document Investigation',
    description: 'Locating and verifying missing land titles, Deeds of Gift, wills, court orders, and land registry records.',
    detailedDescription: 'When original documents are lost, misplaced, or withheld, we retrieve certified copies, explore registry files, search court probate records, and locate legal agreements (SPAs, Wills, Deeds of Gift) to establish formal chains of custody and legal security.',
    checklist: [
      'Registry file searches for lost or damaged titles',
      'Deed of Gift & Will document validation',
      'Probate files & High Court order retrieval',
      'Certified copy procurement from land offices',
      'Historical transaction ledger verification'
    ]
  },
  {
    id: 'fraud-investigation',
    iconName: 'ShieldAlert',
    imageUrl: '/assets/icon-fraud-3d-floating.png',
    title: 'Fraud & Dispute Investigation',
    description: 'Exposing forged signatures, fake deeds, invalid powers of attorney, and fraudulent claims to family properties.',
    detailedDescription: 'We conduct forensic analyses of questionable property transfers. Our team investigates fraudulent signatures, unauthorized powers of attorney, fake registry entries, and illegal sales, delivering an independent factual report for legal action.',
    checklist: [
      'Signature & document forgery detection',
      'Power of Attorney validity investigation',
      'Registry transaction audit for irregularities',
      'Unauthorised sale & asset concealment analysis',
      'Fact-finding report compilation for legal counsel'
    ]
  },
  {
    id: 'legal-coordination',
    iconName: 'Handshake',
    imageUrl: '/assets/icon-legal-3d-floating.png',
    title: 'Legal & Authority Coordination',
    description: 'Preparing evidence portfolios, coordinating with land offices, and referring clients to expert probate and land attorneys.',
    detailedDescription: 'We translate our investigation findings into legal evidence files. We refer clients to elite, experienced attorneys specializing in land law, probate, and inheritance, coordinating with government agencies and survey offices through to case resolution.',
    checklist: [
      'Evidence portfolio compilation for court cases',
      'Referrals to specialist property & probate attorneys',
      'Liaising with land offices & survey departments',
      'Strategic advisory on case evidence structure',
      'Post-investigation case progress tracking'
    ]
  },
  {
    id: 'property-sale',
    iconName: 'Home',
    imageUrl: '/assets/icon-missing-3d-floating.png',
    title: 'Property Sale Coordination',
    description: 'Facilitating valuation, marketing, and subsale transaction coordination for recovered or inherited real estate assets.',
    detailedDescription: 'Once property ownership disputes are resolved, we help clients unlock the financial value of their assets. Working alongside licensed real estate professionals, we assist with property valuations, marketing campaigns, and subsale transaction compliance.',
    checklist: [
      'Property valuation & market appraisal support',
      'Marketing campaigns targeting qualified networks',
      'Transaction compliance & documentation check',
      'Liaison with buyers, brokers, and bank valuers',
      'Negotiation advisory for maximum asset value'
    ]
  },
  {
    id: 'buyer-matching',
    iconName: 'UserCheck',
    imageUrl: '/assets/icon-legal-3d-floating.png',
    title: 'Investor & Buyer Matching',
    description: 'Connecting property owners with a vetted network of real estate investors, cash buyers, and developers.',
    detailedDescription: 'For clients seeking quick liquidations or partnership deals on newly resolved tracts of land and commercial blocks, we coordinate directly with our private investor network, matchmaking sellers with qualified cash buyers and developers.',
    checklist: [
      'Matchmaking with vetted property developers',
      'Direct coordination with private cash buyers',
      'Structuring Joint Venture (JV) property proposals',
      'Facilitating off-market transaction bids',
      'Targeted pitches to real estate investment syndicates'
    ]
  },
  {
    id: 'investment-consultancy',
    iconName: 'TrendingUp',
    imageUrl: '/assets/icon-asset-3d-floating.png',
    title: 'Investment Consultancy',
    description: 'Advising on property due diligence, acquisition feasibility, development potential, and risk mitigation strategies.',
    detailedDescription: 'We guide real estate buyers, developers, and funds through acquisition due diligence. Our consultancy reviews ownership histories, restrictive covenants, zoning limits, and development risks to ensure every investment is sound and legally protected.',
    checklist: [
      'Acquisition due diligence & title risk auditing',
      'Development potential & zoning compliance check',
      'Joint Venture feasibility & structure analysis',
      'Property risk profiles & liability assessments',
      'Long-term asset appreciation and exit planning'
    ]
  },
  {
    id: 'renovation-consultancy',
    iconName: 'Wrench',
    imageUrl: '/assets/icon-title-3d-floating.png',
    title: 'Renovation & ROI Consultancy',
    description: 'Evaluating property upgrades, coordinating contractors, and structuring renovations to maximize resale market value.',
    detailedDescription: 'We help clients maximize the market value of recovered or inherited properties before sale. We coordinate structural and cosmetic upgrades, establish contractor budgets, and conduct ROI analyses to ensure renovations yield optimal capital gains.',
    checklist: [
      'Before-and-after value uplift assessments',
      'Detailed renovation scope & contractor budgeting',
      'Coordination of exterior and interior upgrades',
      'Project milestone monitoring and quality control',
      'Market positioning & rental yield maximization analysis'
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
  { id: 'st-disciplines', value: '12', label: 'Core Disciplines', iconName: 'ShieldCheck' }
];
