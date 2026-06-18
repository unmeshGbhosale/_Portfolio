import { profile } from "@/data/profile";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="AI/ML direction with production engineering depth.">
      <div className="grid gap-5 text-lg leading-8 text-muted md:grid-cols-2">
        <article className="flex h-full rounded-3xl border border-line bg-white p-6 shadow-[0_10px_50px_rgba(18,19,22,0.04)]">
          <p>{profile.summary}</p>
        </article>
        <article className="flex h-full rounded-3xl border border-line bg-surface p-6 shadow-[0_10px_50px_rgba(18,19,22,0.04)]">
          <p>
            My current work is centered on ML fundamentals, JAX optimization, semantic retrieval, and distributed systems. Earlier full-stack experience gives me a strong base in APIs, databases, product workflows, and client-facing delivery, which I now apply to building practical AI systems end to end.
          </p>
        </article>
      </div>
    </Section>
  );
}
