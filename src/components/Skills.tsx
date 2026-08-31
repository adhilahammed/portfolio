import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            A curated set of tools and frameworks I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skill-category-card">
              <h3 className="skill-category-title">{cat.category}</h3>
              <ul className="skill-list">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <span className="skill-dot" aria-hidden="true" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
