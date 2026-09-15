import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, MapPin, MessageCircleMore, ShieldCheck, Truck, Wheat } from 'lucide-react';
import { InquiryForm } from '@/components/inquiry-form';
import { companyInfo, farmVisitHighlights, galleryOnlyImages } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Buy Piglets, Breeding Stock and Pork Supply in Nigeria | Focado Farms',
  description: 'Talk directly with Focado Farms about piglets, breeding stock, and pork supply for farms, businesses, restaurants, and households across Nigeria.',
};

const benefits = [
  ['Healthy stock', 'Selected and managed for practical farm performance.', ShieldCheck],
  ['Guidance for your farm', 'Choose stock according to your space, budget, and production goal.', Wheat],
  ['Delivery discussion', 'Plan pickup or delivery around your location and order size.', Truck],
];

const process = [
  ['1', 'Tell us your plan', 'Share your location, preferred stock, quantity, and timeline.'],
  ['2', 'Get a clear recommendation', 'We discuss suitable animals, care requirements, and logistics.'],
  ['3', 'Arrange collection or delivery', 'Confirm the order and agree the safest practical handover.'],
];

export default function PigletsLandingPage() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`;

  return (
    <div className="bg-[#f7f5ef]">
      <section className="relative isolate overflow-hidden bg-brand-900 text-white">
        <video
          src="/videos/farm-tour.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/35" />
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Focado Farms | Nigeria</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">Get healthy pigs or pork supply that suits your needs.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Whether you are starting a farm, buying for a butcher shop or restaurant, or looking for pork for your home, tell us what you need and we will guide you on what is available.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300">Ask what is available</a>
              <a href={whatsappUrl} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><MessageCircleMore size={17} /> Chat on WhatsApp</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Direct farm conversation</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> Serving buyers in Nigeria</span>
            </div>
          </div>
          <div id="inquiry" className="rounded-3xl border border-white/15 bg-slate-950/75 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Check current availability</p>
            <h2 className="mt-3 text-2xl font-semibold">Tell us what you want to buy.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">No payment is needed to make an enquiry. We will confirm the suitable option, price, and next step on WhatsApp.</p>
            <div className="mt-6"><InquiryForm quote /></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">The Farm-Fit Stock Match</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Know what to buy before you spend money on stock.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Avoid spending money on animals that do not suit your farm size, purpose, budget, or location.</p>
              <a href="#inquiry" className="mt-7 inline-flex rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">Get my stock match</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['The problem', 'The wrong stock can waste feed, space, time, and transport money.'],
                ['What you get', 'A clear option to consider and a practical next step.'],
                ['No pressure', 'No payment or purchase commitment is required to make an enquiry.'],
              ].map(([title, description]) => <div key={title} className="border-l-2 border-accent bg-[#f7f5ef] p-5"><h3 className="font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Who this is for</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-slate-900 sm:text-4xl">One simple way to buy with confidence across Nigeria.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ['Farmers', 'Choose stock for your production plan.'],
            ['Butchers', 'Ask about sourcing for your business.'],
            ['Restaurants', 'Discuss your supply needs with the farm.'],
            ['Households', 'Ask about suitable pigs or pork for your home.'],
            ['Pork buyers', 'Tell us what you need and where you are based.'],
          ].map(([title, description]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">What you receive</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-slate-900 sm:text-4xl">A straightforward buying conversation, built around your operation.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.map(([title, description, Icon]) => {
            const BenefitIcon = Icon as typeof ShieldCheck;
            return <article key={title as string} className="border-t-2 border-brand-500 bg-white p-6 shadow-sm"><BenefitIcon className="text-brand-700" size={24} /><h3 className="mt-5 text-xl font-semibold text-slate-900">{title as string}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description as string}</p></article>;
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Our stock</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">See the animals and farm before you buy.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">See real photos from our farm and ask about the current stock or pork supply. Availability can change, so contact us before making plans.</p>
            <a href="/breeds" className="mt-7 inline-flex rounded-full border border-brand-700 px-5 py-3 text-sm font-semibold text-brand-700">View breed options</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Image src={galleryOnlyImages[0] ?? '/images/converted/IMG_1913.jpg'} alt="Pig at Focado Farms" width={800} height={500} className="h-64 w-full object-cover sm:mt-8" />
            <Image src={galleryOnlyImages[1] ?? '/images/converted/IMG_1914.jpg'} alt="Piglets at Focado Farms" width={800} height={500} className="h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Farm visit footage</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Fresh photos and video footage from the recent farm visit.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">We visited the farm owner today and captured video clips along with supporting images to show the real farm setup, handling practices, and available stock. This gives buyers a clearer view before they make decisions.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {farmVisitHighlights.map(({ title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-[#f7f5ef] p-6">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#inquiry" className="inline-flex rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white">Request the farm footage</a>
            <a href={whatsappUrl} className="inline-flex rounded-full border border-brand-700 px-5 py-3 text-sm font-semibold text-brand-700">Ask on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">From your first enquiry to collection or delivery.</h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {process.map(([number, title, description]) => <div key={number} className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">{number}</span><div><h3 className="text-lg font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div></div>)}
        </div>
      </section>

      <section className="bg-brand-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Stock and supply change</p><h2 className="mt-3 text-3xl font-semibold">Ask about what is available before you make plans.</h2></div>
          <a href="#inquiry" className="shrink-0 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950">Get my stock match</a>
        </div>
      </section>
    </div>
  );
}
