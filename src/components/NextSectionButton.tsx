"use client";

import { ArrowDown } from "lucide-react";
import { openEnquiry } from "@/lib/enquiry-popup";
import { inlineEnquiryId } from "@/lib/site";

function scrollBelowHeader(el: Element) {
  const header = document.querySelector("header");
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0),
  });
}

export default function NextSectionButton({ className = "" }: { className?: string }) {
  function goNext(e: React.MouseEvent<HTMLButtonElement>) {
    const inline = document.getElementById(inlineEnquiryId);
    if (inline) {
      scrollBelowHeader(inline);
      return;
    }
    const next = e.currentTarget.closest("section")?.nextElementSibling;
    if (next) scrollBelowHeader(next);
    openEnquiry({ prompt: true });
  }

  return (
    <button type="button" onClick={goNext} className={`btn-outline-light px-5 py-2.5 ${className}`}>
      Next <ArrowDown className="size-4 animate-bounce" />
    </button>
  );
}
