import Navbar from "@/components/ui/navbar";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import WealthHero from "@/components/wealth/WealthHero";
import InvestmentPlans from "@/components/wealth/InvestmentPlans";
import InsuranceServices from "@/components/wealth/InsuranceServices";
import GoalPlanning from "@/components/wealth/GoalPlanning";
import AdvisoryTrust from "@/components/wealth/AdvisoryTrust";
import WhoWeHelp from "@/components/wealth/WhoWeHelp";

import FloatingCTA from "@/components/shared/FloatingCTA";

export default function WealthPage() {
  return (
    <main className="min-h-screen bg-background">
      
      <Navbar />

      <WealthHero />

      <WhoWeHelp />

      <InvestmentPlans />

      <GoalPlanning />
      
      <InsuranceServices />

      <AdvisoryTrust />

      <Contact />

      <Footer />
      <FloatingCTA/>
      
    </main>
  );
}