import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { fusionImages, stockStills, stockVideos } from "@/lib/site";

const libraryEntries = [
  {
    title: "Proof framing",
    body: "How to present transformation so the buyer feels the commercial difference instead of reading empty adjectives."
  },
  {
    title: "Hero pacing",
    body: "How to slow the first screen down just enough that it feels expensive instead of frantic."
  },
  {
    title: "Voice layer",
    body: "How operator-style narration can guide a flagship read without turning the page into a gimmick."
  },
  {
    title: "Follow-through",
    body: "How the page can continue the sale after the first scroll by routing the right lead into the right lane."
  }
];

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
        mediaSrc={stockVideos.tunnel}
        poster={stockStills.tunnel}
        side={
          <>
            <p className="eyebrow">What this holds</p>
            <h2>The principles behind the build, written so they can be reused without flattening the craft.</h2>
          </>
        }
        summary="The library page acts like a living internal playbook translated into a public-facing premium knowledge surface."
        title={<h1 className="hero-title page-title-tight">Keep the doctrine. Refresh the execution.</h1>}
      />

      <section className="showcase-section" data-focus="premium" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Playbook fragments</p>
          <h2>Principles that can be repeated without repeating the exact same page.</h2>
        </div>
        <div className="architecture-grid">
          {libraryEntries.map((entry) => (
            <article className="architecture-card" data-reveal key={entry.title}>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </article>
          ))}
        </div>
        <div className="showcase-grid">
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Founder portrait visual" src={fusionImages.signalPortrait} />
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
