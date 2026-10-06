export type Partner = {
  name: string;
  sector: string;
  /** Local path under /public (e.g. "/partners/zoho.svg") or an allowed remote URL. Falls back to a text wordmark when omitted. */
  logo?: string;
};

const commons = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;

// Sample list — confirm with HireMatrix before going live.
export const partners: Partner[] = [
  { name: "Tata Consultancy Services", sector: "IT Services", logo: commons("9/9b/TATA_Consultancy_Services_Logo.svg") },
  { name: "Infosys", sector: "IT Services", logo: commons("9/95/Infosys_logo.svg") },
  { name: "Cognizant", sector: "IT Services", logo: commons("4/43/Cognizant_logo_2022.svg") },
  { name: "Zoho", sector: "Software Products", logo: commons("3/30/ZOHO_logo_2023.svg") },
  { name: "HCLTech", sector: "IT Services", logo: commons("e/e5/HCLTech-new-logo.svg") },
  { name: "Accenture", sector: "Consulting", logo: commons("c/cd/Accenture.svg") },
  { name: "Wipro", sector: "IT Services", logo: commons("8/89/Wipro_new_logo.svg") },
  { name: "Capgemini", sector: "Consulting", logo: commons("9/9d/Capgemini_201x_logo.svg") },
  { name: "Tech Mahindra", sector: "IT Services", logo: commons("3/34/Tech_Mahindra_New_Logo.svg") },
  { name: "Bosch", sector: "Engineering", logo: commons("1/16/Bosch-logo.svg") },
  { name: "Larsen & Toubro", sector: "Engineering & Construction", logo: commons("2/2b/Larsen-%26-Toubro-Logo.svg") },
  { name: "Titan Company", sector: "Manufacturing & Retail", logo: commons("8/83/Titan_Company_Logo.png") },
  { name: "HDFC Bank", sector: "Banking", logo: commons("f/f7/HDFC-Bank-Logo.svg") },
  { name: "ICICI Bank", sector: "Banking", logo: commons("1/12/ICICI_Bank_Logo.svg") },
  { name: "Axis Bank", sector: "Banking", logo: commons("c/ce/AXISBank_Logo.svg") },
  { name: "Bajaj Finserv", sector: "Financial Services", logo: commons("c/c4/Bajaj-Finserv-Logo.jpg") },
];
