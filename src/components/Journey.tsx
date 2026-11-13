import { COURSEWORK_DATA, JOURNEY_DATA } from "@/lib/constants";

export default function Journey() {
  return (
    <section id="journey" className="section-block">
      <div className="section-header reveal">
        <h2>Journey &amp; Education</h2>
        <span className="section-index">02 / TIMELINE · 2025 — 2029</span>
      </div>

      <div className="exp-list reveal">
        {JOURNEY_DATA.map((item) => (
          <div key={item.year} className="exp-row">
            <span className="exp-date">{item.year}</span>
            <div className="exp-role">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <span className="exp-company">{item.tag}</span>
          </div>
        ))}
      </div>

      <div className="glass-panel coursework-panel reveal">
        <span className="coursework-label">
          Relevant Coursework &amp; Areas of Interest
        </span>
        <div className="chip-wrap">
          {COURSEWORK_DATA.map((course) => (
            <span key={course} className="chip">
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
