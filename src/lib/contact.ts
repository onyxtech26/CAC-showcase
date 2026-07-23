/** Shared consultation contact channels (navbar dropdown, contact section). */

export const WHATSAPP_NUMBER = '60183777716';

export const WHATSAPP_MESSAGE =
  'Hello CAC, I would like to schedule a forensic consultation regarding property matters / legal / court matters / LA/ PROBET/ JKPTG';

export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message ?? WHATSAPP_MESSAGE)}`;

export const CONSULT_EMAIL = 'conglomerateac@gmail.com';

export const emailLink = () =>
  `mailto:${CONSULT_EMAIL}?subject=${encodeURIComponent('Consultation Request — CAC')}&body=${encodeURIComponent(
    'Hello CAC,\n\nI would like to book a consultation regarding property / legal / court matters (LA / Probate / JKPTG).\n\nName:\nPhone:\nBrief details:\n'
  )}`;
