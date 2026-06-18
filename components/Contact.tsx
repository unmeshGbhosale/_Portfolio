import { profile } from "@/data/profile";
import { Section } from "@/components/Section";

type ContactIcon = "mail" | "linkedin" | "github" | "phone";

const contactRows: Array<{
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  external?: boolean;
}> = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/unmeshb",
    href: profile.linkedin,
    icon: "linkedin",
    external: true
  },
  {
    label: "GitHub",
    value: "github.com/unmeshGbhosale",
    href: profile.github,
    icon: "github",
    external: true
  },
  {
    label: "Phone",
    value: profile.phone,
    href: "tel:+14132100034",
    icon: "phone"
  }
];

function ContactIconMark({ icon }: { icon: ContactIcon }) {
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
        <path d="M6.94 8.98H3.74V20h3.2V8.98ZM5.34 4a1.86 1.86 0 1 0 0 3.72A1.86 1.86 0 0 0 5.34 4Zm14.9 9.78c0-3.05-1.63-5.02-4.28-5.02a3.69 3.69 0 0 0-3.32 1.82v-1.6H9.58V20h3.2v-5.45c0-1.43.27-2.82 2.05-2.82 1.75 0 1.77 1.64 1.77 2.91V20h3.2v-6.22h.44Z" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.66-.2.66-.46v-1.7c-2.68.58-3.24-1.15-3.24-1.15-.44-1.12-1.07-1.42-1.07-1.42-.87-.6.07-.58.07-.58.97.07 1.48 1 1.48 1 .86 1.47 2.25 1.04 2.8.8.09-.62.34-1.04.61-1.28-2.14-.24-4.39-1.07-4.39-4.75 0-1.05.37-1.9.99-2.57-.1-.25-.43-1.24.1-2.54 0 0 .82-.26 2.63.98a9.07 9.07 0 0 1 4.8 0c1.82-1.24 2.63-.98 2.63-.98.53 1.3.2 2.29.1 2.54.62.67.99 1.52.99 2.57 0 3.69-2.25 4.5-4.4 4.75.35.3.66.89.66 1.8v2.53c0 .26.18.55.67.46A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-current stroke-[2.2]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 5.16 8.3 4.4c.8-.36 1.73-.03 2.12.76l.9 1.83c.34.69.16 1.52-.43 2.02l-1.04.87a10.52 10.52 0 0 0 4.28 4.28l.87-1.04c.5-.59 1.33-.77 2.02-.43l1.83.9c.79.39 1.12 1.32.76 2.12l-.76 1.68c-.32.7-1.04 1.1-1.8 1a14.84 14.84 0 0 1-11.44-11.44c-.1-.76.3-1.48 1-1.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-current stroke-[2.2]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5h15v9a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 8.25 6.75 5.1 6.75-5.1" />
    </svg>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Open to AI/ML engineering, applied AI, and software engineering roles.">
      <div className="grid gap-4 md:grid-cols-2">
        {contactRows.map((row) => (
          <a
            key={row.label}
            href={row.href}
            target={row.external ? "_blank" : undefined}
            rel={row.external ? "noopener noreferrer" : undefined}
            className="group focus-ring flex items-center justify-between gap-4 rounded-3xl border border-line bg-white p-5 shadow-[0_10px_50px_rgba(18,19,22,0.04)] transition hover:-translate-y-1 hover:border-ink hover:shadow-soft"
          >
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-accent">{row.label}</span>
              <span className="mt-2 block break-all text-lg font-semibold text-ink">{row.value}</span>
            </span>
            <span className="contact-icon-shell grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-accent transition group-hover:border-accent md:h-[72px] md:w-[72px]">
              <ContactIconMark icon={row.icon} />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
