import { Shield, HeartPulse, Users } from "lucide-react";

export default function InsuranceServices() {
  const services = [
    {
      icon: Shield,
      title: "Term Insurance",
      description:
        "Protect your family's financial future with adequate life cover tailored to your responsibilities and goals.",
    },
    {
      icon: HeartPulse,
      title: "Health Insurance",
      description:
        "Comprehensive health coverage solutions designed to safeguard against rising medical expenses.",
    },
    {
      icon: Users,
      title: "Family Protection Planning",
      description:
        "A holistic approach to securing your loved ones through risk management and financial protection strategies.",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-medium mb-4">
            INSURANCE SOLUTIONS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Protect What
            <br />
            Matters Most.
          </h2>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Wealth creation is only one side of financial planning.
            The other is protecting your family, lifestyle and future
            against unexpected risks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl border p-3 mb-6">
                  <Icon className="h-6 w-6" />
                </div>

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