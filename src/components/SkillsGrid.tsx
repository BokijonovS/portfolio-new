"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import {
  Server,
  Smartphone,
  Terminal,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function SkillsGrid() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Server":
        return Server;
      case "Smartphone":
        return Smartphone;
      case "Terminal":
        return Terminal;
      case "Users":
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Technical Toolkit & Core Strengths</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Engineered for Full-Lifecycle Delivery
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2">
          From deep backend architecture and database tuning to native mobile interfaces, empathetic leadership, and international communication.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => {
          const Icon = getIcon(cat.iconName);
          return (
            <div
              key={cat.id}
              className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle category gradient spot */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${cat.accentColor} rounded-full blur-2xl pointer-events-none -mr-16 -mt-16 group-hover:scale-110 transition-transform`}
              />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {cat.skills.length} Capabilities
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        skill.featured
                          ? "bg-white/[0.07] border border-white/15 text-zinc-200 shadow-sm"
                          : "bg-white/[0.02] border border-white/5 text-zinc-400 hover:text-zinc-300"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3 h-3 ${
                          skill.featured ? "text-sky-400" : "text-zinc-400"
                        }`}
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom detail pill */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Verified in Production & Academy</span>
                <span className="text-sky-400/80">Active Expertise</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
