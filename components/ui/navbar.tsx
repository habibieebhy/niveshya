"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo - Flex 1 ensures it takes up equal space as the right side */}
        <div className="flex md:flex-1">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Niveshya Advisory"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="font-semibold tracking-tight">
                Niveshya Advisory
              </div>
              <div className="text-xs text-muted-foreground">
                Managing Today. Growing Tomorrow.
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation - Centered perfectly in the middle */}
        <nav className="hidden items-center justify-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground py-2">
              Services
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu - Centered below the button */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="flex flex-col w-56 rounded-2xl border bg-card p-2 shadow-xl">
                <a
                  href="/wealth"
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Wealth Advisory
                </a>
                <a
                  href="/accounting"
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Accounting Services
                </a>
              </div>
            </div>
          </div>

          <a
            href="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center justify-end gap-3 md:flex-1">
          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full border-b border-border/50 bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden shadow-2xl">
          <nav className="flex flex-col gap-6">
            <a
              href="/"
              className="text-lg font-medium text-foreground hover:text-emerald-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>

            {/* Mobile Services Accordion */}
            <div className="flex flex-col gap-4">
              <button 
                className="flex items-center justify-between text-lg font-medium text-foreground hover:text-emerald-500 transition-colors w-full text-left"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-emerald-500/20 ml-2">
                  <a
                    href="/wealth"
                    className="text-base font-medium text-muted-foreground hover:text-emerald-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wealth Advisory
                  </a>
                  <a
                    href="/accounting"
                    className="text-base font-medium text-muted-foreground hover:text-emerald-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Accounting Services
                  </a>
                </div>
              )}
            </div>

            <a
              href="/about"
              className="text-lg font-medium text-foreground hover:text-emerald-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>

            <a
              href="/contact"
              className="text-lg font-medium text-foreground hover:text-emerald-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}