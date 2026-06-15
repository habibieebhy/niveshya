import Link from "next/link";
import { Building2, TrendingUp, ArrowRight } from "lucide-react";

export default function GatewayHero() {
  return (
    <main className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur px-4 py-2 text-sm font-medium mb-8">
            Niveshya Advisory
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Financial Clarity.
            <br />
            Business Growth.
            <br />
            Long-Term Wealth.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're running a business or planning your financial future,
            Niveshya Advisory helps you make informed decisions with confidence.
          </p>
        </div>

        {/* Service Selection */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <Link
            href="/business"
            className="group relative overflow-hidden rounded-3xl border bg-card p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

            <div className="inline-flex rounded-2xl border p-4 mb-8">
              <Building2 className="h-10 w-10" />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Business Services
            </h2>

            <p className="text-muted-foreground mb-8">
              Accounting, GST Compliance, Payroll Processing,
              Taxation, Financial Reporting and outsourced
              finance operations for growing businesses.
            </p>

            <div className="space-y-3 mb-10 text-sm text-muted-foreground">
              <div>✓ Accounting & Bookkeeping</div>
              <div>✓ GST Filing & Compliance</div>
              <div>✓ Payroll Management</div>
              <div>✓ MIS & Financial Reporting</div>
              <div>✓ Business Compliance Support</div>
            </div>

            <div className="flex items-center font-semibold gap-2">
              Explore Business Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="/wealth"
            className="group relative overflow-hidden rounded-3xl border bg-card p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

            <div className="inline-flex rounded-2xl border p-4 mb-8">
              <TrendingUp className="h-10 w-10" />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Wealth Management
            </h2>

            <p className="text-muted-foreground mb-8">
              Personalized investment planning, mutual funds,
              insurance solutions and retirement strategies
              built around your long-term goals.
            </p>

            <div className="space-y-3 mb-10 text-sm text-muted-foreground">
              <div>✓ Mutual Fund Advisory</div>
              <div>✓ SIP Planning</div>
              <div>✓ Insurance Solutions</div>
              <div>✓ Retirement Planning</div>
              <div>✓ Goal-Based Wealth Creation</div>
            </div>

            <div className="flex items-center font-semibold gap-2">
              Explore Wealth Management
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Trust Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-muted-foreground mt-2">
              Client-Focused Approach
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">2</h3>
            <p className="text-muted-foreground mt-2">
              Specialized Advisory Divisions
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">∞</h3>
            <p className="text-muted-foreground mt-2">
              Long-Term Financial Vision
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}