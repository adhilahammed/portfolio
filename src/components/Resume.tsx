import { useState, useEffect } from "react";
import { Download, ExternalLink, FileText, AlertCircle } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

export default function Resume() {
  const [pdfAvailable, setPdfAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if resume.pdf exists in the public folder
    fetch(personalInfo.resumeFile, { method: "HEAD" })
      .then((res) => setPdfAvailable(res.ok))
      .catch(() => setPdfAvailable(false));
  }, []);

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

        {pdfAvailable === false ? (
          /* Placeholder when no PDF is present */
          <div className="resume-placeholder">
            <div className="resume-placeholder-icon">
              <FileText size={48} />
            </div>
            <h3>Resume PDF not found</h3>
            <p>
              To add your resume, place your PDF file in the <code>public/</code> folder
              and name it <code>resume.pdf</code>. It will then be displayed here
              and available to download. The buttons above will work automatically once
              the file is in place.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                justifyContent: "center",
                marginTop: "1.25rem",
                fontSize: "0.8rem",
                color: "var(--color-warning)",
              }}
            >
              <AlertCircle size={14} />
              Add <code>resume.pdf</code> to the <code>public/</code> directory to enable
              preview and download.
            </div>
          </div>
        ) : pdfAvailable === true ? (
          /* Embed PDF when available */
          <div className="resume-embed">
            <iframe
              src={personalInfo.resumeFile}
              title="Adhil Ahammed K Resume"
            />
          </div>
        ) : (
          /* Loading state */
          <div className="resume-placeholder">
            <div className="resume-placeholder-icon">
              <FileText size={48} />
            </div>
            <h3>Checking for resume...</h3>
          </div>
        )}
      </div>
    </section>
  );
}
