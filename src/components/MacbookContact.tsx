"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  Sparkles,
  Wifi,
  Battery,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon, AppleLogo } from "./Icons";

export default function MacbookContact() {
  const [copied, setCopied] = useState(false);
  const [naplesTime, setNaplesTime] = useState("");
  const containerRef = useRef<HTMLElement>(null);

  // Scroll-linked animation matching the Story section:
  // Glides up from the bottom and expands to full scale as the user scrolls into view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 25%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [160, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.85, 1]);

  // Live time for the macOS menu bar
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Rome",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setNaplesTime(formatter.format(new Date()));
      } catch {
        setNaplesTime("12:00 PM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center justify-center select-none"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="relative w-full max-w-[920px] flex flex-col items-center will-change-transform"
      >
        {/* =========================================================
            MacBook Display Lid (Static Open, Aluminum Enclosure)
           ========================================================= */}
        <div className="relative w-[88%] max-w-[800px] aspect-[16/10.4] rounded-t-[20px] rounded-b-[4px] bg-[#0c0d12] border-[3px] border-[#1e1f26] shadow-2xl z-20 outline outline-[1.5px] outline-[#c8cbd4] flex flex-col">
          {/* Outer Aluminum Beveled Rim for Hardware Display Thickness */}
          <div className="absolute inset-0 rounded-t-[18px] rounded-b-[2px] border border-white/15 pointer-events-none" />

          {/* Top Edge Metallic Specular Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

          {/* FaceTime Camera & Green Indicator LED */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none z-30">
            <div className="w-2 h-2 rounded-full bg-[#050508] border border-zinc-700/60 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-blue-950/80" />
            </div>
            {/* Apple Camera Active Green Indicator LED */}
            <div className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.9)] animate-pulse" />
          </div>

          {/* =========================================
              Retina Display Screen (Contained within bezel)
             ========================================= */}
          <div className="absolute inset-x-3 top-5 bottom-3 bg-[#fbfbfd] rounded-t-[12px] rounded-b-[2px] overflow-hidden flex flex-col border border-zinc-300 shadow-inner">
            {/* macOS Menu Bar */}
            <div className="h-7 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-3 sm:px-4 flex items-center justify-between text-[11px] text-zinc-600 font-sans z-10 shrink-0">
              {/* Window buttons & App title */}
              <div className="flex items-center gap-3 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/40 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/40 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/40 inline-block" />
                </div>
                <AppleLogo className="w-3.5 h-3.5 text-zinc-800 ml-1 shrink-0" />
                <span className="font-semibold text-zinc-900 hidden sm:inline">
                  Sanatbek Bokijonov
                </span>
                <span className="text-zinc-500 hidden md:inline">Connect</span>
                <span className="text-zinc-500 hidden md:inline">Academy</span>
              </div>

              {/* Right macOS Menu Items */}
              <div className="flex items-center gap-2.5 text-[10px] font-mono text-zinc-600">
                <span className="hidden sm:inline-flex items-center gap-1 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Naples Studio
                </span>
                <Wifi className="w-3 h-3 text-zinc-600" />
                <Battery className="w-3 h-3 text-zinc-600" />
                <span>{naplesTime || "CET"}</span>
              </div>
            </div>

            {/* Screen Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-7 flex flex-col justify-center items-center text-center select-text relative z-10">
              {/* Get in Touch Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Get in Touch</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                Let’s Connect
              </h2>

              <p className="text-xs sm:text-sm text-zinc-600 mt-2 max-w-md mx-auto leading-relaxed">
                Open to conversations about Apple Developer Academy projects, iOS applications, backend systems, or shared ideas.
              </p>

              {/* 1-Click Copy Email Card */}
              <div className="mt-5 p-1.5 sm:p-2 rounded-2xl bg-white/95 border border-zinc-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-2.5 w-full max-w-md mx-auto">
                <div className="flex items-center gap-2.5 px-3 py-1 text-left w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono uppercase text-zinc-500">
                      Direct Email
                    </div>
                    <div className="text-xs font-mono text-zinc-800 truncate">
                      {siteConfig.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto">
                  <button
                    onClick={handleCopy}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium transition-all active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold text-[11px]">
                          Copied
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-xl bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all active:scale-95 shadow-sm"
                  >
                    <Send className="w-3 h-3" />
                    <span className="text-[11px]">Send</span>
                  </a>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-4 w-full max-w-lg mx-auto">
                <a
                  href="https://t.me/bokijonov_s"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
                      <TelegramIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-900">Telegram</div>
                      <div className="text-[10px] font-mono text-zinc-600">
                        @bokijonov_s
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-700 transition-colors" />
                </a>

                <a
                  href="https://github.com/BokijonovS"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-800">
                      <GithubIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-900">GitHub</div>
                      <div className="text-[10px] font-mono text-zinc-600">
                        @BokijonovS
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-700 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/bokijonovs/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-900">LinkedIn</div>
                      <div className="text-[10px] font-mono text-zinc-600 truncate max-w-[85px]">
                        bokijonovs
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-700 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            MacBook Aluminum Base Chassis (Wider Unibody Bottom)
           ========================================================= */}
        <div className="relative w-full max-w-[920px] z-30 -mt-1">
          {/* Front Lip of Base: Sleek aluminum unibody with thumb groove */}
          <div className="relative h-[16px] sm:h-[19px] bg-gradient-to-b from-[#f0f1f6] via-[#dfe2ea] to-[#c7cad3] rounded-b-[12px] rounded-t-[2px] border border-zinc-300/80 shadow-md flex items-center justify-center">
            {/* Apple Display Thumb Scoop / Notch */}
            <div className="w-24 sm:w-32 h-[4px] bg-[#9fa2ab] rounded-b-sm shadow-inner" />
          </div>

          {/* Bottom Surface & Flush Rubber Feet */}
          <div className="relative w-full">
            <div className="flex justify-between px-12 sm:px-16 -mt-[0.5px]">
              <div className="w-12 sm:w-16 h-[2.5px] bg-[#1f2025] rounded-b-[2px] opacity-85 shadow-sm" />
              <div className="w-12 sm:w-16 h-[2.5px] bg-[#1f2025] rounded-b-[2px] opacity-85 shadow-sm" />
            </div>

            {/* Ambient Desk Drop Shadow */}
            <div className="w-[92%] h-[20px] mx-auto -mt-1 bg-black/15 blur-lg rounded-full pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
