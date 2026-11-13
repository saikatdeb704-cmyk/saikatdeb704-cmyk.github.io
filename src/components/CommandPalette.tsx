"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  PROJECTS_DATA,
  SOCIAL_LINKS,
  THEMES,
  type ProjectCaseStudy,
  type ThemeId,
} from "@/lib/constants";

interface CommandItem {
  label: string;
  hint: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  query: string;
  selectedIdx: number;
  onQueryChange: (query: string) => void;
  onSelectedIdxChange: (idx: number) => void;
  onClose: () => void;
  onSelectTheme: (theme: ThemeId) => void;
  onCopyEmail: () => void;
  onOpenProject: (project: ProjectCaseStudy) => void;
}

export default function CommandPalette({
  isOpen,
  query,
  selectedIdx,
  onQueryChange,
  onSelectedIdxChange,
  onClose,
  onSelectTheme,
  onCopyEmail,
  onOpenProject,
}: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = useMemo(
    () => [
      {
        label: "Go to Selected Work",
        hint: "Section",
        action: () => {
          window.location.hash = "#work";
        },
      },
      {
        label: "Go to Journey (2025–2029)",
        hint: "Section",
        action: () => {
          window.location.hash = "#journey";
        },
      },
      {
        label: "Go to Contact",
        hint: "Section",
        action: () => {
          window.location.hash = "#contact";
        },
      },
      {
        label: "Download Resume (PDF)",
        hint: "PDF",
        action: () => {
          const a = document.createElement("a");
          a.href = SOCIAL_LINKS.resume;
          a.download = "Saikat_Deb_Sharma_Resume.pdf";
          a.click();
        },
      },
      {
        label: "Copy Email Address",
        hint: "Action",
        action: onCopyEmail,
      },
      ...PROJECTS_DATA.map((proj) => ({
        label: `Open Case Study: ${proj.title}`,
        hint: "Project",
        action: () => onOpenProject(proj),
      })),
      ...THEMES.map((t) => ({
        label: `Theme: ${t.label}`,
        hint: t.hint,
        action: () => onSelectTheme(t.id),
      })),
    ],
    [onCopyEmail, onOpenProject, onSelectTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filtered.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      onSelectedIdxChange((selectedIdx + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onSelectedIdxChange(
        (selectedIdx - 1 + filtered.length) % filtered.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const chosen = filtered[selectedIdx];
      onClose();
      chosen?.action();
    }
  };

  return (
    <div
      className={`cmd-modal ${isOpen ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
      aria-hidden={!isOpen}
    >
      <input
        ref={inputRef}
        type="text"
        className="cmd-input"
        value={query}
        onChange={(e) => {
          onQueryChange(e.target.value);
          onSelectedIdxChange(0);
        }}
        onKeyDown={handleInputKeyDown}
        placeholder="Type a command or search (e.g. theme, work, resume, email)..."
        autoComplete="off"
      />
      <div className="cmd-list">
        {filtered.length ? (
          filtered.map((cmd, idx) => (
            <button
              key={cmd.label}
              type="button"
              className={`cmd-item ${idx === selectedIdx ? "selected" : ""}`}
              onMouseEnter={() => onSelectedIdxChange(idx)}
              onClick={() => {
                onClose();
                cmd.action();
              }}
            >
              <span>{cmd.label}</span>
              <span
                className="mono"
                style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}
              >
                {cmd.hint}
              </span>
            </button>
          ))
        ) : (
          <div
            style={{
              padding: "14px",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            No matching commands.
          </div>
        )}
      </div>
    </div>
  );
}
