import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JobsBoard from "@/components/jobs/JobsBoard";
import { jobPageCount } from "@/data/jobs";

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: jobPageCount - 1 }, (_, i) => ({ page: String(i + 2) }));
}

function parsePage(value: string) {
  const page = Number(value);
  return Number.isInteger(page) && page >= 2 && page <= jobPageCount ? page : null;
}

export async function generateMetadata(props: PageProps<"/jobs/page/[page]">): Promise<Metadata> {
  const page = parsePage((await props.params).page);
  if (!page) return {};
  return {
    title: `Job Opportunities – Page ${page}`,
    description: `Page ${page} of current job openings through HireMatrix across IT, Non-IT, SAP, engineering, BPO, healthcare and more.`,
  };
}

export default async function JobsListingPage(props: PageProps<"/jobs/page/[page]">) {
  const page = parsePage((await props.params).page);
  if (!page) notFound();
  return <JobsBoard page={page} />;
}
