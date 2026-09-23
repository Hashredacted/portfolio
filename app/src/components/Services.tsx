"use client";

import { motion } from "framer-motion";
import { Brain, Eye, Server, Globe, Building2, Bot } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Agentic Automation",
    description:
      "LLM integrations, agentic AI systems, and automated workflows using Gemini, OpenAI, and custom model pipelines.",
    tags: ["LLM", "Gemini API", "Agentic AI", "FastAPI"],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Custom CV solutions — image segmentation, classification, object detection, and model inference APIs for real-world data.",
    tags: ["TensorFlow", "U-Net", "OpenCV", "Keras"],
  },
  {
    icon: Server,
    title: "Backend APIs",
    description:
      "Robust REST APIs with authentication, RBAC, security middleware, validation, and production-ready deployment.",
    tags: ["Node.js", "FastAPI", "Express", "MongoDB"],
  },
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web applications from database to UI — built with modern frameworks and production-grade engineering.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: Building2,
    title: "SaaS / ERP Systems",
    description:
      "Multi-tenant SaaS platforms, ERP systems, admin dashboards, inventory, invoicing, and complex business workflows.",
    tags: ["Multi-tenancy", "RBAC", "SaaS", "ERP"],
  },
  {
    icon: Bot,
    title: "AI-Powered Business Tools",
    description:
      "Custom AI-enabled applications — symptom checkers, recommendation systems, data analyzers, and intelligent backends.",
    tags: ["AI Integration", "Python", "MongoDB", "Automation"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
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
            What I Build
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
            Services
          </h2>
          <p style={{ fontSize: 16, color: "#6b6987", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Specialized in AI + backend + full-stack product development — not a generalist, not a template shop.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-glass"
                style={{
                  borderRadius: 16,
                  padding: 28,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top glow accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon size={20} color="#8b5cf6" strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#f1f0ff",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "#6b6987",
                    lineHeight: 1.7,
                    marginBottom: 18,
                  }}
                >
                  {service.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: 11 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
