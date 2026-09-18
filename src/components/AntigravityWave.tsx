"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Code2,
  CheckCircle2,
  RotateCw,
  Box,
  GitCommit,
  GitFork,
  Tv,
  Folder,
  LayoutGrid,
  Terminal,
  Wand2,
  ArrowUp,
  ArrowRightToLine,
} from "lucide-react";

// 14 signature toolchain icons from Google Antigravity
const baseIcons = [
  { id: "sparkles", icon: Sparkles },
  { id: "code", icon: Code2 },
  { id: "verified", icon: CheckCircle2 },
  { id: "loop", icon: RotateCw },
  { id: "box", icon: Box },
  { id: "commit", icon: GitCommit },
  { id: "branch", icon: GitFork },
  { id: "screen", icon: Tv },
  { id: "folder", icon: Folder },
  { id: "grid", icon: LayoutGrid },
  { id: "terminal", icon: Terminal },
  { id: "wand", icon: Wand2 },
  { id: "liftoff", icon: ArrowUp },
  { id: "pipeline", icon: ArrowRightToLine },
];

// Replicate 3 times (42 icons total) to guarantee seamless, continuous edge-to-edge coverage during scroll
const fullWaveIcons = [
  ...baseIcons.map((item, i) => ({ ...item, uniqueKey: `a-${i}` })),
  ...baseIcons.map((item, i) => ({ ...item, uniqueKey: `b-${i}` })),
  ...baseIcons.map((item, i) => ({ ...item, uniqueKey: `c-${i}` })),
];

export default function AntigravityWave() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 1. Gentle, slow horizontal scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calm and subtle horizontal translation across scroll
  const x = useTransform(scrollYProgress, [0, 1], [60, -100]);

  // 2. Continuous slow vertical sine-wave flow (matching antigravity.google bouncers)
  // Applied directly via requestAnimationFrame on client mount to guarantee 0 hydration errors and 120fps fluid motion
  useEffect(() => {
    let animId: number;
    const total = fullWaveIcons.length;
    const amplitude = 22; // Natural sinusoidal wave amplitude in px
    const speed = 0.00075; // Calm, steady continuous flow

    const animate = (time: number) => {
      const phase = time * speed;
      for (let i = 0; i < itemsRef.current.length; i++) {
        const el = itemsRef.current[i];
        if (el) {
          const normalized = i / (total - 1);
          const y = Math.sin(normalized * Math.PI * 2 * 4.5 + phase) * amplitude;
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      ref={containerRef}
      aria-hidden="true"
      className="relative w-full overflow-hidden select-none pointer-events-none !mt-0 !mb-0"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[85%] h-[80px] bg-gradient-to-r from-blue-500/4 via-indigo-500/4 to-cyan-500/4 blur-3xl rounded-full" />
      </div>

      {/* Edge-to-edge scroll-driven undulating ribbon */}
      <div className="relative w-full flex items-center justify-center">
        <motion.div
          style={{ x }}
          className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 py-10 sm:py-12 shrink-0 will-change-transform transform-gpu"
        >
          {fullWaveIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.uniqueKey}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="relative flex flex-col items-center shrink-0 will-change-transform"
              >
                {/* Pure Decorative Floating Circular Bubble */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/90 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center text-zinc-700">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 stroke-[1.6]" />

                  {/* Subtle top specular glass highlight */}
                  <div className="absolute inset-x-2 top-1 h-1/3 rounded-t-full bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
