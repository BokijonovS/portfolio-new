"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import NaplesStatusCard from "./NaplesStatusCard";
import { ArrowRight, Smartphone, Terminal, Layers, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow w-[500px] h-[500px] bg-sky-600/10 -top-24 -left-24" />
      <div className="ambient-glow w-[400px] h-[400px] bg-amber-500/10 top-1/2 -right-24" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md mb-6 hover:border-white/20 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-zinc-200">Apple Developer Academy, Naples</span>
          <span className="text-zinc-400">·</span>
          <span className="text-sky-300/90 font-mono text-[11px]">Federico II Cohort</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          Sanatbek Bokijonov
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 tracking-tight leading-snug max-w-3xl mb-6">
          Apple Developer Academy student in Naples, building apps with a backend engineer’s mindset.
        </p>

        {/* Bio Paragraph */}
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-8">
          I’m a developer from Tashkent, Uzbekistan, starting my journey at Apple Developer Academy in Naples. My background is in backend development with Python, Django, APIs, and databases, and now I’m focused on turning that technical foundation into thoughtful apps and real products.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <Link
            href="#apps"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/10"
          >
            <Smartphone className="w-4 h-4 text-zinc-900" />
            <span>Explore Apps & Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-700 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#backend"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm transition-all active:scale-95"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>Backend Superpower</span>
          </Link>

          <Link
            href="#journey"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-medium text-sm transition-all active:scale-95"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Academy Dev Log</span>
          </Link>
        </div>

        {/* Naples Live Status & Chapter Card */}
        <NaplesStatusCard />

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <div className="rounded-xl glass-panel-subtle p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Focus</div>
            <div className="text-sm font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-sky-400" /> iOS & Apple Apps
            </div>
          </div>
          <div className="rounded-xl glass-panel-subtle p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Foundation</div>
            <div className="text-sm font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Python / Django / SQL
            </div>
          </div>
          <div className="rounded-xl glass-panel-subtle p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Experience</div>
            <div className="text-sm font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> BMGSoft Backend
            </div>
          </div>
          <div className="rounded-xl glass-panel-subtle p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Communication</div>
            <div className="text-sm font-semibold text-zinc-200 mt-1 flex items-center gap-1.5">
              <span className="text-amber-400 font-mono text-xs">IELTS 7.0</span> Registan English
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
