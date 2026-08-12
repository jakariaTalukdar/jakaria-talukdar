"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  getProjectsByCategory,
  projectCategories,
  projectsData,
  projectsNote,
} from "@/lib/projectsData";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const PREVIEW_LIMIT = 6;
const filters = [{ id: "all", label: "All" }, ...projectCategories];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => getProjectsByCategory(active), [active]);
  const preview = filtered.slice(0, PREVIEW_LIMIT);
  const remaining = filtered.length - preview.length;
  const activeMeta =
    projectCategories.find((category) => category.id === active) || null;

  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          title="Selected"
          accent="Projects"
          subtitle="Browse live work by type — e-commerce, company websites, and more."
        />

        <Reveal>
          <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Project types"
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
                    onClick={() => setActive(filter.id)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      isActive
                        ? "border-primary bg-primary text-black font-semibold shadow-[0_0_24px_rgba(0,255,128,0.2)]"
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

            <Link href="/projects" className="btn self-start lg:self-auto whitespace-nowrap">
              View all projects
            </Link>
          </div>
        </Reveal>

        {activeMeta ? (
          <Reveal delay={40}>
            <p className="mb-5 text-sm text-alpha">{activeMeta.description}</p>
          </Reveal>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {preview.map((project, i) => (
            <Reveal key={`${active}-${project.id}`} delay={(i % 3) * 60}>
              <ProjectCard
                project={project}
                showCategory={active === "all"}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-300">
                Showing{" "}
                <span className="text-primary font-semibold">{preview.length}</span>{" "}
                of {filtered.length}{" "}
                {active === "all" ? "projects" : activeMeta?.label.toLowerCase()}
                {remaining > 0 ? ` · ${remaining} more available` : null}
              </p>
              <p className="text-xs text-alpha mt-1">{projectsNote}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {/* {active !== "all" ? (
                <Link
                  href={`/projects?category=${active}`}
                  className="transparent-button"
                >
                  View all {activeMeta?.label}
                </Link>
              ) : null} */}
              <Link href="/projects" className="btn">
                View all projects
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
