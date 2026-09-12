import {
  Bot,
  Plug,
  Sparkles,
  BrainCircuit,
  ArrowRight,
  Zap,
  Database,
  Workflow,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Autonomous agents that handle repetitive tasks, workflows, and decisions.",
  },
  {
    icon: Plug,
    title: "AI Integrations",
    description:
      "Connect intelligent capabilities with the tools and systems you already use.",
  },
  {
    icon: Sparkles,
    title: "AI Applications",
    description:
      "Build intelligent features directly into your websites, platforms, and apps.",
  },
  {
    icon: BrainCircuit,
    title: "Knowledge Systems",
    description:
      "Turn your business knowledge and data into useful, accessible intelligence.",
  },
];

function AISystemVisual() {
  return (
    <div className="relative h-[500px] w-full">
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================== */}

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#536BFF]/15 blur-[100px]" />

      <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7657FF]/15 blur-[70px]" />

      {/* =========================================================
          GRID
      ========================================================== */}

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
        }}
      />

      {/* =========================================================
          CONNECTION LINES
      ========================================================== */}

      <div className="absolute left-[22%] top-[50%] h-px w-[27%] bg-gradient-to-r from-transparent via-[#6579FF]/50 to-[#6579FF]" />

      <div className="absolute right-[22%] top-[50%] h-px w-[27%] bg-gradient-to-l from-transparent via-[#6579FF]/50 to-[#6579FF]" />

      <div className="absolute left-[50%] top-[18%] h-[32%] w-px bg-gradient-to-b from-transparent via-[#6579FF]/40 to-[#6579FF]" />

      <div className="absolute bottom-[18%] left-[50%] h-[32%] w-px bg-gradient-to-t from-transparent via-[#6579FF]/40 to-[#6579FF]" />

      {/* =========================================================
          OUTER ORBIT
      ========================================================== */}

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

      {/* =========================================================
          TOP NODE
      ========================================================== */}

      <div className="absolute left-1/2 top-[7%] -translate-x-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#12182A] shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
          <Database className="h-5 w-5 text-[#7D8EFF]" />
        </div>

        <span className="absolute left-1/2 top-[55px] -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold tracking-[0.15em] text-white/30">
          BUSINESS DATA
        </span>
      </div>

      {/* =========================================================
          LEFT NODE
      ========================================================== */}

      <div className="absolute left-[7%] top-1/2 -translate-y-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#12182A] shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
          <Workflow className="h-5 w-5 text-[#7D8EFF]" />
        </div>

        <span className="absolute left-1/2 top-[55px] -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold tracking-[0.15em] text-white/30">
          WORKFLOWS
        </span>
      </div>

      {/* =========================================================
          RIGHT NODE
      ========================================================== */}

      <div className="absolute right-[7%] top-1/2 -translate-y-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#12182A] shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
          <MessageSquare className="h-5 w-5 text-[#7D8EFF]" />
        </div>

        <span className="absolute left-1/2 top-[55px] -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold tracking-[0.15em] text-white/30">
          INTERACTIONS
        </span>
      </div>

      {/* =========================================================
          BOTTOM NODE
      ========================================================== */}

      <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#12182A] shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
          <Zap className="h-5 w-5 text-[#7D8EFF]" />
        </div>

        <span className="absolute left-1/2 top-[55px] -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold tracking-[0.15em] text-white/30">
          AUTOMATION
        </span>
      </div>

      {/* =========================================================
          CENTRAL AI CORE
      ========================================================== */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* outer ring */}
        <div className="absolute -inset-5 rounded-[30px] border border-[#6579FF]/15" />

        <div className="absolute -inset-10 rounded-[40px] border border-[#6579FF]/[0.07]" />

        {/* core */}
        <div className="relative flex h-32 w-32 items-center justify-center rounded-[28px] border border-[#8190FF]/30 bg-gradient-to-br from-[#536BFF] via-[#5C62E9] to-[#7657FF] shadow-[0_0_70px_rgba(83,107,255,0.35)]">
          {/* inner glow */}
          <div className="absolute inset-2 rounded-[22px] border border-white/10" />

          <div className="relative flex flex-col items-center">
            <Bot className="h-8 w-8 text-white" />

            <span className="mt-2 text-[9px] font-bold tracking-[0.22em] text-white/80">
              AI CORE
            </span>
          </div>
        </div>

        {/* pulse dots */}
        <div className="absolute -right-3 top-2 h-2 w-2 rounded-full bg-[#91A0FF] shadow-[0_0_15px_5px_rgba(145,160,255,0.4)]" />

        <div className="absolute -bottom-2 left-3 h-1.5 w-1.5 rounded-full bg-[#B09CFF] shadow-[0_0_15px_4px_rgba(176,156,255,0.35)]" />
      </div>

      {/* =========================================================
          FLOATING STATUS CARD
      ========================================================== */}

      <div className="absolute right-[8%] top-[13%] rounded-xl border border-white/[0.09] bg-[#101629]/90 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/10">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          </div>

          <div>
            <p className="text-[8px] font-semibold text-white/70">AI SYSTEM</p>

            <p className="mt-0.5 text-[7px] text-emerald-400">ONLINE</p>
          </div>
        </div>
      </div>

      {/* =========================================================
          FLOATING ACTIVITY CARD
      ========================================================== */}

      <div className="absolute bottom-[14%] left-[7%] rounded-xl border border-white/[0.09] bg-[#101629]/90 px-3 py-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <div className="flex items-end gap-[2px]">
            {[30, 55, 40, 75, 60].map((height, index) => (
              <span
                key={index}
                className="w-[3px] rounded-full bg-[#6579FF]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div>
            <p className="text-[8px] font-semibold text-white/60">PROCESSES</p>

            <p className="mt-0.5 text-[9px] font-bold text-white/90">
              1,284 automated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AISolutions() {
  return (
    <section className="relative overflow-hidden bg-[#080D18] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-1/3 top-0 h-[600px] w-[800px] rounded-full bg-[#536BFF]/[0.04] blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#6077FF]" />

              <p className="text-[10px] font-bold tracking-[0.26em] text-[#7183FF]">
                AI THAT WORKS FOR YOU
              </p>
            </div>

            <h2 className="max-w-[620px] text-[40px] font-bold leading-[1.04] tracking-[-0.04em] sm:text-[48px] lg:text-[54px]">
              Don&apos;t Just Add AI.
              <br />
              <span className="text-[#7183FF]">Put It To Work.</span>
            </h2>

            <p className="mt-6 max-w-[530px] text-[14px] leading-[1.8] text-white/45">
              We design and integrate practical AI systems that work inside your
              real business workflows — automating tasks, connecting knowledge,
              and creating smarter products.
            </p>

            {/* Feature grid */}
            <div className="mt-9 grid gap-x-6 gap-y-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group flex gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-[#7183FF] transition-all duration-300 group-hover:border-[#6579FF]/30 group-hover:bg-[#6579FF]/10">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-bold text-white/90">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-[1.6] text-white/35">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/services/ai-solutions"
              className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-[#536BFF] px-5 py-3 text-[12px] font-semibold text-white shadow-[0_10px_30px_rgba(83,107,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6177FF] hover:shadow-[0_15px_35px_rgba(83,107,255,0.3)]"
            >
              Explore AI Solutions
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:block">
            <AISystemVisual />
          </div>
        </div>

        {/* =======================================================
            BOTTOM STAT BAR
        ======================================================== */}

        <div className="mt-14 grid border-y border-white/[0.08] sm:grid-cols-3">
          <div className="border-b border-white/[0.08] px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="text-[9px] font-bold tracking-[0.18em] text-[#6579FF]">
              AUTOMATION
            </p>

            <p className="mt-2 text-[12px] text-white/45">
              Eliminate repetitive manual work.
            </p>
          </div>

          <div className="border-b border-white/[0.08] px-5 py-6 sm:border-b-0 sm:border-r">
            <p className="text-[9px] font-bold tracking-[0.18em] text-[#6579FF]">
              INTELLIGENCE
            </p>

            <p className="mt-2 text-[12px] text-white/45">
              Make better decisions with your data.
            </p>
          </div>

          <div className="px-5 py-6">
            <p className="text-[9px] font-bold tracking-[0.18em] text-[#6579FF]">
              INTEGRATION
            </p>

            <p className="mt-2 text-[12px] text-white/45">
              Bring AI into the systems you already use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
