import type { Project } from "@/lib/types";
import { ProjectCodeViewer } from "@/components/ProjectCodeViewer";
import { Section } from "@/components/Section";

/*
Future Project Card Template 1
Uncomment this block when you want to add a new project.
Copy this object into data/projects.json, place it inside the top-level array, and update the fields.

{
  "id": "future-project-1",
  "title": "Project title",
  "description": "Short project description.",
  "techStack": ["Python", "React", "PostgreSQL"],
  "highlights": [
    "Bullet point describing the technical problem.",
    "Bullet point describing your implementation.",
    "Bullet point describing impact or result."
  ],
  "links": [
    {
      "label": "GitHub",
      "href": "https://github.com/unmeshGbhosale"
    }
  ],
  "category": "AI/ML",
  "order": 5,
  "date": "Month YYYY - Month YYYY",
  "sourceCode": {
    "fileName": "future-project-1.py",
    "language": "python",
    "code": "def main():\n    print(\"Add your source preview here\")"
  }
}
*/

/*
Future Project Card Template 2
Uncomment this block when you want to add a new project.
Copy this object into data/projects.json, place it inside the top-level array, and update the fields.

{
  "id": "future-project-2",
  "title": "Project title",
  "description": "Short project description.",
  "techStack": ["TypeScript", "Next.js", "Tailwind CSS"],
  "highlights": [
    "Bullet point describing the user-facing feature.",
    "Bullet point describing the architecture or API.",
    "Bullet point describing performance, reliability, or UX impact."
  ],
  "links": [
    {
      "label": "GitHub",
      "href": "https://github.com/unmeshGbhosale"
    }
  ],
  "category": "Full-Stack",
  "order": 6,
  "date": "Month YYYY - Month YYYY",
  "sourceCode": {
    "fileName": "future-component.tsx",
    "language": "typescript",
    "code": "export function FutureComponent() {\n  return <section>Replace with your source preview</section>;\n}"
  }
}
*/

/*
Future Project Card Template 3
Uncomment this block when you want to add a new project.
Copy this object into data/projects.json, place it inside the top-level array, and update the fields.

{
  "id": "future-project-3",
  "title": "Project title",
  "description": "Short project description.",
  "techStack": ["Python", "FastAPI", "Docker"],
  "highlights": [
    "Bullet point describing the backend service.",
    "Bullet point describing caching, scaling, or observability.",
    "Bullet point describing benchmark or reliability results."
  ],
  "links": [
    {
      "label": "GitHub",
      "href": "https://github.com/unmeshGbhosale"
    }
  ],
  "category": "Backend",
  "order": 7,
  "date": "Month YYYY - Month YYYY",
  "sourceCode": {
    "fileName": "future_api.py",
    "language": "python",
    "code": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/health\")\ndef health():\n    return {\"ok\": True}"
  }
}
*/

/*
Future Project Card Template 4
Uncomment this block when you want to add a new project.
Copy this object into data/projects.json, place it inside the top-level array, and update the fields.

{
  "id": "future-project-4",
  "title": "Project title",
  "description": "Short project description.",
  "techStack": ["Python", "scikit-learn", "pandas"],
  "highlights": [
    "Bullet point describing the dataset or ML objective.",
    "Bullet point describing preprocessing, training, or evaluation.",
    "Bullet point describing model performance or analysis."
  ],
  "links": [
    {
      "label": "GitHub",
      "href": "https://github.com/unmeshGbhosale"
    }
  ],
  "category": "AI/ML",
  "order": 8,
  "date": "Month YYYY - Month YYYY",
  "sourceCode": {
    "fileName": "future_model.py",
    "language": "python",
    "code": "from sklearn.metrics import f1_score\n\nscore = f1_score(y_true, y_pred)\nprint(score)"
  }
}
*/

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected AI/ML, retrieval, backend, and full-stack work.">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="group rounded-3xl border border-line bg-white p-6 shadow-[0_10px_50px_rgba(18,19,22,0.04)] transition hover:-translate-y-1 hover:shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">{project.category}</span>
              {project.date ? <span className="text-sm text-muted">{project.date}</span> : null}
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-normal text-ink">{project.title}</h3>
            <p className="mt-3 leading-7 text-muted">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-line px-3 py-1.5 text-sm text-graphite">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a key={`${project.id}-${link.label}`} href={link.href} target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink">
                  {link.label}
                </a>
              ))}
              {project.sourceCode ? <ProjectCodeViewer projectTitle={project.title} sourceCode={project.sourceCode} /> : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
