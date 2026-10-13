import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { jobSectors } from "@/data/job-sectors";
import { JOBS_PER_PAGE, jobPageCount, jobs, jobsOnPage, sectorJobCounts } from "@/data/jobs";
import { whatsappLink } from "@/lib/site";
import PageHero from "../PageHero";
import SectionHeading from "../SectionHeading";
import Reveal from "../motion/Reveal";
import EnquireButton from "./EnquireButton";
import JobCard from "./JobCard";
import JobsCta from "./JobsCta";
import Pagination from "./Pagination";
import SectorTabs from "./SectorTabs";

export default function JobsBoard({ page }: { page: number }) {
  const pageJobs = jobsOnPage(page);
  const counts = sectorJobCounts();
  const first = (page - 1) * JOBS_PER_PAGE + 1;
  const last = first + pageJobs.length - 1;

  return (
    <>
      <PageHero
        eyebrow={page > 1 ? `Page ${page}` : "Job Opportunities"}
        crumbs={page > 1 ? [{ href: "/jobs", label: "Job Opportunities" }] : []}
        title="Genuine openings across *every sector*"
        description="Browse current vacancies from the employers we recruit for — IT, Non-IT, SAP, civil and mechanical engineering, BPO, healthcare and more. Found a fit? Enquire and our team will guide you through the next steps."
      >
        <div className="flex flex-wrap gap-4">
          <EnquireButton className="btn-accent px-7 py-4">Enquire About Jobs</EnquireButton>
          <a
            href={whatsappLink("Hi HireMatrix, I'd like to share my resume for job opportunities.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light px-7 py-4"
          >
            <MessageCircle className="size-4" /> Send Resume on WhatsApp
          </a>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          {[
            { value: jobs.length, label: "Open positions" },
            { value: jobSectors.length, label: "Sectors" },
            { value: jobs.reduce((n, j) => n + j.openings, 0), label: "Total vacancies" },
          ].map((s) => (
            <div key={s.label}>
              <dt className="text-brand-200">{s.label}</dt>
              <dd className="font-display text-2xl font-extrabold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {page === 1 && (
        <section className="container-x py-20">
          <SectionHeading
            eyebrow="Browse by Sector"
            title="Find openings in *your field*"
            description="Pick a sector to see every current opening, or scroll down for the latest vacancies."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jobSectors.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.08} y={20}>
                <Link
                  href={`/jobs/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-900 hover:shadow-xl hover:shadow-brand-900/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-brand-900 text-accent-300 transition-transform duration-300 group-hover:-rotate-6">
                      <s.icon className="size-6" />
                    </div>
                    <ArrowUpRight className="size-5 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.tagline}</p>
                  <p className="mt-4 text-sm font-semibold text-accent-600">
                    {counts[s.slug]} {counts[s.slug] === 1 ? "opening" : "openings"}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section id="openings" className={page === 1 ? "bg-paper py-20" : "py-20"}>
        <div className="container-x">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Latest <em className="hl">openings</em>
            </h2>
            <p className="text-sm text-slate-500">
              Showing {first}–{last} of {jobs.length} openings
            </p>
          </div>
          <div className="mt-6">
            <SectorTabs />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pageJobs.map((job, i) => (
              <JobCard key={job.slug} job={job} index={i} />
            ))}
          </div>
          <Pagination page={page} pageCount={jobPageCount} />
        </div>
      </section>

      <JobsCta />
    </>
  );
}
