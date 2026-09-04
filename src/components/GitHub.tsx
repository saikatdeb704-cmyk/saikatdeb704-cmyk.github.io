"use client";

import { GITHUB_DATA, SOCIAL_LINKS } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function GitHub() {
  // Generate placeholder contribution data
  const weeks = 52;
  const days = 7;
  
  // Use a deterministic pseudo-random function to avoid hydration errors
  const getContributionValue = (wi: number, di: number) => {
    const val = (Math.sin(wi * 12.9898 + di * 78.233) * 43758.5453) % 1;
    return Math.abs(val);
  };

  const contributions = Array.from({ length: weeks }, (_, wi) =>
    Array.from({ length: days }, (_, di) => getContributionValue(wi, di))
  );

  const getOpacity = (value: number) => {
    if (value < 0.15) return "bg-white/[0.02]";
    if (value < 0.35) return "bg-white/[0.06]";
    if (value < 0.55) return "bg-white/[0.12]";
    if (value < 0.75) return "bg-white/[0.20]";
    return "bg-white/[0.35]";
  };

  return (
    <section className="py-32 lg:py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono text-sm text-gray-500 tracking-[0.3em] mb-4 uppercase">
            — Open Source
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            BUILD IN PUBLIC
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-xl mb-12">
            Writing code, building projects, and sharing progress openly.
          </p>
        </AnimatedSection>

        {/* GitHub Contribution Graph */}
        <AnimatedSection delay={100}>
          <div className="bg-[#111] border border-white/5 p-6 lg:p-8 mb-8 overflow-x-auto border-glow">
            <div className="flex gap-[3px] min-w-[700px]">
              {contributions.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => (
                    <div
                      key={`${wi}-${di}`}
                      className={`w-[10px] h-[10px] rounded-[2px] ${getOpacity(
                        day
                      )} hover:ring-1 hover:ring-white/20 transition-all duration-200`}
                      title={`Contribution activity`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {Object.entries(GITHUB_DATA.stats).map(([key, value]) => (
              <div
                key={key}
                className="bg-[#111] border border-white/5 p-6 text-center border-glow"
              >
                <span className="block text-2xl lg:text-3xl font-bold text-white mb-1">
                  {value}
                </span>
                <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                  {key}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* GitHub Link */}
        <AnimatedSection delay={300}>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-gray-400 border border-white/10 px-6 py-3 hover:border-white/30 hover:text-white transition-all duration-300 tracking-widest uppercase group"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            @{GITHUB_DATA.username}
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              ↗
            </span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
