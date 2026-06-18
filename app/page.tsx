import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { getProjects } from "@/lib/projects";

export const dynamic = "force-static";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
