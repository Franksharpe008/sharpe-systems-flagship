import type { CSSProperties } from "react";

type KineticHeadingProps = {
  lines: string[];
  accent?: string;
  className?: string;
};

export function KineticHeading({ lines, accent, className }: KineticHeadingProps) {
  return (
    <span className={className ? `kinetic-heading ${className}` : "kinetic-heading"}>
      {lines.map((line, lineIndex) => (
        <span className="kinetic-line" key={`${line}-${lineIndex}`}>
          {line.split(" ").map((word, wordIndex) => {
            const isAccent = accent && word.toLowerCase().includes(accent.toLowerCase());
            return (
              <span
                className={isAccent ? "kinetic-word is-accent" : "kinetic-word"}
                key={`${word}-${wordIndex}`}
                style={{ "--word-index": lineIndex * 10 + wordIndex } as CSSProperties}
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    className="kinetic-char"
                    key={`${char}-${charIndex}`}
                    style={{ "--char-index": charIndex } as CSSProperties}
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
