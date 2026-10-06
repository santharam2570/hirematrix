import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileSearch,
  Handshake,
  MessagesSquare,
  Repeat,
  Search,
  Timer,
  UserCheck,
} from "lucide-react";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { industries } from "@/data/industries";
import { companyTypes, faqGroups, hiringModels, recruitmentServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Hire pre-screened, job-ready talent with HireMatrix. Permanent, contract, bulk and leadership hiring for startups, SMEs and enterprises in Coimbatore.",
};

const steps = [
  { icon: ClipboardList, title: "Requirement Briefing", text: "We understand the role, skills, team culture, budget and timeline." },
  { icon: Search, title: "Sourcing", text: "Targeted search across our database, trained talent pool, referrals and job portals." },
  { icon: FileSearch, title: "Screening & Assessment", text: "Resume review, screening calls and role-specific skill assessments." },
  { icon: MessagesSquare, title: "Shortlist & Interviews", text: "A curated shortlist with notes; we coordinate every interview round." },
  { icon: Handshake, title: "Offer & Joining", text: "Offer negotiation, document collection and follow-up until the joining date." },
  { icon: UserCheck, title: "Onboarding & Follow-Up", text: "Onboarding support and check-ins during the first months of employment." },
];

const commitments = [
  { icon: Timer, title: "Fast Shortlists", text: "Initial profiles for most roles within 3–5 working days." },
  { icon: BadgeCheck, title: "Quality Screening", text: "Only candidates who match your must-have criteria reach you." },
  { icon: Repeat, title: "Replacement Support", text: "A replacement period on permanent hires for peace of mind." },
];

export default function EmployersPage() {
  const employerFaqs = faqGroups.find((g) => g.title === "For Employers")?.items ?? [];

  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Hire the right people, faster"
        description="HireMatrix helps businesses find pre-screened, job-ready talent — from a single specialist hire to large-volume recruitment drives."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-light">
            Share Your Requirement <ArrowRight className="size-4" />
          </Link>
          <Link href="/industries" className="btn-outline-light">
            Industries We Serve
          </Link>
        </div>
      </PageHero>

      <section className="container-x relative z-10 -mt-10 grid gap-5 md:grid-cols-3">
        {commitments.map((c, i) => (
          <Reveal
            key={c.title}
            delay={0.3 + i * 0.12}
            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-all duration-300 group-hover:rotate-6 group-hover:bg-brand-800 group-hover:text-white">
              <c.icon className="size-6" />
            </div>
            <div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Hiring support for every stage of growth"
          description="Whether you are hiring your first employee or your five-hundredth, we adapt our approach to your business."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {companyTypes.map((c, i) => (
            <IconCard key={c.title} {...c} center variant="soft" index={i} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Services" title="End-to-end HR solutions" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recruitmentServices.map((s, i) => (
              <IconCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Hiring Models"
          title="Choose how you want to hire"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hiringModels.map((m, i) => (
            <IconCard key={m.title} {...m} variant="soft" index={i} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="grid-pattern absolute inset-0" />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-100 uppercase">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              A structured, transparent hiring process
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.12}
                className="group rounded-2xl border border-white/15 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-white text-brand-800 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <s.icon className="size-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-200">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Industries" title="Sector expertise you can rely on" />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.05} scale={0.7} y={0}>
              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-800 hover:bg-brand-800 hover:text-white"
              >
                <ind.icon className="size-4" /> {ind.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading center={false} eyebrow="FAQs" title="Questions from employers" />
          <FaqList items={employerFaqs} />
        </div>
      </section>

      <CtaBand
        title="Let's build your team together"
        text="Tell us about the roles you need to fill. A HireMatrix consultant will get back to you within one business day."
        primary={{ href: "/contact", label: "Share Your Requirement" }}
      />
    </>
  );
}
