import { CONTACT_DATA, SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="section-block">
      <div className="glass-panel contact-panel reveal">
        <div style={{ maxWidth: "54ch" }}>
          <span
            className="mono"
            style={{ fontSize: "0.76rem", color: "var(--accent)" }}
          >
            {CONTACT_DATA.kicker}
          </span>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              margin: "6px 0 8px",
            }}
          >
            {CONTACT_DATA.heading}
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem" }}>
            {CONTACT_DATA.subtitle}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="btn-solid">
            {SOCIAL_LINKS.email}
          </a>
          <a
            href={SOCIAL_LINKS.resume}
            download="Saikat_Deb_Sharma_Resume.pdf"
            className="btn-outline"
          >
            Resume PDF ↓
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub ↗
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn ↗
          </a>
          <a
            href={`tel:${SOCIAL_LINKS.phoneHref}`}
            className="btn-outline mono"
            style={{ fontSize: "0.82rem" }}
          >
            {SOCIAL_LINKS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
