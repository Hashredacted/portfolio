"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  ShoppingBag,
  Eye,
  CheckCircle2,
  HeartPulse,
} from "lucide-react";
import CardSwap, { Card } from "./CardSwap";
import DecryptedText from "./DecryptedText";
import ShinyText from "./ShinyText";
import { projects, type Project } from "@/data/projects";
import { CaseStudyModal } from "./Projects";

export default function ProjectDeck() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const healthcareProject =
    projects.find((p) => p.slug === "healthcare-symptom-checker") || projects[5];

  // Featured projects for the 3D card deck
  const deckProjects = [
    {
      ...projects[0],
      icon: ShieldCheck,
      iconColor: "#8b5cf6",
      accentGradient: "linear-gradient(90deg, #6366f1, #8b5cf6)",
      deckHighlights: [
        "Multi-tenant isolation & per-tenant data segregation",
        "Fine-grained RBAC for super-admin & company staff",
        "GST-compliant invoicing & multi-warehouse inventory",
      ],
    },
    {
      ...healthcareProject,
      icon: HeartPulse,
      iconColor: "#10b981",
      accentGradient: "linear-gradient(90deg, #10b981, #06b6d4)",
      deckHighlights: [
        "Deterministic pre-inference emergency & red-flag triage gate",
        "Gemini API structured diagnostic output without hallucination",
        "FastAPI async backend with PyMongo persistent consultation logs",
      ],
    },
    {
      ...projects[1],
      icon: Cpu,
      iconColor: "#6366f1",
      accentGradient: "linear-gradient(90deg, #3b82f6, #6366f1)",
      deckHighlights: [
        "U-Net semantic segmentation with 5-class pixel masks",
        "~97% pixel accuracy on multispectral satellite imagery",
        "Streamlit interactive dashboard & inference endpoint",
      ],
    },
    {
      ...projects[2],
      icon: ShoppingBag,
      iconColor: "#a855f7",
      accentGradient: "linear-gradient(90deg, #8b5cf6, #a855f7)",
      deckHighlights: [
        "Stripe payment checkout & inventory reservation locks",
        "Automated PDF invoice generation & email dispatch",
        "Full-featured admin sales analytics & catalog manager",
      ],
    },
    {
      ...projects[3],
      icon: Eye,
      iconColor: "#06b6d4",
      accentGradient: "linear-gradient(90deg, #06b6d4, #3b82f6)",
      deckHighlights: [
        "CNN image classification for marine oil spill detection",
        "Grad-CAM visual heatmap explainability for model trust",
        "High-throughput inference pipeline on raw satellite feeds",
      ],
    },
  ];

  return (
    <section
      id="deck"
      style={{
        padding: "90px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, rgba(139,92,246,0.03) 50%, transparent 80%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Left Column: Context & Interactive features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.28)",
                marginBottom: 20,
              }}
            >
              <Sparkles size={13} color="#a855f7" />
              <ShinyText
                text="REACT BITS 3D CARD STACK"
                speed={4}
                className=""
              />
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: 18,
              }}
            >
              <DecryptedText
                text="Interactive Project Stack"
                speed={20}
                maxIterations={2}
                animateOn="view"
                revealDirection="start"
                className="gradient-text-white"
              />
            </h2>

            <p
              style={{
                fontSize: 16,
                color: "#8b89a8",
                lineHeight: 1.75,
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              Cycle through production systems with GSAP-powered 3D elastic
              physics. Hover over the stack to pause the rotation, and click any
              card to open its complete technical case study.
            </p>

            {/* Feature Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={18} color="#8b5cf6" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#f1f0fb" }}>
                    Elastic GSAP 3D Physics
                  </span>
                  <p style={{ fontSize: 13, color: "#6b6987", margin: "2px 0 0" }}>
                    Natural drop &amp; return curves with realistic depth skew and z-index ordering.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={18} color="#8b5cf6" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#f1f0fb" }}>
                    Pause-on-Hover Inspection
                  </span>
                  <p style={{ fontSize: 13, color: "#6b6987", margin: "2px 0 0" }}>
                    Hovering pauses the animation timeline so clients can read specs at their pace.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={18} color="#8b5cf6" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#f1f0fb" }}>
                    One-Click Case Study Trigger
                  </span>
                  <p style={{ fontSize: 13, color: "#6b6987", margin: "2px 0 0" }}>
                    Clicking any card in the deck launches the detailed problem, solution &amp; metrics modal.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
                color: "#c4b5fd",
                padding: "8px 16px",
                borderRadius: 8,
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <Layers size={14} />
              <span>5 Architectural Showcases in Deck</span>
            </div>
          </motion.div>

          {/* Right Column: CardSwap 3D container */}
          <div
            style={{
              position: "relative",
              height: 520,
              width: "100%",
              maxWidth: 540,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardSwap
              width={450}
              height={330}
              cardDistance={48}
              verticalDistance={58}
              delay={2600}
              pauseOnHover={true}
              skewAmount={5}
              easing="elastic"
              onCardClick={(idx) => {
                const proj = deckProjects[idx % deckProjects.length];
                if (proj) setSelectedProject(proj);
              }}
            >
              {deckProjects.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <Card
                    key={p.slug}
                    style={{
                      cursor: "pointer",
                      padding: "24px 26px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background:
                        "linear-gradient(145deg, rgba(20,20,38,0.96) 0%, rgba(11,11,20,0.98) 100%)",
                      border: "1px solid rgba(99,102,241,0.28)",
                      borderRadius: 18,
                      boxShadow:
                        "0 25px 50px -12px rgba(0,0,0,0.85), 0 0 30px rgba(99,102,241,0.18)",
                      color: "#fff",
                      userSelect: "none",
                      overflow: "hidden",
                    }}
                  >
                    {/* Top Accent Gradient Bar */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: p.accentGradient,
                      }}
                    />

                    {/* Card Header */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: 12,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: 8,
                              background: "rgba(99,102,241,0.15)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <IconComponent size={17} color={p.iconColor} />
                          </div>
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: p.iconColor,
                            }}
                          >
                            {p.categories[0]}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "rgba(165,163,192,0.5)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          0{idx + 1} / 0{deckProjects.length}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3
                        style={{
                          fontSize: 17,
                          fontWeight: 700,
                          lineHeight: 1.3,
                          letterSpacing: "-0.02em",
                          color: "#f8fafc",
                          marginBottom: 12,
                        }}
                      >
                        {p.title}
                      </h3>

                      {/* Architecture highlights */}
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 14px 0",
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        }}
                      >
                        {p.deckHighlights.map((hl, hIdx) => (
                          <li
                            key={hIdx}
                            style={{
                              fontSize: 12,
                              color: "#94a3b8",
                              lineHeight: 1.45,
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 6,
                            }}
                          >
                            <span style={{ color: p.iconColor, fontWeight: 700 }}>•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer: Tech tags + Click CTA */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: 6,
                          flexWrap: "wrap",
                          marginBottom: 10,
                        }}
                      >
                        {p.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: 10,
                              fontWeight: 600,
                              padding: "2px 7px",
                              borderRadius: 5,
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              color: "#cbd5e1",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: 8,
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <span style={{ fontSize: 11, color: "#6b6987" }}>
                          Click card to view case study
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#c4b5fd",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 3,
                          }}
                        >
                          View Study <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </div>
        </div>
      </div>

      {/* Case Study Modal when a card is clicked */}
      {selectedProject && selectedProject.caseStudy && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
