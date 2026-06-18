import Image from "next/image";
import { profile } from "@/data/profile";
import { MotionDiv } from "@/components/Motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="neural-grid pointer-events-none absolute inset-0" />
      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 lg:py-20">
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 text-center md:text-left"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Portfolio</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-ink md:text-7xl">
            {profile.name}
          </h1>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="profile-photo-frame relative mx-auto mt-7 aspect-square min-h-0 w-full max-w-[310px] overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-soft sm:max-w-[360px] md:hidden"
            aria-hidden="true"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.45rem]">
              <Image src="/profile-photo.jpeg" alt="Portrait of Unmesh Bhosale" fill priority sizes="(max-width: 767px) 86vw" className="object-cover object-center" />
            </div>
          </MotionDiv>
          <p className="mx-auto mt-5 max-w-2xl text-2xl font-medium leading-tight text-graphite md:mx-0 md:text-3xl">{profile.headline}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-muted shadow-[0_10px_35px_rgba(18,19,22,0.04)]">
            <span aria-hidden="true">📍</span>
            <span>{profile.location}</span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{profile.tagline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="focus-ring rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-soft">
              View Projects
            </a>
            <a href={profile.resume} className="focus-ring rounded-full border border-line px-5 py-3 text-center text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink" download>
              Download Resume
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="profile-photo-frame relative mx-auto hidden aspect-square min-h-0 w-full overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-soft md:block md:max-w-none"
          aria-hidden="true"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.45rem]">
            <Image src="/profile-photo.jpeg" alt="Portrait of Unmesh Bhosale" fill priority sizes="(min-width: 768px) 42vw, 86vw" className="object-cover object-center" />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
