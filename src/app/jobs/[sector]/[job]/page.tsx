import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  Clock,
  IndianRupee,
  MapPin,
  MessageCircle,
  Phone,
  UsersRound,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import EnquireButton from "@/components/jobs/EnquireButton";
import JobCard from "@/components/jobs/JobCard";
import PageNav from "@/components/jobs/PageNav";
import Reveal from "@/components/motion/Reveal";
import { getJobSector } from "@/data/job-sectors";
import { formatPosted, getJob, jobs, jobsInSector } from "@/data/jobs";
import { site, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return jobs.map((j) => ({ sector: j.sector, job: j.slug }));
}

export async function generateMetadata(props: PageProps<"/jobs/[sector]/[job]">): Promise<Metadata> {
  const { sector, job: slug } = await props.params;
  const job = getJob(sector, slug);
  if (!job) return {};
  return {
    title: `${job.title} – ${job.location}`,
    description: `${job.summary} Experience: ${job.experience}. Salary: ${job.salary}.`,
  };
}

export default async function JobDetailPage(props: PageProps<"/jobs/[sector]/[job]">) {
  const params = await props.params;
  const job = getJob(params.sector, params.job);
  const sector = getJobSector(params.sector);
  if (!job || !sector) notFound();

  const siblings = jobsInSector(sector.slug);
  const index = siblings.indexOf(job);
  const prev = siblings[index - 1];
  const next = siblings[index + 1];
  const similar = siblings.filter((j) => j !== job).slice(0, 3);

  const facts = [
    { icon: MapPin, label: "Location", value: job.location },
    { icon: BriefcaseBusiness, label: "Experience", value: job.experience },
    { icon: IndianRupee, label: "Salary", value: job.salary },
    { icon: Clock, label: "Job type", value: job.type },
    { icon: UsersRound, label: "Openings", value: String(job.openings) },
    { icon: CalendarDays, label: "Posted", value: formatPosted(job.posted) },
  ];

  return (
    <>
      <PageHero
        eyebrow={job.title}
        title={job.title}
        description={job.summary}
        crumbs={[
          { href: "/jobs", label: "Job Opportunities" },
          { href: `/jobs/${sector.slug}`, label: sector.name },
        ]}
        icon={sector.icon}
      >
        <ul className="flex flex-wrap gap-2.5 text-sm">
          {facts.slice(0, 4).map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-brand-100"
            >
              <f.icon className="size-4 text-accent-300" />
              <span className="sr-only">{f.label}:</span> {f.value}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <EnquireButton sector={sector.slug} role={job.title} className="btn-accent px-7 py-4">
            Enquire About This Job
          </EnquireButton>
          <a
            href={whatsappLink(`Hi HireMatrix, I'm interested in the ${job.title} opening in ${job.location}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light px-7 py-4"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
        </div>
      </PageHero>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-12">
          <Reveal>
            <h2 className="text-2xl font-extrabold">
              Key <em className="hl">responsibilities</em>
            </h2>
            <ul className="mt-6 space-y-4">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3 text-slate-700">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-accent-500" /> {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-extrabold">
              What we&apos;re <em className="hl">looking for</em>
            </h2>
            <ul className="mt-6 space-y-4">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" /> {r}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-extrabold">
              Key <em className="hl">skills</em>
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {job.skills.map((s) => (
                <li key={s} className="rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="rounded-2xl border border-slate-200 bg-paper p-5 text-sm text-slate-500">
            Opportunities depend on active vacancies and employer eligibility criteria. Employment
            decisions are made by the employer, and placement assistance does not guarantee a job
            offer.
          </p>
        </div>

        <aside className="lg:sticky lg:top-36 lg:self-start">
          <Reveal x={40} y={0} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-brand-900/5">
            <h2 className="text-xl font-bold">Job overview</h2>
            <dl className="mt-6 divide-y divide-slate-100">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-3 py-3 text-sm">
                  <f.icon className="size-4 shrink-0 text-brand-400" />
                  <dt className="text-slate-500">{f.label}</dt>
                  <dd className="ml-auto text-right font-semibold text-brand-900">{f.value}</dd>
                </div>
              ))}
            </dl>
            <EnquireButton sector={sector.slug} role={job.title} className="btn-primary mt-6 w-full py-4">
              Enquire About This Job
            </EnquireButton>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href={site.phoneHref} className="btn-outline">
                <Phone className="size-4" /> Call
              </a>
              <a
                href={whatsappLink(`Hi HireMatrix, I'm interested in the ${job.title} opening in ${job.location}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </aside>
      </section>

      <section className="bg-paper py-20">
        <div className="container-x">
          <PageNav
            label={`Other ${sector.name} jobs`}
            prev={prev && { href: `/jobs/${sector.slug}/${prev.slug}`, label: prev.title }}
            next={next && { href: `/jobs/${sector.slug}/${next.slug}`, label: next.title }}
          />
          {similar.length > 0 && (
            <>
              <div className="mt-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <h2 className="text-2xl font-extrabold md:text-3xl">
                  Similar <em className="hl">{sector.name}</em> openings
                </h2>
                <Link href={`/jobs/${sector.slug}`} className="btn-outline shrink-0">
                  All {sector.name} Jobs <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {similar.map((j, i) => (
                  <JobCard key={j.slug} job={j} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
