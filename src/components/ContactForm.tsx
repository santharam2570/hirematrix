"use client";

import { useActionState, useEffect, useState } from "react";
import { CircleCheck, LoaderCircle, MessageCircle, Send } from "lucide-react";
import { sendEnquiry, type EnquiryState } from "@/app/actions/enquiry";
import { industries } from "@/data/industries";
import { markEnquirySent } from "@/lib/enquiry-popup";
import { enquiryTypes, resumeEnquiryTypes, site } from "@/lib/site";
import { Field, Honeypot, ResumeField, inputCls } from "./FormFields";

const initialState: EnquiryState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);
  const [type, setType] = useState<string>(enquiryTypes[0]);
  const [whatsappError, setWhatsappError] = useState("");
  const [dismissedSuccess, setDismissedSuccess] = useState<EnquiryState | null>(null);

  const errors = state.fieldErrors ?? {};
  const values = state.status === "error" ? state.values : undefined;
  const showResume = resumeEnquiryTypes.includes(type);

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
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${data.get("email") || "-"}`,
      `Enquiry: ${data.get("type")}`,
      `Preferred branch: ${data.get("branch")}`,
      `Industry / sector: ${data.get("sector") || "-"}`,
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
          Our team has received your enquiry and will call you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setDismissedSuccess(state)}
          className="btn-outline mt-8"
        >
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
          placeholder="+91"
          defaultValue={values?.phone}
          className={inputCls}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          defaultValue={values?.email}
          className={inputCls}
        />
      </Field>
      <Field label="I am enquiring about" error={errors.type}>
        <select
          name="type"
          className={inputCls}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Preferred Branch" error={errors.branch}>
        <select
          name="branch"
          className={inputCls}
          defaultValue={values?.branch ?? site.branches[0].city}
        >
          {site.branches.map((b) => (
            <option key={b.city}>{b.city}</option>
          ))}
        </select>
      </Field>
      <Field label="Industry / Sector" error={errors.sector}>
        <select name="sector" className={inputCls} defaultValue={values?.sector ?? ""}>
          <option value="">Select a sector (optional)</option>
          {industries.map((i) => (
            <option key={i.slug}>{i.name}</option>
          ))}
        </select>
      </Field>
      {showResume && <ResumeField error={errors.resume} />}
      <Field label="Message" error={errors.message} full>
        <textarea
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="Tell us a little about what you need..."
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
              <Send className="size-4" /> Send Enquiry
            </>
          )}
        </button>
        <button type="button" onClick={sendWhatsApp} className="btn-outline">
          <MessageCircle className="size-4" /> Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
