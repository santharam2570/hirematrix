export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium whitespace-nowrap text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
