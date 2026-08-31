import { Mail, ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/personalInfo";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          {/* Main Content */}
          <div>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" aria-hidden="true" />
              Available for opportunities
            </div>

            <h1 className="hero-name">{personalInfo.name}</h1>

            <p className="hero-title">&lt; {personalInfo.title} /&gt;</p>

            <p className="hero-desc">{personalInfo.summary}</p>

            <p className="hero-detail">
              Experience across enterprise applications, administrative dashboards,
              service platforms, vehicle monitoring systems, and communication platforms.
            </p>

            <div className="hero-actions">
              <a
                href={personalInfo.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="hero-view-resume-btn"
              >
                <FileText size={16} />
                View Resume
              </a>
              <button
                className="btn btn-outline"
                onClick={() => scrollTo("#contact")}
                id="hero-contact-btn"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub profile"
                id="hero-github-link"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
              <span style={{ color: "var(--color-border)" }}>·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn profile"
                id="hero-linkedin-link"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
              <span style={{ color: "var(--color-border)" }}>·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-link"
                aria-label="Send email"
                id="hero-email-link"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <aside className="hero-card" aria-label="Quick stats">
            <div className="hero-stat">
              <span className="hero-stat-number">4+</span>
              <span className="hero-stat-label">Years of Experience</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Major Projects</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">15+</span>
              <span className="hero-stat-label">Technologies</span>
            </div>
            <div className="hero-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number" style={{ fontSize: "1.1rem" }}>
                React.js
              </span>
              <span className="hero-stat-label">Primary Stack</span>
            </div>
          </aside>
        </div>

        {/* Scroll hint */}
        <button
          aria-label="Scroll down"
          onClick={() => scrollTo("#about")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginTop: "3.5rem",
            background: "none",
            border: "none",
            color: "var(--color-text-muted)",
            fontSize: "0.78rem",
            cursor: "pointer",
            transition: "color 150ms ease",
            animation: "floatDown 2s infinite ease-in-out",
          }}
        >
          <ArrowDown size={14} />
          Scroll to explore
        </button>
      </div>

      <style>{`
        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  );
}
