import { Button } from "@repo/ui/components/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl space-y-6">
          <span className="rounded-full border px-4 py-1 text-sm">
            🚀 Launch Faster
          </span>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Build beautiful products
            <span className="block text-muted-foreground">
              without starting from scratch
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A modern platform to help teams design, build, and scale web
            applications with speed and confidence.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="text-muted-foreground mt-3">
              Powerful features designed for modern teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fast Development",
                description:
                  "Ship products quickly with reusable components and modern tooling.",
              },
              {
                title: "Scalable Architecture",
                description:
                  "Built to grow with your team and business requirements.",
              },
              {
                title: "Beautiful UI",
                description:
                  "Craft exceptional experiences with a clean design system.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border p-6">
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold">10k+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">99.9%</h3>
              <p className="text-muted-foreground">Uptime</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border p-12">
            <h2 className="text-4xl font-bold">
              Ready to build something amazing?
            </h2>

            <p className="text-muted-foreground mt-4">
              Start your journey today and turn ideas into products.
            </p>

            <Button size="lg" className="mt-8">
              Start Free
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
