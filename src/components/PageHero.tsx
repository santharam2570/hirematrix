import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import Accent from "./Accent";
import NextSectionButton from "./NextSectionButton";
import Reveal from "./motion/Reveal";

type Crumb = { href: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  crumbs?: Crumb[];
  icon?: LucideIcon;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, description, crumbs = [], icon: Icon, children }: Props) {
  return (
    <section className="on-dark relative overflow-hidden bg-brand-900 text-white">
      <div className="dot-matrix absolute inset-0" />
      <div className="absolute -top-40 right-0 size-[30rem] rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-accent-500/10 blur-3xl" />
      <HeroMark />

      <div className="container-x relative pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal y={12}>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-brand-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-1">
                <ChevronRight className="size-3.5" />
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              </span>
            ))}
            <ChevronRight className="size-3.5" />
            <span className="text-accent-200">{eyebrow}</span>
          </nav>
        </Reveal>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start">
          {Icon && (
            <Reveal scale={0.6} y={0} delay={0.1}>
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-accent-400 text-brand-950 shadow-xl shadow-accent-500/20">
                <Icon className="size-8" />
              </div>
            </Reveal>
          )}
          <div>
            <Reveal delay={0.1}>
              <h1 className="max-w-3xl text-4xl leading-[1.08] font-extrabold text-white md:text-6xl">
                <Accent text={title} />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">{description}</p>
            </Reveal>
          </div>
        </div>
        {children && (
          <Reveal delay={0.3} className="mt-10">
            {children}
          </Reveal>
        )}
      </div>
      <NextSectionButton className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-10" />
      <div className="h-1.5 bg-gradient-to-r from-accent-400 via-accent-300 to-transparent" />
    </section>
  );
}

function HeroMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className="pointer-events-none absolute top-1/2 right-[-6rem] hidden size-[30rem] -translate-y-1/2 lg:block"
    >
      {[96, 76, 56, 36].map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={i === 2 ? "var(--color-accent-400)" : "white"}
          strokeOpacity={i === 2 ? 0.35 : 0.07}
          strokeDasharray={i % 2 ? "2 6" : undefined}
        />
      ))}
      <circle cx="100" cy="100" r="5" fill="var(--color-accent-400)" fillOpacity="0.6" />
    </svg>
  );
}
