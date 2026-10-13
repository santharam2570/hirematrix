import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  FileUser,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Repeat,
} from "lucide-react";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import GenuinePromise from "@/components/GenuinePromise";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { industries } from "@/data/industries";
import { candidateServices, faqGroups, seekerSteps, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Job Seekers",
  description:
    "Connect with genuine job opportunities through HireMatrix. Placement support for freshers and experienced professionals across IT, Non-IT, engineering, construction and BPO.",
};

const audiences = [
  { icon: GraduationCap, title: "Freshers", text: "Recent graduates looking for suitable entry-level openings to start their careers." },
  { icon: Briefcase, title: "Experienced Professionals", text: "Professionals seeking new roles, greater responsibility or a stronger organisation." },
  { icon: Repeat, title: "Career Movers", text: "Looking to move to a new company, city or sector that matches your background." },
  { icon: HeartHandshake, title: "Career Restarters", text: "Returning after a break? We help you find openings that suit your experience." },
];

const checklist = [
  "An updated, accurate resume",
  "Educational certificates and mark sheets",
  "Experience and relieving letters (if applicable)",
  "Government ID proof and passport-size photographs",
  "A list of the roles and locations you prefer",
];

export default function JobSeekersPage() {
  const seekerFaqs = faqGroups.find((g) => g.title === "For Job Seekers")?.items ?? [];

  return (
    <>
      <PageHero
        eyebrow="For Job Seekers"
        title="Find a job you can *trust.*"
        description="Tired of fake listings and calls that go nowhere? HireMatrix connects freshers and experienced professionals with real openings from employers we recruit for — and keeps you informed from application to joining."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={whatsappLink("Hi HireMatrix, I'd like to register as a job seeker. I'm attaching my resume.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-7 py-4"
          >
            <MessageCircle className="size-4" /> Send Your Resume
          </a>
          <Link href="/jobs" className="btn-outline-light px-7 py-4">
            Browse Job Openings <ArrowRight className="size-4" />
          </Link>
        </div>
      </PageHero>

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Who We Help"
          title="Wherever you are in your *career*"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <IconCard key={a.title} {...a} variant="soft" index={i} />
          ))}
        </div>
      </section>

      <GenuinePromise />

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="What We Do For You"
          title="Genuine openings, *clear information*"
          description="We help you understand each role — qualifications, experience, location and selection process — so you can make informed career decisions."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {candidateServices.map((s, i) => (
            <IconCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Your Journey" title="From registration to your *first day*" />
          <ol className="relative mx-auto mt-16 max-w-3xl">
            <span className="absolute top-2 bottom-2 left-7 w-px bg-gradient-to-b from-accent-400 via-accent-300 to-transparent" />
            {seekerSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.1} x={-20} y={0} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-900 text-accent-300 shadow-lg shadow-brand-900/20">
                  <step.icon className="size-6" />
                </span>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-bold tracking-[0.2em] text-accent-600 uppercase">Step {i + 1}</p>
                  <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-500">
            Opportunities depend on active vacancies and employer eligibility criteria. Employment
            decisions are made by the employer, and placement assistance does not guarantee a job
            offer.
          </p>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="dot-matrix absolute inset-0" />
        <div className="container-x relative grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent-400 text-brand-950">
                <FileUser className="size-6" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-white md:text-4xl">
                Before you <em className="hl">visit us</em>
              </h2>
              <p className="mt-4 text-brand-100">
                Bring these documents to your registration so we can match you to the right
                opportunities quickly. Please make sure every detail you share is accurate.
              </p>
            </Reveal>
            <CheckList items={checklist} light className="mt-8" />
          </div>
          <Reveal x={40} y={0} delay={0.2} className="rounded-3xl border border-white/15 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-white">Roles we recruit for</h3>
            <div className="mt-6 divide-y divide-white/10">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center gap-4 py-4"
                >
                  <ind.icon className="size-5 shrink-0 text-accent-300" />
                  <span className="flex-1">
                    <span className="block font-semibold text-white group-hover:text-accent-200">{ind.name}</span>
                    <span className="block text-xs text-brand-200">
                      {ind.roles.map((r) => r.items[0]).join(" · ")}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-brand-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-300" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading center={false} eyebrow="FAQs" title="Questions from *job seekers*" />
        <FaqList items={seekerFaqs} />
      </section>

      <CtaBand
        title="Your next job could be *one message away.*"
        text="Send us your resume or walk into our Coimbatore or Tiruchirappalli branch. Our team will contact you about suitable openings."
        primary={{ href: "/contact", label: "Register Now" }}
      />
    </>
  );
}
