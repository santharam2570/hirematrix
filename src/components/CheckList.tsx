import { CircleCheck } from "lucide-react";
import Reveal from "./motion/Reveal";

export default function CheckList({
  items,
  className = "",
  light,
}: {
  items: string[];
  className?: string;
  light?: boolean;
}) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((t, i) => (
        <Reveal as="li" key={t} x={-20} y={0} delay={i * 0.08} className="flex items-start gap-3">
          <CircleCheck
            className={`mt-0.5 size-5 shrink-0 ${light ? "text-accent-300" : "text-accent-500"}`}
          />
          <span className={light ? "text-brand-100" : ""}>{t}</span>
        </Reveal>
      ))}
    </ul>
  );
}
