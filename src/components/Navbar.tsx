"use client";

import {
  NAV_LINKS,
  SITE_CONFIG,
  SOCIAL_LINKS,
  THEMES,
  type ThemeId,
} from "@/lib/constants";

interface NavbarProps {
  theme: ThemeId;
  onSelectTheme: (theme: ThemeId) => void;
  onOpenCommandPalette: () => void;
}

export default function Navbar({
  theme,
  onSelectTheme,
  onOpenCommandPalette,
}: NavbarProps) {
  return (
    <header className="site-header">
      <nav
        className="nav-bar glass-panel"
        aria-label="Primary Navigation"
      >
        <a href="#top" className="nav-identity">
          <span className="status-indicator" aria-hidden="true" />
          <span>{SITE_CONFIG.name}</span>
        </a>

        <ul className="nav-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a
              href={SOCIAL_LINKS.resume}
              download="Saikat_Deb_Sharma_Resume.pdf"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        <div className="nav-controls">
          <div
            className="theme-pills"
            role="group"
            aria-label="Color Palette Switcher"
          >
            {THEMES.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`theme-dot ${theme === option.id ? "active" : ""}`}
                onClick={() => onSelectTheme(option.id)}
                title={option.label}
                style={{ background: option.swatch }}
                aria-label={`${option.label} Theme`}
                aria-pressed={theme === option.id}
              />
            ))}
          </div>

          <button
            type="button"
            className="cmd-btn"
            onClick={onOpenCommandPalette}
            aria-label="Open Command Menu"
          >
            <span>Menu</span>
            <span className="kbd">⌘K</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
