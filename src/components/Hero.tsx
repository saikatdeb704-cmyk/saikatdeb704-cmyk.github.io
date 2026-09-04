"use client";

import { HERO_DATA, SOCIAL_LINKS } from "@/lib/constants";
import HeroCanvas from "./HeroCanvas";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      <HeroCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="max-w-3xl">
          {/* Name label */}
          <p className="font-mono text-sm lg:text-base text-gray-500 tracking-[0.3em] mb-6 uppercase animate-fade-in">
            {HERO_DATA.name}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
            {HERO_DATA.headline.map((line, i) => (
              <span
                key={i}
                className="block animate-slide-up opacity-0"
                style={{
                  animationDelay: `${i * 150 + 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm lg:text-base text-gray-400 tracking-widest uppercase mb-6 animate-slide-up opacity-0"
            style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
          >
            {HERO_DATA.subtitle}
          </p>

          {/* Intro paragraph */}
          <p
            className="text-base lg:text-lg text-gray-500 max-w-xl leading-relaxed mb-10 animate-slide-up opacity-0"
            style={{ animationDelay: "850ms", animationFillMode: "forwards" }}
          >
            {HERO_DATA.intro}
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up opacity-0"
            style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
          >
            <MagneticButton
              href={HERO_DATA.cta.primary.href}
              className="border border-white text-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-black font-medium justify-center"
            >
              {HERO_DATA.cta.primary.label}
            </MagneticButton>
            <MagneticButton
              href={HERO_DATA.cta.secondary.href}
              download
              className="border border-white/20 text-gray-400 px-8 py-4 text-sm tracking-widest hover:border-white/50 hover:text-white justify-center"
            >
              {HERO_DATA.cta.secondary.label}
            </MagneticButton>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-6 animate-slide-up opacity-0"
            style={{ animationDelay: "1150ms", animationFillMode: "forwards" }}
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-white transition-colors duration-300 tracking-widest uppercase"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <span className="text-gray-800">•</span>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-white transition-colors duration-300 tracking-widest uppercase"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <span className="text-gray-800">•</span>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-xs text-gray-600 hover:text-white transition-colors duration-300 tracking-widest uppercase"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
      </div>
    </section>
  );
}
