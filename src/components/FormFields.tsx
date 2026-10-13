"use client";

import { useState } from "react";

// Uploads above the Server Action body limit (next.config.ts) are rejected before
// the action runs, so oversize files must be caught here.
const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

export const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

export function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-medium text-brand-900">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

export function ResumeField({ error }: { error?: string }) {
  const [localError, setLocalError] = useState("");

  function check(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    let problem = "";
    if (file) {
      const name = file.name.toLowerCase();
      if (!RESUME_EXTENSIONS.some((ext) => name.endsWith(ext))) {
        problem = "Resume must be a PDF, DOC or DOCX file.";
      } else if (file.size > MAX_RESUME_BYTES) {
        problem = "Resume must be 4 MB or smaller.";
      }
    }
    setLocalError(problem);
    if (problem) e.target.value = "";
  }

  return (
    <Field label="Resume (optional, PDF/DOC, max 4 MB)" error={localError || error} full>
      <input
        name="resume"
        type="file"
        onChange={check}
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className={`${inputCls} file:mr-4 file:rounded-lg file:border-0 file:bg-brand-50 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-brand-800`}
      />
    </Field>
  );
}

export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
      <label>
        Leave this field empty
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
