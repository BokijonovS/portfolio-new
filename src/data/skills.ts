export interface SkillItem {
  name: string;
  badge?: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Architecture & APIs",
    description: "Robust, high-throughput server architecture built on Python & relational database mastery.",
    iconName: "Server",
    accentColor: "from-blue-500/20 to-indigo-500/10",
    skills: [
      { name: "Python", featured: true },
      { name: "Django", featured: true },
      { name: "Django REST Framework", featured: true },
      { name: "REST API Development", featured: true },
      { name: "PostgreSQL", featured: true },
      { name: "MySQL" },
      { name: "SQL (Query Optimization)" },
      { name: "Authentication & Authorization (JWT, Session)", featured: true },
      { name: "Security Best Practices", featured: true },
      { name: "Postman API (Testing & Documentation)" },
    ],
  },
  {
    id: "mobile-systems",
    title: "App Development & Systems",
    description: "Translating strong software engineering rigor into fluid, user-centered mobile applications.",
    iconName: "Smartphone",
    accentColor: "from-sky-500/20 to-teal-500/10",
    skills: [
      { name: "iOS & SwiftUI (Academy Focus)", featured: true },
      { name: "Object-Oriented Programming (OOP)", featured: true },
      { name: "Problem Solving & Algorithms", featured: true },
      { name: "Debugging & Profiling", featured: true },
      { name: "Code Optimization", featured: true },
      { name: "pytelegrambotapi (Bot Development)" },
      { name: "Challenge-Based Learning (CBL)" },
    ],
  },
  {
    id: "devops-tooling",
    title: "Tooling & Infrastructure",
    description: "Version control, containerization, and modern development workflows.",
    iconName: "Terminal",
    accentColor: "from-amber-500/20 to-orange-500/10",
    skills: [
      { name: "Docker (Containerization)", featured: true },
      { name: "Git", featured: true },
      { name: "GitHub (Collaboration & CI)", featured: true },
      { name: "Postman API Suite" },
      { name: "Terminal / Linux CLI" },
      { name: "Database Migrations & Tuning" },
    ],
  },
  {
    id: "communication",
    title: "Communication & Leadership",
    description: "Mentoring, cross-functional collaboration, and international presentation skills.",
    iconName: "Users",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    skills: [
      { name: "English (IELTS 7.0 Certified)", featured: true },
      { name: "Teaching (Registan English Teacher)", featured: true },
      { name: "Mentoring & Knowledge Sharing", featured: true },
      { name: "Team Collaboration & Pair Programming", featured: true },
      { name: "Technical Communication & Presentation", featured: true },
      { name: "Cross-cultural Teamwork" },
    ],
  },
];
