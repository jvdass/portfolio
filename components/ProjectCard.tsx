import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-neutral-300 dark:border-neutral-800 bg-[#F8F7F4] dark:bg-neutral-900 p-8 flex flex-col justify-between hover:border-black dark:hover:border-white transition-all h-full">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-sm inline-block mb-6">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold mb-3 tracking-tight text-neutral-900 dark:text-black">{project.title}</h3>
        <p id="description-projet" className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8">
          {project.description}
        </p>
        <p id="techno" className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8">
            <strong>Technologies : </strong> {project.competences}
        </p>
      </div>

      <div className="flex items-center gap-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 font-mono text-xs font-semibold">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-black dark:text-white hover:opacity-60 transition-opacity"
        >
          VOIR LE PROJET →
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
          >
            LIVE DEMO →
          </a>
        )}
      </div>
    </div>
  );
}