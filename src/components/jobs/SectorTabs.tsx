import Link from "next/link";
import { jobSectors } from "@/data/job-sectors";
import { jobs, sectorJobCounts } from "@/data/jobs";

export default function SectorTabs({ active }: { active?: string }) {
  const counts = sectorJobCounts();
  const tabs = [
    { href: "/jobs", label: "All Jobs", count: jobs.length, current: !active },
    ...jobSectors.map((s) => ({
      href: `/jobs/${s.slug}`,
      label: s.name,
      count: counts[s.slug],
      current: active === s.slug,
    })),
  ];

  return (
    <nav aria-label="Job sectors" className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
      <ul className="flex w-max gap-2 lg:w-auto lg:flex-wrap">
        {tabs.map((t) => (
          <li key={t.href}>
            <Link
              href={t.href}
              aria-current={t.current ? "page" : undefined}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                t.current
                  ? "bg-brand-900 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-900"
              }`}
            >
              {t.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  t.current ? "bg-accent-400 text-brand-950" : "bg-paper text-slate-500"
                }`}
              >
                {t.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
