import { Fragment } from "react";

// Renders the small markdown subset used in blog posts: ## / ### headings,
// "- " and "1. " lists, **bold** and paragraphs.
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function Markdown({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.trim().split("\n").map((l) => l.trim());
        const first = lines[0] ?? "";

        if (first.startsWith("### "))
          return (
            <h3 key={i} className="mt-10 text-xl font-bold text-slate-900">
              {first.slice(4)}
            </h3>
          );
        if (first.startsWith("## "))
          return (
            <h2 key={i} className="mt-14 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {first.slice(3)}
            </h2>
          );
        if (lines.every((l) => /^- /.test(l)))
          return (
            <ul key={i} className="mt-6 list-disc space-y-2 pl-6 marker:text-primary">
              {lines.map((l) => (
                <li key={l}>{inline(l.slice(2))}</li>
              ))}
            </ul>
          );
        if (lines.every((l) => /^\d+\. /.test(l)))
          return (
            <ol key={i} className="mt-6 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary">
              {lines.map((l) => (
                <li key={l}>{inline(l.replace(/^\d+\. /, ""))}</li>
              ))}
            </ol>
          );
        return (
          <p key={i} className="mt-6">
            {inline(lines.join(" "))}
          </p>
        );
      })}
    </>
  );
}
