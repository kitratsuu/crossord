import Image from "next/image";
import { cn } from "@workspace/ui/lib/utils";

const BLUE = "#2F54EB";

// 3x3 grid: outlined corners, solid edges, blue centre.
const CELLS = [
  { x: 0, y: 0, kind: "outline" },
  { x: 1, y: 0, kind: "solid" },
  { x: 2, y: 0, kind: "outline" },
  { x: 0, y: 1, kind: "solid" },
  { x: 1, y: 1, kind: "accent" },
  { x: 2, y: 1, kind: "solid" },
  { x: 0, y: 2, kind: "outline" },
  { x: 1, y: 2, kind: "solid" },
  { x: 2, y: 2, kind: "outline" },
] as const;

export function LogoMark({
  className,
  tone = "dark",
  animated = false,
}: {
  className?: string;
  /** "light" renders the dark cells in white for dark backgrounds */
  tone?: "dark" | "light";
  animated?: boolean;
}) {
  const ink = tone === "light" ? "#FFFFFF" : "#14161C";

  return (
    <svg
      viewBox="0 0 168 168"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label="Crossord"
    >
      {CELLS.map((c, i) => {
        const x = c.x * 56 + 4;
        const y = c.y * 56 + 4;
        return (
          <rect
            key={i}
            x={c.kind === "outline" ? x + 4 : x}
            y={c.kind === "outline" ? y + 4 : y}
            width={c.kind === "outline" ? 40 : 48}
            height={c.kind === "outline" ? 40 : 48}
            rx={8}
            fill={c.kind === "accent" ? BLUE : c.kind === "solid" ? ink : "none"}
            stroke={c.kind === "outline" ? ink : "none"}
            strokeWidth={8}
            className={animated ? "logo-cell" : undefined}
            style={animated ? { animationDelay: `${(c.x + c.y) * 120}ms` } : undefined}
          />
        );
      })}
    </svg>
  );
}

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoMark tone={tone} className="h-6 w-6" />
      <Image
        src="/brand/wordmark.png"
        alt="crossord.com"
        width={371}
        height={60}
        priority
        className={cn("h-4 w-auto", tone === "dark" && "invert-[.9] hue-rotate-180")}
      />
    </span>
  );
}
