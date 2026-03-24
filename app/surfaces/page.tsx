import Link from "next/link";

import { KineticHeading } from "@/components/kinetic-heading";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { SurfaceGallery } from "@/components/surface-gallery";
import { fusionImages, stockStills, stockVideos, surfaceScenes } from "@/lib/site";

const surfaceNotes = [
  "Custom visual art for premium story moments",
  "Free stock motion used as pace-setting material",
  "Stills and loops arranged around hierarchy, not decoration",
  "Strong negative space so premium reads premium"
];

export default function SurfacesPage() {
  return (
    <SiteShell ctaHref="/contact" ctaLabel="Build a custom surface">
      <PageHero
        actions={
          <>
            <Link className="primary-button" href="/contact">
              Build a custom surface
            </Link>
            <Link className="ghost-button" href="/library">
              Open the library
            </Link>
          </>
        }
        eyebrow="Surfaces"
        mediaSrc={stockVideos.signalPulse}
        poster={stockStills.signalPulse}
        rail={
          <div className="hero-rail-grid compact">
            <article className="hero-rail-card">
              <span>Stills</span>
              <strong>Placed to carry hierarchy, not fill space</strong>
            </article>
            <article className="hero-rail-card">
              <span>Loops</span>
              <strong>Used where motion raises authority and pacing</strong>
            </article>
          </div>
        }
        side={
          <>
            <p className="eyebrow">Media rule</p>
            <h2>The visual layer has to raise authority, not just fill the frame.</h2>
            <ul className="hero-side-list">
              {surfaceNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </>
        }
        summary="This page is the media layer: custom stills, stock loops, and detail shots arranged the way a flagship site should actually use them."
        title={
          <h1 className="hero-title page-title-tight">
            <KineticHeading accent="commissioned" lines={["Make the visuals", "feel commissioned."]} />
          </h1>
        }
        variant="editorial"
      />

      <section className="showcase-section" data-focus="premium" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Media selector</p>
          <h2>Choose the scene language and watch the surface shift with it.</h2>
        </div>
        <SurfaceGallery scenes={surfaceScenes} />
      </section>

      <section className="split-story-section" data-focus="premium" data-scene="scene-3">
        <div className="split-story-copy" data-reveal>
          <p className="eyebrow">Scene direction</p>
          <h2>The media route should feel curated, not overloaded.</h2>
          <p>
            Better surfaces come from choosing the right motion moments, then letting stills and
            structure support them instead of fighting for attention.
          </p>
        </div>
        <div className="split-story-visual" data-reveal>
          <video autoPlay loop muted playsInline poster={stockStills.boardroomNocturne}>
            <source src={stockVideos.boardroomNocturne} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="showcase-section" data-focus="premium" data-scene="scene-4">
        <div className="showcase-grid wide">
          <article className="showcase-panel video-panel" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.commandFloorLoop}>
              <source src={stockVideos.commandFloorLoop} type="video/mp4" />
            </video>
          </article>
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Luxury command-floor visual" src={fusionImages.commandFloor} />
          </article>
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Abstract authority lattice visual" src={fusionImages.authorityBridge} />
          </article>
          <article className="showcase-panel video-panel" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.portraitSweep}>
              <source src={stockVideos.portraitSweep} type="video/mp4" />
            </video>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
