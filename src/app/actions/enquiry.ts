"use server";

import { industries } from "@/data/industries";
import { EMAIL_RE, PHONE_RE, field, resumeError, resumeFile, sendEnquiryEmail } from "@/lib/mail";
import { enquiryTypes, resumeEnquiryTypes, site } from "@/lib/site";

export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  type: string;
  branch: string;
  sector: string;
  message: string;
};

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof EnquiryValues | "resume", string>>;
  values?: EnquiryValues;
};

const branchNames = site.branches.map((b) => b.city);
const sectorNames = industries.map((i) => i.name);

export async function sendEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const values: EnquiryValues = {
    name: field(formData, "name"),
    phone: field(formData, "phone"),
    email: field(formData, "email"),
    type: field(formData, "type"),
    branch: field(formData, "branch"),
    sector: field(formData, "sector"),
    message: field(formData, "message"),
  };

  if (field(formData, "company_website")) {
    return { status: "success", values };
  }

  const fieldErrors: EnquiryState["fieldErrors"] = {};
  if (values.name.length < 2 || values.name.length > 80) {
    fieldErrors.name = "Please enter your name (2–80 characters).";
  }
  if (!PHONE_RE.test(values.phone)) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  if (values.email && !EMAIL_RE.test(values.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!(enquiryTypes as readonly string[]).includes(values.type)) {
    fieldErrors.type = "Please choose an enquiry type.";
  }
  if (!branchNames.includes(values.branch)) {
    fieldErrors.branch = "Please choose a branch.";
  }
  if (values.sector && !sectorNames.includes(values.sector)) {
    fieldErrors.sector = "Please choose a valid sector.";
  }
  if (values.message.length > 2000) {
    fieldErrors.message = "Please keep your message under 2000 characters.";
  }

  const resume = resumeEnquiryTypes.includes(values.type) ? resumeFile(formData) : null;
  const resumeProblem = resume && resumeError(resume);
  if (resumeProblem) fieldErrors.resume = resumeProblem;

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const sent = await sendEnquiryEmail({
    heading: "New website enquiry",
    subject: `[${values.type}] ${values.name} – ${values.branch}`,
    rows: [
      ["Name", values.name],
      ["Phone", values.phone],
      ["Email", values.email || "-"],
      ["Enquiry", values.type],
      ["Preferred branch", values.branch],
      ["Industry / sector", values.sector || "-"],
    ],
    message: values.message,
    replyTo: values.email,
    resume,
  });

  if (!sent) {
    return { status: "error", message: "Couldn't send right now – please WhatsApp or call us.", values };
  }
  return { status: "success", values };
}
