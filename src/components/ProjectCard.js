import Link from "next/link";
import { getCategoryLabel } from "@/lib/projectsData";

export default function ProjectCard({ project, delay = 0, showCategory = false }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="glass-card card-hover rounded-xl p-5 h-full flex flex-col group block"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-flex text-[11px] px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary">
          {project.role}
        </span>
        {showCategory ? (
          <span className="inline-flex text-[11px] px-2 py-0.5 rounded-full border border-white/15 bg-white/5 text-alpha">
            {getCategoryLabel(project.category)}
          </span>
        ) : null}
      </div>

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

      <p className="text-[11px] text-primary/80 mt-3 truncate">{project.domain}</p>
    </Link>
  );
}
