'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CTAButton, SectionHeading } from '@/components/site-shell';
import { InquiryForm } from '@/components/inquiry-form';
import { MediaSlideshow } from '@/components/media-slideshow';
import { blogPosts, companyInfo, comparisonRows, faqs, features, farmFootageItems, heroImage, stats, trustBadges } from '@/lib/content';
import { CheckCircle2, MessageCircleMore } from 'lucide-react';

function Counter({ value, label }: { value: string; label: string }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const end = Number(value.replace(/[^\d]/g, ''));
    const duration = 1000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(value.includes('+') ? `${current}+` : value.includes('%') ? `${current}%` : value.includes('/') ? `${current}/7` : `${current}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <p className="text-3xl font-semibold text-slate-900 dark:text-white">{display}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(15,23,42,0.82)_0%,_rgba(15,23,42,0.58)_38%,_rgba(15,23,42,0.46)_100%)]" />
        <div className="absolute inset-0">
          <video
            src="/videos/farm-tour.mp4"
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full scale-105 object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_35%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-[32px] border border-white/20 bg-slate-950/35 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Focado Farms & Resorts Ltd.</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Premium Pig Breeding Stock for Farmers Who Want Better Returns.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Healthy genetics. Vaccinated stock. Expert guidance. Trusted by farmers across Nigeria.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/request-quote">Request a Quote</CTAButton>
              <a href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                <MessageCircleMore size={16} /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-100">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 shadow-sm backdrop-blur-sm">
                  <CheckCircle2 size={16} className="text-accent" /> {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card p-8 sm:p-10">
            <SectionHeading eyebrow="Why choose Focado" title="A premium partner for serious livestock businesses." description="We combine strong genetics, clear health standards, and practical support so your farm can grow with confidence." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.slice(0, 4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700/10 text-brand-700 dark:text-brand-100">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="glass-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-700 dark:text-brand-100">Trusted by ambitious buyers</p>
            <div className="mt-6 grid gap-4">
              {stats.map((stat) => (
                <Counter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
            <div className="mt-6 rounded-3xl bg-brand-700 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-100">Need a tailored plan?</p>
              <h3 className="mt-2 text-2xl font-semibold">Speak with our farm specialists today.</h3>
              <p className="mt-3 text-sm leading-7 text-brand-50">We help investors, restaurants, and new farmers choose stock that matches their goals.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/consultation" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">Book Consultation</Link>
                <Link href="/contact" className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Farm footage" title="See the farm and stock you are buying." description="Real footage from our Nigerian operations helps buyers understand our stock, handling, and delivery process." />
        <div className="mt-10">
          <MediaSlideshow items={farmFootageItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Why our pigs perform better" title="Built for consistency, resilience, and strong returns." description="Premium genetics and professional support help create a measurable edge from the start." />
          <CTAButton href="/request-quote" variant="secondary">Compare your options</CTAButton>
        </div>
        <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <table className="w-full table-fixed text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-[0.65rem] uppercase tracking-[0.08em] text-slate-500 dark:bg-slate-900/70 dark:text-slate-400 sm:text-xs sm:tracking-[0.15em]">
              <tr>
                <th className="w-[27%] px-3 py-3 sm:px-6 sm:py-4">Area</th>
                <th className="w-[36.5%] px-3 py-3 sm:px-6 sm:py-4">Focado Farms</th>
                <th className="w-[36.5%] px-3 py-3 sm:px-6 sm:py-4">Typical suppliers</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="break-words px-3 py-3 font-semibold text-slate-900 dark:text-white sm:px-6 sm:py-4">{row.label}</td>
                  <td className="break-words px-3 py-3 text-slate-700 dark:text-slate-300 sm:px-6 sm:py-4">{row.valueA}</td>
                  <td className="break-words px-3 py-3 text-slate-700 dark:text-slate-300 sm:px-6 sm:py-4">{row.valueB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Education center" title="Practical guidance for every stage of your farm journey." description="Knowledge is part of the value we provide, especially for new buyers and growing operations." />
          <CTAButton href="/blog" variant="secondary">Read our articles</CTAButton>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <article key={post.title} className="glass-card p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700/10 text-brand-700 dark:text-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-8 sm:p-10">
            <SectionHeading eyebrow="Frequently asked questions" title="Clear answers for serious buyers." description="If you are planning your next purchase or expansion, we are ready to guide you from the first conversation." />
            <div className="mt-8 space-y-3">
              {faqs.slice(0, 3).map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-premium sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Contact us</p>
            <h3 className="mt-4 text-3xl font-semibold">Start with a WhatsApp inquiry today.</h3>
            <p className="mt-4 text-lg leading-8 text-slate-300">Whether you are starting a new farm, expanding a commercial operation, or sourcing for a business, our team is ready to help.</p>
            <div className="mt-8"><InquiryForm /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
