import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  CircleCheck,
  GraduationCap,
  Handshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import BranchCard from "@/components/BranchCard";
import CtaBand from "@/components/CtaBand";
import IconCard from "@/components/IconCard";
import Partners from "@/components/Partners";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/motion/CountUp";
import DrawLine from "@/components/motion/DrawLine";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";
import RotatingWord from "@/components/motion/RotatingWord";
import { allCourses, domains } from "@/data/courses";
import { industries } from "@/data/industries";
import { careerServices, processSteps, recruitmentServices, site } from "@/lib/site";

const highlights = [
  { icon: Briefcase, value: `${industries.length}`, label: "Industries Served" },
  { icon: GraduationCap, value: `${allCourses.length}+`, label: "Job-Oriented Courses" },
  { icon: Handshake, value: "End-to-End", label: "HR Solutions" },
  { icon: MapPin, value: `${site.branches.length}`, label: "Branches in Tamil Nadu" },
];

const marqueeRoles = industries.flatMap((i) => i.roles.map((r) => r.items[0]));

const reasons = [
  {
    icon: Target,
    title: "Right-Fit Hiring",
    text: "We understand your requirement first, then match candidates on skills, experience and culture.",
  },
  {
    icon: GraduationCap,
    title: "Training That Gets You Hired",
    text: "Our courses are designed around what employers actually look for in interviews.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Hiring Partners",
    text: "A growing network of companies that rely on us for quality, pre-screened talent.",
  },
  {
    icon: Award,
    title: "Personal Guidance",
    text: "One-on-one support at every step — from resume to offer letter and onboarding.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-800 text-white">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -top-40 -right-32 size-[32rem] animate-blob rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 size-[28rem] animate-blob rounded-full bg-brand-950/60 blur-3xl [animation-delay:-5s]" />
        <div className="absolute top-1/3 left-1/2 size-72 animate-blob rounded-full bg-brand-400/20 blur-3xl [animation-delay:-9s]" />

        <div className="container-x relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <Reveal y={16}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
                <Sparkles className="size-3.5 animate-pulse" /> HR Consultancy · Coimbatore
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
                Connecting <span className="text-shimmer">Talent</span> with the Right{" "}
                <RotatingWord
                  words={["Opportunity", "Career", "Employer", "Team"]}
                  className="text-brand-200"
                />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-brand-100">
                HireMatrix is your bridge between job seekers and employers — delivering recruitment,
                talent acquisition and job-oriented skill training that makes careers happen.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/employers" className="btn-light group">
                  Hire Talent
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/courses" className="btn-outline-light">
                  Explore Courses
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-100">
                {["Recruitment & Staffing", "Skill Training", "Placement Support"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CircleCheck className="size-4 text-brand-200" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5 pt-10">
                <HeroCard
                  icon={Users}
                  title="For Employers"
                  text="Talent acquisition, onboarding & HR outsourcing."
                  delay={0.2}
                  float="animate-float"
                />
                <HeroCard
                  icon={Handshake}
                  title="Hiring Partners"
                  text="Direct connections with growing companies."
                  delay={0.4}
                  float="animate-float-slow [animation-delay:-2s]"
                />
              </div>
              <div className="space-y-5">
                <HeroCard
                  icon={GraduationCap}
                  title="For Job Seekers"
                  text="Courses, resume building & interview coaching."
                  delay={0.3}
                  float="animate-float-slow [animation-delay:-4s]"
                />
                <HeroCard
                  icon={Briefcase}
                  title={`${industries.length} Industries`}
                  text="IT, manufacturing, textile, BFSI, healthcare & more."
                  delay={0.5}
                  float="animate-float [animation-delay:-3s]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-x relative z-10 -mt-12">
        <Reveal y={40}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-brand-900/5 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="group flex flex-col items-start gap-3 bg-white p-5 sm:flex-row sm:items-center sm:gap-4 sm:p-6"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-800 group-hover:text-white">
                  <h.icon className="size-6" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-brand-900 sm:text-xl">
                    <CountUp value={h.value} />
                  </p>
                  <p className="text-sm text-slate-500">{h.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Roles marquee */}
      <section className="pt-16">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-500 uppercase">
          Roles we recruit &amp; train for
        </p>
        <div className="mt-6">
          <Marquee items={marqueeRoles} />
        </div>
      </section>

      {/* About snapshot */}
      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Who We Are"
            title="A bridge between job seekers and employers"
            description="HireMatrix HR Consultancy is a recruitment, talent acquisition and skill training firm with branches in Coimbatore and Tiruchirappalli, Tamil Nadu. We help businesses find the right people and help people become job-ready."
          />
          <ul className="mt-8 space-y-4">
            {[
              "End-to-end HR solutions for businesses of every size",
              "Job-oriented courses for freshers and working professionals",
              "Interview coaching, resume building and direct hiring connections",
            ].map((t, i) => (
              <Reveal as="li" key={t} x={-24} y={0} delay={0.1 + i * 0.1} className="flex items-start gap-3">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <span>{t}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.4}>
            <Link href="/about" className="btn-primary group mt-10">
              Learn More About Us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal x={40} y={0} className="sm:row-span-2">
            <div className="group h-full rounded-3xl bg-brand-800 p-8 text-white transition-transform duration-300 hover:-translate-y-1 sm:flex sm:flex-col sm:justify-end">
              <Users className="size-10 text-brand-200 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-6 text-2xl font-bold text-white">Recruitment & Staffing</h3>
              <p className="mt-3 text-brand-100">
                Talent acquisition, corporate onboarding and HR outsourcing for growing businesses.
              </p>
            </div>
          </Reveal>
          <Reveal x={40} y={0} delay={0.15}>
            <div className="group h-full rounded-3xl bg-brand-50 p-8 transition-transform duration-300 hover:-translate-y-1">
              <GraduationCap className="size-10 text-brand-700 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-6 text-xl font-bold">Career Training</h3>
              <p className="mt-2 text-sm text-slate-600">Job-oriented skill development programs.</p>
            </div>
          </Reveal>
          <Reveal x={40} y={0} delay={0.3}>
            <div className="group h-full rounded-3xl border border-slate-200 p-8 transition-transform duration-300 hover:-translate-y-1">
              <Handshake className="size-10 text-brand-700 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-6 text-xl font-bold">Placement Support</h3>
              <p className="mt-2 text-sm text-slate-600">Direct connection with hiring partners.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="Solutions for employers and job seekers"
            description="From finding the right hire to preparing for your first interview — we cover both sides of the hiring journey."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[...recruitmentServices.slice(0, 2), ...careerServices.slice(0, 2)].map((s, i) => (
              <IconCard key={s.title} {...s} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container-x py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            center={false}
            eyebrow="Industries We Serve"
            title="Hiring expertise across sectors"
            description="Specialised recruitment for the industries that power Coimbatore and Tamil Nadu."
          />
          <Link href="/industries" className="btn-outline shrink-0">
            All Industries <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 4) * 0.08} scale={0.92} y={20}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-800 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-900/20"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-all duration-300 group-hover:rotate-6 group-hover:bg-white/10 group-hover:text-white">
                  <ind.icon className="size-6" />
                </div>
                <span className="font-semibold text-brand-900 transition-colors group-hover:text-white">
                  {ind.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Domains */}
      <section className="bg-slate-50">
        <div className="container-x py-24">
        <SectionHeading
          eyebrow="Key Domains"
          title="Job-oriented training across industries"
          description="Choose a career path and get trained on the skills hiring managers are looking for right now."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
          {domains.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 2) * 0.12}>
            <Link
              href={`/courses#${d.slug}`}
              className="card group flex flex-col sm:flex-row sm:gap-6"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-800 transition-colors group-hover:bg-brand-800 group-hover:text-white">
                <d.icon className="size-7" />
              </div>
              <div className="mt-5 sm:mt-0">
                <h3 className="text-xl font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{d.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.courses.slice(0, 4).map((c) => (
                    <span
                      key={c.name}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  View courses
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      <Partners />

      {/* Process */}
      <section className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="grid-pattern absolute inset-0" />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-100 uppercase">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Your journey from profile to placement
            </h2>
          </Reveal>

          <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ProgressLine />
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={0.2 + i * 0.25} scale={0.8} y={0}>
                <div className="group relative text-center">
                  <div className="relative mx-auto flex size-20 items-center justify-center rounded-full border border-white/20 bg-brand-900 transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-white/10">
                    <step.icon className="size-8 text-brand-100" />
                    <span className="absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-900">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-brand-200">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Why HireMatrix"
          title="Why businesses and candidates choose us"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <IconCard key={r.title} {...r} variant="soft" center index={i} />
          ))}
        </div>
      </section>

      {/* Branches */}
      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Branches"
            title="Visit us in Coimbatore or Tiruchirappalli"
            description="Walk in with your resume or hiring requirement — we're open Monday to Saturday."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {site.branches.map((b, i) => (
              <Reveal key={b.city} delay={i * 0.15}>
                <BranchCard branch={b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function HeroCard({
  icon: Icon,
  title,
  text,
  delay,
  float,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  delay: number;
  float: string;
}) {
  return (
    <Reveal delay={delay} y={40} scale={0.9}>
      <div className={float}>
        <div className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/15">
          <div className="flex size-12 items-center justify-center rounded-xl bg-white text-brand-800 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="size-6" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-brand-100">{text}</p>
        </div>
      </div>
    </Reveal>
  );
}

function ProgressLine() {
  return (
    <div className="absolute top-10 right-[12.5%] left-[12.5%] hidden h-px bg-white/15 lg:block">
      <DrawLine className="h-full bg-gradient-to-r from-brand-300 to-white" />
    </div>
  );
}
