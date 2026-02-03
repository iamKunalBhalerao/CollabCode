import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
