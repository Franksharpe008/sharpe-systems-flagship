"use client";

import { useMemo, useState } from "react";

import type { CaseStudy } from "@/lib/site";

export function CaseCommand({ cases }: { cases: CaseStudy[] }) {
  const [activeId, setActiveId] = useState(cases[0]?.id ?? "");

  const activeCase = useMemo(
    () => cases.find((item) => item.id === activeId) ?? cases[0],
    [activeId, cases]
  );

  if (!activeCase) {
    return null;
  }

  return (
    <div className="case-command" data-reveal>
      <aside className="case-command-nav">
        <p className="eyebrow">Live proof selector</p>
        {cases.map((item, index) => (
          <button
            className={item.id === activeCase.id ? "case-switch active" : "case-switch"}
            key={item.id}
            onClick={() => setActiveId(item.id)}
            type="button"
          >
            <span className="case-switch-index">0{index + 1}</span>
            <div>
              <strong>{item.name}</strong>
              <small>{item.sector}</small>
            </div>
          </button>
        ))}
      </aside>

      <article className="case-command-stage">
        <div className="case-command-media">
          {activeCase.video ? (
            <video autoPlay loop muted playsInline poster={activeCase.image}>
              <source src={activeCase.video} type="video/mp4" />
            </video>
          ) : (
            <img alt={activeCase.name} src={activeCase.image} />
          )}
          <div className="case-command-overlay" />
        </div>

        <div className="case-command-copy">
          <p className="eyebrow">Featured transformation</p>
          <h3>{activeCase.name}</h3>
          <p>{activeCase.summary}</p>
          <div className="case-metric-grid">
            {activeCase.metrics.map((metric) => (
              <article key={`${activeCase.id}-${metric.label}`}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>
          <p className="case-result">{activeCase.result}</p>
          <ul className="case-win-list">
            {activeCase.wins.map((win) => (
              <li key={win}>{win}</li>
            ))}
          </ul>
          <a className="primary-button" href={activeCase.link} rel="noreferrer" target="_blank">
            Open live surface
          </a>
        </div>
      </article>
    </div>
  );
}
