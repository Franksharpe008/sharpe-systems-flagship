import Link from "next/link";

import { KineticHeading } from "@/components/kinetic-heading";
import { MethodMap } from "@/components/method-map";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { methodMetrics, methodSteps, stockStills, stockVideos } from "@/lib/site";

export default function MethodPage() {
  return (
    <SiteShell ctaHref="/contact" ctaLabel="Book the build lane">
      <PageHero
        actions={
          <>
            <Link className="primary-button" href="/contact">
              Book the build lane
            </Link>
            <Link className="ghost-button" href="/work">
              See the work
            </Link>
          </>
        }
        eyebrow="Method"
        mediaSrc={stockVideos.commandGrid}
        metrics={methodMetrics}
        poster={stockStills.commandGrid}
        rail={
          <div className="hero-rail-grid compact">
            <article className="hero-rail-card">
              <span>Stage 01</span>
              <strong>Read what the market is telling the buyer.</strong>
            </article>
            <article className="hero-rail-card">
              <span>Stage 04</span>
              <strong>Wire the page so the next move already makes sense.</strong>
            </article>
          </div>
        }
        side={
          <>
            <p className="eyebrow">How the build moves</p>
            <h2>Every serious flagship starts with the read, not the layout.</h2>
            <p>
              The method turns category pressure into story, media, interaction, and an action path
              that behaves like an operating lane.
            </p>
          </>
        }
        summary="The Sharpe Systems method is designed to make premium sites feel deliberate from the first second instead of patched together from isolated assets."
        title={
          <h1 className="hero-title page-title-tight">
            <KineticHeading accent="shift" lines={["Start with the read.", "Build the shift."]} />
          </h1>
        }
        variant="proof"
      />

      <section className="timeline-section" data-focus="appointments" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Four-stage motion</p>
          <h2>The system keeps the page clean while the thinking, media, and qualification stay deep.</h2>
        </div>
        <MethodMap steps={methodSteps} />
      </section>

      <section className="split-story-section" data-focus="premium" data-scene="scene-3">
        <div className="split-story-copy" data-reveal>
          <p className="eyebrow">Why it works</p>
          <h2>The buyer feels the shift before they can explain it in words.</h2>
          <p>
            Better rhythm, better imagery, stronger proof staging, and a cleaner action path create
            more calm, more trust, and more willingness to keep going.
          </p>
        </div>
        <div className="split-story-visual" data-reveal>
          <video autoPlay loop muted playsInline poster={stockStills.boardroomNocturne}>
            <source src={stockVideos.boardroomNocturne} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="media-mosaic-section compact" data-focus="premium" data-scene="scene-4">
        <div className="media-mosaic two-up">
          <article className="media-mosaic-tile video-tile" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.signalPulse}>
              <source src={stockVideos.signalPulse} type="video/mp4" />
            </video>
          </article>
          <article className="media-mosaic-tile note-tile" data-reveal>
            <p className="eyebrow">Method note</p>
            <h3>Premium builds feel clear because the method controls sequence, not because the page has more stuff.</h3>
            <p>
              Research decides the story, story decides the media, media decides the pacing, and
              the pacing shapes whether the right buyer keeps going.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
