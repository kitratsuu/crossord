import { ArrowRight } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";

export default function CTA() {
    return (
        <section className="border-t">
            <div className="container mx-auto px-6 py-24">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <Badge
                            variant="outline"
                            className="mb-4 text-[10px] tracking-[0.18em] uppercase font-semibold border-primary/40 text-primary"
                        >
                            Ready to Build the Future?
                        </Badge>
                        <h2 className="font-extrabold leading-[1.05] text-foreground" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}>
                            Let&apos;s Create Something
                            <br />
                            <span className="text-primary">Extraordinary Together.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6 lg:items-end lg:text-right">
                        <p className="text-muted-foreground max-w-xs">
                            Have a project in mind? Let&apos;s turn your ideas into powerful
                            digital solutions.
                        </p>
                        <Button size="lg" className="gap-2 font-semibold w-fit">
                            Get In Touch
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}