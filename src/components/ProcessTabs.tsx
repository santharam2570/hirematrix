"use client";

import { useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { Building2, UserRound } from "lucide-react";
import { employerSteps, seekerSteps, type Item } from "@/lib/site";

const tabs = [
  { key: "seekers", label: "For Job Seekers", icon: UserRound, steps: seekerSteps },
  { key: "employers", label: "For Employers", icon: Building2, steps: employerSteps },
] as const;

export default function ProcessTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="How it works"
        onKeyDown={onKeyDown}
        className="mx-auto flex w-fit rounded-full border border-white/15 bg-white/5 p-1.5"
      >
        {tabs.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${id}-tab-${t.key}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${t.key}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-accent-300 sm:px-6 ${
              active === i ? "text-brand-950" : "text-brand-100 hover:text-white"
            }`}
          >
            {active === i && (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 rounded-full bg-accent-400"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <t.icon className="relative size-4" />
            <span className="relative">{t.label}</span>
          </button>
        ))}
      </div>

      {tabs.map((t, i) => (
        <div
          key={t.key}
          role="tabpanel"
          id={`${id}-panel-${t.key}`}
          aria-labelledby={`${id}-tab-${t.key}`}
          hidden={active !== i}
          className="mt-14"
        >
          <Steps steps={t.steps} animate={active === i} />
        </div>
      ))}
    </div>
  );
}

function Steps({ steps, animate }: { steps: Item[]; animate: boolean }) {
  return (
    <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      <span className="absolute top-8 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-accent-400/0 via-accent-400/60 to-accent-400/0 lg:block" />
      {steps.map((s, i) => (
        <motion.li
          key={s.title}
          initial={false}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-accent-300/50 hover:bg-white/[0.07] lg:border-0 lg:bg-transparent lg:p-0 lg:text-center lg:hover:bg-transparent"
        >
          <div className="relative flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-brand-900 text-accent-300 transition-transform duration-300 group-hover:-translate-y-1 lg:mx-auto">
            <s.icon className="size-7" />
            <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-accent-400 text-[11px] font-bold text-brand-950">
              {i + 1}
            </span>
          </div>
          <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-200">{s.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}
