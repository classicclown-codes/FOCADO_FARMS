import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  Building2,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  HeartHandshake,
  Leaf,
  MapPin,
  Microscope,
  ShieldCheck,
  Sprout,
  UserCheck,
  ArrowRight,
} from 'lucide-react';

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

export const breeds = [
  {
    name: 'Large White',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    description: 'Fast-growing and highly valued for meat yield and strong carcass quality.',
    suitableFor: 'Commercial growers, meat producers, investors',
    availability: 'Available now',
  },
  {
    name: 'Landrace',
    image: 'https://images.unsplash.com/photo-1516467508483-1c5c2d4a8a3f?auto=format&fit=crop&w=900&q=80',
    description: 'Elegant, productive, and known for excellent mothering ability and feed conversion.',
    suitableFor: 'Breeding herds, nucleus farms, premium buyers',
    availability: 'Limited batches',
  },
  {
    name: 'TN70',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80',
    description: 'A dependable choice for farmers seeking robust growth and practical performance.',
    suitableFor: 'Smallholders upgrading stock, consultants, mixed farms',
    availability: 'Upcoming release',
  },
  {
    name: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1535914254981-b5012e5b6b9f?auto=format&fit=crop&w=900&q=80',
    description: 'Additional premium breeds are being prepared for future release.',
    suitableFor: 'Specialized breeding programs, strategic expansion',
    availability: 'Planned',
  },
];

export const galleryItems = [
  { title: 'Farm', image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80' },
  { title: 'Piglets', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80' },
  { title: 'Growers', image: 'https://images.unsplash.com/photo-1553284965-83fd3e2f4a4e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Feed', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80' },
  { title: 'Facilities', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80' },
  { title: 'Workers', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
  { title: 'Equipment', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
];

export const testimonials = [
  {
    name: 'Adewale O.',
    location: 'Lagos State',
    review: 'The quality was noticeably better than what we had been buying. Our survival rates improved within weeks.',
    rating: 5,
    pigs: '120 pigs',
    before: '70% survival',
    after: '92% survival',
  },
  {
    name: 'Nneka A.',
    location: 'Abuja',
    review: 'Their support made the transition easier for our farm. We could plan growth with much more confidence.',
    rating: 5,
    pigs: '80 pigs',
    before: '2.4kg/day gain',
    after: '3.1kg/day gain',
  },
  {
    name: 'Bashir K.',
    location: 'Kano',
    review: 'Professional service, clear guidance, real results. We were impressed by the delivery and health standards.',
    rating: 5,
    pigs: '250 pigs',
    before: '3.1 months to market',
    after: '2.4 months to market',
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
  { value: '25+', label: 'Years of Livestock Experience' },
  { value: '1,200+', label: 'Pigs Supplied' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'WhatsApp Support' },
];

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

export const heroImage = 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80';

export const companyInfo = {
  phone: '+234 8160567319',
  email: '@focadofarms.com',
  address: 'Ogba river-Benin city, Edo State, Nigeria',
  hours: 'Mon–Sat · 8:00am – 6:00pm',
};
