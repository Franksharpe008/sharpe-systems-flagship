import { AudioDock } from "@/components/audio-dock";
import { Diagnostic } from "@/components/diagnostic";
import { HeroVideo } from "@/components/hero-video";

const operatingLanes = [
  {
    title: "Perception",
    body: "The first ten seconds should feel organized, selective, and premium before the buyer decodes the whole offer."
  },
  {
    title: "Proof",
    body: "Real outputs, receipts, and concrete transformation language replace vague credibility theater."
  },
  {
    title: "Follow-through",
    body: "Forms, summaries, and recommendations turn curiosity into a guided next step instead of a dead inbox entry."
  },
  {
    title: "Momentum",
    body: "The system keeps moving after launch so the business does not stall at aesthetics."
  }
];

const transformationRows = [
  {
    before: "Generic, forgettable, and visually noisy.",
    after: "Structured, selective, and instantly easier to trust."
  },
  {
    before: "Everything is said at once, so nothing lands.",
    after: "The message unfolds in the order a buyer actually needs it."
  },
  {
    before: "Attention dies at the first weak touchpoint.",
    after: "Media, proof, and action paths reinforce each other."
  }
];

const proofLedger = [
  {
    name: "Tree Service Premium Rebuild",
    result: "Converted a dated local presence into a sharper premium front door.",
    link: "https://what-about-bob-tree-service-premium.vercel.app/"
  },
  {
    name: "Law Firm Flagship Demo",
    result: "Built a more authoritative legal-service presence with live delivery proof.",
    link: "https://tailorbytez-sandy-epstein-law-2026.vercel.app"
  },
  {
    name: "Flagship Motion Prototype",
    result: "Proved the live browser plus remote media lane with a real render receipt.",
    link: "https://authority-cinema-agency-flagship-edpm2mqpp.vercel.app/"
  }
];

const offers = [
  {
    name: "Operator Audit",
    summary: "For businesses that need a precise read on what is weakening trust, clarity, or follow-through.",
    outcome: "Priority map + decisive first move"
  },
  {
    name: "Conversion Rebuild",
    summary: "For businesses with real demand but a weak front door, scattered message, or poor booking flow.",
    outcome: "Sharper message + better first impression"
  },
  {
    name: "Authority System",
    summary: "For owners who want the entire business surface to feel tighter, more premium, and easier to choose.",
    outcome: "A real operating system for perception and action"
  }
];

const audioTracks = [
  {
    id: "operator-brief",
    label: "Operator brief",
    src: "/media/operator-brief.mp3",
    description: "A short optional briefing for visitors who want the thesis in voice."
  },
  {
    id: "score-bed",
    label: "Score bed",
    src: "/media/score-bed.mp3",
    description: "A restrained optional score layer for a guided-boardroom feel."
  }
];

export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand-mark">
          <span className="brand-dot" />
          Sharpe Systems
        </div>
        <nav className="topnav">
          <a href="#system">System</a>
          <a href="#proof">Proof</a>
          <a href="#offers">Offers</a>
          <a href="#diagnostic">Diagnostic</a>
        </nav>
        <a className="topbar-cta" href="#diagnostic">
          Start the diagnostic
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Business operating systems for service companies</p>
          <h1>
            Turn a weak
            <span> front door </span>
            into a system people trust on contact.
          </h1>
          <p className="hero-summary">
            Sharpe Systems rebuilds the business surface that people actually feel: the message,
            the media, the proof, the motion, and the path that turns interest into a real next
            step.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#diagnostic">
              Diagnose the right lane
            </a>
            <a className="secondary-button" href="#proof">
              See the proof ledger
            </a>
          </div>
          <div className="hero-metrics">
            <div>
              <span>Signal</span>
              <strong>Sharper first impression</strong>
            </div>
            <div>
              <span>Proof</span>
              <strong>Receipts over claims</strong>
            </div>
            <div>
              <span>Follow-through</span>
              <strong>Action after attention</strong>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-frame">
            <HeroVideo poster="/media/hero-poster.svg" src="/media/hero-loop.mp4" />
            <div className="hero-overlay-card north">
              <span>Mode</span>
              <strong>Authority rebuild</strong>
            </div>
            <div className="hero-overlay-card south">
              <span>Focus</span>
              <strong>Trust, clarity, conversion</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="transformation-section" id="system">
        <div className="section-heading">
          <p className="eyebrow">The shift</p>
          <h2>What changes when the business starts feeling deliberate.</h2>
          <p>
            The real rebuild is not decorative. It changes how quickly a buyer understands what
            the business is, why it matters, and whether the next step feels worth taking.
          </p>
        </div>
        <div className="transformation-grid">
          {transformationRows.map((row) => (
            <article className="transition-row" key={row.before}>
              <div>
                <span className="transition-label">Before</span>
                <p>{row.before}</p>
              </div>
              <div>
                <span className="transition-label">After</span>
                <p>{row.after}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lanes-section">
        <div className="section-heading">
          <p className="eyebrow">The machine</p>
          <h2>Four lanes move together so the front end stops fighting the business.</h2>
        </div>
        <div className="lane-grid">
          {operatingLanes.map((lane, index) => (
            <article className="lane-card" key={lane.title}>
              <span className="lane-index">0{index + 1}</span>
              <h3>{lane.title}</h3>
              <p>{lane.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section" id="proof">
        <div className="section-heading">
          <p className="eyebrow">Proof ledger</p>
          <h2>Real surfaces. Real outputs. Real receipts.</h2>
          <p>
            Proof should show transformed business surfaces and verified delivery, not a wall of
            invented praise.
          </p>
        </div>
        <div className="proof-grid">
          {proofLedger.map((item) => (
            <article className="proof-card" key={item.name}>
              <div className="proof-art" aria-hidden="true" />
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

      <section className="offers-section" id="offers">
        <div className="section-heading">
          <p className="eyebrow">Engagement lanes</p>
          <h2>Choose the size of the move, not a random package.</h2>
        </div>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className="offer-card" key={offer.name}>
              <h3>{offer.name}</h3>
              <p>{offer.summary}</p>
              <div className="offer-outcome">
                <span>Outcome</span>
                <strong>{offer.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="diagnostic-section" id="diagnostic">
        <Diagnostic />
      </section>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Sharpe Systems</p>
          <h2>Build the business surface people can trust fast.</h2>
        </div>
        <a className="primary-button" href="mailto:franksharpe008@gmail.com">
          franksharpe008@gmail.com
        </a>
      </footer>

      <AudioDock tracks={audioTracks} />
    </main>
  );
}
