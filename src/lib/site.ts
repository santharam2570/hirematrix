import {
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  CodeXml,
  Factory,
  FileSearch,
  Handshake,
  Headphones,
  Layers,
  Lock,
  MessagesSquare,
  Repeat,
  Rocket,
  School,
  Search,
  ShieldCheck,
  Star,
  Store,
  Target,
  Timer,
  UserCheck,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/data/industries";
import { jobSectors } from "@/data/job-sectors";

export const site = {
  name: "HireMatrix HR Consultancy",
  shortName: "HireMatrix",
  url: "https://hirematrixcareers.in",
  tagline: "Connecting Talent with Opportunity",
  description:
    "HireMatrix is a placement and recruitment company in Coimbatore and Tiruchirappalli, Tamil Nadu — helping job seekers connect with genuine job opportunities and helping companies find suitable candidates across IT, Non-IT, engineering, construction and BPO.",
  locations: "Coimbatore & Tiruchirappalli",
  phone: "+91 8248357905",
  phoneHref: "tel:+918248357905",
  whatsappHref: "https://wa.me/918248357905",
  email: "hirematrix.info@gmail.com",
  emailHref: "mailto:hirematrix.info@gmail.com",
  branches: [
    {
      city: "Coimbatore",
      lines: [
        "Door No 385/A6, Jayem Arcade, Kamarajar Rd,",
        "Opp. RHR Hotel, Peelamedu, Lakshmi Ammal Layout,",
        "Lakshmipuram, Coimbatore, Tamil Nadu 641004",
      ],
      phone: "+91 83002 80860",
      phoneHref: "tel:+918300280860",
      days: "Monday – Saturday",
      hours: "9:00 AM – 7:30 PM",
      // 24h times in IST, used for the live open/closed badge
      opensAt: "09:00",
      closesAt: "19:30",
      mapQuery: "Jayem Arcade, 385/A6, Kamarajar Road, Peelamedu, Coimbatore 641004",
    },
    {
      city: "Tiruchirappalli",
      lines: [
        "New Street, 6/75E, Williams Rd,",
        "Othakadai, Cantonment,",
        "Tiruchirappalli, Tamil Nadu 620001",
      ],
      phone: "+91 99527 73417",
      phoneHref: "tel:+919952773417",
      days: "Monday – Saturday",
      hours: "9:00 AM – 8:00 PM",
      opensAt: "09:00",
      closesAt: "20:00",
      mapQuery: "6/75E, Williams Road, Cantonment, Tiruchirappalli 620001",
    },
  ],
};

export type Branch = (typeof site.branches)[number];

export function whatsappLink(text: string) {
  return `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
}

export type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  {
    href: "/industries",
    label: "Industries",
    children: industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name })),
  },
  {
    href: "/jobs",
    label: "Jobs",
    children: jobSectors.map((s) => ({ href: `/jobs/${s.slug}`, label: `${s.name} Jobs` })),
  },
  { href: "/employers", label: "Employers" },
  { href: "/job-seekers", label: "Job Seekers" },
  { href: "/contact", label: "Contact" },
];

export type Item = { icon: LucideIcon; title: string; text: string };

export type Stat = { icon: LucideIcon; value: string; label: string };

// Placeholder figures — replace with real, verifiable numbers before publishing.
// Values must start with a number (e.g. "500+", "95%") so CountUp can animate them.
export const outcomeStats: Stat[] = [
  { icon: UserCheck, value: "500+", label: "Candidates Placed" },
  { icon: Handshake, value: "50+", label: "Hiring Partners" },
  { icon: Timer, value: "5 Days", label: "Avg. Time to Shortlist" },
  { icon: Star, value: "95%", label: "Client Satisfaction" },
];

export const enquiryTypes = [
  "I'm looking for a job",
  "I want to hire candidates",
  "Bulk / corporate hiring",
  "Other",
] as const;

export const resumeEnquiryTypes: readonly string[] = [enquiryTypes[0]];

/** Id of a page section that renders the enquiry form inline; the pop-up stays off on such pages. */
export const inlineEnquiryId = "enquiry";

export const recruitmentServices: Item[] = [
  {
    icon: UserPlus,
    title: "Permanent Placement",
    text: "Full-time candidates sourced, reviewed and referred against your role, qualifications and experience requirements.",
  },
  {
    icon: CodeXml,
    title: "IT Recruitment",
    text: "Developers, testers, cloud, DevOps, data, AI, cybersecurity and technical support professionals.",
  },
  {
    icon: Briefcase,
    title: "Non-IT & Corporate Recruitment",
    text: "Administration, HR, sales, marketing, accounts, finance, customer service and operations roles.",
  },
  {
    icon: Factory,
    title: "Engineering & Industrial Recruitment",
    text: "Mechanical, civil, electrical, production, quality and maintenance talent for manufacturing and construction.",
  },
  {
    icon: Headphones,
    title: "BPO & Customer Service Recruitment",
    text: "Voice, non-voice, technical support, email and chat support and back-office professionals.",
  },
  {
    icon: Layers,
    title: "Bulk Hiring Coordination",
    text: "Coordinated recruitment for batch requirements, where the required arrangements and resources are agreed.",
  },
];

export const candidateServices: Item[] = [
  {
    icon: ShieldCheck,
    title: "Genuine Job Opportunities",
    text: "We share real openings from employers who have engaged us to recruit — with clear details on each role.",
  },
  {
    icon: Target,
    title: "Profile Matching",
    text: "We match your qualifications, experience and career goals with relevant active vacancies.",
  },
  {
    icon: CalendarCheck,
    title: "Interview Coordination",
    text: "We schedule your interviews and share the details you need to prepare for each one.",
  },
  {
    icon: Handshake,
    title: "Offer & Joining Support",
    text: "Updates on selection outcomes, offer discussions, documentation and joining, where included.",
  },
];

export const hiringModels: Item[] = [
  {
    icon: UserPlus,
    title: "Permanent Placement",
    text: "Full-time hires sourced and referred to match your role, qualifications and expectations.",
  },
  {
    icon: School,
    title: "Fresher Recruitment",
    text: "Eligible fresh graduates for entry-level positions across IT, Non-IT and engineering roles.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced Professional Hiring",
    text: "Candidates seeking new roles and greater responsibility in their field.",
  },
  {
    icon: CodeXml,
    title: "Technical Recruitment",
    text: "Specialised hiring for IT, engineering and other technical positions.",
  },
  {
    icon: Layers,
    title: "Bulk Hiring Coordination",
    text: "Recruitment drives for batch requirements, new branches, plants or process launches.",
  },
  {
    icon: Building2,
    title: "Corporate Recruitment Partnerships",
    text: "Ongoing recruitment support agreed around your hiring volume, timelines and commercial terms.",
  },
];

export const companyTypes: Item[] = [
  {
    icon: Rocket,
    title: "Startups",
    text: "Build your first core team with candidates who suit a fast-moving, growing business.",
  },
  {
    icon: Store,
    title: "Small & Medium Businesses",
    text: "Organised recruitment support so owners can focus on running the business.",
  },
  {
    icon: Building2,
    title: "Established Companies",
    text: "Recruitment for ongoing operations, new departments, projects and specialised roles.",
  },
];

export const seekerSteps: Item[] = [
  {
    icon: ClipboardCheck,
    title: "Register",
    text: "Share your resume on WhatsApp, by email, through our form or at a branch.",
  },
  {
    icon: FileSearch,
    title: "Profile Review",
    text: "We understand your qualifications, experience and the roles you want.",
  },
  {
    icon: Target,
    title: "Matched to Real Openings",
    text: "We tell you about genuine vacancies that suit you — with full role details.",
  },
  {
    icon: CalendarCheck,
    title: "Interview",
    text: "We schedule your interview and share what to expect.",
  },
  {
    icon: Handshake,
    title: "Offer & Joining",
    text: "We keep you updated on results, offers, documents and joining.",
  },
];

export const employerSteps: Item[] = [
  {
    icon: ClipboardList,
    title: "Share Your Requirement",
    text: "Role, qualifications, experience, location, salary range and joining date.",
  },
  {
    icon: Search,
    title: "Sourcing",
    text: "We find potential candidates through our network, applications and referrals.",
  },
  {
    icon: FileSearch,
    title: "Review & Refer",
    text: "Profiles are checked against your criteria; interest and availability confirmed.",
  },
  {
    icon: CalendarCheck,
    title: "Interviews",
    text: "We arrange interviews and keep candidates and your team informed.",
  },
  {
    icon: Handshake,
    title: "Selection & Joining",
    text: "We follow up on outcomes, offers and joining — until the role is filled.",
  },
];

export const seekerBenefits: Item[] = [
  {
    icon: ShieldCheck,
    title: "Real openings only",
    text: "Every vacancy we share comes from an employer who has asked us to recruit for them.",
  },
  {
    icon: FileSearch,
    title: "Know before you apply",
    text: "Role, qualifications, location and selection process explained up front.",
  },
  {
    icon: MessagesSquare,
    title: "One point of contact",
    text: "We coordinate interviews and keep you updated, so you're never left guessing.",
  },
  {
    icon: Lock,
    title: "Your details stay private",
    text: "Your resume goes only to relevant employers, only for recruitment.",
  },
];

export const employerBenefits: Item[] = [
  {
    icon: Target,
    title: "Only relevant profiles",
    text: "We review every candidate against your criteria before you see them.",
  },
  {
    icon: Timer,
    title: "Less time coordinating",
    text: "We schedule interviews and follow up with candidates on your behalf.",
  },
  {
    icon: Layers,
    title: "One hire or one hundred",
    text: "Single specialist roles, fresher batches or coordinated bulk hiring.",
  },
  {
    icon: Lock,
    title: "Confidential & accountable",
    text: "Agreed timelines, clear updates and responsible handling of information.",
  },
];

export const genuinePromise: { title: string; text: string }[] = [
  {
    title: "Real vacancies",
    text: "We share openings only from employers who have engaged us to recruit. No made-up listings, no bait jobs.",
  },
  {
    title: "Clear information",
    text: "You'll know the role, qualifications, location and selection process before you decide to apply.",
  },
  {
    title: "Honest expectations",
    text: "We never promise a job. Selection is always the employer's decision — and we tell you that upfront.",
  },
  {
    title: "Privacy respected",
    text: "Your details are shared only with relevant employers, and only for recruitment purposes.",
  },
];

export const recruitmentProcess: Item[] = [
  {
    icon: ClipboardList,
    title: "Requirement Understanding",
    text: "We gather job responsibilities, qualifications, experience, location, compensation range and joining timeline.",
  },
  {
    icon: Search,
    title: "Candidate Sourcing",
    text: "We identify potential candidates through recruitment channels, professional networks, applications and referrals.",
  },
  {
    icon: FileSearch,
    title: "Profile Review",
    text: "Candidate profiles are reviewed against the eligibility criteria and requirements you share.",
  },
  {
    icon: UserCheck,
    title: "Candidate Coordination",
    text: "We confirm candidate interest, availability and relevant background before referring profiles.",
  },
  {
    icon: CalendarCheck,
    title: "Interview Scheduling",
    text: "We arrange interviews and communicate the details to candidates and your team.",
  },
  {
    icon: Repeat,
    title: "Recruitment Follow-Up",
    text: "We follow up on interview outcomes, additional requirements and next stages.",
  },
  {
    icon: Handshake,
    title: "Offer & Joining",
    text: "Where included, we support offer discussions, documentation and joining arrangements.",
  },
];

export const coreValues: Item[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We conduct recruitment with honesty, fairness and responsible communication.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Excellence",
    text: "We maintain high standards of professionalism with employers, candidates and partners.",
  },
  {
    icon: Target,
    title: "Commitment",
    text: "We approach every requirement with attention to the agreed scope, timelines and expectations.",
  },
  {
    icon: Star,
    title: "Quality & Relevance",
    text: "We prioritise candidate suitability against the qualifications and requirements employers specify.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    text: "We respect candidate privacy and handle recruitment information responsibly.",
  },
  {
    icon: Users,
    title: "Partnership",
    text: "We value long-term relationships built on trust, cooperation and mutual understanding.",
  },
];

export type Faq = { q: string; a: string };

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: "General",
    items: [
      {
        q: "What does HireMatrix do?",
        a: "HireMatrix is a placement and recruitment company. We help job seekers connect with genuine job opportunities and help companies find suitable candidates — acting as a professional link between employers and the people they need.",
      },
      {
        q: "Where are your branches located?",
        a: "We have two branches. Coimbatore: Door No 385/A6, Jayem Arcade, Kamarajar Road, Opp. RHR Hotel, Peelamedu, Coimbatore – 641004 (Mon–Sat, 9:00 AM – 7:30 PM). Tiruchirappalli: New Street, 6/75E, Williams Road, Othakadai, Cantonment, Tiruchirappalli – 620001 (Mon–Sat, 9:00 AM – 8:00 PM).",
      },
      {
        q: "Which industries do you recruit for?",
        a: "We support recruitment across IT and technology, Non-IT and corporate functions, engineering and manufacturing, construction and infrastructure, and BPO and customer support.",
      },
      {
        q: "How do you handle personal information?",
        a: "Confidentiality is one of our core values. Candidate details are shared only with employers for recruitment purposes, and company information is handled responsibly.",
      },
    ],
  },
  {
    title: "For Employers",
    items: [
      {
        q: "How do I share a hiring requirement?",
        a: "Call or WhatsApp us on +91 8248357905, email hirematrix.info@gmail.com or use the enquiry form on our Contact page. A consultant will get in touch to understand the role in detail.",
      },
      {
        q: "What details do you need to start?",
        a: "Job responsibilities, educational qualifications, experience requirements, work location, compensation range and your preferred joining timeline.",
      },
      {
        q: "How long does it take to receive profiles?",
        a: "Timelines depend on the role, location and number of positions. We agree them with you upfront and keep you updated as profiles are reviewed.",
      },
      {
        q: "Can you handle bulk or multi-location hiring?",
        a: "Yes. We coordinate bulk recruitment where the required arrangements and resources are agreed, and services are set according to your hiring volume, timelines and commercial terms.",
      },
      {
        q: "Who makes the final hiring decision?",
        a: "You do. Final shortlisting, candidate evaluation, selection, compensation decisions and hiring approval remain with the employer.",
      },
    ],
  },
  {
    title: "For Job Seekers",
    items: [
      {
        q: "How do I register with HireMatrix?",
        a: "Send your resume on WhatsApp or email, use the form on our Contact page, or walk into our Coimbatore or Tiruchirappalli branch. Our team will review your profile and contact you about suitable openings.",
      },
      {
        q: "Are the job openings genuine?",
        a: "Yes. We share vacancies from employers who have engaged us to recruit for them, along with the role, qualifications, location and selection process wherever that information is available. If anything about an opening is unclear, ask us before you apply.",
      },
      {
        q: "I am a fresher with no experience. Can you help?",
        a: "Yes. We help fresh graduates explore suitable entry-level openings, subject to active vacancies and the eligibility criteria set by employers.",
      },
      {
        q: "Does registering guarantee me a job?",
        a: "No. We facilitate access to relevant opportunities and coordinate the recruitment process, but employment decisions are made by the employer and placement assistance does not guarantee selection or a job offer.",
      },
      {
        q: "Do you charge candidates for job placement?",
        a: "Please speak with our team for clarity on any service fees before you register. We are transparent about costs from the first conversation.",
      },
    ],
  },
];
