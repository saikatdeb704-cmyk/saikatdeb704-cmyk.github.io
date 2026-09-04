"use client";

import { ACHIEVEMENTS_DATA } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, string> = {
  workshop: "⚡",
  certificate: "📜",
  hackathon: "🏆",
  projects: "🔧",
};

export default function Achievements() {
  return (
    <section className="py-32 lg:py-40 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono text-sm text-gray-500 tracking-[0.3em] mb-4 uppercase">
            — Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-16">
            ACHIEVEMENTS
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_DATA.map((achievement, i) => (
            <AnimatedSection key={achievement.title} delay={i * 100}>
              <div className="group bg-[#111] border border-white/5 p-6 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 border-glow border-glow-hover h-full">
                {/* Icon */}
                <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  {iconMap[achievement.icon] || "◆"}
                </div>

                <h3 className="text-sm font-medium text-white mb-1 tracking-wide">
                  {achievement.title}
                </h3>
                <p className="text-xs text-gray-500 font-mono tracking-wider">
                  {achievement.org}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
