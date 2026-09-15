import Image from 'next/image';
import { SectionHeading } from '@/components/site-shell';
import { galleryItems } from '@/lib/content';
import { MediaSlideshow } from '@/components/media-slideshow';

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Farm gallery & footage"
        title="Recent farm visit photos and video footage from our operations."
        description="We recently visited the farm owner and captured fresh visual documentation to help buyers assess the animals, environment, and farm setup more clearly before purchase."
      />
      <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
        The video clips and supporting pictures give a more realistic view of the farm, handling standards, and stock condition. Ask us for the latest footage if you want a closer look before making your decision.
      </p>

      <section className="mt-10">
        <MediaSlideshow items={galleryItems} />
      </section>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {galleryItems.map((item) => (
          <div key={item.title} className="relative mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:scale-[1.01] dark:border-slate-800 dark:bg-slate-900/70">
            {item.type === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                className="h-64 w-full bg-slate-200 object-cover"
              />
            ) : (
              <Image src={item.src} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="h-64 w-full object-cover" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
