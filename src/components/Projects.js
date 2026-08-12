import Link from "next/link";
import { getGroupedProjects, projectsNote } from "@/lib/projectsData";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const PREVIEW_PER_CATEGORY = 3;

export default function Projects() {
  const grouped = getGroupedProjects();

  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Selected"
          accent="Projects"
          subtitle="Live production sites grouped by e-commerce, company websites, and more."
        />

        <div className="space-y-12">
          {grouped.map((group, groupIndex) => {
            const preview = group.projects.slice(0, PREVIEW_PER_CATEGORY);
            const remaining = group.projects.length - preview.length;

            return (
              <div key={group.id}>
                <Reveal delay={groupIndex * 60}>
                  <div className="mb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                        <span className="gradient-text-static">{group.label}</span>
                        <span className="text-xs font-medium text-alpha border border-white/10 rounded-full px-2 py-0.5">
                          {group.projects.length}
                        </span>
                      </h3>
                      <p className="text-sm text-alpha mt-1">{group.description}</p>
                    </div>
                    <Link
                      href={`/projects?category=${group.id}`}
                      className="text-sm text-primary hover:underline self-start sm:self-auto"
                    >
                      View all {group.label.toLowerCase()} →
                    </Link>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {preview.map((project, i) => (
                    <Reveal key={project.id} delay={(i % 3) * 70}>
                      <ProjectCard project={project} />
                    </Reveal>
                  ))}
                </div>

                {remaining > 0 ? (
                  <Reveal delay={120}>
                    <p className="mt-3 text-xs text-alpha">
                      +{remaining} more in this category on the projects page.
                    </p>
                  </Reveal>
                ) : null}
              </div>
            );
          })}
        </div>

        <Reveal delay={160}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-center text-sm text-alpha max-w-2xl">{projectsNote}</p>
            <Link href="/projects" className="btn">
              View all projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
