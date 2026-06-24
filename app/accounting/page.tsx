import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Stats from "@/components/stats/Stats";
import Features from "@/components/features/features";
import Industries from "@/components/industries/industries";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

import FloatingCTA from "@/components/shared/FloatingCTA";

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <Industries />

      <About />

      <Contact />

      <Footer />
      <FloatingCTA/>

    </main>
  );
}