export interface Offer {
  id: string;
  name: string;
  shortName: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  whatsappLabel: string;
}

export interface AddOn {
  name: string;
  description: string;
  price: string;
  cadence: string;
}

export const offers: Offer[] = [
  {
    id: 'website',
    name: 'Business Website',
    shortName: 'Website',
    price: 'Ksh 25,000',
    cadence: 'One-time payment',
    summary: 'Custom-coded business website delivered in 10-14 days.',
    whatsappLabel: 'Business Website',
    features: [
      'Up to 5 pages (Home, About, Services, Contact + 1 custom)',
      'Hand-coded build with no WordPress or templates',
      'Mobile-first layout built for speed and lead generation',
      'Contact form, Google Maps embed, and WhatsApp CTA included',
      'Basic on-page SEO setup included',
      '30-day free support after launch',
    ],
  },
  {
    id: 'seo',
    name: 'SEO & Google Maps Ranking',
    shortName: 'SEO',
    price: 'Ksh 8,000',
    cadence: 'Per month, no lock-in contract',
    summary: 'Monthly SEO retainer for Google search visibility and Maps rankings.',
    whatsappLabel: 'SEO & Google Maps Ranking',
    features: [
      'Keyword research and monthly ranking targets',
      'On-page SEO updates across priority pages',
      'Google Business Profile optimisation and management',
      'Monthly ranking and performance reporting',
      'Google Maps ranking optimisation',
      '1 SEO article or content update per month',
    ],
  },
  {
    id: 'maintenance',
    name: 'Website Maintenance',
    shortName: 'Maintenance',
    price: 'Ksh 5,000',
    cadence: 'Per month, cancel anytime',
    summary: 'Ongoing updates, monitoring, and support after launch.',
    whatsappLabel: 'Website Maintenance',
    features: [
      'Unlimited text and image updates',
      'Monthly speed and uptime checks',
      'Security monitoring and issue response',
      'Off-site backups and recovery support',
      'Priority WhatsApp support',
      'Monthly performance report',
    ],
  },
];

export const addOns: AddOn[] = [
  {
    name: 'Google Ads setup + first month management',
    description: 'Full campaign setup, ad copy, landing page alignment, and launch support.',
    price: 'Ksh 15,000',
    cadence: 'one-time',
  },
  {
    name: 'Extra website pages',
    description: 'Additional pages beyond the 5 included in the standard website package.',
    price: 'Ksh 3,000',
    cadence: 'per page',
  },
  {
    name: 'Logo design',
    description: 'Custom logo delivered in PNG, SVG, and PDF formats.',
    price: 'Ksh 8,000',
    cadence: 'one-time',
  },
  {
    name: 'Ongoing Google Ads management',
    description: 'Monthly bid management, ad testing, and reporting.',
    price: '15% of ad spend',
    cadence: 'minimum Ksh 3,000/month',
  },
  {
    name: 'M-Pesa payment integration',
    description: 'Daraja API integration so customers can pay directly on your site.',
    price: 'Ksh 12,000',
    cadence: 'one-time',
  },
  {
    name: 'E-commerce / online store',
    description: 'Product catalogue, cart, checkout, and payment gateway setup.',
    price: 'From Ksh 45,000',
    cadence: 'one-time',
  },
];

export const defaultQuoteMessage =
  "Hi Tupate Studio, I'd like a quote for my website or marketing project.";

export function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
