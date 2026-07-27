import {
  ArrowRight,
  Play,
  LayoutGrid,
  Heart,
  User,
  TrendingUp,
} from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";

const stats = [
  { icon: LayoutGrid, value: "50+", label: "Projects\nDelivered" },
  { icon: Heart, value: "20+", label: "Happy Clients" },
  { icon: User, value: "4+", label: "Years\nExperience" },
  { icon: TrendingUp, value: "99%", label: "Client\nSatisfaction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col">
      {/* Light mode image — hidden in dark mode */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block dark:hidden"
        style={{ backgroundImage: "url('/assets/Home/light_hero.png')" }}
      />

      {/* Dark mode image — hidden in light mode */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden dark:block"
        style={{ backgroundImage: "url('/assets/Home/dark_hero.png')" }}
      />

      {/* Gradient mask — always matches current theme background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col flex-1 px-6 lg:px-8 pt-24 pb-0">
        {/* ── Main copy ── */}
        <div className="flex-1 flex flex-col justify-center max-w-[600px]">
          {/* Eyebrow badge */}
          <Badge
            variant="outline"
            className="w-fit mb-8 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
          >
            Discipline in code. Excellence in solutions.
          </Badge>

          {/* Headline */}
          <h1
            className="font-extrabold leading-[1.05] mb-6 text-foreground"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            We Build Digital
            <br />
            Solutions That
            <br />
            Drive <span className="text-primary">Real</span>
            <br />
            <span className="text-primary">Impact.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-[400px]">
            Crossord builds intelligent websites, powerful applications, and
            AI-driven solutions for startups and enterprises ready to shape the
            future.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <Button size="lg" className="gap-2 font-semibold">
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="gap-3 font-medium group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover:border-primary transition-colors bg-muted">
                <Play className="w-3 h-3 fill-foreground" />
              </span>
              View Our Work
            </Button>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="relative z-10 mt-10 pb-12 pt-10  grid grid-cols-2 md:grid-cols-4 gap-y-8 justify-items-start md:justify-items-center items-center border-t border-border">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-start gap-3">
              <Icon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="text-foreground text-xl font-bold leading-none mb-1">
                  {value}
                </p>
                <p className="text-muted-foreground text-xs leading-snug whitespace-pre-line">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
