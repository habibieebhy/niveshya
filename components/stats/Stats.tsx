import {
  BookOpen,
  FileCheck,
  ShieldCheck,
  Laptop,
} from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Accurate Bookkeeping",
    description:
      "Maintain organized, up-to-date financial records with complete accounting support.",
  },
  {
    icon: FileCheck,
    title: "Timely GST Compliance",
    description:
      "GST return filing, reconciliations, e-invoicing and statutory compliance handled professionally.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Financial Controls",
    description:
      "Strong reconciliation processes for banks, debtors, creditors and inventory management.",
  },
  {
    icon: Laptop,
    title: "Remote Accounting Support",
    description:
      "Cost-effective outsourced accounting services for SMEs, traders and growing businesses.",
  },
];

export default function Stats() {
  return (
    <section className="border-y bg-muted/20 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold tracking-widest text-emerald-600">
            WHY BUSINESSES CHOOSE NIVESHYA
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Professional Accounting Support
            Built On Accuracy & Compliance
          </h2>

          <p className="mt-4 text-muted-foreground">
            Helping businesses maintain financial accuracy,
            meet statutory obligations and improve operational efficiency.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}