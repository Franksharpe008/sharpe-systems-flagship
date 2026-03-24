import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { Diagnostic } from "@/components/diagnostic";
import { stockStills, stockVideos } from "@/lib/site";

export default function ContactPage() {
  return (
    <SiteShell ctaHref="/contact" ctaLabel="Submit the diagnostic">
      <PageHero
        eyebrow="Contact"
        mediaSrc={stockVideos.boardroom}
        poster={stockStills.boardroom}
        side={
          <>
            <p className="eyebrow">Entry point</p>
            <h2>Tell Sharpe Systems where the business is leaking trust, energy, or momentum right now.</h2>
          </>
        }
        summary="The diagnostic is the shortest clean path into a sharper front-end build. It identifies the pressure point, recommends the lane, and frames the next move."
        title={<h1 className="hero-title page-title-tight">Enter the build queue.</h1>}
      />

      <section className="diagnostic-section" data-focus="recurring" data-scene="scene-2" id="diagnostic">
        <Diagnostic />
      </section>
    </SiteShell>
  );
}
