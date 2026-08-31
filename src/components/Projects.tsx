import { ExternalLink, Layers, MonitorPlay, MessageSquare } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/projects";

const projectIcons: Record<string, React.ReactNode> = {
  "service-provider-platform": <Layers size={18} />,
  "traffic-vehicle-detection": <MonitorPlay size={18} />,
  "prisoner-communication-platform": <MessageSquare size={18} />,
};

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of projects I have built or contributed to throughout my career.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Card header */}
              <div className="project-card-header">
                <div className="project-icon-wrap">
                  {projectIcons[project.id]}
                </div>
                <div className="project-links">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GithubIcon size={16} />
                    </a>
                  ) : (
                    <span
                      className="icon-btn"
                      title="Repository not publicly available"
                      style={{ cursor: "default", opacity: 0.3 }}
                    >
                      <GithubIcon size={16} />
                    </span>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span
                      className="icon-btn"
                      title="Live demo not available"
                      style={{ cursor: "default", opacity: 0.3 }}
                    >
                      <ExternalLink size={16} />
                    </span>
                  )}
                </div>
              </div>

              {/* Title & description */}
              <div>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-desc">{project.longDescription}</p>

              {/* Key features */}
              <div className="project-features">
                {project.features.map((feat) => (
                  <div key={feat} className="project-feature">
                    <span className="project-feature-dot" aria-hidden="true" />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="project-actions">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    id={`project-${project.id}-github-btn`}
                    style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    id={`project-${project.id}-demo-btn`}
                    style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                ) : null}
                {!project.githubUrl && !project.liveUrl && (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      fontStyle: "italic",
                    }}
                  >
                    Private / NDA project
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
