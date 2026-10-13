import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { industries } from "@/data/industries";
import { hiringModels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "HireMatrix recruits for IT and technology, Non-IT and corporate, engineering and manufacturing, construction and infrastructure, and BPO and customer support roles.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Recruitment support across *sectors.*"
        description="Every sector hires differently. We take time to understand the roles, qualifications and timelines that matter in yours — and refer candidates who match."
      />

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Technical, professional, operational and *corporate* roles"
          description="Fresher recruitment, experienced hiring and corporate staffing — subject to available vacancies and agreed service arrangements."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 0.1}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-900 hover:shadow-2xl hover:shadow-brand-900/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-900 text-accent-300 transition-transform duration-300 group-hover:-rotate-6">
                    <ind.icon className="size-7" />
                  </div>
                  <span className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-brand-800 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent-400 group-hover:bg-accent-400">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{ind.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{ind.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {ind.roles.map((r) => (
                    <span key={r.group} className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-slate-600">
                      {r.items[0]}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hiring Models"
            title="Flexible ways to build *your team*"
            description="Choose the engagement model that fits your budget, timeline and growth plans."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringModels.map((m, i) => (
              <IconCard key={m.title} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't see your *industry* listed?"
        text="Tell us about your requirement. If the role fits our recruitment scope, we'll agree a hiring plan with you."
        primary={{ href: "/contact", label: "Share Your Requirement" }}
      />
    </>
  );
}
