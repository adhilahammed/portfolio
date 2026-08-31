import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/personalInfo";

const contactLinks = [
  {
    id: "contact-email",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={18} />,
    external: false,
  },
  {
    id: "contact-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/adhilahammed",
    href: personalInfo.linkedin,
    icon: <LinkedinIcon size={18} />,
    external: true,
  },
  {
    id: "contact-github",
    label: "GitHub",
    value: "github.com/adhilahammed",
    href: personalInfo.github,
    icon: <GithubIcon size={18} />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div className="contact-text">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">Let's Connect</h2>
            <p>
              I'm open to new opportunities, interesting projects, and conversations
              about frontend development. Feel free to reach out through any of the
              channels below.
            </p>
            <p>
              Whether you have a role to fill, a project idea, or just want to say
              hello — I'd love to hear from you!
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="contact-link"
                >
                  <span className="contact-link-icon">{link.icon}</span>
                  <div className="contact-link-info">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="contact-cta">
            <div className="contact-cta-icon">
              <MessageCircle size={26} />
            </div>
            <h3>Open to Opportunities</h3>
            <p>
              I'm actively looking for software developer roles. If you think I'd
              be a good fit for your team, let's talk!
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              id="contact-cta-email-btn"
            >
              <Mail size={16} />
              Send me an Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="contact-cta-linkedin-btn"
            >
              <LinkedinIcon size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
