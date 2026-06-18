import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 text-sm text-muted md:flex-row md:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. Built for AI/ML and software engineering roles.</p>
        <div className="flex gap-4">
          <a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-ink" href={profile.resume}>Resume</a>
        </div>
      </div>
    </footer>
  );
}
