"use client";

import { useEffect, useCallback } from "react";
import { PROJECTS_DATA } from "@/lib/constants";

interface ProjectModalProps {
  project: (typeof PROJECTS_DATA)[0];
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [handleEscape]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#111] border border-white/10 animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right m-6 z-10 w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 bg-[#111]"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="p-8 lg:p-12">
          {/* Header */}
          <span className="font-mono text-xs text-gray-600 tracking-widest">
            PROJECT {project.number}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6 tracking-tight">
            {project.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 mb-8" />

          {/* Overview */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-3">
              Overview
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-3">
              Problem
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.details.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-3">
              Solution
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.details.solution}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-3">
              Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-gray-500 rounded-full flex-shrink-0" />
                  <span className="text-sm text-gray-400">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-10">
            <h3 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-gray-300 bg-white/5 px-3 py-1.5 tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 tracking-widest uppercase"
              >
                LIVE DEMO ↗
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 border border-white/10 px-6 py-3 hover:border-white/30 hover:text-white transition-all duration-300 tracking-widest uppercase"
              >
                SOURCE CODE ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
