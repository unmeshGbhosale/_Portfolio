import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:gap-7 md:px-6" aria-label="Primary">
        <div className="flex items-center justify-between gap-3 md:w-auto">
          <a href="#top" className="focus-ring rounded text-lg font-black tracking-[0.2em] text-ink md:text-xl">
            UB
          </a>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-5 overflow-x-auto pb-1 md:justify-center md:gap-8 md:overflow-visible md:pb-0">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring shrink-0 rounded text-[15px] font-bold text-muted transition hover:-translate-y-0.5 hover:text-ink md:text-base">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex md:justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
