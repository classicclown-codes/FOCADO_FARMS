import { SectionHeading } from '@/components/site-shell';
import { faqs } from '@/lib/content';

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Everything you need to know before you buy." description="We make the buying process feel clear, reliable, and straightforward from the first step." />
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <summary className="cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</summary>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
