const companies = ["TechNova", "ElevateAI", "DataPeak", "Nexora", "CloudWave", "Flowbase"];

export default function TrustedBy() {
    return (
        <section className="border-t bg-muted/30">
            <div className="container mx-auto px-6 py-12">
                <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-8">
                    Trusted by Innovative Companies
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                    {companies.map((name) => (
                        <span
                            key={name}
                            className="text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
                        >
              {name}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}