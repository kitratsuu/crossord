import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Discipline",
    description:
      "We follow a defined process, not guesswork. Every project is planned, structured, and built with purpose.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Craft",
    description:
      "We care about the details — clean architecture, maintainable code, thoughtful interfaces, and reliable products.",
  },
  {
    icon: Users,
    number: "03",
    title: "Partnership",
    description:
      "We work with you, not just for you. From the first conversation to launch, we stay focused on your goals.",
  },
];

const capabilities = [
  {
    icon: Layers3,
    title: "Digital Products",
    description:
      "Websites, applications, platforms and custom software designed around real business needs.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Practical AI systems that automate workflows, connect information and create measurable efficiency.",
  },
  {
    icon: Rocket,
    title: "Scalable Technology",
    description:
      "Modern technical foundations built to perform today and scale with your business tomorrow.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B17] text-white">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="container relative mx-auto px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge
                variant="outline"
                className="mb-7 border-primary/40 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
              >
                ABOUT CROSSORD
              </Badge>

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                We build
                <br />
                <span className="text-primary">digital products</span>
                <br />
                that move businesses forward.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                Crossord is a digital technology partner helping businesses turn
                complex ideas into powerful websites, applications, automation
                systems and AI-powered products.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 font-semibold">
                  <Link href="/contact">
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden min-h-[430px] lg:block">
              <div className="absolute right-4 top-8 h-[330px] w-[330px] rounded-full border border-white/10" />
              <div className="absolute right-12 top-16 h-[275px] w-[275px] rounded-full border border-primary/20" />

              <div className="absolute right-24 top-28 flex h-44 w-44 items-center justify-center rounded-3xl border border-primary/30 bg-primary/10 shadow-[0_0_100px_rgba(124,110,246,0.22)] backdrop-blur-xl">
                <div className="text-center">
                  <Sparkles className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="text-2xl font-bold">CROSSORD</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Digital Technology
                  </p>
                </div>
              </div>

              <div className="absolute right-0 top-20 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-widest text-white/35">
                  Our Focus
                </p>
                <p className="mt-1 text-sm font-medium">Technology + Impact</p>
              </div>

              <div className="absolute bottom-16 left-8 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-widest text-primary">
                  Built Different
                </p>
                <p className="mt-1 text-sm font-medium">
                  Strategy → Design → Build
                </p>
              </div>

              <div className="absolute bottom-2 right-12 h-3 w-3 rounded-full bg-primary shadow-[0_0_25px_rgba(124,110,246,0.8)]" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
                WHO WE ARE
              </p>

              <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
                Technology should solve problems, not create them.
              </h2>
            </div>

            <div className="max-w-2xl lg:pt-2">
              <p className="text-lg leading-8 text-slate-600">
                We believe great digital products sit at the intersection of
                strategy, design and engineering. That's why we don't simply
                take requirements and start coding.
              </p>

              <p className="mt-6 text-base leading-7 text-slate-500">
                We take the time to understand the problem, identify the right
                opportunity and build a solution that makes sense for the people
                using it and the business behind it.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-3xl font-bold text-slate-900">50+</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Projects delivered
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-slate-900">20+</p>
                  <p className="mt-1 text-xs text-slate-500">Happy clients</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-slate-900">4+</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Years experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
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
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
              WHAT WE STAND FOR
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
              The principles behind
              <br />
              <span className="text-primary">our work.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, number, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-slate-300">
                    {number}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
                WHAT WE DO
              </p>

              <h2 className="text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
                From first idea
                <br />
                <span className="text-primary">to final product.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                We bring strategy, design, development and emerging technology
                together under one roof.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {capabilities.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="group grid gap-5 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-slate-300">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
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

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />

        <div className="container relative mx-auto px-6 py-24 text-center lg:px-8 lg:py-32">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-primary">
            LET'S BUILD SOMETHING GREAT
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="text-primary">Let's make it real.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Tell us what you're trying to build. We'll help you figure out the
            right technology, approach and next step.
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
