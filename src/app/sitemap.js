import { projectsData } from "@/lib/projectsData";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jakaria-talukdar.com";

export default function sitemap() {
  const staticRoutes = ["", "/projects"];

  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "weekly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...projectsData.map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];

  return routes;
}
