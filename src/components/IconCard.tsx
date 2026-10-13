import type { LucideIcon } from "lucide-react";
import Reveal from "./motion/Reveal";

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
  variant?: "solid" | "soft";
  center?: boolean;
  index?: number;
};

export default function IconCard({ icon: Icon, title, text, variant = "solid", center, index = 0 }: Props) {
  return (
    <Reveal delay={(index % 4) * 0.1}>
      <div
        className={`card group relative overflow-hidden ${center ? "text-center" : ""} ${
          variant === "soft" ? "bg-paper/60" : ""
        }`}
      >
        <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-accent-300 transition-transform duration-500 group-hover:scale-x-100" />
        <div
          className={`flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${
            variant === "solid" ? "bg-brand-800 text-accent-300" : "bg-white text-brand-800 ring-1 ring-slate-200"
          } ${center ? "mx-auto" : ""}`}
        >
          <Icon className="size-6" />
        </div>
        <h3 className="mt-6 text-lg font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </Reveal>
  );
}
