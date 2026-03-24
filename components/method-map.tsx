"use client";

import { useMemo, useState } from "react";

import type { MethodStep } from "@/lib/site";

export function MethodMap({ steps }: { steps: MethodStep[] }) {
  const [activeId, setActiveId] = useState(steps[0]?.id ?? "");
  const activeStep = useMemo(
    () => steps.find((step) => step.id === activeId) ?? steps[0],
    [activeId, steps]
  );

  if (!activeStep) {
    return null;
  }

  return (
    <div className="method-map" data-reveal>
      <div className="method-tabs">
        {steps.map((step, index) => (
          <button
            className={step.id === activeStep.id ? "method-tab active" : "method-tab"}
            key={step.id}
            onClick={() => setActiveId(step.id)}
            type="button"
          >
            <span>0{index + 1}</span>
            <strong>{step.title}</strong>
          </button>
        ))}
      </div>

      <article className="method-stage">
        <div className="method-stage-copy">
          <p className="eyebrow">Current stage</p>
          <h3>{activeStep.title}</h3>
          <p>{activeStep.summary}</p>
          <div className="method-stage-panels">
            <div>
              <span>Inputs</span>
              <ul>
                {activeStep.inputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span>Outputs</span>
              <ul>
                {activeStep.outputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="method-tension">
            <span>Tension to solve</span>
            <p>{activeStep.tension}</p>
          </div>
        </div>

        <div className="method-stage-media">
          <video autoPlay loop muted playsInline poster={activeStep.poster}>
            <source src={activeStep.mediaSrc} type="video/mp4" />
          </video>
        </div>
      </article>
    </div>
  );
}
