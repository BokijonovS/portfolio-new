"use client";

import React from "react";
import {
  Terminal,
  Smartphone,
  BookOpen,
  Award,
  CheckCircle2,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { experiences, educationItems, certifications } from "@/data/experience";

export default function SkillsAndBackground() {
  const technicalPillars = [
    {
      title: "Backend & Systems Architecture",
      subtitle: "The server-side foundation developed at BMGSoft and Najot Ta'lim.",
      icon: Terminal,
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "MySQL",
        "SQL Query Optimization",
        "REST API Development",
        "Auth & Authorization (JWT, RBAC)",
        "Security Best Practices",
        "Docker",
        "Postman API",
      ],
    },
    {
      title: "Mobile Craft & Problem Solving",
      subtitle: "The focus at the Apple Developer Academy in Naples.",
      icon: Smartphone,
      skills: [
        "iOS & Swift (Academy Focus)",
        "SwiftUI",
        "Object-Oriented Programming (OOP)",
        "Challenge-Based Learning (CBL)",
        "Problem Solving & Logic",
        "Debugging & Profiling",
        "Code Optimization",
        "pytelegrambotapi",
        "Git & GitHub",
      ],
    },
    {
      title: "Communication, Teaching & Mentorship",
      subtitle: "Pedagogical clarity and international cross-functional leadership.",
      icon: BookOpen,
      skills: [
        "IELTS 7.0 (Certified English Proficiency)",
        "English Language Teaching (Registan)",
        "Technical Mentorship",
        "Cross-Cultural Collaboration",
        "Empathetic Communication",
        "Presentations & Public Speaking",
      ],
    },
  ];

  return (
    <section className="relative pt-0 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16 !mt-2 sm:!mt-4">
      {/* 1. Technical Craft Cards */}
      <div id="skills" className="scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5 text-zinc-700" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Systems & Skills
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            A comprehensive overview of the technical tools and human capabilities I rely on every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="liquid-card p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-1 mb-5 leading-relaxed">
                    {pillar.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200/60 text-zinc-700 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Background Timeline & Education */}
      <div id="background" className="scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Trajectory & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Experience, Academy & Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            A transparent record of my previous engineering work, teaching experience, and education.
          </p>
        </div>

        <div className="space-y-4">
          {/* Apple Academy */}
          <div className="liquid-card p-6 sm:p-8 border border-blue-200/80 bg-gradient-to-r from-blue-50/20 to-transparent">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold inline-block">
                  Current Chapter · Apple Developer Academy
                </span>
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mt-1">
                  Apple Developer Academy in Naples
                </h3>
                <div className="text-sm text-zinc-600 mt-0.5">
                  Università degli Studi di Napoli Federico II · Naples, Italy
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-700 mt-3 leading-relaxed">
              Selected to master native iOS app development, Challenge-Based Learning, and human-centered Apple ecosystem design in Naples.
            </p>
          </div>

          {/* BMGSoft */}
          <div className="liquid-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium inline-block">
                  Previous Experience
                </span>
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mt-1">
                  Backend Developer · BMGSoft
                </h3>
                <div className="text-sm text-zinc-600 mt-0.5">
                  Tashkent, Uzbekistan
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-700 mt-3 leading-relaxed">
              Engineered scalable web applications, RESTful APIs, and database-backed services with Python and Django REST Framework. Optimized PostgreSQL schemas and implemented secure JWT authentication protocols.
            </p>
          </div>

          {/* Registan */}
          <div className="liquid-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium inline-block">
                  Previous Experience
                </span>
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mt-1">
                  English Language Teacher · Registan
                </h3>
                <div className="text-sm text-zinc-600 mt-0.5">
                  Tashkent, Uzbekistan
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-700 mt-3 leading-relaxed">
              Taught English language proficiency, mentored students, and developed communication, curriculum planning, and presentation skills.
            </p>
          </div>

          {/* PDP University Foundation & Najot Ta'lim */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="liquid-card p-6">
              <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">
                Previous Education
              </span>
              <h4 className="text-base font-bold text-zinc-950 mt-2">
                University Foundation Diploma
              </h4>
              <div className="text-xs font-mono text-zinc-500 mt-0.5">
                PDP University · Tashkent
              </div>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                Completed University Foundation Diploma focusing on computer science foundations, algorithms, and mathematics.
              </p>
            </div>

            <div className="liquid-card p-6">
              <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">
                Professional Training
              </span>
              <h4 className="text-base font-bold text-zinc-950 mt-2">
                Backend / Django Web Development
              </h4>
              <div className="text-xs font-mono text-zinc-500 mt-0.5">
                Najot Ta&apos;lim · Oct 2023 – Jun 2024
              </div>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                Comprehensive training covering Python, Django, relational databases, Docker, and REST API deployment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Official Certifications */}
      <div id="certificates" className="scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-mono mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Credentials</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
            Verified Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="liquid-card p-6 border border-zinc-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-500">Issued July 2024</div>
              <h4 className="text-base font-bold text-zinc-950 mt-0.5">
                Certified Backend Development
              </h4>
              <div className="text-xs text-zinc-600 mt-0.5">Najot Ta&apos;lim</div>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                Official credential validating production standards in Python, Django, REST APIs, and database engineering.
              </p>
            </div>
          </div>

          <div className="liquid-card p-6 border border-zinc-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-500">Certified Score</div>
              <h4 className="text-base font-bold text-zinc-950 mt-0.5">
                IELTS 7.0 (English Proficiency)
              </h4>
              <div className="text-xs text-zinc-600 mt-0.5">IDP / British Council</div>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                International certification validating academic and professional English fluency for global teamwork and communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
