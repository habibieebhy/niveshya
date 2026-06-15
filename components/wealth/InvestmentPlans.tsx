import {
  TrendingUp,
  PiggyBank,
  Target,
} from "lucide-react";

export default function InvestmentPlans() {
  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Fund Advisory",
      description:
        "Curated mutual fund portfolios aligned with your goals and risk profile.",
    },
    {
      icon: PiggyBank,
      title: "SIP Planning",
      description:
        "Disciplined investing strategies designed for long-term wealth creation.",
    },
    {
      icon: Target,
      title: "Goal-Based Investing",
      description:
        "Investment plans tailored to retirement, education and life milestones.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-primary font-medium mb-4">
            INVESTMENT SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Grow Wealth
            <br />
            With Purpose.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border p-8"
              >
                <Icon className="h-8 w-8 mb-6" />

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">
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