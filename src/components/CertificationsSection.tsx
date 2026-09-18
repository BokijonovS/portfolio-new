"use client";

import React from "react";
import { certifications } from "@/data/experience";
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="relative py-16 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Credentials</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Professional & Language Certifications
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg mx-auto">
          Officially issued credentials in backend software engineering and international English proficiency.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => {
          const isBackend = cert.id === "najot-talim-cert";
          const Icon = isBackend ? ShieldCheck : Award;

          return (
            <div
              key={cert.id}
              className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                      isBackend
                        ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                        : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-zinc-400 block">
                      {cert.issueDate}
                    </span>
                    <span
                      className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full border mt-1 inline-block ${
                        isBackend
                          ? "bg-blue-500/10 text-blue-300 border-blue-500/25"
                          : "bg-emerald-500/10 text-emerald-300 border-emerald-500/25"
                      }`}
                    >
                      {cert.scoreOrCredential}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  Issued by: {cert.issuer}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <span className="text-zinc-400">Directly Audited</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
