"use client";

import { FormEvent, useState } from "react";

type Recommendation = {
  lane: string;
  focus: string;
  nextStep: string;
  summary: string;
  followUp: string;
  deliveryShape: string;
};

function buildRecommendation(formData: Record<string, string>): Recommendation {
  const urgency = formData.urgency;
  const budget = formData.budgetBand;
  const bottleneck = formData.bottleneck;
  const need = formData.serviceNeed;
  const company = formData.company || "your company";
  const pressure = formData.primaryOpportunity;
  const url = formData.siteUrl ? ` Current site: ${formData.siteUrl}.` : "";

  if (
    (urgency === "immediate" || urgency === "this-month") &&
    (budget === "15-30k" || budget === "30k+") &&
    (bottleneck === "trust" || bottleneck === "conversion" || need === "full-system" || pressure === "scale")
  ) {
    return {
      lane: "Command System",
      focus: "Full authority rebuild with media and follow-through",
      nextStep: "Operator call + system architecture sprint",
      deliveryShape: "Full multi-page flagship with premium media and qualification flow",
      summary:
        "The business likely needs a full command surface: sharper positioning, a premium first touch, stronger proof sequencing, and an action path that closes hesitation quickly.",
      followUp: `Sharpe Systems read for ${company}: the strongest move is a full command-system build.${url} We would rebuild the authority surface, tighten the proof story, and structure a cleaner qualification path so attention turns into qualified movement faster.`
    };
  }

  if (
    bottleneck === "site" ||
    bottleneck === "message" ||
    need === "rebuild" ||
    budget === "7-15k" ||
    pressure === "reposition"
  ) {
    return {
      lane: "Authority Rebuild",
      focus: "Message, motion, and first-touch trust",
      nextStep: "Conversion audit + flagship rebuild plan",
      deliveryShape: "Premium rebuild with sharper proof, media, and route logic",
      summary:
        "The highest-leverage move is a stronger front door. The page, pacing, story, and media should make the business feel clearer and more valuable immediately.",
      followUp: `Sharpe Systems read for ${company}: the fastest commercial gain is an authority rebuild.${url} The site and message need to feel sharper, more selective, and easier to trust before more traffic is pushed into the system.`
    };
  }

  return {
    lane: "Signal Audit",
    focus: "Diagnostic read on trust and conversion leaks",
    nextStep: "Evidence review + priority map",
    deliveryShape: "Research-led audit with a tighter recommended first move",
    summary:
      "The smartest first move is a precise audit that identifies the biggest trust, clarity, and follow-through gaps before a larger flagship build is scoped.",
    followUp: `Sharpe Systems read for ${company}: start with a signal audit.${url} We should isolate the trust leaks, the category-positioning gaps, and the weak spots in the current follow-through path before deciding the full build lane.`
  };
}

export function Diagnostic() {
  const [result, setResult] = useState<Recommendation | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;
    setCopied(false);
    setResult(buildRecommendation(payload));
  };

  const handleCopy = async () => {
    if (!result) {
      return;
    }

    await navigator.clipboard.writeText(result.followUp);
    setCopied(true);
  };

  return (
    <section className="diagnostic-card" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">Fit diagnostic</p>
        <h2>Tell the system what is actually weakening the business right now.</h2>
        <p>
          This is a structured read on the gap between how the business feels now and how it needs
          to perform when the right buyer lands on it.
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
          Website or booking URL
          <input name="siteUrl" placeholder="https://..." type="url" />
        </label>
        <label>
          What do you need most?
          <select defaultValue="rebuild" name="serviceNeed">
            <option value="rebuild">A stronger business surface</option>
            <option value="proof">Better proof and positioning</option>
            <option value="automation">Better follow-through</option>
            <option value="full-system">A complete command system</option>
          </select>
        </label>
        <label>
          Main opportunity
          <select defaultValue="reposition" name="primaryOpportunity">
            <option value="reposition">The brand needs a stronger premium read</option>
            <option value="conversion">The traffic is not becoming qualified movement</option>
            <option value="scale">The business is ready for a full flagship system</option>
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
            <option value="site">The surface feels weak</option>
            <option value="message">The message is unclear</option>
            <option value="trust">The business does not feel credible enough</option>
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
            <div>
              <span>Delivery shape</span>
              <strong>{result.deliveryShape}</strong>
            </div>
          </div>
          <div className="follow-up-card">
            <div>
              <p className="eyebrow">Follow-up draft</p>
              <p>{result.followUp}</p>
            </div>
            <div className="follow-up-actions">
              <button className="ghost-button" onClick={handleCopy} type="button">
                {copied ? "Copied" : "Copy summary"}
              </button>
              <a
                className="ghost-button"
                href={`mailto:franksharpe008@gmail.com?subject=${encodeURIComponent(`Sharpe Systems diagnostic: ${result.lane}`)}&body=${encodeURIComponent(result.followUp)}`}
              >
                Email the summary
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
