"use client";

import { motion } from "motion/react";
import { BadgeCheck, Briefcase, CalendarCheck, Check, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroMatch() {
  return (
    <div className="relative mx-auto h-[470px] w-[540px] origin-center lg:scale-[0.84] xl:scale-100">
      <p className="sr-only">
        Illustration: a candidate profile matched with a genuine job opening, followed by an interview being scheduled.
      </p>
      <div aria-hidden>
        <svg viewBox="0 0 540 470" className="absolute inset-0 size-full overflow-visible">
          <motion.path
            d="M 175 172 C 175 235, 345 200, 365 262"
            fill="none"
            stroke="var(--color-accent-300)"
            strokeWidth="2"
            strokeDasharray="6 7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.9, ease }}
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="absolute top-5 left-0 w-[270px]"
        >
          <div className="animate-float-slow rounded-2xl bg-white p-5 text-left shadow-2xl shadow-black/30">
            <p className="text-[10px] font-bold tracking-[0.18em] text-slate-400 uppercase">Candidate profile</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-800 font-display text-sm font-bold text-accent-300">
                AR
              </span>
              <div>
                <p className="font-display font-bold text-brand-900">Arun R.</p>
                <p className="text-xs text-slate-500">B.E. Mechanical · 2 yrs</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Quality", "AutoCAD", "Production"].map((s) => (
                <span key={s} className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="absolute top-[262px] right-0 w-[270px]"
        >
          <div className="animate-float rounded-2xl bg-white p-5 text-left shadow-2xl shadow-black/30 [animation-delay:-3s]">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-2.5 py-1 text-[10px] font-bold tracking-wider text-accent-700 uppercase">
              <BadgeCheck className="size-3" /> Genuine opening
            </span>
            <p className="mt-3 font-display text-lg font-bold text-brand-900">Quality Engineer</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
              <Briefcase className="size-3.5" /> Engineering &amp; Manufacturing
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="size-3.5" /> Coimbatore · Full-time · 1–3 yrs
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 1.7 }}
          className="absolute top-[178px] left-[232px] flex flex-col items-center"
        >
          <span className="relative flex size-16 items-center justify-center rounded-full bg-accent-400 text-brand-950 shadow-xl shadow-accent-500/40">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent-400" />
            <Check className="relative size-8" strokeWidth={3} />
          </span>
          <span className="mt-2 rounded-full bg-brand-950/80 px-3 py-1 text-xs font-bold text-accent-200 backdrop-blur">
            Matched
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease }}
          className="absolute top-[350px] left-4 flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-white text-brand-800">
            <CalendarCheck className="size-4" />
          </span>
          <span className="text-left text-xs text-brand-100">
            <span className="block font-semibold text-white">Interview scheduled</span>
            Tue · 11:00 AM
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease }}
          className="absolute top-12 right-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-emerald-400 text-brand-950">
            <Check className="size-3" strokeWidth={3} />
          </span>
          Profile reviewed against role
        </motion.div>
      </div>
    </div>
  );
}
