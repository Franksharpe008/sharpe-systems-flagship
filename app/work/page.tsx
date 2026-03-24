import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { stockStills, stockVideos } from "@/lib/site";

const cases = [
  {
    name: "Tree Service Premium Rebuild",
    result: "Took a weaker local-service surface and made it feel more expensive, more selective, and more stable immediately.",
    image: "/proof/tree-service-proof.png",
    link: "https://what-about-bob-tree-service-premium.vercel.app/"
  },
  {
    name: "Authority Cinema Build",
    result: "Turned a flat authority page into a more cinematic, motion-led premium surface with stronger hierarchy.",
    image: "/proof/premium-engine-proof.png",
    link: "https://authority-cinema-agency-flagship-edpm2mqpp.vercel.app/"
  },
  {
    name: "Real Estate Authority Pass",
    result: "Reframed a weaker real estate presence into something calmer, clearer, and easier to trust fast.",
    image: "/proof/realty-proof.png",
    link: "https://godwyn-realty-mockup-2026-03-17.vercel.app/"
  }
];

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
        mediaSrc={stockVideos.tunnel}
        poster={stockStills.tunnel}
        side={
          <>
            <p className="eyebrow">Proof principle</p>
            <h2>Use shipped surfaces and clear transformations, not invented praise.</h2>
            <p>Each proof block should make the upgrade visible and commercially legible.</p>
          </>
        }
        summary="The work is framed as movement: what changed in trust, what changed in perception, and what changed in the strength of the front end."
        title={<h1 className="hero-title page-title-tight">Proof should read like evidence, not applause.</h1>}
      />

      <section className="proof-section" data-focus="premium" data-scene="scene-2">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Selected surfaces</p>
          <h2>Three live examples of weaker fronts being turned into sharper first contacts.</h2>
        </div>
        <div className="proof-grid">
          {cases.map((item) => (
            <article className="proof-card" data-reveal key={item.name}>
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
    </SiteShell>
  );
}
