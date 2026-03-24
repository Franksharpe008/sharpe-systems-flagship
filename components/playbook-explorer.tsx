"use client";

import { useMemo, useState } from "react";

import type { PlaybookEntry } from "@/lib/site";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "trust", label: "Trust" },
  { id: "motion", label: "Motion" },
  { id: "proof", label: "Proof" },
  { id: "conversion", label: "Conversion" }
] as const;

export function PlaybookExplorer({ entries }: { entries: PlaybookEntry[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [openId, setOpenId] = useState(entries[0]?.id ?? "");

  const filtered = useMemo(() => {
    if (filter === "all") {
      return entries;
    }
    return entries.filter((entry) => entry.category === filter);
  }, [entries, filter]);

  return (
    <div className="playbook-explorer" data-reveal>
      <div className="chip-row playbook-filters">
        {FILTERS.map((item) => (
          <button
            className={filter === item.id ? "surface-chip active" : "surface-chip"}
            key={item.id}
            onClick={() => {
              setFilter(item.id);
              const next = (item.id === "all"
                ? entries
                : entries.filter((entry) => entry.category === item.id))[0];
              if (next) {
                setOpenId(next.id);
              }
            }}
            type="button"
          >
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>

      <div className="playbook-grid">
        {filtered.map((entry) => {
          const open = entry.id === openId;
          return (
            <article
              className={open ? "playbook-card is-open" : "playbook-card"}
              key={entry.id}
            >
              <button
                className="playbook-trigger"
                onClick={() => setOpenId(open ? "" : entry.id)}
                type="button"
              >
                <span>{entry.category}</span>
                <strong>{entry.title}</strong>
              </button>
              <p>{entry.summary}</p>
              {open ? (
                <div className="playbook-open">
                  <div>
                    <span>Signals</span>
                    <ul>
                      {entry.signals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span>Apply it</span>
                    <p>{entry.apply}</p>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
