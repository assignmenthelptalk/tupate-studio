import { defaultQuoteMessage, offers } from './lib/offers';

const websiteOffer = offers.find((offer) => offer.id === 'website');
const seoOffer = offers.find((offer) => offer.id === 'seo');
const maintenanceOffer = offers.find((offer) => offer.id === 'maintenance');

export const SITE = {
  name: 'Tupate Studio',
  tagline: 'Web design and digital marketing for Kenyan businesses',
  description:
    'Nairobi web design agency. We build fast, conversion-focused websites for Kenyan SMEs from Ksh 25,000.',
  phone: '+254 721 165 448',
  whatsapp: '254721165448',
  email: 'hello@tupate.studio',
  address: 'Nairobi, Kenya',

  services: [
    {
      icon: 'Website',
      title: 'Website Design',
      description:
        'Fast, hand-built websites that rank and convert. Delivered in 10-14 days.',
      price: websiteOffer?.price ?? 'Ksh 25,000',
    },
    {
      icon: 'SEO',
      title: 'SEO + Google Maps Ranking',
      description:
        'Local SEO that gets your business found with monthly reporting and Google Maps visibility.',
      price: `${seoOffer?.price ?? 'Ksh 8,000'} / mo`,
    },
    {
      icon: 'Ads',
      title: 'Google Ads',
      description:
        'Targeted ad campaigns with setup, copy, and management focused on leads.',
      price: '15% of ad spend',
    },
    {
      icon: 'Care',
      title: 'Monthly Maintenance',
      description:
        'Updates, backups, security checks, and priority support every month.',
      price: `${maintenanceOffer?.price ?? 'Ksh 5,000'} / mo`,
    },
  ],

  stats: [
    { value: '500+', label: 'Businesses have trusted us' },
    { value: 'Ksh 8,000', label: 'Marketing starts from / month' },
    { value: '10-14 days', label: 'Website delivery window' },
  ],

  brands: ['Industrial', 'Medical', 'Legal', 'Real Estate', 'Hospitality', 'Education'],

  portfolio: [
    {
      name: 'Gosstech Engineering',
      industry: 'Industrial',
      url: '#',
      placeholder: true,
    },
    {
      name: 'Vida Family Clinic',
      industry: 'Medical',
      url: '#',
      placeholder: true,
    },
    {
      name: 'Kamau & Associates',
      industry: 'Legal',
      url: '#',
      placeholder: true,
    },
  ],

  testimonials: [
    {
      quote:
        'Tupate delivered our website in 10 days. It looks professional, loads fast, and we started getting more qualified inquiries.',
      name: 'James Mwangi',
      role: 'Director, GossTech Engineering',
    },
    {
      quote:
        'The team understood what our clinic needed without a long brief. Clean design, easy contact flow, and patients now reach us faster.',
      name: 'Dr. Aisha Omendi',
      role: 'Founder, Vita Family Clinic',
    },
    {
      quote:
        'Best investment I made for my law firm. The site brought in three new clients in the first month.',
      name: 'Kevin Kamau',
      role: 'Principal, Kamau & Associates',
    },
  ],

  social: {
    instagram: 'https://instagram.com/tupate.studio',
    linkedin: 'https://linkedin.com/company/tupate-studio',
    twitter: 'https://twitter.com/tupatestudio',
  },

  ctaText: 'Get a quote',
  ctaWhatsappMessage: defaultQuoteMessage,
};
