// ============================================================
// PORTFOLIO DATA — Edit this file to update all website content
// ============================================================

export const SITE_CONFIG = {
  name: "Saikat Deb Sharma",
  initials: "SD",
  title: "Saikat Deb Sharma — AI/ML Developer & Builder",
  description:
    "Personal portfolio of Saikat Deb Sharma — BTech CSE (AI/ML) student, Python developer, and AI enthusiast building the future with code.",
  url: "https://saikatdeb.dev",
  ogImage: "/og-image.png",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/saikatdeb704-cmyk",
  linkedin: "https://www.linkedin.com/in/saikat-deb-sharma-805059398/",
  email: "saikatdeb704@gmail.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  name: "SAIKAT DEB SHARMA",
  headline: ["BUILDING WITH CODE.", "EXPLORING AI.", "CREATING THE FUTURE."],
  subtitle: "BTech CSE (AI/ML) Student • Python Developer • AI Enthusiast",
  intro:
    "I'm a Computer Science student passionate about Artificial Intelligence, Machine Learning, software development, and building useful digital products.",
  cta: {
    primary: { label: "VIEW MY WORK →", href: "#projects" },
    secondary: { label: "DOWNLOAD RESUME ↓", href: "/resume.pdf" },
  },
};

export const ABOUT_DATA = {
  statement: [
    "CURIOUS ABOUT HOW",
    "TECHNOLOGY WORKS.",
    "OBSESSED WITH BUILDING.",
  ],
  bio: [
    "Hi, I'm Saikat. I'm a BTech CSE student specializing in Artificial Intelligence & Machine Learning. I'm passionate about understanding how AI works and turning ideas into practical applications.",
    "I enjoy programming, experimenting with AI tools, developing web applications, and participating in technology projects and hackathons.",
    "My goal is to continuously improve my technical skills and eventually build meaningful products powered by technology and AI.",
  ],
  principles: [
    { number: "01", label: "LEARN" },
    { number: "02", label: "BUILD" },
    { number: "03", label: "EXPERIMENT" },
    { number: "04", label: "IMPROVE" },
  ],
};

export const SKILLS_DATA = {
  heading: "TECH STACK",
  subheading: "Tools, technologies and concepts I'm currently working with.",
  categories: [
    {
      title: "Programming",
      skills: ["Python", "C", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "AI / ML",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Generative AI",
        "AI Tools",
        "Prompt Engineering",
      ],
    },
    {
      title: "Development",
      skills: ["Web Development", "Next.js", "React", "Git", "GitHub"],
    },
    {
      title: "Tools",
      skills: ["Google AI Studio", "ChatGPT", "VS Code", "GitHub"],
    },
  ],
};

export const PROJECTS_DATA = [
  {
    id: "project-manager",
    number: "01",
    title: "Project Manager Web App",
    description:
      "An AI-powered project management web application designed to organize tasks, priorities, deadlines, and assignments.",
    features: [
      "Task creation",
      "Priority tagging",
      "Deadline tracking",
      "Work assignment",
      "AI-assisted workflow",
    ],
    tags: ["AI", "Web App", "Project Management"],
    liveUrl: "#",
    sourceUrl: "#",
    details: {
      overview:
        "A comprehensive project management tool that leverages AI to streamline task organization and team workflow.",
      problem:
        "Traditional project management tools lack intelligent task prioritization and workflow suggestions.",
      solution:
        "Built an AI-powered web app that automatically suggests task priorities, deadlines, and optimal work assignments based on project context.",
      technologies: ["Python", "React", "Next.js", "AI APIs"],
    },
  },
  {
    id: "skillgap-ai",
    number: "02",
    title: "SkillGap AI",
    description:
      "An AI-powered concept designed to identify the gap between a student's current skills and the skills required for a target career.",
    features: [
      "Skill assessment",
      "Career matching",
      "Gap analysis",
      "Learning path suggestions",
    ],
    tags: ["AI", "Career", "Machine Learning"],
    liveUrl: null,
    sourceUrl: null,
    details: {
      overview:
        "A smart career guidance tool that maps student skills against industry requirements.",
      problem:
        "Students often don't know what skills they need to develop for their dream careers.",
      solution:
        "An AI system that analyzes current skills, compares with target career requirements, and suggests personalized learning paths.",
      technologies: ["Python", "Machine Learning", "NLP"],
    },
  },
  {
    id: "lipread-live",
    number: "03",
    title: "LipRead Live",
    description:
      "A concept focused on silent speech recognition and accessibility using AI.",
    features: [
      "Real-time lip reading",
      "Speech-to-text conversion",
      "Accessibility features",
      "Computer vision pipeline",
    ],
    tags: ["AI", "Accessibility", "Computer Vision"],
    liveUrl: null,
    sourceUrl: null,
    details: {
      overview:
        "An accessibility-focused AI tool that reads lip movements to generate text in real-time.",
      problem:
        "People with hearing impairments face communication barriers in environments without sign language support.",
      solution:
        "A computer vision system that interprets lip movements and converts them to text, enabling silent communication.",
      technologies: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
    },
  },
  {
    id: "research-inbox",
    number: "04",
    title: "Personal Research Inbox",
    description:
      "A productivity concept for collecting papers, articles, videos, repositories, and other research material in one organized workspace.",
    features: [
      "Content aggregation",
      "Smart categorization",
      "Search & filtering",
      "Reading queue",
    ],
    tags: ["AI", "Productivity", "Research"],
    liveUrl: null,
    sourceUrl: null,
    details: {
      overview:
        "A unified workspace for organizing and managing research materials from multiple sources.",
      problem:
        "Research materials are scattered across bookmarks, tabs, downloads, and different platforms.",
      solution:
        "A centralized inbox that collects, categorizes, and organizes research content with AI-powered tagging.",
      technologies: ["React", "Next.js", "AI APIs", "Web Scraping"],
    },
  },
];

export const JOURNEY_DATA = [
  {
    year: "2025",
    title: "START",
    description:
      "Started my BTech journey in Computer Science & Engineering with AI/ML.",
  },
  {
    year: "2026",
    title: "EXPLORE",
    description:
      "Started building projects, learning programming, experimenting with AI tools, and participating in hackathons.",
  },
  {
    year: "2027",
    title: "BUILD",
    description:
      "Focus on DSA, Machine Learning, full-stack development, and serious projects.",
  },
  {
    year: "2028",
    title: "LEVEL UP",
    description:
      "Internships, advanced AI/ML projects, open-source contributions, and competitive hackathons.",
  },
  {
    year: "2029",
    title: "NEXT CHAPTER",
    description:
      "Prepare for professional opportunities in AI/ML and software development.",
  },
];

export const LEARNING_DATA = [
  "Python",
  "DSA",
  "Machine Learning",
  "Deep Learning",
  "Full-Stack Development",
  "Generative AI",
  "System Design",
  "Open Source",
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "AI Tools Workshop",
    org: "Be10x",
    icon: "workshop",
  },
  {
    title: "ChatGPT Certification",
    org: "Be10x",
    icon: "certificate",
  },
  {
    title: "Hackathon Projects",
    org: "Various Events",
    icon: "hackathon",
  },
  {
    title: "Personal AI/Web Projects",
    org: "Self-Built",
    icon: "projects",
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
    "I'm always interested in learning, collaborating, experimenting, and building interesting things.",
};
