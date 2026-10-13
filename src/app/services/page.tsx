import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, UserRound, type LucideIcon } from "lucide-react";
import Accent from "@/components/Accent";
import CtaBand from "@/components/CtaBand";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { candidateServices, hiringModels, recruitmentServices, type Item } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Permanent placement, IT, Non-IT, engineering and BPO recruitment, bulk hiring coordination and job placement support from HireMatrix, Coimbatore and Tiruchirappalli.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Recruitment that works for *both sides.*"
        description="We help companies find suitable candidates and help job seekers connect with genuine job opportunities — through an organised, transparent recruitment process."
      />

      <ServiceGroup
        id="employers"
        icon={Building2}
        label="For Companies"
        title="Recruitment *Solutions*"
        description="Each assignment starts with understanding your requirement — responsibilities, qualifications, experience, location, compensation range and joining timeline. We then coordinate sourcing, profile review, referrals, interviews and follow-up."
        items={recruitmentServices}
        cta={{ href: "/employers", label: "Hiring Solutions for Employers" }}
      />

      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hiring Models"
            title="Flexible recruitment *arrangements*"
            description="Services are agreed according to your hiring volume, role requirements, timelines and commercial terms."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringModels.map((m, i) => (
              <IconCard key={m.title} {...m} variant="soft" index={i} />
            ))}
          </div>
        </div>
      </section>

      <ServiceGroup
        id="job-seekers"
        icon={UserRound}
        label="For Job Seekers"
        title="Candidate *Placement* Services"
        description="We connect freshers and experienced professionals with genuine openings that reflect their qualifications, experience and career goals — and keep them informed at every step."
        items={candidateServices}
        cta={{ href: "/job-seekers", label: "Find a Job" }}
      />

      <CtaBand />
    </>
  );
}

function ServiceGroup({
  id,
  icon: Icon,
  label,
  title,
  description,
  items,
  cta,
}: {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  items: Item[];
  cta: { href: string; label: string };
}) {
  return (
    <section id={id} className="container-x scroll-mt-32 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <span className="eyebrow">
            <Icon className="size-3.5" /> {label}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold md:text-[2.75rem] md:leading-[1.1]">
            <Accent text={title} />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{description}</p>
          <Link href={cta.href} className="btn-primary mt-8">
            {cta.label} <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((s, i) => (
            <IconCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
