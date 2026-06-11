import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";

import Stats from "@/components/stats/Stats";
import About from "@/components/about/About";
import Trust from "@/components/trust/trust";
import Features from "@/components/features/features";
import Contact from "@/components/contact/Contact";
import Cta from "@/components/cta/cta";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Trust />

      <Features />

      <Contact />

      <Cta />

      <Footer />
    </main>
  );
}