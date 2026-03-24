import Link from "next/link";

import { AnimatedWord } from "@/components/animated-word";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { fusionImages, stockStills, stockVideos } from "@/lib/site";

const steps = [
  {
    title: "Read the market",
    body: "Audit the category, the buyer hesitation, the visual language, and the places where the current surface bleeds trust."
  },
  {
    title: "Frame the story",
    body: "Decide what the first screen should make a qualified buyer feel, understand, and do next."
  },
  {
    title: "Build the media system",
    body: "Create custom imagery, video moments, and voice layers that make the brand feel authored instead of templated."
  },
  {
    title: "Install the path",
    body: "Connect the page to diagnosis, qualification, and follow-through so the experience behaves like a real system."
  }
];

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
        mediaSrc={stockVideos.laptop}
        poster={stockStills.laptop}
        side={
          <>
            <p className="eyebrow">How the build moves</p>
            <h2>Every serious project starts with a category read, not a color palette.</h2>
            <p>
              The method turns research into a surface, then turns the surface into a stronger next
              step for the buyer.
            </p>
          </>
        }
        summary="The Sharpe Systems method is designed to make premium sites feel deliberate from the first second instead of patched together from isolated assets."
        title={
          <h1 className="hero-title page-title-tight">
            Start with the read.
            <br />
            Build the <AnimatedWord word="shift" />.
          </h1>
        }
      />

      <section className="timeline-section" data-focus="appointments" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Four-stage motion</p>
          <h2>The method is meant to keep the page clean while the strategy stays deep.</h2>
        </div>
        <div className="timeline-grid">
          {steps.map((step, index) => (
            <article className="timeline-card" data-reveal key={step.title}>
              <span className="timeline-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-story-section" data-focus="premium" data-scene="scene-3">
        <div className="split-story-copy" data-reveal>
          <p className="eyebrow">Why it works</p>
          <h2>The buyer feels the difference before they can explain it in words.</h2>
          <p>
            Better rhythm, better imagery, better proof order, better restraint. Those signals
            create more calm, more trust, and more willingness to keep going.
          </p>
        </div>
        <div className="split-story-visual" data-reveal>
          <img alt="Sharpe Systems boardroom visual" src={fusionImages.boardroomNight} />
        </div>
      </section>
    </SiteShell>
  );
}
