import Accent from "./Accent";
import CountUp from "./motion/CountUp";
import Reveal from "./motion/Reveal";
import type { Stat } from "@/lib/site";

type Props = {
  stats: Stat[];
  eyebrow?: string;
  title?: string;
  variant?: "dark" | "light";
  className?: string;
};

const isNumeric = (value: string) => /^\d/.test(value);

export default function StatsBand({ stats, eyebrow, title, variant = "dark", className }: Props) {
  if (variant === "light") {
    return (
      <section className={`container-x ${className ?? "py-16"}`}>
        {title && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="mt-5 text-3xl font-extrabold md:text-[2.75rem]">
              <Accent text={title} />
            </h2>
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} y={24}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/10 sm:p-8">
                <s.icon className="size-6 text-accent-500" />
                <p
                  className={`mt-6 flex h-10 items-center sm:h-12 ${
                    isNumeric(s.value)
                      ? "font-display text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl"
                      : "font-serif text-3xl text-accent-600 italic sm:text-4xl"
                  }`}
                >
                  <CountUp value={s.value} />
                </p>
                <p className="mt-2 text-sm text-slate-500">{s.label}</p>
                <span className="absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 bg-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`on-dark relative overflow-hidden bg-brand-900 text-white ${className ?? "py-16"}`}>
      <div className="dot-matrix absolute inset-0" />
      <div className="container-x relative">
        {title && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && <span className="eyebrow-light">{eyebrow}</span>}
            <h2 className="mt-5 text-3xl font-extrabold text-white md:text-4xl">
              <Accent text={title} />
            </h2>
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} scale={0.8} y={0}>
              <s.icon className="mx-auto mb-3 size-7 text-accent-300" />
              <p
                className={`flex h-10 items-center justify-center md:h-12 ${
                  isNumeric(s.value)
                    ? "font-display text-4xl font-extrabold text-white md:text-5xl"
                    : "font-serif text-3xl text-accent-300 italic md:text-4xl"
                }`}
              >
                <CountUp value={s.value} />
              </p>
              <p className="mt-2 text-sm text-brand-200">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
