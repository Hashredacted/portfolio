"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, ArrowRight, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";
import Aurora from "./Aurora";
import ShinyText from "./ShinyText";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mohammadafnanmirza@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aurora background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      >
        <Aurora
          colorStops={["#1a0a3d", "#3730a3", "#6d28d9"]}
          amplitude={0.8}
          blend={0.7}
          speed={0.25}
        />
      </div>
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,15,0.6)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#8b5cf6",
              marginBottom: 12,
            }}
          >
            Get in Touch
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              lineHeight: 1.1,
            }}
            className="gradient-text-white"
          >
            <ShinyText text="Let's Build Something" speed={4} />
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6b6987",
              lineHeight: 1.75,
              marginBottom: 48,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            Have an AI, automation, API, SaaS, or full-stack project?{" "}
            <span style={{ color: "#c4b5fd" }}>Let&apos;s build it.</span>
          </p>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: "rgba(18,18,31,0.8)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: 20,
              padding: "40px",
              position: "relative",
              overflow: "hidden",
              marginBottom: 32,
            }}
          >
            {/* Top gradient accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
                borderRadius: "20px 20px 0 0",
              }}
            />

            {/* Email */}
            <div style={{ marginBottom: 28 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6b6987",
                  marginBottom: 12,
                }}
              >
                Email
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="mailto:mohammadafnanmirza@gmail.com"
                  style={{
                    fontSize: "clamp(14px, 3vw, 18px)",
                    fontWeight: 600,
                    color: "#c4b5fd",
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                  }}
                >
                  mohammadafnanmirza@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    borderRadius: 8,
                    padding: "6px 10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    color: copied ? "#22c55e" : "#8b5cf6",
                    fontSize: 12,
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? <CheckCheck size={13} /> : <Copy size={13} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div className="section-divider" style={{ marginBottom: 28 }} />

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:mohammadafnanmirza@gmail.com"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                <Mail size={15} />
                Send an Email
                <ArrowRight size={14} />
              </a>
              <a
                href="https://github.com/Hashredacted"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <GitBranch size={15} />
                View GitHub
              </a>
            </div>
          </motion.div>

          <p style={{ fontSize: 13, color: "#6b6987" }}>
            Typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
