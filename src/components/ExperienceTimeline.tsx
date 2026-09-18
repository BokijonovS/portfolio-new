"use client";

import React, { useState } from "react";
import { experiences, educationItems } from "@/data/experience";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  Award,
  BookOpen,
} from "lucide-react";

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="background" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Proven Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background & Academic Milestones
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            A clear timeline demonstrating technical leadership, previous engineering at BMGSoft, pedagogical mentorship, and the Apple Developer Academy chapter.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-2xl glass-panel-subtle">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "experience"
                ? "bg-white text-black font-semibold shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience & Academy</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === "education"
                ? "bg-white text-black font-semibold shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education & Training</span>
          </button>
        </div>
      </div>

      {/* Timeline List */}
      <div className="space-y-6">
        {activeTab === "experience" && (
          <div className="space-y-6">
            {experiences.map((item) => {
              const isCurrent = item.type === "current";
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl glass-panel p-6 sm:p-8 border transition-all ${
                    isCurrent
                      ? "border-amber-400/30 bg-amber-500/[0.02] shadow-xl shadow-amber-500/5"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full ${
                            isCurrent
                              ? "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                              : "bg-white/5 text-zinc-400 border border-white/10"
                          }`}
                        >
                          {item.period}
                        </span>
                        {item.badge && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-zinc-300 mt-0.5 flex items-center gap-2">
                        <span>{item.organization}</span>
                        <span className="text-zinc-400">·</span>
                        <span className="text-zinc-400 flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3 text-zinc-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {isCurrent && (
                      <div className="self-start sm:self-center px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Current Chapter</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="mt-4 space-y-2">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech / Focus Strip */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.techOrFocus.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-zinc-400 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "education" && (
          <div className="space-y-6">
            {educationItems.map((item) => {
              const isCurrent = item.type === "current";
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl glass-panel p-6 sm:p-8 border transition-all ${
                    isCurrent
                      ? "border-sky-400/30 bg-sky-500/[0.02] shadow-xl shadow-sky-500/5"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full ${
                            isCurrent
                              ? "bg-sky-400/10 text-sky-300 border border-sky-400/30"
                              : "bg-white/5 text-zinc-400 border border-white/10"
                          }`}
                        >
                          {item.period}
                        </span>
                        {item.badge && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-zinc-300 mt-0.5 flex items-center gap-2">
                        <span>{item.organization}</span>
                        <span className="text-zinc-400">·</span>
                        <span className="text-zinc-400 flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3 text-zinc-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.techOrFocus.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-zinc-400 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
