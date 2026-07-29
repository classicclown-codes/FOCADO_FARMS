import { CTAButton, SectionHeading } from '@/components/site-shell';

export default function ConsultationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 sm:p-10">
        <SectionHeading eyebrow="Farm consultation" title="Expert support for new and growing livestock businesses." description="We offer strategic guidance on stock selection, setup, business planning, and farm growth so your investment is supported from the start." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ['Breeding planning', 'Choose the right stock and timeline for your farm goals.'],
            ['Farm setup guidance', 'Improve your setup, operations, and health protocols.'],
            ['Growth strategy', 'Get practical advice for expansion and better returns.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-[28px] bg-slate-50 p-6 dark:bg-slate-900/70">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton href="/contact">Book a consultation</CTAButton>
          <CTAButton href="/request-quote" variant="secondary">Request a quote</CTAButton>
        </div>
      </section>
    </div>
  );
}
