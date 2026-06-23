import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
        >
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

        {/* Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>

        </nav>

        {/* Actions */}

        <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <a href="mailto:rashmitasaha2013@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>

          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700"
            asChild
          >
            <a href="tel:+918638834593">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>

        </div>

      </div>
    </header>
  );
}