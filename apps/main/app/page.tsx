import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const services = [
  {
    title: "Custom Web Development",
    description:
        "Scalable web applications built with modern technologies like Next.js, React, and Node.js.",
    image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    featured: true,
  },
  {
    title: "Mobile App Development",
    description:
        "Native and cross-platform mobile applications for iOS and Android.",
    image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
        "Cloud infrastructure, CI/CD pipelines, monitoring, and scalable deployments.",
    image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  },
  {
    title: "AI & Automation",
    description:
        "AI-powered solutions, workflow automation, and business process optimization.",
    image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="container min-h-screen mx-auto flex flex-col justify-center items-center px-6 py-24">
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
            <h2 className="text-4xl font-bold">Our Services</h2>

            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
              We help businesses design, build, and scale digital products through
              modern software development and technology consulting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
                <Card
                    key={service.title}
                    className="group overflow-hidden pt-0 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {service.featured && (
                        <Badge className="absolute left-4 top-4 z-20">
                          Featured
                        </Badge>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>

                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
            ))}
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
