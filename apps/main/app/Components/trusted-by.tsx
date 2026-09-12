import { Diamond, Hexagon, Feather, Cloud, Workflow, X } from "lucide-react";

const companies = [
  {
    name: "TechNova",
    icon: Diamond,
  },
  {
    name: "ElevateAI",
    icon: Hexagon,
  },
  {
    name: "DataPeak",
    icon: Feather,
  },
  {
    name: "Nexora",
    icon: X,
  },
  {
    name: "CloudWave",
    icon: Cloud,
  },
  {
    name: "Flowbase",
    icon: Workflow,
  },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#080D19]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[700px] -translate-x-1/2 rounded-full bg-[#4C68FF]/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-8 lg:px-10 lg:py-9">
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:gap-12">
          {/* Label */}
          <div className="flex shrink-0 items-center gap-3">
            <span className="h-px w-7 bg-[#526DFF]" />

            <p className="text-[9px] font-bold tracking-[0.25em] text-[#7183FF]">
              TRUSTED BY INNOVATIVE BRANDS
            </p>
          </div>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-white/10 lg:block" />

          {/* Companies */}
          <div className="grid w-full flex-1 grid-cols-2 items-center gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-0">
            {companies.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex items-center justify-center gap-2.5 text-white/35 transition-all duration-300 hover:text-white/80"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#6378FF]/30 group-hover:bg-[#6378FF]/10">
                  <Icon className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-[#7183FF]" />
                </div>

                <span className="text-[11px] font-semibold tracking-[-0.01em]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
