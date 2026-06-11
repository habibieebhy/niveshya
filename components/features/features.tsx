import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  BarChart3,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description:
      "Transform market data into actionable investment insights.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description:
      "Monitor performance, allocation, and risk in real time.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description:
      "Evaluate opportunities with a structured risk framework.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold tracking-widest text-emerald-500">
            CAPABILITIES
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Built For Serious Investors
          </h2>

          <p className="mt-4 text-muted-foreground">
            Powerful tools designed to help investors make
            informed and confident decisions.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
              >
                <CardContent className="p-8">

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Icon className="h-6 w-6 text-emerald-500" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}