import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import type { Branch } from "@/lib/site";
import OpenStatus from "./OpenStatus";

export default function BranchCard({ branch }: { branch: Branch }) {
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;

  return (
    <div className="card group flex flex-col p-0">
      <div className="p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-800 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <MapPin className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase">Branch</p>
              <h3 className="text-xl font-bold">{branch.city}</h3>
            </div>
          </div>
          <OpenStatus opensAt={branch.opensAt} closesAt={branch.closesAt} />
        </div>

        <address className="mt-6 text-sm leading-relaxed text-slate-600 not-italic">
          {branch.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </address>

        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Phone className="size-4 shrink-0 text-brand-600" />
            <dt className="sr-only">Phone</dt>
            <dd>
              <a href={branch.phoneHref} className="font-semibold text-brand-900 hover:text-brand-600">
                {branch.phone}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="size-4 shrink-0 text-brand-600" />
            <dt className="sr-only">Hours</dt>
            <dd className="text-slate-700">
              {branch.days} · {branch.hours}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-auto overflow-hidden border-t border-slate-200">
        <iframe
          title={`HireMatrix ${branch.city} branch location`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&output=embed`}
          className="h-56 w-full grayscale-[30%] transition-all duration-500 group-hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex divide-x divide-slate-200 border-t border-slate-200 text-sm font-semibold">
        <a
          href={branch.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 py-4 text-brand-800 transition-colors hover:bg-brand-50"
        >
          <Phone className="size-4" /> Call
        </a>
        <a
          href={directions}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-4 text-brand-800 transition-colors hover:bg-brand-50"
        >
          <Navigation className="size-4" /> Directions
        </a>
      </div>
    </div>
  );
}
