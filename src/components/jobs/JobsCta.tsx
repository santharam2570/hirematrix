import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import Accent from "../Accent";
import Reveal from "../motion/Reveal";
import EnquireButton from "./EnquireButton";

export default function JobsCta({ sector }: { sector?: string }) {
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
                <Accent text="Don't see the *right role?*" />
              </h2>
              <p className="mt-5 max-w-xl text-lg text-brand-100">
                Tell us your sector, experience and preferred location. We&apos;ll contact you when a
                matching opening comes up with the employers we recruit for.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <EnquireButton sector={sector} className="btn-accent py-4 text-base">
                Tell Us What You&apos;re Looking For
              </EnquireButton>
              <a
                href={whatsappLink("Hi HireMatrix, I'd like to share my resume for job opportunities.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light py-4"
              >
                <MessageCircle className="size-4" /> Send Resume on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
