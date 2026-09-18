"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import AppleLogo from "@/components/AppleLogo";

export default function WhiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Hero section: when at the top of the page before visiting sections, no nav pill is active
      if (window.scrollY < 300) {
        setActiveSection("");
        return;
      }

      // If scrolled near bottom of page, highlight contact
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      const sections = ["story", "feed", "skills", "certificates", "contact"];
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 280) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Story", href: "#story" },
    { label: "Feed & Work", href: "#feed" },
    { label: "Craft & Systems", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? "liquid-glass-dock shadow-xl shadow-black/[0.04]"
            : "liquid-glass shadow-sm"
        }`}
      >
        {/* Brand */}
        <Link
          href="#top"
          className="flex items-center gap-2.5 text-zinc-900 font-medium group transition-transform active:scale-95"
        >
          <AppleLogo className="w-4 h-4 text-zinc-950 shrink-0" />
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            {siteConfig.name}
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] tracking-wide font-mono px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/60">
            Apple Academy · Naples
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 text-xs">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-900 text-white font-medium shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/bokijonovs/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all active:scale-95 shadow-sm"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 rounded-3xl liquid-glass p-5 shadow-2xl flex flex-col gap-2 z-50 border border-zinc-200 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100 text-xs text-zinc-500 font-mono">
            <span>Navigation</span>
            <span className="text-zinc-700 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-600" /> Apple Academy · Naples
            </span>
          </div>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-2xl text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/80 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-zinc-100 mt-1">
            <a
              href="https://www.linkedin.com/in/bokijonovs/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-zinc-900 text-white text-sm font-medium"
            >
              <span>Say Hello (LinkedIn)</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
