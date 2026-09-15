import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  BarChart3,
  Building2,
  CircleDollarSign,
  HeartHandshake,
  Leaf,
  Microscope,
  ShieldCheck,
  Sprout,
  UserCheck,
} from 'lucide-react';
import { breedGalleryImages, galleryOnlyImages as uploadedGalleryImages, heroImage as generatedHeroImage, uploadedVideos } from './generated-media';

export const companyInfo = {
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '+2348160567319',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '2348160567319',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? 'Focadofarmsandresorts@gmail.com',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? 'Ogba River, Benin City, Edo State, Nigeria',
  hours: process.env.NEXT_PUBLIC_COMPANY_HOURS ?? 'Mon-Sat, 9:00am-5:00pm',
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: FeatureItem[] = [
  {
    title: 'Premium Genetics',
    description: 'Healthy, productive stock with strong growth and consistent body conformation.',
    icon: BadgeCheck,
  },
  {
    title: 'Vaccinated Stock',
    description: 'Every purchase is supported by a clear health and vaccination protocol.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Guidance',
    description: 'We help new and experienced farmers make better decisions from day one.',
    icon: HeartHandshake,
  },
  {
    title: 'Professional Farm Management',
    description: 'From sourcing to delivery, our team helps keep your operation efficient.',
    icon: Building2,
  },
  {
    title: 'Reliable Support',
    description: 'A responsive team that stays close to your business long after delivery.',
    icon: UserCheck,
  },
  {
    title: 'Consistent Quality',
    description: 'We focus on dependable performance so your farm can plan with confidence.',
    icon: BarChart3,
  },
];

const breedCatalog = [
  {
    name: 'Large White',
    description: 'Fast-growing and highly valued for meat yield and strong carcass quality.',
    suitableFor: 'Commercial growers, meat producers, investors',
    availability: 'Confirm availability',
  },
  {
    name: 'Landrace',
    description: 'Elegant, productive, and known for excellent mothering ability and feed conversion.',
    suitableFor: 'Breeding herds, nucleus farms, premium buyers',
    availability: 'Confirm availability',
  },
  {
    name: 'TN70',
    description: 'A dependable choice for farmers seeking robust growth and practical performance.',
    suitableFor: 'Smallholders upgrading stock, consultants, mixed farms',
    availability: 'Confirm availability',
  },
];

export const breeds = breedCatalog.map((breed, index) => ({
  ...breed,
  image: breedGalleryImages[index] ?? breedGalleryImages[0] ?? '',
  video: `/videos/breed${index + 1}.mp4`,
}));

export type GalleryItem = {
  title: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
};

export const galleryOnlyImages = uploadedGalleryImages.length ? uploadedGalleryImages : [];
const galleryImageSet = galleryOnlyImages;

export const galleryItems: GalleryItem[] = [
  ...galleryImageSet.map((src, index) => ({
    title: `Farm image ${index + 1}`,
    type: 'image' as const,
    src,
  })),
  ...uploadedVideos.map((src, index) => ({
    title: `Farm video ${index + 1}`,
    type: 'video' as const,
    src,
    poster: galleryImageSet.length ? galleryImageSet[index % galleryImageSet.length] : undefined,
  })),
];

export const farmVisitHighlights = [
  {
    title: 'Fresh farm footage',
    description: 'Video clips from the recent farm visit help buyers understand the environment, animal condition, and daily operations.',
  },
  {
    title: 'Supporting photos',
    description: 'The collected pictures cover stock, housing, handling, and farm facilities so you can assess the setup more clearly.',
  },
  {
    title: 'Better buying confidence',
    description: 'This documentation brings more transparency to the decision process before purchase, collection, or delivery.',
  },
];

export const comparisonRows = [
  { label: 'Vaccination', valueA: 'Structured protocols', valueB: 'Inconsistent practice' },
  { label: 'Genetics', valueA: 'Selected and monitored', valueB: 'Mixed quality' },
  { label: 'Farm support', valueA: 'Dedicated guidance', valueB: 'Limited after-sale help' },
  { label: 'Health monitoring', valueA: 'Proactive oversight', valueB: 'Reactive only' },
  { label: 'Customer guidance', valueA: 'Practical consultancy', valueB: 'Minimal direction' },
  { label: 'Consistency', valueA: 'Reliable outcomes', valueB: 'Variable results' },
];

export const blogPosts = [
  { title: 'How to Start Pig Farming in Nigeria', description: 'A practical roadmap for new farmers who want to begin with confidence.', icon: Sprout },
  { title: 'Choosing the Right Breed', description: 'Understand which genetics fit your goals, climate and business model.', icon: Leaf },
  { title: 'Pig Feeding Guide', description: 'Simple ways to improve feed efficiency and better returns.', icon: CircleDollarSign },
  { title: 'Vaccination Schedule', description: 'Stay ahead of common health risks with a clear plan.', icon: ShieldCheck },
  { title: 'Common Beginner Mistakes', description: 'Learn what to avoid when you are scaling up your farm.', icon: Microscope },
  { title: 'How to Maximize Farm Profit', description: 'A disciplined framework for growth, health and output.', icon: BarChart3 },
];

export const faqs = [
  { question: 'Where are you located?', answer: 'We operate from a modern farm base in Nigeria and serve clients across the country.' },
  { question: 'Do you deliver?', answer: 'Yes. We offer delivery support for qualifying orders and can discuss logistics based on your location.' },
  { question: 'Are the pigs vaccinated?', answer: 'Yes. Our stock is selected and managed with clear vaccination and health protocols.' },
  { question: 'How do I place an order?', answer: 'You can request a quote through our contact form or WhatsApp and we will guide you through the process.' },
  { question: 'Can beginners buy?', answer: 'Absolutely. We welcome new farmers and provide practical guidance for first-time buyers.' },
  { question: 'Do you provide farm consultation?', answer: 'Yes. We offer expert consultation for planning, setup, breeding, and growth strategy.' },
];

export const stats = [
  { value: process.env.NEXT_PUBLIC_YEARS_EXPERIENCE ?? '', label: 'Years of Livestock Experience' },
  { value: process.env.NEXT_PUBLIC_PIGS_SUPPLIED ?? '', label: 'Pigs Supplied' },
  { value: process.env.NEXT_PUBLIC_CLIENT_SATISFACTION ?? '', label: 'Client Satisfaction' },
  { value: process.env.NEXT_PUBLIC_SUPPORT_HOURS ?? '', label: 'Support Availability' },
].filter((stat) => stat.value);

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Breeds', href: '/breeds' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const quickLinks = [
  { label: 'Request a Quote', href: '/request-quote' },
  { label: 'Farm Consultation', href: '/consultation' },
  { label: 'Our Breeds', href: '/breeds' },
  { label: 'Gallery', href: '/gallery' },
];

export const services = [
  'Premium breeding stock',
  'Farm consultation',
  'Delivery support',
  'Ongoing farm guidance',
];

export const trustBadges = ['Healthy Stock', 'Vaccinated', 'Farm Support', 'Trusted Genetics'];

export const heroImage = generatedHeroImage || '/images/hero.jpg';
