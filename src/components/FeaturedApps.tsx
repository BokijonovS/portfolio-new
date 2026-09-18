"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import PhoneMockup from "./PhoneMockup";
import { GithubIcon } from "./Icons";
import {
  Smartphone,
  Layers,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  ExternalLink,
  Lock,
} from "lucide-react";

export default function FeaturedApps() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);

  const currentProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section id="apps" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>App & Product Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Apps Built with Architectural Rigor
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Mobile applications designed at the Apple Developer Academy, combining native iOS interfaces with rock-solid Python and Django backend foundations.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-panel-subtle overflow-x-auto">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                currentProject.id === proj.id
                  ? "bg-white text-black font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{proj.title.split(" ")[0]}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                currentProject.id === proj.id ? "bg-black/10 text-zinc-800" : "bg-white/10 text-zinc-400"
              }`}>
                {proj.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Showcase Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl glass-panel p-6 sm:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
        {/* Background Ambient Glow */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${currentProject.accentGradient} rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 transition-all duration-700`}
        />

        {/* Left Column: Project Narrative, Architecture & Tech Stack */}
        <div className="lg:col-span-7 space-y-6 relative z-10">
          {/* Header Badges */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/10 text-white border border-white/15">
              {currentProject.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20">
              {currentProject.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20">
              {currentProject.badge}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {currentProject.title}
            </h3>
            <p className="text-base text-zinc-300 font-medium mt-1">
              {currentProject.subtitle}
            </p>
          </div>

          {/* Detailed Description */}
          <p className="text-sm text-zinc-400 leading-relaxed">
            {currentProject.description}
          </p>

          {/* The Backend Superpower Box */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
              <Cpu className="w-4 h-4" />
              <span>Full-Stack Architecture & Data Flow</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {currentProject.architectureSummary}
            </p>

            {/* Stack Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs">
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase flex items-center gap-1 mb-1.5">
                  <Smartphone className="w-3 h-3 text-sky-400" /> Client Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.frontendStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase flex items-center gap-1 mb-1.5">
                  <Database className="w-3 h-3 text-indigo-400" /> Backend Engine
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.backendStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Key Engineering Highlights
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentProject.keyHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-zinc-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex items-center gap-3 pt-3 flex-wrap">
            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            )}

            {/* TestFlight Button Slot */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 text-xs font-medium cursor-not-allowed">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>TestFlight (Academy Testing Soon)</span>
            </div>

            {/* App Store Button Slot */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-400 text-xs font-medium cursor-not-allowed">
              <Lock className="w-3.5 h-3.5 text-zinc-400" />
              <span>App Store Release Slot</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive iPhone Mockup */}
        <div className="lg:col-span-5 flex justify-center relative z-10 py-4">
          <PhoneMockup project={currentProject} />
        </div>
      </div>
    </section>
  );
}
