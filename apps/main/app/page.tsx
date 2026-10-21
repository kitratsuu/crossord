import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/app/Components/hero";
import TechStack from "@/app/Components/tech-stack";
import Services from "@/app/Components/services";
import SolutionsWeBuild from "@/app/Components/solutionsWeBuild";
import Process from "@/app/Components/process";
import AISolutions from "@/app/Components/aiSolutions";
import Testimonials from "@/app/Components/testimonials";
import Blog from "@/app/Components/blog";
import CTA from "@/app/Components/cta";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <Services />
      <SolutionsWeBuild />
      <Process />
      <AISolutions />
      <Blog />
      <CTA />
    </main>
  );
}
