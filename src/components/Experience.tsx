import { Briefcase } from "lucide-react";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Work History</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A snapshot of my career as a Frontend Developer over the past 4 years.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              {/* Timeline dot */}
              <div className="experience-dot-wrap">
                <div className="experience-dot" aria-hidden="true" />
              </div>

              {/* Card body */}
              <article className="experience-body">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">
                      <Briefcase
                        size={14}
                        style={{ display: "inline", marginRight: "0.4rem", verticalAlign: "middle", color: "var(--color-accent)" }}
                      />
                      {exp.role}
                    </h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span>{exp.duration}</span>
                    <span
                      style={{
                        padding: "0.15rem 0.55rem",
                        borderRadius: "100px",
                        background: "rgba(56,189,248,0.08)",
                        color: "var(--color-accent)",
                        border: "1px solid rgba(56,189,248,0.15)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="experience-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Responsibilities */}
                <p className="experience-section-label">Key Responsibilities</p>
                <ul className="experience-list-items">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="experience-list-item">
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Achievements */}
                <p className="experience-section-label">Achievements</p>
                <ul className="experience-list-items">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="experience-list-item">
                      {a}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
