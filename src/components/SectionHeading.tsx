import Accent from "./Accent";
import Reveal from "./motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, center = true, light }: Props) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      <h2 className={`mt-5 text-3xl font-extrabold md:text-[2.75rem] md:leading-[1.1] ${light ? "on-dark text-white" : ""}`}>
        <Accent text={title} />
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-brand-100" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
