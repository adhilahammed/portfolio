export interface ResumeLinks {
  isGoogleDrive: boolean;
  viewUrl: string;
  previewUrl: string;
  downloadUrl: string;
}

export function getResumeLinks(fileOrUrl: string): ResumeLinks {
  const gdriveMatch = fileOrUrl.match(
    /(?:drive\.google\.com\/(?:file\/d\/|open\?id=)|docs\.google\.com\/file\/d\/)([a-zA-Z0-9_-]+)/
  );

  if (gdriveMatch) {
    const fileId = gdriveMatch[1];
    return {
      isGoogleDrive: true,
      viewUrl: `https://drive.google.com/file/d/${fileId}/view`,
      previewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
    };
  }

  return {
    isGoogleDrive: false,
    viewUrl: fileOrUrl,
    previewUrl: fileOrUrl,
    downloadUrl: fileOrUrl,
  };
}

const resolvedResumeFile = (() => {
  const file =
    (import.meta.env.VITE_RESUME_FILE as string) ||
    "https://drive.google.com/file/d/1jSyjlfEC2dq79tkyhbpTbtY1I9sW1oVA/view?usp=drive_link";
  if (file.startsWith("http://") || file.startsWith("https://")) return file;
  const base = import.meta.env.BASE_URL ?? "/";
  const cleanFile = file.startsWith("/") ? file.slice(1) : file;
  return `${base}${cleanFile}`;
})();

export const resumeLinks = getResumeLinks(resolvedResumeFile);

export const personalInfo = {
  name: "Adhil Ahammed K",
  title: "Software Developer",
  summary:
    "Software Developer with around 4 years of experience building modern, scalable web applications using React.js, TypeScript, JavaScript, Next.js, Node.js and related technologies.",
  about:
    "I am a Software Developer with around 4 years of professional experience designing and building scalable, user-friendly web applications. I specialise in React.js and TypeScript, with a strong focus on modern software development, API integration, reusable component architecture, and responsive UI. I have delivered enterprise applications, administrative dashboards, service platforms, monitoring systems, and communication platforms throughout my career.",
  email: import.meta.env.VITE_EMAIL as string,
  github: import.meta.env.VITE_GITHUB_URL as string,
  linkedin: import.meta.env.VITE_LINKEDIN_URL as string,
  resumeFile: resumeLinks.viewUrl,
  yearsOfExperience: 4,
};

