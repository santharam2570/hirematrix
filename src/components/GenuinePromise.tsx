import { ShieldCheck } from "lucide-react";
import { genuinePromise } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function GenuinePromise() {
  return (
    <section className="relative overflow-hidden bg-paper py-24">
      <div className="dot-matrix-ink absolute inset-y-0 right-0 w-1/2 [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <SectionHeading
            center={false}
            eyebrow="For Job Seekers"
            title="Our *genuine jobs* promise"
            description="Job hunting shouldn't feel like a gamble. These four commitments guide every opportunity we share with you."
          />
          <Reveal delay={0.2} className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-accent-200 bg-white px-5 py-4 shadow-sm">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent-400 text-brand-950">
              <ShieldCheck className="size-5" />
            </span>
            <span className="text-sm font-semibold text-brand-900">
              Integrity &amp; transparency
              <span className="block text-xs font-normal text-slate-500">Two of our six core values</span>
            </span>
          </Reveal>
        </div>

        <ol className="divide-y divide-brand-900/10 border-y border-brand-900/10">
          {genuinePromise.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.1} className="group flex gap-6 py-8 sm:gap-10">
              <span className="w-12 shrink-0 font-serif text-5xl leading-none text-accent-500 italic transition-transform duration-300 group-hover:-translate-y-1 sm:w-16 sm:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
