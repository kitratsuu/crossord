import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { services } from "@/app/services/data";

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params:  Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    const Icon = service.icon;

    return (
        <main className="min-h-screen">
            <section className="border-b">
                <div className="container mx-auto px-6 pt-32 pb-20">
                    <Badge
                        variant="outline"
                        className="mb-6 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                    >
                        Services
                    </Badge>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 text-primary">
                            <Icon className="h-6 w-6" />
                        </div>
                        <h1 className="text-4xl font-bold">{service.title}</h1>
                    </div>

                    <p className="text-muted-foreground max-w-2xl text-lg">
                        {service.description}
                    </p>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-2xl font-bold mb-8">What's included</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {service.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-3 rounded-lg border p-4">
                                <Check className="h-4 w-4 mt-1 text-primary shrink-0" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to talk about your project?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Let's figure out what {service.title.toLowerCase()} looks like for your business.
                    </p>
                    <Button asChild size="lg" className="gap-2">
                        <Link href="/contact">
                            Get In Touch <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}