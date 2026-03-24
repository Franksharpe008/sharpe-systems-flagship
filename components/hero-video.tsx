"use client";

import { useState } from "react";

type HeroVideoProps = {
  poster: string;
  src: string;
};

export function HeroVideo({ poster, src }: HeroVideoProps) {
  const [failed, setFailed] = useState(false);

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
      poster={poster}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
