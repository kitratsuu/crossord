import {
  ArrowRight,
  Bot,
  Globe,
  Compass,
  Clock,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

const posts = [
  {
    tag: "AI",
    icon: Bot,
    title: "How AI is Transforming Business Automation",
    excerpt:
      "Discover how practical AI systems are helping businesses automate repetitive work, improve decisions, and unlock new operational efficiency.",
    date: "Sep 4, 2026",
    readTime: "5 min read",
    href: "/blog/ai-transforming-business-automation",
  },
  {
    tag: "Web Development",
    icon: Globe,
    title: "10 Essential Features for a High-Performing Website",
    excerpt:
      "The features and technical foundations that turn a website from a simple online presence into a powerful business asset.",
    date: "Aug 28, 2026",
    readTime: "4 min read",
    href: "/blog/essential-features-high-performing-website",
  },
  {
    tag: "Strategy",
    icon: Compass,
    title: "Turning Ideas Into Scalable Digital Products",
    excerpt:
      "A practical look at transforming an early-stage idea into a digital product designed for real users and long-term growth.",
    date: "Aug 20, 2026",
    readTime: "6 min read",
    href: "/blog/turning-ideas-into-scalable-products",
  },
];

function ArticleVisual({
  icon: Icon,
  type,
}: {
  icon: typeof Bot;
  type: number;
}) {
  return (
    <div className="relative h-full overflow-hidden bg-[#EEF1FF]">
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#6579FF]/15 blur-[70px]" />

      <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#8B6CFF]/10 blur-[60px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(83,107,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(83,107,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main editorial visual */}
      <div className="absolute left-1/2 top-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-white/80 bg-white/70 shadow-[0_25px_60px_rgba(45,61,130,0.12)] backdrop-blur-xl transition-all duration-700 group-hover:-translate-x-1/2 group-hover:-translate-y-[54%] group-hover:rotate-2">
        <div className="absolute inset-3 rounded-[22px] border border-[#536BFF]/10" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#536BFF] to-[#806AFF] shadow-[0_12px_30px_rgba(83,107,255,0.25)]">
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>

      {/* Decorative cards */}
      {type === 0 && (
        <>
          <div className="absolute left-[10%] top-[20%] rounded-lg border border-white bg-white/80 px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[8px] font-bold text-slate-500">
                AI ACTIVE
              </span>
            </div>
          </div>

          <div className="absolute bottom-[18%] right-[10%] rounded-lg border border-white bg-white/80 px-3 py-2 shadow-lg">
            <span className="text-[8px] font-bold text-slate-500">
              +42% EFFICIENCY
            </span>
          </div>
        </>
      )}

      {type === 1 && (
        <>
          <div className="absolute left-[9%] bottom-[17%] rounded-lg border border-white bg-white/80 p-3 shadow-lg">
            <div className="mb-2 h-1.5 w-14 rounded-full bg-slate-200" />
            <div className="h-1.5 w-10 rounded-full bg-[#6579FF]/40" />
          </div>

          <div className="absolute right-[10%] top-[18%] rounded-lg border border-white bg-white/80 p-3 shadow-lg">
            <Globe className="h-4 w-4 text-[#6579FF]" />
          </div>
        </>
      )}

      {type === 2 && (
        <>
          <div className="absolute left-[10%] top-[20%] rounded-lg border border-white bg-white/80 p-3 shadow-lg">
            <Compass className="h-4 w-4 text-[#6579FF]" />
          </div>

          <div className="absolute bottom-[17%] right-[9%] rounded-lg border border-white bg-white/80 px-3 py-2 shadow-lg">
            <span className="text-[8px] font-bold text-slate-500">
              SCALE → GROW
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function Blog() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FC]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#536BFF]/[0.035] blur-[120px]" />

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
                INSIGHTS
              </p>
            </div>

            <h2 className="max-w-[680px] text-[40px] font-bold leading-[1.04] tracking-[-0.04em] text-slate-900 sm:text-[48px] lg:text-[52px]">
              Ideas, Insights &
              <br />
              <span className="text-[#6478FF]">What&apos;s Next.</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[12px] font-semibold text-[#536BFF]"
          >
            View All Insights
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#536BFF]/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        {/* =======================================================
            ARTICLES
        ======================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
          {/* =====================================================
              FEATURED ARTICLE
          ====================================================== */}

          <Link
            href={posts[0].href}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#B4BEFF] hover:shadow-[0_25px_60px_rgba(31,45,90,0.08)]"
          >
            {/* Visual */}
            <div className="relative h-[270px] overflow-hidden sm:h-[310px]">
              <ArticleVisual icon={posts[0].icon} type={0} />

              {/* Featured badge */}
              <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[9px] font-bold tracking-[0.12em] text-[#536BFF] shadow-sm backdrop-blur-md">
                FEATURED
              </div>

              {/* Category */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
                <Bot className="h-3 w-3 text-[#536BFF]" />

                <span className="text-[9px] font-semibold text-slate-600">
                  {posts[0].tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 sm:p-8">
              <div className="mb-4 flex items-center gap-4 text-[9px] font-medium text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3 w-3" />
                  {posts[0].date}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {posts[0].readTime}
                </span>
              </div>

              <h3 className="max-w-[700px] text-[24px] font-bold leading-[1.2] tracking-[-0.025em] text-slate-900 sm:text-[28px]">
                {posts[0].title}
              </h3>

              <p className="mt-4 max-w-[650px] text-[13px] leading-[1.75] text-slate-500">
                {posts[0].excerpt}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-[11px] font-semibold text-slate-500 transition-colors group-hover:text-[#536BFF]">
                  Read Article
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#536BFF] group-hover:bg-[#536BFF] group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* =====================================================
              SECONDARY ARTICLES
          ====================================================== */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {posts
              .slice(1)
              .map(
                (
                  { tag, icon: Icon, title, excerpt, date, readTime, href },
                  index,
                ) => (
                  <Link
                    key={title}
                    href={href}
                    className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-400 hover:-translate-y-1 hover:border-[#B4BEFF] hover:shadow-[0_20px_45px_rgba(31,45,90,0.07)] sm:grid-cols-[150px_1fr] lg:grid-cols-[145px_1fr]"
                  >
                    {/* Mini visual */}
                    <div className="relative h-[150px] sm:h-full">
                      <ArticleVisual icon={Icon} type={index + 1} />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-[#536BFF]/10 px-2.5 py-1 text-[8px] font-bold text-[#536BFF]">
                          {tag}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[14px] font-bold leading-[1.35] text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-[10px] leading-[1.6] text-slate-500">
                        {excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[8px] text-slate-400">
                          {date} · {readTime}
                        </span>

                        <ArrowRight className="h-3 w-3 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#536BFF]" />
                      </div>
                    </div>
                  </Link>
                ),
              )}
          </div>
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================== */}

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-400">
            Practical ideas for building, scaling, and improving digital
            products.
          </p>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold text-slate-700"
          >
            Explore the full library
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-[#536BFF] group-hover:text-white">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
