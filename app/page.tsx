'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CTAButton, SectionHeading } from '@/components/site-shell';
import { blogPosts, breeds, comparisonRows, features, galleryItems, heroImage, stats, testimonials, trustBadges } from '@/lib/content';
import { ArrowRight, BadgeCheck, Camera, CheckCircle2, HeartHandshake, MapPin, MessageCircleMore, ShieldCheck } from 'lucide-react';

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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(15,23,42,0.72)_0%,_rgba(15,23,42,0.4)_40%,_rgba(15,23,42,0.3)_100%)]" />
        <div className="absolute inset-0">
          <img src={heroImage} alt="Healthy pigs on a premium farm" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-[32px] border border-white/20 bg-white/10 p-8 text-white backdrop-blur-md sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Focado Farms & Resorts Ltd.</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Premium Pig Breeding Stock for Farmers Who Want Better Returns.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Healthy genetics. Vaccinated stock. Expert guidance. Trusted by farmers across Nigeria.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/request-quote">Request a Quote</CTAButton>
              <a href="https://wa.me/2348160567319" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                <MessageCircleMore size={16} /> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-100">
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2">
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

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Our breeds" title="Premium stock for modern pig operations." description="Each breed is selected for practical performance, dependable quality, and long-term value." />
          <CTAButton href="/breeds" variant="secondary">Explore all breeds</CTAButton>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {breeds.map((breed) => (
            <article key={breed.name} className="glass-card overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src={breed.image} alt={breed.name} loading="lazy" className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{breed.name}</h3>
                  <span className="rounded-full bg-brand-700/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-700 dark:text-brand-100">{breed.availability}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{breed.description}</p>
                <p className="mt-4 text-sm font-medium text-slate-900 dark:text-white">Suitable for: {breed.suitableFor}</p>
                <div className="mt-6"><CTAButton href="/request-quote" variant="secondary">Request Quote</CTAButton></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Farm gallery" title="A close look at the standards behind every delivery." description="From farm facilities to daily operations, our environment is built for quality and care." />
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <div key={item.title} className="mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:scale-[1.01] dark:border-slate-800">
              <img src={item.image} alt={item.title} loading="lazy" className="h-64 w-full object-cover" />
              <div className="flex items-center justify-between p-4">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <div className="rounded-full bg-brand-700/10 p-2 text-brand-700 dark:text-brand-100"><Camera size={16} /></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="glass-card overflow-hidden p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Customer success stories" title="Farmers see the difference quickly." description="Our clients trust us because the results are visible, measurable, and repeatable." />
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 dark:text-brand-100">Start your own story <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/70">
              <img src="null" alt="Customer testimonial" loading="lazy" className="h-52 w-full rounded-[24px] object-cover" />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{testimonials[activeTestimonial].name}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><MapPin size={16} /> {testimonials[activeTestimonial].location}</p>
                <div className="mt-3 flex gap-1 text-accent">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, index) => (<span key={index}>★</span>))}
                </div>
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">“{testimonials[activeTestimonial].review}”</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Pigs purchased</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{testimonials[activeTestimonial].pigs}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Before</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{testimonials[activeTestimonial].before}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/70">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">After</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{testimonials[activeTestimonial].after}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button key={testimonial.name} onClick={() => setActiveTestimonial(index)} className={`h-2.5 rounded-full transition ${index === activeTestimonial ? 'w-8 bg-brand-700' : 'w-2.5 bg-slate-300'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Why our pigs perform better" title="Built for consistency, resilience, and strong returns." description="Premium genetics and professional support help create a measurable edge from the start." />
          <CTAButton href="/request-quote" variant="secondary">Compare your options</CTAButton>
        </div>
        <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-sm uppercase tracking-[0.25em] text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
              <tr>
                <th className="px-6 py-4">Area</th>
                <th className="px-6 py-4">Focado Farms</th>
                <th className="px-6 py-4">Typical suppliers</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-t border-slate-200 dark:border-slate-800">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{row.label}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.valueA}</td>
                  <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{row.valueB}</td>
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
              {['Where are you located?', 'Do you deliver?', 'Are the pigs vaccinated?'].map((question) => (
                <details key={question} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white">{question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">We provide clear, practical answers for every stage of your livestock investment.</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-premium sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Contact us</p>
            <h3 className="mt-4 text-3xl font-semibold">Start with a WhatsApp inquiry today.</h3>
            <p className="mt-4 text-lg leading-8 text-slate-300">Whether you are starting a new farm, expanding a commercial operation, or sourcing for a business, our team is ready to help.</p>
            <form className="mt-8 space-y-4">
              <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Your name" />
              <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Phone or email" />
              <textarea className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Tell us about your plan" />
              <button className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950">Send inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
