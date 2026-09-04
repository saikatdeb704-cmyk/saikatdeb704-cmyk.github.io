"use client";

import { ABOUT_DATA } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <AnimatedSection>
          <p className="font-mono text-sm text-gray-500 tracking-[0.3em] mb-16 uppercase">
            — About Me
          </p>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Large statement */}
          <AnimatedSection delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              {ABOUT_DATA.statement.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </AnimatedSection>

          {/* Right: Bio + Principles */}
          <div className="flex flex-col gap-10">
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                {ABOUT_DATA.bio.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-400 leading-relaxed text-base lg:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Principles */}
            <AnimatedSection delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5">
                {ABOUT_DATA.principles.map((p) => (
                  <div key={p.number} className="group">
                    <span className="block font-mono text-xs text-gray-600 mb-2">
                      {p.number}
                    </span>
                    <span className="block text-sm text-white font-medium tracking-widest uppercase group-hover:text-gray-300 transition-colors">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
