import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/app/Components/hero";
import TrustedBy from "@/app/Components/trusted-by";
import Services from "@/app/Components/services";
import FeaturedWork from "@/app/Components/featuredWork";
import Process from "@/app/Components/process";
import AISolutions from "@/app/Components/aiSolutions";
import Testimonials from "@/app/Components/testimonials";
import Blog from "@/app/Components/blog";
import CTA from "@/app/Components/cta";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedWork />
      <Process />
      <AISolutions />
      <Testimonials />
      <Blog />
      <CTA />
    </main>
  );
}
