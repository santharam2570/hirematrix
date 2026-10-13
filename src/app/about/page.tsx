import type { Metadata } from "next";
import { Briefcase, Eye, MapPin, Target, Users } from "lucide-react";
import CheckList from "@/components/CheckList";
import CtaBand from "@/components/CtaBand";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatsBand from "@/components/StatsBand";
import Reveal from "@/components/motion/Reveal";
import { industries } from "@/data/industries";
import { coreValues, hiringModels, outcomeStats, site, type Stat } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HireMatrix is a placement and recruitment company in Coimbatore and Tiruchirappalli — connecting job seekers with genuine opportunities and helping companies find suitable candidates.",
};

const purpose = {
  title: "Our Purpose",
  text: "To connect the right talent with the right opportunity through professional and dependable recruitment services.",
};

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a trusted placement and recruitment partner known for professional service, responsible recruitment practices and meaningful connections between employers and job seekers.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver structured, dependable placement services for organisations across industries, and to help job seekers discover opportunities that match their qualifications, experience and career goals.",
  },
];

const stats: Stat[] = [
  { icon: Briefcase, value: `${industries.length}`, label: "Sectors Served" },
  { icon: Users, value: `${hiringModels.length}`, label: "Hiring Models" },
  { icon: Target, value: "Fresher to Senior", label: "Hiring Levels" },
  { icon: MapPin, value: `${site.branches.length}`, label: "Branches in Tamil Nadu" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Connecting talent with *opportunity.*"
        description="HireMatrix is a placement and recruitment solutions company with branches in Coimbatore and Tiruchirappalli, Tamil Nadu, India."
      />

      <section className="container-x grid gap-14 py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            center={false}
            eyebrow="Our Story"
            title="A recruitment partner focused on *meaningful connections*"
          />
          <Reveal delay={0.15} className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              HireMatrix serves as a professional link between employers seeking talent and people
              pursuing meaningful careers. We help job seekers connect with genuine job
              opportunities and help companies find suitable candidates.
            </p>
            <p>
              Finding the right employee takes more than collecting resumes. It means
              understanding the responsibilities of a position, evaluating candidate suitability,
              considering employer expectations and coordinating communication throughout the
              hiring process. Our approach is built around exactly these elements.
            </p>
            <p>
              We place importance on professional conduct, transparency, confidentiality and
              responsive communication — so we can build long-term relationships with employers,
              candidates and business partners.
            </p>
          </Reveal>
        </div>

        <Reveal x={40} y={0} delay={0.2} className="rounded-3xl border border-slate-200 bg-paper p-8 md:p-10 lg:self-start">
          <h3 className="text-xl font-semibold">What we do</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase">
                For Companies
              </p>
              <CheckList
                className="mt-4 text-slate-700"
                items={[
                  "Requirement understanding",
                  "Candidate sourcing & review",
                  "Interview scheduling",
                  "Offer & joining coordination",
                ]}
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-brand-600 uppercase">
                For Job Seekers
              </p>
              <CheckList
                className="mt-4 text-slate-700"
                items={[
                  "Genuine job openings",
                  "Profile matching",
                  "Interview coordination",
                  "Recruitment updates",
                ]}
              />
            </div>
          </div>
          <p className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
            We recruit across IT, Non-IT, engineering, manufacturing, construction, corporate
            services, customer support and BPO — for freshers, experienced professionals and
            corporate staffing requirements.
          </p>
        </Reveal>
      </section>

      <StatsBand stats={stats} />

      <StatsBand
        stats={outcomeStats}
        variant="light"
        eyebrow="Our Track Record"
        title="Results that *speak* for themselves"
        className="py-24"
      />

      <section className="bg-paper py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">{purpose.title}</span>
            <blockquote className="mt-8 font-serif text-3xl leading-snug text-brand-900 italic md:text-5xl md:leading-tight">
              <span className="text-accent-500">&ldquo;</span>
              {purpose.text}
              <span className="text-accent-500">&rdquo;</span>
            </blockquote>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {pillars.map((p, i) => (
              <IconCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Core Values"
          title="The principles behind *every placement*"
          description="These values guide our approach to recruitment and shape the relationships we build."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <IconCard key={v.title} {...v} variant="soft" index={i} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
