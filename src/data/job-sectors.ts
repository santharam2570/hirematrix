import {
  Briefcase,
  CodeXml,
  Cog,
  HardHat,
  Headphones,
  LayoutGrid,
  Layers,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type JobSector = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  roles: string[];
};

export const jobSectors: JobSector[] = [
  {
    slug: "it",
    name: "IT & Software",
    icon: CodeXml,
    tagline: "Development, testing, cloud, data and technical support roles with technology companies.",
    roles: ["Full Stack Developer", "QA / Test Engineer", "DevOps Engineer", "Data Analyst"],
  },
  {
    slug: "non-it",
    name: "Non-IT & Corporate",
    icon: Briefcase,
    tagline: "Sales, HR, accounts, administration and marketing positions across growing businesses.",
    roles: ["Sales Executive", "HR Executive", "Accounts Executive", "Office Administrator"],
  },
  {
    slug: "sap",
    name: "SAP & ERP",
    icon: Layers,
    tagline: "Functional and technical SAP consultants for implementation and support projects.",
    roles: ["SAP FICO Consultant", "SAP MM Consultant", "SAP ABAP Developer", "SAP SD Consultant"],
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    icon: HardHat,
    tagline: "Site, planning, design and billing roles with builders, contractors and infrastructure firms.",
    roles: ["Site Engineer", "Planning Engineer", "Quantity Surveyor", "AutoCAD Draughtsman"],
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    icon: Cog,
    tagline: "Production, design, quality and maintenance roles in manufacturing and engineering plants.",
    roles: ["Production Engineer", "Design Engineer", "Quality Engineer", "Maintenance Engineer"],
  },
  {
    slug: "bpo",
    name: "BPO & Customer Support",
    icon: Headphones,
    tagline: "Voice, non-voice, chat and technical support roles for customer-focused operations.",
    roles: ["Customer Support Executive", "Chat Support Executive", "Technical Support", "Team Leader"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    tagline: "Nursing, pharmacy, lab, front-office and medical coding roles with hospitals and clinics.",
    roles: ["Staff Nurse", "Pharmacist", "Lab Technician", "Medical Coder"],
  },
  {
    slug: "other",
    name: "Other Industries",
    icon: LayoutGrid,
    tagline: "Electrical, logistics, banking, retail and other roles beyond our core sectors.",
    roles: ["Electrical Engineer", "Logistics Coordinator", "Relationship Officer", "Store Manager"],
  },
];

export const experienceLevels = [
  "Fresher (0–1 year)",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
] as const;

export const jobLocations = [
  "Coimbatore",
  "Tiruchirappalli",
  "Chennai",
  "Madurai",
  "Bengaluru",
  "Anywhere in Tamil Nadu",
  "Open to relocation",
] as const;

export function getJobSector(slug: string) {
  return jobSectors.find((s) => s.slug === slug);
}
