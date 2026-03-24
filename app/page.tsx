import Link from "next/link";

import { AnimatedWord } from "@/components/animated-word";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { fusionImages, stockStills, stockVideos } from "@/lib/site";

const advantageCards = [
  {
    kicker: "Read the category",
    title: "Research before decoration",
    body: "Find the trust leaks, the weak promises, and the parts of the category that all sound the same."
  },
  {
    kicker: "Shape the surface",
    title: "Design that feels authored",
    body: "Use motion, images, pacing, and voice so the business reads like an operation with weight."
  },
  {
    kicker: "Move the lead",
    title: "Follow-through with precision",
    body: "Tie the site to qualification, summaries, and a next step that behaves like software."
  }
];

const signatureMoves = [
  {
    title: "Operator-grade positioning",
    body: "The copy is written to feel decisive, not ornamental, so the buyer feels the value before the service list starts."
  },
  {
    title: "Media with a job to do",
    body: "Every still, loop, portrait, and motion layer is there to increase authority, rhythm, and commercial tension."
  },
  {
    title: "Live proof architecture",
    body: "Proof is framed as transformation and execution, not as a stack of generic compliments."
  },
  {
    title: "Qualification after conviction",
    body: "The page wins attention first, then channels the right lead into the right next move."
  }
];

export default function HomePage() {
  return (
    <SiteShell>
      <PageHero
        actions={
          <>
            <Link className="primary-button" href="/contact">
              Enter the build queue
            </Link>
            <Link className="ghost-button" href="/work">
              See live surfaces
            </Link>
          </>
        }
        eyebrow="Sharpe Systems flagship"
        mediaSrc={stockVideos.boardroom}
        poster={stockStills.boardroom}
        side={
          <>
            <p className="eyebrow">What changes here</p>
            <h2>The digital front starts closing the gap between what the business is and how it feels.</h2>
            <p>
              Better story, better proof, better pacing, better movement. The buyer should feel all
              of that before the first call.
            </p>
            <ul className="hero-side-list">
              <li>Research-led narrative</li>
              <li>Premium visual surfaces</li>
              <li>Sharper lead progression</li>
            </ul>
          </>
        }
        summary="Sharpe Systems rebuilds business fronts into stronger digital environments with richer motion, better proof, sharper media, and a cleaner path from attention to action."
        title={
          <h1 className="hero-title">
            Build a flagship that feels
            <br />
            <AnimatedWord word="earned" />
          </h1>
        }
      />

      <section className="marquee-band" data-focus="premium" data-scene="scene-1">
        <div className="marquee-track">
          <div className="marquee-group">
            <span className="marquee-word">Research</span>
            <span className="marquee-word">Direction</span>
            <span className="marquee-word">Motion</span>
            <span className="marquee-word">Voice</span>
            <span className="marquee-word">Proof</span>
            <span className="marquee-word">Qualification</span>
            <span className="marquee-word">Follow-through</span>
          </div>
          <div className="marquee-group">
            <span className="marquee-word">Research</span>
            <span className="marquee-word">Direction</span>
            <span className="marquee-word">Motion</span>
            <span className="marquee-word">Voice</span>
            <span className="marquee-word">Proof</span>
            <span className="marquee-word">Qualification</span>
            <span className="marquee-word">Follow-through</span>
          </div>
        </div>
      </section>

      <section className="command-section" data-focus="appointments" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Front-end advantage</p>
          <h2>A better site is not just prettier. It makes the business easier to trust, easier to remember, and easier to choose.</h2>
        </div>
        <div className="command-grid">
          {advantageCards.map((card) => (
            <article className="command-card" data-reveal key={card.title}>
              <p className="command-kicker">{card.kicker}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-section" data-focus="premium" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Fresh visual direction</p>
          <h2>Custom imagery and real motion give the front end its own point of view.</h2>
        </div>
        <div className="showcase-grid">
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Sharpe Systems command floor visual" src={fusionImages.commandFloor} />
          </article>
          <article className="showcase-panel image-panel tall" data-reveal>
            <img alt="Sharpe Systems portrait visual" src={fusionImages.signalPortrait} />
          </article>
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Sharpe Systems authority bridge visual" src={fusionImages.authorityBridge} />
          </article>
        </div>
      </section>

      <section className="architecture-section" data-focus="recurring" data-scene="scene-3">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Signature moves</p>
          <h2>Everything on the page should support value perception, not dilute it.</h2>
        </div>
        <div className="architecture-grid">
          {signatureMoves.map((item) => (
            <article className="architecture-card" data-reveal key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-strip" data-focus="premium" data-scene="scene-4">
        <div className="cta-strip-copy" data-reveal>
          <p className="eyebrow">Tour the system</p>
          <h2>Walk the full method, the work, the media surfaces, and the operator lane.</h2>
        </div>
        <div className="cta-strip-links" data-reveal>
          <Link className="ghost-button" href="/method">
            Method
          </Link>
          <Link className="ghost-button" href="/work">
            Work
          </Link>
          <Link className="ghost-button" href="/surfaces">
            Surfaces
          </Link>
          <Link className="ghost-button" href="/operator">
            Operator
          </Link>
          <Link className="ghost-button" href="/library">
            Library
          </Link>
          <Link className="primary-button" href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
