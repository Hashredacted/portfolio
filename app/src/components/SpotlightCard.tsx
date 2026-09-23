"use client";

import { useRef, ReactNode, MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  style?: React.CSSProperties;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.15)",
  style,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--x", `${x}px`);
    divRef.current.style.setProperty("--y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  const handleMouseLeave = () => {
    if (!divRef.current) return;
    divRef.current.style.setProperty("--spotlight-color", "transparent");
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        background: "rgba(18, 18, 31, 0.7)",
        border: "1px solid rgba(99, 102, 241, 0.15)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        "--x": "50%",
        "--y": "50%",
        "--spotlight-color": "transparent",
        ...style,
      } as React.CSSProperties}
    >
      {/* Spotlight radial gradient that follows cursor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(350px circle at var(--x) var(--y), var(--spotlight-color), transparent 70%)",
          pointerEvents: "none",
          transition: "background 0.05s",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>{children}</div>
    </div>
  );
}
