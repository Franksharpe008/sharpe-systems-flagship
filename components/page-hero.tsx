import type { ReactNode } from "react";

import { HeroVideo } from "./hero-video";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  summary: string;
  mediaSrc: string;
  poster: string;
  actions?: ReactNode;
  side?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  summary,
  mediaSrc,
  poster,
  actions,
  side
}: PageHeroProps) {
  return (
    <section className="page-hero-shell hero-shell" data-focus="premium" data-scene="scene-1">
      <div className="hero-video-shell" aria-hidden="true">
        <HeroVideo poster={poster} src={mediaSrc} />
        <div className="hero-veil" />
        <div className="hero-gridwash" />
      </div>

      <div className="hero-content page-hero-copy" data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <div className="page-hero-title">{title}</div>
        <p className="hero-summary page-hero-summary">{summary}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>

      {side ? (
        <aside className="hero-sidecard page-hero-sidecard" data-reveal>
          {side}
        </aside>
      ) : null}

      <div className="scroll-cue" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
