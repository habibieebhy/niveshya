"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  TrendingUp, 
  ArrowRight,
  Building, // For Chandra Enterprises
  Leaf,     // For The Bamboo Expert
  Plane,    // For Vinayak Travels
  Wrench,   // For Call & Fix
  Rocket    // For Propello Innovations
} from "lucide-react";
import GrandHeroSlider from "./GrandHeroSlider";
import Footer from "./footer"; 

const trustedCompanies = [
  { name: "Chandra Enterprises", icon: Building },
  { name: "The Bamboo Expert", icon: Leaf },
  { name: "Vinayak Travels", icon: Plane },
  { name: "Call & Fix", icon: Wrench },
  { name: "Propello Innovations Pvt. Ltd.", icon: Rocket }
];

export default function GatewayHero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <>
      <main className="relative min-h-screen pb-24">
        {/* Inline styles for the infinite slider animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12">
          
          {/* --- PART 1: THE GRAND HERO SLIDER --- */}
          <GrandHeroSlider />

          {/* --- PART 1.5: LOGO COMPASS & STATS --- */}
          <div className="text-center max-w-3xl mx-auto mt-20 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground">
                Whether you're running a business or planning your financial future,
                Niveshya Advisory helps you make informed decisions with confidence.
              </p>
          </div>

          {/* N-S-E-W Logo Layout */}
          <div className="relative max-w-2xl mx-auto h-[350px] flex items-center justify-center my-12">
            
            {/* Center Logo */}
            <div className="z-10 h-32 w-32 rounded-full bg-card border shadow-2xl flex items-center justify-center p-4">
              {!imgFailed ? (
                <img 
                  src="/logo.png" 
                  alt="Niveshya Advisory Logo" 
                  className="w-full h-full object-contain"
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <span className="font-bold text-xl">LOGO</span>
              )}
            </div>

            {/* North */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">SME Clients</p>
            </div>

            {/* South */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-2xl font-bold text-primary">10+ Cr</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">AUM</p>
            </div>

            {/* West */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-center">
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium whitespace-nowrap">Claim Settlements</p>
            </div>

            {/* East */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-center">
              <p className="text-2xl font-bold text-primary">150+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium whitespace-nowrap">Retail Investors</p>
            </div>
            
            {/* Connecting faint dashed lines */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
              <div className="absolute w-full h-[1px] border-t border-dashed border-primary"></div>
              <div className="absolute h-full w-[1px] border-l border-dashed border-primary"></div>
            </div>
          </div>
        </div>

        {/* --- PART 2: COMPANIES WORKED WITH SLIDER --- */}
        <div className="w-full py-16 mt-12 bg-card/30 border-y border-border overflow-hidden relative">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Trusted by Great Companies</p>
          </div>
          
          {/* Gradient overlays for smooth entry/exit edges */}
          <div className="absolute left-0 bottom-0 w-32 h-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 bottom-0 w-32 h-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Infinite scrolling track */}
          <div className="whitespace-nowrap flex overflow-hidden">
            <div className="animate-marquee items-center flex gap-16 pr-16">
              
              {/* Set 1 */}
              {trustedCompanies.map((company, idx) => {
                const Icon = company.icon;
                return (
                  <div key={`set1-${idx}`} className="flex items-center gap-4 text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-default">
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                    <span>{company.name}</span>
                  </div>
                );
              })}

              {/* Set 2 (Duplicate for smooth infinite scrolling) */}
              {trustedCompanies.map((company, idx) => {
                const Icon = company.icon;
                return (
                  <div key={`set2-${idx}`} className="flex items-center gap-4 text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-default">
                    <Icon className="w-8 h-8" strokeWidth={2.5} />
                    <span>{company.name}</span>
                  </div>
                );
              })}
              
            </div>
          </div>
        </div>

        {/* --- PART 3: DISTINCT SERVICE ROUTING --- */}
        {/* ADDED ID AND SCROLL MARGIN HERE! */}
        <div id="financial-paths" className="max-w-7xl mx-auto px-6 mt-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Choose Your Financial Path</h2>
            <p className="text-muted-foreground mt-4">Select the specialized advisory division that fits your current goals.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Accounting Route */}
            <Link
              href="/accounting"
              className="group relative overflow-hidden rounded-3xl border bg-card p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="inline-flex rounded-2xl border p-4 mb-8 bg-background">
                <Building2 className="h-10 w-10 text-primary" />
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Accounting & Compliance
              </h2>

              <p className="text-muted-foreground mb-8">
                Accounting, GST Compliance, Payroll Processing,
                Taxation, Financial Reporting and outsourced
                finance operations for growing businesses.
              </p>

              <div className="space-y-3 mb-10 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> Accounting & Bookkeeping</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> GST Filing & Compliance</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> Payroll Management</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> MIS & Financial Reporting</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> Business Compliance Support</div>
              </div>

              <div className="flex items-center font-bold text-primary gap-2 mt-auto">
                Explore Accounting Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Wealth Route */}
            <Link
              href="/wealth"
              className="group relative overflow-hidden rounded-3xl border bg-card p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              <div className="inline-flex rounded-2xl border p-4 mb-8 bg-background">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Wealth Creation
              </h2>

              <p className="text-muted-foreground mb-8">
                Personalized investment planning, mutual funds,
                insurance solutions and retirement strategies
                built around your long-term goals.
              </p>

              <div className="space-y-3 mb-10 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> Mutual Fund Advisory</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> SIP Planning</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> Insurance Solutions</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> Retirement Planning</div>
                <div className="flex items-center gap-2"><span className="text-primary">✓</span> Goal-Based Wealth Creation</div>
              </div>

              <div className="flex items-center font-bold text-primary gap-2 mt-auto">
                Explore Wealth Management
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}