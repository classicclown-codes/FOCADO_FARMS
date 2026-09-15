import { CTAButton, SectionHeading } from '@/components/site-shell';
import { features, stats } from '@/lib/content';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 sm:p-10">
          <SectionHeading eyebrow="About us" title="A modern livestock company built for trust and performance." description="Focado Farms & Resorts Ltd. is committed to supplying healthy, professionally managed pig breeding stock that helps farmers and investors grow stronger operations in Nigeria." />
          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">We approach every sale with discipline, transparency, and a strong understanding of what modern farms need. Our goal is not just to supply pigs, but to help our clients build dependable business outcomes.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/request-quote">Request a Quote</CTAButton>
            <CTAButton href="/consultation" variant="secondary">Book Consultation</CTAButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Why clients trust us" title="The standards behind every animal we supply." description="Premium breeding stock is only part of the story. The real advantage comes from consistency, support, and professional handling." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700/10 text-brand-700 dark:text-brand-100">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
