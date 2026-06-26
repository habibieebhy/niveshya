import { Shield, HeartPulse, Users, CarIcon } from "lucide-react";

export default function InsuranceServices() {
  const services = [
    {
      icon: Shield,
      title: "Term Insurance",
      description: "Protect your family's financial future with adequate life cover tailored to your responsibilities and goals.",
    },
    {
      icon: HeartPulse,
      title: "Health Insurance",
      description: "Comprehensive health coverage solutions designed to safeguard against rising medical expenses.",
    },
    {
      icon: Users,
      title: "Family Protection Planning",
      description: "A holistic approach to securing your loved ones through risk management and financial protection strategies.",
    },
    {
      icon: CarIcon,
      title: "Motor Insurance",
      description: "Secure your vehicle's life from unwanted occurences.",
    }
  ];

  return (
    <section id="insurance-services" className="py-20 px-6 bg-muted/20 border-y scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 mb-4 uppercase">
            INSURANCE SOLUTIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Protect What
            <br />
            Matters Most.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wealth creation is only one side of financial planning.
            The other is protecting your family, lifestyle and future
            against unexpected risks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30"
              >
                <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/10 p-3 mb-6 transition-colors hover:bg-emerald-500/15">
                  <Icon className="h-6 w-6 text-emerald-600" />
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