import {
    Globe,
    Smartphone,
    Lightbulb,
    LayoutTemplate,
    Gamepad2,
    Cloud,
    ArrowRight,
} from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import Link from "next/link";

const services = [
    {
        icon: Globe,
        title: "Web Development",
        description: "High-performance websites and web applications tailored to your business.",
        href: "/services/web-development",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform apps that deliver seamless user experiences.",
        href: "/services/mobile-app-development",
    },
    {
        icon: Lightbulb,
        title: "AI Solutions",
        description: "Intelligent AI solutions to automate processes and unlock new value.",
        href: "/services/ai-solutions",
    },
    {
        icon: LayoutTemplate,
        title: "UI/UX Design",
        description: "Beautiful, intuitive designs that enhance engagement and drive results.",
        href: "/services/ui-ux-design",
    },
    {
        icon: Gamepad2,
        title: "Game Development",
        description: "Immersive games built with cutting-edge technology and creativity.",
        href: "/services/game-development",
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "Scalable cloud infrastructure and DevOps solutions for continuous growth.",
        href: "/services/cloud-devops",
    },
];

export default function Services() {
    return (
        <section className="border-t">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <Badge
                            variant="outline"
                            className="mb-4 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                        >
                            What We Do
                        </Badge>
                        <h2 className="text-4xl font-bold max-w-lg">
                            End-to-End Digital Solutions
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-sm">
                        From strategy and design to development and deployment, we deliver
                        solutions that are robust, scalable, and future-ready.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ icon: Icon, title, description, href }) => (
                        <div
                            key={title}
                            className="group rounded-lg border p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
                        >
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 text-primary">
                                <Icon className="h-5 w-5" />
                            </div>

                            <h3 className="font-semibold text-lg mb-2">{title}</h3>
                            <p className="text-muted-foreground text-sm mb-5">{description}</p>

                            <Link
                                href={href}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                            >
                                Learn More
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}