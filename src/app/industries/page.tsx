import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    "HireMatrix recruits for IT, manufacturing, textile, BFSI, healthcare, retail, BPO and construction companies across Coimbatore and Tamil Nadu.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Recruitment expertise across every major industry"
        description="Every industry hires differently. Our consultants understand the roles, skills and timelines that matter in your sector — so you get candidates who fit from day one."
      />

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Specialised hiring for your business"
          description="From IT parks to textile mills, we support businesses of every size across Coimbatore, Tiruppur and Tamil Nadu."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 4) * 0.1}>
              <Link href={`/industries/${ind.slug}`} className="card group flex flex-col">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-800 group-hover:text-white">
                  <ind.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{ind.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{ind.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Explore
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hiring Models"
            title="Flexible ways to build your team"
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
        title="Don't see your industry listed?"
        text="We also support logistics, education, hospitality, automotive and many other sectors. Tell us about your requirement and we'll build a hiring plan for you."
        primary={{ href: "/contact", label: "Share Your Requirement" }}
      />
    </>
  );
}
