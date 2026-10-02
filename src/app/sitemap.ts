import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cases } from "@/lib/cases";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  services.forEach((s) => base.push({ url: `${site.url}/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 }));
  cases.forEach((c) => base.push({ url: `${site.url}/portfolio/${c.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));
  posts.forEach((p) => base.push({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.6 }));
  return base;
}
