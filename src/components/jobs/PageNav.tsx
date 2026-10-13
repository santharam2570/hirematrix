import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NextPageLink from "./NextPageLink";

type Target = { href: string; label: string };

const cardCls =
  "group flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5";

/** Previous / next links between pages of the jobs module. */
export default function PageNav({ prev, next, label }: { prev?: Target; next?: Target; label: string }) {
  if (!prev && !next) return null;
  return (
    <nav aria-label={label} className="grid gap-4 sm:grid-cols-2">
      {prev && (
        <Link href={prev.href} className={cardCls}>
          <span className="flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] text-slate-500 uppercase">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" /> Previous
          </span>
          <span className="font-bold text-brand-900">{prev.label}</span>
        </Link>
      )}
      {next && (
        <NextPageLink href={next.href} className={`${cardCls} text-right sm:col-start-2`}>
          <span className="flex items-center justify-end gap-1.5 text-xs font-bold tracking-[0.15em] text-accent-600 uppercase">
            Next Page <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-bold text-brand-900">{next.label}</span>
        </NextPageLink>
      )}
    </nav>
  );
}
