import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, type LucideIcon } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { careerServices, hiringModels, recruitmentServices, type Item } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Recruitment & staffing, talent acquisition, corporate onboarding, HR outsourcing, career training and placement support from HireMatrix, Coimbatore.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end HR & career solutions"
        description="We help businesses hire the right people and help people become job-ready — all under one roof."
      />

      <ServiceGroup
        id="recruitment"
        icon={Building2}
        label="For Employers"
        title="Recruitment & Staffing Services"
        description="We act as a bridge between job seekers and employers, providing end-to-end HR solutions so you can focus on growing your business."
        items={recruitmentServices}
        cta={{ href: "/employers", label: "Hiring Solutions for Employers" }}
      />

      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Hiring Models"
            title="Flexible engagement options"
            description="Pick the model that suits your timeline, budget and workforce plans."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringModels.map((m, i) => (
              <IconCard key={m.title} {...m} variant="soft" index={i} />
            ))}
          </div>
        </div>
      </section>

      <ServiceGroup
        id="training"
        icon={GraduationCap}
        label="For Job Seekers"
        title="Career Training & Skill Development"
        description="Job-oriented courses designed to help freshers and professionals become job-ready — with interview coaching, resume building and direct connections to hiring partners."
        items={careerServices}
        cta={{ href: "/courses", label: "Browse Courses" }}
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
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-slate-600">{description}</p>
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
