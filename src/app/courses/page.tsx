import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck, Clock, MonitorPlay } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import { domains } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Job-oriented courses in IT & Software, SAP (FICO, MM, SD, PP, HCM, ABAP), CAD & Engineering, Banking & Finance and Non-IT domains — with interview coaching and placement support.",
};

const included = [
  "Industry-aligned curriculum",
  "Hands-on, practical training",
  "Resume building",
  "Interview coaching",
  "Course completion certificate",
  "Placement support with hiring partners",
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Job-oriented courses that get you hired"
        description="Designed for freshers and professionals who want to upskill, switch careers or land their first job."
      />

      <section className="sticky top-20 z-30 border-b border-slate-200 bg-white/95 backdrop-blur md:top-29">
        <div className="container-x flex gap-3 overflow-x-auto py-4">
          {domains.map((d) => (
            <a
              key={d.slug}
              href={`#${d.slug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-brand-800 hover:text-brand-800"
            >
              <d.icon className="size-4" /> {d.title}
            </a>
          ))}
        </div>
      </section>

      <div className="container-x space-y-20 py-20">
        {domains.map((d) => (
          <section key={d.slug} id={d.slug} className="scroll-mt-48">
            <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-brand-800 text-white">
                <d.icon className="size-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">{d.title}</h2>
                <p className="mt-1 text-slate-600">{d.summary}</p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {d.courses.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 3) * 0.1}>
                <Link href={`/courses/${c.slug}`} className="card group flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-800 group-hover:text-white">
                      <c.icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {c.level}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.name}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {c.overview}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4 text-brand-600" /> {c.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MonitorPlay className="size-4 text-brand-600" /> {c.mode}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    View course details
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-slate-50 py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Every Course Includes</span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">More than just training</h2>
            <p className="mt-4 text-lg text-slate-600">
              We don&apos;t stop at teaching skills — we prepare you for interviews and connect you
              directly with companies that are hiring.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Enquire About a Course <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {included.map((t, i) => (
              <Reveal
                as="li"
                key={t}
                delay={i * 0.08}
                scale={0.9}
                y={0}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 font-medium text-brand-900 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
              >
                <CircleCheck className="size-5 shrink-0 text-brand-600" /> {t}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Not sure which course is right for you?"
        text="Talk to our career counsellors. We'll understand your background and goals and recommend the best path to a job."
        primary={{ href: "/contact", label: "Book Free Counselling" }}
      />
    </>
  );
}
