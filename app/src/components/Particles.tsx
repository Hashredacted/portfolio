"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1];
}

export default function Particles({
  particleCount = 300,
  particleSpread = 10,
  speed = 0.1,
  particleColors = ["#6366f1", "#8b5cf6", "#a855f7", "#c084fc"],
  moveParticlesOnHover = true,
  particleHoverFactor = 0.5,
  alphaParticles = true,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Particle system using canvas 2D (no WebGL needed)
    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      rx: number;
      ry: number;
      rz: number;
      rw: number;
      size: number;
      color: [number, number, number];
    }

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorHex = particleColors[Math.floor(Math.random() * particleColors.length)];
      const color = hexToRgb(colorHex);
      const rx = Math.random();
      const ry = Math.random();
      const rz = Math.random();
      const rw = Math.random();
      particles.push({
        x: (Math.random() - 0.5) * particleSpread,
        y: (Math.random() - 0.5) * particleSpread,
        z: (Math.random() - 0.5) * particleSpread * 10,
        vx: 0,
        vy: 0,
        vz: 0,
        rx,
        ry,
        rz,
        rw,
        size: particleBaseSize * (1 + sizeRandomness * (rx - 0.5)),
        color,
      });
    }

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: -((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };
    if (moveParticlesOnHover) window.addEventListener("mousemove", onMouseMove);

    let t = 0;
    const render = () => {
      t += speed * 0.016;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const fov = cameraDistance;
      const cx = w / 2;
      const cy = h / 2;

      for (const p of particles) {
        // Animate position
        const ox = Math.sin(t * p.rz + 6.28 * p.rw) * 1.5 * p.rx;
        const oy = Math.sin(t * p.ry + 6.28 * p.rx) * 1.5 * p.rw;
        const oz = Math.sin(t * p.rw + 6.28 * p.ry) * 1.5 * p.rz;

        let px = p.x + ox;
        let py = p.y + oy;
        const pz = p.z + oz;

        if (moveParticlesOnHover) {
          px += mouseRef.current.x * particleHoverFactor;
          py += mouseRef.current.y * particleHoverFactor;
        }

        // Perspective projection
        const depth = pz + fov;
        if (depth <= 0) continue;
        const scale = fov / depth;
        const sx = cx + px * scale * (w / particleSpread);
        const sy = cy - py * scale * (h / particleSpread);
        const pointSize = (p.size / 100) * scale * 3;

        if (pointSize < 0.3) continue;

        const [r, g, b] = p.color;
        const shimmer = 0.2 * Math.sin(t * p.ry * 6 + p.rw * 6.28);
        const cr = Math.min(1, r + shimmer);
        const cg = Math.min(1, g + shimmer);
        const cb = Math.min(1, b + shimmer);

        ctx.beginPath();
        ctx.arc(sx, sy, pointSize, 0, Math.PI * 2);

        if (alphaParticles) {
          const alpha = 0.6 * scale;
          ctx.fillStyle = `rgba(${Math.round(cr * 255)},${Math.round(cg * 255)},${Math.round(cb * 255)},${alpha})`;
        } else {
          ctx.fillStyle = `rgb(${Math.round(cr * 255)},${Math.round(cg * 255)},${Math.round(cb * 255)})`;
        }
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      if (moveParticlesOnHover) window.removeEventListener("mousemove", onMouseMove);
    };
  }, [particleCount, particleSpread, speed, particleColors, moveParticlesOnHover, particleHoverFactor, alphaParticles, particleBaseSize, sizeRandomness, cameraDistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
