"use client";

import { Send } from "lucide-react";
import { openEnquiry } from "@/lib/enquiry-popup";

type Props = {
  sector?: string;
  role?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function EnquireButton({ sector, role, className = "btn-accent", children }: Props) {
  return (
    <button
      type="button"
      onClick={() => openEnquiry({ variant: "job", sector, role })}
      className={className}
    >
      <Send className="size-4" /> {children ?? "Enquire Now"}
    </button>
  );
}
