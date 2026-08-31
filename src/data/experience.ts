export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "Company 1",
    duration: "Add your start date – Add your end date",
    type: "Full-time",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "Node.js",
      "Tailwind CSS",
      "React Query",
    ],
    responsibilities: [
      "Developed and maintained a unified service provider platform using Next.js and tRPC",
      "Designed and built reusable React components and UI libraries for enterprise applications",
      "Integrated REST APIs and type-safe tRPC endpoints to power dynamic user interfaces",
      "Implemented complex form validation using React Hook Form, Zod, and Yup",
      "Collaborated with backend teams to define and consume API contracts",
      "Participated in code reviews and contributed to architectural decisions",
    ],
    achievements: [
      "Reduced page load time by optimizing component architecture and leveraging React Query for data caching",
      "Built a reusable component library adopted across multiple projects",
      "Delivered an enterprise-grade administrative dashboard on schedule",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Company 2",
    duration: "Add your start date – Add your end date",
    type: "Full-time",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Ant Design",
      "Node.js",
      "REST APIs",
      "Git",
    ],
    responsibilities: [
      "Built a traffic vehicle detection and monitoring system with real-time data handling",
      "Developed an administrative dashboard for managing vehicle detections, filtering, and search",
      "Created a prisoner communication platform with multi-role access (inmates, relatives, admins)",
      "Implemented video communication functionality within the prisoner communication system",
      "Developed responsive, cross-browser-compatible UIs using React.js and TypeScript",
      "Worked closely with backend engineers to integrate APIs into complex workflows",
    ],
    achievements: [
      "Delivered a fully functional multi-role communication platform with video capabilities",
      "Implemented an efficient filtering and search system handling large volumes of vehicle data",
      "Improved UI performance through component optimization and lazy loading",
    ],
  },
];
