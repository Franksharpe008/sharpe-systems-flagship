import Link from "next/link";

import { KineticHeading } from "@/components/kinetic-heading";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { fusionImages, homeMetrics, stockStills, stockVideos } from "@/lib/site";

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
        mediaSrc={stockVideos.heroLoop}
        metrics={homeMetrics}
        poster={stockStills.heroLoop}
        rail={
          <div className="hero-rail-grid">
            <article className="hero-rail-card">
              <span>Read</span>
              <strong>Category pressure before design taste</strong>
            </article>
            <article className="hero-rail-card">
              <span>Build</span>
              <strong>Media, proof, and motion in one authored lane</strong>
            </article>
            <article className="hero-rail-card">
              <span>Route</span>
              <strong>Qualified attention into a real next move</strong>
            </article>
          </div>
        }
        side={
          <>
            <p className="eyebrow">What changes here</p>
            <h2>The digital front stops underselling the operation behind it.</h2>
            <p>
              Sharpe Systems rebuilds the first contact so the buyer feels command, proof, rhythm,
              and follow-through before a call is even booked.
            </p>
            <ul className="hero-side-list">
              <li>Research-led positioning</li>
              <li>Multi-layered motion and media</li>
              <li>Qualification that behaves like software</li>
            </ul>
          </>
        }
        spotlight={
          <article className="hero-spotlight-card">
            <p className="eyebrow">Active surface</p>
            <strong>Vibrant multi-page flagship system</strong>
            <p>
              Built to feel denser, more fluid, and more alive on every route instead of saving the
              effort for the hero alone.
            </p>
          </article>
        }
        summary="Sharpe Systems builds premium business fronts with cinematic motion, custom visual direction, stronger proof architecture, and a cleaner path from first attention to qualified action."
        title={
          <h1 className="hero-title">
            <KineticHeading accent="earned" lines={["Build the front end", "that feels earned"]} />
          </h1>
        }
        variant="signal"
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

      <section className="media-mosaic-section" data-focus="premium" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Atmosphere + structure</p>
          <h2>The page should feel like a live environment, not a single good hero with weaker rooms behind it.</h2>
        </div>
        <div className="media-mosaic">
          <article className="media-mosaic-tile video-tile large" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.commandGrid}>
              <source src={stockVideos.commandGrid} type="video/mp4" />
            </video>
            <div className="tile-caption">
              <span>Command motion</span>
              <strong>Section loops keep the read alive after the hero.</strong>
            </div>
          </article>
          <article className="media-mosaic-tile image-tile" data-reveal>
            <img alt="Sharpe Systems authority bridge" src={fusionImages.authorityBridge} />
          </article>
          <article className="media-mosaic-tile image-tile" data-reveal>
            <img alt="Sharpe Systems boardroom night" src={fusionImages.boardroomNight} />
          </article>
          <article className="media-mosaic-tile video-tile" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.signalPulse}>
              <source src={stockVideos.signalPulse} type="video/mp4" />
            </video>
            <div className="tile-caption">
              <span>Pulse control</span>
              <strong>Motion should increase authority, not noise.</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="command-section" data-focus="appointments" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Front-end advantage</p>
          <h2>A better flagship does more than look expensive. It shapes how the business is interpreted.</h2>
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

      <section className="showcase-section" data-focus="premium" data-scene="scene-3">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Fresh visual direction</p>
          <h2>Custom imagery, tighter placement, and more video moments give the build a stronger point of view.</h2>
        </div>
        <div className="showcase-grid">
          <article className="showcase-panel image-panel" data-reveal>
            <img alt="Sharpe Systems command floor visual" src={fusionImages.commandFloor} />
          </article>
          <article className="showcase-panel image-panel tall" data-reveal>
            <img alt="Sharpe Systems portrait visual" src={fusionImages.signalPortrait} />
          </article>
          <article className="showcase-panel video-panel" data-reveal>
            <video autoPlay loop muted playsInline poster={stockStills.proofCascade}>
              <source src={stockVideos.proofCascade} type="video/mp4" />
            </video>
          </article>
        </div>
      </section>

      <section className="proof-lattice-section" data-focus="premium" data-scene="scene-3">
        <div className="proof-lattice-grid">
          <article className="proof-lattice-card" data-reveal>
            <span>01</span>
            <strong>Distinct page heroes</strong>
            <p>Every route should feel like a new scene, not the same opener in a different folder.</p>
          </article>
          <article className="proof-lattice-card" data-reveal>
            <span>02</span>
            <strong>Media beyond the fold</strong>
            <p>Video and still placement should keep authority alive after the first impression.</p>
          </article>
          <article className="proof-lattice-card" data-reveal>
            <span>03</span>
            <strong>Functional qualification</strong>
            <p>The surface should recommend the right lane instead of dumping every lead into one form.</p>
          </article>
        </div>
      </section>

      <section className="architecture-section" data-focus="recurring" data-scene="scene-4">
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

      <section className="cta-strip" data-focus="premium" data-scene="scene-5">
        <div className="cta-strip-copy" data-reveal>
          <p className="eyebrow">Tour the system</p>
          <h2>Walk the method, the proof, the media surfaces, the operator logic, and the live diagnostic.</h2>
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
