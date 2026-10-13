import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NextPageLink from "./NextPageLink";

export function jobsPageHref(page: number) {
  return page <= 1 ? "/jobs" : `/jobs/page/${page}`;
}

const stepCls = "btn-outline px-5";
const disabledCls = "pointer-events-none opacity-40";

export default function Pagination({ page, pageCount }: { page: number; pageCount: number }) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Job listing pages" className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
      {page > 1 ? (
        <Link href={jobsPageHref(page - 1)} className={stepCls}>
          <ChevronLeft className="size-4" /> Previous
        </Link>
      ) : (
        <span aria-hidden className={`${stepCls} ${disabledCls} hidden sm:inline-flex`}>
          <ChevronLeft className="size-4" /> Previous
        </span>
      )}

      <ol className="flex items-center gap-2">
        {pages.map((p) => (
          <li key={p}>
            <Link
              href={jobsPageHref(p)}
              aria-current={p === page ? "page" : undefined}
              aria-label={`Page ${p}`}
              className={`flex size-11 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                p === page
                  ? "bg-brand-900 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-900"
              }`}
            >
              {p}
            </Link>
          </li>
        ))}
      </ol>

      {page < pageCount ? (
        <NextPageLink href={jobsPageHref(page + 1)} className="btn-primary group px-6">
          Next Page <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </NextPageLink>
      ) : (
        <span aria-hidden className={`btn-primary px-6 ${disabledCls} hidden sm:inline-flex`}>
          Next Page <ChevronRight className="size-4" />
        </span>
      )}
    </nav>
  );
}
