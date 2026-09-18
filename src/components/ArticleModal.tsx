"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FeedItem } from "@/data/posts";
import { X, ExternalLink, Calendar, CheckCircle2, Quote } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ArticleModalProps {
  item: FeedItem | null;
  onClose: () => void;
}

export default function ArticleModal({ item, onClose }: ArticleModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Full viewport backdrop blurring navbar and page behind */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Card with crisp rounded-[32px] and strictly clipped internal scrollbar */}
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-[32px] border border-zinc-200/80 shadow-2xl shadow-black/20 z-10 flex flex-col max-h-[85vh] sm:max-h-[82vh] overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        {/* Pinned Modal Header (Never scrolls away) */}
        <div className="px-6 sm:px-8 pt-6 pb-4 shrink-0 flex items-center justify-between border-b border-zinc-100 bg-white/60 backdrop-blur-sm z-20">
          <div className="flex items-center gap-2 flex-wrap pr-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-100">
              {item.category}
            </span>
            {item.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-100">
                {item.badge}
              </span>
            )}
            <span className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
            {item.readingTime && (
              <span className="text-xs text-zinc-500 font-mono">· {item.readingTime}</span>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body with smooth custom internal scrollbar */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 custom-modal-scrollbar overscroll-contain flex-1">
          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mb-2">
            {item.title}
          </h3>
          <p className="text-base text-zinc-600 mb-6 font-normal leading-relaxed">
            {item.subtitle}
          </p>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed border-t border-zinc-100 pt-6">
            {item.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Optional Quote */}
          {item.quote && (
            <div className="my-6 p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
              <Quote className="w-6 h-6 text-blue-500 mb-2" />
              <p className="text-sm font-medium text-zinc-800 italic">{item.quote.text}</p>
              <span className="text-xs font-mono text-zinc-500 mt-2 block">
                — {item.quote.author}
              </span>
            </div>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div className="mt-6 pt-4 border-t border-zinc-100 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Key Highlights
              </div>
              {item.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Links & Tags */}
          <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all self-start sm:self-auto shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
