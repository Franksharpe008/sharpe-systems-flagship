import { KineticHeading } from "@/components/kinetic-heading";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Diagnostic } from "@/components/diagnostic";
import { contactMetrics, stockStills, stockVideos } from "@/lib/site";

export default function ContactPage() {
  return (
    <SiteShell ctaHref="/contact" ctaLabel="Submit the diagnostic">
      <PageHero
        eyebrow="Contact"
        mediaSrc={stockVideos.signalPulse}
        metrics={contactMetrics}
        poster={stockStills.signalPulse}
        rail={
          <div className="hero-rail-grid compact">
            <article className="hero-rail-card">
              <span>Step 01</span>
              <strong>Name what is weakening the read right now</strong>
            </article>
            <article className="hero-rail-card">
              <span>Step 02</span>
              <strong>Leave with the right build lane and follow-up summary</strong>
            </article>
          </div>
        }
        side={
          <>
            <p className="eyebrow">Entry point</p>
            <h2>Tell Sharpe Systems where the business is leaking trust, energy, or momentum right now.</h2>
          </>
        }
        summary="The diagnostic is the shortest clean path into a sharper front-end build. It identifies the pressure point, recommends the lane, and frames the next move."
        title={
          <h1 className="hero-title page-title-tight">
            <KineticHeading accent="queue" lines={["Enter the", "build queue."]} />
          </h1>
        }
        variant="centered"
      />

      <section className="diagnostic-section" data-focus="recurring" data-scene="scene-2" id="diagnostic">
        <Diagnostic />
      </section>

      <section className="split-story-section" data-focus="premium" data-scene="scene-3">
        <div className="split-story-copy" data-reveal>
          <p className="eyebrow">Entry pressure</p>
          <h2>The contact route should still feel composed and premium while the buyer makes the decision.</h2>
          <p>
            The close should not feel administrative. It should feel like the final clean scene in
            the flagship before the lead enters the build lane.
          </p>
        </div>
        <div className="split-story-visual" data-reveal>
          <video autoPlay loop muted playsInline poster={stockStills.boardroomNocturne}>
            <source src={stockVideos.boardroomNocturne} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="media-mosaic-section compact" data-focus="premium" data-scene="scene-4">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Queue atmosphere</p>
          <h2>The contact lane should still feel premium, alive, and directed while the lead decides to step in.</h2>
        </div>
        <div className="media-mosaic">
          <article className="media-mosaic-tile video-tile large" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.authorityOrbit}>
              <source src={stockVideos.authorityOrbit} type="video/mp4" />
            </video>
            <div className="tile-caption">
              <span>Decision mood</span>
              <strong>Keep the sense of command alive at the point of action.</strong>
            </div>
          </article>
          <article className="media-mosaic-tile video-tile" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.boardroomNocturne}>
              <source src={stockVideos.boardroomNocturne} type="video/mp4" />
            </video>
          </article>
          <article className="media-mosaic-tile note-tile" data-reveal>
            <p className="eyebrow">Contact principle</p>
            <h3>Do not let the energy collapse when the page finally asks for a decision.</h3>
            <p>The entry lane should feel like a continuation of the flagship, not an administrative form screen.</p>
          </article>
        </div>
      </section>

      <section className="proof-lattice-section" data-focus="premium" data-scene="scene-5">
        <div className="proof-lattice-grid">
          <article className="proof-lattice-card" data-reveal>
            <span>Audit</span>
            <strong>See what the buyer is feeling before they talk to you.</strong>
            <p>That is usually where the first leak lives.</p>
          </article>
          <article className="proof-lattice-card" data-reveal>
            <span>Route</span>
            <strong>Match the pressure point to the right build lane instead of overscoping too early.</strong>
            <p>That keeps the work sharper and the momentum cleaner.</p>
          </article>
          <article className="proof-lattice-card" data-reveal>
            <span>Move</span>
            <strong>Leave with a usable summary that can turn into the next conversation fast.</strong>
            <p>That is what makes the contact page feel like an operator lane.</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
