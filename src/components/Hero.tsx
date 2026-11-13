"use client";

import { useEffect, useState } from "react";
import {
  HERO_DATA,
  SOCIAL_LINKS,
  STACK_DATA,
  STACK_TABS,
  type StackTabKey,
} from "@/lib/constants";

interface HeroProps {
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

export default function Hero({ copiedEmail, onCopyEmail }: HeroProps) {
  const [liveClock, setLiveClock] = useState("--:-- IST");
  const [activeStack, setActiveStack] = useState<StackTabKey>("frontend");

  useEffect(() => {
    const updateClock = () => {
      const timeStr = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setLiveClock(`${timeStr} IST`);
    };

    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-bento">
      <div className="glass-panel hero-main reveal">
        <div>
          <div className="hero-kicker mono">
            <span>{HERO_DATA.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>{liveClock}</span>
          </div>

          <h1 className="hero-title">
            {HERO_DATA.titleLead} <span>{HERO_DATA.titleHighlight}</span>
          </h1>

          <p className="hero-desc">{HERO_DATA.description}</p>
        </div>

        <div className="hero-actions">
          <a href="#work" className="btn-solid">
            Explore Selected Work ↓
          </a>
          <a
            href={SOCIAL_LINKS.resume}
            download="Saikat_Deb_Sharma_Resume.pdf"
            className="btn-outline"
          >
            Download Resume ↓
          </a>
          <button
            type="button"
            className="btn-outline"
            onClick={onCopyEmail}
          >
            {copiedEmail ? "Copied to clipboard ✓" : "Copy Email"}
          </button>
        </div>
      </div>

      <aside className="hero-side">
        <div className="glass-panel meta-card reveal">
          {HERO_DATA.metaRows.map((row) => (
            <div key={row.label} className="meta-row">
              <span>{row.label}</span>
              <span style={row.accent ? { color: "var(--accent)" } : undefined}>
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div className="glass-panel stack-card reveal">
          <div className="tab-header">
            <span
              className="mono"
              style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}
            >
              TOOLKIT
            </span>
            <div
              className="tab-group"
              role="tablist"
              aria-label="Tech Stack Categories"
            >
              {STACK_TABS.map((tab) => {
                const isSelected = activeStack === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`tab-btn ${isSelected ? "active" : ""}`}
                    onClick={() => setActiveStack(tab.key)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="chip-wrap">
            {STACK_DATA[activeStack].map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
