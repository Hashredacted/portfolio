"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  ExternalLink,
  BookOpen,
  X,
  ChevronRight,
  Layers,
  Zap,
} from "lucide-react";
import { projects, secondaryProjects, type Project } from "@/data/projects";

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const cs = project.caseStudy!;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(5,5,10,0.85)",
          backdropFilter: "blur(8px)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          overflowY: "auto",
        }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#0f0f1a",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 20,
            maxWidth: 700,
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            padding: "36px",
            position: "relative",
          }}
        >
          {/* Top accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              borderRadius: "20px 20px 0 0",
              background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7)",
            }}
          />

          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: 8,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#a5a3c0",
            }}
          >
            <X size={16} />
          </button>

          <div style={{ marginBottom: 8 }}>
            <span className="tag" style={{ marginBottom: 10, display: "inline-block" }}>
              Case Study
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 6,
            }}
            className="gradient-text-white"
          >
            {project.title}
          </h2>
          <p style={{ fontSize: 14, color: "#6b6987", marginBottom: 32, lineHeight: 1.7 }}>
            {project.description}
          </p>

          {/* Sections */}
          {[
            { label: "Problem", content: cs.problem, isArray: false },
            { label: "Solution", content: cs.solution, isArray: false },
          ].map(({ label, content }) => (
            <div key={label} style={{ marginBottom: 24 }}>
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8b5cf6",
                  marginBottom: 10,
                }}
              >
                {label}
              </h3>
              <p style={{ fontSize: 15, color: "#a5a3c0", lineHeight: 1.75 }}>{content as string}</p>
            </div>
          ))}

          <div style={{ marginBottom: 24 }}>
            <h3
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8b5cf6",
                marginBottom: 12,
              }}
            >
              Key Engineering Work
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {cs.engineering.map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div className="glow-dot" />
                  <p style={{ fontSize: 14, color: "#a5a3c0", lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <h3
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8b5cf6",
                marginBottom: 12,
              }}
            >
              Results
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {cs.results.map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <ChevronRight size={14} color="#6366f1" style={{ flexShrink: 0, marginTop: 4 }} />
                  <p style={{ fontSize: 14, color: "#a5a3c0", lineHeight: 1.7 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div style={{ marginBottom: 28 }}>
            <h3
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8b5cf6",
                marginBottom: 10,
              }}
            >
              Stack
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <GitBranch size={14} />
              GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  color: "#c4b5fd",
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const categoryColors: Record<string, string> = {
    "AI/ML": "#a855f7",
    "Computer Vision": "#6366f1",
    "Full Stack": "#8b5cf6",
    Backend: "#6366f1",
    SaaS: "#a855f7",
    ERP: "#6366f1",
    "E-Commerce": "#8b5cf6",
    Dashboard: "#6366f1",
    Business: "#8b5cf6",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        className="card-glass"
        style={{
          borderRadius: 18,
          padding: 28,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {/* Number */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            fontSize: 11,
            fontWeight: 700,
            color: "rgba(99,102,241,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Category badges */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
          {project.categories.map((cat) => (
            <span
              key={cat}
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "3px 8px",
                borderRadius: 6,
                background: `${categoryColors[cat] || "#6366f1"}18`,
                border: `1px solid ${categoryColors[cat] || "#6366f1"}35`,
                color: categoryColors[cat] || "#8b5cf6",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#f1f0ff",
            marginBottom: 10,
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            paddingRight: 24,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 13.5,
            color: "#6b6987",
            lineHeight: 1.75,
            marginBottom: 18,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{ marginBottom: 18, display: "flex", flexDirection: "column", gap: 6 }}>
          {project.highlights.slice(0, 2).map((h) => (
            <div key={h} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <Zap size={12} color="#6366f1" style={{ flexShrink: 0, marginTop: 3 }} />
              <span style={{ fontSize: 12.5, color: "#a5a3c0", lineHeight: 1.6 }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="tag" style={{ color: "#6b6987" }}>
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="section-divider" style={{ marginBottom: 18 }} />

        {/* Buttons */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <GitBranch size={13} />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.caseStudy && (
            <button
              onClick={() => setShowCaseStudy(true)}
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <BookOpen size={13} />
              Case Study
            </button>
          )}
        </div>
      </motion.div>

      {showCaseStudy && (
        <CaseStudyModal project={project} onClose={() => setShowCaseStudy(false)} />
      )}
    </>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        background: "rgba(10,10,20,0.5)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
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
            Selected Work
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
            className="gradient-text-white"
          >
            Featured Projects
          </h2>
          <p style={{ fontSize: 16, color: "#6b6987", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Production-grade systems that demonstrate commercially useful engineering — from AI and computer vision to
            multi-tenant SaaS and e-commerce.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 20,
            marginBottom: 72,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Secondary projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <Layers size={18} color="#6366f1" />
            <h3
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#a5a3c0",
                letterSpacing: "0.02em",
              }}
            >
              Additional AI / Computer Vision Experiments
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {secondaryProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background: "rgba(12,12,22,0.6)",
                  border: "1px solid rgba(99,102,241,0.1)",
                  borderRadius: 14,
                  padding: 22,
                  transition: "border-color 0.3s ease",
                }}
              >
                <h4
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#c4b5fd",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h4>
                <p style={{ fontSize: 13, color: "#6b6987", lineHeight: 1.65, marginBottom: 12 }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: 10 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#6b6987",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  <GitBranch size={13} />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
