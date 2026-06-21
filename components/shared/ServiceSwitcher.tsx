import Link from "next/link";

export default function ServiceSwitcher() {
  return (
    <div className="border-b bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-6 text-sm">

        <Link
          href="/"
          className="hover:text-primary transition-colors"
        >
          Home
        </Link>

        <span className="text-muted-foreground">
          |
        </span>

        <Link
          href="/accounting"
          className="hover:text-primary transition-colors"
        >
          Accounting Services
        </Link>

        <span className="text-muted-foreground">
          |
        </span>

        <Link
          href="/wealth"
          className="hover:text-primary transition-colors"
        >
          Wealth Management
        </Link>

      </div>
    </div>
  );
}