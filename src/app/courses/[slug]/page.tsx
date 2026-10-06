import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Clock,
  GraduationCap,
  MessageCircle,
  MonitorPlay,
  Phone,
  Signal,
  Wrench,
} from "lucide-react";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import { allCourses, getCourse } from "@/data/courses";
import { site, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.name} Course in Coimbatore`,
    description: course.overview,
  };
}

const benefits = [
  "Resume building & LinkedIn optimisation",
  "Mock interviews with feedback",
  "Course completion certificate",
  "Placement support with hiring partners",
];

export default async function CoursePage(props: PageProps<"/courses/[slug]">) {
  const { slug } = await props.params;
  const course = getCourse(slug);
  if (!course) notFound();

  const related = allCourses
    .filter((c) => c.domain.slug === course.domain.slug && c.slug !== course.slug)
    .slice(0, 3);

  const facts = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: MonitorPlay, label: "Mode", value: course.mode },
    { icon: Signal, label: "Level", value: course.level },
  ];

  const enquiry = whatsappLink(`Hi HireMatrix, I'm interested in the ${course.name} course. Please share details.`);

  return (
    <>
      <PageHero
        eyebrow={course.name}
        title={course.name}
        description={course.overview}
        crumbs={[
          { href: "/courses", label: "Courses" },
          { href: `/courses#${course.domain.slug}`, label: course.domain.title },
        ]}
        icon={course.icon}
      >
        <div className="flex flex-wrap gap-3">
          {facts.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
            >
              <f.icon className="size-4 text-brand-200" />
              <span className="text-brand-200">{f.label}:</span> {f.value}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-14">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">What you will learn</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {course.modules.map((m, i) => (
                <Reveal
                  as="li"
                  key={m}
                  delay={(i % 2) * 0.1 + Math.floor(i / 2) * 0.08}
                  className="group flex gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 text-slate-700">{m}</span>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <Wrench className="size-6 text-brand-700" />
              <h2 className="text-2xl font-bold">Tools & technologies</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {course.tools.map((t, i) => (
                <Reveal key={t} delay={i * 0.06} scale={0.6} y={0}>
                  <span className="inline-block rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-800 transition-colors hover:bg-brand-800 hover:text-white">
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-3xl bg-slate-50 p-8">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="size-6 text-brand-700" />
                <h2 className="text-xl font-bold">Career opportunities</h2>
              </div>
              <CheckList items={course.careers} className="mt-6 text-slate-700" />
            </Reveal>
            <Reveal delay={0.15} className="rounded-3xl bg-slate-50 p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-6 text-brand-700" />
                <h2 className="text-xl font-bold">Who can join</h2>
              </div>
              <p className="mt-6 leading-relaxed text-slate-700">{course.eligibility}</p>
            </Reveal>
          </div>
        </div>

        <aside className="lg:sticky lg:top-36 lg:self-start">
          <Reveal x={40} y={0} delay={0.2} className="rounded-3xl border border-slate-200 p-7 shadow-xl shadow-brand-900/5">
            <div className="flex items-center gap-3">
              <Award className="size-6 text-brand-700" />
              <h3 className="text-lg font-semibold">Included with this course</h3>
            </div>
            <CheckList items={benefits} className="mt-5 text-sm text-slate-700" />
            <div className="mt-7 space-y-3">
              <a href={enquiry} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                <MessageCircle className="size-4" /> Enquire on WhatsApp
              </a>
              <a href={site.phoneHref} className="btn-outline w-full">
                <Phone className="size-4" /> Call {site.phone}
              </a>
            </div>
            <p className="mt-5 text-center text-xs text-slate-500">
              New batches start every month. Weekday and weekend options available.
            </p>
          </Reveal>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-20">
          <div className="container-x">
            <h2 className="text-2xl font-bold">More {course.domain.title} courses</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.1}>
                <Link href={`/courses/${r.slug}`} className="card group flex items-center gap-4 p-5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                    <r.icon className="size-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-brand-900">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.duration}</p>
                  </div>
                  <ArrowRight className="size-4 text-brand-600 transition-transform group-hover:translate-x-1" />
                </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Start your ${course.name} journey`}
        text="Speak to our counsellors about batch timings, eligibility and career outcomes."
        primary={{ href: "/contact", label: "Enquire Now" }}
      />
    </>
  );
}
