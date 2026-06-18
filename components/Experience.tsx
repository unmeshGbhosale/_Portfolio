import { experiences } from "@/data/profile";
import { Section } from "@/components/Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="From client-facing products to AI-backed application workflows.">
      <div className="space-y-5">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.role}`} className="rounded-3xl border border-line bg-white p-6 shadow-[0_10px_50px_rgba(18,19,22,0.04)] md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{experience.role}</h3>
                <p className="mt-1 text-muted">{experience.company} - {experience.location}</p>
              </div>
              <p className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-graphite">{experience.date}</p>
            </div>
            <ul className="mt-6 space-y-3 text-muted">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-7">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
