"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, Sparkles, Send } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["overview", "apps", "backend", "journey", "skills", "background", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-2xl sm:rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? "glass-dock bg-[#0c0e14]/85 shadow-2xl shadow-black/60 border border-white/10"
            : "bg-[#12141a]/60 backdrop-blur-md border border-white/10"
        }`}
      >
        {/* Brand */}
        <Link
          href="#overview"
          className="flex items-center gap-2.5 text-white font-medium group transition-transform active:scale-95"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            {siteConfig.name}
          </span>
          <span className="hidden lg:inline-flex items-center text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono">
            Apple Academy
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 text-xs">
          {siteConfig.navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white/15 text-white font-medium shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/10"
          >
            <Send className="w-3 h-3 text-zinc-900" />
            <span>Connect</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 rounded-2xl glass-dock bg-[#0d0f16]/95 border border-white/15 p-5 shadow-2xl flex flex-col gap-2 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-zinc-400 font-mono">
            <span>Navigation</span>
            <span className="text-amber-400/90 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Naples, Italy
            </span>
          </div>
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 mt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black text-sm font-medium"
            >
              <Send className="w-3.5 h-3.5 text-zinc-900" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
