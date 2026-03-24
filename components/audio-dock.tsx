"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";

type Track = {
  id: string;
  label: string;
  src: string;
  description: string;
};

type AudioDockProps = {
  tracks: Track[];
};

export function AudioDock({ tracks }: AudioDockProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeTrack, setActiveTrack] = useState<string>(tracks[0]?.id ?? "");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentTrack = tracks.find((track) => track.id === activeTrack) ?? tracks[0];

  if (!tracks.length || !currentTrack) {
    return null;
  }

  const handleToggle = async () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    setIsExpanded(true);
    await audioRef.current.play();
    setIsPlaying(true);
  };

  const handleSelect = (id: string) => {
    setActiveTrack(id);

    if (!audioRef.current) {
      return;
    }

    audioRef.current.pause();
    audioRef.current.load();
    setIsPlaying(false);
  };

  return (
    <aside
      aria-label="Optional media"
      className={isExpanded ? "audio-dock is-expanded" : "audio-dock"}
      id="media-dock"
    >
      <div className="audio-dock-mini">
        <div>
          <p className="eyebrow">Optional media</p>
          <strong>{currentTrack.label}</strong>
        </div>
        <div className="audio-mini-actions">
          <button className="ghost-button audio-expand" onClick={() => setIsExpanded((open) => !open)} type="button">
            {isExpanded ? "Hide" : "Open"}
          </button>
          <button className="audio-toggle" onClick={handleToggle} type="button">
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {isExpanded ? (
        <>
          <p className="audio-description">{currentTrack.description}</p>

          <div aria-hidden="true" className={isPlaying ? "audio-wave is-playing" : "audio-wave"}>
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} style={{ "--bar-index": index } as CSSProperties} />
            ))}
          </div>

          <div className="audio-track-list">
            {tracks.map((track) => (
              <button
                className={track.id === activeTrack ? "audio-chip active" : "audio-chip"}
                key={track.id}
                onClick={() => handleSelect(track.id)}
                type="button"
              >
                {track.label}
              </button>
            ))}
          </div>
        </>
      ) : null}

      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} preload="metadata">
        <source src={currentTrack.src} type="audio/mpeg" />
      </audio>
    </aside>
  );
}
