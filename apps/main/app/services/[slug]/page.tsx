import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { processSteps, services } from "@/app/services/data";
import { siteConfig } from "@/lib/site";
import { posts } from "@/app/blog/data";

// Blog tags most relevant to each service, for the "related reading" links.
const relatedTags: Record<string, string[]> = {
    "web-development": ["Web Development"],
    "ecommerce-development": ["Web Development"],
    "ui-ux-design": ["Web Development", "Strategy"],
    "seo-marketing": ["Web Development"],
    "custom-software": ["Strategy"],
    "mobile-app-development": ["Strategy"],
    "ai-solutions": ["AI"],
    "api-development": ["AI", "Strategy"],
};

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: service.title,
        description: service.description,
        alternates: { canonical: `/services/${slug}` },
        openGraph: { title: `${service.title} | Crossord`, description: service.description },
    };
}

export default async function ServicePage({ params }: { params:  Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    const Icon = service.icon;
    const related = services.filter((s) => s.slug !== slug).slice(0, 3);
    const tags = relatedTags[slug] ?? [];
    const readingList = posts.filter((p) => tags.includes(p.tag)).slice(0, 2);
    const url = `${siteConfig.url}/services/${slug}`;

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            url,
            provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: service.title,
                itemListElement: service.features.map((f) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: f.title, description: f.description },
                })),
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
                { "@type": "ListItem", position: 3, name: service.title, item: url },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#070B17] text-white">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
                <div className="container relative mx-auto px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
                    <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/40">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/services" className="hover:text-white">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white/70">{service.title}</span>
                    </nav>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                            <Icon className="h-6 w-6" />
                        </div>
                        <Badge
                            variant="outline"
                            className="text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                        >
                            Services
                        </Badge>
                    </div>

                    <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                        {service.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
                        {service.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <Button asChild size="lg" className="gap-2 font-semibold">
                            <Link href={`/contact?service=${service.slug}`}>
                                Start Your Project <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                        >
                            <Link href="#faq">Read FAQs</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="bg-white">
                <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:py-28">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-primary">OVERVIEW</p>
                        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-4xl">
                            {service.shortDescription}
                        </h2>
                        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                            {service.overview.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-2xl border border-slate-200 bg-[#F7F8FC] p-7">
                            <h3 className="font-semibold text-slate-900">What you can expect</h3>
                            <ul className="mt-5 space-y-4">
                                {service.outcomes.map((outcome) => (
                                    <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-600">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                        {outcome}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-slate-200 p-7">
                            <h3 className="font-semibold text-slate-900">Ideal for</h3>
                            <ul className="mt-5 space-y-3">
                                {service.idealFor.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT'S INCLUDED */}
            <section className="bg-[#F4F5FA]">
                <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary">WHAT&apos;S INCLUDED</p>
                    <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-4xl">
                        Everything you need, delivered by one team.
                    </h2>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {service.features.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(47,84,235,0.35)]"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Check className="h-4 w-4" />
                                </div>
                                <h3 className="mt-5 font-semibold text-slate-900">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-20 lg:px-8 lg:py-28">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary">HOW WE WORK</p>
                    <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-4xl">
                        A clear process from idea to launch.
                    </h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {processSteps.map((step, i) => (
                            <div key={step.title} className="border-t-2 border-primary/20 pt-6">
                                <span className="text-sm font-bold text-primary">0{i + 1}</span>
                                <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGIES */}
            <section className="bg-[#070B17] text-white">
                <div className="container mx-auto px-6 py-20 lg:px-8">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary">TECHNOLOGIES</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight">Tools we use</h2>
                    <ul className="mt-10 flex flex-wrap gap-3">
                        {service.technologies.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-primary/50 hover:text-white"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="bg-white scroll-mt-24">
                <div className="container mx-auto max-w-3xl px-6 py-20 lg:py-28">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary">FAQ</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                        Frequently asked questions
                    </h2>
                    <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                        {service.faqs.map((faq) => (
                            <details key={faq.q} className="group py-6">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-slate-900">
                                    {faq.q}
                                    <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED READING */}
            {readingList.length > 0 && (
                <section className="bg-white">
                    <div className="container mx-auto max-w-3xl px-6 pb-20">
                        <h2 className="text-2xl font-bold text-slate-900">Related reading</h2>
                        <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                            {readingList.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex items-center justify-between gap-6 py-5"
                                >
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{post.tag}</p>
                                        <p className="mt-1 font-semibold text-slate-900 group-hover:text-primary">{post.title}</p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* RELATED */}
            <section className="bg-[#F4F5FA]">
                <div className="container mx-auto px-6 py-20 lg:px-8">
                    <h2 className="text-2xl font-bold text-slate-900">Related services</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {related.map((s) => {
                            const RelatedIcon = s.icon;
                            return (
                                <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-primary/40"
                                >
                                    <RelatedIcon className="h-5 w-5 text-primary" />
                                    <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{s.shortDescription}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                                        Learn more
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-[#070B17] text-white">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[130px]" />
                <div className="container relative mx-auto px-6 py-24 text-center">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready to talk about your project?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-white/55">
                        Tell us what you&apos;re building and we&apos;ll get back to you within one business day with next steps.
                    </p>
                    <Button asChild size="lg" className="mt-9 gap-2 font-semibold">
                        <Link href={`/contact?service=${service.slug}`}>
                            Get In Touch <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
