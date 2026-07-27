import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/app/Components/hero";
import TrustedBy from "@/app/Components/trusted-by";
import Services from "@/app/Components/services";
import Process from "@/app/Components/process";
import CTA from "@/app/Components/cta";

export default function Page() {
  return (
      <main className="min-h-screen">
        <Header />
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <CTA />
        <Footer />
      </main>
  );
}