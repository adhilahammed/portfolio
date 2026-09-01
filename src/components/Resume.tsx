import { Download, ExternalLink } from "lucide-react";
import { personalInfo, resumeLinks } from "../data/personalInfo";

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
            href={resumeLinks.downloadUrl}
            download={resumeLinks.isGoogleDrive ? undefined : "Adhil_Ahammed_K_Resume.pdf"}
            target={resumeLinks.isGoogleDrive ? "_blank" : undefined}
            rel={resumeLinks.isGoogleDrive ? "noopener noreferrer" : undefined}
            className="btn btn-primary"
            id="resume-download-btn"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href={resumeLinks.viewUrl}
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
          {resumeLinks.isGoogleDrive ? (
            <iframe
              src={resumeLinks.previewUrl}
              title="Adhil Ahammed K Resume"
              width="100%"
              height="100%"
              allow="autoplay"
            />
          ) : (
            <object
              data={personalInfo.resumeFile}
              type="application/pdf"
              width="100%"
              height="100%"
              title="Adhil Ahammed K Resume"
            >
              <iframe
                src={personalInfo.resumeFile}
                title="Adhil Ahammed K Resume"
              >
                <p>
                  Your browser does not support PDF embedding. Please{" "}
                  <a href={personalInfo.resumeFile} target="_blank" rel="noopener noreferrer">
                    click here to view the PDF
                  </a>
                  .
                </p>
              </iframe>
            </object>
          )}
        </div>
      </div>
    </section>
  );
}

