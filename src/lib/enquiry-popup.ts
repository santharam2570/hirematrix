export type EnquiryVariant = "job" | "general";

export type EnquiryRequest = {
  variant?: EnquiryVariant;
  /** Job sector slug to preselect in the job form. */
  sector?: string;
  /** Role to prefill in the job form. */
  role?: string;
  /** Automatic prompts (scrolling, "Next" buttons) stop once the visitor has sent an enquiry. */
  prompt?: boolean;
};

export const ENQUIRY_OPEN_EVENT = "enquiry:open";
export const ENQUIRY_SEEN_KEY = "hm-enquiry-seen";
export const ENQUIRY_SENT_KEY = "hm-enquiry-sent";

export function openEnquiry(request: EnquiryRequest = {}) {
  window.dispatchEvent(new CustomEvent<EnquiryRequest>(ENQUIRY_OPEN_EVENT, { detail: request }));
}

export function markEnquirySent() {
  sessionStorage.setItem(ENQUIRY_SENT_KEY, "1");
}

export function isJobPath(pathname: string) {
  return pathname === "/jobs" || pathname.startsWith("/jobs/") || pathname === "/job-seekers";
}
