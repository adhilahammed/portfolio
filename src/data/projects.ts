export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ksuite-kfm",
    title: "KSuite – File Management Platform",
    description:
      "A scalable enterprise file and application management platform with multi-role workflows, internationalization, and RTK Query-powered data fetching.",
    longDescription:
      "KSuite KFM is a full-featured enterprise frontend application built with React 19 and TypeScript. It handles complex file and application lifecycle workflows including inward management, file routing, services, and legacy records. The platform supports multi-language internationalization via i18next and uses Redux Toolkit with RTK Query for efficient server state management.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "React Router v7",
      "React Hook Form",
      "Zod",
      "Tailwind CSS v4",
      "i18next",
      "Vitest",
    ],
    features: [
      "Enterprise file and application management workflows",
      "Multi-role access control (admin, officers, staff)",
      "Internationalization (i18n) with i18next",
      "Type-safe API integration with RTK Query",
      "Form validation with React Hook Form + Zod",
      "Reusable component architecture with shared UI library",
      "Keyboard shortcut support and accessibility",
      "Automated linting, formatting, and commit conventions",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "ksm-meeting-management",
    title: "Meeting Management",
    description:
      "A comprehensive meeting management system for government bodies covering agenda registration, minutes entry, resolutions, proposals, and dissenting notes.",
    longDescription:
      "KSM Meeting Management is a feature-rich frontend system built for government local body meeting workflows. It covers the full meeting lifecycle — from scheduling and agenda registration to minutes entry, resolution tracking, interpellation handling, and report generation. The system supports multi-role access with distinct user journeys for members, officers, and administrators.",
    technologies: [
      "React.js",
      "JavaScript",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "React Hook Form",
      "React PDF Viewer",
      "TipTap Editor",
      "Vitest",
    ],
    features: [
      "Full meeting lifecycle management (schedule → agenda → minutes → resolution)",
      "Agenda registration and subject creation workflows",
      "Rich text minutes entry with TipTap editor",
      "Interpellation and resolution request handling",
      "Dissenting notes and decision modification tracking",
      "PDF document viewing and generation",
      "Multi-role access (members, officers, admins)",
      "Reports and data export functionality",
      "Leave request and inbox management",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "ksm-egramasabha",
    title: "E-GramaSabha Management",
    description:
      "A digital platform for managing E-GramaSabha (village assembly) meetings, proposals, services, and reports for local governance.",
    longDescription:
      "KSM E-GramaSabha Management is a modern React 19 + TypeScript frontend application built to digitise GramaSabha (village assembly) proceedings. It streamlines proposal submission, meeting scheduling, agenda management, minutes recording, and report generation for local self-government bodies. The application uses Redux Toolkit for state management and Tailwind CSS v4 for a responsive, accessible UI.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Router v8",
      "Tailwind CSS v4",
      "React PDF Viewer",
      "Rich Text Editor",
    ],
    features: [
      "E-GramaSabha meeting scheduling and agenda management",
      "Proposal submission and tracking workflows",
      "Minutes entry with rich text support",
      "Service request and inbox management",
      "User and member management",
      "PDF document preview and download",
      "Reports and data analytics",
      "Role-based access for officers and members",
      "Fully responsive and accessible UI",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
];
