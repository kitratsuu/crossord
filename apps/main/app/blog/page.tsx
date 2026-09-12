import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { posts } from "@/app/blog/data";
import { Button } from "@workspace/ui/components/button";

export default function BlogPage() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B17] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />

        <div className="container relative mx-auto px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-7 border-primary/40 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
            >
              CROSSORD INSIGHTS
            </Badge>

            <h1 className="text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Ideas,
              <br />
              <span className="text-primary">insights &amp; perspectives.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Practical thinking on AI, web development, digital products,
              automation, and the technology shaping modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 lg:px-8 lg:py-24">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary">
                FEATURED INSIGHT
              </p>
            </div>

            <Link
              href="/contact"
              className="hidden items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary sm:flex"
            >
              Work with us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative grid overflow-hidden rounded-3xl border border-slate-200 bg-[#F4F5FA] lg:grid-cols-[1.05fr_0.95fr]"
          >
            {/* Visual */}
            <div className="relative min-h-[300px] overflow-hidden bg-[#0A0E1B] lg:min-h-[430px]">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />

              <div className="absolute left-10 top-10 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 backdrop-blur">
                {featuredPost.tag}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] border border-primary/30 bg-primary/10 shadow-[0_0_100px_rgba(124,110,246,0.25)] backdrop-blur-xl transition-transform duration-500 group-hover:scale-105">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <span className="text-xl font-bold">AI</span>
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      Featured
                    </p>
                  </div>
                </div>
              </div>

              <ArrowUpRight className="absolute bottom-7 right-7 h-6 w-6 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="mb-5 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {new Date(featuredPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-primary sm:text-4xl">
                {featuredPost.title}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read the article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ALL INSIGHTS */}
      <section className="relative overflow-hidden bg-[#F4F5FA]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="container relative mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
                LATEST INSIGHTS
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
                More from Crossord.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-500 sm:text-right">
              Ideas and practical perspectives to help you build better digital
              products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {remainingPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Card visual */}
                <div className="relative h-52 overflow-hidden bg-[#0A0E1B]">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-[70px]" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur">
                    {post.tag}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <span className="text-2xl font-bold text-primary">
                        0{index + 2}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="absolute bottom-5 right-5 h-5 w-5 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
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

        <div className="container relative mx-auto px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
            HAVE AN IDEA?
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Let's build something
            <br />
            <span className="text-primary">worth talking about.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Have a project, challenge, or idea you'd like to explore? We'd love
            to hear about it.
          </p>

          <Button asChild size="lg" className="mt-9 gap-2 font-semibold">
            <Link href="/contact">
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
