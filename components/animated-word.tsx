import type { CSSProperties } from "react";

export function AnimatedWord({ word }: { word: string }) {
  return (
    <span aria-label={word} className="animated-word">
      {Array.from(word).map((letter, index) => (
        <span
          aria-hidden="true"
          className="letter"
          key={`${letter}-${index}`}
          style={{ "--index": index } as CSSProperties}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
