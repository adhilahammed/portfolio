import { Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/personalInfo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p
            className="footer-copy"
            style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}
          >
            Built with{" "}
            <Heart
              size={12}
              fill="var(--color-accent)"
              color="var(--color-accent)"
            />{" "}
            using React + Vite + TypeScript
          </p>

          <div className="footer-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
              id="footer-github-link"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
              id="footer-linkedin-link"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="icon-btn"
              aria-label="Email"
              id="footer-email-link"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
