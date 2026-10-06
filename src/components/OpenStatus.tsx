"use client";

import { useEffect, useState } from "react";

type Props = { opensAt: string; closesAt: string; light?: boolean };

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const format12h = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${suffix}`;
};

function nowInIndia() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { weekday: get("weekday"), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export default function OpenStatus({ opensAt, closesAt, light }: Props) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const { weekday, minutes } = nowInIndia();
      setOpen(weekday !== "Sun" && minutes >= toMinutes(opensAt) && minutes < toMinutes(closesAt));
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [opensAt, closesAt]);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        open
          ? "bg-emerald-50 text-emerald-700"
          : light
            ? "bg-white/10 text-brand-100"
            : "bg-slate-100 text-slate-600"
      }`}
    >
      <span className="relative flex size-2">
        {open && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />}
        <span className={`relative size-2 rounded-full ${open ? "bg-emerald-500" : "bg-slate-400"}`} />
      </span>
      {open ? `Open now · Closes ${format12h(closesAt)}` : `Closed · Opens ${format12h(opensAt)}`}
    </span>
  );
}
