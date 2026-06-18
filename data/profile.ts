import type { Education, Experience, SkillGroup } from "@/lib/types";

export const profile = {
  name: "Unmesh Bhosale",
  headline: "AI/ML Engineer & Full-Stack Developer",
  tagline:
    "MS Computer Science student at UMass Amherst building practical AI/ML systems, semantic retrieval workflows, and reliable full-stack products.",
  location: "Amherst, MA 01002",
  email: "ubhosale@umass.edu",
  phone: "+1 (413) 210-0034",
  linkedin: "https://linkedin.com/in/unmeshb",
  github: "https://github.com/unmeshGbhosale",
  resume: "/resume.pdf",
  summary:
    "I am an AI/ML-focused computer science graduate student with hands-on work across neural network optimization, machine learning fundamentals, vector search, distributed systems, and production web applications. My background as a full-stack developer and co-founder helps me connect model-building work with usable, reliable software that ships."
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI/ML",
    skills: [
      "Neural networks",
      "Model evaluation",
      "Feature engineering",
      "Cross-validation",
      "Optimization algorithms",
      "Semantic search",
      "Recommendation workflows",
      "Vector search fundamentals"
    ]
  },
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++ familiarity"]
  },
  {
    title: "Data/Scientific Python",
    skills: ["NumPy", "pandas", "scikit-learn", "JAX basics", "matplotlib", "FAISS", "PyTorch"]
  },
  {
    title: "Backend",
    skills: [
      "REST APIs",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Socket programming",
      "Multithreading",
      "Caching",
      "Fault tolerance"
    ]
  },
  {
    title: "Frontend",
    skills: ["React", "Responsive UI", "Dashboards", "Authentication flows", "Payment integrations"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "DBMS fundamentals"]
  },
  {
    title: "Tools",
    skills: ["Git", "Linux", "Docker", "Debugging", "Benchmarking", "Performance optimization", "Kafka/Spark fundamentals"]
  }
];

export const experiences: Experience[] = [
  {
    company: "AutoAgent",
    role: "Co-Founder",
    location: "Pune, India",
    date: "Apr 2024 - Jan 2026",
    bullets: [
      "Co-founded an IT solutions startup and delivered AI-driven web and backend solutions to 37+ global clients across e-commerce and small business domains.",
      "Designed an AI-powered e-commerce assistant with React, Node.js, Express.js, and MongoDB for natural-language product search, intent parsing, filtering, and recommendations.",
      "Optimized product retrieval and query workflows, reducing product search time by 60% while improving relevance and product discovery.",
      "Worked directly with clients, developers, and product stakeholders to translate business requirements into reliable AI-backed web applications."
    ]
  },
  {
    company: "Search-In",
    role: "Full Stack Web Developer Intern",
    location: "Pune, India",
    date: "Oct 2023 - Mar 2024",
    bullets: [
      "Built full-stack product features including authentication, dashboards, REST APIs, and payment integrations using React, Node.js, Express.js, and MongoDB.",
      "Improved backend reliability and API responsiveness by debugging integration issues, optimizing database queries, and refining request-handling workflows.",
      "Shipped user-facing features in a fast-paced product environment with focus on usability, reliability, and clean frontend/backend integration."
    ]
  }
];

export const education: Education[] = [
  {
    school: "University of Massachusetts Amherst",
    degree: "Master of Science in Computer Science",
    location: "Amherst, MA",
    date: "Jan 2026 - Dec 2027 (Expected)",
    coursework: ["Machine Learning", "Algorithms for Data Science", "Distributed and Operating Systems"]
  },
  {
    school: "Sinhgad College of Engineering",
    degree: "Bachelor of Engineering in Electronics and Telecommunication Engineering",
    location: "Pune, India",
    date: "Aug 2019 - Jul 2023",
    coursework: ["Data Structures and Algorithms", "Deep Learning", "DBMS", "Operating Systems", "Microcontrollers"]
  }
];

export const certifications = [
  {
    title: "Mathematics for Machine Learning and Data Science",
    date: "May 2026 - Present",
    href: "https://learn.deeplearning.ai/certificates/1f527e95-41d2-4a10-ac7f-c73aa73c5afb?usp=sharing"
  },
  {
    title: "Web Development: React and Backend with Node.js",
    date: "Jan 2025",
    href: "https://learn.deeplearning.ai/certificates/1f527e95-41d2-4a10-ac7f-c73aa73c5afb?usp=sharing"
  }
];
