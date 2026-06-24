import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  FileCheck,
  Landmark,
  Users,
  BarChart3,
  Package,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    description:
      "Complete bookkeeping, ledger management, journal entries, reconciliations and maintenance of accurate financial records.",
  },
  {
    icon: FileCheck,
    title: "GST Compliance & Filing",
    description:
      "GSTR-1, GSTR-3B, GSTR-2B reconciliations, e-invoicing, e-way bills and statutory GST compliance support.",
  },
  {
    icon: Landmark,
    title: "Tax & Statutory Compliance",
    description:
      "TDS, Professional Tax, compliance documentation and support for statutory filing requirements.",
  },
  {
    icon: BarChart3,
    title: "MIS & Financial Reporting",
    description:
      "Management reports, financial summaries and business insights to support informed decision-making.",
  },
  {
    icon: Package,
    title: "Inventory & Stock Accounting",
    description:
      "Inventory tracking, stock accounting, reconciliation and preparation of stock statements.",
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold tracking-widest text-emerald-600">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Comprehensive Accounting &
            Compliance Solutions
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Professional accounting, taxation and compliance
            services designed to help businesses maintain
            financial accuracy and meet regulatory requirements.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg"
              >
                <CardContent className="p-8">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/15">
                    <Icon className="h-7 w-7 text-emerald-600" />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
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