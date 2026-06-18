export type Link = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  links: Link[];
  image?: string;
  category: "AI/ML" | "Full-Stack" | "Backend";
  order: number;
  date?: string;
  sourceCode?: {
    fileName: string;
    language: string;
    code: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  date: string;
  coursework: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
