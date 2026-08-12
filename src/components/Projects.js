import { projectsData, projectsNote } from "@/lib/projectsData";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Selected"
          accent="Projects"
          subtitle="Live production sites shipped for clients across e-commerce, education, corporate, and hospitality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projectsData.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-hover rounded-xl p-5 h-full flex flex-col group block"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-semibold text-white group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <svg
                    className="w-4 h-4 text-alpha group-hover:text-primary shrink-0 mt-1 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>

                <span className="inline-flex self-start text-[11px] px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary mb-3">
                  {project.role}
                </span>

                <p className="text-sm text-alpha leading-relaxed flex-grow mb-4">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-[11px] text-primary/80 mt-3 truncate">
                  {project.domain}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-sm text-alpha mt-10">{projectsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
