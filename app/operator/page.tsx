import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { stockStills, stockVideos } from "@/lib/site";

const offers = [
  {
    name: "Signal Audit",
    summary: "A clear read on what is muting trust, margin, or buyer movement right now.",
    outcome: "Priority map plus the highest-leverage first move"
  },
  {
    name: "Authority Rebuild",
    summary: "A sharper front-end experience for businesses that look weaker than they really are.",
    outcome: "Stronger first contact and cleaner buyer progression"
  },
  {
    name: "Flagship System",
    summary: "A full digital environment with media, proof, qualification, and follow-through built as one surface.",
    outcome: "A premium front end that behaves like an operating lane"
  }
];

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
        mediaSrc={stockVideos.laptop}
        poster={stockStills.laptop}
        side={
          <>
            <p className="eyebrow">Operator principle</p>
            <h2>The page only matters if it improves how the business is understood and what happens after the first hit.</h2>
          </>
        }
        summary="The operator lane is where the front-end work gets tied to appointments, qualification, retention, and real commercial movement."
        title={<h1 className="hero-title page-title-tight">Build the surface. Protect the margin.</h1>}
      />

      <section className="engagement-section" data-focus="recurring" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Engagement lanes</p>
          <h2>The work is packaged around the size of the move, not generic digital menu items.</h2>
        </div>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className="offer-card" data-reveal key={offer.name}>
              <p className="offer-name">{offer.name}</p>
              <p>{offer.summary}</p>
              <div className="offer-outcome">
                <span>Outcome</span>
                <strong>{offer.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
