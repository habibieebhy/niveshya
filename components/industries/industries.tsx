import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Plane,
  Briefcase,
  Building2,
  Store,
  Users,
} from "lucide-react";

const industries = [
  {
    icon: Truck,
    title: "Trading & Distribution",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
  },
  {
    icon: Building2,
    title: "Small & Medium Enterprises",
  },
  {
    icon: Store,
    title: "Proprietorship Firms",
  },
  {
    icon: Users,
    title: "Partnership Firms",
  },
];

export default function Industries() {
  return (
    <section className="bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold tracking-widest text-emerald-600">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Trusted Across Multiple Business Sectors
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Practical accounting, taxation and compliance
            support tailored to the unique needs of different industries.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Card
                key={industry.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
              >
                <CardContent className="flex items-center gap-4 p-8">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>

                  <h3 className="font-semibold">
                    {industry.title}
                  </h3>

                </CardContent>
              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}