import { Lightbulb, PenTool, Code2, Zap, ArrowRight } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";

const steps = [
    { icon: Lightbulb, number: "01", title: "Discover", description: "We understand your goals, challenges, and vision." },
    { icon: PenTool, number: "02", title: "Design", description: "We craft intuitive designs and solid architectures." },
    { icon: Code2, number: "03", title: "Develop", description: "We build, test, and refine with clean, scalable code." },
    { icon: Zap, number: "04", title: "Deploy", description: "We launch, monitor, and optimize for growth." },
];

export default function Process() {
    return (
        <section className="border-t">
            <div className="container mx-auto px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start">
                    <div>
                        <Badge
                            variant="outline"
                            className="mb-4 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                        >
                            Our Approach
                        </Badge>
                        <h2 className="text-4xl font-bold mb-4">
                            A Proven Process For Success
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-md">
                            We follow a disciplined approach to turn ideas into impactful
                            digital products.
                        </p>
                        <Button variant="outline" className="gap-2">
                            Learn More About Us
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
                        {steps.map(({ icon: Icon, number, title, description }, i) => (
                            <div key={number} className="flex flex-col items-center text-center">
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-border mb-4">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                                <span className="text-xs font-semibold text-primary mb-1">{number}</span>
                                <h3 className="font-semibold mb-1">{title}</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}