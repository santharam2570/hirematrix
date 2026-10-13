import { Fragment } from "react";

/** Renders `*word*` segments of a heading in the accent serif style. */
export default function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, i) =>
        i % 2 ? (
          <em key={i} className="hl">
            {part}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
