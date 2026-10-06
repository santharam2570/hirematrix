import PageHero from "./PageHero";

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={title} title={title} description={intro} />
      <section className="container-x py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: {updated}</p>
          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold">
                  {i + 1}. {s.heading}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
