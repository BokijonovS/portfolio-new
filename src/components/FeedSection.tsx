"use client";

import React, { useState } from "react";
import { feedItems, FeedItem, PostType } from "@/data/posts";
import ArticleModal from "./ArticleModal";
import {
  Smartphone,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function FeedSection() {
  const [activeTab, setActiveTab] = useState<"all" | PostType>("all");
  const [selectedItem, setSelectedItem] = useState<FeedItem | null>(null);

  const allTabs: { id: "all" | PostType; label: string; icon: React.ElementType }[] = [
    { id: "all", label: "All Updates", icon: Layers },
    { id: "project", label: "Apps & Projects", icon: Smartphone },
    { id: "article", label: "Articles & Notes", icon: BookOpen },
    { id: "event", label: "Events & Milestones", icon: Calendar },
  ];

  const availableTypes = new Set(feedItems.map((item) => item.type));
  const tabs = allTabs.filter(
    (tab) => tab.id === "all" || availableTypes.has(tab.id as PostType)
  );

  const filteredItems =
    activeTab === "all"
      ? feedItems
      : feedItems.filter((item) => item.type === activeTab);

  return (
    <section id="feed" className="relative pt-20 pb-0 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Journal & Public Releases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Articles & Academy Updates
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl">
            A live feed of technical write-ups, essays, and milestones from my journey at the Apple Developer Academy.
          </p>
        </div>

        {/* Tab Controls (Apple Liquid Glass pill style) */}
        <div className="flex items-center gap-1 p-1 rounded-full liquid-glass border border-zinc-200/80 overflow-x-auto no-scrollbar shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? "bg-zinc-900 text-white font-semibold shadow-sm"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feed Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => {
          const isProject = item.type === "project";
          const isArticle = item.type === "article";

          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="liquid-card p-6 sm:p-8 flex flex-col justify-between cursor-pointer group hover:border-zinc-300 transition-all text-left overflow-hidden"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full ${
                        isProject
                          ? "bg-blue-50 text-blue-700 border border-blue-100"
                          : isArticle
                          ? "bg-purple-50 text-purple-700 border border-purple-100"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      }`}
                    >
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-zinc-600">
                    {item.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-zinc-600 mt-1 leading-snug">
                  {item.subtitle}
                </p>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  {item.readingTime && (
                    <span className="font-mono">{item.readingTime}</span>
                  )}
                  {item.tags.length > 0 && (
                    <span className="hidden sm:inline-block font-mono text-[11px] text-zinc-600">
                      #{item.tags[0]}
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                  <span>{isProject ? "Inspect Project" : "Read Story"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reader Modal */}
      <ArticleModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
