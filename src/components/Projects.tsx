"use client";

import { useState } from "react";
import { PROJECTS_DATA } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS_DATA)[0] | null
  >(null);

  return (
    <section id="projects" className="py-32 lg:py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="font-mono text-sm text-gray-500 tracking-[0.3em] mb-4 uppercase">
            — Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            SELECTED WORK
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-xl mb-16">
            A collection of things I&apos;ve built, explored, and experimented
            with.
          </p>
        </AnimatedSection>

        {/* Featured project (large card) */}
        <AnimatedSection delay={100} className="mb-8">
          <button
            onClick={() => setSelectedProject(PROJECTS_DATA[0])}
            className="w-full text-left group relative bg-[#111] border border-white/5 p-8 lg:p-12 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 border-glow border-glow-hover"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <span className="font-mono text-xs text-gray-600 tracking-widest">
                  PROJECT {PROJECTS_DATA[0].number}
                </span>
                <h3 className="text-2xl lg:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
                  {PROJECTS_DATA[0].title}
                </h3>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mb-6">
                  {PROJECTS_DATA[0].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                  {PROJECTS_DATA[0].features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-gray-500 font-mono"
                    >
                      • {f}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {PROJECTS_DATA[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  {PROJECTS_DATA[0].liveUrl && (
                    <a
                      href={PROJECTS_DATA[0].liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 tracking-widest uppercase"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                  {PROJECTS_DATA[0].sourceUrl && (
                    <a
                      href={PROJECTS_DATA[0].sourceUrl}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 border border-white/10 px-5 py-2.5 hover:border-white/30 hover:text-white transition-all duration-300 tracking-widest uppercase"
                    >
                      SOURCE CODE ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Abstract geometric graphic */}
              <div className="hidden lg:flex items-center justify-center w-64 h-64 relative">
                <div className="absolute inset-0 border border-white/5 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
                <div className="absolute inset-4 border border-white/5 -rotate-6 group-hover:rotate-3 transition-transform duration-700" />
                <div className="absolute inset-8 border border-white/8 rotate-3 group-hover:-rotate-3 transition-transform duration-700" />
                <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors duration-500" />
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
              ↗
            </div>
          </button>
        </AnimatedSection>

        {/* Other projects (3-column grid) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.slice(1).map((project, i) => (
            <AnimatedSection key={project.id} delay={(i + 1) * 100}>
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left group relative bg-[#111] border border-white/5 p-6 lg:p-8 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 border-glow border-glow-hover h-full flex flex-col"
              >
                <span className="font-mono text-xs text-gray-600 tracking-widest">
                  PROJECT {project.number}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-white mt-3 mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-gray-500 border border-white/5 px-3 py-1 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
