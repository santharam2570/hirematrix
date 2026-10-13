"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const match = value.match(/^(\d+)(?![\d.,])(.*)$/);
    if (!inView || reduceMotion || !match || !ref.current) return;
    const el = ref.current;
    const target = Number(match[1]);
    const suffix = match[2];
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return <span ref={ref}>{value}</span>;
}
