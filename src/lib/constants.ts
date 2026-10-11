// ============================================================
// PORTFOLIO DATA — Sourced from Saikat Deb Sharma's Resume
// ============================================================

export const SITE_CONFIG = {
  name: "Saikat Deb Sharma",
  initials: "SDS",
  title: "Saikat Deb Sharma — Computer Science (AI & ML) | Web Developer",
  description:
    "2nd-year B.Tech CSE (AI & ML) student and Web Developer with hands-on experience building production-quality Android and React applications with Gemini AI integrations.",
  url: "https://saikatdeb704-cmyk.github.io",
  ogImage: "/og-image.png",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/saikatdeb704-cmyk",
  linkedin: "https://www.linkedin.com/in/saikat-deb-sharma-805059398/",
  email: "saikatdeb704@gmail.com",
  phone: "(+91) 6295096193",
  location: "Kalyani, India",
  resume: "/resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf", isExternal: true },
];

export const HERO_DATA = {
  name: "SAIKAT DEB SHARMA",
  headline: ["BUILDING WITH CODE.", "INTEGRATING AI.", "CREATING THE FUTURE."],
  subtitle: "B.Tech CSE (AI & ML) • Web & Android Developer",
  intro:
    "Motivated 2nd-year B.Tech CSE (AI & ML) student and aspiring Web Developer with hands-on experience building production-quality Android and React applications. Proficient in Kotlin/Jetpack Compose, React/TypeScript, and Gemini AI integration.",
  cta: {
    primary: { label: "VIEW MY WORK →", href: "#projects" },
    secondary: { label: "DOWNLOAD RESUME ↓", href: "/resume.pdf" },
  },
};

export const ABOUT_DATA = {
  statement: [
    "CRAFTING INTUITIVE EXPERIENCES.",
    "INTEGRATING GEMINI AI.",
    "BUILDING PRODUCTION APPS.",
  ],
  bio: [
    "Motivated 2nd-year B.Tech CSE (AI & ML) student and aspiring Web Developer based in Kalyani, India, with hands-on experience building production-quality Android and React applications.",
    "Proficient across Kotlin/Jetpack Compose and React/TypeScript ecosystems. Passionate about crafting intuitive user experiences with modern UI frameworks, integrating AI-powered features via Gemini AI, and writing clean, maintainable code.",
    "Eager to contribute to practical, high-impact projects and continuously strengthen technical problem-solving in the software engineering industry.",
  ],
  principles: [
    { number: "01", label: "LEARN" },
    { number: "02", label: "BUILD" },
    { number: "03", label: "EXPERIMENT" },
    { number: "04", label: "DELIVER" },
  ],
};

export const SKILLS_DATA = {
  heading: "TECHNICAL SKILLS",
  subheading: "Technologies, frameworks, and tools from my production and academic projects.",
  categories: [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "C",
        "Kotlin",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React 19",
        "Jetpack Compose",
        "Material Design 3",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Vite",
        "Node.js",
        "Firebase",
        "Git / GitHub",
        "Android Studio",
        "Express.js",
      ],
    },
    {
      title: "APIs & Data",
      skills: [
        "Gemini AI SDK",
        "REST APIs",
        "Room DB",
        "Retrofit",
        "OkHttp",
      ],
    },
  ],
};

export const PROJECTS_DATA = [
  {
    id: "scholar-ai",
    number: "01",
    title: "ScholarAI — AI-Powered Research Knowledge Manager",
    description:
      "An academic research management platform featuring an intelligent inbox for paper triage, topic tracking dashboards, interactive SVG knowledge graphs, and an integrated AI research assistant to extract key concepts and summaries.",
    features: [
      "Intelligent inbox for paper triage",
      "Topic tracking dashboards",
      "Interactive SVG-based knowledge graphs",
      "Integrated Gemini AI research assistant",
      "Automated key concept & summary extraction",
    ],
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Gemini AI SDK"],
    liveUrl: "https://github.com/saikatdeb704-cmyk",
    sourceUrl: "https://github.com/saikatdeb704-cmyk",
    details: {
      overview:
        "Built an academic research management platform using React 19, TypeScript, Vite, Tailwind CSS 4, and the Gemini AI SDK. Designed to streamline how researchers and students organize, analyze, and synthesize scholarly literature.",
      problem:
        "Researchers face massive cognitive overload triaging academic papers, managing disparate reading queues, and connecting conceptual nodes across complex studies.",
      solution:
        "Engineered an all-in-one web platform with an automated triage inbox, topic progress dashboards, interactive SVG knowledge visualizers, and a context-aware Gemini AI assistant.",
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS 4",
        "Gemini AI SDK",
      ],
    },
  },
  {
    id: "mock-interview-platform",
    number: "02",
    title: "AI-Powered Mock Interview Platform",
    description:
      "An interactive technical interview simulator featuring real-time conversational AI that generates role-specific interview questions, analyzes responses, and provides detailed critique on communication and technical accuracy.",
    features: [
      "Real-time conversational AI interviewer",
      "Role-specific dynamic question generation",
      "Instant response evaluation & scoring",
      "Communication & technical accuracy feedback",
      "Contextual state management & prompt engineering",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Gemini AI SDK"],
    liveUrl: "https://github.com/saikatdeb704-cmyk",
    sourceUrl: "https://github.com/saikatdeb704-cmyk",
    details: {
      overview:
        "Developed an interactive technical interview simulator using React, TypeScript, Tailwind CSS, and the Gemini AI SDK for realistic candidate preparation.",
      problem:
        "Job seekers rarely have access to realistic technical interview practice with personalized, actionable feedback on their answers and communication style.",
      solution:
        "Implemented robust state management for conversational context along with prompt engineering to deliver realistic AI interviewers that dynamically adapt to the user's answers.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Gemini AI SDK",
      ],
    },
  },
  {
    id: "personal-task-manager",
    number: "03",
    title: "Personal Task Manager (Android App)",
    description:
      "A full-featured, production-grade Android task management application built with Kotlin, Jetpack Compose, Material Design 3, Room DB, and Firebase for offline-first productivity.",
    features: [
      "Complete CRUD workflows",
      "Intelligent recurring-task scheduling",
      "Advanced filtering and multi-sort criteria",
      "Room DB persistent local storage",
      "Real-time analytics and progress dashboards",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Material Design 3", "Room DB", "Firebase"],
    liveUrl: "https://github.com/saikatdeb704-cmyk",
    sourceUrl: "https://github.com/saikatdeb704-cmyk",
    details: {
      overview:
        "Developed a full-featured, production-grade Android task management application using Kotlin, Jetpack Compose, Material Design 3, Room DB, and Firebase.",
      problem:
        "Mobile users need task managers that work completely offline without losing sync, with flexible recurring intervals and clear visual analytics of their habits.",
      solution:
        "Architected an offline-first Android application leveraging Room DB for local persistence, Jetpack Compose for reactive UI, and Firebase for cloud backup and analytics.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Material Design 3",
        "Room DB",
        "Firebase",
        "Android Studio",
      ],
    },
  },
];

export const JOURNEY_DATA = [
  {
    year: "2024",
    title: "FOUNDATION",
    description:
      "Commenced B.Tech in Computer Science & Engineering (AI & ML). Built core foundations in C, Python, Data Structures & Algorithms.",
  },
  {
    year: "2025",
    title: "EXPANSION",
    description:
      "Mastered Kotlin, Jetpack Compose, and modern React/TypeScript development. Built production Android apps and web platforms with Gemini AI SDK.",
  },
  {
    year: "2026",
    title: "BUILD & ACCELERATE",
    description:
      "Current 2nd-year focus: Advanced full-stack systems, mobile engineering, AI agent integrations, and industry-ready open-source projects.",
  },
  {
    year: "2027",
    title: "INTERNSHIPS & SCALE",
    description:
      "Targeting software engineering internships, distributed backend architectures, and deep AI/ML research contributions.",
  },
  {
    year: "2028",
    title: "GRADUATION & IMPACT",
    description:
      "Graduating B.Tech CSE (AI & ML) and stepping into professional software engineering and product innovation.",
  },
];

export const LEARNING_DATA = [
  "React 19",
  "Jetpack Compose",
  "Gemini AI SDK",
  "Kotlin",
  "TypeScript",
  "Room DB",
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Computer Networks",
  "Operating Systems",
  "Full-Stack Web Development",
];

export const COURSEWORK_DATA = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Web Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Operating Systems",
  "Computer Networks",
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "ScholarAI Platform",
    org: "Production Web App",
    icon: "projects",
  },
  {
    title: "Android Task Manager",
    org: "Production Jetpack Compose App",
    icon: "projects",
  },
  {
    title: "AI Interview Simulator",
    org: "Gemini AI Hack & Build",
    icon: "hackathon",
  },
  {
    title: "B.Tech CSE (AI & ML)",
    org: "2nd Year Undergraduate",
    icon: "certificate",
  },
];

export const GITHUB_DATA = {
  username: "saikatdeb704-cmyk",
  stats: {
    projects: "10+",
    technologies: "15+",
    contributions: "200+",
  },
};

export const CONTACT_DATA = {
  heading: ["HAVE AN IDEA?", "LET'S BUILD IT."],
  subtitle:
    "2nd-year B.Tech CSE (AI & ML) student based in Kalyani, India. Available for software internships, project collaborations, and discussions.",
};

