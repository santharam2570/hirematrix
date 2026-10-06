import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the HireMatrix HR Consultancy website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Please read these terms carefully before using our website or services."
      updated="October 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            `By accessing ${site.url.replace("https://", "")} or using the services of ${site.name}, you agree to these Terms of Use. If you do not agree, please do not use the website.`,
          ],
        },
        {
          heading: "Our Services",
          body: [
            "HireMatrix provides recruitment, staffing, HR outsourcing, career training and placement support services. Specific terms for employers and course participants — including fees, timelines and replacement policies — are set out in separate agreements or enrolment forms.",
          ],
        },
        {
          heading: "No Guarantee of Employment",
          body: [
            "While we make every effort to connect candidates with suitable opportunities, final hiring decisions rest solely with employers. Completion of a course or registration with HireMatrix does not guarantee employment.",
          ],
        },
        {
          heading: "Accuracy of Information",
          body: [
            "Candidates are responsible for ensuring that the information and documents they provide are true and accurate. Employers are responsible for the accuracy of job descriptions and offer details. HireMatrix may decline or discontinue services where false information is provided.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this website, including text, graphics, logos and course material, is the property of HireMatrix and may not be copied or reproduced without written permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "HireMatrix is not liable for any indirect or consequential loss arising from the use of this website or our services, including employment decisions made by employers or candidates.",
          ],
        },
        {
          heading: "Governing Law",
          body: [
            "These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.",
          ],
        },
      ]}
    />
  );
}
