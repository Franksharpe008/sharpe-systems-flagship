"use client";

import { useMemo, useState } from "react";

import type { OfferScenario } from "@/lib/site";

type Pressure = "trust" | "motion" | "conversion";
type Timing = "fast" | "this-quarter" | "deliberate";
type SurfaceState = "weak" | "solid" | "premium";

function chooseScenario({
  offers,
  pressure,
  timing,
  surfaceState
}: {
  offers: OfferScenario[];
  pressure: Pressure;
  timing: Timing;
  surfaceState: SurfaceState;
}) {
  if ((pressure === "conversion" || pressure === "trust") && surfaceState === "weak") {
    return offers.find((offer) => offer.id === "authority-rebuild") ?? offers[0];
  }

  if (pressure === "motion" || (timing === "deliberate" && surfaceState !== "weak")) {
    return offers.find((offer) => offer.id === "flagship-system") ?? offers[0];
  }

  return offers.find((offer) => offer.id === "signal-audit") ?? offers[0];
}

export function OfferArchitect({ offers }: { offers: OfferScenario[] }) {
  const [pressure, setPressure] = useState<Pressure>("trust");
  const [timing, setTiming] = useState<Timing>("this-quarter");
  const [surfaceState, setSurfaceState] = useState<SurfaceState>("solid");

  const result = useMemo(
    () => chooseScenario({ offers, pressure, timing, surfaceState }),
    [offers, pressure, timing, surfaceState]
  );

  if (!result) {
    return null;
  }

  return (
    <div className="offer-architect" data-reveal>
      <div className="architect-controls">
        <div>
          <p className="eyebrow">Pressure point</p>
          <div className="chip-row">
            {[
              ["trust", "Trust perception"],
              ["motion", "Premium feel"],
              ["conversion", "Lead progression"]
            ].map(([id, label]) => (
              <button
                className={pressure === id ? "surface-chip active" : "surface-chip"}
                key={id}
                onClick={() => setPressure(id as Pressure)}
                type="button"
              >
                <strong>{label}</strong>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Timing</p>
          <div className="chip-row">
            {[
              ["fast", "Need a fast move"],
              ["this-quarter", "This quarter"],
              ["deliberate", "Build it properly"]
            ].map(([id, label]) => (
              <button
                className={timing === id ? "surface-chip active" : "surface-chip"}
                key={id}
                onClick={() => setTiming(id as Timing)}
                type="button"
              >
                <strong>{label}</strong>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Current surface</p>
          <div className="chip-row">
            {[
              ["weak", "Feels weak"],
              ["solid", "Has some foundation"],
              ["premium", "Already premium"]
            ].map(([id, label]) => (
              <button
                className={surfaceState === id ? "surface-chip active" : "surface-chip"}
                key={id}
                onClick={() => setSurfaceState(id as SurfaceState)}
                type="button"
              >
                <strong>{label}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>

      <article className="architect-result">
        <p className="eyebrow">Recommended lane</p>
        <h3>{result.name}</h3>
        <p>{result.summary}</p>
        <div className="case-metric-grid">
          <article>
            <span>Fit</span>
            <strong>{result.fit}</strong>
          </article>
          <article>
            <span>Timeline</span>
            <strong>{result.timeline}</strong>
          </article>
        </div>
        <div className="architect-deliverables">
          <span>Expected deliverables</span>
          <ul>
            {result.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
