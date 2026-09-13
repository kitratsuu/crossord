"use client";

import {
  ArrowRight,
  Play,
  LayoutGrid,
  Heart,
  User,
  TrendingUp,
  BrainCircuit,
  Monitor,
  Database,
  Cloud,
  Settings2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";

const stats = [
  {
    icon: LayoutGrid,
    value: "50+",
    label: "Projects Delivered",
  },
  {
    icon: Heart,
    value: "20+",
    label: "Happy Clients",
  },
  {
    icon: User,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Client Satisfaction",
  },
];

const capabilities = [
  {
    label: "AI Solutions",
    icon: BrainCircuit,
    position: "top-[4%] left-[44%]",
  },
  {
    label: "Web & Mobile",
    icon: Monitor,
    position: "top-[22%] left-[3%]",
  },
  {
    label: "Data & Integrations",
    icon: Database,
    position: "top-[55%] left-[-2%]",
  },
  {
    label: "Automation",
    icon: Settings2,
    position: "top-[30%] right-[-2%]",
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
    position: "top-[63%] right-[0%]",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[760px] w-full overflow-hidden bg-[#070B16] text-white lg:min-h-[850px]">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main blue glow */}
      <div className="pointer-events-none absolute -right-[180px] top-[40px] h-[620px] w-[620px] rounded-full bg-[#315DFF]/20 blur-[150px]" />

      {/* Purple glow */}
      <div className="pointer-events-none absolute right-[15%] top-[25%] h-[400px] w-[400px] rounded-full bg-[#7657FF]/10 blur-[130px]" />

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-[-300px] left-[20%] h-[500px] w-[700px] rounded-full bg-[#245BFF]/10 blur-[160px]" />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-16 pt-18 lg:grid-cols-[0.88fr_1.12fr] lg:gap-4 lg:px-10 lg:pb-20 lg:pt-24">
        {/* =======================================================
            LEFT CONTENT
        ======================================================== */}

        <div className="relative z-20 max-w-[650px]">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#5270FF]" />

            <span className="text-[10px] font-bold tracking-[0.28em] text-[#6E82FF]">
              PERFORMANCE · DESIGN · INTELLIGENCE
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[650px] text-[48px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[60px] lg:text-[68px] xl:text-[76px]">
            <span className="block">Websites That</span>
            <span className="block">Convert.</span>
            <span className="block">Apps That Scale.</span>

            <span className="block bg-gradient-to-r from-[#6D7EFF] via-[#5274FF] to-[#36B9FF] bg-clip-text text-transparent">
              Systems That Think.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[560px] text-[15px] leading-[1.75] text-white/55 sm:text-[16px]">
            From the first pixel to the last deploy, we build digital products
            engineered to perform — fast, resilient, and ready for what&apos;s
            next.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-12 rounded-lg bg-[#4C68FF] px-6 text-[13px] font-semibold shadow-[0_0_35px_rgba(76,104,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#5B76FF] hover:shadow-[0_0_45px_rgba(76,104,255,0.4)]"
            >
              Start Your Project
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="group h-12 gap-3 rounded-lg border border-white/15 bg-white/[0.025] px-5 text-[13px] font-medium text-white hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all group-hover:border-[#5D76FF] group-hover:bg-[#5D76FF]/10">
                <Play className="h-3 w-3 fill-white" />
              </span>
              Watch Our Video
            </Button>
          </div>

          {/* =====================================================
              STATS
          ====================================================== */}

          <div className="mt-12 grid max-w-[600px] grid-cols-2 gap-y-7 border-t border-white/10 pt-7 sm:grid-cols-4 sm:gap-x-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={value} className="group">
                <div className="mb-2 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#6680FF]" />

                  <span className="text-[22px] font-bold tracking-[-0.03em]">
                    {value}
                  </span>
                </div>

                <p className="text-[10px] leading-4 text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            RIGHT VISUAL
        ======================================================== */}

        <div className="relative hidden h-[600px] w-full lg:block">
          {/* Orbit rings */}

          <div className="absolute left-1/2 top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#536BFF]/20" />

          <div className="absolute left-1/2 top-[46%] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#536BFF]/15" />

          <div className="absolute left-1/2 top-[46%] h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#536BFF]/15 animate-[spin_40s_linear_infinite]" />

          {/* Glowing core */}
          <div className="absolute left-1/2 top-[46%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#355BFF]/10 blur-[45px]" />

          {/* Dotted sphere */}
          <div
            className="absolute left-1/2 top-[46%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(104,126,255,0.8) 1px, transparent 1px)",
              backgroundSize: "13px 13px",
              maskImage: "radial-gradient(circle, black 45%, transparent 73%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 45%, transparent 73%)",
            }}
          />

          {/* Floating capability pills */}
          {capabilities.map(({ label, icon: Icon, position }, index) => (
            <div
              key={label}
              className={`absolute ${position} z-30`}
              style={{
                animation: `float-${index} ${
                  5 + index * 0.6
                }s ease-in-out infinite`,
              }}
            >
              <div className="flex items-center gap-2 rounded-full border border-[#6578FF]/35 bg-[#10172B]/85 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#536BFF]/15">
                  <Icon className="h-3.5 w-3.5 text-[#7A8CFF]" />
                </span>

                <span className="whitespace-nowrap text-[11px] font-semibold text-white/80">
                  {label}
                </span>
              </div>
            </div>
          ))}

          {/* =====================================================
              LAPTOP
          ====================================================== */}

          <div
            className="absolute left-[49%] top-[46%] z-20 w-[500px] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg]"
            style={{
              filter: "drop-shadow(0 35px 45px rgba(0,0,0,0.5))",
            }}
          >
            {/* Screen */}
            <div className="rounded-[18px] border-[5px] border-[#20283A] bg-[#101522] p-[5px] shadow-[0_0_60px_rgba(74,101,255,0.18)]">
              <div className="overflow-hidden rounded-[10px] bg-white">
                {/* Browser header */}
                <div className="flex h-7 items-center gap-1 border-b border-black/5 bg-[#F4F6FB] px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B6B]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFC857]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4FD18B]" />

                  <div className="ml-4 h-3 w-40 rounded-full bg-black/5" />
                </div>

                {/* Website mockup */}
                <div className="relative min-h-[315px] bg-gradient-to-br from-[#F9FAFF] to-[#EEF2FF] p-7">
                  {/* Mockup navbar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded bg-[#536BFF]">
                        <span className="text-[7px] font-bold text-white">
                          V
                        </span>
                      </div>

                      <span className="text-[9px] font-bold text-[#151A2B]">
                        CROSSORD
                      </span>
                    </div>

                    <div className="hidden gap-4 sm:flex">
                      <span className="text-[6px] text-black/40">Home</span>
                      <span className="text-[6px] text-black/40">Services</span>
                      <span className="text-[6px] text-black/40">Work</span>
                      <span className="text-[6px] text-black/40">About</span>
                    </div>

                    <div className="h-5 w-14 rounded bg-[#536BFF] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">
                        Get Started
                      </span>
                    </div>
                  </div>

                  {/* Mockup hero */}
                  <div className="mt-12 grid grid-cols-2 gap-5">
                    <div>
                      <div className="text-[8px] font-semibold tracking-[0.15em] text-[#6277FF]">
                        DIGITAL EXPERIENCE
                      </div>

                      <div className="mt-2 text-[24px] font-bold leading-[0.95] tracking-[-0.05em] text-[#101525]">
                        Turn Ideas
                        <br />
                        Into Real
                        <br />
                        Products.
                      </div>

                      <div className="mt-3 h-2 w-36 rounded-full bg-black/5" />
                      <div className="mt-1.5 h-2 w-28 rounded-full bg-black/5" />

                      <div className="mt-5 h-7 w-20 rounded bg-[#536BFF] flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white">
                          Get Started
                        </span>
                      </div>
                    </div>

                    {/* AI visual */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute h-36 w-36 rounded-full bg-[#5D72FF]/10 blur-2xl" />

                      <div className="relative flex h-28 w-28 items-center justify-center rounded-[24px] border border-[#6074FF]/20 bg-gradient-to-br from-[#DDE3FF] to-[#F8F9FF] shadow-[0_15px_35px_rgba(83,107,255,0.2)]">
                        <div className="flex h-16 w-16 rotate-45 items-center justify-center rounded-[13px] bg-gradient-to-br from-[#5A72FF] to-[#7661E8] shadow-[0_10px_25px_rgba(83,107,255,0.35)]">
                          <span className="-rotate-45 text-[18px] font-black text-white">
                            AI
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mockup cards */}
                  <div className="absolute bottom-5 left-7 right-7 grid grid-cols-4 gap-2">
                    {["Strategy", "Design", "Development", "AI"].map((item) => (
                      <div
                        key={item}
                        className="rounded-md border border-black/5 p-2 shadow-sm"
                      >
                        <div className="mx-auto mb-1 h-3 w-3 rounded bg-[#6378FF]/10" />
                        <div className="text-center text-[5px] font-semibold text-black/50">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="mx-auto h-4 w-[108%] rounded-b-[50%] bg-gradient-to-b from-[#38435A] to-[#161C29] shadow-[0_15px_30px_rgba(0,0,0,0.5)]" />
          </div>

          {/* =====================================================
              PHONE
          ====================================================== */}

          <div className="absolute right-[2%] top-[39%] z-30 w-[185px] rotate-[7deg]">
            <div className="rounded-[27px] border-[5px] border-[#252D3F] bg-[#0D1220] p-[4px] shadow-[0_25px_45px_rgba(0,0,0,0.5),0_0_35px_rgba(76,104,255,0.15)]">
              <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#F5F7FF] to-[#E8EDFF]">
                {/* Phone top */}
                <div className="flex h-6 items-center justify-center">
                  <div className="h-1.5 w-12 rounded-full bg-black/15" />
                </div>

                <div className="px-4 pb-5">
                  <div className="mt-5 text-[7px] font-semibold text-[#6577FF]">
                    CROSSORD
                  </div>

                  <div className="mt-2 text-[19px] font-bold leading-[0.95] tracking-[-0.05em] text-[#111625]">
                    Smarter
                    <br />
                    Solutions.
                    <br />
                    Brighter
                    <br />
                    Tomorrow.
                  </div>

                  <div className="mt-3 h-1.5 w-full rounded-full bg-black/5" />
                  <div className="mt-1.5 h-1.5 w-[75%] rounded-full bg-black/5" />

                  <div className="mt-5 rounded-lg bg-[#536BFF] px-3 py-2 text-center text-[7px] font-semibold text-white">
                    Let&apos;s Talk →
                  </div>

                  {/* mini chart */}
                  <div className="mt-6 rounded-lg bg-white p-3 shadow-sm">
                    <div className="mb-3 text-[6px] font-semibold text-black/40">
                      Performance
                    </div>

                    <div className="flex h-20 items-end justify-between gap-1">
                      {[25, 42, 34, 60, 48, 78, 92].map((height, index) => (
                        <div
                          key={index}
                          className="w-full rounded-t bg-[#6077FF]"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative nodes */}
          <div className="absolute left-[28%] top-[24%] h-2 w-2 rounded-full bg-[#6C80FF] shadow-[0_0_18px_5px_rgba(108,128,255,0.45)]" />

          <div className="absolute right-[22%] top-[15%] h-1.5 w-1.5 rounded-full bg-[#52C7FF] shadow-[0_0_15px_5px_rgba(82,199,255,0.4)]" />

          <div className="absolute right-[15%] bottom-[24%] h-2 w-2 rounded-full bg-[#7A6AFF] shadow-[0_0_18px_5px_rgba(122,106,255,0.45)]" />
        </div>

        {/* =======================================================
            MOBILE VISUAL
        ======================================================== */}

        <div className="relative mx-auto h-[400px] w-full max-w-[500px] lg:hidden">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#315DFF]/10 blur-[70px]" />

          {/* Laptop simplified */}
          <div className="absolute left-1/2 top-[46%] z-10 w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-[-3deg]">
            <div className="rounded-xl border-4 border-[#20283A] bg-[#101522] p-1 shadow-2xl">
              <div className="overflow-hidden rounded-md bg-white">
                <div className="bg-[#F4F6FB] px-3 py-2">
                  <div className="h-2 w-24 rounded-full bg-black/10" />
                </div>

                <div className="min-h-[190px] bg-gradient-to-br from-[#F9FAFF] to-[#E8EDFF] p-5">
                  <div className="text-[7px] font-bold tracking-[0.15em] text-[#6077FF]">
                    DIGITAL EXPERIENCE
                  </div>

                  <div className="mt-2 text-[27px] font-bold leading-[0.95] text-[#111625]">
                    Turn Ideas
                    <br />
                    Into Products.
                  </div>

                  <div className="mt-4 h-7 w-24 rounded bg-[#536BFF]" />
                </div>
              </div>
            </div>

            <div className="mx-auto h-3 w-[105%] rounded-b-full bg-[#252E42]" />
          </div>

          {/* Phone */}
          <div className="absolute right-[2%] top-[18%] z-20 w-[105px] rotate-[7deg]">
            <div className="rounded-[22px] border-4 border-[#252D3F] bg-[#0D1220] p-1 shadow-2xl">
              <div className="overflow-hidden rounded-[16px] bg-[#F1F4FF] p-3">
                <div className="mx-auto h-1 w-8 rounded bg-black/15" />

                <div className="mt-5 text-[7px] font-bold text-[#6277FF]">
                  CROSSORD
                </div>

                <div className="mt-2 text-[15px] font-bold leading-none text-[#111625]">
                  Smarter
                  <br />
                  Solutions.
                </div>

                <div className="mt-3 h-5 rounded bg-[#536BFF]" />

                <div className="mt-4 h-20 rounded-lg bg-white shadow-sm" />
              </div>
            </div>
          </div>

          {/* AI badge */}
          <div className="absolute left-[5%] top-[15%] z-30 flex items-center gap-2 rounded-full border border-[#6077FF]/30 bg-[#10172B]/90 px-3 py-2 backdrop-blur-xl">
            <BrainCircuit className="h-3.5 w-3.5 text-[#7386FF]" />
            <span className="text-[9px] font-semibold">AI Solutions</span>
          </div>

          <div className="absolute bottom-[5%] left-[7%] z-30 flex items-center gap-2 rounded-full border border-[#6077FF]/30 bg-[#10172B]/90 px-3 py-2 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-[#7386FF]" />
            <span className="text-[9px] font-semibold">
              Intelligent Systems
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(8px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(9px);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
