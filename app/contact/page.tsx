import { CTAButton, SectionHeading } from '@/components/site-shell';
import { companyInfo } from '@/lib/content';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 sm:p-10">
          <SectionHeading eyebrow="Contact" title="Speak with our team about your next livestock purchase." description="We make it easy to request a quote, ask questions, or arrange a consultation for your farm or business." />
          <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <p><span className="font-semibold text-slate-900 dark:text-white">Phone:</span> {companyInfo.phone}</p>
            <p><span className="font-semibold text-slate-900 dark:text-white">Email:</span> {companyInfo.email}</p>
            <p><span className="font-semibold text-slate-900 dark:text-white">Address:</span> {companyInfo.address}</p>
            <p><span className="font-semibold text-slate-900 dark:text-white">Business hours:</span> {companyInfo.hours}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="https://wa.me/2348160567319">Chat on WhatsApp</CTAButton>
            <CTAButton href="/consultation" variant="secondary">Book Consultation</CTAButton>
          </div>
        </div>
        <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-premium sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Inquiry form</p>
          <form className="mt-8 space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Full name" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Business or farm name" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Phone or email" />
            <textarea className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Tell us about your needs" />
            <button className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950">Send inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
