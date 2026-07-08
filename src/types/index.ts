export interface CompletedProject {
  id: string;
  title: string;
  count: string;   // e.g. "27+" — rendered with the rolling-number animation
  blurb: string;
  iconName: string; // Lucide icon name
}

export interface Service {
  id: string;
  iconName: string; // Lucide icon name
  title: string;
  description: string;
  detailedDescription: string;
  checklist: string[];
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  serviceRequired: string;
  briefInquiry: string;
  timestamp: string;
  status: 'received' | 'securing_connection' | 'reviewing_deeds' | 'assigned' | 'analyzing_data';
  trackingCode: string;
  lastUpdated: string;
}
