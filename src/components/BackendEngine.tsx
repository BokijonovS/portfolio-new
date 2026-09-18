"use client";

import React, { useState } from "react";
import {
  Terminal,
  Database,
  Shield,
  Zap,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

interface Pillar {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  codeSnippet: string;
  codeLanguage: string;
  benefits: string[];
}

const pillars: Pillar[] = [
  {
    id: "api-architecture",
    title: "High-Throughput Django REST APIs",
    badge: "Python & DRF",
    icon: Zap,
    description:
      "Crafting clean, documented, and deterministic RESTful endpoints. Utilizing custom serializers, rate limiters, pagination, and atomic viewsets to ensure mobile apps receive ultra-lean JSON responses.",
    codeLanguage: "python",
    codeSnippet: `@action(detail=False, methods=['get'])
def sync_telemetry(self, request):
    # Optimized payload serialization with Redis caching
    cached_data = cache.get('telemetry_naples')
    if not cached_data:
        queryset = TransitFeed.objects.select_related('route')\\
                                      .prefetch_related('alerts')\\
                                      .filter(is_active=True)[:50]
        serializer = MobileSyncSerializer(queryset, many=True)
        cache.set('telemetry_naples', serializer.data, timeout=60)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(cached_data)`,
    benefits: [
      "Sub-50ms API response latency via Redis caching & prefetching",
      "Field filtering reduces mobile cellular data consumption by up to 70%",
      "Tested and verified with automated Postman test suites",
    ],
  },
  {
    id: "database-optimization",
    title: "PostgreSQL & Database Engineering",
    badge: "SQL & Schemas",
    icon: Database,
    description:
      "Designing normalized, index-optimized relational databases. Eliminating N+1 query bottlenecks with Django ORM's select_related and prefetch_related, maintaining high transactional integrity under load.",
    codeLanguage: "sql",
    codeSnippet: `-- Custom index optimization for spatial & route lookups
CREATE INDEX idx_transit_coords ON routes_transitfeed 
USING GIST (geom);

CREATE INDEX idx_active_routes ON routes_transitfeed (status, updated_at DESC)
WHERE is_active = TRUE;

-- Vacuum and analyze to sustain query performance under high write load`,
    benefits: [
      "Rigorous index strategies guaranteeing instantaneous queries",
      "ACID transactional guarantees for critical user state & transactions",
      "Seamless migrations engineered without database downtime",
    ],
  },
  {
    id: "security-auth",
    title: "Zero-Trust Auth & Security Practices",
    badge: "Security & Auth",
    icon: Shield,
    description:
      "Implementing industry-standard authentication systems: stateless JWT rotation, strict CORS/CSRF headers, password hashing, and role-based permissions designed to pair securely with Apple Keychain & Biometrics.",
    codeLanguage: "python",
    codeSnippet: `REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
}`,
    benefits: [
      "Rotational JWT tokens preventing replay attacks",
      "Strict data sanitization and OWASP security compliance",
      "Encrypted transit protecting mobile payloads end-to-end",
    ],
  },
  {
    id: "fullstack-bridge",
    title: "The Mobile-to-Backend Bridge",
    badge: "iOS + Backend",
    icon: Layers,
    description:
      "When the app engineer also wrote the backend, client-server sync is flawless. Optimizing async Swift URLSession pipelines, background fetch, and offline SQLite synchronization with zero friction.",
    codeLanguage: "swift",
    codeSnippet: `// Swift Concurrency + Django REST Handshake
func fetchLiveTelemetry() async throws -> [TelemetryFeed] {
    let endpoint = URL(string: "\\(apiBase)/api/v1/telemetry/")!
    var request = URLRequest(url: endpoint)
    request.setValue("Bearer \\(token)", forHTTPHeaderField: "Authorization")
    
    let (data, response) = try await session.data(for: request)
    guard (response as? HTTPURLResponse)?.statusCode == 200 else {
        throw NetworkError.serverUnavailable
    }
    return try JSONDecoder().decode([TelemetryFeed].self, from: data)
}`,
    benefits: [
      "Zero impedance mismatch between client models and backend tables",
      "Robust offline caching using CoreData / SwiftData mirrors",
      "Rapid end-to-end debugging from Swift breakpoint to Django trace",
    ],
  },
];

export default function BackendEngine() {
  const [activePillarId, setActivePillarId] = useState(pillars[0].id);
  const activePillar = pillars.find((p) => p.id === activePillarId) || pillars[0];

  return (
    <section id="backend" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-96 h-96 bg-indigo-600/10 top-1/3 left-0" />

      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>The Architectural Superpower</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Why Apps Built by a Backend Engineer Stand Out
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          Great iOS applications require more than just polished interfaces—they demand rock-solid data integrity, resilient API contracts, sub-second latency, and uncompromising security.
        </p>
      </div>

      {/* Interactive Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Pillar Navigation */}
        <div className="lg:col-span-5 space-y-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = pillar.id === activePillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-start gap-4 ${
                  isSelected
                    ? "glass-panel bg-white/[0.08] border-white/20 shadow-xl"
                    : "glass-panel-subtle hover:bg-white/[0.04] border-white/5 hover:border-white/10"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected
                      ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                      : "bg-white/5 text-zinc-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`text-sm font-semibold truncate ${
                        isSelected ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10 shrink-0">
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </button>
            );
          })}

          {/* Credibility Summary Note */}
          <div className="rounded-2xl p-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/20 mt-4">
            <div className="text-xs font-mono text-blue-300 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>BMGSoft Experience in Production</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              Honored at BMGSoft as a Backend Developer building commercial web applications, REST services, and database-backed engines with Python & Django.
            </p>
          </div>
        </div>

        {/* Right Column: Code & Architecture Detail Card */}
        <div className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Pillar Breakdown
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                {activePillar.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Tested</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
            {activePillar.description}
          </p>

          {/* Code Sandbox / Terminal Preview */}
          <div className="mt-5 rounded-2xl bg-[#07080d] border border-white/10 overflow-hidden font-mono text-xs">
            {/* Terminal Top Bar */}
            <div className="bg-[#10121a] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-zinc-400 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-zinc-400 font-mono">
                  {activePillar.id}.{activePillar.codeLanguage === "swift" ? "swift" : activePillar.codeLanguage === "sql" ? "sql" : "py"}
                </span>
              </div>
              <span className="uppercase text-[10px] text-indigo-400 font-mono">
                {activePillar.codeLanguage}
              </span>
            </div>

            {/* Code Block */}
            <pre className="p-4 text-zinc-300 overflow-x-auto leading-relaxed text-[11px] sm:text-xs selection:bg-indigo-500/30">
              <code>{activePillar.codeSnippet}</code>
            </pre>
          </div>

          {/* Benefits List */}
          <div className="mt-6 space-y-2.5 pt-4 border-t border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Impact on Client Experience
            </div>
            {activePillar.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
