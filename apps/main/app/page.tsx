import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            IT Solutions That Scale With Your Business
          </h1>

          <p className="text-muted-foreground mt-6 text-lg">
            Placeholder text for your company description. Explain what your
            company does and the value you provide.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t">
        <div className="container mx-auto px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-3">
              Replace these cards with your actual services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-muted-foreground mt-2">
                Service description placeholder.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Mobile Development</h3>
              <p className="text-muted-foreground mt-2">
                Service description placeholder.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="font-semibold">Cloud Solutions</h3>
              <p className="text-muted-foreground mt-2">
                Service description placeholder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="text-muted-foreground mt-4">
              Placeholder content about your company, mission, experience, and
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t">
        <div className="container mx-auto px-6 py-20">
          <div className="grid gap-6 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-muted-foreground">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-muted-foreground">Years</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t">
        <div className="container mx-auto px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">Testimonials</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <p>
                Client testimonial placeholder. Replace with actual feedback.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <p>
                Client testimonial placeholder. Replace with actual feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Start Your Next Project?
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Placeholder call-to-action text.
          </p>

          <Button className="mt-8">Contact Us</Button>
        </div>
      </section>
    </main>
  );
}
