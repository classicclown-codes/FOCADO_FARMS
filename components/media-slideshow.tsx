'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ImageOff, Pause, Play } from 'lucide-react';
import type { GalleryItem } from '@/lib/content';

type MediaSlideshowProps = {
  items: GalleryItem[];
  autoPlay?: boolean;
};

export function MediaSlideshow({ items, autoPlay = true }: MediaSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(!autoPlay);
  const touchStartX = useRef<number | null>(null);
  const activeItem = items[activeIndex];

  useEffect(() => {
    if (items.length < 2 || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(0);
  }, [activeIndex, items.length]);

  if (!activeItem) {
    return (
      <div className="flex min-h-[360px] items-center justify-center rounded-[28px] bg-slate-100 p-8 text-center dark:bg-slate-900">
        <div>
          <ImageOff className="mx-auto text-slate-400" size={32} />
          <p className="mt-4 font-semibold text-slate-700 dark:text-slate-200">Media coming soon</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Add photos or videos to public/images or public/videos.</p>
        </div>
      </div>
    );
  }

  const goTo = (index: number) => setActiveIndex((index + items.length) % items.length);

  return (
    <div
      className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(!autoPlay)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(!autoPlay)}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(distance) > 45) goTo(activeIndex + (distance < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
      role="region"
      aria-label="Farm media slideshow"
    >
      <div className="aspect-[4/3] min-h-[320px] sm:aspect-[16/9] sm:min-h-[420px]">
        {activeItem.type === 'video' ? (
          <video key={activeItem.src} src={activeItem.src} poster={activeItem.poster} autoPlay muted loop playsInline className="h-full w-full object-cover" />
        ) : (
          <Image src={activeItem.src} alt={activeItem.title} fill sizes="(max-width: 640px) 100vw, 90vw" className="h-full w-full object-cover" />
        )}
      </div>

      {items.length > 1 ? (
        <>
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous media" className="absolute left-3 top-1/2 rounded-full border border-white/30 bg-slate-950/50 p-2.5 backdrop-blur transition hover:bg-slate-950/80 sm:left-5">
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next media" className="absolute right-3 top-1/2 rounded-full border border-white/30 bg-slate-950/50 p-2.5 backdrop-blur transition hover:bg-slate-950/80 sm:right-5">
            <ChevronRight size={20} />
          </button>
          <div className="absolute right-4 top-4 flex items-center gap-2 sm:right-5 sm:top-5">
            <button type="button" onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'} className="rounded-full border border-white/30 bg-slate-950/50 p-2 backdrop-blur transition hover:bg-slate-950/80">
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <span className="rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 text-xs font-medium backdrop-blur">{activeIndex + 1} / {items.length}</span>
          </div>
        </>
      ) : null}
    </div>
  );
}