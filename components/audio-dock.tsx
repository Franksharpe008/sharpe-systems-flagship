"use client";

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

    await audioRef.current.play();
    setIsPlaying(true);
  };

  const handleSelect = async (id: string) => {
    setActiveTrack(id);
    if (!audioRef.current) {
      return;
    }
    audioRef.current.pause();
    audioRef.current.load();
    setIsPlaying(false);
  };

  return (
    <aside className="audio-dock" aria-label="Optional media">
      <div className="audio-dock-header">
        <p className="eyebrow">Optional media layer</p>
        <button className="audio-toggle" type="button" onClick={handleToggle}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <p className="audio-description">{currentTrack.description}</p>
      <div className="audio-track-list">
        {tracks.map((track) => (
          <button
            key={track.id}
            className={track.id === activeTrack ? "audio-chip active" : "audio-chip"}
            type="button"
            onClick={() => handleSelect(track.id)}
          >
            {track.label}
          </button>
        ))}
      </div>
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      >
        <source src={currentTrack.src} type="audio/mpeg" />
      </audio>
    </aside>
  );
}
