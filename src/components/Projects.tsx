"use client";

import { PROJECTS_DATA, type ProjectCaseStudy } from "@/lib/constants";

interface ProjectsProps {
  onOpenProject: (project: ProjectCaseStudy) => void;
}

function ProjectWireframe({ id }: { id: ProjectCaseStudy["id"] }) {
  if (id === "scholar") {
    return (
      <svg
        viewBox="0 0 360 120"
        width="100%"
        height="120"
        fill="none"
        aria-hidden="true"
      >
        {/* Left triage sidebar */}
        <rect
          x="8"
          y="14"
          width="96"
          height="92"
          rx="8"
          stroke="var(--border-strong)"
        />
        <rect
          x="18"
          y="26"
          width="52"
          height="6"
          rx="3"
          fill="var(--accent)"
          opacity="0.85"
        />
        <rect
          x="18"
          y="40"
          width="72"
          height="4"
          rx="2"
          fill="var(--text-muted)"
          opacity="0.45"
        />
        <rect
          x="18"
          y="52"
          width="60"
          height="4"
          rx="2"
          fill="var(--text-muted)"
          opacity="0.3"
        />
        <rect
          x="18"
          y="76"
          width="76"
          height="18"
          rx="5"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeWidth="0.8"
        />

        {/* Right SVG Knowledge Graph panel */}
        <rect
          x="116"
          y="14"
          width="236"
          height="92"
          rx="8"
          stroke="var(--border-strong)"
        />
        <line
          x1="158"
          y1="72"
          x2="215"
          y2="46"
          stroke="var(--border-strong)"
          strokeWidth="1.2"
        />
        <line
          x1="215"
          y1="46"
          x2="274"
          y2="68"
          stroke="var(--accent)"
          strokeWidth="1.4"
        />
        <line
          x1="215"
          y1="46"
          x2="296"
          y2="34"
          stroke="var(--border-strong)"
          strokeWidth="1.2"
        />
        <line
          x1="274"
          y1="68"
          x2="324"
          y2="52"
          stroke="var(--accent)"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <circle cx="158" cy="72" r="5" stroke="var(--text-secondary)" />
        <circle cx="215" cy="46" r="7" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.4" />
        <circle cx="274" cy="68" r="5.5" fill="var(--accent)" opacity="0.85" />
        <circle cx="296" cy="34" r="4" stroke="var(--text-secondary)" />
        <circle cx="324" cy="52" r="4" fill="var(--text)" opacity="0.8" />
      </svg>
    );
  }

  if (id === "interview") {
    return (
      <svg
        viewBox="0 0 320 110"
        width="100%"
        height="110"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="20"
          width="300"
          height="22"
          rx="5"
          stroke="var(--border-strong)"
        />
        <rect x="18" y="28" width="108" height="6" rx="3" fill="var(--accent)" />
        <rect
          x="234"
          y="28"
          width="64"
          height="6"
          rx="3"
          fill="var(--text-muted)"
          opacity="0.4"
        />

        <rect
          x="10"
          y="50"
          width="300"
          height="22"
          rx="5"
          stroke="var(--border-strong)"
        />
        <rect
          x="18"
          y="58"
          width="156"
          height="6"
          rx="3"
          fill="var(--text-secondary)"
          opacity="0.6"
        />

        <rect
          x="10"
          y="80"
          width="300"
          height="22"
          rx="5"
          stroke="var(--border-strong)"
        />
        <rect
          x="18"
          y="88"
          width="74"
          height="6"
          rx="3"
          fill="var(--accent)"
          opacity="0.7"
        />
        <rect
          x="212"
          y="88"
          width="86"
          height="6"
          rx="3"
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeWidth="0.6"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 110"
      width="100%"
      height="110"
      fill="none"
      aria-hidden="true"
    >
      {/* Android device frame */}
      <rect
        x="14"
        y="16"
        width="128"
        height="82"
        rx="8"
        stroke="var(--border-strong)"
      />
      <circle cx="34" cy="36" r="6" stroke="var(--accent)" strokeWidth="1.2" />
      <rect
        x="48"
        y="33"
        width="72"
        height="6"
        rx="3"
        fill="var(--text-secondary)"
        opacity="0.6"
      />
      <circle cx="34" cy="58" r="6" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.2" />
      <rect
        x="48"
        y="55"
        width="60"
        height="6"
        rx="3"
        fill="var(--text-muted)"
        opacity="0.45"
      />
      <rect
        x="26"
        y="76"
        width="104"
        height="10"
        rx="4"
        fill="var(--accent-soft)"
      />

      {/* Analytics cards */}
      <rect
        x="156"
        y="16"
        width="150"
        height="36"
        rx="8"
        stroke="var(--border-strong)"
      />
      <rect x="170" y="31" width="84" height="6" rx="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect
        x="156"
        y="62"
        width="150"
        height="36"
        rx="8"
        fill="var(--accent-soft)"
        stroke="var(--accent)"
        strokeWidth="0.8"
      />
      <path
        d="M170 86 L200 76 L232 82 L266 70 L292 74"
        stroke="var(--accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Projects({ onOpenProject }: ProjectsProps) {
  return (
    <section id="work" className="section-block">
      <div className="section-header reveal">
        <h2>Selected Work</h2>
        <span className="section-index">01 / CASE STUDIES</span>
      </div>

      <div className="work-grid">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            className={`glass-panel interactive project-item reveal ${
              project.featured ? "featured" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label={`Open ${project.title} Case Study`}
            onClick={() => onOpenProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenProject(project);
              }
            }}
          >
            <div className="ui-preview">
              <div className="ui-topbar mono">
                <div className="ui-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>{project.topbarLabel}</span>
              </div>
              <ProjectWireframe id={project.id} />
            </div>

            <div>
              <div className="project-meta mono">
                <span>{project.metaLeft}</span>
                <span>{project.metaRight}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="project-footer">
                <div className="chip-wrap">
                  {project.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
                <span className="read-more">Case study →</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
