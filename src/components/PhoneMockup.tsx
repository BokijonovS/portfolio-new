"use client";

import React, { useState } from "react";
import { Project, ProjectScreen } from "@/data/projects";
import {
  Wifi,
  Battery,
  Shield,
  Clock,
  Sparkles,
  ArrowUpRight,
  Database,
  Lock,
  Cpu,
  CheckCircle2,
  Train,
} from "lucide-react";

interface PhoneMockupProps {
  project: Project;
}

export default function PhoneMockup({ project }: PhoneMockupProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen: ProjectScreen = project.screens[activeScreenIndex] || project.screens[0];

  return (
    <div className="flex flex-col items-center">
      {/* Screen selector pills for the phone */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md max-w-full overflow-x-auto">
        {project.screens.map((screen, idx) => (
          <button
            key={screen.id}
            onClick={() => setActiveScreenIndex(idx)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              activeScreenIndex === idx
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>

      {/* iPhone Bezel Device Frame */}
      <div className="relative w-[300px] sm:w-[320px] h-[620px] sm:h-[640px] bg-[#0c0d12] rounded-[48px] p-3 border-[6px] border-[#22242c] iphone-frame select-none transition-all duration-300">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-28 h-6 bg-black rounded-full flex items-center justify-between px-2.5 transition-all hover:w-36">
          <div className="w-2.5 h-2.5 rounded-full bg-[#181920] border border-white/10" />
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono text-zinc-400">Sync</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-sky-500/80" />
        </div>

        {/* Screen Area */}
        <div className="relative w-full h-full bg-gradient-to-b from-[#111218] to-[#0a0a0f] rounded-[40px] overflow-hidden flex flex-col pt-8 pb-4 px-3.5 border border-white/5 text-white">
          {/* iOS Status Bar */}
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-400 px-3 pt-1 pb-2">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono tracking-tight text-zinc-400">Naples 5G</span>
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* App Header Bar inside screen */}
          <div className="mt-2 pb-2.5 border-b border-white/10 flex items-center justify-between px-1">
            <div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                {project.badge}
              </div>
              <h4 className="text-sm font-semibold text-white tracking-tight leading-none mt-0.5 truncate max-w-[190px]">
                {project.title}
              </h4>
            </div>
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-sky-400">
              <Sparkles className="w-3 h-3" />
            </span>
          </div>

          {/* Screen Content Body */}
          <div className="flex-1 overflow-y-auto py-3 space-y-3 pr-0.5 custom-scrollbar">
            {/* Screen Banner Card */}
            <div className="rounded-2xl p-3 bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1 font-mono">
                <span>VIEW: {activeScreen.label.toUpperCase()}</span>
                <span className="text-sky-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Active
                </span>
              </div>
              <h5 className="text-sm font-semibold text-zinc-100">{activeScreen.title}</h5>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{activeScreen.description}</p>
            </div>

            {/* Dynamic Interactive Visuals based on screen type */}
            {activeScreen.type === "dashboard" && (
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Train className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Line 1 · Piscinola</div>
                      <div className="text-[10px] text-emerald-400 font-mono">On Time · 4 min away</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300">
                    Track 2
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Funicolare Centrale</div>
                      <div className="text-[10px] text-amber-400 font-mono">+3 min delay · High Flow</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300">
                    Platform A
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[11px] text-sky-300 flex items-center justify-between">
                  <span>Backend Telemetry Sync</span>
                  <span className="font-mono text-[10px] text-sky-400">Cached (Redis)</span>
                </div>
              </div>
            )}

            {activeScreen.type === "analytics" && (
              <div className="space-y-2.5">
                <div className="rounded-xl p-3 bg-white/[0.03] border border-white/10">
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-mono">
                    <span>Punctuality Index</span>
                    <span className="text-emerald-400 font-bold">94.2%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full w-[94%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1 font-mono">
                    <span>Historical DB</span>
                    <span>PostgreSQL Query</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] text-zinc-400">Avg Commute</div>
                    <div className="text-base font-bold text-white mt-0.5">24 min</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] text-zinc-400">Latency</div>
                    <div className="text-base font-bold text-sky-400 mt-0.5 font-mono">38ms</div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen.type === "api" && (
              <div className="rounded-xl p-2.5 bg-[#07080c] border border-white/10 font-mono text-[10px] text-zinc-300 space-y-1">
                <div className="text-zinc-400 pb-1 border-b border-white/10 flex items-center justify-between">
                  <span className="text-sky-400 font-bold">GET /api/v1/telemetry/</span>
                  <span className="text-emerald-400">200 OK</span>
                </div>
                <div className="pt-1 text-zinc-400 leading-relaxed">
                  <span className="text-purple-400">&#123;</span>
                  <div className="pl-2">
                    <span className="text-sky-300">&quot;status&quot;</span>: <span className="text-emerald-300">&quot;synced&quot;</span>,
                  </div>
                  <div className="pl-2">
                    <span className="text-sky-300">&quot;cache_layer&quot;</span>: <span className="text-amber-300">&quot;hit&quot;</span>,
                  </div>
                  <div className="pl-2">
                    <span className="text-sky-300">&quot;framework&quot;</span>: <span className="text-emerald-300">&quot;Django REST&quot;</span>,
                  </div>
                  <div className="pl-2">
                    <span className="text-sky-300">&quot;security&quot;</span>: <span className="text-emerald-300">&quot;JWT-Bearer&quot;</span>
                  </div>
                  <span className="text-purple-400">&#125;</span>
                </div>
              </div>
            )}

            {activeScreen.type === "detail" && (
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">Biometric Vault</div>
                      <div className="text-[10px] text-emerald-300 font-mono">FaceID Authenticated</div>
                    </div>
                  </div>
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                  <div className="text-[10px] text-zinc-400 font-mono uppercase">Decrypted Secret</div>
                  <div className="font-mono text-zinc-200 mt-1 bg-black/40 px-2 py-1 rounded text-[11px] truncate">
                    pk_live_sec_7x992a0194...
                  </div>
                </div>
              </div>
            )}

            {activeScreen.type === "feed" && (
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="text-[10px] font-mono text-amber-400 uppercase">CBL Phase: Investigate</div>
                  <div className="text-xs font-medium text-white mt-0.5">Naples Transit User Interviews</div>
                  <div className="text-[11px] text-zinc-400 mt-1">14 commuter sessions recorded and tagged.</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Action Item</div>
                  <div className="text-xs font-medium text-white mt-0.5">Implement Swift Concurrency Feed</div>
                </div>
              </div>
            )}
          </div>

          {/* iOS Bottom Navigation Bar inside phone */}
          <div className="mt-auto pt-2 border-t border-white/10 flex items-center justify-around text-zinc-400">
            <div className="flex flex-col items-center gap-0.5 text-sky-400">
              <Cpu className="w-4 h-4" />
              <span className="text-[9px] font-medium">Core</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Database className="w-4 h-4" />
              <span className="text-[9px]">Data</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Shield className="w-4 h-4" />
              <span className="text-[9px]">Auth</span>
            </div>
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-2" />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
        <span>Click screen tabs above to inspect features</span>
        <ArrowUpRight className="w-3 h-3 text-sky-400" />
      </div>
    </div>
  );
}
