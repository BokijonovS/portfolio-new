"use client";

import React, { useEffect, useRef } from "react";

export default function AntigravityHeroOriginal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let isCancelled = false;

    const loadParticles = async () => {
      try {
        if (!containerRef.current) return;
        
        // Dynamically import the exact Google Antigravity simulation module in browser
        // Using dynamic native import to bypass bundler SSR
        const mod = await (0, eval)("import('/antigravity/MainParticles.js')");
        
        if (isCancelled || !containerRef.current) return;

        cleanup = mod.startMainParticles(containerRef.current, {
          theme: "light",
          ringWidth: 0.006,
          ringWidth2: 0.107,
          ringDisplacement: 0.62,
          density: 230,
          particlesScale: 0.59,
          transparent: true,
        });
      } catch (err) {
        console.error("Failed to initialize original Google Antigravity particles:", err);
      }
    };

    loadParticles();

    return () => {
      isCancelled = true;
      if (cleanup) {
        try {
          cleanup();
        } catch (e) {
          console.error(e);
        }
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      <div
        ref={containerRef}
        className="w-full h-full relative [&>canvas]:absolute [&>canvas]:inset-0 [&>canvas]:w-full [&>canvas]:h-full [&>canvas]:pointer-events-none"
      />
    </div>
  );
}
