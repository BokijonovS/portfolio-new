"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin, Award, Compass, Sparkles } from "lucide-react";

export default function NaplesStatusCard() {
  const [naplesTime, setNaplesTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Rome",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setNaplesTime(formatter.format(new Date()));
      } catch {
        setNaplesTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl glass-panel p-5 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:bg-amber-500/15 transition-all" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Academy & Location info */}
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/5">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400/90 font-medium">
                Current Station
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Academy Cohort
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight mt-0.5 flex items-center gap-2">
              Apple Developer Academy in Naples
            </h3>
            <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span>Università degli Studi di Napoli Federico II · Italy</span>
            </p>
          </div>
        </div>

        {/* Right Side: Academy badge & Live Clock */}
        <div className="flex items-center gap-3 self-start md:self-auto flex-wrap sm:flex-nowrap">
          {/* Academy Cohort Badge */}
          <div className="px-3 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/25 flex items-center gap-2.5">
            <Award className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">Enrolled</div>
              <div className="text-xs font-semibold text-blue-300 whitespace-nowrap">Apple Developer Academy</div>
            </div>
          </div>

          {/* Live Naples Time */}
          <div className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-sky-400 shrink-0" />
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">Naples (CET)</div>
              <div className="text-xs font-mono font-medium text-sky-300 min-w-[76px]">
                {mounted ? naplesTime || "--:--:--" : "--:--:--"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtext bar */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400/80" />
          <span>Origin: Tashkent, Uzbekistan → Relocated for intensive iOS app engineering & design.</span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[11px] text-zinc-400">Challenge-Based Learning</span>
      </div>
    </div>
  );
}
