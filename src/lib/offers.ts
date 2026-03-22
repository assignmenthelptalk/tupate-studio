export interface Offer {
  id: string;
  name: string;
  shortName: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  whatsappLabel: string;
  featured?: boolean;
}

export interface AddOn {
  name: string;
  description: string;
  price: string;
  cadence: string;
}

export const offers: Offer[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    shortName: 'Starter',
    price: 'Ksh 8,000',
    cadence: 'per month',
    summary: 'For businesses that need to be found locally.',
    whatsappLabel: 'Starter Pack',
    features: [
      'Google Business Profile setup & optimisation',
      'Monthly GBP posts, photos & offers',
      'Basic on-page SEO audit + 3 page fixes',
      'WhatsApp Business setup & auto-reply',
      'Monthly performance report',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Pack',
    shortName: 'Growth',
    price: 'Ksh 18,000',
    cadence: 'per month',
    summary: 'For businesses ready to grow online consistently.',
    whatsappLabel: 'Growth Pack',
    featured: true,
    features: [
      'Everything in Starter Pack',
      'Full SEO management — keywords, on-page, technical',
      'Social media setup on 2 platforms',
      '8 posts/month with graphics & captions',
      'Google review response management',
      'Monthly analytics report with insights',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Pack',
    shortName: 'Pro',
    price: 'Ksh 35,000',
    cadence: 'per month',
    summary: 'For businesses that want to dominate their niche.',
    whatsappLabel: 'Pro Pack',
    features: [
      'Everything in Growth Pack',
      '12 posts/month across 3 platforms',
      '2 SEO blog articles per month',
      'Google Ads management',
      'Quarterly competitor analysis',
      'Priority support + monthly strategy call',
    ],
  },
];

export const addOns: AddOn[] = [
  {
    name: 'Website Build',
    description: '5-page custom site, hand-coded and mobile-ready.',
    price: 'Ksh 30,000',
    cadence: 'one-time',
  },
  {
    name: 'Website Redesign',
    description: 'Modernise your existing site with a fresh design.',
    price: 'Ksh 20,000',
    cadence: 'one-time',
  },
  {
    name: 'Website Maintenance',
    description: 'Monthly updates, backups, and uptime monitoring.',
    price: 'Ksh 3,000',
    cadence: 'per month',
  },
  {
    name: 'Landing Page',
    description: 'Single high-conversion page for campaigns or ads.',
    price: 'Ksh 10,000',
    cadence: 'one-time',
  },
  {
    name: 'Site Audit',
    description: 'Full speed, SEO & UX report with action points.',
    price: 'Ksh 5,000',
    cadence: 'one-time',
  },
  {
    name: 'Google Ads Setup',
    description: 'Campaign setup, ad copy, and configuration.',
    price: 'Ksh 8,000',
    cadence: 'one-time',
  },
];

export const defaultQuoteMessage =
  "Hi Tupate Studio, I'd like a quote for my marketing or website project.";

export function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
