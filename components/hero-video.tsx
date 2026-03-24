"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  poster: string;
  src: string;
};

export function HeroVideo({ poster, src }: HeroVideoProps) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.defaultMuted = true;
    video.muted = true;

    const attemptPlay = async () => {
      try {
        await video.play();
      } catch {
        // Browser policy can still block playback until the tab is active.
      }
    };

    void attemptPlay();

    const handleVisibility = () => {
      if (!document.hidden) {
        void attemptPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [src]);

  if (failed) {
    return (
      <div
        aria-label="Hero poster fallback"
        className="hero-media-fallback"
        style={{ backgroundImage: `url(${poster})` }}
      />
    );
  }

  return (
    <video
      autoPlay
      className="hero-video"
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
      ref={videoRef}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
