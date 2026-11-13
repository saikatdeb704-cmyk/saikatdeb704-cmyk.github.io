// ============================================================
// PORTFOLIO DATA — Saikat Deb Sharma
// ============================================================

export type ThemeId = "obsidian" | "graphite" | "sage" | "paper";

export interface ThemeOption {
  id: ThemeId;
  label: string;
  hint: "Dark" | "Light";
  swatch: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: "obsidian",
    label: "Obsidian & Ice",
    hint: "Dark",
    swatch: "linear-gradient(135deg, #09090b, #38bdf8)",
  },
  {
    id: "graphite",
    label: "Graphite & Amber",
    hint: "Dark",
    swatch: "linear-gradient(135deg, #0c0a09, #f59e0b)",
  },
  {
    id: "sage",
    label: "Midnight & Sage",
    hint: "Dark",
    swatch: "linear-gradient(135deg, #050a08, #34d399)",
  },
  {
    id: "paper",
    label: "Editorial Paper",
    hint: "Light",
    swatch: "linear-gradient(135deg, #f4f4f5, #2563eb)",
  },
];

export const SITE_CONFIG = {
  name: "Saikat Deb Sharma",
  initials: "SDS",
  title: "Saikat Deb Sharma — CSE (AI & ML) · Web & Android Developer",
  description:
    "Saikat Deb Sharma is a 2nd-year B.Tech CSE (AI & ML) student building production-quality React, Android (Kotlin/Jetpack Compose), and Gemini AI applications.",
  url: "https://saikatdeb704-cmyk.github.io",
  ogImage: "/og-image.png",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/saikatdeb704-cmyk",
  linkedin: "https://www.linkedin.com/in/saikat-deb-sharma-805059398/",
  email: "saikatdeb704@gmail.com",
  phone: "(+91) 6295096193",
  phoneHref: "+916295096193",
  location: "Kalyani, IN (Remote OK)",
  resume: "/resume.pdf",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  kicker: "B.Tech CSE (AI & ML) · Web & Android Developer",
  titleLead: "I build production-ready",
  titleHighlight:
    "web, Android, and Gemini AI experiences that feel effortless.",
  description:
    "Motivated 2nd-year B.Tech CSE (AI & ML) student based in Kalyani, India. Proficient across React 19/TypeScript and Kotlin/Jetpack Compose ecosystems, integrating intelligent features with the Gemini AI SDK.",
  metaRows: [
    { label: "Location", value: "Kalyani, IN (Remote OK)" },
    { label: "Education", value: "B.Tech CSE (AI & ML) · 2nd Yr" },
    { label: "Status", value: "Open for Internships & Projects", accent: true },
    { label: "Focus", value: "Web, Android & Gemini AI" },
  ],
};

export type StackTabKey = "frontend" | "android" | "backend";

export const STACK_TABS: { key: StackTabKey; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "android", label: "Android" },
  { key: "backend", label: "Backend & AI" },
];

export const STACK_DATA: Record<StackTabKey, string[]> = {
  frontend: [
    "React 19",
    "TypeScript",
    "Next.js",
    "Tailwind CSS 4",
    "Framer Motion",
    "Vite",
    "JavaScript",
    "HTML5 / CSS3",
  ],
  android: [
    "Kotlin",
    "Jetpack Compose",
    "Material Design 3",
    "Room DB",
    "Retrofit",
    "OkHttp",
    "Android Studio",
  ],
  backend: [
    "Gemini AI SDK",
    "Python",
    "Java",
    "C",
    "Node.js",
    "Express.js",
    "Firebase",
    "REST APIs",
    "Git / GitHub",
  ],
};

export interface ProjectCaseStudy {
  id: "scholar" | "interview" | "taskmanager";
  featured?: boolean;
  topbarLabel: string;
  metaLeft: string;
  metaRight: string;
  title: string;
  summary: string;
  chips: string[];
  drawerMeta: string;
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
  liveUrl: string;
  sourceUrl: string;
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "scholar",
    featured: true,
    topbarLabel: "scholar-ai / knowledge-graph.tsx",
    metaLeft: "2026 · WEB APP & AI",
    metaRight: "REACT 19 + GEMINI AI SDK",
    title: "ScholarAI — Research Knowledge Manager",
    summary:
      "Academic research management platform featuring an intelligent inbox for paper triage, topic tracking dashboards, interactive SVG knowledge graphs, and an integrated Gemini AI research assistant.",
    chips: ["React 19", "TypeScript", "Tailwind CSS 4", "Gemini AI SDK"],
    drawerMeta: "2026 · WEB PLATFORM · GEMINI AI",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "Gemini AI SDK",
      "SVG Graphs",
    ],
    problem:
      "Students and researchers face heavy cognitive overload when triaging academic papers across scattered bookmarks, tracking interconnected topics, and extracting core insights quickly.",
    approach:
      "Built a responsive workspace in React 19 and TypeScript featuring an intelligent paper-triage inbox, topic progress dashboards, custom interactive SVG knowledge graphs, and an embedded Gemini AI assistant for automated concept and summary extraction.",
    outcome:
      "Delivered a unified research workflow that accelerates literature review, visualizes topic connections clearly, and showcases modern front-end architecture paired with Gemini AI.",
    liveUrl: "https://github.com/saikatdeb704-cmyk",
    sourceUrl: "https://github.com/saikatdeb704-cmyk",
  },
  {
    id: "interview",
    topbarLabel: "mock-interview · ai-evaluator",
    metaLeft: "2026 · CONVERSATIONAL AI",
    metaRight: "REAL-TIME FEEDBACK",
    title: "AI-Powered Mock Interview Platform",
    summary:
      "Interactive technical interview simulator generating role-specific questions in real time, analyzing user responses, and providing detailed feedback on communication and technical accuracy.",
    chips: ["React", "TypeScript", "Gemini AI SDK"],
    drawerMeta: "2026 · INTERVIEW SIMULATOR · GEMINI AI",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini AI SDK",
      "Prompt Engineering",
    ],
    problem:
      "Candidates preparing for technical roles rarely get realistic, adaptive mock interviews with structured critique covering both technical depth and communication clarity.",
    approach:
      "Engineered conversational context state management and tailored prompt pipelines using the Gemini AI SDK so the interviewer adapts dynamically to the candidate's target role and prior answers.",
    outcome:
      "Provides realistic end-to-end interview practice with instant, actionable scoring across technical accuracy and communication.",
    liveUrl: "https://github.com/saikatdeb704-cmyk",
    sourceUrl: "https://github.com/saikatdeb704-cmyk",
  },
  {
    id: "taskmanager",
    topbarLabel: "task-manager · jetpack-compose",
    metaLeft: "2025 · ANDROID APP",
    metaRight: "OFFLINE-FIRST · ROOM DB",
    title: "Personal Task Manager (Android)",
    summary:
      "Full-featured, production-grade Android task management application built with Kotlin, Jetpack Compose, Material Design 3, Room DB, and Firebase.",
    chips: ["Kotlin", "Jetpack Compose", "Room DB"],
    drawerMeta: "2025 · ANDROID APPLICATION · KOTLIN",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Room DB",
      "Firebase",
      "Android Studio",
    ],
    problem:
      "Mobile productivity tools often break offline or lack flexible recurring-task scheduling paired with clean, responsive local analytics.",
    approach:
      "Architected an offline-first Android app using Room DB for persistent local storage, Jetpack Compose with Material Design 3 for reactive UI, complete CRUD workflows, multi-criteria filtering/sorting, and Firebase integration.",
    outcome:
      "Delivers reliable offline task execution, intelligent recurring schedules, and real-time productivity analytics dashboards in a polished native experience.",
    liveUrl: "https://github.com/saikatdeb704-cmyk",
    sourceUrl: "https://github.com/saikatdeb704-cmyk",
  },
];

export const JOURNEY_DATA = [
  {
    year: "2025",
    title: "Start & Foundation",
    description:
      "Commenced B.Tech in Computer Science & Engineering (AI & ML). Built core programming foundations in C, Python, Java, and Data Structures & Algorithms.",
    tag: "B.Tech CSE (AI & ML)",
  },
  {
    year: "2026",
    title: "Build & Explore",
    description:
      "Current 2nd-year focus: Shipped ScholarAI, AI-Powered Mock Interview Platform, and Personal Task Manager (Kotlin/Jetpack Compose) integrating React 19, TypeScript, and Gemini AI SDK.",
    tag: "Web, Android & AI",
  },
  {
    year: "2027",
    title: "Deepen & Specialize",
    description:
      "Advancing full-stack systems, machine learning pipelines, DBMS, operating systems, computer networks, and competitive hackathons.",
    tag: "Systems & ML",
  },
  {
    year: "2028",
    title: "Internships & Level Up",
    description:
      "Targeting software engineering internships, industry collaboration, open-source contributions, and scalable distributed architectures.",
    tag: "Industry Experience",
  },
  {
    year: "2029",
    title: "Graduation & Next Chapter",
    description:
      "Graduating B.Tech CSE (AI & ML) and stepping into full-time software engineering and AI-powered product development.",
    tag: "B.Tech Graduate",
  },
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

export const CONTACT_DATA = {
  kicker: "03 / NEXT STEP",
  heading: "Have a project, internship, or role in mind?",
  subtitle:
    "2nd-year B.Tech CSE (AI & ML) student based in Kalyani, India. Available for software internships, project collaborations, and engineering discussions.",
};
