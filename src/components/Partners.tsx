import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import { partners, type Partner } from "@/data/partners";

function initials(name: string) {
  const words = name.split(" ");
  return (words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2)).toUpperCase();
}

function PartnerTile({ partner, hidden }: { partner: Partner; hidden: boolean }) {
  return (
    <div aria-hidden={hidden} className="shrink-0 pr-4">
      <div
        title={partner.name}
        className={`group flex h-24 w-60 items-center rounded-2xl border border-slate-200 bg-white px-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/10 ${
          partner.logo ? "flex-col justify-center gap-2" : "gap-4"
        }`}
      >
        {partner.logo ? (
          <>
            <Image
              src={partner.logo}
              alt={hidden ? "" : `${partner.name} logo`}
              width={160}
              height={44}
              unoptimized
              className="h-auto max-h-10 w-auto max-w-40 object-contain opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="text-[11px] font-medium tracking-wide text-slate-400 uppercase">
              {partner.sector}
            </span>
          </>
        ) : (
          <>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-display text-sm font-bold text-brand-800 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white">
              {initials(partner.name)}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display font-semibold text-brand-900">
                {partner.name}
              </span>
              <span className="block text-xs text-slate-500">{partner.sector}</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function Row({ items, reverse = false }: { items: Partner[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="group/row relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max animate-marquee py-2 [animation-duration:45s] group-hover/row:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {loop.map((p, i) => (
          <PartnerTile key={`${p.name}-${i}`} partner={p} hidden={i >= items.length} />
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  const half = Math.ceil(partners.length / 2);

  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Partners"
          title="Where our candidates *work*"
          description="Our connections with growing companies help job seekers step into genuine, rewarding roles."
        />
      </div>

      <Reveal delay={0.15} className="mt-14 space-y-4">
        <Row items={partners.slice(0, half)} />
        <Row items={partners.slice(half)} reverse />
      </Reveal>

      <Reveal delay={0.25} className="container-x mt-12 flex flex-wrap justify-center gap-4">
        <Link href="/job-seekers" className="btn-primary group">
          Start Your Career Journey
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link href="/employers" className="btn-outline">
          Become a Hiring Partner
        </Link>
      </Reveal>
    </section>
  );
}
