import Link from "next/link";

import { KineticHeading } from "@/components/kinetic-heading";
import { PageHero } from "@/components/page-hero";
import { PlaybookExplorer } from "@/components/playbook-explorer";
import { SiteShell } from "@/components/site-shell";
import { fusionImages, libraryMetrics, playbookEntries, stockStills, stockVideos } from "@/lib/site";

export default function LibraryPage() {
  return (
    <SiteShell ctaHref="/contact" ctaLabel="Apply the playbook">
      <PageHero
        actions={
          <>
            <Link className="primary-button" href="/contact">
              Apply the playbook
            </Link>
            <Link className="ghost-button" href="/surfaces">
              See the surfaces
            </Link>
          </>
        }
        eyebrow="Library"
        mediaSrc={stockVideos.portraitSweep}
        metrics={libraryMetrics}
        poster={stockStills.portraitSweep}
        side={
          <>
            <p className="eyebrow">What this holds</p>
            <h2>The principles behind the build, written so they can be reused without flattening the craft.</h2>
          </>
        }
        summary="The library page acts like a living internal playbook translated into a public-facing premium knowledge surface."
        title={
          <h1 className="hero-title page-title-tight">
            <KineticHeading accent="execution" lines={["Keep the doctrine.", "Refresh the execution."]} />
          </h1>
        }
        variant="editorial"
      />

      <section className="showcase-section" data-focus="premium" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Playbook fragments</p>
          <h2>Principles that can be repeated without repeating the exact same page.</h2>
        </div>
        <PlaybookExplorer entries={playbookEntries} />
      </section>

      <section className="media-mosaic-section compact" data-focus="premium" data-scene="scene-3">
        <div className="media-mosaic">
          <article className="media-mosaic-tile video-tile large" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.authorityOrbit}>
              <source src={stockVideos.authorityOrbit} type="video/mp4" />
            </video>
            <div className="tile-caption">
              <span>Doctrine in motion</span>
              <strong>Reusable principles still need a live visual pulse.</strong>
            </div>
          </article>
          <article className="media-mosaic-tile image-tile" data-reveal>
            <img alt="Founder portrait visual" src={fusionImages.signalPortrait} />
          </article>
          <article className="media-mosaic-tile note-tile" data-reveal>
            <p className="eyebrow">Doctrine note</p>
            <h3>Reusable does not mean repetitive. It means the structure survives while the expression stays fresh.</h3>
            <p>
              That is how the workflow becomes a real premium system instead of a single pretty one-off.
            </p>
          </article>
          <article className="media-mosaic-tile video-tile" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.portraitSweep}>
              <source src={stockVideos.portraitSweep} type="video/mp4" />
            </video>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
