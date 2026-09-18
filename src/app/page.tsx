import React from "react";
import MouseFollower from "@/components/MouseFollower";
import WhiteNavbar from "@/components/WhiteNavbar";
import WhiteHero from "@/components/WhiteHero";
import AboutArticle from "@/components/AboutArticle";
import FeedSection from "@/components/FeedSection";
import AntigravityWave from "@/components/AntigravityWave";
import SkillsAndBackground from "@/components/SkillsAndBackground";
import MacbookContact from "@/components/MacbookContact";
import WhiteFooter from "@/components/WhiteFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fbfbfd] text-[#1d1d1f] selection:bg-blue-600/10 selection:text-blue-600 overflow-x-hidden">
      {/* Subtle Interactive Ambient Mouse Light */}
      <MouseFollower />

      {/* Floating Liquid Glass Navigation */}
      <WhiteNavbar />

      {/* Main Content Sections */}
      <div className="relative z-10 space-y-12 sm:space-y-16">
        <WhiteHero />
        <AboutArticle />
        <FeedSection />
        <AntigravityWave />
        <SkillsAndBackground />
        <MacbookContact />
      </div>

      {/* Minimal Apple-Style Footer */}
      <WhiteFooter />
    </main>
  );
}
