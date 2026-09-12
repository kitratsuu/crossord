import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#080B16] text-white">
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================== */}

      {/* Large central glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#536BFF]/10 blur-[130px]" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[350px] w-[350px] rounded-full bg-[#806AFF]/10 blur-[110px]" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      {/* Top border glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#536BFF]/50 to-transparent" />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-24 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[900px] text-center">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#6579FF]" />

            <p className="text-[10px] font-bold tracking-[0.28em] text-[#8393FF]">
              READY TO BUILD THE FUTURE?
            </p>

            <span className="h-px w-8 bg-[#6579FF]" />
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-[850px] text-[42px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[54px] lg:text-[68px]">
            Your next big idea
            <br />
            <span className="bg-gradient-to-r from-[#7185FF] via-[#9A86FF] to-[#7185FF] bg-clip-text text-transparent">
              starts here.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-[590px] text-[14px] leading-[1.8] text-white/50 sm:text-[15px]">
            Have a challenge to solve, a product to build, or an idea ready to
            become reality? Let&apos;s create something meaningful together.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#6478FF] px-7 text-[12px] font-bold text-white shadow-[0_12px_35px_rgba(83,107,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7184FF] hover:shadow-[0_16px_45px_rgba(83,107,255,0.35)]"
            >
              Start a Conversation
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 text-[12px] font-semibold text-white/75 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* =======================================================
            TRUST / MICRO BENEFITS
        ======================================================== */}

        <div className="mx-auto mt-16 grid max-w-[850px] border-y border-white/[0.08] sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3 px-5 py-5 sm:border-r sm:border-white/[0.08]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6478FF]/10">
              <Sparkles className="h-3.5 w-3.5 text-[#8190FF]" />
            </div>

            <div className="text-left">
              <p className="text-[10px] font-bold text-white/80">
                Built Around You
              </p>
              <p className="mt-0.5 text-[8px] text-white/35">
                Solutions tailored to your goals
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-t border-white/[0.08] px-5 py-5 sm:border-t-0 sm:border-r">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6478FF]/10">
              <span className="text-[11px] font-bold text-[#8190FF]">AI</span>
            </div>

            <div className="text-left">
              <p className="text-[10px] font-bold text-white/80">
                Future Ready
              </p>
              <p className="mt-0.5 text-[8px] text-white/35">
                Technology built to evolve
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-t border-white/[0.08] px-5 py-5 sm:border-t-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6478FF]/10">
              <span className="text-[11px] font-bold text-[#8190FF]">→</span>
            </div>

            <div className="text-left">
              <p className="text-[10px] font-bold text-white/80">
                Built to Scale
              </p>
              <p className="mt-0.5 text-[8px] text-white/35">
                Designed for long-term growth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080B16] to-transparent" />
    </section>
  );
}
