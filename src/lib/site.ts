import {
  Building2,
  Clock,
  ClipboardCheck,
  Crown,
  FileText,
  GraduationCap,
  Handshake,
  Layers,
  MessagesSquare,
  Rocket,
  School,
  Store,
  UserCheck,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { domains } from "@/data/courses";
import { industries } from "@/data/industries";

export const site = {
  name: "HireMatrix HR Consultancy",
  shortName: "HireMatrix",
  url: "https://hirematrixcareers.in",
  tagline: "Connecting Talent with Opportunity",
  description:
    "HireMatrix HR Consultancy is a recruitment, talent acquisition and skill training firm with branches in Coimbatore and Tiruchirappalli, Tamil Nadu — bridging job seekers and employers with end-to-end HR solutions and job-oriented courses.",
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
    href: "/courses",
    label: "Courses",
    children: domains.map((d) => ({ href: `/courses#${d.slug}`, label: d.title })),
  },
  { href: "/employers", label: "Employers" },
  { href: "/job-seekers", label: "Job Seekers" },
  { href: "/contact", label: "Contact" },
];

export type Item = { icon: LucideIcon; title: string; text: string };

export const recruitmentServices: Item[] = [
  {
    icon: UserPlus,
    title: "Talent Acquisition",
    text: "We source, screen and shortlist the right candidates so you only meet people who fit your role and culture.",
  },
  {
    icon: Users,
    title: "Recruitment & Staffing",
    text: "Permanent, contract and bulk hiring across IT, engineering, finance and operations roles.",
  },
  {
    icon: UserCheck,
    title: "Corporate Onboarding",
    text: "Smooth, structured onboarding that helps new hires settle in quickly and become productive faster.",
  },
  {
    icon: Building2,
    title: "HR Outsourcing",
    text: "End-to-end HR support for growing businesses — from hiring workflows to employee lifecycle management.",
  },
];

export const careerServices: Item[] = [
  {
    icon: GraduationCap,
    title: "Job-Oriented Courses",
    text: "Industry-aligned programs that turn freshers and professionals into job-ready candidates.",
  },
  {
    icon: MessagesSquare,
    title: "Interview Coaching",
    text: "Mock interviews, HR round preparation and personalised feedback to boost your confidence.",
  },
  {
    icon: FileText,
    title: "Resume Building",
    text: "Professional, ATS-friendly resumes and LinkedIn profiles that get noticed by recruiters.",
  },
  {
    icon: Handshake,
    title: "Placement Support",
    text: "Direct connections with our network of hiring partners to help you land the right job.",
  },
];

export const hiringModels: Item[] = [
  {
    icon: UserPlus,
    title: "Permanent Recruitment",
    text: "Full-time hires sourced, screened and shortlisted to match your role, budget and culture.",
  },
  {
    icon: Clock,
    title: "Contract & Temporary Staffing",
    text: "Flexible staff for projects, seasonal peaks and leave cover — without long-term overheads.",
  },
  {
    icon: Layers,
    title: "Bulk & Volume Hiring",
    text: "Recruitment drives that fill large batches for new branches, plants or process launches.",
  },
  {
    icon: School,
    title: "Campus & Fresher Hiring",
    text: "Pre-trained, job-ready freshers from our courses and partner colleges.",
  },
  {
    icon: Crown,
    title: "Leadership Hiring",
    text: "Confidential search for managers, department heads and senior specialists.",
  },
  {
    icon: Handshake,
    title: "Contract-to-Hire",
    text: "Evaluate candidates on the job before converting them to permanent employees.",
  },
];

export const companyTypes: Item[] = [
  {
    icon: Rocket,
    title: "Startups",
    text: "Build your first core team quickly with versatile people who thrive in fast-moving environments.",
  },
  {
    icon: Store,
    title: "Small & Medium Businesses",
    text: "Cost-effective hiring and HR outsourcing so owners can focus on running the business.",
  },
  {
    icon: Building2,
    title: "Large Enterprises",
    text: "Scalable, multi-location and volume hiring backed by structured reporting.",
  },
];

export const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Register",
    text: "Share your profile or hiring requirement with our team.",
  },
  {
    icon: GraduationCap,
    title: "Train & Prepare",
    text: "Skill up with job-oriented training, resume and interview coaching.",
  },
  {
    icon: Users,
    title: "Match",
    text: "We match the right talent with the right employer.",
  },
  {
    icon: Handshake,
    title: "Get Hired",
    text: "Interviews, offers and onboarding — supported end to end.",
  },
];

export type Faq = { q: string; a: string };

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: "General",
    items: [
      {
        q: "What does HireMatrix do?",
        a: "HireMatrix is an HR consultancy in Coimbatore offering recruitment and staffing services for employers, and job-oriented training, interview coaching and placement support for job seekers.",
      },
      {
        q: "Where are your branches located?",
        a: "We have two branches. Coimbatore: Door No 385/A6, Jayem Arcade, Kamarajar Road, Opp. RHR Hotel, Peelamedu, Coimbatore – 641004 (Mon–Sat, 9:00 AM – 7:30 PM). Tiruchirappalli: New Street, 6/75E, Williams Road, Othakadai, Cantonment, Tiruchirappalli – 620001 (Mon–Sat, 9:00 AM – 8:00 PM).",
      },
      {
        q: "Which industries do you work with?",
        a: "We recruit for IT & software, manufacturing & engineering, textile & apparel, banking & financial services, healthcare & pharma, retail & e-commerce, BPO & customer experience, and construction & real estate.",
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
        q: "How long does it take to receive profiles?",
        a: "For most roles we share an initial shortlist within 3–5 working days. Niche or senior roles may take longer, and we will agree timelines with you upfront.",
      },
      {
        q: "Do you offer replacement if a candidate leaves?",
        a: "Yes. We offer a replacement period for permanent hires. The exact terms are shared in our service agreement.",
      },
      {
        q: "Can you handle bulk or multi-location hiring?",
        a: "Yes. We regularly organise recruitment drives for volume hiring and can coordinate across multiple locations.",
      },
    ],
  },
  {
    title: "For Job Seekers",
    items: [
      {
        q: "How do I register with HireMatrix?",
        a: "Send your resume on WhatsApp or email, or walk into our Coimbatore or Tiruchirappalli branch. Our team will review your profile and guide you on suitable roles or courses.",
      },
      {
        q: "Do you charge candidates for job placement?",
        a: "Please speak with our team for clarity on any programme or service fees before you enrol. We are transparent about costs from the first conversation.",
      },
      {
        q: "I am a fresher with no experience. Can you help?",
        a: "Yes. Our job-oriented courses, resume building and interview coaching are designed specifically to help freshers become job-ready.",
      },
    ],
  },
  {
    title: "Courses & Training",
    items: [
      {
        q: "Are classes available online?",
        a: "Most of our programs are offered both in the classroom and as live online sessions. CAD programs are primarily classroom-based for hands-on practice.",
      },
      {
        q: "Do you offer SAP training?",
        a: "Yes. We offer SAP S/4HANA training in FICO, MM, SD, PP, HCM & SuccessFactors and ABAP, with hands-on system access, real-time project scenarios and placement support for SAP end-user and consultant roles.",
      },
      {
        q: "Will I receive a certificate?",
        a: "Yes. Every learner who completes the course and assessments receives a HireMatrix course completion certificate.",
      },
      {
        q: "Do you provide placement support after the course?",
        a: "Yes. Every course includes resume building, mock interviews and connections with our hiring partners.",
      },
    ],
  },
];
