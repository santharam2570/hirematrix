"use client";

import Link from "next/link";
import { openEnquiry } from "@/lib/enquiry-popup";

type Props = React.ComponentProps<typeof Link>;

/** Link to the next page of the jobs module that also prompts the job enquiry pop-up. */
export default function NextPageLink({ onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        openEnquiry({ prompt: true, variant: "job" });
      }}
    />
  );
}
