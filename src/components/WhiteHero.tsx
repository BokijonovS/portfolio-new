"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowDown, Sparkles, Compass, Terminal, BookOpen, Quote } from "lucide-react";
import AntigravityHeroOriginal from "@/components/AntigravityHeroOriginal";

export default function WhiteHero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* Exact Original Google Antigravity Particle Simulation */}
      <AntigravityHeroOriginal />

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        {/* Main Name Headline - Wide & Expansive */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[7.5rem] font-bold tracking-tight text-zinc-950 leading-[1.01] mb-6">
          Sanatbek Bokijonov
        </h1>

        {/* Human, authentic description */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-zinc-600 tracking-tight leading-relaxed max-w-4xl mx-auto mb-10">
          App builder and developer with a backend foundation in Python & Django, currently in Naples exploring the Apple ecosystem and turning ideas into thoughtful software.
        </p>

        {/* Positive Quote Card (Wider to match Screenshot #2) */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto liquid-glass p-6 sm:p-8 rounded-3xl text-left border border-zinc-200/80 shadow-lg shadow-black/[0.02] mb-10 relative overflow-hidden group hover:border-zinc-300 transition-all">
          <div className="absolute top-3 right-4 text-zinc-200 pointer-events-none group-hover:text-blue-100 transition-colors">
            <Quote className="w-12 h-12" />
          </div>
          <p className="text-sm sm:text-base font-medium text-zinc-800 italic leading-relaxed relative z-10">
            &ldquo;Simplicity is about subtracting the obvious and adding the meaningful.&rdquo;
          </p>
          <div className="mt-3 text-xs font-mono text-zinc-500 flex items-center justify-between relative z-10">
            <span>John Maeda · The Laws of Simplicity</span>
            <span className="text-blue-600 flex items-center gap-1 font-sans font-medium">
              <Sparkles className="w-3 h-3" /> Core Design Philosophy
            </span>
          </div>
        </div>

        {/* Authentic Background Tags (Not salesy, just real context) */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto text-xs text-zinc-600">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/60 font-medium">
            <Compass className="w-3.5 h-3.5 text-blue-600" /> Naples, Italy & Tashkent
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/60 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Apple Developer Academy Student
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/60 font-medium">
            <Terminal className="w-3.5 h-3.5 text-zinc-700" /> Ex-Backend Developer @ BMGSoft
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/60 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Registan English Teacher · IELTS 7.0
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-1.5 text-xs text-zinc-600 font-mono">
          <span>Read the Story & Explore Updates</span>
          <Link
            href="#story"
            className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-600 transition-colors"
            aria-label="Scroll to story"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
