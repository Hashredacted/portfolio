"use client";

import { CSSProperties } from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={className}
      style={
        {
          display: "inline-block",
          backgroundImage: disabled
            ? "none"
            : "linear-gradient(120deg, #a5a3c0 40%, #ffffff 50%, #c4b5fd 55%, #a5a3c0 60%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: disabled ? undefined : "transparent",
          animation: disabled ? "none" : `shiny-text ${animationDuration} linear infinite`,
        } as CSSProperties
      }
    >
      {text}
      <style>{`
        @keyframes shiny-text {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </span>
  );
}
