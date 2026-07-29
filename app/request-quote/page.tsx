import { CTAButton, SectionHeading } from '@/components/site-shell';
import { services } from '@/lib/content';

export default function RequestQuotePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 sm:p-10">
          <SectionHeading eyebrow="Request a quote" title="Let’s discuss the right stock for your farm." description="Tell us what you need and we will guide you toward the most suitable option for your size, budget, and growth plan." />
          <ul className="mt-8 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-2"><span className="text-brand-700">✓</span> {service}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-premium sm:p-10">
          <form className="space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Full name" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Email or phone" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Preferred breed" />
            <textarea className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none" placeholder="Tell us the number of pigs and your timeline" />
            <button className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950">Submit request</button>
          </form>
        </div>
      </div>
    </div>
  );
}
