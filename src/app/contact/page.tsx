import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import BranchCard from "@/components/BranchCard";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { inlineEnquiryId, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Visit HireMatrix HR Consultancy at our Coimbatore (Peelamedu) or Tiruchirappalli (Cantonment) branch. Call +91 83002 80860 / +91 99527 73417 or email hirematrix.info@gmail.com.",
};

const quickContacts = [
  { icon: Phone, label: "Call Us", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: site.whatsappHref },
  { icon: Mail, label: "Email Us", value: site.email, href: site.emailHref },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your *next step.*"
        description={`Looking for a genuine job opportunity, or the right candidates for your team? Call us, message us, or walk into our ${site.locations} branches.`}
      />

      <section className="container-x relative z-10 -mt-10 grid gap-5 md:grid-cols-3">
        {quickContacts.map((c, i) => (
          <Reveal key={c.label} delay={0.3 + i * 0.12}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card group flex items-center gap-4 p-6"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-accent-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <c.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-slate-500">{c.label}</p>
                <p className="truncate font-semibold text-brand-900">{c.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </section>

      <section id="branches" className="container-x scroll-mt-32 py-20">
        <SectionHeading
          eyebrow="Our Branches"
          title="Visit us *in person*"
          description="Walk in with your resume or hiring requirement — our team at either branch will be happy to help."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {site.branches.map((b, i) => (
            <Reveal key={b.city} delay={i * 0.15}>
              <BranchCard branch={b} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id={inlineEnquiryId} className="bg-paper py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Enquiry"
              title="Send us a *message*"
              description="Fill in your details and our team will receive your enquiry instantly — attach your resume if you're looking for a job. Prefer chat? Send it on WhatsApp instead."
            />
            <ul className="mt-8 space-y-4">
              {site.branches.map((b, i) => (
                <Reveal as="li" key={b.city} x={-20} y={0} delay={0.1 + i * 0.1}>
                  <a
                    href={b.phoneHref}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-800 transition-colors group-hover:bg-brand-800 group-hover:text-white">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-900">{b.city} Branch</p>
                      <p className="text-sm text-slate-600">{b.phone}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal x={40} y={0} className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
