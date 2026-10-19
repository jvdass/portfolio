import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projets" className="max-w-6xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800">
      <FadeIn>
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-2">PROJETS</p>
      <h2 className="text-4xl font-bold mb-12">Une sélection de travaux récents.</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <FadeIn key={idx} delay={idx * 150}>
          <ProjectCard key={idx} project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}