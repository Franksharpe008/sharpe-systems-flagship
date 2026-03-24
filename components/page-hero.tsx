import type { ReactNode } from "react";

import type { HeroMetric } from "@/lib/site";

import { HeroVideo } from "./hero-video";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  summary: string;
  mediaSrc: string;
  poster: string;
  actions?: ReactNode;
  side?: ReactNode;
  metrics?: HeroMetric[];
  rail?: ReactNode;
  spotlight?: ReactNode;
  variant?: "default" | "centered" | "proof" | "signal" | "editorial";
};

export function PageHero({
  eyebrow,
  title,
  summary,
  mediaSrc,
  poster,
  actions,
  side,
  metrics,
  rail,
  spotlight,
  variant = "default"
}: PageHeroProps) {
  return (
    <section
      className={`page-hero-shell hero-shell hero-variant-${variant}`}
      data-focus="premium"
      data-scene="scene-1"
    >
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
        {metrics?.length ? (
          <div className="hero-metrics">
            {metrics.map((metric) => (
              <article key={`${metric.label}-${metric.value}`}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>
        ) : null}
        {rail ? <div className="hero-rail">{rail}</div> : null}
      </div>

      {side ? (
        <aside className="hero-sidecard page-hero-sidecard" data-reveal>
          {side}
        </aside>
      ) : null}

      {spotlight ? (
        <div className="hero-spotlight" data-reveal>
          {spotlight}
        </div>
      ) : null}

      <div className="scroll-cue" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
