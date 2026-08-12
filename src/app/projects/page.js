import { Suspense } from "react";
import ProjectsCatalog from "@/components/ProjectsCatalog";

export const metadata = {
  title: "Projects — Jakaria Talukdar",
  description:
    "Browse all featured projects by Jakaria Talukdar, grouped by e-commerce, company websites, and other categories.",
};

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-alpha pt-28">
          Loading projects...
        </div>
      }
    >
      <ProjectsCatalog />
    </Suspense>
  );
}
