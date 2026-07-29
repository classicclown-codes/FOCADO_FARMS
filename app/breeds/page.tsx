import { CTAButton, SectionHeading } from '@/components/site-shell';
import { breeds } from '@/lib/content';

export default function BreedsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Our breeds" title="Premium genetics tailored to practical farm goals." description="We offer carefully selected breeding stock suited to different investment levels, farm sizes, and performance expectations." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {breeds.map((breed) => (
          <article key={breed.name} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <img src={breed.image} alt={breed.name} loading="lazy" className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
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
    </div>
  );
}
