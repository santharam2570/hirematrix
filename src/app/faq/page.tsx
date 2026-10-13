import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import { faqGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about HireMatrix recruitment services for employers and job placement for job seekers.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions? *Answered.*"
        description="Everything you need to know about working with HireMatrix — as an employer or a job seeker."
      />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[14rem_1fr]">
        <nav className="hidden lg:sticky lg:top-36 lg:block lg:self-start">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Topics</p>
          <ul className="mt-4 space-y-1">
            {faqGroups.map((g) => (
              <li key={g.title}>
                <a
                  href={`#${slugify(g.title)}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-800"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-14">
          {faqGroups.map((g) => (
            <div key={g.title} id={slugify(g.title)} className="scroll-mt-36">
              <Reveal x={-24} y={0}>
                <h2 className="text-2xl font-bold">{g.title}</h2>
              </Reveal>
              <div className="mt-6">
                <FaqList items={g.items} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Still have *questions?*"
        text="Our team is happy to help. Call, WhatsApp or email us and we'll get back to you quickly."
      />
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
