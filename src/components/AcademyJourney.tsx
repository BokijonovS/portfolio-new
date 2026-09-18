"use client";

import React, { useState } from "react";
import { journeyLogs, JourneyLog } from "@/data/journey";
import {
  Compass,
  Calendar,
  MapPin,
  Sparkles,
  Tag,
  CheckCircle,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function AcademyJourney() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Academy Milestone", "App Drop", "Engineering Insight", "Relocation"];

  const filteredLogs =
    selectedFilter === "All"
      ? journeyLogs
      : journeyLogs.filter((log) => log.category === selectedFilter);

  return (
    <section id="journey" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-96 h-96 bg-amber-500/10 top-1/4 right-0" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Naples Chapter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academy Journey & Build Logs
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Live documentation of my transition from Tashkent to the Apple Developer Academy in Naples, shipping apps, and exploring Apple ecosystems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl glass-panel-subtle overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                selectedFilter === cat
                  ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-400/20"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {filteredLogs.map((log) => {
          const isMilestone = log.category === "Academy Milestone";
          return (
            <div key={log.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                  isMilestone
                    ? "bg-amber-400 border-amber-300 shadow-lg shadow-amber-400/40"
                    : "bg-[#0e1017] border-sky-400"
                }`}
              />

              {/* Card Container */}
              <div className="rounded-2xl glass-panel p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all">
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full ${
                        isMilestone
                          ? "bg-amber-400/10 text-amber-300 border border-amber-400/20"
                          : "bg-sky-400/10 text-sky-300 border border-sky-400/20"
                      }`}
                    >
                      {log.category}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <span>{log.location}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {log.status && (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1 ${
                          log.status === "Live"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : log.status === "In Progress"
                            ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                            : "bg-white/5 text-zinc-400"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {log.status}
                      </span>
                    )}
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      {log.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {log.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  {log.summary}
                </p>

                {/* Key Takeaways */}
                {log.takeaways && log.takeaways.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                    {log.takeaways.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-zinc-300"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags Strip */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  <Tag className="w-3 h-3 text-zinc-400 mr-1" />
                  {log.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
