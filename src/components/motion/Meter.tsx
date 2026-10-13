"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function BarMeter({ value, delay = 0 }: { value: number; delay?: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/10">
      <motion.div
        className="h-full origin-left rounded-full bg-gradient-to-r from-accent-500 to-accent-300"
        style={{ width: `${value}%` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, delay, ease }}
      />
    </div>
  );
}

export function RingMeter({ value, children }: { value: number; children?: React.ReactNode }) {
  return (
    <div className="relative size-48">
      <svg viewBox="0 0 120 120" className="size-full -rotate-90">
        <circle cx="60" cy="60" r="50" fill="none" strokeWidth="12" className="stroke-brand-400/50" />
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          strokeWidth="12"
          strokeLinecap="round"
          className="stroke-accent-400"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: value / 100 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, delay: 0.2, ease }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>
    </div>
  );
}
