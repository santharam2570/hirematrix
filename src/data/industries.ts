import {
  Building,
  CodeXml,
  Factory,
  Headphones,
  HeartPulse,
  Landmark,
  Shirt,
  ShoppingBag,
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
  relatedCourses: string[];
};

export const industries: Industry[] = [
  {
    slug: "it-software",
    icon: CodeXml,
    name: "IT & Software",
    tagline: "Developers, testers and tech talent for product companies, IT services firms and startups.",
    summary:
      "Hiring developers, QA engineers, data and cloud professionals for IT services companies, product firms and startups.",
    overview: [
      "Coimbatore has grown into one of South India's fastest-rising technology hubs, with IT parks, global capability centres and a vibrant startup scene. Competition for skilled engineers is intense, and the cost of a wrong technical hire is high.",
      "HireMatrix helps technology companies build reliable engineering teams — from fresher batches to experienced developers and team leads. We technically pre-screen every profile before it reaches you, so your engineering managers spend time only on interview-ready candidates.",
    ],
    challenges: [
      "Long hiring cycles for niche skills such as cloud, data engineering and AI",
      "High offer-drop and early attrition among experienced developers",
      "Large volumes of unqualified applications on job portals",
      "Freshers who know theory but are not project-ready",
    ],
    roles: [
      {
        group: "Development",
        items: ["Full Stack Developers", "Front-End (React / Angular) Developers", "Java / .NET / Python Developers", "Mobile App Developers", "Technical Leads"],
      },
      {
        group: "Quality & Infrastructure",
        items: ["Manual & Automation Testers", "DevOps Engineers", "Cloud Engineers (AWS / Azure)", "System & Network Administrators"],
      },
      {
        group: "Data, SAP & Design",
        items: ["Data Analysts", "Data Scientists & ML Engineers", "SAP Functional & ABAP Consultants", "UI/UX Designers", "Business Analysts"],
      },
    ],
    solutions: [
      { title: "Technical Pre-Screening", text: "Every candidate clears a coding or skill assessment before we share the profile." },
      { title: "Fresher Batch Hiring", text: "Trained, project-ready freshers from our Full Stack, Testing and Data programs." },
      { title: "Contract-to-Hire", text: "Evaluate developers on live projects before converting them to permanent roles." },
      { title: "Offer Management", text: "Regular candidate engagement between offer and joining to reduce drop-outs." },
    ],
    whyUs: [
      "Recruiters who understand tech stacks and job descriptions",
      "Access to a pipeline of trained freshers from our own courses",
      "Shortlists typically shared within 3–5 working days",
      "Replacement support if a hire does not work out",
    ],
    faqs: [
      {
        q: "Can you hire for niche skills like AI or cloud?",
        a: "Yes. We source experienced professionals through targeted headhunting and also supply trained freshers from our AI, Data Science and Cloud Computing programs.",
      },
      {
        q: "Do you conduct technical tests?",
        a: "Yes. We run role-specific assessments and screening calls before sharing profiles. We can also use your own test if you prefer.",
      },
      {
        q: "Can you support bulk fresher hiring?",
        a: "Absolutely. We organise assessment and interview drives with pre-trained candidates, so your onboarding time is significantly shorter.",
      },
    ],
    relatedCourses: [
      "full-stack-development",
      "software-testing",
      "data-science-machine-learning",
      "artificial-intelligence",
      "cloud-computing",
      "ui-ux-design",
      "sap-abap",
    ],
  },
  {
    slug: "manufacturing-engineering",
    icon: Factory,
    name: "Manufacturing & Engineering",
    tagline: "Engineers, technicians and plant talent for pumps, motors, foundries, auto components and machinery.",
    summary:
      "Recruiting design engineers, production, quality and maintenance staff for Coimbatore's engineering and manufacturing units.",
    overview: [
      "Coimbatore is known nationwide for pumps, motors, foundries, auto components and precision machinery. These businesses depend on skilled engineers and technicians who can keep production running and quality consistent.",
      "We recruit across the plant — from CAD and design engineers to production supervisors, quality inspectors and maintenance technicians. Our CAD & Engineering training programs also give us a steady pool of design-ready candidates.",
    ],
    challenges: [
      "Shortage of skilled CNC, VMC and maintenance technicians",
      "Design engineers without hands-on CAD software experience",
      "High turnover in shop-floor and shift-based roles",
      "Urgent replacement needs that affect production schedules",
    ],
    roles: [
      {
        group: "Design & Engineering",
        items: ["Mechanical Design Engineers", "CAD Draftsmen (AutoCAD, SolidWorks, Creo)", "Product Development Engineers", "R&D Engineers"],
      },
      {
        group: "Production & Quality",
        items: ["Production Engineers & Supervisors", "Quality Engineers (QA / QC)", "CNC / VMC Operators & Programmers", "Process Engineers"],
      },
      {
        group: "Plant Support",
        items: ["Maintenance Engineers (Mechanical / Electrical)", "Purchase & Stores Executives", "PPC Engineers", "SAP PP / MM Executives", "EHS Officers"],
      },
    ],
    solutions: [
      { title: "Skill-Verified Technicians", text: "Practical skill checks for operators and technicians before interview." },
      { title: "Design Talent Pool", text: "CAD-trained engineers from our AutoCAD, SolidWorks and Creo programs." },
      { title: "Shift & Volume Hiring", text: "Fast staffing for new lines, expansions and seasonal demand." },
      { title: "Supervisory Hiring", text: "Experienced supervisors and plant leads who can manage teams and output." },
    ],
    whyUs: [
      "Local presence and deep knowledge of the Coimbatore industrial belt",
      "Candidates screened for both technical skills and shift readiness",
      "Quick turnaround for urgent and replacement positions",
      "Support for diploma, ITI and engineering graduate hiring",
    ],
    faqs: [
      {
        q: "Do you hire ITI and diploma candidates?",
        a: "Yes. We recruit ITI, diploma and engineering graduates for operator, technician, supervisor and engineer roles.",
      },
      {
        q: "Can you verify machine-operation skills?",
        a: "We conduct practical screening and reference checks for technical roles, and can coordinate trade tests at your facility.",
      },
      {
        q: "How quickly can you fill urgent positions?",
        a: "For common shop-floor and engineering roles, we can usually share suitable profiles within a few working days.",
      },
    ],
    relatedCourses: ["autocad", "solidworks", "creo", "sap-pp", "sap-mm"],
  },
  {
    slug: "textile-apparel",
    icon: Shirt,
    name: "Textile & Apparel",
    tagline: "Talent for spinning mills, garment exporters and textile processing units.",
    summary:
      "Supporting spinning mills, garment manufacturers and exporters with technical, merchandising and administrative talent.",
    overview: [
      "Often called the 'Manchester of South India', the Coimbatore–Tiruppur region is home to thousands of spinning mills, knitting units and garment exporters. These businesses need a reliable flow of skilled people to meet production and export timelines.",
      "HireMatrix recruits for mill operations, production planning, merchandising, quality and back-office functions — helping textile companies maintain output while building stronger management teams.",
    ],
    challenges: [
      "Finding experienced merchandisers who can manage international buyers",
      "Retaining skilled supervisors and production staff",
      "Upgrading to digital ERP and compliance-driven operations",
      "Seasonal surges in export orders",
    ],
    roles: [
      {
        group: "Mill & Production",
        items: ["Spinning / Weaving Masters", "Production Supervisors", "Maintenance Fitters & Electricians", "Textile Technologists"],
      },
      {
        group: "Merchandising & Export",
        items: ["Merchandisers (Domestic & Export)", "Sampling Coordinators", "Export Documentation Executives", "Sourcing Executives"],
      },
      {
        group: "Quality & Administration",
        items: ["Quality Controllers & Auditors", "HR & Compliance Officers", "Accounts Executives", "SAP / ERP & MIS Executives"],
      },
    ],
    solutions: [
      { title: "Merchandiser Hiring", text: "Candidates experienced in buyer communication, costing and time-and-action planning." },
      { title: "Compliance-Ready HR", text: "HR and compliance professionals familiar with buyer audits and labour norms." },
      { title: "Supervisory Talent", text: "Experienced floor supervisors who can manage output and quality." },
      { title: "Back-Office Staffing", text: "Accounts, MIS and documentation staff for growing export units." },
    ],
    whyUs: [
      "Strong understanding of the Coimbatore–Tiruppur textile ecosystem",
      "Candidates with relevant mill and export-house experience",
      "Bilingual (Tamil & English) candidates for buyer-facing roles",
      "Flexible hiring support during peak export seasons",
    ],
    faqs: [
      {
        q: "Do you recruit for export garment units?",
        a: "Yes. We hire merchandisers, export documentation staff, quality auditors and production teams for export houses.",
      },
      {
        q: "Can you help with compliance and HR roles?",
        a: "We recruit HR and compliance officers with experience in social audits, statutory compliance and buyer requirements.",
      },
      {
        q: "Do you provide candidates for Tiruppur and nearby areas?",
        a: "Yes. Along with Coimbatore, we support employers across Tiruppur, Erode, Pollachi and surrounding regions.",
      },
    ],
    relatedCourses: ["sap-mm", "sap-sd", "sap-fico", "business-analytics", "digital-marketing"],
  },
  {
    slug: "banking-financial-services",
    icon: Landmark,
    name: "Banking, Financial Services & Insurance",
    tagline: "Sales, operations and analyst talent for banks, NBFCs, insurers and fintechs.",
    summary:
      "Recruiting relationship managers, operations staff, credit and analytics professionals for banks, NBFCs and insurers.",
    overview: [
      "Banks, NBFCs, insurance companies and fintechs are expanding rapidly into Tier-2 cities like Coimbatore. They need customer-facing sales teams, accurate operations staff and analytical talent — often in large numbers and at short notice.",
      "HireMatrix delivers candidates who understand financial products and compliance basics. Graduates from our Banking & Financial Services and Business Analytics programs join your team with a clear head start.",
    ],
    challenges: [
      "High attrition in field sales and relationship roles",
      "Candidates lacking product knowledge and compliance awareness",
      "Branch expansion requiring rapid volume hiring",
      "Shortage of analytically strong credit and risk professionals",
    ],
    roles: [
      {
        group: "Sales & Relationship",
        items: ["Relationship Managers / Executives", "Branch Sales Officers", "Insurance Advisors & Sales Managers", "Wealth Management Associates"],
      },
      {
        group: "Operations",
        items: ["Banking Operations Executives", "Loan Processing Officers", "KYC & Documentation Executives", "Customer Service Officers"],
      },
      {
        group: "Credit & Analytics",
        items: ["Credit Analysts", "Collections Officers", "MIS & Reporting Analysts", "Business Analysts"],
      },
    ],
    solutions: [
      { title: "Volume Branch Hiring", text: "Recruitment drives to staff new branches and sales teams quickly." },
      { title: "Trained Banking Freshers", text: "Graduates trained in banking products, KYC and customer handling." },
      { title: "Sales Aptitude Screening", text: "Communication and sales-readiness assessments for field roles." },
      { title: "Analyst Hiring", text: "Excel, SQL and Power BI-skilled candidates for credit and MIS teams." },
    ],
    whyUs: [
      "Pre-trained freshers from our banking and analytics courses",
      "Candidates assessed for communication and target orientation",
      "Experience supporting multi-location branch hiring",
      "Background and document verification support",
    ],
    faqs: [
      {
        q: "Can you support hiring for multiple branches at once?",
        a: "Yes. We plan recruitment drives across locations and coordinate interviews to fill multiple branches within agreed timelines.",
      },
      {
        q: "Are your banking freshers job-ready?",
        a: "Candidates from our Banking & Financial Services program are trained in retail banking products, KYC/AML basics and customer service.",
      },
      {
        q: "Do you hire for insurance companies?",
        a: "Yes. We recruit agency managers, sales managers, advisors and operations staff for life and general insurance companies.",
      },
    ],
    relatedCourses: [
      "banking-financial-services",
      "investment-management",
      "business-analytics",
      "bank-exam-coaching",
      "sap-fico",
    ],
  },
  {
    slug: "healthcare-pharma",
    icon: HeartPulse,
    name: "Healthcare & Pharma",
    tagline: "Clinical, administrative and sales talent for hospitals, clinics, diagnostics and pharma companies.",
    summary:
      "Hiring nurses, technicians, hospital administrators and pharma sales professionals for healthcare organisations.",
    overview: [
      "Coimbatore is a leading medical destination in South India, with multi-speciality hospitals, diagnostic chains and a growing pharmaceutical and medical-devices sector. Patient care depends on qualified, reliable staff at every level.",
      "We recruit across clinical support, hospital administration and pharma sales, carefully verifying qualifications and registrations so healthcare employers can hire with confidence.",
    ],
    challenges: [
      "Shortage of qualified nursing and allied health staff",
      "Verifying certifications and professional registrations",
      "Round-the-clock shift requirements",
      "High churn in medical sales representative roles",
    ],
    roles: [
      {
        group: "Clinical Support",
        items: ["Staff Nurses", "Lab & Radiology Technicians", "Pharmacists", "OT & Dialysis Technicians"],
      },
      {
        group: "Hospital Administration",
        items: ["Front Office & Patient Care Executives", "Medical Records & Billing Executives", "Insurance / TPA Coordinators", "Hospital Administrators"],
      },
      {
        group: "Pharma & Devices",
        items: ["Medical Representatives", "Area Sales Managers", "Medical Device Sales Executives", "Regulatory & QA Executives"],
      },
    ],
    solutions: [
      { title: "Credential Verification", text: "Qualification and registration checks before candidates are shortlisted." },
      { title: "Shift-Ready Staffing", text: "Candidates confirmed for rotational and night-shift availability." },
      { title: "Admin & Billing Teams", text: "Trained front office, billing and TPA staff for smooth patient experience." },
      { title: "Pharma Sales Hiring", text: "Target-driven medical reps with territory knowledge." },
    ],
    whyUs: [
      "Careful verification of qualifications and experience",
      "Candidates with strong patient-care communication skills",
      "Support for both hospitals and pharma field teams",
      "Fast replacement support for critical positions",
    ],
    faqs: [
      {
        q: "Do you verify nursing registrations?",
        a: "Yes. We check educational certificates and nursing council registration details as part of our screening process.",
      },
      {
        q: "Can you hire for TPA and insurance desks?",
        a: "Yes. We recruit TPA coordinators and billing executives familiar with cashless claims and insurance documentation.",
      },
      {
        q: "Do you recruit medical representatives?",
        a: "Yes. We hire freshers and experienced MRs, area managers and medical device sales professionals across Tamil Nadu.",
      },
    ],
    relatedCourses: ["sales-business-development", "bpo-customer-support", "sap-hcm-successfactors", "digital-marketing"],
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    tagline: "Store, sales, digital and supply-chain talent for retail chains and online brands.",
    summary:
      "Staffing retail stores, e-commerce operations, digital marketing and warehouse teams for growing consumer brands.",
    overview: [
      "From jewellery and textile showrooms to supermarket chains and D2C brands selling online, retail in Coimbatore is expanding fast. Success depends on customer-facing staff and an efficient back end that keeps orders moving.",
      "HireMatrix supplies store teams, e-commerce operations staff, digital marketers and supply-chain professionals — with the scale and speed retail businesses need during new launches and festive seasons.",
    ],
    challenges: [
      "Festive-season demand spikes requiring rapid hiring",
      "High attrition among store and sales staff",
      "Finding digital marketers who can drive online sales",
      "Managing warehouse and last-mile workforce needs",
    ],
    roles: [
      {
        group: "Store & Sales",
        items: ["Store Managers", "Retail Sales Associates", "Cashiers & Billing Executives", "Visual Merchandisers"],
      },
      {
        group: "E-commerce & Marketing",
        items: ["E-commerce Executives (Amazon / Flipkart)", "Digital Marketing Executives", "Catalogue & Content Executives", "Customer Support Executives"],
      },
      {
        group: "Supply Chain",
        items: ["Warehouse Supervisors", "Inventory Controllers", "Logistics Coordinators", "Purchase Executives"],
      },
    ],
    solutions: [
      { title: "Seasonal Staffing", text: "Rapid hiring for festive seasons, sales events and store launches." },
      { title: "Digital Growth Talent", text: "Trained digital marketers from our Digital Marketing program." },
      { title: "Customer-First Screening", text: "Candidates assessed for communication and customer handling." },
      { title: "Store Leadership", text: "Experienced store and area managers who drive sales and team discipline." },
    ],
    whyUs: [
      "Ability to mobilise candidates quickly for launches and peak seasons",
      "Trained digital marketing and customer support freshers",
      "Local candidates who know the Coimbatore market",
      "Support for both offline retail and online operations",
    ],
    faqs: [
      {
        q: "Can you staff a new store opening?",
        a: "Yes. We can recruit a complete store team — manager, sales associates, cashiers and support staff — in line with your launch date.",
      },
      {
        q: "Do you hire for e-commerce marketplaces?",
        a: "Yes. We recruit executives experienced in Amazon, Flipkart and Shopify operations, catalogue management and online advertising.",
      },
      {
        q: "Do you offer temporary staffing for festive seasons?",
        a: "Yes. We support short-term and seasonal hiring to help you manage demand peaks.",
      },
    ],
    relatedCourses: ["digital-marketing", "sales-business-development", "bpo-customer-support", "sap-sd", "sap-mm"],
  },
  {
    slug: "bpo-customer-experience",
    icon: Headphones,
    name: "BPO & Customer Experience",
    tagline: "Voice, non-voice and team-lead talent for BPOs, KPOs and in-house support centres.",
    summary:
      "Volume hiring of voice, chat and email support executives, team leaders and quality analysts for BPOs and KPOs.",
    overview: [
      "Customer experience teams are the voice of a brand. BPOs, KPOs and in-house support centres in Coimbatore serve domestic and international clients and need a constant supply of articulate, reliable people.",
      "HireMatrix runs high-volume recruitment drives with communication assessments built in. Candidates from our BPO / Customer Support program arrive with voice, accent and CRM training already completed.",
    ],
    challenges: [
      "Very high-volume hiring with tight ramp-up timelines",
      "Communication and accent gaps among freshers",
      "Early attrition within the first 90 days",
      "Need for multilingual (Tamil, Malayalam, Hindi, English) agents",
    ],
    roles: [
      {
        group: "Frontline Support",
        items: ["Voice Process Executives", "Chat & Email Support Executives", "Technical Support Associates", "Collections Executives"],
      },
      {
        group: "Back Office & KPO",
        items: ["Data Entry & Back-Office Executives", "Medical / Insurance Process Associates", "Content Moderators", "Research Analysts"],
      },
      {
        group: "Leadership & Quality",
        items: ["Team Leaders", "Quality Analysts", "Trainers", "Workforce Management Analysts"],
      },
    ],
    solutions: [
      { title: "Mass Recruitment Drives", text: "Walk-in and campus drives to fill large batches quickly." },
      { title: "Communication Assessment", text: "Spoken English, typing and situational-judgement screening." },
      { title: "Pre-Trained Agents", text: "Candidates with voice, accent and CRM training from our BPO program." },
      { title: "Multilingual Hiring", text: "Agents for regional languages and international processes." },
    ],
    whyUs: [
      "Experience running large-scale walk-in and campus drives",
      "Built-in communication assessments before every interview",
      "Engagement support between selection and joining",
      "Ability to source multilingual candidates",
    ],
    faqs: [
      {
        q: "How many candidates can you provide for a batch?",
        a: "Batch sizes depend on your requirement and timelines. We plan drives to meet your ramp-up targets and share daily progress updates.",
      },
      {
        q: "Do you hire for international voice processes?",
        a: "Yes. We screen for neutral accent, fluency and shift readiness for international voice and chat processes.",
      },
      {
        q: "Do you hire team leaders and quality analysts?",
        a: "Yes. We recruit experienced TLs, QAs, trainers and WFM professionals for BPO and KPO operations.",
      },
    ],
    relatedCourses: ["bpo-customer-support", "sales-business-development", "digital-marketing", "business-analytics"],
  },
  {
    slug: "construction-real-estate",
    icon: Building,
    name: "Construction & Real Estate",
    tagline: "Site, design and sales talent for builders, contractors, architects and real estate developers.",
    summary:
      "Recruiting site engineers, planners, architects, interior designers and real estate sales teams for builders and developers.",
    overview: [
      "Coimbatore's real estate and infrastructure sector is booming, with residential townships, commercial complexes and industrial projects under way across the city. Projects need capable engineers on site and skilled designers and sales professionals off site.",
      "We recruit for builders, contractors, architecture and interior firms and real estate developers. Our Civil, Architecture and Interior Design programs provide a pipeline of software-trained, site-aware candidates.",
    ],
    challenges: [
      "Finding site engineers with both technical and supervision skills",
      "Shortage of designers skilled in Revit, STAAD and 3D tools",
      "High churn in real estate sales teams",
      "Project-based hiring that must match construction timelines",
    ],
    roles: [
      {
        group: "Site & Project",
        items: ["Site Engineers (Civil)", "Project Managers", "Quantity Surveyors & Billing Engineers", "Safety Officers"],
      },
      {
        group: "Design",
        items: ["Architects & Junior Architects", "Structural Design Engineers", "Interior Designers", "CAD & BIM Draftsmen"],
      },
      {
        group: "Real Estate Sales & Admin",
        items: ["Real Estate Sales Executives", "CRM Executives", "Purchase & Procurement Officers", "Liaison Officers"],
      },
    ],
    solutions: [
      { title: "Project-Based Hiring", text: "Recruitment planned around project phases and site start dates." },
      { title: "Design Talent Pool", text: "Candidates trained in AutoCAD, Revit, STAAD.Pro, SketchUp and V-Ray." },
      { title: "Site Readiness Checks", text: "Screening for site exposure, supervision skills and travel readiness." },
      { title: "Sales Team Building", text: "Customer-focused sales executives for project launches and site visits." },
    ],
    whyUs: [
      "Software-trained civil, architecture and interior candidates",
      "Understanding of both site and design-office requirements",
      "Flexible hiring for project-based and permanent roles",
      "Local candidates familiar with Coimbatore projects and regulations",
    ],
    faqs: [
      {
        q: "Do you recruit fresher site engineers?",
        a: "Yes. We provide trained civil engineering freshers along with experienced site engineers and project managers.",
      },
      {
        q: "Can you hire interior designers and architects?",
        a: "Yes. Many of our candidates are trained in AutoCAD, Revit, SketchUp, 3ds Max and V-Ray through our programs.",
      },
      {
        q: "Do you support real estate sales hiring?",
        a: "Yes. We recruit sales and CRM executives for project launches, channel sales and customer relationship management.",
      },
    ],
    relatedCourses: ["civil-engineering", "architecture", "interior-design", "autocad"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
