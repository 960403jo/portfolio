import { projects } from "@/data/portfolio";

export const featuredProjectCount = 4;

export const featuredProjects = projects.slice(0, featuredProjectCount);

export const remainingProjects = projects.slice(featuredProjectCount);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
