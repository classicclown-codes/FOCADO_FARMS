'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, MessageCircleMore, MoonStar, SunMedium, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { companyInfo, navItems, quickLinks, services } from '@/lib/content';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = storedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,125,44,0.16),_transparent_36%),linear-gradient(135deg,_#f7f5ef_0%,_#ffffff_100%)] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Focado Farms & Resorts Ltd." width={52} height={52} priority className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700 dark:text-brand-100">Focado Farms</p>
              <p className="text-xs text-slate-600 dark:text-slate-300">Premium Pig Breeding Stock</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={`text-sm font-medium transition ${isActive ? 'text-brand-700 dark:text-brand-100' : 'text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-100'}`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand-700 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300"
              aria-label="Toggle color theme"
            >
              {theme === 'light' ? <MoonStar size={18} /> : <SunMedium size={18} />}
            </button>
            <Link href="/request-quote" className="hidden rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-premium transition hover:bg-brand-900 sm:inline-flex">
              Request a Quote
            </Link>
            <button className="rounded-full border border-slate-200 p-2 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {mobileOpen ? (
          <div className="border-t border-black/10 bg-white/95 px-4 py-4 transition-all duration-200 dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="transition-all duration-300">
        {children}
      </main>

      <footer className="border-t border-black/10 bg-slate-950 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Focado Farms & Resorts Ltd.</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Premium livestock solutions for serious farms and business owners.</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">We build trust through healthy stock, dependable service, and clear guidance for commercial and emerging pig farmers across Nigeria.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Quick links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>{companyInfo.phone}</li>
              <li>{companyInfo.email}</li>
              <li>{companyInfo.address}</li>
              <li>{companyInfo.hours}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {services.slice(0, 3).map((service) => (
                <span key={service} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Focado Farms & Resorts Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`} className="transition hover:text-white">WhatsApp</a>
            <a href={`mailto:${companyInfo.email}`} className="transition hover:text-white">Email</a>
          </div>
        </div>
      </footer>

      <a href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`} className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-premium transition hover:scale-105">
        <MessageCircleMore size={18} /> Chat on WhatsApp
      </a>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-700 dark:text-brand-100">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

export function CTAButton({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  const classes = variant === 'primary' ? 'rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-premium transition hover:bg-brand-900' : 'rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-700 hover:text-brand-700 dark:border-slate-700 dark:text-slate-200';
  return (
    <Link href={href} className={`${classes} inline-flex items-center gap-2`}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
