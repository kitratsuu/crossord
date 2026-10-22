import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalPages } from "@/app/legal/data";

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/legal/${slug}` } };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <main className="min-h-screen">
      <div className="container mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold">{page.title}</h1>
        <div className="mt-10 space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-semibold">{s.heading}</h2>
              <p className="mt-3 text-muted-foreground leading-7">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
