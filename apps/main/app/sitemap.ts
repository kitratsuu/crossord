import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/app/services/data";
import { posts } from "@/app/blog/data";
import { legalPages } from "@/app/legal/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = ["", "/about", "/services", "/blog", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...legalPages.map((l) => ({
      url: `${base}/legal/${l.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
