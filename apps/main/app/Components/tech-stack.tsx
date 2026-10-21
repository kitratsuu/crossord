import {
  Code2,
  Cloud,
  ShoppingBag,
  LayoutTemplate,
  Workflow,
  Clapperboard,
  Megaphone,
} from "lucide-react";

const technologies = [
  { name: "MERN Stack", icon: Code2 },
  { name: "AWS", icon: Cloud },
  { name: "Shopify", icon: ShoppingBag },
  { name: "Wix", icon: LayoutTemplate },
  { name: "n8n Automation", icon: Workflow },
  { name: "Video & Graphics", icon: Clapperboard },
  { name: "Digital Marketing", icon: Megaphone },
];

export default function TechStack() {
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
              TECHNOLOGIES &amp; PLATFORMS WE WORK WITH
            </p>
          </div>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-white/10 lg:block" />

          {/* Technologies */}
          <ul className="flex w-full flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:justify-between">
            {technologies.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="group flex items-center gap-2.5 text-white/35 transition-all duration-300 hover:text-white/80"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] transition-all duration-300 group-hover:border-[#6378FF]/30 group-hover:bg-[#6378FF]/10">
                  <Icon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-[#7183FF]"
                  />
                </div>

                <span className="whitespace-nowrap text-[11px] font-semibold tracking-[-0.01em]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
