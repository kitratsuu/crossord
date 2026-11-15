import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { projects } from "@/app/work/data";

export const metadata: Metadata = {
  title: "What We've Delivered",
  description:
    "Projects our team has delivered: a local screen-sharing and multi-broadcast system, a direct hotel booking engine on Wix, automated print-on-demand ordering with Lumaprints, and an online course-selling platform.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B17] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="container relative mx-auto px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <Badge
            variant="outline"
            className="mb-7 border-primary/40 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Our Work
          </Badge>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl">
            What we&apos;ve <span className="text-primary">delivered.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            Real systems our team has designed, built and shipped — booking
            engines, order automation, course platforms and real-time software.
            Client names are kept confidential.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#F4F5FA]">
        <div className="container mx-auto space-y-8 px-6 py-20 lg:px-8 lg:py-28">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.slug}
                id={project.slug}
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7 lg:p-10"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {project.label}
                  </span>
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 lg:text-3xl">
                  {project.title}
                </h2>

                <div className="mt-8 grid gap-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      The problem
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.problem}</p>

                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      The result
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.outcome}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      What we built
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {project.built.map((item) => (
                        <li key={item} className="flex gap-3 text-slate-600">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                          <span className="leading-7">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">We can build this for you: </span>
                    {project.offer}
                  </p>
                  <div className="flex shrink-0 flex-wrap gap-4">
                    {project.services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
                      >
                        {s.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070B17] text-white">
        <div className="container mx-auto px-6 py-20 text-center lg:px-8 lg:py-28">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
            Have something similar in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/55">
            Tell us what you&apos;re building. We reply within one business day.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2 font-semibold">
            <Link href="/contact">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
