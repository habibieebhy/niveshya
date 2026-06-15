import {
  GraduationCap,
  Home,
  Plane,
  Landmark,
} from "lucide-react";

export default function GoalPlanning() {
  const goals = [
    {
      icon: GraduationCap,
      title: "Child Education",
      description:
        "Build a dedicated investment strategy to support future education expenses with confidence.",
    },
    {
      icon: Home,
      title: "Home Ownership",
      description:
        "Plan systematically for down payments, home purchases and long-term property goals.",
    },
    {
      icon: Plane,
      title: "Lifestyle Goals",
      description:
        "Prepare for travel, major purchases and personal aspirations without disrupting financial stability.",
    },
    {
      icon: Landmark,
      title: "Retirement Planning",
      description:
        "Create a sustainable retirement corpus designed to support your desired lifestyle.",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-medium mb-4">
            GOAL-BASED PLANNING
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Goal
            <br />
            Deserves A Plan.
          </h2>

          <p className="max-w-2xl text-lg text-muted-foreground">
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
                className="rounded-3xl border p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex rounded-2xl border p-3 mb-6">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {goal.title}
                </h3>

                <p className="text-muted-foreground">
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