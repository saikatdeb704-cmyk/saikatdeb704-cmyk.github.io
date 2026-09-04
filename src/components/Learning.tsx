"use client";

import { LEARNING_DATA } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function Learning() {
  // Double the items for seamless infinite scroll
  const doubledItems = [...LEARNING_DATA, ...LEARNING_DATA];

  return (
    <section className="py-32 lg:py-40 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <AnimatedSection>
          <p className="font-mono text-sm text-gray-500 tracking-[0.3em] mb-4 uppercase">
            — Currently Learning
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            CURRENTLY LEARNING
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-4 group">
        <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {doubledItems.map((item, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 border border-white/10 px-6 py-3 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-sm lg:text-base text-gray-400 tracking-widest uppercase whitespace-nowrap font-mono">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative mb-16 group">
        <div className="flex gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...doubledItems].reverse().map((item, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 border border-white/5 px-6 py-3 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-sm lg:text-base text-gray-500 tracking-widest uppercase whitespace-nowrap font-mono">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Statement */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection delay={200}>
          <p className="text-center text-gray-600 text-sm tracking-widest uppercase font-mono">
            Always learning. Always building.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
