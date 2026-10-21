import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, challenges, audience, and opportunities before writing a single line of code.",
    points: ["Strategy", "Research", "Requirements"],
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description:
      "We turn strategy into intuitive digital experiences with thoughtful UX, visual systems, and prototypes.",
    points: ["UX Strategy", "UI Design", "Prototyping"],
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
    description:
      "Our engineers build secure, scalable, high-performance products using modern technologies.",
    points: ["Development", "Testing", "Integration"],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy",
    description:
      "We launch, monitor, optimize, and continuously improve your product for long-term growth.",
    points: ["Launch", "Optimization", "Support"],
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FC]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#6077FF]/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#42BFFF]/[0.04] blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(30,41,59,0.07) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#6077FF]" />

              <p className="text-[10px] font-bold tracking-[0.26em] text-[#6277FF]">
                OUR APPROACH
              </p>
            </div>

            <h2 className="max-w-[600px] text-[40px] font-bold leading-[1.04] tracking-[-0.04em] text-[#111827] sm:text-[48px] lg:text-[54px]">
              From First Idea
              <br />
              <span className="text-[#6478FF]">To Final Product.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <p className="max-w-[470px] text-[14px] leading-[1.8] text-slate-500 lg:text-right">
              Great digital products don&apos;t happen by accident. Our proven
              process brings strategy, design, engineering, and technology
              together at every stage.
            </p>

            <Link
              href="/about"
              className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#536BFF]"
            >
              Learn More About Us
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#536BFF]/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* =======================================================
            PROCESS TIMELINE
        ======================================================== */}

        <div className="relative mt-5 lg:mt-20">
          {/* Desktop connecting line */}
          <div className="absolute left-[8%] right-[8%] top-[31px] hidden h-px bg-gradient-to-r from-[#DDE2F0] via-[#BFC8E7] to-[#DDE2F0] lg:block" />

          {/* Progress line */}
          <div className="absolute left-[8%] top-[30px] hidden h-[2px] w-[34%] bg-gradient-to-r from-[#536BFF] to-[#7B6EFF] lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(
              ({ icon: Icon, number, title, description, points }, index) => (
                <div key={number} className="group relative">
                  {/* =================================================
                      STEP NUMBER / ICON
                  ================================================== */}

                  <div className="relative z-10 flex items-center">
                    {/* Main icon  show this when not mobile */}
                    <div className="hidden md:flex h-[64px] w-[64px] items-center justify-center rounded-2xl border border-[#DCE1EF] bg-white shadow-[0_10px_30px_rgba(31,45,90,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#667AFF]/40 group-hover:shadow-[0_15px_35px_rgba(76,99,220,0.14)]">
                      <Icon className="h-6 w-6 text-[#6175FF] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <div className="flex items-center gap-3">
                      {/* Mobile icon show this when mobile */}
                      <div className="flex md:hidden h-[22px] w-[22px]  items-center justify-center rounded-2xl shadow-[0_10px_30px_rgba(31,45,90,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#667AFF]/40 group-hover:shadow-[0_15px_35px_rgba(76,99,220,0.14)]">
                        <Icon className="h-6 w-6 text-[#6175FF] transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <h3 className="text-[19px] font-bold tracking-[-0.02em] text-slate-900">
                        {title}
                      </h3>

                      <span className="h-px flex-1 bg-slate-200 transition-colors duration-300 group-hover:bg-[#AEBBFF]" />
                    </div>

                    <p className="mt-3 max-w-full md:max-w-[280px] text-[13px] leading-[1.7] text-slate-500">
                      {description}
                    </p>

                    {/* Points */}
                    <div className="mt-5 space-y-2">
                      {points.map((point) => (
                        <div key={point} className="flex items-center gap-2">
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#536BFF]/10">
                            <Check className="h-2.5 w-2.5 text-[#536BFF]" />
                          </span>

                          <span className="text-[10px] font-medium text-slate-500">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* =======================================================
            BOTTOM BANNER
        ======================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-2xl border border-[#DDE2F0] bg-white px-6 py-7 shadow-[0_15px_45px_rgba(31,45,90,0.05)] sm:px-8 lg:mt-20 lg:px-10">
          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#6077FF]/10 blur-[60px]" />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#536BFF]/10">
                <Rocket className="h-4.5 w-4.5 text-[#536BFF]" />
              </div>

              <div>
                <p className="text-[13px] font-bold text-slate-900">
                  Ready to turn your idea into reality?
                </p>

                <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                  Let&apos;s talk about your project and figure out the right
                  path forward.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#536BFF] px-5 py-3 text-[12px] font-semibold text-white shadow-[0_8px_25px_rgba(83,107,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6177FF] hover:shadow-[0_12px_30px_rgba(83,107,255,0.3)]"
            >
              Start Your Project
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
