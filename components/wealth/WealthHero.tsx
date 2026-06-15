import { ShieldCheck, TrendingUp, Target } from "lucide-react";

export default function WealthHero() {
  return (
    <section className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium mb-8">
          Wealth Management & Financial Planning
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Build Wealth.
          <br />
          Protect What Matters.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Personalized investment planning, mutual funds,
          insurance solutions and retirement strategies
          designed around your financial goals and life ambitions.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <div className="rounded-full border px-4 py-2 text-sm">
            Mutual Funds
          </div>
          
          <div className="rounded-full border px-4 py-2 text-sm">
            SIP Planning
          </div>
          
          <div className="rounded-full border px-4 py-2 text-sm">
            Insurance Advisory
          </div>
          
          <div className="rounded-full border px-4 py-2 text-sm">
            Retirement Planning
          </div>
          
          <div className="rounded-full border px-4 py-2 text-sm">
            Goal-Based Investing
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="rounded-3xl border bg-card p-8">
            <div className="inline-flex rounded-2xl border p-3 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Wealth Creation
            </h3>

            <p className="text-muted-foreground">
              Structured investment strategies focused on long-term growth and wealth accumulation.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-8">
            <div className="inline-flex rounded-2xl border p-3 mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Risk Protection
            </h3>

            <p className="text-muted-foreground">
              Insurance planning designed to safeguard your family, income and future.
            </p>
          </div>

          <div className="rounded-3xl border bg-card p-8">
            <div className="inline-flex rounded-2xl border p-3 mb-4">
              <Target className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Goal Planning
            </h3>

            <p className="text-muted-foreground">
              Personalized roadmaps for education, retirement, home ownership and major life goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}