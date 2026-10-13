import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CircleCheck,
  Handshake,
  Lock,
  MapPin,
  MessageCircle,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";
import Accent from "@/components/Accent";
import Achievements from "@/components/Achievements";
import BranchCard from "@/components/BranchCard";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import GenuinePromise from "@/components/GenuinePromise";
import HeroMatch from "@/components/HeroMatch";
import NextSectionButton from "@/components/NextSectionButton";
import Partners from "@/components/Partners";
import PlacementStats from "@/components/PlacementStats";
import ProcessTabs from "@/components/ProcessTabs";
import Roadmap from "@/components/Roadmap";
import SectionHeading from "@/components/SectionHeading";
import CountUp from "@/components/motion/CountUp";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";
import { industries } from "@/data/industries";
import {
  companyTypes,
  employerBenefits,
  faqGroups,
  recruitmentServices,
  seekerBenefits,
  site,
  whatsappLink,
  type Item,
} from "@/lib/site";

const highlights = [
  { icon: Briefcase, value: `${industries.length}`, label: "Sectors we recruit for" },
  { icon: Users, value: "Fresher to Senior", label: "Every career stage" },
  { icon: Lock, value: "Confidential", label: "& transparent process" },
  { icon: MapPin, value: `${site.branches.length}`, label: "Branches in Tamil Nadu" },
];

const marqueeRoles = industries.flatMap((i) => i.roles.map((r) => r.items[0]));

export default function Home() {
  const [featured, ...services] = recruitmentServices;
  const wide = services.pop()!;

  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-brand-900 text-white">
        <div className="dot-matrix absolute inset-0" />
        <div className="absolute -top-48 right-[-10rem] size-[40rem] rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -bottom-40 left-[-8rem] size-[28rem] rounded-full bg-accent-500/15 blur-3xl" />

        <div className="container-x relative grid items-center gap-10 pt-16 pb-36 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:pb-40">
          <div>
            <Reveal y={16}>
              <span className="eyebrow-light">Placement &amp; Recruitment · Tamil Nadu</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-7 text-[2.75rem] leading-[1.04] font-extrabold text-white sm:text-6xl xl:text-7xl">
                <Accent text="Where *genuine jobs* meet the right people." />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-100">
                HireMatrix connects job seekers with real openings from employers we recruit for —
                and helps companies hire candidates who genuinely fit. Across IT, Non-IT,
                engineering, construction and BPO.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <Link href="/job-seekers" className="btn-accent group px-7 py-4 text-base">
                  I&apos;m looking for a job
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/employers" className="btn-outline-light group px-7 py-4 text-base">
                  I&apos;m hiring
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-100">
                {["Real vacancies only", "Fresher to experienced", "Walk-ins Mon – Sat"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CircleCheck className="size-4 text-accent-300" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="relative hidden lg:block">
            <HeroMatch />
          </div>
        </div>
        <NextSectionButton className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:bottom-[5.5rem]" />
      </section>

      {/* Highlights */}
      <section className="container-x relative z-10 -mt-14">
        <Reveal y={40}>
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-brand-900/10 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`group flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:gap-4 sm:p-7 ${
                  i % 2 ? "border-l border-slate-200" : ""
                } ${i > 1 ? "border-t border-slate-200 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-900 text-accent-300 transition-transform duration-300 group-hover:-rotate-6">
                  <h.icon className="size-6" />
                </div>
                <div>
                  <p className="font-display text-lg font-extrabold text-brand-900 sm:text-xl">
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
        <p className="text-center text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
          Roles we recruit for
        </p>
        <div className="mt-6">
          <Marquee items={marqueeRoles} />
        </div>
      </section>

      {/* Choose your path */}
      <section className="container-x py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            center={false}
            eyebrow="How We Help"
            title="One partner for *both sides* of hiring"
          />
          <Reveal delay={0.1} className="max-w-sm text-lg leading-relaxed text-slate-600">
            Tell us which side you&apos;re on. We&apos;ll take it from there, with one dedicated
            consultant from first call to joining day.
          </Reveal>
        </div>

        <Reveal y={40} className="relative mt-14">
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl shadow-brand-900/10 lg:grid-cols-2">
            <PathPanel
              icon={UserRound}
              eyebrow="I'm looking for a job"
              title="Find a job you can *trust.*"
              text="Stop chasing listings that go nowhere. We connect you with real vacancies that suit your qualifications, experience and goals."
              audience={["Freshers", "Experienced professionals", "Walk-ins welcome"]}
              benefits={seekerBenefits}
              primary={{ href: "/job-seekers", label: "Find a Job" }}
              secondary={{
                href: whatsappLink("Hi HireMatrix, I'd like to register as a job seeker."),
                label: "Send your resume on WhatsApp",
                external: true,
              }}
            />
            <PathPanel
              dark
              icon={Building2}
              eyebrow="I'm hiring"
              title="Hire people who *fit.*"
              text="Skip the pile of irrelevant resumes. Tell us what the role needs and meet candidates who match it."
              audience={companyTypes.map((c) => c.title)}
              benefits={employerBenefits}
              primary={{ href: "/employers", label: "Hire Talent" }}
              secondary={{ href: "/contact", label: "Share a hiring requirement" }}
            />
          </div>
          <span className="absolute top-1/2 left-1/2 hidden size-20 -translate-1/2 items-center justify-center rounded-full bg-accent-400 text-brand-950 shadow-xl shadow-brand-900/30 ring-8 ring-white lg:flex">
            <Handshake className="size-8" />
          </span>
        </Reveal>
      </section>

      <PlacementStats />

      <GenuinePromise />

      {/* Services bento */}
      <section className="container-x py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            center={false}
            eyebrow="Our Services"
            title="Recruitment built around *your* requirement"
            description="Every assignment starts with understanding the role — responsibilities, qualifications, experience, location, salary range and joining date."
          />
          <Link href="/services" className="btn-outline shrink-0">
            All Services <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="on-dark group relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand-900 p-8 text-white md:p-10">
              <div className="dot-matrix absolute inset-0" />
              <div className="relative flex size-14 items-center justify-center rounded-2xl bg-accent-400 text-brand-950">
                <featured.icon className="size-7" />
              </div>
              <h3 className="relative mt-8 text-3xl font-extrabold text-white">
                <Accent text={`${featured.title.split(" ")[0]} *${featured.title.split(" ").slice(1).join(" ")}*`} />
              </h3>
              <p className="relative mt-4 text-brand-100">{featured.text}</p>
              <ul className="relative mt-8 flex-1 space-y-3 text-sm text-brand-100">
                {["Fresher recruitment", "Experienced professional hiring", "Technical & specialised roles"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <CircleCheck className="size-4 text-accent-300" /> {t}
                  </li>
                ))}
              </ul>
              <Link href="/employers" className="btn-accent group/btn relative mt-10 self-start">
                Start Hiring
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          {services.map((s, i) => (
            <ServiceTile key={s.title} item={s} index={i} />
          ))}
          <Reveal className="md:col-span-2 lg:col-span-3">
            <div className="group flex flex-col gap-6 rounded-3xl border border-accent-200 bg-accent-50 p-8 sm:flex-row sm:items-center md:p-10">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-accent-600 shadow-sm">
                <wide.icon className="size-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{wide.title}</h3>
                <p className="mt-2 text-slate-600">
                  {wide.text} Ideal for new branches, plants, process launches and fresher batches.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Plan a Hiring Drive <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-paper">
        <div className="container-x py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              center={false}
              eyebrow="Industries We Serve"
              title="Five sectors. *Dozens* of roles."
              description="Technical, professional, operational and corporate positions — for freshers and experienced professionals."
            />
            <Link href="/industries" className="btn-outline shrink-0">
              All Industries <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.slug}
                delay={i * 0.08}
                y={24}
                className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-900 hover:shadow-2xl hover:shadow-brand-900/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800 transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-accent-300">
                      <ind.icon className="size-6" />
                    </div>
                    <span className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-brand-800 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent-400 group-hover:bg-accent-400">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{ind.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{ind.tagline}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {ind.roles.map((r) => (
                      <span
                        key={r.group}
                        className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {r.items[0]}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Achievements />

      <Roadmap />

      <Partners />

      {/* Process */}
      <section className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="dot-matrix absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="How It Works"
            title="Simple, transparent, *start to finish*"
            description="Pick your side to see exactly what happens after you contact us."
          />
          <div className="mt-12">
            <ProcessTabs />
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading
            center={false}
            eyebrow="FAQs"
            title="Questions? *Answered.*"
            description="The things people ask us most. Can't find yours? Call or WhatsApp us."
          />
          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Link href="/faq" className="btn-primary">
              All FAQs <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappLink("Hi HireMatrix, I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="size-4" /> Ask on WhatsApp
            </a>
          </Reveal>
        </div>
        <FaqList items={faqGroups[0].items} />
      </section>

      {/* Branches */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Visit Us"
            title="Walk in to *Coimbatore* or *Tiruchirappalli*"
            description="Bring your resume or your hiring requirement — we're open Monday to Saturday."
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

function PathPanel({
  dark,
  icon: Icon,
  eyebrow,
  title,
  text,
  audience,
  benefits,
  primary,
  secondary,
}: {
  dark?: boolean;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  text: string;
  audience: string[];
  benefits: Item[];
  primary: { href: string; label: string };
  secondary: { href: string; label: string; external?: boolean };
}) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden p-8 md:p-12 lg:px-16 ${
        dark ? "on-dark bg-brand-900 text-white" : "bg-paper"
      }`}
    >
      {dark ? (
        <>
          <div className="dot-matrix absolute inset-0" />
          <div className="absolute -top-32 -right-32 size-80 rounded-full bg-brand-500/30 blur-3xl" />
        </>
      ) : (
        <div className="dot-matrix-ink absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]" />
      )}
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center gap-4">
          <span
            className={`flex size-12 items-center justify-center rounded-2xl ${
              dark ? "bg-accent-400 text-brand-950" : "bg-brand-900 text-accent-300"
            }`}
          >
            <Icon className="size-6" />
          </span>
          <span className={dark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
        </div>
        <h3 className={`mt-8 text-4xl font-extrabold md:text-5xl ${dark ? "text-white" : ""}`}>
          <Accent text={title} />
        </h3>
        <p className={`mt-4 max-w-md text-lg ${dark ? "text-brand-100" : "text-slate-600"}`}>{text}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {audience.map((a) => (
            <li
              key={a}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                dark ? "border border-white/15 bg-white/5 text-brand-100" : "border border-slate-200 bg-white text-brand-700"
              }`}
            >
              {a}
            </li>
          ))}
        </ul>
        <ul className={`mt-8 flex-1 divide-y border-y ${dark ? "divide-white/10 border-white/10" : "divide-brand-900/10 border-brand-900/10"}`}>
          {benefits.map((b, i) => (
            <li key={b.title} className="group flex gap-5 py-5">
              <span
                className={`w-7 shrink-0 pt-0.5 font-serif text-2xl leading-none italic ${
                  dark ? "text-accent-300" : "text-accent-500"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className={`flex items-center gap-2 font-bold ${dark ? "text-white" : "text-brand-900"}`}>
                  {b.title}
                  <b.icon
                    className={`size-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                      dark ? "text-accent-300" : "text-accent-600"
                    }`}
                  />
                </span>
                <span className={`mt-1 block text-sm leading-relaxed ${dark ? "text-brand-200" : "text-slate-600"}`}>
                  {b.text}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={primary.href} className={`${dark ? "btn-accent" : "btn-primary"} group`}>
            {primary.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={secondary.href}
            target={secondary.external ? "_blank" : undefined}
            rel={secondary.external ? "noopener noreferrer" : undefined}
            className={`text-sm font-semibold underline decoration-2 underline-offset-4 ${
              dark
                ? "text-white decoration-accent-400 hover:text-accent-200"
                : "text-brand-800 decoration-accent-400 hover:text-accent-600"
            }`}
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceTile({ item, index }: { item: Item; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
        <span className="absolute top-6 right-7 font-serif text-4xl text-slate-200 italic transition-colors duration-300 group-hover:text-accent-300">
          {String(index + 2).padStart(2, "0")}
        </span>
        <div className="flex size-12 items-center justify-center rounded-xl bg-brand-900 text-accent-300 transition-transform duration-300 group-hover:-rotate-6">
          <item.icon className="size-6" />
        </div>
        <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
      </div>
    </Reveal>
  );
}
