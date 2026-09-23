"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view";
}

export default function DecryptedText({
  text,
  speed = 20,
  maxIterations = 4,
  sequential = true,
  revealDirection = "start",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  encryptedClassName = "",
  animateOn = "hover",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set<number>());
  const [hasAnimated, setHasAnimated] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const charSet = characters.split("");

  const getRevealOrder = useCallback(
    (len: number) => {
      if (revealDirection === "start") return Array.from({ length: len }, (_, i) => i);
      if (revealDirection === "end") return Array.from({ length: len }, (_, i) => len - 1 - i);
      const mid = Math.floor(len / 2);
      const order: number[] = [];
      for (let i = 0; order.length < len; i++) {
        const right = mid + Math.ceil(i / 2);
        const left = mid - Math.ceil(i / 2);
        if (i % 2 === 0 && right < len) order.push(right);
        else if (i % 2 !== 0 && left >= 0) order.push(left);
        if (order.length < len) {
          const alt = i % 2 === 0 ? left : right;
          if (alt >= 0 && alt < len && !order.includes(alt)) order.push(alt);
        }
      }
      return order.slice(0, len);
    },
    [revealDirection]
  );

  const animate = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRevealedIndices(new Set());

    const revealOrder = getRevealOrder(text.length);
    let pointer = 0;
    let iteration = 0;

    const shuffleDisplay = (revealed: Set<number>) => {
      return text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (revealed.has(i)) return char;
          return charSet[Math.floor(Math.random() * charSet.length)];
        })
        .join("");
    };

    intervalRef.current = setInterval(() => {
      if (sequential) {
        if (pointer < text.length) {
          iteration++;
          if (iteration >= maxIterations) {
            iteration = 0;
            // Reveal multiple characters per step on longer text so it completes within ~500ms
            const step = Math.max(1, Math.ceil(text.length / 14));
            setRevealedIndices((prev) => {
              const next = new Set(prev);
              for (let s = 0; s < step && pointer < text.length; s++) {
                next.add(revealOrder[pointer]);
                pointer++;
              }
              setDisplayText(shuffleDisplay(next));
              return next;
            });
          } else {
            setRevealedIndices((prev) => {
              setDisplayText(shuffleDisplay(prev));
              return prev;
            });
          }
        } else {
          setDisplayText(text);
          setIsAnimating(false);
          setHasAnimated(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      } else {
        setRevealedIndices((prev) => {
          const next = new Set(prev);
          const unrevealed = revealOrder.filter((i) => !next.has(i));
          if (unrevealed.length === 0) {
            setDisplayText(text);
            setIsAnimating(false);
            setHasAnimated(true);
            if (intervalRef.current) clearInterval(intervalRef.current);
            return prev;
          }
          const toReveal = unrevealed.slice(0, Math.ceil(unrevealed.length / Math.max(1, maxIterations)));
          toReveal.forEach((i) => next.add(i));
          setDisplayText(shuffleDisplay(next));
          return next;
        });
      }
    }, speed);
  }, [text, isAnimating, sequential, maxIterations, speed, getRevealOrder, charSet]);

  // Auto-animate on view with early threshold
  useEffect(() => {
    if (animateOn !== "view") return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) animate();
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [animateOn, animate, hasAnimated]);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const chars = displayText.split("");

  return (
    <span
      ref={containerRef}
      onMouseEnter={animateOn === "hover" ? animate : undefined}
      style={{ display: "inline-block", cursor: animateOn === "hover" ? "default" : undefined }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          className={revealedIndices.has(i) || displayText === text ? className : encryptedClassName}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
