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
      <div className={`card group ${center ? "text-center" : ""}`}>
        <div
          className={`flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
            variant === "solid" ? "bg-brand-800 text-white" : "bg-brand-50 text-brand-800"
          } ${center ? "mx-auto" : ""}`}
        >
          <Icon className="size-6" />
        </div>
        <h3 className="mt-6 text-lg font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </Reveal>
  );
}
