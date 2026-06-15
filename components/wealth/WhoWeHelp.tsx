import {
  Briefcase,
  Building2,
  HeartHandshake,
  Globe,
} from "lucide-react";

export default function WhoWeHelp() {
  const clients = [
    {
      icon: Briefcase,
      title: "Professionals",
      description:
        "Financial planning for salaried individuals seeking long-term wealth creation.",
    },
    {
      icon: Building2,
      title: "Business Owners",
      description:
        "Strategies to protect and grow both personal and business wealth.",
    },
    {
      icon: HeartHandshake,
      title: "Families",
      description:
        "Insurance, education planning and retirement solutions for loved ones.",
    },
    {
      icon: Globe,
      title: "NRIs",
      description:
        "Cross-border investment and wealth planning support.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="text-primary font-medium mb-4">
            WHO WE HELP
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Different Goals.
            <br />
            Different Lives.
            <br />
            One Approach.
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {clients.map((client) => {
            const Icon = client.icon;

            return (
              <div
                key={client.title}
                className="
                  rounded-3xl
                  border
                  p-8
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div className="inline-flex rounded-2xl border p-3 mb-6">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {client.title}
                </h3>

                <p className="text-muted-foreground">
                  {client.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}