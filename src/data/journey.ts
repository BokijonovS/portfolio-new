export interface JourneyLog {
  id: string;
  date: string;
  category: "Academy Milestone" | "App Drop" | "Engineering Insight" | "Relocation";
  title: string;
  location: string;
  summary: string;
  tags: string[];
  takeaways?: string[];
  status?: "Live" | "In Progress" | "Completed";
}

export const journeyLogs: JourneyLog[] = [
  {
    id: "academy-acceptance",
    date: "2024",
    category: "Academy Milestone",
    title: "Accepted to Apple Developer Academy in Naples",
    location: "Naples, Italy",
    summary:
      "Selected to join the Apple Developer Academy at Università degli Studi di Napoli Federico II. Passed rigorous testing and interview stages assessing algorithmic thinking, creativity, and collaborative drive.",
    tags: ["Apple Developer Academy", "Apple Ecosystem", "Milestone", "Naples"],
    takeaways: [
      "Accepted into world-class iOS ecosystem engineering program in Italy",
      "Began deep integration of human-centered design with backend engineering principles",
      "Connecting with an international cohort of designers, engineers, and entrepreneurs",
    ],
    status: "Live",
  },
  {
    id: "journey-from-tashkent",
    date: "2024",
    category: "Relocation",
    title: "From Tashkent to the Mediterranean: Starting the Naples Chapter",
    location: "Tashkent → Naples",
    summary:
      "Transitioned from Tashkent, Uzbekistan to Naples, Italy. Bringing years of backend problem-solving at BMGSoft and mentorship experience at Registan into an international, fast-paced product laboratory.",
    tags: ["Tashkent", "Naples", "New Chapter", "Global Mindset"],
    takeaways: [
      "Adapting backend muscle to client-side Swift responsiveness",
      "Embracing Italian tech culture and Mediterranean academy life",
    ],
    status: "Completed",
  },
  {
    id: "swift-backend-bridge",
    date: "Current Focus",
    category: "Engineering Insight",
    title: "The Backend Advantage: Architecting iOS Apps with Python Chops",
    location: "Apple Developer Academy",
    summary:
      "Exploring how deep background in Django REST Framework, database indexing, and token authentication completely redefines mobile development—allowing faster iteration, rock-solid offline sync, and production-grade API contracts.",
    tags: ["SwiftUI", "Django REST", "System Architecture", "Best Practices"],
    takeaways: [
      "Zero-latency local caching paired with atomic REST updates",
      "Designing backend data schemas specifically optimized for mobile bandwidth constraints",
    ],
    status: "In Progress",
  },
  {
    id: "cbl-sprint-01",
    date: "Upcoming",
    category: "App Drop",
    title: "First Academy Challenge App: Urban Pulse Naples",
    location: "Naples, Italy",
    summary:
      "Publishing the first full-cycle application developed within the Academy's Challenge-Based Learning framework, moving from community research and user interviews to functional Swift prototypes.",
    tags: ["iOS App", "Challenge-Based Learning", "Design Sprint"],
    takeaways: [
      "User research across Naples transit hubs",
      "Interactive widgets and real-time backend synchronization",
    ],
    status: "In Progress",
  },
];
