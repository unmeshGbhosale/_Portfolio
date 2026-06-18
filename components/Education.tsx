import { certifications, education } from "@/data/profile";
import { Section } from "@/components/Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Computer science foundation with ML and systems coursework.">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
        <div className="space-y-5">
          {education.map((item) => (
            <article key={item.school} className="rounded-3xl border border-line bg-white p-6">
              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-1 text-muted">{item.school} - {item.location}</p>
                </div>
                <p className="shrink-0 whitespace-nowrap text-sm font-medium text-graphite">{item.date}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span key={course} className="rounded-full bg-surface px-3 py-1.5 text-sm text-graphite">
                    {course}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="space-y-5">
          <h3 className="px-1 text-xl font-semibold text-ink">Certifications</h3>
          <ul className="space-y-5 text-muted">
            {certifications.map((certification) => (
              <li key={certification.title} className="rounded-3xl border border-line bg-white p-6 shadow-[0_10px_50px_rgba(18,19,22,0.04)]">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start lg:flex-col">
                  <p className="text-xl font-semibold leading-snug text-ink">{certification.title}</p>
                  <p className="shrink-0 whitespace-nowrap rounded-full bg-surface px-4 py-2 text-sm font-medium text-graphite">{certification.date}</p>
                </div>
                <a href={certification.href} target="_blank" rel="noopener noreferrer" className="focus-ring mt-5 inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink">
                  View Certificate
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
