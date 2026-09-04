"use client";

import { SKILLS_DATA } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  return (
    <section id="skills" className="py-32 lg:py-40 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono text-sm text-gray-500 tracking-[0.3em] mb-4 uppercase">
            — Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {SKILLS_DATA.heading}
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-xl mb-16">
            {SKILLS_DATA.subheading}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.categories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 100}>
              <div className="group relative bg-[#111] border border-white/5 p-6 lg:p-8 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 border-glow border-glow-hover h-full">
                {/* Category title */}
                <h3 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-6 pb-4 border-b border-white/5">
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 group/item"
                    >
                      <span className="w-1 h-1 bg-gray-600 group-hover/item:bg-white transition-colors duration-300 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 group-hover:border-white/15 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
