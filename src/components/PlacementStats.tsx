import Link from "next/link";
import { ArrowRight, ChartColumn, ChartPie, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import CountUp from "./motion/CountUp";
import { BarMeter, RingMeter } from "./motion/Meter";
import Reveal from "./motion/Reveal";
import { careerStageSplit, sectorPlacements } from "@/data/track-record";
import { outcomeStats } from "@/lib/site";

export default function PlacementStats() {
  return (
    <section className="on-dark relative overflow-hidden bg-brand-900 py-24 text-white">
      <div className="dot-matrix absolute inset-0" />
      <div className="absolute -top-40 -left-40 size-[32rem] rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute -right-32 -bottom-48 size-[28rem] rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            light
            center={false}
            eyebrow="Placement Statistics"
            title="The numbers behind *every placement*"
            description="Where our candidates land, who we place and how quickly employers see relevant profiles."
          />
          <Reveal delay={0.15} className="shrink-0">
            <Link href="/jobs" className="btn-outline-light group">
              Browse Open Jobs
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-12">
          <Reveal className="col-span-2 lg:col-span-7">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9">
              <CardHeading icon={ChartColumn} title="Placements by sector" text="Share of candidates placed, by industry" />
              <ul className="mt-8 space-y-6">
                {sectorPlacements.map((s, i) => (
                  <li key={s.name}>
                    <div className="mb-2.5 flex items-center justify-between gap-4 text-sm">
                      <span className="flex items-center gap-3 font-medium text-brand-50">
                        <s.icon className="size-4 text-accent-300" />
                        {s.name}
                      </span>
                      <span className="font-display font-bold text-white">
                        <CountUp value={`${s.share}%`} />
                      </span>
                    </div>
                    <BarMeter value={s.share} delay={0.1 + i * 0.1} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="col-span-2 lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9">
              <CardHeading icon={ChartPie} title="Career stage" text="Who we place, from first job to senior roles" />
              <div className="flex flex-1 flex-col items-center justify-center gap-8 py-8 sm:flex-row lg:flex-col xl:flex-row">
                <RingMeter value={careerStageSplit.freshers}>
                  <span className="font-display text-4xl font-extrabold text-white">
                    <CountUp value={`${careerStageSplit.freshers}%`} />
                  </span>
                  <span className="mt-1 text-xs font-semibold tracking-widest text-accent-200 uppercase">Freshers</span>
                </RingMeter>
                <ul className="space-y-4 text-sm">
                  <Legend swatch="bg-accent-400" label="Freshers" value={careerStageSplit.freshers} />
                  <Legend swatch="bg-brand-400" label="Experienced" value={careerStageSplit.experienced} />
                </ul>
              </div>
              <p className="border-t border-white/10 pt-5 text-sm text-brand-200">
                Entry-level batches and specialist hires are handled by the same dedicated team.
              </p>
            </div>
          </Reveal>

          {outcomeStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} y={24} className="lg:col-span-3">
              <div className="group flex h-full flex-col items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-accent-300/50 hover:bg-white/[0.07] sm:flex-row sm:items-center sm:gap-5 sm:p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-400 text-brand-950 transition-transform duration-300 group-hover:-rotate-6">
                  <s.icon className="size-6" />
                </span>
                <span>
                  <span className="block font-display text-2xl font-extrabold text-white sm:text-3xl">
                    <CountUp value={s.value} />
                  </span>
                  <span className="mt-0.5 block text-sm text-brand-200">{s.label}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardHeading({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-300">
        <Icon className="size-5" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-brand-200">{text}</p>
      </div>
    </div>
  );
}

function Legend({ swatch, label, value }: { swatch: string; label: string; value: number }) {
  return (
    <li className="flex items-center gap-3">
      <span className={`size-3 rounded-full ${swatch}`} />
      <span className="w-28 text-brand-100">{label}</span>
      <span className="font-display font-bold text-white">{value}%</span>
    </li>
  );
}
