import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/pdf`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}/pdf`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "monthly" as const,
      priority: 0.5
    }))
  ];
}
