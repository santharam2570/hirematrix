import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, IndianRupee, MapPin } from "lucide-react";
import { getJobSector } from "@/data/job-sectors";
import { formatPosted, type Job } from "@/data/jobs";
import Reveal from "../motion/Reveal";

export default function JobCard({ job, index = 0 }: { job: Job; index?: number }) {
  const sector = getJobSector(job.sector);
  const Icon = sector?.icon ?? BriefcaseBusiness;
  const href = `/jobs/${job.sector}/${job.slug}`;

  return (
    <Reveal delay={(index % 3) * 0.08} y={24}>
      <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
        <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-accent-400 to-accent-300 transition-transform duration-500 group-hover:scale-x-100" />
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-accent-300">
            <Icon className="size-5" />
          </div>
          <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 ring-1 ring-accent-100">
            {job.type}
          </span>
        </div>

        <p className="mt-5 text-xs font-bold tracking-[0.15em] text-accent-600 uppercase">{sector?.name}</p>
        <h3 className="mt-1.5 text-lg leading-snug font-bold">
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {job.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{job.summary}</p>

        <ul className="mt-5 grid gap-2 text-sm text-slate-700">
          <li className="flex items-center gap-2.5">
            <MapPin className="size-4 shrink-0 text-brand-400" /> {job.location}
          </li>
          <li className="flex items-center gap-2.5">
            <BriefcaseBusiness className="size-4 shrink-0 text-brand-400" /> {job.experience}
          </li>
          <li className="flex items-center gap-2.5">
            <IndianRupee className="size-4 shrink-0 text-brand-400" /> {job.salary}
          </li>
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {job.skills.slice(0, 3).map((s) => (
            <span key={s} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-slate-600">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-xs text-slate-500">
          <span>Posted {formatPosted(job.posted)}</span>
          <span className="flex items-center gap-1 font-semibold text-brand-800 transition-colors group-hover:text-accent-600">
            View details <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </article>
    </Reveal>
  );
}
