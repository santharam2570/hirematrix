import type { MetadataRoute } from "next";
import { allCourses } from "@/data/courses";
import { industries } from "@/data/industries";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/courses",
    "/employers",
    "/job-seekers",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...industries.map((i) => ({ url: `${site.url}/industries/${i.slug}`, priority: 0.7 })),
    ...allCourses.map((c) => ({ url: `${site.url}/courses/${c.slug}`, priority: 0.7 })),
  ];
}
