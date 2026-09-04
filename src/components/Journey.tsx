"use client";

import { JOURNEY_DATA } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function Journey() {
  return (
    <section id="journey" className="py-32 lg:py-40 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono text-sm text-gray-500 tracking-[0.3em] mb-4 uppercase">
            — My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-16">
            MY JOURNEY
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/5 lg:-translate-x-px" />

          <div className="space-y-16 lg:space-y-24">
            {JOURNEY_DATA.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 150}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col lg:flex-row items-start ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 border border-white/30 bg-[#0a0a0a] z-10 rotate-45 mt-2" />

                  {/* Content */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      i % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <div className="group">
                      <span className="font-mono text-3xl lg:text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 tracking-tight">
                        {item.year}
                      </span>
                      <h3 className="text-lg lg:text-xl font-bold text-white mt-2 mb-2 tracking-widest uppercase">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
