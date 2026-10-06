import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Fragrances } from "@/components/Fragrances";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Kits } from "@/components/Kits";
import { Nav } from "@/components/Nav";
import { PerfumeCarousel } from "@/components/PerfumeCarousel";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <PerfumeCarousel />
        <Fragrances />
        <HowItWorks />
        <Kits />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}