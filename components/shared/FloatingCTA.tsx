"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

// 1. Define the props interface to accept a custom link
interface FloatingCTAProps {
  href?: string; 
}

// 2. Set the default href to "#contact" so you don't break existing pages
export default function FloatingCTA({ href = "#contact" }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Look for the contact section on the current page
    const contactSection = document.getElementById("contact");
    
    // If there is no contact section on this page (like the landing page), 
    // it will just return and the CTA will stay visible forever.
    if (!contactSection) return;

    // Set up an observer to hide the CTA when the contact section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If 20% or more of the contact section is visible, hide the button
        setIsVisible(!entry.isIntersecting);
      },
      { root: null, threshold: 0.2 }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes tooltip-loop {
          0%, 70%, 100% { 
            opacity: 0; 
            transform: scale(0.8) translateX(10px); 
          }
          10%, 60% { 
            opacity: 1; 
            transform: scale(1) translateX(0); 
          }
        }
        .animate-tooltip {
          animation: tooltip-loop 6s infinite ease-in-out;
        }
      `}</style>

      {/* Visibility Wrapper */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out md:bottom-10 md:right-10 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-24 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={href} // 3. Use the dynamic href here
          aria-label="Contact Us"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-700 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]"
        >
          <MessageCircle className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />

          {/* Pulsating Glow Effect behind the button */}
          <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60"></span>

          {/* "Ask NOW!!" Looping Text Popup */}
          <span className="animate-tooltip absolute right-full mr-4 flex w-max origin-right items-center justify-center whitespace-nowrap rounded-xl bg-foreground px-4 py-2 text-sm font-bold text-background shadow-2xl">
            Lets Connect!
            {/* Little Triangle Pointing to the Button */}
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent border-l-foreground"></span>
          </span>
        </a>
      </div>
    </>
  );
}