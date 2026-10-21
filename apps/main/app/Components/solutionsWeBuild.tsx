import {
  ArrowRight,
  LayoutDashboard,
  Workflow,
  ShoppingBag,
  BarChart3,
  Zap,
  Activity,
  Users,
  Mail,
  Database,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    tag: "Custom Web Apps",
    icon: LayoutDashboard,
    title: "Web Applications & Dashboards",
    description:
      "Fast, scalable web apps built on the MERN stack and deployed on AWS, from internal tools to customer-facing platforms.",
    tech: ["MongoDB", "Express", "React", "Node.js", "AWS"],
  },
  {
    tag: "Automation",
    icon: Workflow,
    title: "Workflow Automation with n8n",
    description:
      "Connect your tools and remove repetitive work, from lead capture and CRM updates to notifications and reports.",
    tech: ["n8n", "Integrations", "CRM sync", "Alerts"],
  },
  {
    tag: "E-commerce",
    icon: ShoppingBag,
    title: "Online Stores & Business Websites",
    description:
      "Polished Shopify and Wix websites, supported by video, graphics, and digital marketing to help customers find you.",
    tech: ["Shopify", "Wix", "Branding", "Marketing"],
  },
];

function SolutionVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#171D38] via-[#11162A] to-[#090D18]">
        <div className="absolute left-[9%] top-[10%] w-[82%] overflow-hidden rounded-xl border border-white/10 bg-[#0D1323] shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
          {/* Browser */}
          <div className="flex h-7 items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.025] px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <div className="ml-4 h-2 w-32 rounded-full bg-white/[0.06]" />
          </div>

          <div className="flex min-h-[215px]">
            {/* Sidebar */}
            <div className="w-[23%] border-r border-white/[0.06] p-3">
              <div className="mb-5 flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-[#6077FF]" />
                <div className="h-2 w-10 rounded bg-white/20" />
              </div>

              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={`mb-3 h-2 rounded ${
                    item === 1
                      ? "w-full bg-[#6077FF]/50"
                      : "w-[75%] bg-white/[0.06]"
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-3 w-28 rounded bg-white/20" />
                  <div className="mt-2 h-2 w-20 rounded bg-white/[0.07]" />
                </div>
                <div className="h-6 w-16 rounded bg-[#6077FF]/20" />
              </div>

              {/* Placeholder stat cards (no fake numbers) */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2"
                  >
                    <div className="h-1.5 w-8 rounded bg-white/[0.12]" />
                    <div className="mt-2 h-2.5 w-12 rounded bg-white/25" />
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="h-2 w-20 rounded bg-white/15" />
                  <BarChart3 className="h-3 w-3 text-[#7183FF]" />
                </div>

                <div className="flex h-16 items-end gap-1.5">
                  {[35, 48, 42, 62, 55, 76, 68, 90, 78, 96].map((height, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t bg-gradient-to-t from-[#536BFF]/30 to-[#7183FF]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#11172B]/80 px-2.5 py-1 text-[8px] font-semibold text-white/40 backdrop-blur-xl">
          <Database className="h-2.5 w-2.5" />
          CONCEPT PREVIEW
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#17162F] via-[#111225] to-[#090D18]">
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7657FF]/15 blur-[65px]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[210px] w-[310px]">
            {/* Connecting lines */}
            <div className="absolute left-[72px] top-[88px] h-px w-[80px] rotate-[-25deg] bg-gradient-to-r from-[#6077FF]/20 to-[#6077FF]" />
            <div className="absolute left-[150px] top-[80px] h-px w-[75px] rotate-[28deg] bg-gradient-to-r from-[#6077FF] to-[#8B6CFF]" />
            <div className="absolute left-[155px] top-[125px] h-[55px] w-px bg-gradient-to-b from-[#6077FF] to-[#8B6CFF]" />

            {/* Trigger node */}
            <div className="absolute left-0 top-[72px] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151B31] shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
              <Mail className="h-5 w-5 text-[#7183FF]" />
            </div>

            {/* Main node */}
            <div className="absolute left-[125px] top-[60px] flex h-16 w-16 items-center justify-center rounded-2xl border border-[#667AFF]/40 bg-gradient-to-br from-[#536BFF] to-[#7657FF] shadow-[0_0_35px_rgba(91,111,255,0.35)]">
              <Zap className="h-7 w-7 text-white" />
            </div>

            {/* Output node */}
            <div className="absolute right-0 top-[70px] flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#151B31] shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
              <Workflow className="h-5 w-5 text-[#9A82FF]" />
            </div>

            {/* Bottom node */}
            <div className="absolute bottom-0 left-[130px] flex h-12 w-20 items-center justify-center rounded-xl border border-white/10 bg-[#151B31]">
              <span className="text-[8px] font-semibold text-white/50">
                AUTOMATED
              </span>
            </div>

            {/* Floating dots */}
            <div className="absolute left-[105px] top-[20px] h-2 w-2 rounded-full bg-[#7183FF] shadow-[0_0_15px_5px_rgba(113,131,255,0.4)]" />
            <div className="absolute right-[75px] top-[28px] h-1.5 w-1.5 rounded-full bg-[#A083FF] shadow-[0_0_15px_4px_rgba(160,131,255,0.35)]" />
          </div>
        </div>

        <div className="absolute bottom-4 right-5 rounded-full border border-white/10 bg-[#11172B]/80 px-2.5 py-1 text-[8px] font-semibold text-white/40 backdrop-blur-xl">
          CONCEPT PREVIEW
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#141C35] via-[#0E1425] to-[#090D18]">
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#3D9BFF]/10 blur-[75px]" />

      {/* Phone storefront */}
      <div className="absolute left-1/2 top-1/2 w-[155px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] transition-transform duration-700 group-hover:translate-y-[-53%] group-hover:rotate-[3deg]">
        <div className="rounded-[24px] border-[4px] border-[#2A344B] bg-[#080C16] p-1 shadow-[0_30px_50px_rgba(0,0,0,0.55)]">
          <div className="overflow-hidden rounded-[18px] bg-[#F2F5FF]">
            <div className="flex h-7 items-center justify-center">
              <div className="h-1.5 w-10 rounded-full bg-black/15" />
            </div>

            <div className="px-3 pb-4">
              <div className="text-[6px] font-bold text-[#6175FF]">
                YOUR STORE
              </div>

              <div className="mt-3 text-[17px] font-bold leading-[0.95] tracking-[-0.05em] text-[#111625]">
                Shop
                <br />
                The New
                <br />
                Collection.
              </div>

              <div className="mt-4 h-6 rounded-md bg-[#536BFF]" />

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-14 rounded-lg bg-white shadow-sm" />
                <div className="h-14 rounded-lg bg-white shadow-sm" />
              </div>

              <div className="mt-2 h-16 rounded-lg bg-white shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute left-[12%] top-[23%] rounded-lg border border-white/10 bg-[#12192A]/90 p-2.5 shadow-xl backdrop-blur-xl">
        <Users className="h-4 w-4 text-[#6E82FF]" />
      </div>

      <div className="absolute bottom-[23%] right-[12%] rounded-lg border border-white/10 bg-[#12192A]/90 p-2.5 shadow-xl backdrop-blur-xl">
        <Activity className="h-4 w-4 text-[#6E82FF]" />
      </div>

      <div className="absolute bottom-4 right-5 rounded-full border border-white/10 bg-[#11172B]/80 px-2.5 py-1 text-[8px] font-semibold text-white/40 backdrop-blur-xl">
        CONCEPT PREVIEW
      </div>
    </div>
  );
}

export default function SolutionsWeBuild() {
  return (
    <section className="relative overflow-hidden bg-[#080D18] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#536BFF]/[0.045] blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_390px] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#6077FF]" />
              <p className="text-[10px] font-bold tracking-[0.26em] text-[#7183FF]">
                WHAT WE BUILD
              </p>
            </div>

            <h2 className="max-w-[700px] text-[38px] font-bold leading-[1.04] tracking-[-0.04em] sm:text-[46px] lg:text-[52px]">
              Digital Solutions
              <br />
              <span className="text-[#7183FF]">Built Around Your Goals.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="text-[14px] leading-[1.75] text-white/45">
              We&apos;re a new studio with hands-on experience across web
              development, e-commerce, automation, and creative. Here&apos;s
              what we can build for your business.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#7183FF]"
            >
              Explore All Services
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6077FF]/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map(
            ({ tag, icon: Icon, title, description, tech }, index) => (
              <Link
                key={title}
                href="/contact"
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-[#6579FF]/35 hover:bg-white/[0.04] hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
              >
                {/* Visual */}
                <div className="relative h-[285px] overflow-hidden border-b border-white/[0.08]">
                  <SolutionVisual index={index} />

                  <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-md">
                    <Icon className="h-3 w-3 text-[#8292FF]" />
                    <span className="text-[9px] font-semibold text-white/70">
                      {tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-[18px] font-bold tracking-[-0.02em] text-white">
                    {title}
                  </h3>

                  <p className="mt-3 min-h-[68px] text-[13px] leading-[1.7] text-white/40">
                    {description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium text-white/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
                    <span className="text-[11px] font-semibold text-white/40 transition-colors group-hover:text-[#7183FF]">
                      Discuss This Solution
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#6579FF]/40 group-hover:bg-[#536BFF] group-hover:text-white">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#536BFF] to-[#42BFFF] transition-all duration-500 group-hover:w-full" />
              </Link>
            ),
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#6579FF]">
              HAVE A PROJECT IN MIND?
            </p>
            <p className="mt-2 text-[14px] text-white/45">
              Tell us what you need and we&apos;ll suggest the right approach.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-[12px] font-semibold text-white"
          >
            Start a Conversation
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#536BFF] transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
