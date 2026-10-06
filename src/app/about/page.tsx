import type { Metadata } from "next";
import { Eye, Heart, Target } from "lucide-react";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import { allCourses, domains } from "@/data/courses";
import { industries } from "@/data/industries";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HireMatrix HR Consultancy — a recruitment, talent acquisition and skill training firm with branches in Coimbatore and Tiruchirappalli, Tamil Nadu.",
};

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To bridge the gap between talent and opportunity by delivering reliable recruitment services and practical, job-oriented training.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted HR and career partner in Tamil Nadu — for employers who want great people and people who want great careers.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Integrity, transparency and a genuine commitment to the success of every candidate and client we work with.",
  },
];

const stats = [
  { value: `${industries.length}`, label: "Industries Served" },
  { value: `${domains.length}`, label: "Training Domains" },
  { value: `${allCourses.length}+`, label: "Job-Oriented Courses" },
  { value: `${site.branches.length}`, label: "Branches in Tamil Nadu" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building careers. Building teams."
        description="HireMatrix HR Consultancy is a recruitment, talent acquisition and skill training firm with branches in Coimbatore and Tiruchirappalli, Tamil Nadu, India."
      />

      <section className="container-x grid gap-14 py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Our Story"
            title="Your bridge between job seekers and employers"
          />
          <Reveal delay={0.15} className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              At HireMatrix, we believe the right job can change a life — and the right hire can
              change a business. That is why we work on both sides of the hiring journey.
            </p>
            <p>
              For businesses, we provide end-to-end HR solutions including talent acquisition,
              corporate onboarding and HR outsourcing. For freshers and professionals, we offer
              job-oriented courses, interview coaching, resume building and direct connections with
              our hiring partners.
            </p>
          </Reveal>
        </div>

        <Reveal x={40} y={0} delay={0.2} className="rounded-3xl bg-slate-50 p-8 md:p-10 lg:self-start">
          <h3 className="text-xl font-semibold">What we do</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase">
                For Employers
              </p>
              <CheckList
                className="mt-4 text-slate-700"
                items={["Talent Acquisition", "Recruitment & Staffing", "Corporate Onboarding", "HR Outsourcing"]}
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase">
                For Job Seekers
              </p>
              <CheckList
                className="mt-4 text-slate-700"
                items={["Job-Oriented Courses", "Interview Coaching", "Resume Building", "Placement Support"]}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-16 text-white">
        <div className="grid-pattern absolute inset-0" />
        <div className="container-x relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} scale={0.8} y={0}>
              <p className="font-display text-4xl font-extrabold text-white md:text-5xl">
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 text-sm text-brand-200">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-50/60 py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What Drives Us" title="Mission, vision & values" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <IconCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
