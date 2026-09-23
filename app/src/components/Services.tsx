"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Eye, Server, Globe, Building2, Bot, Sparkles, LayoutGrid } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import BounceCards from "./BounceCards";
import DecryptedText from "./DecryptedText";

const serviceImages = [
  "/services/ai-automation.jpg",
  "/services/computer-vision.jpg",
  "/services/backend-api.jpg",
  "/services/fullstack-web.jpg",
  "/services/saas-erp.jpg",
  "/services/ai-tools.jpg",
];

const serviceCaptions = [
  "AI & Automation",
  "Computer Vision",
  "Backend APIs",
  "Full-Stack Web",
  "SaaS & ERP",
  "AI Business Tools",
];

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
  const [viewMode, setViewMode] = useState<"cards" | "grid">("cards");

  return (
    <section
      id="services"
      style={{ padding: "100px 24px", position: "relative" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
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
            <DecryptedText
              text="Services"
              animateOn="view"
              speed={20}
              maxIterations={2}
              sequential
              revealDirection="start"
              className="gradient-text-white"
            />
          </h2>
          <p style={{ fontSize: 16, color: "#6b6987", maxWidth: 500, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Specialized in AI + backend + full-stack product development — not a generalist, not a template shop.
          </p>

          {/* View mode toggle pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: 4,
              background: "rgba(15, 15, 26, 0.8)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              borderRadius: 12,
              backdropFilter: "blur(12px)",
            }}
          >
            <button
              onClick={() => setViewMode("cards")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: viewMode === "cards" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
                color: viewMode === "cards" ? "#ffffff" : "#8b89a8",
                transition: "all 0.2s ease",
              }}
            >
              <Sparkles size={15} />
              Interactive Cards
            </button>
            <button
              onClick={() => setViewMode("grid")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: viewMode === "grid" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
                color: viewMode === "grid" ? "#ffffff" : "#8b89a8",
                transition: "all 0.2s ease",
              }}
            >
              <LayoutGrid size={15} />
              Services Grid
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Interactive BounceCards Showcase */}
        {viewMode === "cards" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 460,
              padding: "50px 20px 40px",
              position: "relative",
              borderRadius: 24,
              background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, rgba(10,10,18,0.5) 70%, transparent 100%)",
              border: "1px solid rgba(99,102,241,0.18)",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(99,102,241,0.1)",
              overflow: "hidden",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 700,
                height: 310,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <BounceCards
                className="services-bounce-cards"
                images={serviceImages}
                captions={serviceCaptions}
                containerWidth={620}
                containerHeight={280}
                animationDelay={0.2}
                animationStagger={0.06}
                easeType="elastic.out(1, 0.6)"
                transformStyles={[
                  "rotate(15deg) translate(-215px)",
                  "rotate(9deg) translate(-130px)",
                  "rotate(3deg) translate(-44px)",
                  "rotate(-3deg) translate(44px)",
                  "rotate(-9deg) translate(130px)",
                  "rotate(-15deg) translate(215px)",
                ]}
                enableHover={true}
              />
            </div>

            <p
              style={{
                fontSize: 13,
                color: "#a5a3c0",
                marginTop: 32,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(99,102,241,0.1)",
                padding: "8px 18px",
                borderRadius: 9999,
                border: "1px solid rgba(99,102,241,0.22)",
              }}
            >
              <Sparkles size={14} color="#8b5cf6" />
              Hover over any card to fan out &amp; inspect capability domains
            </p>
          </motion.div>
        ) : (
          /* Tab 2: Detailed SpotlightCard Grid */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
              marginBottom: 40,
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
                >
                  <SpotlightCard
                    spotlightColor="rgba(139, 92, 246, 0.18)"
                    style={{ padding: 28 }}
                  >
                    {/* Top glow accent */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)",
                        zIndex: 2,
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

                    <p style={{ fontSize: 14, color: "#6b6987", lineHeight: 1.7, marginBottom: 18 }}>
                      {service.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {service.tags.map((tag) => (
                        <span key={tag} className="tag" style={{ fontSize: 11 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
