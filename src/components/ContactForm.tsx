"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { domains } from "@/data/courses";
import { site } from "@/lib/site";

const enquiryTypes = [
  "I'm looking for a job",
  "I want to join a course",
  "I want to hire talent",
  "HR outsourcing / onboarding",
  "Other",
];

export default function ContactForm() {
  const [error, setError] = useState("");

  function buildMessage(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !phone) {
      setError("Please enter your name and phone number.");
      return null;
    }
    setError("");
    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${data.get("email") || "-"}`,
      `Enquiry: ${data.get("type")}`,
      `Preferred branch: ${data.get("branch")}`,
      `Interested domain: ${data.get("domain") || "-"}`,
      "",
      String(data.get("message") || ""),
    ];
    return { subject: `Website enquiry from ${name}`, body: lines.join("\n") };
  }

  function sendWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = buildMessage(e.currentTarget);
    if (!msg) return;
    window.open(`${site.whatsappHref}?text=${encodeURIComponent(msg.body)}`, "_blank");
  }

  function sendEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const msg = buildMessage(form);
    if (!msg) return;
    window.open(
      `${site.emailHref}?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.body)}`,
      "_self",
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

  return (
    <form onSubmit={sendWhatsApp} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full Name *">
        <input name="name" required placeholder="Your name" className={inputCls} />
      </Field>
      <Field label="Phone Number *">
        <input name="phone" type="tel" required placeholder="+91" className={inputCls} />
      </Field>
      <Field label="Email">
        <input name="email" type="email" placeholder="you@example.com" className={inputCls} />
      </Field>
      <Field label="I am enquiring about">
        <select name="type" className={inputCls} defaultValue={enquiryTypes[0]}>
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Preferred Branch">
        <select name="branch" className={inputCls} defaultValue={site.branches[0].city}>
          {site.branches.map((b) => (
            <option key={b.city}>{b.city}</option>
          ))}
        </select>
      </Field>
      <Field label="Interested Domain">
        <select name="domain" className={inputCls} defaultValue="">
          <option value="">Select a domain (optional)</option>
          {domains.map((d) => (
            <option key={d.slug}>{d.title}</option>
          ))}
        </select>
      </Field>
      <Field label="Message" full>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us a little about what you need..."
          className={inputCls}
        />
      </Field>

      {error && <p className="text-sm text-red-600 sm:col-span-2">{error}</p>}

      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button type="submit" className="btn-primary">
          <MessageCircle className="size-4" /> Send via WhatsApp
        </button>
        <button type="button" onClick={sendEmail} className="btn-outline">
          <Mail className="size-4" /> Send via Email
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-medium text-brand-900">{label}</span>
      {children}
    </label>
  );
}
