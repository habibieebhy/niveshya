"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  // This will be true ONLY on the wealth page
  const isWealthPage = pathname === "/wealth";

  return (
    <footer className="border-t py-10 relative z-10 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        <div>
          <h3 className="font-semibold">
            Niveshya
          </h3>

          <p className="text-sm text-muted-foreground">
            Investment Intelligence
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-sm text-muted-foreground hidden sm:block">
            © 2026 Niveshya
          </p>
          
          {/* Only render the image if we are on the wealth page */}
          {isWealthPage && (
            <img 
              src="/footer.png" 
              alt="Partner Logos" 
              className="h-14 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>

      </div>
    </footer>
  );
}