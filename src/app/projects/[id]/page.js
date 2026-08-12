import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import ProjectScreenshots from "@/components/ProjectScreenshots";
import Reveal from "@/components/Reveal";
import {
  getCategoryLabel,
  getProjectById,
  getProjectScreenshots,
  getRelatedProjects,
  projectsData,
} from "@/lib/projectsData";

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return { title: "Project Not Found — Jakaria Talukdar" };
  }

  return {
    title: `${project.title} — Project Details | Jakaria Talukdar`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Jakaria Talukdar`,
      description: project.summary,
      url: project.url,
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const screenshots = getProjectScreenshots(project);
  const related = getRelatedProjects(project);
  const categoryLabel = getCategoryLabel(project.category);

  return (
    <section className="relative py-28 md:py-32 min-h-screen bg-gradient-to-b from-black via-[#0a0a12] to-gray-900 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 10%, rgba(0,255,128,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-alpha">
            <Link href="/projects" className="hover:text-primary transition">
              All projects
            </Link>
            <span>/</span>
            <Link
              href={`/projects?category=${project.category}`}
              className="hover:text-primary transition"
            >
              {categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-wider text-primary">
                  {categoryLabel}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-alpha">
                  {project.role}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-alpha">
                  {project.year}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mb-6">
                {project.overview || project.summary}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-2"
                >
                  View Live
                  <svg
                    className="h-4 w-4"
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
                </a>
                <Link href="/projects" className="transparent-button">
                  Back to projects
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="glass-card rounded-2xl p-5 space-y-4">
                <h2 className="text-sm uppercase tracking-[0.18em] text-alpha">
                  Project info
                </h2>
                <InfoRow label="Client" value={project.client || project.title} />
                <InfoRow label="Role" value={project.role} />
                <InfoRow label="Year" value={project.year || "—"} />
                <InfoRow label="Category" value={categoryLabel} />
                <InfoRow label="Domain" value={project.domain} />
                <div>
                  <p className="text-xs text-alpha mb-2">Tech stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 text-[11px] text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <Reveal delay={100} className="lg:col-span-8">
            <ProjectScreenshots
              screenshots={screenshots}
              projectTitle={project.title}
              liveUrl={project.url}
            />
          </Reveal>

          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={140}>
              <div className="glass-card rounded-2xl p-5">
                <h2 className="text-lg font-semibold text-white mb-4">
                  Key <span className="gradient-text-static">Features</span>
                </h2>
                <ul className="space-y-3">
                  {(project.features || []).map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 text-sm text-gray-300 leading-relaxed"
                    >
                      <span className="mt-1 text-primary" aria-hidden="true">
                        ▸
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="glass-card rounded-2xl p-5">
                <h2 className="text-lg font-semibold text-white mb-4">
                  My <span className="gradient-text-static">Role</span>
                </h2>
                <ul className="space-y-3">
                  {(project.responsibilities || []).map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-gray-300 leading-relaxed"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {related.length > 0 ? (
          <Reveal delay={120}>
            <div>
              <div className="mb-5 flex items-end justify-between gap-3">
                <h2 className="text-xl font-semibold text-white">
                  Related <span className="gradient-text-static">Projects</span>
                </h2>
                <Link
                  href={`/projects?category=${project.category}`}
                  className="text-sm text-primary hover:underline"
                >
                  View category →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((item) => (
                  <ProjectCard key={item.id} project={item} />
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-3">
      <span className="text-xs text-alpha">{label}</span>
      <span className="text-sm text-gray-200 text-right">{value}</span>
    </div>
  );
}
