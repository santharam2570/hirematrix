import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck, CircleX, Phone } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatsBand from "@/components/StatsBand";
import Reveal from "@/components/motion/Reveal";
import { industries } from "@/data/industries";
import {
  companyTypes,
  employerBenefits,
  faqGroups,
  hiringModels,
  outcomeStats,
  recruitmentProcess,
  recruitmentServices,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Find suitable candidates with HireMatrix. Permanent placement, fresher, experienced, technical and bulk recruitment for startups, SMEs and established companies.",
};

const painPoints = [
  {
    problem: "Hundreds of resumes, hardly any relevant",
    fix: "We review every profile against your criteria — you only see candidates who match.",
  },
  {
    problem: "Hours lost scheduling and chasing candidates",
    fix: "We arrange interviews, confirm availability and follow up on your behalf.",
  },
  {
    problem: "Candidates who didn't know what the job was",
    fix: "We brief every candidate on the role, location and expectations before they meet you.",
  },
  {
    problem: "Urgent or bulk roles with no time to plan",
    fix: "We coordinate sourcing and interview drives around your timeline.",
  },
];

export default function EmployersPage() {
  const employerFaqs = faqGroups.find((g) => g.title === "For Employers")?.items ?? [];

  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Hire people who *fit.*"
        description="Tell us what the role needs. HireMatrix sources, reviews and refers candidates who match — then coordinates interviews through to joining. From a single specialist hire to coordinated bulk recruitment."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-accent px-7 py-4">
            Share Your Requirement <ArrowRight className="size-4" />
          </Link>
          <a href={site.phoneHref} className="btn-outline-light px-7 py-4">
            <Phone className="size-4" /> {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="container-x py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <SectionHeading
            center={false}
            eyebrow="Sound Familiar?"
            title="Hiring shouldn't take over *your week*"
            description="Most hiring headaches come from the same few problems. Here's how we take them off your plate."
          />
          <div className="space-y-4">
            {painPoints.map((p, i) => (
              <Reveal key={p.problem} delay={i * 0.08} y={20}>
                <div className="grid overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
                  <p className="flex items-start gap-3 bg-paper p-5 text-sm font-semibold text-slate-500">
                    <CircleX className="mt-0.5 size-5 shrink-0 text-slate-400" />
                    <span className="line-through decoration-slate-300">{p.problem}</span>
                  </p>
                  <p className="flex items-start gap-3 bg-white p-5 text-sm text-brand-900">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-accent-500" />
                    {p.fix}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What You Get" title="Why companies hire *with us*" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {employerBenefits.map((b, i) => (
              <IconCard key={b.title} {...b} index={i} />
            ))}
          </div>
        </div>
      </section>

      <StatsBand stats={outcomeStats} variant="light" className="py-24" title="Our track *record*" eyebrow="Results" />

      <section className="container-x pb-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Recruitment for *every* kind of role"
          description="Technical, professional, operational and corporate positions — permanent, fresher, experienced or in bulk."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recruitmentServices.map((s, i) => (
            <IconCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="dot-matrix absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="Our Process"
            title="A structured approach to *candidate selection*"
            description="Seven clear steps, so you always know where your hiring stands."
          />
          <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {recruitmentProcess.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={(i % 4) * 0.1}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300/50 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-accent-300 transition-transform duration-300 group-hover:-rotate-6">
                    <s.icon className="size-6" />
                  </div>
                  <span className="font-serif text-4xl text-white/20 italic transition-colors group-hover:text-accent-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-200">{s.text}</p>
              </Reveal>
            ))}
            <Reveal as="li" delay={0.3} className="flex flex-col justify-center rounded-2xl bg-accent-400 p-7 text-brand-950">
              <p className="font-display text-xl font-extrabold">Ready to start?</p>
              <p className="mt-2 text-sm text-brand-900">Share your requirement and we&apos;ll begin with step one.</p>
              <Link href="/contact" className="btn-primary mt-5 self-start">
                Get Started <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </ol>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-brand-200">
            Final shortlisting, candidate evaluation, selection, compensation decisions and hiring
            approval remain with the employer.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Support for every *stage of growth*"
          description="Workforce needs change as you expand, launch projects or set up new departments. We adapt our recruitment support to your business."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {companyTypes.map((c, i) => (
            <IconCard key={c.title} {...c} center variant="soft" index={i} />
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hiring Models"
            title="Choose how you *want to hire*"
            description="Services are agreed according to your hiring volume, role requirements, timelines and commercial terms."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringModels.map((m, i) => (
              <IconCard key={m.title} {...m} index={i} />
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.05} scale={0.8} y={0}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition-all hover:-translate-y-0.5 hover:border-brand-900 hover:bg-brand-900 hover:text-white"
                >
                  <ind.icon className="size-4 text-accent-500" /> {ind.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading center={false} eyebrow="FAQs" title="Questions from *employers*" />
        <FaqList items={employerFaqs} />
      </section>

      <CtaBand
        title="Let's build your *team* together."
        text="Tell us about the roles you need to fill. A HireMatrix consultant will get in touch to understand your requirement."
        primary={{ href: "/contact", label: "Share Your Requirement" }}
      />
    </>
  );
}
