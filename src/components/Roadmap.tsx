"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import { roadmap, type RoadmapStatus, type RoadmapStep } from "@/data/track-record";

export default function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-paper py-24">
      <div className="dot-matrix-ink absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Roadmap"
          title="Where we've been. *Where we're headed.*"
          description="From a single branch in Coimbatore to a growing network across Tamil Nadu, and the plans that come next."
        />

        <ol className="relative mx-auto mt-16 max-w-5xl">
          {roadmap.map((step, i) => (
            <RoadmapItem key={step.title} step={step} flip={i % 2 === 1} next={roadmap[i + 1]?.status} />
          ))}
        </ol>
      </div>
    </section>
  );
}

const cardStyles: Record<RoadmapStatus, string> = {
  done: "border-slate-200 bg-white shadow-sm",
  current: "border-accent-300 bg-white shadow-xl shadow-accent-500/10 ring-4 ring-accent-100",
  next: "border-dashed border-brand-200 bg-white/60",
};

const nodeStyles: Record<RoadmapStatus, string> = {
  done: "bg-brand-900 text-accent-300",
  current: "bg-accent-400 text-brand-950 shadow-lg shadow-accent-500/40",
  next: "border-2 border-dashed border-brand-300 bg-paper text-brand-400",
};

const connectorClass = "absolute top-11 -bottom-1 left-5 -ml-px w-0.5 lg:left-1/2";

function RoadmapItem({ step, flip, next }: { step: RoadmapStep; flip: boolean; next?: RoadmapStatus }) {
  return (
    <li className="relative pb-10 pl-16 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-28 lg:pb-14 lg:pl-0">
      {next === "next" && <span aria-hidden className={`${connectorClass} border-l-2 border-dashed border-brand-300`} />}
      {next && next !== "next" && <SolidConnector />}
      <span
        className={`absolute top-1 left-5 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full ring-8 ring-paper lg:left-1/2 ${nodeStyles[step.status]}`}
      >
        {step.status === "current" && (
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-400" />
        )}
        <step.icon className="relative size-[18px]" />
      </span>

      <Reveal
        x={flip ? 40 : -40}
        y={0}
        className={`hidden lg:row-start-1 lg:flex ${flip ? "lg:col-start-1 lg:justify-end" : "lg:col-start-2"}`}
      >
        <span
          className={`font-serif text-6xl leading-none italic ${
            step.status === "current" ? "text-accent-500" : "text-brand-900/20"
          }`}
        >
          {step.year}
        </span>
      </Reveal>

      <Reveal
        x={flip ? -40 : 40}
        y={0}
        className={`lg:row-start-1 ${flip ? "lg:col-start-2" : "lg:col-start-1"}`}
      >
        <article
          className={`rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7 ${cardStyles[step.status]}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-2xl leading-none text-accent-600 italic lg:hidden">{step.year}</span>
            <StatusPill status={step.status} />
          </div>
          <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
        </article>
      </Reveal>
    </li>
  );
}

function SolidConnector() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  return (
    <span ref={ref} aria-hidden className={`${connectorClass} overflow-hidden rounded-full bg-brand-900/10`}>
      <span
        className={`block size-full origin-top bg-gradient-to-b from-accent-400 to-accent-500 transition-transform duration-900 ease-in-out motion-reduce:transition-none ${
          inView ? "scale-y-100" : "scale-y-0"
        }`}
      />
    </span>
  );
}

function StatusPill({ status }: { status: RoadmapStatus }) {
  const base = "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase";
  if (status === "done") {
    return (
      <span className={`${base} bg-brand-50 text-brand-700`}>
        <Check className="size-3" strokeWidth={3} /> Achieved
      </span>
    );
  }
  if (status === "current") {
    return (
      <span className={`${base} bg-accent-100 text-accent-700`}>
        <span className="size-1.5 animate-pulse rounded-full bg-accent-500" /> We are here
      </span>
    );
  }
  return <span className={`${base} border border-dashed border-brand-200 text-slate-500`}>On the roadmap</span>;
}
