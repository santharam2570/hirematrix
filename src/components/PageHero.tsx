import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
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
    <section className="relative overflow-hidden bg-brand-800 text-white">
      <div className="grid-pattern absolute inset-0" />
      <div className="absolute -top-24 -right-24 size-96 animate-blob rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 size-80 animate-blob rounded-full bg-brand-400/20 blur-3xl [animation-delay:-7s]" />
      <div className="container-x relative py-16 md:py-24">
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
            <span className="text-white">{eyebrow}</span>
          </nav>
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
          {Icon && (
            <Reveal scale={0.6} y={0} delay={0.1}>
              <div className="flex size-16 shrink-0 animate-float items-center justify-center rounded-2xl bg-white text-brand-800 shadow-xl">
                <Icon className="size-8" />
              </div>
            </Reveal>
          )}
          <div>
            <Reveal delay={0.1}>
              <h1 className="max-w-3xl text-4xl font-bold text-white md:text-5xl">{title}</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-2xl text-lg text-brand-100">{description}</p>
            </Reveal>
          </div>
        </div>
        {children && (
          <Reveal delay={0.3} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
