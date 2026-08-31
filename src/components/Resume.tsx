import { Download, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Resume</p>
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            Download or view my full resume for a complete overview of my experience and skills.
          </p>
        </div>

        <div className="resume-actions">
          <a
            href={personalInfo.resumeFile}
            download="Adhil_Ahammed_K_Resume.pdf"
            className="btn btn-primary"
            id="resume-download-btn"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href={personalInfo.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="resume-open-btn"
          >
            <ExternalLink size={16} />
            Open in New Tab
          </a>
        </div>

        <div className="resume-embed">
          <iframe
            src={personalInfo.resumeFile}
            title="Adhil Ahammed K Resume"
          />
        </div>
      </div>
    </section>
  );
}
