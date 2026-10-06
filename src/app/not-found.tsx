import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center py-32 text-center">
      <div className="flex size-20 items-center justify-center rounded-3xl bg-brand-50 text-brand-800">
        <SearchX className="size-10" />
      </div>
      <p className="mt-8 font-display text-6xl font-extrabold text-brand-800">404</p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to Home <ArrowRight className="size-4" />
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
