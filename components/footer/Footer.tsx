"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  // This will be true ONLY on the wealth page
  const isWealthPage = pathname === "/wealth";

  return (
    <footer className="border-t py-10 relative z-10 bg-background">
      {/* Changed to flex-col on mobile, flex-row on sm+ screens, with a gap for mobile stacking */}
      <div className="mx-auto flex flex-col sm:flex-row max-w-7xl items-center justify-between gap-6 sm:gap-0 px-6 relative">

        {/* LEFT: Brand */}
        <div>
          <h3 className="font-semibold text-xl sm:text-base">
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
        {/* Added flex-wrap and justify-center for a clean mobile wrap */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 z-10">
          {isWealthPage && (
            <>
              <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                POWERED BY :
              </span>
              
              <img 
                src="/policyBazar.png" 
                alt="Policy Bazaar Logo" 
                // Scaled down to h-10 on mobile to prevent overflow, h-14 on desktop
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
    </footer>
  );
}