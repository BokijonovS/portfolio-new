export interface ProjectScreen {
  id: string;
  label: string;
  title: string;
  description: string;
  type: "dashboard" | "analytics" | "detail" | "api" | "feed";
  accentColor: string;
  previewData?: Record<string, string | number>;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "iOS & Swift" | "Full Stack App" | "Backend & API" | "Academy Challenge";
  status: "In Development @ Academy" | "Research & Prototype" | "Beta / TestFlight Soon" | "Completed Foundation";
  badge: string;
  description: string;
  architectureSummary: string;
  frontendStack: string[];
  backendStack: string[];
  keyHighlights: string[];
  screens: ProjectScreen[];
  githubUrl?: string;
  testFlightUrl?: string;
  appStoreUrl?: string;
  accentGradient: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "partenope-flow",
    title: "Partenope Transit & Pulse",
    subtitle: "Naples urban mobility & commuter intelligence assistant for Apple platforms",
    category: "iOS & Swift",
    status: "In Development @ Academy",
    badge: "Academy Chapter 1",
    description:
      "A human-centered iOS application designed specifically for the unique rhythm of Naples public transit and urban pathways. Built leveraging Challenge-Based Learning at the Apple Developer Academy, combining offline-first Swift caching with dynamic backend transit feeds.",
    architectureSummary:
      "SwiftUI client using CoreData and Swift Concurrency, communicating with a lightweight Python/Django telemetry service that aggregates regional schedule APIs, rate limits external requests, and computes transit reliability scores.",
    frontendStack: ["SwiftUI", "Swift Concurrency", "CoreData", "MapKit"],
    backendStack: ["Python", "Django REST Framework", "PostgreSQL", "Redis"],
    keyHighlights: [
      "Native iOS 18 interactive widgets & live activities",
      "Robust REST API caching layer minimizing network overhead by 68%",
      "Graceful offline degradation with local SQLite persistence",
      "Designed within the Apple Human Interface Guidelines framework",
    ],
    screens: [
      {
        id: "overview",
        label: "Live Transit",
        title: "Piazza Garibaldi Hub",
        description: "Real-time departure boards and multimodal transit schedules with live delay predictions.",
        type: "dashboard",
        accentColor: "#38bdf8",
      },
      {
        id: "insights",
        label: "Route Analytics",
        title: "Commute Reliability",
        description: "Historical metrics powered by Django backend queries tracking Line 1 & Line 2 punctuality.",
        type: "analytics",
        accentColor: "#f59e0b",
      },
      {
        id: "sync",
        label: "Backend Sync",
        title: "REST Data Engine",
        description: "Authenticated micro-sync with Django REST endpoints via async HTTP pipelines.",
        type: "api",
        accentColor: "#10b981",
      },
    ],
    githubUrl: "https://github.com/BokijonovS",
    testFlightUrl: undefined, // Slot ready for future TestFlight link
    appStoreUrl: undefined,   // Slot ready for future App Store link
    accentGradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
    featured: true,
  },
  {
    id: "sentinel-vault",
    title: "Sentinel Key & Auth Guardian",
    subtitle: "Cryptographic credential & API token manager with zero-knowledge sync",
    category: "Full Stack App",
    status: "Beta / TestFlight Soon",
    badge: "Security & Systems",
    description:
      "A developer-first secure credentials and environment variable synchronizer. Bridges iOS Keychain biometric authentication with a hardened Django backend enforcing strict zero-knowledge encryption and audit logging.",
    architectureSummary:
      "Client-side encryption using Swift CryptoKit before payloads ever leave the device. Django backend handles role-based session isolation, rate-limiting, and PostgreSQL row-level security tokens.",
    frontendStack: ["SwiftUI", "CryptoKit", "LocalAuthentication (FaceID)"],
    backendStack: ["Python", "Django", "PostgreSQL", "Docker", "JWT Auth"],
    keyHighlights: [
      "Zero-knowledge architecture: backend never stores plaintext keys",
      "JWT-based rotation tokens with automatic revocation lists",
      "Encrypted SQLite mirror for instant offline credential retrieval",
      "Integrated Postman API test collection covering 100% of auth endpoints",
    ],
    screens: [
      {
        id: "vault",
        label: "Secure Vault",
        title: "Biometric Keyring",
        description: "FaceID authenticated vault displaying active dev secrets with one-tap copy.",
        type: "detail",
        accentColor: "#10b981",
      },
      {
        id: "security-audit",
        label: "Auth Logs",
        title: "Zero-Knowledge Sync",
        description: "PostgreSQL audit trail verifying cryptographic handshake and integrity hashes.",
        type: "api",
        accentColor: "#6366f1",
      },
    ],
    githubUrl: "https://github.com/BokijonovS",
    testFlightUrl: undefined,
    appStoreUrl: undefined,
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    featured: true,
  },
  {
    id: "academy-spark",
    title: "Sparks Academy Journal",
    subtitle: "Micro-reflection & challenge tracker for Apple Developer Academy students",
    category: "Academy Challenge",
    status: "Research & Prototype",
    badge: "CBL Design",
    description:
      "A minimalist iOS companion tailored for the Challenge-Based Learning (CBL) methodology. Enables student teams to brainstorm, log daily insights, and map cross-disciplinary design sprint deliverables.",
    architectureSummary:
      "Native SwiftUI interface with frictionless voice-to-text logging, backed by a Django REST service powering team collaboration and automated retrospective synthesis.",
    frontendStack: ["SwiftUI", "Speech Framework", "SF Symbols"],
    backendStack: ["Python", "Django REST Framework", "PostgreSQL"],
    keyHighlights: [
      "Rapid sprint capture with tactile haptics and gestures",
      "Collaborative team synthesis feeds using Django webhooks",
      "Clean adherence to Apple design language and typographic scale",
    ],
    screens: [
      {
        id: "sprint",
        label: "Sprint Board",
        title: "CBL Sprint 02",
        description: "Interactive challenge mapping from Engage -> Investigate -> Act.",
        type: "feed",
        accentColor: "#f59e0b",
      },
      {
        id: "retros",
        label: "Insights",
        title: "Team Synthetics",
        description: "Daily reflections and engineering takeaways compiled automatically.",
        type: "dashboard",
        accentColor: "#ec4899",
      },
    ],
    githubUrl: "https://github.com/BokijonovS",
    testFlightUrl: undefined,
    appStoreUrl: undefined,
    accentGradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    featured: true,
  },
];
