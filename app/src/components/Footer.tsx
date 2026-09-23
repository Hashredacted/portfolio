"use client";

import { GitBranch, Mail, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(99,102,241,0.1)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={14} color="white" strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#f1f0ff" }}>
            Mohammad Afnan Mirza
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a
            href="mailto:mohammadafnanmirza@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#6b6987",
              textDecoration: "none",
              fontSize: 13,
              transition: "color 0.2s",
            }}
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Hashredacted"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#6b6987",
              textDecoration: "none",
              fontSize: 13,
              transition: "color 0.2s",
            }}
          >
            <GitBranch size={14} />
            <span>GitHub</span>
          </a>
        </div>

        <p style={{ fontSize: 12, color: "#6b6987" }}>
          © {new Date().getFullYear()} Mohammad Afnan Mirza — AI & Full-Stack Developer
        </p>
      </div>
    </footer>
  );
}
