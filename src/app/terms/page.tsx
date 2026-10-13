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
            "HireMatrix provides placement and recruitment services that connect job seekers with employment opportunities and help employers identify suitable candidates. Specific terms for employers and candidates — including service scope, fees and timelines — are set out in separate agreements.",
          ],
        },
        {
          heading: "No Guarantee of Employment",
          body: [
            "While we make every effort to connect candidates with suitable opportunities, opportunities depend on active vacancies and employer eligibility criteria. Final shortlisting, selection, compensation and hiring decisions rest solely with employers. Registration with HireMatrix or placement assistance does not guarantee selection or a job offer.",
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
            "All content on this website, including text, graphics and logos, is the property of HireMatrix and may not be copied or reproduced without written permission.",
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
