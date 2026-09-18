"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function WhiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 py-12 px-4 bg-[#fbfbfd] relative z-10 text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
          <span className="font-semibold text-zinc-900">{siteConfig.name}</span>
          <span className="hidden sm:inline text-zinc-300">·</span>
          <span>Apple Developer Academy · Naples</span>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center gap-4 flex-wrap justify-center font-mono text-[11px]">
          <Link href="#top" className="hover:text-zinc-900 transition-colors">
            Top
          </Link>
          <Link href="#story" className="hover:text-zinc-900 transition-colors">
            Story
          </Link>
          <Link href="#feed" className="hover:text-zinc-900 transition-colors">
            Feed & Work
          </Link>
          <Link href="#skills" className="hover:text-zinc-900 transition-colors">
            Skills
          </Link>
          <Link href="#certificates" className="hover:text-zinc-900 transition-colors">
            Certificates
          </Link>
          <Link href="#contact" className="hover:text-zinc-900 transition-colors">
            Connect
          </Link>
        </div>

        {/* Right: Copyright */}
        <div className="text-center sm:text-right font-mono text-[11px] text-zinc-600">
          <div>Tashkent ⇄ Naples</div>
          <div className="mt-0.5 text-zinc-600">© {currentYear} Sanatbek Bokijonov</div>
        </div>
      </div>
    </footer>
  );
}
