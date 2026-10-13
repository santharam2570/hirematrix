import { CircleCheck } from "lucide-react";
import Accent from "./Accent";
import SectionHeading from "./SectionHeading";
import CountUp from "./motion/CountUp";
import Reveal from "./motion/Reveal";
import { achievements, featuredAchievement as featured, type Achievement } from "@/data/track-record";

export default function Achievements() {
  return (
    <section className="container-x py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones we're *proud* of"
        description="Every number here is a person who found the right role, or an employer who found the right hire."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="on-dark relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand-900 p-8 text-white md:p-10">
            <div className="dot-matrix absolute inset-0" />
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-accent-400/20 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <span className="relative flex size-16 items-center justify-center rounded-2xl bg-accent-400 text-brand-950 shadow-xl shadow-accent-500/30">
                <featured.icon className="size-8" />
              </span>
              <Tag dark>{featured.tag}</Tag>
            </div>

            <p className="relative mt-10 font-display text-7xl font-extrabold tracking-tight text-white md:text-8xl">
              <CountUp value={featured.value} />
            </p>
            <h3 className="relative mt-2 text-2xl font-bold text-white">
              <Accent text={featured.title} />
            </h3>
            <p className="relative mt-4 flex-1 leading-relaxed text-brand-100">{featured.text}</p>

            <ul className="relative mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-brand-100">
              {["Genuine openings only", "Fresher to senior roles", "Five sectors covered"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CircleCheck className="size-4 text-accent-300" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {achievements.map((a, i) => (
          <AchievementCard key={a.title} item={a} index={i} />
        ))}
      </div>
    </section>
  );
}

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1} y={24}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/10">
        <div className="flex items-center justify-between">
          <span className="flex size-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-accent-200 transition-colors duration-300 group-hover:bg-accent-400 group-hover:text-brand-950">
            <item.icon className="size-6" />
          </span>
          <Tag>{item.tag}</Tag>
        </div>
        <p className="mt-6 font-display text-4xl font-extrabold tracking-tight text-brand-900">
          <CountUp value={item.value} />
        </p>
        <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
        <span className="absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 bg-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
      </div>
    </Reveal>
  );
}

function Tag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${
        dark ? "border border-white/15 bg-white/10 text-accent-200" : "bg-paper text-slate-500"
      }`}
    >
      {children}
    </span>
  );
}
