import { MotionSection } from "@/components/Motion";

export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <MotionSection
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-24"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-normal text-ink md:text-5xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </MotionSection>
  );
}
