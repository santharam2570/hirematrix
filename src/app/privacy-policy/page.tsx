import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How HireMatrix HR Consultancy collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your trust matters to us. This policy explains how we collect, use and protect the information you share with HireMatrix."
      updated="October 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you contact us, register as a candidate, enrol in a course or share a hiring requirement, we may collect your name, phone number, email address, educational and employment details, resume, and any other information you choose to provide.",
            "For employers, we may collect company name, contact person details and information about open positions.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use candidate information to assess suitability for job openings and training programmes, share relevant profiles with prospective employers, and communicate about opportunities, interviews and courses.",
            "We use employer information to understand hiring requirements, deliver recruitment services and maintain our business relationship.",
          ],
        },
        {
          heading: "Sharing of Information",
          body: [
            "Candidate profiles are shared only with employers for the purpose of recruitment. We do not sell your personal information to third parties.",
            "We may disclose information when required by law or to protect the rights and safety of HireMatrix, our clients or candidates.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable administrative and technical measures to protect your information from unauthorised access, loss or misuse. However, no method of transmission over the internet is completely secure.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            `You may request access to, correction of, or deletion of your personal information at any time by contacting us at ${site.email}. You can also ask us to stop sending you communications about opportunities or courses.`,
          ],
        },
        {
          heading: "Contact Us",
          body: [
            `If you have any questions about this policy, please contact ${site.name} at our ${site.branches[0].city} branch, ${site.branches[0].lines.join(" ")} Phone: ${site.phone}. Email: ${site.email}.`,
          ],
        },
      ]}
    />
  );
}
