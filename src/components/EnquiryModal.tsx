"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Accent from "./Accent";
import ContactForm from "./ContactForm";
import JobEnquiryForm from "./JobEnquiryForm";
import { getJobSector } from "@/data/job-sectors";
import {
  ENQUIRY_OPEN_EVENT,
  ENQUIRY_SEEN_KEY,
  ENQUIRY_SENT_KEY,
  isJobPath,
  openEnquiry,
  type EnquiryRequest,
} from "@/lib/enquiry-popup";
import { inlineEnquiryId } from "@/lib/site";

const copy = {
  job: {
    eyebrow: "Job Opportunities",
    title: "Find your *next role*",
    text: "Tell us what you're looking for and our team will contact you about matching openings.",
  },
  general: {
    eyebrow: "Enquiry",
    title: "Send us a *message*",
    text: "Share your details and our team will call you within one business day.",
  },
};

export default function EnquiryModal() {
  const pathname = usePathname();
  const ref = useRef<HTMLDialogElement>(null);
  const [request, setRequest] = useState<EnquiryRequest>({});

  useEffect(() => {
    const show = (e: Event) => {
      const next = (e as CustomEvent<EnquiryRequest>).detail ?? {};
      if (next.prompt && sessionStorage.getItem(ENQUIRY_SENT_KEY)) return;
      sessionStorage.setItem(ENQUIRY_SEEN_KEY, "1");
      setRequest(next);
      if (!ref.current?.open) ref.current?.showModal();
    };
    window.addEventListener(ENQUIRY_OPEN_EVENT, show);
    return () => window.removeEventListener(ENQUIRY_OPEN_EVENT, show);
  }, []);

  useEffect(() => {
    const done = () =>
      sessionStorage.getItem(ENQUIRY_SEEN_KEY) || sessionStorage.getItem(ENQUIRY_SENT_KEY);
    if (done() || document.getElementById(inlineEnquiryId)) return;
    const hero = document.querySelector("main section");
    if (!hero) return;

    const onScroll = () => {
      if (done()) {
        window.removeEventListener("scroll", onScroll);
      } else if (hero.getBoundingClientRect().bottom < window.innerHeight / 2) {
        openEnquiry({ prompt: true });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const variant = request.variant ?? (isJobPath(pathname) ? "job" : "general");
  const pathSector = pathname.match(/^\/jobs\/([^/]+)/)?.[1];
  const sector = request.sector ?? (pathSector && getJobSector(pathSector) ? pathSector : undefined);
  const { eyebrow, title, text } = copy[variant];

  return (
    <dialog
      ref={ref}
      aria-labelledby="enquiry-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl translate-y-6 overflow-hidden rounded-3xl bg-white p-0 text-slate-700 opacity-0 shadow-2xl shadow-brand-950/30 transition-all transition-discrete duration-300 backdrop:bg-brand-950/60 backdrop:backdrop-blur-sm open:translate-y-0 open:opacity-100 starting:open:translate-y-6 starting:open:opacity-0"
    >
      <div className="max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain">
        <div className="on-dark relative overflow-hidden bg-brand-900 px-6 py-7 text-white sm:px-10 sm:py-8">
          <div className="dot-matrix absolute inset-0" />
          <div className="relative flex items-start justify-between gap-6">
            <div>
              <span className="eyebrow-light">{eyebrow}</span>
              <h2 id="enquiry-modal-title" className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
                <Accent text={title} />
              </h2>
              <p className="mt-3 text-brand-100">{text}</p>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close enquiry form"
              className="-mt-2 -mr-2 rounded-full p-2 text-brand-100 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
        <div className="p-6 sm:p-10">
          {variant === "job" ? (
            <JobEnquiryForm
              key={`${sector ?? ""}|${request.role ?? ""}`}
              defaultSector={sector}
              defaultRole={request.role}
            />
          ) : (
            <ContactForm />
          )}
        </div>
      </div>
    </dialog>
  );
}
