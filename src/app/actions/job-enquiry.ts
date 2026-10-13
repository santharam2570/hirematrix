"use server";

import { experienceLevels, jobLocations, jobSectors } from "@/data/job-sectors";
import { EMAIL_RE, PHONE_RE, field, resumeError, resumeFile, sendEnquiryEmail } from "@/lib/mail";

export type JobEnquiryValues = {
  name: string;
  phone: string;
  email: string;
  sector: string;
  experience: string;
  location: string;
  role: string;
  message: string;
};

export type JobEnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof JobEnquiryValues | "resume", string>>;
  values?: JobEnquiryValues;
};

const sectorNames = jobSectors.map((s) => s.name);

export async function sendJobEnquiry(
  _prev: JobEnquiryState,
  formData: FormData,
): Promise<JobEnquiryState> {
  const values: JobEnquiryValues = {
    name: field(formData, "name"),
    phone: field(formData, "phone"),
    email: field(formData, "email"),
    sector: field(formData, "sector"),
    experience: field(formData, "experience"),
    location: field(formData, "location"),
    role: field(formData, "role"),
    message: field(formData, "message"),
  };

  if (field(formData, "company_website")) {
    return { status: "success", values };
  }

  const fieldErrors: JobEnquiryState["fieldErrors"] = {};
  if (values.name.length < 2 || values.name.length > 80) {
    fieldErrors.name = "Please enter your name (2–80 characters).";
  }
  if (!PHONE_RE.test(values.phone)) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  if (values.email && !EMAIL_RE.test(values.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!sectorNames.includes(values.sector)) {
    fieldErrors.sector = "Please choose a job sector.";
  }
  if (!(experienceLevels as readonly string[]).includes(values.experience)) {
    fieldErrors.experience = "Please choose your experience level.";
  }
  if (!(jobLocations as readonly string[]).includes(values.location)) {
    fieldErrors.location = "Please choose a preferred location.";
  }
  if (values.role.length > 120) {
    fieldErrors.role = "Please keep the role under 120 characters.";
  }
  if (values.message.length > 1000) {
    fieldErrors.message = "Please keep your message under 1000 characters.";
  }

  const resume = resumeFile(formData);
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
    heading: "New job opportunity enquiry",
    subject: `[Job enquiry] ${values.name} – ${values.sector} – ${values.location}`,
    rows: [
      ["Name", values.name],
      ["Phone", values.phone],
      ["Email", values.email || "-"],
      ["Preferred sector", values.sector],
      ["Experience", values.experience],
      ["Preferred location", values.location],
      ["Role of interest", values.role || "-"],
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
