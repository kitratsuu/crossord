import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, Layers, MessagesSquare, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { processSteps, services } from "@/app/services/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, UI/UX design, e-commerce, custom software, AI solutions, cloud & DevOps, APIs, SEO and maintenance from Crossord.",
  alternates: { canonical: "/services" },
};

const reasons = [
  { icon: Layers, title: "One team, end to end", description: "Strategy, design, engineering and support under one roof — no hand-offs between agencies." },
  { icon: Zap, title: "Built for performance", description: "Fast, SEO-ready and scalable by default, using modern, proven technology." },
  { icon: MessagesSquare, title: "Transparent communication", description: "Clear milestones, regular demos and a direct line to the people building your product." },
  { icon: ShieldCheck, title: "You own everything", description: "Full ownership of code, designs and infrastructure when the project is complete." },
];

const faqs = [
  { q: "How do projects usually start?", a: "With a free discovery call. We learn about your goals, then send a proposal with scope, timeline and cost before any work begins." },
  { q: "How do you price projects?", a: "Most projects are fixed-price based on an agreed scope. Ongoing work and support are available on monthly plans." },
  { q: "Do you work with clients outside India?", a: "Yes. We work with clients worldwide and plan communication around your time zone." },
  { q: "What happens after launch?", a: "We offer support and maintenance plans covering updates, monitoring, security and new features." },
];

export default function ServicesPage() {
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
            Services
          </Badge>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1] tracking-[-0.04em] sm:text-6xl">
            What we <span className="text-primary">build.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
            End-to-end digital services — from strategy and design to
            engineering, launch and ongoing support. Pick one service or let us
            handle the whole product.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#F4F5FA]">
        <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(47,84,235,0.35)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CROSSORD */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">WHY CROSSORD</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-4xl">
            A technology partner, not just a vendor.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#070B17] text-white">
        <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">HOW WE WORK</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
            A clear process from idea to launch.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="border-t border-white/15 pt-6">
                <span className="text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container mx-auto max-w-3xl px-6 py-20 lg:py-28">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-900">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gap-2 font-semibold">
              <Link href="/contact">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
