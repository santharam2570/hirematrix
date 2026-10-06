import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FileUser,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Repeat,
  UserRound,
} from "lucide-react";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { domains } from "@/data/courses";
import { careerServices, faqGroups, processSteps, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Job Seekers",
  description:
    "Find your next job with HireMatrix. Job-oriented training, resume building, interview coaching and placement support for freshers and professionals in Coimbatore.",
};

const audiences = [
  { icon: GraduationCap, title: "Freshers", text: "Recent graduates looking for their first job, with training to close the skills gap employers expect." },
  { icon: Briefcase, title: "Experienced Professionals", text: "Professionals seeking better roles, higher pay or a move to a stronger organisation." },
  { icon: Repeat, title: "Career Switchers", text: "Non-IT to IT, or one domain to another — we help you reskill and reposition your profile." },
  { icon: HeartHandshake, title: "Career Restarters", text: "Returning after a break? We help you refresh your skills and rebuild your confidence." },
];

const checklist = [
  "Updated resume (we can help you build one)",
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
        title="Your career, our commitment"
        description="Whether you are a fresher or an experienced professional, HireMatrix helps you build the right skills, prepare with confidence and connect with employers who are hiring."
      >
        <div className="flex flex-wrap gap-4">
          <a
            href={whatsappLink("Hi HireMatrix, I'd like to register as a job seeker. I'm attaching my resume.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
          >
            <MessageCircle className="size-4" /> Send Your Resume
          </a>
          <Link href="/courses" className="btn-outline-light">
            Explore Courses
          </Link>
        </div>
      </PageHero>

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Who We Help"
          title="Support for every career stage"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <IconCard key={a.title} {...a} variant="soft" index={i} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Help"
            title="Everything you need to get hired"
            description="We guide you through every step — from building skills to accepting your offer letter."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {careerServices.map((s, i) => (
              <IconCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Your Journey" title="From registration to your first day" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.15}
              className="group relative rounded-2xl border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <span className="absolute top-6 right-6 font-display text-3xl font-bold text-brand-100">
                {i + 1}
              </span>
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-800 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <step.icon className="size-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="grid-pattern absolute inset-0" />
        <div className="container-x relative grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="flex size-12 animate-float items-center justify-center rounded-xl bg-white text-brand-800">
                <FileUser className="size-6" />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">Before you visit us</h2>
              <p className="mt-4 text-brand-100">
                Bring these documents to your registration so we can match you to the right
                opportunities quickly.
              </p>
            </Reveal>
            <CheckList items={checklist} light className="mt-8" />
          </div>
          <Reveal x={40} y={0} delay={0.2} className="rounded-3xl border border-white/15 bg-white/5 p-8">
            <div className="flex items-center gap-3">
              <UserRound className="size-6 text-brand-200" />
              <h3 className="text-xl font-semibold text-white">Popular career paths</h3>
            </div>
            <div className="mt-6 space-y-6">
              {domains.map((d) => (
                <div key={d.slug}>
                  <p className="text-sm font-semibold tracking-wider text-brand-200 uppercase">{d.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.courses.slice(0, 3).map((c) => (
                      <Link
                        key={c.slug}
                        href={`/courses/${c.slug}`}
                        className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-brand-100 hover:border-white hover:text-white"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/courses" className="btn-light mt-8">
              View All Courses <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading center={false} eyebrow="FAQs" title="Questions from job seekers" />
        <FaqList items={seekerFaqs} />
      </section>

      <CtaBand
        title="Take the next step in your career"
        text="Send us your resume or walk into our Coimbatore or Tiruchirappalli branch. Our team will guide you to the right role or course."
        primary={{ href: "/contact", label: "Register Now" }}
      />
    </>
  );
}
