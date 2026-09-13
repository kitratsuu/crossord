import {
  Globe,
  Smartphone,
  Users,
  Shield,
  Workflow,
  Cloud,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites and web applications engineered around your business goals.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences built for performance, usability, and scale.",
    href: "/services/mobile-app-development",
  },
  {
    icon: Users,
    title: "AI Solutions",
    description:
      "Intelligent AI systems that automate workflows, improve decisions, and unlock new value.",
    href: "/services/ai-solutions",
  },
  {
    icon: Shield,
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces and digital experiences designed to engage users and drive results.",
    href: "/services/ui-ux-design",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    description:
      "Connected tools, data, and workflows that eliminate repetitive work and improve efficiency.",
    href: "/services/automation-integrations",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable, scalable infrastructure built to support continuous delivery and long-term growth.",
    href: "/services/cloud-devops",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FC]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#5D72FF]/[0.055] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(30,41,59,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_400px] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#5D72FF]" />

              <p className="text-[10px] font-bold tracking-[0.26em] text-[#6277FF]">
                WHAT WE DO
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-[700px] text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[46px] lg:text-[52px]">
              Everything You Need
              <br />
              <span className="text-[#6478FF]">to Build, Grow and Scale.</span>
            </h2>
          </div>

          {/* Right copy */}
          <div className="lg:pb-1">
            <p className="max-w-[390px] text-[14px] leading-[1.75] text-slate-500">
              From strategy and design to development and automation, we combine
              technology and creativity to turn ambitious ideas into digital
              products that perform.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#526BFF]"
            >
              Explore All Services
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#526BFF]/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* =======================================================
            SERVICES GRID
        ======================================================== */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#667AFF]/40 hover:shadow-[0_20px_55px_rgba(35,52,120,0.10)]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6077FF]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#6077FF]/15 bg-[#6077FF]/[0.07] text-[#6077FF] transition-all duration-300 group-hover:border-[#6077FF]/30 group-hover:bg-[#6077FF] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(96,119,255,0.25)]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 max-w-[330px] text-[13px] leading-[1.7] text-slate-500">
                  {description}
                </p>
              </div>

              {/* Bottom link */}
              <div className="relative z-10 mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-[11px] font-semibold text-slate-400 transition-colors duration-300 group-hover:text-[#526BFF]">
                  Explore Service
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#6077FF]/30 group-hover:bg-[#6077FF] group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#536BFF] to-[#42BFFF] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[650px] text-[13px] leading-relaxed text-slate-400">
            One team. One strategy. From the first idea to the final deployment,
            we bring design, engineering, AI, and automation together.
          </p>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold text-slate-700"
          >
            Let&apos;s Build Something Great
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#536BFF] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
