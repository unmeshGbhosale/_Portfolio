import { education } from "@/data/profile";
import { Section } from "@/components/Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Computer science foundation with ML and systems coursework.">
      <div className="space-y-5">
        {education.map((item) => (
          <article key={item.school} className="rounded-3xl border border-line bg-white p-6 shadow-[0_10px_50px_rgba(18,19,22,0.04)] md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{item.degree}</h3>
                <p className="mt-1 text-muted">{item.school} - {item.location}</p>
              </div>
              <p className="shrink-0 whitespace-nowrap rounded-full bg-surface px-4 py-2 text-sm font-medium text-graphite">{item.date}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <span key={course} className="rounded-full bg-surface px-3 py-1.5 text-sm text-graphite">
                  {course}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
