import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/app/blog/data";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ARTICLE HERO */}
      <section className="relative overflow-hidden bg-[#070B17] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />

        <div className="container relative mx-auto px-6 pb-20 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-4xl">
            {/* Back */}
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Crossord Insights
              </span>
            </div>

            {/* Title */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-white/45">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <div className="h-1 w-1 rounded-full bg-white/20" />

              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />5 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,720px)_260px] lg:justify-center">
            {/* Content */}
            <article>
              <div className="mb-10 rounded-2xl border border-slate-200 bg-[#F4F5FA] p-8 sm:p-10">
                <p className="text-sm font-semibold text-slate-900">
                  In this article
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A practical look at the ideas, technology and decisions behind
                  this topic.
                </p>
              </div>

              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-line text-[17px] leading-8 text-slate-600">
                  {post.content}
                </div>
              </div>

              {/* Bottom navigation */}
              <div className="mt-16 border-t border-slate-200 pt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  <ArrowLeft className="h-4 w-4" />
                  View all insights
                </Link>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  MORE FROM CROSSORD
                </p>

                <div className="space-y-1">
                  {posts
                    .filter((item) => item.slug !== post.slug)
                    .slice(0, 3)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="group block border-b border-slate-200 py-5"
                      >
                        <p className="mb-2 text-xs text-slate-400">
                          {new Date(item.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>

                        <h3 className="text-sm font-semibold leading-5 text-slate-900 transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>

                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          Read article
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#070B17] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />

        <div className="container relative mx-auto px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Let's turn your
            <br />
            <span className="text-primary">idea into reality.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/50">
            Have a challenge you'd like to solve? Let's talk about what we can
            build together.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
