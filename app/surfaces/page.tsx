import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { fusionImages, stockStills, stockVideos } from "@/lib/site";

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
        mediaSrc={stockVideos.boardroom}
        poster={stockStills.boardroom}
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
        title={<h1 className="hero-title page-title-tight">Make the visuals feel commissioned.</h1>}
      />

      <section className="showcase-section" data-focus="premium" data-scene="scene-2">
        <div className="showcase-grid wide">
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Luxury command-floor visual" src={fusionImages.commandFloor} />
          </article>
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Abstract authority lattice visual" src={fusionImages.authorityBridge} />
          </article>
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Premium boardroom-at-night visual" src={fusionImages.boardroomNight} />
          </article>
          <article className="showcase-panel video-panel" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.tunnel}>
              <source src={stockVideos.tunnel} type="video/mp4" />
            </video>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
