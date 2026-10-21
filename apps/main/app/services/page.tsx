import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { services } from "@/app/services/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, UI/UX design, e-commerce, custom software, AI solutions, cloud & DevOps, APIs, SEO and maintenance from Crossord.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b">
        <div className="container mx-auto px-6 pt-32 pb-16">
          <Badge
            variant="outline"
            className="mb-6 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
          >
            Services
          </Badge>
          <h1 className="text-4xl font-bold">What We Build</h1>
          <p className="text-muted-foreground max-w-2xl text-lg mt-4">
            End-to-end digital services — from strategy and design to
            engineering, launch and ongoing support.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
