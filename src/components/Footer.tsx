"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Compass, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 px-4 bg-[#050608] relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
        {/* Left: Brand & positioning */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white font-medium">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>{siteConfig.name}</span>
          </div>
          <span className="hidden sm:inline text-zinc-400">·</span>
          <span>Apple Developer Academy · Naples</span>
        </div>

        {/* Center: Navigation quick links */}
        <div className="flex items-center gap-4 flex-wrap justify-center font-mono text-[11px]">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Copyright & locations */}
        <div className="text-center sm:text-right font-mono text-[11px] text-zinc-400">
          <div>Tashkent ⇄ Naples</div>
          <div className="mt-0.5 text-zinc-400">© {currentYear} Sanatbek Bokijonov</div>
        </div>
      </div>
    </footer>
  );
}
