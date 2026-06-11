import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

          <span className="text-lg font-semibold tracking-tight">
            Niveshya
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>

          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Capabilities
          </a>

          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>

        </nav>

        <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            size="sm"
          >
            Sign In
          </Button>

          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Get Started
          </Button>

        </div>

      </div>
    </header>
  );
}