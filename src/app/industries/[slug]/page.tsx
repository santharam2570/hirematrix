import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleAlert, Lightbulb, MessageCircle, Users } from "lucide-react";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { getCourse } from "@/data/courses";
import { getIndustry, industries } from "@/data/industries";
import { whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Recruitment`,
    description: industry.summary,
  };
}

export default async function IndustryPage(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = industry.relatedCourses
    .map((s) => getCourse(s))
    .filter((c) => c !== undefined);
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        title={`${industry.name} Recruitment`}
        description={industry.tagline}
        crumbs={[{ href: "/industries", label: "Industries" }]}
        icon={industry.icon}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-light">
            Hire Talent <ArrowRight className="size-4" />
          </Link>
          <a
            href={whatsappLink(`Hi HireMatrix, I'd like to discuss hiring for ${industry.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
        </div>
      </PageHero>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeading center={false} eyebrow="Overview" title={`Hiring for ${industry.name}`} />
          <Reveal delay={0.15} className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
            {industry.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
        <Reveal x={40} y={0} delay={0.2} className="rounded-3xl bg-slate-50 p-8 lg:self-start">
          <div className="flex items-center gap-3">
            <CircleAlert className="size-6 text-brand-700" />
            <h3 className="text-xl font-semibold">Common hiring challenges</h3>
          </div>
          <CheckList items={industry.challenges} className="mt-6 text-slate-700" />
        </Reveal>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Roles We Hire"
            title="Positions we recruit for"
            description="From entry-level to experienced professionals — across every function your business depends on."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {industry.roles.map((r, ri) => (
              <Reveal key={r.group} delay={ri * 0.12}>
              <div className="card group">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand-800 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Users className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{r.group}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="size-1.5 shrink-0 rounded-full bg-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Our Solutions" title="How we solve these challenges" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="card group">
                <span className="font-display text-4xl font-bold text-brand-100 transition-colors duration-300 group-hover:text-brand-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="grid-pattern absolute inset-0" />
        <div className="container-x relative grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-100 uppercase">
                Why HireMatrix
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Your recruitment partner for {industry.name}
              </h2>
            </Reveal>
            <CheckList items={industry.whyUs} light className="mt-8" />
          </div>
          {related.length > 0 && (
            <Reveal x={40} y={0} delay={0.2} className="rounded-3xl border border-white/15 bg-white/5 p-8 lg:self-start">
              <div className="flex items-center gap-3">
                <Lightbulb className="size-6 text-brand-200" />
                <h3 className="text-xl font-semibold text-white">Trained talent pipeline</h3>
              </div>
              <p className="mt-3 text-sm text-brand-200">
                Candidates from these HireMatrix programs are job-ready for this industry:
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {related.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-brand-100 transition-colors hover:border-white hover:bg-white hover:text-brand-900"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          center={false}
          eyebrow="FAQs"
          title="Frequently asked questions"
          description={`Common questions from ${industry.name.toLowerCase()} employers.`}
        />
        <FaqList items={industry.faqs} />
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <h2 className="text-2xl font-bold">Other industries we serve</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.08} scale={0.94} y={16}>
                <Link href={`/industries/${o.slug}`} className="card group flex items-center gap-4 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-all duration-300 group-hover:rotate-6 group-hover:bg-brand-800 group-hover:text-white">
                    <o.icon className="size-5" />
                  </div>
                  <span className="font-semibold text-brand-900">{o.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Hiring for ${industry.name}?`}
        text="Share your requirement and our consultants will send you a curated shortlist of pre-screened candidates."
        primary={{ href: "/contact", label: "Share Your Requirement" }}
      />
    </>
  );
}
