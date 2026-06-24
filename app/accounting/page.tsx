import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Stats from "@/components/stats/Stats";
import Features from "@/components/features/features";
import Industries from "@/components/industries/industries";
import About from "@/components/about/About";
import Trust from "@/components/trust/trust";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <Industries />

      <About />

      <Trust />

      <Contact />

      <Footer />

    </main>
  );
}