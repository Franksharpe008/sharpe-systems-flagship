import type { CSSProperties } from "react";

import { AudioDock } from "@/components/audio-dock";
import { Diagnostic } from "@/components/diagnostic";
import { HeroVideo } from "@/components/hero-video";
import { MotionLayer } from "@/components/motion-layer";

const commandBoards = [
  {
    title: "Signal Audit",
    kicker: "Read the market fast",
    body: "Find the trust leaks, the weak offer framing, the wrong pacing, and the moments where the business feels smaller than it is."
  },
  {
    title: "Authority Surface",
    kicker: "Make the front door undeniable",
    body: "Shape the motion, story, image system, and page hierarchy so the first contact feels expensive, clear, and in control."
  },
  {
    title: "Action Path",
    kicker: "Turn attention into movement",
    body: "Build the qualification lane, the follow-up logic, and the next-step structure that keeps the experience alive after the first hit."
  }
];

const architectureLanes = [
  {
    title: "Research-led category positioning",
    body: "The page should read like it understands the market, the buyer hesitation, and the angle worth paying attention to."
  },
  {
    title: "Premium media that feels authored",
    body: "Motion, image, voice, and score should sharpen perception instead of reading like filler glued onto a generic layout."
  },
  {
    title: "Live proof with receipts",
    body: "The work should show real shipped surfaces, real verification, and real transformation language instead of fake praise."
  },
  {
    title: "Follow-through that behaves like software",
    body: "Qualification, summaries, recommendations, and next actions should move with precision after the page wins attention."
  }
];

const proofLedger = [
  {
    name: "Tree Service Premium Rebuild",
    result: "Took a dated local-service presence and made the first touch feel organized, selective, and higher-value.",
    image: "/proof/tree-service-proof.png",
    link: "https://what-about-bob-tree-service-premium.vercel.app/"
  },
  {
    name: "Premium Engine Capability Surface",
    result: "Turned system capability into a cleaner authority story with richer motion and a stronger conversion rhythm.",
    image: "/proof/premium-engine-proof.png",
    link: "https://authority-cinema-agency-flagship-edpm2mqpp.vercel.app/"
  },
  {
    name: "Real Estate Mockup Authority Pass",
    result: "Showed how a weaker business surface can be reframed into something calmer, sharper, and easier to trust immediately.",
    image: "/proof/realty-proof.png",
    link: "https://godwyn-realty-mockup-2026-03-17.vercel.app/"
  }
];

const offers = [
  {
    name: "Signal Audit",
    summary: "A decisive read on what is weakening trust, clarity, pricing power, or follow-through right now.",
    outcome: "A priority map plus the highest-leverage first move"
  },
  {
    name: "Authority Rebuild",
    summary: "A new front door for businesses whose current surface undersells the real quality of what they do.",
    outcome: "A sharper experience that earns more attention on contact"
  },
  {
    name: "Command System",
    summary: "A fuller business surface with media, qualification logic, proof, and operator-grade follow-through built to move.",
    outcome: "A flagship system designed to create real commercial momentum"
  }
];

const marqueeWords = [
  "Research",
  "Story",
  "Motion",
  "Voice",
  "Proof",
  "Qualification",
  "Follow-through"
];

const audioTracks = [
  {
    id: "field-brief",
    label: "Field brief",
    src: "/media/operator-brief-v2.mp3",
    description: "A short operator-grade briefing on what Sharpe Systems is actually built to do."
  },
  {
    id: "decision-note",
    label: "Decision note",
    src: "/media/decision-note-v2.mp3",
    description: "A second voice pass focused on what changes when the business stops underselling itself."
  },
  {
    id: "score-bed",
    label: "Score bed",
    src: "/media/score-bed.mp3",
    description: "A restrained cinematic score layer for a guided flagship read."
  }
];

function staggerStyle(index: number): CSSProperties {
  return { "--delay": `${index * 0.08}s` } as CSSProperties;
}

function AnimatedWord({ word }: { word: string }) {
  return (
    <span aria-label={word} className="animated-word">
      {Array.from(word).map((letter, index) => (
        <span
          aria-hidden="true"
          className="letter"
          key={`${letter}-${index}`}
          style={{ "--index": index } as CSSProperties}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <main className="flagship-shell">
      <MotionLayer />

      <header className="site-nav" data-reveal>
        <a className="brand-lockup" href="#top">
          <span className="brand-orb" />
          <span className="brand-copy">
            <strong>Sharpe Systems</strong>
            <span>Authority built to move</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#command">Command</a>
          <a href="#proof">Proof</a>
          <a href="#engage">Engage</a>
        </nav>
        <a className="nav-cta" href="#diagnostic">
          Start the diagnostic
        </a>
      </header>

      <section className="hero-shell" data-focus="premium" data-scene="scene-1" id="top">
        <div className="hero-video-shell" aria-hidden="true">
          <HeroVideo poster="/media/hero-poster.svg" src="/media/hero-loop.mp4" />
          <div className="hero-veil" />
          <div className="hero-gridwash" />
        </div>

        <div className="hero-content" data-reveal>
          <p className="eyebrow">Premium business systems for companies that need to feel bigger now</p>
          <h1 className="hero-title">
            Make the first touch feel
            <br />
            <AnimatedWord word="undeniable" />
          </h1>
          <p className="hero-summary">
            Sharpe Systems rebuilds the business surface people actually feel: the category read,
            the story, the motion, the proof, and the next step that turns attention into a real
            move.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#diagnostic">
              Diagnose the right lane
            </a>
            <a className="ghost-button" href="#proof">
              Watch the proof stack
            </a>
          </div>

          <div className="hero-metrics">
            <article data-reveal style={staggerStyle(0)}>
              <span>Read</span>
              <strong>Research before style</strong>
            </article>
            <article data-reveal style={staggerStyle(1)}>
              <span>Feel</span>
              <strong>Motion with intent</strong>
            </article>
            <article data-reveal style={staggerStyle(2)}>
              <span>Move</span>
              <strong>Action after attention</strong>
            </article>
          </div>
        </div>

        <aside className="hero-sidecard" data-reveal>
          <p className="eyebrow">Operator read</p>
          <h2>The page should act like a live system, not a static brochure.</h2>
          <p>
            Better businesses lose money when the first touch feels cheaper, slower, weaker, or
            less certain than the real operation behind it.
          </p>
          <ul className="hero-side-list">
            <li>Sharper positioning on contact</li>
            <li>Premium media without generic noise</li>
            <li>Qualification that behaves like software</li>
          </ul>
        </aside>

        <div className="scroll-cue" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="marquee-band" data-focus="premium" data-scene="scene-1">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, pass) => (
            <div className="marquee-group" key={pass}>
              {marqueeWords.map((word) => (
                <span className="marquee-word" key={`${pass}-${word}`}>
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="command-section" data-focus="appointments" data-scene="scene-2" id="command">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Command surface</p>
          <h2>Every flagship move starts with a stronger read, not louder decoration.</h2>
          <p>
            The point is not to make the business look futuristic. The point is to make the
            business feel more organized, more credible, and more valuable before the buyer has to
            work for it.
          </p>
        </div>

        <div className="command-grid">
          {commandBoards.map((board, index) => (
            <article className="command-card" data-reveal key={board.title} style={staggerStyle(index)}>
              <span className="command-index">0{index + 1}</span>
              <p className="command-kicker">{board.kicker}</p>
              <h3>{board.title}</h3>
              <p>{board.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section" data-focus="recurring" data-scene="scene-3">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">System architecture</p>
          <h2>The strongest business surfaces coordinate signal, proof, media, and follow-through.</h2>
        </div>

        <div className="architecture-grid">
          {architectureLanes.map((lane, index) => (
            <article className="architecture-card" data-reveal key={lane.title} style={staggerStyle(index)}>
              <h3>{lane.title}</h3>
              <p>{lane.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section" data-focus="premium" data-scene="scene-3" id="proof">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Proof stack</p>
          <h2>Real surfaces. Real receipts. Real transformations.</h2>
          <p>
            The proof should show shipped work and stronger business feeling, not a wall of claims
            that asks the buyer to imagine the result.
          </p>
        </div>

        <div className="proof-grid">
          {proofLedger.map((item, index) => (
            <article className="proof-card" data-reveal key={item.name} style={staggerStyle(index)}>
              <div className="proof-shot" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="proof-copy">
                <span className="proof-kicker">Shipped work</span>
                <h3>{item.name}</h3>
                <p>{item.result}</p>
                <a href={item.link} rel="noreferrer" target="_blank">
                  Open live surface
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="engagement-section" data-focus="appointments" data-scene="scene-4" id="engage">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Engagement lanes</p>
          <h2>Choose the size of the move instead of getting trapped in generic packages.</h2>
        </div>

        <div className="offer-grid">
          {offers.map((offer, index) => (
            <article className="offer-card" data-reveal key={offer.name} style={staggerStyle(index)}>
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

      <section className="diagnostic-section" data-focus="recurring" data-scene="scene-4" id="diagnostic">
        <Diagnostic />
      </section>

      <footer className="site-footer" data-focus="premium" data-scene="scene-4">
        <div className="footer-copy" data-reveal>
          <p className="eyebrow">Sharpe Systems</p>
          <h2>The business should feel as sharp as the work behind it.</h2>
          <p>
            If the current surface is leaking trust, muting quality, or wasting qualified
            attention, the rebuild should start now.
          </p>
        </div>
        <div className="footer-actions" data-reveal>
          <a className="primary-button" href="#diagnostic">
            Start the diagnostic
          </a>
          <a className="ghost-button" href="mailto:franksharpe008@gmail.com">
            franksharpe008@gmail.com
          </a>
        </div>
      </footer>

      <AudioDock tracks={audioTracks} />
    </main>
  );
}
