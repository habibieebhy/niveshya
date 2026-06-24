import { TrendingUp, PiggyBank, Target } from "lucide-react";

export default function InvestmentPlans() {
  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Fund Advisory",
      description: "Curated mutual fund portfolios aligned with your goals and risk profile.",
    },
    {
      icon: PiggyBank,
      title: "SIP Planning",
      description: "Disciplined investing strategies designed for long-term wealth creation.",
    },
    {
      icon: Target,
      title: "SWP Planning",
      description: "Investment plans tailored to retirement, education and life milestones.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 mb-4 uppercase">
            INVESTMENT SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Grow Wealth With Purpose.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 transition-colors hover:bg-emerald-500/15">
                  <Icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}