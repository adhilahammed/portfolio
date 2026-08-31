import { Code2, Layers, Zap, Globe, Server, Repeat } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

const highlights = [
  {
    icon: <Code2 size={16} />,
    title: "React.js & TypeScript",
    description: "Deep expertise in building complex UIs with React and TypeScript.",
  },
  {
    icon: <Layers size={16} />,
    title: "Reusable Component Architecture",
    description: "Building scalable, maintainable component libraries used across projects.",
  },
  {
    icon: <Zap size={16} />,
    title: "State Management",
    description: "React Query, Jotai, and custom hooks for efficient data and state handling.",
  },
  {
    icon: <Server size={16} />,
    title: "API Integration",
    description: "Integrating REST APIs and tRPC for type-safe, efficient data fetching.",
  },
  {
    icon: <Globe size={16} />,
    title: "Responsive UI",
    description: "Pixel-perfect, accessible interfaces that work across all devices.",
  },
  {
    icon: <Repeat size={16} />,
    title: "Enterprise Applications",
    description: "Delivered production systems for monitoring, services, and communication.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          {/* Text */}
          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Building products people enjoy using</h2>
            <p>{personalInfo.about}</p>
            <p>
              My approach centres on writing clean, maintainable code and collaborating
              closely with design and backend teams to ship features that are both technically
              sound and delightful to use. I am comfortable working across the full frontend
              stack — from component design to API integration to performance optimisation.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "1rem",
              }}
            >
              Core Strengths
            </p>
            <div className="about-highlights">
              {highlights.map((h) => (
                <div className="about-highlight-item" key={h.title}>
                  <span className="about-highlight-icon">{h.icon}</span>
                  <div className="about-highlight-content">
                    <h4>{h.title}</h4>
                    <p>{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
