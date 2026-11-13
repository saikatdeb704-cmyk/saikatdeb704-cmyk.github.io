"use client";

import type { ProjectCaseStudy } from "@/lib/constants";

interface CaseStudyDrawerProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyDrawer({
  project,
  onClose,
}: CaseStudyDrawerProps) {
  const isOpen = project !== null;

  return (
    <aside
      className={`drawer ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}
      aria-labelledby="drawerTitle"
    >
      <div className="drawer-top">
        <span
          className="mono"
          style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}
        >
          {project?.drawerMeta ?? "CASE STUDY"}
        </span>
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label="Close Case Study"
        >
          ✕
        </button>
      </div>

      {project && (
        <>
          <div>
            <h2
              id="drawerTitle"
              style={{ fontSize: "1.55rem", marginBottom: "10px" }}
            >
              {project.title}
            </h2>
            <div className="chip-wrap">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="drawer-section">
            <h4>The Problem</h4>
            <p>{project.problem}</p>
          </div>

          <div className="drawer-section">
            <h4>Technical Approach</h4>
            <p>{project.approach}</p>
          </div>

          <div className="drawer-section">
            <h4>Measured Outcome</h4>
            <p>{project.outcome}</p>
          </div>

          <div
            style={{
              marginTop: "auto",
              paddingTop: "16px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: "10px",
            }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid"
            >
              GitHub Profile ↗
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Repository
            </a>
          </div>
        </>
      )}
    </aside>
  );
}

