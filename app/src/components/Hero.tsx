"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, ChevronRight } from "lucide-react";
import Aurora from "./Aurora";
import Particles from "./Particles";
import DecryptedText from "./DecryptedText";
import BlurText from "./BlurText";
import ShinyText from "./ShinyText";

const capabilities = [
  "AI + Computer Vision",
  "API & Backend Development",
  "SaaS / Multi-Tenant Systems",
  "Payments & Integrations",
  "Dashboards & Admin Panels",
  "Deployment-Ready Web Apps",
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Aurora WebGL background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Aurora
          colorStops={["#1e0a4a", "#4f46e5", "#7c3aed"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.4}
        />
      </div>

      {/* Particles floating over aurora */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Particles
          particleCount={220}
          particleSpread={12}
          speed={0.08}
          particleColors={["#818cf8", "#a78bfa", "#c084fc", "#e879f9"]}
          moveParticlesOnHover
          particleHoverFactor={0.3}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={0.8}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse at center, rgba(10,10,15,0.2) 0%, rgba(10,10,15,0.75) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 800,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 9999,
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.3)",
            marginBottom: 28,
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px #22c55e",
              flexShrink: 0,
              animation: "badge-pulse 2s infinite",
            }}
          />
          <ShinyText
            text="AVAILABLE FOR FREELANCE PROJECTS"
            speed={4}
            className=""
          />
        </motion.div>

        {/* Name with DecryptedText */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 12,
          }}
        >
          <span className="gradient-text-white">Mohammad Afnan</span>
          <br />
          <span className="gradient-text">
            <DecryptedText
              text="Mirza"
              animateOn="view"
              speed={25}
              maxIterations={2}
              sequential
              revealDirection="start"
              className="gradient-text"
              encryptedClassName=""
            />
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            fontWeight: 500,
            color: "#a5a3c0",
            marginBottom: 20,
            letterSpacing: "0.02em",
          }}
        >
          AI &amp; Full-Stack Developer
        </motion.p>

        {/* Headline with BlurText */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "#6b6987",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          <BlurText
            text="I build AI-powered products, backend systems, SaaS applications, dashboards, and automation workflows that solve real business problems."
            delay={0.03}
            animateOnView={false}
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 56,
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 26px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
            className="btn-primary"
          >
            View My Work
            <ChevronRight size={16} />
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 26px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#c4b5fd",
              transition: "all 0.3s ease",
              backdropFilter: "blur(8px)",
            }}
          >
            <Mail size={15} />
            Hire Me
          </a>
          <a
            href="https://github.com/Hashredacted"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 26px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              color: "#6b6987",
              transition: "all 0.3s ease",
              backdropFilter: "blur(8px)",
            }}
            className="btn-outline"
          >
            GitHub
          </a>
        </motion.div>

        {/* Capability strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}
        >
          {capabilities.map((cap, i) => (
            <motion.span
              key={cap}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.06 }}
              className="tag"
              style={{ backdropFilter: "blur(8px)" }}
            >
              {cap}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          color: "#6b6987",
          zIndex: 3,
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown size={18} />
        </motion.div>
        <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>Scroll</span>
      </motion.div>

      <style>{`
        @keyframes badge-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
