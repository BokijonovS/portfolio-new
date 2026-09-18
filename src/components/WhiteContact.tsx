"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "./Icons";

export default function WhiteContact() {
  const [copied, setCopied] = useState(false);

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
    <section id="contact" className="relative py-24 px-4 max-w-4xl mx-auto text-center">
      <div className="liquid-card p-8 sm:p-14 border border-zinc-200/80 shadow-xl shadow-black/[0.02]">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
          Let’s Connect
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 mt-3 max-w-xl mx-auto leading-relaxed">
          Open to conversations about Apple Developer Academy projects, iOS applications, backend systems, or shared ideas.
        </p>

        {/* 1-Click Copy Email Card */}
        <div className="mt-8 p-2 rounded-2xl liquid-glass border border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-md mx-auto shadow-sm">
          <div className="flex items-center gap-3 px-3 py-1 text-left w-full sm:w-auto">
            <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase text-zinc-500">Email</div>
              <div className="text-xs sm:text-sm font-mono text-zinc-800 truncate">
                {siteConfig.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all active:scale-95 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send</span>
            </a>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 max-w-xl mx-auto">
          <a
            href="https://t.me/bokijonov_s"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/60 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-zinc-200/50 flex items-center justify-center text-blue-500">
                <TelegramIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-zinc-900">Telegram</div>
                <div className="text-[11px] font-mono text-zinc-500">@bokijonov_s</div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
          </a>

          <a
            href="https://github.com/BokijonovS"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/60 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-zinc-200/50 flex items-center justify-center text-zinc-800">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-zinc-900">GitHub</div>
                <div className="text-[11px] font-mono text-zinc-500">@BokijonovS</div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/bokijonovs/"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200/60 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-zinc-200/50 flex items-center justify-center text-blue-700">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-zinc-900">LinkedIn</div>
                <div className="text-[11px] font-mono text-zinc-500">bokijonovs</div>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
