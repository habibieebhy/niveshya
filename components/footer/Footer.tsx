"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  // This will be true ONLY on the wealth page
  const isWealthPage = pathname === "/wealth";

  return (
    <footer className="border-t py-10 relative z-10 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 relative">

        {/* LEFT: Brand */}
        <div>
          <h3 className="font-semibold">
            Niveshya
          </h3>
        </div>

        {/* CENTER: Copyright text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
          <p className="text-sm text-muted-foreground hidden sm:block">
            © 2026 Niveshya x Brixta
          </p>
        </div>

        {/* RIGHT: Powered By & Logos */}
        <div className="flex items-center gap-4 z-10">
          {isWealthPage && (
            <>
              <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                POWERED BY :
              </span>
              
              <img 
                src="/policyBazar.jpeg" 
                alt="Policy Bazaar Logo" 
                className="h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
              
              <img 
                src="/NJWealth.jpeg" 
                alt="NJ Wealth Logo" 
                className="h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </>
          )}
        </div>

      </div>
    </footer>
  );
}