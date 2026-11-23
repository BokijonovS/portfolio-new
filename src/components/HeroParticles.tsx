"use client";

import React, { useEffect, useRef } from "react";

interface Dot {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
}

const SPACING = 34; // average px between dots
const POINTER_RADIUS = 150; // px around the pointer that pushes dots away

// Decorative field of drifting dots that part around the pointer.
export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    const pointer = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let gy = SPACING / 2; gy < height; gy += SPACING) {
        for (let gx = SPACING / 2; gx < width; gx += SPACING) {
          const x = gx + (Math.random() - 0.5) * SPACING;
          const y = gy + (Math.random() - 0.5) * SPACING;
          dots.push({
            homeX: x,
            homeY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size: 0.6 + Math.random() * 1.1,
            alpha: 0.12 + Math.random() * 0.3,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#18181b";
      const t = time * 0.0006;

      for (const d of dots) {
        if (!reducedMotion) {
          // Gentle drift around the home position
          const targetX = d.homeX + Math.cos(t + d.phase) * 6;
          const targetY = d.homeY + Math.sin(t * 1.3 + d.phase) * 6;
          d.vx += (targetX - d.x) * 0.02;
          d.vy += (targetY - d.y) * 0.02;

          // Push away from the pointer
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_RADIUS && dist > 0.01) {
            const force = (1 - dist / POINTER_RADIUS) * 1.4;
            d.vx += (dx / dist) * force;
            d.vy += (dy / dist) * force;
          }

          d.vx *= 0.88;
          d.vy *= 0.88;
          d.x += d.vx;
          d.y += d.vy;
        }

        ctx.globalAlpha = d.alpha;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onResize = () => {
      build();
      if (reducedMotion) draw(0);
    };

    build();
    frame = requestAnimationFrame(draw);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
