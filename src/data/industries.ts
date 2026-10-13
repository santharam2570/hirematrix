import {
  Briefcase,
  Building,
  CodeXml,
  Factory,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  summary: string;
  overview: string[];
  challenges: string[];
  roles: { group: string; items: string[] }[];
  solutions: { title: string; text: string }[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "it-software",
    icon: CodeXml,
    name: "IT & Technology",
    tagline: "Developers, testers, cloud, data and support professionals for technology-driven businesses.",
    summary:
      "Recruitment for software development, testing, cloud, DevOps, data, AI, cybersecurity and technical support roles.",
    overview: [
      "The technology sector needs professionals who can contribute to software development, digital transformation, cloud infrastructure, data management, cyber security, quality assurance and technology-enabled business operations.",
      "HireMatrix supports IT recruitment by coordinating candidate sourcing and referrals based on the technical and professional requirements you share with us. We take time to understand the technologies involved, the responsibilities of the role, the expected experience and your other selection criteria before introducing any candidate.",
    ],
    challenges: [
      "Finding candidates whose skills genuinely match the technology stack",
      "Balancing technical ability with communication, problem-solving and teamwork",
      "Large volumes of irrelevant applications on job portals",
      "Coordinating multiple interview rounds across teams",
    ],
    roles: [
      {
        group: "Development",
        items: ["Software & Application Developers", "Web Developers", "Programmers", "Technical Leads"],
      },
      {
        group: "Quality & Infrastructure",
        items: ["Software Testers", "Cloud & Infrastructure Engineers", "DevOps Engineers", "Database Administrators"],
      },
      {
        group: "Data, Security & Support",
        items: ["Data Analysts & Data Engineers", "AI Professionals", "Cybersecurity Professionals", "Technical Support Engineers"],
      },
    ],
    solutions: [
      { title: "Requirement Understanding", text: "We capture the tech stack, responsibilities, experience level and selection criteria before sourcing." },
      { title: "Relevant Profile Review", text: "Profiles are reviewed against your technical and professional requirements before they reach you." },
      { title: "Fresher to Experienced", text: "Support for fresh graduates, junior professionals and experienced technology specialists." },
      { title: "Interview Coordination", text: "We schedule interviews and keep candidates informed through every round." },
    ],
    whyUs: [
      "Attention to both technical capability and professional attributes",
      "Candidate interest and availability confirmed before referral",
      "Confidential handling of candidate and company information",
      "Clear, responsive communication throughout the hiring process",
    ],
    faqs: [
      {
        q: "Which IT roles do you recruit for?",
        a: "We support recruitment for software and application development, web development, testing, cloud and infrastructure, DevOps, data, AI, cybersecurity, database management and technical support, depending on your vacancies.",
      },
      {
        q: "Do you hire both freshers and experienced professionals?",
        a: "Yes. We coordinate recruitment for fresh graduates, junior professionals, experienced specialists and selected advanced positions.",
      },
      {
        q: "Who makes the final hiring decision?",
        a: "You do. We source, review and refer candidates; final shortlisting, evaluation, selection and compensation decisions remain with the employer.",
      },
    ],
  },
  {
    slug: "non-it-corporate",
    icon: Briefcase,
    name: "Non-IT & Corporate",
    tagline: "Talent for administration, HR, sales, marketing, finance, customer relations and operations.",
    summary:
      "Recruitment for corporate administration, HR, sales, marketing, accounting, finance, customer service and operations roles.",
    overview: [
      "Organisations rely on capable professionals across administration, finance, human resources, sales, marketing, customer relations and business operations. These functions keep a business productive, strengthen customer relationships and support its objectives.",
      "HireMatrix provides Non-IT and corporate recruitment for a broad range of business positions. We begin by understanding the responsibilities and requirements of each vacancy, then coordinate candidate sourcing, referrals and interviews.",
    ],
    challenges: [
      "Identifying candidates who fit both the role and the work culture",
      "Filling sales and customer-facing roles with reliable people",
      "Clear vacancy communication so candidates know what to expect",
      "Managing interview schedules alongside day-to-day work",
    ],
    roles: [
      {
        group: "Administration & HR",
        items: ["Corporate & Office Administration", "HR Executives", "Recruitment Coordinators", "Operations Support"],
      },
      {
        group: "Sales & Marketing",
        items: ["Sales Executives", "Business Development Executives", "Marketing Executives", "Digital Marketing Executives"],
      },
      {
        group: "Finance & Customer Service",
        items: ["Accounts Executives", "Finance Professionals", "Customer Service Executives", "Customer Relations Executives"],
      },
    ],
    solutions: [
      { title: "Clear Vacancy Briefs", text: "We understand responsibilities, qualifications and expectations before sourcing." },
      { title: "Relevant Profiles", text: "Candidates are referred only after their background is checked against your criteria." },
      { title: "Organised Interviews", text: "We coordinate interview schedules and keep both sides informed." },
      { title: "Follow-Up", text: "We follow up on outcomes and next steps until the position is closed." },
    ],
    whyUs: [
      "Recruitment for eligible freshers and experienced professionals",
      "Emphasis on relevant profiles, not volume of resumes",
      "Organised interview scheduling and follow-up",
      "Responsible handling of candidate information",
    ],
    faqs: [
      {
        q: "Which corporate functions do you cover?",
        a: "Corporate administration, human resources, recruitment operations, sales and business development, marketing, digital marketing, accounting, finance, customer service, office administration and operational support.",
      },
      {
        q: "Can you help with both fresher and experienced roles?",
        a: "Yes. We coordinate recruitment for eligible fresh graduates and experienced professionals, depending on the position and your selection criteria.",
      },
      {
        q: "How do you decide which candidates to refer?",
        a: "We review each profile against the qualifications and requirements you share and confirm the candidate's interest and availability before referring them.",
      },
    ],
  },
  {
    slug: "manufacturing-engineering",
    icon: Factory,
    name: "Engineering & Manufacturing",
    tagline: "Engineers, technicians and plant professionals for production, quality and maintenance.",
    summary:
      "Recruitment for mechanical, electrical, electronics, production, quality, maintenance and design roles in manufacturing and industry.",
    overview: [
      "Engineering and manufacturing organisations depend on qualified professionals to support production, technical operations, quality management, maintenance and project execution.",
      "HireMatrix provides recruitment support for engineering and industrial positions based on the workforce requirements you share. We aim to understand the technical responsibilities, qualifications, practical experience and industry background each role needs, so the candidates we refer reflect your stated expectations.",
    ],
    challenges: [
      "Matching candidates on technical qualifications and hands-on experience",
      "Finding people with relevant industry background and safety awareness",
      "Filling shift-based production and maintenance roles",
      "Urgent vacancies that affect production schedules",
    ],
    roles: [
      {
        group: "Core Engineering",
        items: ["Mechanical Engineers", "Electrical Engineers", "Electronics Engineers", "Technical Design Engineers"],
      },
      {
        group: "Production & Quality",
        items: ["Production Engineers & Supervisors", "Manufacturing Engineers", "Quality Assurance Engineers", "Process Engineers"],
      },
      {
        group: "Plant Support",
        items: ["Maintenance Engineers & Technicians", "Project Engineers", "Technical Operations Staff", "Industrial Operations Staff"],
      },
    ],
    solutions: [
      { title: "Technical Requirement Review", text: "We note qualifications, experience, industry background and shift needs before sourcing." },
      { title: "Production & Quality Hiring", text: "Recruitment support for production, quality, maintenance and industrial operations." },
      { title: "Candidate Coordination", text: "Interest, availability and relevant background confirmed before referral." },
      { title: "Interview & Joining Follow-Up", text: "We coordinate interviews and follow up on outcomes and joining." },
    ],
    whyUs: [
      "Attention to technical qualifications and practical experience",
      "Recruitment for diploma, ITI and engineering graduates",
      "Fresher and experienced hiring based on your vacancies",
      "Responsive communication for urgent requirements",
    ],
    faqs: [
      {
        q: "Which engineering disciplines do you recruit for?",
        a: "Mechanical, civil, electrical, electronics, production, manufacturing, maintenance, quality assurance, technical design and project-related functions.",
      },
      {
        q: "Do you hire ITI and diploma candidates?",
        a: "Yes. Depending on your vacancy, we coordinate recruitment for ITI, diploma and engineering graduates for technician, supervisor and engineer roles.",
      },
      {
        q: "Can you support recruitment for a new production line?",
        a: "Yes. We can coordinate bulk recruitment where the required arrangements and resources are agreed in advance.",
      },
    ],
  },
  {
    slug: "construction-infrastructure",
    icon: Building,
    name: "Construction & Infrastructure",
    tagline: "Site, design, planning and project talent for builders, contractors and infrastructure firms.",
    summary:
      "Recruitment for site engineers, project, planning and design professionals for construction and infrastructure businesses.",
    overview: [
      "Construction and infrastructure projects need capable engineers on site and skilled planners and designers off site — often on timelines driven by project phases.",
      "HireMatrix helps construction and infrastructure businesses coordinate candidate opportunities for site activities, project execution, design, planning and other relevant functions, based on the requirements you share.",
    ],
    challenges: [
      "Finding site engineers with both technical and supervision skills",
      "Hiring around project start dates and phases",
      "Candidates who are ready for site work and travel",
      "Matching design professionals to the tools and standards you use",
    ],
    roles: [
      {
        group: "Site & Project",
        items: ["Civil Site Engineers", "Project Engineers & Managers", "Site Supervisors", "Safety Officers"],
      },
      {
        group: "Design & Planning",
        items: ["Design Engineers", "Planning Engineers", "Quantity Surveyors", "CAD Draftsmen"],
      },
      {
        group: "Project Support",
        items: ["Billing Engineers", "Purchase & Procurement Executives", "Site Administration", "Project Coordinators"],
      },
    ],
    solutions: [
      { title: "Project-Based Hiring", text: "Recruitment planned around your project phases and site start dates." },
      { title: "Site Readiness", text: "We confirm candidates' site exposure, availability and willingness to travel." },
      { title: "Design & Planning Talent", text: "Candidates referred against the tools, standards and experience you specify." },
      { title: "Follow-Up to Joining", text: "Interview coordination and follow-up until the candidate joins." },
    ],
    whyUs: [
      "Understanding of both site and design-office requirements",
      "Fresher and experienced civil and project hiring",
      "Candidate availability confirmed before referral",
      "Clear communication on timelines and next steps",
    ],
    faqs: [
      {
        q: "Do you recruit fresher site engineers?",
        a: "Yes. Depending on your requirements, we coordinate recruitment for fresher and experienced site engineers, supervisors and project professionals.",
      },
      {
        q: "Can you help with design and planning roles?",
        a: "Yes. We recruit design, planning, quantity surveying and CAD professionals based on the tools and experience you require.",
      },
      {
        q: "Can hiring be planned around our project schedule?",
        a: "Yes. We agree timelines with you upfront so recruitment is aligned with your project phases.",
      },
    ],
  },
  {
    slug: "bpo-customer-experience",
    icon: Headphones,
    name: "BPO & Customer Support",
    tagline: "Voice, non-voice, technical support and back-office talent for customer-focused operations.",
    summary:
      "Recruitment for voice and non-voice process, customer support, technical support, email and chat support and back-office roles.",
    overview: [
      "Business process outsourcing and customer operations need professionals who can manage customer interactions, communicate clearly, follow established processes and maintain service quality.",
      "HireMatrix supports recruitment across voice and non-voice operations, customer support, technical support, email and chat support and back-office functions. We refer candidates according to your eligibility criteria — qualifications, communication requirements, experience, work location and shift expectations.",
    ],
    challenges: [
      "Volume hiring with tight ramp-up timelines",
      "Assessing verbal and written communication before interviews",
      "Confirming shift and location readiness",
      "Keeping candidates engaged between selection and joining",
    ],
    roles: [
      {
        group: "Voice Process",
        items: ["Inbound Voice Executives", "Outbound Voice Executives", "Customer Support Executives", "Technical Support Associates"],
      },
      {
        group: "Non-Voice Process",
        items: ["Email Support Executives", "Chat Support Executives", "Data Processing Executives", "Back-Office Executives"],
      },
      {
        group: "Process Support",
        items: ["Documentation Executives", "Team Leaders", "Quality Analysts", "Process Associates"],
      },
    ],
    solutions: [
      { title: "Eligibility-Based Referrals", text: "Candidates matched on qualifications, communication, experience, location and shifts." },
      { title: "Voice & Non-Voice Hiring", text: "Verbal skills for voice roles; written communication and accuracy for non-voice roles." },
      { title: "Bulk Hiring Coordination", text: "Coordinated recruitment for batch requirements, where arrangements are agreed." },
      { title: "Recruitment Updates", text: "We share vacancy information, schedule interviews and keep everyone updated." },
    ],
    whyUs: [
      "Focus on reliability, professionalism and consistency",
      "Shift and location expectations confirmed upfront",
      "Support for freshers and experienced process professionals",
      "Organised interview scheduling and follow-up",
    ],
    faqs: [
      {
        q: "Do you hire for both voice and non-voice processes?",
        a: "Yes. We support voice-based, non-voice, customer support, technical support, email and chat support and back-office recruitment.",
      },
      {
        q: "Can you support batch hiring?",
        a: "Yes. We coordinate bulk recruitment where the required arrangements and resources are agreed in advance.",
      },
      {
        q: "Do you check shift readiness?",
        a: "Yes. We confirm work location and shift expectations with candidates before referring them.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
