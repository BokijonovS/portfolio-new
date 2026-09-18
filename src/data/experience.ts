export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "current" | "previous";
  category: "academy" | "work" | "teaching" | "education";
  badge?: string;
  description: string;
  achievements: string[];
  techOrFocus: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  scoreOrCredential?: string;
  description: string;
  badgeColor: string;
  iconName: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "apple-developer-academy",
    role: "Apple Developer Academy Student & App Builder",
    organization: "Apple Developer Academy",
    location: "Naples, Italy",
    period: "Current Focus",
    type: "current",
    category: "academy",
    badge: "Apple Academy Cohort",
    description:
      "Selected for the Apple Developer Academy at Università degli Studi di Napoli Federico II to master the Apple ecosystem, human-centered design, and native iOS development using Challenge-Based Learning.",
    achievements: [
      "Selected from a highly competitive international pool of candidates",
      "Designing and developing native iOS applications with Swift, SwiftUI, and modern Apple APIs",
      "Collaborating in multidisciplinary teams across research, UX/UI, and product prototyping",
      "Bridging deep backend architectural expertise with responsive client-side mobile experiences",
    ],
    techOrFocus: ["iOS & Swift", "SwiftUI", "Challenge-Based Learning", "Human Interface Guidelines", "Product Design"],
  },
  {
    id: "bmgsoft",
    role: "Backend Developer",
    organization: "BMGSoft",
    location: "Tashkent, Uzbekistan",
    period: "Previous Experience",
    type: "previous",
    category: "work",
    badge: "Engineering",
    description:
      "Engineered robust, scalable backend architectures, RESTful APIs, and database-backed services using Python and Django REST Framework.",
    achievements: [
      "Architected and deployed RESTful APIs with clean serialization, validation, and documentation",
      "Optimized PostgreSQL queries and database schemas for low-latency transaction handling",
      "Implemented secure JWT authentication, session handling, and role-based access control (RBAC)",
      "Integrated third-party APIs and services, ensuring high uptime and structured logging",
    ],
    techOrFocus: ["Python", "Django", "Django REST Framework", "PostgreSQL", "REST APIs", "Docker", "Security"],
  },
  {
    id: "registan",
    role: "English Language Teacher",
    organization: "Registan",
    location: "Tashkent, Uzbekistan",
    period: "Previous Experience",
    type: "previous",
    category: "teaching",
    badge: "Leadership & Communication",
    description:
      "Taught English language proficiency, mentored learners toward academic goals, and developed public speaking, curriculum design, and communication skills.",
    achievements: [
      "Mentored diverse student cohorts in English fluency, grammar, and communicative competence",
      "Cultivated high-impact presentation, active listening, and empathetic leadership skills",
      "Translated complex pedagogical concepts into intuitive, engaging learning modules",
    ],
    techOrFocus: ["Teaching", "Mentoring", "Public Speaking", "Cross-Cultural Communication", "IELTS Preparation"],
  },
];

export const educationItems: ExperienceItem[] = [
  {
    id: "apple-academy-edu",
    role: "Apple Developer Academy",
    organization: "University of Naples Federico II & Apple",
    location: "Naples, Italy",
    period: "Current Focus",
    type: "current",
    category: "academy",
    badge: "Apple Ecosystem",
    description: "Intensive training program focused on iOS app development, software design, and entrepreneurship.",
    achievements: [
      "Tuition-free program at Università degli Studi di Napoli Federico II",
      "Hands-on app development on iOS, iPadOS, and macOS platforms",
      "Challenge-Based Learning (CBL) methodology",
    ],
    techOrFocus: ["Swift", "SwiftUI", "Product Development", "Apple Ecosystem"],
  },
  {
    id: "pdp-university",
    role: "University Foundation Diploma",
    organization: "PDP University",
    location: "Tashkent, Uzbekistan",
    period: "Foundation Completed",
    type: "previous",
    category: "education",
    badge: "Foundation Diploma",
    description:
      "Completed rigorous University Foundation Diploma focusing on computer science fundamentals, mathematics, and software development foundations.",
    achievements: [
      "Awarded University Foundation Diploma",
      "Established core foundations in algorithms, logic, and computing paradigms",
    ],
    techOrFocus: ["Computer Science Fundamentals", "Algorithms", "Mathematics", "Software Principles"],
  },
  {
    id: "najot-talim",
    role: "Backend / Django Web Development",
    organization: "Najot Ta'lim",
    location: "Tashkent, Uzbekistan",
    period: "Oct 2023 – Jun 2024",
    type: "previous",
    category: "education",
    badge: "Certified Graduate",
    description:
      "Comprehensive professional training program covering modern backend engineering, web frameworks, relational databases, and software architecture.",
    achievements: [
      "Graduated with top standing in full backend cycle development",
      "Built multiple production-style Django REST applications with Docker and PostgreSQL",
    ],
    techOrFocus: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "Git"],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "najot-talim-cert",
    title: "Certified Backend Development",
    issuer: "Najot Ta'lim",
    issueDate: "Issued July 2024",
    scoreOrCredential: "Certified Graduate",
    description:
      "Official professional certification validating mastery of Python, Django, REST API architecture, database management, and backend production standards.",
    badgeColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
    iconName: "ShieldCheck",
  },
  {
    id: "ielts-cert",
    title: "IELTS English Proficiency Test",
    issuer: "IDP / British Council",
    issueDate: "Certified",
    scoreOrCredential: "Band 7.0 (Good User / CEFR C1)",
    description:
      "International English Language Testing System certification confirming high-level English fluency in academic and professional communication, writing, and speaking.",
    badgeColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    iconName: "Award",
  },
];
