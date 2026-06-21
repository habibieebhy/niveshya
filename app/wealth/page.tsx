import Navbar from "@/components/ui/navbar";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ServiceSwitcher from "@/components/shared/ServiceSwitcher";
import WealthHero from "@/components/wealth/WealthHero";
import InvestmentPlans from "@/components/wealth/InvestmentPlans";
import InsuranceServices from "@/components/wealth/InsuranceServices";
import GoalPlanning from "@/components/wealth/GoalPlanning";
import AdvisoryTrust from "@/components/wealth/AdvisoryTrust";
import WealthCTA from "@/components/wealth/WealthCTA";
import TrustStrip from "@/components/wealth/TrustStrip";
import WhoWeHelp from "@/components/wealth/WhoWeHelp";
import ProblemSection from "@/components/wealth/ProblemSection";

export default function WealthPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServiceSwitcher />
      
      <Navbar />

      <WealthHero />

      <TrustStrip />

      <WhoWeHelp />

      <ProblemSection />

      <InvestmentPlans />

      <InsuranceServices />

      <GoalPlanning />

      <AdvisoryTrust />

      <Contact />

      <Footer />
    </main>
  );
}