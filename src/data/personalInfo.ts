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
  resumeFile: (() => {
    const file = (import.meta.env.VITE_RESUME_FILE as string) ?? "resume.pdf";
    if (file.startsWith("http://") || file.startsWith("https://")) return file;
    const base = import.meta.env.BASE_URL ?? "/";
    const cleanFile = file.startsWith("/") ? file.slice(1) : file;
    return `${base}${cleanFile}`;
  })(),
  yearsOfExperience: 4,
};
