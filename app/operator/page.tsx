import Link from "next/link";

import { KineticHeading } from "@/components/kinetic-heading";
import { OfferArchitect } from "@/components/offer-architect";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { offerScenarios, operatorMetrics, stockStills, stockVideos } from "@/lib/site";

export default function OperatorPage() {
  return (
    <SiteShell ctaHref="/contact" ctaLabel="Enter operator review">
      <PageHero
        actions={
          <>
            <Link className="primary-button" href="/contact">
              Enter operator review
            </Link>
            <Link className="ghost-button" href="/method">
              Review the method
            </Link>
          </>
        }
        eyebrow="Operator"
        mediaSrc={stockVideos.commandGrid}
        metrics={operatorMetrics}
        poster={stockStills.commandGrid}
        rail={
          <div className="hero-rail-grid compact">
            <article className="hero-rail-card">
              <span>Offers</span>
              <strong>Packaged around the size of the commercial move</strong>
            </article>
            <article className="hero-rail-card">
              <span>Result</span>
              <strong>Recommendation logic that feels specific, not generic</strong>
            </article>
          </div>
        }
        side={
          <>
            <p className="eyebrow">Operator principle</p>
            <h2>The page only matters if it improves how the business is understood and what happens after the first hit.</h2>
          </>
        }
        summary="The operator lane is where the front-end work gets tied to appointments, qualification, retention, and real commercial movement."
        title={
          <h1 className="hero-title page-title-tight">
            <KineticHeading accent="margin" lines={["Build the surface.", "Protect the margin."]} />
          </h1>
        }
        variant="centered"
      />

      <section className="engagement-section" data-focus="recurring" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Engagement lanes</p>
          <h2>The work is packaged around the size of the move, not generic digital menu items.</h2>
        </div>
        <OfferArchitect offers={offerScenarios} />
      </section>

      <section className="proof-lattice-section" data-focus="premium" data-scene="scene-3">
        <div className="proof-lattice-grid">
          {offerScenarios.map((offer) => (
            <article className="proof-lattice-card" data-reveal key={offer.id}>
              <span>{offer.timeline}</span>
              <strong>{offer.name}</strong>
              <p>{offer.fit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="media-mosaic-section compact" data-focus="premium" data-scene="scene-4">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Operator atmosphere</p>
          <h2>Offer logic lands harder when the page still feels active, precise, and expensive after the pitch.</h2>
        </div>
        <div className="media-mosaic">
          <article className="media-mosaic-tile video-tile large" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.boardroomNocturne}>
              <source src={stockVideos.boardroomNocturne} type="video/mp4" />
            </video>
            <div className="tile-caption">
              <span>Operator rhythm</span>
              <strong>Package the move with motion that still feels composed.</strong>
            </div>
          </article>
          <article className="media-mosaic-tile video-tile" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.commandFloorLoop}>
              <source src={stockVideos.commandFloorLoop} type="video/mp4" />
            </video>
          </article>
          <article className="media-mosaic-tile note-tile" data-reveal>
            <p className="eyebrow">Operator note</p>
            <h3>Even the pricing and fit lane should feel like part of the flagship, not a quieter leftover screen.</h3>
            <p>The emotional texture should stay premium all the way through the selection logic.</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
