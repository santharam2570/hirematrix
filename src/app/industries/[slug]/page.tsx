import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleAlert, ListChecks, MessageCircle, Users } from "lucide-react";
import Accent from "@/components/Accent";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { getIndustry, industries } from "@/data/industries";
import { recruitmentProcess, whatsappLink } from "@/lib/site";

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

  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        title={`${industry.name} *Recruitment*`}
        description={industry.tagline}
        crumbs={[{ href: "/industries", label: "Industries" }]}
        icon={industry.icon}
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-accent">
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
          <SectionHeading center={false} eyebrow="Overview" title={`Hiring for *${industry.name}*`} />
          <Reveal delay={0.15} className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
            {industry.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
        <Reveal x={40} y={0} delay={0.2} className="rounded-3xl border border-slate-200 bg-paper p-8 lg:self-start">
          <div className="flex items-center gap-3">
            <CircleAlert className="size-6 text-accent-500" />
            <h3 className="text-xl font-bold">Common hiring challenges</h3>
          </div>
          <ul className="mt-6 space-y-4">
            {industry.challenges.map((c) => (
              <li key={c} className="flex items-start gap-3 text-slate-700">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Roles We Hire"
            title="Positions we *recruit for*"
            description="From entry-level to experienced professionals — across every function your business depends on."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {industry.roles.map((r, ri) => (
              <Reveal key={r.group} delay={ri * 0.12}>
              <div className="card group">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand-900 text-accent-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Users className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold">{r.group}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {r.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent-500" /> {item}
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
        <SectionHeading eyebrow="Our Solutions" title="How we solve *these challenges*" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industry.solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="card group">
                <span className="font-serif text-5xl text-accent-300 italic transition-colors duration-300 group-hover:text-accent-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="dot-matrix absolute inset-0" />
        <div className="container-x relative grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow-light">Why HireMatrix</span>
              <h2 className="mt-5 text-3xl font-extrabold text-white md:text-4xl">
                <Accent text={`Your recruitment partner for *${industry.name}*`} />
              </h2>
            </Reveal>
            <CheckList items={industry.whyUs} light className="mt-8" />
          </div>
          <Reveal x={40} y={0} delay={0.2} className="rounded-3xl border border-white/15 bg-white/5 p-8 lg:self-start">
            <div className="flex items-center gap-3">
              <ListChecks className="size-6 text-accent-300" />
              <h3 className="text-xl font-bold text-white">Our recruitment process</h3>
            </div>
            <ol className="mt-6 space-y-3">
              {recruitmentProcess.map((s, i) => (
                <li key={s.title} className="flex items-center gap-3 text-sm text-brand-100">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-brand-950">
                    {i + 1}
                  </span>
                  {s.title}
                </li>
              ))}
            </ol>
            <Link href="/employers" className="btn-accent mt-8">
              How We Work <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          center={false}
          eyebrow="FAQs"
          title="Frequently asked *questions*"
          description={`Common questions from ${industry.name.toLowerCase()} employers.`}
        />
        <FaqList items={industry.faqs} />
      </section>

      <section className="bg-paper py-20">
        <div className="container-x">
          <h2 className="text-2xl font-extrabold">
            Other industries <em className="hl">we serve</em>
          </h2>
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
        title={`Hiring for *${industry.name}?*`}
        text="Share your requirement and our consultants will refer candidates whose profiles match your needs."
        primary={{ href: "/contact", label: "Share Your Requirement" }}
      />
    </>
  );
}
