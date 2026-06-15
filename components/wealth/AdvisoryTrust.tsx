import {
  ShieldCheck,
  Eye,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

export default function AdvisoryTrust() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Transparency",
      description:
        "Clear communication, straightforward recommendations and no unnecessary complexity.",
    },
    {
      icon: Eye,
      title: "Objective Guidance",
      description:
        "Advice focused on your financial goals, risk profile and long-term success.",
    },
    {
      icon: HeartHandshake,
      title: "Client First",
      description:
        "Every recommendation starts with understanding your needs and priorities.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Focus",
      description:
        "Building sustainable financial outcomes instead of chasing short-term trends.",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-green-500 font-medium mb-4">
            WHY NIVESHYA
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advice Built On Trust.
          </h2>

          <p className="text-zinc-400 text-lg">
            Financial planning is more than investments.
            It's a relationship built on transparency,
            accountability and long-term commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
              >
                <div className="inline-flex rounded-2xl border border-zinc-700 p-3 mb-6">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {value.title}
                </h3>

                <p className="text-zinc-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}