"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  
  // This will be true ONLY on the wealth page
  const isWealthPage = pathname === "/wealth";

  return (
    <footer className="border-t bg-background relative z-10 pt-16 pb-8 mt-auto">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* --- TOP SECTION: Links & Brand --- */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Brand & Description (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-4">
              Niveshya
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Expert Wealth Advisory and Accounting Services to help you make informed decisions and achieve your financial goals with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/wealth" className="hover:text-primary transition-colors">
                  Wealth Advisory
                </Link>
              </li>
              <li>
                <Link href="/wealth#insurance-services" className="hover:text-primary transition-colors">
                  Insurance Services
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="hover:text-primary transition-colors">
                  Accounting, Taxation & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Company */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="/landing/aboutPage" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/landing/privacyPage" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/landing/termsPage" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Copyright & Powered By --- */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 border-t pt-8">
          
          {/* Copyright text */}
          <p className="text-sm text-muted-foreground">
            © 2026 Niveshya x Brixta
          </p>

          {/* RIGHT: Powered By & Logos */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-10">
            {isWealthPage && (
              <>
                <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                  POWERED BY :
                </span>
                
                <img 
                  src="/policyBazar.png" 
                  alt="Policy Bazaar Logo" 
                  className="h-10 sm:h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                />
                
                <img 
                  src="/NJWealth.jpeg" 
                  alt="NJ Wealth Logo" 
                  className="h-10 sm:h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                />
              </>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}