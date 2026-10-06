import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/site";
import Reveal from "./motion/Reveal";

export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((f, i) => (
        <Reveal key={f.q} y={16} delay={i * 0.08}>
          <details className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-900 transition-colors hover:text-brand-600">
              {f.q}
              <ChevronDown className="size-5 shrink-0 text-brand-600 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="mt-3 animate-fade-in leading-relaxed text-slate-600">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
