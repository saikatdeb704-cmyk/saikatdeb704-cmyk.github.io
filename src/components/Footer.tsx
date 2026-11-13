"use client";

import { useSyncExternalStore } from "react";
import { SITE_CONFIG } from "@/lib/constants";

interface FooterProps {
  onOpenCommandPalette: () => void;
}

const emptySubscribe = () => () => {};

export default function Footer({ onOpenCommandPalette }: FooterProps) {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="container site-footer">
      <span>
        © {year} {SITE_CONFIG.name}. Built with Next.js, CSS tokens &amp;
        precision.
      </span>
      <div className="footer-links">
        <a href="#top">Back to top ↑</a>
        <button
          type="button"
          onClick={onOpenCommandPalette}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Press <span className="kbd">⌘K</span>
        </button>
      </div>
    </footer>
  );
}
