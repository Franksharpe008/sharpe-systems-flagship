"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    PaperDirector?: {
      mount: (options?: { canvasSelector?: string; initialFocus?: string }) => { destroy?: () => void };
    };
  }
}

export function MotionLayer() {
  const pathname = usePathname();
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
    const scrollReactiveTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "[data-reveal]",
          ".hero-sidecard",
          ".hero-spotlight",
          ".hero-metrics article",
          ".hero-rail-card",
          ".footer-column",
          ".footer-copy",
          ".footer-media-card",
          ".footer-media-stack",
          ".site-footer-shell",
          ".cta-strip",
          ".split-story-copy",
          ".split-story-visual"
        ].join(",")
      )
    );
    const mediaTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          ".hero-video",
          ".showcase-panel img",
          ".showcase-panel video",
          ".media-mosaic-tile img",
          ".media-mosaic-tile video",
          ".case-command-media img",
          ".case-command-media video",
          ".surface-stage-media img",
          ".surface-stage-media video",
          ".method-stage-media video",
          ".split-story-visual img",
          ".split-story-visual video",
          ".footer-media-card img",
          ".footer-media-card video"
        ].join(",")
      )
    );

    revealTargets.forEach((target) => target.classList.remove("is-visible"));

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

        document.body.dataset.focus = focus;
        document.body.dataset.scene = scene;
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

      const viewportCenter = window.innerHeight * 0.52;
      const compactMotion = window.innerWidth <= 840;
      const shiftRange = compactMotion ? 2.5 : 8;
      const tiltRange = compactMotion ? 0 : 0.45;
      const scaleRange = compactMotion ? 0.002 : 0.007;
      const panRange = compactMotion ? 2 : 6;
      const zoomBase = compactMotion ? 1.006 : 1.014;
      const zoomRange = compactMotion ? 0.004 : 0.012;

      scrollReactiveTargets.forEach((target, index) => {
        const rect = target.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = (center - viewportCenter) / Math.max(window.innerHeight, 1);
        const clamped = Math.max(-1, Math.min(1, distance));
        const intensity = 1 - Math.min(1, Math.abs(clamped));
        const direction = index % 2 === 0 ? 1 : -1;

        target.style.setProperty("--scroll-shift", `${(-clamped * shiftRange).toFixed(2)}px`);
        target.style.setProperty("--scroll-tilt", `${(clamped * tiltRange * direction).toFixed(2)}deg`);
        target.style.setProperty("--scroll-scale", `${(1 + intensity * scaleRange).toFixed(4)}`);
      });

      mediaTargets.forEach((target, index) => {
        const rect = target.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = (center - viewportCenter) / Math.max(window.innerHeight, 1);
        const clamped = Math.max(-1, Math.min(1, distance));
        const direction = index % 2 === 0 ? 1 : -1;

        target.style.setProperty("--media-pan", `${(-clamped * panRange * direction).toFixed(2)}px`);
        target.style.setProperty("--media-zoom", `${(zoomBase + (1 - Math.abs(clamped)) * zoomRange).toFixed(4)}`);
      });

      sceneTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const visibleTop = Math.max(0, Math.min(window.innerHeight, rect.top));
        const visibleBottom = Math.max(0, Math.min(window.innerHeight, rect.bottom));
        const visible = Math.max(0, visibleBottom - visibleTop);
        const sceneProgress = Math.max(0, Math.min(1, visible / Math.max(rect.height, 1)));
        target.style.setProperty("--scene-progress", sceneProgress.toFixed(4));
      });

      frame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();

    return () => {
      window.cancelAnimationFrame(frame);
      revealObserver.disconnect();
      sceneObserver.disconnect();
      motion?.destroy?.();
    };
  }, [paperReady, directorReady, pathname]);

  return (
    <>
      <div aria-hidden="true" className="motion-root">
        <canvas className="paper-stage" id="paper-hero-stage" />
        <div className="focus-glow glow-a" />
        <div className="focus-glow glow-b" />
        <div className="focus-glow glow-c" />
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
