import Link from "next/link";

import { CaseCommand } from "@/components/case-command";
import { KineticHeading } from "@/components/kinetic-heading";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { caseStudies, fusionImages, stockStills, stockVideos, workMetrics } from "@/lib/site";

export default function WorkPage() {
  return (
    <SiteShell ctaHref="/contact" ctaLabel="Request a live pass">
      <PageHero
        actions={
          <>
            <Link className="primary-button" href="/contact">
              Request a live pass
            </Link>
            <Link className="ghost-button" href="/operator">
              Read the operator lane
            </Link>
          </>
        }
        eyebrow="Work"
        mediaSrc={stockVideos.proofCascade}
        metrics={workMetrics}
        poster={stockStills.proofCascade}
        side={
          <>
            <p className="eyebrow">Proof principle</p>
            <h2>Use shipped surfaces and clear transformations, not invented praise.</h2>
            <p>Each proof block should make the upgrade visible and commercially legible.</p>
          </>
        }
        summary="The work is framed as movement: what changed in trust, what changed in perception, and what changed in the strength of the front end."
        title={
          <h1 className="hero-title page-title-tight">
            <KineticHeading accent="evidence" lines={["Proof should read", "like evidence."]} />
          </h1>
        }
        variant="proof"
      />

      <section className="proof-section" data-focus="premium" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Selected surfaces</p>
          <h2>Move through the proof like a live command deck, not a flat list of screenshots.</h2>
        </div>
        <CaseCommand cases={caseStudies} />
      </section>

      <section className="proof-lattice-section" data-focus="premium" data-scene="scene-3">
        <div className="proof-lattice-grid">
          <article className="proof-lattice-card" data-reveal>
            <span>Trust</span>
            <strong>Make the business feel more organized before the buyer has to guess.</strong>
            <p>Most weaker sites leak confidence because the story and proof are in the wrong order.</p>
          </article>
          <article className="proof-lattice-card" data-reveal>
            <span>Status</span>
            <strong>Raise perceived value without turning the page into theater.</strong>
            <p>Better rhythm, stronger surfaces, and cleaner proof framing do more than louder claims.</p>
          </article>
          <article className="proof-lattice-card" data-reveal>
            <span>Action</span>
            <strong>Guide the right lead into the right lane after conviction is already built.</strong>
            <p>That is where the page starts behaving like a business system instead of a portfolio.</p>
          </article>
        </div>
      </section>

      <section className="split-story-section" data-focus="premium" data-scene="scene-4">
        <div className="split-story-copy" data-reveal>
          <p className="eyebrow">Editorial proof</p>
          <h2>The proof pages should feel calm, expensive, and undeniable instead of noisy or over-explained.</h2>
          <p>
            The right case-study page does not beg for trust. It frames the shift cleanly, uses
            motion with restraint, and makes the outcome feel self-evident before the buyer has to
            decode a pitch.
          </p>
        </div>
        <div className="split-story-visual" data-reveal>
          <video autoPlay loop muted playsInline poster={stockStills.boardroomNocturne}>
            <source src={stockVideos.boardroomNocturne} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="media-mosaic-section compact" data-focus="premium" data-scene="scene-5">
        <div className="media-mosaic two-up">
          <article className="media-mosaic-tile video-tile" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.tunnel}>
              <source src={stockVideos.tunnel} type="video/mp4" />
            </video>
          </article>
          <article className="media-mosaic-tile image-tile" data-reveal>
            <img alt="Sharpe Systems proof portrait" src={fusionImages.signalPortrait} />
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
