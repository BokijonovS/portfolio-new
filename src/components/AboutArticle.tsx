"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Compass, Terminal, Users, Quote, Heart } from "lucide-react";

export default function AboutArticle() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll position of the About section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 20%"],
  });

  // Dynamically translate up as the user scrolls down, shortening the gap between Hero and About
  const y = useTransform(scrollYProgress, [0, 1], [160, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.5, 0.85, 1]);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative pt-0 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-6 sm:-mt-10"
    >
      {/* Animated Card Container that glides up and compresses the gap as you scroll */}
      <motion.article
        style={{ y, scale, opacity }}
        className="liquid-card p-8 sm:p-14 border border-zinc-200/80 shadow-2xl shadow-black/[0.03] will-change-transform"
      >
        {/* Article Meta Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 mb-6">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
            About Sanatbek
          </span>
          <span>·</span>
          <span>5 min read</span>
          <span>·</span>
          <span>Naples & Tashkent</span>
        </div>

        {/* Article Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight mb-4">
          From Server-Side Logic in Tashkent to Apple Platforms in Naples
        </h2>

        {/* Article Lead */}
        <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed mb-10 pb-8 border-b border-zinc-100">
          I’m a developer from Tashkent, Uzbekistan, starting my journey at the Apple Developer Academy in Naples. My background is in backend development with Python, Django, APIs, and databases—and now I’m focused on turning that technical foundation into thoughtful apps and real products.
        </p>

        {/* Article Body Columns / Paragraphs */}
        <div className="space-y-6 text-base text-zinc-700 leading-relaxed">
          <p>
            My engineering path began with a curiosity about how large-scale systems stay upright. In Tashkent, that led me into the world of Python, Django REST Framework, and relational databases. At BMGSoft, where I worked as a Backend Developer, my daily focus was on writing clean, documented RESTful APIs, optimizing PostgreSQL query plans, and designing secure authentication and authorization flows.
          </p>

          <p>
            Backend engineering taught me discipline: how to handle data with care, how to think about failure modes before they happen, and how to write code that remains fast even under heavy load. But I always felt drawn to the human end of the screen—the client experience that someone actually touches, feels, and interacts with every day.
          </p>

          {/* Inspirational Pull Quote */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/70 relative overflow-hidden">
            <div className="text-zinc-200 absolute top-3 right-4">
              <Quote className="w-10 h-10" />
            </div>
            <p className="text-base sm:text-lg font-medium text-zinc-900 italic leading-relaxed relative z-10">
              &ldquo;The details are not the details. They make the design.&rdquo;
            </p>
            <div className="mt-3 text-xs font-mono text-zinc-500 relative z-10">
              — Charles Eames
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 pt-4">
            Empathy Through Teaching
          </h3>

          <p>
            Before stepping into full-time engineering, I spent time as an English Language Teacher at Registan. Teaching taught me something that documentation rarely mentions: code is fundamentally an act of communication. If you cannot explain a technical concept simply and empathetically, you probably don’t understand it deeply enough.
          </p>

          <p>
            Achieving an IELTS 7.0 score and guiding diverse students gave me the ability to mentor teammates, articulate architectural trade-offs, and collaborate effortlessly across international boundaries.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 pt-4">
            The Naples Chapter: Apple Developer Academy
          </h3>

          <p>
            Joining the Apple Developer Academy at Università degli Studi di Napoli Federico II opened an incredible new chapter. Surrounded by talented developers, designers, and thinkers from all around the world, I’m immersing myself in the Apple ecosystem: Swift, SwiftUI, and Challenge-Based Learning (CBL).
          </p>

          <p>
            Rather than leaving my backend foundations behind, I treat them as my unfair advantage. When an app builder knows exactly how database indexes, caching layers, and token rotation work under the hood, they build mobile apps that are extraordinarily fast, offline-resilient, and respectful of the user’s battery and bandwidth.
          </p>
        </div>

        {/* Article Footer Sign-off */}
        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Written by Sanatbek Bokijonov · Apple Developer Academy Cohort</span>
          </div>
          <span className="text-zinc-600">Updated for the Naples Journey</span>
        </div>
      </motion.article>
    </section>
  );
}
