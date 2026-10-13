import { Resend } from "resend";

export const PHONE_RE = /^[+\d\s-]{10,15}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/** Returns the uploaded resume, or null when no file was attached. */
export function resumeFile(formData: FormData) {
  const resume = formData.get("resume");
  return resume instanceof File && resume.size > 0 ? resume : null;
}

export function resumeError(resume: File) {
  if (!RESUME_TYPES.includes(resume.type)) return "Resume must be a PDF, DOC or DOCX file.";
  if (resume.size > MAX_RESUME_BYTES) return "Resume must be 4 MB or smaller.";
  return undefined;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type EnquiryEmail = {
  heading: string;
  subject: string;
  rows: [string, string][];
  message: string;
  replyTo?: string;
  resume?: File | null;
};

/** Sends an enquiry to the team inbox. Returns false if email isn't configured or sending failed. */
export async function sendEnquiryEmail({ heading, subject, rows, message, replyTo, resume }: EnquiryEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Enquiry email is not configured: set RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL.");
    return false;
  }

  const allRows: [string, string][] = [...rows, ["Resume", resume ? resume.name : "Not attached"]];
  const body = message || "(no message)";

  const text = [...allRows.map(([label, value]) => `${label}: ${value}`), "", body].join("\n");

  const html = `
    <h2 style="margin:0 0 16px">${escapeHtml(heading)}</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${allRows
        .map(
          ([label, value]) =>
            `<tr><td style="color:#64748b">${label}</td><td><strong>${escapeHtml(value)}</strong></td></tr>`,
        )
        .join("")}
    </table>
    <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(body)}</p>
  `;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: replyTo || undefined,
      subject,
      html,
      text,
      attachments: resume
        ? [
            {
              filename: resume.name,
              content: Buffer.from(await resume.arrayBuffer()),
              contentType: resume.type,
            },
          ]
        : undefined,
    });
    if (error) {
      console.error("Resend failed to send enquiry:", error);
      return false;
    }
  } catch (err) {
    console.error("Resend failed to send enquiry:", err);
    return false;
  }
  return true;
}
