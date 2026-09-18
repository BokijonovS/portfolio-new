"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  baseAngle: number;
  baseRadius: number;
  phase: number;
  speed: number;
  length: number;
  width: number;
  isDot: boolean;
  color: string;
  alpha: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
}

// Color palette matching Google Antigravity's colorful radiating spectrum
const getAntigravityColor = (angle: number): { color: string; alpha: number } => {
  let a = (angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
  const deg = (a * 180) / Math.PI;

  const palette = [
    { start: 0, end: 55, colors: ["#3b82f6", "#2563eb", "#60a5fa", "#6366f1"] }, // Right: Blue / Indigo
    { start: 55, end: 115, colors: ["#f59e0b", "#fbbf24", "#eab308", "#d97706"] }, // Bottom-Right/Bottom: Amber / Gold / Warm Yellow
    { start: 115, end: 175, colors: ["#ea4335", "#f43f5e", "#fb7185", "#f97316"] }, // Bottom-Left: Google Red / Coral / Orange
    { start: 175, end: 235, colors: ["#ec4899", "#d946ef", "#c084fc", "#e879f9"] }, // Left: Pink / Magenta / Orchid
    { start: 235, end: 295, colors: ["#8b5cf6", "#7c3aed", "#9333ea", "#a855f7"] }, // Top-Left: Violet / Purple
    { start: 295, end: 360, colors: ["#0284c7", "#06b6d4", "#38bdf8", "#3b82f6"] }, // Top-Right: Cyan / Electric Sky
  ];

  const slot = palette.find((p) => deg >= p.start && deg < p.end) || palette[0];
  const color = slot.colors[Math.floor(Math.random() * slot.colors.length)];
  const alpha = 0.45 + Math.random() * 0.5; // Depth variance

  return { color, alpha };
};

export default function AntigravityParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
    };

    let particles: Particle[] = [];

    const initParticles = (w: number, h: number) => {
      particles = [];
      const centerX = w / 2;
      const centerY = h / 2;

      // Concentric rings spanning hero area
      const baseMinR = Math.max(130, Math.min(w, h) * 0.2);
      const baseMaxR = Math.max(420, Math.min(w * 0.52, h * 0.72));
      const rings = 15;

      for (let r = 0; r < rings; r++) {
        const normLayer = r / (rings - 1);
        const ringRadius = baseMinR + Math.pow(normLayer, 0.92) * (baseMaxR - baseMinR);
        const countInRing = Math.floor(20 + normLayer * 36);

        for (let i = 0; i < countInRing; i++) {
          const baseAngle =
            (i / countInRing) * Math.PI * 2 + (r % 2 === 0 ? 0 : Math.PI / countInRing);
          const angleJitter = (Math.random() - 0.5) * 0.14;
          const finalAngle = baseAngle + angleJitter;

          const radiusJitter = (Math.random() - 0.5) * 22;
          const finalRadius = ringRadius + radiusJitter;

          // 30% tiny round dots, 70% elongated capsule dashes
          const isDot = Math.random() < 0.28;
          const length = isDot
            ? 3.2
            : 6.5 + normLayer * 5.5 + Math.random() * 2.5; // 6.5px - 14.5px
          const pillWidth = isDot ? 3.0 : 2.6 + Math.random() * 0.6; // ~2.6 - 3.2px

          const { color, alpha } = getAntigravityColor(finalAngle);

          // Elliptical layout (1.18x wider horizontally for modern screen ratios)
          const initX = centerX + Math.cos(finalAngle) * finalRadius * 1.18;
          const initY = centerY + Math.sin(finalAngle) * finalRadius * 0.86;

          // Radial angle outward from center
          const radialAngle = Math.atan2(initY - centerY, initX - centerX);
          const orientation = radialAngle + (Math.random() - 0.5) * 0.22;

          particles.push({
            baseAngle: finalAngle,
            baseRadius: finalRadius,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.5,
            length,
            width: pillWidth,
            isDot,
            color,
            alpha,
            x: initX,
            y: initY,
            vx: 0,
            vy: 0,
            rotation: orientation,
          });
        }
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x += (-9999 - mouse.x) * 0.05;
        mouse.y += (-9999 - mouse.y) * 0.05;
      }

      const centerX = width / 2;
      const centerY = height / 2;

      // Subtle parallax tilt of whole constellation
      let parallaxX = 0;
      let parallaxY = 0;
      if (mouse.active) {
        parallaxX = ((mouse.x - centerX) / (width / 2)) * 16;
        parallaxY = ((mouse.y - centerY) / (height / 2)) * 12;
      }

      const tSec = time * 0.001;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Organic subtle breathing
        const breathe = Math.sin(tSec * p.speed + p.phase) * 6;
        const currentR = p.baseRadius + breathe;

        const restX = centerX + Math.cos(p.baseAngle) * currentR * 1.18 + parallaxX;
        const restY = centerY + Math.sin(p.baseAngle) * currentR * 0.86 + parallaxY;

        // 2. Interactive mouse fluid repulsion
        let targetX = restX;
        let targetY = restY;

        if (mouse.active) {
          const dx = restX - mouse.x;
          const dy = restY - mouse.y;
          const distSq = dx * dx + dy * dy;
          const interactionRadius = 170;

          if (distSq < interactionRadius * interactionRadius && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = Math.pow(1 - dist / interactionRadius, 1.7) * 58;
            const nx = dx / dist;
            const ny = dy / dist;

            targetX = restX + nx * force;
            targetY = restY + ny * force;
          }
        }

        // 3. Silky spring physics
        const spring = 0.14;
        const friction = 0.76;

        p.vx += (targetX - p.x) * spring;
        p.vy += (targetY - p.y) * spring;
        p.vx *= friction;
        p.vy *= friction;

        p.x += p.vx;
        p.y += p.vy;

        // Dynamic capsule orientation
        const angleToCenter = Math.atan2(p.y - centerY, p.x - centerX);
        const velocityTilt = Math.atan2(p.vy, p.vx) * 0.08;
        const currentAngle = angleToCenter + velocityTilt;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);

        if (p.isDot) {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.width / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.rotate(currentAngle);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.width;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(-p.length / 2, 0);
          ctx.lineTo(p.length / 2, 0);
          ctx.stroke();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full block transition-opacity duration-700"
      />
    </div>
  );
}
