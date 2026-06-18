import { certifications } from "@/data/profile";
import { Section } from "@/components/Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Professional learning across machine learning, data science, and full-stack systems.">
      <div className="space-y-5">
        {certifications.map((certification) => (
          <article key={certification.title} className="rounded-3xl border border-line bg-white p-6 shadow-[0_10px_50px_rgba(18,19,22,0.04)] md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{certification.title}</h3>
                <p className="mt-1 text-muted">Certificate</p>
              </div>
              <p className="shrink-0 whitespace-nowrap rounded-full bg-surface px-4 py-2 text-sm font-medium text-graphite">{certification.date}</p>
            </div>
            <a href={certification.href} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink">
              View Certificate
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
