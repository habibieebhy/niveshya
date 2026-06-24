import { ShieldCheck, Eye, HeartHandshake, TrendingUp } from "lucide-react";

export default function AdvisoryTrust() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Transparency",
      description: "Clear communication, straightforward recommendations and no unnecessary complexity.",
    },
    {
      icon: Eye,
      title: "Objective Guidance",
      description: "Advice focused on your financial goals, risk profile and long-term success.",
    },
    {
      icon: HeartHandshake,
      title: "Client First",
      description: "Every recommendation starts with understanding your needs and priorities.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Focus",
      description: "Building sustainable financial outcomes instead of chasing short-term trends.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 text-white border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-emerald-500 mb-4 uppercase">
            WHY NIVESHYA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Advice Built On Trust.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
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
                className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-emerald-500/50 hover:bg-zinc-900"
              >
                <div className="inline-flex items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 mb-6">
                  <Icon className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {value.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
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