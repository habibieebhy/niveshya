import { GraduationCap, Home, Plane, Landmark } from "lucide-react";

export default function GoalPlanning() {
  const goals = [
    {
      icon: GraduationCap,
      title: "Child Education",
      description: "Build a dedicated investment strategy to support future education expenses with confidence.",
    },
    {
      icon: Home,
      title: "Home Ownership",
      description: "Plan systematically for down payments, home purchases and long-term property goals.",
    },
    {
      icon: Plane,
      title: "Lifestyle Goals",
      description: "Prepare for travel, major purchases and personal aspirations without disrupting financial stability.",
    },
    {
      icon: Landmark,
      title: "Retirement Planning",
      description: "Create a sustainable retirement corpus designed to support your desired lifestyle.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 mb-4 uppercase">
            GOAL-BASED PLANNING
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Every Goal
            <br />
            Deserves A Plan.
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Financial planning isn't about products.
            It's about helping you reach the milestones
            that matter most in your life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <div
                key={goal.title}
                className="rounded-3xl border bg-card p-8 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/10 p-3 mb-6 transition-colors hover:bg-emerald-500/15">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}