import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
    { title: "Discipline", description: "We follow a defined process, not guesswork, on every project." },
    { title: "Craft", description: "Clean, maintainable code — not just code that ships." },
    { title: "Partnership", description: "We work with you, not just for you, from discovery to launch." },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <section className="border-b">
                <div className="container mx-auto px-6 pt-32 pb-20 max-w-3xl">
                    <Badge
                        variant="outline"
                        className="mb-6 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                    >
                        About Us
                    </Badge>
                    <h1 className="text-4xl font-bold mb-6">
                        Discipline in code. Excellence in solutions.
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Crossord builds intelligent websites, powerful applications, and
                        AI-driven solutions for startups and enterprises ready to shape
                        the future. We're a small team that treats every client's product
                        like our own.
                    </p>
                </div>
            </section>

            <section className="border-b">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold mb-10">What we stand for</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.title} className="rounded-lg border p-6">
                                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl font-bold mb-4">Let's build something together.</h2>
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