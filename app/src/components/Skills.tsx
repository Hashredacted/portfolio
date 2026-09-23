"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Automation",
    color: "#a855f7",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "Computer Vision",
      "LLM Integration",
      "Agentic AI",
      "AI Automation",
      "Gemini API",
      "Model Inference",
      "Explainable AI",
    ],
  },
  {
    category: "Backend & APIs",
    color: "#6366f1",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Authentication",
      "RBAC",
      "Multi-tenancy",
    ],
  },
  {
    category: "Full Stack",
    color: "#8b5cf6",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "EJS",
    ],
  },
  {
    category: "Business Applications",
    color: "#a855f7",
    skills: [
      "SaaS",
      "ERP",
      "Inventory Systems",
      "E-commerce",
      "Admin Dashboards",
      "Payment Integration",
      "API Integrations",
    ],
  },
  {
    category: "Deployment & Engineering",
    color: "#6366f1",
    skills: [
      "Streamlit",
      "Vercel",
      "Render",
      "Git / GitHub",
      "Environment Config",
      "Security Middleware",
      "Input Validation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="skills-grid"
        >
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              About
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
              className="gradient-text-white"
            >
              AI & Full-Stack Developer
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                color: "#6b6987",
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              <p>
                I build <span style={{ color: "#c4b5fd" }}>AI-powered products</span>, backend APIs, SaaS platforms,
                and full-stack web applications — with a focus on practical business outcomes, not academic demos.
              </p>
              <p>
                My work spans deep learning computer vision (U-Net segmentation with 97% accuracy), multi-tenant SaaS
                ERP systems, production e-commerce platforms with Stripe, and AI-assisted FastAPI backends with LLM
                integration.
              </p>
              <p>
                I lead with <span style={{ color: "#c4b5fd" }}>AI, backend engineering, and SaaS product
                development</span> — and ship deployment-ready systems from database to UI.
              </p>
            </div>

            <div
              style={{
                marginTop: 32,
                padding: 24,
                borderRadius: 14,
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.15)",
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#8b5cf6",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href="mailto:mohammadafnanmirza@gmail.com"
                  style={{
                    color: "#a5a3c0",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#6366f1" }}>✉</span>
                  mohammadafnanmirza@gmail.com
                </a>
                <a
                  href="https://github.com/Hashredacted"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#a5a3c0",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#6366f1" }}>⌥</span>
                  github.com/Hashredacted
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 3,
                      height: 14,
                      borderRadius: 2,
                      background: group.color,
                      boxShadow: `0 0 8px ${group.color}60`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: group.color,
                    }}
                  >
                    {group.category}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
