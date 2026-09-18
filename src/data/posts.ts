export type PostType = "project" | "article" | "event";

export interface FeedItem {
  id: string;
  type: PostType;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  badge?: string;
  excerpt: string;
  content: string[];
  tags: string[];
  readingTime?: string;
  link?: string;
  linkText?: string;
  githubUrl?: string;
  highlights?: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export const quotes = [
  {
    text: "Simplicity is about subtracting the obvious and adding the meaningful.",
    author: "John Maeda, The Laws of Simplicity",
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames",
  },
  {
    text: "Stay hungry, stay foolish. Build what matters to real people.",
    author: "Steve Jobs",
  },
];

export const feedItems: FeedItem[] = [
  // PROJECTS
  {
    id: "partenope-pulse",
    type: "project",
    title: "Partenope Transit & Urban Pulse",
    subtitle: "Naples commuter assistant designed at the Apple Developer Academy",
    date: "Current Focus · 2024",
    category: "iOS & Swift",
    badge: "Academy Project",
    excerpt:
      "A native iOS application designed for the rhythm of Naples transit, combining offline-first Swift caching with Django REST telemetry.",
    content: [
      "When I relocated from Tashkent to Naples to begin my studies at the Apple Developer Academy, the very first thing that struck me was the dynamic urban pulse of the city.",
      "Navigating the regional metro lines and historic funiculars presented a real everyday design challenge. Within the Academy's Challenge-Based Learning (CBL) framework, our team began researching how commuters experience schedule variability.",
      "On the client side, the app is crafted purely in SwiftUI, leveraging Swift Concurrency and local CoreData mirrors to ensure departure boards remain instant even underground.",
      "On the backend, my Python and Django background allowed us to architect a lightweight telemetry layer that caches municipal feeds in PostgreSQL/Redis, reducing cellular data footprint by over 60%.",
    ],
    tags: ["SwiftUI", "Apple Academy", "Python", "Django REST", "PostgreSQL", "Naples"],
    readingTime: "4 min read",
    githubUrl: "https://github.com/BokijonovS",
    highlights: [
      "Native iOS 18 interactive widgets & Live Activities",
      "Offline-first architecture with background synchronization",
      "Sub-50ms serialized responses from Django endpoints",
      "Apple Human Interface Guidelines compliance",
    ],
  },
  {
    id: "sentinel-vault",
    type: "project",
    title: "Sentinel Key & Auth Guardian",
    subtitle: "Cryptographic credential and token manager with zero-knowledge sync",
    date: "2024",
    category: "Full Stack App",
    badge: "Security & Systems",
    excerpt:
      "Bridges Apple Keychain biometric authentication with a hardened Django backend enforcing strict zero-knowledge encryption.",
    content: [
      "Coming from backend engineering at BMGSoft, security has always been a non-negotiable principle. I wanted to build an app that developers and teams could trust with their production environment variables.",
      "Sentinel utilizes client-side CryptoKit before any payload leaves the iOS device. The Python/Django backend never receives plaintext keys—it simply acts as an audited, encrypted synchronization pipe with PostgreSQL row-level isolation.",
      "The result is a fluid mobile experience with FaceID authentication and bank-grade backend guarantees.",
    ],
    tags: ["SwiftUI", "CryptoKit", "Python", "Django", "PostgreSQL", "Docker", "Security"],
    readingTime: "3 min read",
    githubUrl: "https://github.com/BokijonovS",
    highlights: [
      "Zero-knowledge architecture: backend never stores decrypted secrets",
      "Instant FaceID authentication integrated with iOS Keychain",
      "Automated Postman test suites covering 100% of auth routes",
    ],
  },

  // ARTICLES & ESSAYS
  {
    id: "from-backend-to-apple-academy",
    type: "article",
    title: "From Backend Engineering in Tashkent to Apple Platforms in Naples",
    subtitle: "Why writing Django REST APIs made me a more thoughtful mobile app builder",
    date: "Autumn 2024",
    category: "Thoughts & Craft",
    badge: "Essay",
    excerpt:
      "How transitioning from server-side Python and database indexing in Uzbekistan to Apple Developer Academy in Italy shaped my perspective on software craft.",
    content: [
      "For years, my world was built on request-response cycles, database query plans, and server uptimes. At BMGSoft, I spent days optimizing PostgreSQL indexes, designing serialization pipelines, and ensuring zero-downtime database migrations.",
      "When I was accepted to the Apple Developer Academy in Naples, I knew it would be a major turning point. But I didn't realize how much my backend intuition would become my greatest creative asset.",
      "In mobile development, latency isn't just a number—it's a human feeling. When an app stutters or shows an empty spinner, the illusion of direct manipulation breaks. Having deep knowledge of what happens behind the HTTP handshake allows me to architect apps where the client and server feel like a single living organism.",
      "Naples brings a rich, human texture to everything. The Academy isn't just about code; it's about Challenge-Based Learning, empathy, and asking: does this software genuinely respect the user's time and peace of mind?",
    ],
    tags: ["Apple Academy", "Journey", "Engineering", "Python", "Swift"],
    readingTime: "5 min read",
    quote: {
      text: "Technology alone is not enough. It’s technology married with the liberal arts, married with the humanities, that yields us the results that make our heart sing.",
      author: "Steve Jobs",
    },
  },
  {
    id: "teaching-and-code",
    type: "article",
    title: "What Teaching English at Registan Taught Me About Writing Clean Code",
    subtitle: "Communication, empathy, and clarity as the real foundations of software",
    date: "2024",
    category: "Perspective",
    badge: "Story",
    excerpt:
      "Code is read ten times more often than it is written. How my experience as an English teacher shaped my approach to software architecture.",
    content: [
      "Before diving deep into production software, I worked as an English Language Teacher at Registan. Teaching teenagers and adults how to express their thoughts in a foreign language requires extreme empathy and structural clarity.",
      "When you stand in front of a classroom, you quickly learn that complexity is the enemy of understanding. You have to break down intricate grammar rules into intuitive, memorable mental models.",
      "When I moved into backend engineering with Python and Django, I realized that code is fundamentally an act of human communication. A serializer, a database schema, or a Swift struct is a message to your future self and your teammates.",
      "Scoring 7.0 on IELTS and teaching for years gave me the confidence to communicate technical ideas across international teams—something that is proving invaluable every single day at the Apple Developer Academy.",
    ],
    tags: ["Mentorship", "Communication", "IELTS", "Teaching", "Craft"],
    readingTime: "4 min read",
  },

  // EVENTS & UPDATES
  {
    id: "apple-academy-selection-event",
    type: "event",
    title: "Accepted to Apple Developer Academy in Naples",
    subtitle: "Official acceptance and relocation to Università di Napoli Federico II",
    date: "2024",
    category: "Milestone",
    badge: "Academy Milestone",
    excerpt:
      "Selected among an international candidate pool for the prestigious Apple Developer Academy program in Naples, Italy.",
    content: [
      "After months of intense preparation, algorithmic evaluations, design thinking assessments, and personal interviews, I was officially accepted to join the Apple Developer Academy.",
      "The program, run in partnership between Apple and Università degli Studi di Napoli Federico II, gathers aspiring builders, designers, and entrepreneurs from across the globe tuition-free.",
      "Relocating from Tashkent to Naples marked the start of an exciting new chapter: building native Apple ecosystem software with a builder mindset.",
    ],
    tags: ["Apple Developer Academy", "Naples", "Milestone", "Italy"],
    readingTime: "2 min read",
    highlights: [
      "Accepted into the Apple Developer Academy cohort",
      "Cohort based at San Giovanni a Teduccio campus in Naples",
      "Full immersion into Challenge-Based Learning & Apple frameworks",
    ],
  },
  {
    id: "najot-talim-certification",
    type: "event",
    title: "Najot Ta'lim Backend Engineering Certification",
    subtitle: "Graduated with official Certified Backend Developer credential",
    date: "July 2024",
    category: "Certification",
    badge: "Verified Credential",
    excerpt:
      "Formal certification validating comprehensive backend development mastery with Python, Django, PostgreSQL, and REST APIs.",
    content: [
      "Completed an intensive, rigorous 9-month professional training program at Najot Ta'lim focused on Python, Django, relational database architecture, Docker containerization, and RESTful API deployment.",
      "Awarded official Certified Backend Developer credential in July 2024.",
    ],
    tags: ["Certification", "Najot Ta'lim", "Python", "Django", "PostgreSQL"],
    readingTime: "1 min read",
  },
  {
    id: "pdp-foundation-diploma",
    type: "event",
    title: "Awarded University Foundation Diploma from PDP University",
    subtitle: "Core computer science fundamentals, logic, and mathematics",
    date: "Completed",
    category: "Academic Foundation",
    badge: "Foundation Diploma",
    excerpt:
      "Received University Foundation Diploma establishing rigorous fundamentals in algorithms, discrete structures, and computing paradigms.",
    content: [
      "Received the University Foundation Diploma from PDP University, providing mathematical rigor, algorithm analysis, and software principles that underpin my engineering work today.",
    ],
    tags: ["PDP University", "Foundation Diploma", "Computer Science"],
    readingTime: "1 min read",
  },
];
