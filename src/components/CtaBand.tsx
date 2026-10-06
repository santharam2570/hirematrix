import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./motion/Reveal";

type Props = {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
};

export default function CtaBand({
  title = "Ready to hire smarter or start your career?",
  text = "Whether you are an employer looking for the right talent or a job seeker looking for the right opportunity — HireMatrix is here to help.",
  primary = { href: "/contact", label: "Contact Us" },
}: Props) {
  return (
    <section className="container-x py-20">
      <Reveal scale={0.95}>
        <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-8 py-14 text-white md:px-14">
          <div className="grid-pattern absolute inset-0" />
          <div className="absolute -bottom-32 -left-20 size-96 animate-blob rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -top-24 right-10 size-72 animate-blob rounded-full bg-brand-400/20 blur-3xl [animation-delay:-5s]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
              <p className="mt-4 text-brand-100">{text}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={primary.href} className="btn-light group">
                {primary.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={site.phoneHref} className="btn-outline-light">
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
