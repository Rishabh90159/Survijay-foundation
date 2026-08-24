import type { MetadataRoute } from "next";

const baseUrl = "https://survijay-foundation.vercel.app";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.9 },
  { path: "/programs", priority: 0.9 },
  { path: "/get-involved", priority: 0.85 },
  { path: "/gallery", priority: 0.75 },
  { path: "/contact", priority: 0.8 },
  { path: "/impact", priority: 0.55 },
  { path: "/stories", priority: 0.55 },
  { path: "/transparency", priority: 0.65 },
  { path: "/volunteer", priority: 0.65 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
