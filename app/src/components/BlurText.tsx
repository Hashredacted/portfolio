"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  animateOnView?: boolean;
}

export default function BlurText({
  text,
  delay = 0.04,
  className = "",
  style,
  animateOnView = true,
}: BlurTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em", ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
          {...(animateOnView
            ? {
                whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
                viewport: { once: true },
              }
            : {
                animate: { opacity: 1, filter: "blur(0px)", y: 0 },
              })}
          transition={{ duration: 0.5, delay: i * delay, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
