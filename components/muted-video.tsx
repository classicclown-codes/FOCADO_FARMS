'use client';

import { useEffect, useRef, useState } from 'react';

type MutedVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel: string;
  autoPlay?: boolean;
};

export function MutedVideo({ src, poster, className, ariaLabel, autoPlay = true }: MutedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => undefined);
  };

  useEffect(() => {
    if (autoPlay) startPlayback();
  }, [autoPlay, src]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      autoPlay={autoPlay}
      loop
      playsInline
      preload="auto"
      onLoadedData={() => setReady(true)}
      onCanPlay={startPlayback}
      onClick={startPlayback}
      aria-label={ariaLabel}
      className={`${className ?? ''} transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-80'}`}
    />
  );
}
