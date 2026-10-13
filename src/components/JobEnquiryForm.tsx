"use client";

import { useActionState, useEffect, useState } from "react";
import { CircleCheck, LoaderCircle, MessageCircle, Send } from "lucide-react";
import { sendJobEnquiry, type JobEnquiryState } from "@/app/actions/job-enquiry";
import { experienceLevels, getJobSector, jobLocations, jobSectors } from "@/data/job-sectors";
import { markEnquirySent } from "@/lib/enquiry-popup";
import { site } from "@/lib/site";
import { Field, Honeypot, ResumeField, inputCls } from "./FormFields";

const initialState: JobEnquiryState = { status: "idle" };

type Props = {
  /** Job sector slug to preselect. */
  defaultSector?: string;
  defaultRole?: string;
};

export default function JobEnquiryForm({ defaultSector, defaultRole }: Props) {
  const [state, formAction, pending] = useActionState(sendJobEnquiry, initialState);
  const [whatsappError, setWhatsappError] = useState("");
  const [dismissedSuccess, setDismissedSuccess] = useState<JobEnquiryState | null>(null);

  const errors = state.fieldErrors ?? {};
  const values = state.status === "error" ? state.values : undefined;
  const sectorName = (defaultSector && getJobSector(defaultSector)?.name) || "";

  useEffect(() => {
    if (state.status === "success") markEnquirySent();
  }, [state]);

  function sendWhatsApp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !phone) {
      setWhatsappError("Please enter your name and phone number.");
      return;
    }
    setWhatsappError("");
    const lines = [
      "Hi HireMatrix, I'm interested in job opportunities.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${data.get("email") || "-"}`,
      `Preferred sector: ${data.get("sector") || "-"}`,
      `Experience: ${data.get("experience") || "-"}`,
      `Preferred location: ${data.get("location") || "-"}`,
      `Role of interest: ${data.get("role") || "-"}`,
      "",
      String(data.get("message") || ""),
    ];
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  }

  if (state.status === "success" && dismissedSuccess !== state) {
    return (
      <div className="flex flex-col items-center py-10 text-center" role="status">
        <div className="flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <CircleCheck className="size-8" />
        </div>
        <h3 className="mt-6 text-2xl font-bold">Thanks, {state.values?.name || "there"}!</h3>
        <p className="mt-3 max-w-sm text-slate-600">
          We&apos;ve received your details. Our team will call you about suitable{" "}
          {state.values?.sector ? `${state.values.sector} ` : ""}openings within one business day.
        </p>
        <button type="button" onClick={() => setDismissedSuccess(state)} className="btn-outline mt-8">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full Name *" error={errors.name}>
        <input
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          placeholder="Your name"
          defaultValue={values?.name}
          className={inputCls}
        />
      </Field>
      <Field label="Phone Number *" error={errors.phone}>
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+91"
          defaultValue={values?.phone}
          className={inputCls}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          defaultValue={values?.email}
          className={inputCls}
        />
      </Field>
      <Field label="Preferred Job Sector *" error={errors.sector}>
        <select name="sector" required className={inputCls} defaultValue={values?.sector ?? sectorName}>
          <option value="" disabled>
            Select a sector
          </option>
          {jobSectors.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
        </select>
      </Field>
      <Field label="Experience Level *" error={errors.experience}>
        <select name="experience" required className={inputCls} defaultValue={values?.experience ?? ""}>
          <option value="" disabled>
            Select your experience
          </option>
          {experienceLevels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </Field>
      <Field label="Preferred Location *" error={errors.location}>
        <select name="location" required className={inputCls} defaultValue={values?.location ?? ""}>
          <option value="" disabled>
            Select a location
          </option>
          {jobLocations.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </Field>
      <Field label="Role You're Interested In" error={errors.role} full>
        <input
          name="role"
          maxLength={120}
          placeholder="e.g. Java Developer, Site Engineer, Staff Nurse"
          defaultValue={values?.role ?? defaultRole}
          className={inputCls}
        />
      </Field>
      <ResumeField error={errors.resume} />
      <Field label="Anything else we should know?" error={errors.message} full>
        <textarea
          name="message"
          rows={3}
          maxLength={1000}
          placeholder="Notice period, current salary, qualifications..."
          defaultValue={values?.message}
          className={inputCls}
        />
      </Field>

      <Honeypot />

      {(whatsappError || (state.status === "error" && state.message)) && (
        <p className="text-sm text-red-600 sm:col-span-2" role="alert">
          {whatsappError || state.message}
        </p>
      )}

      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button type="submit" disabled={pending} className="btn-primary disabled:opacity-70">
          {pending ? (
            <>
              <LoaderCircle className="size-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="size-4" /> Enquire Now
            </>
          )}
        </button>
        <button type="button" onClick={sendWhatsApp} className="btn-outline">
          <MessageCircle className="size-4" /> Send via WhatsApp
        </button>
      </div>
      <p className="text-xs text-slate-500 sm:col-span-2">
        We use your details only to contact you about relevant openings. See our{" "}
        <a href="/privacy-policy" target="_blank" className="underline underline-offset-2 hover:text-brand-800">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
