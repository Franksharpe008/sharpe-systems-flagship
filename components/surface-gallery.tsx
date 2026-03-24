"use client";

import { useMemo, useState } from "react";

import type { SurfaceScene } from "@/lib/site";

export function SurfaceGallery({ scenes }: { scenes: SurfaceScene[] }) {
  const [activeId, setActiveId] = useState(scenes[0]?.id ?? "");
  const activeScene = useMemo(
    () => scenes.find((scene) => scene.id === activeId) ?? scenes[0],
    [activeId, scenes]
  );

  if (!activeScene) {
    return null;
  }

  return (
    <div className="surface-gallery" data-reveal>
      <div className="surface-stage">
        <div className="surface-stage-media">
          {activeScene.previewType === "video" ? (
            <video autoPlay loop muted playsInline poster={activeScene.poster}>
              <source src={activeScene.src} type="video/mp4" />
            </video>
          ) : (
            <img alt={activeScene.name} src={activeScene.src} />
          )}
        </div>
        <div className="surface-stage-copy">
          <p className="eyebrow">{activeScene.medium}</p>
          <h3>{activeScene.name}</h3>
          <p>{activeScene.summary}</p>
          <ul className="surface-note-list">
            {activeScene.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="surface-scene-grid">
        {scenes.map((scene) => (
          <button
            className={scene.id === activeScene.id ? "surface-chip active" : "surface-chip"}
            key={scene.id}
            onClick={() => setActiveId(scene.id)}
            type="button"
          >
            <span>{scene.medium}</span>
            <strong>{scene.name}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
