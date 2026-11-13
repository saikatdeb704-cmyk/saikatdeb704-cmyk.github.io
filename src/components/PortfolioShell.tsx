"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  SOCIAL_LINKS,
  THEMES,
  type ProjectCaseStudy,
  type ThemeId,
} from "@/lib/constants";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Journey from "./Journey";
import Contact from "./Contact";
import Footer from "./Footer";
import CaseStudyDrawer from "./CaseStudyDrawer";
import CommandPalette from "./CommandPalette";

const THEME_STORAGE_KEY = "sds-portfolio-theme";
const THEME_EVENT = "sds-theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

function getThemeSnapshot(): ThemeId {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
    if (saved && THEMES.some((t) => t.id === saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access failures in private browsing
  }
  return "obsidian";
}

function getServerThemeSnapshot(): ThemeId {
  return "obsidian";
}

export default function PortfolioShell() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(
    null
  );
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState("");
  const [cmdSelectedIdx, setCmdSelectedIdx] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyTheme = useCallback((nextTheme: ThemeId) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage access failures in private browsing
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  // Synchronize HTML attribute with active theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Pointer spotlight tracking
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const el = spotlightRef.current;
      if (!el) return;
      el.style.setProperty("--px", `${e.clientX}px`);
      el.style.setProperty("--py", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeAllModals = useCallback(() => {
    setActiveProject(null);
    setIsCmdOpen(false);
  }, []);

  const openCommandPalette = useCallback(() => {
    setActiveProject(null);
    setCmdQuery("");
    setCmdSelectedIdx(0);
    setIsCmdOpen(true);
  }, []);

  const openCaseStudy = useCallback((project: ProjectCaseStudy) => {
    setIsCmdOpen(false);
    setActiveProject(project);
  }, []);

  // Global keyboard shortcuts (Cmd/Ctrl+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setActiveProject(null);
        setCmdQuery("");
        setCmdSelectedIdx(0);
        setIsCmdOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        closeAllModals();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeAllModals]);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard?.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const hasModalOpen = activeProject !== null || isCmdOpen;

  return (
    <>
      <div className="ambient-layer" aria-hidden="true" />
      <div className="grain-layer" aria-hidden="true" />
      <div
        ref={spotlightRef}
        className="pointer-spotlight"
        id="spotlight"
        aria-hidden="true"
      />

      <Navbar
        theme={theme}
        onSelectTheme={applyTheme}
        onOpenCommandPalette={openCommandPalette}
      />

      <main id="top" className="container">
        <Hero copiedEmail={copiedEmail} onCopyEmail={handleCopyEmail} />
        <Projects onOpenProject={openCaseStudy} />
        <Journey />
        <Contact />
      </main>

      <Footer onOpenCommandPalette={openCommandPalette} />

      <div
        className={`backdrop ${hasModalOpen ? "open" : ""}`}
        onClick={closeAllModals}
        aria-hidden="true"
      />

      <CaseStudyDrawer project={activeProject} onClose={closeAllModals} />

      <CommandPalette
        isOpen={isCmdOpen}
        query={cmdQuery}
        selectedIdx={cmdSelectedIdx}
        onQueryChange={setCmdQuery}
        onSelectedIdxChange={setCmdSelectedIdx}
        onClose={closeAllModals}
        onSelectTheme={applyTheme}
        onCopyEmail={handleCopyEmail}
        onOpenProject={openCaseStudy}
      />
    </>
  );
}
