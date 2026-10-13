import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import Accent from "./Accent";
import Reveal from "./motion/Reveal";

type Props = {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
};

export default function CtaBand({
  title = "Hiring, or looking for your *next job*?",
  text = "Tell us what you need. Whether you're a company searching for the right candidate or a job seeker looking for a genuine opportunity, HireMatrix will help you take the next step.",
  primary = { href: "/contact", label: "Talk to HireMatrix" },
}: Props) {
  return (
    <section className="container-x py-20">
      <Reveal scale={0.96}>
        <div className="on-dark relative overflow-hidden rounded-[2rem] bg-brand-900 px-8 py-14 text-white md:px-14 md:py-16">
          <div className="dot-matrix absolute inset-0" />
          <div className="absolute -right-24 -bottom-24 size-80 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-accent-400 to-accent-300/0" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="text-3xl leading-tight font-extrabold text-white md:text-5xl">
                <Accent text={title} />
              </h2>
              <p className="mt-5 max-w-xl text-lg text-brand-100">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Link href={primary.href} className="btn-accent group py-4 text-base">
                {primary.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="grid flex-1 grid-cols-2 gap-3">
                <a href={site.phoneHref} className="btn-outline-light">
                  <Phone className="size-4" /> Call
                </a>
                <a
                  href={whatsappLink("Hi HireMatrix, I'd like to know more.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
              <p className="text-center text-xs text-brand-200 lg:mt-1">
                Mon – Sat · {site.locations}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
