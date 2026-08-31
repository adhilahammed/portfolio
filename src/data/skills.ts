export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Ant Design" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "tRPC" },
    ],
  },
  {
    category: "Database / ORM",
    skills: [
      { name: "PostgreSQL" },
      { name: "Prisma" },
    ],
  },
  {
    category: "State / Data / Forms",
    skills: [
      { name: "React Query" },
      { name: "React Hook Form" },
      { name: "Jotai" },
      { name: "Zod" },
      { name: "Yup" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jira" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Vite" },
    ],
  },
];
