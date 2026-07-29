import { SectionHeading } from '@/components/site-shell';
import { galleryItems } from '@/lib/content';

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Farm gallery" title="A premium view into our operations." description="Our farms are structured for comfort, compliance, and quality from day one." />
      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {galleryItems.map((item) => (
          <div key={item.title} className="mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:scale-[1.01] dark:border-slate-800 dark:bg-slate-900/70">
            <img src={item.image} alt={item.title} loading="lazy" className="h-64 w-full object-cover" />
            <div className="p-4">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
