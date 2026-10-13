import type { Metadata } from "next";
import JobsBoard from "@/components/jobs/JobsBoard";

export const metadata: Metadata = {
  title: "Job Opportunities",
  description:
    "Current job openings through HireMatrix across IT, Non-IT, SAP, civil and mechanical engineering, BPO, healthcare and more in Coimbatore, Tiruchirappalli and across Tamil Nadu.",
};

export default function JobsPage() {
  return <JobsBoard page={1} />;
}
