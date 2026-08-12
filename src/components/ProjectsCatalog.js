"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {
  getProjectsByCategory,
  projectCategories,
  projectsData,
  projectsNote,
} from "@/lib/projectsData";

const filters = [{ id: "all", label: "All" }, ...projectCategories];

export default function ProjectsCatalog() {
  const searchParams = useSearchParams();
  const initial =
    searchParams.get("category") &&
    filters.some((f) => f.id === searchParams.get("category"))
      ? searchParams.get("category")
      : "all";

  const [active, setActive] = useState(initial);

  const filtered = useMemo(() => getProjectsByCategory(active), [active]);

  const setCategory = (id) => {
    setActive(id);
    const url =
      id === "all" ? "/projects" : `/projects?category=${id}`;
    window.history.replaceState(null, "", url);
  };

  return (
    <section className="relative py-28 md:py-32 min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-alpha hover:text-primary transition mb-4"
              >
                ← Back to home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                All <span className="gradient-text-static">Projects</span>
              </h1>
              <div className="flex items-center gap-x-1 mb-3">
                <div className="w-20 h-1 rounded-lg bg-primary" />
                <div className="w-3 h-1 rounded-lg bg-primary" />
                <div className="w-7 h-1 rounded-lg bg-primary" />
              </div>
              <p className="text-sm text-alpha max-w-2xl">
                Browse every featured live project by category — e-commerce,
                company websites, and more.
              </p>
            </div>
            <p className="text-sm text-alpha">
              Showing{" "}
              <span className="text-primary font-semibold">{filtered.length}</span>{" "}
              of {projectsData.length}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mb-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Project categories"
          >
            {filters.map((filter) => {
              const count =
                filter.id === "all"
                  ? projectsData.length
                  : getProjectsByCategory(filter.id).length;
              const isActive = active === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(filter.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-primary bg-primary text-black font-semibold"
                      : "border-white/15 bg-white/[0.03] text-gray-300 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {filter.label}
                  <span
                    className={`ml-2 text-xs ${
                      isActive ? "text-black/70" : "text-alpha"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filtered.map((project, i) => (
              <Reveal key={`${active}-${project.id}`} delay={(i % 6) * 50}>
                <ProjectCard project={project} showCategory={active === "all"} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-center text-alpha py-16">
            No projects found in this category.
          </p>
        )}

        <Reveal delay={120}>
          <p className="text-center text-sm text-alpha mt-12">{projectsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
