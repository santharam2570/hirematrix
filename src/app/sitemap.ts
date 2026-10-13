import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { jobSectors } from "@/data/job-sectors";
import { jobPageCount, jobs } from "@/data/jobs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/jobs",
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
    ...Array.from({ length: jobPageCount - 1 }, (_, i) => ({
      url: `${site.url}/jobs/page/${i + 2}`,
      priority: 0.6,
    })),
    ...jobSectors.map((s) => ({ url: `${site.url}/jobs/${s.slug}`, priority: 0.7 })),
    ...jobs.map((j) => ({ url: `${site.url}/jobs/${j.sector}/${j.slug}`, priority: 0.6 })),
  ];
}
