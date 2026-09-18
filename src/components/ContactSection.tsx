"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Github":
        return GithubIcon;
      case "Linkedin":
        return LinkedinIcon;
      case "Send":
        return TelegramIcon;
      default:
        return ExternalLink;
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 max-w-5xl mx-auto">
      {/* Background Glow */}
      <div className="ambient-glow w-96 h-96 bg-sky-500/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 shadow-2xl relative z-10 overflow-hidden">
        {/* Subtle accent border at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Connect & Collaborate</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Let’s Build Something Thoughtful.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            Whether you want to discuss Apple Developer Academy projects, explore an iOS app idea, or chat about backend systems and APIs—I’m always glad to connect.
          </p>

          {/* 1-Click Email Copy Action Box */}
          <div className="mt-8 p-2 rounded-2xl glass-panel-subtle border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-lg mx-auto">
            <div className="flex items-center gap-3 px-3 py-1 text-left w-full sm:w-auto">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-sky-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-zinc-400">Direct Email</div>
                <div className="text-xs sm:text-sm font-mono text-zinc-200 truncate">
                  {siteConfig.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-all active:scale-95 border border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
              >
                <Send className="w-3.5 h-3.5 text-zinc-900" />
                <span>Compose</span>
              </a>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            {siteConfig.socials.map((social) => {
              const Icon = getSocialIcon(social.iconName);
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl glass-panel-subtle border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">{social.name}</div>
                      <div className="text-[11px] font-mono text-zinc-400">{social.handle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Location status footer */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-zinc-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Currently based in Naples, Italy · Apple Developer Academy Cohort</span>
          </div>
        </div>
      </div>
    </section>
  );
}
