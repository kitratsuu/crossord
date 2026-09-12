import { Quote, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Crossord didn't just build what we asked for. They helped us rethink the entire workflow and delivered a solution that truly transformed our business.",
    name: "Sarah Mitchell",
    role: "CEO, TechNova",
    initials: "SM",
  },
  {
    quote:
      "Professional, responsive and highly skilled. The team delivered our project ahead of schedule and exceeded expectations.",
    name: "James Carter",
    role: "Founder, ElevateAI",
    initials: "JC",
  },
  {
    quote:
      "Their expertise in AI and automation helped us save months of manual work. Highly recommended!",
    name: "Priya Desai",
    role: "CTO, DataPeak",
    initials: "PD",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#536BFF]/[0.035] blur-[110px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(30,41,59,0.07) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#6077FF]" />

              <p className="text-[10px] font-bold tracking-[0.26em] text-[#6277FF]">
                CLIENT STORIES
              </p>
            </div>

            <h2 className="max-w-[650px] text-[40px] font-bold leading-[1.04] tracking-[-0.04em] text-slate-900 sm:text-[48px] lg:text-[52px]">
              Built With Purpose.
              <br />
              <span className="text-[#6478FF]">Trusted By Clients.</span>
            </h2>
          </div>

          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#536BFF]"
          >
            View All Testimonials
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#536BFF]/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        {/* =======================================================
            FEATURED TESTIMONIAL
        ======================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
          {/* Main testimonial */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F7F8FC] p-7 sm:p-9 lg:p-11">
            {/* Decorative quote */}
            <div className="pointer-events-none absolute -right-5 -top-8 text-[180px] font-serif font-bold leading-none text-[#536BFF]/[0.045]">
              “
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="mb-7 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-3.5 w-3.5 fill-[#536BFF] text-[#536BFF]"
                  />
                ))}

                <span className="ml-2 text-[10px] font-semibold text-slate-400">
                  5.0
                </span>
              </div>

              <Quote className="mb-6 h-8 w-8 text-[#536BFF]/30" />

              <blockquote className="max-w-[800px] text-[22px] font-semibold leading-[1.45] tracking-[-0.02em] text-slate-900 sm:text-[26px] lg:text-[29px]">
                &quot;{testimonials[0].quote}&quot;
              </blockquote>

              {/* Client */}
              <div className="mt-9 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#536BFF] to-[#806AFF] text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(83,107,255,0.2)]">
                    {testimonials[0].initials}
                  </div>

                  <div>
                    <p className="text-[13px] font-bold text-slate-900">
                      {testimonials[0].name}
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-1.5 sm:flex">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />

                  <span className="text-[9px] font-semibold text-slate-400">
                    VERIFIED CLIENT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SIDE TESTIMONIALS
          ====================================================== */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {testimonials.slice(1).map(({ quote, name, role, initials }) => (
              <div
                key={name}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#AEBBFF] hover:shadow-[0_15px_40px_rgba(31,45,90,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-5 w-5 text-[#536BFF]/30" />

                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-2.5 w-2.5 fill-[#536BFF] text-[#536BFF]"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-[13px] leading-[1.7] text-slate-500">
                  &quot;{quote}&quot;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#536BFF]/10 text-[9px] font-bold text-[#536BFF]">
                    {initials}
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      {name}
                    </p>

                    <p className="mt-0.5 text-[9px] text-slate-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            TRUST BAR
        ======================================================== */}

        <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {testimonials.map(({ initials }) => (
                <div
                  key={initials}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#536BFF]/10 text-[7px] font-bold text-[#536BFF]"
                >
                  {initials}
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-400">
              Trusted by businesses building for what&apos;s next.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold text-slate-700"
          >
            Want results like these?
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#536BFF] group-hover:text-white">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
