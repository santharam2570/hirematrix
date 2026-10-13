import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, SearchX } from "lucide-react";
import PageHero from "@/components/PageHero";
import EnquireButton from "@/components/jobs/EnquireButton";
import JobCard from "@/components/jobs/JobCard";
import JobsCta from "@/components/jobs/JobsCta";
import PageNav from "@/components/jobs/PageNav";
import SectorTabs from "@/components/jobs/SectorTabs";
import Reveal from "@/components/motion/Reveal";
import { getJobSector, jobSectors } from "@/data/job-sectors";
import { jobsInSector } from "@/data/jobs";
import { whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return jobSectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata(props: PageProps<"/jobs/[sector]">): Promise<Metadata> {
  const sector = getJobSector((await props.params).sector);
  if (!sector) return {};
  return {
    title: `${sector.name} Jobs`,
    description: `Current ${sector.name} job openings through HireMatrix. ${sector.tagline}`,
  };
}

export default async function SectorJobsPage(props: PageProps<"/jobs/[sector]">) {
  const sector = getJobSector((await props.params).sector);
  if (!sector) notFound();

  const sectorJobs = jobsInSector(sector.slug);
  const index = jobSectors.indexOf(sector);
  const prev = jobSectors[index - 1];
  const next = jobSectors[index + 1];

  return (
    <>
      <PageHero
        eyebrow={sector.name}
        title={`${sector.name} *jobs*`}
        description={sector.tagline}
        crumbs={[{ href: "/jobs", label: "Job Opportunities" }]}
        icon={sector.icon}
      >
        <div className="flex flex-wrap gap-4">
          <EnquireButton sector={sector.slug} className="btn-accent px-7 py-4">
            Enquire About {sector.name} Jobs
          </EnquireButton>
          <a
            href={whatsappLink(`Hi HireMatrix, I'm looking for ${sector.name} jobs.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light px-7 py-4"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
        </div>
      </PageHero>

      <section className="container-x py-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            Current <em className="hl">openings</em>
          </h2>
          <p className="text-sm text-slate-500">
            {sectorJobs.length} {sectorJobs.length === 1 ? "opening" : "openings"} in {sector.name}
          </p>
        </div>
        <div className="mt-6">
          <SectorTabs active={sector.slug} />
        </div>

        {sectorJobs.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectorJobs.map((job, i) => (
              <JobCard key={job.slug} job={job} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-slate-300 bg-paper px-6 py-16 text-center">
            <SearchX className="size-10 text-brand-300" />
            <h3 className="mt-4 text-xl font-bold">No open positions right now</h3>
            <p className="mt-2 max-w-md text-slate-600">
              Share your details and we&apos;ll contact you as soon as a {sector.name} opening matches
              your profile.
            </p>
            <EnquireButton sector={sector.slug} className="btn-primary mt-6" />
          </div>
        )}
      </section>

      <section className="bg-paper py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Roles We Recruit For</span>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Popular <em className="hl">{sector.name}</em> roles
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {sector.roles.map((role) => (
                <li key={role}>
                  <EnquireButton
                    sector={sector.slug}
                    role={role}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-800 hover:bg-brand-900 hover:text-white [&>svg]:size-3.5 [&>svg]:text-accent-500"
                  >
                    {role}
                  </EnquireButton>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              Tap a role to enquire — we&apos;ll let you know about matching openings, even before
              they&apos;re listed here.
            </p>
          </Reveal>
          <Reveal x={40} y={0} delay={0.15}>
            <PageNav
              label="Other sectors"
              prev={prev && { href: `/jobs/${prev.slug}`, label: `${prev.name} Jobs` }}
              next={next && { href: `/jobs/${next.slug}`, label: `${next.name} Jobs` }}
            />
          </Reveal>
        </div>
      </section>

      <JobsCta sector={sector.slug} />
    </>
  );
}
