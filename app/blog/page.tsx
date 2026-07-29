import { SectionHeading } from '@/components/site-shell';
import { blogPosts } from '@/lib/content';

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Education center" title="Insights for farmers who want smarter decisions." description="From first-time guidance to profit strategy, our articles are built to be useful and practical." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => {
          const Icon = post.icon;
          return (
            <article key={post.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700/10 text-brand-700 dark:text-brand-100">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
