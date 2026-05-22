import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/who-we-are", priority: 0.9 },
  { path: "/framework", priority: 0.95 },
  { path: "/how-we-work", priority: 0.85 },
  { path: "/technology-advisory", priority: 0.85 },
  { path: "/strategic-ventures", priority: 0.85 },
  { path: "/design-studio", priority: 0.85 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
