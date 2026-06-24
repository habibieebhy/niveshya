import { ShieldCheck, TrendingUp, Target } from "lucide-react";

export default function WealthHero() {
  return (
    <section id="home" className="relative py-20 lg:py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium mb-8 text-emerald-600 dark:text-emerald-400">
          Wealth Management & Financial Planning
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
          Build Wealth.
          <br />
          <span className="text-emerald-500">Protect What Matters.</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Personalized investment planning, mutual funds,
          insurance solutions and retirement strategies
          designed around your financial goals and life ambitions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Mutual Funds
          </div>
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            SIP Planning
          </div>
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Insurance Advisory
          </div>
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Retirement Planning
          </div>
          <div className="rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Goal-Based Investing
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="rounded-3xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30">
            <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/10 p-4 mb-6 transition-colors hover:bg-emerald-500/15">
              <TrendingUp className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Wealth Creation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Structured investment strategies focused on long-term growth and wealth accumulation.
            </p>
          </div>
          
          <div className="rounded-3xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30">
            <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/10 p-4 mb-6 transition-colors hover:bg-emerald-500/15">
              <ShieldCheck className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Risk Protection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Insurance planning designed to safeguard your family, income and future.
            </p>
          </div>
          
          <div className="rounded-3xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-500/30">
            <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/10 p-4 mb-6 transition-colors hover:bg-emerald-500/15">
              <Target className="h-7 w-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Goal Planning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Personalized roadmaps for education, retirement, home ownership and major life goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}