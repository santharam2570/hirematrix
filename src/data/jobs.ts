import { jobSectors } from "./job-sectors";

export type Job = {
  slug: string;
  title: string;
  sector: string;
  location: string;
  experience: string;
  salary: string;
  type: "Full-time" | "Contract";
  openings: number;
  /** ISO date, YYYY-MM-DD */
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
};

export const JOBS_PER_PAGE = 9;

// Sample openings — replace with real, current vacancies before publishing.
const allJobs: Job[] = [
  // IT & Software
  {
    slug: "full-stack-developer-coimbatore",
    title: "Full Stack Developer (React / Node.js)",
    sector: "it",
    location: "Coimbatore",
    experience: "2–4 years",
    salary: "₹4.5 – 7 LPA",
    type: "Full-time",
    openings: 3,
    posted: "2026-10-12",
    summary: "Build and maintain web applications for a product company serving international clients.",
    responsibilities: [
      "Develop responsive front-end features in React",
      "Build and document REST APIs with Node.js",
      "Participate in code reviews and sprint planning",
    ],
    requirements: [
      "B.E / B.Tech / MCA in a relevant discipline",
      "Hands-on experience with React and Node.js",
      "Working knowledge of SQL or MongoDB",
    ],
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    slug: "qa-test-engineer-chennai",
    title: "QA / Test Engineer",
    sector: "it",
    location: "Chennai",
    experience: "1–3 years",
    salary: "₹3 – 5 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-09",
    summary: "Ensure release quality through manual and automated testing of web and mobile apps.",
    responsibilities: [
      "Write and execute test cases for new features",
      "Automate regression suites with Selenium",
      "Log, track and verify defects with the development team",
    ],
    requirements: [
      "Any engineering or computer science degree",
      "Experience in manual and automation testing",
      "Clear written communication for bug reports",
    ],
    skills: ["Selenium", "Manual Testing", "JIRA", "API Testing"],
  },
  {
    slug: "devops-engineer-bengaluru",
    title: "DevOps Engineer",
    sector: "it",
    location: "Bengaluru",
    experience: "3–6 years",
    salary: "₹8 – 14 LPA",
    type: "Full-time",
    openings: 1,
    posted: "2026-10-06",
    summary: "Own CI/CD pipelines and cloud infrastructure for a fast-growing SaaS platform.",
    responsibilities: [
      "Maintain CI/CD pipelines and release automation",
      "Manage AWS infrastructure using infrastructure-as-code",
      "Monitor production systems and respond to incidents",
    ],
    requirements: [
      "Experience with AWS and container platforms",
      "Scripting knowledge in Bash or Python",
      "Exposure to Terraform or similar tools",
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "junior-data-analyst-trichy",
    title: "Junior Data Analyst",
    sector: "it",
    location: "Tiruchirappalli",
    experience: "Fresher – 1 year",
    salary: "₹2.4 – 3.6 LPA",
    type: "Full-time",
    openings: 4,
    posted: "2026-10-02",
    summary: "Turn business data into clear reports and dashboards for operations teams.",
    responsibilities: [
      "Clean and organise data from multiple sources",
      "Build Excel and Power BI dashboards",
      "Share weekly insights with team leads",
    ],
    requirements: [
      "Any degree with strong analytical aptitude",
      "Good command of Excel; SQL is a plus",
      "Freshers with relevant certification welcome",
    ],
    skills: ["Excel", "SQL", "Power BI", "Reporting"],
  },

  // Non-IT & Corporate
  {
    slug: "sales-executive-coimbatore",
    title: "Sales Executive",
    sector: "non-it",
    location: "Coimbatore",
    experience: "0–2 years",
    salary: "₹2.2 – 3.6 LPA + incentives",
    type: "Full-time",
    openings: 6,
    posted: "2026-10-11",
    summary: "Generate leads and close sales for a consumer products distributor across Coimbatore.",
    responsibilities: [
      "Visit retailers and build new accounts",
      "Achieve monthly sales targets",
      "Maintain daily sales reports and follow-ups",
    ],
    requirements: [
      "Any degree; freshers with good communication welcome",
      "Two-wheeler with valid licence",
      "Fluency in Tamil; basic English",
    ],
    skills: ["Field Sales", "Negotiation", "Tamil", "Customer Handling"],
  },
  {
    slug: "hr-executive-trichy",
    title: "HR Executive",
    sector: "non-it",
    location: "Tiruchirappalli",
    experience: "1–3 years",
    salary: "₹2.8 – 4 LPA",
    type: "Full-time",
    openings: 1,
    posted: "2026-10-08",
    summary: "Handle recruitment, onboarding and employee records for a mid-size manufacturing unit.",
    responsibilities: [
      "Coordinate recruitment and interview schedules",
      "Manage onboarding documentation and attendance",
      "Support payroll inputs and statutory compliance",
    ],
    requirements: [
      "MBA / MSW in HR preferred",
      "Working knowledge of PF and ESI",
      "Good MS Office skills",
    ],
    skills: ["Recruitment", "Onboarding", "Payroll", "MS Office"],
  },
  {
    slug: "accounts-executive-madurai",
    title: "Accounts Executive",
    sector: "non-it",
    location: "Madurai",
    experience: "2–4 years",
    salary: "₹3 – 4.2 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-05",
    summary: "Manage day-to-day accounting, GST filings and reconciliations for a trading company.",
    responsibilities: [
      "Maintain books of accounts in Tally",
      "Prepare GST returns and TDS workings",
      "Reconcile bank and vendor statements",
    ],
    requirements: [
      "B.Com / M.Com",
      "Hands-on Tally Prime experience",
      "Knowledge of GST and TDS",
    ],
    skills: ["Tally Prime", "GST", "TDS", "Reconciliation"],
  },
  {
    slug: "digital-marketing-executive-chennai",
    title: "Digital Marketing Executive",
    sector: "non-it",
    location: "Chennai",
    experience: "1–3 years",
    salary: "₹3 – 4.8 LPA",
    type: "Full-time",
    openings: 1,
    posted: "2026-10-01",
    summary: "Plan and run social media and paid campaigns for a real-estate brand.",
    responsibilities: [
      "Manage social media calendars and content",
      "Run Google and Meta ad campaigns",
      "Track leads and report campaign performance",
    ],
    requirements: [
      "Any degree; marketing certification preferred",
      "Experience with Meta Ads and Google Ads",
      "Basic design skills in Canva",
    ],
    skills: ["Meta Ads", "Google Ads", "SEO", "Canva"],
  },

  // SAP & ERP
  {
    slug: "sap-fico-consultant-chennai",
    title: "SAP FICO Consultant",
    sector: "sap",
    location: "Chennai",
    experience: "4–8 years",
    salary: "₹10 – 18 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-12",
    summary: "Support S/4HANA finance implementation and post go-live support for a manufacturing client.",
    responsibilities: [
      "Configure GL, AP, AR, asset accounting and controlling",
      "Gather requirements and prepare functional specifications",
      "Provide end-user training and support",
    ],
    requirements: [
      "At least one end-to-end SAP FICO implementation",
      "S/4HANA exposure preferred",
      "CA / ICWA / MBA Finance is an advantage",
    ],
    skills: ["SAP FICO", "S/4HANA", "Controlling", "Asset Accounting"],
  },
  {
    slug: "sap-mm-consultant-coimbatore",
    title: "SAP MM Consultant",
    sector: "sap",
    location: "Coimbatore",
    experience: "3–6 years",
    salary: "₹7 – 12 LPA",
    type: "Full-time",
    openings: 1,
    posted: "2026-10-07",
    summary: "Handle procurement and inventory processes in SAP for a leading textile manufacturer.",
    responsibilities: [
      "Configure purchasing, inventory and invoice verification",
      "Resolve support tickets within SLA",
      "Work with business users on process improvements",
    ],
    requirements: [
      "Hands-on SAP MM configuration experience",
      "Understanding of MM–FI integration",
      "Manufacturing domain experience preferred",
    ],
    skills: ["SAP MM", "Procurement", "Inventory", "MM-FI Integration"],
  },
  {
    slug: "sap-abap-developer-bengaluru",
    title: "SAP ABAP Developer",
    sector: "sap",
    location: "Bengaluru",
    experience: "2–5 years",
    salary: "₹6 – 11 LPA",
    type: "Full-time",
    openings: 3,
    posted: "2026-10-04",
    summary: "Develop reports, interfaces and enhancements for global SAP support projects.",
    responsibilities: [
      "Build reports, forms, interfaces and enhancements",
      "Work on OData services and CDS views",
      "Debug and optimise existing programs",
    ],
    requirements: [
      "Strong core ABAP skills",
      "Exposure to OO-ABAP and S/4HANA development",
      "B.E / B.Tech / MCA",
    ],
    skills: ["ABAP", "OData", "CDS Views", "Smartforms"],
  },
  {
    slug: "sap-sd-consultant-contract",
    title: "SAP SD Consultant (Contract)",
    sector: "sap",
    location: "Chennai",
    experience: "5–9 years",
    salary: "As per industry standards",
    type: "Contract",
    openings: 1,
    posted: "2026-09-29",
    summary: "Six-month contract to support order-to-cash rollout for a distribution company.",
    responsibilities: [
      "Configure pricing, billing and output determination",
      "Support user acceptance testing and cut-over",
      "Prepare documentation for business users",
    ],
    requirements: [
      "Two or more SAP SD implementations",
      "Strong order-to-cash process knowledge",
      "Available to join within 30 days",
    ],
    skills: ["SAP SD", "Order to Cash", "Pricing", "Billing"],
  },

  // Civil Engineering
  {
    slug: "site-engineer-civil-coimbatore",
    title: "Site Engineer – Civil",
    sector: "civil-engineering",
    location: "Coimbatore",
    experience: "1–4 years",
    salary: "₹2.8 – 4.5 LPA",
    type: "Full-time",
    openings: 4,
    posted: "2026-10-11",
    summary: "Supervise residential and commercial building works for an established builder.",
    responsibilities: [
      "Execute site work as per drawings and specifications",
      "Supervise contractors and labour on site",
      "Maintain daily progress reports and material records",
    ],
    requirements: [
      "B.E Civil / Diploma in Civil Engineering",
      "Experience in building construction",
      "Ability to read structural and architectural drawings",
    ],
    skills: ["Site Execution", "AutoCAD", "Quantity Estimation", "Supervision"],
  },
  {
    slug: "planning-engineer-chennai",
    title: "Planning Engineer",
    sector: "civil-engineering",
    location: "Chennai",
    experience: "3–6 years",
    salary: "₹5 – 8 LPA",
    type: "Full-time",
    openings: 1,
    posted: "2026-10-06",
    summary: "Plan and track schedules for infrastructure projects with a civil contractor.",
    responsibilities: [
      "Prepare project schedules in Primavera or MS Project",
      "Track progress and report delays",
      "Coordinate with site, billing and procurement teams",
    ],
    requirements: [
      "B.E / M.E Civil",
      "Hands-on Primavera P6 or MS Project",
      "Infrastructure project experience",
    ],
    skills: ["Primavera P6", "MS Project", "Scheduling", "Reporting"],
  },
  {
    slug: "quantity-surveyor-trichy",
    title: "Quantity Surveyor / Billing Engineer",
    sector: "civil-engineering",
    location: "Tiruchirappalli",
    experience: "2–5 years",
    salary: "₹3.6 – 5.5 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-03",
    summary: "Prepare BOQs, bills and reconciliations for residential and industrial projects.",
    responsibilities: [
      "Prepare BOQs and quantity take-offs",
      "Certify contractor and client bills",
      "Reconcile materials against consumption",
    ],
    requirements: [
      "B.E / Diploma in Civil Engineering",
      "Experience in billing and quantity surveying",
      "Strong Excel skills",
    ],
    skills: ["BOQ", "Billing", "Excel", "Rate Analysis"],
  },
  {
    slug: "autocad-draughtsman-civil-madurai",
    title: "AutoCAD Draughtsman – Civil",
    sector: "civil-engineering",
    location: "Madurai",
    experience: "Fresher – 2 years",
    salary: "₹1.8 – 3 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-09-30",
    summary: "Prepare working and approval drawings for an architecture and construction firm.",
    responsibilities: [
      "Draft architectural and structural drawings",
      "Update drawings from engineer mark-ups",
      "Maintain drawing registers and revisions",
    ],
    requirements: [
      "Diploma / ITI in Civil draughtsmanship",
      "Good AutoCAD skills; Revit is a plus",
      "Freshers with a portfolio welcome",
    ],
    skills: ["AutoCAD", "Revit", "Drafting", "Detailing"],
  },

  // Mechanical Engineering
  {
    slug: "production-engineer-coimbatore",
    title: "Production Engineer",
    sector: "mechanical-engineering",
    location: "Coimbatore",
    experience: "2–5 years",
    salary: "₹3.6 – 5.5 LPA",
    type: "Full-time",
    openings: 3,
    posted: "2026-10-12",
    summary: "Run shop-floor production for an auto-components manufacturer in a shift environment.",
    responsibilities: [
      "Plan daily production and manpower",
      "Monitor output, scrap and machine efficiency",
      "Drive 5S and Kaizen on the shop floor",
    ],
    requirements: [
      "B.E Mechanical / Diploma in Mechanical",
      "Experience in machining or auto components",
      "Willing to work in rotational shifts",
    ],
    skills: ["Production Planning", "CNC / VMC", "5S", "Kaizen"],
  },
  {
    slug: "design-engineer-solidworks-coimbatore",
    title: "Design Engineer (SolidWorks)",
    sector: "mechanical-engineering",
    location: "Coimbatore",
    experience: "1–4 years",
    salary: "₹3 – 5 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-08",
    summary: "Design special-purpose machines and fixtures for an industrial automation company.",
    responsibilities: [
      "Create 3D models and 2D drawings in SolidWorks",
      "Prepare bills of materials",
      "Support assembly and trials with the shop floor",
    ],
    requirements: [
      "B.E Mechanical",
      "Proficiency in SolidWorks and GD&T",
      "Machine design exposure preferred",
    ],
    skills: ["SolidWorks", "GD&T", "AutoCAD", "BOM"],
  },
  {
    slug: "quality-engineer-hosur",
    title: "Quality Engineer",
    sector: "mechanical-engineering",
    location: "Hosur",
    experience: "2–4 years",
    salary: "₹3.6 – 5 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-05",
    summary: "Manage incoming, in-process and final inspection for a precision engineering plant.",
    responsibilities: [
      "Inspect parts using measuring instruments",
      "Prepare PPAP and quality documentation",
      "Analyse rejections and drive corrective actions",
    ],
    requirements: [
      "B.E / Diploma in Mechanical",
      "Knowledge of IATF 16949 and core tools",
      "Experience with CMM is a plus",
    ],
    skills: ["PPAP", "7 QC Tools", "CMM", "IATF 16949"],
  },
  {
    slug: "maintenance-technician-trichy",
    title: "Maintenance Technician",
    sector: "mechanical-engineering",
    location: "Tiruchirappalli",
    experience: "Fresher – 3 years",
    salary: "₹1.8 – 3 LPA",
    type: "Full-time",
    openings: 5,
    posted: "2026-10-01",
    summary: "Carry out preventive and breakdown maintenance in a fabrication plant.",
    responsibilities: [
      "Perform preventive maintenance as per schedule",
      "Attend breakdowns and minimise downtime",
      "Record maintenance activities in logbooks",
    ],
    requirements: [
      "ITI / Diploma (Fitter, Mechanical or Electrical)",
      "Basic knowledge of hydraulics and pneumatics",
      "Willing to work in shifts",
    ],
    skills: ["Preventive Maintenance", "Hydraulics", "Pneumatics", "Troubleshooting"],
  },

  // BPO & Customer Support
  {
    slug: "customer-support-executive-voice-coimbatore",
    title: "Customer Support Executive – Voice",
    sector: "bpo",
    location: "Coimbatore",
    experience: "Fresher – 2 years",
    salary: "₹1.8 – 2.8 LPA",
    type: "Full-time",
    openings: 15,
    posted: "2026-10-12",
    summary: "Handle inbound calls for a telecom process with fixed day shifts.",
    responsibilities: [
      "Resolve customer queries over the phone",
      "Log interactions accurately in the CRM",
      "Meet call quality and handling-time targets",
    ],
    requirements: [
      "Any degree; freshers welcome",
      "Good spoken English and Tamil",
      "Basic computer knowledge",
    ],
    skills: ["English Communication", "Tamil", "CRM", "Customer Service"],
  },
  {
    slug: "chat-support-executive-chennai",
    title: "Chat & Email Support Executive",
    sector: "bpo",
    location: "Chennai",
    experience: "0–2 years",
    salary: "₹2 – 3 LPA",
    type: "Full-time",
    openings: 10,
    posted: "2026-10-09",
    summary: "Support e-commerce customers over chat and email for an international process.",
    responsibilities: [
      "Respond to customer chats and emails",
      "Process returns, refunds and order updates",
      "Escalate complex issues to the right team",
    ],
    requirements: [
      "Any degree",
      "Strong written English and typing speed of 30+ WPM",
      "Comfortable with rotational shifts",
    ],
    skills: ["Written English", "Typing", "Chat Support", "Email Etiquette"],
  },
  {
    slug: "technical-support-associate-bengaluru",
    title: "Technical Support Associate",
    sector: "bpo",
    location: "Bengaluru",
    experience: "1–3 years",
    salary: "₹3 – 4.5 LPA",
    type: "Full-time",
    openings: 6,
    posted: "2026-10-04",
    summary: "Troubleshoot software and connectivity issues for international customers.",
    responsibilities: [
      "Diagnose and resolve technical issues on call",
      "Guide customers through step-by-step fixes",
      "Document resolutions in the knowledge base",
    ],
    requirements: [
      "Any degree; technical background preferred",
      "Experience in technical support process",
      "Excellent spoken English",
    ],
    skills: ["Troubleshooting", "Networking Basics", "Windows", "Ticketing"],
  },
  {
    slug: "team-leader-bpo-trichy",
    title: "Team Leader – BPO",
    sector: "bpo",
    location: "Tiruchirappalli",
    experience: "4–7 years",
    salary: "₹4 – 6 LPA",
    type: "Full-time",
    openings: 1,
    posted: "2026-09-29",
    summary: "Lead a team of 15–20 voice executives for a domestic customer service process.",
    responsibilities: [
      "Monitor team productivity and quality",
      "Coach agents and conduct daily huddles",
      "Manage rosters, attendance and escalations",
    ],
    requirements: [
      "At least 1 year as Team Leader on paper",
      "Experience in a voice process",
      "Good reporting skills in Excel",
    ],
    skills: ["Team Management", "Quality Monitoring", "Excel", "Coaching"],
  },

  // Healthcare
  {
    slug: "staff-nurse-coimbatore",
    title: "Staff Nurse",
    sector: "healthcare",
    location: "Coimbatore",
    experience: "Fresher – 3 years",
    salary: "₹2.2 – 3.6 LPA",
    type: "Full-time",
    openings: 8,
    posted: "2026-10-11",
    summary: "Provide patient care across wards in a multi-speciality hospital.",
    responsibilities: [
      "Administer medication and monitor patient vitals",
      "Maintain patient records and care plans",
      "Assist doctors during rounds and procedures",
    ],
    requirements: [
      "B.Sc Nursing / GNM with valid registration",
      "Freshers and experienced candidates welcome",
      "Willing to work in rotational shifts",
    ],
    skills: ["Patient Care", "Medication Administration", "Vitals Monitoring", "Documentation"],
  },
  {
    slug: "pharmacist-trichy",
    title: "Pharmacist",
    sector: "healthcare",
    location: "Tiruchirappalli",
    experience: "1–3 years",
    salary: "₹2.4 – 3.6 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-07",
    summary: "Manage dispensing and inventory at a hospital pharmacy.",
    responsibilities: [
      "Dispense medicines as per prescriptions",
      "Maintain stock levels and expiry records",
      "Counsel patients on dosage and usage",
    ],
    requirements: [
      "D.Pharm / B.Pharm with valid registration",
      "Hospital or retail pharmacy experience",
      "Basic computer billing knowledge",
    ],
    skills: ["Dispensing", "Inventory", "Pharmacy Billing", "Patient Counselling"],
  },
  {
    slug: "lab-technician-madurai",
    title: "Lab Technician",
    sector: "healthcare",
    location: "Madurai",
    experience: "0–2 years",
    salary: "₹1.8 – 2.6 LPA",
    type: "Full-time",
    openings: 3,
    posted: "2026-10-03",
    summary: "Collect samples and run routine diagnostic tests at a diagnostic centre.",
    responsibilities: [
      "Collect and process patient samples",
      "Operate and maintain lab analysers",
      "Record and report test results accurately",
    ],
    requirements: [
      "DMLT / B.Sc MLT",
      "Phlebotomy skills",
      "Freshers welcome",
    ],
    skills: ["Phlebotomy", "Sample Processing", "Lab Analysers", "Reporting"],
  },
  {
    slug: "medical-coder-chennai",
    title: "Medical Coder",
    sector: "healthcare",
    location: "Chennai",
    experience: "1–4 years",
    salary: "₹3 – 5.5 LPA",
    type: "Full-time",
    openings: 5,
    posted: "2026-09-30",
    summary: "Assign accurate ICD-10 and CPT codes for US healthcare clients.",
    responsibilities: [
      "Review medical records and assign codes",
      "Meet accuracy and productivity targets",
      "Stay current with coding guidelines",
    ],
    requirements: [
      "Life science or paramedical degree",
      "CPC / CCS certification preferred",
      "Experience in E&M, surgery or radiology coding",
    ],
    skills: ["ICD-10", "CPT", "E&M Coding", "Medical Terminology"],
  },

  // Other Industries
  {
    slug: "electrical-engineer-coimbatore",
    title: "Electrical Engineer",
    sector: "other",
    location: "Coimbatore",
    experience: "2–5 years",
    salary: "₹3.6 – 5.5 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-10",
    summary: "Handle electrical installation and maintenance for an industrial projects company.",
    responsibilities: [
      "Supervise electrical installation at client sites",
      "Prepare single-line diagrams and load calculations",
      "Ensure safety and statutory compliance",
    ],
    requirements: [
      "B.E EEE / Diploma in EEE",
      "Experience in LT/HT panels and industrial wiring",
      "Electrical supervisor licence is a plus",
    ],
    skills: ["LT / HT Panels", "AutoCAD Electrical", "Load Calculation", "Safety"],
  },
  {
    slug: "logistics-coordinator-chennai",
    title: "Logistics Coordinator",
    sector: "other",
    location: "Chennai",
    experience: "1–3 years",
    salary: "₹2.8 – 4 LPA",
    type: "Full-time",
    openings: 2,
    posted: "2026-10-06",
    summary: "Coordinate shipments and documentation for a freight forwarding company.",
    responsibilities: [
      "Coordinate with transporters and customs agents",
      "Prepare shipping and export documents",
      "Track shipments and update customers",
    ],
    requirements: [
      "Any degree; logistics diploma preferred",
      "Knowledge of EXIM documentation",
      "Good communication skills",
    ],
    skills: ["EXIM Documentation", "Shipment Tracking", "Excel", "Vendor Coordination"],
  },
  {
    slug: "relationship-officer-banking-madurai",
    title: "Relationship Officer – Banking",
    sector: "other",
    location: "Madurai",
    experience: "0–3 years",
    salary: "₹2.4 – 3.6 LPA + incentives",
    type: "Full-time",
    openings: 6,
    posted: "2026-10-02",
    summary: "Acquire and service retail banking customers for a private sector bank.",
    responsibilities: [
      "Source savings accounts and loan customers",
      "Cross-sell banking and insurance products",
      "Maintain relationships with existing customers",
    ],
    requirements: [
      "Any degree; freshers welcome",
      "Good communication in Tamil and English",
      "Interest in sales and finance",
    ],
    skills: ["Customer Acquisition", "Cross-selling", "Banking Products", "Tamil"],
  },
  {
    slug: "store-manager-retail-coimbatore",
    title: "Store Manager – Retail",
    sector: "other",
    location: "Coimbatore",
    experience: "4–8 years",
    salary: "₹4 – 6 LPA",
    type: "Full-time",
    openings: 1,
    posted: "2026-09-28",
    summary: "Run day-to-day operations for a large-format apparel retail store.",
    responsibilities: [
      "Manage store sales, staff and visual merchandising",
      "Control inventory, shrinkage and store expenses",
      "Deliver a consistent customer experience",
    ],
    requirements: [
      "Any degree; retail management experience required",
      "Experience leading a team of 15+",
      "Apparel or lifestyle retail background preferred",
    ],
    skills: ["Store Operations", "Team Leadership", "Inventory Control", "Visual Merchandising"],
  },
];

export const jobs = [...allJobs].sort((a, b) => b.posted.localeCompare(a.posted));

export function getJob(sector: string, slug: string) {
  return jobs.find((j) => j.sector === sector && j.slug === slug);
}

export function jobsInSector(sector: string) {
  return jobs.filter((j) => j.sector === sector);
}

export const jobPageCount = Math.max(1, Math.ceil(jobs.length / JOBS_PER_PAGE));

export function jobsOnPage(page: number) {
  return jobs.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE);
}

export function sectorJobCounts() {
  return Object.fromEntries(jobSectors.map((s) => [s.slug, jobsInSector(s.slug).length]));
}

export function formatPosted(date: string) {
  return new Date(`${date}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
