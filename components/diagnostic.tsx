"use client";

import { FormEvent, useState } from "react";

type Recommendation = {
  lane: string;
  focus: string;
  nextStep: string;
  summary: string;
};

function buildRecommendation(formData: Record<string, string>): Recommendation {
  const urgency = formData.urgency;
  const budget = formData.budgetBand;
  const bottleneck = formData.bottleneck;
  const need = formData.serviceNeed;

  if (
    (urgency === "immediate" || urgency === "this-month") &&
    (budget === "15-30k" || budget === "30k+") &&
    (bottleneck === "trust" || bottleneck === "conversion" || need === "full-system")
  ) {
    return {
      lane: "Authority System",
      focus: "Full business-front rebuild",
      nextStep: "Operator call + architecture sprint",
      summary:
        "You need the full authority system: positioning, front-end transformation, proof structure, and a follow-through path that closes the trust gap quickly."
    };
  }

  if (
    bottleneck === "site" ||
    bottleneck === "message" ||
    need === "rebuild" ||
    budget === "7-15k"
  ) {
    return {
      lane: "Conversion Rebuild",
      focus: "Message, structure, and front-door clarity",
      nextStep: "Conversion audit + rebuild plan",
      summary:
        "You likely do not need more noise. You need a stronger first impression, a cleaner offer path, and a site structure that makes the business easier to trust."
    };
  }

  return {
    lane: "Operator Audit",
    focus: "Diagnostic read on what is broken",
    nextStep: "Evidence review + priority map",
    summary:
      "The fastest first move is an operator-grade audit that identifies the biggest trust, clarity, and follow-through gaps before a full rebuild is scoped."
  };
}

export function Diagnostic() {
  const [result, setResult] = useState<Recommendation | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;
    setResult(buildRecommendation(payload));
  };

  return (
    <section className="diagnostic-card">
      <div className="section-heading">
        <p className="eyebrow">Fit diagnostic</p>
        <h2>Tell the system what is actually broken.</h2>
        <p>
          This is not a generic contact form. It is a structured read on the gap between how the
          business feels now and how it needs to perform.
        </p>
      </div>
      <form className="diagnostic-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required type="text" />
        </label>
        <label>
          Email
          <input name="email" required type="email" />
        </label>
        <label>
          Company
          <input name="company" required type="text" />
        </label>
        <label>
          What do you need most?
          <select defaultValue="rebuild" name="serviceNeed">
            <option value="rebuild">A stronger front door</option>
            <option value="proof">Better proof and positioning</option>
            <option value="automation">Better follow-through</option>
            <option value="full-system">A complete operating system</option>
          </select>
        </label>
        <label>
          Urgency
          <select defaultValue="this-quarter" name="urgency">
            <option value="immediate">Immediate</option>
            <option value="this-month">This month</option>
            <option value="this-quarter">This quarter</option>
            <option value="exploring">Exploring</option>
          </select>
        </label>
        <label>
          Budget band
          <select defaultValue="7-15k" name="budgetBand">
            <option value="under-7k">Under 7k</option>
            <option value="7-15k">7k - 15k</option>
            <option value="15-30k">15k - 30k</option>
            <option value="30k+">30k+</option>
          </select>
        </label>
        <label>
          Main bottleneck
          <select defaultValue="site" name="bottleneck">
            <option value="site">The site feels weak</option>
            <option value="message">The message is unclear</option>
            <option value="trust">The brand does not feel credible enough</option>
            <option value="conversion">Attention is not turning into qualified calls</option>
          </select>
        </label>
        <button className="primary-button" type="submit">
          Diagnose the right lane
        </button>
      </form>
      {result ? (
        <div className="diagnostic-result">
          <p className="result-label">Recommended lane</p>
          <h3>{result.lane}</h3>
          <p>{result.summary}</p>
          <div className="result-grid">
            <div>
              <span>Focus</span>
              <strong>{result.focus}</strong>
            </div>
            <div>
              <span>Next step</span>
              <strong>{result.nextStep}</strong>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
