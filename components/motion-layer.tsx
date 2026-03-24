"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    PaperDirector?: {
      mount: (options?: { canvasSelector?: string; initialFocus?: string }) => { destroy?: () => void };
    };
  }
}

export function MotionLayer() {
  const [paperReady, setPaperReady] = useState(false);
  const [directorReady, setDirectorReady] = useState(false);

  useEffect(() => {
    if (!paperReady || !directorReady || !window.PaperDirector) {
      return;
    }

    const motion = window.PaperDirector.mount({
      canvasSelector: "#paper-hero-stage",
      initialFocus: "premium"
    });

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sceneTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    const sceneObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const target = visible.target as HTMLElement;
        const focus = target.dataset.focus || "premium";
        const scene = target.dataset.scene || "scene-1";
        const progress = Number(visible.intersectionRatio.toFixed(2));

        window.dispatchEvent(new CustomEvent("sharpe-focus-change", { detail: { focus } }));
        window.dispatchEvent(new CustomEvent("sharpe-scene-change", { detail: { scene, progress } }));
      },
      {
        threshold: [0.18, 0.32, 0.5, 0.68, 0.84]
      }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
    sceneTargets.forEach((target) => sceneObserver.observe(target));

    let frame = 0;

    const updateScrollState = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const progress = Math.min(1, window.scrollY / maxScroll);
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      document.body.classList.toggle("has-scrolled", window.scrollY > 24);
      frame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();

    return () => {
      window.cancelAnimationFrame(frame);
      revealObserver.disconnect();
      sceneObserver.disconnect();
      motion?.destroy?.();
    };
  }, [paperReady, directorReady]);

  return (
    <>
      <div aria-hidden="true" className="motion-root">
        <canvas className="paper-stage" id="paper-hero-stage" />
        <div className="noise-layer" />
        <div className="scanline-layer" />
      </div>
      <Script
        onLoad={() => setPaperReady(true)}
        src="/vendor/paper-full.min.js"
        strategy="afterInteractive"
      />
      <Script
        onLoad={() => setDirectorReady(true)}
        src="/scripts/paper-authority.js"
        strategy="afterInteractive"
      />
    </>
  );
}
