import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { domains } from "@/data/courses";
import { industries } from "@/data/industries";
import { site } from "@/lib/site";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/employers", label: "For Employers" },
  { href: "/job-seekers", label: "For Job Seekers" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr_1.3fr]">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-2xl bg-white px-4 py-3"
            aria-label="HireMatrix home"
          >
            <Image src="/logo.png" alt="HireMatrix" width={420} height={250} className="h-12 w-auto" />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-brand-200">
            Recruitment, talent acquisition and skill training firm with branches in Coimbatore and
            Tiruchirappalli — bridging job seekers and employers.
          </p>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn
          title="Industries"
          links={industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name }))}
        />
        <FooterColumn
          title="Courses"
          links={domains.map((d) => ({ href: `/courses#${d.slug}`, label: d.title }))}
        />

        <div>
          <h4 className="text-sm font-semibold tracking-widest text-white uppercase">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <Link href="/contact#branches" className="flex gap-3 hover:text-white">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" />
                {site.locations}
              </Link>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-300" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex gap-3 break-all hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-300" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x grid gap-6 py-10 md:grid-cols-2">
          {site.branches.map((b) => (
            <div key={b.city} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <MapPin className="size-5" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">{b.city} Branch</p>
                <p className="mt-2 leading-relaxed text-brand-200">{b.lines.join(" ")}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                  <a href={b.phoneHref} className="flex items-center gap-1.5 hover:text-white">
                    <Phone className="size-3.5 text-brand-300" /> {b.phone}
                  </a>
                  <span className="flex items-center gap-1.5 text-brand-200">
                    <Clock className="size-3.5 text-brand-300" /> Mon – Sat · {b.hours}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-widest text-white uppercase">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
