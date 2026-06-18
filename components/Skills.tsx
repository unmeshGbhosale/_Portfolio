import { skillGroups } from "@/data/profile";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A practical stack for ML systems and modern software products.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-line bg-white p-5 shadow-[0_10px_40px_rgba(18,19,22,0.04)]">
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-graphite">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
